import type { DefectChemistry } from "@/types/chemistry";
import { FlaskConical, Cog, MapPin } from "lucide-react";

const SEV: Record<DefectChemistry["severity"], string> = {
  low: "border-steel-400/40 text-steel-300",
  medium: "border-warn/40 text-warn",
  high: "border-fail/40 text-fail",
};

// Shows both the chemistry/material cause and the process cause of a defect.
export function DefectChemistryPanel({ defect, revealed = true }: { defect: DefectChemistry; revealed?: boolean }) {
  return (
    <div className="panel flex h-full flex-col p-4">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display text-[15px] font-semibold leading-tight text-ink">{defect.defect}</h3>
        <span className={`chip shrink-0 ${SEV[defect.severity]}`}>{defect.severity}</span>
      </div>

      <div className="mt-2">
        <div className="label-mono mb-1">Visual symptom</div>
        <p className="text-[12px] leading-relaxed text-ink-muted">{defect.visualSymptom}</p>
      </div>

      {revealed && (
        <>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <div className="rounded-lg border border-violet-500/25 bg-violet-500/[0.05] p-2.5">
              <div className="mb-1 flex items-center gap-1.5">
                <FlaskConical className="h-3.5 w-3.5 text-violet-300" />
                <span className="label-mono text-violet-300">Chemistry cause</span>
              </div>
              <p className="text-[12px] leading-relaxed text-ink-muted">{defect.chemistryCause}</p>
            </div>
            <div className="rounded-lg border border-molten-400/25 bg-molten-500/[0.05] p-2.5">
              <div className="mb-1 flex items-center gap-1.5">
                <Cog className="h-3.5 w-3.5 text-molten-300" />
                <span className="label-mono text-molten-300">Process cause</span>
              </div>
              <p className="text-[12px] leading-relaxed text-ink-muted">{defect.processCause}</p>
            </div>
          </div>

          <p className="mt-3 text-[12px] leading-relaxed text-ink-muted">{defect.learningExplanation}</p>

          <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-line pt-2.5">
            <span className="flex items-center gap-1 text-[11px] text-ink-faint">
              <MapPin className="h-3 w-3 text-violet-300" /> {defect.whereItAppears}
            </span>
            <span className="chip ml-auto">{defect.affectedMaterialState}</span>
          </div>
        </>
      )}
    </div>
  );
}
