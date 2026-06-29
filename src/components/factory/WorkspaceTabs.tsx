import Link from "next/link";
import { Factory, FlaskConical, ShieldCheck, ClipboardCheck, FileOutput, type LucideIcon } from "lucide-react";

const TABS: { id: string; label: string; href: string; Icon: LucideIcon }[] = [
  { id: "production", label: "Production Floor", href: "/simulator", Icon: Factory },
  { id: "qa-lab", label: "QA Lab", href: "/qa-lab", Icon: FlaskConical },
  { id: "qms", label: "QMS", href: "/qms", Icon: ShieldCheck },
  { id: "audit", label: "Factory Audit", href: "/outputs#factory-audit", Icon: ClipboardCheck },
  { id: "outputs", label: "Outputs", href: "/outputs", Icon: FileOutput },
];

/** Switcher between the major virtual-factory workspaces. */
export function WorkspaceTabs({ current }: { current: string }) {
  return (
    <div className="mx-auto max-w-[1600px] px-3 pt-3 sm:px-5">
      <div className="flex flex-wrap gap-1.5">
        {TABS.map((t) => {
          const on = t.id === current;
          const Icon = t.Icon;
          return (
            <Link
              key={t.id}
              href={t.href}
              aria-current={on ? "page" : undefined}
              className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-[12.5px] font-medium transition ${
                on ? "border-violet-500 bg-violet-500/15 text-violet-200" : "border-line text-ink-muted hover:border-line-strong hover:text-ink"
              }`}
            >
              <Icon className="h-3.5 w-3.5" /> {t.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
