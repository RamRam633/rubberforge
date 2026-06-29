"use client";

import { useState } from "react";
import { qmsClauseMap } from "@/lib/qmsClauseMap";
import { StatusChip } from "./QMSBadge";
import { BookOpen, ListChecks, FileCheck2, AlertTriangle, Boxes } from "lucide-react";

export function ISOClauseMap() {
  const [activeId, setActiveId] = useState(qmsClauseMap[0]?.id);
  const active = qmsClauseMap.find((c) => c.id === activeId) ?? qmsClauseMap[0];

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[300px_minmax(0,1fr)]">
      <div className="flex flex-col gap-1.5">
        <p className="mb-1 text-[12.5px] leading-relaxed text-ink-muted">
          High-level, paraphrased clause areas mapped to the virtual factory. Labels only, no standard text. Status is
          how completely RubberForge models the area.
        </p>
        {qmsClauseMap.map((c) => {
          const on = c.id === active.id;
          return (
            <button
              key={c.id}
              onClick={() => setActiveId(c.id)}
              aria-pressed={on}
              className={`interactive-card flex items-center justify-between gap-2 px-3 py-2.5 text-left ${on ? "border-line-strong bg-base-800/60" : ""}`}
            >
              <span className="flex min-w-0 items-center gap-2">
                <span className="font-mono text-[11px] text-violet-300">{c.id.replace("clause-", "Cl. ")}</span>
                <span className="truncate text-[12.5px] font-medium text-ink">{c.clauseLabel}</span>
              </span>
              <StatusChip status={c.status} />
            </button>
          );
        })}
      </div>

      <div className="panel-raised p-4 lg:sticky lg:top-4 lg:self-start">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-violet-300" />
            <h3 className="font-display text-[16px] font-semibold text-ink">
              {active.id.replace("clause-", "Clause ")}. {active.clauseLabel}
            </h3>
          </div>
          <StatusChip status={active.status} />
        </div>

        <div className="mt-3">
          <span className="label-mono text-[10px] text-ink-faint">Sub-areas</span>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {active.subAreas.map((s) => (
              <span key={s} className="chip border-line text-ink-muted">{s}</span>
            ))}
          </div>
        </div>

        <div className="mt-3 rounded-lg border border-violet-500/25 bg-violet-500/5 px-3 py-2">
          <span className="label-mono text-[10px] text-violet-300">What it means in a rubber factory</span>
          <p className="mt-1 text-[12.5px] leading-relaxed text-ink-muted">{active.meaningInRubberFactory}</p>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          <Block icon={Boxes} title="Related modules" items={active.relatedModules} />
          <Block icon={FileCheck2} title="Evidence examples (demo)" items={active.evidenceExamples} />
        </div>

        <div className="mt-2.5 rounded-lg border border-molten-400/25 bg-molten-400/[0.05] px-3 py-2">
          <span className="flex items-center gap-1.5 label-mono text-[10px] text-molten-300">
            <AlertTriangle className="h-3 w-3" /> Gaps / open actions
          </span>
          <ul className="mt-1 space-y-1">
            {active.gaps.map((g) => (
              <li key={g} className="flex items-start gap-1.5 text-[11.5px] leading-relaxed text-ink-muted">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-molten-300" /> {g}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Block({ icon: Icon, title, items }: { icon: typeof ListChecks; title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-line bg-base-850/40 px-3 py-2">
      <span className="flex items-center gap-1.5 label-mono text-[10px] text-ink-faint">
        <Icon className="h-3 w-3" /> {title}
      </span>
      <ul className="mt-1 space-y-1">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-1.5 text-[11.5px] leading-relaxed text-ink-muted">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-400" /> {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
