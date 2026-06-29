import type { CapabilityChain } from "@/types/factoryIntel";
import { ArrowRight } from "lucide-react";

const COLUMNS: { key: keyof CapabilityChain; label: string; tone: string }[] = [
  { key: "processes", label: "Processes", tone: "border-molten-400/30 text-molten-300" },
  { key: "equipment", label: "Equipment", tone: "border-steel-400/30 text-steel-300" },
  { key: "products", label: "Products", tone: "border-pass/30 text-pass" },
  { key: "tests", label: "Tests", tone: "border-violet-500/30 text-violet-300" },
  { key: "quoteQuestions", label: "RFQ questions", tone: "border-line text-ink-muted" },
];

// Material -> processes -> equipment -> products -> tests -> RFQ questions.
export function FactoryCapabilityMap({ chains }: { chains: CapabilityChain[] }) {
  return (
    <div className="space-y-3">
      {chains.map((chain) => (
        <div key={chain.id} className="panel p-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-lg border border-violet-500/40 bg-violet-500/15 px-3 py-1.5 font-display text-[14px] font-semibold text-violet-200">
              {chain.materialLabel}
            </span>
            <ArrowRight className="h-4 w-4 text-ink-faint" />
            <span className="text-[12px] text-ink-muted">{chain.summary}</span>
          </div>

          <div className="mt-3 grid gap-2 lg:grid-cols-5">
            {COLUMNS.map((col, ci) => {
              const items = chain[col.key] as string[];
              return (
                <div key={col.label} className="relative">
                  <div className="label-mono mb-1.5">{col.label}</div>
                  <div className="flex flex-wrap gap-1">
                    {items.map((it) => (
                      <span key={it} className={`chip ${col.tone} normal-case tracking-normal`}>{it}</span>
                    ))}
                  </div>
                  {ci < COLUMNS.length - 1 && (
                    <ArrowRight className="absolute -right-1.5 top-7 hidden h-3.5 w-3.5 text-ink-faint lg:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
