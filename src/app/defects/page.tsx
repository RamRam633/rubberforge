import type { Metadata } from "next";
import Link from "next/link";
import { DefectDetective } from "@/components/DefectDetective";
import { BookOpen, FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "Defect Detective · RubberForge",
  description: "Diagnose rubber sheet defects: read the symptom and trace it back to the station where it most likely began.",
};

export default function DefectsPage() {
  return (
    <div className="mx-auto max-w-[1300px] px-5 pb-10 pt-8">
      <header className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="kicker">Quality · Defect diagnostics</span>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink">Defect Detective</h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
            Every defect has a fingerprint. Read the symptom, then trace which station it most
            likely came from: poor dispersion points to mixing, uneven thickness to calendering,
            undercure to curing. Each result reveals the mechanism and how to prevent it.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <Link href="/process" className="btn-ghost text-sm">
            <BookOpen className="h-4 w-4" /> Full defect reference
          </Link>
          <Link href="/qa-lab" className="btn-ghost text-sm">
            <FlaskConical className="h-4 w-4" /> Diagnose in the QA Lab
          </Link>
        </div>
      </header>

      <DefectDetective />
    </div>
  );
}
