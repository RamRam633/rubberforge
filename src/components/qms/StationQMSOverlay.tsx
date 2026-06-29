"use client";

import { stationQmsById } from "@/lib/stationQmsMap";
import { clauseShort } from "@/lib/qmsUi";
import type { StationId } from "@/types/simulation";
import { ShieldCheck, User, FileText, FileCheck2, AlertTriangle, Search, GitBranch, ArrowRight } from "lucide-react";
import Link from "next/link";

const ACCENT = "#9333ea";

export function StationQMSOverlay({ stationId }: { stationId: StationId }) {
  const q = stationQmsById[stationId];
  if (!q) return null;
  return (
    <div className="panel flex h-full flex-col p-4">
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg border" style={{ borderColor: `${ACCENT}55`, backgroundColor: `${ACCENT}1a` }}>
          <ShieldCheck className="h-4 w-4" style={{ color: ACCENT }} />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em]" style={{ color: ACCENT }}>QMS layer</span>
        <span className="chip border-line text-ink-faint">{clauseShort(q.relatedClause)}</span>
      </div>

      <div className="mt-2.5 flex items-center gap-1.5 text-[12.5px] text-ink-muted">
        <User className="h-3.5 w-3.5" style={{ color: ACCENT }} /> <span className="text-ink-faint">Process owner:</span> {q.processOwner}
      </div>

      <div className="mt-3 flex flex-col gap-2.5 overflow-y-auto">
        <Row icon={FileText} title="Controlled documents" items={q.controlledDocuments} />
        <Row icon={FileCheck2} title="Records generated" items={q.recordsGenerated} />
        <Row icon={Search} title="Verification points" items={q.verificationPoints} />
        <Row icon={AlertTriangle} title="NCR triggers" items={q.ncrTriggers} tone="#d97706" />
        <Row icon={GitBranch} title="Traceability records" items={q.traceabilityRecords} tone="#2563eb" />
      </div>

      <div className="mt-2.5 rounded-lg border px-3 py-2" style={{ borderColor: `${ACCENT}33`, backgroundColor: `${ACCENT}0d` }}>
        <span className="label-mono text-[10px]" style={{ color: ACCENT }}>Audit question (demo)</span>
        <p className="mt-1 text-[11.5px] leading-relaxed text-ink-muted">{q.auditQuestion}</p>
      </div>

      <Link href="/qms" className="mt-auto inline-flex items-center gap-1 pt-3 text-[12px] hover:opacity-80" style={{ color: ACCENT }}>
        Open QMS Command Center <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}

function Row({ icon: Icon, title, items, tone = "#9ea4d6" }: { icon: typeof User; title: string; items: string[]; tone?: string }) {
  return (
    <div>
      <span className="flex items-center gap-1.5 label-mono text-[9.5px]" style={{ color: tone }}><Icon className="h-3 w-3" /> {title}</span>
      <div className="mt-1 flex flex-wrap gap-1.5">
        {items.map((it) => <span key={it} className="chip border-line text-ink-muted">{it}</span>)}
      </div>
    </div>
  );
}
