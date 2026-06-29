"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { StationId } from "@/types/simulation";
import { defectChemistry } from "@/lib/defectChemistryMap";
import { machinesById } from "@/lib/machineData";
import { DefectSymptom } from "./DefectCard";
import { QualityDefectPanel } from "./quality/QualityDefectPanel";
import { qualityDefectLinksById } from "@/lib/qualityDefectMap";
import { qualityTestsById } from "@/lib/qualityTests";
import { Search, Check, X, ArrowRight, RotateCcw, Trophy, MapPin, FlaskConical } from "lucide-react";

// Map new defect ids to an existing symptom visual where one fits.
const VISUAL_ALIAS: Record<string, string> = {
  contamination: "surface-contamination",
  "trapped-air": "trapped-air",
  "poor-dispersion": "poor-dispersion",
  "under-cure": "under-cure",
};

export function DefectDetective() {
  // Candidate origin stations are exactly the stations these defects come from.
  const candidates = useMemo(() => {
    const ids = Array.from(new Set(defectChemistry.map((d) => d.relatedStationId)));
    return ids.sort((a, b) => machinesById[a].name.localeCompare(machinesById[b].name));
  }, []);

  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<StationId | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const defect = defectChemistry[index];
  const answered = picked !== null;
  const correct = picked === defect.relatedStationId;

  function choose(id: StationId) {
    if (answered) return;
    setPicked(id);
    if (id === defect.relatedStationId) setScore((s) => s + 1);
  }
  function next() {
    if (index + 1 >= defectChemistry.length) return setFinished(true);
    setIndex((i) => i + 1);
    setPicked(null);
  }
  function restart() {
    setIndex(0);
    setPicked(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const pct = Math.round((score / defectChemistry.length) * 100);
    return (
      <div className="panel mx-auto max-w-xl p-7 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-molten-500/40 bg-molten-500/10 text-molten-300">
          <Trophy className="h-7 w-7" />
        </span>
        <h2 className="mt-4 font-display text-2xl font-semibold text-ink">Investigation complete</h2>
        <p className="mt-1.5 text-sm text-ink-muted">
          You traced {score} of {defectChemistry.length} defects to the right station.
        </p>
        <div className="mx-auto mt-5 h-2 w-full max-w-xs overflow-hidden rounded-full bg-base-600">
          <div className="h-full rounded-full bg-gradient-to-r from-molten-500 to-molten-300" style={{ width: `${pct}%` }} />
        </div>
        <div className="mt-2 font-mono text-sm text-molten-300">{pct}% accuracy</div>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={restart} className="btn-ghost text-sm">
            <RotateCcw className="h-4 w-4" /> Investigate again
          </button>
          <Link href="/chemistry" className="btn-primary text-sm">
            See the chemistry <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      {/* Question side */}
      <div className="panel flex flex-col overflow-hidden">
        <div className="flex items-center justify-between border-b border-line bg-base-850/70 px-4 py-2.5">
          <span className="flex items-center gap-2 label-mono text-molten-300">
            <Search className="h-3.5 w-3.5" /> Investigation {index + 1} / {defectChemistry.length}
          </span>
          <span className="font-mono text-[11px] text-ink-muted">Score {score}</span>
        </div>

        <div className="p-4">
          <DefectSymptom id={VISUAL_ALIAS[defect.id] ?? defect.id} className="h-[120px] w-full rounded-lg ring-1 ring-white/5" />
          <div className="mt-3">
            <div className="label-mono mb-1">Observed symptom · {defect.defect}</div>
            <p className="text-[13px] leading-relaxed text-ink-muted">{defect.visualSymptom}</p>
          </div>

          <div className="mt-4">
            <div className="mb-2 flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-molten-400" />
              <span className="label-mono">Where did this most likely originate?</span>
            </div>
            <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
              {candidates.map((id) => {
                const isCorrect = id === defect.relatedStationId;
                const isPicked = id === picked;
                const showGood = answered && isCorrect;
                const showBad = answered && isPicked && !isCorrect;
                return (
                  <button
                    key={id}
                    disabled={answered}
                    onClick={() => choose(id)}
                    className={`flex items-center justify-between rounded-lg border px-3 py-2.5 text-left text-[13px] transition ${
                      showGood
                        ? "border-pass/50 bg-pass/10 text-ink"
                        : showBad
                          ? "border-fail/50 bg-fail/10 text-ink"
                          : "border-line bg-base-700/40 hover:border-line-strong hover:bg-base-700"
                    } ${answered && !isCorrect && !isPicked ? "opacity-50" : ""}`}
                  >
                    {machinesById[id].name}
                    {showGood && <Check className="h-4 w-4 text-pass" />}
                    {showBad && <X className="h-4 w-4 text-fail" />}
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence>
            {answered && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-3 rounded-lg border px-3 py-2.5 text-[12.5px] leading-relaxed ${
                  correct ? "border-pass/30 bg-pass/[0.06]" : "border-warn/30 bg-warn/[0.06]"
                }`}
              >
                <span className={`font-medium ${correct ? "text-pass" : "text-warn"}`}>
                  {correct ? "Correct origin. " : `Not quite. This traces to ${machinesById[defect.relatedStationId].name}. `}
                </span>
                <span className="text-ink-muted">{defect.processCause}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-4 flex justify-end">
            <button onClick={next} disabled={!answered} className="btn-primary text-sm">
              {index + 1 >= defectChemistry.length ? "See results" : "Next investigation"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Reveal side: process + chemistry causes */}
      <div className="min-h-[420px]">
        <AnimatePresence mode="wait">
          {answered ? (
            <motion.div key={defect.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="h-full">
              <QualityDefectPanel
                defect={defect}
                link={qualityDefectLinksById[defect.id]}
                resolveTest={(id) => qualityTestsById[id]?.name ?? id}
              />
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="panel flex h-full flex-col items-center justify-center p-8 text-center"
            >
              <FlaskConical className="h-8 w-8 text-ink-faint" />
              <p className="mt-3 max-w-xs text-sm text-ink-muted">
                Read the symptom, then choose where the defect most likely began. The full diagnosis,
                with both its process cause and its chemistry cause, appears here.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
