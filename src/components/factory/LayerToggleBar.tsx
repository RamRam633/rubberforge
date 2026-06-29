"use client";

import { factoryLayers } from "@/lib/factoryLayers";
import type { FactoryLayerId, LayerIcon } from "@/types/factoryPlatform";
import { Route, FlaskConical, Shield, Truck, Users, Wrench, FileText, ClipboardList, type LucideIcon } from "lucide-react";

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

/**
 * The factory-layer lens selector for the command center. RFQ is one toggle
 * among the eight, deliberately not the dominant action.
 */
export function LayerToggleBar({
  active,
  onChange,
}: {
  active: string;
  onChange: (id: FactoryLayerId) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Factory layers">
      {factoryLayers.map((l) => {
        const Icon = ICONS[l.icon];
        const on = l.id === active;
        return (
          <button
            key={l.id}
            role="tab"
            aria-selected={on}
            onClick={() => onChange(l.id)}
            title={l.oneLiner}
            className="inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[12px] font-medium transition"
            style={
              on
                ? { borderColor: l.accent, backgroundColor: `${l.accent}1f`, color: l.accent }
                : { borderColor: "rgba(199,210,254,0.18)", color: "#9ea4d6" }
            }
          >
            <Icon className="h-3.5 w-3.5" style={{ color: l.accent }} />
            {l.name}
          </button>
        );
      })}
    </div>
  );
}
