import type { HealthBadge } from "@/types/factoryLife";
import { CheckCircle2, AlertTriangle, Wrench, CircleDashed } from "lucide-react";

const MAP: Record<HealthBadge, { label: string; cls: string; Icon: typeof CheckCircle2 }> = {
  ready: { label: "Ready", cls: "border-pass/40 bg-pass/10 text-pass", Icon: CheckCircle2 },
  "needs-review": { label: "Needs review", cls: "border-warn/40 bg-warn/10 text-warn", Icon: AlertTriangle },
  "maintenance-risk": {
    label: "Maintenance watch",
    cls: "border-molten-400/40 bg-molten-400/10 text-molten-300",
    Icon: Wrench,
  },
  "offline-future": { label: "Future module", cls: "border-line text-ink-faint", Icon: CircleDashed },
};

export function MaintenanceStatusBadge({ status, className = "" }: { status: HealthBadge; className?: string }) {
  const m = MAP[status];
  const Icon = m.Icon;
  return (
    <span className={`chip inline-flex items-center gap-1 ${m.cls} ${className}`}>
      <Icon className="h-3 w-3" />
      {m.label}
    </span>
  );
}
