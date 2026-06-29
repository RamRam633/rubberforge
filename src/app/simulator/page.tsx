import type { Metadata } from "next";
import Link from "next/link";
import { Simulator } from "@/components/Simulator";
import { FactoryLife } from "@/components/factorylife/FactoryLife";
import { FactoryFirstExperience } from "@/components/factorylife/FactoryFirstExperience";
import { WorkspaceTabs } from "@/components/factory/WorkspaceTabs";
import { ActiveRunBar } from "@/components/run/ActiveRunBar";
import { FileOutput, Layers, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Virtual Factory Command Center · RubberForge",
  description:
    "The virtual rubber factory command center: a 3D production line with factory-layer lenses (process, chemistry, quality, supply chain, people, maintenance, documentation, RFQ), zones, crew, routes, audit, and outputs.",
};

export default function SimulatorPage() {
  return (
    <>
      <FactoryFirstExperience />

      <WorkspaceTabs current="production" />

      <div className="mx-auto max-w-[1600px] px-3 pt-3 sm:px-5">
        <ActiveRunBar />
      </div>

      <Simulator />

      <FactoryLife />

      <section className="mx-auto max-w-[1600px] px-3 pb-12 sm:px-5">
        <div className="panel flex flex-wrap items-center justify-between gap-3 p-4">
          <div>
            <h2 className="font-display text-[16px] font-semibold text-ink">Turn this factory into an output</h2>
            <p className="mt-1 text-[12.5px] text-ink-muted">
              Generate a factory audit, quality plan, bill of process, traceability report, technical review, or RFQ
              package from the same model.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/systems" className="btn-ghost text-sm">
              <Layers className="h-4 w-4" /> Factory systems
            </Link>
            <Link href="/outputs" className="btn-primary text-sm">
              <FileOutput className="h-4 w-4" /> Generate an output <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
