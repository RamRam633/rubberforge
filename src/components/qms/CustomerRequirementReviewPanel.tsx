import { crrReviewAreas, crrStatuses, crrDemoExample } from "@/lib/customerRequirementReview";
import { StatusChip } from "./QMSBadge";
import { ClipboardList, User, FileText, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export function CustomerRequirementReviewPanel() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_360px]">
      <div>
        <div className="flex items-center gap-2">
          <ClipboardList className="h-4 w-4 text-violet-300" />
          <span className="kicker-violet">Customer requirement review (clause 8)</span>
        </div>
        <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-muted">
          Before a quote is prepared, the factory reviews whether it can meet the request. The RFQ is one input into this
          QMS operation control, not the whole workflow.
        </p>

        <div className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
          {crrReviewAreas.map((a) => (
            <div key={a.name} className="panel px-3 py-2.5">
              <span className="text-[12.5px] font-medium text-ink">{a.name}</span>
              <p className="mt-0.5 text-[11px] leading-relaxed text-ink-faint">{a.whatItChecks}</p>
              <span className="mt-1 flex items-center gap-1 text-[10.5px] text-violet-300"><User className="h-3 w-3" /> {a.reviewer}</span>
            </div>
          ))}
        </div>

        <div className="mt-3">
          <span className="label-mono text-[10px] text-ink-faint">Review statuses</span>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {crrStatuses.map((s) => (
              <span key={s.label} title={s.meaning}>
                <StatusChip status={s.label} />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="panel-raised p-4 lg:sticky lg:top-4 lg:self-start">
        <span className="label-mono text-[10px] text-violet-300">Demo review summary</span>
        <h3 className="mt-1 font-display text-[15px] font-semibold text-ink">
          {crrDemoExample.product} <span className="text-ink-faint">·</span> {crrDemoExample.material}
        </h3>
        <div className="mt-2.5">
          <span className="flex items-center gap-1.5 label-mono text-[10px] text-ink-faint"><FileText className="h-3 w-3" /> Captured requirements</span>
          <ul className="mt-1 space-y-1">
            {crrDemoExample.capturedRequirements.map((c) => (
              <li key={c} className="flex items-start gap-1.5 text-[11.5px] text-ink-muted"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-pass" /> {c}</li>
            ))}
          </ul>
        </div>
        <div className="mt-2.5">
          <span className="flex items-center gap-1.5 label-mono text-[10px] text-molten-300"><HelpCircle className="h-3 w-3" /> Open clarifications</span>
          <ul className="mt-1 space-y-1">
            {crrDemoExample.openClarifications.map((c) => (
              <li key={c} className="flex items-start gap-1.5 text-[11.5px] text-ink-muted"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-molten-300" /> {c}</li>
            ))}
          </ul>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <StatusChip status={crrDemoExample.status} />
          <Link href="/quote" className="inline-flex items-center gap-1 text-[11.5px] text-violet-300 hover:text-violet-200">
            Open RFQ builder <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
