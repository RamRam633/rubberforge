"use client";

import { useMemo, useState } from "react";
import { runLabTests, LAB_APPLICATIONS, type LabEngineInput } from "@/lib/labEngine";
import { materialFamilies } from "@/lib/materialFamilies";
import { defectChemistry } from "@/lib/defectChemistryMap";
import { releaseStatuses } from "@/lib/qaReleaseWorkflow";
import type { TestStatus } from "@/types/qaLab";
import { TONE_CLS } from "@/lib/qmsUi";
import { FlaskConical, HelpCircle, AlertTriangle, FileCheck2, RotateCcw, Beaker } from "lucide-react";

const POLYMERS = materialFamilies.filter((m) => m.kind === "polymer");
const CUSTOMER_TESTS = ["hardness", "tensile strength", "compression set", "ozone/weathering", "fluid immersion"];

const STATUS_TONE: Record<TestStatus, keyof typeof TONE_CLS> = {
  "not-required": "muted", recommended: "info", "required-by-customer": "info",
  pending: "muted", "pass-demo": "pass", "review-needed": "warn", "fail-demo": "fail",
};

function toggle(set: Set<string>, v: string): Set<string> {
  const n = new Set(set); n.has(v) ? n.delete(v) : n.add(v); return n;
}

export function LabTestRunner({ presetMaterial = "epdm", presetApplications = [] as string[] }: { presetMaterial?: string; presetApplications?: string[] }) {
  const [materialId, setMaterialId] = useState(presetMaterial);
  const [apps, setApps] = useState<Set<string>>(new Set(presetApplications));
  const [defects, setDefects] = useState<Set<string>>(new Set());
  const [customer, setCustomer] = useState<Set<string>>(new Set());

  const input: LabEngineInput = useMemo(() => ({
    materialId, productId: "rubber-sheet", applications: [...apps], defects: [...defects], customerTests: [...customer],
  }), [materialId, apps, defects, customer]);
  const result = useMemo(() => runLabTests(input), [input]);

  const decision = releaseStatuses.find((s) => s.id === result.releaseDecision) ?? releaseStatuses[0];

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[340px_minmax(0,1fr)]">
      {/* Controls */}
      <div className="panel p-4">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 kicker-violet"><Beaker className="h-3.5 w-3.5 text-violet-300" /> Test setup</span>
          <button onClick={() => { setApps(new Set()); setDefects(new Set()); setCustomer(new Set()); }} className="btn-ghost text-[11px]"><RotateCcw className="h-3 w-3" /> Reset</button>
        </div>

        <label className="mt-3 block text-[12px]">
          <span className="label-mono text-[10px] text-ink-faint">Material</span>
          <select value={materialId} onChange={(e) => setMaterialId(e.target.value)} className="rf-input mt-1 w-full">
            {POLYMERS.map((m) => <option key={m.id} value={m.id}>{m.displayName} ({m.abbreviation})</option>)}
          </select>
        </label>

        <div className="mt-3">
          <span className="label-mono text-[10px] text-ink-faint">Service conditions</span>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {LAB_APPLICATIONS.map((a) => (
              <button key={a.key} onClick={() => setApps((s) => toggle(s, a.key))} aria-pressed={apps.has(a.key)}
                className={`chip ${apps.has(a.key) ? "border-violet-500/50 bg-violet-500/15 text-violet-200" : "border-line text-ink-muted"}`}>{a.label}</button>
            ))}
          </div>
        </div>

        <div className="mt-3">
          <span className="label-mono text-[10px] text-ink-faint">Investigate a defect (optional)</span>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {defectChemistry.map((d) => (
              <button key={d.id} onClick={() => setDefects((s) => toggle(s, d.id))} aria-pressed={defects.has(d.id)}
                className={`chip ${defects.has(d.id) ? "border-molten-400/50 bg-molten-400/15 text-molten-300" : "border-line text-ink-muted"}`}>{d.defect}</button>
            ))}
          </div>
        </div>

        <div className="mt-3">
          <span className="label-mono text-[10px] text-ink-faint">Customer-requested tests (optional)</span>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {CUSTOMER_TESTS.map((t) => (
              <button key={t} onClick={() => setCustomer((s) => toggle(s, t))} aria-pressed={customer.has(t)}
                className={`chip ${customer.has(t) ? "border-blue-400/50 bg-blue-400/15 text-blue-300" : "border-line text-ink-muted"}`}>{t}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="flex flex-col gap-3">
        <div className="panel-raised p-4">
          <div className="flex items-center gap-2">
            <FlaskConical className="h-4 w-4 text-violet-300" />
            <span className="kicker-violet">Recommended test plan</span>
            <span className="label-mono text-[10px] text-ink-faint">deterministic demo</span>
          </div>
          <div className="mt-3 flex flex-col gap-1.5">
            {result.recommendedTests.map((t) => (
              <div key={t.test} className="flex items-start justify-between gap-3 rounded-lg border border-line bg-base-850/30 px-3 py-2">
                <div className="min-w-0">
                  <span className="text-[12.5px] font-medium capitalize text-ink">{t.test}</span>
                  <p className="text-[11px] leading-snug text-ink-faint">{t.reason}</p>
                </div>
                <span className={`chip shrink-0 ${TONE_CLS[STATUS_TONE[t.status]]}`}>{t.status.replace(/-/g, " ")}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {result.questions.length > 0 && (
            <Box icon={HelpCircle} title="Clarifying questions" tone="text-blue-300" items={result.questions} />
          )}
          {result.warnings.length > 0 && (
            <Box icon={AlertTriangle} title="Warnings / missing info" tone="text-molten-300" items={result.warnings} />
          )}
        </div>

        <div className="panel flex flex-wrap items-center justify-between gap-3 p-4">
          <div>
            <span className="label-mono text-[10px] text-ink-faint">Demo release decision</span>
            <div className="mt-1 flex items-center gap-2">
              <span className={`chip ${TONE_CLS[decision.tone === "pass" ? "pass" : decision.tone === "fail" ? "fail" : decision.tone === "warn" ? "warn" : "info"]}`}>{decision.label}</span>
            </div>
            <p className="mt-1 max-w-md text-[11px] leading-relaxed text-ink-faint">{decision.meaning}</p>
          </div>
          <div className="text-right">
            <span className="flex items-center justify-end gap-1.5 label-mono text-[10px] text-ink-faint"><FileCheck2 className="h-3 w-3" /> Documentation package</span>
            <div className="mt-1 flex flex-wrap justify-end gap-1">{result.documentationPackage.map((d) => <span key={d} className="chip border-line text-ink-faint">{d}</span>)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Box({ icon: Icon, title, tone, items }: { icon: typeof HelpCircle; title: string; tone: string; items: string[] }) {
  return (
    <div className="panel p-3.5">
      <span className={`flex items-center gap-1.5 label-mono text-[10px] ${tone}`}><Icon className="h-3 w-3" /> {title}</span>
      <ul className="mt-1.5 space-y-1">
        {items.map((i) => <li key={i} className="flex items-start gap-1.5 text-[11.5px] leading-relaxed text-ink-muted"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-faint" /> {i}</li>)}
      </ul>
    </div>
  );
}
