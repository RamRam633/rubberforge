import { ShieldCheck } from "lucide-react";
import { statusClass, prettyStatus } from "@/lib/qmsUi";

/** The top-level product badge. Careful wording: aligned, not certified. */
export function QMSBadge({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-violet-400/40 bg-violet-500/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-violet-200 ${className}`}
      title="ISO 9001-aligned virtual factory QMS model. Not certified."
    >
      <ShieldCheck className="h-3 w-3" />
      {compact ? "ISO 9001-aligned QMS" : "ISO 9001-aligned QMS model"}
    </span>
  );
}

export function StatusChip({ status, className = "" }: { status: string; className?: string }) {
  return <span className={`chip ${statusClass(status)} ${className}`}>{prettyStatus(status)}</span>;
}

export function RevisionBadge({ revision }: { revision: string }) {
  return (
    <span className="chip border-line text-ink-faint" title="Demo revision">
      {revision}
    </span>
  );
}

export function ApprovalStatusBadge({ status }: { status: string }) {
  return <StatusChip status={status} />;
}

/** Small QMS provenance badges used on records / stations. */
export function LabQMSBadge({ label, tone = "info" }: { label: string; tone?: "info" | "pass" | "warn" }) {
  const cls =
    tone === "pass"
      ? "border-pass/40 text-pass"
      : tone === "warn"
        ? "border-molten-400/40 text-molten-300"
        : "border-blue-400/40 text-blue-300";
  return <span className={`chip ${cls}`}>{label}</span>;
}
