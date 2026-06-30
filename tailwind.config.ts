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
        // VayuAI family: warm-paper surface scale (matches mulya/srota/anatomy).
        // Lower number = warm white (raised cards), higher = deeper warm tan,
        // used for insets, hover, and active states layered over paper.
        base: {
          950: "#fffdf8",
          900: "#faf6ec",
          850: "#f2ecdd",
          800: "#ece4d2",
          700: "#e6ddca",
          600: "#ddd1ba",
          500: "#cabd9f",
          400: "#b3a484",
        },
        // Warm tan hairline borders on paper (rgba of the warm near-black).
        line: {
          DEFAULT: "rgba(31,27,23,0.14)",
          strong: "rgba(31,27,23,0.26)",
        },
        // Warm near-black text on paper surfaces.
        ink: {
          DEFAULT: "#1f1b17",
          muted: "#6b6356",
          faint: "#9a9082",
        },
        // Gold: the family's dominant warm accent (active production / cure /
        // heat / emphasis). -200/-300 darkened for accent text, -400 mid for
        // icons, borders, and tints. (Token name kept as `molten` to cascade.)
        molten: {
          50: "#faf4e2",
          200: "#6b4e07",
          300: "#8a6608",
          400: "#b8860b",
          500: "#c2900d",
          600: "#9a6b10",
          700: "#7a5409",
        },
        // Violet: family primary action / chemistry / crosslink / QMS. -200/-300
        // are dark, readable accent-text tones; -400/-500 the mid brand tone.
        violet: {
          200: "#4a2a8f",
          300: "#5a35b0",
          400: "#6d3bd4",
          500: "#6d3bd4",
          600: "#5a35b0",
          700: "#4a2a8f",
        },
        // The family has no blue: `blue` is pointed at the family violet so all
        // legacy brand/nav/primary usages recolor to the family primary action.
        blue: {
          300: "#5a35b0",
          400: "#6d3bd4",
          500: "#6d3bd4",
          600: "#5a35b0",
          700: "#4a2a8f",
        },
        // QA cyan: measurement, digital thread, test data (family #0e8fa8).
        cyan: {
          300: "#0e7a8f",
          400: "#0e8fa8",
          500: "#0e8fa8",
          600: "#0e7a8f",
          700: "#0a5f70",
        },
        // Warm taupe neutral for data / muted detail.
        steel: {
          300: "#8a8073",
          400: "#6b6356",
          500: "#4a443b",
        },
        // Status (readable on warm paper)
        pass: "#15803d",
        warn: "#b8860b",
        fail: "#c0392b",
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
        glow: "0 0 22px -6px rgba(184,134,11,0.42)",
        "glow-violet": "0 8px 22px -10px rgba(109,59,212,0.45)",
        "glow-blue": "0 8px 22px -10px rgba(109,59,212,0.45)",
        panel: "0 1px 2px 0 rgba(31,27,23,0.05), 0 12px 32px -18px rgba(31,27,23,0.16)",
        "panel-violet": "0 1px 2px 0 rgba(31,27,23,0.06), 0 18px 44px -22px rgba(31,27,23,0.2)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(31,27,23,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(31,27,23,0.04) 1px, transparent 1px)",
        // Family gradient-quantum (violet -> cyan -> magenta).
        "brand-gradient": "linear-gradient(120deg, #6d3bd4 0%, #0e8fa8 55%, #bd3478 100%)",
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
