import type { FactoryRole, VestColor } from "@/types/factoryLife";
import { processSteps } from "@/lib/processData";
import { Eye, FileText, ShieldCheck, FileSignature, HardHat } from "lucide-react";

export const VEST_SWATCH: Record<VestColor, string> = {
  amber: "#f59e0b",
  blue: "#5d75f0",
  green: "#22c55e",
  orange: "#ea8d04",
  violet: "#6757f5",
  steel: "#94a3b8",
};

function stationTitle(id: string): string {
  return processSteps.find((s) => s.id === id)?.title ?? id;
}

export function RolePanel({ role }: { role: FactoryRole }) {
  const rows = [
    { Icon: Eye, label: "Monitors", text: role.whatTheyMonitor },
    { Icon: FileText, label: "Needs to know", text: role.infoNeeded },
    { Icon: ShieldCheck, label: "Quality & safety", text: role.qualitySafetyConcern },
    { Icon: FileSignature, label: "RFQ connection", text: role.rfqConnection },
  ];
  return (
    <div className="panel-raised p-4">
      <div className="flex items-start gap-3">
        <span
          className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line"
          style={{ backgroundColor: `${VEST_SWATCH[role.vestColor]}22` }}
        >
          <HardHat className="h-4.5 w-4.5" style={{ color: VEST_SWATCH[role.vestColor] }} />
        </span>
        <div className="min-w-0">
          <h3 className="font-display text-[16px] font-semibold leading-tight text-ink">{role.displayName}</h3>
          <p className="mt-1 text-[12.5px] leading-relaxed text-ink-muted">{role.purpose}</p>
        </div>
      </div>

      <dl className="mt-3 flex flex-col gap-2.5">
        {rows.map((r) => {
          const Icon = r.Icon;
          return (
            <div key={r.label} className="rounded-lg border border-line bg-base-850/40 px-3 py-2">
              <dt className="flex items-center gap-1.5 label-mono text-[10px] text-violet-300">
                <Icon className="h-3 w-3" /> {r.label}
              </dt>
              <dd className="mt-1 text-[12px] leading-relaxed text-ink-muted">{r.text}</dd>
            </div>
          );
        })}
      </dl>

      {role.relatedStations.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          <span className="label-mono text-[10px] text-ink-faint">Stations:</span>
          {role.relatedStations.map((s) => (
            <span key={s} className="chip border-line text-ink-muted">
              {stationTitle(s)}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
