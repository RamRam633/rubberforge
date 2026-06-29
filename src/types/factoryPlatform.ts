import type { StationId } from "./simulation";

// ── Virtual-factory platform model ───────────────────────────────────────────
// The reframed product: a virtual rubber factory whose connected systems can be
// viewed through layers and which generates technical outputs. Educational and
// digital twin-STYLE, never a live twin connected to real machines.

// 8 factory layers (lenses). RFQ is one layer among many.
export type FactoryLayerId =
  | "process"
  | "chemistry"
  | "quality"
  | "supply-chain"
  | "people"
  | "maintenance"
  | "documentation"
  | "rfq";

export type LayerIcon =
  | "route"
  | "flask"
  | "shield"
  | "truck"
  | "users"
  | "wrench"
  | "file"
  | "clipboard";

export interface FactoryLayer {
  id: FactoryLayerId;
  name: string;
  oneLiner: string;
  stationPanelShows: string[];
  accent: string; // hex, for badges/toggles
  icon: LayerIcon;
}

// Per-station content shown when a given layer is active in the command center.
export interface LayerCell {
  headline: string;
  points: string[];
}
export type StationLayerContent = Record<FactoryLayerId, LayerCell>;

// 10 connected factory systems.
export type FactorySystemIcon =
  | "boxes"
  | "flask"
  | "cog"
  | "route"
  | "users"
  | "shield"
  | "truck"
  | "wrench"
  | "file"
  | "package";

export interface FactorySystem {
  id: string;
  name: string;
  contains: string;
  whyItMatters: string;
  linkedPages: string[];
  linkedOutputs: string[];
  linkedLayer: FactoryLayerId;
  icon: FactorySystemIcon;
}

// 6 generated factory outputs. RFQ is one of these, not the product identity.
export interface FactoryOutput {
  id: string;
  name: string;
  purpose: string;
  whoUses: string;
  dataNeeded: string[];
  pullsFromLayers: FactoryLayerId[];
  actionLabel: string;
  href: string;
  icon: "file-text" | "clipboard-check" | "shield-check" | "list-ordered" | "git-branch" | "scroll-text";
  accent: string;
}

// 5-level digital twin maturity model.
export type MaturityStage = "current" | "future";
export interface DigitalTwinLevel {
  level: number;
  title: string;
  stage: MaturityStage;
  description: string;
  capabilities: string[];
}

// First-time choices when entering the virtual factory.
export type FirstExperienceIntent = "tour" | "simulate" | "systems" | "output" | "rfq";
export interface FirstExperienceOption {
  intent: FirstExperienceIntent;
  label: string;
  desc: string;
  target: string;
  icon: "footprints" | "play" | "layout-grid" | "file-output" | "file-text";
}

// "From Virtual Factory to Outputs" flow node.
export interface FactoryFlowNode {
  node: string;
  note: string;
}

export type { StationId };
