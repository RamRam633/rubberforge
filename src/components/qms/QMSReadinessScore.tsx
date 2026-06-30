import { computeQmsReadiness, qmsStatusByClause } from "@/lib/qmsReadinessEngine";
import { statusClass, prettyStatus } from "@/lib/qmsUi";
import { Gauge, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

const RING: Record<string, string> = { emerging: "#5a35b0", developing: "#5a35b0", qualified: "#6d3bd4", "audit-ready": "#15803d" };

export function QMSReadinessScore() {
  const r = computeQmsReadiness();
  const pct = Math.round(r.pct * 100);
  const ring = RING[r.level];
  const circ = 2 * Math.PI * 42;

  return (
    <div className="flex flex-col gap-4">
      <div className="panel-raised p-4">
        <div className="flex items-center gap-2">
          <Gauge className="h-4 w-4 text-violet-300" />
          <span className="kicker-violet">QMS readiness model</span>
          <span className="label-mono text-[10px] text-ink-faint">not a certification score</span>
        </div>
        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative h-[112px] w-[112px] shrink-0">
            <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
              <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(109,59,212,0.14)" strokeWidth="8" />
              <circle cx="50" cy="50" r="42" fill="none" stroke={ring} strokeWidth="8" strokeLinecap="round" strokeDasharray={`${circ * r.pct} ${circ}`} style={{ transition: "stroke-dasharray 500ms ease" }} />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display text-2xl font-semibold text-ink">{pct}</span>
              <span className="label-mono text-[9px]">model %</span>
            </div>
          </div>
          <div className="min-w-0">
            <div className="font-display text-lg font-semibold text-violet-200">{r.levelLabel}</div>
            <p className="mt-1 text-[12px] leading-relaxed text-ink-muted">{r.summary}</p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
          {r.dimensions.map((d) => (
            <div key={d.key} className="flex items-center justify-between gap-2 rounded-md border border-line bg-base-850/30 px-2.5 py-1.5">
              <span className="truncate text-[11px] text-ink-muted">{d.label}</span>
              <span className={`chip ${statusClass(d.status)}`}>{prettyStatus(d.status)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <Col icon={CheckCircle2} title="Strong areas" items={r.strongAreas} tone="text-pass" dot="bg-pass" />
        <Col icon={AlertTriangle} title="Gaps" items={r.gaps} tone="text-molten-300" dot="bg-molten-300" />
        <Col icon={ArrowRight} title="Next actions" items={r.nextActions} tone="text-violet-300" dot="bg-violet-400" />
      </div>

      <div className="panel p-4">
        <span className="label-mono text-[10px] text-ink-faint">Status by clause area</span>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {qmsStatusByClause().map((c) => (
            <span key={c.id} className={`chip ${statusClass(c.status)}`}>{c.id.replace("clause-", "Cl. ")} {c.label} · {prettyStatus(c.status)}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Col({ icon: Icon, title, items, tone, dot }: { icon: typeof CheckCircle2; title: string; items: string[]; tone: string; dot: string }) {
  return (
    <div className="panel p-4">
      <span className={`flex items-center gap-1.5 label-mono text-[10px] ${tone}`}><Icon className="h-3 w-3" /> {title}</span>
      <ul className="mt-2 space-y-1">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-1.5 text-[11.5px] leading-relaxed text-ink-muted"><span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${dot}`} /> {it}</li>
        ))}
      </ul>
    </div>
  );
}
