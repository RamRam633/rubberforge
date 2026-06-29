"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { emptySelection, ENVIRONMENT_OPTIONS, type QuoteSelection } from "@/lib/quoteTypes";
import { applicableQuoteGroups } from "@/lib/quoteQuestions";
import { applicableRfqGroups } from "@/lib/rfqIntelRules";
import { buildRfqIntelligence, computeCompleteness } from "@/lib/rfqIntelligenceEngine";
import { buildVirtualFactoryReport } from "@/lib/virtualFactoryReport";
import { buildBillOfProcess } from "@/lib/billOfProcessEngine";
import { productCategories, productCategoriesById } from "@/lib/productCategories";
import { materialFamilies, materialFamiliesById } from "@/lib/materialFamilies";
import type { QuoteGroup } from "@/types/platform";
import { QuoteQuestionPanel } from "@/components/platform/QuoteQuestionPanel";
import { RFQIntelligencePanel } from "@/components/brand/RFQIntelligencePanel";
import { VirtualFactoryReport } from "@/components/brand/VirtualFactoryReport";
import { BillOfProcess } from "@/components/intel/BillOfProcess";
import { DigitalThreadMap } from "@/components/brand/DigitalThreadMap";
import { ProgressRail } from "@/components/brand/ProgressRail";
import { VayuBadge } from "@/components/brand/VayuBadge";
import { useUserMode } from "@/components/brand/UserModeProvider";
import { Brain, ArrowRight, RotateCcw } from "lucide-react";

function isDimField(input: string) {
  const k = input.toLowerCase();
  return !k.includes("quantity") && !k.includes("drawing") && !k.includes("sample");
}

function RfqEngine() {
  const params = useSearchParams();
  const { mode } = useUserMode();
  const [sel, setSel] = useState<QuoteSelection>(() => {
    const base = emptySelection();
    const p = params.get("product");
    const m = params.get("material");
    if (p && productCategoriesById[p]) base.productId = p;
    if (m && materialFamiliesById[m]) base.materialId = m;
    if (params.get("from") === "simulator") {
      base.notes = "Customer toured the 3D virtual factory.";
      if (!base.productId) base.productId = "rubber-sheet";
      if (!base.materialId) base.materialId = "epdm";
    }
    return base;
  });
  const [generated, setGenerated] = useState(false);

  const set = <K extends keyof QuoteSelection>(k: K, v: QuoteSelection[K]) => {
    setSel((s) => ({ ...s, [k]: v }));
    setGenerated(false);
  };
  const product = sel.productId ? productCategoriesById[sel.productId] : undefined;
  const material = sel.materialId ? materialFamiliesById[sel.materialId] : undefined;
  const ready = Boolean(sel.productId && sel.materialId);
  const completeness = computeCompleteness(sel);

  const dimFields = useMemo(() => (product ? product.requiredQuoteInputs.filter(isDimField) : []), [product]);

  const groups = useMemo<QuoteGroup[]>(() => {
    if (!ready) return [];
    const all = [
      ...applicableQuoteGroups(sel.productId, sel.materialId),
      ...applicableRfqGroups(sel.productId, sel.materialId, sel.environment),
    ];
    const seen = new Set<string>();
    return all.filter((g) => (seen.has(g.id) ? false : (seen.add(g.id), true)));
  }, [ready, sel.productId, sel.materialId, sel.environment]);

  const toggleEnv = (e: string) =>
    set("environment", sel.environment.includes(e) ? sel.environment.filter((x) => x !== e) : [...sel.environment, e]);

  const intel = useMemo(() => (generated && ready ? buildRfqIntelligence(sel) : null), [generated, ready, sel]);
  const report = useMemo(() => (generated && ready ? buildVirtualFactoryReport(sel) : null), [generated, ready, sel]);
  const bop = useMemo(() => (generated && ready ? buildBillOfProcess(sel.productId, sel.materialId) : null), [generated, ready, sel.productId, sel.materialId]);

  return (
    <div className="mx-auto max-w-[1150px] px-5 pb-14 pt-8">
      <header className="mb-5">
        <div className="mb-1.5 flex items-center gap-1.5 text-[11.5px] text-ink-faint">
          <Link href="/outputs" className="hover:text-ink-muted">
            Factory Outputs
          </Link>
          <span>/</span>
          <span className="text-ink-muted">RFQ Package</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="kicker">One factory output · RFQ package</span>
          <VayuBadge />
        </div>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink">Generate an RFQ package</h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          The RFQ package is one of the outputs the virtual factory can generate. Tell us the product, material, and
          application; the questions adapt to your selection and the engine assembles a technical package with a
          completeness score, route, quality plan, and factory review notes. No pricing.
        </p>
      </header>

      {/* Live completeness + digital thread */}
      <div className="mb-4 panel p-4">
        <div className="grid items-center gap-4 lg:grid-cols-[260px_minmax(0,1fr)]">
          <ProgressRail value={completeness} label="RFQ completeness" />
          <div className="hidden lg:block">
            <DigitalThreadMap compact />
          </div>
        </div>
      </div>

      <div className="grid gap-3 lg:grid-cols-2">
        {/* Product + material with preview */}
        <div className="panel p-4">
          <div className="label-mono mb-2.5">1 · Product & material</div>
          <div className="space-y-3">
            <Field label="Product category">
              <select value={sel.productId} onChange={(e) => set("productId", e.target.value)} className="rf-input">
                <option value="">Select a product…</option>
                {productCategories.map((p) => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </Field>
            <Field label="Material family">
              <select value={sel.materialId} onChange={(e) => set("materialId", e.target.value)} className="rf-input">
                <option value="">Select a material…</option>
                <optgroup label="Polymer families">
                  {materialFamilies.filter((m) => m.kind === "polymer").map((m) => (
                    <option key={m.id} value={m.id}>{m.displayName} ({m.abbreviation})</option>
                  ))}
                </optgroup>
                <optgroup label="Application categories">
                  {materialFamilies.filter((m) => m.kind === "category").map((m) => (
                    <option key={m.id} value={m.id}>{m.displayName}</option>
                  ))}
                </optgroup>
              </select>
            </Field>
            {(product || material) && (
              <div className="rounded-lg border border-line bg-base-850/30 p-3 text-[11.5px] leading-relaxed text-ink-muted">
                {product && <p>{product.shortDescription}</p>}
                {material && <p className="mt-1 text-violet-200">{material.safeExplanation}</p>}
              </div>
            )}
          </div>
        </div>

        {/* Application + environment */}
        <div className="panel p-4">
          <div className="label-mono mb-2.5">2 · Application & environment</div>
          <Field label="What is the application / part?">
            <input value={sel.application} onChange={(e) => set("application", e.target.value)} className="rf-input" placeholder="e.g. flange gasket on a water line" />
          </Field>
          <div className="mt-3">
            <div className="label-mono mb-1.5">Service environment (select all that apply)</div>
            <div className="flex flex-wrap gap-1.5">
              {ENVIRONMENT_OPTIONS.map((e) => {
                const on = sel.environment.includes(e);
                return (
                  <button key={e} onClick={() => toggleEnv(e)} className={`rounded-full border px-2.5 py-1 text-[11px] transition ${on ? "border-blue-400/50 bg-blue-500/15 text-blue-300" : "border-line bg-base-700/35 text-ink-muted hover:text-ink"}`}>
                    {e}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {ready && (
        <div className="mt-3 grid gap-3 lg:grid-cols-2">
          <div className="panel p-4">
            <div className="label-mono mb-2.5">3 · Dimensions & quantity</div>
            <div className="grid grid-cols-2 gap-3">
              {dimFields.map((f) => (
                <Field key={f} label={f}>
                  <input value={sel.dimensions[f] ?? ""} onChange={(e) => set("dimensions", { ...sel.dimensions, [f]: e.target.value })} className="rf-input" />
                </Field>
              ))}
              <Field label="Quantity / annual volume">
                <input value={sel.quantity} onChange={(e) => set("quantity", e.target.value)} className="rf-input" placeholder="e.g. 500 pcs" />
              </Field>
            </div>
            <label className="mt-3 flex cursor-pointer items-center gap-2.5">
              <input type="checkbox" checked={sel.drawingAvailable} onChange={(e) => set("drawingAvailable", e.target.checked)} className="h-4 w-4 accent-violet-500" />
              <span className="text-[13px] text-ink">I have a drawing, sample, or sketch</span>
            </label>
            <Field label="Certification / testing needs (optional)">
              <input value={sel.certificationNeeds} onChange={(e) => set("certificationNeeds", e.target.value)} className="rf-input" placeholder="e.g. certificate of conformity, hardness + tensile report" />
            </Field>
            <Field label="Notes">
              <textarea value={sel.notes} onChange={(e) => set("notes", e.target.value)} rows={2} className="rf-input" />
            </Field>
          </div>

          <div className="panel p-4">
            <div className="label-mono mb-2.5">4 · Adaptive technical questions</div>
            {groups.length > 0 ? (
              <QuoteQuestionPanel groups={groups} answers={sel.answers} onChange={(id, v) => set("answers", { ...sel.answers, [id]: v })} />
            ) : (
              <p className="text-[12.5px] leading-relaxed text-ink-faint">No additional questions for this combination. Add details in notes.</p>
            )}
          </div>
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[12px] text-ink-faint">Preliminary RFQ preparation. No pricing is produced.</p>
        <div className="flex gap-2">
          {generated && (
            <button onClick={() => setGenerated(false)} className="btn-ghost text-sm">
              <RotateCcw className="h-4 w-4" /> Edit
            </button>
          )}
          <button onClick={() => setGenerated(true)} disabled={!ready} className="btn-primary text-sm">
            <Brain className="h-4 w-4" /> Generate RFQ intelligence <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {intel && (
        <div className="mt-5 space-y-3">
          <RFQIntelligencePanel intel={intel} mode={mode} />
          {mode === "factory-review" && report && <VirtualFactoryReport report={report} />}
          {(mode === "factory-review" || mode === "engineer") && bop && <BillOfProcess bop={bop} />}
          <div className="flex flex-wrap gap-2">
            <Link href="/materials" className="btn-ghost text-sm">Compare materials</Link>
            <Link href="/quality-lab" className="btn-ghost text-sm">Quality lab</Link>
            <Link href="/factory-intelligence" className="btn-ghost text-sm">Factory intelligence</Link>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="label-mono mb-1.5 block capitalize">{label}</span>
      {children}
    </label>
  );
}

export default function QuotePage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-[1150px] px-5 py-16 text-center text-ink-faint">Loading…</div>}>
      <RfqEngine />
    </Suspense>
  );
}
