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

// Visual accent per machine family. `.text` renders on warm-paper surfaces
// (station labels, timeline numbers, family chips) so it must be a dark,
// readable family tone; rings/dots are mid family tones.
export const familyAccent: Record<Machine["family"], { ring: string; text: string; dot: string }> = {
  intake: { ring: "rgba(107,99,86,0.55)", text: "#4a443b", dot: "#8a8073" },
  mixing: { ring: "rgba(184,134,11,0.6)", text: "#8a6608", dot: "#b8860b" },
  forming: { ring: "rgba(14,143,168,0.55)", text: "#0e7a8f", dot: "#0e8fa8" },
  curing: { ring: "rgba(184,134,11,0.75)", text: "#8a6608", dot: "#b8860b" },
  finishing: { ring: "rgba(14,143,168,0.5)", text: "#0e7a8f", dot: "#0e8fa8" },
  qa: { ring: "rgba(21,128,61,0.6)", text: "#15803d", dot: "#15803d" },
  output: { ring: "rgba(21,128,61,0.7)", text: "#15803d", dot: "#15803d" },
};
