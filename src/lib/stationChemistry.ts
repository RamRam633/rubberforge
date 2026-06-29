import type { StationChemistry } from "@/types/chemistry";
import type { StationId } from "@/types/simulation";

// Per-station chemistry/material overlay for the simulator Chemistry View.
// Conceptual only: no formulations, temperatures, or cure parameters.
export const stationChemistry: Record<StationId, StationChemistry> = {
  "raw-material-room": {
    stationId: "raw-material-room",
    headline: "Separate phases, nothing transformed yet",
    whatIsHappening:
      "The base polymer is a raw, uncompounded gum of long chains. Fillers, oils, protective additives, the cure system, and pigment are still separate phases. No chemistry has happened.",
    keyConcept:
      "Everything downstream inherits these inputs. Polymer choice plus ingredient categories will determine the final elastomer behaviour.",
    chemistryDefects: ["Wrong polymer grade", "Cross-contamination", "Moisture pickup in fillers"],
    materialNote: "Polymer chains and ingredient categories exist as separate, unmixed phases.",
  },
  "weighing-station": {
    stationId: "weighing-station",
    headline: "Setting the compound balance",
    whatIsHappening:
      "Each ingredient category is portioned to its target proportion. The relative balance of polymer, filler, oil, and cure system is being fixed conceptually.",
    keyConcept:
      "Proportions set hardness, strength, flexibility, and how the compound will eventually cure. Consistent ratios in are the only path to consistent rubber out.",
    chemistryDefects: ["Off-ratio batch", "Missed or doubled category"],
    materialNote: "A balanced but still unmixed batch, no reaction yet.",
  },
  "internal-mixer": {
    stationId: "internal-mixer",
    headline: "Dispersion and distribution build the compound",
    whatIsHappening:
      "Under heat and shear, filler agglomerates are broken down and dispersed into the polymer matrix, while process oil aids flow. The reactive cure system is held out here so it cannot react prematurely.",
    keyConcept:
      "Reinforcement comes from true dispersion, not just blending. Good filler-polymer dispersion is where strength and consistency are actually built in.",
    chemistryDefects: ["Poor filler dispersion", "Scorch (premature cure)", "Undermixed batch"],
    materialNote: "Discrete ingredients become one uncured masterbatch.",
  },
  "two-roll-mill": {
    stationId: "two-roll-mill",
    headline: "Conditioning and safe cure incorporation",
    whatIsHappening:
      "The compound is homogenised on the open mill, where heat can escape, and the cure system is worked in evenly at a lower, safer temperature than the hot mixer. The compound stays uncured.",
    keyConcept:
      "Cure ingredients must stay safely uncured here. Even incorporation now avoids scorch and gives the calender a uniform feed.",
    chemistryDefects: ["Uneven cure distribution", "Air entrapment in the band"],
    materialNote: "Uniform, workable, still-uncured compound.",
  },
  calender: {
    stationId: "calender",
    headline: "Shaping depends on processability",
    whatIsHappening:
      "The compound is formed into a continuous sheet. Its flow behaviour and viscosity govern how evenly it spreads and how smooth the surface is. The chemistry and the uncured state are unchanged.",
    keyConcept:
      "Processability (viscosity) controls gauge and surface. The sheet is shaped but still uncured and reworkable.",
    chemistryDefects: ["Gauge variation", "Trapped air / blisters", "Surface marks"],
    materialNote: "A continuous uncured sheet of controlled thickness.",
  },
  vulcanization: {
    stationId: "vulcanization",
    headline: "Crosslinking: the central chemical change",
    whatIsHappening:
      "Heat activates the cure system, which forms crosslinks that tie the previously independent polymer chains into one connected elastic network. This irreversible reaction converts a plastic compound into rubber.",
    keyConcept:
      "Crosslink density is the dial: low density gives softer, more flexible rubber with higher compression-set risk; high density gives harder, stiffer rubber with lower elongation.",
    chemistryDefects: ["Under-cure", "Over-cure / reversion", "Uneven cure through thickness"],
    materialNote: "Uncured compound becomes a crosslinked, elastic network.",
  },
  cooling: {
    stationId: "cooling",
    headline: "Network fixed, dimensions settling",
    whatIsHappening:
      "The crosslink chemistry is already set. Removing heat lets the rubber contract to its settled dimensions and lets properties stabilise. Thermal history can still matter conceptually.",
    keyConcept:
      "Chemistry is complete here. Controlled cooling preserves the flatness and gauge achieved upstream.",
    chemistryDefects: ["Dimensional shrinkage", "Curl from uneven cooling"],
    materialNote: "Cured, dimensionally stabilising sheet.",
  },
  "trimming-slitting": {
    stationId: "trimming-slitting",
    headline: "Physical finishing only",
    whatIsHappening:
      "The crosslink network is complete. Edges are squared and the sheet is cut to width. Only the geometry changes; the cured properties are unchanged.",
    keyConcept: "Chemistry is done. This step finalises the part's footprint, not its material behaviour.",
    chemistryDefects: ["Edge defects", "Out-of-spec width"],
    materialNote: "Cured sheet, trimmed and slit.",
  },
  inspection: {
    stationId: "inspection",
    headline: "Tests indirectly verify the chemistry",
    whatIsHappening:
      "Hardness, dimensional, surface, and (for samples) tensile, compression-set, and aging checks reveal whether the formulation and process were suitable. Inspection observes rather than alters the material.",
    keyConcept:
      "Properties are the proof: hardness, modulus, and set behaviour reflect polymer choice, ingredient balance, and cure state.",
    chemistryDefects: ["Off-target hardness", "Out-of-tolerance thickness", "Surface or aging flaws"],
    materialNote: "Cured product, measured against specification.",
  },
  "finished-roll": {
    stationId: "finished-roll",
    headline: "Final properties = material + process + cure",
    whatIsHappening:
      "The finished rubber's behaviour is the sum of polymer choice, ingredient categories, processing, and cure state. The roll is wound, labeled, and released.",
    keyConcept:
      "No new properties are added here. The part behaves the way the earlier material and process decisions made it behave.",
    chemistryDefects: ["Mislabel / lost traceability"],
    materialNote: "Released finished rubber product.",
  },
};

// Crosslink-diagram density to show per station in Chemistry View.
export function stationCrosslinkDensity(
  stationId: StationId,
  transforming: boolean,
  done: boolean,
): "none" | "low" | "medium" | "high" {
  const cured = ["cooling", "trimming-slitting", "inspection", "finished-roll"];
  if (cured.includes(stationId)) return "high";
  if (stationId === "vulcanization") {
    if (done) return "high";
    if (transforming) return "medium";
    return "none";
  }
  return "none";
}
