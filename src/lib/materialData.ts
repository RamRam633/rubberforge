import type { MaterialState, MaterialStateId } from "@/types/simulation";

// The eight material states the compound passes through, in order.
// Tones drive the colour of the material-state badge and the flow particle.
export const materialStates: Record<MaterialStateId, MaterialState> = {
  "separate-raw": {
    id: "separate-raw",
    label: "Separate Raw Materials",
    short: "Raw",
    description:
      "Distinct ingredient categories sit apart: a polymer bale, fine black filler, processing oil, protective additives, the cure package, and pigment. Nothing has combined yet.",
    tone: "#9a9082",
  },
  "weighed-batch": {
    id: "weighed-batch",
    label: "Weighed Batch",
    short: "Batch",
    description:
      "Every category has been portioned into one batch on the tray. The recipe is assembled but still a loose collection of solids and liquids.",
    tone: "#c2b59a",
  },
  "rough-mixed": {
    id: "rough-mixed",
    label: "Rough Mixed Compound",
    short: "Rough mix",
    description:
      "The batch has been worked into a single dark mass. Filler and oil are folded into the polymer, but dispersion is uneven and the surface looks coarse.",
    tone: "#3a3d42",
  },
  "smooth-milled": {
    id: "smooth-milled",
    label: "Smoother Milled Compound",
    short: "Milled",
    description:
      "Repeated passes through the mill have homogenised the compound into a uniform, pliable, plastic band with even colour and texture, ready to feed the calender.",
    tone: "#2c2e32",
  },
  "uncured-sheet": {
    id: "uncured-sheet",
    label: "Continuous Uncured Sheet",
    short: "Uncured",
    description:
      "The compound is now a continuous flat sheet of controlled thickness. It holds its shape but is still soft, tacky, and plastic: not yet rubber.",
    tone: "#212327",
  },
  "cured-sheet": {
    id: "cured-sheet",
    label: "Cured / Vulcanized Sheet",
    short: "Cured",
    description:
      "Heat and the cure system have crosslinked the polymer chains. The sheet is now elastic, resilient rubber that springs back when stretched.",
    tone: "#17181b",
  },
  "cooled-trimmed": {
    id: "cooled-trimmed",
    label: "Cooled & Trimmed Sheet",
    short: "Trimmed",
    description:
      "The sheet has been stabilised by cooling, its edges squared, and it is slit to width, lying flat and ready for inspection. Winding comes later.",
    tone: "#1b1c1f",
  },
  "inspected-final": {
    id: "inspected-final",
    label: "Inspected Finished Product",
    short: "Finished",
    description:
      "Thickness, hardness, surface, and dimensions have been verified. The roll is a released finished product: a black EPDM rubber sheet.",
    tone: "#121316",
  },
};

export const materialStateOrder: MaterialStateId[] = [
  "separate-raw",
  "weighed-batch",
  "rough-mixed",
  "smooth-milled",
  "uncured-sheet",
  "cured-sheet",
  "cooled-trimmed",
  "inspected-final",
];
