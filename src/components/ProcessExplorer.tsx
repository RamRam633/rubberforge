"use client";

import { useEffect, useState } from "react";
import { processSteps } from "@/lib/processData";
import { machinesById, familyAccent } from "@/lib/machineData";
import { LearningPanel } from "./LearningPanel";
import { MachineViewer } from "./factory/MachineViewer";

export function ProcessExplorer() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const step = processSteps[index];
  const accent = familyAccent[machinesById[step.id].family];

  return (
    <div className="grid gap-3 lg:grid-cols-[230px_minmax(0,1fr)]">
      {/* Station selector */}
      <nav className="panel h-fit p-2">
        <div className="label-mono px-2 py-1.5">Stations</div>
        <ol className="space-y-0.5">
          {processSteps.map((s, i) => {
            const accent = familyAccent[machinesById[s.id].family];
            const active = i === index;
            return (
              <li key={s.id}>
                <button
                  onClick={() => setIndex(i)}
                  className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition ${
                    active ? "bg-base-700" : "hover:bg-base-800"
                  }`}
                >
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md font-mono text-[11px]"
                    style={{
                      backgroundColor: active ? `${accent.dot}22` : "rgba(255,255,255,0.04)",
                      color: active ? accent.text : "#9aa4b6",
                    }}
                  >
                    {i + 1}
                  </span>
                  <span className={`text-[13px] ${active ? "text-ink" : "text-ink-muted"}`}>{s.title}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </nav>

      {/* Detail */}
      <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="panel relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-line bg-base-850/70 px-4 py-2">
            <span className="label-mono" style={{ color: accent.text }}>
              Station {step.sequence} / 10
            </span>
            <span className="font-mono text-[10px] text-ink-faint">drag to orbit</span>
          </div>
          <div className="h-[320px] w-full sm:h-[400px] lg:h-[520px]">
            {mounted && <MachineViewer stationId={step.id} />}
          </div>
        </div>
        <div className="h-[560px]">
          <LearningPanel step={step} transforming={false} />
        </div>
      </div>
    </div>
  );
}
