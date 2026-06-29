import type { QualityReview } from "@/types/quality";
import { ShieldCheck, AlertTriangle } from "lucide-react";

const RISK: Record<QualityReview["riskLevel"], { label: string; cls: string }> = {
  low: { label: "Low", cls: "border-pass/40 text-pass" },
  medium: { label: "Medium", cls: "border-warn/40 text-warn" },
  high: { label: "High", cls: "border-fail/40 text-fail" },
};

export function InternalQualityReview({ review }: { review: QualityReview }) {
  const r = RISK[review.riskLevel];
  return (
    <div className="panel p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="h-4 w-4 text-violet-300" />
          <span className="label-mono text-violet-300">Internal quality review</span>
        </div>
        <span className={`chip ${r.cls}`}>Risk: {r.label}</span>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <Chips label="Required tests" items={review.requiredTests} tone="pass" />
        <Chips label="Optional tests" items={review.optionalTests} tone="steel" />
        <Chips label="Standards to consider" items={review.standards} tone="violet" />
        <Chips label="Documents" items={review.documents} tone="muted" />
      </div>

      {review.missingInfo.length > 0 && (
        <div className="mt-3 rounded-lg border border-warn/25 bg-warn/[0.05] px-3 py-2">
          <div className="mb-1 flex items-center gap-1.5">
            <AlertTriangle className="h-3.5 w-3.5 text-warn" />
            <span className="label-mono text-warn">Missing information</span>
          </div>
          <ul className="space-y-0.5">
            {review.missingInfo.map((m) => (
              <li key={m} className="text-[12px] leading-snug text-ink-muted">{m}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-line pt-3">
        <span className="label-mono">Review owners</span>
        {review.reviewOwners.map((o) => (
          <span key={o} className="chip capitalize">{o}</span>
        ))}
        <span className="chip ml-auto border-line text-ink-faint">
          Traceability: {review.traceabilityRequired ? "required" : "standard"}
        </span>
        <span className="chip border-line text-ink-faint">Status: pending review</span>
      </div>
    </div>
  );
}

function Chips({ label, items, tone }: { label: string; items: string[]; tone: "pass" | "steel" | "violet" | "muted" }) {
  if (!items || items.length === 0) return null;
  const cls =
    tone === "pass" ? "border-pass/25 text-pass" : tone === "steel" ? "border-steel-400/25 text-steel-300" : tone === "violet" ? "border-violet-500/25 text-violet-300" : "border-line text-ink-muted";
  return (
    <div>
      <div className="label-mono mb-1.5">{label}</div>
      <div className="flex flex-wrap gap-1.5">
        {items.map((it) => (
          <span key={it} className={`chip ${cls}`}>{it}</span>
        ))}
      </div>
    </div>
  );
}
