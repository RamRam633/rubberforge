"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/types/simulation";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, HelpCircle, ArrowRight } from "lucide-react";

export function QuizCard({
  question,
  onComplete,
  onSkip,
  label = "Checkpoint",
}: {
  question: QuizQuestion;
  onComplete: () => void;
  onSkip?: () => void;
  label?: string;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const chosen = question.options.find((o) => o.id === selected);
  const answeredCorrectly = chosen?.correct === true;

  return (
    <div className="panel w-full max-w-lg overflow-hidden">
      <div className="flex items-center gap-2 border-b border-line bg-base-700/50 px-4 py-2.5">
        <HelpCircle className="h-4 w-4 text-molten-300" />
        <span className="label-mono text-molten-300">{label}</span>
      </div>

      <div className="px-4 py-4">
        <p className="font-display text-[15px] font-medium leading-snug text-ink">{question.question}</p>

        <div className="mt-3.5 space-y-2">
          {question.options.map((opt) => {
            const isChosen = selected === opt.id;
            const reveal = selected !== null;
            const showCorrect = reveal && opt.correct;
            const showWrong = reveal && isChosen && !opt.correct;
            return (
              <button
                key={opt.id}
                disabled={answeredCorrectly}
                onClick={() => setSelected(opt.id)}
                className={`flex w-full items-start gap-3 rounded-lg border px-3 py-2.5 text-left text-[13px] transition ${
                  showCorrect
                    ? "border-pass/50 bg-pass/10 text-ink"
                    : showWrong
                      ? "border-fail/50 bg-fail/10 text-ink"
                      : isChosen
                        ? "border-line-strong bg-base-700"
                        : "border-line bg-base-700/40 hover:border-line-strong hover:bg-base-700"
                } ${answeredCorrectly && !opt.correct ? "opacity-50" : ""}`}
              >
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[10px] ${
                    showCorrect
                      ? "bg-pass text-base-900"
                      : showWrong
                        ? "bg-fail text-base-900"
                        : "bg-base-600 text-ink-muted"
                  }`}
                >
                  {showCorrect ? <Check className="h-3 w-3" /> : showWrong ? <X className="h-3 w-3" /> : opt.id.toUpperCase()}
                </span>
                <span className="leading-relaxed">{opt.text}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div
                className={`mt-3 rounded-lg border px-3 py-2.5 text-[12px] leading-relaxed ${
                  answeredCorrectly
                    ? "border-pass/30 bg-pass/[0.06] text-ink-muted"
                    : "border-warn/30 bg-warn/[0.06] text-ink-muted"
                }`}
              >
                <span className={`font-medium ${answeredCorrectly ? "text-pass" : "text-warn"}`}>
                  {answeredCorrectly ? "Correct. " : "Not quite. "}
                </span>
                {answeredCorrectly ? question.explanation : "Review the options and try again."}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-4 flex items-center justify-between">
          {onSkip ? (
            <button onClick={onSkip} className="text-[12px] text-ink-faint hover:text-ink-muted">
              Skip checkpoint
            </button>
          ) : (
            <span />
          )}
          <button onClick={onComplete} disabled={!answeredCorrectly} className="btn-primary text-sm">
            Continue <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
