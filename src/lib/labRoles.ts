import type { LabRole } from "@/types/qaLab";
export const labRoles: LabRole[] = [
  {
    "id": "qa-technician",
    "displayName": "QA Technician",
    "purpose": "Pulls and prepares representative samples from running lots and performs the routine, high-frequency bench checks that screen whether material broadly matches its specification before it moves on.",
    "whatTheyCheck": "Hardness on a durometer, dimensional and gauge readings, specific gravity, and visual surface condition against agreed acceptance criteria, all recorded as demo results rather than certified values.",
    "recordsCreated": [
      "Demo Routine Lot Check Sheet",
      "Demo Sample Prep and Coupon Log"
    ],
    "decisionAuthority": "Records demo readings and flags suspect lots for review, no release authority",
    "relatedZones": [
      "Sample Preparation Bench",
      "Routine Test Bench"
    ],
    "vestColor": "green"
  },
  {
    "id": "lab-engineer",
    "displayName": "Lab Engineer",
    "purpose": "Owns the method-sensitive property tests and interprets results, conceptually translating raw bench data into a coherent picture of cure state, dispersion, and compound consistency for the wider quality team.",
    "whatTheyCheck": "Tensile, elongation, modulus, tear, compression set, and environmental behavior such as heat aging or fluid immersion, reviewing method conditions and specimen geometry so demo results are only compared on a like-for-like basis.",
    "recordsCreated": [
      "Demo Mechanical Property Test Report",
      "Demo Method and Specimen Conditions Note"
    ],
    "decisionAuthority": "Interprets demo property data and recommends accept, hold, or retest, conceptual only",
    "relatedZones": [
      "Mechanical Test Bench",
      "Environmental Chamber Area"
    ],
    "vestColor": "violet"
  },
  {
    "id": "quality-manager",
    "displayName": "Quality Manager",
    "purpose": "Sets the inspection philosophy and acceptance criteria, conceptually the impartial authority who weighs accumulated demo evidence against the specification and decides whether a lot is fit for the demo release path.",
    "whatTheyCheck": "Trend charts across batches, nonconformance rates, the completeness of the traceability chain, and whether documentation such as a certificate of conformance is consistent before any disposition is reached.",
    "recordsCreated": [
      "Demo Lot Disposition Record",
      "Demo Nonconformance and Trend Review"
    ],
    "decisionAuthority": "Conceptual demo disposition authority over hold, release-review, or reject",
    "relatedZones": [
      "Quality Records Review",
      "Mechanical Test Bench",
      "Hold and Release Staging"
    ],
    "vestColor": "blue"
  },
  {
    "id": "calibration-coordinator",
    "displayName": "Calibration Coordinator",
    "purpose": "Keeps the lab's measuring instruments trustworthy by tracking their calibration status, conceptually the guardian of whether a reading can be believed at all before it informs any quality decision.",
    "whatTheyCheck": "Calibration due dates and status for durometers, tensile frames, thickness gauges, balances, and chamber controllers, watching for instruments approaching their interval or showing drift against reference standards.",
    "recordsCreated": [
      "Demo Instrument Calibration Status Log",
      "Demo Out-of-Calibration Flag Note"
    ],
    "decisionAuthority": "Conceptually quarantines out-of-calibration instruments from use, no product release role",
    "relatedZones": [
      "Calibration Corner",
      "Routine Test Bench"
    ],
    "vestColor": "steel"
  },
  {
    "id": "production-supervisor-review",
    "displayName": "Production Supervisor",
    "purpose": "Acts as the floor-side counterpart in hold and release review, conceptually balancing schedule against quality holds so that lots flagged by the lab are staged and dispositioned in order rather than pushed through under pressure.",
    "whatTheyCheck": "The queue of held lots, which demo checks are still pending, and whether a quality hold has been formally cleared, ensuring schedule urgency never overrides an open hold or a missing demo result.",
    "recordsCreated": [
      "Demo Hold and Release Staging Log",
      "Demo Lot Status and Pending-Check Board"
    ],
    "decisionAuthority": "Co-signs demo release of cleared lots, cannot override an open quality hold",
    "relatedZones": [
      "Hold and Release Staging",
      "Quality Records Review"
    ],
    "vestColor": "amber"
  },
  {
    "id": "customer-engineering-reviewer",
    "displayName": "Customer / Engineering Reviewer",
    "purpose": "Represents the customer and design intent, conceptually checking that what the lab confirmed actually answers the requirement an RFQ or drawing set out, and that no promise outruns the demo evidence behind it.",
    "whatTheyCheck": "Whether requested tests, tolerances, and documents map to the specification revision, whether reported demo results and the certificate of conformance are internally consistent, and which items remain pending or need clarification.",
    "recordsCreated": [
      "Demo Customer Specification Conformance Review",
      "Demo First-Article Acceptance Note"
    ],
    "decisionAuthority": "Conceptual accept, review-needed, or query-back against the requirement, no certification authority",
    "relatedZones": [
      "Quality Records Review",
      "Mechanical Test Bench"
    ],
    "vestColor": "orange"
  }
];
