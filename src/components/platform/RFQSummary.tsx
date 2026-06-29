import type { RFQSummary as RFQSummaryData } from "@/lib/quoteTypes";
import { RoutePreview } from "./RoutePreview";
import { CircleHelp, ClipboardList, AlertTriangle, CircleCheck } from "lucide-react";

// Preliminary RFQ summary. No pricing is produced.
export function RFQSummary({ summary }: { summary: RFQSummaryData }) {
  const dims = Object.entries(summary.dimensions).filter(([, v]) => v);
  return (
    <div className="panel-raised overflow-hidden">
      <div className="border-b border-line bg-gradient-to-r from-violet-600/15 to-transparent px-5 py-4">
        <div className="flex items-center gap-2 text-violet-300">
          <ClipboardList className="h-4 w-4" />
          <span className="label-mono text-violet-300">Preliminary RFQ summary</span>
        </div>
        <h2 className="mt-1 font-display text-xl font-semibold text-ink">
          {summary.productName} <span className="text-ink-faint">·</span>{" "}
          <span className="text-violet-300">{summary.materialName}</span>
        </h2>
      </div>

      <div className="space-y-4 px-5 py-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="Application">{summary.application || "Not specified"}</Field>
          <Field label="Quantity">{summary.quantity || "Not specified"}</Field>
        </div>

        {dims.length > 0 && (
          <div>
            <div className="label-mono mb-1.5">Dimensions</div>
            <div className="flex flex-wrap gap-1.5">
              {dims.map(([k, v]) => (
                <span key={k} className="chip">
                  {k}: <span className="text-ink">{v}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {summary.environment.length > 0 && (
          <div>
            <div className="label-mono mb-1.5">Selected environment</div>
            <div className="flex flex-wrap gap-1.5">
              {summary.environment.map((e) => (
                <span key={e} className="chip border-steel-400/30 text-steel-300">{e}</span>
              ))}
            </div>
          </div>
        )}

        <div>
          <div className="label-mono mb-1.5">Suggested manufacturing route</div>
          <RoutePreview steps={summary.suggestedRoute} note={summary.routeNote} />
        </div>

        {summary.missingInfo.length > 0 && (
          <Block icon={<AlertTriangle className="h-3.5 w-3.5 text-warn" />} title="Missing information" tone="warn">
            {summary.missingInfo.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </Block>
        )}

        {summary.questionsForCustomer.length > 0 && (
          <Block icon={<CircleHelp className="h-3.5 w-3.5 text-molten-300" />} title="Questions for the customer" tone="molten">
            {summary.questionsForCustomer.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </Block>
        )}

        {summary.technicalReviewNotes.length > 0 && (
          <Block icon={<CircleCheck className="h-3.5 w-3.5 text-violet-300" />} title="Technical review notes" tone="violet">
            {summary.technicalReviewNotes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </Block>
        )}

        <p className="rounded-lg border border-line bg-base-850/50 px-3 py-2 text-[11px] leading-relaxed text-ink-faint">
          This is a preliminary quote-preparation summary for technical review. It contains no pricing,
          no certified properties, and no production formulation. Final material and route selection
          require engineering review against your specific application.
        </p>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="panel-tight px-3 py-2">
      <div className="label-mono">{label}</div>
      <div className="mt-0.5 text-[13px] text-ink">{children}</div>
    </div>
  );
}

function Block({
  icon,
  title,
  tone,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  tone: "warn" | "molten" | "violet";
  children: React.ReactNode;
}) {
  const border =
    tone === "warn" ? "border-warn/25 bg-warn/[0.05]" : tone === "molten" ? "border-molten-400/25 bg-molten-500/[0.05]" : "border-violet-500/25 bg-violet-500/[0.05]";
  return (
    <div className={`rounded-lg border px-3 py-2.5 ${border}`}>
      <div className="mb-1 flex items-center gap-1.5">
        {icon}
        <span className="label-mono">{title}</span>
      </div>
      <ul className="space-y-1 text-[12.5px] leading-relaxed text-ink-muted [&>li]:flex [&>li]:gap-2 [&>li]:before:mt-1.5 [&>li]:before:h-1 [&>li]:before:w-1 [&>li]:before:shrink-0 [&>li]:before:rounded-full [&>li]:before:bg-current">
        {children}
      </ul>
    </div>
  );
}
