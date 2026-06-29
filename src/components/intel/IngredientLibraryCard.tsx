"use client";

import type { IngredientLibraryItem, IngredientLibraryCategory } from "@/types/factoryIntel";
import { IntelList } from "./EquipmentDetailPanel";
import { Beaker, ArrowRight, Truck, Archive, AlertTriangle } from "lucide-react";

export const INGREDIENT_CATEGORY_LABELS: Record<IngredientLibraryCategory, string> = {
  "base-polymer": "Base polymer",
  filler: "Filler",
  "oil-plasticizer": "Oil / plasticizer",
  "cure-system": "Cure system",
  additive: "Additive",
  reinforcement: "Reinforcement",
  consumable: "Consumable",
};

export function IngredientLibraryCard({ ingredient, onOpen }: { ingredient: IngredientLibraryItem; onOpen: () => void }) {
  return (
    <button onClick={onOpen} className="panel group flex h-full flex-col p-4 text-left transition hover:border-line-strong">
      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-molten-400/30 bg-molten-500/10 text-molten-300">
          <Beaker className="h-4 w-4" />
        </span>
        <h3 className="font-display text-[14.5px] font-semibold leading-tight text-ink">{ingredient.name}</h3>
      </div>
      <span className="chip mt-2 w-fit border-molten-400/25 text-molten-300">{INGREDIENT_CATEGORY_LABELS[ingredient.category]}</span>
      <p className="mt-2 flex-1 text-[12px] leading-relaxed text-ink-muted">{ingredient.function}</p>
      <span className="mt-3 inline-flex items-center gap-1 border-t border-line pt-2.5 text-[12px] font-medium text-molten-300 group-hover:text-molten-200">
        Detail <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </button>
  );
}

export function IngredientDetailPanel({ ingredient }: { ingredient: IngredientLibraryItem }) {
  return (
    <div className="space-y-4">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="font-display text-2xl font-semibold text-ink">{ingredient.name}</h2>
          <span className="chip border-molten-400/30 text-molten-300">{INGREDIENT_CATEGORY_LABELS[ingredient.category]}</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{ingredient.function}</p>
      </div>

      <div className="grid gap-2 sm:grid-cols-3">
        <Mini label="Introduced at">{ingredient.whereIntroduced}</Mini>
        <Mini label="Physical form">{ingredient.physicalForm}</Mini>
        <Mini label="Supply source">{ingredient.supplyChain}</Mini>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Block icon={<Truck className="h-3.5 w-3.5 text-steel-300" />} label="Handling">{ingredient.handling}</Block>
        <Block icon={<Archive className="h-3.5 w-3.5 text-steel-300" />} label="Storage">{ingredient.storage}</Block>
        <Block label="Effect on processing">{ingredient.processingEffect}</Block>
        <Block label="Effect on product properties">{ingredient.propertyEffect}</Block>
        <Block label="Compatibility">{ingredient.compatibility}</Block>
        <Block label="Quality / COA">{ingredient.qualityCoa}</Block>
      </div>

      <div className="flex items-start gap-2 rounded-lg border border-warn/25 bg-warn/[0.05] px-3 py-2.5">
        <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-warn" />
        <p className="text-[12px] leading-relaxed text-ink-muted">
          <span className="font-medium text-warn">Risk if poorly selected. </span>
          {ingredient.riskIfPoor}
        </p>
      </div>

      <IntelList title="Sourcing questions to ask" items={ingredient.sourcingQuestions} tone="molten" />
    </div>
  );
}

function Mini({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="panel-tight px-3 py-2">
      <div className="label-mono">{label}</div>
      <div className="mt-0.5 text-[12px] leading-snug text-ink-muted">{children}</div>
    </div>
  );
}

function Block({ icon, label, children }: { icon?: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="panel-tight p-3">
      <div className="mb-1 flex items-center gap-1.5">
        {icon}
        <span className="label-mono">{label}</span>
      </div>
      <p className="text-[12px] leading-relaxed text-ink-muted">{children}</p>
    </div>
  );
}
