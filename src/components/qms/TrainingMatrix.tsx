import { trainingMatrix } from "@/lib/trainingMatrix";
import { statusClass, prettyStatus } from "@/lib/qmsUi";
import { GraduationCap, ShieldCheck, FileText, BookMarked } from "lucide-react";

export function CompetenceCard({ role }: { role: (typeof trainingMatrix)[number] }) {
  return (
    <div className="panel flex flex-col p-3.5">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-4 w-4 text-violet-300" />
          <h3 className="font-display text-[13.5px] font-semibold leading-tight text-ink">{role.roleName}</h3>
        </div>
        <span className={`chip ${statusClass(role.trainingStatus)}`}>{prettyStatus(role.trainingStatus)}</span>
      </div>
      <div className="mt-2.5">
        <span className="label-mono text-[10px] text-ink-faint">Competence areas</span>
        <div className="mt-1 flex flex-wrap gap-1.5">{role.competenceAreas.map((c) => <span key={c} className="chip border-line text-ink-muted">{c}</span>)}</div>
      </div>
      <div className="mt-2 flex items-start gap-1.5 text-[11px] text-ink-faint">
        <BookMarked className="mt-0.5 h-3 w-3 shrink-0 text-blue-300" />
        <span><span className="text-ink-muted">Procedures. </span>{role.relatedProcedures.join(", ")}</span>
      </div>
      <div className="mt-1.5 flex items-start gap-1.5 text-[11px] text-ink-faint">
        <ShieldCheck className="mt-0.5 h-3 w-3 shrink-0 text-pass" />
        <span><span className="text-ink-muted">Safety awareness. </span>{role.safetyAwareness}</span>
      </div>
      <div className="mt-1.5 flex items-start gap-1.5 text-[11px] text-ink-faint">
        <FileText className="mt-0.5 h-3 w-3 shrink-0 text-violet-300" />
        <span><span className="text-ink-muted">Records. </span>{role.relatedRecords.join(", ")} ({role.evidencePlaceholder})</span>
      </div>
    </div>
  );
}

export function TrainingMatrix() {
  return (
    <div>
      <p className="mb-3 text-[12.5px] leading-relaxed text-ink-muted">
        Role-based competence model (clause 7.2). Training statuses and evidence are demo placeholders. Safety awareness
        is conceptual and does not include operational instructions.
      </p>
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {trainingMatrix.map((r) => <CompetenceCard key={r.roleId} role={r} />)}
      </div>
    </div>
  );
}
