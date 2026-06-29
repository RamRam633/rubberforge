import type { ReadinessResult } from "@/lib/readinessScoreEngine";
import { Gauge } from "lucide-react";

const LEVEL_TONE: Record<string, string> = {
  emerging: "text-ink-faint",
  developing: "text-blue-300",
  qualified: "text-violet-300",
  "audit-ready": "text-pass",
};

const LEVEL_RING: Record<string, string> = {
  emerging: "#9ea4d6",
  developing: "#9aa9ff",
  qualified: "#c3bdff",
  "audit-ready": "#22c55e",
};

export function FactoryReadinessScore({ result }: { result: ReadinessResult }) {
  const pct = Math.round(result.pct * 100);
  const ring = LEVEL_RING[result.level];
  const circumference = 2 * Math.PI * 42;
  const dash = circumference * result.pct;

  return (
    <div className="panel-raised p-4">
      <div className="flex items-center gap-2">
        <Gauge className="h-4 w-4 text-violet-300" />
        <span className="kicker-violet">Factory readiness</span>
      </div>

      <div className="mt-3 flex items-center gap-4">
        <div className="relative h-[104px] w-[104px] shrink-0">
          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
            <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(15,23,42,0.10)" strokeWidth="8" />
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke={ring}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${dash} ${circumference}`}
              style={{ transition: "stroke-dasharray 500ms ease" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-2xl font-semibold text-ink">{pct}</span>
            <span className="label-mono text-[9px]">percent</span>
          </div>
        </div>

        <div className="min-w-0">
          <div className={`font-display text-lg font-semibold ${LEVEL_TONE[result.level]}`}>{result.levelLabel}</div>
          <p className="mt-1 text-[12px] leading-relaxed text-ink-muted">{result.summary}</p>
          <div className="mt-2 label-mono text-[10px] text-ink-faint">
            {result.checked} of {result.total} conceptual checkpoints confirmed
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
        {result.byCategory.map((c) => (
          <div key={c.category} className="flex items-center gap-2">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-base-700">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-400"
                style={{ width: `${Math.round(c.pct * 100)}%`, transition: "width 400ms ease" }}
              />
            </div>
            <span className="w-[120px] shrink-0 truncate text-[10.5px] text-ink-faint" title={c.label}>
              {c.label}
            </span>
            <span className="label-mono w-8 shrink-0 text-right text-[10px] text-ink-muted">
              {c.checked}/{c.total}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-3 text-[10.5px] leading-relaxed text-ink-faint">
        Preliminary educational self-assessment. Not a certification, audit result, or compliance claim. A real
        readiness review requires on-site technical verification.
      </p>
    </div>
  );
}
