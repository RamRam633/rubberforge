import type { TraceabilityStage } from "@/types/quality";
import { ChevronRight } from "lucide-react";

// The lot/batch traceability chain from raw polymer to shipment document.
export function TraceabilityChain({ stages, compact = false }: { stages: TraceabilityStage[]; compact?: boolean }) {
  if (compact) {
    return (
      <div className="flex flex-wrap items-center gap-x-1 gap-y-1.5">
        {stages.map((s, i) => (
          <span key={s.id} className="flex items-center gap-1">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-line bg-base-700/50 px-2 py-1">
              <span className="font-mono text-[9px] text-violet-300">{s.idFormat}</span>
              <span className="text-[10.5px] text-ink-muted">{s.label}</span>
            </span>
            {i < stages.length - 1 && <ChevronRight className="h-3 w-3 shrink-0 text-ink-faint" />}
          </span>
        ))}
      </div>
    );
  }
  return (
    <div className="relative">
      <div className="absolute bottom-3 left-[11px] top-3 w-px bg-line" />
      <ol className="space-y-2">
        {stages.map((s, i) => (
          <li key={s.id} className="relative pl-8">
            <span className="absolute left-0.5 top-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-base-700 font-mono text-[10px] text-violet-300 ring-4 ring-base-900">
              {i + 1}
            </span>
            <div className="panel-tight p-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-display text-[13.5px] font-semibold text-ink">{s.label}</span>
                <span className="rounded border border-violet-500/25 bg-violet-500/10 px-1.5 py-0.5 font-mono text-[10px] text-violet-300">{s.idFormat}</span>
              </div>
              <p className="mt-1 text-[11.5px] leading-relaxed text-ink-muted">{s.whatItLinks}</p>
              <p className="mt-1 text-[11px] leading-relaxed text-ink-faint">{s.whyItMatters}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
