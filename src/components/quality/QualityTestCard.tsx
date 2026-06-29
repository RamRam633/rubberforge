"use client";

import type { QualityTest } from "@/types/quality";
import { FlaskConical, FileText, AlertTriangle } from "lucide-react";

export function QualityTestCard({
  test,
  standardCodes = [],
}: {
  test: QualityTest;
  standardCodes?: string[];
}) {
  return (
    <div className="panel flex h-full flex-col p-4">
      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-pass/30 bg-pass/10 text-pass">
          <FlaskConical className="h-4 w-4" />
        </span>
        <h3 className="font-display text-[14.5px] font-semibold leading-tight text-ink">{test.name}</h3>
      </div>

      <p className="mt-2 text-[12px] leading-relaxed text-ink-muted">
        <span className="font-medium text-ink">Measures: </span>
        {test.whatItMeasures}
      </p>
      <p className="mt-1.5 text-[12px] leading-relaxed text-ink-muted">{test.whyItMatters}</p>

      <div className="mt-2.5 flex flex-wrap gap-1">
        <span className="chip px-1.5 py-0.5 text-[8.5px]">sample: {test.sampleType}</span>
        {standardCodes.map((c) => (
          <span key={c} className="chip border-violet-500/25 px-1.5 py-0.5 text-[8.5px] text-violet-300">{c}</span>
        ))}
      </div>

      <div className="mt-2.5 flex items-start gap-1.5 rounded-md border border-warn/20 bg-warn/[0.04] px-2.5 py-1.5">
        <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0 text-warn" />
        <p className="text-[11px] leading-relaxed text-ink-muted">
          <span className="text-warn">A bad result may mean: </span>
          {test.failureMeaning}
        </p>
      </div>

      <div className="mt-auto flex items-center gap-1.5 border-t border-line pt-2.5 text-[11px] text-ink-faint">
        <FileText className="h-3 w-3" /> {test.customerDocument}
      </div>
    </div>
  );
}
