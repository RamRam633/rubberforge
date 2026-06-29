import type { StationId } from "./simulation";

// ── Rubber chemistry domain types ────────────────────────────────────────────
// Conceptual, educational chemistry layer. No formulations, phr quantities,
// cure temperatures/times, or recipes anywhere.

export interface CompoundIngredientCategory {
  id: string;
  category: string;
  purpose: string;
  whatItChanges: string;
  processEffect: string;
  propertyEffect: string;
  risks: string;
  whereInSimulator: string;
}

export interface CureConcept {
  id: string;
  cureType: string;
  mechanism: string;
  useContext: string;
  whatChanges: string;
  risks: string;
  safeExplanation: string;
}

export interface DefectChemistry {
  id: string;
  defect: string;
  visualSymptom: string;
  chemistryCause: string;
  processCause: string;
  affectedMaterialState: string;
  whereItAppears: string;
  relatedStationId: StationId;
  severity: "low" | "medium" | "high";
  learningExplanation: string;
}

export interface ChemistryConcept {
  id: string;
  title: string;
  summary: string;
  points: string[];
  analogy?: string;
  takeaway: string;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  whyItMatters: string;
  whereInFactory: string;
}

// ── Per-station chemistry overlay (authored in-app, ties to the 3D stations) ──
export interface StationChemistry {
  stationId: StationId;
  headline: string;
  whatIsHappening: string;
  keyConcept: string;
  chemistryDefects: string[];
  materialNote: string;
}

// ── Compound Builder (conceptual learning tool, never a real recipe) ──────────
export type Level = "low" | "medium" | "high";
export type ProtectionEmphasis =
  | "weather-ozone"
  | "heat-aging"
  | "oil-fuel"
  | "abrasion"
  | "food-potable";
export type CureChoice = "sulfur-style" | "peroxide-style" | "special-system";

export interface CompoundConfig {
  polymerId: string;
  fillerLevel: Level;
  oilLevel: Level;
  protection: ProtectionEmphasis;
  cure: CureChoice;
}

export type Tendency = "low" | "medium" | "high" | "very-high";

export interface CompoundTendencies {
  hardness: Tendency;
  flexibility: Tendency;
  abrasion: Tendency;
  processability: Tendency;
  weatherResistance: Tendency;
  oilResistance: Tendency;
  compressionSetRisk: Tendency;
  costTier: Tendency;
  notes: string[];
  reviewQuestions: string[];
}
