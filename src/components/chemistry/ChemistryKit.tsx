import { mdrCurvePoints } from "@/lib/mdrCureCurveDemo";
import { materialStates } from "@/lib/materialData";
import type { Band, Polarity, Saturation } from "@/types/platform";
import type { MaterialStateId } from "@/types/simulation";
import { Check, AlertTriangle, X, Droplets, Sun, Wind, Thermometer, FlaskRound } from "lucide-react";

// ── Chemistry semantic tokens ────────────────────────────────────────────────
// Consistent meaning across the product: violet = chemistry / polymer behaviour,
// cyan = QA / measurement / digital thread, amber = cure / active process,
// green/amber/red = compatibility good / caution / poor.
export const CHEM = {
  chemistry: "#7c3aed",
  crosslink: "#7c3aed",
  cure: "#d97706",
  qa: "#0891b2",
  good: "#16a34a",
  caution: "#d97706",
  poor: "#dc2626",
  neutral: "#64748b",
} as const;

export function bandTone(band: Band): { color: string; label: string; level: number } {
  switch (band) {
    case "very-high": return { color: CHEM.good, label: "Very high", level: 4 };
    case "high": return { color: CHEM.good, label: "High", level: 3 };
    case "medium": return { color: CHEM.caution, label: "Medium", level: 2 };
    case "low": return { color: CHEM.poor, label: "Low", level: 1 };
    default: return { color: CHEM.neutral, label: "App-dependent", level: 0 };
  }
}

// ── Molecular motifs ─────────────────────────────────────────────────────────
export function PolymerChainIcon({ className = "", color = CHEM.chemistry }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 26 12" className={className} width="22" height="10" aria-hidden="true">
      <path d="M3 6 Q 6.5 2 10 6 T 17 6 T 24 6" fill="none" stroke={color} strokeWidth="1.3" />
      {[3, 10, 17, 24].map((x) => (
        <circle key={x} cx={x} cy="6" r="2" fill="#ffffff" stroke={color} strokeWidth="1.1" />
      ))}
    </svg>
  );
}

export function CrosslinkNetworkVisual({ size = 40, color = CHEM.crosslink, className = "" }: { size?: number; color?: string; className?: string }) {
  const nodes = [[10, 10], [30, 8], [20, 20], [8, 30], [32, 30]];
  const edges = [[0, 2], [1, 2], [2, 3], [2, 4], [0, 1], [3, 4]];
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} className={className} aria-hidden="true">
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke={color} strokeWidth="1.2" opacity="0.7" />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.6" fill="#ffffff" stroke={color} strokeWidth="1.2" />
      ))}
    </svg>
  );
}

export function CureCurveMini({ width = 66, height = 24, color = CHEM.cure, className = "" }: { width?: number; height?: number; color?: string; className?: string }) {
  const pad = 2;
  const d = mdrCurvePoints
    .map((p, i) => `${i === 0 ? "M" : "L"} ${(pad + p.t * (width - 2 * pad)).toFixed(1)} ${(height - pad - p.v * (height - 2 * pad)).toFixed(1)}`)
    .join(" ");
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} className={className} aria-label="Conceptual cure curve" role="img">
      <line x1={pad} y1={height - pad} x2={width - pad} y2={height - pad} stroke="rgba(15,23,42,0.18)" strokeWidth="0.8" />
      <path d={d} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

// ── Concept badges ───────────────────────────────────────────────────────────
export function PolymerFamilyTag({ family, className = "" }: { family: string; className?: string }) {
  return (
    <span className={`chip inline-flex items-center gap-1.5 ${className}`} style={{ borderColor: `${CHEM.chemistry}55`, color: CHEM.chemistry }}>
      <PolymerChainIcon /> {family}
    </span>
  );
}

const POLARITY: Record<Polarity, { label: string; note: string }> = {
  low: { label: "Non-polar", note: "Hydrocarbon backbone, generally swells in oils and fuels" },
  medium: { label: "Semi-polar", note: "Moderate oil and fluid resistance" },
  high: { label: "Polar", note: "Polar groups, generally better oil and fuel resistance" },
  special: { label: "Special polarity", note: "Specialised polarity behaviour" },
};
export function PolarityBadge({ polarity }: { polarity: Polarity }) {
  const p = POLARITY[polarity];
  return <span className="chip border-blue-400/40 text-blue-300" title={p.note}><Droplets className="h-3 w-3" /> {p.label}</span>;
}

const SATURATION: Record<Saturation, { label: string; note: string }> = {
  unsaturated: { label: "Unsaturated", note: "Reactive backbone, commonly sulfur-curable, generally weaker ozone/heat resistance unless protected" },
  saturated: { label: "Saturated", note: "Stable backbone, commonly peroxide-curable, generally better heat and ozone resistance" },
  "partially-saturated": { label: "Partially saturated", note: "Mix of stable and reactive sites" },
  special: { label: "Special backbone", note: "Specialised backbone chemistry" },
};
export function SaturationBadge({ saturation }: { saturation: Saturation }) {
  const s = SATURATION[saturation];
  return <span className="chip" style={{ borderColor: `${CHEM.crosslink}55`, color: CHEM.crosslink }} title={s.note}><CrosslinkNetworkVisual size={12} /> {s.label}</span>;
}

export type CureState = "uncured" | "curing" | "cured";
const CURE_STATE: Record<CureState, { label: string; color: string }> = {
  uncured: { label: "Uncured", color: CHEM.neutral },
  curing: { label: "Curing", color: CHEM.cure },
  cured: { label: "Cured", color: CHEM.good },
};
export function CureStateBadge({ state }: { state: CureState }) {
  const c = CURE_STATE[state];
  return <span className="chip inline-flex items-center gap-1" style={{ borderColor: `${c.color}55`, color: c.color }}><FlaskRound className="h-3 w-3" /> {c.label}</span>;
}

const CURED_STATES = new Set<MaterialStateId>(["cured-sheet", "cooled-trimmed", "inspected-final"]);
export function cureStateForMaterial(stateId: MaterialStateId): CureState {
  if (stateId === "cured-sheet") return "curing";
  if (CURED_STATES.has(stateId)) return "cured";
  return "uncured";
}

export function CompoundStateBadge({ stateId, showCure = true }: { stateId: MaterialStateId; showCure?: boolean }) {
  const s = materialStates[stateId];
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="chip inline-flex items-center gap-1.5 border-line text-ink-muted">
        <span className="h-2.5 w-2.5 rounded-full border border-white/10" style={{ backgroundColor: s.tone }} />
        {s.short}
      </span>
      {showCure && <CureStateBadge state={cureStateForMaterial(stateId)} />}
    </span>
  );
}

export function MaterialCompatibilityChip({ label, band }: { label: string; band: Band }) {
  const t = bandTone(band);
  const Icon = t.level >= 3 ? Check : t.level === 0 ? AlertTriangle : t.level === 1 ? X : AlertTriangle;
  return (
    <span className="chip inline-flex items-center gap-1" style={{ borderColor: `${t.color}55`, color: t.color }} title={`${label}: ${t.label}`}>
      <Icon className="h-3 w-3" /> {label}
    </span>
  );
}

const RISK_ICON = { oil: Droplets, weather: Sun, ozone: Wind, heat: Thermometer, chemical: FlaskRound } as const;
export function ChemistryRiskBadge({ kind, band, label }: { kind: keyof typeof RISK_ICON; band: Band; label: string }) {
  // Resistance band -> risk: low resistance means high risk.
  const t = bandTone(band);
  const Icon = RISK_ICON[kind];
  return (
    <span className="chip inline-flex items-center gap-1" style={{ borderColor: `${t.color}55`, color: t.color }} title={`${label} resistance: ${t.label}`}>
      <Icon className="h-3 w-3" /> {label}
    </span>
  );
}

export function ResistanceBar({ band }: { band: Band }) {
  const t = bandTone(band);
  return (
    <span className="inline-flex gap-0.5" aria-label={t.label}>
      {[1, 2, 3, 4].map((n) => (
        <span key={n} className="h-1.5 w-3 rounded-sm" style={{ backgroundColor: n <= t.level ? t.color : "rgba(199,210,254,0.14)" }} />
      ))}
    </span>
  );
}

export function QAPropertySignal({ label, band }: { label: string; band: Band }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="text-[11px]" style={{ color: CHEM.qa }}>{label}</span>
      <ResistanceBar band={band} />
    </span>
  );
}
