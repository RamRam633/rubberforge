import { continualImprovement } from "@/lib/continualImprovement";
import { statusClass } from "@/lib/qmsUi";
import { Sparkles, ArrowRight, User } from "lucide-react";

const PRIORITY_ORDER: Record<string, number> = { high: 0, medium: 1, low: 2 };

export function ContinualImprovementBoard() {
  const items = [...continualImprovement].sort((a, b) => (PRIORITY_ORDER[a.priority.toLowerCase()] ?? 1) - (PRIORITY_ORDER[b.priority.toLowerCase()] ?? 1));
  return (
    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c) => (
        <div key={c.id} className="panel flex flex-col p-3.5">
          <div className="flex items-center justify-between gap-2">
            <span className="flex items-center gap-1.5 text-[10.5px] text-violet-300"><Sparkles className="h-3 w-3" /> {c.source}</span>
            <span className="chip border-line text-ink-faint">{c.priority}</span>
          </div>
          <p className="mt-1.5 text-[12.5px] font-medium leading-tight text-ink">{c.problemOrOpportunity}</p>
          <p className="mt-1.5 flex-1 text-[11.5px] leading-relaxed text-ink-muted">
            <ArrowRight className="mr-1 inline h-3 w-3 text-violet-300" />{c.proposedAction}
          </p>
          <p className="mt-2 text-[11px] text-ink-faint">{c.expectedBenefit}</p>
          <div className="mt-2 flex items-center justify-between">
            <span className="flex items-center gap-1 text-[10.5px] text-ink-faint"><User className="h-3 w-3" /> {c.owner}</span>
            <span className={`chip ${statusClass(c.status)}`}>{c.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
