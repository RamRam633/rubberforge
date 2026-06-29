import type {
  ProcessLogEntry,
  SimAction,
  SimState,
  StationId,
} from "@/types/simulation";
import {
  LAST_STEP_INDEX,
  WEIGHING_INDEX,
  processSteps,
} from "./processData";
import { ALL_INGREDIENT_IDS, ingredientsById } from "./ingredientData";
import { materialStates } from "./materialData";
import { quizByStage } from "./quizData";
import { stationFactoryNotes } from "./stationFactoryNotes";

export const initialSimState: SimState = {
  phase: "ready",
  activeIndex: 0,
  completedSteps: [],
  batch: [],
  materialStateId: "separate-raw",
  transforming: false,
  passedQuizzes: [],
  activeQuizId: null,
  trainingMode: false,
  log: [
    {
      id: 1,
      stepId: "system",
      message: "Factory online. Running the EPDM rubber sheet line, raw materials to finished roll.",
      kind: "info",
    },
  ],
};

function nextLogId(state: SimState): number {
  return state.log.length ? state.log[state.log.length - 1].id + 1 : 1;
}

function withLog(
  state: SimState,
  entries: Array<Omit<ProcessLogEntry, "id">>,
): ProcessLogEntry[] {
  let id = nextLogId(state);
  const next = entries.map((e) => ({ ...e, id: id++ }));
  // Keep the log bounded so it never grows without limit.
  return [...state.log, ...next].slice(-60);
}

export function isBatchComplete(batch: SimState["batch"]): boolean {
  return ALL_INGREDIENT_IDS.every((id) => batch.includes(id));
}

/** Ingredients can be loaded onto the tray in the raw room and weighing station. */
export function canEditBatch(state: SimState): boolean {
  return (
    !state.transforming &&
    state.phase !== "complete" &&
    state.activeIndex <= WEIGHING_INDEX
  );
}

/** Whether the action button can advance the line from the current step. */
export function canAdvance(state: SimState): boolean {
  if (state.transforming || state.phase === "complete") return false;
  if (state.activeQuizId) return false; // an open checkpoint blocks advancement
  if (state.activeIndex >= LAST_STEP_INDEX) return false;
  if (state.activeIndex === WEIGHING_INDEX && !isBatchComplete(state.batch)) return false;
  return true;
}

export function simReducer(state: SimState, action: SimAction): SimState {
  switch (action.type) {
    case "ADD_INGREDIENT": {
      if (!canEditBatch(state)) return state;
      if (state.batch.includes(action.id)) return state;
      const ing = ingredientsById[action.id];
      return {
        ...state,
        phase: "running",
        batch: [...state.batch, action.id],
        log: withLog(state, [
          {
            stepId: "weighing-station",
            message: `Loaded ${ing.displayName} (${ing.category}) onto the weigh tray.`,
            kind: "action",
          },
        ]),
      };
    }

    case "REMOVE_INGREDIENT": {
      if (!canEditBatch(state)) return state;
      if (!state.batch.includes(action.id)) return state;
      const ing = ingredientsById[action.id];
      return {
        ...state,
        batch: state.batch.filter((id) => id !== action.id),
        log: withLog(state, [
          { stepId: "weighing-station", message: `Removed ${ing.displayName} from the tray.`, kind: "info" },
        ]),
      };
    }

    case "ADD_ALL_INGREDIENTS": {
      if (!canEditBatch(state)) return state;
      if (isBatchComplete(state.batch)) return state;
      return {
        ...state,
        phase: "running",
        batch: [...ALL_INGREDIENT_IDS],
        log: withLog(state, [
          { stepId: "weighing-station", message: "Loaded all six ingredient categories onto the tray.", kind: "action" },
        ]),
      };
    }

    case "ADVANCE": {
      if (!canAdvance(state)) return state;
      const step = processSteps[state.activeIndex];
      return {
        ...state,
        phase: "running",
        transforming: true,
        log: withLog(state, [
          { stepId: step.id, message: `${step.actionLabel}. ${step.visualDescription}`, kind: "action" },
        ]),
      };
    }

    case "TRANSFORM_DONE": {
      if (!state.transforming) return state;
      const step = processSteps[state.activeIndex];
      const newIndex = Math.min(state.activeIndex + 1, LAST_STEP_INDEX);
      const reachedEnd = newIndex >= LAST_STEP_INDEX;

      // On reaching the end, also mark the terminal finished-roll step done so
      // every surface agrees the full 10-station line ran.
      const toComplete = reachedEnd ? [step.id, processSteps[LAST_STEP_INDEX].id] : [step.id];
      const completedSteps = toComplete.reduce<StationId[]>(
        (acc, id) => (acc.includes(id) ? acc : [...acc, id]),
        state.completedSteps,
      );

      const materialChanged = step.outputStateId !== state.materialStateId;
      const newMaterial = materialStates[step.outputStateId];

      // Quizzes only ever surface in optional Training Mode. The default
      // experience never gates on a knowledge check.
      const quiz = state.trainingMode ? quizByStage[step.id] : undefined;
      const openQuiz = quiz && !state.passedQuizzes.includes(quiz.id) ? quiz.id : null;

      const logEntries: Array<Omit<ProcessLogEntry, "id">> = [];
      if (materialChanged) {
        logEntries.push({
          stepId: step.id,
          message: `Material state advanced: ${newMaterial.label}.`,
          kind: "transform",
        });
      }
      // Non-blocking factory-intelligence update for the station that just ran.
      const note = stationFactoryNotes[step.id];
      if (note) {
        logEntries.push({
          stepId: step.id,
          message: `${step.title} · ${note.kind}: ${note.message}`,
          kind: "info",
        });
      }
      if (reachedEnd) {
        logEntries.push({
          stepId: "finished-roll",
          message: "Finished roll released. EPDM rubber sheet complete and traceable.",
          kind: "success",
        });
      }

      return {
        ...state,
        transforming: false,
        activeIndex: newIndex,
        completedSteps,
        materialStateId: step.outputStateId,
        phase: reachedEnd ? "complete" : "running",
        activeQuizId: openQuiz,
        log: withLog(state, logEntries),
      };
    }

    case "PASS_QUIZ": {
      if (state.passedQuizzes.includes(action.quizId)) {
        return { ...state, activeQuizId: null };
      }
      return {
        ...state,
        passedQuizzes: [...state.passedQuizzes, action.quizId],
        activeQuizId: null,
        log: withLog(state, [
          { stepId: "system", message: "Checkpoint passed. Concept confirmed.", kind: "success" },
        ]),
      };
    }

    case "DISMISS_QUIZ":
      return { ...state, activeQuizId: null };

    case "SET_TRAINING":
      // Turning Training Mode off also dismisses any open knowledge check.
      return { ...state, trainingMode: action.on, activeQuizId: action.on ? state.activeQuizId : null };

    case "RESET":
      return {
        ...initialSimState,
        trainingMode: state.trainingMode,
        log: [
          {
            id: 1,
            stepId: "system",
            message: "Line reset. Raw materials restaged for a new batch.",
            kind: "info",
          },
        ],
      };

    default:
      return state;
  }
}

// ── Selectors ────────────────────────────────────────────────────────────────
export function getCurrentStep(state: SimState) {
  return processSteps[state.activeIndex];
}

export function stepStatus(
  state: SimState,
  stepId: StationId,
): "done" | "active" | "locked" {
  if (state.completedSteps.includes(stepId)) return "done";
  if (processSteps[state.activeIndex].id === stepId) return "active";
  return "locked";
}
