import type { StationId } from "./simulation";

// ── Virtual factory enrichment types ─────────────────────────────────────────
// Zones, roles, human interactions, route variants, audit, walkthrough, and
// maintenance. Conceptual and educational; no operating procedures.

export interface FactoryZone {
  id: string;
  name: string;
  purpose: string;
  relatedStations: StationId[];
  props: string[];
  signText: string;
  walkthroughNote: string;
}

export type VestColor = "amber" | "blue" | "green" | "orange" | "violet" | "steel";

export interface FactoryRole {
  id: string;
  displayName: string;
  area: string;
  purpose: string;
  whatTheyMonitor: string;
  infoNeeded: string;
  qualitySafetyConcern: string;
  rfqConnection: string;
  relatedStations: StationId[];
  vestColor: VestColor;
}

export interface HumanInteraction {
  id: string;
  roleId: string;
  stationId: StationId;
  action: string;
  description: string;
}

export type RouteAvailability = "full" | "preview" | "future";

export interface RouteVariant {
  id: string;
  name: string;
  availability: RouteAvailability;
  productId: string;
  steps: string[];
  machinesUsed: string[];
  note: string;
  whatWouldBeNeeded: string;
}

export type AuditCategory =
  | "raw-material"
  | "weighing"
  | "mixing"
  | "milling-calendering"
  | "curing"
  | "finishing"
  | "quality"
  | "shipping"
  | "rfq";

export interface AuditItem {
  id: string;
  category: AuditCategory;
  question: string;
  relatedStation: string;
  helpsAnswer: string;
}

export interface WalkthroughChapter {
  index: number;
  id: string;
  title: string;
  focusStation: StationId;
  explanation: string;
  roleId: string;
  whyRfq: string;
}

export type HealthBadge = "ready" | "needs-review" | "maintenance-risk" | "offline-future";

export interface MaintenanceConcept {
  stationId: StationId;
  maintenanceConcern: string;
  wearPoint: string;
  inspectionNeed: string;
  sparePartsCategory: string;
  downtimeRisk: string;
  qualityImpact: string;
  healthBadge: HealthBadge;
}
