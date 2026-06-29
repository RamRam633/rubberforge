"use client";

import { useState } from "react";
import type { BillOfProcess as BOP } from "@/lib/billOfProcessEngine";
import { RoutePreview } from "@/components/platform/RoutePreview";
import { IntelList } from "./EquipmentDetailPanel";
import { Copy, Check, ClipboardList } from "lucide-react";

function toText(b: BOP): string {
  const lines = [
    `FACTORY BILL OF PROCESS (preliminary, educational)`,
    `Product: ${b.productName}`,
    `Material: ${b.materialName}`,
    ``,
    `Route: ${b.route.map((s) => s.label).join(" -> ")}`,
    ``,
    `Required equipment:`,
    ...b.requiredEquipment.map((e) => `  - ${e.name}`),
    ``,
    `Ingredient categories:`,
    ...b.ingredientCategories.map((i) => `  - ${i}`),
    ``,
    `Process checkpoints:`,
    ...b.processCheckpoints.map((p) => `  - ${p}`),
    ``,
    `Quality checks:`,
    ...b.qualityChecks.map((q) => `  - ${q}`),
    ``,
    `Documents to request:`,
    ...b.documentsToRequest.map((d) => `  - ${d}`),
    ``,
    `Technical risks:`,
    ...b.technicalRisks.map((t) => `  - ${t}`),
    ``,
    `Suggested internal review owners: ${b.reviewOwners.join(", ")}`,
    ``,
    `This is preliminary quote-preparation guidance, not a production plan. No pricing.`,
  ];
  return lines.join("\n");
}

export function BillOfProcess({ bop }: { bop: BOP }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(toText(bop));
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="panel-raised overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-gradient-to-r from-violet-600/15 to-transparent px-5 py-4">
        <div>
          <div className="flex items-center gap-2 text-violet-300">
            <ClipboardList className="h-4 w-4" />
            <span className="label-mono text-violet-300">Factory bill of process</span>
          </div>
          <h2 className="mt-1 font-display text-xl font-semibold text-ink">
            {bop.productName} <span className="text-ink-faint">·</span>{" "}
            <span className="text-violet-300">{bop.materialName}</span>
          </h2>
        </div>
        <button onClick={copy} className="btn-ghost text-sm">
          {copied ? <Check className="h-4 w-4 text-pass" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied" : "Copy as text"}
        </button>
      </div>

      <div className="space-y-4 px-5 py-4">
        <div>
          <div className="label-mono mb-1.5">Preliminary route</div>
          <RoutePreview steps={bop.route} note={bop.routeNote} />
        </div>

        <div>
          <div className="label-mono mb-1.5">Required equipment</div>
          <div className="flex flex-wrap gap-1.5">
            {bop.requiredEquipment.map((e) => (
              <span key={e.id} className="chip border-steel-400/25 text-steel-300">{e.name}</span>
            ))}
          </div>
        </div>

        <div>
          <div className="label-mono mb-1.5">Ingredient categories involved</div>
          <div className="flex flex-wrap gap-1.5">
            {bop.ingredientCategories.map((i) => (
              <span key={i} className="chip border-molten-400/25 text-molten-300">{i}</span>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <IntelList title="Process checkpoints" items={bop.processCheckpoints} />
          <IntelList title="Quality checks" items={bop.qualityChecks} tone="violet" />
          <IntelList title="Documents to request" items={bop.documentsToRequest} />
          <IntelList title="Key sourcing questions" items={bop.sourcingQuestions} tone="molten" />
        </div>

        {bop.technicalRisks.length > 0 && <IntelList title="Technical risks" items={bop.technicalRisks} tone="warn" />}

        <div className="flex flex-wrap items-center gap-2 border-t border-line pt-3">
          <span className="label-mono">Suggested review owners</span>
          {bop.reviewOwners.map((o) => (
            <span key={o} className="chip capitalize">{o}</span>
          ))}
        </div>

        <p className="rounded-lg border border-line bg-base-850/50 px-3 py-2 text-[11px] leading-relaxed text-ink-faint">
          Preliminary quote-preparation guidance, not a production plan. No pricing, no certified
          properties. Equipment, route, and checks require engineering and quality review.
        </p>
      </div>
    </div>
  );
}
