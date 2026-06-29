"use client";

import { useMemo, useState } from "react";
import { buildBillOfProcess } from "@/lib/billOfProcessEngine";
import { productCategories } from "@/lib/productCategories";
import { materialFamilies } from "@/lib/materialFamilies";
import { BillOfProcess } from "./BillOfProcess";

const POLYMERS = materialFamilies.filter((m) => m.kind === "polymer");

/** Standalone bill-of-process generator: pick a product and polymer, see the
 * conceptual manufacturing route, equipment, checkpoints, and review notes. */
export function BillOfProcessBuilder({
  defaultProduct = "rubber-sheet",
  defaultMaterial = "epdm",
}: {
  defaultProduct?: string;
  defaultMaterial?: string;
}) {
  const [productId, setProductId] = useState(defaultProduct);
  const [materialId, setMaterialId] = useState(defaultMaterial);

  const bop = useMemo(() => buildBillOfProcess(productId, materialId), [productId, materialId]);

  return (
    <div className="flex flex-col gap-3">
      <div className="panel flex flex-col gap-3 p-3.5 sm:flex-row sm:items-end">
        <label className="flex-1 text-[12px]">
          <span className="label-mono text-[10px] text-ink-faint">Product</span>
          <select value={productId} onChange={(e) => setProductId(e.target.value)} className="rf-input mt-1 w-full">
            {productCategories.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </label>
        <label className="flex-1 text-[12px]">
          <span className="label-mono text-[10px] text-ink-faint">Base polymer</span>
          <select value={materialId} onChange={(e) => setMaterialId(e.target.value)} className="rf-input mt-1 w-full">
            {POLYMERS.map((m) => (
              <option key={m.id} value={m.id}>
                {m.displayName} ({m.abbreviation})
              </option>
            ))}
          </select>
        </label>
      </div>
      <BillOfProcess bop={bop} />
    </div>
  );
}
