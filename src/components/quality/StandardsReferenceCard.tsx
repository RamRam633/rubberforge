import type { StandardRef } from "@/types/quality";
import { BookMarked } from "lucide-react";

export function StandardsReferenceCard({ standard }: { standard: StandardRef }) {
  const org = standard.organization;
  return (
    <div className="panel flex h-full flex-col p-4">
      <div className="flex items-center justify-between gap-2">
        <span className="rounded-md border border-violet-500/30 bg-violet-500/10 px-2.5 py-1 font-mono text-[12px] font-semibold text-violet-200">
          {standard.code}
        </span>
        <span className={`chip ${org === "ASTM" ? "border-molten-400/30 text-molten-300" : "border-steel-400/30 text-steel-300"}`}>
          {org}
        </span>
      </div>
      <h3 className="mt-2.5 font-display text-[14px] font-semibold leading-tight text-ink">{standard.titleShort}</h3>
      <p className="mt-1 text-[11.5px] text-ink-faint">Measures: {standard.propertyMeasured}</p>
      <p className="mt-2 flex-1 text-[12px] leading-relaxed text-ink-muted">{standard.plainLanguagePurpose}</p>

      <div className="mt-2.5">
        <div className="label-mono mb-1">A customer may request it when</div>
        <ul className="space-y-0.5">
          {standard.rfqTriggers.map((t) => (
            <li key={t} className="flex items-start gap-1.5 text-[11.5px] leading-snug text-ink-muted">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-2.5 flex items-center gap-1.5 border-t border-line pt-2.5 text-[10.5px] leading-relaxed text-ink-faint">
        <BookMarked className="h-3 w-3 shrink-0" /> {standard.caution}
      </div>
    </div>
  );
}
