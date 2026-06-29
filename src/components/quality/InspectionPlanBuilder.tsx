"use client";

import { useMemo, useState } from "react";
import { buildInspectionPlan, type InspectionPlanInput } from "@/lib/inspectionPlanEngine";
import { productCategories } from "@/lib/productCategories";
import { materialFamilies } from "@/lib/materialFamilies";
import { ENVIRONMENT_OPTIONS } from "@/lib/quoteTypes";
import { InspectionPlanSummary } from "./InspectionPlanSummary";
import { ClipboardCheck } from "lucide-react";

export function InspectionPlanBuilder({
  defaultProduct = "rubber-sheet",
  defaultMaterial = "epdm",
}: {
  defaultProduct?: string;
  defaultMaterial?: string;
}) {
  const [input, setInput] = useState<InspectionPlanInput>({
    productId: defaultProduct,
    materialId: defaultMaterial,
    environment: ["Outdoor / weather"],
    certificationRequested: "",
    drawingAvailable: false,
  });
  const set = <K extends keyof InspectionPlanInput>(k: K, v: InspectionPlanInput[K]) =>
    setInput((s) => ({ ...s, [k]: v }));
  const toggleEnv = (e: string) =>
    set("environment", input.environment.includes(e) ? input.environment.filter((x) => x !== e) : [...input.environment, e]);

  const plan = useMemo(() => buildInspectionPlan(input), [input]);

  return (
    <div className="grid gap-3 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
      <div className="panel p-4">
        <div className="flex items-center gap-1.5">
          <ClipboardCheck className="h-4 w-4 text-pass" />
          <span className="label-mono text-pass">Inspection plan builder</span>
        </div>
        <div className="mt-3 space-y-3">
          <Field label="Product">
            <select value={input.productId} onChange={(e) => set("productId", e.target.value)} className="rf-input">
              {productCategories.map((p) => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </Field>
          <Field label="Material">
            <select value={input.materialId} onChange={(e) => set("materialId", e.target.value)} className="rf-input">
              {materialFamilies.map((m) => (
                <option key={m.id} value={m.id}>{m.displayName}</option>
              ))}
            </select>
          </Field>
          <div>
            <div className="label-mono mb-1.5">Service environment</div>
            <div className="flex flex-wrap gap-1.5">
              {ENVIRONMENT_OPTIONS.map((e) => {
                const on = input.environment.includes(e);
                return (
                  <button
                    key={e}
                    onClick={() => toggleEnv(e)}
                    className={`rounded-full border px-2.5 py-1 text-[11px] transition ${
                      on ? "border-steel-400/50 bg-steel-500/15 text-steel-300" : "border-line bg-base-700/40 text-ink-muted hover:text-ink"
                    }`}
                  >
                    {e}
                  </button>
                );
              })}
            </div>
          </div>
          <Field label="Certification / testing requested (optional)">
            <input value={input.certificationRequested} onChange={(e) => set("certificationRequested", e.target.value)} className="rf-input" placeholder="e.g. hardness + tensile report, compression set" />
          </Field>
          <label className="flex cursor-pointer items-center gap-2.5">
            <input type="checkbox" checked={input.drawingAvailable} onChange={(e) => set("drawingAvailable", e.target.checked)} className="h-4 w-4 accent-violet-500" />
            <span className="text-[13px] text-ink">A drawing or sample is available</span>
          </label>
        </div>
      </div>

      <InspectionPlanSummary plan={plan} />
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="label-mono mb-1.5 block">{label}</span>
      {children}
    </label>
  );
}
