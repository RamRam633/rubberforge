"use client";

import type { StationChemistry } from "@/types/chemistry";
import { CrosslinkDiagram, type CrosslinkDensity } from "./CrosslinkDiagram";
import { FlaskConical, AlertTriangle } from "lucide-react";

// Chemistry View overlay shown over the 3D factory in the simulator.
export function ChemistryModePanel({
  chem,
  density,
  materialStateLabel,
}: {
  chem: StationChemistry;
  density: CrosslinkDensity;
  materialStateLabel: string;
}) {
  return (
    <div className="pointer-events-none absolute bottom-3 left-3 z-10 max-h-[88%] w-[330px] max-w-[82%] overflow-y-auto rounded-xl border border-violet-500/25 bg-base-900/85 backdrop-blur-md">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
        <FlaskConical className="h-3.5 w-3.5 text-violet-300" />
        <span className="label-mono text-violet-300">Chemistry view</span>
        <span className="ml-auto chip border-violet-500/25 px-1.5 py-0 text-violet-300">{materialStateLabel}</span>
      </div>

      <div className="space-y-2.5 px-3 py-2.5">
        <div>
          <div className="font-display text-[13.5px] font-semibold leading-tight text-ink">{chem.headline}</div>
          <p className="mt-1 text-[11.5px] leading-relaxed text-ink-muted">{chem.whatIsHappening}</p>
        </div>

        <div className="rounded-lg border border-violet-500/25 bg-violet-500/[0.06] px-2.5 py-2">
          <div className="label-mono mb-0.5 text-violet-300">Key concept</div>
          <p className="text-[12px] font-medium leading-relaxed text-ink">{chem.keyConcept}</p>
        </div>

        <div className="rounded-lg border border-line bg-base-850/40 p-2">
          <CrosslinkDiagram density={density} className="h-[110px] w-full" label={`crosslink density: ${density}`} />
        </div>

        <div>
          <div className="mb-1 flex items-center gap-1 text-[10px] uppercase tracking-wide text-warn">
            <AlertTriangle className="h-3 w-3" /> Chemistry-related defects
          </div>
          <div className="flex flex-wrap gap-1">
            {chem.chemistryDefects.map((d) => (
              <span key={d} className="chip border-warn/25 px-1.5 py-0.5 text-[9px] text-ink-muted">{d}</span>
            ))}
          </div>
        </div>

        <p className="text-[10.5px] leading-relaxed text-ink-faint">{chem.materialNote}</p>
      </div>
    </div>
  );
}
