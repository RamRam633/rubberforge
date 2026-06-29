import type { RouteStep } from "@/types/platform";

export const routeSteps: RouteStep[] = [
  {
    "id": "raw-materials",
    "label": "Raw Material Receiving and Staging",
    "description": "Incoming elastomers, fillers, and additives are received, identified, and staged for use; this overview is preliminary educational guidance, not a production specification.",
    "capability": "compounding"
  },
  {
    "id": "weighing",
    "label": "Weighing and Batch Preparation",
    "description": "Compound ingredients are measured into batches according to a controlled formulation, with the qualitative description offered here as preliminary educational guidance only.",
    "capability": "compounding"
  },
  {
    "id": "internal-mixing",
    "label": "Internal (Banbury-Type) Mixing",
    "description": "Polymer, fillers, and chemicals are commonly combined in an enclosed intensive mixer to disperse ingredients into a workable masterbatch; presented as preliminary educational guidance.",
    "capability": "internal-mixing"
  },
  {
    "id": "milling",
    "label": "Two-Roll Mill Processing",
    "description": "Compound is typically worked between counter-rotating rolls to blend, cool, and sheet the material for downstream steps, described here as preliminary educational guidance.",
    "capability": "milling"
  },
  {
    "id": "calendering",
    "label": "Calendering",
    "description": "Uncured compound is generally passed through heated rolls to form continuous sheet of controlled thickness, with this conceptual note serving as preliminary educational guidance.",
    "capability": "calendering"
  },
  {
    "id": "curing",
    "label": "Curing (Vulcanization)",
    "description": "Heat and pressure are commonly applied to crosslink the rubber and develop its final elastic properties, summarized here as preliminary educational guidance rather than a process recipe.",
    "capability": "curing"
  },
  {
    "id": "cooling",
    "label": "Cooling and Conditioning",
    "description": "Cured parts are allowed to cool and stabilize so dimensions and properties settle before handling, offered as preliminary educational guidance.",
    "capability": "curing"
  },
  {
    "id": "trimming-slitting",
    "label": "Trimming and Slitting",
    "description": "Excess material and flash are removed and stock is cut to working width, described here as preliminary educational guidance only.",
    "capability": "cutting-slitting"
  },
  {
    "id": "inspection",
    "label": "Quality Inspection",
    "description": "Parts are reviewed against requirements for visual, dimensional, and general quality attributes, with results requiring technical review and treated here as preliminary educational guidance.",
    "capability": "inspection-testing"
  },
  {
    "id": "packaging",
    "label": "Packaging and Labeling",
    "description": "Finished goods are protected, identified, and prepared for storage or shipment, presented as preliminary educational guidance.",
    "capability": "packaging"
  },
  {
    "id": "die-cutting",
    "label": "Die Cutting",
    "description": "Flat or sheet stock is generally cut to profile using a shaped die to produce gaskets or seals, summarized here as preliminary educational guidance.",
    "capability": "cutting-slitting"
  },
  {
    "id": "dimensional-inspection",
    "label": "Dimensional Inspection",
    "description": "Critical features are measured against drawing tolerances, with findings requiring technical review and shared here as preliminary educational guidance.",
    "capability": "inspection-testing"
  },
  {
    "id": "fabric-prep",
    "label": "Fabric Preparation",
    "description": "Reinforcing textiles are inspected, conditioned, and readied for combination with rubber, described as preliminary educational guidance.",
    "capability": "compounding"
  },
  {
    "id": "fabric-calendering",
    "label": "Fabric Calendering (Frictioning and Skim Coating)",
    "description": "Rubber compound is typically pressed onto or into fabric to create reinforced ply stock, offered here as preliminary educational guidance.",
    "capability": "calendering"
  },
  {
    "id": "layering",
    "label": "Layering and Ply Build-Up",
    "description": "Sheets, plies, or coated fabrics are assembled in sequence to form a multi-layer construction, presented as preliminary educational guidance.",
    "capability": "molding"
  },
  {
    "id": "preform",
    "label": "Preform Preparation",
    "description": "Uncured compound is shaped into a blank sized for the mold cavity to improve fill and consistency, summarized as preliminary educational guidance.",
    "capability": "molding"
  },
  {
    "id": "molding",
    "label": "Molding (Compression, Transfer, or Injection)",
    "description": "Compound is commonly shaped and cured within a closed mold to form the finished geometry, described here as preliminary educational guidance rather than a parameter sheet.",
    "capability": "molding"
  },
  {
    "id": "deflashing",
    "label": "Deflashing",
    "description": "Residual flash from the mold parting line is removed by trimming, tumbling, or cryogenic methods, offered as preliminary educational guidance.",
    "capability": "cutting-slitting"
  },
  {
    "id": "mandrel-build",
    "label": "Mandrel Build-Up",
    "description": "Compound and reinforcement are applied over a mandrel to form hose, tube, or cylindrical parts, presented here as preliminary educational guidance.",
    "capability": "molding"
  },
  {
    "id": "finishing",
    "label": "Finishing Operations",
    "description": "Secondary work such as grinding, buffing, boring, or surface treatment refines the part to its final condition, described as preliminary educational guidance.",
    "capability": "cutting-slitting"
  },
  {
    "id": "extrusion",
    "label": "Extrusion",
    "description": "Compound is generally forced through a shaped die to produce continuous profiles, cord, or tube prior to curing, summarized here as preliminary educational guidance.",
    "capability": "molding"
  },
  {
    "id": "slitting",
    "label": "Slitting to Width",
    "description": "Continuous sheet or roll stock is cut lengthwise into narrower widths or strips, offered as preliminary educational guidance.",
    "capability": "cutting-slitting"
  },
  {
    "id": "reinforcement-buildup",
    "label": "Reinforcement Build-Up",
    "description": "Plies, fabric, or cord layers are added to develop strength and pressure capability in the construction, presented here as preliminary educational guidance.",
    "capability": "molding"
  },
  {
    "id": "pressure-test",
    "label": "Pressure and Leak Testing",
    "description": "Assembled parts are checked for integrity under pressure or vacuum to screen for leaks, with results requiring technical review and shared as preliminary educational guidance.",
    "capability": "inspection-testing"
  },
  {
    "id": "sheet-stock",
    "label": "Sheet Stock Production",
    "description": "Cured rubber is produced in standardized sheet form for general use or further fabrication, described here as preliminary educational guidance.",
    "capability": "calendering"
  }
];

export const routeStepsById: Record<string, RouteStep> = Object.fromEntries(
  routeSteps.map((s) => [s.id, s]),
);
