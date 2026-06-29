"use client";

import { useState } from "react";
import { supplierControl } from "@/lib/supplierControl";
import { clauseShort } from "@/lib/qmsUi";
import { StatusChip } from "./QMSBadge";
import { Truck, FileCheck2, AlertTriangle, ClipboardCheck } from "lucide-react";

export function SupplierControlPanel() {
  const [activeId, setActiveId] = useState(supplierControl[0]?.id);
  const active = supplierControl.find((s) => s.id === activeId) ?? supplierControl[0];

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[300px_minmax(0,1fr)]">
      <div className="flex flex-col gap-1.5">
        <p className="mb-1 text-[12.5px] leading-relaxed text-ink-muted">
          Externally provided materials and services (clause 8.4). Approvals shown are demo concepts, not real supplier
          approvals.
        </p>
        {supplierControl.map((s) => {
          const on = s.id === active.id;
          return (
            <button key={s.id} onClick={() => setActiveId(s.id)} aria-pressed={on}
              className={`interactive-card flex items-center justify-between gap-2 px-3 py-2 text-left ${on ? "border-line-strong bg-base-800/60" : ""}`}>
              <span className="flex min-w-0 items-center gap-2">
                <Truck className="h-3.5 w-3.5 shrink-0 text-blue-300" />
                <span className="truncate text-[12.5px] font-medium text-ink">{s.category}</span>
              </span>
              <StatusChip status={s.approvalConcept} />
            </button>
          );
        })}
      </div>

      <div className="panel-raised p-4 lg:sticky lg:top-4 lg:self-start">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-display text-[16px] font-semibold text-ink">{active.category}</h3>
          <StatusChip status={active.approvalConcept} />
        </div>
        <p className="mt-1.5 text-[12.5px] text-ink-muted"><span className="text-ink-faint">Supplies. </span>{active.suppliedItem}</p>

        <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          <Block icon={FileCheck2} title="Required documents" items={active.requiredDocuments} accent="#5d75f0" />
          <Block icon={ClipboardCheck} title="Receiving checks" items={active.receivingChecks} accent="#22c55e" />
          <Block icon={AlertTriangle} title="Quality risks" items={active.qualityRisks} accent="#f59e0b" />
          <div className="rounded-lg border border-line bg-base-850/40 px-3 py-2">
            <span className="label-mono text-[10px] text-ink-faint">Performance metric (demo)</span>
            <p className="mt-1 text-[11.5px] text-ink-muted">{active.performanceMetricConcept}</p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              <span className="chip border-line text-ink-faint">{clauseShort(active.relatedClause)}</span>
              <span className="chip border-line text-ink-faint">{active.relatedProcess}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Block({ icon: Icon, title, items, accent }: { icon: typeof Truck; title: string; items: string[]; accent: string }) {
  return (
    <div className="rounded-lg border border-line bg-base-850/40 px-3 py-2">
      <span className="flex items-center gap-1.5 label-mono text-[10px]" style={{ color: accent }}>
        <Icon className="h-3 w-3" /> {title}
      </span>
      <div className="mt-1.5 flex flex-wrap gap-1.5">
        {items.map((it) => <span key={it} className="chip border-line text-ink-muted">{it}</span>)}
      </div>
    </div>
  );
}
