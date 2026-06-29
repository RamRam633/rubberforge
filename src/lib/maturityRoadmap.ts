export type MaturityStage = "current" | "future";

export interface MaturityLevel {
  level: number;
  title: string;
  stage: MaturityStage;
  description: string;
  capabilities: string[];
}

// Honest maturity model: Level 1 is current, Levels 2-4 are direction.
export const maturityRoadmap: MaturityLevel[] = [
  {
    level: 1,
    title: "Interactive Virtual Factory",
    stage: "current",
    description: "The current stage: a 3D process visualization with materials, chemistry, quality, and RFQ logic.",
    capabilities: ["3D factory model", "Materials & chemistry", "Quality & standards guidance", "RFQ intelligence"],
  },
  {
    level: 2,
    title: "Configurable Factory Model",
    stage: "future",
    description: "Future: a model configured to a specific manufacturer's products, equipment, capabilities, routes, documents, and branding.",
    capabilities: ["Manufacturer-specific products", "Real equipment & capability data", "Custom process routes", "Document templates & branding"],
  },
  {
    level: 3,
    title: "Data-Connected Factory",
    stage: "future",
    description: "Future: connected to RFQs, drawings, quality records, supplier data, and ERP/MES exports and production history.",
    capabilities: ["Live RFQ database", "Drawing & document upload", "Quality records", "ERP / MES exports"],
  },
  {
    level: 4,
    title: "Live Digital Twin",
    stage: "future",
    description: "A future direction, not current functionality: real-time machine data, production status, sensor feeds, and predictive quality with simulation and optimization.",
    capabilities: ["Real-time machine data", "Production status & bottleneck monitoring", "Predictive quality", "Simulation & optimization"],
  },
];
