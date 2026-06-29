"use client";

import { userModes } from "@/lib/userModes";
import { useUserMode } from "./UserModeProvider";
import { User, Wrench, ClipboardList, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = { user: User, wrench: Wrench, clipboard: ClipboardList };

export function ModeSwitcher({ compact = false }: { compact?: boolean }) {
  const { mode, setMode } = useUserMode();
  return (
    <div
      className="flex items-center gap-0.5 rounded-xl border border-line bg-base-850/40 p-1 backdrop-blur-sm"
      role="tablist"
      aria-label="Audience mode"
    >
      {userModes.map((m) => {
        const Icon = ICONS[m.icon];
        const active = mode === m.id;
        return (
          <button
            key={m.id}
            role="tab"
            aria-selected={active}
            onClick={() => setMode(m.id)}
            title={`${m.name} mode: ${m.tagline}`}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[12px] transition ${
              active
                ? "bg-blue-500 text-white shadow-glow-blue"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
            <span className={compact ? "hidden xl:inline" : ""}>{m.name}</span>
          </button>
        );
      })}
    </div>
  );
}
