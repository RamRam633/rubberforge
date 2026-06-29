import type { OpportunityEntry } from "@/types/qms";
export const opportunityRegister: OpportunityEntry[] = [
  {
    "id": "opp-1",
    "opportunity": "Capture more complete RFQ inputs (material grade, dimensional tolerances, cure-state expectations, intended service environment, and required test certificates) before a quote or work order is opened.",
    "processArea": "Sales and Order Intake (RFQ-to-Quote)",
    "benefit": "More complete requirements up front generally reduce downstream clarification loops, scrap, and incorrect compound or hardness selection.",
    "action": "Add a mandatory structured RFQ intake form with required-field validation to the modeled order-entry workflow (demo data only).",
    "owner": "Sales and Estimating Lead",
    "relatedClause": "clause-8",
    "priority": "high",
    "status": "planned"
  },
  {
    "id": "opp-2",
    "opportunity": "Improve lot and batch traceability so that finished rubber goods can be linked back through curing, mixing, and raw-elastomer receipt records.",
    "processArea": "Production Traceability and Material Control",
    "benefit": "Stronger forward and backward traceability typically narrows the scope and cost of any containment or recall and supports faster root-cause analysis.",
    "action": "Model a unique batch and lot ID that propagates across the 10 simulated stations from compound mixing to final inspection (placeholder IDs).",
    "owner": "Quality Manager",
    "relatedClause": "clause-8",
    "priority": "high",
    "status": "in-progress"
  },
  {
    "id": "opp-3",
    "opportunity": "Formalize a supplier qualification path for incoming elastomers, fillers, and curatives so that material sources are evaluated and re-evaluated on defined criteria.",
    "processArea": "Procurement and Supplier Management",
    "benefit": "Qualifying and monitoring suppliers commonly reduces incoming-material variability, which is a frequent driver of cure and physical-property defects in rubber parts.",
    "action": "Create a modeled supplier scorecard concept covering certificate-of-analysis review, on-time delivery, and nonconformance history (demo scoring).",
    "owner": "Procurement Lead",
    "relatedClause": "clause-8",
    "priority": "medium",
    "status": "idea"
  },
  {
    "id": "opp-4",
    "opportunity": "Standardize how each rubber process step (mixing, milling, calendering, molding or extrusion, curing, finishing, inspection) is described, sequenced, and controlled across the virtual line.",
    "processArea": "Process Design and Operational Control",
    "benefit": "Standardized, documented process steps generally improve repeatability between shifts and operators and make deviations easier to detect.",
    "action": "Author a paraphrased standard work concept for each of the 10 stations with defined inputs, controls, and acceptance checks (educational placeholders, no settings).",
    "owner": "Process Engineering Lead",
    "relatedClause": "clause-8",
    "priority": "high",
    "status": "in-progress"
  },
  {
    "id": "opp-5",
    "opportunity": "Move key QMS records and procedures from informal notes into controlled, versioned digital documents within the modeled system.",
    "processArea": "Document and Records Management",
    "benefit": "Controlled digital documentation typically reduces use of outdated instructions and makes records easier to retrieve during reviews and mock audits.",
    "action": "Add a modeled document register with version, owner, and review-date fields for procedures and records (placeholder entries).",
    "owner": "Document Control Coordinator",
    "relatedClause": "clause-8",
    "priority": "medium",
    "status": "planned"
  },
  {
    "id": "opp-6",
    "opportunity": "Educate customers on how rubber material choices, hardness ranges, and test methods affect part performance so requirements are set realistically before order placement.",
    "processArea": "Customer Communication and Education",
    "benefit": "Better-informed customers generally submit clearer specifications, which reduces requirement mismatches and post-delivery disputes.",
    "action": "Build an in-app educational explainer concept linking common applications to relevant property tests such as hardness, tensile, and compression set (high-level, illustrative).",
    "owner": "Customer Success Lead",
    "relatedClause": "clause-8",
    "priority": "low",
    "status": "idea"
  },
  {
    "id": "opp-7",
    "opportunity": "Build audit-readiness by mapping each modeled process and record to its paraphrased QMS clause label so gaps are visible before any real audit.",
    "processArea": "Internal Audit and Management Review",
    "benefit": "A maintained clause-to-evidence map commonly shortens audit preparation and surfaces missing records as planning items rather than findings.",
    "action": "Create a modeled audit-readiness matrix that flags each paraphrased clause area as covered, partial, or future-integration (demo status only, not a certification claim).",
    "owner": "Lead Auditor (Internal)",
    "relatedClause": "clause-8",
    "priority": "high",
    "status": "planned"
  },
  {
    "id": "opp-8",
    "opportunity": "Reduce rework and scrap by capturing nonconformances at the station where they occur and feeding them into corrective-action tracking.",
    "processArea": "Nonconformance and Corrective Action",
    "benefit": "Catching defects such as backrinding, porosity, undercure, or knit lines earlier in the line typically lowers rework hours and material loss.",
    "action": "Model a station-level nonconformance log that links each flagged defect to a corrective-action concept and recurrence check (placeholder records).",
    "owner": "Quality Engineer",
    "relatedClause": "clause-8",
    "priority": "medium",
    "status": "in-progress"
  },
  {
    "id": "opp-9",
    "opportunity": "Improve operator training and competency tracking for rubber processing and inspection roles tied to the virtual factory stations.",
    "processArea": "Competence and Training",
    "benefit": "Documented, role-matched training generally reduces process variation and inspection errors and supports consistent application of standard work.",
    "action": "Add a modeled competency matrix mapping each station role to required training topics and a refresher interval concept (demo data).",
    "owner": "Training and Competency Coordinator",
    "relatedClause": "clause-8",
    "priority": "medium",
    "status": "idea"
  }
];
