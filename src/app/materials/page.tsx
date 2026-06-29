"use client";

import { useMemo, useState } from "react";
import { X } from "lucide-react";
import type { FilterTag, MaterialKind } from "@/types/platform";
import {
  materialFamilies,
  materialFamiliesById,
  ALL_FILTER_TAGS,
} from "@/lib/materialFamilies";
import { productMaterialMatrix } from "@/lib/productMaterialMatrix";
import { MaterialCard, MaterialDetail } from "@/components/platform/MaterialCard";
import { MaterialFilterPanel } from "@/components/platform/MaterialFilterPanel";
import { ProductMaterialMatrix } from "@/components/platform/ProductMaterialMatrix";

export default function MaterialsPage() {
  const [query, setQuery] = useState<string>("");
  const [kind, setKind] = useState<MaterialKind | "all">("all");
  const [activeTags, setActiveTags] = useState<FilterTag[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const toggleTag = (tag: FilterTag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return materialFamilies.filter((m) => {
      if (kind !== "all" && m.kind !== kind) return false;
      if (q) {
        const haystack = [
          m.displayName,
          m.abbreviation,
          m.polymerFamily,
          m.commonNames.join(" "),
          m.applications.join(" "),
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      if (!activeTags.every((t) => m.filterTags.includes(t))) return false;
      return true;
    });
  }, [query, kind, activeTags]);

  const selected = selectedId ? materialFamiliesById[selectedId] : null;

  return (
    <div className="mx-auto max-w-[1300px] px-5 pb-12 pt-8">
      {/* Header */}
      <header>
        <span className="kicker">Material library</span>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink">Rubber materials</h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          Explore elastomer families and application categories side by side, with qualitative
          resistance bands, chemistry context, and the questions a quote will ask. Every profile is
          preliminary and educational: final material selection always requires technical review
          against the specific application.
        </p>
      </header>

      {/* Library: filters + grid */}
      <div className="mt-8 grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
        <div className="lg:sticky lg:top-20 lg:self-start">
          <MaterialFilterPanel
            query={query}
            onQuery={setQuery}
            kind={kind}
            onKind={setKind}
            tags={ALL_FILTER_TAGS}
            activeTags={activeTags}
            onToggleTag={toggleTag}
            resultCount={filtered.length}
          />
        </div>

        <div>
          {filtered.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {filtered.map((m) => (
                <MaterialCard key={m.id} material={m} onOpen={() => setSelectedId(m.id)} />
              ))}
            </div>
          ) : (
            <div className="panel flex min-h-[240px] flex-col items-center justify-center p-8 text-center">
              <p className="font-display text-lg text-ink">No materials match these filters</p>
              <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-ink-muted">
                Try widening the property filters, switching the family toggle, or clearing the
                search term.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Product-material matrix */}
      <section className="mt-14">
        <span className="kicker-violet">Compatibility</span>
        <h2 className="mt-2 font-display text-2xl font-semibold text-ink">Product-material matrix</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          A starting-point view of which materials are commonly paired with which product types.
          Markers indicate typical practice only, not a recommendation: any pairing should be
          confirmed by technical review against service conditions, regulatory needs, and the full
          specification.
        </p>
        <div className="mt-5">
          <ProductMaterialMatrix matrix={productMaterialMatrix} materialsById={materialFamiliesById} />
        </div>
      </section>

      {/* Detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="panel-raised relative max-h-[88vh] w-full max-w-2xl overflow-y-auto p-5 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedId(null)}
              aria-label="Close material detail"
              className="absolute right-4 top-4 z-10 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-base-850/70 text-ink-muted transition hover:border-line-strong hover:text-ink"
            >
              <X className="h-4 w-4" />
            </button>
            <MaterialDetail material={selected} />
          </div>
        </div>
      )}
    </div>
  );
}
