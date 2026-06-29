import { calibrationRecords } from "@/lib/calibrationRecords";
import { statusClass, prettyStatus } from "@/lib/qmsUi";
import { Gauge, CheckCircle2, Clock, AlertOctagon, MinusCircle } from "lucide-react";

const ICON: Record<string, typeof Gauge> = {
  current: CheckCircle2,
  "due-soon": Clock,
  overdue: AlertOctagon,
  "not-applicable-demo": MinusCircle,
};

export function CalibrationStatusBoard() {
  const counts = calibrationRecords.reduce<Record<string, number>>((a, c) => {
    a[c.calibrationStatus] = (a[c.calibrationStatus] || 0) + 1;
    return a;
  }, {});

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Gauge className="h-4 w-4 text-violet-300" />
        <span className="kicker-violet">Measurement equipment (clause 7.1.5)</span>
        <div className="ml-auto flex gap-1.5">
          {Object.entries(counts).map(([k, v]) => (
            <span key={k} className={`chip ${statusClass(k)}`}>{v} {prettyStatus(k)}</span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {calibrationRecords.map((c) => {
          const Icon = ICON[c.calibrationStatus] ?? Gauge;
          return (
            <div key={c.id} className="panel p-3.5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-[13.5px] font-semibold leading-tight text-ink">{c.equipmentName}</h3>
                <span className={`chip inline-flex items-center gap-1 ${statusClass(c.calibrationStatus)}`}>
                  <Icon className="h-3 w-3" /> {prettyStatus(c.calibrationStatus)}
                </span>
              </div>
              <p className="mt-1 text-[11px] text-ink-faint">{c.area}</p>
              <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 text-[11px] text-ink-muted">
                <span className="text-ink-faint">Last</span><span>{c.lastCalibration}</span>
                <span className="text-ink-faint">Next due</span><span>{c.nextDue}</span>
                <span className="text-ink-faint">Owner</span><span>{c.owner}</span>
                {c.relatedTest && c.relatedTest !== "n/a" && (<><span className="text-ink-faint">Test</span><span>{c.relatedTest}</span></>)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
