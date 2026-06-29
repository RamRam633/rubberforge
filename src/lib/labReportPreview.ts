import type { LabReport } from "@/types/qaLab";
export const labReportPreview: LabReport = {
  "sections": [
    "Sample ID",
    "Product",
    "Material",
    "Batch / Lot (placeholder)",
    "Requested Tests",
    "Completed Tests",
    "Pending Tests",
    "Qualitative Result Status",
    "Defects Observed",
    "Standards / Method References",
    "Traceability References",
    "Release Decision",
    "Reviewer Notes"
  ],
  "demoExample": {
    "sampleId": "DEMO-SMP-0142",
    "product": "Engine mount isolator bushing",
    "material": "Natural rubber / SBR blend, carbon-black reinforced",
    "batchLot": "DEMO-LOT-NR-2206-A",
    "requestedTests": [
      "Durometer hardness (Shore A)",
      "Tensile strength and elongation at break",
      "Compression set",
      "Accelerated heat aging",
      "Specific gravity"
    ],
    "completedTests": [
      {
        "test": "Durometer hardness (Shore A)",
        "status": "pass-demo"
      },
      {
        "test": "Tensile strength and elongation at break",
        "status": "pass-demo"
      },
      {
        "test": "Specific gravity",
        "status": "pass-demo"
      },
      {
        "test": "Compression set",
        "status": "review-needed"
      },
      {
        "test": "Accelerated heat aging",
        "status": "pending"
      }
    ],
    "pendingTests": [
      "Accelerated heat aging",
      "Low-temperature brittleness screen"
    ],
    "defectsObserved": [
      "Minor surface backrinding noted near the parting line",
      "Faint mold-flow knit line on one face, cosmetic only"
    ],
    "methodRefs": [
      "ASTM D2240",
      "ISO 37",
      "ASTM D395",
      "ISO 188"
    ],
    "releaseDecision": "hold-for-review",
    "reviewerNotes": "Hardness and tensile demo values sit comfortably in the typical band, but the compression-set result drifted toward the upper edge and heat aging is still running, so this simulated lot is held until those two are closed out."
  },
  "disclaimer": "Demo lab report preview only. Not an official test report or certificate. All values are simulated and educational, and any real release decision requires qualified lab procedures."
};
