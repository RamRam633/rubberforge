export type ReadinessStatus = "built" | "configurable" | "data-connected";

export interface ReadinessArea {
  area: string;
  status: ReadinessStatus;
  note: string;
}

export const READINESS_LABELS: Record<ReadinessStatus, string> = {
  built: "Built now",
  configurable: "Configurable next",
  "data-connected": "Data-connected future",
};

// Honest digital-twin readiness across the product's areas.
export const digitalTwinReadiness: ReadinessArea[] = [
  { area: "3D factory model", status: "built", note: "Interactive rubber sheet line, end to end." },
  { area: "Materials library", status: "built", note: "Elastomer families with qualitative guidance." },
  { area: "Process route engine", status: "built", note: "Deterministic preliminary routes per product." },
  { area: "Equipment library", status: "built", note: "Educational equipment and supplier categories." },
  { area: "Chemistry layer", status: "built", note: "Conceptual rubber chemistry and compound logic." },
  { area: "Quality lab", status: "built", note: "Tests, standards references, inspection plans." },
  { area: "RFQ engine", status: "built", note: "Completeness scoring and a technical package." },
  { area: "Documentation", status: "configurable", note: "Document expectations modeled; templates configurable next." },
  { area: "Supplier data", status: "configurable", note: "Supplier categories today; real vendor data configurable next." },
  { area: "Production data", status: "data-connected", note: "Requires integration with shop-floor and ERP/MES systems." },
  { area: "Live machine data", status: "data-connected", note: "Requires real-time sensor and machine connectivity." },
  { area: "Simulation & optimization", status: "data-connected", note: "A future direction once live data is connected." },
];
