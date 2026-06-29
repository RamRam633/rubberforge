import type { Band } from "@/types/platform";

const LEVEL: Record<Band, number> = {
  low: 1,
  medium: 2,
  high: 3,
  "very-high": 4,
  "application-dependent": 0,
};

const LABEL: Record<Band, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
  "very-high": "Very high",
  "application-dependent": "App-dependent",
};

// Qualitative 4-segment meter. "application-dependent" renders as a neutral
// dashed state rather than a score.
export function BandMeter({ label, band }: { label: string; band: Band }) {
  const lvl = LEVEL[band];
  const appDep = band === "application-dependent";
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-[11px] text-ink-muted">{label}</span>
      <div className="flex items-center gap-1.5">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className={`h-1.5 w-4 rounded-sm ${
                appDep
                  ? "border border-dashed border-line bg-transparent"
                  : i <= lvl
                    ? i >= 4
                      ? "bg-molten-400"
                      : "bg-violet-400"
                    : "bg-base-600"
              }`}
            />
          ))}
        </div>
        <span className="w-[78px] text-right font-mono text-[9.5px] uppercase tracking-wide text-ink-faint">
          {LABEL[band]}
        </span>
      </div>
    </div>
  );
}

const COST_LABEL: Record<string, string> = {
  low: "$",
  medium: "$$",
  high: "$$$",
  "very-high": "$$$$",
};

export function CostTierBadge({ tier }: { tier: string }) {
  return (
    <span className="chip border-line text-ink-muted" title={`Relative cost tier: ${tier}`}>
      <span className="font-semibold text-molten-300">{COST_LABEL[tier] ?? "?"}</span>
      <span className="text-[9px]">cost</span>
    </span>
  );
}
