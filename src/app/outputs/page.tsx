import type { Metadata } from "next";
import Link from "next/link";
import { FactoryOutputsGrid } from "@/components/brand/FactoryOutputsGrid";
import { FactoryFlow } from "@/components/brand/FactoryFlow";
import { DigitalThreadVisual } from "@/components/brand/DigitalThreadVisual";
import { ActiveRunBar } from "@/components/run/ActiveRunBar";
import { FactoryAuditMode } from "@/components/factorylife/FactoryAuditMode";
import { InspectionPlanBuilder } from "@/components/quality/InspectionPlanBuilder";
import { BillOfProcessBuilder } from "@/components/intel/BillOfProcessBuilder";
import { TraceabilityChain } from "@/components/quality/TraceabilityChain";
import { traceabilityStages } from "@/lib/traceabilityData";
import { HOME_INTROS, BALANCED_RFQ_LINE } from "@/lib/factoryNarrative";
import { FileOutput, FileText, ScrollText, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Factory Outputs · RubberForge",
  description:
    "The virtual rubber factory generates technical outputs: RFQ package, factory audit report, quality inspection plan, bill of process, traceability report, and technical review. RFQ is one output among many.",
};

function OutputSection({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-12 scroll-mt-20">
      <h2 className="font-display text-2xl font-semibold text-ink">{title}</h2>
      <p className="mt-1.5 max-w-2xl text-[13.5px] leading-relaxed text-ink-muted">{intro}</p>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function OutputsPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-5 pb-14 pt-10 sm:pt-14">
      <section>
        <div className="flex items-center gap-2">
          <FileOutput className="h-4 w-4 text-violet-300" />
          <span className="kicker-violet">Factory output center</span>
        </div>
        <h1 className="mt-2 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-[44px]">
          What the virtual factory <span className="text-gradient">generates</span>
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-muted">{HOME_INTROS.outputs}</p>
        <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-ink-faint">{BALANCED_RFQ_LINE}</p>
      </section>

      <section className="mt-6">
        <ActiveRunBar startable />
      </section>

      <section className="mt-10">
        <span className="kicker">From factory to outputs</span>
        <h2 className="mt-1.5 font-display text-xl font-semibold text-ink">Every output draws on the whole factory</h2>
        <div className="mt-4">
          <FactoryFlow />
        </div>
      </section>

      <section className="mt-10">
        <span className="kicker">The digital thread</span>
        <h2 className="mt-1.5 font-display text-xl font-semibold text-ink">Outputs are assembled from the thread</h2>
        <p className="mt-1.5 max-w-2xl text-[13px] leading-relaxed text-ink-muted">
          Every output reads from the same traceable chain of records, stewarded by AI agents and reviewed by accountable
          humans.
        </p>
        <div className="mt-4">
          <DigitalThreadVisual />
        </div>
      </section>

      <section className="mt-12">
        <span className="kicker">Six outputs</span>
        <h2 className="mt-1.5 font-display text-2xl font-semibold text-ink">One model, many deliverables</h2>
        <div className="mt-5">
          <FactoryOutputsGrid />
        </div>
      </section>

      {/* Live generators */}
      <OutputSection
        id="factory-audit"
        title="Factory audit report"
        intro="Confirm the conceptual checkpoints a buyer or auditor looks for across the line and see a preliminary readiness score. This is an educational self-assessment, not a certification."
      >
        <FactoryAuditMode />
      </OutputSection>

      <OutputSection
        id="quality-plan"
        title="Quality inspection plan"
        intro="Pick a product and material to draft a preliminary plan of recommended checks, standards to consider, and documents to request. Requires technical review before real use."
      >
        <InspectionPlanBuilder />
        <div className="mt-3 flex flex-wrap gap-2">
          <Link href="/qa-lab" className="btn-ghost text-[13px]">Run the test plan in the QA Lab <ArrowRight className="h-4 w-4" /></Link>
          <Link href="/qms#readiness" className="btn-ghost text-[13px]">See the QMS readiness model <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </OutputSection>

      <OutputSection
        id="bill-of-process"
        title="Bill of process"
        intro="A conceptual manufacturing route for the selected product and polymer: stations, equipment, process checkpoints, and review owners. No settings or recipes."
      >
        <BillOfProcessBuilder />
      </OutputSection>

      <OutputSection
        id="traceability-report"
        title="Traceability report"
        intro="How a finished rubber product links back through cure, calendering, mixing, and batch tickets to its raw-material lots. Illustrative identifiers, not live records."
      >
        <div className="panel p-4">
          <TraceabilityChain stages={traceabilityStages} />
        </div>
      </OutputSection>

      {/* RFQ + technical review handoffs */}
      <section className="mt-12 grid gap-3 sm:grid-cols-2">
        <div id="rfq-package" className="panel-raised flex flex-col p-5 scroll-mt-20">
          <FileText className="h-6 w-6 text-[#a855f7]" />
          <h2 className="mt-2 font-display text-[17px] font-semibold text-ink">RFQ package</h2>
          <p className="mt-1.5 flex-1 text-[12.5px] leading-relaxed text-ink-muted">
            Turn a product and material selection into a quote-ready technical package with a completeness score, route,
            quality plan, and review notes. One output of the virtual factory, no pricing.
          </p>
          <Link href="/quote" className="btn-primary mt-4 w-fit text-[13px]">
            Open RFQ builder <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div id="technical-review" className="panel-raised flex flex-col p-5 scroll-mt-20">
          <ScrollText className="h-6 w-6 text-steel-400" />
          <h2 className="mt-2 font-display text-[17px] font-semibold text-ink">Technical review summary</h2>
          <p className="mt-1.5 flex-1 text-[12.5px] leading-relaxed text-ink-muted">
            An internal engineering, quality, sales, and production view assembled from the same model: route,
            equipment, chemistry, quality, standards, open questions, and recommended next action.
          </p>
          <Link href="/quote" className="btn-ghost mt-4 w-fit text-[13px]">
            Build in the RFQ engine (Factory Review mode) <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
