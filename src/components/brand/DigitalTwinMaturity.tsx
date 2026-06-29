import { digitalTwinMaturity } from "@/lib/digitalTwinMaturity";
import { Check, CircleDashed } from "lucide-react";

/**
 * The five-level digital twin maturity model. Levels 1 to 3 are marked as the
 * current prototype; Levels 4 and 5 are honestly labelled as roadmap.
 */
export function DigitalTwinMaturity() {
  return (
    <div className="flex flex-col gap-2.5">
      {digitalTwinMaturity.map((lvl) => {
        const current = lvl.stage === "current";
        return (
          <div
            key={lvl.level}
            className={`panel flex flex-col gap-3 p-4 sm:flex-row sm:items-start ${
              current ? "border-violet-500/30" : ""
            }`}
          >
            <div className="flex shrink-0 items-center gap-3 sm:w-[210px]">
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-lg border font-display text-[15px] font-semibold ${
                  current
                    ? "border-violet-500/50 bg-violet-500/15 text-violet-200"
                    : "border-line bg-base-850/50 text-ink-faint"
                }`}
              >
                {lvl.level}
              </span>
              <div>
                <div className="font-display text-[14px] font-semibold leading-tight text-ink">{lvl.title}</div>
                <span
                  className={`chip mt-1 inline-flex items-center gap-1 ${
                    current ? "border-pass/40 text-pass" : "border-line text-ink-faint"
                  }`}
                >
                  {current ? <Check className="h-3 w-3" /> : <CircleDashed className="h-3 w-3" />}
                  {current ? "Prototype today" : "Roadmap"}
                </span>
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[12.5px] leading-relaxed text-ink-muted">{lvl.description}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {lvl.capabilities.map((c) => (
                  <span key={c} className="chip border-line text-ink-faint">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
