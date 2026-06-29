"use client";

import { useState } from "react";
import { labRoles } from "@/lib/labRoles";
import type { LabVestColor } from "@/types/qaLab";
import { HardHat, Eye, FileText, Gavel, MapPin } from "lucide-react";

const VEST: Record<LabVestColor, string> = {
  blue: "#5d75f0", green: "#22c55e", violet: "#6757f5", steel: "#94a3b8", amber: "#f59e0b", orange: "#ea8d04",
};

export function LabRolePanel() {
  const [id, setId] = useState(labRoles[0]?.id);
  const role = labRoles.find((r) => r.id === id) ?? labRoles[0];
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[280px_minmax(0,1fr)]">
      <div className="flex flex-col gap-1.5">
        {labRoles.map((r) => {
          const on = r.id === role.id;
          return (
            <button key={r.id} onClick={() => setId(r.id)} aria-pressed={on}
              className={`interactive-card flex items-center gap-2.5 px-3 py-2 text-left ${on ? "border-line-strong bg-base-800/60" : ""}`}>
              <span className="h-6 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: VEST[r.vestColor] }} />
              <span className="truncate text-[13px] font-medium text-ink">{r.displayName}</span>
            </button>
          );
        })}
      </div>
      <div className="panel-raised p-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line" style={{ backgroundColor: `${VEST[role.vestColor]}22` }}>
            <HardHat className="h-4.5 w-4.5" style={{ color: VEST[role.vestColor] }} />
          </span>
          <h3 className="font-display text-[16px] font-semibold text-ink">{role.displayName}</h3>
        </div>
        <p className="mt-2 text-[12.5px] leading-relaxed text-ink-muted">{role.purpose}</p>
        <div className="mt-3 flex flex-col gap-2.5">
          <Row icon={Eye} label="Checks" text={role.whatTheyCheck} />
          <Row icon={Gavel} label="Decision authority" text={role.decisionAuthority} />
          <div className="rounded-lg border border-line bg-base-850/40 px-3 py-2">
            <span className="flex items-center gap-1.5 label-mono text-[10px] text-violet-300"><FileText className="h-3 w-3" /> Records created</span>
            <div className="mt-1 flex flex-wrap gap-1">{role.recordsCreated.map((r) => <span key={r} className="chip border-line text-ink-muted">{r}</span>)}</div>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="flex items-center gap-1 label-mono text-[10px] text-ink-faint"><MapPin className="h-3 w-3" /> Zones:</span>
            {role.relatedZones.map((z) => <span key={z} className="chip border-line text-ink-muted">{z}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ icon: Icon, label, text }: { icon: typeof Eye; label: string; text: string }) {
  return (
    <div className="rounded-lg border border-line bg-base-850/40 px-3 py-2">
      <span className="flex items-center gap-1.5 label-mono text-[10px] text-violet-300"><Icon className="h-3 w-3" /> {label}</span>
      <p className="mt-1 text-[12px] leading-relaxed text-ink-muted">{text}</p>
    </div>
  );
}
