import { Sparkles } from "lucide-react";

// Small "Built by VayuAI" badge.
export function VayuBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-violet-200 ${className}`}
    >
      <Sparkles className="h-3 w-3" /> Built by VayuAI
    </span>
  );
}

export function VayuWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-semibold tracking-tight ${className}`}>
      <span className="text-gradient">Vayu</span>
      <span className="text-ink">AI</span>
    </span>
  );
}
