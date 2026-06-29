import type { AgentEvidence } from "@/types/operatingModel";
export const agentEvidence: AgentEvidence[] = [
  {
    "agentName": "Material Selection Support Agent",
    "inputData": [
      "Demo work order WO-DEMO-0142 requesting a general-purpose seal component for a low-pressure water-contact application",
      "Simulated material shortlist of three candidate elastomer families pulled from the demo material library",
      "Operating-conditions brief (demo): ambient indoor service, intermittent water exposure, no listed chemical contact",
      "Demo customer specification note flagging a food-adjacent end use that may require additional review"
    ],
    "assumptions": [
      "Assumes the demo operating-conditions brief is representative of the actual service environment",
      "Assumes the candidate material families in the demo library have current, valid property records"
    ],
    "missingInformation": [
      "No confirmed temperature range or exposure duration provided in the demo brief",
      "Food-contact suitability requirement is referenced but not formally documented",
      "No demo aging or chemical-compatibility data attached for one of the three candidates"
    ],
    "recommendation": "Based on the demo inputs, the agent generally supports advancing two of the three candidate material families for human evaluation and recommends a documented compatibility review before any selection is confirmed.",
    "requiredReviewer": "Materials Engineer (human approver)",
    "approvalStatus": "returned-for-info",
    "linkedRecords": [
      "WO-DEMO-0142 (demo work order)",
      "MAT-LIB-DEMO-031 (demo material library shortlist record)",
      "REV-DEMO-0207 (demo material-review request)"
    ]
  },
  {
    "agentName": "QA Lab Support Agent",
    "inputData": [
      "Demo lab worksheet LAB-DEMO-0455 capturing simulated dimensional and visual inspection entries for a cured sample batch",
      "Demo batch traceability record linking the sample to upstream mixing and curing demo steps",
      "Inspection checklist template (demo) used to confirm completeness of recorded fields"
    ],
    "assumptions": [
      "Assumes the demo measurement entries were recorded against the intended sample batch",
      "Assumes the demo inspection checklist template reflects the current required field set"
    ],
    "missingInformation": [
      "One demo inspection field (surface-finish note) is left blank on the worksheet",
      "No reviewer initials yet recorded against the demo measurement entries"
    ],
    "recommendation": "Based on the demo inputs, the agent generally supports the batch as preliminarily complete on recorded fields and recommends the result be held for human verification because one inspection field is missing.",
    "requiredReviewer": "QA Lab Supervisor (human approver)",
    "approvalStatus": "pending-human-review",
    "linkedRecords": [
      "LAB-DEMO-0455 (demo lab worksheet)",
      "BATCH-DEMO-2231 (demo batch traceability record)",
      "CHK-DEMO-0088 (demo inspection checklist instance)"
    ]
  }
];
