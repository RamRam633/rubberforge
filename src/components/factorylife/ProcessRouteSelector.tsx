"use client";

import { useState } from "react";
import { routeVariants } from "@/lib/routeVariants";
import type { RouteAvailability } from "@/types/factoryLife";
import { RouteVariantPreview } from "./RouteVariantPreview";
import { Route } from "lucide-react";

const AVAIL: Record<RouteAvailability, { label: string; cls: string }> = {
  full: { label: "Full 3D route", cls: "border-pass/40 bg-pass/10 text-pass" },
  preview: { label: "Route preview", cls: "border-molten-400/40 bg-molten-400/10 text-molten-300" },
  future: { label: "Future module", cls: "border-line text-ink-faint" },
};

const ORDER: RouteAvailability[] = ["full", "preview", "future"];

export function ProcessRouteSelector() {
  const sorted = [...routeVariants].sort((a, b) => ORDER.indexOf(a.availability) - ORDER.indexOf(b.availability));
  const [activeId, setActiveId] = useState(sorted[0]?.id);
  const active = sorted.find((v) => v.id === activeId) ?? sorted[0];

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[320px_minmax(0,1fr)]">
      <div className="flex flex-col gap-1.5">
        <p className="mb-1 text-[12.5px] leading-relaxed text-ink-muted">
          One foundation, many products. The rubber-sheet route is fully simulated in 3D. Related products are shown
          as preliminary previews while dedicated modules are built.
        </p>
        {sorted.map((v) => {
          const on = v.id === active.id;
          const a = AVAIL[v.availability];
          return (
            <button
              key={v.id}
              onClick={() => setActiveId(v.id)}
              className={`interactive-card flex flex-col gap-1 px-3 py-2.5 text-left ${
                on ? "border-line-strong bg-base-800/60" : ""
              }`}
              aria-pressed={on}
            >
              <span className="flex items-center gap-2">
                <Route className="h-3.5 w-3.5 shrink-0 text-violet-300" />
                <span className="text-[12.5px] font-medium leading-tight text-ink">{v.name}</span>
              </span>
              <span className={`chip w-fit ${a.cls}`}>{a.label}</span>
            </button>
          );
        })}
      </div>

      <div className="lg:sticky lg:top-4 lg:self-start">
        <RouteVariantPreview variant={active} />
      </div>
    </div>
  );
}
