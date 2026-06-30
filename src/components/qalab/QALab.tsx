"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { labStationsById } from "@/lib/labStations";
import { QMSBadge } from "@/components/qms/QMSBadge";
import { LabWorkflowTimeline } from "./LabWorkflowTimeline";
import { LabRolePanel } from "./LabRolePanel";
import { LabTestRunner } from "./LabTestRunner";
import { MDRSimulator } from "./MDRSimulator";
import { TensileTestSimulator, HardnessTestSimulator, CompressionSetSimulator } from "./TestSimulators";
import { EnvironmentalTestPanel, DimensionalInspectionPanel } from "./LabInspectionPanels";
import { LabReportPreview } from "./LabReportPreview";
import { QAReleaseWorkflow } from "./QAReleaseWorkflow";
import { LabTraceabilityChain } from "./LabTraceabilityChain";
import { LabEquipmentLibrary } from "./LabEquipment";
import { ActiveRunBar } from "@/components/run/ActiveRunBar";
import { useFactoryRun } from "@/components/run/RunProvider";
import { FlaskConical, Footprints, FileText, Layers, Search, CircleCheck, Microscope, Activity, ShieldAlert, Factory, MapPin, ArrowRight, type LucideIcon } from "lucide-react";

const VirtualQALabScene = dynamic(() => import("./VirtualQALabScene").then((m) => m.VirtualQALabScene), { ssr: false });

type Mode = "tour" | "sheet" | "application" | "defect" | "release" | "equipment" | "mdr";
const MODES: { id: Mode; label: string; Icon: LucideIcon }[] = [
  { id: "tour", label: "Guided Lab Tour", Icon: Footprints },
  { id: "sheet", label: "Test a Rubber Sheet", Icon: FlaskConical },
  { id: "application", label: "Test by Application", Icon: Layers },
  { id: "defect", label: "Defect Investigation", Icon: Search },
  { id: "release", label: "Release Review", Icon: CircleCheck },
  { id: "equipment", label: "Equipment", Icon: Microscope },
  { id: "mdr", label: "MDR Lab", Icon: Activity },
];

export function QALab() {
  const [mode, setMode] = useState<Mode>("tour");
  const [zone, setZone] = useState<string | null>("rheology-cure");
  const z = zone ? labStationsById[zone] : null;
  const { run, recordRelease } = useFactoryRun();

  return (
    <div className="mx-auto max-w-[1500px] px-4 pb-14 pt-8 sm:px-6">
      <header className="mb-4">
        <div className="flex flex-wrap items-center gap-2">
          <FlaskConical className="h-5 w-5 text-violet-300" />
          <span className="kicker-violet">Virtual QA Lab</span>
          <QMSBadge compact />
        </div>
        <h1 className="mt-2 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          An industrial <span className="text-gradient">rubber testing laboratory</span>
        </h1>
        <p className="mt-2 max-w-3xl text-[14px] leading-relaxed text-ink-muted">
          The second environment of the virtual factory. Samples from the production floor are received, prepared, and
          tested, from rheology and cure through hardness, tensile, compression set, aging, and inspection, to a
          documented demo release decision. Conceptual and educational; no certificates, no compliance claims, demo
          values only.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link href="/simulator" className="btn-ghost text-[13px]"><Factory className="h-4 w-4" /> Production Floor</Link>
          <Link href="/qms" className="btn-ghost text-[13px]"><ShieldAlert className="h-4 w-4" /> QMS Command Center</Link>
        </div>
      </header>

      {/* Active run from the production floor */}
      <div className="mb-4">
        <ActiveRunBar startable />
      </div>

      {/* Scene + zone inspector */}
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="panel-raised stage-glow relative h-[360px] overflow-hidden sm:h-[440px]">
          <VirtualQALabScene active={zone} onSelect={setZone} />
          <div className="pointer-events-none absolute bottom-3 right-3 rounded-md border border-line bg-base-900/70 px-2 py-1 font-mono text-[10px] text-ink-faint backdrop-blur-sm">
            click an instrument · drag to orbit
          </div>
        </div>
        <div key={zone ?? "none"} className="qa-scan-pulse panel min-h-[300px] overflow-hidden p-4 lg:min-h-0">
          {z ? (
            <>
              <span className="inline-block rounded border border-line bg-base-950/50 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-violet-300">{z.signText}</span>
              <h3 className="mt-2 font-display text-[16px] font-semibold leading-tight text-ink">{z.name}</h3>
              <p className="mt-1.5 text-[12px] leading-relaxed text-ink-muted">{z.whatHappens}</p>
              <div className="mt-2.5">
                <span className="label-mono text-[10px] text-ink-faint">Related tests</span>
                <div className="mt-1 flex flex-wrap gap-1">{z.relatedTests.map((t) => <span key={t} className="chip border-line text-ink-muted">{t}</span>)}</div>
              </div>
              <div className="mt-2.5">
                <span className="label-mono text-[10px] text-ink-faint">What you would see</span>
                <div className="mt-1 flex flex-wrap gap-1">{z.props.map((p) => <span key={p} className="chip border-line text-ink-faint">{p}</span>)}</div>
              </div>
              <button onClick={() => setMode("equipment")} className="mt-3 inline-flex items-center gap-1 text-[12px] text-violet-300 hover:text-violet-200">
                <MapPin className="h-3.5 w-3.5" /> Browse lab equipment <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </>
          ) : (
            <p className="text-[12.5px] text-ink-muted">Click an instrument in the lab to inspect that station.</p>
          )}
        </div>
      </div>

      {/* Mode bar */}
      <div className="mt-5 mb-4 flex flex-wrap gap-1.5 border-b border-line pb-3">
        {MODES.map((m) => {
          const on = m.id === mode;
          const Icon = m.Icon;
          return (
            <button key={m.id} onClick={() => setMode(m.id)} aria-pressed={on}
              className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-[12.5px] font-medium transition ${on ? "border-violet-500 bg-violet-500/15 text-violet-200" : "border-line text-ink-muted hover:border-line-strong hover:text-ink"}`}>
              <Icon className="h-3.5 w-3.5" /> {m.label}
            </button>
          );
        })}
      </div>

      {/* Mode content */}
      {mode === "tour" && (
        <div className="flex flex-col gap-5">
          <LabWorkflowTimeline />
          <div>
            <span className="kicker-violet">Lab personnel</span>
            <div className="mt-3"><LabRolePanel /></div>
          </div>
        </div>
      )}

      {mode === "sheet" && (
        <div className="flex flex-col gap-5">
          <p className="text-[12.5px] leading-relaxed text-ink-muted">
            {run ? `Testing sample ${run.sampleId} from run ${run.runId} (${run.materialAbbr} ${run.productName}). ` : "A standard educational test workflow for a calendered EPDM rubber sheet. "}
            Adjust the setup to explore how the plan changes.
          </p>
          <LabTestRunner presetMaterial={run?.materialId ?? "epdm"} />
          <MDRSimulator />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <TensileTestSimulator />
            <HardnessTestSimulator />
            <CompressionSetSimulator />
            <DimensionalInspectionPanel />
          </div>
          <EnvironmentalTestPanel />
          <LabReportPreview />
        </div>
      )}

      {mode === "application" && (
        <div className="flex flex-col gap-5">
          <p className="text-[12.5px] leading-relaxed text-ink-muted">Select the service conditions a part will face. The lab suggests the tests that generally matter for those conditions and the questions still to clarify.</p>
          <LabTestRunner presetMaterial="nbr" presetApplications={["oil"]} />
          <EnvironmentalTestPanel />
        </div>
      )}

      {mode === "defect" && (
        <div className="flex flex-col gap-5">
          <p className="text-[12.5px] leading-relaxed text-ink-muted">
            Pick a defect to see which tests and inspections help detect or diagnose it. For root-cause chemistry, see the{" "}
            <Link href="/defects" className="text-violet-300 hover:text-violet-200">Defect Detective</Link>.
          </p>
          <LabTestRunner presetMaterial="sbr" />
          <DimensionalInspectionPanel />
        </div>
      )}

      {mode === "release" && (
        <div className="flex flex-col gap-5">
          {run && (
            <div className="panel-raised p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <CircleCheck className="h-4 w-4 text-violet-300" />
                  <span className="kicker-violet">Record release for {run.sampleId}</span>
                </div>
                {run.releaseStatus && <span className="chip border-pass/40 text-pass">{run.releaseStatus.replace(/-/g, " ")}</span>}
              </div>
              <p className="mt-2 text-[12px] leading-relaxed text-ink-muted">
                Record a demo release decision for this run. It writes back to the shared digital thread and appears on the
                production floor and outputs.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[{ id: "accepted-demo", label: "Accept (demo)", cls: "border-pass/50 text-pass" }, { id: "hold-for-review", label: "Hold for review", cls: "border-molten-400/50 text-molten-300" }, { id: "ncr-required", label: "NCR required", cls: "border-fail/50 text-[#dc2626]" }].map((b) => (
                  <button key={b.id} onClick={() => recordRelease(b.id)} className={`chip ${b.cls} ${run.releaseStatus === b.id ? "ring-1 ring-current" : ""}`}>{b.label}</button>
                ))}
              </div>
            </div>
          )}
          <QAReleaseWorkflow />
          <LabReportPreview />
          <div id="traceability" className="scroll-mt-20">
            <LabTraceabilityChain />
          </div>
        </div>
      )}

      {mode === "equipment" && <LabEquipmentLibrary />}

      {mode === "mdr" && (
        <div className="flex flex-col gap-5">
          <MDRSimulator />
          <p className="text-[12px] leading-relaxed text-ink-faint">The MDR cure curve is one input to cure and process review, not a stand-alone release test. Real testing follows qualified lab procedures and official methods.</p>
        </div>
      )}

      <div className="mt-8 panel flex items-start gap-3 p-4">
        <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-ink-faint" />
        <p className="text-[12px] leading-relaxed text-ink-muted">
          <span className="font-medium text-ink">Demo lab environment. </span>
          All test results, statuses, and reports are simulated demo data, not official test reports or certificates.
          RubberForge does not establish ISO or ASTM compliance. Real testing requires qualified laboratory procedures,
          calibrated equipment, official methods, and review.
        </p>
      </div>
    </div>
  );
}
