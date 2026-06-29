"use client";

import { useState } from "react";
import { factoryWalkthroughChapters } from "@/lib/factoryWalkthroughChapters";
import { factoryRolesById } from "@/lib/factoryRoles";
import { processSteps } from "@/lib/processData";
import { ChevronLeft, ChevronRight, Film, FileSignature, HardHat } from "lucide-react";

function stationTitle(id: string): string {
  return processSteps.find((s) => s.id === id)?.title ?? id;
}

export function FactoryWalkthroughMode() {
  const chapters = factoryWalkthroughChapters;
  const [i, setI] = useState(0);
  const ch = chapters[i];
  const role = factoryRolesById[ch.roleId];

  return (
    <div className="panel-raised overflow-hidden">
      {/* Chapter rail */}
      <div className="flex items-center gap-1 overflow-x-auto border-b border-line bg-base-850/40 px-3 py-2">
        {chapters.map((c, idx) => (
          <button
            key={c.id}
            onClick={() => setI(idx)}
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md border text-[11px] font-medium transition ${
              idx === i
                ? "border-violet-500 bg-violet-500/20 text-violet-200"
                : idx < i
                  ? "border-line bg-base-800/60 text-ink-faint"
                  : "border-line text-ink-faint hover:border-line-strong"
            }`}
            aria-label={`Chapter ${c.index}: ${c.title}`}
            aria-current={idx === i}
          >
            {c.index}
          </button>
        ))}
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2">
          <Film className="h-4 w-4 text-violet-300" />
          <span className="label-mono text-[10px] text-violet-300">
            Chapter {ch.index} / {chapters.length}
          </span>
          <span className="chip border-blue-400/30 text-blue-300">{stationTitle(ch.focusStation)}</span>
        </div>

        <h3 className="mt-2 font-display text-[20px] font-semibold leading-tight text-ink">{ch.title}</h3>
        <p className="mt-2 max-w-3xl text-[13.5px] leading-relaxed text-ink-muted">{ch.explanation}</p>

        <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {role && (
            <div className="rounded-lg border border-line bg-base-850/40 px-3 py-2.5">
              <span className="flex items-center gap-1.5 label-mono text-[10px] text-ink-faint">
                <HardHat className="h-3 w-3" /> Who you are with
              </span>
              <p className="mt-1 text-[12.5px] font-medium text-ink">{role.displayName}</p>
              <p className="mt-0.5 text-[11.5px] leading-relaxed text-ink-faint">{role.purpose}</p>
            </div>
          )}
          <div className="rounded-lg border border-violet-500/25 bg-violet-500/5 px-3 py-2.5">
            <span className="flex items-center gap-1.5 label-mono text-[10px] text-violet-300">
              <FileSignature className="h-3 w-3" /> Why it matters for your quote
            </span>
            <p className="mt-1 text-[12.5px] leading-relaxed text-ink-muted">{ch.whyRfq}</p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <button onClick={() => setI((v) => Math.max(0, v - 1))} disabled={i === 0} className="btn-ghost text-[12px]">
            <ChevronLeft className="h-3.5 w-3.5" /> Previous
          </button>
          <div className="flex-1 px-4">
            <div className="h-1 w-full overflow-hidden rounded-full bg-base-700">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-400"
                style={{ width: `${((i + 1) / chapters.length) * 100}%`, transition: "width 300ms ease" }}
              />
            </div>
          </div>
          <button
            onClick={() => setI((v) => Math.min(chapters.length - 1, v + 1))}
            disabled={i === chapters.length - 1}
            className="btn-primary text-[12px]"
          >
            Next <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
