import { buildProductionBoard, shiftSummary, type StationStatus } from "@/lib/digitalThreadSimulator";
import { MaintenanceStatusBadge } from "./MaintenanceStatusBadge";
import { LayoutGrid, Loader2, Check, Clock } from "lucide-react";

const STATUS_STYLE: Record<StationStatus, { cls: string; Icon: typeof Check }> = {
  done: { cls: "border-pass/40 bg-pass/10 text-pass", Icon: Check },
  running: { cls: "border-molten-400/40 bg-molten-400/10 text-molten-300", Icon: Loader2 },
  queued: { cls: "border-line text-ink-faint", Icon: Clock },
};

export function ProductionBoard({ currentIndex }: { currentIndex: number }) {
  const board = buildProductionBoard(currentIndex);
  const sum = shiftSummary(board);

  return (
    <div className="panel-raised overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-base-850/40 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <LayoutGrid className="h-4 w-4 text-violet-300" />
          <span className="kicker-violet">Production board</span>
          <span className="label-mono text-[10px] text-ink-faint">conceptual shift view</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="chip border-pass/40 text-pass">{sum.released} released</span>
          <span className="chip border-molten-400/40 text-molten-300">{sum.running} running</span>
          <span className="chip border-line text-ink-faint">{sum.queued} queued</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-b border-line text-ink-faint">
              <th className="px-4 py-2 label-mono text-[10px] font-normal">#</th>
              <th className="px-3 py-2 label-mono text-[10px] font-normal">Station</th>
              <th className="px-3 py-2 label-mono text-[10px] font-normal">Operator role</th>
              <th className="px-3 py-2 label-mono text-[10px] font-normal">Status</th>
              <th className="px-3 py-2 label-mono text-[10px] font-normal">Health</th>
            </tr>
          </thead>
          <tbody>
            {board.map((row) => {
              const s = STATUS_STYLE[row.status];
              const Icon = s.Icon;
              return (
                <tr key={row.stationId} className="border-b border-line/50 last:border-0 hover:bg-base-800/30">
                  <td className="px-4 py-2.5 font-mono text-[12px] text-ink-faint">{row.sequence}</td>
                  <td className="px-3 py-2.5 text-[12.5px] font-medium text-ink">{row.title}</td>
                  <td className="px-3 py-2.5 text-[12px] text-ink-muted">{row.roleName}</td>
                  <td className="px-3 py-2.5">
                    <span className={`chip inline-flex items-center gap-1 ${s.cls}`}>
                      <Icon className={`h-3 w-3 ${row.status === "running" ? "animate-spin" : ""}`} />
                      {row.statusLabel}
                    </span>
                  </td>
                  <td className="px-3 py-2.5">
                    <MaintenanceStatusBadge status={row.health} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
