import type { FactorySystem } from "@/types/factoryPlatform";
export const factorySystems: FactorySystem[] = [
  {
    "id": "material",
    "name": "Material System",
    "contains": "The raw inputs of the virtual factory: base elastomers, fillers, plasticizers, curatives, and reinforcing agents, each described conceptually with its general role rather than any specific recipe or loading.",
    "whyItMatters": "What goes into the mix sets the ceiling on what the finished sheet can do, so understanding material families is where any realistic factory study has to begin.",
    "linkedPages": [
      "/materials",
      "/chemistry",
      "/glossary"
    ],
    "linkedOutputs": [
      "bill-of-process",
      "technical-review"
    ],
    "linkedLayer": "supply-chain",
    "icon": "boxes"
  },
  {
    "id": "chemistry",
    "name": "Chemistry System",
    "contains": "A conceptual view of how rubber chemistry behaves: vulcanization and crosslinking, the roles of accelerators and antidegradants, and how filler and polymer choices generally shift properties, kept educational and hedged with no cure schedules or formulations.",
    "whyItMatters": "Rubber is defined by its chemistry, and seeing why crosslinking and additives matter turns the factory from a set of machines into a system that can be reasoned about.",
    "linkedPages": [
      "/chemistry",
      "/materials",
      "/glossary"
    ],
    "linkedOutputs": [
      "technical-review",
      "quality-plan"
    ],
    "linkedLayer": "chemistry",
    "icon": "flask"
  },
  {
    "id": "equipment",
    "name": "Equipment System",
    "contains": "The modeled machine line of the virtual factory: mixers, mills, calenders, extruders, presses, and curing equipment, presented as inspectable 3D stations that show what each unit generally does and where it sits in the flow.",
    "whyItMatters": "Equipment is where material and chemistry become physical product, so being able to walk the line and inspect each machine is what makes the factory feel real and legible.",
    "linkedPages": [
      "/simulator",
      "/process"
    ],
    "linkedOutputs": [
      "bill-of-process",
      "factory-audit"
    ],
    "linkedLayer": "maintenance",
    "icon": "cog"
  },
  {
    "id": "process",
    "name": "Process System",
    "contains": "The ordered ten-station flow of the rubber sheet line, with each station described by what goes in, what transformation happens, and what comes out, plus how material moves from one stage to the next.",
    "whyItMatters": "A factory is its sequence, not just its parts, so the process view is what connects raw material at one end to a finished, inspectable sheet at the other.",
    "linkedPages": [
      "/process",
      "/simulator"
    ],
    "linkedOutputs": [
      "bill-of-process",
      "traceability-report"
    ],
    "linkedLayer": "process",
    "icon": "route"
  },
  {
    "id": "people",
    "name": "Human Roles System",
    "contains": "The people layer of the virtual factory: mixers, machine operators, line supervisors, quality inspectors, and maintenance technicians, shown through the decisions and judgment each role typically contributes at the stations they own.",
    "whyItMatters": "Rubber production still depends heavily on operator skill and human judgment, so a factory model that ignores the people would misrepresent how the work actually gets done.",
    "linkedPages": [
      "/process",
      "/factory-intelligence"
    ],
    "linkedOutputs": [
      "factory-audit",
      "quality-plan"
    ],
    "linkedLayer": "people",
    "icon": "users"
  },
  {
    "id": "quality",
    "name": "Quality System",
    "contains": "The inspection and property-evaluation layer: the kinds of tests and checks commonly used on rubber, what good and out-of-spec generally look like, and how quality thinking is structured into a plan, all conceptual and requiring technical review for any real part.",
    "whyItMatters": "Quality is what separates a usable sheet from scrap, so showing how properties are checked and planned is central to evaluating whether a factory can deliver.",
    "linkedPages": [
      "/quality-lab",
      "/defects",
      "/chemistry"
    ],
    "linkedOutputs": [
      "quality-plan",
      "technical-review"
    ],
    "linkedLayer": "quality",
    "icon": "shield"
  },
  {
    "id": "supply-chain",
    "name": "Supply Chain System",
    "contains": "The flow of inputs and outputs around the factory: where materials generally come from, how readiness and sourcing requirements are framed, and how a request can be packaged for a supplier, kept conceptual with no pricing or supplier claims.",
    "whyItMatters": "A factory does not run in isolation, so connecting material inputs and finished-part requests to the outside world is what lets the model support real sourcing decisions.",
    "linkedPages": [
      "/products",
      "/materials",
      "/factory-intelligence"
    ],
    "linkedOutputs": [
      "rfq-package",
      "factory-audit"
    ],
    "linkedLayer": "supply-chain",
    "icon": "truck"
  },
  {
    "id": "maintenance",
    "name": "Maintenance System",
    "contains": "The reliability layer of the virtual factory: how equipment condition, wear, and upkeep generally affect a line, and how maintenance considerations factor into evaluating a station or the factory as a whole, presented conceptually.",
    "whyItMatters": "Downtime and drift quietly govern real output, so treating maintenance as a first-class system is what keeps the factory model honest about operability and readiness.",
    "linkedPages": [
      "/factory-intelligence",
      "/defects"
    ],
    "linkedOutputs": [
      "factory-audit",
      "technical-review"
    ],
    "linkedLayer": "maintenance",
    "icon": "wrench"
  },
  {
    "id": "documentation",
    "name": "Documentation System",
    "contains": "The shared language and reference layer: the glossary of terms, the explanations behind each station and concept, and the structured records that tie material, process, and quality decisions together into traceable form.",
    "whyItMatters": "A factory you cannot describe or trace cannot be audited or improved, so the documentation layer is what turns exploration into something repeatable and reviewable.",
    "linkedPages": [
      "/glossary",
      "/process",
      "/factory-intelligence"
    ],
    "linkedOutputs": [
      "traceability-report",
      "bill-of-process"
    ],
    "linkedLayer": "documentation",
    "icon": "file"
  },
  {
    "id": "output",
    "name": "Output System",
    "contains": "The deliverables the virtual factory can generate from everything above: an RFQ package, a factory audit report, a quality plan, a bill of process, a traceability report, and a technical review, each assembled as a preliminary, review-ready document rather than a final spec.",
    "whyItMatters": "Outputs are where the whole factory pays off, turning material, chemistry, equipment, process, and quality understanding into concrete documents a person can act on.",
    "linkedPages": [
      "/outputs",
      "/products",
      "/factory-intelligence"
    ],
    "linkedOutputs": [
      "rfq-package",
      "factory-audit",
      "quality-plan"
    ],
    "linkedLayer": "rfq",
    "icon": "package"
  }
];
