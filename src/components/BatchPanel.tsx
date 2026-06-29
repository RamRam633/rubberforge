"use client";

import type { IngredientId } from "@/types/simulation";
import { ingredients, ALL_INGREDIENT_IDS } from "@/lib/ingredientData";
import { motion } from "framer-motion";

export function BatchPanel({ batch }: { batch: IngredientId[] }) {
  const complete = batch.length === ALL_INGREDIENT_IDS.length;
  return (
    <div className="panel p-3.5">
      <div className="mb-2.5 flex items-center justify-between">
        <div>
          <div className="label-mono">Weigh Tray</div>
          <div className="font-display text-sm font-semibold text-ink">Current batch</div>
        </div>
        <span
          className={`chip ${complete ? "border-pass/40 text-pass" : "text-ink-muted"}`}
        >
          {batch.length}/{ALL_INGREDIENT_IDS.length} loaded
        </span>
      </div>

      {/* Six slots that fill as categories are added */}
      <div className="grid grid-cols-3 gap-1.5">
        {ingredients.map((ing) => {
          const filled = batch.includes(ing.id);
          return (
            <div
              key={ing.id}
              className={`relative flex h-[52px] flex-col items-center justify-center gap-1 rounded-md border text-center transition ${
                filled ? "border-line-strong bg-base-700" : "border-dashed border-line bg-base-850/40"
              }`}
            >
              {filled ? (
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 320, damping: 18 }}
                  className="h-5 w-5 rounded-full ring-1 ring-white/15"
                  style={{
                    background: `radial-gradient(circle at 32% 28%, ${ing.colorHint}, rgba(0,0,0,0.6))`,
                  }}
                />
              ) : (
                <span className="h-5 w-5 rounded-full border border-dashed border-line" />
              )}
              <span className="px-1 text-[8px] uppercase tracking-wide text-ink-faint">
                {ing.category.split(" ")[0]}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-base-600">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-molten-500 to-molten-300"
          initial={false}
          animate={{ width: `${(batch.length / ALL_INGREDIENT_IDS.length) * 100}%` }}
          transition={{ type: "spring", stiffness: 180, damping: 26 }}
        />
      </div>
      <p className="mt-2 text-[11px] leading-relaxed text-ink-muted">
        {complete
          ? "Batch complete. The cure package is kitted separately and added later at the mill, not in the hot mixer."
          : "Load every ingredient category to assemble a complete, repeatable batch."}
      </p>
    </div>
  );
}
