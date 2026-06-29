import type { ChemistryConcept } from "@/types/chemistry";
import { Lightbulb } from "lucide-react";

export function ChemistryConceptCard({ concept }: { concept: ChemistryConcept }) {
  return (
    <div className="panel flex h-full flex-col p-4">
      <h3 className="font-display text-[16px] font-semibold text-ink">{concept.title}</h3>
      <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-muted">{concept.summary}</p>

      <ul className="mt-3 space-y-1.5">
        {concept.points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-[12.5px] leading-relaxed text-ink-muted">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
            {p}
          </li>
        ))}
      </ul>

      {concept.analogy && (
        <p className="mt-3 rounded-lg border border-steel-400/20 bg-steel-500/[0.05] px-3 py-2 text-[12px] italic leading-relaxed text-ink-muted">
          {concept.analogy}
        </p>
      )}

      <div className="mt-auto flex items-start gap-1.5 pt-3">
        <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-molten-300" />
        <p className="text-[12.5px] font-medium leading-relaxed text-ink">{concept.takeaway}</p>
      </div>
    </div>
  );
}
