import type { ManagementMetric } from "@/types/qms";
export const managementMetrics: ManagementMetric[] = [
  {
    "label": "RFQ completeness trend",
    "demoValue": "84% (demo)",
    "trend": "up",
    "note": "Modeled share of RFQs arriving with full spec, material, quantity, and test requirements. Demo placeholder, trending up as guided question sets are adopted."
  },
  {
    "label": "Customer clarification requests",
    "demoValue": "9 open (demo)",
    "trend": "down",
    "note": "Placeholder count of back-and-forth clarification threads on quotes and specs this period. Lower is better, modeled downward as RFQ completeness rises."
  },
  {
    "label": "Nonconformance count",
    "demoValue": "14 (demo)",
    "trend": "down",
    "note": "Demo total of logged product and process nonconformances across the 10-station line for the period. Internal and customer-found combined, illustrative only."
  },
  {
    "label": "CAPA open / closed",
    "demoValue": "6 open / 11 closed (demo)",
    "trend": "flat",
    "note": "Placeholder corrective and preventive action status with effectiveness-check concept. Closure rate roughly steady, aging watched on the oldest open items."
  },
  {
    "label": "Supplier quality issues",
    "demoValue": "4 (demo)",
    "trend": "up",
    "note": "Modeled raw-material and outsourced-process issues (for example off-spec elastomer lots or late curative deliveries). Demo uptick flagged for supplier action."
  },
  {
    "label": "On-time review status",
    "demoValue": "On schedule (demo)",
    "trend": "flat",
    "note": "Placeholder indicator that this management review cycle is held at its planned interval. Modeled as on schedule, prior cycle actions reviewed."
  },
  {
    "label": "Inspection pass / fail rate",
    "demoValue": "96.2% pass (demo)",
    "trend": "up",
    "note": "Demo first-pass acceptance across in-process and final inspection points, against agreed properties and dimensions. Illustrative, trending up slightly."
  },
  {
    "label": "Calibration overdue count",
    "demoValue": "2 overdue (demo)",
    "trend": "down",
    "note": "Placeholder count of measurement and test instruments past their modeled calibration due date (gauges, durometers, tensile testers). Resource action requested."
  },
  {
    "label": "Audit finding count",
    "demoValue": "7 (demo)",
    "trend": "down",
    "note": "Demo findings from modeled internal QMS-readiness audits, mix of minor observations and improvement opportunities. Not from any accredited certification body."
  },
  {
    "label": "Customer feedback score",
    "demoValue": "4.3 / 5 (demo)",
    "trend": "up",
    "note": "Placeholder rolled-up satisfaction signal from feedback, complaints, and returns. Illustrative composite, modeled improving on responsiveness themes."
  },
  {
    "label": "Improvement actions in progress",
    "demoValue": "12 active (demo)",
    "trend": "up",
    "note": "Demo count of continual-improvement actions underway, including process tuning and documentation upgrades. Placeholder, tracked to closure each cycle."
  }
];
export const managementReviewInputs: string[] = [
  "Quality objectives status (modeled): progress against each QMS-aligned objective for the period, with target versus demo actual and a plain-English on-track or at-risk read",
  "Customer feedback and satisfaction signals (placeholder): collated voice-of-customer, complaints, returns, and clarification themes from RFQ and post-delivery interactions",
  "Process performance and conformity of the production route (modeled): station-level yield, scrap, and stability indicators across the 10-station rubber line",
  "Product conformity to specification (demo): inspection and test pass/fail outcomes against agreed properties, dimensions, and customer documents",
  "Internal and second-party audit results (placeholder): findings, severity, and clause-area coverage from modeled QMS readiness audits",
  "Nonconformities and CAPA status (demo): open, in-progress, and closed corrective and preventive actions with aging and effectiveness-check concept",
  "Supplier and external-provider performance (modeled): raw-material and outsourced-process quality, on-time delivery, and issue recurrence for elastomers, fillers, and curatives",
  "Resource adequacy and needs (placeholder): people, competence, equipment, calibration capacity, and infrastructure gaps relevant to maintaining the QMS model",
  "Risks and opportunities review (modeled): updated risk register entries, likelihood and impact movement, and opportunities for improvement",
  "Status of actions from previous management reviews (demo): carry-over improvement actions, their owners, and completion progress",
  "Context, interested-party, and climate-relevance review (concept): changes in internal/external context, customer and regulatory expectations, and climate-relevance considerations that may affect the QMS"
];
export const managementReviewOutputs: string[] = [
  "Action items and decisions (demo): owner-assigned tasks with due dates arising from the review, logged for follow-up at the next cycle",
  "Resource allocation decisions (placeholder): approved or deferred needs for staffing, competence, equipment, and calibration capacity to sustain the QMS model",
  "Process improvement directives (modeled): targeted changes to mixing, milling, building, curing, and inspection stations to lift yield and reduce recurring defects",
  "Quality objective updates (demo): revised or new period objectives and targets reflecting performance trends and customer expectations",
  "Supplier corrective and development actions (modeled): requested supplier CAPA, requalification, audit, or dual-sourcing moves for underperforming external providers",
  "Customer communication improvements (placeholder): clearer RFQ question sets, specification confirmations, and inspection-report formats to reduce clarification cycles"
];
