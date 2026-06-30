"use client";

import { useState } from "react";
import { useScrollLock } from "@/lib/useScrollLock";
import { labEquipment } from "@/lib/labEquipment";
import type { LabEquipment as LabEquip, LabEquipCategory } from "@/types/qaLab";
import { LabQMSBadge } from "@/components/qms/QMSBadge";
import { FlaskConical, Wrench, Gauge, Thermometer, Ruler, FileText, X, Microscope, ShieldAlert, type LucideIcon } from "lucide-react";

const CAT: Record<LabEquipCategory, { label: string; accent: string; Icon: LucideIcon }> = {
  "rheology-cure": { label: "Rheology / cure", accent: "#b8860b", Icon: FlaskConical },
  mechanical: { label: "Mechanical", accent: "#6d3bd4", Icon: Wrench },
  physical: { label: "Physical", accent: "#15803d", Icon: Gauge },
  environmental: { label: "Environmental", accent: "#c2900d", Icon: Thermometer },
  dimensional: { label: "Dimensional", accent: "#6d3bd4", Icon: Ruler },
  documentation: { label: "Documentation", accent: "#8a8073", Icon: FileText },
};
const ORDER: LabEquipCategory[] = ["rheology-cure", "mechanical", "physical", "environmental", "dimensional", "documentation"];

export function LabEquipmentCard({ eq, onOpen }: { eq: LabEquip; onOpen: (e: LabEquip) => void }) {
  const c = CAT[eq.category];
  const Icon = c.Icon;
  return (
    <button onClick={() => onOpen(eq)} className="interactive-card flex flex-col p-3.5 text-left">
      <div className="flex items-start justify-between gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg border" style={{ borderColor: `${c.accent}44`, backgroundColor: `${c.accent}18` }}>
          <Icon className="h-4 w-4" style={{ color: c.accent }} />
        </span>
        <span className="chip" style={{ borderColor: `${c.accent}44`, color: c.accent }}>{c.label}</span>
      </div>
      <h3 className="mt-2 font-display text-[13.5px] font-semibold leading-tight text-ink">{eq.equipmentName}</h3>
      <p className="mt-1 flex-1 text-[11.5px] leading-relaxed text-ink-muted">{eq.whatItMeasures}</p>
      <span className="mt-2 text-[11px] text-violet-300">View in QA lab →</span>
    </button>
  );
}

export function LabEquipmentDetailPanel({ eq, onClose }: { eq: LabEquip; onClose: () => void }) {
  const c = CAT[eq.category];
  const Icon = c.Icon;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f1b17]/40 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="panel-raised max-h-[88vh] w-full max-w-lg overflow-y-auto p-5" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border" style={{ borderColor: `${c.accent}44`, backgroundColor: `${c.accent}18` }}>
              <Icon className="h-4.5 w-4.5" style={{ color: c.accent }} />
            </span>
            <div>
              <h3 className="font-display text-[17px] font-semibold leading-tight text-ink">{eq.equipmentName}</h3>
              <span className="chip mt-0.5" style={{ borderColor: `${c.accent}44`, color: c.accent }}>{c.label}</span>
            </div>
          </div>
          <button onClick={onClose} aria-label="Close" className="rounded-md border border-line p-1.5 text-ink-faint hover:text-ink"><X className="h-4 w-4" /></button>
        </div>

        <p className="mt-3 text-[12.5px] leading-relaxed text-ink-muted">{eq.whatItMeasures}</p>
        <p className="mt-2 text-[12px] leading-relaxed text-ink-faint"><span className="text-ink-muted">Why it matters. </span>{eq.whyItMatters}</p>

        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Field label="Sample type" value={eq.sampleType} />
          <Field label="Output record" value={eq.outputRecord} />
          <ChipField label="Properties" items={eq.relatedProperties} />
          <ChipField label="Methods" items={eq.relatedMethods} />
          <ChipField label="Related defects" items={eq.relatedDefects} />
          <ChipField label="Related products" items={eq.relatedProducts} />
        </div>

        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="rounded-lg border border-line bg-base-850/40 px-3 py-2">
            <span className="flex items-center gap-1.5 label-mono text-[10px] text-blue-300"><Gauge className="h-3 w-3" /> Calibration concept</span>
            <p className="mt-1 text-[11.5px] text-ink-muted">{eq.calibrationConcept}</p>
          </div>
          <div className="rounded-lg border border-line bg-base-850/40 px-3 py-2">
            <span className="flex items-center gap-1.5 label-mono text-[10px] text-molten-300"><Wrench className="h-3 w-3" /> Maintenance concern</span>
            <p className="mt-1 text-[11.5px] text-ink-muted">{eq.maintenanceConcept}</p>
          </div>
        </div>

        <div className="mt-2.5 rounded-lg border border-line bg-base-950/40 px-3 py-2 text-[11px] leading-relaxed text-ink-faint">
          <ShieldAlert className="mr-1 inline h-3 w-3" /> {eq.safetyNote}
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <LabQMSBadge label="controlled record" tone="pass" />
          <LabQMSBadge label="calibration required" tone="warn" />
        </div>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-line bg-base-850/40 px-3 py-2">
      <span className="label-mono text-[10px] text-ink-faint">{label}</span>
      <p className="mt-0.5 text-[12px] capitalize text-ink-muted">{value}</p>
    </div>
  );
}
function ChipField({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-line bg-base-850/40 px-3 py-2">
      <span className="label-mono text-[10px] text-ink-faint">{label}</span>
      <div className="mt-1 flex flex-wrap gap-1">{items.map((i) => <span key={i} className="chip border-line text-ink-muted">{i}</span>)}</div>
    </div>
  );
}

export function LabEquipmentLibrary() {
  const [cat, setCat] = useState<LabEquipCategory | "all">("all");
  const [open, setOpen] = useState<LabEquip | null>(null);
  useScrollLock(open !== null);
  const list = labEquipment.filter((e) => cat === "all" || e.category === cat);
  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-1.5">
        <Microscope className="h-4 w-4 text-violet-300" />
        <span className="kicker-violet">QA lab equipment library</span>
        <div className="ml-auto flex flex-wrap gap-1">
          <button onClick={() => setCat("all")} className={`chip ${cat === "all" ? "border-violet-500/50 bg-violet-500/15 text-violet-200" : "border-line text-ink-muted"}`}>All</button>
          {ORDER.map((k) => (
            <button key={k} onClick={() => setCat(k)} className={`chip ${cat === k ? "bg-violet-500/15 text-violet-200" : "border-line text-ink-muted"}`} style={cat === k ? { borderColor: `${CAT[k].accent}88` } : undefined}>{CAT[k].label}</button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((e) => <LabEquipmentCard key={e.id} eq={e} onOpen={setOpen} />)}
      </div>
      {open && <LabEquipmentDetailPanel eq={open} onClose={() => setOpen(null)} />}
    </div>
  );
}
