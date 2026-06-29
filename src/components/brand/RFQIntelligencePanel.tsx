"use client";

import { useState } from "react";
import type { RfqIntelligence } from "@/lib/rfqIntelligenceEngine";
import type { UserMode } from "@/lib/userModes";
import { ProgressRail, StatusBadge } from "./ProgressRail";
import { RFQSummary } from "@/components/platform/RFQSummary";
import { InspectionPlanSummary } from "@/components/quality/InspectionPlanSummary";
import { InternalQualityReview } from "@/components/quality/InternalQualityReview";
import { Brain, Copy, Check, Truck } from "lucide-react";

// Presents the RFQ as an intelligence engine output. Depth follows the mode.
export function RFQIntelligencePanel({ intel, mode }: { intel: RfqIntelligence; mode: UserMode }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(intel.salesFollowUpDraft);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ignore */
    }
  };
  const ready = intel.completeness >= 80;

  return (
    <div className="space-y-3">
      <div className="panel-raised p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-violet-300">
            <Brain className="h-4 w-4" />
            <span className="label-mono text-violet-300">RFQ intelligence</span>
          </div>
          <StatusBadge status={ready ? "ready" : "incomplete"}>
            {ready ? "Ready for technical review" : "Needs more information"}
          </StatusBadge>
        </div>
        <div className="mt-3">
          <ProgressRail value={intel.completeness} label="RFQ completeness" />
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <StatusBadge status={intel.riskLevel === "high" ? "warn" : intel.riskLevel === "medium" ? "review" : "ok"}>
            Technical risk: {intel.riskLevel}
          </StatusBadge>
          {intel.reviewOwners.map((o) => (
            <span key={o} className="chip capitalize">{o}</span>
          ))}
        </div>
      </div>

      {/* Customer-friendly summary (all modes) */}
      <RFQSummary summary={intel.rfqSummary} />

      {/* Engineer + factory review depth */}
      {(mode === "engineer" || mode === "factory-review") && (
        <InspectionPlanSummary plan={intel.qualityPlan} />
      )}

      {/* Factory review only */}
      {mode === "factory-review" && (
        <>
          <InternalQualityReview review={intel.qualityReview} />

          <div className="panel p-4">
            <div className="flex items-center gap-1.5">
              <Truck className="h-4 w-4 text-steel-300" />
              <span className="label-mono text-steel-300">Supply-chain questions</span>
            </div>
            <ul className="mt-2 space-y-1">
              {intel.supplyChainQuestions.map((q) => (
                <li key={q} className="flex items-start gap-2 text-[12.5px] leading-relaxed text-ink-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-steel-400" />
                  {q}
                </li>
              ))}
            </ul>
          </div>

          <div className="panel p-4">
            <div className="flex items-center justify-between">
              <span className="label-mono">Sales follow-up draft</span>
              <button onClick={copy} className="btn-ghost px-2.5 py-1 text-[12px]">
                {copied ? <Check className="h-3.5 w-3.5 text-pass" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <pre className="mt-2 max-h-56 overflow-y-auto whitespace-pre-wrap rounded-lg border border-line bg-base-900/40 p-3 font-mono text-[11px] leading-relaxed text-ink-muted">
              {intel.salesFollowUpDraft}
            </pre>
          </div>
        </>
      )}
    </div>
  );
}
