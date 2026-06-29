import type { MaterialFamily } from "@/types/platform";
import { Atom } from "lucide-react";

// Chemistry-focused view of a base polymer family (for the Rubber Chemistry page).
export function PolymerChemistryCard({ material }: { material: MaterialFamily }) {
  return (
    <div className="panel flex h-full flex-col p-4">
      <div className="flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/10 text-violet-300">
          <Atom className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-display text-[15px] font-semibold leading-tight text-ink">{material.displayName}</h3>
          <span className="text-[11px] text-ink-faint">{material.abbreviation}</span>
        </div>
      </div>

      <p className="mt-2.5 text-[12.5px] leading-relaxed text-ink-muted">{material.chemicalCharacter}</p>

      <div className="mt-2.5 flex flex-wrap gap-1.5">
        <span className="chip">polarity: {material.polarity}</span>
        <span className="chip">{material.saturation}</span>
        <span className="chip border-molten-400/30 text-molten-300">{material.cureConcept}</span>
      </div>

      <p className="mt-2.5 text-[12px] leading-relaxed text-ink-muted">{material.chemistryNotes}</p>

      <div className="mt-3 border-t border-line pt-2.5">
        <div className="label-mono mb-1">Compatibility</div>
        <p className="text-[12px] leading-relaxed text-ink-muted">{material.compatibilityNotes}</p>
      </div>
    </div>
  );
}
