import { FACTORY_FLOW } from "@/lib/factoryNarrative";
import { Box, Layers, GitBranch, Gauge, FileOutput, ArrowRight } from "lucide-react";

const ICONS = [Box, Layers, GitBranch, Gauge, FileOutput];

/**
 * "From Virtual Factory to Outputs" flow: model -> systems -> digital thread ->
 * analysis -> generated outputs. Shown on Home, Systems, and Outputs.
 */
export function FactoryFlow() {
  return (
    <div className="panel-raised p-4 sm:p-5">
      <div className="flex flex-col gap-2 lg:flex-row lg:items-stretch lg:gap-1">
        {FACTORY_FLOW.map((n, i) => {
          const Icon = ICONS[i] ?? Box;
          const last = i === FACTORY_FLOW.length - 1;
          return (
            <div key={n.node} className="flex flex-1 items-stretch gap-1">
              <div
                className={`flex-1 rounded-xl border p-3 ${
                  last ? "border-violet-500/40 bg-violet-500/5" : "border-line bg-base-850/40"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className={`h-4 w-4 ${last ? "text-violet-300" : "text-blue-300"}`} />
                  <span className="font-display text-[12.5px] font-semibold leading-tight text-ink">{n.node}</span>
                </div>
                <p className="mt-1.5 text-[11px] leading-relaxed text-ink-faint">{n.note}</p>
              </div>
              {!last && (
                <div className="flex items-center justify-center">
                  <ArrowRight className="h-4 w-4 shrink-0 rotate-90 text-ink-faint lg:rotate-0" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
