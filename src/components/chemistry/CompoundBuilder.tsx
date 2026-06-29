"use client";

import { useMemo, useState } from "react";
import type { CompoundConfig, Level, ProtectionEmphasis, CureChoice } from "@/types/chemistry";
import { computeTendencies } from "@/lib/materialBehaviorRules";
import { polymerFamilies } from "@/lib/materialFamilies";
import { BandMeter } from "@/components/platform/BandMeter";
import { CrosslinkDiagram } from "./CrosslinkDiagram";
import { FlaskConical, Lightbulb, ShieldAlert } from "lucide-react";

const LEVELS: Level[] = ["low", "medium", "high"];
const PROTECTION: { id: ProtectionEmphasis; label: string }[] = [
  { id: "weather-ozone", label: "Weather / ozone" },
  { id: "heat-aging", label: "Heat aging" },
  { id: "oil-fuel", label: "Oil / fuel" },
  { id: "abrasion", label: "Abrasion" },
  { id: "food-potable", label: "Food / potable (review)" },
];
const CURES: { id: CureChoice; label: string }[] = [
  { id: "sulfur-style", label: "Sulfur-style" },
  { id: "peroxide-style", label: "Peroxide-style" },
  { id: "special-system", label: "Special system" },
];

export function CompoundBuilder() {
  const [config, setConfig] = useState<CompoundConfig>({
    polymerId: "epdm",
    fillerLevel: "medium",
    oilLevel: "medium",
    protection: "weather-ozone",
    cure: "sulfur-style",
  });
  const set = <K extends keyof CompoundConfig>(k: K, v: CompoundConfig[K]) =>
    setConfig((c) => ({ ...c, [k]: v }));

  const t = useMemo(() => computeTendencies(config), [config]);
  const density = config.cure === "peroxide-style" ? "high" : config.fillerLevel === "high" ? "high" : "medium";

  return (
    <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
      {/* Controls */}
      <div className="panel p-4">
        <div className="flex items-center gap-1.5">
          <FlaskConical className="h-4 w-4 text-violet-300" />
          <span className="label-mono text-violet-300">Conceptual compound builder</span>
        </div>
        <p className="mt-1 text-[11.5px] leading-relaxed text-ink-faint">
          A learning tool that shows qualitative tendencies. It never outputs a recipe.
        </p>

        <div className="mt-3 space-y-3">
          <Control label="Base polymer">
            <select
              value={config.polymerId}
              onChange={(e) => set("polymerId", e.target.value)}
              className="w-full rounded-lg border border-line bg-base-850/60 px-3 py-2 text-sm text-ink focus:border-violet-500/50 focus:outline-none"
            >
              {polymerFamilies.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.displayName} ({p.abbreviation})
                </option>
              ))}
            </select>
          </Control>

          <Control label="Filler level">
            <Segmented options={LEVELS} value={config.fillerLevel} onChange={(v) => set("fillerLevel", v)} />
          </Control>
          <Control label="Oil / plasticizer level">
            <Segmented options={LEVELS} value={config.oilLevel} onChange={(v) => set("oilLevel", v)} />
          </Control>
          <Control label="Protection emphasis">
            <select
              value={config.protection}
              onChange={(e) => set("protection", e.target.value as ProtectionEmphasis)}
              className="w-full rounded-lg border border-line bg-base-850/60 px-3 py-2 text-sm text-ink focus:border-violet-500/50 focus:outline-none"
            >
              {PROTECTION.map((p) => (
                <option key={p.id} value={p.id}>{p.label}</option>
              ))}
            </select>
          </Control>
          <Control label="Cure concept">
            <Segmented
              options={CURES.map((c) => c.id)}
              labels={CURES.map((c) => c.label)}
              value={config.cure}
              onChange={(v) => set("cure", v)}
            />
          </Control>
        </div>
      </div>

      {/* Output */}
      <div className="panel p-4">
        <div className="flex items-center justify-between">
          <span className="label-mono">Qualitative tendencies</span>
          <span className="chip border-violet-500/25 text-violet-300">Educational estimate</span>
        </div>

        <div className="mt-3 grid gap-x-5 gap-y-1.5 sm:grid-cols-2">
          <BandMeter label="Hardness" band={t.hardness} />
          <BandMeter label="Flexibility" band={t.flexibility} />
          <BandMeter label="Abrasion" band={t.abrasion} />
          <BandMeter label="Processability" band={t.processability} />
          <BandMeter label="Weather resistance" band={t.weatherResistance} />
          <BandMeter label="Oil resistance" band={t.oilResistance} />
          <BandMeter label="Compression-set risk" band={t.compressionSetRisk} />
          <BandMeter label="Cost tier" band={t.costTier} />
        </div>

        <div className="mt-3 rounded-lg border border-line bg-base-850/40 p-2">
          <CrosslinkDiagram density={density} className="h-[100px] w-full" label="conceptual cured network" />
        </div>

        <div className="mt-3">
          <div className="mb-1 flex items-center gap-1.5">
            <Lightbulb className="h-3.5 w-3.5 text-molten-300" />
            <span className="label-mono text-molten-300">Notes</span>
          </div>
          <ul className="space-y-1">
            {t.notes.map((n) => (
              <li key={n} className="flex items-start gap-2 text-[12px] leading-relaxed text-ink-muted">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-molten-400" />
                {n}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-3 flex items-start gap-2 rounded-lg border border-warn/25 bg-warn/[0.05] px-3 py-2.5">
          <ShieldAlert className="mt-0.5 h-3.5 w-3.5 shrink-0 text-warn" />
          <p className="text-[11.5px] leading-relaxed text-ink-muted">
            Conceptual compound balance, not a production formulation. No phr, cure parameters, or guaranteed
            properties are implied. Requires lab validation and technical review.
          </p>
        </div>
      </div>
    </div>
  );
}

function Control({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="label-mono mb-1.5">{label}</div>
      {children}
    </div>
  );
}

function Segmented<T extends string>({
  options,
  labels,
  value,
  onChange,
}: {
  options: T[];
  labels?: string[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex items-center gap-0.5 rounded-lg border border-line bg-base-850/50 p-0.5">
      {options.map((o, i) => (
        <button
          key={o}
          onClick={() => onChange(o)}
          className={`flex-1 rounded-md px-2 py-1.5 text-[12px] capitalize transition ${
            value === o ? "bg-base-600 text-ink" : "text-ink-muted hover:text-ink"
          }`}
        >
          {labels ? labels[i] : o}
        </button>
      ))}
    </div>
  );
}
