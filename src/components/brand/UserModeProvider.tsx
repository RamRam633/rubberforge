"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { UserMode } from "@/lib/userModes";

interface Ctx {
  mode: UserMode;
  setMode: (m: UserMode) => void;
}

const UserModeContext = createContext<Ctx>({ mode: "customer", setMode: () => {} });

export function UserModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<UserMode>("customer");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("rf-mode") as UserMode | null) : null;
    if (saved === "customer" || saved === "engineer" || saved === "factory-review") setModeState(saved);
  }, []);

  const setMode = (m: UserMode) => {
    setModeState(m);
    try {
      localStorage.setItem("rf-mode", m);
    } catch {
      /* ignore */
    }
  };

  return <UserModeContext.Provider value={{ mode, setMode }}>{children}</UserModeContext.Provider>;
}

export function useUserMode() {
  return useContext(UserModeContext);
}
