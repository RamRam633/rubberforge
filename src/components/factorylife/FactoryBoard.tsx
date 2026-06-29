"use client";

import { useState } from "react";
import { STATION_ORDER } from "@/lib/scene/layout";
import { processSteps } from "@/lib/processData";
import { ProductionBoard } from "./ProductionBoard";
import { DigitalThreadOverlay } from "./DigitalThreadOverlay";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function FactoryBoard() {
  const [index, setIndex] = useState(3);
  const focus = processSteps[index];

  return (
    <div className="flex flex-col gap-4">
      <div className="panel flex flex-wrap items-center justify-between gap-3 px-4 py-3">
        <div>
          <span className="label-mono text-[10px] text-ink-faint">Run position</span>
          <p className="text-[13px] text-ink-muted">
            Sweep the run to a station to see what is released, running, and queued, and how the digital thread builds.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIndex((v) => Math.max(0, v - 1))}
            disabled={index === 0}
            className="btn-ghost text-[12px]"
            aria-label="Previous station"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <span className="min-w-[150px] text-center text-[12.5px] font-medium text-ink">
            {focus.sequence}. {focus.title}
          </span>
          <button
            onClick={() => setIndex((v) => Math.min(STATION_ORDER.length - 1, v + 1))}
            disabled={index === STATION_ORDER.length - 1}
            className="btn-ghost text-[12px]"
            aria-label="Next station"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_400px]">
        <ProductionBoard currentIndex={index} />
        <DigitalThreadOverlay focusIndex={index} />
      </div>
    </div>
  );
}
