import Link from "next/link";
import { materialFamilies } from "@/lib/materialFamilies";
import { productCategories } from "@/lib/productCategories";
import {
  HERO_HEADLINE,
  HERO_SUB,
  PRODUCT_STATEMENT_VF,
  PRIMARY_CTAS,
  SECONDARY_CTA,
  HOME_INTROS,
  SIMULATION_MODES,
  BALANCED_RFQ_LINE,
} from "@/lib/factoryNarrative";
import { VayuBadge } from "@/components/brand/VayuBadge";
import { QMSBadge } from "@/components/qms/QMSBadge";
import { FactorySystemsGrid } from "@/components/brand/FactorySystemsGrid";
import { FactoryOutputsGrid } from "@/components/brand/FactoryOutputsGrid";
import { FactoryFlow } from "@/components/brand/FactoryFlow";
import { DigitalThreadVisual } from "@/components/brand/DigitalThreadVisual";
import { FactoryHeroVisual } from "@/components/brand/FactoryHeroVisual";
import { DigitalTwinMaturity } from "@/components/brand/DigitalTwinMaturity";
import { aiAgents } from "@/lib/aiAgents";
import { OM_HOME_TITLE, OM_HOME_INTRO, HUMAN_ACCOUNTABILITY_LINE } from "@/lib/operatingModelCopy";
import {
  PlayCircle,
  Layers,
  Footprints,
  FileOutput,
  FileText,
  Boxes,
  Network,
  ArrowRight,
  MonitorPlay,
  ShieldCheck,
  FlaskConical,
  Bot,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

const CTA_ICONS: Record<string, LucideIcon> = {
  "enter-factory": PlayCircle,
  "explore-systems": Layers,
  walkthrough: Footprints,
  "generate-output": FileOutput,
};

// The factory environment the user can walk through (matches the home intro).
const FACTORY_STAGES = [
  "Material warehouse",
  "Weighing",
  "Mixing",
  "Milling",
  "Calendering",
  "Curing",
  "Cooling",
  "Finishing",
  "Quality lab",
  "Packaging",
  "Technical review",
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-[1200px] px-5 pb-14 pt-10 sm:pt-14">
      {/* Hero */}
      <section className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="kicker">Virtual rubber factory</span>
            <VayuBadge />
            <QMSBadge compact />
          </div>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink text-balance sm:text-5xl">
            Explore a complete{" "}
            <span className="text-gradient glow-text-violet">virtual rubber factory.</span>
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-muted">{HERO_SUB}</p>
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            {PRIMARY_CTAS.map((c, i) => {
              const Icon = CTA_ICONS[c.intent] ?? PlayCircle;
              return (
                <Link
                  key={c.intent}
                  href={c.target}
                  className={`${i === 0 ? "btn-primary" : "btn-ghost"} text-[14px]`}
                >
                  <Icon className={i === 0 ? "h-5 w-5" : "h-4 w-4"} /> {c.label}
                </Link>
              );
            })}
            <Link href="/quote" className="inline-flex items-center gap-1.5 px-1 text-[13px] text-ink-faint hover:text-ink-muted">
              <FileText className="h-3.5 w-3.5" /> {SECONDARY_CTA}
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1.5 text-[12px] text-ink-faint">
            <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-violet-400" /> {materialFamilies.length} material families</span>
            <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-blue-400" /> {productCategories.length} product forms</span>
            <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-pass" /> 10-station 3D line</span>
          </div>
        </div>
        <FactoryHeroVisual />
      </section>

      {/* A. The virtual factory */}
      <Section kicker="The virtual factory" title="A factory you can walk through, end to end" intro={HOME_INTROS.theVirtualFactory}>
        <div className="panel-raised p-4 sm:p-5">
          <div className="flex flex-wrap items-center gap-1.5">
            {FACTORY_STAGES.map((s, i) => (
              <span key={s} className="flex items-center gap-1.5">
                <span className="rounded-md border border-line bg-base-850/50 px-2.5 py-1.5 text-[12px] text-ink-muted">{s}</span>
                {i < FACTORY_STAGES.length - 1 && <ArrowRight className="h-3 w-3 text-ink-faint" />}
              </span>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2.5">
            <Link href="/simulator" className="btn-primary text-[14px]"><PlayCircle className="h-4 w-4" /> Enter the Virtual Factory</Link>
            <Link href="/systems" className="btn-ghost text-[14px]"><Layers className="h-4 w-4" /> Explore factory systems</Link>
          </div>
        </div>
      </Section>

      {/* B. Factory systems */}
      <Section kicker="Factory systems" title="A connected system, not separate pages" intro={HOME_INTROS.factorySystems}>
        <FactorySystemsGrid compact />
        <Link href="/systems" className="mt-3 inline-flex items-center gap-1 text-[13px] text-violet-300 hover:text-violet-200">
          See all ten factory systems <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      {/* Quality management system */}
      <Section kicker="Quality management" title="Built around a quality-management system" intro="RubberForge does not just visualize machines. The virtual factory is modeled as an ISO 9001-aligned quality-management system: process ownership, controlled documents, traceability, inspection plans, nonconformance and CAPA, internal audits, management review, and continual improvement.">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          <div className="panel-raised flex flex-col p-5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-violet-300" />
              <h3 className="font-display text-[16px] font-semibold text-ink">QMS Command Center</h3>
              <QMSBadge compact />
            </div>
            <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-ink-muted">
              The management system behind the factory: clause map, risk register, document control, supplier control,
              calibration, audits, and a QMS readiness model. A modeling and audit-readiness tool, not a certificate.
            </p>
            <Link href="/qms" className="btn-primary mt-3 w-fit text-[13px]">Open QMS Command Center <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="panel-raised flex flex-col p-5">
            <div className="flex items-center gap-2">
              <FlaskConical className="h-5 w-5 text-violet-300" />
              <h3 className="font-display text-[16px] font-semibold text-ink">Virtual QA Lab</h3>
            </div>
            <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-ink-muted">
              A simulated rubber testing lab: MDR cure curves, tensile, hardness, compression set, aging, and inspection,
              traced from sample to demo release decision. Educational only, no certificates or compliance claims.
            </p>
            <Link href="/qa-lab" className="btn-primary mt-3 w-fit text-[13px]">Enter the QA Lab <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </Section>

      {/* The digital thread */}
      <Section kicker="The digital thread" title="One traceable thread, requirement to output" intro="The backbone of the virtual factory: a single chain that links a customer requirement through materials, batch, process, QA, and QMS records to a finished, documented output. Each node is stewarded by an AI agent and reviewed by an accountable human.">
        <DigitalThreadVisual />
      </Section>

      {/* AI-assisted operating model */}
      <Section kicker="Digital factory operating model" title={OM_HOME_TITLE} intro={OM_HOME_INTRO}>
        <div className="panel-raised p-4 sm:p-5">
          <div className="flex flex-wrap gap-1.5">
            {aiAgents.map((a) => (
              <span key={a.id} className="chip inline-flex items-center gap-1 border-line text-ink-muted">
                <Bot className="h-3 w-3 text-violet-300" /> {a.name.replace(" Agent", "")}
              </span>
            ))}
          </div>
          <div className="mt-3 flex items-start gap-2 rounded-lg border border-pass/30 bg-pass/[0.06] px-3 py-2">
            <UserCheck className="mt-0.5 h-4 w-4 shrink-0 text-pass" />
            <p className="text-[12px] leading-relaxed text-ink-muted">
              <span className="font-medium text-pass">Human-accountable. </span>{HUMAN_ACCOUNTABILITY_LINE}
            </p>
          </div>
          <Link href="/qms" className="mt-3 inline-flex items-center gap-1 text-[13px] text-violet-300 hover:text-violet-200">
            Explore the AI operating model in the QMS Command Center <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* C. Simulation modes */}
      <Section kicker="Factory modes" title="Many ways to read the same factory">
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {SIMULATION_MODES.map((m) => (
            <div key={m.name} className="panel flex items-start gap-2.5 p-3.5">
              <MonitorPlay className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" />
              <div>
                <h3 className="font-display text-[13.5px] font-semibold leading-tight text-ink">{m.name}</h3>
                <p className="mt-1 text-[11.5px] leading-relaxed text-ink-muted">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* D. Factory outputs */}
      <Section kicker="Factory outputs" title="What the factory generates" intro={HOME_INTROS.outputs}>
        <FactoryOutputsGrid />
        <p className="mt-3 text-[12.5px] leading-relaxed text-ink-faint">{BALANCED_RFQ_LINE}</p>
        <Link href="/outputs" className="mt-2 inline-flex items-center gap-1 text-[13px] text-violet-300 hover:text-violet-200">
          Open the factory output center <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      {/* From factory to outputs flow */}
      <Section kicker="From virtual factory to outputs" title="One thread, model to deliverable">
        <FactoryFlow />
      </Section>

      {/* E. Digital twin roadmap */}
      <Section kicker="Digital twin roadmap" title="Honest about what is built and what is next" intro={HOME_INTROS.roadmap}>
        <DigitalTwinMaturity />
      </Section>

      {/* Closing */}
      <section className="mt-16 panel-raised flex flex-col items-center gap-4 px-6 py-10 text-center">
        <Network className="h-7 w-7 text-violet-300" />
        <h2 className="font-display text-2xl font-semibold text-ink">{HOME_INTROS.closingHeadline}</h2>
        <p className="max-w-xl text-sm text-ink-muted">{HOME_INTROS.closingSub}</p>
        <p className="max-w-xl text-[12px] text-ink-faint">{PRODUCT_STATEMENT_VF}</p>
        <div className="flex flex-wrap justify-center gap-2">
          <Link href="/simulator" className="btn-primary text-[15px]">
            <PlayCircle className="h-5 w-5" /> Enter the Virtual Factory
          </Link>
          <Link href="/outputs" className="btn-ghost text-[15px]">
            <FileOutput className="h-4 w-4" /> Generate an output
          </Link>
          <Link href="/quote" className="inline-flex items-center gap-1.5 px-2 text-[13px] text-ink-faint hover:text-ink-muted">
            <FileText className="h-3.5 w-3.5" /> {SECONDARY_CTA}
          </Link>
        </div>
      </section>
    </div>
  );
}

function Section({ kicker, title, intro, children }: { kicker: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section className="mt-16">
      <span className="kicker">{kicker}</span>
      <h2 className="mt-1.5 font-display text-2xl font-semibold text-ink">{title}</h2>
      {intro && <p className="mt-1.5 max-w-2xl text-[13.5px] leading-relaxed text-ink-muted">{intro}</p>}
      <div className="mt-5">{children}</div>
    </section>
  );
}
