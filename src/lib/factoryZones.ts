import type { FactoryZone } from "@/types/factoryLife";
export const factoryZones: FactoryZone[] = [
  {
    "id": "warehouse",
    "name": "Raw Material Warehouse",
    "purpose": "Receiving and controlled storage of incoming raw materials before they enter production. Bales of natural and synthetic elastomers, bagged compounding ingredients, and drummed process oils are staged here, organized by lot so that each material can be traced back to its source. The zone represents the start of the material chain, where what arrives is logged, segregated, and held until it is called forward.",
    "relatedStations": [
      "raw-material-room"
    ],
    "props": [
      "stacked rubber bales",
      "pallets",
      "labeled drums",
      "racking shelves",
      "parked forklift",
      "inbound goods log board"
    ],
    "signText": "RAW MATERIAL WAREHOUSE",
    "walkthroughNote": "Everything a rubber product is made of begins here as labeled, traceable raw stock waiting to be called into production."
  },
  {
    "id": "weighing-room",
    "name": "Weighing and Batch Prep Room",
    "purpose": "A clean, controlled space where the ingredients for a given compound are measured out into batches by weight. Conceptually this is where a recipe becomes a physical kit of components, each portion identified and grouped so it can move to mixing as a single set. The focus of the zone is accuracy and record-keeping rather than any specific formulation, which stays proprietary.",
    "relatedStations": [
      "weighing-station"
    ],
    "props": [
      "floor scale",
      "bench scale",
      "tared containers",
      "ingredient totes",
      "batch tickets",
      "dust hood"
    ],
    "signText": "WEIGHING & BATCH PREP",
    "walkthroughNote": "Here measured portions of each ingredient are assembled into a batch kit, with an operator confirming weights on a panel and signing the batch ticket."
  },
  {
    "id": "mixing-area",
    "name": "Internal Mixing Area",
    "purpose": "Where weighed batches are combined into a uniform rubber compound. An enclosed internal mixer blends the elastomer with its compounding ingredients into a consistent mass, after which the material is discharged for downstream sheeting. The zone illustrates the transformation from a kit of separate ingredients into a single homogeneous compound, while machine internals stay sealed and out of reach.",
    "relatedStations": [
      "internal-mixer"
    ],
    "props": [
      "enclosed internal mixer",
      "feed hopper",
      "discharge chute",
      "control panel",
      "batch staging cart",
      "guard railings"
    ],
    "signText": "INTERNAL MIXING",
    "walkthroughNote": "An operator watches the enclosed mixer from behind the guard rail and tracks the batch on the control panel as separate ingredients become one uniform compound."
  },
  {
    "id": "milling-area",
    "name": "Two-Roll Milling Area",
    "purpose": "Where mixed compound is worked into a continuous, even sheet on a two-roll mill and cooled for handling. Conceptually this zone shows the compound being homogenized further and formed into a workable sheet that feeds later forming steps. The two-roll mill is presented strictly as a piece of equipment behind its guarding, illustrating the role of sheeting in the flow rather than any hands-on technique.",
    "relatedStations": [
      "two-roll-mill"
    ],
    "props": [
      "guarded two-roll mill",
      "safety trip bar",
      "sheet take-off conveyor",
      "cooling rack",
      "WIP sheet stack",
      "machine guard panel"
    ],
    "signText": "TWO-ROLL MILLING",
    "walkthroughNote": "From a safe standing zone the operator monitors the guarded mill and its emergency trip bar while compound is drawn off as a continuous sheet."
  },
  {
    "id": "calendering-line",
    "name": "Calendering Line",
    "purpose": "Where rubber sheet is formed to a controlled, uniform thickness and width on a calender, often combined with a fabric or backing where the product requires it. This zone represents precision forming, turning worked compound into a smooth continuous web wound onto rolls. It demonstrates the link between bulk compound and a sheet-form product without exposing any setpoints or line speeds.",
    "relatedStations": [
      "calender"
    ],
    "props": [
      "guarded calender stack",
      "fabric let-off roll",
      "web guiding rollers",
      "wind-up roll",
      "thickness gauge readout",
      "line control desk"
    ],
    "signText": "CALENDERING LINE",
    "walkthroughNote": "The calender presses compound into a smooth, even web; staff watch thickness on a readout from the control desk rather than at the rollers."
  },
  {
    "id": "curing-area",
    "name": "Curing / Vulcanization Area",
    "purpose": "Where shaped rubber is cured so that it gains its final strength and elasticity. Heat and pressure in closed presses or autoclaves convert soft compound into a finished elastic material through vulcanization. This is presented as the chemical turning point of the process, with all heat and pressure contained inside closed equipment and people kept well clear of hot surfaces and chamber doors.",
    "relatedStations": [
      "vulcanization"
    ],
    "props": [
      "closed curing press",
      "sealed autoclave door",
      "heat-shield barriers",
      "temperature monitor panel",
      "hot-surface warning markings",
      "cycle status display"
    ],
    "signText": "CURING / VULCANIZATION - HOT ZONE",
    "walkthroughNote": "Curing happens entirely inside closed, heated equipment; an operator reads the cycle status on a panel from outside the marked hot zone."
  },
  {
    "id": "cooling-wip",
    "name": "Cooling and Work-in-Progress Staging",
    "purpose": "A buffer zone where freshly cured product is allowed to cool and stabilize before further handling, and where partially finished work waits between steps. Conceptually it represents the pauses built into a real line: material rests, dimensions settle, and WIP is queued in an orderly way so the flow downstream stays smooth. It connects the hot curing stage to room-temperature finishing.",
    "relatedStations": [
      "cooling"
    ],
    "props": [
      "cooling racks",
      "WIP roll racks",
      "staging pallets",
      "queue lane markings",
      "cool-down timer board",
      "transfer trolley"
    ],
    "signText": "COOLING & WIP STAGING",
    "walkthroughNote": "Cured product rests here to cool and stabilize, with work-in-progress queued in marked lanes before it moves on to finishing."
  },
  {
    "id": "finishing-area",
    "name": "Finishing Area",
    "purpose": "Where cooled product is trimmed, slit, and brought to final dimensions. Edges are cleaned up and the material is cut to the widths or shapes the order calls for. This zone shows the move from a generic cured web or part to a finished item ready for inspection, emphasizing the dimensional and cosmetic refinement that turns raw output into a sellable product.",
    "relatedStations": [
      "trimming-slitting"
    ],
    "props": [
      "trimming bench",
      "guarded slitting station",
      "measuring tools",
      "edge-trim bin",
      "finished-piece cart",
      "dimension check gauges"
    ],
    "signText": "FINISHING - TRIM & SLIT",
    "walkthroughNote": "Cooled product is trimmed and slit to final size at guarded stations, with dimensions confirmed against simple check gauges."
  },
  {
    "id": "quality-lab",
    "name": "Quality Lab",
    "purpose": "Where samples are pulled and tested to confirm the product meets specification before it ships. The lab checks properties such as dimensions, hardness, and appearance, and keeps the records that tie each result back to its batch. It represents the independent check on the line, the place where conformance is verified and documented rather than assumed.",
    "relatedStations": [
      "inspection"
    ],
    "props": [
      "inspection bench",
      "hardness tester",
      "QA sample rack",
      "calipers and gauges",
      "microscope",
      "test-record terminal"
    ],
    "signText": "QUALITY LAB",
    "walkthroughNote": "Samples collected from the line are tested and logged here, so every batch carries a record that it met spec before leaving the plant."
  },
  {
    "id": "maintenance-corner",
    "name": "Maintenance Corner",
    "purpose": "The support hub where equipment is kept reliable. Spare parts, tools, and lubricants are organized here, and planned upkeep and lockout/tagout discipline are coordinated from this corner. It is a non-production zone that exists to keep the rest of the plant running, representing the often-unseen work of reliability and safe servicing of machinery.",
    "relatedStations": [],
    "props": [
      "toolbox and tool chest",
      "spare parts shelving",
      "workbench",
      "lockout/tagout station",
      "lubricant cabinet",
      "maintenance schedule board"
    ],
    "signText": "MAINTENANCE",
    "walkthroughNote": "This support corner holds the tools, spares, and lockout/tagout station that keep machines reliable and safe to service."
  },
  {
    "id": "packaging-shipping",
    "name": "Packaging and Shipping",
    "purpose": "Where finished, inspected product is wrapped, labeled, palletized, and staged for dispatch. Each unit is matched to its paperwork so the right goods leave with the right documentation. This zone closes the production loop, taking verified product from finishing and the lab and preparing it to leave the building as a traceable shipment.",
    "relatedStations": [
      "finished-roll"
    ],
    "props": [
      "wrapping station",
      "label printer",
      "palletizing area",
      "shipping pallets",
      "outbound dock door",
      "dispatch manifest board"
    ],
    "signText": "PACKAGING & SHIPPING",
    "walkthroughNote": "Inspected product is wrapped, labeled, and palletized here, then staged at the dock with its paperwork for dispatch."
  },
  {
    "id": "office-review",
    "name": "Production Office and Review",
    "purpose": "The planning and oversight hub overlooking the floor. Schedules, batch records, and performance metrics are reviewed here, and decisions about sequencing and priorities are coordinated. It represents the information layer of the plant: the place where the day's flow is planned, progress is tracked on the production board, and the paper and digital trail of the operation comes together.",
    "relatedStations": [],
    "props": [
      "production board",
      "scheduling desk",
      "metrics dashboard screen",
      "batch record binders",
      "meeting table",
      "window overlooking the floor"
    ],
    "signText": "PRODUCTION OFFICE",
    "walkthroughNote": "From this office above the floor, staff plan the schedule and track progress on the production board and dashboards."
  },
  {
    "id": "safety-board",
    "name": "Safety Station",
    "purpose": "A central point for plant safety information and emergency readiness. Procedures, hazard reminders, PPE guidance, and emergency equipment are gathered here so anyone on the floor can orient quickly. As a support zone it carries no production role; its purpose is to make the plant's safety culture visible and to keep first-response equipment within easy reach.",
    "relatedStations": [],
    "props": [
      "safety notice board",
      "PPE dispenser",
      "fire extinguisher",
      "first-aid station",
      "eyewash station",
      "emergency exit map"
    ],
    "signText": "SAFETY STATION",
    "walkthroughNote": "This station gathers the plant's safety notices, PPE, and emergency equipment in one clearly marked, easy-to-reach spot."
  }
];
export const factoryZonesById: Record<string, FactoryZone> = Object.fromEntries(factoryZones.map((z) => [z.id, z]));
