// ── Virtual QA Lab ───────────────────────────────────────────────────────────
// A simulated industrial rubber testing laboratory. Educational and conceptual.
// No official certificates, no compliance claims, demo/simulated values only.

export type LabEquipCategory =
  | "rheology-cure"
  | "mechanical"
  | "physical"
  | "environmental"
  | "dimensional"
  | "documentation";

export interface LabEquipment {
  id: string;
  equipmentName: string;
  category: LabEquipCategory;
  whatItMeasures: string;
  whyItMatters: string;
  sampleType: string;
  relatedProperties: string[];
  relatedMethods: string[];
  relatedProducts: string[];
  relatedDefects: string[];
  relatedStations: string[];
  outputRecord: string;
  calibrationConcept: string;
  maintenanceConcept: string;
  safetyNote: string;
  demoAnimationIdea: string;
}

export interface LabZone {
  id: string;
  name: string;
  purpose: string;
  whatHappens: string;
  equipmentConcept: string[];
  props: string[];
  relatedTests: string[];
  signText: string;
}

export interface LabWorkflowStep {
  index: number;
  id: string;
  title: string;
  description: string;
  whatAppears: string;
  outputConcept: string;
  relatedZone: string;
  relatedTests: string[];
}

export type LabVestColor = "blue" | "green" | "violet" | "steel" | "amber" | "orange";
export interface LabRole {
  id: string;
  displayName: string;
  purpose: string;
  whatTheyCheck: string;
  recordsCreated: string[];
  decisionAuthority: string;
  relatedZones: string[];
  vestColor: LabVestColor;
}

export interface MdrDemo {
  intro: string;
  regions: { label: string; note: string }[];
  interpretation: { reading: string; meaning: string }[];
  links: { topic: string; why: string }[];
  caveats: string[];
}

export interface ApplicationRule {
  application: string;
  recommendedTests: string[];
  questionsToAsk: string[];
  warnings: string[];
}
export interface MaterialRule {
  material: string;
  note: string;
  recommendedTests: string[];
}
export interface DefectRule {
  defect: string;
  diagnosticTests: string[];
  howItHelps: string;
}
export interface LabTestEngineData {
  applicationRules: ApplicationRule[];
  materialRules: MaterialRule[];
  defectRules: DefectRule[];
}

export interface LabTraceStage {
  id: string;
  label: string;
  idFormat: string;
  whatItLinks: string;
  whyItMatters: string;
}

export type ReleaseTone = "pending" | "warn" | "pass" | "fail";
export interface ReleaseStatus {
  id: string;
  label: string;
  meaning: string;
  tone: ReleaseTone;
}
export interface ReleaseStep {
  title: string;
  description: string;
}

export interface LabReportDemo {
  sampleId: string;
  product: string;
  material: string;
  batchLot: string;
  requestedTests: string[];
  completedTests: { test: string; status: string }[];
  pendingTests: string[];
  defectsObserved: string[];
  methodRefs: string[];
  releaseDecision: string;
  reviewerNotes: string;
}
export interface LabReport {
  sections: string[];
  demoExample: LabReportDemo;
  disclaimer: string;
}

export interface LabQmsLink {
  station: string;
  controlledMethodRef: string;
  calibrationConcept: string;
  recordGenerated: string;
  traceability: string;
  reviewStatus: string;
  ncrTrigger: string;
  capaLink: string;
  auditEvidence: string;
}

// Result of the deterministic demo test engine.
export type TestStatus =
  | "not-required"
  | "recommended"
  | "required-by-customer"
  | "pending"
  | "pass-demo"
  | "review-needed"
  | "fail-demo";
export interface EngineTest {
  test: string;
  status: TestStatus;
  reason: string;
}
export interface LabEngineResult {
  recommendedTests: EngineTest[];
  questions: string[];
  warnings: string[];
  missingTests: string[];
  releaseDecision: string;
  documentationPackage: string[];
}
