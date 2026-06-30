"use client";

import { Factory, ScanSearch, Layers, FlaskConical, Wrench } from "lucide-react";
import type { ViewMode } from "./FactoryScene3D";

const MODES: { id: ViewMode; label: string; short: string; icon: typeof Factory }[] = [
  { id: "factory", label: "Full Factory", short: "Factory", icon: Factory },
  { id: "closeup", label: "Active Machine", short: "Machine", icon: ScanSearch },
  { id: "cutaway", label: "Material Cutaway", short: "Cutaway", icon: Layers },
  { id: "chemistry", label: "Chemistry View", short: "Chemistry", icon: FlaskConical },
  { id: "intel", label: "Machine Intel", short: "Intel", icon: Wrench },
];

export function ViewModeToggle({ mode, onChange }: { mode: ViewMode; onChange: (m: ViewMode) => void }) {
  return (
    <div className="flex items-center gap-0.5 rounded-lg border border-line bg-base-850/80 p-0.5 backdrop-blur-sm">
      {MODES.map((m) => {
        const Icon = m.icon;
        const active = mode === m.id;
        return (
          <button
            key={m.id}
            onClick={() => onChange(m.id)}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-2 text-[12px] transition ${
              active ? "bg-base-600 text-ink shadow-sm" : "text-ink-muted hover:text-ink"
            }`}
            title={m.label}
          >
            <Icon className="h-3.5 w-3.5" style={{ color: active ? "#ff8c2b" : undefined }} />
            <span className="hidden sm:inline">{m.label}</span>
            <span className="sm:hidden">{m.short}</span>
          </button>
        );
      })}
    </div>
  );
}
