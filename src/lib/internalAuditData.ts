import type { QmsAuditItem } from "@/types/qms";
export const internalAuditData: QmsAuditItem[] = [
  {
    "id": "audit-1",
    "area": "Customer Requirement Review",
    "relatedClause": "clause-8",
    "auditQuestion": "Before a rubber-sheet order is accepted, does the QMS model show that customer specifications (gauge, hardness, width, material grade) are reviewed and confirmed as achievable by this line?",
    "evidenceToCheck": [
      "Demo order-review record with sign-off (placeholder)",
      "Demo spec sheet mapped to line capability (placeholder)"
    ],
    "status": "conforming",
    "finding": "Demo records show order review consistently completed before acceptance; none yet open.",
    "actionOwner": "Quality Manager",
    "dueDate": "Demo placeholder: Q3 cycle, week 2",
    "linkedStation": "raw-material-room"
  },
  {
    "id": "audit-2",
    "area": "Document Control",
    "relatedClause": "clause-8",
    "auditQuestion": "Are controlled documents (work instructions, inspection plans, spec sheets) version-identified, current, and available at the point of use in the modeled QMS?",
    "evidenceToCheck": [
      "Demo document register with revision numbers (placeholder)",
      "Demo obsolete-document removal log (placeholder)"
    ],
    "status": "minor-finding",
    "finding": "Demo: two station work instructions reference a superseded revision number.",
    "actionOwner": "Document Controller",
    "dueDate": "Demo placeholder: within 30 days of audit",
    "linkedStation": "process-wide (all stations)"
  },
  {
    "id": "audit-3",
    "area": "Supplier Control",
    "relatedClause": "clause-8",
    "auditQuestion": "Does the QMS model demonstrate that ingredient suppliers (polymer, filler, oil, cure package) are evaluated, approved, and monitored against agreed criteria?",
    "evidenceToCheck": [
      "Demo approved-supplier list (placeholder)",
      "Demo supplier performance scorecard (placeholder)",
      "Demo certificate-of-analysis review note (placeholder)"
    ],
    "status": "in-progress",
    "finding": "Demo: supplier re-evaluation cycle partially completed at time of audit.",
    "actionOwner": "Procurement Lead",
    "dueDate": "Demo placeholder: end of current quarter",
    "linkedStation": "raw-material-room"
  },
  {
    "id": "audit-4",
    "area": "Receiving Inspection",
    "relatedClause": "clause-8",
    "auditQuestion": "Are incoming ingredient categories verified on receipt (identity, grade, condition, moisture) before being released to staging in the modeled flow?",
    "evidenceToCheck": [
      "Demo incoming inspection report (placeholder)",
      "Demo material identity and quarantine tag (placeholder)"
    ],
    "status": "conforming",
    "finding": "Demo: incoming checks recorded and held items quarantined as modeled; none yet open.",
    "actionOwner": "Receiving Inspector",
    "dueDate": "Demo placeholder: rolling, next sample week 4",
    "linkedStation": "raw-material-room"
  },
  {
    "id": "audit-5",
    "area": "Batch Preparation",
    "relatedClause": "clause-8",
    "auditQuestion": "Does the QMS model confirm that ingredient categories are portioned to target proportion and kitted correctly, with the cure package kept separate, before mixing?",
    "evidenceToCheck": [
      "Demo batch weigh-up record (placeholder)",
      "Demo kitting checklist with cure-package segregation note (placeholder)"
    ],
    "status": "opportunity",
    "finding": "Demo: opportunity to add a second-person verification step on off-ratio detection.",
    "actionOwner": "Compounding Supervisor",
    "dueDate": "Demo placeholder: next continuous-improvement review",
    "linkedStation": "weighing-station"
  },
  {
    "id": "audit-6",
    "area": "Mixing Process",
    "relatedClause": "clause-8",
    "auditQuestion": "Are mixing-process controls (dispersion checks, scorch-avoidance practice of holding the cure package) defined and followed for the internal mixer in the QMS model?",
    "evidenceToCheck": [
      "Demo mixing log with dispersion check (placeholder)",
      "Demo scorch-prevention work instruction (placeholder)"
    ],
    "status": "minor-finding",
    "finding": "Demo: one mixing log missing the dispersion check entry for a batch.",
    "actionOwner": "Mixing Room Lead",
    "dueDate": "Demo placeholder: within 21 days of audit",
    "linkedStation": "internal-mixer"
  },
  {
    "id": "audit-7",
    "area": "Calendering Process",
    "relatedClause": "clause-8",
    "auditQuestion": "Does the QMS model show that sheet gauge and surface quality are monitored during calendering, with out-of-tolerance conditions flagged and acted on?",
    "evidenceToCheck": [
      "Demo gauge-scan trend record (placeholder)",
      "Demo surface-defect log (placeholder)"
    ],
    "status": "conforming",
    "finding": "Demo: gauge monitoring and surface checks recorded per modeled plan; none yet open.",
    "actionOwner": "Calender Operator Lead",
    "dueDate": "Demo placeholder: rolling, next review month-end",
    "linkedStation": "calender"
  },
  {
    "id": "audit-8",
    "area": "Curing Process",
    "relatedClause": "clause-8",
    "auditQuestion": "Is the vulcanization step treated as a controlled process whose adequacy (cure state) is verified, given that the crosslinking result cannot be reworked once set?",
    "evidenceToCheck": [
      "Demo cure-state verification record (placeholder)",
      "Demo process-validation summary, modeled/partial (placeholder)"
    ],
    "status": "in-progress",
    "finding": "Demo: process-validation evidence package is modeled and partially compiled.",
    "actionOwner": "Cure Process Engineer",
    "dueDate": "Demo placeholder: future-integration, next quarter",
    "linkedStation": "vulcanization"
  },
  {
    "id": "audit-9",
    "area": "Inspection and Testing",
    "relatedClause": "clause-8",
    "auditQuestion": "Does the QMS model confirm that finished sheet is checked against specification (thickness, hardness, surface, dimensions) and classified conforming or nonconforming before release?",
    "evidenceToCheck": [
      "Demo final inspection report (placeholder)",
      "Demo hardness and thickness test record (placeholder)",
      "Demo conformity disposition note (placeholder)"
    ],
    "status": "conforming",
    "finding": "Demo: inspection gate operating with recorded dispositions as modeled; none yet open.",
    "actionOwner": "QA Inspector",
    "dueDate": "Demo placeholder: rolling, next sample week 3",
    "linkedStation": "inspection"
  },
  {
    "id": "audit-10",
    "area": "Traceability",
    "relatedClause": "clause-8",
    "auditQuestion": "Can the QMS model trace a finished roll back through inspection, cure, forming, mixing, and batch to its incoming ingredient lots?",
    "evidenceToCheck": [
      "Demo batch-to-roll traceability record (placeholder)",
      "Demo roll identity and label record (placeholder)"
    ],
    "status": "opportunity",
    "finding": "Demo: opportunity to link cure-stage records more tightly to roll IDs in the thread.",
    "actionOwner": "Traceability Coordinator",
    "dueDate": "Demo placeholder: next improvement cycle",
    "linkedStation": "finished-roll"
  },
  {
    "id": "audit-11",
    "area": "Calibration",
    "relatedClause": "clause-8",
    "auditQuestion": "Are measuring devices (scales, gauge heads, hardness testers, thickness scanners) identified, calibrated on a schedule, and traceable in the QMS model?",
    "evidenceToCheck": [
      "Demo calibration schedule and register (placeholder)",
      "Demo calibration certificate, traceable reference (placeholder)"
    ],
    "status": "minor-finding",
    "finding": "Demo: one hardness tester past its modeled calibration-due date.",
    "actionOwner": "Calibration Technician",
    "dueDate": "Demo placeholder: within 14 days of audit",
    "linkedStation": "inspection"
  },
  {
    "id": "audit-12",
    "area": "Nonconformance and CAPA",
    "relatedClause": "clause-8",
    "auditQuestion": "Does the QMS model show that nonconforming sheet is contained, dispositioned, and that corrective actions address root cause with verified effectiveness?",
    "evidenceToCheck": [
      "Demo nonconformance report (placeholder)",
      "Demo CAPA record with root-cause and effectiveness check (placeholder)"
    ],
    "status": "major-finding",
    "finding": "Demo: a recurring undercure NCR closed without a documented effectiveness verification.",
    "actionOwner": "Quality Manager",
    "dueDate": "Demo placeholder: corrective action plan within 10 days",
    "linkedStation": "vulcanization"
  },
  {
    "id": "audit-13",
    "area": "Shipping",
    "relatedClause": "clause-8",
    "auditQuestion": "Does the QMS model confirm that only released, correctly labeled rolls are wound, preserved, and dispatched, with shipment records retained?",
    "evidenceToCheck": [
      "Demo shipping release and packing record (placeholder)",
      "Demo roll label and preservation check (placeholder)"
    ],
    "status": "planned",
    "finding": "none yet",
    "actionOwner": "Shipping and Logistics Lead",
    "dueDate": "Demo placeholder: scheduled, audit cycle week 6",
    "linkedStation": "finished-roll"
  },
  {
    "id": "audit-14",
    "area": "Management Review",
    "relatedClause": "clause-8",
    "auditQuestion": "Does the QMS model show that leadership periodically reviews quality performance (findings, NCR trends, audit results) and drives improvement actions?",
    "evidenceToCheck": [
      "Demo management review minutes (placeholder)",
      "Demo QMS performance dashboard, demo metrics (placeholder)"
    ],
    "status": "planned",
    "finding": "none yet",
    "actionOwner": "Plant Director",
    "dueDate": "Demo placeholder: scheduled, end of audit cycle",
    "linkedStation": "process-wide (all stations)"
  }
];
