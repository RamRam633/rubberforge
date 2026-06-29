import Link from "next/link";
import { factorySystems } from "@/lib/factorySystems";
import { pageLabel, outputLabel, layerName, layerAccent } from "@/lib/navLabels";
import type { FactorySystemIcon } from "@/types/factoryPlatform";
import {
  Boxes,
  FlaskConical,
  Cog,
  Route,
  Users,
  Shield,
  Truck,
  Wrench,
  FileText,
  Package,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<FactorySystemIcon, LucideIcon> = {
  boxes: Boxes,
  flask: FlaskConical,
  cog: Cog,
  route: Route,
  users: Users,
  shield: Shield,
  truck: Truck,
  wrench: Wrench,
  file: FileText,
  package: Package,
};

export function FactorySystemsGrid({ compact = false }: { compact?: boolean }) {
  const list = compact ? factorySystems.slice(0, 6) : factorySystems;
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((s) => {
        const Icon = ICONS[s.icon];
        const accent = layerAccent(s.linkedLayer);
        return (
          <div key={s.id} className="panel flex flex-col p-4">
            <div className="flex items-center gap-2.5">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg border"
                style={{ borderColor: `${accent}44`, backgroundColor: `${accent}18` }}
              >
                <Icon className="h-4.5 w-4.5" style={{ color: accent }} />
              </span>
              <h3 className="font-display text-[15px] font-semibold leading-tight text-ink">{s.name}</h3>
            </div>
            <p className="mt-2 text-[12.5px] leading-relaxed text-ink-muted">{s.contains}</p>
            {!compact && (
              <p className="mt-2 text-[12px] leading-relaxed text-ink-faint">
                <span className="text-ink-muted">Why it matters. </span>
                {s.whyItMatters}
              </p>
            )}

            <div className="mt-3 flex flex-wrap items-center gap-1.5">
              <span
                className="chip"
                style={{ borderColor: `${accent}55`, color: accent }}
                title="Maps to this layer in the command center"
              >
                {layerName(s.linkedLayer)} layer
              </span>
              {s.linkedOutputs.map((o) => (
                <span key={o} className="chip border-line text-ink-faint">
                  {outputLabel(o)}
                </span>
              ))}
            </div>

            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 border-t border-line pt-2.5">
              {s.linkedPages.map((p) => (
                <Link
                  key={p}
                  href={p}
                  className="inline-flex items-center gap-0.5 text-[12px] text-violet-300 hover:text-violet-200"
                >
                  {pageLabel(p)} <ArrowUpRight className="h-3 w-3" />
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
