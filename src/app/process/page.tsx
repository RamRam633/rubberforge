import type { Metadata } from "next";
import { ProcessExplorer } from "@/components/ProcessExplorer";
import { DefectCard } from "@/components/DefectCard";
import { ingredients } from "@/lib/ingredientData";
import { defects } from "@/lib/defectData";
import { ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Process Library · RubberForge",
  description: "A readable reference for every machine, material state, ingredient category, and defect in the rubber sheet line.",
};

export default function ProcessPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 pb-10 pt-8">
      <header className="mb-6">
        <span className="kicker">Process Library</span>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink">Every station, explained</h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          Browse the ten stations of the rubber sheet line. Each one shows what goes in, what comes
          out, what physically changes, why it matters, and what can go wrong. Conceptual only: no
          recipes, settings, or operating parameters.
        </p>
      </header>

      <ProcessExplorer />

      {/* Ingredient reference */}
      <section className="mt-12">
        <span className="kicker">Raw materials</span>
        <h2 className="mt-1.5 font-display text-2xl font-semibold text-ink">Ingredient categories</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ingredients.map((ing) => (
            <div key={ing.id} className="panel p-4">
              <div className="flex items-center gap-3">
                <span
                  className="h-11 w-11 shrink-0 rounded-lg ring-1 ring-white/10"
                  style={{ background: `radial-gradient(circle at 32% 28%, ${ing.colorHint}, rgba(0,0,0,0.6))` }}
                />
                <div>
                  <div className="label-mono">{ing.category}</div>
                  <div className="font-display text-[15px] font-semibold text-ink">{ing.displayName}</div>
                </div>
                <span className="chip ml-auto px-1.5 py-0">{ing.form}</span>
              </div>
              <p className="mt-3 text-[12.5px] leading-relaxed text-ink-muted">{ing.description}</p>
              <p className="mt-2 text-[11.5px] leading-relaxed text-ink-faint">
                <span className="text-ink-muted">Appearance. </span>
                {ing.appearance}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {ing.contributesTo.map((c) => (
                  <span key={c} className="chip">{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Defect reference */}
      <section className="mt-12">
        <span className="kicker">Quality</span>
        <h2 className="mt-1.5 font-display text-2xl font-semibold text-ink">Defect reference</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
          Six common rubber sheet defects, each traced to its likely process source with a
          prevention concept. Investigate them in{" "}
          <a href="/defects" className="text-violet-300 hover:text-violet-200">Defect Detective</a>.
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {defects.map((d) => (
            <DefectCard key={d.id} defect={d} />
          ))}
        </div>
      </section>

      {/* Safety framing */}
      <section className="mt-10 panel flex items-start gap-3 p-5">
        <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-ink-faint" />
        <p className="text-[12.5px] leading-relaxed text-ink-muted">
          <span className="font-medium text-ink">Safety and scope. </span>
          The machines shown here involve heavy moving parts, high temperatures, pressurized steam,
          and sharp cutting elements. Safety notes in this simulator are general awareness only.
          Nothing here is operating guidance, a formulation, or a machine setup procedure. It is a
          conceptual model of how a rubber sheet is made.
        </p>
      </section>
    </div>
  );
}
