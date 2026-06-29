"use client";

import Link from "next/link";
import type { MaterialFamily } from "@/types/platform";
import { BandMeter, CostTierBadge } from "./BandMeter";
import {
  PolymerChainIcon, PolarityBadge, SaturationBadge, CureCurveMini, CrosslinkNetworkVisual,
  MaterialCompatibilityChip, CHEM,
} from "@/components/chemistry/ChemistryKit";
import { ArrowRight, FlaskConical, ThumbsUp, ThumbsDown, FileText } from "lucide-react";

export function MaterialCard({ material, onOpen }: { material: MaterialFamily; onOpen: () => void }) {
  const isPolymer = material.kind === "polymer";
  return (
    <div className="panel group flex flex-col p-4 transition hover:border-line-strong">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-display text-[17px] font-semibold leading-tight text-ink">{material.displayName}</h3>
            <span className="chip shrink-0 border-violet-500/30 text-violet-300">{material.abbreviation}</span>
          </div>
          <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-ink-faint">
            <PolymerChainIcon /> {material.polymerFamily}
          </div>
        </div>
        <span
          className={`chip shrink-0 ${
            isPolymer ? "border-violet-500/30 text-violet-300" : "border-steel-400/30 text-steel-300"
          }`}
        >
          {isPolymer ? "Polymer" : "Category"}
        </span>
      </div>

      <p className="mt-2.5 text-[12.5px] leading-relaxed text-ink-muted">{material.safeExplanation}</p>

      {/* Chemistry character */}
      {material.kind === "polymer" && (
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          <PolarityBadge polarity={material.polarity} />
          <SaturationBadge saturation={material.saturation} />
        </div>
      )}

      {/* Resistance bands */}
      <div className="mt-3 space-y-1.5 rounded-lg border border-line bg-base-850/40 p-2.5">
        <BandMeter label="Weather / ozone" band={material.weatherResistance} />
        <BandMeter label="Oil / fuel" band={material.oilResistance} />
        <BandMeter label="Water" band={material.waterResistance} />
        <BandMeter label="Abrasion" band={material.abrasionResistance} />
        <BandMeter label="Temperature" band={material.temperatureBand} />
      </div>

      {/* Best / weak */}
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div>
          <div className="mb-1 flex items-center gap-1 text-[10px] uppercase tracking-wide text-pass">
            <ThumbsUp className="h-3 w-3" /> Best for
          </div>
          <ul className="space-y-0.5">
            {material.bestEnvironments.slice(0, 3).map((b) => (
              <li key={b} className="text-[11px] leading-snug text-ink-muted">{b}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-1 flex items-center gap-1 text-[10px] uppercase tracking-wide text-fail">
            <ThumbsDown className="h-3 w-3" /> Not ideal for
          </div>
          <ul className="space-y-0.5">
            {material.weakEnvironments.slice(0, 3).map((w) => (
              <li key={w} className="text-[11px] leading-snug text-ink-muted">{w}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <CostTierBadge tier={material.costTier} />
        {material.productForms.slice(0, 3).map((f) => (
          <span key={f} className="chip">{f}</span>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between gap-2 border-t border-line pt-3">
        <button onClick={onOpen} className="inline-flex items-center gap-1.5 text-[12px] font-medium text-violet-300 hover:text-violet-200">
          <FlaskConical className="h-3.5 w-3.5" /> Chemistry & questions
        </button>
        <Link
          href={`/quote?material=${material.id}`}
          className="inline-flex items-center gap-1 text-[12px] font-medium text-molten-300 hover:text-molten-200"
        >
          Quote <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

// Full detail, rendered inside a modal on the Materials page.
export function MaterialDetail({ material }: { material: MaterialFamily }) {
  return (
    <div className="space-y-4">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="font-display text-2xl font-semibold text-ink">{material.displayName}</h2>
          <span className="chip border-violet-500/30 text-violet-300">{material.abbreviation}</span>
          <CostTierBadge tier={material.costTier} />
        </div>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{material.safeExplanation}</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="panel-tight space-y-1.5 p-3">
          <div className="label-mono mb-1">Resistance profile</div>
          <BandMeter label="Weather / ozone" band={material.weatherResistance} />
          <BandMeter label="Oil / fuel" band={material.oilResistance} />
          <BandMeter label="Water" band={material.waterResistance} />
          <BandMeter label="Chemical" band={material.chemicalResistance} />
          <BandMeter label="Abrasion" band={material.abrasionResistance} />
          <BandMeter label="Temperature" band={material.temperatureBand} />
          <p className="pt-1 text-[11px] leading-relaxed text-ink-faint">{material.temperatureNote}</p>
        </div>

        <div className="panel-tight p-3">
          <div className="mb-1 flex items-center justify-between gap-2">
            <span className="flex items-center gap-1.5">
              <FlaskConical className="h-3.5 w-3.5 text-violet-300" />
              <span className="label-mono text-violet-300">Chemistry</span>
            </span>
            <CrosslinkNetworkVisual size={28} />
          </div>
          <p className="text-[12.5px] leading-relaxed text-ink-muted">{material.chemicalCharacter}</p>
          {material.kind === "polymer" && (
            <div className="mt-2 flex flex-wrap items-center gap-1.5">
              <PolarityBadge polarity={material.polarity} />
              <SaturationBadge saturation={material.saturation} />
            </div>
          )}
          <div className="mt-2 flex items-center gap-2 rounded-lg border border-line bg-base-950/30 px-2.5 py-1.5">
            <CureCurveMini />
            <span className="text-[11px] leading-snug text-ink-faint">
              <span style={{ color: CHEM.cure }}>Cure concept. </span>{material.cureConcept}
            </span>
          </div>
          <p className="mt-2 text-[12px] leading-relaxed text-ink-muted">{material.whyItBehaves}</p>
        </div>
      </div>

      {material.kind === "polymer" && (
        <div className="panel-tight p-3">
          <div className="label-mono mb-2">Compatibility at a glance</div>
          <div className="flex flex-wrap gap-1.5">
            <MaterialCompatibilityChip label="Weather / ozone" band={material.weatherResistance} />
            <MaterialCompatibilityChip label="Oil / fuel" band={material.oilResistance} />
            <MaterialCompatibilityChip label="Water" band={material.waterResistance} />
            <MaterialCompatibilityChip label="Chemical" band={material.chemicalResistance} />
            <MaterialCompatibilityChip label="Abrasion" band={material.abrasionResistance} />
            <MaterialCompatibilityChip label="Temperature" band={material.temperatureBand} />
          </div>
          <p className="mt-2 text-[10.5px] leading-relaxed text-ink-faint">
            Qualitative and preliminary. Final compatibility requires technical review against the specific media,
            concentration, and temperature.
          </p>
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        <DetailList title="Strengths" items={material.strengths} tone="pass" />
        <DetailList title="Limitations" items={material.limitations} tone="fail" />
        <DetailList title="Common applications" items={material.applications} />
        <DetailList title="Common product forms" items={material.productForms} />
      </div>

      <div className="panel-tight p-3">
        <div className="mb-1.5 flex items-center gap-1.5">
          <FileText className="h-3.5 w-3.5 text-molten-300" />
          <span className="label-mono text-molten-300">Quote questions to expect</span>
        </div>
        <ul className="space-y-1">
          {material.quoteQuestions.map((q) => (
            <li key={q} className="flex items-start gap-2 text-[12.5px] leading-relaxed text-ink-muted">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-molten-400" />
              {q}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="panel-tight p-3">
          <div className="label-mono mb-1">Compatibility notes</div>
          <p className="text-[12px] leading-relaxed text-ink-muted">{material.compatibilityNotes}</p>
        </div>
        <div className="panel-tight p-3">
          <div className="label-mono mb-1">Manufacturing notes</div>
          <p className="text-[12px] leading-relaxed text-ink-muted">{material.manufacturingNotes}</p>
        </div>
      </div>

      <div className="rounded-lg border border-warn/25 bg-warn/[0.05] px-3 py-2.5">
        <span className="text-[12px] leading-relaxed text-ink-muted">
          <span className="font-medium text-warn">Technical review. </span>
          {material.cautionNotes} Final material selection always requires technical review against the specific application.
        </span>
      </div>

      <Link href={`/quote?material=${material.id}`} className="btn-ghost w-full justify-center text-sm">
        Use {material.abbreviation} in an RFQ package <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function DetailList({ title, items, tone }: { title: string; items: string[]; tone?: "pass" | "fail" }) {
  const dot = tone === "pass" ? "bg-pass" : tone === "fail" ? "bg-fail" : "bg-violet-400";
  return (
    <div className="panel-tight p-3">
      <div className="label-mono mb-1.5">{title}</div>
      <ul className="space-y-1">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-[12px] leading-relaxed text-ink-muted">
            <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${dot}`} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
