"use client";

import { useMemo, useState } from "react";
import { factoryAuditChecklist } from "@/lib/factoryAuditChecklist";
import { computeReadiness, AUDIT_CATEGORY_LABELS } from "@/lib/readinessScoreEngine";
import type { AuditCategory } from "@/types/factoryLife";
import { FactoryReadinessScore } from "./FactoryReadinessScore";
import { Check, ClipboardCheck, RotateCcw, ChevronDown } from "lucide-react";

const CATEGORY_ORDER: AuditCategory[] = [
  "raw-material",
  "weighing",
  "mixing",
  "milling-calendering",
  "curing",
  "finishing",
  "quality",
  "shipping",
  "rfq",
];

export function FactoryAuditMode() {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  // Multi-open: opening one section must never collapse another. Collapsing a
  // section above the tapped header would shift everything up and yank the header
  // out from under the finger (the worst tap-jump in the app).
  const [open, setOpen] = useState<Set<AuditCategory>>(() => new Set<AuditCategory>(["raw-material"]));
  const toggleOpen = (c: AuditCategory) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });

  const result = useMemo(() => computeReadiness(checked), [checked]);

  const groups = useMemo(
    () =>
      CATEGORY_ORDER.map((category) => ({
        category,
        label: AUDIT_CATEGORY_LABELS[category],
        items: factoryAuditChecklist.filter((i) => i.category === category),
      })).filter((g) => g.items.length > 0),
    [],
  );

  function toggle(id: string) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function checkAll() {
    setChecked(new Set(factoryAuditChecklist.map((i) => i.id)));
  }

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_360px]">
      <div className="panel p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ClipboardCheck className="h-4 w-4 text-violet-300" />
            <span className="kicker-violet">Factory audit</span>
          </div>
          <div className="flex gap-2">
            <button onClick={checkAll} className="btn-ghost text-[12px]">
              <Check className="h-3.5 w-3.5" /> Confirm all
            </button>
            <button onClick={() => setChecked(new Set())} className="btn-ghost text-[12px]">
              <RotateCcw className="h-3.5 w-3.5" /> Reset
            </button>
          </div>
        </div>
        <p className="mt-2 text-[12.5px] leading-relaxed text-ink-muted">
          Walk the conceptual checkpoints a buyer or auditor commonly looks for across the line. Confirm the ones a
          run would satisfy to build a preliminary readiness picture. These are educational prompts, not a formal
          audit standard.
        </p>

        <div className="mt-3 flex flex-col gap-2">
          {groups.map((g) => {
            const isOpen = open.has(g.category);
            const done = g.items.filter((i) => checked.has(i.id)).length;
            return (
              <div key={g.category} className="overflow-hidden rounded-lg border border-line">
                <button
                  onClick={() => toggleOpen(g.category)}
                  className="flex w-full items-center justify-between gap-2 bg-base-850/50 px-3 py-2.5 text-left transition hover:bg-base-800/60"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-2 text-[13px] font-medium text-ink">
                    {g.label}
                    <span className="label-mono text-[10px] text-ink-faint">
                      {done}/{g.items.length}
                    </span>
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-ink-faint transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <ul className="divide-y divide-line/60">
                    {g.items.map((item) => {
                      const on = checked.has(item.id);
                      return (
                        <li key={item.id}>
                          <button
                            onClick={() => toggle(item.id)}
                            className="flex w-full items-start gap-2.5 px-3 py-2.5 text-left transition hover:bg-base-800/40"
                          >
                            <span
                              className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                                on ? "border-pass bg-pass/20 text-pass" : "border-line-strong text-transparent"
                              }`}
                            >
                              <Check className="h-3 w-3" />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-[12.5px] leading-snug text-ink-muted">{item.question}</span>
                              <span className="mt-0.5 block text-[11px] leading-snug text-ink-faint">
                                {item.helpsAnswer}
                              </span>
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="lg:sticky lg:top-4 lg:self-start">
        <FactoryReadinessScore result={result} />
      </div>
    </div>
  );
}
