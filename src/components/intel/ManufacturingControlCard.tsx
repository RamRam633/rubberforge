import type { ManufacturingControl } from "@/types/factoryIntel";
import { Gauge, AlertTriangle, Cpu } from "lucide-react";

export function ManufacturingControlCard({ control, stationName }: { control: ManufacturingControl; stationName: string }) {
  return (
    <div className="panel flex h-full flex-col p-4">
      <h3 className="font-display text-[15px] font-semibold text-ink">{stationName}</h3>
      <p className="mt-1 text-[12px] leading-relaxed text-ink-muted">{control.purpose}</p>

      <div className="mt-3 rounded-lg border border-violet-500/25 bg-violet-500/[0.05] p-2.5">
        <div className="mb-1 flex items-center gap-1.5">
          <Gauge className="h-3.5 w-3.5 text-violet-300" />
          <span className="label-mono text-violet-300">Critical to quality</span>
        </div>
        <ul className="space-y-1">
          {control.criticalToQuality.map((c) => (
            <li key={c} className="flex items-start gap-2 text-[12px] leading-snug text-ink-muted">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
              {c}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <Chiplist label="Process inputs" items={control.inputVariables} />
        <Chiplist label="Process outputs" items={control.outputVariables} />
      </div>

      <div className="mt-3 space-y-1.5 text-[11.5px] leading-relaxed text-ink-muted">
        <Line label="Quality checkpoint">{control.qualityCheckpoint}</Line>
        <Line label="Equipment">{control.equipmentDependency}</Line>
        <Line label="Material">{control.materialDependency}</Line>
        <Line label="Traceability">{control.traceabilityNeeds}</Line>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-1.5 border-t border-line pt-2.5 sm:grid-cols-3">
        <Risk icon={<AlertTriangle className="h-3 w-3 text-warn" />} label="Bottleneck">{control.bottleneckRisks}</Risk>
        <Risk icon={<AlertTriangle className="h-3 w-3 text-fail" />} label="Scrap">{control.scrapRisks}</Risk>
        <Risk icon={<Cpu className="h-3 w-3 text-steel-300" />} label="Automation">{control.automationOpportunity}</Risk>
      </div>
    </div>
  );
}

function Chiplist({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <div className="label-mono mb-1">{label}</div>
      <div className="flex flex-wrap gap-1">
        {items.map((i) => (
          <span key={i} className="chip px-1.5 py-0.5 text-[9px] normal-case tracking-normal">{i}</span>
        ))}
      </div>
    </div>
  );
}

function Line({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <p>
      <span className="font-medium text-ink">{label}: </span>
      {children}
    </p>
  );
}

function Risk({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-md border border-line bg-base-850/40 p-2">
      <div className="mb-0.5 flex items-center gap-1 text-[10px] uppercase tracking-wide text-ink-faint">
        {icon} {label}
      </div>
      <p className="text-[11px] leading-snug text-ink-muted">{children}</p>
    </div>
  );
}
