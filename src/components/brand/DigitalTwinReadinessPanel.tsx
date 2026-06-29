import { digitalTwinReadiness, READINESS_LABELS, type ReadinessStatus } from "@/lib/digitalTwinReadiness";

const TONE: Record<ReadinessStatus, string> = {
  built: "border-pass/40 text-pass",
  configurable: "border-molten-400/40 text-molten-300",
  "data-connected": "border-steel-400/40 text-steel-300",
};

export function DigitalTwinReadinessPanel() {
  return (
    <div className="panel overflow-hidden">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 border-b border-line px-4 py-2.5 text-[11px] text-ink-muted">
        <span className="label-mono">Legend</span>
        {(Object.keys(READINESS_LABELS) as ReadinessStatus[]).map((s) => (
          <span key={s} className="flex items-center gap-1.5">
            <span className={`h-2 w-2 rounded-full ${s === "built" ? "bg-pass" : s === "configurable" ? "bg-molten-400" : "bg-steel-400"}`} />
            {READINESS_LABELS[s]}
          </span>
        ))}
      </div>
      <div className="divide-y divide-line">
        {digitalTwinReadiness.map((a) => (
          <div key={a.area} className="flex items-center justify-between gap-3 px-4 py-2.5 hover:bg-base-800/30">
            <div className="min-w-0">
              <div className="text-[13px] font-medium text-ink">{a.area}</div>
              <div className="text-[11px] leading-snug text-ink-faint">{a.note}</div>
            </div>
            <span className={`chip shrink-0 ${TONE[a.status]}`}>{READINESS_LABELS[a.status]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
