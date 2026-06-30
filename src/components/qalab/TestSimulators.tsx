"use client";

import { useEffect, useState } from "react";
import { Play, Gauge, Maximize2, ArrowDownToLine } from "lucide-react";
import { LabQMSBadge } from "@/components/qms/QMSBadge";

// Shared deterministic, conceptual stress-strain curve (rubber J-curve, unitless).
const SS_W = 320, SS_H = 170, SS_PAD = 26;
const ssPoints = Array.from({ length: 30 }, (_, i) => {
  const x = i / 29;
  const y = Math.min(0.95, Math.pow(x, 1.7) * 0.85 + 0.04);
  return { x, y };
});
const ssD = ssPoints
  .map((p, i) => `${i === 0 ? "M" : "L"} ${(SS_PAD + p.x * (SS_W - 2 * SS_PAD)).toFixed(1)} ${(SS_H - SS_PAD - p.y * (SS_H - 2 * SS_PAD)).toFixed(1)}`)
  .join(" ");

function SimShell({
  title,
  Icon,
  accent,
  onRun,
  badges,
  children,
  result,
}: {
  title: string;
  Icon: typeof Gauge;
  accent: string;
  onRun: () => void;
  badges: string[];
  children: React.ReactNode;
  result: React.ReactNode;
}) {
  return (
    <div className="panel-raised p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4" style={{ color: accent }} />
          <span className="kicker-violet">{title}</span>
        </div>
        <button onClick={onRun} className="btn-ghost text-[12px]" style={{ borderColor: `${accent}55` }}>
          <Play className="h-3.5 w-3.5" /> Run (demo)
        </button>
      </div>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-[180px_minmax(0,1fr)]">
        <div className="flex items-center justify-center rounded-xl border border-line bg-base-950/40 p-3">{children}</div>
        <div className="min-w-0">
          {result}
          <div className="mt-2 flex flex-wrap gap-1.5">
            {badges.map((b) => <LabQMSBadge key={b} label={b} tone={b.includes("calibration") ? "warn" : b.includes("controlled") ? "pass" : "info"} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TensileTestSimulator() {
  const [run, setRun] = useState(0);
  const [armed, setArmed] = useState(false);
  useEffect(() => { setArmed(false); const t = setTimeout(() => setArmed(true), 40); return () => clearTimeout(t); }, [run]);
  return (
    <SimShell
      title="Tensile / Elongation (UTM)"
      Icon={Maximize2}
      accent="#6d3bd4"
      onRun={() => setRun((r) => r + 1)}
      badges={["controlled record", "calibration required", "traceable sample"]}
      result={
        <div>
          <p className="text-[12px] leading-relaxed text-ink-muted">
            A dumbbell specimen is pulled at a controlled rate while force and stretch are recorded, giving a conceptual
            stress-strain curve. Tensile strength is the peak; elongation is the stretch at break.
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <span className="chip border-blue-400/30 text-blue-300">tensile strength: pass demo</span>
            <span className="chip border-blue-400/30 text-blue-300">elongation: pass demo</span>
            <span className="chip border-line text-ink-faint">ASTM D412 / ISO 37</span>
          </div>
          <p className="mt-1.5 text-[10.5px] text-ink-faint">Demo status only, not a measured value.</p>
        </div>
      }
    >
      <div className="w-full">
        {/* stretching dumbbell */}
        <svg viewBox="0 0 160 40" className="mx-auto mb-2 w-full max-w-[150px]">
          <g style={{ transform: armed ? "scaleX(1.7)" : "scaleX(1)", transformOrigin: "80px 20px", transition: "transform 1.6s ease-in" }}>
            <path d="M20 12 h26 v-5 h6 v26 h-6 v-5 H20 v5 h-6 V12 h6 z M114 12 h26 v-5 h6 v26 h-6 v-5 h-26 v5 h-6 V12 h6 z" fill="#2b2722" />
            <rect x="46" y="14" width="68" height="12" rx="3" fill="#1b1714" />
          </g>
        </svg>
        <svg viewBox={`0 0 ${SS_W} ${SS_H}`} className="w-full">
          <line x1={SS_PAD} y1={SS_H - SS_PAD} x2={SS_W - SS_PAD} y2={SS_H - SS_PAD} stroke="rgba(31, 27, 23,0.20)" />
          <line x1={SS_PAD} y1={SS_PAD} x2={SS_PAD} y2={SS_H - SS_PAD} stroke="rgba(31, 27, 23,0.20)" />
          <text x={SS_PAD} y={SS_H - 8} fill="#8a8073" fontFamily="monospace" fontSize="8">strain →</text>
          <path d={ssD} fill="none" stroke="#6d3bd4" strokeWidth="2.2" pathLength={1}
            style={{ strokeDasharray: 1, strokeDashoffset: armed ? 0 : 1, transition: armed ? "stroke-dashoffset 1.8s ease-in" : "none" }} />
          {armed && <circle cx={SS_PAD + ssPoints[ssPoints.length - 1].x * (SS_W - 2 * SS_PAD)} cy={SS_H - SS_PAD - ssPoints[ssPoints.length - 1].y * (SS_H - 2 * SS_PAD)} r="3.5" fill="#d8a93a" />}
        </svg>
      </div>
    </SimShell>
  );
}

export function HardnessTestSimulator() {
  const [run, setRun] = useState(0);
  const [down, setDown] = useState(false);
  useEffect(() => { setDown(false); const t = setTimeout(() => setDown(true), 60); return () => clearTimeout(t); }, [run]);
  return (
    <SimShell
      title="Durometer hardness"
      Icon={Gauge}
      accent="#15803d"
      onRun={() => setRun((r) => r + 1)}
      badges={["controlled record", "calibration required"]}
      result={
        <div>
          <p className="text-[12px] leading-relaxed text-ink-muted">
            A durometer indenter contacts the sample surface and reads resistance to indentation. Hardness is a quick,
            common check that also helps flag cure drift.
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <span className="chip border-pass/30 text-pass">hardness: within target (demo)</span>
            <span className="chip border-line text-ink-faint">ASTM D2240 / ISO 7619</span>
          </div>
          <p className="mt-1.5 text-[10.5px] text-ink-faint">Demo status only, not a measured value.</p>
        </div>
      }
    >
      <svg viewBox="0 0 120 110" className="w-full max-w-[120px]">
        <rect x="50" y="6" width="20" height="10" fill="#393129" rx="2" />
        <g style={{ transform: down ? "translateY(40px)" : "translateY(0)", transition: "transform 1s ease-in-out" }}>
          <rect x="56" y="16" width="8" height="34" fill="#a89c86" />
          <path d="M56 50 l4 8 l4 -8 z" fill="#ddd1ba" />
        </g>
        <rect x="20" y="88" width="80" height="16" rx="3" fill="#1b1714" />
        <text x="60" y="100" fill="#8a8073" fontFamily="monospace" fontSize="7" textAnchor="middle">rubber sample</text>
      </svg>
    </SimShell>
  );
}

export function CompressionSetSimulator() {
  const [run, setRun] = useState(0);
  const [phase, setPhase] = useState<"idle" | "press" | "recover">("idle");
  useEffect(() => {
    setPhase("idle");
    const t1 = setTimeout(() => setPhase("press"), 80);
    const t2 = setTimeout(() => setPhase("recover"), 1400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [run]);
  const sy = phase === "press" ? 0.5 : phase === "recover" ? 0.82 : 1;
  return (
    <SimShell
      title="Compression set"
      Icon={ArrowDownToLine}
      accent="#b8860b"
      onRun={() => setRun((r) => r + 1)}
      badges={["controlled record", "traceable sample"]}
      result={
        <div>
          <p className="text-[12px] leading-relaxed text-ink-muted">
            A specimen is held compressed, then released; how much height it recovers indicates compression set. Sealing
            and gasket applications care about this because permanent set means lost sealing force.
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <span className="chip border-molten-400/30 text-molten-300">recovery: review needed (demo)</span>
            <span className="chip border-line text-ink-faint">ASTM D395 / ISO 815</span>
          </div>
          <p className="mt-1.5 text-[10.5px] text-ink-faint">Demo status only, not a measured value.</p>
        </div>
      }
    >
      <svg viewBox="0 0 120 110" className="w-full max-w-[120px]">
        <rect x="20" y="8" width="80" height="10" rx="2" fill="#393129" />
        <rect x="20" y="92" width="80" height="10" rx="2" fill="#393129" />
        {/* specimen: full height 44, base sits on bottom platen (y=92), scales from base */}
        <g style={{ transform: `scaleY(${sy})`, transformOrigin: "60px 92px", transition: "transform 1.1s ease-in-out" }}>
          <rect x="40" y="48" width="40" height="44" rx="4" fill="#1b1714" />
        </g>
        <text x="60" y="40" fill="#8a8073" fontFamily="monospace" fontSize="7" textAnchor="middle">{phase}</text>
      </svg>
    </SimShell>
  );
}
