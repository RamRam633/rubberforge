import { ShieldAlert } from "lucide-react";

export function QMSDisclaimer({ className = "" }: { className?: string }) {
  return (
    <div className={`panel flex items-start gap-3 p-4 ${className}`}>
      <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-ink-faint" />
      <div className="text-[12px] leading-relaxed text-ink-muted">
        <span className="font-medium text-ink">This is an ISO 9001-aligned virtual QMS model. </span>
        It is not a certificate and does not establish compliance. It does not replace official ISO 9001 requirements,
        professional QMS implementation, internal audits, or third-party certification. Certification requires real
        organizational implementation, evidence, audits, and an accredited certification body. All records, metrics, and
        statuses shown here are demo placeholders, not real records. Use official standard documents for any formal
        compliance work.
      </div>
    </div>
  );
}
