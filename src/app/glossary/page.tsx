"use client";

import { useMemo, useState } from "react";
import { Search, BookOpen } from "lucide-react";
import Link from "next/link";
import { glossaryTerms } from "@/lib/glossaryTerms";
import { GlossaryTermCard } from "@/components/chemistry/GlossaryTermCard";

export default function GlossaryPage() {
  const [query, setQuery] = useState<string>("");

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return glossaryTerms;
    return glossaryTerms.filter(
      (term) =>
        term.term.toLowerCase().includes(q) ||
        term.definition.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="mx-auto max-w-[1300px] px-5 pb-12 pt-8">
      <span className="kicker">Reference</span>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
        Rubber chemistry glossary
      </h1>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
        The working vocabulary behind every compound we mix and cure, from
        elastomer and crosslink to scorch and compression set. Each entry says
        what the term means, why it matters to a finished part, and where it
        lives on the factory floor.
      </p>

      <div className="mt-6 panel-tight flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search terms and definitions"
            aria-label="Search glossary terms"
            className="w-full rounded-lg border border-line bg-base-850/60 px-3 py-2.5 pl-9 text-sm text-ink placeholder:text-ink-faint focus:border-line-strong focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-2 text-[12px] text-ink-faint">
          <BookOpen className="h-3.5 w-3.5 text-violet-300" />
          <span className="label-mono">
            {matches.length} {matches.length === 1 ? "term" : "terms"}
          </span>
        </div>
      </div>

      {matches.length === 0 ? (
        <div className="mt-6 panel flex flex-col items-center justify-center gap-3 p-12 text-center">
          <Search className="h-6 w-6 text-ink-faint" />
          <p className="text-sm text-ink-muted">
            No terms match{" "}
            <span className="font-medium text-ink">&ldquo;{query.trim()}&rdquo;</span>.
          </p>
          <p className="max-w-sm text-[12.5px] leading-relaxed text-ink-faint">
            Try a broader keyword, or browse the full vocabulary by clearing the
            search. You can also explore the science directly in the{" "}
            <Link href="/chemistry" className="text-violet-300 hover:underline">
              chemistry lab
            </Link>
            .
          </p>
          <button
            type="button"
            onClick={() => setQuery("")}
            className="btn-ghost mt-1"
          >
            Clear search
          </button>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {matches.map((term) => (
            <GlossaryTermCard key={term.id} term={term} />
          ))}
        </div>
      )}
    </div>
  );
}
