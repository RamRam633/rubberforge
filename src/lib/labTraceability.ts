import type { LabTraceStage } from "@/types/qaLab";
export const labTraceability: LabTraceStage[] = [
  {
    "id": "raw-material-lots",
    "label": "Raw Material Lots",
    "idFormat": "DEMO RM-EPDM-2026-0117 (simulated example, not a real lot)",
    "whatItLinks": "Ties each incoming elastomer, filler, curative, and additive receipt to its supplier batch reference and certificate of analysis as received.",
    "whyItMatters": "Most rubber property failures investigated in a lab trace back to one raw lot, so a lab record that cannot name the exact incoming lots generally cannot support a credible root-cause review or a targeted material hold."
  },
  {
    "id": "compound-batch",
    "label": "Compound Batch",
    "idFormat": "DEMO CMP-2026-004521 (simulated example, demo only)",
    "whatItLinks": "Joins one mixed compound batch to the specific raw material lots it consumed and to a recipe code held by reference, not by disclosed formulation.",
    "whyItMatters": "The compound batch is the first identity-stamped intermediate a lab can test for cure behavior and basic properties, so it commonly anchors the accept or hold decision before any further processing is committed."
  },
  {
    "id": "process-route",
    "label": "Process Route",
    "idFormat": "DEMO RT-CAL-2026-0033 (simulated example, demo only)",
    "whatItLinks": "Connects a compound batch to the ordered sequence of forming and shaping steps it followed, referencing line and station identifiers rather than machine settings.",
    "whyItMatters": "A lab interpreting a defect typically needs to know which route the material took, because the same compound run through different forming paths can present different surface, gauge, and dispersion behavior that points the investigation toward processing rather than material."
  },
  {
    "id": "cure-lot",
    "label": "Cure Lot",
    "idFormat": "DEMO CURE-2026-008842 (simulated example, demo only)",
    "whatItLinks": "Binds a vulcanization run to the formed material loaded into it and to the curing equipment reference, grouping every piece cured together as one irreversible set.",
    "whyItMatters": "Vulcanization fixes most final mechanical properties and cannot be reworked, so the cure lot is usually the highest-stakes link a lab references when a property test comes back as review needed or fail demo on cured material."
  },
  {
    "id": "finished-roll",
    "label": "Finished Roll",
    "idFormat": "DEMO ROLL-2026-0156-B (simulated example, demo only)",
    "whatItLinks": "Maps one saleable cured unit, commonly a roll or slab, to its cure lot and to its measured dimensions and disposition.",
    "whyItMatters": "The finished roll is the lowest-level serialized handle the lab writes results against, so it is the unit from which a single reference should walk back through cure, route, compound, and raw lots during any recall or warranty review."
  },
  {
    "id": "sample-id",
    "label": "Sample ID",
    "idFormat": "DEMO SMP-2026-03311 (simulated example, demo only)",
    "whatItLinks": "Identifies the physical material drawn from a finished roll or batch for testing, recording where on the unit it was taken and by whom.",
    "whyItMatters": "A sample that is not tied to a known location on a known roll generally cannot defend a release decision, because the lab cannot show the tested material is representative of the unit it is meant to clear."
  },
  {
    "id": "test-specimens",
    "label": "Test Specimens",
    "idFormat": "DEMO SPEC-2026-03311-04 (simulated example, demo only)",
    "whatItLinks": "Links each individual prepared specimen, such as a hardness button, dumbbell, or die-cut piece, back to its parent sample and the property test concept it is intended for, with method designations like ASTM D2240 or ISO 37 named only by reference.",
    "whyItMatters": "Properties such as hardness, tensile, and tear are measured on separate specimens, so keeping each specimen tied to its sample lets the lab reconcile a single failing specimen against the rest and decide whether the result is a specimen artifact or a real material concern."
  },
  {
    "id": "test-records",
    "label": "Test Records",
    "idFormat": "DEMO TR-2026-009987 (simulated example, all values demo and simulated)",
    "whatItLinks": "Connects the recorded outcomes for each specimen, expressed here as qualitative statuses such as pass demo, review needed, or fail demo, to the specimen, the instrument, the operator, and the date.",
    "whyItMatters": "The test record is where conformance is asserted for specific specimens, so it is the natural document a customer's incoming inspection or a later complaint is reconciled against, and it must reference method designations rather than reproduce any standard's procedure or certify compliance."
  },
  {
    "id": "release-decision",
    "label": "Release Decision",
    "idFormat": "DEMO REL-2026-002214 (simulated example, demo only)",
    "whatItLinks": "Joins the accept, hold, or reject disposition for a finished roll to the test records that support it and to the reviewer who signed the call.",
    "whyItMatters": "The release decision is the point where the lab takes responsibility for letting a unit move forward, so a disposition that cannot show the specific test records behind it generally will not survive an audit or a dispute, and this platform records a demo disposition only and issues no certificate."
  },
  {
    "id": "documentation-package",
    "label": "Documentation Package",
    "idFormat": "DEMO DOC-2026-000771 (simulated example, demo only)",
    "whatItLinks": "Assembles the full chain for a shipped unit, from raw material lots through the release decision, into one referenceable bundle tied to the customer and order reference.",
    "whyItMatters": "The documentation package closes the loop between what was made, what was tested, and what was released, which is what makes targeted recall, warranty handling, and dispute resolution practical, while remaining a simulated educational summary that requires qualified lab procedures and verification before anything real is relied upon."
  }
];
