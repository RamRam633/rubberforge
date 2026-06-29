import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Factory Control Room: light steel surface scale. Higher number = a
        // slightly deeper steel, used for subtle insets, hover, and active
        // states layered over white panels.
        base: {
          950: "#fbfcfe",
          900: "#f4f6f9",
          850: "#eef2f6",
          800: "#e8edf3",
          700: "#e1e7ee",
          600: "#d4dbe4",
          500: "#c2cad6",
          400: "#aab4c2",
        },
        // Steel hairline borders on light.
        line: {
          DEFAULT: "rgba(15,23,42,0.12)",
          strong: "rgba(15,23,42,0.22)",
        },
        // Graphite / slate text on light surfaces.
        ink: {
          DEFAULT: "#111827",
          muted: "#475569",
          faint: "#64748b",
        },
        // Amber: active production / cure / heat. -300 darkened for accent text,
        // -400 mid for icons, borders, and tints.
        molten: {
          50: "#fffbeb",
          200: "#92400e",
          300: "#b45309",
          400: "#d97706",
          500: "#ea8d04",
          600: "#c2410c",
          700: "#9a3412",
        },
        // Violet: chemistry / crosslink / QMS governance, used sparingly. -300
        // is a dark, readable accent text tone; -500 is the mid brand tone.
        violet: {
          200: "#5b21b6",
          300: "#6d28d9",
          400: "#7c3aed",
          500: "#7c3aed",
          600: "#6d28d9",
          700: "#5b21b6",
        },
        // VayuAI blue: brand, navigation, primary actions. -300 dark accent
        // text, -500 primary, -700 deep engineering blue.
        blue: {
          300: "#1d4ed8",
          400: "#2563eb",
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#1e3a8a",
        },
        // QA cyan: measurement, digital thread, test data.
        cyan: {
          300: "#0e7490",
          400: "#0891b2",
          500: "#0891b2",
          600: "#0e7490",
          700: "#155e75",
        },
        // Steel neutral for data / muted detail.
        steel: {
          300: "#64748b",
          400: "#475569",
          500: "#334155",
        },
        // Status (readable on white)
        pass: "#16a34a",
        warn: "#d97706",
        fail: "#dc2626",
        // Rubber material UI swatches (the 3D scene has its own materials).
        rubber: {
          raw: "#3a3d42",
          compound: "#202225",
          cured: "#161719",
          sheen: "#3d4046",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 22px -6px rgba(245,158,11,0.4)",
        "glow-violet": "0 8px 22px -10px rgba(37,99,235,0.45)",
        "glow-blue": "0 8px 22px -10px rgba(37,99,235,0.45)",
        panel: "0 1px 2px 0 rgba(16,24,40,0.05), 0 12px 32px -18px rgba(16,24,40,0.18)",
        "panel-violet": "0 1px 2px 0 rgba(16,24,40,0.06), 0 18px 44px -22px rgba(16,24,40,0.22)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)",
        "brand-gradient": "linear-gradient(120deg, #2563eb 0%, #1d4ed8 55%, #3b82f6 100%)",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "1", filter: "brightness(1)" },
          "50%": { opacity: "0.78", filter: "brightness(1.3)" },
        },
        "flow-dash": { to: { strokeDashoffset: "-24" } },
        "scan-x": {
          "0%": { transform: "translateX(-8%)" },
          "100%": { transform: "translateX(108%)" },
        },
        rise: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "float-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          to: { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 1.8s ease-in-out infinite",
        "flow-dash": "flow-dash 1s linear infinite",
        "scan-x": "scan-x 2.6s ease-in-out infinite",
        rise: "rise 0.4s ease-out both",
        "float-y": "float-y 5s ease-in-out infinite",
        shimmer: "shimmer 2.6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
