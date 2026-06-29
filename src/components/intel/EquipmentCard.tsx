"use client";

import type { Equipment } from "@/types/factoryIntel";
import { Wrench, ArrowRight, Factory } from "lucide-react";

export const EQUIPMENT_CATEGORY_LABELS: Record<string, string> = {
  "raw-material-handling": "Raw material handling",
  mixing: "Mixing",
  milling: "Milling",
  "sheeting-forming": "Sheeting & forming",
  curing: "Curing",
  "cutting-finishing": "Cutting & finishing",
  molding: "Molding",
  "inspection-testing": "Inspection & testing",
  "packaging-shipping": "Packaging & shipping",
};

export function EquipmentCard({ equipment, onOpen }: { equipment: Equipment; onOpen: () => void }) {
  return (
    <button onClick={onOpen} className="panel group flex h-full flex-col p-4 text-left transition hover:border-line-strong">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/10 text-violet-300">
            <Wrench className="h-4 w-4" />
          </span>
          <h3 className="font-display text-[15px] font-semibold leading-tight text-ink">{equipment.name}</h3>
        </div>
      </div>
      <span className="chip mt-2 w-fit">{EQUIPMENT_CATEGORY_LABELS[equipment.category] ?? equipment.category}</span>
      <p className="mt-2 flex-1 text-[12px] leading-relaxed text-ink-muted">{equipment.whatItDoes}</p>
      <div className="mt-3 flex items-center justify-between border-t border-line pt-2.5">
        <span className="flex items-center gap-1 text-[11px] text-ink-faint">
          <Factory className="h-3 w-3" /> {equipment.whereInFactory.split(",")[0]}
        </span>
        <span className="inline-flex items-center gap-1 text-[12px] font-medium text-violet-300 group-hover:text-violet-200">
          Detail <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </button>
  );
}
