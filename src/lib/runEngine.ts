import type { FactoryRun } from "@/types/factoryRun";
import { productCategoriesById } from "./productCategories";
import { materialFamiliesById } from "./materialFamilies";

// Deterministic demo-run builder. The sequence number ties every identifier in
// one run together so the same lot/batch/cure/roll/sample IDs appear on the
// production floor, in the QA Lab, and on generated outputs.

function pad(n: number): string {
  return String(n).padStart(4, "0");
}

export function createRun(
  productId: string,
  materialId: string,
  seq: number,
  createdAtLabel: string,
): FactoryRun {
  const product = productCategoriesById[productId];
  const material = materialFamiliesById[materialId];
  const abbr = material?.abbreviation ?? materialId.toUpperCase();
  const s = pad(seq);
  return {
    runId: `RUN-${s}`,
    createdAtLabel,
    productId,
    productName: product?.name ?? productId,
    materialId,
    materialName: material?.displayName ?? materialId,
    materialAbbr: abbr,
    lotId: `RM-${abbr}-${s}`,
    batchId: `BR-${s}`,
    cureLotId: `CL-${s}`,
    rollId: `FR-${s}`,
    sampleId: `QAS-${s}-01`,
    stage: "production",
    releaseStatus: null,
  };
}

// The ordered thread of identifiers for display.
export function runThread(run: FactoryRun): { label: string; id: string }[] {
  return [
    { label: "Raw material lot", id: run.lotId },
    { label: "Compound batch", id: run.batchId },
    { label: "Cure lot", id: run.cureLotId },
    { label: "Finished roll", id: run.rollId },
    { label: "QA sample", id: run.sampleId },
  ];
}
