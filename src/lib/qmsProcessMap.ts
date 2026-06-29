import type { QmsProcess } from "@/types/qms";
export const qmsProcessMap: QmsProcess[] = [
  {
    "id": "core-1",
    "name": "Customer Inquiry and Requirement Review",
    "owner": "Sales and Customer Service Lead",
    "purpose": "Capture and confirm each customer inquiry so that stated and implied product, service, and delivery requirements are understood before any commitment is modeled.",
    "inputs": [
      "Customer inquiry or enquiry (demo placeholder)",
      "Application and service-condition notes",
      "Order history reference (demo)"
    ],
    "outputs": [
      "Logged inquiry record (demo)",
      "Clarified requirement summary",
      "Feasibility flag for review"
    ],
    "relatedClause": "clause-8",
    "group": "core"
  },
  {
    "id": "core-2",
    "name": "RFQ and Technical Review",
    "owner": "Applications Engineering Lead",
    "purpose": "Review the request for quotation against rubber compound capability, product geometry, and applicable test or standard callouts to confirm the order can typically be met before quoting.",
    "inputs": [
      "Requirement summary",
      "Drawings or specification callouts (demo)",
      "Capability and capacity reference"
    ],
    "outputs": [
      "Technical review record (demo)",
      "Quotation with assumptions stated",
      "Open-question or gap list"
    ],
    "relatedClause": "clause-8",
    "group": "core"
  },
  {
    "id": "core-3",
    "name": "Material Selection",
    "owner": "Compound and Materials Engineer",
    "purpose": "Select a base polymer family and compound concept matched to the service conditions and customer specification, without disclosing any proprietary formulation detail.",
    "inputs": [
      "Service-condition and property targets",
      "Named specification reference (demo)",
      "Material capability library"
    ],
    "outputs": [
      "Selected material concept record (demo)",
      "Property expectation summary",
      "Material risk notes"
    ],
    "relatedClause": "clause-8",
    "group": "core"
  },
  {
    "id": "core-4",
    "name": "Sourcing and Supplier Review",
    "owner": "Purchasing and Supply Chain Lead",
    "purpose": "Identify and review approved suppliers for the selected polymer, fillers, and cure-package categories so that sourced inputs commonly support the property and traceability expectations.",
    "inputs": [
      "Selected material concept",
      "Approved supplier list (demo)",
      "Lead-time and availability data"
    ],
    "outputs": [
      "Purchase order draft (demo)",
      "Supplier selection record",
      "Traceability requirement flag"
    ],
    "relatedClause": "clause-8",
    "group": "core"
  },
  {
    "id": "core-5",
    "name": "Incoming Inspection",
    "owner": "Incoming Quality Inspector",
    "purpose": "Inspect and verify received raw materials against the order and any supplier certificate before staging, to prevent nonconforming or contaminated stock entering the line.",
    "inputs": [
      "Received material lots (demo)",
      "Supplier certificate of analysis (demo)",
      "Incoming inspection plan"
    ],
    "outputs": [
      "Accept, reject, or hold disposition (demo)",
      "Lot traceability record",
      "Nonconforming material flag"
    ],
    "relatedClause": "clause-8",
    "group": "core"
  },
  {
    "id": "core-6",
    "name": "Batch Preparation and Weighing",
    "owner": "Compounding Room Supervisor",
    "purpose": "Stage and portion each ingredient category against the batch ticket, keeping the cure package distinct, so the prepared charge matches the intended compound concept.",
    "inputs": [
      "Released raw-material lots (demo)",
      "Batch ticket (demo placeholder)",
      "Calibrated scale reference"
    ],
    "outputs": [
      "Weighed batch charge (demo)",
      "Batch preparation record",
      "Ingredient verification log"
    ],
    "relatedClause": "clause-8",
    "group": "core"
  },
  {
    "id": "core-7",
    "name": "Mixing",
    "owner": "Mixing Operator and Process Engineer",
    "purpose": "Combine the staged ingredients into a homogeneous masterbatch and final mix on internal mixer or two-roll mill, monitoring in-process indicators of dispersion and consistency.",
    "inputs": [
      "Weighed batch charge",
      "Mixing process sheet (demo)",
      "Calibrated process monitors"
    ],
    "outputs": [
      "Mixed compound batch (demo)",
      "Mixing process record",
      "Batch rheology or viscosity check result (demo)"
    ],
    "relatedClause": "clause-8",
    "group": "core"
  },
  {
    "id": "core-8",
    "name": "Milling, Calendering, and Forming",
    "owner": "Forming Line Supervisor",
    "purpose": "Convert the mixed compound into the intended preform via milling, calendering, extrusion, or molding feed so dimensions and surface condition commonly meet the product concept.",
    "inputs": [
      "Mixed compound batch",
      "Forming or tooling setup sheet (demo)",
      "Dimensional reference"
    ],
    "outputs": [
      "Formed preform or sheet (demo)",
      "In-process dimensional check result (demo)",
      "Forming process record"
    ],
    "relatedClause": "clause-8",
    "group": "core"
  },
  {
    "id": "core-9",
    "name": "Curing and Vulcanization",
    "owner": "Curing and Press Supervisor",
    "purpose": "Cross-link the formed rubber under controlled heat and pressure in press, autoclave, or continuous cure so the part typically develops its target cured properties.",
    "inputs": [
      "Formed preform (demo)",
      "Cure process sheet (demo placeholder)",
      "Calibrated temperature and pressure monitors"
    ],
    "outputs": [
      "Vulcanized part (demo)",
      "Cure process record",
      "State-of-cure check result (demo)"
    ],
    "relatedClause": "clause-8",
    "group": "core"
  },
  {
    "id": "core-10",
    "name": "Finishing",
    "owner": "Finishing and Deflashing Lead",
    "purpose": "Trim, deflash, post-cure, or surface-treat the vulcanized part to the intended final condition while preserving its conformity and identity.",
    "inputs": [
      "Vulcanized part",
      "Finishing instruction (demo)",
      "Trim and surface tooling"
    ],
    "outputs": [
      "Finished part (demo)",
      "Finishing process record",
      "Visual condition check result (demo)"
    ],
    "relatedClause": "clause-8",
    "group": "core"
  },
  {
    "id": "core-11",
    "name": "Inspection and Testing",
    "owner": "Quality Assurance Lead",
    "purpose": "Perform final and laboratory inspection, including dimensional, visual, and physical-property tests such as hardness and tensile, to verify product conformity before release.",
    "inputs": [
      "Finished parts (demo)",
      "Inspection and test plan",
      "Calibrated test equipment"
    ],
    "outputs": [
      "Inspection and test record (demo)",
      "Conformity disposition (release or hold)",
      "Test report for customer (demo)"
    ],
    "relatedClause": "clause-8",
    "group": "core"
  },
  {
    "id": "core-12",
    "name": "Packaging and Shipping",
    "owner": "Logistics and Dispatch Lead",
    "purpose": "Pack, label, and dispatch released product with correct identification and documentation so it reaches the customer protected and traceable.",
    "inputs": [
      "Released finished parts (demo)",
      "Packing and labeling instruction",
      "Shipping documentation (demo)"
    ],
    "outputs": [
      "Packed and labeled shipment (demo)",
      "Dispatch and traceability record",
      "Delivery documentation (demo)"
    ],
    "relatedClause": "clause-8",
    "group": "core"
  },
  {
    "id": "core-13",
    "name": "Customer Feedback",
    "owner": "Customer Quality and Account Manager",
    "purpose": "Collect, log, and route customer satisfaction signals, complaints, and returns so that field performance feeds back into the QMS model.",
    "inputs": [
      "Customer complaint or feedback (demo)",
      "Returned product or claim detail (demo)",
      "Satisfaction survey response (demo)"
    ],
    "outputs": [
      "Logged feedback record (demo)",
      "Complaint disposition and trend input",
      "Improvement or CAPA trigger"
    ],
    "relatedClause": "clause-9",
    "group": "core"
  },
  {
    "id": "support-1",
    "name": "Document Control",
    "owner": "Document Controller",
    "purpose": "Manage creation, approval, revision, and access of QMS documents and process sheets so current versions are in use and obsolete ones are withdrawn.",
    "inputs": [
      "Draft or revised document (demo)",
      "Change request",
      "Master document register"
    ],
    "outputs": [
      "Approved controlled document (demo)",
      "Revision history record",
      "Updated document register"
    ],
    "relatedClause": "clause-7",
    "group": "support"
  },
  {
    "id": "support-2",
    "name": "Training and Competence",
    "owner": "Training and HR Coordinator",
    "purpose": "Plan and record operator and inspector training so personnel are commonly competent for mixing, curing, inspection, and other assigned roles.",
    "inputs": [
      "Role competence requirements",
      "Training plan (demo)",
      "Skills gap assessment"
    ],
    "outputs": [
      "Training record (demo)",
      "Competence or qualification matrix",
      "Refresher training trigger"
    ],
    "relatedClause": "clause-7",
    "group": "support"
  },
  {
    "id": "support-3",
    "name": "Equipment Maintenance",
    "owner": "Maintenance Engineering Lead",
    "purpose": "Plan and record preventive and corrective maintenance of mixers, mills, calenders, presses, and autoclaves so process equipment stays capable.",
    "inputs": [
      "Equipment register",
      "Preventive maintenance schedule (demo)",
      "Breakdown or fault report (demo)"
    ],
    "outputs": [
      "Maintenance record (demo)",
      "Equipment availability status",
      "Spare-parts or repair request"
    ],
    "relatedClause": "clause-7",
    "group": "support"
  },
  {
    "id": "support-4",
    "name": "Calibration",
    "owner": "Calibration and Metrology Coordinator",
    "purpose": "Schedule and record calibration of scales, durometers, tensile machines, and temperature and pressure monitors so measurements remain traceable and trusted.",
    "inputs": [
      "Measuring equipment register",
      "Calibration schedule (demo)",
      "Reference standard traceability (demo)"
    ],
    "outputs": [
      "Calibration certificate or record (demo)",
      "Equipment calibration status label",
      "Out-of-tolerance alert"
    ],
    "relatedClause": "clause-7",
    "group": "support"
  },
  {
    "id": "support-5",
    "name": "Supplier Management",
    "owner": "Supplier Quality Lead",
    "purpose": "Approve, evaluate, and re-evaluate suppliers of polymers, fillers, and cure-package materials so the supply base commonly meets quality and delivery needs.",
    "inputs": [
      "Supplier performance data (demo)",
      "Approved supplier list",
      "Supplier audit or survey result (demo)"
    ],
    "outputs": [
      "Updated approved supplier list (demo)",
      "Supplier scorecard record",
      "Corrective-action request to supplier"
    ],
    "relatedClause": "clause-8",
    "group": "support"
  },
  {
    "id": "support-6",
    "name": "Quality Records",
    "owner": "Quality Records Administrator",
    "purpose": "Capture, retain, and protect QMS records including batch, inspection, and traceability data so evidence is retrievable for review and audit-readiness.",
    "inputs": [
      "Process and inspection records (demo)",
      "Retention policy",
      "Records index"
    ],
    "outputs": [
      "Retained and indexed record set (demo)",
      "Retrieval and traceability link",
      "Retention or disposal log"
    ],
    "relatedClause": "clause-7",
    "group": "support"
  },
  {
    "id": "support-7",
    "name": "Internal Audit",
    "owner": "Internal Audit Lead",
    "purpose": "Plan and conduct internal audits of QMS processes against the modeled requirements to check conformity and surface improvement opportunities.",
    "inputs": [
      "Audit program and schedule (demo)",
      "Process and clause checklists",
      "Prior audit findings"
    ],
    "outputs": [
      "Internal audit report (demo)",
      "Nonconformity and observation findings",
      "CAPA trigger list"
    ],
    "relatedClause": "clause-9",
    "group": "support"
  },
  {
    "id": "support-8",
    "name": "Corrective and Preventive Action (CAPA)",
    "owner": "CAPA and Quality Engineering Lead",
    "purpose": "Investigate nonconformities and complaints, drive root-cause analysis, and verify corrective actions so recurring rubber defects are reduced.",
    "inputs": [
      "Nonconformity or complaint record (demo)",
      "Audit or test failure finding",
      "Root-cause analysis input"
    ],
    "outputs": [
      "CAPA record with verified action (demo)",
      "Updated process control or document",
      "Effectiveness-check result"
    ],
    "relatedClause": "clause-10",
    "group": "support"
  },
  {
    "id": "support-9",
    "name": "Management Review",
    "owner": "Quality and Operations Director",
    "purpose": "Periodically review QMS performance, metrics, audit results, and feedback at leadership level to confirm continued suitability and set direction.",
    "inputs": [
      "Performance metrics summary (demo)",
      "Audit, CAPA, and feedback inputs",
      "Objectives status review"
    ],
    "outputs": [
      "Management review minutes (demo)",
      "Decisions and resource actions",
      "Updated objectives or priorities"
    ],
    "relatedClause": "clause-9",
    "group": "support"
  },
  {
    "id": "support-10",
    "name": "Continual Improvement",
    "owner": "Continual Improvement Facilitator",
    "purpose": "Coordinate ongoing improvement of processes, quality, and efficiency drawing on data, audits, and CAPA so the QMS model trends toward better performance.",
    "inputs": [
      "Improvement opportunities (demo)",
      "Performance and defect trend data",
      "Management review actions"
    ],
    "outputs": [
      "Improvement initiative record (demo)",
      "Updated process or target",
      "Realized improvement evidence (demo)"
    ],
    "relatedClause": "clause-10",
    "group": "support"
  },
  {
    "id": "management-1",
    "name": "Quality Policy",
    "owner": "Top Management (Managing Director)",
    "purpose": "Establish and communicate the modeled quality policy that frames the factory commitment to conforming rubber products and continual improvement.",
    "inputs": [
      "Business context inputs",
      "Interested-party expectations",
      "Strategic direction"
    ],
    "outputs": [
      "Documented quality policy (demo placeholder)",
      "Communicated policy statement",
      "Framework for quality objectives"
    ],
    "relatedClause": "clause-5",
    "group": "management"
  },
  {
    "id": "management-2",
    "name": "Quality Objectives",
    "owner": "Quality Management Representative",
    "purpose": "Define measurable quality objectives aligned to the policy so the QMS model has concrete, trackable targets across the rubber line.",
    "inputs": [
      "Quality policy",
      "Performance baseline data (demo)",
      "Risk and improvement priorities"
    ],
    "outputs": [
      "Documented quality objectives (demo)",
      "Objective owners and timelines",
      "Monitoring plan for objectives"
    ],
    "relatedClause": "clause-6",
    "group": "management"
  },
  {
    "id": "management-3",
    "name": "Risk Review",
    "owner": "Risk and Quality Planning Lead",
    "purpose": "Identify and assess risks and opportunities across sourcing, mixing, curing, and delivery so actions to address them are planned into the QMS model.",
    "inputs": [
      "Process and supplier risk inputs",
      "Context and interested-party data",
      "Prior nonconformity trends"
    ],
    "outputs": [
      "Risk and opportunity register (demo)",
      "Mitigation action plan",
      "Risk-priority input to objectives"
    ],
    "relatedClause": "clause-6",
    "group": "management"
  },
  {
    "id": "management-4",
    "name": "Business Context",
    "owner": "Strategy and Business Planning Lead",
    "purpose": "Determine the internal and external issues relevant to the rubber business so the QMS scope and direction reflect the operating environment.",
    "inputs": [
      "Market and regulatory environment scan",
      "Internal capability assessment",
      "Strategic objectives"
    ],
    "outputs": [
      "Context analysis record (demo)",
      "Defined QMS scope statement",
      "Issues input to risk review"
    ],
    "relatedClause": "clause-4",
    "group": "management"
  },
  {
    "id": "management-5",
    "name": "Interested Parties",
    "owner": "Stakeholder Engagement Lead",
    "purpose": "Identify relevant interested parties such as customers, suppliers, regulators, and employees and their relevant needs to inform QMS planning.",
    "inputs": [
      "Stakeholder mapping inputs",
      "Customer and regulatory requirements",
      "Supplier and employee expectations"
    ],
    "outputs": [
      "Interested-parties register (demo)",
      "Relevant needs and expectations summary",
      "Requirements input to context and risk"
    ],
    "relatedClause": "clause-4",
    "group": "management"
  },
  {
    "id": "management-6",
    "name": "Performance Metrics",
    "owner": "Quality Data and Performance Analyst",
    "purpose": "Define, collect, and report QMS performance indicators such as first-pass yield, defect rate, and on-time delivery to monitor process health.",
    "inputs": [
      "Process and inspection data (demo)",
      "Defined metric definitions",
      "Objective targets"
    ],
    "outputs": [
      "Performance metrics dashboard (demo)",
      "Trend and exception reports",
      "Input to management review"
    ],
    "relatedClause": "clause-9",
    "group": "management"
  }
];
