import type { AuditCategory } from "@/types/factoryLife";
import { factoryAuditChecklist } from "./factoryAuditChecklist";

// Turns a set of confirmed audit items into a conceptual factory-readiness
// score. This is an educational self-assessment, not a certification or a
// compliance result. Wording stays preliminary on purpose.

export type ReadinessLevel = "emerging" | "developing" | "qualified" | "audit-ready";

export interface CategoryScore {
  category: AuditCategory;
  label: string;
  checked: number;
  total: number;
  pct: number;
}

export interface ReadinessResult {
  checked: number;
  total: number;
  pct: number;
  level: ReadinessLevel;
  levelLabel: string;
  summary: string;
  byCategory: CategoryScore[];
}

export const AUDIT_CATEGORY_LABELS: Record<AuditCategory, string> = {
  "raw-material": "Raw material control",
  weighing: "Weighing & batch prep",
  mixing: "Mixing",
  "milling-calendering": "Milling & calendering",
  curing: "Curing",
  finishing: "Finishing",
  quality: "Quality & inspection",
  shipping: "Packaging & shipping",
  rfq: "RFQ readiness",
};

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

const LEVELS: { level: ReadinessLevel; label: string; min: number; summary: string }[] = [
  {
    level: "emerging",
    label: "Emerging",
    min: 0,
    summary:
      "Early-stage readiness. Several conceptual controls are still open; a buyer would generally want a deeper technical review before committing volume.",
  },
  {
    level: "developing",
    label: "Developing",
    min: 0.4,
    summary:
      "Core process controls are taking shape. Many checkpoints are confirmed, though gaps remain that commonly warrant clarification during quoting.",
  },
  {
    level: "qualified",
    label: "Qualified (preliminary)",
    min: 0.7,
    summary:
      "Most conceptual checkpoints across the line are confirmed. This profile generally supports a credible quote, subject to final technical review.",
  },
  {
    level: "audit-ready",
    label: "Audit-ready (preliminary)",
    min: 0.9,
    summary:
      "Nearly all conceptual checkpoints are confirmed across material, process, quality, and RFQ scope. A strong preliminary basis for a detailed quote and a site audit.",
  },
];

function levelFor(pct: number) {
  let result = LEVELS[0];
  for (const l of LEVELS) if (pct >= l.min) result = l;
  return result;
}

export function computeReadiness(checkedIds: Iterable<string>): ReadinessResult {
  const checkedSet = new Set(checkedIds);
  const total = factoryAuditChecklist.length;
  const checked = factoryAuditChecklist.filter((i) => checkedSet.has(i.id)).length;
  const pct = total === 0 ? 0 : checked / total;

  const byCategory: CategoryScore[] = CATEGORY_ORDER.map((category) => {
    const items = factoryAuditChecklist.filter((i) => i.category === category);
    const c = items.filter((i) => checkedSet.has(i.id)).length;
    return {
      category,
      label: AUDIT_CATEGORY_LABELS[category],
      checked: c,
      total: items.length,
      pct: items.length === 0 ? 0 : c / items.length,
    };
  }).filter((c) => c.total > 0);

  const lvl = levelFor(pct);
  return {
    checked,
    total,
    pct,
    level: lvl.level,
    levelLabel: lvl.label,
    summary: lvl.summary,
    byCategory,
  };
}
