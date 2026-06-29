import type { Metadata } from "next";
import Link from "next/link";
import {
  Layers,
  Atom,
  Beaker,
  Zap,
  BookOpen,
  Search,
  Activity,
  ArrowRight,
  Info,
} from "lucide-react";

import { polymerFamilies } from "@/lib/materialFamilies";
import { chemistryConcepts } from "@/lib/chemistryConcepts";
import { compoundIngredientCategories } from "@/lib/compoundIngredientCategories";
import { cureConcepts } from "@/lib/cureConcepts";
import { defectChemistry } from "@/lib/defectChemistryMap";

import { ChemistryConceptCard } from "@/components/chemistry/ChemistryConceptCard";
import { PolymerChemistryCard } from "@/components/chemistry/PolymerChemistryCard";
import { CrosslinkDiagram } from "@/components/chemistry/CrosslinkDiagram";
import { DefectChemistryPanel } from "@/components/chemistry/DefectChemistryPanel";
import { CompoundBuilder } from "@/components/chemistry/CompoundBuilder";

export const metadata: Metadata = {
  title: "Rubber Chemistry · RubberForge",
  description:
    "Learn the material science behind rubber, from raw polymer to finished elastomer. Conceptual only: crosslinking, compounding, cure systems, and the chemistry behind common defects.",
};

const LEVEL_CHIPS = [
  { icon: Layers, label: "Factory level", className: "border-steel-400/30 text-steel-300" },
  { icon: Beaker, label: "Material level", className: "border-molten-400/30 text-molten-300" },
  { icon: Atom, label: "Chemistry level", className: "border-violet-500/30 text-violet-300" },
];

const CROSSLINK_STATES: {
  density: "none" | "low" | "medium" | "high";
  caption: string;
  effect: string;
}[] = [
  {
    density: "none",
    caption: "Uncured",
    effect: "Independent chains slide and cold-flow: formable, but no shape memory.",
  },
  {
    density: "low",
    caption: "Low",
    effect: "Softer and more flexible, but generally higher compression-set risk.",
  },
  {
    density: "medium",
    caption: "Medium",
    effect: "A balanced network: a common target for resilient, dimensionally stable parts.",
  },
  {
    density: "high",
    caption: "High",
    effect: "Harder and stiffer, with lower elongation as the network tightens.",
  },
];

const FOOTER_LINKS = [
  {
    href: "/glossary",
    icon: BookOpen,
    title: "Chemistry glossary",
    blurb: "Plain-language definitions for every term used on this page, with why each one matters on the floor.",
  },
  {
    href: "/defects",
    icon: Search,
    title: "Defect Detective",
    blurb: "Work backward from a visual symptom to the chemistry and process causes behind it.",
  },
  {
    href: "/simulator",
    icon: Activity,
    title: "Chemistry View in the simulator",
    blurb: "Watch these concepts play out station by station as a compound moves through the line.",
  },
];

export default function ChemistryPage() {
  return (
    <div className="mx-auto max-w-[1300px] px-5 pb-12 pt-8">
      {/* 1. Hero header */}
      <header>
        <span className="kicker-violet">Rubber chemistry</span>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
          The chemistry behind the rubber
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          This is the learning core of RubberForge. We walk the material science from raw polymer
          to finished elastomer: what rubber actually is, how crosslinking gives it memory, what
          each ingredient class does, and how a cure turns a soft compound into a part. It is
          conceptual throughout, with no formulations, quantities, or recipes. The goal is fluency
          for scoping and review, not a spec sheet.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {LEVEL_CHIPS.map(({ icon: Icon, label, className }) => (
            <span key={label} className={`chip ${className} flex items-center gap-1.5`}>
              <Icon className="h-3.5 w-3.5" />
              {label}
            </span>
          ))}
        </div>
      </header>

      {/* 2. Concepts */}
      <section className="mt-12">
        <span className="kicker">Foundations</span>
        <h2 className="mt-2 font-display text-2xl font-semibold text-ink">Core concepts</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          The ideas that recur through every later section. Each carries an analogy and a single
          core principle.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {chemistryConcepts.map((concept) => (
            <ChemistryConceptCard key={concept.id} concept={concept} />
          ))}
        </div>
      </section>

      {/* 3. Crosslink density visual */}
      <section className="mt-12">
        <span className="kicker-violet">Crosslinking</span>
        <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
          Crosslink density, in pictures
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          Curing ties separate chains into one connected network. How tightly tends to set how the
          finished part behaves. These diagrams are conceptual and not to scale.
        </p>
        <div className="panel-raised mt-5 p-5">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {CROSSLINK_STATES.map(({ density, caption, effect }) => (
              <div key={density} className="flex flex-col">
                <CrosslinkDiagram
                  density={density}
                  className="w-full rounded-xl border border-line"
                  label={`Crosslink density: ${caption}`}
                />
                <div className="mt-3 flex items-center gap-2">
                  <span className="label-mono text-violet-300">{caption}</span>
                  <span className="h-px flex-1 bg-line" />
                </div>
                <p className="mt-1.5 text-[12px] leading-relaxed text-ink-muted">{effect}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Base polymer families */}
      <section className="mt-12">
        <span className="kicker">Backbones</span>
        <h2 className="mt-2 font-display text-2xl font-semibold text-ink">Base polymer families</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          The polymer family sets the ceiling on what a compound can do. Backbone saturation,
          polarity, and side groups explain most of the family-to-family differences below.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {polymerFamilies.map((material) => (
            <PolymerChemistryCard key={material.id} material={material} />
          ))}
        </div>
      </section>

      {/* 5. Compound ingredient categories */}
      <section className="mt-12">
        <span className="kicker-violet">Compounding</span>
        <h2 className="mt-2 font-display text-2xl font-semibold text-ink">Ingredient categories</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          A finished rubber is a recipe, not a single material. Each ingredient class is a
          deliberate dial. Improving one property often costs another, which is the art of
          compounding.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {compoundIngredientCategories.map((cat) => (
            <div key={cat.id} className="panel flex h-full flex-col p-4">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/10 text-violet-300">
                  <Beaker className="h-4 w-4" />
                </span>
                <h3 className="font-display text-[15px] font-semibold leading-tight text-ink">
                  {cat.category}
                </h3>
              </div>
              <p className="mt-2.5 text-[12.5px] leading-relaxed text-ink-muted">{cat.purpose}</p>
              <div className="mt-auto space-y-2.5 border-t border-line pt-3">
                <div>
                  <div className="label-mono mb-1 text-pass">Property effect</div>
                  <p className="text-[12px] leading-relaxed text-ink-muted">{cat.propertyEffect}</p>
                </div>
                <div>
                  <div className="label-mono mb-1 text-molten-300">Risk</div>
                  <p className="text-[12px] leading-relaxed text-ink-muted">{cat.risks}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Cure concepts */}
      <section className="mt-12">
        <span className="kicker">Vulcanization</span>
        <h2 className="mt-2 font-display text-2xl font-semibold text-ink">Cure systems</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          The cure is what converts a formable stock into an elastic part. Different backbones need
          different chemistries to build the network. These are conceptual overviews, not cure
          schedules.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {cureConcepts.map((cure) => (
            <div key={cure.id} className="panel flex h-full flex-col p-4">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 shrink-0 text-molten-300" />
                <h3 className="font-display text-[15px] font-semibold leading-tight text-ink">
                  {cure.cureType}
                </h3>
              </div>
              <div className="mt-3">
                <div className="label-mono mb-1 text-violet-300">Mechanism</div>
                <p className="text-[12px] leading-relaxed text-ink-muted">{cure.mechanism}</p>
              </div>
              <div className="mt-3">
                <div className="label-mono mb-1 text-pass">What changes</div>
                <p className="text-[12px] leading-relaxed text-ink-muted">{cure.whatChanges}</p>
              </div>
              <div className="mt-auto border-t border-line pt-3">
                <div className="label-mono mb-1 text-molten-300">Risks</div>
                <p className="text-[12px] leading-relaxed text-ink-muted">{cure.risks}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Compound builder */}
      <section className="mt-12">
        <span className="kicker-violet">Try it</span>
        <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
          Conceptual compound builder
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          Turn the dials below to see how choices trend qualitatively. This is an educational
          estimate of tendencies, never a recipe, and final material selection requires technical
          review.
        </p>
        <div className="mt-5">
          <CompoundBuilder />
        </div>
      </section>

      {/* 8. Chemistry-to-defect map */}
      <section className="mt-12">
        <span className="kicker">Cause and effect</span>
        <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
          From chemistry to defect
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          Most defects sit at the meeting point of chemistry and process. Each panel pairs the
          chemistry or material cause with the process cause behind the same symptom.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {defectChemistry.map((defect) => (
            <DefectChemistryPanel key={defect.id} defect={defect} revealed />
          ))}
        </div>
      </section>

      {/* Review note */}
      <div className="panel-tight mt-8 flex items-start gap-2.5">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-steel-300" />
        <p className="text-[12.5px] leading-relaxed text-ink-faint">
          Everything here is conceptual and hedged on purpose. Behaviors are described as general
          tendencies, not guarantees, and final material selection requires technical review against
          the specific part, service environment, and any cosmetic or regulatory requirement.
        </p>
      </div>

      {/* 9. Footer CTA cards */}
      <section className="mt-12">
        <span className="kicker-violet">Keep going</span>
        <h2 className="mt-2 font-display text-2xl font-semibold text-ink">Where to next</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {FOOTER_LINKS.map(({ href, icon: Icon, title, blurb }) => (
            <Link
              key={href}
              href={href}
              className="panel-raised group flex h-full flex-col p-5 transition-colors hover:border-line-strong"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/10 text-violet-300">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 font-display text-[16px] font-semibold text-ink">{title}</h3>
              <p className="mt-1.5 flex-1 text-[12.5px] leading-relaxed text-ink-muted">{blurb}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-medium text-violet-300">
                Open
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
