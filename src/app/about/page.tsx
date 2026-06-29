import type { Metadata } from "next";
import Link from "next/link";
import { VayuBadge, VayuWordmark } from "@/components/brand/VayuBadge";
import { QMSBadge } from "@/components/qms/QMSBadge";
import { FactoryHeroVisual } from "@/components/brand/FactoryHeroVisual";
import { DigitalThreadVisual } from "@/components/brand/DigitalThreadVisual";
import { DigitalTwinReadinessPanel } from "@/components/brand/DigitalTwinReadinessPanel";
import { DigitalTwinMaturity } from "@/components/brand/DigitalTwinMaturity";
import { QMSDisclaimer } from "@/components/qms/QMSDisclaimer";
import {
  Factory, FlaskConical, ShieldCheck, Boxes, Truck, Bot, GitBranch, FileOutput, ScanLine,
  CircleCheck, CircleX, CircleDashed, ShieldAlert, PlayCircle, FileText, ArrowRight, ExternalLink, type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About · RubberForge by VayuAI",
  description:
    "RubberForge by VayuAI is a digital twin-style virtual rubber factory prototype: a digital environment where machines, materials, chemistry, people, AI agents, quality systems, documentation, and factory outputs are seen together. A VayuAI take on industrial digitalization for custom rubber manufacturing.",
};

const DEMONSTRATES: { label: string; href: string; Icon: LucideIcon }[] = [
  { label: "Production floor", href: "/simulator", Icon: Factory },
  { label: "QA Lab", href: "/qa-lab", Icon: FlaskConical },
  { label: "ISO 9001-aligned QMS model", href: "/qms", Icon: ShieldCheck },
  { label: "Material and chemistry intelligence", href: "/materials", Icon: Boxes },
  { label: "Equipment and supply chain", href: "/factory-intelligence", Icon: Truck },
  { label: "People and AI-agent operating model", href: "/qms", Icon: Bot },
  { label: "Digital thread", href: "/outputs", Icon: GitBranch },
  { label: "Traceability", href: "/quality-lab", Icon: ScanLine },
  { label: "Factory outputs", href: "/outputs", Icon: FileOutput },
];

const OUTPUTS: { label: string; href: string }[] = [
  { label: "RFQ package", href: "/quote" },
  { label: "Factory audit report", href: "/outputs#factory-audit" },
  { label: "Quality inspection plan", href: "/outputs#quality-plan" },
  { label: "Bill of process", href: "/outputs#bill-of-process" },
  { label: "Traceability report", href: "/outputs#traceability-report" },
  { label: "Lab report preview", href: "/qa-lab" },
  { label: "QMS readiness summary", href: "/qms#readiness" },
  { label: "Technical review package", href: "/quote" },
];

const NOT_YET = [
  "Connected to live production data",
  "Connected to sensors, PLCs, ERP, MES, or real QA records",
  "An official digital twin of a real factory",
  "An ISO 9001 certificate or official compliance",
  "Official testing, certified test reports, or certified quality records",
  "A pricing engine or production work instructions",
];

const FUTURE = [
  "Manufacturer-specific factory configuration",
  "Real equipment and capability data",
  "Document upload and a live RFQ database",
  "Quality record and supplier-data integration",
  "ERP / MES / CRM integration",
  "Machine and sensor data feeds",
  "Production analytics, simulation, and optimization",
  "Predictive quality and a live digital twin",
];

const CURRENT = [
  "Interactive 3D production floor",
  "Virtual QA Lab",
  "Materials and products library",
  "Rubber chemistry layer",
  "Quality, testing, and standards logic",
  "ISO 9001-aligned QMS model and AI operating model",
  "Connected factory systems and digital thread",
  "Generated factory outputs",
];

function Section({ kicker, title, intro, children, KIcon }: { kicker: string; title: string; intro?: string; children?: React.ReactNode; KIcon?: LucideIcon }) {
  return (
    <section className="mt-14">
      <span className="flex items-center gap-1.5 kicker">
        {KIcon && <KIcon className="h-3.5 w-3.5 text-violet-300" />} {kicker}
      </span>
      <h2 className="mt-1.5 font-display text-2xl font-semibold text-ink">{title}</h2>
      {intro && <p className="mt-2 max-w-3xl text-[14px] leading-relaxed text-ink-muted">{intro}</p>}
      {children && <div className="mt-5">{children}</div>}
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 pb-16 pt-10 sm:pt-14">
      {/* Vision-first header */}
      <header className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="kicker">Industrial digitalization</span>
            <VayuBadge />
            <QMSBadge compact />
          </div>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-ink text-balance sm:text-[44px]">
            The virtual factory, applied to <span className="text-gradient">rubber</span>
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
            Industrial manufacturers are moving beyond static websites, PDF catalogs, and disconnected process
            knowledge. The next step is the virtual factory: a digital environment where machines, materials, people,
            quality systems, documentation, and factory outputs can be seen together. RubberForge by VayuAI is a
            prototype of that idea for custom rubber manufacturing.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <Link href="/simulator" className="btn-primary text-[14px]"><PlayCircle className="h-4 w-4" /> Enter the Virtual Factory</Link>
            <Link href="/outputs" className="btn-ghost text-[14px]"><FileOutput className="h-4 w-4" /> See factory outputs</Link>
          </div>
        </div>
        <FactoryHeroVisual />
      </header>

      {/* 1. Why we built it */}
      <Section kicker="Why we built RubberForge" title="Factory capability deserves better than a PDF" KIcon={Factory}>
        <p className="-mt-1 max-w-3xl text-[14px] leading-relaxed text-ink-muted">
          Many industrial manufacturers still communicate complex factory capability through static websites, PDFs,
          forms, emails, and tribal knowledge. Rubber manufacturing is especially process-heavy: polymer chemistry,
          compounding, mixing, calendering, curing, QA testing, QMS records, traceability, and documentation all matter,
          and they are deeply connected. RubberForge was built to show what happens when that knowledge becomes an
          interactive virtual factory, where each decision carries its material, process, and quality context with it.
        </p>
      </Section>

      {/* 2. The virtual factory idea */}
      <Section
        kicker="The virtual factory idea"
        title="A digital representation of a real factory"
        intro="Virtual factories are becoming a major direction in industrial digitalization. They let teams visualize factory layouts, process flows, resources, operations, and quality decisions in context, so a plant can be modeled, simulated, analyzed, and planned before and alongside physical operations. The long-term direction is connecting 3D factory models with process data, documentation, quality records, sensors, AI systems, and operational workflows."
      >
        <div className="panel flex items-start gap-3 p-4">
          <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" />
          <p className="text-[12.5px] leading-relaxed text-ink-muted">
            <span className="font-medium text-ink">Inspired by the virtual factory direction. </span>
            Virtual factory thinking, described by{" "}
            <a href="https://blogs.nvidia.com/blog/virtual-factories-industrial-digitalization/" target="_blank" rel="noopener noreferrer" className="text-violet-300 underline-offset-2 hover:underline">
              NVIDIA
            </a>{" "}
            and others in industrial digitalization, points toward factories that can be modeled, simulated, analyzed,
            and eventually connected to real operational data. RubberForge explores that pattern for rubber
            manufacturing. It is inspired by that direction, not built with or affiliated with any of those vendors, and
            it is a prototype rather than a live twin.
          </p>
        </div>
      </Section>

      {/* 3. What it demonstrates */}
      <Section kicker="What RubberForge demonstrates" title="A digital twin-style virtual rubber factory" KIcon={Boxes}>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {DEMONSTRATES.map((d) => {
            const Icon = d.Icon;
            return (
              <Link key={d.label} href={d.href} className="interactive-card flex items-center gap-2.5 p-3.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/10">
                  <Icon className="h-4 w-4 text-violet-300" />
                </span>
                <span className="text-[13px] font-medium text-ink">{d.label}</span>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* 4. The digital thread */}
      <Section
        kicker="The digital thread"
        title="One traceable thread is the backbone"
        intro="Everything in RubberForge hangs off a single chain of records, from a customer requirement to a finished, documented output. Each node is stewarded by an AI agent and reviewed by an accountable human. Conceptual, demo records only."
        KIcon={GitBranch}
      >
        <DigitalThreadVisual />
      </Section>

      {/* 5. What it can generate */}
      <Section
        kicker="What it can generate"
        title="Several outputs, RFQ is one of them"
        intro="From the same factory model, RubberForge can assemble several technical outputs. The RFQ package is one output, not the product identity."
        KIcon={FileOutput}
      >
        <div className="flex flex-wrap gap-2">
          {OUTPUTS.map((o) => (
            <Link key={o.label} href={o.href} className="chip border-line text-ink-muted transition hover:border-line-strong hover:text-ink">
              {o.label}
            </Link>
          ))}
        </div>
      </Section>

      {/* 6. Current capability */}
      <Section kicker="Current prototype capability" title="What exists today" KIcon={CircleCheck}>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="panel p-4">
            <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
              {CURRENT.map((c) => (
                <li key={c} className="flex items-start gap-2 text-[12.5px] leading-relaxed text-ink-muted">
                  <CircleCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-pass" /> {c}
                </li>
              ))}
            </ul>
          </div>
          <DigitalTwinReadinessPanel />
        </div>
      </Section>

      {/* 7. What it is not yet (after the vision) */}
      <Section kicker="What it is not yet" title="An honest line on the limits" KIcon={CircleX}>
        <div className="panel p-4">
          <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
            {NOT_YET.map((n) => (
              <li key={n} className="flex items-start gap-2 text-[12.5px] leading-relaxed text-ink-muted">
                <CircleX className="mt-0.5 h-3.5 w-3.5 shrink-0 text-fail/80" /> {n}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 8. Future direction */}
      <Section
        kicker="Future direction"
        title="From virtual factory to live digital twin"
        intro="RubberForge demonstrates Levels 1 to 3 as a prototype. Levels 4 and 5 are the roadmap, the path toward a data-connected factory and, eventually, a live digital twin."
        KIcon={CircleDashed}
      >
        <DigitalTwinMaturity />
        <div className="mt-4 panel p-4">
          <span className="label-mono text-[10px] text-ink-faint">On the roadmap</span>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {FUTURE.map((f) => (
              <span key={f} className="chip border-line text-ink-faint">{f}</span>
            ))}
          </div>
        </div>
      </Section>

      {/* VayuAI */}
      <section className="mt-14 panel-raised p-6">
        <div className="flex items-center gap-2">
          <VayuWordmark className="text-lg" />
          <span className="text-ink-faint">·</span>
          <span className="text-[13px] text-ink-muted">industrial intelligence systems</span>
        </div>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-muted">
          VayuAI builds AI-powered systems for manufacturing, sourcing, quality, and technical workflows. RubberForge is
          a VayuAI virtual factory prototype: it shows how a factory can be represented digitally, connecting people,
          processes, AI agents, QMS records, QA lab evidence, and factory outputs into one traceable digital operating
          model, before that model is wired to live operations.
        </p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          <Link href="/simulator" className="btn-primary text-[14px]"><PlayCircle className="h-4 w-4" /> Enter the Virtual Factory</Link>
          <Link href="/qms" className="btn-ghost text-[14px]"><ShieldCheck className="h-4 w-4" /> QMS Command Center <ArrowRight className="h-4 w-4" /></Link>
          <Link href="/quote" className="inline-flex items-center gap-1.5 px-2 text-[13px] text-ink-faint hover:text-ink-muted">
            <FileText className="h-3.5 w-3.5" /> Build an RFQ
          </Link>
        </div>
      </section>

      {/* Integrity */}
      <div className="mt-8">
        <QMSDisclaimer />
      </div>
      <div className="mt-3 panel flex items-start gap-3 p-4">
        <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-ink-faint" />
        <p className="text-[12px] leading-relaxed text-ink-muted">
          <span className="font-medium text-ink">Scope and integrity. </span>
          RubberForge is educational and conceptual. It is a digital twin-style prototype, not a live digital twin, not
          an ISO 9001 certificate, and not official testing or compliance. It does not produce pricing, certified
          records, or production instructions, and it is not affiliated with or built by any vendor referenced above.
          Material, route, and quality decisions require engineering and quality review.
        </p>
      </div>
    </div>
  );
}
