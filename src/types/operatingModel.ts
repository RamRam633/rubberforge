import type { FactoryLayerId } from "./factoryPlatform";

// ── AI-assisted factory operating model ──────────────────────────────────────
// Specialized AI agents that SUPPORT human factory roles across the digital
// thread. Agents structure, review, and trace; humans stay accountable for
// quality, compliance, production release, and certification. Prototype, not a
// live system. Demo data only.

export type OmLayer = FactoryLayerId | "qms";

export interface AiAgent {
  id: string;
  name: string;
  purpose: string;
  factoryArea: string;
  inputs: string[];
  outputs: string[];
  humanOwner: string;
  qmsResponsibility: string;
  relatedRecords: string[];
  relatedLayer: OmLayer;
  supportsDecisions: string;
  cannotDecideAutonomously: string;
  relatedClause: string;
}

export interface OrgFunction {
  id: string;
  name: string;
  mission: string;
  humanRoles: string[];
  supportingAgents: string[];
  relatedLayer: OmLayer;
}

export interface RaciRow {
  workflow: string;
  responsible: string;
  accountable: string; // always a human role
  consulted: string[];
  informed: string[];
}

export interface HilGate {
  gate: string;
  whoApproves: string;
  supportingAgent: string;
  whyHumanRequired: string;
  whatAgentProvides: string;
}

export interface QmsThreadNode {
  id: string;
  label: string;
  recordConcept: string;
  stewardAgent: string;
  humanReview: string;
  relatedLayer: OmLayer;
}

export interface AgentEvidence {
  agentName: string;
  inputData: string[];
  assumptions: string[];
  missingInformation: string[];
  recommendation: string;
  requiredReviewer: string;
  approvalStatus: string; // pending-human-review | approved-demo | returned-for-info
  linkedRecords: string[];
}
