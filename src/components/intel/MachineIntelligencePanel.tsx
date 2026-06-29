"use client";

import Link from "next/link";
import type { Equipment, ManufacturingControl } from "@/types/factoryIntel";
import { Wrench, Eye, AlertTriangle, Building2, ClipboardCheck } from "lucide-react";

// Machine intelligence overlay shown over the 3D factory (Intel view mode).
export function MachineIntelligencePanel({
  equipment,
  control,
  qaTests,
  releaseStatus,
}: {
  equipment?: Equipment;
  control?: ManufacturingControl;
  qaTests?: string[];
  releaseStatus?: string;
}) {
  return (
    <div className="pointer-events-auto absolute bottom-3 left-3 z-10 max-h-[90%] w-[340px] max-w-[84%] overflow-y-auto rounded-xl border border-steel-400/25 bg-base-900/88 backdrop-blur-md">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
        <Wrench className="h-3.5 w-3.5 text-steel-300" />
        <span className="label-mono text-steel-300">Machine intelligence</span>
      </div>

      <div className="space-y-2.5 px-3 py-2.5">
        {equipment ? (
          <>
            <div>
              <div className="font-display text-[14px] font-semibold leading-tight text-ink">{equipment.name}</div>
              <p className="mt-1 text-[11.5px] leading-relaxed text-ink-muted">{equipment.whatItDoes}</p>
            </div>

            {control && (
              <div className="rounded-lg border border-violet-500/25 bg-violet-500/[0.06] px-2.5 py-2">
                <div className="mb-1 flex items-center gap-1.5">
                  <Eye className="h-3.5 w-3.5 text-violet-300" />
                  <span className="label-mono text-violet-300">What the process engineer watches</span>
                </div>
                <ul className="space-y-0.5">
                  {control.criticalToQuality.slice(0, 4).map((c) => (
                    <li key={c} className="flex items-start gap-1.5 text-[11px] leading-snug text-ink-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Mini label="A buyer would specify" items={equipment.variants} />
            {equipment.qualityRisks.length > 0 && (
              <div>
                <div className="mb-1 flex items-center gap-1 text-[10px] uppercase tracking-wide text-warn">
                  <AlertTriangle className="h-3 w-3" /> Quality risks here
                </div>
                <div className="flex flex-wrap gap-1">
                  {equipment.qualityRisks.map((q) => (
                    <span key={q} className="chip border-warn/25 px-1.5 py-0.5 text-[9px]">{q}</span>
                  ))}
                </div>
              </div>
            )}

            {qaTests && qaTests.length > 0 && (
              <div className="rounded-lg border border-pass/25 bg-pass/[0.05] px-2.5 py-2">
                <div className="mb-1 flex items-center gap-1.5">
                  <ClipboardCheck className="h-3.5 w-3.5 text-pass" />
                  <span className="label-mono text-pass">Verified at QA</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {qaTests.map((t) => (
                    <span key={t} className="chip border-pass/25 px-1.5 py-0.5 text-[9px]">{t}</span>
                  ))}
                </div>
                {releaseStatus && (
                  <p className="mt-1.5 text-[11px] text-ink-muted">
                    Release status: <span className="text-pass">{releaseStatus}</span>
                  </p>
                )}
              </div>
            )}

            <div className="flex items-center gap-1.5 text-[10.5px] text-ink-faint">
              <Building2 className="h-3 w-3" /> Supplier category: {equipment.supplierCategory}
            </div>
            <Link href="/factory-intelligence" className="block text-[11px] font-medium text-steel-300 hover:text-steel-200">
              Open Factory Intelligence →
            </Link>
          </>
        ) : (
          <p className="text-[12px] leading-relaxed text-ink-muted">
            This station is part of the line. Full equipment intelligence is on the Factory
            Intelligence page.
          </p>
        )}
      </div>
    </div>
  );
}

function Mini({ label, items }: { label: string; items: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <div>
      <div className="label-mono mb-1">{label}</div>
      <div className="flex flex-wrap gap-1">
        {items.map((i) => (
          <span key={i} className="chip px-1.5 py-0.5 text-[9px] normal-case tracking-normal">{i}</span>
        ))}
      </div>
    </div>
  );
}
