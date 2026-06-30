import { qmsDigitalThread } from "@/lib/qmsDigitalThread";
import type { OmLayer } from "@/types/operatingModel";
import { Bot, User, FileText, ArrowRight } from "lucide-react";

// Chemistry-aware layer accents for the thread.
const ACCENT: Record<OmLayer, string> = {
  process: "#b8860b",
  chemistry: "#6d3bd4",
  quality: "#0e8fa8",
  "supply-chain": "#0d9488",
  people: "#16a34a",
  maintenance: "#ea580c",
  documentation: "#8a8073",
  rfq: "#6d3bd4",
  qms: "#6d3bd4",
};

/**
 * The digital thread backbone: one traceable chain from customer requirement to
 * factory output, with the AI agent that stewards each node and the human review
 * point. Conceptual and demo only.
 */
export function DigitalThreadVisual({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="flex flex-wrap items-center gap-1.5">
        {qmsDigitalThread.map((n, i) => (
          <span key={n.id} className="flex items-center gap-1.5">
            <span
              className="thread-pulse rounded-md border px-2 py-1 text-[11px]"
              style={{ borderColor: `${ACCENT[n.relatedLayer]}55`, color: ACCENT[n.relatedLayer], ["--thread-delay" as string]: `${i * 0.32}s` }}
            >
              {n.label}
            </span>
            {i < qmsDigitalThread.length - 1 && <ArrowRight className="h-3 w-3 text-ink-faint" />}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="panel-raised overflow-hidden p-4 sm:p-5">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {qmsDigitalThread.map((n, i) => {
          const accent = ACCENT[n.relatedLayer];
          return (
            <div key={n.id} className="group relative rounded-xl border border-line bg-base-850/40 p-3 transition hover:border-line-strong hover:bg-base-800/50">
              <div className="flex items-center gap-2">
                <span
                  className="thread-pulse flex h-6 w-6 shrink-0 items-center justify-center rounded-full border font-mono text-[10px]"
                  style={{ borderColor: `${accent}66`, color: accent, backgroundColor: `${accent}14`, ["--thread-delay" as string]: `${i * 0.3}s` }}
                >
                  {i + 1}
                </span>
                <span className="text-[12.5px] font-semibold leading-tight text-ink">{n.label}</span>
              </div>
              <p className="mt-1.5 flex items-start gap-1.5 text-[11px] leading-snug text-ink-faint">
                <FileText className="mt-0.5 h-3 w-3 shrink-0" style={{ color: accent }} />
                {n.recordConcept}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-1.5">
                <span className="chip inline-flex items-center gap-1 border-line text-ink-muted" title="Stewarding AI agent">
                  <Bot className="h-3 w-3" style={{ color: accent }} /> {n.stewardAgent.replace(" Agent", "")}
                </span>
                <span className="chip inline-flex items-center gap-1 border-line text-ink-faint" title="Human review point">
                  <User className="h-3 w-3" /> {n.humanReview}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-3 text-[11px] leading-relaxed text-ink-faint">
        Each node is stewarded by an AI agent and reviewed by an accountable human. Conceptual, demo records only.
      </p>
    </div>
  );
}
