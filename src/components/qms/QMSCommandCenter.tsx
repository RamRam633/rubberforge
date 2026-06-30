"use client";

import { useState } from "react";
import Link from "next/link";
import { processSteps } from "@/lib/processData";
import { stationQmsMap } from "@/lib/stationQmsMap";
import { traceabilityStages } from "@/lib/traceabilityData";
import { TraceabilityChain } from "@/components/quality/TraceabilityChain";
import { QMSBadge } from "./QMSBadge";
import { QMSDisclaimer } from "./QMSDisclaimer";
import { ISOClauseMap } from "./ISOClauseMap";
import { QMSProcessMap } from "./QMSProcessMap";
import { DocumentControlTable } from "./DocumentControlTable";
import { RiskRegister, OpportunityRegister, RiskHeatMap } from "./RiskRegister";
import { CustomerRequirementReviewPanel } from "./CustomerRequirementReviewPanel";
import { SupplierControlPanel } from "./SupplierControlPanel";
import { CalibrationStatusBoard } from "./CalibrationStatusBoard";
import { NonconformanceBoard } from "./NonconformanceBoard";
import { InternalAuditChecklist } from "./InternalAuditChecklist";
import { ManagementReviewPanel } from "./ManagementReviewPanel";
import { ContinualImprovementBoard } from "./ContinualImprovementBoard";
import { TrainingMatrix } from "./TrainingMatrix";
import { ContextInterestedPartiesPanel } from "./ContextInterestedPartiesPanel";
import { QMSReadinessScore } from "./QMSReadinessScore";
import { StationQMSOverlay } from "./StationQMSOverlay";
import { AiOperatingModel } from "./AiOperatingModel";
import { DigitalThreadVisual } from "@/components/brand/DigitalThreadVisual";
import {
  LayoutDashboard, BookOpen, Workflow, FileText, AlertTriangle, ClipboardList, Truck, Gauge,
  GitBranch, ShieldAlert, Search, BarChart3, Sparkles, GraduationCap, Leaf, ShieldCheck, Factory, Bot, type LucideIcon,
} from "lucide-react";

type TabId =
  | "overview" | "readiness" | "operating-model" | "qms-thread" | "clauses" | "process" | "production" | "context"
  | "documents" | "risk" | "customer" | "suppliers" | "calibration" | "traceability"
  | "ncr" | "audit" | "mgmt" | "improvement" | "training";

const GROUPS: { group: string; tabs: { id: TabId; label: string; Icon: LucideIcon }[] }[] = [
  { group: "Overview", tabs: [
    { id: "overview", label: "QMS overview", Icon: LayoutDashboard },
    { id: "readiness", label: "Readiness score", Icon: Gauge },
  ] },
  { group: "Operating model", tabs: [
    { id: "operating-model", label: "AI operating model", Icon: Bot },
    { id: "qms-thread", label: "QMS digital thread", Icon: GitBranch },
  ] },
  { group: "The system", tabs: [
    { id: "clauses", label: "ISO 9001 clause map", Icon: BookOpen },
    { id: "process", label: "Process ownership", Icon: Workflow },
    { id: "production", label: "Production controls", Icon: Factory },
    { id: "context", label: "Context / climate", Icon: Leaf },
  ] },
  { group: "Controls", tabs: [
    { id: "documents", label: "Document control", Icon: FileText },
    { id: "risk", label: "Risk & opportunity", Icon: AlertTriangle },
    { id: "customer", label: "Customer review", Icon: ClipboardList },
    { id: "suppliers", label: "Supplier control", Icon: Truck },
    { id: "calibration", label: "Calibration", Icon: Gauge },
    { id: "traceability", label: "Traceability", Icon: GitBranch },
  ] },
  { group: "Performance", tabs: [
    { id: "ncr", label: "Nonconformance / CAPA", Icon: ShieldAlert },
    { id: "audit", label: "Internal audit", Icon: Search },
    { id: "mgmt", label: "Management review", Icon: BarChart3 },
    { id: "improvement", label: "Continual improvement", Icon: Sparkles },
    { id: "training", label: "Training & competence", Icon: GraduationCap },
  ] },
];

const ALL = GROUPS.flatMap((g) => g.tabs);

export function QMSCommandCenter() {
  const [tab, setTab] = useState<TabId>("overview");
  const active = ALL.find((t) => t.id === tab) ?? ALL[0];

  return (
    <div className="mx-auto max-w-[1500px] px-4 pb-14 pt-8 sm:px-6">
      <header className="mb-5">
        <div className="flex flex-wrap items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-violet-300" />
          <span className="kicker-violet">QMS Command Center</span>
          <QMSBadge compact />
        </div>
        <h1 className="mt-2 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          An <span className="text-gradient">ISO 9001-aligned</span> virtual factory QMS
        </h1>
        <p className="mt-2 max-w-3xl text-[14px] leading-relaxed text-ink-muted">
          The management system behind the virtual factory: policy, process ownership, controlled documents, risk-based
          thinking, customer requirements, production controls, traceability, nonconformance, corrective action, internal
          audits, management review, and continual improvement. A modeling and audit-readiness tool, not a certified
          system.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[230px_minmax(0,1fr)]">
        {/* Sidebar nav */}
        <nav className="lg:sticky lg:top-4 lg:self-start" aria-label="QMS sections">
          <div className="flex gap-1.5 overflow-x-auto pb-2 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0">
            {GROUPS.map((g) => (
              <div key={g.group} className="shrink-0 lg:mb-3">
                <div className="mb-1 hidden px-2 label-mono text-[9.5px] text-ink-faint lg:block">{g.group}</div>
                <div className="flex gap-1.5 lg:flex-col lg:gap-0.5">
                  {g.tabs.map((t) => {
                    const on = t.id === tab;
                    const Icon = t.Icon;
                    return (
                      <button
                        key={t.id}
                        onClick={() => setTab(t.id)}
                        aria-current={on}
                        className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg px-2.5 py-1.5 text-left text-[12.5px] transition ${
                          on ? "bg-violet-500/15 text-violet-200 shadow-[0_0_0_1px_rgba(109,59,212,0.3)]" : "text-ink-muted hover:bg-base-800/60 hover:text-ink"
                        }`}
                      >
                        <Icon className="h-3.5 w-3.5 shrink-0" /> {t.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </nav>

        {/* Content */}
        <div className="min-w-0">
          <div className="mb-3 flex items-center gap-2">
            <active.Icon className="h-4 w-4 text-violet-300" />
            <h2 className="font-display text-lg font-semibold text-ink">{active.label}</h2>
          </div>

          {tab === "overview" && <Overview onGo={setTab} />}
          {tab === "readiness" && <QMSReadinessScore />}
          {tab === "operating-model" && <AiOperatingModel />}
          {tab === "qms-thread" && (
            <div className="flex flex-col gap-3">
              <p className="max-w-3xl text-[12.5px] leading-relaxed text-ink-muted">
                How quality records move through the factory, from customer requirement to improvement action. Each node
                is stewarded by an AI agent and reviewed by an accountable human. Demo records only.
              </p>
              <DigitalThreadVisual />
            </div>
          )}
          {tab === "clauses" && <ISOClauseMap />}
          {tab === "process" && <QMSProcessMap />}
          {tab === "production" && <ProductionControls />}
          {tab === "context" && <ContextInterestedPartiesPanel />}
          {tab === "documents" && <DocumentControlTable />}
          {tab === "risk" && (
            <div className="flex flex-col gap-4">
              <RiskHeatMap />
              <RiskRegister />
              <div>
                <span className="kicker-violet">Opportunity register</span>
                <div className="mt-3"><OpportunityRegister /></div>
              </div>
            </div>
          )}
          {tab === "customer" && <CustomerRequirementReviewPanel />}
          {tab === "suppliers" && <SupplierControlPanel />}
          {tab === "calibration" && <CalibrationStatusBoard />}
          {tab === "traceability" && (
            <div className="flex flex-col gap-3">
              <p className="text-[12.5px] leading-relaxed text-ink-muted">
                Identification and traceability (clause 8.5.2): how a finished rubber product links back to its source
                lots. Demo identifiers only.
              </p>
              <div className="panel p-4"><TraceabilityChain stages={traceabilityStages} /></div>
              <Link href="/qa-lab#traceability" className="text-[12.5px] text-violet-300 hover:text-violet-200">See the lab traceability chain in the QA Lab →</Link>
            </div>
          )}
          {tab === "ncr" && <NonconformanceBoard />}
          {tab === "audit" && <InternalAuditChecklist />}
          {tab === "mgmt" && <ManagementReviewPanel />}
          {tab === "improvement" && <ContinualImprovementBoard />}
          {tab === "training" && <TrainingMatrix />}

          <div className="mt-6"><QMSDisclaimer /></div>
        </div>
      </div>
    </div>
  );
}

function ProductionControls() {
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-3">
      {stationQmsMap.map((s) => {
        const title = processSteps.find((p) => p.id === s.stationId)?.title ?? s.stationId;
        return (
          <div key={s.stationId} className="flex flex-col">
            <div className="mb-1 px-1 text-[12px] font-semibold text-ink">{title}</div>
            <StationQMSOverlay stationId={s.stationId} />
          </div>
        );
      })}
    </div>
  );
}

function Overview({ onGo }: { onGo: (t: TabId) => void }) {
  const modules: { id: TabId; label: string; Icon: LucideIcon; desc: string }[] = [
    { id: "operating-model", label: "AI operating model", Icon: Bot, desc: "20 agents, RACI, human-in-the-loop" },
    { id: "qms-thread", label: "QMS digital thread", Icon: GitBranch, desc: "Records from requirement to output" },
    { id: "clauses", label: "ISO 9001 clause map", Icon: BookOpen, desc: "Clauses 4 to 10 mapped to the factory" },
    { id: "process", label: "Process ownership", Icon: Workflow, desc: "Core, support, management processes" },
    { id: "documents", label: "Document control", Icon: FileText, desc: "Controlled documents and records (demo)" },
    { id: "risk", label: "Risk & opportunity", Icon: AlertTriangle, desc: "Risk-based thinking register" },
    { id: "customer", label: "Customer review", Icon: ClipboardList, desc: "Requirement review, RFQ as one input" },
    { id: "production", label: "Production controls", Icon: Factory, desc: "Per-station QMS view" },
    { id: "traceability", label: "Traceability & records", Icon: GitBranch, desc: "Lot to shipment genealogy" },
    { id: "suppliers", label: "Supplier control", Icon: Truck, desc: "Externally provided materials" },
    { id: "calibration", label: "Calibration", Icon: Gauge, desc: "Measurement equipment readiness" },
    { id: "ncr", label: "Nonconformance / CAPA", Icon: ShieldAlert, desc: "NCR log and CAPA workflow" },
    { id: "audit", label: "Internal audit", Icon: Search, desc: "Audit-readiness program" },
    { id: "mgmt", label: "Management review", Icon: BarChart3, desc: "Inputs, metrics, outputs (demo)" },
    { id: "improvement", label: "Continual improvement", Icon: Sparkles, desc: "Improvement actions board" },
    { id: "training", label: "Training & competence", Icon: GraduationCap, desc: "Role-based competence matrix" },
    { id: "context", label: "Context / climate", Icon: Leaf, desc: "Issues, parties, climate relevance" },
    { id: "readiness", label: "Readiness score", Icon: Gauge, desc: "QMS readiness model" },
  ];
  return (
    <div>
      <p className="mb-4 max-w-3xl text-[13px] leading-relaxed text-ink-muted">
        Use the QMS Command Center to explore how the virtual rubber factory is modeled as a connected quality-management
        system. Each module below maps to ISO 9001 clause areas and links back to the factory floor, the QA Lab, and the
        factory outputs.
      </p>
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((m) => {
          const Icon = m.Icon;
          return (
            <button key={m.id} onClick={() => onGo(m.id)} className="interactive-card flex items-start gap-2.5 p-3.5 text-left">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/10">
                <Icon className="h-4 w-4 text-violet-300" />
              </span>
              <span className="min-w-0">
                <span className="block text-[13px] font-semibold leading-tight text-ink">{m.label}</span>
                <span className="mt-0.5 block text-[11px] leading-snug text-ink-faint">{m.desc}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
