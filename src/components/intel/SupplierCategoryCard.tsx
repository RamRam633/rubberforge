import type { SupplierCategory } from "@/types/factoryIntel";
import { Building2 } from "lucide-react";

export function SupplierCategoryCard({ supplier }: { supplier: SupplierCategory }) {
  return (
    <div className="panel flex h-full flex-col p-4">
      <div className="flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-steel-400/30 bg-steel-500/10 text-steel-300">
          <Building2 className="h-5 w-5" />
        </span>
        <h3 className="font-display text-[15px] font-semibold leading-tight text-ink">{supplier.name}</h3>
      </div>
      <p className="mt-2 text-[12.5px] leading-relaxed text-ink-muted">{supplier.whatTheySell}</p>

      <div className="mt-3 space-y-2.5">
        <Mini label="Capabilities to ask about" items={supplier.capabilitiesToAsk} />
        <Mini label="What a buyer should prepare" items={supplier.buyerPrep} />
        <Mini label="Integration questions" items={supplier.integrationQuestions} />
      </div>

      <div className="mt-3 grid grid-cols-1 gap-2 border-t border-line pt-2.5 text-[11.5px] leading-relaxed text-ink-muted sm:grid-cols-2">
        <p><span className="label-mono">Spares & service. </span>{supplier.sparesService}</p>
        <p><span className="label-mono">Controls & automation. </span>{supplier.controlsAutomation}</p>
      </div>

      {supplier.vendorExamples.length > 0 && (
        <div className="mt-2.5">
          <div className="flex flex-wrap gap-1.5">
            {supplier.vendorExamples.map((v) => (
              <span key={v} className="chip">{v}</span>
            ))}
          </div>
          <p className="mt-1 text-[10px] leading-relaxed text-ink-faint">
            Illustrative examples only, verify before sourcing. Not endorsements.
          </p>
        </div>
      )}
    </div>
  );
}

function Mini({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <div className="label-mono mb-1">{label}</div>
      <ul className="space-y-0.5">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-[12px] leading-snug text-ink-muted">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-steel-400" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
