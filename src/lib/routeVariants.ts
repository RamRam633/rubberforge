import type { RouteVariant } from "@/types/factoryLife";
export const routeVariants: RouteVariant[] = [
  {
    "id": "rubber-sheet",
    "name": "Calendered Rubber Sheet (Full 3D Route)",
    "availability": "full",
    "productId": "rubber-sheet",
    "steps": [
      "Raw Material Room and Weighing",
      "Internal Mixer",
      "Two-Roll Mill",
      "Calender",
      "Vulcanization",
      "Cooling",
      "Trimming, Slitting, and Inspection",
      "Finished Roll"
    ],
    "machinesUsed": [
      "Internal (Banbury-type) mixer",
      "Two-roll mill",
      "Calender (roll stack)",
      "Curing autoclave or continuous curing line",
      "Cooling drums and batch-off cooling conveyor",
      "Slitting and trimming line"
    ],
    "note": "Preliminary educational route: the canonical mix, calender, cure, and finish sequence that the full 3D simulation walks station by station across its ten zones; final route and tolerances require technical review.",
    "whatWouldBeNeeded": "This is the fully built 3D route. It already has per-station 3D machine models across all ten zones, animated material-state transitions, a gated state machine, and conceptual operator interactions where staff monitor panels and read tablets from a safe distance rather than touching nip points, hot platens, or the curing chamber."
  },
  {
    "id": "cut-gasket",
    "name": "Cut Gasket from Qualified Sheet (Preview)",
    "availability": "preview",
    "productId": "cut-gaskets",
    "steps": [
      "Qualified Sheet Stock Staging",
      "Die-Cutting Station",
      "Dimensional Inspection",
      "Packaging and Labeling"
    ],
    "machinesUsed": [
      "Die-cutting or clicker press",
      "Steel-rule or matched-metal die",
      "CNC knife or waterjet cutter (alternative)",
      "Dimensional inspection station"
    ],
    "note": "Preliminary educational preview: gaskets are cut to profile from already-cured, qualified sheet, so the route reuses the sheet line's output as its starting point; die selection and tolerances require technical review.",
    "whatWouldBeNeeded": "A full 3D simulation would need a die-cutting press model with a shaped die and a sheet-feed table, an animation of a profile and bolt-circle releasing from the web with the skeleton remaining, and a measurement scene where an operator collects a sample and checks the outline against a drawing on a tablet from a safe distance. It would also need a die-wear drift behavior to make the dimensional-inspection step meaningful."
  },
  {
    "id": "rubber-strip",
    "name": "Slit Rubber Strip from Sheet (Preview)",
    "availability": "preview",
    "productId": "rubber-strips",
    "steps": [
      "Qualified Sheet Stock Staging",
      "Slitting to Width",
      "Coiling or Cut-to-Length",
      "Inspection",
      "Packaging and Labeling"
    ],
    "machinesUsed": [
      "Slitting machine with rotary or razor knives",
      "Coiling and cut-to-length station",
      "Extruder (alternative, for profiled strip)",
      "Inspection station"
    ],
    "note": "Preliminary educational preview: narrow strips are slit lengthwise from qualified sheet (or extruded for profiles) and coiled or cut to length; slitting tolerances require technical review.",
    "whatWouldBeNeeded": "A full 3D simulation would need a slitter model with a knife bank and a web path that splits one wide roll into several narrow coils, plus a winder or cut-to-length scene. It would need a width-and-edge variation behavior so the inspection step has something to detect, and a conceptual operator station where staff watch the running web and read width trends on a panel from a safe distance, never reaching toward the moving knives."
  },
  {
    "id": "fabric-reinforced",
    "name": "Fabric-Reinforced Sheet (Preview)",
    "availability": "preview",
    "productId": "fabric-reinforced-sheet",
    "steps": [
      "Internal Mixer and Two-Roll Mill",
      "Fabric Preparation and Let-Off",
      "Frictioning and Skim-Coat Calendering",
      "Layering and Ply Build-Up",
      "Vulcanization",
      "Cooling",
      "Trimming and Slitting",
      "Inspection"
    ],
    "machinesUsed": [
      "Internal mixer and two-roll mill",
      "Fabric feed and let-off system",
      "Frictioning or topping calender",
      "Layering and build table",
      "Curing press or autoclave",
      "Cooling drums"
    ],
    "note": "Preliminary educational preview: rubber compound is calendered onto reinforcing fabric, the coated plies are layered, then the build is cured; ply construction and adhesion require technical review.",
    "whatWouldBeNeeded": "A full 3D simulation would need a fabric let-off model feeding tensioned textile into the calender nip, a calender variant that skims or frictions rubber onto cloth, and a layering table where plies stack into a multi-layer build. It would need a ply-adhesion and air-entrapment behavior between the rubber and fabric, plus a conceptual operator who aligns the let-off and checks ply registration on a panel from a safe distance, away from the in-running nips."
  },
  {
    "id": "molded-part",
    "name": "Compression or Transfer Molded Part (Future)",
    "availability": "future",
    "productId": "molded-parts",
    "steps": [
      "Internal Mixer and Two-Roll Mill",
      "Preform Preparation",
      "Molding (Compression, Transfer, or Injection)",
      "Deflashing",
      "Inspection",
      "Packaging and Labeling"
    ],
    "machinesUsed": [
      "Internal mixer and two-roll mill",
      "Preform cutter",
      "Compression, transfer, or injection molding press",
      "Deflashing or cryogenic deflash unit",
      "Dimensional inspection station"
    ],
    "note": "Preliminary educational future route: compound is preformed into a blank, then shaped and cured together inside a closed mold, then deflashed; tooling, inserts, and tolerances require technical review.",
    "whatWouldBeNeeded": "A full 3D simulation would need a closed-mold press model that combines forming and curing in one cavity, which is a fundamentally different flow from the open sheet line, plus a preform-cutting scene and a deflashing or tumbling scene. It would need cavity-fill, flash, and parting-line behaviors, mold-open and part-eject animation, and a conceptual operator who loads preforms and monitors the cycle from behind two-hand controls and guarding, never reaching toward the heated platens."
  },
  {
    "id": "sleeve",
    "name": "Mandrel-Built Rubber Sleeve (Future)",
    "availability": "future",
    "productId": "rubber-sleeves",
    "steps": [
      "Internal Mixer and Two-Roll Mill",
      "Mandrel Build-Up",
      "Vulcanization",
      "Mandrel Extraction and Finishing",
      "Inspection"
    ],
    "machinesUsed": [
      "Internal mixer and two-roll mill",
      "Mandrel build station",
      "Autoclave or press cure",
      "Curing racks, trolleys, and mandrels",
      "Mandrel extraction and trim station"
    ],
    "note": "Preliminary educational future route: compound is wrapped or built over a mandrel to form a tube, cured, then extracted and finished to a seamless or wrapped sleeve; reinforcement and dimensional tolerances require technical review.",
    "whatWouldBeNeeded": "A full 3D simulation would need a cylindrical mandrel-build model with a strip-wind or wrap animation, an autoclave loading scene with curing racks, and a mandrel-extraction scene that releases the cured tube. It would need wall-thickness and splice behaviors and a concentricity check at inspection, plus a conceptual operator who loads racks and reads cure-cycle status on a panel from a safe distance, away from the pressurized chamber and hot mandrels."
  },
  {
    "id": "abrasion-liner",
    "name": "Wear-Resistant Abrasion Liner (Preview)",
    "availability": "preview",
    "productId": "abrasion-liners",
    "steps": [
      "Internal Mixer and Two-Roll Mill",
      "Calender",
      "Vulcanization",
      "Cooling",
      "Backing Bond or Fastener Provision",
      "Trimming and Finishing",
      "Inspection",
      "Packaging and Labeling"
    ],
    "machinesUsed": [
      "Internal mixer and two-roll mill",
      "Calender (roll stack)",
      "Curing press or autoclave",
      "Backing bond station",
      "Trimming and finishing line"
    ],
    "note": "Preliminary educational preview: wear compound is calendered and cured into thick panels, then backing or fastening provisions are added; wear material and fastening method require technical review.",
    "whatWouldBeNeeded": "A full 3D simulation would mostly reuse the sheet line's mix, calender, and cure stages but at heavier gauge, then add a backing-bond station model where a steel plate or fabric backing is attached, and a thicker-section cure behavior that can show undercure risk in the core. It would need a conceptual operator who monitors the heavier panel through the line on panels and tablets from a safe distance, with no manual handling near hot or rotating surfaces."
  },
  {
    "id": "sponge-foam",
    "name": "Cellular Sponge and Foam Sheet (Future)",
    "availability": "future",
    "productId": "sponge-foam-sheet",
    "steps": [
      "Raw Material Room and Weighing",
      "Internal Mixer and Two-Roll Mill",
      "Calender",
      "Expansion Cure",
      "Cooling",
      "Slitting and Skiving",
      "Inspection"
    ],
    "machinesUsed": [
      "Internal mixer and two-roll mill",
      "Calender (roll stack)",
      "Expansion cure oven or press",
      "Slitting and skiving line",
      "Lamination station (for backed sheet)"
    ],
    "note": "Preliminary educational future route: compound is formed and then expanded during cure to develop an open- or closed-cell structure; density and cell structure require technical review.",
    "whatWouldBeNeeded": "A full 3D simulation would need an expansion-cure behavior in which the sheet visibly grows in thickness as the cell structure develops, which is distinct from the dense-rubber cure already modeled, plus a skiving scene that splits the expanded slab. It would need cell-structure and density variation behaviors for inspection and a conceptual operator who tracks expansion and density on a panel from a safe distance, away from the cure oven."
  },
  {
    "id": "quality-review",
    "name": "Internal Quality and Documentation Review (Preview)",
    "availability": "preview",
    "productId": "",
    "steps": [
      "Incoming Material and Certificate Review",
      "In-Process Quality Checkpoints",
      "Final Inspection and Test Review",
      "Documentation and Traceability Package",
      "Review Owner Sign-Off"
    ],
    "machinesUsed": [
      "Inspection station and gauging instruments",
      "Lab and test equipment (for property verification)",
      "Batch-record and traceability software",
      "Documentation and reporting tools"
    ],
    "note": "Preliminary educational preview: this is a review and decision flow layered over a production route, not a material-transformation route; inspection results and acceptance criteria require technical review.",
    "whatWouldBeNeeded": "This is not a physical line, so a full 3D simulation would frame it as an overlay on an existing route: highlighting each station's quality checkpoint, showing a conceptual quality engineer collecting a sample and reading results on a tablet from a safe distance, and assembling a documentation package. It would need a deterministic acceptance model, a defect-to-station traceability map, and review-owner sign-off states rather than new machine models."
  },
  {
    "id": "rfq-review",
    "name": "RFQ Intake and Quote-Readiness Review (Preview)",
    "availability": "preview",
    "productId": "",
    "steps": [
      "Customer Requirement Intake",
      "Material and Product Fit Review",
      "Route and Equipment Feasibility Check",
      "Completeness and Gap Scoring",
      "Quote-Ready Technical Package"
    ],
    "machinesUsed": [
      "RFQ intake and questionnaire tools",
      "Deterministic route and material-fit engine",
      "Completeness-scoring engine",
      "Quote package and reporting tools"
    ],
    "note": "Preliminary educational preview: this is an information and decision flow that turns a customer request into a quote-ready package, not a production route; all outputs require technical review before quoting.",
    "whatWouldBeNeeded": "This is an office-and-engineering workflow rather than a factory line, so a full 3D simulation would present it as a guided intake board connected to the route engine: surfacing missing inputs, flagging material-product mismatches, and scoring completeness. It would need no machine models, but would benefit from linking each answered requirement to the relevant station in the 3D factory so the quote and the physical route stay consistent."
  }
];
export const routeVariantsById: Record<string, RouteVariant> = Object.fromEntries(routeVariants.map((v) => [v.id, v]));
