import { labTraceability } from "@/lib/labTraceability";
import { GitBranch } from "lucide-react";

export function LabTraceabilityChain({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "" : "panel-raised p-4"}>
      {!compact && (
        <div className="flex items-center gap-2">
          <GitBranch className="h-4 w-4 text-violet-300" />
          <span className="kicker-violet">Lab traceability chain</span>
          <span className="label-mono text-[10px] text-ink-faint">demo identifiers</span>
        </div>
      )}
      <ol className={`flex flex-col ${compact ? "" : "mt-3"}`}>
        {labTraceability.map((s, idx) => (
          <li key={s.id} className="relative flex gap-3 pb-3 last:pb-0">
            {idx < labTraceability.length - 1 && <span className="absolute left-[11px] top-6 h-full w-px bg-line" aria-hidden />}
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line bg-base-850/60 font-mono text-[10px] text-ink-faint">{idx + 1}</span>
            <div className="min-w-0 flex-1 rounded-lg border border-line bg-base-850/30 px-3 py-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[12.5px] font-semibold text-ink">{s.label}</span>
                <span className="chip border-blue-400/30 font-mono text-blue-300">{s.idFormat}</span>
              </div>
              {!compact && (
                <p className="mt-1 text-[11.5px] leading-relaxed text-ink-faint">
                  <span className="text-ink-muted">Links. </span>{s.whatItLinks}. {s.whyItMatters}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
