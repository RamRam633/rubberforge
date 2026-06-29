import type { TrainingRole } from "@/types/qms";
export const trainingMatrix: TrainingRole[] = [
  {
    "roleId": "material-handler",
    "roleName": "Material Handler",
    "competenceAreas": [
      "Incoming raw material identification and lot traceability (modeled)",
      "Correct labeling, segregation, and FIFO movement of elastomer and additive stock",
      "Reading material status tags (released, quarantined, on-hold) in the QMS model",
      "Basic material storage and shelf-life awareness concepts"
    ],
    "relatedProcedures": [
      "SOP-RM-01 Raw Material Receiving and Identification (demo)",
      "SOP-WH-02 Warehouse FIFO and Segregation (demo)"
    ],
    "safetyAwareness": "General material handling and housekeeping safety awareness concepts only, no operational lifting or hazard specifics",
    "relatedRecords": [
      "Material Receiving Log (demo record)",
      "Lot Traceability Tag (demo record)"
    ],
    "trainingStatus": "trained-demo",
    "evidencePlaceholder": "Placeholder for signed on-the-job training sign-off and supervisor verification (demo)"
  },
  {
    "roleId": "batch-technician",
    "roleName": "Batch Technician",
    "competenceAreas": [
      "Compound recipe ticket reading and ingredient verification (modeled, no formulation values)",
      "Weighing and dispensing discipline using QMS check-and-confirm steps",
      "Batch identification, numbering, and traceability concepts",
      "Recognizing out-of-tolerance weigh-up flags in the QMS model",
      "Good documentation practice for batch records"
    ],
    "relatedProcedures": [
      "SOP-BATCH-01 Weigh-Up and Ingredient Verification (demo)",
      "SOP-DOC-03 Good Documentation Practice (demo)"
    ],
    "safetyAwareness": "General awareness of safe additive handling and dust control concepts, no quantities or operational detail",
    "relatedRecords": [
      "Batch Weigh-Up Record (demo record)",
      "Ingredient Verification Checklist (demo record)"
    ],
    "trainingStatus": "trained-demo",
    "evidencePlaceholder": "Placeholder for weigh-up competency checklist and double-check witness sign-off (demo)"
  },
  {
    "roleId": "mixer-operator",
    "roleName": "Mixer Operator (Banbury/Internal Mixer)",
    "competenceAreas": [
      "Internal mixer (Banbury-type) loading sequence and batch discharge concepts",
      "Reading mixer process indicators and recognizing abnormal-cycle flags (modeled)",
      "Mix uniformity and dispersion quality awareness",
      "Sample pulling for downstream testing and batch hand-off concepts",
      "First-line response to scorch or undercure indicators in the QMS model"
    ],
    "relatedProcedures": [
      "SOP-MIX-01 Internal Mixer Operation and Batch Discharge (demo)",
      "SOP-MIX-02 In-Process Sampling and Hand-Off (demo)"
    ],
    "safetyAwareness": "General awareness of rotating-equipment and hot-stock hazard concepts, no setpoints or operational procedures",
    "relatedRecords": [
      "Mixer Cycle Log (demo record)",
      "In-Process Sample Tag (demo record)"
    ],
    "trainingStatus": "trained-demo",
    "evidencePlaceholder": "Placeholder for machine-specific operator qualification and shadow-shift sign-off (demo)"
  },
  {
    "roleId": "mill-calender-operator",
    "roleName": "Mill / Calender Operator",
    "competenceAreas": [
      "Two-roll mill warm-up, sheeting, and strip-off quality concepts (modeled)",
      "Calender operation and sheet/gauge consistency awareness",
      "Visual detection of common defects (blisters, scorch marks, gauge variation)",
      "Material flow control and trim/scrap segregation concepts",
      "Recognizing nip-related quality flags in the QMS model"
    ],
    "relatedProcedures": [
      "SOP-MILL-01 Two-Roll Mill Operation and Sheeting (demo)",
      "SOP-CAL-02 Calender Gauge Control and Inspection (demo)"
    ],
    "safetyAwareness": "General awareness of nip-point and pinch-hazard concepts and guarding importance, no operational specifics",
    "relatedRecords": [
      "Mill/Calender Shift Log (demo record)",
      "Gauge Check Record (demo record)"
    ],
    "trainingStatus": "in-training-demo",
    "evidencePlaceholder": "Placeholder for supervised-run hours log and qualified-operator sign-off (demo)"
  },
  {
    "roleId": "cure-operator",
    "roleName": "Cure Operator (Press / Autoclave)",
    "competenceAreas": [
      "Press and autoclave loading, cycle start, and unload sequence concepts (modeled)",
      "Reading cure-cycle status and recognizing aborted or interrupted-cycle flags",
      "Undercure and overcure visual indicator awareness",
      "Mold release, part handling, and cure traceability concepts",
      "Cure record completion and good documentation practice"
    ],
    "relatedProcedures": [
      "SOP-CURE-01 Press and Autoclave Cycle Operation (demo)",
      "SOP-CURE-02 Cured-Part Identification and Traceability (demo)"
    ],
    "safetyAwareness": "General awareness of hot-surface, steam, and pressure-vessel hazard concepts, no schedules or setpoints",
    "relatedRecords": [
      "Cure Cycle Log (demo record)",
      "Cured Batch Traceability Record (demo record)"
    ],
    "trainingStatus": "in-training-demo",
    "evidencePlaceholder": "Placeholder for pressure-equipment awareness module completion and operator sign-off (demo)"
  },
  {
    "roleId": "qa-inspector",
    "roleName": "QA Inspector",
    "competenceAreas": [
      "In-process and final visual inspection against acceptance criteria (modeled)",
      "Rubber physical test familiarity (hardness/durometer, tensile, tear, specific gravity) concepts",
      "Rheometer/cure-trace reading and pass-fail interpretation awareness",
      "Defect classification, nonconformance flagging, and hold-tag application",
      "Sampling plan and measurement recording discipline"
    ],
    "relatedProcedures": [
      "SOP-QA-01 In-Process and Final Inspection (demo)",
      "SOP-QA-02 Nonconforming Product Identification and Hold (demo)",
      "SOP-LAB-03 Physical Test Method Summary (demo)"
    ],
    "safetyAwareness": "General awareness of lab sample handling and test-equipment safety concepts, no operational detail",
    "relatedRecords": [
      "Inspection Report (demo record)",
      "Nonconformance Report (demo record)"
    ],
    "trainingStatus": "trained-demo",
    "evidencePlaceholder": "Placeholder for inspection method qualification and gauge-use sign-off (demo)"
  },
  {
    "roleId": "maintenance-technician",
    "roleName": "Maintenance Technician",
    "competenceAreas": [
      "Preventive maintenance schedule execution and recording concepts (modeled)",
      "Basic fault recognition on mixers, mills, calenders, and presses",
      "Calibration support and equipment status tagging awareness",
      "Spare-parts traceability and work-order closure discipline",
      "Recognizing maintenance-driven quality risk flags in the QMS model"
    ],
    "relatedProcedures": [
      "SOP-MNT-01 Preventive Maintenance Execution (demo)",
      "SOP-MNT-02 Equipment Status Tagging and Lockout Concept (demo)"
    ],
    "safetyAwareness": "General awareness of energy-isolation and lockout/tagout safety concepts, no operational lockout steps",
    "relatedRecords": [
      "Preventive Maintenance Log (demo record)",
      "Work Order Record (demo record)"
    ],
    "trainingStatus": "in-training-demo",
    "evidencePlaceholder": "Placeholder for maintenance competency matrix entry and supervisor sign-off (demo)"
  },
  {
    "roleId": "production-supervisor",
    "roleName": "Production Supervisor",
    "competenceAreas": [
      "Shift planning, station hand-off, and throughput monitoring concepts (modeled)",
      "First-line nonconformance triage and disposition routing awareness",
      "Operator competence verification and on-the-job coaching",
      "Process control reaction-plan ownership in the QMS model",
      "Production record review and escalation discipline"
    ],
    "relatedProcedures": [
      "SOP-PROD-01 Shift Hand-Off and Production Control (demo)",
      "SOP-PROD-02 Nonconformance Triage and Escalation (demo)"
    ],
    "safetyAwareness": "General awareness of floor-supervision and toolbox-talk safety-leadership concepts, no operational detail",
    "relatedRecords": [
      "Shift Production Log (demo record)",
      "Supervisor Disposition Record (demo record)"
    ],
    "trainingStatus": "trained-demo",
    "evidencePlaceholder": "Placeholder for supervisory training completion and competency review sign-off (demo)"
  },
  {
    "roleId": "sales-engineering-reviewer",
    "roleName": "Sales / Engineering Reviewer",
    "competenceAreas": [
      "Contract and customer-requirement review concepts (modeled)",
      "Specification and drawing interpretation for rubber parts",
      "Feasibility and capability assessment awareness before order acceptance",
      "Change-request capture and communication to production/quality",
      "Customer-specific quality requirement flow-down discipline"
    ],
    "relatedProcedures": [
      "SOP-SALES-01 Contract and Requirement Review (demo)",
      "SOP-ENG-02 Specification Flow-Down and Feasibility (demo)"
    ],
    "safetyAwareness": "General awareness of product-suitability and intended-use responsibility concepts, no operational detail",
    "relatedRecords": [
      "Order Review Record (demo record)",
      "Engineering Change Request (demo record)"
    ],
    "trainingStatus": "planned-demo",
    "evidencePlaceholder": "Placeholder for requirement-review training plan and reviewer authorization sign-off (demo)"
  },
  {
    "roleId": "quality-manager",
    "roleName": "Quality Manager",
    "competenceAreas": [
      "QMS ownership, document control, and audit-readiness coordination (modeled)",
      "Internal audit program and corrective/preventive action oversight concepts",
      "Management review, quality-objective tracking, and KPI interpretation",
      "Supplier quality and customer-complaint handling awareness",
      "Continual-improvement and nonconformance-trend analysis discipline"
    ],
    "relatedProcedures": [
      "SOP-QMS-01 Document and Record Control (demo)",
      "SOP-QMS-02 Internal Audit and Corrective Action (demo)",
      "SOP-QMS-03 Management Review (demo)"
    ],
    "safetyAwareness": "General awareness of quality-and-safety culture and management-responsibility concepts, no operational detail",
    "relatedRecords": [
      "Internal Audit Report (demo record)",
      "Management Review Minutes (demo record)"
    ],
    "trainingStatus": "trained-demo",
    "evidencePlaceholder": "Placeholder for lead-auditor training certificate reference and management-review sign-off (demo)"
  }
];
