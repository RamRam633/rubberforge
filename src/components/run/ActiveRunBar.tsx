"use client";

import Link from "next/link";
import { useFactoryRun } from "./RunProvider";
import { runThread } from "@/lib/runEngine";
import { statusClass, prettyStatus } from "@/lib/qmsUi";
import { GitBranch, ArrowRight, Factory, FlaskConical, CircleCheck, Play, X } from "lucide-react";

const STAGE = {
  production: { label: "On the production floor", Icon: Factory, color: "#d97706" },
  qa: { label: "In the QA Lab", Icon: FlaskConical, color: "#0891b2" },
  released: { label: "Released", Icon: CircleCheck, color: "#22c55e" },
} as const;

/**
 * Surfaces the active shared factory run, the same lot/batch/cure/roll/sample
 * IDs flowing across the production floor, QA Lab, and outputs.
 */
export function ActiveRunBar({ startable = false }: { startable?: boolean }) {
  const { run, ready, startRun, clearRun } = useFactoryRun();
  if (!ready) return null;

  if (!run) {
    if (!startable) return null;
    return (
      <div className="panel flex flex-wrap items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-2">
          <GitBranch className="h-4 w-4 text-violet-300" />
          <p className="text-[12.5px] text-ink-muted">No active run. Start one to carry a sample across the factory.</p>
        </div>
        <button onClick={() => startRun("rubber-sheet", "epdm")} className="btn-primary text-[12.5px]">
          <Play className="h-3.5 w-3.5" /> Start a demo run
        </button>
      </div>
    );
  }

  const stage = STAGE[run.stage];
  const StageIcon = stage.Icon;
  const thread = runThread(run);

  return (
    <div className="panel-raised p-3.5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-violet-300">
            <GitBranch className="h-3.5 w-3.5" /> {run.runId}
          </span>
          <span className="chip border-line text-ink-muted">{run.productName}</span>
          <span className="chip" style={{ borderColor: "#7c3aed55", color: "#7c3aed" }}>{run.materialAbbr}</span>
          <span className="chip inline-flex items-center gap-1" style={{ borderColor: `${stage.color}55`, color: stage.color }}>
            <StageIcon className="h-3 w-3" /> {stage.label}
          </span>
          {run.releaseStatus && <span className={`chip ${statusClass(run.releaseStatus)}`}>{prettyStatus(run.releaseStatus)}</span>}
        </div>
        <button onClick={clearRun} className="inline-flex items-center gap-1 text-[11px] text-ink-faint hover:text-ink" title="Clear the active run">
          <X className="h-3 w-3" /> clear run
        </button>
      </div>

      <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
        {thread.map((t, i) => (
          <span key={t.id} className="flex items-center gap-1.5">
            <span className="rounded-md border border-line bg-base-850/50 px-2 py-1 text-[11px]" title={t.label}>
              <span className="text-ink-faint">{t.label.split(" ")[0]} </span>
              <span className="font-mono text-cyan-300" style={{ color: "#0891b2" }}>{t.id}</span>
            </span>
            {i < thread.length - 1 && <ArrowRight className="h-3 w-3 text-ink-faint" />}
          </span>
        ))}
      </div>

      <div className="mt-2.5 flex flex-wrap gap-2">
        <Link href="/qa-lab" className="btn-ghost text-[11.5px]"><FlaskConical className="h-3.5 w-3.5" /> QA Lab</Link>
        <Link href="/outputs" className="btn-ghost text-[11.5px]"><ArrowRight className="h-3.5 w-3.5" /> Outputs</Link>
      </div>
    </div>
  );
}
