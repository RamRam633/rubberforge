import { contextInterestedParties as ctx } from "@/lib/contextInterestedParties";
import { StatusChip } from "./QMSBadge";
import { Building2, Globe2, Users, Leaf, Info } from "lucide-react";

export function ContextInterestedPartiesPanel() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <ListCard icon={Building2} title="Internal issues" items={ctx.internalIssues} accent="#7c3aed" />
        <ListCard icon={Globe2} title="External issues" items={ctx.externalIssues} accent="#2563eb" />
        <div className="panel p-4">
          <span className="flex items-center gap-1.5 label-mono text-[10px] text-pass"><Users className="h-3 w-3" /> Interested parties</span>
          <ul className="mt-2 space-y-1.5">
            {ctx.interestedParties.map((p) => (
              <li key={p.party} className="text-[12px] text-ink-muted">
                <span className="font-medium text-ink">{p.party}.</span> {p.expectation}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="panel-raised p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="flex items-center gap-1.5 kicker-violet"><Leaf className="h-3.5 w-3.5 text-pass" /> Climate / context relevance (2024 consideration)</span>
          <StatusChip status={ctx.climateStatus} />
        </div>
        <p className="mt-2 text-[12.5px] leading-relaxed text-ink-muted">{ctx.climateRelevanceQuestion}</p>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {ctx.potentialImpacts.map((i) => (
            <div key={i.area} className="rounded-lg border border-line bg-base-850/40 px-3 py-2">
              <span className="text-[12px] font-medium capitalize text-ink">{i.area}</span>
              <p className="mt-0.5 text-[11px] leading-relaxed text-ink-faint">{i.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-start gap-2 rounded-lg border border-line bg-base-950/40 px-3 py-2 text-[11px] leading-relaxed text-ink-faint">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {ctx.disclaimer}
        </div>
      </div>
    </div>
  );
}

function ListCard({ icon: Icon, title, items, accent }: { icon: typeof Users; title: string; items: string[]; accent: string }) {
  return (
    <div className="panel p-4">
      <span className="flex items-center gap-1.5 label-mono text-[10px]" style={{ color: accent }}><Icon className="h-3 w-3" /> {title}</span>
      <ul className="mt-2 space-y-1">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-1.5 text-[12px] leading-relaxed text-ink-muted"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: accent }} /> {it}</li>
        ))}
      </ul>
    </div>
  );
}
