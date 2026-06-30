"use client";

import { useEffect, useRef } from "react";
import type { ProcessLogEntry } from "@/types/simulation";

const KIND_STYLE: Record<ProcessLogEntry["kind"], { dot: string; text: string; tag: string }> = {
  info: { dot: "#6b6356", text: "text-ink-muted", tag: "LOG" },
  action: { dot: "#2ba6c4", text: "text-steel-300", tag: "ACT" },
  transform: { dot: "#f97316", text: "text-molten-300", tag: "XFM" },
  alert: { dot: "#f87171", text: "text-fail", tag: "ALR" },
  success: { dot: "#34d399", text: "text-pass", tag: "OK " },
};

export function ProcessLog({ log }: { log: ProcessLogEntry[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Auto-scroll ONLY this log's own container to the latest entry. Never use
    // scrollIntoView here: it scrolls every scrollable ancestor including the
    // page, which yanked the whole phone viewport down on every action.
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [log]);

  return (
    <div className="flex h-full flex-col">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="label-mono">Process Log</span>
        <span className="font-mono text-[10px] text-ink-faint">{log.length} events</span>
      </div>
      <div
        ref={scrollRef}
        className="min-h-0 flex-1 space-y-1 overflow-y-auto overscroll-contain pr-1 font-mono text-[11px] leading-relaxed"
      >
        {log.map((e) => {
          const s = KIND_STYLE[e.kind];
          return (
            <div key={e.id} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: s.dot }} />
              <span className="shrink-0 text-ink-faint">{String(e.id).padStart(2, "0")}</span>
              <span className={`shrink-0 ${s.text}`}>{s.tag}</span>
              <span className="text-ink-muted">{e.message}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
