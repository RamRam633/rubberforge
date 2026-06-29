import type { RouteStep } from "@/types/platform";
import { ArrowRight, Info } from "lucide-react";

// Preliminary manufacturing-route flow. Always labelled as educational guidance.
export function RoutePreview({
  steps,
  note,
  detailed = false,
}: {
  steps: RouteStep[];
  note?: string;
  detailed?: boolean;
}) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-1 gap-y-1.5">
        {steps.map((s, i) => (
          <span key={s.id + i} className="flex items-center gap-1">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-line bg-base-700/50 px-2 py-1">
              <span className="font-mono text-[9px] text-violet-300">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-[11px] text-ink-muted">{s.label}</span>
            </span>
            {i < steps.length - 1 && <ArrowRight className="h-3 w-3 shrink-0 text-ink-faint" />}
          </span>
        ))}
      </div>

      {detailed && (
        <ol className="mt-3 space-y-2">
          {steps.map((s, i) => (
            <li key={s.id + i} className="flex gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-base-700 font-mono text-[11px] text-violet-300">
                {i + 1}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-medium text-ink">{s.label}</span>
                  <span className="chip">{s.capability}</span>
                </div>
                <p className="mt-0.5 text-[12px] leading-relaxed text-ink-muted">{s.description}</p>
              </div>
            </li>
          ))}
        </ol>
      )}

      <div className="mt-2.5 flex items-start gap-1.5 text-[11px] leading-relaxed text-ink-faint">
        <Info className="mt-0.5 h-3 w-3 shrink-0" />
        <span>{note || "Preliminary manufacturing-route guidance for learning and quote preparation, not a production plan."}</span>
      </div>
    </div>
  );
}
