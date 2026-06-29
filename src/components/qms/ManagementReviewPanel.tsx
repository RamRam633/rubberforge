import { managementMetrics, managementReviewInputs, managementReviewOutputs } from "@/lib/managementReviewData";
import { TrendingUp, TrendingDown, Minus, ArrowDownToLine, ArrowUpFromLine, BarChart3 } from "lucide-react";

const TREND_ICON: Record<string, typeof Minus> = { up: TrendingUp, down: TrendingDown, flat: Minus };

export function QMSMetricsDashboard() {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
      {managementMetrics.map((m) => {
        const Icon = TREND_ICON[m.trend] ?? Minus;
        const tone = m.trend === "up" ? "text-pass" : m.trend === "down" ? "text-[#dc2626]" : "text-ink-faint";
        return (
          <div key={m.label} className="panel p-3">
            <div className="flex items-center justify-between">
              <span className="label-mono text-[9.5px] text-ink-faint">{m.label}</span>
              <Icon className={`h-3.5 w-3.5 ${tone}`} />
            </div>
            <div className="mt-1 font-display text-[18px] font-semibold text-ink">{m.demoValue}</div>
            <p className="mt-0.5 text-[10px] leading-snug text-ink-faint">{m.note}</p>
          </div>
        );
      })}
    </div>
  );
}

export function ManagementReviewPanel() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <BarChart3 className="h-4 w-4 text-violet-300" />
        <span className="kicker-violet">Management review (clause 9.3) · demo metrics</span>
      </div>
      <QMSMetricsDashboard />

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        <div className="panel p-4">
          <span className="flex items-center gap-1.5 label-mono text-[10px] text-blue-300"><ArrowDownToLine className="h-3 w-3" /> Review inputs</span>
          <ul className="mt-2 space-y-1">
            {managementReviewInputs.map((i) => (
              <li key={i} className="flex items-start gap-1.5 text-[12px] capitalize text-ink-muted"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-400" /> {i}</li>
            ))}
          </ul>
        </div>
        <div className="panel p-4">
          <span className="flex items-center gap-1.5 label-mono text-[10px] text-pass"><ArrowUpFromLine className="h-3 w-3" /> Review outputs</span>
          <ul className="mt-2 space-y-1">
            {managementReviewOutputs.map((o) => (
              <li key={o} className="flex items-start gap-1.5 text-[12px] capitalize text-ink-muted"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-pass" /> {o}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
