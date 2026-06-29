import type { ReleaseStatus, ReleaseStep } from "@/types/qaLab";
export const releaseSteps: ReleaseStep[] = [
  {
    "title": "Sample Received and Logged",
    "description": "Incoming rubber sample (cured slab, molded part, or extruded section) arrives at the lab and is logged against its batch and station of origin. The technician records lot identity, compound family, and quantity, then confirms the sample is dimensionally suitable for specimen preparation. Conditioning generally begins so the material rests at a controlled lab environment before any property is measured. Demo workflow only, not a substitute for qualified lab intake procedures."
  },
  {
    "title": "Tests Assigned to the Sample",
    "description": "The reviewer selects which method designations apply based on the part's service requirements and the customer spec. A typical educational panel may include hardness (ASTM D2240 family), tensile and elongation (ISO 37 / ASTM D412 concept), tear resistance, specific gravity, and compression set. Each test is marked as not required, recommended, or required by customer so the scope is explicit before work starts. Statuses are demo placeholders, not pass/fail certifications."
  },
  {
    "title": "Tests Completed and Results Recorded",
    "description": "Specimens are die-cut or shaped and run through the assigned instruments (durometer, universal tensile tester, density balance, compression set fixture). Each result returns as a qualitative simulated status (pass demo, review needed, or fail demo) rather than a certified number. Common failure modes such as low elongation, scorched surface, or porosity are flagged here for the documentation review. All values are simulated for learning and require qualified lab procedures to be real."
  },
  {
    "title": "Documentation Checked for Completeness",
    "description": "Before any release call, the reviewer confirms every assigned test has a recorded outcome, that no required-by-customer item is still pending, and that any anomaly carries a note. Missing data, an out-of-window conditioning gap, or an unresolved review-needed flag sends the sample back rather than forward. This gate keeps an incomplete record from reaching a release decision. Demo gate logic, conceptual only."
  },
  {
    "title": "Release Decision Issued",
    "description": "With the record complete, the reviewer issues a single demo disposition for the batch: accept, hold for review, await more information, or reject. A clean panel generally maps to accepted demo, while one or more fail demo results typically trigger hold for review or an opened NCR concept. The decision is a simulated educational disposition and never an official certificate of conformance or a claim of standard compliance."
  }
];
export const releaseStatuses: ReleaseStatus[] = [
  {
    "id": "pending-lab-review",
    "label": "Pending Lab Review",
    "meaning": "Sample is logged and conditioning, but the reviewer has not yet opened the result panel. No disposition exists yet. Demo state.",
    "tone": "pending"
  },
  {
    "id": "awaiting-customer-clarification",
    "label": "Awaiting Customer Clarification",
    "meaning": "A spec point is ambiguous (for example which hardness range or which method applies), so the release call is paused until the customer confirms intent. Simulated hold, no decision made.",
    "tone": "pending"
  },
  {
    "id": "awaiting-additional-test",
    "label": "Awaiting Additional Test",
    "meaning": "A required-by-customer or recommended property has not yet been run, so the record is incomplete and cannot advance to a release decision. Demo placeholder.",
    "tone": "warn"
  },
  {
    "id": "accepted-demo",
    "label": "Accepted Demo",
    "meaning": "All assigned tests returned pass demo and documentation is complete, so the batch is released in the simulation. Educational disposition only, not a certificate of conformance.",
    "tone": "pass"
  },
  {
    "id": "hold-for-review",
    "label": "Hold for Review",
    "meaning": "A result is borderline or a review-needed flag is open (such as a marginal tear or surface anomaly), so the batch is quarantined pending engineering judgment. Simulated containment.",
    "tone": "warn"
  },
  {
    "id": "ncr-opened",
    "label": "NCR Opened",
    "meaning": "A nonconformance concept is raised against the batch after a fail demo result, formally tracking the issue and any disposition path. Educational NCR concept, no real corrective action implied.",
    "tone": "fail"
  },
  {
    "id": "rejected-demo",
    "label": "Rejected Demo",
    "meaning": "One or more critical properties failed and the batch is dispositioned as not releasable in the simulation. Demo rejection only, not an official quality determination.",
    "tone": "fail"
  }
];
