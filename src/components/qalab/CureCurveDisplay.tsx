"use client";

import { useEffect, useRef, useState } from "react";
import { mdrCurvePoints, mdrCurveMarkers } from "@/lib/mdrCureCurveDemo";

const W = 360;
const H = 200;
const PAD = 30;

function px(t: number) {
  return PAD + t * (W - 2 * PAD);
}
function py(v: number) {
  return H - PAD - v * (H - 2 * PAD);
}

/**
 * Animated, conceptual MDR cure-curve display. Torque versus time, normalized
 * and unitless. No real values, settings, or formulas.
 */
export function CureCurveDisplay({ runKey = 0 }: { runKey?: number }) {
  const pathRef = useRef<SVGPathElement>(null);
  const [armed, setArmed] = useState(false);

  const d = mdrCurvePoints.map((p, i) => `${i === 0 ? "M" : "L"} ${px(p.t).toFixed(1)} ${py(p.v).toFixed(1)}`).join(" ");

  useEffect(() => {
    setArmed(false);
    const t = setTimeout(() => setArmed(true), 40);
    return () => clearTimeout(t);
  }, [runKey]);

  return (
    <div className="rounded-xl border border-line bg-base-900 p-2">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
        {/* grid */}
        {[0.25, 0.5, 0.75].map((g) => (
          <line key={`h${g}`} x1={PAD} y1={py(g)} x2={W - PAD} y2={py(g)} stroke="rgba(109,59,212,0.08)" />
        ))}
        {/* axes */}
        <line x1={PAD} y1={H - PAD} x2={W - PAD} y2={H - PAD} stroke="rgba(109,59,212,0.25)" />
        <line x1={PAD} y1={PAD} x2={PAD} y2={H - PAD} stroke="rgba(109,59,212,0.25)" />
        <text x={PAD} y={H - 10} fill="#5a35b0" fontFamily="monospace" fontSize="9">time →</text>
        <text x={8} y={PAD + 4} fill="#5a35b0" fontFamily="monospace" fontSize="9" transform={`rotate(-90 12 ${H / 2})`}>torque</text>

        {/* marker guides */}
        {mdrCurveMarkers.map((m) => (
          <line key={m.id} x1={px(m.x)} y1={PAD} x2={px(m.x)} y2={H - PAD} stroke="rgba(184, 134, 11,0.25)" strokeDasharray="3 3" />
        ))}

        {/* curve */}
        <path
          ref={pathRef}
          d={d}
          fill="none"
          stroke="#b8860b"
          strokeWidth="2.4"
          strokeLinecap="round"
          pathLength={1}
          style={{
            strokeDasharray: 1,
            strokeDashoffset: armed ? 0 : 1,
            transition: armed ? "stroke-dashoffset 2.4s ease-in-out" : "none",
          }}
        />
        {/* marker dots */}
        {mdrCurveMarkers.map((m) => {
          const pt = mdrCurvePoints.reduce((a, b) => (Math.abs(b.t - m.x) < Math.abs(a.t - m.x) ? b : a));
          return <circle key={m.id} cx={px(pt.t)} cy={py(pt.v)} r="3.2" fill="#d8a93a" stroke="#1f1b17" strokeWidth="1.5" />;
        })}
      </svg>
      <div className="mt-1 flex flex-wrap gap-1.5 px-1">
        {mdrCurveMarkers.map((m) => (
          <span key={m.id} className="chip border-molten-400/30 text-molten-300">{m.label}</span>
        ))}
      </div>
    </div>
  );
}
