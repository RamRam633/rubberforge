import type { DigitalTwinLevel } from "@/types/factoryPlatform";
export const digitalTwinMaturity: DigitalTwinLevel[] = [
  {
    "level": 1,
    "title": "L1 Visual Virtual Factory",
    "stage": "current",
    "description": "A navigable 3D rubber factory where every major station is modeled, the process flow is laid out in order, and a guided walkthrough explains how material moves from raw ingredients to a finished product.",
    "capabilities": [
      "Realistic 3D factory line with distinct, walkable equipment models",
      "Ordered process flow from material intake through inspection and finishing",
      "Guided camera walkthrough with view modes for the full line, an active machine, and a material cutaway",
      "Conceptual material-state changes shown as the product advances",
      "Crew and zone context so the factory reads as a working operation, not a static diagram"
    ]
  },
  {
    "level": 2,
    "title": "L2 Knowledge-Connected Factory",
    "stage": "current",
    "description": "The visual factory is layered with structured, hedged knowledge about materials, chemistry, quality, equipment, supply chain, standards, and defects so a viewer can understand why each step exists.",
    "capabilities": [
      "Material and product libraries spanning common polymer families and product forms",
      "Conceptual chemistry and compounding tendencies, qualitative bands rather than recipes or settings",
      "Equipment, ingredient, and supply-chain references tied to each station",
      "Quality concepts, testing categories, and standards pointers for context only",
      "Defect explorer linking likely process and chemistry causes to the checks that typically catch them"
    ]
  },
  {
    "level": 3,
    "title": "L3 Workflow-Connected Factory",
    "stage": "current",
    "description": "The platform turns exploration into structured outputs, generating preliminary documents such as RFQ packages, virtual factory and audit reviews, quality plans, bills of process, and traceability summaries from deterministic, explainable logic.",
    "capabilities": [
      "RFQ package as one output among several, with a live completeness score and adaptive questions",
      "Virtual factory report, conceptual audit checklist, and readiness review",
      "Inspection plan and quality-plan drafts assembled from station and test concepts",
      "Bill of process and traceability summary generated from the modeled route",
      "Copy and JSON export of outputs, all marked preliminary and requiring technical review"
    ]
  },
  {
    "level": 4,
    "title": "L4 Data-Connected Factory",
    "stage": "future",
    "description": "On the roadmap, the factory is connected to real-world records so outputs reflect an actual manufacturer's capabilities, real product data, real quality history, and uploaded documents rather than conceptual defaults.",
    "capabilities": [
      "Real manufacturer capability and equipment profiles in place of generic models",
      "Real product specifications and historical quality records",
      "Document upload and parsing for drawings, specs, and certificates",
      "Customer and supplier records linked to projects and quotes",
      "Outputs grounded in a manufacturer's actual data, still reviewed by a person"
    ]
  },
  {
    "level": 5,
    "title": "L5 Live Digital Twin",
    "stage": "future",
    "description": "The long-term goal is a true live twin connected to running equipment and plant systems, reflecting real machine status and sensor data and supporting monitoring, predictive quality, and optimization.",
    "capabilities": [
      "Live machine status and sensor data from connected equipment",
      "MES and ERP integration with real-time production tracking",
      "Bottleneck and throughput monitoring across the line",
      "Predictive quality and early defect warning from production signals",
      "What-if simulation and optimization against live plant conditions"
    ]
  }
];
