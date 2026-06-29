"use client";

import { useState } from "react";
import { aiAgents } from "@/lib/aiAgents";
import { orgFunctions } from "@/lib/orgFunctions";
import { raciModel } from "@/lib/raciModel";
import { humanInLoop } from "@/lib/humanInLoop";
import { agentEvidence } from "@/lib/agentEvidence";
import { OPERATING_MODEL_INTRO, HUMAN_ACCOUNTABILITY_LINE } from "@/lib/operatingModelCopy";
import { clauseShort, statusClass } from "@/lib/qmsUi";
import { layerName } from "@/lib/navLabels";
import type { AiAgent, OmLayer } from "@/types/operatingModel";
import { Bot, Building2, ShieldCheck, UserCheck, AlertTriangle, FileText, ArrowRight, X, Network, ClipboardList, Database, HelpCircle } from "lucide-react";

const ACCENT: Record<OmLayer, string> = {
  process: "#d97706", chemistry: "#7c3aed", quality: "#0891b2", "supply-chain": "#0d9488",
  people: "#16a34a", maintenance: "#ea580c", documentation: "#64748b", rfq: "#9333ea", qms: "#2563eb",
};

function layerLabel(l: OmLayer): string {
  return l === "qms" ? "QMS" : layerName(l as Exclude<OmLayer, "qms">);
}

export function AiOperatingModel() {
  const [sel, setSel] = useState<AiAgent | null>(null);

  return (
    <div className="flex flex-col gap-6">
      {/* Intro + accountability banner */}
      <div>
        <p className="max-w-3xl text-[13px] leading-relaxed text-ink-muted">{OPERATING_MODEL_INTRO}</p>
        <div className="mt-3 flex items-start gap-2 rounded-lg border border-pass/30 bg-pass/[0.06] px-3 py-2">
          <UserCheck className="mt-0.5 h-4 w-4 shrink-0 text-pass" />
          <p className="text-[12px] leading-relaxed text-ink-muted">
            <span className="font-medium text-pass">Human-accountable by design. </span>
            {HUMAN_ACCOUNTABILITY_LINE}
          </p>
        </div>
      </div>

      {/* Org functions */}
      <section>
        <div className="flex items-center gap-2">
          <Building2 className="h-4 w-4 text-violet-300" />
          <span className="kicker-violet">Factory organization</span>
        </div>
        <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {orgFunctions.map((f) => (
            <div key={f.id} className="panel p-3.5">
              <h3 className="font-display text-[13px] font-semibold leading-tight text-ink">{f.name}</h3>
              <p className="mt-1 text-[11.5px] leading-relaxed text-ink-muted">{f.mission}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {f.humanRoles.map((rl) => <span key={rl} className="chip border-line text-ink-faint">{rl}</span>)}
              </div>
              <div className="mt-1.5 flex flex-wrap items-center gap-1">
                <Bot className="h-3 w-3" style={{ color: ACCENT[f.relatedLayer] }} />
                {f.supportingAgents.map((a) => <span key={a} className="chip border-line text-ink-muted">{a.replace(" Agent", "")}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI agents */}
      <section>
        <div className="flex items-center gap-2">
          <Network className="h-4 w-4 text-violet-300" />
          <span className="kicker-violet">Specialized AI agents</span>
          <span className="label-mono text-[10px] text-ink-faint">{aiAgents.length} agents · click for detail</span>
        </div>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {aiAgents.map((a) => (
            <button key={a.id} onClick={() => setSel(a)} className="interactive-card flex flex-col p-3 text-left">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border" style={{ borderColor: `${ACCENT[a.relatedLayer]}55`, backgroundColor: `${ACCENT[a.relatedLayer]}16` }}>
                  <Bot className="h-3.5 w-3.5" style={{ color: ACCENT[a.relatedLayer] }} />
                </span>
                <span className="min-w-0 text-[12px] font-semibold leading-tight text-ink">{a.name}</span>
              </div>
              <p className="mt-1.5 line-clamp-2 text-[11px] leading-snug text-ink-faint">{a.purpose}</p>
              <span className="mt-1.5 chip w-fit border-line text-ink-muted" style={{ color: ACCENT[a.relatedLayer] }}>{layerLabel(a.relatedLayer)}</span>
            </button>
          ))}
        </div>
      </section>

      {/* RACI */}
      <section>
        <div className="flex items-center gap-2">
          <ClipboardList className="h-4 w-4 text-violet-300" />
          <span className="kicker-violet">RACI · who is accountable</span>
        </div>
        <div className="panel-raised mt-3 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-line text-ink-faint">
                {["Workflow", "Responsible", "Accountable (human)", "Consulted", "Informed"].map((h) => (
                  <th key={h} className="px-3 py-2 label-mono text-[10px] font-normal">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {raciModel.map((row) => (
                <tr key={row.workflow} className="border-b border-line/50 last:border-0 hover:bg-base-800/30">
                  <td className="px-3 py-2.5 text-[12px] font-medium text-ink">{row.workflow}</td>
                  <td className="px-3 py-2.5 text-[11.5px] text-ink-muted">{row.responsible}</td>
                  <td className="px-3 py-2.5"><span className="chip border-pass/40 text-pass">{row.accountable}</span></td>
                  <td className="px-3 py-2.5 text-[11px] text-ink-faint">{row.consulted.join(", ")}</td>
                  <td className="px-3 py-2.5 text-[11px] text-ink-faint">{row.informed.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Human-in-the-loop */}
      <section>
        <div className="flex items-center gap-2">
          <UserCheck className="h-4 w-4 text-pass" />
          <span className="kicker-violet">Human-in-the-loop gates</span>
        </div>
        <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {humanInLoop.map((g) => (
            <div key={g.gate} className="panel p-3.5">
              <div className="flex items-center gap-1.5">
                <UserCheck className="h-3.5 w-3.5 text-pass" />
                <h3 className="text-[12.5px] font-semibold leading-tight text-ink">{g.gate}</h3>
              </div>
              <p className="mt-1.5 text-[11px] leading-relaxed text-ink-faint">{g.whyHumanRequired}</p>
              <div className="mt-2 flex flex-col gap-1 text-[11px]">
                <span className="text-ink-muted"><span className="text-ink-faint">Approver. </span>{g.whoApproves}</span>
                <span className="text-ink-muted"><span className="text-ink-faint">Agent provides. </span>{g.whatAgentProvides}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Agent evidence trail */}
      <section>
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-violet-300" />
          <span className="kicker-violet">Agent evidence trail</span>
          <span className="label-mono text-[10px] text-ink-faint">auditable, not AI magic</span>
        </div>
        <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-2">
          {agentEvidence.map((e) => (
            <div key={e.agentName} className="panel-raised p-4">
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-1.5 text-[13px] font-semibold text-ink"><Bot className="h-4 w-4 text-violet-300" /> {e.agentName}</span>
                <span className={`chip ${statusClass(e.approvalStatus)}`}>{e.approvalStatus.replace(/-/g, " ")}</span>
              </div>
              <Row icon={Database} label="Input data used" items={e.inputData} />
              <Row icon={HelpCircle} label="Assumptions" items={e.assumptions} />
              <Row icon={AlertTriangle} label="Missing information" items={e.missingInformation} tone="#d97706" />
              <p className="mt-2 text-[11.5px] leading-relaxed text-ink-muted"><span className="text-ink-faint">Recommendation (demo). </span>{e.recommendation}</p>
              <div className="mt-2 flex flex-wrap items-center gap-1.5">
                <span className="chip border-pass/40 text-pass"><UserCheck className="h-3 w-3" /> Reviewer: {e.requiredReviewer}</span>
                {e.linkedRecords.map((rec) => <span key={rec} className="chip border-line text-ink-faint">{rec}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {sel && <AgentDetail agent={sel} onClose={() => setSel(null)} />}
    </div>
  );
}

function Row({ icon: Icon, label, items, tone = "#9ea4d6" }: { icon: typeof Database; label: string; items: string[]; tone?: string }) {
  return (
    <div className="mt-2">
      <span className="flex items-center gap-1.5 label-mono text-[9.5px]" style={{ color: tone }}><Icon className="h-3 w-3" /> {label}</span>
      <div className="mt-1 flex flex-wrap gap-1">{items.map((it) => <span key={it} className="chip border-line text-ink-muted">{it}</span>)}</div>
    </div>
  );
}

function AgentDetail({ agent, onClose }: { agent: AiAgent; onClose: () => void }) {
  const accent = ACCENT[agent.relatedLayer];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="panel-raised max-h-[88vh] w-full max-w-lg overflow-y-auto p-5" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border" style={{ borderColor: `${accent}55`, backgroundColor: `${accent}16` }}>
              <Bot className="h-4.5 w-4.5" style={{ color: accent }} />
            </span>
            <div>
              <h3 className="font-display text-[16px] font-semibold leading-tight text-ink">{agent.name}</h3>
              <span className="text-[11px] text-ink-faint">{agent.factoryArea}</span>
            </div>
          </div>
          <button onClick={onClose} aria-label="Close" className="rounded-md border border-line p-1.5 text-ink-faint hover:text-ink"><X className="h-4 w-4" /></button>
        </div>
        <p className="mt-3 text-[12.5px] leading-relaxed text-ink-muted">{agent.purpose}</p>

        <div className="mt-3 grid grid-cols-2 gap-2.5">
          <Block label="Inputs" items={agent.inputs} />
          <Block label="Outputs" items={agent.outputs} />
          <Block label="Related records" items={agent.relatedRecords} />
          <div className="rounded-lg border border-line bg-base-850/40 px-3 py-2">
            <span className="label-mono text-[10px] text-ink-faint">Human owner</span>
            <p className="mt-0.5 text-[12px] text-ink-muted">{agent.humanOwner}</p>
            <div className="mt-1.5 flex flex-wrap gap-1">
              <span className="chip border-line" style={{ color: accent }}>{layerLabel(agent.relatedLayer)}</span>
              <span className="chip border-line text-ink-faint">{clauseShort(agent.relatedClause)}</span>
            </div>
          </div>
        </div>

        <div className="mt-3 rounded-lg border border-blue-400/25 bg-blue-400/[0.05] px-3 py-2">
          <span className="flex items-center gap-1.5 label-mono text-[10px] text-blue-300"><ShieldCheck className="h-3 w-3" /> QMS responsibility</span>
          <p className="mt-1 text-[12px] leading-relaxed text-ink-muted">{agent.qmsResponsibility}</p>
        </div>
        <div className="mt-2 rounded-lg border border-pass/25 bg-pass/[0.05] px-3 py-2">
          <span className="flex items-center gap-1.5 label-mono text-[10px] text-pass"><UserCheck className="h-3 w-3" /> Supports the decision</span>
          <p className="mt-1 text-[12px] leading-relaxed text-ink-muted">{agent.supportsDecisions}</p>
        </div>
        <div className="mt-2 rounded-lg border border-fail/30 bg-fail/[0.06] px-3 py-2">
          <span className="flex items-center gap-1.5 label-mono text-[10px] text-[#dc2626]"><AlertTriangle className="h-3 w-3" /> Cannot decide autonomously</span>
          <p className="mt-1 text-[12px] leading-relaxed text-ink-muted">{agent.cannotDecideAutonomously}</p>
        </div>
      </div>
    </div>
  );
}

function Block({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-line bg-base-850/40 px-3 py-2">
      <span className="label-mono text-[10px] text-ink-faint">{label}</span>
      <ul className="mt-1 space-y-0.5">{items.map((i) => <li key={i} className="text-[11.5px] text-ink-muted">{i}</li>)}</ul>
    </div>
  );
}
