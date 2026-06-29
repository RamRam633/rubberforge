// ── Live digital-thread spine ────────────────────────────────────────────────
// A shared, demo "factory run": one object whose IDs flow from the production
// floor into the QA Lab and into generated outputs, so the digital thread is a
// real data backbone, not narration. Demo identifiers only.

export type RunStage = "production" | "qa" | "released";

export interface FactoryRun {
  runId: string;
  createdAtLabel: string;
  productId: string;
  productName: string;
  materialId: string;
  materialName: string;
  materialAbbr: string;
  // Thread of demo identifiers, requirement to finished sample.
  lotId: string; // raw material lot
  batchId: string; // compound batch
  cureLotId: string; // cure lot
  rollId: string; // finished roll
  sampleId: string; // QA sample
  stage: RunStage;
  releaseStatus: string | null; // null until QA Lab records a decision
}
