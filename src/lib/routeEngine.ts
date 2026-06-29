import type { RouteStep, Band } from "@/types/platform";
import type { QuoteSelection, RFQSummary } from "./quoteTypes";
import { productCategoriesById } from "./productCategories";
import { routeStepsById } from "./manufacturingRoutes";
import { materialFamiliesById } from "./materialFamilies";

// ── Deterministic preliminary manufacturing-route engine ─────────────────────
// Suggests an educational route from a product (and light material/requirement
// adjustments). Not a production plan.

export function suggestRoute(productId: string, opts?: { fabricReinforced?: boolean }): RouteStep[] {
  const product = productCategoriesById[productId];
  if (!product) return [];
  const ids = [...product.manufacturingRoute];
  // Light adjustment: fabric reinforcement adds a calendering-onto-fabric path.
  if (opts?.fabricReinforced && !ids.includes("fabric-calendering")) {
    const idx = ids.indexOf("calendering");
    if (idx >= 0) ids.splice(idx, 1, "fabric-calendering", "layering");
  }
  return ids.map((id) => routeStepsById[id]).filter(Boolean);
}

const BAND_SCORE: Record<Band, number> = {
  low: 1,
  medium: 2,
  high: 3,
  "very-high": 4,
  "application-dependent": 2,
};

// Flags where a selected environment may not match a material's strengths.
function compatibilityFlags(materialId: string, environment: string[]): string[] {
  const m = materialFamiliesById[materialId];
  if (!m) return [];
  const flags: string[] = [];
  const has = (s: string) => environment.some((e) => e.toLowerCase().includes(s));
  if (has("oil") || has("fuel")) {
    if (BAND_SCORE[m.oilResistance] <= 2)
      flags.push(`${m.abbreviation} has limited oil/fuel resistance: confirm the exact media in technical review.`);
  }
  if (has("weather") || has("ozone") || has("uv") || has("outdoor")) {
    if (BAND_SCORE[m.weatherResistance] <= 2)
      flags.push(`${m.abbreviation} has limited weather/ozone resistance: outdoor exposure needs review or a protective package.`);
  }
  if (has("high temp")) {
    if (BAND_SCORE[m.temperatureBand] <= 2)
      flags.push(`${m.abbreviation} temperature capability may be limited for the stated high-temperature service.`);
  }
  if (has("abras")) {
    if (BAND_SCORE[m.abrasionResistance] <= 2)
      flags.push(`${m.abbreviation} abrasion resistance may be marginal for a wear-driven application.`);
  }
  return flags;
}

export function buildRFQSummary(sel: QuoteSelection): RFQSummary {
  const product = productCategoriesById[sel.productId];
  const material = materialFamiliesById[sel.materialId];

  const fabricReinforced =
    sel.productId === "fabric-reinforced-sheet" || sel.answers["reinforcement"] === true;
  const suggestedRoute = suggestRoute(sel.productId, { fabricReinforced });

  // Missing required inputs the customer has not provided.
  const provided = new Set<string>(
    [
      ...Object.entries(sel.dimensions).filter(([, v]) => v).map(([k]) => k.toLowerCase()),
      ...Object.entries(sel.answers).filter(([, v]) => v !== "" && v !== false).map(([k]) => k.toLowerCase()),
      sel.quantity ? "quantity" : "",
      sel.application ? "application" : "",
    ].filter(Boolean),
  );
  const missingInfo = (product?.requiredQuoteInputs ?? []).filter((req) => {
    const key = req.toLowerCase();
    return ![...provided].some((p) => key.includes(p) || p.includes(key.split(/[ /]/)[0]));
  });
  if (!sel.drawingAvailable) missingInfo.push("Drawing, sample, or sketch (helps confirm geometry and tolerances)");

  // Questions a sales engineer should ask.
  const questionsForCustomer = [
    ...(material?.quoteQuestions ?? []),
    ...(product ? [`For ${product.name.toLowerCase()}: ${product.optionalQuoteInputs.join("; ")}.`] : []),
  ];

  // Internal technical-review notes.
  const technicalReviewNotes: string[] = [];
  if (material) {
    technicalReviewNotes.push(material.cautionNotes);
    technicalReviewNotes.push(...compatibilityFlags(sel.materialId, sel.environment));
  }
  if (sel.certificationNeeds)
    technicalReviewNotes.push(
      `Certification/testing request noted ("${sel.certificationNeeds}"): confirm exact standard and documentation in review, no certification is implied here.`,
    );

  return {
    productName: product?.name ?? "Unspecified product",
    materialName: material ? `${material.displayName} (${material.abbreviation})` : "Unspecified material",
    dimensions: sel.dimensions,
    quantity: sel.quantity,
    application: sel.application,
    environment: sel.environment,
    suggestedRoute,
    routeNote: product?.routeNote ?? "Preliminary route guidance for quote preparation, not a production plan.",
    missingInfo,
    questionsForCustomer,
    technicalReviewNotes: technicalReviewNotes.filter(Boolean),
  };
}
