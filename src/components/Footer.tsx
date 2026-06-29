import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { ForgeMark } from "./SiteNav";
import { VayuWordmark } from "./brand/VayuBadge";

// VayuAI website and other live VayuAI tools.
const VAYU_PRODUCTS: { label: string; href: string }[] = [
  { label: "VayuAI", href: "https://www.vayuai.ai" },
  { label: "VayuAI Work", href: "https://www.vayuai.ai/work" },
  { label: "Mulya · Should-Cost Intelligence", href: "https://mulya.vayuai.ai" },
  { label: "Srota · Supplier Discovery and RFQ Prep", href: "https://srota.vayuai.ai" },
  { label: "Anatomy · 3D Anatomy Explorer", href: "https://anatomy.vayuai.ai" },
  { label: "Text-to-CAD · AI CAD Prototype", href: "https://cad.vayuai.ai" },
];

const COLS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Virtual Factory",
    links: [
      { href: "/simulator", label: "Command Center" },
      { href: "/systems", label: "Factory Systems" },
      { href: "/materials", label: "Materials" },
      { href: "/products", label: "Products" },
    ],
  },
  {
    title: "Factory Systems",
    links: [
      { href: "/factory-intelligence", label: "Factory Intelligence" },
      { href: "/chemistry", label: "Chemistry" },
      { href: "/quality-lab", label: "Quality Lab" },
      { href: "/process", label: "Process Library" },
      { href: "/defects", label: "Defect Detective" },
    ],
  },
  {
    title: "Factory Outputs",
    links: [
      { href: "/outputs", label: "Output Center" },
      { href: "/quote", label: "RFQ Package" },
      { href: "/outputs#factory-audit", label: "Factory Audit" },
      { href: "/glossary", label: "Glossary" },
      { href: "/about", label: "About" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-10 border-t border-line bg-base-900/40 backdrop-blur-sm">
      <div className="mx-auto grid max-w-[1600px] gap-8 px-5 py-9 sm:grid-cols-2 lg:grid-cols-[1.6fr_repeat(3,1fr)]">
        <div>
          <div className="flex items-center gap-2.5">
            <ForgeMark className="h-6 w-6" />
            <div className="font-display text-sm font-semibold text-ink">
              Rubber<span className="text-gradient">Forge</span>
            </div>
            <span className="text-ink-faint">by</span>
            <a href="https://vayuai.ai" target="_blank" rel="noopener noreferrer" className="transition hover:opacity-80">
              <VayuWordmark className="text-sm" />
            </a>
          </div>
          <p className="mt-2 max-w-xs text-[11.5px] leading-relaxed text-ink-faint">
            A digital twin-style virtual rubber factory and industrial digitalization platform. Explore the factory,
            understand operations, and generate technical outputs, an RFQ package among them.
          </p>
          <div className="mt-3.5">
            <div className="label-mono mb-1.5 text-[10px]">More from VayuAI</div>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {VAYU_PRODUCTS.map((p) => (
                <a key={p.href} href={p.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 text-[11.5px] text-ink-muted transition hover:text-ink">
                  {p.label}
                  <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                </a>
              ))}
            </div>
          </div>
        </div>
        {COLS.map((c) => (
          <div key={c.title}>
            <div className="label-mono mb-2.5">{c.title}</div>
            <ul className="space-y-1.5">
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[12.5px] text-ink-muted hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line px-5 py-4">
        <p className="mx-auto max-w-[1600px] text-[11px] leading-relaxed text-ink-faint">
          <span className="text-ink-muted">Built by VayuAI · Virtual factory systems for industrial digital transformation. </span>
          An educational, digital twin-style prototype based on real rubber materials science and process logic. No
          production formulations, cure parameters, certified properties, compliance, or pricing, and not connected to
          live production.
        </p>
      </div>
    </footer>
  );
}
