"use client";

import { useState } from "react";
import { factoryZones } from "@/lib/factoryZones";
import { processSteps } from "@/lib/processData";
import { MapPin, ChevronRight } from "lucide-react";

function stationTitle(id: string): string {
  return processSteps.find((s) => s.id === id)?.title ?? id;
}

export function FactoryZoneMap() {
  const [activeId, setActiveId] = useState(factoryZones[0]?.id);
  const active = factoryZones.find((z) => z.id === activeId) ?? factoryZones[0];

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_400px]">
      <div>
        <p className="mb-2 text-[12.5px] leading-relaxed text-ink-muted">
          A working rubber plant is more than its production line. These are the conceptual zones a visitor would walk
          through, from raw-material storage to the office where a quote is reviewed.
        </p>
        <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
          {factoryZones.map((z) => {
            const on = z.id === active.id;
            return (
              <button
                key={z.id}
                onClick={() => setActiveId(z.id)}
                className={`interactive-card flex items-center justify-between gap-2 px-3 py-2.5 text-left ${
                  on ? "border-line-strong bg-base-800/60" : ""
                }`}
                aria-pressed={on}
              >
                <span className="flex min-w-0 items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-violet-300" />
                  <span className="truncate text-[12.5px] font-medium text-ink">{z.name}</span>
                </span>
                <ChevronRight className={`h-3.5 w-3.5 shrink-0 text-ink-faint transition ${on ? "translate-x-0.5" : ""}`} />
              </button>
            );
          })}
        </div>
      </div>

      <div className="panel-raised min-h-[340px] p-4 lg:min-h-0 lg:sticky lg:top-4 lg:self-start">
        <span className="inline-block rounded border border-line bg-base-950/50 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-violet-300">
          {active.signText}
        </span>
        <h3 className="mt-2 font-display text-[17px] font-semibold leading-tight text-ink">{active.name}</h3>
        <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-muted">{active.purpose}</p>

        <div className="mt-3 rounded-lg border border-violet-500/25 bg-violet-500/5 px-3 py-2">
          <span className="label-mono text-[10px] text-violet-300">On the walkthrough</span>
          <p className="mt-1 text-[12px] leading-relaxed text-ink-muted">{active.walkthroughNote}</p>
        </div>

        {active.props.length > 0 && (
          <div className="mt-3">
            <span className="label-mono text-[10px] text-ink-faint">What you would see</span>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {active.props.map((p) => (
                <span key={p} className="chip border-line text-ink-muted">
                  {p}
                </span>
              ))}
            </div>
          </div>
        )}

        {active.relatedStations.length > 0 && (
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            <span className="label-mono text-[10px] text-ink-faint">Maps to stations:</span>
            {active.relatedStations.map((s) => (
              <span key={s} className="chip border-blue-400/30 text-blue-300">
                {stationTitle(s)}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
