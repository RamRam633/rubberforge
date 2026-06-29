import { releaseSteps, releaseStatuses } from "@/lib/qaReleaseWorkflow";
import { TONE_CLS } from "@/lib/qmsUi";
import { ArrowRight, CircleCheck } from "lucide-react";

export function QAReleaseWorkflow() {
  return (
    <div className="panel-raised p-4">
      <div className="flex items-center gap-2">
        <CircleCheck className="h-4 w-4 text-violet-300" />
        <span className="kicker-violet">Quality release workflow</span>
      </div>

      <div className="mt-3 flex flex-col gap-1 lg:flex-row lg:items-stretch">
        {releaseSteps.map((s, i) => (
          <div key={s.title} className="flex flex-1 items-stretch gap-1">
            <div className="flex-1 rounded-lg border border-line bg-base-850/40 p-2.5">
              <div className="flex items-center gap-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-violet-500/40 bg-violet-500/15 font-mono text-[10px] text-violet-200">{i + 1}</span>
                <span className="text-[12px] font-semibold text-ink">{s.title}</span>
              </div>
              <p className="mt-1 text-[10.5px] leading-relaxed text-ink-faint">{s.description}</p>
            </div>
            {i < releaseSteps.length - 1 && <div className="flex items-center"><ArrowRight className="h-3.5 w-3.5 shrink-0 rotate-90 text-ink-faint lg:rotate-0" /></div>}
          </div>
        ))}
      </div>

      <div className="mt-3">
        <span className="label-mono text-[10px] text-ink-faint">Release statuses (demo)</span>
        <div className="mt-1.5 grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
          {releaseStatuses.map((s) => (
            <div key={s.id} className="flex items-center gap-2 rounded-lg border border-line bg-base-850/30 px-2.5 py-1.5">
              <span className={`chip shrink-0 ${TONE_CLS[s.tone === "pass" ? "pass" : s.tone === "fail" ? "fail" : s.tone === "warn" ? "warn" : "info"]}`}>{s.label}</span>
              <span className="truncate text-[11px] text-ink-faint" title={s.meaning}>{s.meaning}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
