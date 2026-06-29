"use client";

import { useState } from "react";
import { maintenanceConcepts } from "@/lib/maintenanceConcepts";
import { processSteps } from "@/lib/processData";
import { MaintenanceStatusBadge } from "./MaintenanceStatusBadge";
import { Wrench, Gauge, Search, Package, AlertOctagon, Activity } from "lucide-react";

function stationTitle(id: string): string {
  return processSteps.find((s) => s.id === id)?.title ?? id;
}

export function FactoryMaintenance() {
  const [activeId, setActiveId] = useState(maintenanceConcepts[0]?.stationId);
  const active = maintenanceConcepts.find((m) => m.stationId === activeId) ?? maintenanceConcepts[0];

  const rows = [
    { Icon: Gauge, label: "Likely wear points", text: active.wearPoint },
    { Icon: Search, label: "Inspection emphasis", text: active.inspectionNeed },
    { Icon: Package, label: "Spare-parts thinking", text: active.sparePartsCategory },
    { Icon: AlertOctagon, label: "Downtime exposure", text: active.downtimeRisk },
    { Icon: Activity, label: "Quality impact", text: active.qualityImpact },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[300px_minmax(0,1fr)]">
      <div className="flex flex-col gap-1.5">
        <p className="mb-1 text-[12.5px] leading-relaxed text-ink-muted">
          Uptime is part of readiness. Each station carries a conceptual health badge and the maintenance themes that
          keep it reliable. These are educational concepts, not service procedures.
        </p>
        {maintenanceConcepts.map((m) => {
          const on = m.stationId === active.stationId;
          return (
            <button
              key={m.stationId}
              onClick={() => setActiveId(m.stationId)}
              className={`interactive-card flex items-center justify-between gap-2 px-3 py-2 text-left ${
                on ? "border-line-strong bg-base-800/60" : ""
              }`}
              aria-pressed={on}
            >
              <span className="truncate text-[12.5px] font-medium text-ink">{stationTitle(m.stationId)}</span>
              <MaintenanceStatusBadge status={m.healthBadge} />
            </button>
          );
        })}
      </div>

      <div className="panel-raised p-4 lg:sticky lg:top-4 lg:self-start">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Wrench className="h-4 w-4 text-violet-300" />
            <h3 className="font-display text-[16px] font-semibold text-ink">{stationTitle(active.stationId)}</h3>
          </div>
          <MaintenanceStatusBadge status={active.healthBadge} />
        </div>
        <p className="mt-2 text-[12.5px] leading-relaxed text-ink-muted">{active.maintenanceConcern}</p>

        <dl className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {rows.map((r) => {
            const Icon = r.Icon;
            return (
              <div key={r.label} className="rounded-lg border border-line bg-base-850/40 px-3 py-2">
                <dt className="flex items-center gap-1.5 label-mono text-[10px] text-violet-300">
                  <Icon className="h-3 w-3" /> {r.label}
                </dt>
                <dd className="mt-1 text-[11.5px] leading-relaxed text-ink-muted">{r.text}</dd>
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
}
