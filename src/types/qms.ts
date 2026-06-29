import type { StationId } from "./simulation";

// ── ISO 9001-aligned virtual factory QMS model ───────────────────────────────
// Educational / audit-readiness modeling only. Not a certificate, not compliance,
// not legal advice. All records and values are demo placeholders.

export type QmsStatus = "modeled" | "partial" | "future";

export interface ClauseCard {
  id: string; // clause-4 .. clause-10
  clauseLabel: string;
  subAreas: string[];
  meaningInRubberFactory: string;
  relatedModules: string[];
  evidenceExamples: string[];
  status: QmsStatus;
  gaps: string[];
}

export type ProcessGroup = "core" | "support" | "management";
export interface QmsProcess {
  id: string;
  name: string;
  owner: string;
  purpose: string;
  inputs: string[];
  outputs: string[];
  relatedClause: string;
  group: ProcessGroup;
}

export interface ControlledDocument {
  id: string;
  title: string;
  docType: string; // Document | Record
  owner: string;
  processArea: string;
  revision: string;
  approvalStatus: string; // approved | draft | under-review | demo-placeholder
  reviewFrequency: string;
  relatedClause: string;
  relatedStation: string;
  retentionConcept: string;
  controlled: boolean;
}

export interface RiskEntry {
  id: string;
  riskStatement: string;
  processArea: string;
  cause: string;
  effect: string;
  severity: string; // low | medium | high
  likelihood: string;
  detection: string;
  controls: string[];
  mitigation: string;
  owner: string;
  relatedClause: string;
  linkedStation: string;
  linkedTest: string;
  status: string;
}

export interface OpportunityEntry {
  id: string;
  opportunity: string;
  processArea: string;
  benefit: string;
  action: string;
  owner: string;
  relatedClause: string;
  priority: string;
  status: string;
}

export interface ReviewArea {
  name: string;
  whatItChecks: string;
  reviewer: string;
}
export interface ReviewStatus {
  label: string;
  meaning: string;
}
export interface CrrDemo {
  product: string;
  material: string;
  capturedRequirements: string[];
  openClarifications: string[];
  status: string;
}

export interface SupplierControl {
  id: string;
  category: string;
  suppliedItem: string;
  requiredDocuments: string[];
  qualityRisks: string[];
  receivingChecks: string[];
  approvalConcept: string;
  performanceMetricConcept: string;
  relatedClause: string;
  relatedProcess: string;
}

export interface CalibrationItem {
  id: string;
  equipmentName: string;
  area: string;
  calibrationRequired: boolean;
  calibrationStatus: string; // current | due-soon | overdue | not-applicable-demo
  lastCalibration: string;
  nextDue: string;
  owner: string;
  relatedTest: string;
  recordConcept: string;
}

export interface NonconformanceRecord {
  id: string;
  title: string;
  detectedAt: string;
  processArea: string;
  severity: string;
  containment: string;
  disposition: string;
  rootCausePlaceholder: string;
  correctiveActionPlaceholder: string;
  owner: string;
  status: string;
  relatedClause: string;
  linkedDefect: string;
}
export interface CapaStep {
  step: string;
  description: string;
}

export interface QmsAuditItem {
  id: string;
  area: string;
  relatedClause: string;
  auditQuestion: string;
  evidenceToCheck: string[];
  status: string;
  finding: string;
  actionOwner: string;
  dueDate: string;
  linkedStation: string;
}

export interface ManagementMetric {
  label: string;
  demoValue: string;
  trend: string; // up | down | flat
  note: string;
}

export interface ImprovementItem {
  id: string;
  source: string;
  relatedProcess: string;
  problemOrOpportunity: string;
  proposedAction: string;
  owner: string;
  priority: string;
  status: string;
  expectedBenefit: string;
  linkedRiskOrOpportunity: string;
}

export interface TrainingRole {
  roleId: string;
  roleName: string;
  competenceAreas: string[];
  relatedProcedures: string[];
  safetyAwareness: string;
  relatedRecords: string[];
  trainingStatus: string;
  evidencePlaceholder: string;
}

export interface ContextPanelData {
  internalIssues: string[];
  externalIssues: string[];
  interestedParties: { party: string; expectation: string }[];
  climateRelevanceQuestion: string;
  potentialImpacts: { area: string; note: string }[];
  climateStatus: string;
  disclaimer: string;
}

export interface StationQms {
  stationId: StationId;
  processOwner: string;
  controlledDocuments: string[];
  recordsGenerated: string[];
  risksControls: string[];
  verificationPoints: string[];
  ncrTriggers: string[];
  auditQuestion: string;
  relatedClause: string;
  traceabilityRecords: string[];
}

// Readiness model (computed deterministically from coverage).
export type ReadinessLevel = "emerging" | "developing" | "qualified" | "audit-ready";
export interface QmsReadinessDimension {
  key: string;
  label: string;
  count: number;
  weight: number; // contribution to score
  status: QmsStatus;
}
export interface QmsReadinessResult {
  pct: number;
  level: ReadinessLevel;
  levelLabel: string;
  summary: string;
  dimensions: QmsReadinessDimension[];
  strongAreas: string[];
  gaps: string[];
  nextActions: string[];
}
