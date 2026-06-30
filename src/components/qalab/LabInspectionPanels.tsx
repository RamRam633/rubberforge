"use client";

import { useState } from "react";
import { labStationsById } from "@/lib/labStations";
import { Thermometer, Droplets, Wind, Snowflake, ScanLine, Check, AlertTriangle, type LucideIcon } from "lucide-react";

const ENVS: { id: string; Icon: LucideIcon; demoStatus: string }[] = [
  { id: "aging-oven", Icon: Thermometer, demoStatus: "pass demo" },
  { id: "fluid-immersion", Icon: Droplets, demoStatus: "review needed" },
  { id: "ozone-weathering", Icon: Wind, demoStatus: "pending" },
];

export function EnvironmentalTestPanel() {
  const [sel, setSel] = useState("aging-oven");
  const zone = labStationsById[sel];
  return (
    <div className="panel-raised p-4">
      <div className="flex items-center gap-2">
        <Thermometer className="h-4 w-4 text-molten-300" />
        <span className="kicker-violet">Environmental / aging tests</span>
        <span className="label-mono text-[10px] text-ink-faint">simulated status</span>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {ENVS.map((e) => {
          const z = labStationsById[e.id];
          const on = sel === e.id;
          const Icon = e.Icon;
          return (
            <button key={e.id} onClick={() => setSel(e.id)} aria-pressed={on}
              className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[12px] transition ${on ? "border-molten-400/50 bg-molten-400/10 text-molten-300" : "border-line text-ink-muted hover:border-line-strong"}`}>
              <Icon className="h-3.5 w-3.5" /> {z?.name ?? e.id}
            </button>
          );
        })}
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-line px-2.5 py-1.5 text-[12px] text-ink-faint">
          <Snowflake className="h-3.5 w-3.5" /> Low-temperature flexibility (concept)
        </span>
      </div>
      {zone && (
        <div className="mt-3 grid min-h-[150px] grid-cols-1 gap-3 sm:grid-cols-[minmax(0,1fr)_180px]">
          <div>
            <h3 className="font-display text-[15px] font-semibold text-ink">{zone.name}</h3>
            <p className="mt-1 text-[12.5px] leading-relaxed text-ink-muted">{zone.whatHappens}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {zone.relatedTests.map((t) => <span key={t} className="chip border-line text-ink-muted">{t}</span>)}
            </div>
          </div>
          <div className="rounded-lg border border-line bg-base-850/40 p-3">
            <span className="label-mono text-[10px] text-ink-faint">Demo status</span>
            <p className="mt-1 text-[13px] font-semibold capitalize text-molten-300">{ENVS.find((e) => e.id === sel)?.demoStatus}</p>
            <p className="mt-1 text-[10.5px] leading-relaxed text-ink-faint">Simulated only. Real environmental testing follows qualified lab procedures and official methods.</p>
          </div>
        </div>
      )}
    </div>
  );
}

const CHECKS = ["Surface finish", "Bubbles / trapped air", "Specks / contamination", "Cracks", "Edge quality", "Thickness", "Width / length"];

export function DimensionalInspectionPanel() {
  const [flagged, setFlagged] = useState<Set<string>>(new Set(["Bubbles / trapped air"]));
  function toggle(c: string) {
    setFlagged((prev) => { const n = new Set(prev); n.has(c) ? n.delete(c) : n.add(c); return n; });
  }
  return (
    <div className="panel-raised p-4">
      <div className="flex items-center gap-2">
        <ScanLine className="h-4 w-4 text-blue-300" />
        <span className="kicker-violet">Dimensional / visual inspection</span>
        <span className="label-mono text-[10px] text-ink-faint">click to flag (demo)</span>
      </div>
      <p className="mt-2 text-[12.5px] leading-relaxed text-ink-muted">
        The inspector checks the sample against expected appearance and dimensions. Flag any item that would need review.
      </p>
      <div className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
        {CHECKS.map((c) => {
          const bad = flagged.has(c);
          return (
            <button key={c} onClick={() => toggle(c)}
              className={`flex items-center justify-between gap-2 rounded-lg border px-3 py-2 text-left text-[12.5px] transition ${bad ? "border-molten-400/40 bg-molten-400/10 text-molten-300" : "border-line text-ink-muted hover:border-line-strong"}`}>
              {c}
              {bad ? <AlertTriangle className="h-3.5 w-3.5" /> : <Check className="h-3.5 w-3.5 text-pass" />}
            </button>
          );
        })}
      </div>
      <p className="mt-2 text-[11px] text-ink-faint">
        {flagged.size === 0 ? "All visual checks pass (demo)." : `${flagged.size} item(s) flagged for review (demo). A flag would trigger a hold or NCR.`}
      </p>
    </div>
  );
}
