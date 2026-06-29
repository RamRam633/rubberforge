import type { MaterialStateId } from "@/types/simulation";
import { materialStates, materialStateOrder } from "@/lib/materialData";
import { CureStateBadge, cureStateForMaterial, PolymerChainIcon, CrosslinkNetworkVisual } from "./chemistry/ChemistryKit";

export function MaterialStateBadge({
  stateId,
  detailed = false,
}: {
  stateId: MaterialStateId;
  detailed?: boolean;
}) {
  const ms = materialStates[stateId];
  const index = materialStateOrder.indexOf(stateId);

  if (!detailed) {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-line bg-base-700/70 px-3 py-1">
        <span
          className="h-2.5 w-2.5 rounded-full ring-2 ring-white/10"
          style={{ backgroundColor: ms.tone }}
        />
        <span className="font-mono text-[11px] uppercase tracking-wider text-ink">{ms.label}</span>
        <span className="font-mono text-[10px] text-ink-faint">
          {index + 1}/{materialStateOrder.length}
        </span>
      </span>
    );
  }

  return (
    <div className="panel-tight p-3">
      <div className="flex items-center gap-3">
        <span
          className="h-9 w-9 shrink-0 rounded-md ring-1 ring-white/10"
          style={{
            background: `linear-gradient(135deg, ${ms.tone}, rgba(0,0,0,0.5))`,
          }}
        />
        <div className="min-w-0">
          <div className="label-mono">Material state {index + 1}/8</div>
          <div className="font-display text-sm font-semibold text-ink">{ms.label}</div>
        </div>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-ink-muted">{ms.description}</p>
      <div className="mt-2.5 flex items-center justify-between gap-2 border-t border-line pt-2">
        <span className="flex items-center gap-1.5 text-[10px] text-ink-faint">
          {cureStateForMaterial(stateId) === "cured" ? <CrosslinkNetworkVisual size={16} /> : <PolymerChainIcon />}
          {cureStateForMaterial(stateId) === "cured" ? "crosslinked network" : "polymer chains"}
        </span>
        <CureStateBadge state={cureStateForMaterial(stateId)} />
      </div>
    </div>
  );
}
