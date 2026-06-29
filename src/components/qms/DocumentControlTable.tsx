"use client";

import { useState } from "react";
import { documentControl } from "@/lib/documentControl";
import { clauseShort } from "@/lib/qmsUi";
import { ApprovalStatusBadge, RevisionBadge } from "./QMSBadge";
import { FileText, Lock, Unlock } from "lucide-react";

export function DocumentControlTable() {
  const [filter, setFilter] = useState<"all" | "Document" | "Record">("all");
  const rows = documentControl.filter((d) => filter === "all" || d.docType === filter);

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="label-mono text-[10px] text-ink-faint">Controlled documents and records (demo)</span>
        <div className="ml-auto flex gap-1">
          {(["all", "Document", "Record"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`chip ${filter === f ? "border-violet-500/50 bg-violet-500/15 text-violet-200" : "border-line text-ink-muted"}`}
            >
              {f === "all" ? "All" : `${f}s`}
            </button>
          ))}
        </div>
      </div>

      <div className="panel-raised overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead>
            <tr className="border-b border-line text-ink-faint">
              {["Document / record", "Type", "Owner", "Rev", "Status", "Clause", "Review", "Ctrl"].map((h) => (
                <th key={h} className="px-3 py-2 label-mono text-[10px] font-normal">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((d) => (
              <tr key={d.id} className="border-b border-line/50 last:border-0 hover:bg-base-800/30">
                <td className="px-3 py-2.5">
                  <span className="flex items-center gap-1.5 text-[12.5px] font-medium text-ink">
                    <FileText className="h-3.5 w-3.5 text-violet-300" /> {d.title}
                  </span>
                  <span className="text-[10.5px] text-ink-faint">{d.processArea}</span>
                </td>
                <td className="px-3 py-2.5 text-[11.5px] text-ink-muted">{d.docType}</td>
                <td className="px-3 py-2.5 text-[11.5px] text-ink-muted">{d.owner}</td>
                <td className="px-3 py-2.5"><RevisionBadge revision={d.revision} /></td>
                <td className="px-3 py-2.5"><ApprovalStatusBadge status={d.approvalStatus} /></td>
                <td className="px-3 py-2.5 font-mono text-[10.5px] text-ink-faint">{clauseShort(d.relatedClause)}</td>
                <td className="px-3 py-2.5 text-[11px] text-ink-faint">{d.reviewFrequency}</td>
                <td className="px-3 py-2.5">
                  {d.controlled ? <Lock className="h-3.5 w-3.5 text-pass" /> : <Unlock className="h-3.5 w-3.5 text-ink-faint" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
