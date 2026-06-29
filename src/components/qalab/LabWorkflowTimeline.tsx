"use client";

import { useState } from "react";
import { labWorkflow } from "@/lib/labWorkflow";
import { ChevronLeft, ChevronRight, FlaskRound, Sparkles } from "lucide-react";

export function LabWorkflowTimeline() {
  const [i, setI] = useState(0);
  const step = labWorkflow[i];

  return (
    <div className="panel-raised overflow-hidden">
      <div className="flex items-center gap-1 overflow-x-auto border-b border-line bg-base-850/40 px-3 py-2">
        {labWorkflow.map((s, idx) => (
          <button key={s.id} onClick={() => setI(idx)}
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md border text-[11px] font-medium transition ${idx === i ? "border-violet-500 bg-violet-500/20 text-violet-200" : idx < i ? "border-line bg-base-800/60 text-ink-faint" : "border-line text-ink-faint hover:border-line-strong"}`}
            aria-current={idx === i} aria-label={`Step ${s.index}: ${s.title}`}>
            {s.index}
          </button>
        ))}
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2">
          <FlaskRound className="h-4 w-4 text-violet-300" />
          <span className="label-mono text-[10px] text-violet-300">Step {step.index} / {labWorkflow.length}</span>
          <span className="chip border-blue-400/30 text-blue-300">{step.relatedZone}</span>
        </div>
        <h3 className="mt-2 font-display text-[19px] font-semibold leading-tight text-ink">{step.title}</h3>
        <p className="mt-2 max-w-3xl text-[13px] leading-relaxed text-ink-muted">{step.description}</p>

        <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          <div className="rounded-lg border border-line bg-base-850/40 px-3 py-2.5">
            <span className="flex items-center gap-1.5 label-mono text-[10px] text-ink-faint"><Sparkles className="h-3 w-3" /> What you see</span>
            <p className="mt-1 text-[12px] leading-relaxed text-ink-muted">{step.whatAppears}</p>
          </div>
          <div className="rounded-lg border border-violet-500/25 bg-violet-500/5 px-3 py-2.5">
            <span className="label-mono text-[10px] text-violet-300">Output (demo)</span>
            <p className="mt-1 text-[12px] leading-relaxed text-ink-muted">{step.outputConcept}</p>
            <div className="mt-1.5 flex flex-wrap gap-1">{step.relatedTests.map((t) => <span key={t} className="chip border-line text-ink-faint">{t}</span>)}</div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <button onClick={() => setI((v) => Math.max(0, v - 1))} disabled={i === 0} className="btn-ghost text-[12px]"><ChevronLeft className="h-3.5 w-3.5" /> Previous</button>
          <div className="flex-1 px-4">
            <div className="h-1 w-full overflow-hidden rounded-full bg-base-700">
              <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-400" style={{ width: `${((i + 1) / labWorkflow.length) * 100}%`, transition: "width 300ms ease" }} />
            </div>
          </div>
          <button onClick={() => setI((v) => Math.min(labWorkflow.length - 1, v + 1))} disabled={i === labWorkflow.length - 1} className="btn-primary text-[12px]">Next <ChevronRight className="h-3.5 w-3.5" /></button>
        </div>
      </div>
    </div>
  );
}
