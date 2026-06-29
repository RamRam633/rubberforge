import type { RouteVariant, RouteAvailability } from "@/types/factoryLife";
import { productCategoriesById } from "@/lib/productCategories";
import { ArrowRight, Cog, Lightbulb } from "lucide-react";
import Link from "next/link";

const AVAIL: Record<RouteAvailability, { label: string; cls: string }> = {
  full: { label: "Full 3D route", cls: "border-pass/40 bg-pass/10 text-pass" },
  preview: { label: "Route preview", cls: "border-molten-400/40 bg-molten-400/10 text-molten-300" },
  future: { label: "Future module", cls: "border-line text-ink-faint" },
};

export function RouteVariantPreview({ variant }: { variant: RouteVariant }) {
  const a = AVAIL[variant.availability];
  const product = productCategoriesById[variant.productId];

  return (
    <div className="panel-raised p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className={`chip ${a.cls}`}>{a.label}</span>
        {variant.availability === "full" && (
          <Link href="/simulator" className="text-[11px] text-violet-300 hover:text-violet-200">
            Running in the 3D simulator above
          </Link>
        )}
      </div>
      <h3 className="mt-2 font-display text-[17px] font-semibold leading-tight text-ink">{variant.name}</h3>
      <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-muted">{variant.note}</p>

      <div className="mt-3">
        <span className="label-mono text-[10px] text-ink-faint">Conceptual process flow</span>
        <ol className="mt-1.5 flex flex-wrap items-center gap-1.5">
          {variant.steps.map((s, idx) => (
            <li key={`${s}-${idx}`} className="flex items-center gap-1.5">
              <span className="rounded-md border border-line bg-base-850/50 px-2 py-1 text-[11px] text-ink-muted">
                {s}
              </span>
              {idx < variant.steps.length - 1 && <ArrowRight className="h-3 w-3 text-ink-faint" />}
            </li>
          ))}
        </ol>
      </div>

      {variant.machinesUsed.length > 0 && (
        <div className="mt-3">
          <span className="flex items-center gap-1.5 label-mono text-[10px] text-ink-faint">
            <Cog className="h-3 w-3" /> Equipment concept
          </span>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {variant.machinesUsed.map((m) => (
              <span key={m} className="chip border-line text-ink-muted">
                {m}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-3 rounded-lg border border-violet-500/25 bg-violet-500/5 px-3 py-2">
        <span className="flex items-center gap-1.5 label-mono text-[10px] text-violet-300">
          <Lightbulb className="h-3 w-3" /> What a full 3D module would add
        </span>
        <p className="mt-1 text-[12px] leading-relaxed text-ink-muted">{variant.whatWouldBeNeeded}</p>
      </div>

      {product && (
        <Link
          href={`/quote?product=${product.id}`}
          className="mt-3 inline-flex items-center gap-1 text-[12px] text-violet-300 hover:text-violet-200"
        >
          Start a quote for {product.name} <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </div>
  );
}
