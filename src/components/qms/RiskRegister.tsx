"use client";

import { useMemo, useState } from "react";
import { riskRegister } from "@/lib/riskRegister";
import { opportunityRegister } from "@/lib/opportunityRegister";
import { clauseShort, statusClass } from "@/lib/qmsUi";
import { StatusChip } from "./QMSBadge";
import { AlertTriangle, Shield, Wrench, User, TrendingUp, Lightbulb } from "lucide-react";

const RANK: Record<string, number> = { low: 0, medium: 1, high: 2 };
const LEVELS = ["low", "medium", "high"];

function sevCls(level: string) {
  const r = RANK[level.toLowerCase()] ?? 1;
  return r === 2 ? "text-[#dc2626]" : r === 1 ? "text-molten-300" : "text-pass";
}

export function RiskHeatMap() {
  // rows = severity (high at top), cols = likelihood (low..high)
  const grid = useMemo(() => {
    const g: Record<string, typeof riskRegister> = {};
    for (const r of riskRegister) {
      const s = RANK[r.severity.toLowerCase()] ?? 1;
      const l = RANK[r.likelihood.toLowerCase()] ?? 1;
      const k = `${s}-${l}`;
      (g[k] = g[k] || []).push(r);
    }
    return g;
  }, []);

  const cellColor = (s: number, l: number) => {
    const score = s + l;
    if (score >= 3) return "rgba(239,68,68,0.18)";
    if (score >= 2) return "rgba(245,158,11,0.16)";
    return "rgba(34,197,94,0.14)";
  };

  return (
    <div className="panel-raised p-4">
      <div className="flex items-center gap-2">
        <AlertTriangle className="h-4 w-4 text-molten-300" />
        <span className="kicker-violet">Risk heat map</span>
        <span className="label-mono text-[10px] text-ink-faint">qualitative, demo</span>
      </div>
      <div className="mt-3 flex gap-2">
        <div className="flex flex-col justify-around pr-1 text-right">
          <span className="label-mono text-[9px] text-ink-faint">severity</span>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-3 gap-1.5">
            {[2, 1, 0].map((s) =>
              [0, 1, 2].map((l) => {
                const items = grid[`${s}-${l}`] || [];
                return (
                  <div
                    key={`${s}-${l}`}
                    className="flex min-h-[58px] flex-col rounded-lg border border-line p-1.5"
                    style={{ backgroundColor: cellColor(s, l) }}
                  >
                    <span className="font-display text-[15px] font-semibold text-ink">{items.length}</span>
                    <span className="mt-auto truncate text-[9px] text-ink-faint">
                      {LEVELS[s]} sev / {LEVELS[l]} lk
                    </span>
                  </div>
                );
              }),
            )}
          </div>
          <div className="mt-1 text-center label-mono text-[9px] text-ink-faint">likelihood (low to high)</div>
        </div>
      </div>
    </div>
  );
}

export function RiskRegister() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="flex flex-col gap-2">
      {riskRegister.map((r) => {
        const isOpen = open === r.id;
        return (
          <div key={r.id} className="panel overflow-hidden">
            <button onClick={() => setOpen(isOpen ? null : r.id)} className="flex w-full items-center gap-3 px-3.5 py-2.5 text-left">
              <span className="min-w-0 flex-1">
                <span className="block text-[12.5px] font-medium text-ink">{r.riskStatement}</span>
                <span className="block text-[10.5px] text-ink-faint">{r.processArea}</span>
              </span>
              <span className="hidden shrink-0 items-center gap-1.5 sm:flex">
                <span className={`font-mono text-[10px] ${sevCls(r.severity)}`}>sev {r.severity}</span>
                <span className={`font-mono text-[10px] ${sevCls(r.likelihood)}`}>lk {r.likelihood}</span>
              </span>
              <StatusChip status={r.status} />
            </button>
            {isOpen && (
              <div className="border-t border-line bg-base-850/30 px-3.5 py-3 text-[11.5px] leading-relaxed text-ink-muted">
                <div className="grid gap-2 sm:grid-cols-2">
                  <p><span className="text-ink-faint">Cause. </span>{r.cause}</p>
                  <p><span className="text-ink-faint">Effect. </span>{r.effect}</p>
                </div>
                <div className="mt-2">
                  <span className="flex items-center gap-1.5 label-mono text-[10px] text-blue-300"><Shield className="h-3 w-3" /> Controls</span>
                  <div className="mt-1 flex flex-wrap gap-1.5">{r.controls.map((c) => <span key={c} className="chip border-line text-ink-muted">{c}</span>)}</div>
                </div>
                <p className="mt-2"><Wrench className="mr-1 inline h-3 w-3 text-violet-300" /><span className="text-ink-faint">Mitigation. </span>{r.mitigation}</p>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] text-ink-faint">
                  <span><User className="mr-1 inline h-3 w-3" />{r.owner}</span>
                  <span className="chip border-line text-ink-faint">{clauseShort(r.relatedClause)}</span>
                  <span className="chip border-line text-ink-faint">detection: {r.detection}</span>
                  {r.linkedTest && r.linkedTest !== "n/a" && <span className="chip border-line text-ink-faint">test: {r.linkedTest}</span>}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function OpportunityRegister() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {opportunityRegister.map((o) => (
        <div key={o.id} className="panel flex flex-col p-3.5">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-4 w-4 text-pass" />
            <h3 className="font-display text-[13px] font-semibold leading-tight text-ink">{o.opportunity}</h3>
          </div>
          <p className="mt-1.5 flex-1 text-[11.5px] leading-relaxed text-ink-muted">
            <TrendingUp className="mr-1 inline h-3 w-3 text-pass" />{o.benefit}
          </p>
          <p className="mt-2 text-[11.5px] text-ink-muted"><span className="text-ink-faint">Action. </span>{o.action}</p>
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <span className={`chip ${statusClass(o.status)}`}>{o.status}</span>
            <span className="chip border-line text-ink-faint">priority: {o.priority}</span>
            <span className="chip border-line text-ink-faint">{clauseShort(o.relatedClause)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
