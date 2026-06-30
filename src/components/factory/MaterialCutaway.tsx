"use client";

import dynamic from "next/dynamic";
import type { ProcessStep, MaterialStateId } from "@/types/simulation";
import { materialStates } from "@/lib/materialData";
import { Loader2, Microscope } from "lucide-react";

const MolecularScene = dynamic(() => import("@/components/MolecularScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-[#0c0a09] text-ink-faint">
      <Loader2 className="h-4 w-4 animate-spin" />
    </div>
  ),
});

interface Props {
  step: ProcessStep;
  materialStateId: MaterialStateId;
  progress: number;
  transforming: boolean;
  done: boolean;
}

export function MaterialCutaway({ step, progress, transforming, done }: Props) {
  const p = done ? 1 : transforming ? progress : 0.0;

  return (
    <div className="pointer-events-none absolute bottom-3 left-3 z-10 w-[300px] max-w-[80%] overflow-hidden rounded-xl border border-line bg-base-900/85 backdrop-blur-md">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
        <Microscope className="h-3.5 w-3.5 text-molten-300" />
        <span className="label-mono text-molten-300">Material cutaway</span>
      </div>

      <div className="h-[150px] w-full bg-[radial-gradient(circle_at_50%_40%,#13161c,#0a0b0e)]">
        {step.id === "vulcanization" ? (
          <MolecularScene phase={done ? "cured" : transforming ? "curing" : "uncured"} />
        ) : (
          <svg viewBox="0 0 200 130" className="h-full w-full">
            <CutawayInset id={step.id} step={step} p={p} />
          </svg>
        )}
      </div>

      <div className="px-3 py-2">
        <div className="label-mono mb-0.5">What to watch</div>
        <p className="text-[11px] leading-snug text-ink-muted">{step.visualDescription}</p>
      </div>
    </div>
  );
}

function CutawayInset({ id, step, p }: { id: ProcessStep["id"]; step: ProcessStep; p: number }) {
  switch (id) {
    case "internal-mixer":
      return <DispersionInset p={p} />;
    case "two-roll-mill":
      return <BandingInset p={p} />;
    case "calender":
      return <NipInset p={p} />;
    default:
      return <BeforeAfterInset step={step} p={p} />;
  }
}

// Dispersion: coloured filler specks merge into a uniform dark matrix.
function DispersionInset({ p }: { p: number }) {
  const cols = ["#3a3d42", "#c8922e", "#b8a074", "#54585f"];
  return (
    <g>
      <rect x="20" y="20" width="160" height="90" rx="8" fill={`rgb(${28 - p * 10},${28 - p * 10},${32 - p * 12})`} />
      {Array.from({ length: 40 }).map((_, i) => {
        const cx = 30 + ((i * 53) % 140);
        const cy = 28 + ((i * 37) % 74);
        const merge = Math.max(0, 1 - p * 1.4);
        return <circle key={i} cx={cx} cy={cy} r={1.4 + (i % 3) * 0.7} fill={cols[i % cols.length]} opacity={merge * 0.9} />;
      })}
      <text x="100" y="124" textAnchor="middle" fill="#8a8073" fontSize="8" fontFamily="monospace">
        {p > 0.6 ? "DISPERSED" : "DISPERSING"}
      </text>
    </g>
  );
}

// Banding: a rough strip becomes a smooth band.
function BandingInset({ p }: { p: number }) {
  const wob = (1 - p) * 8;
  return (
    <g>
      <circle cx="70" cy="62" r="34" fill="#171a20" stroke="#2b2722" />
      <circle cx="130" cy="62" r="34" fill="#171a20" stroke="#2b2722" />
      <path
        d={`M40 62 q15 ${-wob} 30 0 t30 0 t30 0 t30 0`}
        fill="none"
        stroke="#161310"
        strokeWidth={5 + p * 2}
        strokeLinecap="round"
      />
      <text x="100" y="118" textAnchor="middle" fill="#8a8073" fontSize="8" fontFamily="monospace">
        {p > 0.6 ? "HOMOGENIZED" : "FOLDING / SMOOTHING"}
      </text>
    </g>
  );
}

// Nip cross-section: thick compound becomes a thin even sheet.
function NipInset({ p }: { p: number }) {
  const thick = 18 - p * 12;
  return (
    <g>
      <circle cx="70" cy="44" r="26" fill="#ddd1ba" opacity="0.9" />
      <circle cx="70" cy="92" r="26" fill="#ddd1ba" opacity="0.9" />
      <rect x="26" y={68 - thick / 2} width="40" height={thick} fill="#202225" />
      <rect x="96" y={68 - 3} width="80" height="6" rx="2" fill="#1b1714" />
      <line x1="150" y1="50" x2="150" y2="86" stroke="#2ba6c4" strokeWidth="1" opacity="0.7" />
      <text x="100" y="122" textAnchor="middle" fill="#8a8073" fontSize="8" fontFamily="monospace">
        GAUGE: {p > 0.6 ? "EVEN" : "FORMING"}
      </text>
    </g>
  );
}

// Generic before/after material swatches.
function BeforeAfterInset({ step, p }: { step: ProcessStep; p: number }) {
  const a = materialStates[step.inputStateId];
  const b = materialStates[step.outputStateId];
  return (
    <g>
      <rect x="22" y="34" width="58" height="58" rx="8" fill={a.tone} stroke="#2b2722" />
      <text x="51" y="104" textAnchor="middle" fill="#8a8073" fontSize="7.5" fontFamily="monospace">
        {a.short.toUpperCase()}
      </text>
      <g opacity={0.4 + p * 0.6}>
        <rect x="120" y="34" width="58" height="58" rx="8" fill={b.tone} stroke="#36302a" />
        <text x="149" y="104" textAnchor="middle" fill="#9a9082" fontSize="7.5" fontFamily="monospace">
          {b.short.toUpperCase()}
        </text>
      </g>
      <path d="M88 63 L112 63 M104 57 L112 63 L104 69" stroke="#ff8c2b" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}
