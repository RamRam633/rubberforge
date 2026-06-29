"use client";

import type { FilterTag, MaterialKind } from "@/types/platform";
import { Search, X } from "lucide-react";

export const FILTER_TAG_LABELS: Record<FilterTag, string> = {
  "oil-resistant": "Oil resistant",
  "weather-resistant": "Weather / ozone",
  "water-resistant": "Water resistant",
  "abrasion-resistant": "Abrasion resistant",
  "high-temperature": "High temperature",
  "chemical-resistant": "Chemical resistant",
  "food-potable": "Food / potable",
  "general-purpose": "General purpose",
  premium: "Premium material",
};

const KIND_OPTIONS: { id: MaterialKind | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "polymer", label: "Polymers" },
  { id: "category", label: "Categories" },
];

export function MaterialFilterPanel({
  query,
  onQuery,
  kind,
  onKind,
  tags,
  activeTags,
  onToggleTag,
  resultCount,
}: {
  query: string;
  onQuery: (v: string) => void;
  kind: MaterialKind | "all";
  onKind: (k: MaterialKind | "all") => void;
  tags: FilterTag[];
  activeTags: FilterTag[];
  onToggleTag: (t: FilterTag) => void;
  resultCount: number;
}) {
  const hasFilters = activeTags.length > 0 || query || kind !== "all";
  return (
    <div className="panel p-4">
      {/* Search */}
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
        <input
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder="Search materials, names, applications…"
          className="w-full rounded-lg border border-line bg-base-850/60 py-2.5 pl-9 pr-3 text-sm text-ink placeholder:text-ink-faint focus:border-violet-500/50 focus:outline-none"
        />
      </div>

      {/* Kind segmented */}
      <div className="mt-3 flex items-center gap-0.5 rounded-lg border border-line bg-base-850/50 p-0.5">
        {KIND_OPTIONS.map((o) => (
          <button
            key={o.id}
            onClick={() => onKind(o.id)}
            className={`flex-1 rounded-md px-2 py-1.5 text-[12px] transition ${
              kind === o.id ? "bg-base-600 text-ink" : "text-ink-muted hover:text-ink"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>

      {/* Tag filters */}
      <div className="mt-3">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="label-mono">Filter by property</span>
          <span className="font-mono text-[10px] text-ink-faint">{resultCount} results</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t) => {
            const active = activeTags.includes(t);
            return (
              <button
                key={t}
                onClick={() => onToggleTag(t)}
                className={`rounded-full border px-2.5 py-1 text-[11px] transition ${
                  active
                    ? "border-violet-500/50 bg-violet-500/15 text-violet-200"
                    : "border-line bg-base-700/40 text-ink-muted hover:border-line-strong hover:text-ink"
                }`}
              >
                {FILTER_TAG_LABELS[t]}
              </button>
            );
          })}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={() => {
            onQuery("");
            onKind("all");
            activeTags.forEach(onToggleTag);
          }}
          className="mt-3 inline-flex items-center gap-1 text-[11px] text-ink-faint hover:text-ink-muted"
        >
          <X className="h-3 w-3" /> Clear filters
        </button>
      )}
    </div>
  );
}
