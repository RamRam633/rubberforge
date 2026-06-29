"use client";

import { useState } from "react";
import {
  ChevronRight,
  ClipboardCheck,
  FlaskConical,
  BookMarked,
  ListChecks,
  GitBranch,
  FileText,
  Bug,
  Info,
  ShieldAlert,
} from "lucide-react";

import { qualityTests, qualityTestsById } from "@/lib/qualityTests";
import { standardsLibrary, standardsLibraryById } from "@/lib/standardsLibrary";
import { inProcessCheckpoints } from "@/lib/inProcessQuality";
import { traceabilityStages } from "@/lib/traceabilityData";
import { documentationItems } from "@/lib/documentationPackages";
import { qualityDefectLinksById } from "@/lib/qualityDefectMap";
import { defectChemistry } from "@/lib/defectChemistryMap";
import { machinesById } from "@/lib/machineData";

import { QualityTestCard } from "@/components/quality/QualityTestCard";
import { StandardsReferenceCard } from "@/components/quality/StandardsReferenceCard";
import { InspectionPlanBuilder } from "@/components/quality/InspectionPlanBuilder";
import { TraceabilityChain } from "@/components/quality/TraceabilityChain";
import { DocumentationPackageCard } from "@/components/quality/DocumentationPackageCard";
import { QualityDefectPanel } from "@/components/quality/QualityDefectPanel";

const FLOW_STEPS: string[] = [
  "Incoming material",
  "Batch / lot traceability",
  "Compound control",
  "In-process inspection",
  "Finished testing",
  "Dimensional",
  "Documentation",
  "Shipment release",
];

export default function QualityLabPage() {
  const [selectedDefectId, setSelectedDefectId] = useState<string>(defectChemistry[0].id);

  return (
    <div className="mx-auto max-w-[1300px] px-5 pb-12 pt-8">
      {/* 1. Header */}
      <header>
        <span className="kicker">Quality lab</span>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
          How a rubber factory controls quality
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          A walk through the quality system from incoming material to finished release: the
          in-process hold points, the property tests, the standards behind them, the traceability
          chain, and the documents a buyer might request. This is educational and quote-preparation
          guidance only. It issues no certificates and makes no compliance claims.
        </p>
      </header>

      {/* 2. Quality system overview */}
      <section className="mt-12">
        <span className="kicker-violet">The system</span>
        <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
          Quality, end to end
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          Quality is not a single test at the end. It is a chain of checks, each one a gate that
          material passes before it advances. The flow below is the conceptual spine of everything
          on this page.
        </p>
        <div className="panel-raised mt-5 p-5">
          <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2.5">
            {FLOW_STEPS.map((step, i) => (
              <span key={step} className="flex items-center gap-1.5">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-base-700/50 px-2.5 py-1.5">
                  <span className="font-mono text-[10px] text-violet-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[12px] font-medium text-ink">{step}</span>
                </span>
                {i < FLOW_STEPS.length - 1 && (
                  <ChevronRight className="h-4 w-4 shrink-0 text-ink-faint" />
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. In-process quality */}
      <section className="mt-12">
        <span className="kicker">On the floor</span>
        <h2 className="mt-2 flex items-center gap-2 font-display text-2xl font-semibold text-ink">
          <ClipboardCheck className="h-5 w-5 text-pass" />
          In-process quality
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          Each station carries its own checks and a release concept: the conceptual rule for when
          material is allowed to move forward. Catching a problem here is far cheaper than catching
          it at finished goods.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {inProcessCheckpoints.map((c) => {
            const station = machinesById[c.stationId];
            return (
              <div key={c.stationId} className="panel flex h-full flex-col p-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-steel-400/30 bg-steel-500/10 text-steel-300">
                    <ListChecks className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-[15px] font-semibold leading-tight text-ink">
                    {station?.name ?? c.stationId}
                  </h3>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {c.checks.map((check, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-1.5 text-[12px] leading-relaxed text-ink-muted"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-steel-300" />
                      {check}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-start gap-1.5 border-t border-line pt-3 text-[11.5px] leading-relaxed text-ink-faint">
                  <ShieldAlert className="mt-0.5 h-3.5 w-3.5 shrink-0 text-pass" />
                  <span>
                    <span className="text-pass">Release concept. </span>
                    {c.releaseConcept}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Finished-product testing library */}
      <section className="mt-12">
        <span className="kicker-violet">Property testing</span>
        <h2 className="mt-2 flex items-center gap-2 font-display text-2xl font-semibold text-ink">
          <FlaskConical className="h-5 w-5 text-pass" />
          Finished-product testing library
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          The property tests a finished rubber part is commonly checked against. Each card explains
          what it measures, why it matters, and what a bad result tends to mean, with the related
          standard codes shown as illustrative references.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {qualityTests.map((test) => (
            <QualityTestCard
              key={test.id}
              test={test}
              standardCodes={test.relatedStandards
                .map((id) => standardsLibraryById[id]?.code)
                .filter(Boolean)}
            />
          ))}
        </div>
      </section>

      {/* 5. Standards & methods library */}
      <section className="mt-12">
        <span className="kicker">Reference</span>
        <h2 className="mt-2 flex items-center gap-2 font-display text-2xl font-semibold text-ink">
          <BookMarked className="h-5 w-5 text-violet-300" />
          Standards and methods library
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          The ASTM and ISO designations that buyers most often cite for rubber, in plain language
          with the situations that tend to trigger them. This app does not contain the official
          standard text, only a plain-language overview for scoping and review.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {standardsLibrary.map((standard) => (
            <StandardsReferenceCard key={standard.id} standard={standard} />
          ))}
        </div>
      </section>

      {/* 6. Inspection plan builder */}
      <section className="mt-12">
        <span className="kicker-violet">Try it</span>
        <h2 className="mt-2 flex items-center gap-2 font-display text-2xl font-semibold text-ink">
          <ClipboardCheck className="h-5 w-5 text-pass" />
          Inspection plan builder
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          Pick a product, material, and service environment to assemble a conceptual inspection
          plan: which characteristics are commonly checked and roughly how often. It is a planning
          aid for RFQ preparation, not a controlled procedure.
        </p>
        <div className="mt-5">
          <InspectionPlanBuilder />
        </div>
      </section>

      {/* 7. Traceability chain */}
      <section className="mt-12">
        <span className="kicker">Lot control</span>
        <h2 className="mt-2 flex items-center gap-2 font-display text-2xl font-semibold text-ink">
          <GitBranch className="h-5 w-5 text-violet-300" />
          Traceability chain
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          How a shipped unit links back through every stage to its raw polymer and filler lots. The
          identifiers shown are illustrative sample formats only, and they make targeted recall and
          warranty handling practical instead of wholesale.
        </p>
        <div className="panel-raised mt-5 p-5">
          <TraceabilityChain stages={traceabilityStages} />
        </div>
      </section>

      {/* 8. Documentation package */}
      <section className="mt-12">
        <span className="kicker-violet">Paperwork</span>
        <h2 className="mt-2 flex items-center gap-2 font-display text-2xl font-semibold text-ink">
          <FileText className="h-5 w-5 text-pass" />
          Documentation package
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          The documents a buyer might ask for, what each one actually is, and who typically provides
          it. These documents may be requested and are subject to factory or supplier capability and
          confirmation before sourcing.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {documentationItems.map((doc) => (
            <DocumentationPackageCard key={doc.id} doc={doc} />
          ))}
        </div>
      </section>

      {/* 9. Quality-aware defects */}
      <section className="mt-12">
        <span className="kicker">Cause and catch</span>
        <h2 className="mt-2 flex items-center gap-2 font-display text-2xl font-semibold text-ink">
          <Bug className="h-5 w-5 text-molten-300" />
          Quality-aware defects
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          Each defect, paired with its chemistry and process causes, the tests that catch it, the
          checkpoint where it surfaces, the customer impact, and how it is prevented. Jump to one
          with the selector below.
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {defectChemistry.map((d) => {
            const on = d.id === selectedDefectId;
            return (
              <button
                key={d.id}
                onClick={() => setSelectedDefectId(d.id)}
                className={`rounded-full border px-2.5 py-1 text-[11px] transition ${
                  on
                    ? "border-molten-400/50 bg-molten-500/15 text-molten-300"
                    : "border-line bg-base-700/40 text-ink-muted hover:text-ink"
                }`}
              >
                {d.defect}
              </button>
            );
          })}
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {defectChemistry.map((d) => (
            <div
              key={d.id}
              className={d.id === selectedDefectId ? "ring-1 ring-molten-400/40 rounded-xl" : ""}
            >
              <QualityDefectPanel
                defect={d}
                link={qualityDefectLinksById[d.id]}
                resolveTest={(id) => qualityTestsById[id]?.name ?? id}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Legal note */}
      <div className="panel-tight mt-8 flex items-start gap-2.5">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-steel-300" />
        <p className="text-[12.5px] leading-relaxed text-ink-faint">
          Everything on this page is preliminary, educational, and RFQ-preparation guidance. Any
          actual testing must follow the official standard and be performed by a qualified or
          accredited lab, and any property value, standard reference, or supplier detail requires
          verification before sourcing. No certification, compliance, or guarantee is implied.
        </p>
      </div>
    </div>
  );
}
