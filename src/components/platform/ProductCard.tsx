"use client";

import Link from "next/link";
import type { ProductCategory, MaterialFamily, RouteStep, SimulatorAvailability } from "@/types/platform";
import { RoutePreview } from "./RoutePreview";
import { PolymerChainIcon } from "@/components/chemistry/ChemistryKit";
import { defectChemistryById } from "@/lib/defectChemistryMap";
import { ArrowRight, PlayCircle, AlertTriangle } from "lucide-react";

const AVAIL: Record<SimulatorAvailability, { label: string; cls: string }> = {
  "available-now": { label: "Simulator: available now", cls: "border-pass/40 text-pass" },
  "simplified-route": { label: "Route preview", cls: "border-molten-400/40 text-molten-300" },
  "future-module": { label: "Future module", cls: "border-line text-ink-faint" },
};

export function ProductCard({
  product,
  materialsById,
  stepsById,
}: {
  product: ProductCategory;
  materialsById: Record<string, MaterialFamily>;
  stepsById: Record<string, RouteStep>;
}) {
  const avail = AVAIL[product.simulatorAvailability];
  const routeSteps = product.manufacturingRoute.map((id) => stepsById[id]).filter(Boolean);

  return (
    <div className="panel flex h-full flex-col p-4 transition hover:border-line-strong">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display text-[16px] font-semibold leading-tight text-ink">{product.name}</h3>
        <span className={`chip shrink-0 ${avail.cls}`}>{avail.label}</span>
      </div>
      <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-muted">{product.shortDescription}</p>

      <div className="mt-3">
        <div className="mb-1.5 flex items-center gap-1.5 label-mono"><PolymerChainIcon /> Likely material families</div>
        <div className="flex flex-wrap gap-1.5">
          {product.commonMaterials.slice(0, 6).map((id) => (
            <span key={id} className="chip border-violet-500/25 text-violet-300" title={materialsById[id]?.displayName}>
              {materialsById[id]?.abbreviation ?? id}
            </span>
          ))}
        </div>
      </div>

      {product.commonDefects.length > 0 && (
        <div className="mt-3">
          <div className="mb-1.5 flex items-center gap-1.5 label-mono text-molten-300"><AlertTriangle className="h-3 w-3" /> Chemistry-sensitive checks</div>
          <div className="flex flex-wrap gap-1.5">
            {product.commonDefects.slice(0, 4).map((id) => (
              <span key={id} className="chip border-molten-400/30 text-molten-300">
                {defectChemistryById[id]?.defect ?? id}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-3">
        <div className="label-mono mb-1.5">Common applications</div>
        <div className="flex flex-wrap gap-1.5">
          {product.applications.slice(0, 4).map((a) => (
            <span key={a} className="chip">{a}</span>
          ))}
        </div>
      </div>

      <div className="mt-3">
        <div className="label-mono mb-1.5">Likely manufacturing route</div>
        <RoutePreview steps={routeSteps} note={product.routeNote} />
      </div>

      <div className="mt-auto flex items-center justify-between gap-2 border-t border-line pt-3">
        {product.simulatorAvailability === "available-now" ? (
          <Link href="/simulator" className="inline-flex items-center gap-1.5 text-[12px] font-medium text-pass hover:text-pass/80">
            <PlayCircle className="h-3.5 w-3.5" /> Run simulator
          </Link>
        ) : (
          <span className="text-[11px] text-ink-faint">Route preview</span>
        )}
        <Link
          href={`/quote?product=${product.id}`}
          className="inline-flex items-center gap-1 text-[12px] font-medium text-molten-300 hover:text-molten-200"
        >
          Request quote <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
