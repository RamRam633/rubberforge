"use client";

import { useState } from "react";
import { internalAuditData } from "@/lib/internalAuditData";
import { clauseShort, statusClass, prettyStatus } from "@/lib/qmsUi";
import { StatusChip } from "./QMSBadge";
import { ClipboardCheck, Search, User, CalendarClock } from "lucide-react";

export function AuditSchedule() {
  const counts = internalAuditData.reduce<Record<string, number>>((a, x) => { a[x.status] = (a[x.status] || 0) + 1; return a; }, {});
  return (
    <div className="panel-raised flex flex-wrap items-center gap-2 p-3">
      <CalendarClock className="h-4 w-4 text-violet-300" />
      <span className="kicker-violet">Audit program (demo schedule)</span>
      <div className="ml-auto flex flex-wrap gap-1.5">
        {Object.entries(counts).map(([k, v]) => <span key={k} className={`chip ${statusClass(k)}`}>{v} {prettyStatus(k)}</span>)}
      </div>
    </div>
  );
}

export function AuditFindingCard({ audit }: { audit: (typeof internalAuditData)[number] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="panel overflow-hidden">
      <button onClick={() => setOpen((o) => !o)} className="flex w-full items-center gap-3 px-3.5 py-2.5 text-left">
        <ClipboardCheck className="h-4 w-4 shrink-0 text-violet-300" />
        <span className="min-w-0 flex-1">
          <span className="block text-[12.5px] font-medium capitalize text-ink">{audit.area}</span>
          <span className="block font-mono text-[10px] text-ink-faint">{clauseShort(audit.relatedClause)}</span>
        </span>
        <StatusChip status={audit.status} />
      </button>
      {open && (
        <div className="border-t border-line bg-base-850/30 px-3.5 py-3 text-[11.5px] leading-relaxed text-ink-muted">
          <p className="flex items-start gap-1.5"><Search className="mt-0.5 h-3 w-3 shrink-0 text-blue-300" /><span><span className="text-ink-faint">Audit question. </span>{audit.auditQuestion}</span></p>
          <div className="mt-2">
            <span className="label-mono text-[10px] text-ink-faint">Evidence to check (demo)</span>
            <div className="mt-1 flex flex-wrap gap-1.5">{audit.evidenceToCheck.map((e) => <span key={e} className="chip border-line text-ink-muted">{e}</span>)}</div>
          </div>
          <p className="mt-2"><span className="text-ink-faint">Finding. </span>{audit.finding}</p>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] text-ink-faint">
            <span><User className="mr-1 inline h-3 w-3" />{audit.actionOwner}</span>
            <span className="chip border-line text-ink-faint">due: {audit.dueDate}</span>
            {audit.linkedStation && <span className="chip border-line text-ink-faint">{audit.linkedStation}</span>}
          </div>
        </div>
      )}
    </div>
  );
}

export function InternalAuditChecklist() {
  return (
    <div className="flex flex-col gap-3">
      <AuditSchedule />
      <p className="text-[12.5px] leading-relaxed text-ink-muted">
        High-level, paraphrased audit-readiness questions per area. No standard text is reproduced. Findings and dates
        are demo placeholders.
      </p>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
        {internalAuditData.map((a) => <AuditFindingCard key={a.id} audit={a} />)}
      </div>
    </div>
  );
}
