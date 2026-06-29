import type { ClauseCard } from "@/types/qms";
export const qmsClauseMap: ClauseCard[] = [
  {
    "id": "clause-4",
    "clauseLabel": "Context of the organization",
    "subAreas": [
      "Understanding the factory and its environment",
      "Interested-party needs and expectations (customers, suppliers, regulators)",
      "QMS scope definition",
      "Process approach and process interactions",
      "External and internal issues (including climate-action consideration, 2024 amendment)"
    ],
    "meaningInRubberFactory": "Frames why this rubber-sheet plant exists, who it serves (RFQ customers, elastomer and filler suppliers, downstream converters), and which processes (raw-material receiving through finished-roll dispatch) sit inside the modeled quality scope. In RubberForge this is expressed as the 10-station process map and supply-chain map rather than a formal scope statement, so it is a teaching model of context, not an established organizational context.",
    "relatedModules": [
      "process-map",
      "context-climate",
      "supplier-control",
      "customer-requirement-review"
    ],
    "evidenceExamples": [
      "Demo QMS scope note: 'sheet rubber manufacturing, raw receipt to dispatch' (placeholder boundary)",
      "Demo interested-party map listing customer, supplier, and regulator expectations (illustrative)",
      "Demo process-interaction diagram derived from the 10-station map (placeholder)",
      "Demo context-and-climate note flagging energy-intensive cure as a relevant external consideration (illustrative)"
    ],
    "status": "partial",
    "gaps": [
      "No formal documented QMS scope statement or boundary exclusions yet; only the process map stands in for it.",
      "Interested-party register and the 2024 climate-relevance determination are modeled at a high level and would need a real organization to confirm relevance.",
      "Internal/external issues are illustrative; a configured factory (maturity Level 2+) would replace them with site-specific issues."
    ]
  },
  {
    "id": "clause-5",
    "clauseLabel": "Leadership",
    "subAreas": [
      "Leadership and commitment",
      "Quality policy",
      "Customer focus",
      "Organizational roles, responsibilities, and authorities"
    ],
    "meaningInRubberFactory": "Covers how plant management would own the quality system, publish a quality policy, keep customer requirements central, and assign who has authority to release or hold rubber product. In RubberForge this surfaces as the factory-roles model and the hold/release decision points, so it is a conceptual leadership layer, not an attestation that any management commitment exists.",
    "relatedModules": [
      "management-review",
      "customer-requirement-review",
      "document-control",
      "nonconformance"
    ],
    "evidenceExamples": [
      "Demo quality-policy statement template, clearly marked placeholder",
      "Demo roles-and-authority matrix (who may disposition a held batch), illustrative only",
      "Demo customer-focus note tying RFQ acceptance criteria back to the order (placeholder)"
    ],
    "status": "partial",
    "gaps": [
      "Quality policy and signed management commitment are placeholder text, not adopted by any real organization.",
      "Role authorities are modeled from factory-roles content but are not mapped to named accountable owners.",
      "Management-review ownership is referenced but not yet operationalized (see clause 9)."
    ]
  },
  {
    "id": "clause-6",
    "clauseLabel": "Planning",
    "subAreas": [
      "Actions to address risks and opportunities",
      "Quality objectives and planning to achieve them",
      "Planning of changes",
      "Climate-relevant risk consideration (2024 amendment)"
    ],
    "meaningInRubberFactory": "Defines how the plant would identify process risks (scorch, undercure, gauge drift, lot mix-ups), set measurable quality objectives (for example first-pass yield or scrap-rate targets), and plan changes to compounds, equipment, or routes in a controlled way. RubberForge captures station-level risk content and a readiness-score engine, so risk thinking is modeled, but a standing, owned risk register is only partially present.",
    "relatedModules": [
      "risk-register",
      "context-climate",
      "continual-improvement",
      "document-control"
    ],
    "evidenceExamples": [
      "Demo risk register seeded from per-station scrap, bottleneck, and maintenance risks (placeholder entries)",
      "Demo quality-objective set with target and placeholder metric values, clearly labeled",
      "Demo change-plan record for a route or equipment change (illustrative)",
      "Demo climate-consideration line noting cure/mixing energy intensity as a planning input (illustrative, not overstated)"
    ],
    "status": "partial",
    "gaps": [
      "Station risk content exists but is not yet consolidated into a single owned, scored, and reviewed risk register with treatment actions.",
      "Quality objectives are placeholder targets without baselines, owners, or review cadence.",
      "Climate-related risks and opportunities are noted lightly and would need real site data to assess significance."
    ]
  },
  {
    "id": "clause-7",
    "clauseLabel": "Support",
    "subAreas": [
      "Resources, people, and infrastructure",
      "Monitoring and measuring resources (calibration)",
      "Competence, awareness, and training",
      "Organizational knowledge",
      "Documented information and document control"
    ],
    "meaningInRubberFactory": "Covers the people, equipment, calibrated test instruments, and controlled documents the plant needs: calibrated scales and thickness gauges, hardness and rheometer-type test gear, trained mixer and calender operators, and version-controlled batch tickets and inspection records. RubberForge models calibration dependence and documentation packages strongly, so support is well represented as a concept, with formal calibration scheduling and a training matrix only partially modeled.",
    "relatedModules": [
      "calibration",
      "document-control",
      "training-matrix",
      "traceability"
    ],
    "evidenceExamples": [
      "Demo calibration register for scales and thickness gauges with due dates (placeholder values, traceable-reference concept)",
      "Demo controlled-document list with version and owner (illustrative batch-ticket and inspection-record templates)",
      "Demo competence/training matrix for mixer, calender, and inspection roles (placeholder)",
      "Demo documented-information control note describing review and retention (illustrative)"
    ],
    "status": "modeled",
    "gaps": [
      "Calibration is described as a dependency at most stations but is not yet a scheduled, status-tracked register with overdue alerts.",
      "Training matrix is conceptual; competence evidence per operator is placeholder.",
      "Document-control workflow (approval, change, retention) is illustrated rather than enforced by the prototype."
    ]
  },
  {
    "id": "clause-8",
    "clauseLabel": "Operation",
    "subAreas": [
      "Operational planning and control",
      "Requirements review for products and orders (RFQ)",
      "Control of externally provided processes and materials (supplier control)",
      "Production and service provision, identification and traceability",
      "Control of nonconforming outputs",
      "Release of products (hold and release points)"
    ],
    "meaningInRubberFactory": "This is the strongest clause in RubberForge: the live 10-station line with in-process checkpoints, incoming material identity and quarantine, batch-to-lot genealogy, conceptual hold/release decisions at cure and final inspection, and nonconformance disposition (rework, concession-by-customer-agreement, or reject). It realistically models how a rubber sheet is controlled from receipt to dispatch, while keeping formulations, cure schedules, and machine settings deliberately undisclosed.",
    "relatedModules": [
      "process-map",
      "traceability",
      "supplier-control",
      "nonconformance"
    ],
    "evidenceExamples": [
      "Demo in-process inspection records per station with conceptual release notes (illustrative)",
      "Demo lot-genealogy chain from raw-polymer lot through cure lot to finished-roll ID (sample IDs only)",
      "Demo incoming inspection and CoA-review record with hold/release disposition (placeholder)",
      "Demo nonconformance record showing rework/reject disposition against a batch number (illustrative)"
    ],
    "status": "modeled",
    "gaps": [
      "Nonconformance handling is described and dispositioned conceptually but is not yet a closed-loop tracked log linked to corrective action.",
      "Supplier control is modeled as receiving inspection and illustrative vendor data; formal approved-supplier evaluation and re-evaluation is not yet present.",
      "RFQ requirement review captures acceptance criteria conceptually but does not yet record a formal contract-review signoff per order."
    ]
  },
  {
    "id": "clause-9",
    "clauseLabel": "Performance evaluation",
    "subAreas": [
      "Monitoring, measurement, analysis, and evaluation",
      "Customer satisfaction",
      "Internal audit",
      "Management review"
    ],
    "meaningInRubberFactory": "Covers how the plant would measure whether the QMS works: scrap and first-pass-yield trends, defect Pareto data, customer feedback, scheduled internal audits against the clause map, and periodic management review of the results. RubberForge has a readiness-score engine and defect analytics that hint at this, but internal audit and management review are largely future-integration rather than running activities.",
    "relatedModules": [
      "internal-audit",
      "management-review",
      "nonconformance",
      "continual-improvement"
    ],
    "evidenceExamples": [
      "Demo KPI dashboard with placeholder scrap-rate and first-pass-yield trends (clearly illustrative)",
      "Demo internal-audit plan and checklist mapped to clauses 4 to 10 (placeholder)",
      "Demo management-review input/output summary (illustrative agenda and actions)",
      "Demo defect Pareto and customer-feedback log (placeholder data)"
    ],
    "status": "future",
    "gaps": [
      "No running internal-audit programme, schedule, or audit findings yet; only a checklist concept.",
      "Management review is referenced but not yet conducted with real inputs, decisions, and recorded outputs.",
      "Performance metrics are placeholder values without verified baselines; customer-satisfaction capture is conceptual."
    ]
  },
  {
    "id": "clause-10",
    "clauseLabel": "Improvement",
    "subAreas": [
      "General improvement intent",
      "Nonconformity and corrective action (CAPA)",
      "Continual improvement",
      "Recurrence prevention and effectiveness check"
    ],
    "meaningInRubberFactory": "Defines how the plant would turn defects and audit findings into corrective actions, fix root causes (for example a recurring undercure or gauge-drift problem), and drive ongoing improvement of compounds, controls, and yields. RubberForge surfaces defect-to-cause mapping and the Defect Detective learning game, so the improvement mindset is present, but a tracked CAPA workflow with effectiveness verification is future-integration.",
    "relatedModules": [
      "capa",
      "continual-improvement",
      "nonconformance",
      "internal-audit"
    ],
    "evidenceExamples": [
      "Demo CAPA record with root cause, action, owner, and effectiveness check (placeholder)",
      "Demo continual-improvement log tying a defect trend to a process change (illustrative)",
      "Demo defect-to-root-cause map entry (for example backrind or porosity to a candidate cause), illustrative",
      "Demo improvement-objective update showing closed actions (placeholder)"
    ],
    "status": "future",
    "gaps": [
      "No closed-loop CAPA system linking nonconformances and audit findings to verified corrective actions yet.",
      "Continual improvement is illustrated by defect education content rather than a tracked, owned improvement pipeline.",
      "Effectiveness-verification and recurrence-prevention steps are conceptual placeholders, not recorded outcomes."
    ]
  }
];
export const qmsClausesById: Record<string, ClauseCard> = Object.fromEntries(qmsClauseMap.map((c) => [c.id, c]));
