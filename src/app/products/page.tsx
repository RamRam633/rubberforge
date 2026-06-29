import type { Metadata } from "next";
import Link from "next/link";
import { CircleCheck, GitBranch, Clock, FileText, Box } from "lucide-react";
import { productCategories } from "@/lib/productCategories";
import { materialFamiliesById } from "@/lib/materialFamilies";
import { routeStepsById } from "@/lib/manufacturingRoutes";
import { ProductCard } from "@/components/platform/ProductCard";

export const metadata: Metadata = {
  title: "Products · RubberForge",
  description:
    "Custom rubber products across many forms, each with common materials and a preliminary manufacturing route. Explore each in the virtual factory and generate outputs when ready.",
};

const LEGEND = [
  {
    icon: CircleCheck,
    label: "Available now",
    cls: "border-pass/40 text-pass",
    note: "A live 3D process simulator is wired up for this product family today.",
  },
  {
    icon: GitBranch,
    label: "Route preview",
    cls: "border-molten-400/40 text-molten-300",
    note: "A simplified manufacturing route is mapped; the interactive simulator is in build.",
  },
  {
    icon: Clock,
    label: "Future module",
    cls: "border-line text-ink-faint",
    note: "Materials and route guidance are documented; the simulator module is planned.",
  },
];

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-[1300px] px-5 pb-12 pt-8">
      <header>
        <span className="kicker">Product catalog</span>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
          Rubber products we make
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          Custom rubber products across many forms, sheet, molded, lined, and reinforced. Each entry
          lists the common materials we run for it and a preliminary manufacturing route. Explore any
          product in the virtual factory, and generate an RFQ package when you are ready.
        </p>
      </header>

      <section className="panel-tight mt-6 p-4">
        <div className="label-mono mb-3 flex items-center gap-1.5 text-ink-faint">
          <Box className="h-3.5 w-3.5" /> Simulator availability
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {LEGEND.map(({ icon: Icon, label, cls, note }) => (
            <div key={label} className="flex items-start gap-2.5">
              <span className={`chip shrink-0 ${cls}`}>
                <Icon className="h-3 w-3" /> {label}
              </span>
              <p className="text-[12px] leading-relaxed text-ink-muted">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {productCategories.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            materialsById={materialFamiliesById}
            stepsById={routeStepsById}
          />
        ))}
      </section>

      <section className="panel-raised mt-10 flex flex-col items-center gap-4 px-6 py-10 text-center">
        <span className="kicker-violet">Start a build</span>
        <h2 className="font-display text-2xl font-semibold text-ink">
          Found the form factor you need?
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-ink-muted">
          Send us the drawing, the service media, and the quantity. We will map the route, confirm
          the material, and come back with a buildable plan. Or walk the process yourself in the 3D
          simulator first.
        </p>
        <div className="mt-1 flex flex-wrap items-center justify-center gap-3">
          <Link href="/simulator" className="btn-primary inline-flex items-center gap-1.5">
            <Box className="h-4 w-4" /> Enter the virtual factory
          </Link>
          <Link href="/quote" className="btn-ghost inline-flex items-center gap-1.5">
            <FileText className="h-4 w-4" /> Generate an RFQ package
          </Link>
        </div>
      </section>
    </div>
  );
}
