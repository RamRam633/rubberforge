"use client";

import { factoryLayersById } from "@/lib/factoryLayers";
import { stationLayerContent } from "@/lib/stationLayerContent";
import type { FactoryLayerId, LayerIcon } from "@/types/factoryPlatform";
import type { StationId } from "@/types/simulation";
import { Route, FlaskConical, Shield, Truck, Users, Wrench, FileText, ClipboardList, ArrowRight, type LucideIcon } from "lucide-react";
import Link from "next/link";

const ICONS: Record<LayerIcon, LucideIcon> = {
  route: Route,
  flask: FlaskConical,
  shield: Shield,
  truck: Truck,
  users: Users,
  wrench: Wrench,
  file: FileText,
  clipboard: ClipboardList,
};

// Where each layer's "go deeper" link points.
const LAYER_LINK: Record<FactoryLayerId, { href: string; label: string }> = {
  process: { href: "/process", label: "Process library" },
  chemistry: { href: "/chemistry", label: "Chemistry layer" },
  quality: { href: "/quality-lab", label: "Quality lab" },
  "supply-chain": { href: "/factory-intelligence", label: "Supply chain" },
  people: { href: "/simulator", label: "Factory crew" },
  maintenance: { href: "/factory-intelligence", label: "Equipment" },
  documentation: { href: "/quality-lab", label: "Traceability" },
  rfq: { href: "/outputs", label: "Factory outputs" },
};

/**
 * Layer-aware inspector for the active station in the command center. The same
 * station reads differently through each lens (process, chemistry, quality,
 * supply chain, people, maintenance, documentation, RFQ).
 */
export function StationLayerPanel({ stationId, layer }: { stationId: StationId; layer: FactoryLayerId }) {
  const meta = factoryLayersById[layer];
  const cell = stationLayerContent[stationId]?.[layer];
  const Icon = ICONS[meta.icon];
  const link = LAYER_LINK[layer];

  if (!cell) return null;

  return (
    <div className="panel flex h-full flex-col p-4">
      <div className="flex items-center gap-2">
        <span
          className="flex h-7 w-7 items-center justify-center rounded-lg border"
          style={{ borderColor: `${meta.accent}55`, backgroundColor: `${meta.accent}1a` }}
        >
          <Icon className="h-4 w-4" style={{ color: meta.accent }} />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em]" style={{ color: meta.accent }}>
          {meta.name} layer
        </span>
      </div>

      <h3 className="mt-2.5 font-display text-[16px] font-semibold leading-tight text-ink">{cell.headline}</h3>

      <ul className="mt-2.5 flex flex-col gap-2">
        {cell.points.map((pt, i) => (
          <li key={i} className="flex items-start gap-2 text-[12.5px] leading-relaxed text-ink-muted">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: meta.accent }} />
            {pt}
          </li>
        ))}
      </ul>

      <div className="mt-3 border-t border-line pt-2.5">
        <span className="label-mono text-[9.5px] text-ink-faint">This layer shows</span>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {meta.stationPanelShows.map((s) => (
            <span key={s} className="chip border-line text-ink-faint">
              {s}
            </span>
          ))}
        </div>
      </div>

      <Link
        href={link.href}
        className="mt-auto inline-flex items-center gap-1 pt-3 text-[12px] hover:opacity-80"
        style={{ color: meta.accent }}
      >
        Open {link.label} <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
