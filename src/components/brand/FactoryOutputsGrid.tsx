import Link from "next/link";
import { factoryOutputs } from "@/lib/factoryOutputs";
import { layerName, layerAccent } from "@/lib/navLabels";
import type { FactoryOutput } from "@/types/factoryPlatform";
import {
  FileText,
  ClipboardCheck,
  ShieldCheck,
  ListOrdered,
  GitBranch,
  ScrollText,
  Users,
  Database,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<FactoryOutput["icon"], LucideIcon> = {
  "file-text": FileText,
  "clipboard-check": ClipboardCheck,
  "shield-check": ShieldCheck,
  "list-ordered": ListOrdered,
  "git-branch": GitBranch,
  "scroll-text": ScrollText,
};

export function FactoryOutputCard({ output }: { output: FactoryOutput }) {
  const Icon = ICONS[output.icon];
  return (
    <div className="panel flex h-full flex-col p-4">
      <div className="flex items-start justify-between gap-2">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-lg border"
          style={{ borderColor: `${output.accent}44`, backgroundColor: `${output.accent}18` }}
        >
          <Icon className="h-5 w-5" style={{ color: output.accent }} />
        </span>
        {output.id === "rfq-package" && (
          <span className="chip border-line text-ink-faint">one of six outputs</span>
        )}
      </div>
      <h3 className="mt-2.5 font-display text-[16px] font-semibold leading-tight text-ink">{output.name}</h3>
      <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-muted">{output.purpose}</p>

      <div className="mt-3 flex items-start gap-2 text-[11.5px] text-ink-faint">
        <Users className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: output.accent }} />
        <span>
          <span className="text-ink-muted">Used by. </span>
          {output.whoUses}
        </span>
      </div>

      <div className="mt-2 flex items-start gap-2 text-[11.5px] text-ink-faint">
        <Database className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: output.accent }} />
        <span>
          <span className="text-ink-muted">Needs. </span>
          {output.dataNeeded.join(", ")}
        </span>
      </div>

      <div className="mt-3">
        <span className="label-mono text-[9.5px] text-ink-faint">Pulls from layers</span>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {output.pullsFromLayers.map((l) => (
            <span key={l} className="chip" style={{ borderColor: `${layerAccent(l)}55`, color: layerAccent(l) }}>
              {layerName(l)}
            </span>
          ))}
        </div>
      </div>

      <Link
        href={output.href}
        className="btn-ghost mt-4 w-full justify-center text-[13px]"
        style={{ borderColor: `${output.accent}55` }}
      >
        {output.actionLabel} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

export function FactoryOutputsGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {factoryOutputs.map((o) => (
        <FactoryOutputCard key={o.id} output={o} />
      ))}
    </div>
  );
}
