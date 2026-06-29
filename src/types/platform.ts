// ── Rubber factory platform domain types ─────────────────────────────────────
// Materials, products, manufacturing routes, and quote logic. All content is
// preliminary and educational: qualitative bands only, no recipes or pricing.

export type Band = "low" | "medium" | "high" | "very-high" | "application-dependent";
export type CostTier = "low" | "medium" | "high" | "very-high";
export type MaterialKind = "polymer" | "category";
export type Polarity = "low" | "medium" | "high" | "special";
export type Saturation = "unsaturated" | "saturated" | "partially-saturated" | "special";

export type FilterTag =
  | "oil-resistant"
  | "weather-resistant"
  | "water-resistant"
  | "abrasion-resistant"
  | "high-temperature"
  | "food-potable"
  | "general-purpose"
  | "premium"
  | "chemical-resistant";

export interface MaterialFamily {
  id: string;
  displayName: string;
  abbreviation: string;
  kind: MaterialKind;
  polymerFamily: string;
  commonNames: string[];
  costTier: CostTier;
  // Qualitative resistance bands.
  weatherResistance: Band;
  oilResistance: Band;
  waterResistance: Band;
  chemicalResistance: Band;
  abrasionResistance: Band;
  temperatureBand: Band;
  temperatureNote: string;
  strengths: string[];
  limitations: string[];
  applications: string[];
  productForms: string[];
  // Chemistry depth.
  chemicalCharacter: string;
  polarity: Polarity;
  saturation: Saturation;
  cureConcept: string;
  whyItBehaves: string;
  bestEnvironments: string[];
  weakEnvironments: string[];
  quoteQuestions: string[];
  manufacturingNotes: string;
  cautionNotes: string;
  chemistryNotes: string;
  compatibilityNotes: string;
  safeExplanation: string;
  filterTags: FilterTag[];
}

export type SimulatorAvailability = "available-now" | "simplified-route" | "future-module";

export interface ProductCategory {
  id: string;
  name: string;
  shortDescription: string;
  commonMaterials: string[];
  applications: string[];
  requiredQuoteInputs: string[];
  optionalQuoteInputs: string[];
  manufacturingRoute: string[]; // ordered RouteStep ids
  likelyEquipment: string[];
  commonDefects: string[];
  inspectionConsiderations: string[];
  simulatorAvailability: SimulatorAvailability;
  routeNote: string;
}

export type CapabilityId =
  | "compounding"
  | "internal-mixing"
  | "milling"
  | "calendering"
  | "curing"
  | "cutting-slitting"
  | "molding"
  | "inspection-testing"
  | "packaging";

export interface RouteStep {
  id: string;
  label: string;
  description: string;
  capability: CapabilityId;
}

// ── Quote / RFQ ──────────────────────────────────────────────────────────────
export type QuoteFieldType = "text" | "textarea" | "number" | "select" | "boolean";

export interface QuoteQuestion {
  id: string;
  label: string;
  type: QuoteFieldType;
  options?: string[];
  help?: string;
}

export interface QuoteGroup {
  id: string;
  label: string;
  appliesToMaterials: string[]; // material ids; empty = any
  appliesToProducts: string[]; // product ids; empty = any
  questions: QuoteQuestion[];
}

// ── Product / material matrix ────────────────────────────────────────────────
export type MatrixLevel = "common" | "suitable-with-review" | "not-typical";

export interface MatrixCell {
  column: string;
  level: MatrixLevel;
}

export interface MatrixRow {
  materialId: string;
  note: string;
  cells: MatrixCell[];
}

export interface ProductMaterialMatrix {
  columns: string[];
  rows: MatrixRow[];
}
