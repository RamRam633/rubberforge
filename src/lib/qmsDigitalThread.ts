import type { QmsThreadNode } from "@/types/operatingModel";
export const qmsDigitalThread: QmsThreadNode[] = [
  {
    "id": "customer-requirement",
    "label": "Customer Requirement",
    "recordConcept": "Demo customer requirement intake CR-2026-0418",
    "stewardAgent": "Requirement Intake Agent",
    "humanReview": "Sales / Applications Engineer",
    "relatedLayer": "rfq"
  },
  {
    "id": "reviewed-requirement",
    "label": "Reviewed Requirement",
    "recordConcept": "Demo requirement-review summary RR-2026-0418-A",
    "stewardAgent": "Contract Review Agent",
    "humanReview": "Sales / Applications Engineer",
    "relatedLayer": "rfq"
  },
  {
    "id": "material-selection",
    "label": "Material Selection",
    "recordConcept": "Demo material selection rationale MS-EPDM-77",
    "stewardAgent": "Material Selection Agent",
    "humanReview": "Rubber Chemist",
    "relatedLayer": "chemistry"
  },
  {
    "id": "supplier-documents",
    "label": "Supplier Documents",
    "recordConcept": "Demo incoming supplier CoA pack SUP-DOC-3391",
    "stewardAgent": "Supplier Document Agent",
    "humanReview": "Supplier Quality Engineer",
    "relatedLayer": "supply-chain"
  },
  {
    "id": "batch-record",
    "label": "Batch Record",
    "recordConcept": "Demo compounding batch record BR-2026-0507",
    "stewardAgent": "Batch Record Agent",
    "humanReview": "Rubber Chemist",
    "relatedLayer": "chemistry"
  },
  {
    "id": "process-record",
    "label": "Process Record",
    "recordConcept": "Demo process traveler log PR-LINE2-0507",
    "stewardAgent": "Process Traveler Agent",
    "humanReview": "Production Supervisor",
    "relatedLayer": "process"
  },
  {
    "id": "qa-sample",
    "label": "QA Sample",
    "recordConcept": "Demo sampling and pull record QAS-0507-12",
    "stewardAgent": "Sampling Agent",
    "humanReview": "QA Inspector",
    "relatedLayer": "quality"
  },
  {
    "id": "test-record",
    "label": "Test Record",
    "recordConcept": "Demo lab test result set TR-LAB-0507-12",
    "stewardAgent": "Test Result Agent",
    "humanReview": "QA Lab Engineer",
    "relatedLayer": "quality"
  },
  {
    "id": "calibration-reference",
    "label": "Calibration Reference",
    "recordConcept": "Demo instrument calibration reference CAL-DURO-08",
    "stewardAgent": "Calibration Tracking Agent",
    "humanReview": "Calibration Coordinator",
    "relatedLayer": "maintenance"
  },
  {
    "id": "release-decision",
    "label": "Release Decision",
    "recordConcept": "Demo lot disposition record REL-2026-0507",
    "stewardAgent": "Release Readiness Agent",
    "humanReview": "Quality Manager",
    "relatedLayer": "qms"
  },
  {
    "id": "shipment-documentation",
    "label": "Shipment Documentation",
    "recordConcept": "Demo shipment and CoC pack SHIP-DOC-2026-0612",
    "stewardAgent": "Shipping Document Agent",
    "humanReview": "Document Controller",
    "relatedLayer": "documentation"
  },
  {
    "id": "improvement-action",
    "label": "Improvement Action",
    "recordConcept": "Demo corrective and improvement action CAPA-2026-031",
    "stewardAgent": "Improvement Action Agent",
    "humanReview": "Continuous Improvement Lead",
    "relatedLayer": "qms"
  }
];
