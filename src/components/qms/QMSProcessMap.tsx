"use client";

import { useState } from "react";
import { useScrollLock } from "@/lib/useScrollLock";
import { qmsProcessMap } from "@/lib/qmsProcessMap";
import { clauseShort } from "@/lib/qmsUi";
import type { ProcessGroup, QmsProcess } from "@/types/qms";
import { Workflow, ArrowRight, User, X } from "lucide-react";

const GROUPS: { id: ProcessGroup; label: string; desc: string; accent: string }[] = [
  { id: "core", label: "Core processes", desc: "Customer requirement to delivery", accent: "#d97706" },
  { id: "support", label: "Support processes", desc: "Document control, calibration, audit, CAPA", accent: "#2563eb" },
  { id: "management", label: "Management processes", desc: "Policy, objectives, risk, context", accent: "#7c3aed" },
];

export function QMSProcessMap() {
  const [sel, setSel] = useState<QmsProcess | null>(null);
  useScrollLock(sel !== null);

  return (
    <div>
      <div className="panel-raised mb-4 flex flex-wrap items-center justify-center gap-2 p-3 text-[11.5px] text-ink-muted">
        {["Customer requirement", "Process planning", "Production", "Quality release", "Feedback", "Improvement"].map((s, i, a) => (
          <span key={s} className="flex items-center gap-2">
            <span className="rounded-md border border-line bg-base-850/50 px-2 py-1">{s}</span>
            {i < a.length - 1 && <ArrowRight className="h-3 w-3 text-ink-faint" />}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        {GROUPS.map((g) => {
          const items = qmsProcessMap.filter((p) => p.group === g.id);
          return (
            <div key={g.id} className="panel p-3.5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: g.accent }} />
                <h3 className="font-display text-[14px] font-semibold text-ink">{g.label}</h3>
              </div>
              <p className="mt-0.5 text-[11px] text-ink-faint">{g.desc}</p>
              <div className="mt-2.5 flex flex-col gap-1.5">
                {items.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSel(p)}
                    className="interactive-card flex items-center justify-between gap-2 px-2.5 py-2 text-left"
                  >
                    <span className="truncate text-[12px] font-medium text-ink">{p.name}</span>
                    <span className="shrink-0 font-mono text-[9.5px] text-ink-faint">{clauseShort(p.relatedClause).split(" ")[1]}</span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {sel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm" onClick={() => setSel(null)}>
          <div className="panel-raised w-full max-w-lg p-5" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                <Workflow className="h-4 w-4 text-violet-300" />
                <h3 className="font-display text-[16px] font-semibold text-ink">{sel.name}</h3>
              </div>
              <button onClick={() => setSel(null)} aria-label="Close" className="rounded-md border border-line p-1.5 text-ink-faint hover:text-ink">
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 text-[12.5px] leading-relaxed text-ink-muted">{sel.purpose}</p>
            <div className="mt-3 flex items-center gap-2 text-[12px] text-ink-muted">
              <User className="h-3.5 w-3.5 text-violet-300" /> <span className="text-ink-faint">Owner:</span> {sel.owner}
              <span className="chip border-line text-ink-faint">{clauseShort(sel.relatedClause)}</span>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2.5">
              <div className="rounded-lg border border-line bg-base-850/40 px-3 py-2">
                <span className="label-mono text-[10px] text-ink-faint">Inputs</span>
                <ul className="mt-1 space-y-0.5">{sel.inputs.map((i) => <li key={i} className="text-[11.5px] text-ink-muted">{i}</li>)}</ul>
              </div>
              <div className="rounded-lg border border-line bg-base-850/40 px-3 py-2">
                <span className="label-mono text-[10px] text-ink-faint">Outputs</span>
                <ul className="mt-1 space-y-0.5">{sel.outputs.map((o) => <li key={o} className="text-[11.5px] text-ink-muted">{o}</li>)}</ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
