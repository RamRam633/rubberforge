import type { DocumentationItem, DocProvider } from "@/types/quality";
import { FileText } from "lucide-react";

const PROVIDER: Record<DocProvider, { label: string; cls: string }> = {
  factory: { label: "Factory", cls: "border-violet-500/30 text-violet-300" },
  supplier: { label: "Supplier", cls: "border-steel-400/30 text-steel-300" },
  either: { label: "Factory / supplier", cls: "border-line text-ink-muted" },
};

export function DocumentationPackageCard({ doc }: { doc: DocumentationItem }) {
  const p = PROVIDER[doc.whoProvides];
  return (
    <div className="panel p-3.5">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-pass" />
          <h3 className="font-display text-[13.5px] font-semibold leading-tight text-ink">{doc.name}</h3>
        </div>
        <span className={`chip shrink-0 ${p.cls}`}>{p.label}</span>
      </div>
      <p className="mt-1.5 text-[11.5px] leading-relaxed text-ink-muted">{doc.whatItIs}</p>
      <p className="mt-1.5 text-[11px] leading-relaxed text-ink-faint">
        <span className="text-ink-muted">When requested. </span>
        {doc.whenRequested}
      </p>
      <p className="mt-1.5 rounded border border-line bg-base-850/40 px-2 py-1 text-[10.5px] leading-relaxed text-ink-faint">
        {doc.availabilityNote}
      </p>
    </div>
  );
}
