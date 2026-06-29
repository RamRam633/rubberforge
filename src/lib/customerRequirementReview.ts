import type { ReviewArea, ReviewStatus, CrrDemo } from "@/types/qms";
export const crrReviewAreas: ReviewArea[] = [
  {
    "name": "Customer requirements captured",
    "whatItChecks": "Confirms the stated customer requirements from the RFQ (intended part, quantity, expected function, and any customer-supplied drawing or spec references) are captured completely and unambiguously before the QMS model advances the inquiry.",
    "reviewer": "Sales engineer"
  },
  {
    "name": "Statutory, regulatory and documentation requirements (placeholder)",
    "whatItChecks": "Flags, as modeled placeholder data, any applicable statutory or regulatory expectations the customer or end use may imply (for example potable-water or food-contact contexts) and the documentation set that would typically accompany them, pending real determination.",
    "reviewer": "Compliance coordinator"
  },
  {
    "name": "Product requirements",
    "whatItChecks": "Reviews the requested rubber part geometry, dimensions and tolerances, surface and finish expectations, and any hardness or property targets the customer has specified, noting where placeholder values stand in for missing inputs.",
    "reviewer": "Product engineer"
  },
  {
    "name": "Application and service environment",
    "whatItChecks": "Assesses the in-service conditions the part will commonly face (for example ozone, UV, oil or fuel exposure, steam, abrasion, or temperature extremes) so material and process suitability can be evaluated against the intended duty.",
    "reviewer": "Materials engineer"
  },
  {
    "name": "Delivery requirements",
    "whatItChecks": "Checks the customer's expected quantity, batching, and timing expectations against modeled factory capability so that delivery feasibility is understood as a requirement input, not a commitment, at the review stage.",
    "reviewer": "Planning coordinator"
  },
  {
    "name": "Quality and testing requirements",
    "whatItChecks": "Identifies which inspections and rubber test methods the requirement implies (for example tensile and elongation, hardness, compression set, ozone or aging resistance, dimensional checks) and any certificate or report the customer commonly expects.",
    "reviewer": "Quality engineer"
  },
  {
    "name": "Feasibility review",
    "whatItChecks": "Evaluates, at a high level, whether the captured requirements can generally be met with the modeled material set, tooling concept, and process route, and surfaces any requirement that appears infeasible or that needs customer clarification.",
    "reviewer": "Manufacturing engineer"
  },
  {
    "name": "Material review",
    "whatItChecks": "Confirms that a candidate elastomer family is consistent with the application, environment, and property targets, and notes any conflict (for example a non-oil-resistant family proposed for a fuel-contact use) for resolution before quote preparation.",
    "reviewer": "Materials engineer"
  },
  {
    "name": "Process review",
    "whatItChecks": "Reviews the suggested manufacturing route (for example mixing, a forming method such as moulding, extrusion, or calendering, vulcanisation, and finishing) for fit with the part geometry, volume, and tolerance expectations captured in the requirement.",
    "reviewer": "Process engineer"
  },
  {
    "name": "Quality review",
    "whatItChecks": "Provides the consolidating quality sign-off that the requirement is testable, that required tests and acceptance approach are defined, and that traceability and documentation expectations are recorded before the inquiry is marked ready for quote preparation.",
    "reviewer": "Quality manager"
  }
];
export const crrStatuses: ReviewStatus[] = [
  {
    "label": "Draft",
    "meaning": "The requirement review record has been opened and is being populated from the RFQ inputs; capture is incomplete and no reviewer sign-off has been recorded yet (demo state)."
  },
  {
    "label": "Needs customer clarification",
    "meaning": "One or more captured requirements are ambiguous or missing, and open questions have been raised; the review is paused pending customer responses before technical evaluation continues."
  },
  {
    "label": "Under technical review",
    "meaning": "Engineering reviewers (product, materials, process, manufacturing) are evaluating feasibility, material fit, and route fit against the captured requirements."
  },
  {
    "label": "Quality review required",
    "meaning": "Technical review is essentially settled and the record is awaiting the consolidating quality sign-off on testability, acceptance approach, and documentation expectations."
  },
  {
    "label": "Approved for quote preparation",
    "meaning": "All review areas are satisfied for modeling purposes and the requirement is judged generally feasible, so the inquiry may move forward to quote preparation (no pricing is produced in this prototype)."
  },
  {
    "label": "Blocked",
    "meaning": "A requirement appears infeasible, conflicts unresolvably with material or process limits, or stalled clarifications prevent progress; the review cannot advance until the blocker is resolved or the inquiry is declined."
  }
];
export const crrDemoExample: CrrDemo = {
  "product": "Hydraulic cylinder rod seal (demo RFQ)",
  "material": "Candidate: oil-resistant elastomer family (nitrile-type), modeled placeholder",
  "capturedRequirements": [
    "Dynamic sealing of a reciprocating rod with petroleum hydraulic fluid contact at elevated service temperature (demo)",
    "Customer-supplied drawing referenced for groove dimensions and tolerances (placeholder values pending confirmation)",
    "Customer commonly expects a material certificate plus hardness and compression-set test results on the lot (demo documentation)"
  ],
  "openClarifications": [
    "Confirm peak service temperature and fluid type, since these drive the elastomer family selection and the compression-set acceptance approach",
    "Confirm whether a first-article inspection report and full dimensional layout are required as part of the delivery documentation"
  ],
  "status": "Needs customer clarification"
};
