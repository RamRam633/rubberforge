import type { InspectionPlan } from "@/types/quality";
import { CheckCircle2, CirclePlus, UserCheck, AlertTriangle, FileText, BookMarked } from "lucide-react";

export function InspectionPlanSummary({ plan }: { plan: InspectionPlan }) {
  return (
    <div className="panel-raised overflow-hidden">
      <div className="border-b border-line bg-gradient-to-r from-pass/10 to-transparent px-5 py-3.5">
        <span className="label-mono text-pass">Preliminary inspection plan</span>
        <h3 className="mt-0.5 font-display text-lg font-semibold text-ink">
          {plan.productName} <span className="text-ink-faint">·</span> {plan.materialName}
        </h3>
      </div>
      <div className="space-y-3 px-5 py-4">
        <Checklist icon={<CheckCircle2 className="h-3.5 w-3.5 text-pass" />} title="Recommended checks" items={plan.recommendedChecks} />
        {plan.optionalChecks.length > 0 && (
          <Checklist icon={<CirclePlus className="h-3.5 w-3.5 text-steel-300" />} title="Optional / condition-driven checks" items={plan.optionalChecks} />
        )}
        {plan.customerRequestedTests.length > 0 && (
          <Checklist icon={<UserCheck className="h-3.5 w-3.5 text-violet-300" />} title="Customer-requested tests" items={plan.customerRequestedTests} />
        )}

        <div className="grid gap-3 sm:grid-cols-2">
          {plan.standardsToConsider.length > 0 && (
            <Block icon={<BookMarked className="h-3.5 w-3.5 text-violet-300" />} title="Standards to consider">
              <div className="flex flex-wrap gap-1.5">
                {plan.standardsToConsider.map((s) => (
                  <span key={s} className="chip border-violet-500/25 text-violet-300">{s}</span>
                ))}
              </div>
            </Block>
          )}
          <Block icon={<FileText className="h-3.5 w-3.5 text-pass" />} title="Documents to request">
            <div className="flex flex-wrap gap-1.5">
              {plan.documentsToRequest.map((d) => (
                <span key={d} className="chip">{d}</span>
              ))}
            </div>
          </Block>
        </div>

        {plan.missingQualityInfo.length > 0 && (
          <div className="rounded-lg border border-warn/25 bg-warn/[0.05] px-3 py-2.5">
            <div className="mb-1 flex items-center gap-1.5">
              <AlertTriangle className="h-3.5 w-3.5 text-warn" />
              <span className="label-mono text-warn">Missing quality information</span>
            </div>
            <ul className="space-y-1">
              {plan.missingQualityInfo.map((m) => (
                <li key={m} className="flex items-start gap-2 text-[12px] leading-relaxed text-ink-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-warn" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="border-t border-line pt-3">
          <div className="label-mono mb-1.5">Internal review notes</div>
          <ul className="space-y-1">
            {plan.internalReviewNotes.map((n) => (
              <li key={n} className="flex items-start gap-2 text-[12px] leading-relaxed text-ink-muted">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                {n}
              </li>
            ))}
          </ul>
        </div>

        <p className="rounded-lg border border-line bg-base-850/50 px-3 py-2 text-[11px] leading-relaxed text-ink-faint">
          Preliminary and educational. Official testing must follow the official standard document and
          use a qualified or accredited lab. Actual certification requires real test data. This app
          generates no certificates and implies no compliance.
        </p>
      </div>
    </div>
  );
}

function Checklist({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center gap-1.5">
        {icon}
        <span className="label-mono">{title}</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {items.map((it) => (
          <span key={it} className="inline-flex items-center gap-1.5 rounded-md border border-line bg-base-700/40 px-2 py-1 text-[11.5px] text-ink-muted">
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

function Block({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="panel-tight p-3">
      <div className="mb-1.5 flex items-center gap-1.5">
        {icon}
        <span className="label-mono">{title}</span>
      </div>
      {children}
    </div>
  );
}
