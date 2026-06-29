import type { SupplyChainStage, SupplyStageType } from "@/types/factoryIntel";
import { FileCheck } from "lucide-react";

const TYPE: Record<SupplyStageType, { label: string; dot: string; chip: string }> = {
  supplier: { label: "Supplier", dot: "#7c3aed", chip: "border-violet-500/30 text-violet-300" },
  inbound: { label: "Inbound", dot: "#38bdf8", chip: "border-steel-400/30 text-steel-300" },
  internal: { label: "Internal", dot: "#ff8c2b", chip: "border-molten-400/30 text-molten-300" },
  outbound: { label: "Outbound", dot: "#35d6a4", chip: "border-pass/30 text-pass" },
};

// Vertical timeline of how raw materials enter and move through the factory.
export function SupplyChainMap({ stages }: { stages: SupplyChainStage[] }) {
  return (
    <div className="relative">
      <div className="absolute bottom-2 left-[11px] top-2 w-px bg-line" />
      <div className="space-y-2.5">
        {stages.map((s) => {
          const t = TYPE[s.stageType];
          return (
            <div key={s.id} className="relative pl-8">
              <span
                className="absolute left-1.5 top-3 h-3 w-3 rounded-full ring-4 ring-base-900"
                style={{ backgroundColor: t.dot }}
              />
              <div className="panel p-3.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-[14px] font-semibold text-ink">{s.name}</h3>
                  <span className={`chip ${t.chip}`}>{t.label}</span>
                </div>
                <p className="mt-1.5 text-[12px] leading-relaxed text-ink-muted">{s.whatIsSupplied}</p>

                <div className="mt-2 grid gap-2.5 sm:grid-cols-3">
                  <div>
                    <div className="mb-1 flex items-center gap-1 text-[10px] uppercase tracking-wide text-steel-300">
                      <FileCheck className="h-3 w-3" /> Documents
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {s.documentsThatMatter.map((d) => (
                        <span key={d} className="chip px-1.5 py-0.5 text-[8.5px]">{d}</span>
                      ))}
                    </div>
                  </div>
                  <SmallList label="Risks" items={s.risks} tone="warn" />
                  <SmallList label="Questions to ask" items={s.questionsToAsk} tone="violet" />
                </div>

                <p className="mt-2 border-t border-line pt-2 text-[11px] leading-relaxed text-ink-faint">
                  <span className="text-ink-muted">Manufacturing impact. </span>
                  {s.manufacturingImpact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SmallList({ label, items, tone }: { label: string; items: string[]; tone: "warn" | "violet" }) {
  const dot = tone === "warn" ? "bg-warn" : "bg-violet-400";
  return (
    <div>
      <div className="label-mono mb-1">{label}</div>
      <ul className="space-y-0.5">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-1.5 text-[11px] leading-snug text-ink-muted">
            <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${dot}`} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
