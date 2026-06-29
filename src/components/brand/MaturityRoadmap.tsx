import { maturityRoadmap } from "@/lib/maturityRoadmap";
import { CheckCircle2, CircleDashed } from "lucide-react";

export function MaturityRoadmap() {
  return (
    <div className="grid gap-3 lg:grid-cols-4">
      {maturityRoadmap.map((lvl) => {
        const current = lvl.stage === "current";
        return (
          <div
            key={lvl.level}
            className={`panel relative flex h-full flex-col p-4 ${current ? "border-violet-400/40" : ""}`}
          >
            {current && <div className="absolute inset-x-0 top-0 h-0.5 rounded-t bg-gradient-to-r from-violet-500 to-blue-500" />}
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-ink-faint">Level {lvl.level}</span>
              {current ? (
                <span className="chip border-violet-400/40 text-violet-300">
                  <CheckCircle2 className="h-3 w-3" /> Current
                </span>
              ) : (
                <span className="chip text-ink-faint">
                  <CircleDashed className="h-3 w-3" /> Future
                </span>
              )}
            </div>
            <h3 className="mt-2 font-display text-[15px] font-semibold leading-tight text-ink">{lvl.title}</h3>
            <p className="mt-1.5 flex-1 text-[12px] leading-relaxed text-ink-muted">{lvl.description}</p>
            <ul className="mt-2.5 space-y-1 border-t border-line pt-2.5">
              {lvl.capabilities.map((c) => (
                <li key={c} className="flex items-start gap-1.5 text-[11.5px] leading-snug text-ink-muted">
                  <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${current ? "bg-violet-400" : "bg-steel-400"}`} />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
