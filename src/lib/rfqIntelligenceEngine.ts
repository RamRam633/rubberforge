import type { RouteStep } from "@/types/platform";
import type { InspectionPlan, QualityReview, ReviewOwner } from "@/types/quality";
import type { QuoteSelection, RFQSummary } from "./quoteTypes";
import { buildRFQSummary } from "./routeEngine";
import { buildInspectionPlan, buildQualityReview } from "./inspectionPlanEngine";
import { productCategoriesById } from "./productCategories";
import { materialFamiliesById } from "./materialFamilies";

export interface RfqIntelligence {
  completeness: number; // 0..100
  missingCritical: string[];
  materialAssumptions: string[];
  route: RouteStep[];
  routeNote: string;
  qualityPlan: InspectionPlan;
  qualityReview: QualityReview;
  documentationExpectations: string[];
  supplyChainQuestions: string[];
  riskLevel: "low" | "medium" | "high";
  reviewOwners: ReviewOwner[];
  salesFollowUpDraft: string;
  rfqSummary: RFQSummary;
}

// Deterministic RFQ completeness score from the selection.
export function computeCompleteness(sel: QuoteSelection): number {
  let score = 0;
  if (sel.productId) score += 12;
  if (sel.materialId) score += 12;
  if (sel.application.trim()) score += 12;
  if (sel.environment.length > 0) score += 12;
  if (sel.quantity.trim()) score += 12;
  if (Object.values(sel.dimensions).some((v) => v && v.trim())) score += 16;
  if (sel.drawingAvailable) score += 10;
  if (Object.keys(sel.answers).length > 0) score += 8;
  if (sel.certificationNeeds.trim()) score += 6;
  return Math.min(100, score);
}

export function buildRfqIntelligence(sel: QuoteSelection): RfqIntelligence {
  const product = productCategoriesById[sel.productId];
  const material = materialFamiliesById[sel.materialId];
  const summary = buildRFQSummary(sel);
  const qualityPlan = buildInspectionPlan({
    productId: sel.productId,
    materialId: sel.materialId,
    environment: sel.environment,
    certificationRequested: sel.certificationNeeds,
    drawingAvailable: sel.drawingAvailable,
  });
  const certificate = Boolean(sel.answers["coc"] || /conformity|coc|certificate/i.test(sel.certificationNeeds));
  const traceability = Boolean(sel.answers["traceability"] || /traceability|lot/i.test(sel.certificationNeeds));
  const qualityReview = buildQualityReview(
    { productId: sel.productId, materialId: sel.materialId, environment: sel.environment, certificationRequested: sel.certificationNeeds, drawingAvailable: sel.drawingAvailable },
    { certificate, traceability },
  );

  const materialAssumptions = material
    ? [
        `${material.displayName} (${material.abbreviation}) assumed unless specified otherwise.`,
        material.safeExplanation,
      ]
    : ["No material selected: a family must be confirmed in technical review."];

  const documentationExpectations = qualityPlan.documentsToRequest;
  const supplyChainQuestions = [
    "Is this a one-time order or recurring demand, and what annual volume is expected?",
    "What is the target lead time and delivery location?",
    "Are there packaging or domestic-sourcing requirements?",
  ];

  const completeness = computeCompleteness(sel);
  const salesFollowUpDraft = buildFollowUp(sel, summary, completeness);

  return {
    completeness,
    missingCritical: summary.missingInfo,
    materialAssumptions,
    route: summary.suggestedRoute,
    routeNote: summary.routeNote,
    qualityPlan,
    qualityReview,
    documentationExpectations,
    supplyChainQuestions,
    riskLevel: qualityReview.riskLevel,
    reviewOwners: qualityReview.reviewOwners,
    salesFollowUpDraft,
    rfqSummary: summary,
  };
}

function buildFollowUp(sel: QuoteSelection, summary: RFQSummary, completeness: number): string {
  const lines = [
    `Hi,`,
    ``,
    `Thanks for your interest in a ${summary.productName.toLowerCase()} in ${summary.materialName}. To prepare an accurate technical quote, could you confirm a few details:`,
    ``,
    ...summary.missingInfo.slice(0, 5).map((m) => `  - ${m}`),
    ...(summary.questionsForCustomer.slice(0, 2).map((q) => `  - ${q}`)),
    ``,
    `Once we have these, our engineering and quality team can review the request${completeness >= 80 ? " quickly, since most details are already provided" : ""}.`,
    ``,
    `Best regards,`,
    `Sales Engineering`,
  ];
  return lines.join("\n");
}
