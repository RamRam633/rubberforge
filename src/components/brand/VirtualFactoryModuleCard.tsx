import Link from "next/link";
import type { VFModule, ModuleStatus } from "@/lib/virtualFactoryModules";
import { Factory, FlaskConical, Route, Wrench, ShieldCheck, FileText, ClipboardList, GitBranch, ArrowRight, type LucideIcon } from "lucide-react";

const ICONS: Record<VFModule["icon"], LucideIcon> = {
  factory: Factory,
  flask: FlaskConical,
  route: Route,
  wrench: Wrench,
  shield: ShieldCheck,
  file: FileText,
  clipboard: ClipboardList,
  git: GitBranch,
};

export const MODULE_STATUS: Record<ModuleStatus, { label: string; cls: string }> = {
  built: { label: "Built now", cls: "border-pass/40 text-pass" },
  configurable: { label: "Configurable next", cls: "border-molten-400/40 text-molten-300" },
  "data-connected": { label: "Data-connected future", cls: "border-steel-400/40 text-steel-300" },
};

export function VirtualFactoryModuleCard({ module }: { module: VFModule }) {
  const Icon = ICONS[module.icon];
  const s = MODULE_STATUS[module.status];
  return (
    <Link href={module.href} className="panel interactive-card group flex h-full flex-col p-4">
      <div className="flex items-start justify-between gap-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/30 bg-gradient-to-br from-violet-500/15 to-blue-500/15 text-violet-300">
          <Icon className="h-5 w-5" />
        </span>
        <span className={`chip ${s.cls}`}>{s.label}</span>
      </div>
      <h3 className="mt-3 font-display text-[15px] font-semibold text-ink">{module.name}</h3>
      <p className="mt-1 flex-1 text-[12.5px] leading-relaxed text-ink-muted">{module.description}</p>
      <span className="mt-3 inline-flex items-center gap-1 text-[12px] font-medium text-violet-300 group-hover:text-violet-200">
        Open <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}
