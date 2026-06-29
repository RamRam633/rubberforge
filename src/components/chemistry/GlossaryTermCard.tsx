import type { GlossaryTerm } from "@/types/chemistry";
import { MapPin } from "lucide-react";

export function GlossaryTermCard({ term }: { term: GlossaryTerm }) {
  return (
    <div className="panel p-4">
      <h3 className="font-display text-[15px] font-semibold text-ink">{term.term}</h3>
      <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-muted">{term.definition}</p>
      <p className="mt-2 text-[12px] leading-relaxed text-ink-faint">
        <span className="font-medium text-ink-muted">Why it matters. </span>
        {term.whyItMatters}
      </p>
      <div className="mt-2 flex items-start gap-1.5 border-t border-line pt-2 text-[11px] leading-relaxed text-ink-faint">
        <MapPin className="mt-0.5 h-3 w-3 shrink-0 text-violet-300" />
        {term.whereInFactory}
      </div>
    </div>
  );
}
