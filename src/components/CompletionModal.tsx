"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { SimState } from "@/types/simulation";
import { materialStateOrder, materialStates } from "@/lib/materialData";
import { processSteps } from "@/lib/processData";
import { defects } from "@/lib/defectData";
import { useFactoryRun } from "@/components/run/RunProvider";
import { useScrollLock } from "@/lib/useScrollLock";
import { RotateCcw, Search, CircleCheck, X, FlaskConical, FileOutput, FileText } from "lucide-react";

const KEY_TAKEAWAYS = [
  "Mixing builds true dispersion: ingredients become one uniform compound, and curatives wait because mixing makes heat.",
  "Calendering forms geometry only: it sets thickness and surface, but the rubber is still uncured and reworkable.",
  "Vulcanization is the irreversible step: heat and the cure package crosslink the chains into elastic rubber.",
  "Inspection confirms quality and points back to the station where any defect was actually born.",
];

export function CompletionModal({
  state,
  onReset,
  onClose,
}: {
  state: SimState;
  onReset: () => void;
  onClose: () => void;
}) {
  const { startRun, setStage } = useFactoryRun();
  useScrollLock(true);
  function sendToLab() {
    startRun("rubber-sheet", "epdm");
    setStage("qa");
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.94, opacity: 0, y: 12 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        className="panel relative max-h-[88vh] w-full max-w-2xl overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-md p-1.5 text-ink-faint transition hover:bg-base-700 hover:text-ink"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="border-b border-line bg-gradient-to-b from-molten-500/10 to-transparent px-6 py-5">
          <div className="flex items-center gap-2 text-molten-300">
            <CircleCheck className="h-4 w-4" />
            <span className="label-mono text-molten-300">Production run complete</span>
          </div>
          <h2 className="mt-1.5 font-display text-2xl font-semibold text-ink">
            EPDM rubber sheet produced and released
          </h2>
          <p className="mt-1 text-sm text-ink-muted">
            From six raw ingredient categories to a finished, inspected, wound roll: every station ran in sequence.
          </p>
        </div>

        <div className="space-y-5 px-6 py-5">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-2.5">
            <Stat value={`${state.completedSteps.length}`} label="Stations run" />
            <Stat value={`${materialStateOrder.length}`} label="Material states" />
            {state.trainingMode ? (
              <Stat value={`${state.passedQuizzes.length}`} label="Knowledge checks" />
            ) : (
              <Stat value={`${state.completedSteps.length}`} label="Thread records" />
            )}
          </div>

          {/* Material path */}
          <div>
            <div className="label-mono mb-2">Material transformation path</div>
            <div className="flex flex-wrap items-center gap-x-1 gap-y-1.5">
              {materialStateOrder.map((id, i) => (
                <span key={id} className="flex items-center gap-1">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-base-700/60 px-2 py-0.5">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: materialStates[id].tone }} />
                    <span className="text-[11px] text-ink-muted">{materialStates[id].short}</span>
                  </span>
                  {i < materialStateOrder.length - 1 && <span className="text-ink-faint">→</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Run summary */}
          <div>
            <div className="label-mono mb-2">Process summary</div>
            <ul className="space-y-1.5">
              {KEY_TAKEAWAYS.map((t) => (
                <li key={t} className="flex items-start gap-2 text-[13px] leading-relaxed text-ink-muted">
                  <CircleCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-pass" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Defects screened */}
          <div>
            <div className="label-mono mb-2">Common defects screened</div>
            <div className="flex flex-wrap gap-1.5">
              {defects.map((d) => (
                <span key={d.id} className="chip border-pass/25 text-ink-muted">
                  <CircleCheck className="h-3 w-3 text-pass" />
                  {d.name.split(" (")[0]}
                </span>
              ))}
            </div>
          </div>

          {/* Steps recap */}
          <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-5">
            {processSteps.map((s, i) => (
              <div key={s.id} className="panel-tight px-2 py-1.5 text-center">
                <div className="font-mono text-[10px] text-ink-faint">{String(i + 1).padStart(2, "0")}</div>
                <div className="text-[10.5px] leading-tight text-ink-muted">{s.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Handoff: the sample moves downstream */}
        <div className="border-t border-line bg-gradient-to-r from-violet-500/[0.08] to-transparent px-6 py-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="font-display text-sm font-semibold text-ink">Send this run downstream</div>
              <p className="text-[12px] text-ink-muted">
                Take the inspected sample to the QA Lab, generate a factory output, or build an RFQ package.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              <Link href="/qa-lab" onClick={sendToLab} className="btn-primary text-sm">
                <FlaskConical className="h-4 w-4" /> Send sample to QA Lab
              </Link>
              <Link href="/outputs" className="btn-ghost text-sm">
                <FileOutput className="h-4 w-4" /> Generate output
              </Link>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-2 border-t border-line px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/quote?product=rubber-sheet&material=epdm&from=simulator" className="inline-flex items-center gap-1.5 text-[12px] text-ink-faint hover:text-ink-muted">
            <FileText className="h-3.5 w-3.5" /> Build an RFQ package from this run
          </Link>
          <div className="flex gap-2">
            <button onClick={onReset} className="btn-ghost text-sm">
              <RotateCcw className="h-4 w-4" /> Run again
            </button>
            <Link href="/defects" className="btn-ghost text-sm">
              <Search className="h-4 w-4" /> Defect Detective
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="panel-tight px-3 py-2.5 text-center">
      <div className="font-display text-2xl font-semibold text-molten-300">{value}</div>
      <div className="label-mono mt-0.5">{label}</div>
    </div>
  );
}
