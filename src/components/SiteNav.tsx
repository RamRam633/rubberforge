"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PlayCircle, FileText, ChevronDown } from "lucide-react";
import { ModeSwitcher } from "./brand/ModeSwitcher";

const PRIMARY = [
  { href: "/simulator", label: "Virtual Factory" },
  { href: "/qa-lab", label: "QA Lab" },
  { href: "/materials", label: "Materials" },
  { href: "/products", label: "Products" },
];

// Factory systems + the deeper reference surfaces, grouped.
const SYSTEMS = [
  { href: "/systems", label: "Factory Systems", desc: "All ten connected systems" },
  { href: "/qms", label: "QMS Command Center", desc: "ISO 9001-aligned quality system" },
  { href: "/quality-lab", label: "Quality Lab", desc: "Tests, standards, inspection" },
  { href: "/factory-intelligence", label: "Factory Intelligence", desc: "Equipment, ingredients, supply chain" },
  { href: "/chemistry", label: "Chemistry", desc: "How compounds behave" },
  { href: "/process", label: "Process Library", desc: "Every station, start to finish" },
  { href: "/defects", label: "Defect Detective", desc: "Causes, signs, prevention" },
  { href: "/glossary", label: "Glossary", desc: "Rubber terms, plainly defined" },
];

// Factory outputs. RFQ is one of them.
const OUTPUTS = [
  { href: "/outputs", label: "Factory Outputs", desc: "All six generated outputs" },
  { href: "/quote", label: "RFQ Package", desc: "Quote-ready technical package" },
  { href: "/outputs#factory-audit", label: "Factory Audit", desc: "Readiness across the line" },
  { href: "/outputs#quality-plan", label: "Quality Plan", desc: "Tests, standards, documents" },
  { href: "/outputs#bill-of-process", label: "Bill of Process", desc: "Route, equipment, checkpoints" },
  { href: "/outputs#traceability-report", label: "Traceability", desc: "Lot to shipment chain" },
];

const TRAILING = [{ href: "/about", label: "About" }];

export function ForgeMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="forge-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="26" height="26" rx="7" fill="#111827" stroke="rgba(15,23,42,0.18)" />
      <circle cx="16" cy="16" r="8.2" fill="none" stroke="url(#forge-g)" strokeWidth="1.6" />
      <circle cx="16" cy="16" r="3.4" fill="url(#forge-g)" />
      <path d="M16 5.6 L16 9.2 M16 22.8 L16 26.4 M5.6 16 L9.2 16 M22.8 16 L26.4 16" stroke="url(#forge-g)" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

type MenuId = "systems" | "outputs";

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<MenuId | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const isActive = (href: string) => {
    const base = href.split("#")[0];
    return base === "/" ? pathname === "/" : pathname.startsWith(base);
  };
  const groupActive = (items: { href: string }[]) => items.some((l) => isActive(l.href));

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setMenu(null);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  useEffect(() => {
    setMenu(null);
    setOpen(false);
  }, [pathname]);

  const linkCls = (active: boolean) =>
    `rounded-lg px-3 py-1.5 text-sm transition ${
      active
        ? "bg-blue-500/10 text-blue-600 ring-1 ring-inset ring-blue-500/25"
        : "text-ink-muted hover:bg-base-850 hover:text-ink"
    }`;

  function Dropdown({ id, label, items }: { id: MenuId; label: string; items: typeof SYSTEMS }) {
    const isOpen = menu === id;
    return (
      <div className="relative">
        <button
          onClick={() => setMenu(isOpen ? null : id)}
          aria-expanded={isOpen}
          aria-haspopup="true"
          className={`flex items-center gap-1 ${linkCls(groupActive(items))}`}
        >
          {label}
          <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
        {isOpen && (
          <div className="absolute left-0 top-[calc(100%+8px)] w-[290px] overflow-hidden rounded-xl border border-line bg-white p-1.5 shadow-[0_18px_44px_-20px_rgba(16,24,40,0.28)]">
            {items.map((l, i) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-lg px-3 py-2 transition ${
                    active ? "bg-blue-500/10 text-blue-600" : "text-ink-muted hover:bg-base-850 hover:text-ink"
                  } ${i === 0 ? "border-b border-line/60 mb-1 pb-2" : ""}`}
                >
                  <span className="block text-[13px] font-medium">{l.label}</span>
                  <span className="block text-[11px] text-ink-faint">{l.desc}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-14 max-w-[1600px] items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="group flex shrink-0 items-center gap-2.5">
          <ForgeMark />
          <span className="flex items-baseline gap-1.5">
            <span className="font-display text-lg font-semibold tracking-tight text-ink">
              Rubber<span className="text-gradient">Forge</span>
            </span>
            <span className="hidden rounded-full border border-violet-400/30 bg-violet-500/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-violet-300 sm:inline">
              by VayuAI
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <div ref={navRef} className="hidden items-center gap-0.5 rounded-xl border border-line bg-base-850/50 p-1 xl:flex">
          {PRIMARY.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined} className={linkCls(isActive(l.href))}>
              {l.label}
            </Link>
          ))}
          <Dropdown id="systems" label="Factory Systems" items={SYSTEMS} />
          <Dropdown id="outputs" label="Outputs" items={OUTPUTS} />
          {TRAILING.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined} className={linkCls(isActive(l.href))}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden xl:block">
            <ModeSwitcher compact />
          </div>
          <Link href="/simulator" className="hidden btn-primary px-3.5 py-2 text-[13px] sm:inline-flex">
            <PlayCircle className="h-4 w-4" /> Enter Factory
          </Link>
          <Link
            href="/quote"
            className="hidden items-center gap-1.5 rounded-lg border border-line px-2.5 py-2 text-[12px] text-ink-muted transition hover:text-ink lg:inline-flex"
          >
            <FileText className="h-3.5 w-3.5" /> Build RFQ
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink-muted transition hover:text-ink xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="max-h-[calc(100vh-3.5rem)] overflow-y-auto border-t border-line bg-white px-4 py-2 xl:hidden">
          {[...PRIMARY, ...TRAILING].map((l) => (
            <MobileLink key={l.href} href={l.href} label={l.label} active={isActive(l.href)} onClick={() => setOpen(false)} />
          ))}
          <div className="mt-1.5 px-3 pb-1 pt-2 label-mono text-[10px] text-ink-faint">Factory systems & resources</div>
          {SYSTEMS.map((l) => (
            <MobileLink key={l.href} href={l.href} label={l.label} active={isActive(l.href)} onClick={() => setOpen(false)} />
          ))}
          <div className="mt-1.5 px-3 pb-1 pt-2 label-mono text-[10px] text-ink-faint">Factory outputs</div>
          {OUTPUTS.map((l) => (
            <MobileLink key={l.href} href={l.href} label={l.label} active={isActive(l.href)} onClick={() => setOpen(false)} />
          ))}
          <div className="mt-2 flex items-center justify-center">
            <ModeSwitcher />
          </div>
          <div className="mt-2 flex gap-2">
            <Link href="/simulator" onClick={() => setOpen(false)} className="btn-primary flex-1 justify-center text-sm">
              <PlayCircle className="h-4 w-4" /> Enter Factory
            </Link>
            <Link href="/quote" onClick={() => setOpen(false)} className="btn-ghost flex-1 justify-center text-sm">
              <FileText className="h-4 w-4" /> Build RFQ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileLink({ href, label, active, onClick }: { href: string; label: string; active: boolean; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`block rounded-md px-3 py-2.5 text-sm transition ${
        active ? "bg-blue-500/10 text-blue-600" : "text-ink-muted hover:bg-base-850 hover:text-ink"
      }`}
    >
      {label}
    </Link>
  );
}
