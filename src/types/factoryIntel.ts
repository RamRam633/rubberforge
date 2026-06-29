import type { StationId } from "./simulation";

// ── Factory intelligence domain types ────────────────────────────────────────
// Equipment, ingredients, suppliers, utilities, manufacturing engineering, and
// supply chain. Educational + sourcing-preparation only. No operating
// parameters, no recipes, no guaranteed vendors or specs.

export type EquipmentCategory =
  | "raw-material-handling"
  | "mixing"
  | "milling"
  | "sheeting-forming"
  | "curing"
  | "cutting-finishing"
  | "molding"
  | "inspection-testing"
  | "packaging-shipping";

export interface Equipment {
  id: string;
  name: string;
  category: string;
  whatItDoes: string;
  whereInFactory: string;
  inputState: string;
  outputState: string;
  relatedStations: StationId[];
  relatedProducts: string[];
  variants: string[];
  purchasingConsiderations: string[];
  engineeringConsiderations: string[];
  qualityRisks: string[];
  maintenanceConsiderations: string[];
  safetyNote: string;
  supplierCategory: string;
  vendorExamples: string[];
  sourcingQuestions: string[];
  linkedDefects: string[];
}

export type IngredientLibraryCategory =
  | "base-polymer"
  | "filler"
  | "oil-plasticizer"
  | "cure-system"
  | "additive"
  | "reinforcement"
  | "consumable";

export interface IngredientLibraryItem {
  id: string;
  name: string;
  category: IngredientLibraryCategory;
  function: string;
  whereIntroduced: string;
  physicalForm: string;
  handling: string;
  storage: string;
  supplyChain: string;
  qualityCoa: string;
  compatibility: string;
  processingEffect: string;
  propertyEffect: string;
  riskIfPoor: string;
  sourcingQuestions: string[];
  relatedMaterials: string[];
  relatedDefects: string[];
  relatedTests: string[];
}

export interface SupplierCategory {
  id: string;
  name: string;
  equipmentCategory: string;
  whatTheySell: string;
  capabilitiesToAsk: string[];
  buyerPrep: string[];
  integrationQuestions: string[];
  sparesService: string;
  controlsAutomation: string;
  vendorExamples: string[];
}

export interface FactoryUtility {
  id: string;
  name: string;
  whatItIs: string;
  whatItSupports: string;
  relatedStations: StationId[];
  risks: string[];
  sourcingNote: string;
}

export interface ManufacturingControl {
  stationId: StationId;
  purpose: string;
  criticalToQuality: string[];
  inputVariables: string[];
  outputVariables: string[];
  equipmentDependency: string;
  materialDependency: string;
  qualityCheckpoint: string;
  bottleneckRisks: string;
  scrapRisks: string;
  maintenanceRisks: string;
  changeover: string;
  operatorSkill: string;
  automationOpportunity: string;
  traceabilityNeeds: string;
}

export type SupplyStageType = "supplier" | "inbound" | "internal" | "outbound";

export interface SupplyChainStage {
  id: string;
  name: string;
  stageType: SupplyStageType;
  whatIsSupplied: string;
  documentsThatMatter: string[];
  risks: string[];
  questionsToAsk: string[];
  manufacturingImpact: string;
}

export interface CapabilityChain {
  id: string;
  materialId: string;
  materialLabel: string;
  processes: string[];
  equipment: string[];
  products: string[];
  tests: string[];
  quoteQuestions: string[];
  summary: string;
}
