import type { QmsReadinessResult, QmsReadinessDimension, ReadinessLevel } from "@/types/qms";
import { qmsProcessMap } from "./qmsProcessMap";
import { documentControl } from "./documentControl";
import { riskRegister } from "./riskRegister";
import { opportunityRegister } from "./opportunityRegister";
import { supplierControl } from "./supplierControl";
import { crrReviewAreas } from "./customerRequirementReview";
import { calibrationRecords } from "./calibrationRecords";
import { nonconformanceData } from "./nonconformanceData";
import { capaWorkflow } from "./capaWorkflow";
import { internalAuditData } from "./internalAuditData";
import { managementMetrics } from "./managementReviewData";
import { continualImprovement } from "./continualImprovement";
import { qualityTests } from "./qualityTests";
import { traceabilityStages } from "./traceabilityData";
import { qmsClauseMap } from "./qmsClauseMap";

// The QMS readiness MODEL. This indicates how completely the virtual factory
// models each QMS area, not a certification score. A prototype maturity factor
// keeps it honest: real implementation, evidence, internal audits, and accredited
// certification are explicitly not present.

interface DimDef {
  key: string;
  label: string;
  count: number;
  target: number;
}

const MATURITY_FACTOR = 0.82; // models exist; real evidence/audit/certification do not.

const DIMS: DimDef[] = [
  { key: "process-map", label: "Process map completeness", count: qmsProcessMap.length, target: 24 },
  { key: "document-control", label: "Document control coverage", count: documentControl.length, target: 18 },
  { key: "risk-register", label: "Risk register coverage", count: riskRegister.length, target: 14 },
  { key: "supplier-control", label: "Supplier control coverage", count: supplierControl.length, target: 8 },
  { key: "customer-review", label: "Customer requirement review", count: crrReviewAreas.length, target: 8 },
  { key: "traceability", label: "Traceability coverage", count: traceabilityStages.length, target: 7 },
  { key: "inspection-testing", label: "Inspection / testing coverage", count: qualityTests.length, target: 18 },
  { key: "calibration", label: "Calibration visibility", count: calibrationRecords.length, target: 8 },
  { key: "ncr-capa", label: "NCR / CAPA workflow", count: nonconformanceData.length + capaWorkflow.length, target: 14 },
  { key: "internal-audit", label: "Internal audit coverage", count: internalAuditData.length, target: 12 },
  { key: "management-review", label: "Management review", count: managementMetrics.length, target: 10 },
  { key: "continual-improvement", label: "Continual improvement", count: continualImprovement.length, target: 8 },
];

const LEVELS: { level: ReadinessLevel; label: string; min: number; summary: string }[] = [
  { level: "emerging", label: "Emerging model", min: 0, summary: "Early QMS modeling. Several areas are sparse and would need development before an audit-readiness review." },
  { level: "developing", label: "Developing model", min: 0.45, summary: "The QMS model is taking shape across most areas, with gaps that a configured factory would close." },
  { level: "qualified", label: "Qualified model (preliminary)", min: 0.68, summary: "Most QMS areas are modeled across the virtual factory. This is a strong audit-readiness teaching model, not a certified system." },
  { level: "audit-ready", label: "Audit-ready model (preliminary)", min: 0.85, summary: "Nearly all QMS areas are modeled. A solid preliminary basis for planning a real implementation, evidence collection, and audit." },
];

function levelFor(pct: number) {
  let res = LEVELS[0];
  for (const l of LEVELS) if (pct >= l.min) res = l;
  return res;
}

export function computeQmsReadiness(): QmsReadinessResult {
  const dimensions: QmsReadinessDimension[] = DIMS.map((d) => {
    const coverage = Math.min(1, d.count / d.target);
    return {
      key: d.key,
      label: d.label,
      count: d.count,
      weight: 1 / DIMS.length,
      status: coverage >= 0.95 ? "modeled" : coverage >= 0.5 ? "partial" : "future",
    };
  });

  const rawCoverage = DIMS.reduce((sum, d) => sum + Math.min(1, d.count / d.target), 0) / DIMS.length;
  const pct = rawCoverage * MATURITY_FACTOR;
  const lvl = levelFor(pct);

  const strongAreas = dimensions.filter((d) => d.status === "modeled").map((d) => d.label);
  const gaps = qmsClauseMap.flatMap((c) => c.gaps).slice(0, 5);
  const nextActions = [
    ...opportunityRegister.slice(0, 3).map((o) => o.action),
    "Replace demo records with real, controlled evidence in a configured factory.",
    "Run internal audits and a management review against the live QMS.",
  ].slice(0, 5);

  return {
    pct,
    level: lvl.level,
    levelLabel: lvl.label,
    summary: lvl.summary,
    dimensions,
    strongAreas,
    gaps,
    nextActions,
  };
}

// Status by clause area, sourced from the honest clause-map statuses.
export function qmsStatusByClause() {
  return qmsClauseMap.map((c) => ({ id: c.id, label: c.clauseLabel, status: c.status }));
}
