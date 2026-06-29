import type { Metadata } from "next";
import Link from "next/link";
import { FactorySystemsGrid } from "@/components/brand/FactorySystemsGrid";
import { FactoryFlow } from "@/components/brand/FactoryFlow";
import { HOME_INTROS } from "@/lib/factoryNarrative";
import { factorySystems } from "@/lib/factorySystems";
import { PlayCircle, FileOutput, Layers, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Factory Systems · RubberForge",
  description:
    "The virtual rubber factory as ten connected systems: materials, chemistry, equipment, process, people, quality, supply chain, maintenance, documentation, and outputs.",
};

export default function SystemsPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-5 pb-14 pt-10 sm:pt-14">
      <section>
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-violet-300" />
          <span className="kicker-violet">The connected factory</span>
        </div>
        <h1 className="mt-2 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-[44px]">
          One factory, <span className="text-gradient">ten connected systems</span>
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-muted">{HOME_INTROS.factorySystems}</p>
        <div className="mt-5 flex flex-wrap gap-2.5">
          <Link href="/simulator" className="btn-primary text-[14px]">
            <PlayCircle className="h-4 w-4" /> Open in the Virtual Factory
          </Link>
          <Link href="/outputs" className="btn-ghost text-[14px]">
            <FileOutput className="h-4 w-4" /> See factory outputs
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <span className="kicker">From factory to outputs</span>
        <h2 className="mt-1.5 font-display text-2xl font-semibold text-ink">How the systems connect</h2>
        <div className="mt-5">
          <FactoryFlow />
        </div>
      </section>

      <section className="mt-12">
        <span className="kicker">The systems</span>
        <h2 className="mt-1.5 font-display text-2xl font-semibold text-ink">{factorySystems.length} systems, one model</h2>
        <p className="mt-1.5 max-w-2xl text-[13.5px] leading-relaxed text-ink-muted">
          Each system maps to a layer you can switch on in the command center and feeds one or more of the factory
          outputs. Together they make the app a complete digital factory, not disconnected pages.
        </p>
        <div className="mt-5">
          <FactorySystemsGrid />
        </div>
      </section>

      <section className="mt-12 panel-raised flex flex-wrap items-center justify-between gap-3 p-5">
        <div>
          <h2 className="font-display text-[17px] font-semibold text-ink">See the systems in motion</h2>
          <p className="mt-1 text-[12.5px] text-ink-muted">
            Enter the command center and toggle each layer over a live station on the 3D line.
          </p>
        </div>
        <Link href="/simulator" className="btn-primary text-[14px]">
          Enter the Virtual Factory <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
