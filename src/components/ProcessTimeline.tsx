import type { SimState } from "@/types/simulation";
import { processSteps } from "@/lib/processData";
import { stepStatus } from "@/lib/simulationState";
import { machinesById, familyAccent } from "@/lib/machineData";
import { Check } from "lucide-react";

export function ProcessTimeline({ state }: { state: SimState }) {
  return (
    <div className="panel px-4 py-3">
      <div className="mb-2.5 flex items-center justify-between">
        <span className="label-mono">Process Line</span>
        <span className="font-mono text-[10px] text-ink-faint">
          {state.completedSteps.length} of {processSteps.length} stations complete
        </span>
      </div>
      <ol className="flex items-stretch gap-1.5 overflow-x-auto pb-1">
        {processSteps.map((step, i) => {
          const status = stepStatus(state, step.id);
          const accent = familyAccent[machinesById[step.id].family];
          const isActiveTransforming = status === "active" && state.transforming;
          return (
            <li key={step.id} className="flex min-w-0 flex-1 items-center gap-1.5">
              <div
                className={`relative flex min-w-[88px] flex-1 flex-col items-center gap-1 rounded-lg border px-2 py-2 transition ${
                  status === "active"
                    ? "border-line-strong bg-base-700"
                    : status === "done"
                      ? "border-line bg-base-800/60"
                      : "border-line/60 bg-base-850/40"
                }`}
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full font-mono text-[11px] ${
                    isActiveTransforming ? "animate-pulse-glow" : ""
                  }`}
                  style={{
                    backgroundColor:
                      status === "locked" ? "rgba(255,255,255,0.04)" : `${accent.dot}22`,
                    color: status === "locked" ? "#6b6356" : accent.text,
                    boxShadow: status === "active" ? `0 0 0 1px ${accent.ring}` : "none",
                  }}
                >
                  {status === "done" ? <Check className="h-3.5 w-3.5" /> : i + 1}
                </span>
                <span
                  className={`text-center text-[10.5px] leading-tight ${
                    status === "locked" ? "text-ink-faint" : "text-ink-muted"
                  }`}
                >
                  {machinesById[step.id].shortName}
                </span>
                {status === "active" && (
                  <span className="absolute -bottom-[5px] h-1 w-1 rounded-full bg-molten-400" />
                )}
              </div>
              {i < processSteps.length - 1 && (
                <span
                  className={`h-px w-3 shrink-0 ${
                    state.completedSteps.includes(step.id) ? "bg-molten-500/60" : "bg-line"
                  }`}
                />
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
