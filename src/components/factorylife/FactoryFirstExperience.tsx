"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FIRST_EXPERIENCE_OPTIONS } from "@/lib/factoryNarrative";
import type { FirstExperienceOption } from "@/types/factoryPlatform";
import { AnimatePresence, motion } from "framer-motion";
import { Footprints, Play, LayoutGrid, FileOutput, FileText, X, Compass, type LucideIcon } from "lucide-react";

const ICONS: Record<FirstExperienceOption["icon"], LucideIcon> = {
  footprints: Footprints,
  play: Play,
  "layout-grid": LayoutGrid,
  "file-output": FileOutput,
  "file-text": FileText,
};

const KEY = "rf-entered-factory";

/**
 * First-visit entry chooser for the virtual factory. RFQ is one of five paths,
 * not the default. Dismisses to a small "ways to start" affordance the user can
 * reopen any time.
 */
export function FactoryFirstExperience() {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    try {
      if (!localStorage.getItem(KEY)) setOpen(true);
    } catch {
      /* ignore */
    }
  }, []);

  function close() {
    setOpen(false);
    try {
      localStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
  }

  if (!ready) return null;

  return (
    <>
      {/* Reopen affordance */}
      <div className="mx-auto max-w-[1600px] px-3 pt-3 sm:px-5">
        <button onClick={() => setOpen(true)} className="btn-ghost text-[12.5px]">
          <Compass className="h-3.5 w-3.5" /> Ways to start
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm"
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.96, y: 12, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="panel-raised w-full max-w-2xl p-5 sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="kicker-violet">Welcome to the virtual factory</span>
                  <h2 className="mt-1 font-display text-xl font-semibold text-ink">How would you like to start?</h2>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-ink-muted">
                    RubberForge is a virtual rubber factory you can explore. Pick a path. Building an RFQ is one option,
                    not the only one.
                  </p>
                </div>
                <button onClick={close} aria-label="Close" className="rounded-md border border-line p-1.5 text-ink-faint hover:text-ink">
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {FIRST_EXPERIENCE_OPTIONS.map((opt, i) => {
                  const Icon = ICONS[opt.icon];
                  const stays = opt.intent === "tour" || opt.intent === "simulate";
                  const primary = i === 0;
                  const inner = (
                    <span className="flex items-start gap-2.5">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${
                          primary ? "border-violet-500/50 bg-violet-500/15 text-violet-200" : "border-line text-violet-300"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[13px] font-semibold leading-tight text-ink">{opt.label}</span>
                        <span className="mt-0.5 block text-[11.5px] leading-snug text-ink-faint">{opt.desc}</span>
                      </span>
                    </span>
                  );
                  const cls = `interactive-card p-3 text-left ${primary ? "border-violet-500/40 bg-violet-500/5" : ""}`;
                  return stays ? (
                    <button key={opt.intent} onClick={close} className={cls}>
                      {inner}
                    </button>
                  ) : (
                    <Link key={opt.intent} href={opt.target} onClick={close} className={cls}>
                      {inner}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
