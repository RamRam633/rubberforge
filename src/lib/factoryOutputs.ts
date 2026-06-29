import type { FactoryOutput } from "@/types/factoryPlatform";
export const factoryOutputs: FactoryOutput[] = [
  {
    "id": "rfq-package",
    "name": "RFQ Package",
    "purpose": "Assembles a preliminary request-for-quote package that summarizes the part concept, candidate process route, and the factory capabilities relevant to making it, so a supplier conversation can begin on a shared technical footing.",
    "whoUses": "Sourcing, sales, engineering",
    "dataNeeded": [
      "Part concept and intended function",
      "Candidate process route",
      "Estimated volume and cadence",
      "Key requirements to review"
    ],
    "pullsFromLayers": [
      "rfq",
      "process",
      "chemistry",
      "supply-chain"
    ],
    "actionLabel": "Open RFQ builder",
    "href": "/quote",
    "icon": "file-text",
    "accent": "#a855f7"
  },
  {
    "id": "factory-audit",
    "name": "Factory Audit Report",
    "purpose": "Produces a structured walkthrough of the virtual factory's stations, equipment, and operating practices so a reader can assess how the line is generally set up and where readiness gaps typically appear.",
    "whoUses": "Operations, customer auditors, management",
    "dataNeeded": [
      "Station and equipment inventory",
      "Process flow and sequence",
      "Maintenance and uptime practices",
      "Observed readiness gaps"
    ],
    "pullsFromLayers": [
      "process",
      "maintenance",
      "quality",
      "people"
    ],
    "actionLabel": "Run factory audit",
    "href": "/outputs#factory-audit",
    "icon": "clipboard-check",
    "accent": "#6b6ff6"
  },
  {
    "id": "quality-plan",
    "name": "Quality Inspection Plan",
    "purpose": "Outlines a conceptual inspection plan that maps common control points across the line, the property categories typically checked, and where in the flow each check generally occurs, for review by a technical owner before use.",
    "whoUses": "Quality engineering, inspection, customer",
    "dataNeeded": [
      "Process flow and control points",
      "Property categories to verify",
      "Inspection stage and frequency concepts",
      "Acceptance criteria to be defined"
    ],
    "pullsFromLayers": [
      "quality",
      "process",
      "chemistry",
      "documentation"
    ],
    "actionLabel": "Build inspection plan",
    "href": "/outputs#quality-plan",
    "icon": "shield-check",
    "accent": "#5d75f0"
  },
  {
    "id": "bill-of-process",
    "name": "Bill of Process",
    "purpose": "Generates an ordered, conceptual sequence of the operations a part typically passes through across the factory, with the equipment family and general intent of each step, as an educational process map rather than a settings sheet.",
    "whoUses": "Manufacturing engineering, planning",
    "dataNeeded": [
      "Operation sequence and dependencies",
      "Equipment family per step",
      "General step intent and transformation",
      "Handoffs between stations"
    ],
    "pullsFromLayers": [
      "process",
      "chemistry",
      "people",
      "maintenance"
    ],
    "actionLabel": "Generate bill of process",
    "href": "/outputs#bill-of-process",
    "icon": "list-ordered",
    "accent": "#8b7fff"
  },
  {
    "id": "traceability-report",
    "name": "Traceability Report",
    "purpose": "Illustrates how material, batch, and station identifiers can be linked into a conceptual chain from incoming materials through processing to finished part, showing where records would generally attach in a future connected system.",
    "whoUses": "Quality, compliance, customer",
    "dataNeeded": [
      "Material and batch identifiers",
      "Station and operation linkage",
      "Record attachment points",
      "Chain-of-custody steps"
    ],
    "pullsFromLayers": [
      "supply-chain",
      "process",
      "quality",
      "documentation"
    ],
    "actionLabel": "View traceability chain",
    "href": "/outputs#traceability-report",
    "icon": "git-branch",
    "accent": "#2dd4bf"
  },
  {
    "id": "technical-review",
    "name": "Technical Review Summary",
    "purpose": "Pulls together the factory's process, chemistry, quality, and readiness observations into one hedged narrative that flags assumptions and open questions a qualified reviewer would typically need to resolve.",
    "whoUses": "Engineering lead, technical reviewer",
    "dataNeeded": [
      "Process and chemistry observations",
      "Quality and readiness findings",
      "Stated assumptions",
      "Open questions to resolve"
    ],
    "pullsFromLayers": [
      "process",
      "chemistry",
      "quality",
      "maintenance",
      "documentation"
    ],
    "actionLabel": "Open technical review",
    "href": "/quote",
    "icon": "scroll-text",
    "accent": "#94a3b8"
  }
];
