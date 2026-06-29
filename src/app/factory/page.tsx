import type { Metadata } from "next";
import Link from "next/link";
import { CapabilityCard } from "@/components/platform/CapabilityCard";
import { capabilities } from "@/lib/capabilities";
import { Boxes, Play, BookOpen, ArrowRight, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Factory & Capability · RubberForge",
  description:
    "The plant's process capabilities, from compounding to finished part, tied to the live 3D rubber sheet simulator.",
};

const inSimulatorCount = capabilities.filter((c) => c.inSimulator).length;

export default function FactoryPage() {
  return (
    <div className="mx-auto max-w-[1300px] px-5 pb-12 pt-8">
      <header>
        <span className="kicker">Factory &amp; capability</span>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
          From compound to finished part
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          The plant&apos;s process capabilities, modeled conceptually and tied directly to the live 3D
          simulator. Each capability below maps to one or more stations on the rubber sheet line.
          Where a capability runs in the 3D model, you can watch it in motion.
        </p>
      </header>

      {/* Capability grid */}
      <section className="mt-7">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="kicker-violet">Process capabilities</span>
            <h2 className="mt-1.5 font-display text-2xl font-semibold text-ink">
              What the plant can do
            </h2>
          </div>
          <span className="label-mono shrink-0 text-ink-faint">
            {inSimulatorCount}/{capabilities.length} in simulator
          </span>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.id} capability={capability} />
          ))}
        </div>
      </section>

      {/* See it in motion */}
      <section className="mt-12">
        <span className="kicker">See it in motion</span>
        <h2 className="mt-1.5 font-display text-2xl font-semibold text-ink">
          Two ways to walk the line
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          The capabilities above are not just a list. They are driven by the same data that powers
          the interactive 3D line and the readable process reference.
        </p>
        <div className="mt-5 grid gap-3 lg:grid-cols-2">
          <Link
            href="/simulator"
            className="panel-raised group flex h-full flex-col p-5 transition-colors hover:border-line-strong"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/10 text-violet-300">
                <Play className="h-5 w-5" />
              </span>
              <span className="chip border-pass/40 text-pass">Available now</span>
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-ink">
              The 3D rubber sheet line
            </h3>
            <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-ink-muted">
              A running 3D model of the sheet line: weighing, internal mixing, two-roll milling,
              calendering, vulcanization, slitting, inspection, and the finished roll. Watch the
              material change state at each station.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-violet-300 group-hover:text-violet-200">
              Open the simulator
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>

          <Link
            href="/process"
            className="panel-raised group flex h-full flex-col p-5 transition-colors hover:border-line-strong"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-steel-300/30 bg-steel-300/10 text-steel-300">
                <BookOpen className="h-5 w-5" />
              </span>
              <span className="chip text-ink-faint">Reference</span>
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-ink">
              The process library
            </h3>
            <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-ink-muted">
              The readable companion to the 3D line. Every station explained: what goes in, what
              comes out, what physically changes, why it matters, and what can go wrong. Conceptual
              only, no recipes or settings.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-steel-300 group-hover:text-ink">
              Read the library
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </section>

      {/* Other product routes */}
      <section className="mt-12">
        <span className="kicker">Beyond the sheet line</span>
        <h2 className="mt-1.5 font-display text-2xl font-semibold text-ink">
          Other product routes
        </h2>
        <div className="mt-5 grid gap-3 lg:grid-cols-2">
          <div className="panel flex h-full flex-col p-5">
            <div className="flex items-center gap-2.5">
              <Layers className="h-5 w-5 text-steel-300" />
              <h3 className="font-display text-[15px] font-semibold text-ink">
                Simplified route previews
              </h3>
            </div>
            <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-ink-muted">
              Gasket, strip, and fabric-reinforced sheet share most of the sheet line and are shown
              today as simplified route previews. They branch from calendering and curing into
              cutting, slitting, and die-cutting rather than getting their own 3D station set.
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="chip">Gasket</span>
              <span className="chip">Strip</span>
              <span className="chip">Fabric-reinforced</span>
            </div>
          </div>

          <div className="panel flex h-full flex-col p-5">
            <div className="flex items-center gap-2.5">
              <Boxes className="h-5 w-5 text-ink-faint" />
              <h3 className="font-display text-[15px] font-semibold text-ink">
                Future modules
              </h3>
            </div>
            <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-ink-muted">
              Molded parts, sleeves, bushings, and seals follow a different forming path than flat
              sheet. They are modeled as routes today, with dedicated 3D modules planned. Until then,
              molding is shown as a route rather than a running station.
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="chip text-ink-faint">Molded</span>
              <span className="chip text-ink-faint">Sleeve</span>
              <span className="chip text-ink-faint">Bushing</span>
              <span className="chip text-ink-faint">Seal</span>
            </div>
          </div>
        </div>
        <Link
          href="/products"
          className="btn-ghost mt-5 inline-flex items-center gap-1.5"
        >
          Browse all product routes
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
