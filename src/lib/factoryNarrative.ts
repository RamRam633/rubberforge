import type { FirstExperienceOption, FactoryFlowNode } from "@/types/factoryPlatform";

export const PRODUCT_STATEMENT_VF = "RubberForge by VayuAI is a virtual rubber factory for custom elastomer manufacturing. It brings materials, chemistry, machines, people, quality systems, supply chain, and factory workflows together into one interactive digital environment you can explore and interrogate. From that environment, users generate the outputs a real program needs: RFQ packages, process route reports, inspection and quality plans, factory audit summaries, and technical review packages.";
export const TAGLINE_VF = "A virtual rubber factory you can walk through, inspect, and learn from.";
export const HERO_HEADLINE = "Explore a complete virtual rubber factory.";
export const HERO_SUB = "RubberForge by VayuAI models the people, machines, materials, chemistry, quality systems, supply chain, and workflows behind custom rubber manufacturing, all in one interactive environment you can explore end to end.";
export const BALANCED_RFQ_LINE = "RFQ generation is one output of the virtual factory, alongside quality plans, process route reports, factory audit summaries, and technical review packages.";
export const SECONDARY_CTA = "Build RFQ";
export const VAYU_LANGUAGE_VF: string[] = [
  "virtual rubber factory",
  "digital twin-style factory model",
  "factory operations cockpit",
  "manufacturing intelligence environment",
  "factory digitalization layer",
  "interactive factory environment",
  "end-to-end manufacturing model",
  "explorable factory operations"
];

export interface NavCta { label: string; target: string; intent: string; }
export const PRIMARY_CTAS: NavCta[] = [
  {
    "label": "Enter the Virtual Factory",
    "target": "/simulator",
    "intent": "enter-factory"
  },
  {
    "label": "Explore Factory Systems",
    "target": "/systems",
    "intent": "explore-systems"
  },
  {
    "label": "Run a Factory Walkthrough",
    "target": "/simulator",
    "intent": "walkthrough"
  },
  {
    "label": "Generate a Factory Output",
    "target": "/outputs",
    "intent": "generate-output"
  }
];

export const HOME_INTROS = {
  "theVirtualFactory": "RubberForge is a full virtual rubber factory you can walk through: a connected line that carries material from raw-ingredient warehouse and weighing, into mixing, milling, calendering, curing, and cooling, then on through finishing, the quality lab, packaging, and a final technical review. Every station is modeled as a real operation you can inspect, so you can understand how a rubber product is actually made before any output is generated.",
  "factorySystems": "Beneath the floor sits a connected systems layer that ties materials, chemistry, equipment, process routes, quality, and documentation together, so a change at one station is reflected everywhere it matters.",
  "outputs": "From a single walkthrough the virtual factory can generate several outputs, and a quote-ready RFQ package is only one of them.",
  "roadmap": "RubberForge is honestly an interactive virtual factory prototype today, not a live digital twin: it is not yet connected to running machines, real sensors, production data, or ERP and MES systems, and those connections are deliberate roadmap stages rather than current functionality.",
  "closingHeadline": "Step inside the factory before you commit to a build.",
  "closingSub": "RubberForge is a virtual rubber factory you can explore, operate, and learn from, then turn into RFQs, audits, quality plans, and review packages. Start with the guided tour, or run the line yourself."
};

export const SIMULATION_MODES = [
  {
    "name": "Walkthrough Mode",
    "desc": "A guided tour of the factory, station by station, narrating what each operation does and why it matters."
  },
  {
    "name": "Process Simulation Mode",
    "desc": "Run a conceptual sheet manufacturing flow end to end and watch material advance through every station in sequence."
  },
  {
    "name": "Chemistry View",
    "desc": "Reveal the conceptual chemistry behind each stage, from mixing and dispersion to crosslinking during cure."
  },
  {
    "name": "Quality View",
    "desc": "See where in-process checkpoints, tests, and inspection points typically sit along the line."
  },
  {
    "name": "Factory Audit Mode",
    "desc": "Step through a conceptual readiness checklist across the factory and surface gaps that would need attention."
  },
  {
    "name": "Factory Review Mode",
    "desc": "Assemble an internal view of the bill of process, required equipment, quality plan, and review owners."
  },
  {
    "name": "RFQ Output Mode",
    "desc": "Turn a product and material selection into a quote-ready technical package with a completeness score."
  }
];

export const FACTORY_FLOW: FactoryFlowNode[] = [
  {
    "node": "Virtual Factory Model",
    "note": "The interactive 3D line, from warehouse to technical review, that you explore and operate."
  },
  {
    "node": "Factory Systems",
    "note": "The connected layer linking materials, chemistry, equipment, routes, and quality."
  },
  {
    "node": "Digital Thread",
    "note": "A conceptual lot and batch trail that ties each step back to the choices that drove it."
  },
  {
    "node": "Factory Analysis",
    "note": "Readiness checks, process routes, and review logic that interpret what the factory implies."
  },
  {
    "node": "Generated Outputs",
    "note": "Quote-ready RFQ packages, audit reports, quality plans, and other technical documents."
  }
];

export const FIRST_EXPERIENCE_OPTIONS: FirstExperienceOption[] = [
  {
    "intent": "tour",
    "label": "Take Guided Factory Tour",
    "desc": "Walk the whole line station by station with narration, the best way to see what RubberForge is.",
    "target": "/simulator",
    "icon": "footprints"
  },
  {
    "intent": "simulate",
    "label": "Run Sheet Manufacturing Simulation",
    "desc": "Watch a rubber sheet take shape, conceptually, from raw ingredients to a finished roll through every station.",
    "target": "/simulator",
    "icon": "play"
  },
  {
    "intent": "systems",
    "label": "Explore Factory Systems",
    "desc": "Dig into materials, chemistry, equipment, routes, and quality and how they connect.",
    "target": "/systems",
    "icon": "layout-grid"
  },
  {
    "intent": "output",
    "label": "Generate Factory Output",
    "desc": "Produce a factory audit report, quality plan, bill of process, or other technical document.",
    "target": "/outputs",
    "icon": "file-output"
  },
  {
    "intent": "rfq",
    "label": "Build RFQ",
    "desc": "Turn a product and material choice into a quote-ready technical package with a completeness score.",
    "target": "/quote",
    "icon": "file-text"
  }
];

export const ABOUT_VF = {
  "framing": "RubberForge is not a quote portal, and it is not a live production digital twin wired into real machines yet. It is a digital twin-style virtual rubber factory: an interactive prototype that shows how factory visualization, material and process knowledge, quality intelligence, documentation, and commercial workflows can live in one connected industrial system.",
  "currentCapability": "Today you can walk the virtual factory floor, follow material flow station by station, inspect equipment, and explore the chemistry, quality logic, and human roles that typically shape rubber manufacturing. From that same model the prototype generates structured outputs (an RFQ package is one of several, alongside a factory audit view, a preliminary quality plan, a bill of process, a traceability narrative, and a technical review), all of which are educational and conceptual and generally require expert technical review before real use.",
  "notYet": "It is not yet connected to live sensors, real production runs, machine controllers, ERP or MES systems, or actual quality and certification records, and it does not output recipes, settings, pricing, or compliance claims. Everything it shows is a conceptual representation of how a plant commonly operates, not a feed from a running facility.",
  "whyItMatters": "For industrial manufacturers, a virtual factory makes operations legible: teams, customers, and new engineers can see how material moves, where quality is decided, and how a part would be made before any tooling is cut. Digital twins matter because they connect what is often scattered across drawings, spreadsheets, and tribal knowledge into one shared model that supports faster decisions, clearer communication, and lower-risk planning. Starting with a virtual, knowledge-driven twin lets a plant build that shared model and that discipline first, then attach real data as the foundation matures.",
  "vision": "VayuAI builds live, honest industrial software, and RubberForge is the prototype layer (Levels 1 to 3: explore, understand, and generate) of a longer path. The roadmap is to progressively connect this virtual factory to real telemetry, plant systems, and quality records, moving toward Levels 4 and 5 where the twin reflects, and eventually helps steer, an actual production line."
};
