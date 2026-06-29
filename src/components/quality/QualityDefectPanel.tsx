import type { DefectChemistry } from "@/types/chemistry";
import type { QualityDefectLink } from "@/types/quality";
import { FlaskConical, Cog, ClipboardCheck, UserX, ShieldCheck } from "lucide-react";

// Defect with chemistry cause, process cause, the test that catches it, the
// inspection checkpoint, customer impact, and prevention.
export function QualityDefectPanel({
  defect,
  link,
  resolveTest = (id) => id,
}: {
  defect: DefectChemistry;
  link?: QualityDefectLink;
  resolveTest?: (id: string) => string;
}) {
  return (
    <div className="panel flex h-full flex-col p-4">
      <h3 className="font-display text-[15px] font-semibold leading-tight text-ink">{defect.defect}</h3>
      <p className="mt-1.5 text-[12px] leading-relaxed text-ink-muted">{defect.visualSymptom}</p>

      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <Cause icon={<FlaskConical className="h-3.5 w-3.5 text-violet-300" />} label="Chemistry cause" tone="violet">{defect.chemistryCause}</Cause>
        <Cause icon={<Cog className="h-3.5 w-3.5 text-molten-300" />} label="Process cause" tone="molten">{defect.processCause}</Cause>
      </div>

      {link && (
        <div className="mt-3 space-y-2">
          <div className="rounded-lg border border-pass/25 bg-pass/[0.05] p-2.5">
            <div className="mb-1 flex items-center gap-1.5">
              <ClipboardCheck className="h-3.5 w-3.5 text-pass" />
              <span className="label-mono text-pass">Caught by</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {link.detectingTests.map((t) => (
                <span key={t} className="chip border-pass/25 px-1.5 py-0.5 text-[9px] text-ink-muted">{resolveTest(t)}</span>
              ))}
            </div>
            <p className="mt-1.5 text-[11px] leading-relaxed text-ink-muted">
              <span className="text-ink">Checkpoint: </span>
              {link.inspectionCheckpoint}
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <Line icon={<UserX className="h-3 w-3 text-fail" />} label="Customer impact">{link.customerImpact}</Line>
            <Line icon={<ShieldCheck className="h-3 w-3 text-pass" />} label="Prevention">{link.prevention}</Line>
          </div>
        </div>
      )}
    </div>
  );
}

function Cause({ icon, label, tone, children }: { icon: React.ReactNode; label: string; tone: "violet" | "molten"; children: React.ReactNode }) {
  const cls = tone === "violet" ? "border-violet-500/25 bg-violet-500/[0.05]" : "border-molten-400/25 bg-molten-500/[0.05]";
  return (
    <div className={`rounded-lg border ${cls} p-2.5`}>
      <div className="mb-1 flex items-center gap-1.5">
        {icon}
        <span className="label-mono">{label}</span>
      </div>
      <p className="text-[12px] leading-relaxed text-ink-muted">{children}</p>
    </div>
  );
}

function Line({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-md border border-line bg-base-850/40 p-2">
      <div className="mb-0.5 flex items-center gap-1 text-[10px] uppercase tracking-wide text-ink-faint">
        {icon} {label}
      </div>
      <p className="text-[11px] leading-snug text-ink-muted">{children}</p>
    </div>
  );
}
