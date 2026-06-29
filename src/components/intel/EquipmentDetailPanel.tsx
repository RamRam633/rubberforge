import type { Equipment } from "@/types/factoryIntel";
import { EQUIPMENT_CATEGORY_LABELS } from "./EquipmentCard";
import { ArrowRight, ShoppingCart, Wrench, AlertTriangle, ShieldAlert, Building2, HelpCircle } from "lucide-react";

export function IntelList({ title, items, tone }: { title: string; items: string[]; tone?: "warn" | "violet" | "molten" }) {
  if (!items || items.length === 0) return null;
  const dot = tone === "warn" ? "bg-warn" : tone === "molten" ? "bg-molten-400" : "bg-violet-400";
  return (
    <div className="panel-tight p-3">
      <div className="label-mono mb-1.5">{title}</div>
      <ul className="space-y-1">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-[12px] leading-relaxed text-ink-muted">
            <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${dot}`} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function EquipmentDetailPanel({ equipment, supplierName }: { equipment: Equipment; supplierName?: string }) {
  return (
    <div className="space-y-4">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="font-display text-2xl font-semibold text-ink">{equipment.name}</h2>
          <span className="chip border-violet-500/30 text-violet-300">{EQUIPMENT_CATEGORY_LABELS[equipment.category] ?? equipment.category}</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{equipment.whatItDoes}</p>
      </div>

      <div className="grid gap-2 sm:grid-cols-3">
        <Mini label="Where in factory">{equipment.whereInFactory}</Mini>
        <Mini label="Input">{equipment.inputState}</Mini>
        <Mini label="Output">{equipment.outputState}</Mini>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <IntelList title="Common variants" items={equipment.variants} />
        <Block icon={<ShoppingCart className="h-3.5 w-3.5 text-molten-300" />} title="Purchasing considerations" items={equipment.purchasingConsiderations} tone="molten" />
        <Block icon={<Wrench className="h-3.5 w-3.5 text-violet-300" />} title="Manufacturing engineering" items={equipment.engineeringConsiderations} tone="violet" />
        <Block icon={<AlertTriangle className="h-3.5 w-3.5 text-warn" />} title="Quality risks" items={equipment.qualityRisks} tone="warn" />
        <IntelList title="Maintenance" items={equipment.maintenanceConsiderations} />
        <Block icon={<HelpCircle className="h-3.5 w-3.5 text-violet-300" />} title="Sourcing questions to ask" items={equipment.sourcingQuestions} tone="violet" />
      </div>

      <div className="rounded-lg border border-line bg-base-850/50 p-3">
        <div className="mb-1.5 flex items-center gap-1.5">
          <Building2 className="h-3.5 w-3.5 text-steel-300" />
          <span className="label-mono text-steel-300">Supplier / OEM category</span>
        </div>
        <p className="text-[12.5px] text-ink-muted">
          {supplierName ?? equipment.supplierCategory}
        </p>
        {equipment.vendorExamples.length > 0 && (
          <>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {equipment.vendorExamples.map((v) => (
                <span key={v} className="chip">{v}</span>
              ))}
            </div>
            <p className="mt-1.5 text-[10.5px] leading-relaxed text-ink-faint">
              Vendor examples are illustrative only and must be verified before sourcing. They are not
              endorsements or guaranteed suppliers.
            </p>
          </>
        )}
      </div>

      <div className="flex items-start gap-2 rounded-lg border border-line bg-base-850/40 px-3 py-2.5">
        <ShieldAlert className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-faint" />
        <p className="text-[11.5px] leading-relaxed text-ink-faint">
          <span className="font-medium text-ink-muted">Safety awareness. </span>
          {equipment.safetyNote}
        </p>
      </div>
    </div>
  );
}

function Mini({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="panel-tight px-3 py-2">
      <div className="label-mono">{label}</div>
      <div className="mt-0.5 text-[12px] leading-snug text-ink-muted">{children}</div>
    </div>
  );
}

function Block({ icon, title, items, tone }: { icon: React.ReactNode; title: string; items: string[]; tone: "warn" | "violet" | "molten" }) {
  if (!items || items.length === 0) return null;
  const border = tone === "warn" ? "border-warn/25" : tone === "molten" ? "border-molten-400/25" : "border-violet-500/25";
  return (
    <div className={`rounded-lg border ${border} bg-base-850/40 p-3`}>
      <div className="mb-1.5 flex items-center gap-1.5">
        {icon}
        <span className="label-mono">{title}</span>
      </div>
      <ul className="space-y-1">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-[12px] leading-relaxed text-ink-muted">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-current opacity-40" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
