import type { AiAgent } from "@/types/operatingModel";
export const aiAgents: AiAgent[] = [
  {
    "id": "customer-requirement",
    "name": "Customer Requirement Agent",
    "purpose": "Captures and structures incoming customer needs into clear, traceable requirement statements for a rubber sheet order.",
    "factoryArea": "Front-end customer intake",
    "inputs": [
      "Customer enquiry text",
      "Application and service context",
      "Dimensional and tolerance asks"
    ],
    "outputs": [
      "Structured requirement summary (demo)",
      "Open-question list for clarification",
      "Draft requirement traceability entry"
    ],
    "humanOwner": "Sales / Applications Engineer",
    "qmsResponsibility": "Supports customer-focus and requirement-determination activities under the customer property and product-requirement clause area",
    "relatedRecords": [
      "Customer Requirement Brief (demo)",
      "Requirement Clarification Log (demo)"
    ],
    "relatedLayer": "rfq",
    "supportsDecisions": "Helps the applications engineer decide which requirements are clear enough to advance and which need customer clarification.",
    "cannotDecideAutonomously": "It cannot autonomously accept or commit to a customer requirement set; a human applications engineer must confirm scope before the order proceeds.",
    "relatedClause": "clause-8"
  },
  {
    "id": "rfq-qualification",
    "name": "RFQ Qualification Agent",
    "purpose": "Reviews a structured requirement set against demo factory capability to flag RFQ feasibility, gaps, and risks for human qualification.",
    "factoryArea": "RFQ feasibility screening",
    "inputs": [
      "Structured requirement summary",
      "Demo capability and capacity snapshot",
      "Known constraints and exclusions"
    ],
    "outputs": [
      "Preliminary feasibility assessment (demo)",
      "Risk and gap flags",
      "Recommended clarifications for quoting"
    ],
    "humanOwner": "Sales / Applications Engineer",
    "qmsResponsibility": "Supports the review-of-requirements step before commitment under the product-and-service requirement clause area",
    "relatedRecords": [
      "RFQ Qualification Sheet (demo)",
      "Feasibility Review Note (demo)"
    ],
    "relatedLayer": "rfq",
    "supportsDecisions": "Supports the human decision on whether to quote, decline, or request more information on an RFQ.",
    "cannotDecideAutonomously": "It cannot autonomously approve or reject an RFQ or issue a quote commitment; a human must make the bid or no-bid call.",
    "relatedClause": "clause-8"
  },
  {
    "id": "material-selection",
    "name": "Material Selection Agent",
    "purpose": "Recommends candidate rubber material families generally suited to the stated application for human evaluation, without prescribing recipes.",
    "factoryArea": "Material concept selection",
    "inputs": [
      "Application and service context",
      "Performance and environment priorities",
      "Demo material property library"
    ],
    "outputs": [
      "Candidate material shortlist (demo)",
      "Trade-off rationale notes",
      "Property-fit comparison summary"
    ],
    "humanOwner": "Rubber Chemist",
    "qmsResponsibility": "Supports design-and-development input and selection control under the design and development clause area",
    "relatedRecords": [
      "Material Selection Record (demo)",
      "Material Trade-off Note (demo)"
    ],
    "relatedLayer": "chemistry",
    "supportsDecisions": "Supports the chemist's decision on which material families to evaluate further for the order.",
    "cannotDecideAutonomously": "It cannot autonomously approve a material for production use; a human rubber chemist must validate and select the material.",
    "relatedClause": "clause-8"
  },
  {
    "id": "rubber-chemistry",
    "name": "Rubber Chemistry Agent",
    "purpose": "Structures and checks the completeness of compound design considerations at a conceptual level to support chemist review, never generating recipes or loadings.",
    "factoryArea": "Compound design support",
    "inputs": [
      "Selected material family",
      "Target property priorities",
      "Demo compounding knowledge base"
    ],
    "outputs": [
      "Compound consideration checklist (demo)",
      "Property-risk flags",
      "Open formulation questions for review"
    ],
    "humanOwner": "Rubber Chemist",
    "qmsResponsibility": "Supports design-and-development control and verification planning under the design and development clause area",
    "relatedRecords": [
      "Compound Design Brief (demo)",
      "Formulation Review Log (demo)"
    ],
    "relatedLayer": "chemistry",
    "supportsDecisions": "Supports the chemist's decision on what compound aspects need verification before a trial.",
    "cannotDecideAutonomously": "It cannot autonomously approve a compound formulation; a human rubber chemist must own and sign off the formulation.",
    "relatedClause": "clause-8"
  },
  {
    "id": "process-route",
    "name": "Process Route Agent",
    "purpose": "Proposes a candidate station-by-station process route across the demo factory line for engineer review and confirmation.",
    "factoryArea": "Process route planning",
    "inputs": [
      "Confirmed product requirements",
      "Selected compound concept",
      "Demo station and routing model"
    ],
    "outputs": [
      "Draft process route map (demo)",
      "Station sequence rationale",
      "Process-risk flags for review"
    ],
    "humanOwner": "Process Engineer",
    "qmsResponsibility": "Supports operational planning and control of production under the operation and production-control clause area",
    "relatedRecords": [
      "Process Route Sheet (demo)",
      "Routing Review Note (demo)"
    ],
    "relatedLayer": "process",
    "supportsDecisions": "Supports the process engineer's decision on which routing through the line to adopt.",
    "cannotDecideAutonomously": "It cannot autonomously release a process route to production; a human process engineer must approve the routing.",
    "relatedClause": "clause-8"
  },
  {
    "id": "equipment-capability",
    "name": "Equipment Capability Agent",
    "purpose": "Checks a proposed route against demo equipment capability and capacity to flag fit and constraints for engineering review.",
    "factoryArea": "Equipment capability check",
    "inputs": [
      "Draft process route map",
      "Demo equipment capability profiles",
      "Current capacity and status snapshot"
    ],
    "outputs": [
      "Capability-fit assessment (demo)",
      "Constraint and bottleneck flags",
      "Alternative-station suggestions"
    ],
    "humanOwner": "Process Engineer",
    "qmsResponsibility": "Supports control of infrastructure and process suitability under the support-resources and operation clause area",
    "relatedRecords": [
      "Equipment Capability Record (demo)",
      "Capacity Fit Note (demo)"
    ],
    "relatedLayer": "process",
    "supportsDecisions": "Supports the engineer's decision on whether equipment can generally support the planned route.",
    "cannotDecideAutonomously": "It cannot autonomously commit equipment or release a route as machine-ready; a human engineer must confirm equipment suitability.",
    "relatedClause": "clause-7"
  },
  {
    "id": "supply-chain",
    "name": "Supply Chain Agent",
    "purpose": "Structures material demand and sourcing options for the order and flags supply risks for human planning.",
    "factoryArea": "Inbound material planning",
    "inputs": [
      "Bill of demand for the order",
      "Demo supplier and inventory snapshot",
      "Lead-time and risk context"
    ],
    "outputs": [
      "Sourcing plan draft (demo)",
      "Supply-risk flags",
      "Reorder and timing suggestions"
    ],
    "humanOwner": "Supply Chain Manager",
    "qmsResponsibility": "Supports control of externally provided processes and materials under the external-provision clause area",
    "relatedRecords": [
      "Sourcing Plan (demo)",
      "Supply Risk Log (demo)"
    ],
    "relatedLayer": "supply-chain",
    "supportsDecisions": "Supports the supply chain manager's decision on what to order, when, and from which demo source.",
    "cannotDecideAutonomously": "It cannot autonomously place purchase orders or commit spend; a human supply chain manager must authorize procurement.",
    "relatedClause": "clause-8"
  },
  {
    "id": "supplier-quality",
    "name": "Supplier Quality Agent",
    "purpose": "Organizes supplier and incoming-lot quality evidence to support supplier evaluation and material acceptance decisions.",
    "factoryArea": "Supplier and incoming quality",
    "inputs": [
      "Supplier performance data (demo)",
      "Incoming lot certificates and results (demo)",
      "Acceptance criteria references"
    ],
    "outputs": [
      "Supplier evaluation summary (demo)",
      "Incoming-lot disposition recommendation",
      "Nonconformance flags for review"
    ],
    "humanOwner": "Supplier Quality Engineer",
    "qmsResponsibility": "Supports evaluation and re-evaluation of external providers under the external-provision clause area",
    "relatedRecords": [
      "Supplier Scorecard (demo)",
      "Incoming Inspection Record (demo)"
    ],
    "relatedLayer": "supply-chain",
    "supportsDecisions": "Supports the supplier quality engineer's decision on supplier standing and incoming-lot acceptance.",
    "cannotDecideAutonomously": "It cannot autonomously approve a supplier or accept a nonconforming lot; a human supplier quality engineer must make that call.",
    "relatedClause": "clause-8"
  },
  {
    "id": "production-control",
    "name": "Production Control Agent",
    "purpose": "Monitors the simulated production sequence and surfaces schedule, status, and deviation signals for supervisor decisions.",
    "factoryArea": "Production scheduling and control",
    "inputs": [
      "Approved process route",
      "Live station status (demo)",
      "Order priorities and due dates"
    ],
    "outputs": [
      "Production schedule view (demo)",
      "Deviation and delay alerts",
      "Sequencing recommendations"
    ],
    "humanOwner": "Production Supervisor",
    "qmsResponsibility": "Supports planning and control of operations and production under the operation clause area",
    "relatedRecords": [
      "Production Order Log (demo)",
      "Shift Deviation Log (demo)"
    ],
    "relatedLayer": "process",
    "supportsDecisions": "Supports the production supervisor's decision on sequencing, holds, and resource allocation across stations.",
    "cannotDecideAutonomously": "It cannot autonomously start, hold, or release production; a human production supervisor must authorize each production action.",
    "relatedClause": "clause-8"
  },
  {
    "id": "qa-lab",
    "name": "QA Lab Agent",
    "purpose": "Structures lab test requests and results into completeness-checked summaries to support QA evaluation of conformance.",
    "factoryArea": "Quality laboratory",
    "inputs": [
      "Test plan and sample identifiers",
      "Recorded lab results (demo)",
      "Acceptance criteria references"
    ],
    "outputs": [
      "Test result summary (demo)",
      "Out-of-criteria flags",
      "Retest or follow-up recommendations"
    ],
    "humanOwner": "QA Lab Engineer",
    "qmsResponsibility": "Supports monitoring, measurement, and product-conformity verification under the performance-evaluation and operation clause area",
    "relatedRecords": [
      "Lab Test Report (demo)",
      "Sample Chain Record (demo)"
    ],
    "relatedLayer": "quality",
    "supportsDecisions": "Supports the QA lab engineer's decision on whether results indicate conformance or require retest.",
    "cannotDecideAutonomously": "It cannot autonomously pass or fail a lot on test results; a human QA lab engineer must approve the test conclusion.",
    "relatedClause": "clause-9"
  },
  {
    "id": "standards-testing",
    "name": "Standards and Testing Agent",
    "purpose": "Maps the demo test program to relevant standard categories at a structural level to help engineers confirm test coverage, without quoting standard text.",
    "factoryArea": "Test and standards mapping",
    "inputs": [
      "Product requirement set",
      "Demo standards reference index",
      "Planned test list"
    ],
    "outputs": [
      "Standards-coverage map (demo)",
      "Coverage-gap flags",
      "Suggested additional test categories"
    ],
    "humanOwner": "QA Lab Engineer",
    "qmsResponsibility": "Supports determination of monitoring and measurement requirements under the performance-evaluation clause area",
    "relatedRecords": [
      "Test Coverage Matrix (demo)",
      "Standards Reference Map (demo)"
    ],
    "relatedLayer": "quality",
    "supportsDecisions": "Supports the engineer's decision on whether the test plan covers the relevant requirement categories.",
    "cannotDecideAutonomously": "It cannot autonomously declare standards conformance or compliance; a human must confirm applicability and sign-off.",
    "relatedClause": "clause-9"
  },
  {
    "id": "traceability",
    "name": "Traceability Agent",
    "purpose": "Assembles and cross-checks the genealogy linking materials, process, tests, and output into a coherent traceability thread for review.",
    "factoryArea": "Lot traceability",
    "inputs": [
      "Material and lot identifiers",
      "Process and station records (demo)",
      "Test and inspection records (demo)"
    ],
    "outputs": [
      "Traceability record draft (demo)",
      "Broken-link and gap flags",
      "Genealogy summary view"
    ],
    "humanOwner": "Quality Manager",
    "qmsResponsibility": "Supports identification and traceability and control of records under the operation and documented-information clause area",
    "relatedRecords": [
      "Lot Traceability Record (demo)",
      "Genealogy Map (demo)"
    ],
    "relatedLayer": "documentation",
    "supportsDecisions": "Supports the quality manager's decision on whether traceability is complete enough to support disposition.",
    "cannotDecideAutonomously": "It cannot autonomously certify traceability as complete for release; a human quality manager must confirm the record set.",
    "relatedClause": "clause-8"
  },
  {
    "id": "document-control",
    "name": "Document Control Agent",
    "purpose": "Checks controlled documents for version, completeness, and routing status to support the document controller in maintaining current information.",
    "factoryArea": "Controlled documentation",
    "inputs": [
      "Submitted documents and revisions (demo)",
      "Document register state",
      "Review and approval routing rules"
    ],
    "outputs": [
      "Document status report (demo)",
      "Version and approval-gap flags",
      "Routing and update recommendations"
    ],
    "humanOwner": "Document Controller",
    "qmsResponsibility": "Supports creation, control, and currency of documented information under the documented-information clause area",
    "relatedRecords": [
      "Document Control Register (demo)",
      "Revision History Log (demo)"
    ],
    "relatedLayer": "documentation",
    "supportsDecisions": "Supports the document controller's decision on what needs review, update, or controlled release.",
    "cannotDecideAutonomously": "It cannot autonomously approve or release a controlled document; a human document controller and approver must authorize it.",
    "relatedClause": "clause-7"
  },
  {
    "id": "qms-audit",
    "name": "QMS Audit Agent",
    "purpose": "Prepares audit scope, checklists, and evidence summaries to support internal audit planning and finding review.",
    "factoryArea": "Internal QMS audit",
    "inputs": [
      "Audit program and scope (demo)",
      "Process and record evidence (demo)",
      "Prior findings history"
    ],
    "outputs": [
      "Audit checklist draft (demo)",
      "Preliminary observation flags",
      "Evidence summary for review"
    ],
    "humanOwner": "Quality Manager",
    "qmsResponsibility": "Supports the internal audit program under the performance-evaluation clause area",
    "relatedRecords": [
      "Internal Audit Plan (demo)",
      "Audit Finding Log (demo)"
    ],
    "relatedLayer": "qms",
    "supportsDecisions": "Supports the quality manager's decision on audit focus areas and which observations warrant findings.",
    "cannotDecideAutonomously": "It cannot autonomously raise or close an audit finding or conclude audit results; a human auditor and quality manager must own that.",
    "relatedClause": "clause-9"
  },
  {
    "id": "ncr-capa",
    "name": "NCR/CAPA Agent",
    "purpose": "Structures nonconformance reports and CAPA records, checking completeness and linking root-cause and action evidence for review.",
    "factoryArea": "Nonconformance and corrective action",
    "inputs": [
      "Nonconformance descriptions (demo)",
      "Investigation and root-cause notes",
      "Proposed action and evidence (demo)"
    ],
    "outputs": [
      "NCR draft (demo)",
      "CAPA completeness flags",
      "Root-cause and action summary"
    ],
    "humanOwner": "Quality Manager",
    "qmsResponsibility": "Supports control of nonconforming outputs and corrective action under the improvement and operation clause area",
    "relatedRecords": [
      "NCR Record (demo)",
      "CAPA Record (demo)"
    ],
    "relatedLayer": "quality",
    "supportsDecisions": "Supports the quality manager's decision on nonconformance disposition and adequacy of corrective actions.",
    "cannotDecideAutonomously": "It cannot autonomously disposition nonconforming product or close a CAPA; a human quality manager must approve disposition and closure.",
    "relatedClause": "clause-10"
  },
  {
    "id": "calibration",
    "name": "Calibration Agent",
    "purpose": "Tracks calibration status and due dates for monitoring and measuring resources and flags items needing attention for the coordinator.",
    "factoryArea": "Measurement and calibration",
    "inputs": [
      "Equipment and instrument register (demo)",
      "Calibration history and intervals (demo)",
      "Usage and status signals"
    ],
    "outputs": [
      "Calibration status dashboard (demo)",
      "Overdue and upcoming-due flags",
      "Recall and verification suggestions"
    ],
    "humanOwner": "Calibration Coordinator",
    "qmsResponsibility": "Supports control of monitoring and measuring resources under the support-resources clause area",
    "relatedRecords": [
      "Calibration Register (demo)",
      "Instrument Status Log (demo)"
    ],
    "relatedLayer": "maintenance",
    "supportsDecisions": "Supports the calibration coordinator's decision on which instruments to calibrate, verify, or remove from use.",
    "cannotDecideAutonomously": "It cannot autonomously declare an instrument fit for measurement use; a human calibration coordinator must confirm calibration status.",
    "relatedClause": "clause-7"
  },
  {
    "id": "management-review",
    "name": "Management Review Agent",
    "purpose": "Compiles performance inputs into a structured management-review pack to support leadership review of the QMS.",
    "factoryArea": "Management review",
    "inputs": [
      "Quality and process performance data (demo)",
      "Audit and CAPA status (demo)",
      "Customer feedback and objectives status"
    ],
    "outputs": [
      "Management review pack draft (demo)",
      "Trend and gap highlights",
      "Suggested discussion and action items"
    ],
    "humanOwner": "Plant Manager",
    "qmsResponsibility": "Supports leadership and management-review inputs and outputs under the leadership and performance-evaluation clause area",
    "relatedRecords": [
      "Management Review Pack (demo)",
      "Review Action Log (demo)"
    ],
    "relatedLayer": "qms",
    "supportsDecisions": "Supports the plant manager's decision on QMS effectiveness, priorities, and resource direction.",
    "cannotDecideAutonomously": "It cannot autonomously make management-review decisions or commit resources; human leadership must own the review outputs.",
    "relatedClause": "clause-9"
  },
  {
    "id": "continual-improvement",
    "name": "Continual Improvement Agent",
    "purpose": "Analyzes performance and nonconformance trends to surface improvement opportunities and structure proposals for review.",
    "factoryArea": "Continual improvement",
    "inputs": [
      "Trend and performance data (demo)",
      "CAPA and audit history (demo)",
      "Improvement backlog state"
    ],
    "outputs": [
      "Improvement opportunity list (demo)",
      "Prioritization rationale",
      "Draft improvement proposals"
    ],
    "humanOwner": "Continuous Improvement Lead",
    "qmsResponsibility": "Supports improvement and effectiveness enhancement under the improvement clause area",
    "relatedRecords": [
      "Improvement Opportunity Log (demo)",
      "Kaizen Proposal Record (demo)"
    ],
    "relatedLayer": "qms",
    "supportsDecisions": "Supports the continuous improvement lead's decision on which improvement opportunities to pursue.",
    "cannotDecideAutonomously": "It cannot autonomously approve or implement a process change; a human continuous improvement lead must authorize changes.",
    "relatedClause": "clause-10"
  },
  {
    "id": "digital-thread",
    "name": "Digital Thread Agent",
    "purpose": "Integrates records across stations and layers into a connected digital thread and flags missing links for data-integrity review.",
    "factoryArea": "Digital thread integration",
    "inputs": [
      "Cross-station records (demo)",
      "Layer and record linkages",
      "Data-completeness rules"
    ],
    "outputs": [
      "Connected digital thread view (demo)",
      "Missing-link and integrity flags",
      "Reconciliation recommendations"
    ],
    "humanOwner": "Quality Manager",
    "qmsResponsibility": "Supports integrity and availability of documented information under the documented-information clause area",
    "relatedRecords": [
      "Digital Thread Map (demo)",
      "Data Integrity Log (demo)"
    ],
    "relatedLayer": "documentation",
    "supportsDecisions": "Supports the quality manager's decision on whether the record set is connected and complete enough to rely on.",
    "cannotDecideAutonomously": "It cannot autonomously certify data integrity or completeness; a human quality manager must validate the digital thread.",
    "relatedClause": "clause-7"
  },
  {
    "id": "factory-output",
    "name": "Factory Output Agent",
    "purpose": "Consolidates the final product, test, and traceability picture for a finished roll into a release-readiness summary for human disposition.",
    "factoryArea": "Finished output and release readiness",
    "inputs": [
      "Final inspection results (demo)",
      "Traceability and test record set (demo)",
      "Order requirement set"
    ],
    "outputs": [
      "Release-readiness summary (demo)",
      "Open-item and gap flags",
      "Recommended disposition for review"
    ],
    "humanOwner": "Quality Manager",
    "qmsResponsibility": "Supports release of products and services and conformity confirmation under the operation clause area",
    "relatedRecords": [
      "Finished Roll Record (demo)",
      "Release Readiness Sheet (demo)"
    ],
    "relatedLayer": "quality",
    "supportsDecisions": "Supports the quality manager's decision on whether a finished roll is ready to present for release.",
    "cannotDecideAutonomously": "It cannot autonomously release product to the customer; a human quality manager must authorize final product release.",
    "relatedClause": "clause-8"
  }
];
export const aiAgentsById: Record<string, AiAgent> = Object.fromEntries(aiAgents.map((a) => [a.id, a]));
