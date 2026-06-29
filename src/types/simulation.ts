// ── RubberForge core domain types ───────────────────────────────────────────
// A learning simulator for industrial rubber sheet manufacturing.
// All ids are string-literal unions so the simulation state machine, seed data,
// and UI stay structurally consistent.

// ── Ingredients ──────────────────────────────────────────────────────────────
export type IngredientId =
  | "polymer"
  | "filler"
  | "process-oil"
  | "protective-additives"
  | "cure-package"
  | "pigment";

export interface Ingredient {
  id: IngredientId;
  category: string;
  displayName: string;
  role: string;
  description: string;
  appearance: string;
  contributesTo: string[];
  colorHint: string;
  /** Visual form rendered in the raw-material room and weighing tray. */
  form: "bale" | "powder" | "liquid" | "granule" | "pellet";
}

// ── Material states ──────────────────────────────────────────────────────────
export type MaterialStateId =
  | "separate-raw"
  | "weighed-batch"
  | "rough-mixed"
  | "smooth-milled"
  | "uncured-sheet"
  | "cured-sheet"
  | "cooled-trimmed"
  | "inspected-final";

export interface MaterialState {
  id: MaterialStateId;
  label: string;
  short: string;
  description: string;
  /** Dominant tone used by the material-state badge and flow particle. */
  tone: string;
}

// ── Stations & process steps ─────────────────────────────────────────────────
export type StationId =
  | "raw-material-room"
  | "weighing-station"
  | "internal-mixer"
  | "two-roll-mill"
  | "calender"
  | "vulcanization"
  | "cooling"
  | "trimming-slitting"
  | "inspection"
  | "finished-roll";

export interface Machine {
  id: StationId;
  name: string;
  shortName: string;
  family: "intake" | "mixing" | "forming" | "curing" | "finishing" | "qa" | "output";
  oneLiner: string;
}

export interface ProcessStep {
  id: StationId;
  sequence: number;
  title: string;
  /** Primary verb shown on the action button to advance from this step. */
  actionLabel: string;
  machineId: StationId;
  inputStateId: MaterialStateId;
  outputStateId: MaterialStateId;
  // Educational content (authored + accuracy-verified).
  purpose: string;
  inputMaterial: string;
  outputMaterial: string;
  physicalChange: string;
  whyItMatters: string;
  commonDefects: string[];
  learningInsight: string;
  safetyNote: string;
  /** Short narration written to the process log when this step activates. */
  visualDescription: string;
}

// ── Defects ──────────────────────────────────────────────────────────────────
export type DefectId =
  | "poor-dispersion"
  | "trapped-air"
  | "uneven-thickness"
  | "under-cure"
  | "surface-contamination"
  | "edge-defects";

export type Severity = "low" | "medium" | "high";

export interface Defect {
  id: DefectId;
  name: string;
  visualSymptom: string;
  likelyProcessSource: string;
  explanation: string;
  preventionConcept: string;
  relatedStationId: StationId;
  relatedStationName: string;
  severity: Severity;
}

// ── Quiz ─────────────────────────────────────────────────────────────────────
export interface QuizOption {
  id: string;
  text: string;
  correct: boolean;
}

export interface QuizQuestion {
  id: string;
  afterStageId: StationId;
  question: string;
  options: QuizOption[];
  explanation: string;
}

// ── Simulation state machine ─────────────────────────────────────────────────
export type Phase = "ready" | "running" | "complete";

export interface ProcessLogEntry {
  id: number;
  stepId: StationId | "system";
  message: string;
  kind: "info" | "action" | "transform" | "alert" | "success";
}

export interface SimState {
  phase: Phase;
  /** Index into the ordered process steps for the active station. */
  activeIndex: number;
  /** Stations whose work has completed. */
  completedSteps: StationId[];
  /** Ingredient categories the user has added to the weighing tray. */
  batch: IngredientId[];
  /** Current material state id. */
  materialStateId: MaterialStateId;
  /** True while a station's transformation animation is playing. */
  transforming: boolean;
  log: ProcessLogEntry[];
  /** Quiz ids answered correctly (Training Mode only). */
  passedQuizzes: string[];
  /** Quiz currently surfaced, if any. Only ever set when trainingMode is on. */
  activeQuizId: string | null;
  /**
   * Optional Training Mode. OFF by default: the default factory experience runs
   * end to end with no knowledge-check gates, only non-blocking factory
   * intelligence updates. When on, optional knowledge checks surface per station.
   */
  trainingMode: boolean;
}

export type SimAction =
  | { type: "ADD_INGREDIENT"; id: IngredientId }
  | { type: "REMOVE_INGREDIENT"; id: IngredientId }
  | { type: "ADD_ALL_INGREDIENTS" }
  | { type: "ADVANCE" }
  | { type: "TRANSFORM_DONE" }
  | { type: "PASS_QUIZ"; quizId: string }
  | { type: "DISMISS_QUIZ" }
  | { type: "SET_TRAINING"; on: boolean }
  | { type: "RESET" };
