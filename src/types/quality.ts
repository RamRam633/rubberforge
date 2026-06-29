import type { StationId } from "./simulation";
import type { QuoteQuestion } from "./platform";

// ── Quality / inspection / standards domain types ────────────────────────────
// Educational + RFQ-preparation only. No certification, no official standard
// text, no compliance claims, no certificates generated.

export interface QualityTest {
  id: string;
  name: string;
  whatItMeasures: string;
  whyItMatters: string;
  relevantProducts: string[];
  relevantMaterials: string[];
  sampleType: string;
  failureMeaning: string;
  relatedDefects: string[];
  relatedRfqQuestions: string[];
  relatedStandards: string[];
  customerDocument: string;
  explanation: string;
  caution: string;
}

export interface StandardRef {
  id: string;
  code: string;
  organization: "ASTM" | "ISO";
  titleShort: string;
  propertyMeasured: string;
  plainLanguagePurpose: string;
  relevantTests: string[];
  relevantProducts: string[];
  relevantMaterials: string[];
  rfqTriggers: string[];
  reportExpectation: string;
  caution: string;
}

export interface QualityDefectLink {
  defectId: string;
  detectingTests: string[];
  inspectionCheckpoint: string;
  customerImpact: string;
  prevention: string;
}

export interface InProcessCheckpoint {
  stationId: StationId;
  checks: string[];
  releaseConcept: string;
}

export interface TraceabilityStage {
  id: string;
  label: string;
  idFormat: string;
  whatItLinks: string;
  whyItMatters: string;
}

export type DocProvider = "factory" | "supplier" | "either";

export interface DocumentationItem {
  id: string;
  name: string;
  whatItIs: string;
  whoProvides: DocProvider;
  whenRequested: string;
  availabilityNote: string;
}

export interface InspectionTemplate {
  productId: string;
  recommendedChecks: string[];
  optionalChecks: string[];
  documentsToRequest: string[];
  standardsToConsider: string[];
  reviewNotes: string[];
}

// Conditional RFQ groups for manufacturing / supply-chain / quality, with an
// environment dimension on top of material + product.
export type RfqGroupCategory =
  | "material-sourcing"
  | "product-manufacturing"
  | "quality-documentation"
  | "supply-chain"
  | "quality-test";

export interface RfqRuleGroup {
  id: string;
  label: string;
  category: RfqGroupCategory;
  appliesToMaterials: string[];
  appliesToProducts: string[];
  appliesToEnvironments: string[];
  questions: QuoteQuestion[];
}

// ── Engine outputs ───────────────────────────────────────────────────────────
export type ReviewOwner = "sales" | "engineering" | "quality" | "production" | "purchasing";

export interface InspectionPlan {
  productName: string;
  materialName: string;
  recommendedChecks: string[];
  optionalChecks: string[];
  customerRequestedTests: string[];
  missingQualityInfo: string[];
  documentsToRequest: string[];
  standardsToConsider: string[];
  internalReviewNotes: string[];
}

export interface QualityReview {
  riskLevel: "low" | "medium" | "high";
  requiredTests: string[];
  optionalTests: string[];
  standards: string[];
  documents: string[];
  missingInfo: string[];
  traceabilityRequired: boolean;
  reviewOwners: ReviewOwner[];
}
