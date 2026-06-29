"use client";

import { useState } from "react";
import { nonconformanceData } from "@/lib/nonconformanceData";
import { capaWorkflow } from "@/lib/capaWorkflow";
import { clauseShort, statusClass } from "@/lib/qmsUi";
import { StatusChip } from "./QMSBadge";
import { AlertTriangle, ArrowRight, ShieldQuestion, X } from "lucide-react";

export function CAPAWorkflowPanel() {
  return (
    <div className="panel-raised p-4">
      <div className="flex items-center gap-2">
        <ShieldQuestion className="h-4 w-4 text-violet-300" />
        <span className="kicker-violet">CAPA workflow (clause 10.2)</span>
      </div>
      <div className="mt-3 flex flex-col gap-1 lg:flex-row lg:items-stretch">
        {capaWorkflow.map((s, i) => (
          <div key={s.step} className="flex flex-1 items-stretch gap-1">
            <div className="flex-1 rounded-lg border border-line bg-base-850/40 p-2.5">
              <div className="flex items-center gap-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-violet-500/40 bg-violet-500/15 font-mono text-[10px] text-violet-200">{i + 1}</span>
                <span className="text-[12px] font-semibold text-ink">{s.step}</span>
              </div>
              <p className="mt-1 text-[10.5px] leading-relaxed text-ink-faint">{s.description}</p>
            </div>
            {i < capaWorkflow.length - 1 && <div className="flex items-center"><ArrowRight className="h-3.5 w-3.5 shrink-0 rotate-90 text-ink-faint lg:rotate-0" /></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export function NonconformanceBoard() {
  const [sel, setSel] = useState<(typeof nonconformanceData)[number] | null>(null);
  const counts = nonconformanceData.reduce<Record<string, number>>((a, n) => { a[n.status] = (a[n.status] || 0) + 1; return a; }, {});

  return (
    <div className="flex flex-col gap-4">
      <CAPAWorkflowPanel />

      <div>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-molten-300" />
          <span className="kicker-violet">Nonconformance log (demo)</span>
          <div className="ml-auto flex gap-1.5">
            {Object.entries(counts).map(([k, v]) => <span key={k} className={`chip ${statusClass(k)}`}>{v} {k}</span>)}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {nonconformanceData.map((n) => (
            <button key={n.id} onClick={() => setSel(n)} className="interactive-card flex flex-col p-3.5 text-left">
              <div className="flex items-start justify-between gap-2">
                <span className="font-mono text-[10px] text-ink-faint">{n.id.toUpperCase()}</span>
                <StatusChip status={n.severity} />
              </div>
              <h3 className="mt-1 font-display text-[13px] font-semibold leading-tight text-ink">{n.title}</h3>
              <p className="mt-1 flex-1 text-[11px] text-ink-faint">{n.detectedAt}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="chip border-line text-ink-faint">{n.disposition}</span>
                <StatusChip status={n.status} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {sel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm" onClick={() => setSel(null)}>
          <div className="panel-raised w-full max-w-lg p-5" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="font-mono text-[10px] text-ink-faint">{sel.id.toUpperCase()} · demo NCR</span>
                <h3 className="mt-0.5 font-display text-[16px] font-semibold text-ink">{sel.title}</h3>
              </div>
              <button onClick={() => setSel(null)} aria-label="Close" className="rounded-md border border-line p-1.5 text-ink-faint hover:text-ink"><X className="h-4 w-4" /></button>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <StatusChip status={sel.severity} />
              <span className="chip border-line text-ink-faint">{sel.disposition}</span>
              <StatusChip status={sel.status} />
              <span className="chip border-line text-ink-faint">{clauseShort(sel.relatedClause)}</span>
            </div>
            <dl className="mt-3 space-y-2 text-[12px] leading-relaxed text-ink-muted">
              <p><span className="text-ink-faint">Detected at. </span>{sel.detectedAt} ({sel.processArea})</p>
              <p><span className="text-ink-faint">Containment. </span>{sel.containment}</p>
              <p><span className="text-ink-faint">Root cause (demo). </span>{sel.rootCausePlaceholder}</p>
              <p><span className="text-ink-faint">Corrective action (demo). </span>{sel.correctiveActionPlaceholder}</p>
              <p><span className="text-ink-faint">Owner. </span>{sel.owner}{sel.linkedDefect && sel.linkedDefect !== "n/a" ? ` · linked defect: ${sel.linkedDefect}` : ""}</p>
            </dl>
          </div>
        </div>
      )}
    </div>
  );
}

/** A single corrective-action card, exported for reuse. */
export function CorrectiveActionCard({ ncrId }: { ncrId: string }) {
  const n = nonconformanceData.find((x) => x.id === ncrId);
  if (!n) return null;
  return (
    <div className="panel p-3.5">
      <span className="font-mono text-[10px] text-ink-faint">{n.id.toUpperCase()}</span>
      <h3 className="mt-0.5 font-display text-[13px] font-semibold text-ink">{n.title}</h3>
      <p className="mt-1 text-[11.5px] text-ink-muted"><span className="text-ink-faint">Corrective action (demo). </span>{n.correctiveActionPlaceholder}</p>
    </div>
  );
}
