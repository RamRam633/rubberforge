import Link from "next/link";
import { digitalThread, type ThreadKind } from "@/lib/digitalThreadData";
import { ArrowRight } from "lucide-react";

const KIND_TONE: Record<ThreadKind, string> = {
  requirement: "border-blue-400/40 text-blue-300",
  material: "border-violet-500/40 text-violet-300",
  product: "border-pass/40 text-pass",
  route: "border-molten-400/40 text-molten-300",
  station: "border-steel-400/40 text-steel-300",
  chemistry: "border-violet-400/40 text-violet-300",
  quality: "border-pass/40 text-pass",
  documentation: "border-steel-400/40 text-steel-300",
  rfq: "border-blue-400/40 text-blue-300",
  review: "border-molten-400/40 text-molten-300",
};

// The digital thread: customer requirement -> ... -> internal review.
export function DigitalThreadMap({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="flex flex-wrap items-center gap-x-1 gap-y-1.5">
        {digitalThread.map((n, i) => (
          <span key={n.id} className="flex items-center gap-1">
            <span className={`rounded-md border bg-base-800/40 px-2 py-1 text-[10.5px] ${KIND_TONE[n.kind]}`}>{n.label}</span>
            {i < digitalThread.length - 1 && <ArrowRight className="h-3 w-3 shrink-0 text-ink-faint" />}
          </span>
        ))}
      </div>
    );
  }
  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
      {digitalThread.map((n, i) => {
        const inner = (
          <div className={`panel interactive-card h-full p-3 ${KIND_TONE[n.kind].includes("text") ? "" : ""}`}>
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-[10px] text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
              <span className={`chip ${KIND_TONE[n.kind]}`}>{n.kind}</span>
            </div>
            <div className="mt-1.5 font-display text-[13.5px] font-semibold leading-tight text-ink">{n.label}</div>
            <p className="mt-1 text-[11.5px] leading-relaxed text-ink-muted">{n.description}</p>
          </div>
        );
        return n.href ? (
          <Link key={n.id} href={n.href} className="block">
            {inner}
          </Link>
        ) : (
          <div key={n.id}>{inner}</div>
        );
      })}
    </div>
  );
}
