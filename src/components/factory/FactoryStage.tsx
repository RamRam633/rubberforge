"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import type { SimState } from "@/types/simulation";
import { FactoryScene3D, type ViewMode } from "./FactoryScene3D";
import { ViewModeToggle } from "./ViewModeToggle";
import { MaterialCutaway } from "./MaterialCutaway";
import { ChemistryModePanel } from "@/components/chemistry/ChemistryModePanel";
import { MachineIntelligencePanel } from "@/components/intel/MachineIntelligencePanel";
import { processSteps } from "@/lib/processData";
import { machinesById, familyAccent } from "@/lib/machineData";
import { stationChemistry, stationCrosslinkDensity } from "@/lib/stationChemistry";
import { primaryEquipmentForStation } from "@/lib/equipmentLibrary";
import { manufacturingControlsByStation } from "@/lib/manufacturingEngineeringControls";
import { materialStates } from "@/lib/materialData";
import { TRANSFORM_MS } from "@/lib/timing";
import { Zap, Move3d, Users } from "lucide-react";

export function FactoryStage({ state }: { state: SimState }) {
  const [mode, setMode] = useState<ViewMode>("closeup");
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [showCrew, setShowCrew] = useState(true);

  useEffect(() => setMounted(true), []);

  // Drive the transform progress (0..1). Each effect run owns and cancels exactly
  // its own animation frame, so a rapid re-trigger can never leak a prior loop.
  useEffect(() => {
    setProgress(0);
    if (!state.transforming) return;
    const start = performance.now();
    let id = requestAnimationFrame(function tick(now: number) {
      const p = Math.min(1, (now - start) / TRANSFORM_MS);
      setProgress(p);
      if (p < 1) id = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(id);
  }, [state.transforming]);

  const step = processSteps[state.activeIndex];
  const done = state.completedSteps.includes(step.id);
  const accent = familyAccent[machinesById[step.id].family];

  return (
    <div className="panel-raised stage-glow relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-gradient-to-r from-base-850/80 via-base-850/50 to-base-850/80 px-4 py-2.5">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: accent.dot, boxShadow: `0 0 10px ${accent.dot}` }} />
          <span className="label-mono" style={{ color: accent.text }}>
            Station {step.sequence} / 10
          </span>
          <span className="font-display text-[15px] font-semibold text-ink">{step.title}</span>
          {state.transforming ? (
            <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-molten-300">
              <Zap className="h-3 w-3 animate-pulse" /> Processing
            </span>
          ) : done ? (
            <span className="font-mono text-[10px] uppercase tracking-wider text-pass">Complete</span>
          ) : (
            <span className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">Standby</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {(mode === "factory" || mode === "closeup") && (
            <button
              onClick={() => setShowCrew((v) => !v)}
              aria-pressed={showCrew}
              title="Toggle the conceptual factory crew"
              className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-1 font-mono text-[10px] uppercase tracking-wider transition ${
                showCrew
                  ? "border-violet-500/50 bg-violet-500/15 text-violet-200"
                  : "border-line text-ink-faint hover:border-line-strong"
              }`}
            >
              <Users className="h-3 w-3" /> Crew
            </button>
          )}
          <ViewModeToggle mode={mode} onChange={setMode} />
        </div>
      </div>

      {/* 3D stage */}
      <div className="relative h-[340px] w-full sm:h-[440px] lg:h-[560px]">
        {mounted ? (
          <FactoryScene3D state={state} viewMode={mode} progress={progress} showCrew={showCrew} />
        ) : (
          <div className="flex h-full w-full items-center justify-center gap-2 bg-base-850 text-ink-faint">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span className="font-mono text-xs">building factory floor…</span>
          </div>
        )}

        {mode === "cutaway" && (
          <MaterialCutaway
            step={step}
            materialStateId={state.materialStateId}
            progress={progress}
            transforming={state.transforming}
            done={done}
          />
        )}

        {mode === "chemistry" && (
          <ChemistryModePanel
            chem={stationChemistry[step.id]}
            density={stationCrosslinkDensity(step.id, state.transforming, done)}
            materialStateLabel={materialStates[state.materialStateId].short}
          />
        )}

        {mode === "intel" && (
          <MachineIntelligencePanel
            equipment={primaryEquipmentForStation(step.id)}
            control={manufacturingControlsByStation[step.id]}
            qaTests={step.id === "inspection" ? ["Hardness", "Thickness", "Visual", "Tensile"] : undefined}
            releaseStatus={
              step.id === "inspection"
                ? done
                  ? "Accepted for shipment"
                  : state.transforming
                    ? "Under review"
                    : "Pending inspection"
                : undefined
            }
          />
        )}

        {/* Orbit hint */}
        <div className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 rounded-md border border-line bg-base-900/70 px-2 py-1 font-mono text-[10px] text-ink-faint backdrop-blur-sm">
          <Move3d className="h-3 w-3" /> drag to orbit · scroll to zoom
        </div>
      </div>

      {/* Progress rail */}
      <div className="h-1 w-full bg-base-700">
        <div
          className="h-full bg-gradient-to-r from-molten-500 to-molten-300 transition-[width] duration-150"
          style={{ width: `${(state.transforming ? progress : done ? 1 : 0) * 100}%` }}
        />
      </div>
    </div>
  );
}
