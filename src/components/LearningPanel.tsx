"use client";

import type { ProcessStep } from "@/types/simulation";
import { motion } from "framer-motion";
import { machinesById, familyAccent } from "@/lib/machineData";
import { ArrowDown, Lightbulb, AlertTriangle, ShieldAlert, Activity, Eye } from "lucide-react";

export function LearningPanel({ step, transforming }: { step: ProcessStep; transforming: boolean }) {
  const machine = machinesById[step.id];
  const accent = familyAccent[machine.family];

  return (
    <motion.div
      key={step.id}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="panel flex h-full flex-col overflow-hidden"
    >
      <div className="border-b border-line px-4 py-3">
        <div className="flex items-center justify-between">
          <span className="label-mono">What is happening now</span>
          <span
            className="chip"
            style={{ color: accent.text, borderColor: accent.ring }}
          >
            {machine.family}
          </span>
        </div>
        <div className="mt-1 flex items-center gap-2">
          <h2 className="font-display text-xl font-semibold text-ink">{step.title}</h2>
          {transforming && (
            <span className="flex items-center gap-1 text-[10px] font-medium text-molten-300">
              <Activity className="h-3 w-3 animate-pulse" /> running
            </span>
          )}
        </div>
        <p className="mt-1.5 text-[13px] leading-relaxed text-ink-muted">{step.purpose}</p>
      </div>

      <div className="min-h-0 flex-1 space-y-3.5 overflow-y-auto px-4 py-3.5">
        {/* Input → Output transformation */}
        <div>
          <div className="label-mono mb-1.5">Material transformation</div>
          <div className="space-y-1.5">
            <div className="panel-tight px-3 py-2">
              <div className="text-[10px] uppercase tracking-wide text-steel-300">Goes in</div>
              <div className="mt-0.5 text-xs leading-relaxed text-ink-muted">{step.inputMaterial}</div>
            </div>
            <div className="flex justify-center">
              <ArrowDown className="h-4 w-4 text-molten-400" />
            </div>
            <div className="panel-tight border-molten-500/30 px-3 py-2">
              <div className="text-[10px] uppercase tracking-wide text-molten-300">Comes out</div>
              <div className="mt-0.5 text-xs leading-relaxed text-ink-muted">{step.outputMaterial}</div>
            </div>
          </div>
        </div>

        {/* What to watch visually */}
        <div className="rounded-lg border border-steel-400/25 bg-steel-500/[0.06] px-3 py-2.5">
          <div className="mb-1 flex items-center gap-1.5">
            <Eye className="h-3.5 w-3.5 text-steel-300" />
            <span className="label-mono text-steel-300">What to watch</span>
          </div>
          <p className="text-xs leading-relaxed text-ink-muted">{step.visualDescription}</p>
        </div>

        {/* Physical change */}
        <Section title="What changes physically">
          <p className="text-xs leading-relaxed text-ink-muted">{step.physicalChange}</p>
        </Section>

        {/* Why it matters */}
        <Section title="Why this step matters">
          <p className="text-xs leading-relaxed text-ink-muted">{step.whyItMatters}</p>
        </Section>

        {/* Key concept */}
        <div className="rounded-lg border border-molten-500/30 bg-molten-500/[0.07] px-3 py-2.5">
          <div className="mb-1 flex items-center gap-1.5">
            <Lightbulb className="h-3.5 w-3.5 text-molten-300" />
            <span className="label-mono text-molten-300">Key concept</span>
          </div>
          <p className="text-[13px] font-medium leading-relaxed text-ink">{step.learningInsight}</p>
        </div>

        {/* Common defects */}
        <Section title="What can go wrong" icon={<AlertTriangle className="h-3.5 w-3.5 text-warn" />}>
          <ul className="space-y-1">
            {step.commonDefects.map((d) => (
              <li key={d} className="flex items-start gap-2 text-xs text-ink-muted">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-warn" />
                {d}
              </li>
            ))}
          </ul>
        </Section>

        {/* Safety */}
        <div className="flex items-start gap-2 rounded-lg border border-line bg-base-850/60 px-3 py-2">
          <ShieldAlert className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-faint" />
          <p className="text-[11px] leading-relaxed text-ink-faint">
            <span className="font-medium text-ink-muted">Safety awareness. </span>
            {step.safetyNote}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center gap-1.5">
        {icon}
        <span className="label-mono">{title}</span>
      </div>
      {children}
    </div>
  );
}
