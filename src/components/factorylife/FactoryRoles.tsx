"use client";

import { useState } from "react";
import { factoryRoles } from "@/lib/factoryRoles";
import { RolePanel, VEST_SWATCH } from "./RolePanel";

export function FactoryRoles() {
  const [selectedId, setSelectedId] = useState(factoryRoles[0]?.id);
  const selected = factoryRoles.find((r) => r.id === selectedId) ?? factoryRoles[0];

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[300px_minmax(0,1fr)]">
      <div className="flex flex-col gap-1.5">
        <p className="mb-1 text-[12.5px] leading-relaxed text-ink-muted">
          The people who make a rubber line run. Each role is shown conceptually, with what they watch for and how
          their judgment connects to a credible quote.
        </p>
        {factoryRoles.map((r) => {
          const on = r.id === selected.id;
          return (
            <button
              key={r.id}
              onClick={() => setSelectedId(r.id)}
              className={`interactive-card flex items-center gap-2.5 px-3 py-2 text-left ${
                on ? "border-line-strong bg-base-800/60" : ""
              }`}
              aria-pressed={on}
            >
              <span
                className="h-6 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: VEST_SWATCH[r.vestColor] }}
              />
              <span className="min-w-0">
                <span className="block text-[13px] font-medium leading-tight text-ink">{r.displayName}</span>
                <span className="block truncate text-[11px] text-ink-faint">{r.area.replace(/-/g, " ")}</span>
              </span>
            </button>
          );
        })}
      </div>

      <RolePanel role={selected} />
    </div>
  );
}
