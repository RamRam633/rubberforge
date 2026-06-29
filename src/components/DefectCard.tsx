"use client";

import type { Defect, Severity } from "@/types/simulation";
import { MapPin, ShieldCheck, Search } from "lucide-react";

const SEVERITY: Record<Severity, { label: string; cls: string; dot: string }> = {
  low: { label: "Low impact", cls: "border-steel-400/40 text-steel-300", dot: "#38bdf8" },
  medium: { label: "Medium impact", cls: "border-warn/40 text-warn", dot: "#fbbf24" },
  high: { label: "High impact", cls: "border-fail/40 text-fail", dot: "#f87171" },
};

/** A small abstract visualisation of each defect's surface symptom. */
export function DefectSymptom({ id, className = "" }: { id: string; className?: string }) {
  const base = "#1c1d20";
  return (
    <svg viewBox="0 0 120 70" className={className} aria-hidden="true">
      <rect x="0" y="0" width="120" height="70" rx="6" fill={base} />
      <rect x="0" y="0" width="120" height="70" rx="6" fill="url(#sheen-g)" opacity="0.06" />
      <defs>
        <linearGradient id="sheen-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#000" />
        </linearGradient>
      </defs>
      {id === "poor-dispersion" &&
        Array.from({ length: 26 }).map((_, i) => (
          <circle
            key={i}
            cx={10 + ((i * 37) % 100)}
            cy={8 + ((i * 53) % 54)}
            r={1 + (i % 4) * 0.9}
            fill={i % 3 === 0 ? "#3c3f45" : "#54585f"}
          />
        ))}
      {id === "trapped-air" &&
        Array.from({ length: 7 }).map((_, i) => (
          <circle
            key={i}
            cx={18 + i * 14}
            cy={20 + ((i * 31) % 30)}
            r={3 + (i % 3) * 2}
            fill="none"
            stroke="#5b6068"
            strokeWidth="1.2"
          />
        ))}
      {id === "uneven-thickness" && (
        <path d="M6 50 Q40 22 60 38 T114 30 L114 64 L6 64 Z" fill="#34373d" />
      )}
      {id === "under-cure" && (
        <>
          <path d="M10 40 Q35 30 60 42 T110 38" fill="none" stroke="#5b6068" strokeWidth="6" strokeLinecap="round" opacity="0.5" />
          <text x="60" y="60" textAnchor="middle" fontSize="9" fill="#6b7280" fontFamily="monospace">soft / tacky</text>
        </>
      )}
      {id === "surface-contamination" &&
        Array.from({ length: 6 }).map((_, i) => (
          <g key={i}>
            <circle cx={16 + i * 17} cy={18 + ((i * 23) % 34)} r="2.6" fill="#6b7280" />
            <circle cx={16 + i * 17} cy={18 + ((i * 23) % 34)} r="5" fill="none" stroke="#3c3f45" strokeWidth="1" />
          </g>
        ))}
      {id === "edge-defects" && (
        <path
          d="M0 8 L120 8 L120 14 C108 16 112 20 100 18 C90 16 96 22 84 20 C74 18 80 24 68 22 L68 62 L120 62 L120 64 L0 64 Z"
          fill="#34373d"
        />
      )}
    </svg>
  );
}

export function DefectCard({ defect, revealed = true }: { defect: Defect; revealed?: boolean }) {
  const sev = SEVERITY[defect.severity];
  return (
    <div className="panel flex h-full flex-col overflow-hidden">
      <div className="flex gap-3 border-b border-line p-3.5">
        <DefectSymptom id={defect.id} className="h-[70px] w-[120px] shrink-0 rounded-md ring-1 ring-white/5" />
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className={`chip ${sev.cls}`}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: sev.dot }} />
              {sev.label}
            </span>
          </div>
          <h3 className="mt-1.5 font-display text-[15px] font-semibold leading-tight text-ink">{defect.name}</h3>
        </div>
      </div>

      <div className="flex-1 space-y-3 p-3.5">
        <Block label="Visual symptom" icon={<Search className="h-3.5 w-3.5 text-ink-faint" />}>
          {defect.visualSymptom}
        </Block>

        {revealed && (
          <>
            <Block label="Likely process source" icon={<MapPin className="h-3.5 w-3.5 text-molten-400" />}>
              {defect.likelyProcessSource}
            </Block>
            <Block label="Why it happens">{defect.explanation}</Block>
            <div className="rounded-lg border border-pass/25 bg-pass/[0.05] px-3 py-2.5">
              <div className="mb-1 flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-pass" />
                <span className="label-mono text-pass">Prevention concept</span>
              </div>
              <p className="text-[12px] leading-relaxed text-ink-muted">{defect.preventionConcept}</p>
            </div>
          </>
        )}
      </div>

      {revealed && (
        <div className="border-t border-line px-3.5 py-2">
          <span className="label-mono">Related station</span>
          <span className="ml-2 text-[12px] text-ink-muted">{defect.relatedStationName}</span>
        </div>
      )}
    </div>
  );
}

function Block({
  label,
  icon,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-1 flex items-center gap-1.5">
        {icon}
        <span className="label-mono">{label}</span>
      </div>
      <p className="text-[12px] leading-relaxed text-ink-muted">{children}</p>
    </div>
  );
}
