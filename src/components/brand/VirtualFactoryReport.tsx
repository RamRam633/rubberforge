"use client";

import { useState } from "react";
import type { VirtualFactoryReport as VFR } from "@/lib/virtualFactoryReport";
import { reportToText, reportToJson } from "@/lib/virtualFactoryReport";
import { ProgressRail } from "./ProgressRail";
import { FileBox, Copy, Check } from "lucide-react";

export function VirtualFactoryReport({ report }: { report: VFR }) {
  const [copied, setCopied] = useState<"" | "text" | "json">("");
  const copy = async (kind: "text" | "json") => {
    try {
      await navigator.clipboard.writeText(kind === "text" ? reportToText(report) : reportToJson(report));
      setCopied(kind);
      setTimeout(() => setCopied(""), 1800);
    } catch {
      /* ignore */
    }
  };
  return (
    <div className="panel-raised overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-gradient-to-r from-violet-600/15 to-transparent px-5 py-4">
        <div className="flex items-center gap-2 text-violet-300">
          <FileBox className="h-4 w-4" />
          <span className="label-mono text-violet-300">Virtual Factory Review Package</span>
        </div>
        <div className="flex gap-2">
          <button onClick={() => copy("text")} className="btn-ghost px-2.5 py-1 text-[12px]">
            {copied === "text" ? <Check className="h-3.5 w-3.5 text-pass" /> : <Copy className="h-3.5 w-3.5" />} Text
          </button>
          <button onClick={() => copy("json")} className="btn-ghost px-2.5 py-1 text-[12px]">
            {copied === "json" ? <Check className="h-3.5 w-3.5 text-pass" /> : <Copy className="h-3.5 w-3.5" />} JSON
          </button>
        </div>
      </div>

      <div className="space-y-4 px-5 py-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="Customer requirement">{report.customerRequirement}</Field>
          <Field label="Product & material">{report.productAndMaterial}</Field>
        </div>
        <ProgressRail value={report.rfqCompleteness} label="RFQ completeness" />

        <div>
          <div className="label-mono mb-1.5">Preliminary route</div>
          <div className="flex flex-wrap items-center gap-1">
            {report.route.map((s, i) => (
              <span key={s + i} className="flex items-center gap-1">
                <span className="chip">{s}</span>
                {i < report.route.length - 1 && <span className="text-ink-faint">→</span>}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <List title="Required equipment / processes" items={report.requiredEquipment} />
          <List title="Ingredient / material considerations" items={report.ingredientConsiderations} />
          <List title="Quality & standards considerations" items={[...report.qualityConsiderations, ...report.standards]} />
          <List title="Traceability / documentation" items={report.traceabilityDocs} />
        </div>

        {report.openQuestions.length > 0 && <List title="Open technical questions" items={report.openQuestions} tone="warn" />}
        <List title="Factory review notes" items={report.factoryReviewNotes} tone="violet" />

        <div className="rounded-lg border border-violet-400/25 bg-violet-500/[0.06] px-3 py-2.5">
          <span className="label-mono text-violet-300">Recommended next action</span>
          <p className="mt-0.5 text-[13px] font-medium text-ink">{report.recommendedNextAction}</p>
        </div>

        <p className="rounded-lg border border-line bg-base-900/40 px-3 py-2 text-[11px] leading-relaxed text-ink-faint">
          Preliminary, educational, quote-preparation guidance. No pricing, no certified properties, no
          compliance implied. Requires engineering and quality review.
        </p>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="panel-tight px-3 py-2">
      <div className="label-mono">{label}</div>
      <div className="mt-0.5 text-[13px] text-ink">{children}</div>
    </div>
  );
}

function List({ title, items, tone }: { title: string; items: string[]; tone?: "warn" | "violet" }) {
  if (!items || items.length === 0) return null;
  const dot = tone === "warn" ? "bg-warn" : tone === "violet" ? "bg-violet-400" : "bg-steel-400";
  return (
    <div className="panel-tight p-3">
      <div className="label-mono mb-1.5">{title}</div>
      <ul className="space-y-1">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-[12px] leading-relaxed text-ink-muted">
            <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${dot}`} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
