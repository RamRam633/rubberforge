import type { FactoryLayer, FactoryLayerId } from "@/types/factoryPlatform";
export const factoryLayers: FactoryLayer[] = [
  {
    "id": "process",
    "accent": "#d97706",
    "icon": "route",
    "name": "Process",
    "oneLiner": "What this station physically does to the material: the transformation it performs, what enters, what leaves, and why the step matters to the finished sheet.",
    "stationPanelShows": [
      "Purpose and the input/output material state",
      "What changes here (or that nothing is transformed yet)",
      "Why it matters and common defects to watch"
    ]
  },
  {
    "id": "chemistry",
    "accent": "#7c3aed",
    "icon": "flask",
    "name": "Chemistry",
    "oneLiner": "The conceptual chemistry behind the station: how the compound is built, conditioned, and (at curing) crosslinked into an elastic network, with no formulations or cure parameters.",
    "stationPanelShows": [
      "What is happening to the polymer, fillers, and cure system",
      "Key concept (dispersion, processability, crosslink density)",
      "Chemistry-linked defect tendencies"
    ]
  },
  {
    "id": "quality",
    "accent": "#2563eb",
    "icon": "shield",
    "name": "Quality",
    "oneLiner": "The in-process quality view of the station: the conceptual checks performed, what a release decision depends on, and how material is held or passed forward.",
    "stationPanelShows": [
      "Conceptual in-process checks at this step",
      "Release or hold concept (what must pass)",
      "What a deviation typically triggers"
    ]
  },
  {
    "id": "supply-chain",
    "accent": "#0d9488",
    "icon": "truck",
    "name": "Supply Chain",
    "oneLiner": "Where this station's inputs come from upstream: the supplier categories that feed it, the documents that should travel with the lot, and the sourcing risks to flag.",
    "stationPanelShows": [
      "Upstream supplier categories feeding this step",
      "Documents that should accompany the lot (CoA, TDS)",
      "Sourcing risks and questions to ask"
    ]
  },
  {
    "id": "people",
    "accent": "#16a34a",
    "icon": "users",
    "name": "People",
    "oneLiner": "The human role that owns this station: what an operator conceptually monitors, the information they need, and the safety and quality concerns they watch from a safe position.",
    "stationPanelShows": [
      "Role at this station and what they monitor",
      "Information the role needs to do the job",
      "Safety and quality concerns they watch for"
    ]
  },
  {
    "id": "maintenance",
    "accent": "#ea580c",
    "icon": "wrench",
    "name": "Maintenance",
    "oneLiner": "The equipment-health lens on the station: the upkeep theme, likely wear points, conceptual inspection focus, and how downtime here would ripple down the line.",
    "stationPanelShows": [
      "Upkeep theme and likely wear points",
      "Conceptual inspection focus and a health badge",
      "Downtime risk and quality impact if it degrades"
    ]
  },
  {
    "id": "documentation",
    "accent": "#64748b",
    "icon": "file",
    "name": "Documentation",
    "oneLiner": "The paper trail this station contributes: the records and certificates a buyer may expect, what each one does and does not prove, and where traceability is captured.",
    "stationPanelShows": [
      "Records and certificates tied to this step",
      "What each document attests (and its limits)",
      "Traceability captured here for the lot"
    ]
  },
  {
    "id": "rfq",
    "accent": "#9333ea",
    "icon": "clipboard",
    "name": "RFQ / Commercial",
    "oneLiner": "How this station feeds the commercial outputs: the feasibility, capacity, and sourcing signals it contributes to a quote package, factory audit, and other deliverables, all preliminary.",
    "stationPanelShows": [
      "Feasibility and capacity signals from this step",
      "Sourcing questions and information gaps to close",
      "How it feeds the bill of process and RFQ outputs"
    ]
  }
];
export const factoryLayersById: Record<FactoryLayerId, FactoryLayer> =
  Object.fromEntries(factoryLayers.map((l) => [l.id, l])) as Record<FactoryLayerId, FactoryLayer>;
export const LAYER_ORDER: FactoryLayerId[] = factoryLayers.map((l) => l.id);
