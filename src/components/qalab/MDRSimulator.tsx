"use client";

import { useState } from "react";
import { mdrDemo } from "@/lib/mdrCureCurveDemo";
import { CureCurveDisplay } from "./CureCurveDisplay";
import { LabQMSBadge } from "@/components/qms/QMSBadge";
import { Activity, Play, Info, Link2 } from "lucide-react";

export function MDRSimulator() {
  const [runKey, setRunKey] = useState(0);

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_340px]">
      <div className="panel-raised p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-molten-300" />
            <span className="kicker-violet">Moving Die Rheometer (MDR)</span>
          </div>
          <button onClick={() => setRunKey((k) => k + 1)} className="btn-amber text-[12px]">
            <Play className="h-3.5 w-3.5" /> Run cure curve (demo)
          </button>
        </div>
        <p className="mt-2 text-[12.5px] leading-relaxed text-ink-muted">{mdrDemo.intro}</p>
        <div className="mt-3">
          <CureCurveDisplay runKey={runKey} />
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <LabQMSBadge label="controlled record" tone="pass" />
          <LabQMSBadge label="calibration required" tone="warn" />
          <LabQMSBadge label="traceable sample" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="panel p-3.5">
          <span className="label-mono text-[10px] text-ink-faint">Curve regions (conceptual)</span>
          <ul className="mt-2 space-y-1.5">
            {mdrDemo.regions.map((r) => (
              <li key={r.label} className="text-[11.5px] leading-relaxed text-ink-muted">
                <span className="font-medium text-molten-300">{r.label}. </span>{r.note}
              </li>
            ))}
          </ul>
        </div>
        <div className="panel p-3.5">
          <span className="label-mono text-[10px] text-ink-faint">What the curve can indicate</span>
          <ul className="mt-2 space-y-1.5">
            {mdrDemo.interpretation.map((i) => (
              <li key={i.reading} className="text-[11.5px] leading-relaxed text-ink-muted">
                <span className="font-medium text-ink">{i.reading}. </span>{i.meaning}
              </li>
            ))}
          </ul>
        </div>
        <div className="panel p-3.5">
          <span className="flex items-center gap-1.5 label-mono text-[10px] text-violet-300"><Link2 className="h-3 w-3" /> Connects to</span>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {mdrDemo.links.map((l) => (
              <span key={l.topic} className="chip border-line text-ink-muted" title={l.why}>{l.topic}</span>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-line bg-base-950/40 px-3 py-2 text-[11px] leading-relaxed text-ink-faint">
          <Info className="mr-1 inline h-3 w-3" />
          {mdrDemo.caveats.join(" ")}
        </div>
      </div>
    </div>
  );
}
