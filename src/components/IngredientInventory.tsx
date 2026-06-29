"use client";

import type { IngredientId } from "@/types/simulation";
import { ingredients } from "@/lib/ingredientData";
import { Check, Plus, Lock } from "lucide-react";

export function IngredientInventory({
  batch,
  canEdit,
  onAdd,
  onRemove,
  onAddAll,
}: {
  batch: IngredientId[];
  canEdit: boolean;
  onAdd: (id: IngredientId) => void;
  onRemove: (id: IngredientId) => void;
  onAddAll: () => void;
}) {
  return (
    <div className="panel flex flex-col p-3.5">
      <div className="mb-2.5 flex items-center justify-between">
        <div>
          <div className="label-mono">Raw Inventory</div>
          <div className="font-display text-sm font-semibold text-ink">Ingredient categories</div>
        </div>
        <button
          onClick={onAddAll}
          disabled={!canEdit || batch.length === ingredients.length}
          className="btn-ghost px-2.5 py-1 text-[11px] disabled:opacity-30"
        >
          Load all
        </button>
      </div>

      <div className="space-y-1.5">
        {ingredients.map((ing) => {
          const inBatch = batch.includes(ing.id);
          return (
            <button
              key={ing.id}
              onClick={() => (inBatch ? onRemove(ing.id) : onAdd(ing.id))}
              disabled={!canEdit}
              className={`group flex w-full items-center gap-3 rounded-lg border px-2.5 py-2 text-left transition ${
                inBatch
                  ? "border-molten-500/40 bg-molten-500/10"
                  : "border-line bg-base-700/40 hover:border-line-strong hover:bg-base-700"
              } ${!canEdit ? "cursor-not-allowed opacity-60" : ""}`}
            >
              <span
                className="h-9 w-9 shrink-0 rounded-md ring-1 ring-white/10"
                style={{
                  background: `radial-gradient(circle at 32% 28%, ${ing.colorHint}, rgba(0,0,0,0.55))`,
                }}
              />
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2">
                  <span className="truncate text-[13px] font-medium text-ink">{ing.displayName}</span>
                  <span className="chip shrink-0 px-1.5 py-0">{ing.form}</span>
                </span>
                <span className="mt-0.5 block truncate text-[11px] text-ink-muted">{ing.role}</span>
              </span>
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                  inBatch ? "bg-molten-500 text-base-900" : "bg-base-600 text-ink-muted"
                }`}
              >
                {!canEdit && !inBatch ? (
                  <Lock className="h-3 w-3" />
                ) : inBatch ? (
                  <Check className="h-3.5 w-3.5" />
                ) : (
                  <Plus className="h-3.5 w-3.5" />
                )}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
