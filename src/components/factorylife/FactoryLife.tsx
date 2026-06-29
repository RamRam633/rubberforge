"use client";

import { useState } from "react";
import { FactoryZoneMap } from "./FactoryZoneMap";
import { FactoryRoles } from "./FactoryRoles";
import { FactoryWalkthroughMode } from "./FactoryWalkthroughMode";
import { ProcessRouteSelector } from "./ProcessRouteSelector";
import { FactoryBoard } from "./FactoryBoard";
import { FactoryAuditMode } from "./FactoryAuditMode";
import { FactoryMaintenance } from "./FactoryMaintenance";
import { Map, Users, Film, Route, LayoutGrid, ClipboardCheck, Wrench, type LucideIcon } from "lucide-react";

type TabId = "zones" | "crew" | "walkthrough" | "routes" | "board" | "audit" | "maintenance";

const TABS: { id: TabId; label: string; Icon: LucideIcon; blurb: string }[] = [
  { id: "zones", label: "Factory zones", Icon: Map, blurb: "Walk the plant, zone by zone." },
  { id: "crew", label: "The crew", Icon: Users, blurb: "Who runs the line, and what they watch." },
  { id: "walkthrough", label: "Walkthrough", Icon: Film, blurb: "A guided ten-stop floor tour." },
  { id: "routes", label: "Process routes", Icon: Route, blurb: "One foundation, many products." },
  { id: "board", label: "Production board", Icon: LayoutGrid, blurb: "Shift status and the digital thread." },
  { id: "audit", label: "Factory audit", Icon: ClipboardCheck, blurb: "Score conceptual readiness." },
  { id: "maintenance", label: "Maintenance", Icon: Wrench, blurb: "Machine health and upkeep themes." },
];

export function FactoryLife() {
  const [tab, setTab] = useState<TabId>("zones");
  const active = TABS.find((t) => t.id === tab) ?? TABS[0];

  return (
    <section className="mx-auto max-w-[1600px] px-3 pb-12 sm:px-5">
      <div className="mb-3">
        <span className="kicker-violet">Inside the virtual factory</span>
        <h2 className="mt-1 font-display text-xl font-semibold text-ink sm:text-[22px]">A working factory, not just a line</h2>
        <p className="mt-1 max-w-3xl text-[13px] leading-relaxed text-ink-muted">
          The 3D simulation above runs the rubber-sheet line. This is the world around it: the zones, the people, the
          routes, the shift board, and the readiness checks that make it feel like a real plant. Everything here is
          conceptual and educational, framed to show how a credible quote comes together.
        </p>
      </div>

      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Factory life sections"
        className="mb-4 flex flex-wrap gap-1.5 border-b border-line pb-3"
      >
        {TABS.map((t) => {
          const on = t.id === tab;
          const Icon = t.Icon;
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={on}
              onClick={() => setTab(t.id)}
              className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-[12.5px] font-medium transition ${
                on
                  ? "border-violet-500 bg-violet-500/15 text-violet-200"
                  : "border-line text-ink-muted hover:border-line-strong hover:text-ink"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="mb-3 label-mono text-[10px] text-ink-faint">{active.blurb}</div>

      <div role="tabpanel">
        {tab === "zones" && <FactoryZoneMap />}
        {tab === "crew" && <FactoryRoles />}
        {tab === "walkthrough" && <FactoryWalkthroughMode />}
        {tab === "routes" && <ProcessRouteSelector />}
        {tab === "board" && <FactoryBoard />}
        {tab === "audit" && <FactoryAuditMode />}
        {tab === "maintenance" && <FactoryMaintenance />}
      </div>
    </section>
  );
}
