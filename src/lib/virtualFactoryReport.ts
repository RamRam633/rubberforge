import type { QuoteSelection } from "./quoteTypes";
import { buildRfqIntelligence } from "./rfqIntelligenceEngine";
import { buildBillOfProcess } from "./billOfProcessEngine";
import { materialFamiliesById } from "./materialFamilies";

export interface VirtualFactoryReport {
  customerRequirement: string;
  productAndMaterial: string;
  route: string[];
  requiredEquipment: string[];
  ingredientConsiderations: string[];
  chemistryNotes: string;
  qualityConsiderations: string[];
  standards: string[];
  traceabilityDocs: string[];
  openQuestions: string[];
  rfqCompleteness: number;
  factoryReviewNotes: string[];
  recommendedNextAction: string;
}

// The "Virtual Factory Review Package" for a product/material/RFQ selection.
export function buildVirtualFactoryReport(sel: QuoteSelection): VirtualFactoryReport {
  const intel = buildRfqIntelligence(sel);
  const bop = buildBillOfProcess(sel.productId, sel.materialId);
  const material = materialFamiliesById[sel.materialId];

  const requirement =
    [sel.application, sel.environment.join(", "), sel.quantity ? `Qty: ${sel.quantity}` : ""].filter(Boolean).join(" · ") ||
    "Requirement not yet specified";

  const recommendedNextAction =
    intel.completeness >= 80
      ? "Route to engineering and quality for technical review and quote preparation."
      : intel.completeness >= 50
        ? "Request the missing information below, then route to internal review."
        : "Use the guided RFQ builder to capture the missing critical information first.";

  return {
    customerRequirement: requirement,
    productAndMaterial: `${bop.productName} in ${bop.materialName}`,
    route: bop.route.map((s) => s.label),
    requiredEquipment: bop.requiredEquipment.map((e) => e.name),
    ingredientConsiderations: bop.ingredientCategories,
    chemistryNotes: material?.whyItBehaves ?? "Material chemistry to be confirmed in technical review.",
    qualityConsiderations: intel.qualityPlan.recommendedChecks,
    standards: intel.qualityPlan.standardsToConsider,
    traceabilityDocs: intel.documentationExpectations,
    openQuestions: intel.missingCritical,
    rfqCompleteness: intel.completeness,
    factoryReviewNotes: intel.qualityPlan.internalReviewNotes,
    recommendedNextAction,
  };
}

export function reportToText(r: VirtualFactoryReport): string {
  const block = (title: string, items: string[]) => [title, ...items.map((i) => `  - ${i}`), ""];
  return [
    "VIRTUAL FACTORY REVIEW PACKAGE",
    "(preliminary, educational, no pricing, no certification)",
    "",
    `Customer requirement: ${r.customerRequirement}`,
    `Product and material: ${r.productAndMaterial}`,
    `RFQ completeness: ${r.rfqCompleteness}%`,
    "",
    `Preliminary route: ${r.route.join(" -> ")}`,
    "",
    ...block("Required equipment / processes:", r.requiredEquipment),
    ...block("Ingredient / material considerations:", r.ingredientConsiderations),
    `Chemistry notes: ${r.chemistryNotes}`,
    "",
    ...block("Quality and standards considerations:", [...r.qualityConsiderations, ...r.standards]),
    ...block("Traceability / documentation expectations:", r.traceabilityDocs),
    ...block("Open technical questions:", r.openQuestions),
    ...block("Factory review notes:", r.factoryReviewNotes),
    `Recommended next action: ${r.recommendedNextAction}`,
  ].join("\n");
}

export function reportToJson(r: VirtualFactoryReport): string {
  return JSON.stringify(r, null, 2);
}
