import { buildDigitalThread } from "@/lib/digitalThreadSimulator";
import { Database, GitBranch, FileSignature } from "lucide-react";

export function DigitalThreadOverlay({ focusIndex }: { focusIndex?: number }) {
  const thread = buildDigitalThread();

  return (
    <div className="panel-raised p-4">
      <div className="flex items-center gap-2">
        <GitBranch className="h-4 w-4 text-violet-300" />
        <span className="kicker-violet">Digital thread</span>
        <span className="label-mono text-[10px] text-ink-faint">what each station records</span>
      </div>
      <p className="mt-2 text-[12.5px] leading-relaxed text-ink-muted">
        A conceptual thread of the data a part would accumulate as it moves down the line, and how each record helps
        answer a request for quote. Illustrative, not live machine telemetry.
      </p>

      <ol className="mt-3 flex flex-col">
        {thread.map((s, idx) => {
          const focused = idx === focusIndex;
          return (
            <li key={s.stationId} className="relative flex gap-3 pb-3 last:pb-0">
              {/* connector */}
              {idx < thread.length - 1 && (
                <span className="absolute left-[11px] top-6 h-full w-px bg-line" aria-hidden />
              )}
              <span
                className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border font-mono text-[10px] ${
                  focused
                    ? "border-violet-500 bg-violet-500/20 text-violet-200"
                    : "border-line bg-base-850/60 text-ink-faint"
                }`}
              >
                {s.sequence}
              </span>
              <div
                className={`min-w-0 flex-1 rounded-lg border px-3 py-2 ${
                  focused ? "border-violet-500/40 bg-violet-500/5" : "border-line bg-base-850/30"
                }`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[12.5px] font-semibold text-ink">{s.title}</span>
                  <span className="chip border-line text-ink-faint">{s.roleName}</span>
                </div>
                <p className="mt-1 flex items-start gap-1.5 text-[11.5px] leading-relaxed text-ink-muted">
                  <Database className="mt-0.5 h-3 w-3 shrink-0 text-blue-300" />
                  {s.dataCaptured}
                </p>
                <p className="mt-1 flex items-start gap-1.5 text-[11.5px] leading-relaxed text-ink-faint">
                  <FileSignature className="mt-0.5 h-3 w-3 shrink-0 text-violet-300" />
                  {s.feedsRfq}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
