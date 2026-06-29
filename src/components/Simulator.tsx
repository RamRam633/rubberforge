"use client";

import { useEffect, useReducer, useState } from "react";
import type { SimState } from "@/types/simulation";
import { AnimatePresence, motion } from "framer-motion";
import {
  simReducer,
  initialSimState,
  canAdvance,
  isBatchComplete,
} from "@/lib/simulationState";
import { processSteps, WEIGHING_INDEX } from "@/lib/processData";
import { quizQuestions } from "@/lib/quizData";
import { TRANSFORM_MS } from "@/lib/timing";
import { ProcessTimeline } from "./ProcessTimeline";
import { IngredientInventory } from "./IngredientInventory";
import { BatchPanel } from "./BatchPanel";
import { MaterialStateBadge } from "./MaterialStateBadge";
import { FactoryStage } from "./factory/FactoryStage";
import { LearningPanel } from "./LearningPanel";
import { LayerToggleBar } from "./factory/LayerToggleBar";
import { StationLayerPanel } from "./factory/StationLayerPanel";
import { StationQMSOverlay } from "./qms/StationQMSOverlay";
import { ProcessLog } from "./ProcessLog";
import { QuizCard } from "./QuizCard";
import { CompletionModal } from "./CompletionModal";
import { canEditBatch } from "@/lib/simulationState";
import type { FactoryLayerId } from "@/types/factoryPlatform";
import { ArrowRight, Loader2, RotateCcw, Layers, ListChecks, FlaskConical, Search, ShieldCheck, GraduationCap } from "lucide-react";

type LensId = FactoryLayerId | "qms";

export function Simulator() {
  const [state, dispatch] = useReducer(simReducer, initialSimState);
  const [completionClosed, setCompletionClosed] = useState(false);
  const [layer, setLayer] = useState<LensId>("process");

  const step = processSteps[state.activeIndex];

  // Drive the transform animation to completion, in sync with the viewport.
  useEffect(() => {
    if (!state.transforming) return;
    const t = setTimeout(() => dispatch({ type: "TRANSFORM_DONE" }), TRANSFORM_MS);
    return () => clearTimeout(t);
  }, [state.transforming]);

  const activeQuiz = state.activeQuizId
    ? quizQuestions.find((q) => q.id === state.activeQuizId) ?? null
    : null;

  const atWeighingIncomplete = state.activeIndex === WEIGHING_INDEX && !isBatchComplete(state.batch);
  const isComplete = state.phase === "complete";
  const showCompletion = isComplete && !state.activeQuizId && !completionClosed;

  const actionLabel = isComplete
    ? "View Completion Summary"
    : state.transforming
      ? "Processing"
      : step.actionLabel;

  function handleAction() {
    if (isComplete) {
      setCompletionClosed(false);
      return;
    }
    dispatch({ type: "ADVANCE" });
  }

  function handleReset() {
    dispatch({ type: "RESET" });
    setCompletionClosed(false);
  }

  const hint = atWeighingIncomplete
    ? "Load all six ingredient categories onto the tray to build a complete batch before mixing."
    : isComplete
      ? "Line complete. Review your completion summary or reset to run another batch."
      : step.purpose;

  return (
    <div className="mx-auto max-w-[1600px] px-3 pb-6 pt-4 sm:px-5">
      {/* Command-center header */}
      <div className="mb-3 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-violet-300" />
            <span className="kicker-violet">Virtual factory command center</span>
          </div>
          <h1 className="mt-0.5 font-display text-2xl font-semibold text-ink sm:text-[26px]">
            Run the Rubber Sheet Line
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <LineProgress state={state} />
          <button
            onClick={() => dispatch({ type: "SET_TRAINING", on: !state.trainingMode })}
            aria-pressed={state.trainingMode}
            title="Optional knowledge checks per station. Off by default."
            className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-[12px] font-medium transition ${
              state.trainingMode ? "border-violet-500/50 bg-violet-500/15 text-violet-200" : "border-line text-ink-muted hover:border-line-strong"
            }`}
          >
            <GraduationCap className="h-3.5 w-3.5" /> Training mode {state.trainingMode ? "on" : "off"}
          </button>
          <button onClick={handleReset} className="btn-ghost text-sm">
            <RotateCcw className="h-4 w-4" /> Reset line
          </button>
        </div>
      </div>

      {/* Process timeline */}
      <div className="mb-3">
        <ProcessTimeline state={state} />
      </div>

      {/* Factory layer lens */}
      <div className="mb-3 panel flex flex-col gap-2 px-3 py-2.5 sm:flex-row sm:items-center sm:gap-3">
        <span className="label-mono shrink-0 text-[10px] text-ink-faint">Factory layer</span>
        <LayerToggleBar active={layer} onChange={(l) => setLayer(l)} />
        <button
          onClick={() => setLayer("qms")}
          aria-pressed={layer === "qms"}
          title="ISO 9001-aligned QMS lens"
          className="inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[12px] font-medium transition sm:ml-auto"
          style={layer === "qms" ? { borderColor: "#a855f7", backgroundColor: "#a855f71f", color: "#a855f7" } : { borderColor: "rgba(199,210,254,0.18)", color: "#9ea4d6" }}
        >
          <ShieldCheck className="h-3.5 w-3.5" style={{ color: "#a855f7" }} /> QMS
        </button>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[300px_minmax(0,1fr)_350px]">
        {/* Left: inventory + batch + material state */}
        <div className="flex flex-col gap-3">
          <IngredientInventory
            batch={state.batch}
            canEdit={canEditBatch(state)}
            onAdd={(id) => dispatch({ type: "ADD_INGREDIENT", id })}
            onRemove={(id) => dispatch({ type: "REMOVE_INGREDIENT", id })}
            onAddAll={() => dispatch({ type: "ADD_ALL_INGREDIENTS" })}
          />
          <BatchPanel batch={state.batch} />
          <MaterialStateBadge stateId={state.materialStateId} detailed />
        </div>

        {/* Center: factory scene + action bar */}
        <div className="flex flex-col gap-3">
          <FactoryStage state={state} />

          {/* Action bar */}
          <div className="panel flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <div className="label-mono mb-0.5">Next action</div>
              <p className="text-[13px] leading-snug text-ink-muted">{hint}</p>
            </div>
            <button
              onClick={handleAction}
              disabled={!isComplete && (!canAdvance(state) || state.transforming)}
              className="btn-amber shrink-0 text-sm"
            >
              {state.transforming ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : isComplete ? (
                <Search className="h-4 w-4" />
              ) : null}
              {actionLabel}
              {!state.transforming && !isComplete && <ArrowRight className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Right: layer-aware station inspector */}
        <div className="min-h-[520px] lg:h-[calc(100vh-180px)] lg:min-h-0">
          {layer === "process" ? (
            <LearningPanel step={step} transforming={state.transforming} />
          ) : layer === "qms" ? (
            <StationQMSOverlay stationId={step.id} />
          ) : (
            <StationLayerPanel stationId={step.id} layer={layer} />
          )}
        </div>
      </div>

      {/* Process log */}
      <div className="mt-3 panel h-[150px] px-4 py-3">
        <ProcessLog log={state.log} />
      </div>

      {/* Quiz checkpoint overlay */}
      <AnimatePresence>
        {activeQuiz && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
            >
              <QuizCard
                question={activeQuiz}
                label="Knowledge check · training mode"
                onComplete={() => dispatch({ type: "PASS_QUIZ", quizId: activeQuiz.id })}
                onSkip={() => dispatch({ type: "DISMISS_QUIZ" })}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Completion modal */}
      <AnimatePresence>
        {showCompletion && (
          <CompletionModal state={state} onReset={handleReset} onClose={() => setCompletionClosed(true)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function LineProgress({ state }: { state: SimState }) {
  const m1 = isBatchComplete(state.batch);
  const m2 = state.phase === "complete";
  // Factory milestones, not course missions.
  const missions = [
    { icon: ListChecks, label: "Batch staged", done: m1 },
    { icon: FlaskConical, label: "Sheet produced", done: m2 },
    { icon: Search, label: "QA & release", done: false, locked: !m2 },
  ];
  return (
    <div className="flex items-center gap-1.5">
      {missions.map((m) => {
        const Icon = m.icon;
        return (
          <div
            key={m.label}
            className={`flex items-center gap-1.5 rounded-md border px-2 py-1.5 text-[11px] ${
              m.done
                ? "border-pass/40 bg-pass/10 text-pass"
                : (m as { locked?: boolean }).locked
                  ? "border-line/60 bg-base-850/50 text-ink-faint"
                  : "border-line bg-base-700/50 text-ink-muted"
            }`}
            title={m.label}
          >
            <Icon className="h-3.5 w-3.5" />
            <span className="hidden xl:inline">{m.label}</span>
          </div>
        );
      })}
    </div>
  );
}
