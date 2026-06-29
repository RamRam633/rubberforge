import type { Machine, StationId } from "@/types/simulation";

// The ten stations on the factory floor, in process order.
// Family drives the accent treatment and grouping in the UI.
export const machines: Machine[] = [
  {
    id: "raw-material-room",
    name: "Raw Material Room",
    shortName: "Raw Room",
    family: "intake",
    oneLiner: "Receive, identify, and stage the ingredient categories.",
  },
  {
    id: "weighing-station",
    name: "Weighing Station",
    shortName: "Weighing",
    family: "intake",
    oneLiner: "Portion every category to its recipe proportion.",
  },
  {
    id: "internal-mixer",
    name: "Internal Mixer",
    shortName: "Mixer",
    family: "mixing",
    oneLiner: "Disperse filler and oils into the polymer under shear.",
  },
  {
    id: "two-roll-mill",
    name: "Two-Roll Mill",
    shortName: "Mill",
    family: "mixing",
    oneLiner: "Homogenize, cool, and work in the cure package.",
  },
  {
    id: "calender",
    name: "Calender",
    shortName: "Calender",
    family: "forming",
    oneLiner: "Form a continuous sheet of controlled thickness.",
  },
  {
    id: "vulcanization",
    name: "Vulcanization",
    shortName: "Cure",
    family: "curing",
    oneLiner: "Crosslink the chains: compound becomes elastic rubber.",
  },
  {
    id: "cooling",
    name: "Cooling",
    shortName: "Cooling",
    family: "finishing",
    oneLiner: "Stabilize temperature and lock in dimensions.",
  },
  {
    id: "trimming-slitting",
    name: "Trimming & Slitting",
    shortName: "Trim",
    family: "finishing",
    oneLiner: "Square the edges and cut to target width.",
  },
  {
    id: "inspection",
    name: "Inspection",
    shortName: "Inspect",
    family: "qa",
    oneLiner: "Verify thickness, hardness, surface, and dimensions.",
  },
  {
    id: "finished-roll",
    name: "Finished Roll",
    shortName: "Roll",
    family: "output",
    oneLiner: "Wind, label, and release the finished sheet.",
  },
];

export const machinesById: Record<StationId, Machine> = machines.reduce(
  (acc, m) => {
    acc[m.id] = m;
    return acc;
  },
  {} as Record<StationId, Machine>,
);

// Visual accent per machine family.
export const familyAccent: Record<Machine["family"], { ring: string; text: string; dot: string }> = {
  intake: { ring: "rgba(148,163,184,0.6)", text: "#cbd5e1", dot: "#94a3b8" },
  mixing: { ring: "rgba(249,115,22,0.7)", text: "#ffb066", dot: "#f97316" },
  forming: { ring: "rgba(56,189,248,0.7)", text: "#7dd3fc", dot: "#38bdf8" },
  curing: { ring: "rgba(249,115,22,0.9)", text: "#ff8c2b", dot: "#ff8c2b" },
  finishing: { ring: "rgba(125,211,252,0.6)", text: "#9fd8f5", dot: "#7dd3fc" },
  qa: { ring: "rgba(52,211,153,0.7)", text: "#6ee7b7", dot: "#34d399" },
  output: { ring: "rgba(52,211,153,0.9)", text: "#34d399", dot: "#34d399" },
};
