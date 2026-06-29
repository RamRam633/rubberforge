"use client";

import { createContext, useContext, useEffect, useRef, useState, useCallback } from "react";
import type { FactoryRun, RunStage } from "@/types/factoryRun";
import { createRun } from "@/lib/runEngine";

interface RunContextValue {
  run: FactoryRun | null;
  startRun: (productId: string, materialId: string) => FactoryRun;
  setStage: (stage: RunStage) => void;
  recordRelease: (status: string) => void;
  clearRun: () => void;
  ready: boolean;
}

const RunContext = createContext<RunContextValue | null>(null);
const KEY = "rf-active-run";
const COUNTER = "rf-run-counter";

export function RunProvider({ children }: { children: React.ReactNode }) {
  const [run, setRun] = useState<FactoryRun | null>(null);
  const [ready, setReady] = useState(false);
  const hydrated = useRef(false);

  // Load once on mount (client only).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setRun(JSON.parse(raw) as FactoryRun);
    } catch {
      /* ignore */
    }
    hydrated.current = true;
    setReady(true);
  }, []);

  // Persist whenever the run changes, but only after hydration so we never
  // clobber stored state on the first render. Side effects live here, not inside
  // state updaters.
  useEffect(() => {
    if (!hydrated.current) return;
    try {
      if (run) localStorage.setItem(KEY, JSON.stringify(run));
      else localStorage.removeItem(KEY);
    } catch {
      /* ignore */
    }
  }, [run]);

  const startRun = useCallback((productId: string, materialId: string) => {
    let seq = 1;
    try {
      seq = (parseInt(localStorage.getItem(COUNTER) ?? "0", 10) || 0) + 1;
      localStorage.setItem(COUNTER, String(seq));
    } catch {
      /* ignore */
    }
    const d = new Date();
    const label = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")} (demo)`;
    const r = createRun(productId, materialId, seq, label);
    setRun(r);
    return r;
  }, []);

  const setStage = useCallback((stage: RunStage) => setRun((prev) => (prev ? { ...prev, stage } : prev)), []);

  const recordRelease = useCallback(
    (status: string) => setRun((prev) => (prev ? { ...prev, releaseStatus: status, stage: "released" } : prev)),
    [],
  );

  const clearRun = useCallback(() => setRun(null), []);

  return (
    <RunContext.Provider value={{ run, startRun, setStage, recordRelease, clearRun, ready }}>
      {children}
    </RunContext.Provider>
  );
}

export function useFactoryRun(): RunContextValue {
  const ctx = useContext(RunContext);
  if (!ctx) throw new Error("useFactoryRun must be used within RunProvider");
  return ctx;
}
