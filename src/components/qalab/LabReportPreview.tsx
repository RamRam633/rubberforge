"use client";

import { useState } from "react";
import { labReportPreview as rep } from "@/lib/labReportPreview";
import { releaseStatuses } from "@/lib/qaReleaseWorkflow";
import { TONE_CLS } from "@/lib/qmsUi";
import { FileText, Copy, Check, ShieldAlert } from "lucide-react";

function statusTone(s: string) {
  const k = s.toLowerCase();
  if (k.includes("pass")) return TONE_CLS.pass;
  if (k.includes("fail")) return TONE_CLS.fail;
  if (k.includes("review") || k.includes("pending")) return TONE_CLS.warn;
  return TONE_CLS.info;
}

export function LabReportPreview() {
  const [copied, setCopied] = useState(false);
  const ex = rep.demoExample;
  const decision = releaseStatuses.find((s) => s.id === ex.releaseDecision)?.label ?? ex.releaseDecision;

  function copy() {
    const text = [
      "DEMO LAB REPORT PREVIEW (not an official test report or certificate)",
      `Sample ID: ${ex.sampleId}`,
      `Product: ${ex.product}  Material: ${ex.material}  Batch/Lot: ${ex.batchLot}`,
      `Requested: ${ex.requestedTests.join(", ")}`,
      `Completed: ${ex.completedTests.map((t) => `${t.test} (${t.status})`).join(", ")}`,
      `Pending: ${ex.pendingTests.join(", ") || "none"}`,
      `Defects observed: ${ex.defectsObserved.join(", ") || "none"}`,
      `Methods: ${ex.methodRefs.join(", ")}`,
      `Release decision: ${decision}`,
      `Reviewer notes: ${ex.reviewerNotes}`,
    ].join("\n");
    navigator.clipboard?.writeText(text).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); });
  }

  return (
    <div className="panel-raised p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-violet-300" />
          <span className="kicker-violet">Lab report preview</span>
        </div>
        <button onClick={copy} className="btn-ghost text-[12px]">{copied ? <Check className="h-3.5 w-3.5 text-pass" /> : <Copy className="h-3.5 w-3.5" />} {copied ? "Copied" : "Copy"}</button>
      </div>

      <div className="mt-3 rounded-xl border border-line bg-base-950/40 p-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-2">
          <div>
            <span className="font-mono text-[11px] text-violet-300">{ex.sampleId}</span>
            <h3 className="font-display text-[15px] font-semibold text-ink">{ex.product} <span className="text-ink-faint">·</span> {ex.material}</h3>
          </div>
          <span className="chip border-line text-ink-faint">batch/lot {ex.batchLot}</span>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <span className="label-mono text-[10px] text-ink-faint">Completed tests (demo)</span>
            <div className="mt-1.5 flex flex-col gap-1">
              {ex.completedTests.map((t) => (
                <div key={t.test} className="flex items-center justify-between gap-2">
                  <span className="text-[12px] capitalize text-ink-muted">{t.test}</span>
                  <span className={`chip ${statusTone(t.status)}`}>{t.status.replace(/-/g, " ")}</span>
                </div>
              ))}
            </div>
            {ex.pendingTests.length > 0 && (
              <div className="mt-2">
                <span className="label-mono text-[10px] text-ink-faint">Pending</span>
                <div className="mt-1 flex flex-wrap gap-1">{ex.pendingTests.map((t) => <span key={t} className="chip border-line text-ink-faint">{t}</span>)}</div>
              </div>
            )}
          </div>
          <div>
            <span className="label-mono text-[10px] text-ink-faint">Requested</span>
            <div className="mt-1 flex flex-wrap gap-1">{ex.requestedTests.map((t) => <span key={t} className="chip border-line text-ink-muted">{t}</span>)}</div>
            <span className="mt-2 block label-mono text-[10px] text-ink-faint">Methods referenced</span>
            <div className="mt-1 flex flex-wrap gap-1">{ex.methodRefs.map((t) => <span key={t} className="chip border-line text-ink-muted">{t}</span>)}</div>
            {ex.defectsObserved.length > 0 && (
              <>
                <span className="mt-2 block label-mono text-[10px] text-molten-300">Defects observed</span>
                <div className="mt-1 flex flex-wrap gap-1">{ex.defectsObserved.map((t) => <span key={t} className="chip border-molten-400/30 text-molten-300">{t}</span>)}</div>
              </>
            )}
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-2">
          <span className="text-[12px] text-ink-muted"><span className="text-ink-faint">Release decision. </span><span className={`chip ${statusTone(decision)}`}>{decision}</span></span>
          <span className="max-w-md text-[11px] text-ink-faint">{ex.reviewerNotes}</span>
        </div>
      </div>

      <div className="mt-2.5 flex items-start gap-2 rounded-lg border border-molten-400/25 bg-molten-400/[0.05] px-3 py-2 text-[11px] leading-relaxed text-molten-300">
        <ShieldAlert className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {rep.disclaimer}
      </div>
    </div>
  );
}
