"use client";

import Link from "next/link";
import type { Capability } from "@/lib/capabilities";
import type { CapabilityId } from "@/types/platform";
import {
  Beaker,
  Blend,
  Disc3,
  Layers,
  Flame,
  Scissors,
  Boxes,
  ScanLine,
  PackageCheck,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<CapabilityId, LucideIcon> = {
  compounding: Beaker,
  "internal-mixing": Blend,
  milling: Disc3,
  calendering: Layers,
  curing: Flame,
  "cutting-slitting": Scissors,
  molding: Boxes,
  "inspection-testing": ScanLine,
  packaging: PackageCheck,
};

export function CapabilityCard({ capability }: { capability: Capability }) {
  const Icon = ICONS[capability.id];
  return (
    <div className="panel flex h-full flex-col p-4">
      <div className="flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/10 text-violet-300">
          <Icon className="h-5 w-5" />
        </span>
        {capability.inSimulator ? (
          <span className="chip border-pass/40 text-pass">In simulator</span>
        ) : (
          <span className="chip text-ink-faint">Route only</span>
        )}
      </div>
      <h3 className="mt-3 font-display text-[15px] font-semibold text-ink">{capability.name}</h3>
      <p className="mt-1.5 flex-1 text-[12.5px] leading-relaxed text-ink-muted">{capability.description}</p>
      {capability.inSimulator && (
        <Link
          href="/simulator"
          className="mt-3 inline-flex items-center gap-1 text-[12px] font-medium text-violet-300 hover:text-violet-200"
        >
          See it in the 3D line →
        </Link>
      )}
    </div>
  );
}
