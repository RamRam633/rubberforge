import type { ProcessStep, StationId } from "@/types/simulation";

// The ordered process steps. Educational fields were authored and accuracy
// verified by a rubber process engineer + adversarial reviewer pass.
// Conceptual only: no real formulations, temperatures, times, or settings.
export const processSteps: ProcessStep[] = [
  {
    id: "raw-material-room",
    sequence: 1,
    title: "Raw Material Room",
    actionLabel: "Enter Weighing Station",
    machineId: "raw-material-room",
    inputStateId: "separate-raw",
    outputStateId: "separate-raw",
    purpose:
      "Receive, identify, and stage the dry and liquid ingredient categories so the correct materials are ready for the batch.",
    inputMaterial:
      "Incoming bulk ingredient categories: EPDM polymer bales, carbon-black filler, process oil, protective additives, the cure package, and pigment.",
    outputMaterial:
      "Verified, labeled, and staged ingredient categories, grouped per batch and ready to be weighed.",
    physicalChange:
      "Nothing is transformed here. Materials are only received, conditioned to a stable handling state, and organized. The polymer stays a raw, uncompounded gum, and the cure package is stored apart from heat to keep it inert until it is needed.",
    whyItMatters:
      "Everything downstream inherits whatever arrives here, so correct identification and clean, dry, temperature-controlled storage protect the entire batch. A wrong or contaminated input cannot be recovered later in the line.",
    commonDefects: ["Wrong material grade", "Cross-contamination between categories", "Moisture pickup in fillers or additives"],
    learningInsight: "Quality begins before the first machine: you cannot mix your way out of a bad ingredient.",
    safetyNote:
      "Treat dusty fillers and stacked bales with care: use basic respiratory and hand protection and keep walkways clear of heavy materials.",
    visualDescription: "Ingredient bins line the staging racks. Polymer bales, filler powder, and oil drums wait to be selected.",
  },
  {
    id: "weighing-station",
    sequence: 2,
    title: "Weighing Station",
    actionLabel: "Send Batch to Mixer",
    machineId: "weighing-station",
    inputStateId: "separate-raw",
    outputStateId: "weighed-batch",
    purpose:
      "Portion each ingredient category to its target proportion so every batch follows the same recipe ratio.",
    inputMaterial:
      "Staged ingredient categories drawn from the raw material room: polymer, filler, process oil, protective additives, cure package, and pigment.",
    outputMaterial:
      "A complete, kitted batch of portioned ingredients in the correct relative proportions, with the cure package kept as a separate portion, ready for the mixing room.",
    physicalChange:
      "No chemical or structural change occurs. The materials are only divided into controlled portions. Relative quantities are fixed here, not the state of the material.",
    whyItMatters:
      "The proportion of polymer to filler, oil, and cure package governs hardness, strength, and how the sheet ultimately cures. Accurate portioning is what makes one batch behave like the next.",
    commonDefects: ["Off-ratio batch", "Missed or doubled ingredient", "Scale drift or miscalibration"],
    learningInsight: "Rubber is a recipe: consistent ratios in are the only path to consistent sheets out.",
    safetyNote:
      "Avoid inhaling airborne powders during dispensing and keep scale areas clean to prevent slips from spilled oil or filler.",
    visualDescription: "Each category drops onto the weigh tray. The batch builds toward a complete, balanced kit.",
  },
  {
    id: "internal-mixer",
    sequence: 3,
    title: "Internal Mixer",
    actionLabel: "Run Internal Mixer",
    machineId: "internal-mixer",
    inputStateId: "weighed-batch",
    outputStateId: "rough-mixed",
    purpose:
      "Disperse the filler, oil, pigment, and protective additives into the EPDM polymer under intense shear to form a uniform uncured compound, while deliberately holding the cure package out at this stage.",
    inputMaterial:
      "The kitted batch, minus the cure package: raw EPDM polymer plus carbon-black filler, process oil, protective additives, and pigment.",
    outputMaterial:
      "A hot, homogeneous, still-uncured (soft and formable) black EPDM masterbatch, discharged as a lump or slab.",
    physicalChange:
      "Discrete ingredients are masticated and sheared into one continuous mass. The filler is wetted out and distributed through the polymer and the compound becomes soft and workable. The shear work itself generates heat, which is why the reactive cure package is withheld here: at this temperature it could begin to react prematurely (scorch). No crosslinking takes place.",
    whyItMatters:
      "Dispersion is where strength, color uniformity, and consistent properties are actually built into the material. Filler that is not properly distributed cannot be corrected by any later station.",
    commonDefects: ["Poor filler dispersion (carbon-black agglomerates)", "Scorch from holding too much heat", "Undermixed, lumpy, non-uniform batch"],
    learningInsight:
      "Mixing turns a list of ingredients into a single material: true dispersion, not just blending, is the goal, and the heat of mixing is exactly why curatives wait.",
    safetyNote:
      "This machine combines heavy moving rotors with high internal heat: keep hands clear of the feed throat and respect lockout before any access.",
    visualDescription: "Rotors counter-rotate in the sealed chamber. Powder, oil, and polymer fold into a single darkening mass.",
  },
  {
    id: "two-roll-mill",
    sequence: 4,
    title: "Two-Roll Mill",
    actionLabel: "Run Two-Roll Mill",
    machineId: "two-roll-mill",
    inputStateId: "rough-mixed",
    outputStateId: "smooth-milled",
    purpose:
      "Cool and homogenize the masterbatch into a workable band and gently work the reactive cure package in at a lower, safer temperature than the internal mixer.",
    inputMaterial:
      "The hot, uncured EPDM masterbatch from the internal mixer, plus the separately portioned cure package to be added here.",
    outputMaterial:
      "A uniform, cooled, continuous band or strip of uncured compound with the cure system evenly worked in, ready to feed the calender.",
    physicalChange:
      "The compound is repeatedly sheared, cut, and folded in the nip between two counter-rotating rolls so it bands onto one roll, sheds heat toward a stable working temperature, and accepts the cure package into an even distribution. The material stays uncured and formable. The defining role of this station is open, low-temperature mechanical working and curative incorporation, not gauge forming.",
    whyItMatters:
      "Adding the cure package on the open mill, where heat can escape, distributes it uniformly while avoiding premature curing (scorch). Even homogenization also hands the calender a consistent, fault-free feed strip.",
    commonDefects: ["Uneven cure-package distribution", "Air entrapment in the band", "Poor banding or sticking to the wrong roll"],
    learningInsight:
      "The mill works the rubber in the open and cool: it is where the cure system is safely blended in, distinct from the calender, which only shapes.",
    safetyNote:
      "The in-running nip between counter-rotating rolls is a serious pinch hazard: never reach toward the nip and keep tools and body well clear.",
    visualDescription: "The compound bands around the front roll. Each fold and cut blends the cure package in evenly.",
  },
  {
    id: "calender",
    sequence: 5,
    title: "Calender",
    actionLabel: "Run Calender",
    machineId: "calender",
    inputStateId: "smooth-milled",
    outputStateId: "uncured-sheet",
    purpose:
      "Form the uncured, milled compound into a continuous flat sheet of controlled, even thickness and smooth surface.",
    inputMaterial:
      "Homogenized uncured EPDM compound strip fed from the two-roll mill, with the cure package already worked in.",
    outputMaterial:
      "A continuous, dimensionally controlled, uncured black EPDM sheet of uniform thickness and consistent width.",
    physicalChange:
      "The soft compound is squeezed and drawn through the gap between large precision rolls so it spreads into a defined gauge with a smooth face. Only shape and thickness are set here. The chemistry and the uncured state are unchanged. Unlike the mill, the calender does not work or mix the rubber: it forms it.",
    whyItMatters:
      "This station establishes the sheet's geometry. Thickness uniformity and surface quality are largely decided here, and a gauge or surface fault formed now carries through to the finished roll.",
    commonDefects: ["Thickness or gauge variation across the web", "Surface marks or pinholes", "Trapped air bubbles or blisters"],
    learningInsight:
      "The calender is the shape-maker: it turns formless compound into a precise continuous sheet, but the rubber is still uncured and reworkable.",
    safetyNote:
      "Multiple in-running roll nips and a moving web are present: stay clear of nips, keep guarding in place, and never feed material by hand near the rolls.",
    visualDescription: "Stacked polished rolls draw the compound thin. A gauge head scans the emerging sheet for even thickness.",
  },
  {
    id: "vulcanization",
    sequence: 6,
    title: "Vulcanization",
    actionLabel: "Cure the Sheet",
    machineId: "vulcanization",
    inputStateId: "uncured-sheet",
    outputStateId: "cured-sheet",
    purpose:
      "Apply heat so the cure package crosslinks the EPDM chains, converting the soft uncured sheet into elastic finished rubber.",
    inputMaterial: "The continuous, uncured (soft and formable) black EPDM sheet from the calender.",
    outputMaterial:
      "A cured, elastic, dimensionally stable black EPDM rubber sheet with its final mechanical properties developed.",
    physicalChange:
      "Heat activates the cure package, which forms crosslinks (chemical bridges) tying the previously independent polymer chains into a single connected network. This irreversible chemical reaction transforms the soft, flowable compound into a strong, elastic, heat-stable rubber. This is the central chemical transformation of the entire line.",
    whyItMatters:
      "Vulcanization is what makes rubber behave as rubber: the crosslink network gives the sheet its elasticity, strength, and resistance to heat and permanent set. Without it the sheet would stay soft and would flow or deform under load.",
    commonDefects: ["Undercure (soft, weak, tacky)", "Overcure or reversion (degraded network)", "Uneven cure across width or thickness"],
    learningInsight:
      "This is the irreversible step: crosslinking converts a reworkable compound into a permanent elastic network that can no longer be reshaped by heat.",
    safetyNote:
      "High-temperature surfaces and pressurized steam or platens are involved: maintain distance from hot zones and follow thermal and pressure precautions.",
    visualDescription: "Heat floods the cure chamber. Loose polymer chains stitch together with crosslinks into an elastic network.",
  },
  {
    id: "cooling",
    sequence: 7,
    title: "Cooling",
    actionLabel: "Cool the Sheet",
    machineId: "cooling",
    inputStateId: "cured-sheet",
    outputStateId: "cured-sheet",
    purpose:
      "Bring the freshly cured sheet down to a stable temperature so its dimensions and properties settle before handling.",
    inputMaterial: "The hot, freshly vulcanized, elastic EPDM sheet leaving the cure stage.",
    outputMaterial: "A cooled, dimensionally stable, cured EPDM sheet ready for trimming and winding.",
    physicalChange:
      "Thermal energy is removed so the rubber contracts to its settled dimensions and its properties stabilize. The crosslink chemistry is already fixed: only temperature and final dimensions stabilize here.",
    whyItMatters:
      "Handling or winding a sheet while it is still hot can lock in distortion, stretch, or set marks. Controlled cooling preserves the flatness and thickness achieved upstream.",
    commonDefects: ["Dimensional shrinkage beyond tolerance", "Curl or wrinkles from uneven cooling", "Heat-set marks from early handling"],
    learningInsight: "Cooling is not idle time: it is when the sheet locks in the shape it will keep.",
    safetyNote:
      "The sheet may still be warm and cooling media may be wet: watch for residual heat and keep footing secure around water or spray.",
    visualDescription: "The dark sheet glides along the cooling run, heat shimmer fading as it settles to a stable form.",
  },
  {
    id: "trimming-slitting",
    sequence: 8,
    title: "Trimming & Slitting",
    actionLabel: "Trim & Slit Edges",
    machineId: "trimming-slitting",
    inputStateId: "cured-sheet",
    outputStateId: "cooled-trimmed",
    purpose:
      "Square the edges and cut the sheet to its target width so it meets dimensional specification before winding.",
    inputMaterial: "The cooled, full-width, cured EPDM sheet with rough or uneven edges.",
    outputMaterial: "A clean-edged, cured EPDM sheet trimmed and slit to specified width, ready to wind.",
    physicalChange:
      "Excess and irregular edge material is cut away and the web is divided to width, changing only the sheet's planar dimensions. The rubber's cured properties and thickness are unchanged.",
    whyItMatters:
      "Straight, square edges and the correct width are what make the finished roll usable and on-spec for the customer. Trimming also removes weaker or thinner edge zones formed during forming and cure.",
    commonDefects: ["Out-of-spec width", "Ragged or angled edges", "Edge nicks or tears"],
    learningInsight: "This station decides the sheet's footprint: the chemistry is done, so now the geometry gets finalized.",
    safetyNote:
      "Sharp cutting blades and a moving web are in play: keep hands away from blade lines and never clear jams while the web is running.",
    visualDescription: "Edge knives shave the ragged margins clean and the trimmed sheet begins winding onto the core.",
  },
  {
    id: "inspection",
    sequence: 9,
    title: "Inspection",
    actionLabel: "Inspect the Sheet",
    machineId: "inspection",
    inputStateId: "cooled-trimmed",
    outputStateId: "inspected-final",
    purpose:
      "Verify thickness, hardness, surface quality, and dimensions against specification before the sheet is accepted.",
    inputMaterial: "The trimmed, slit, cured EPDM sheet presented for quality checks.",
    outputMaterial:
      "An inspected sheet classified as conforming or nonconforming, with quality data recorded for traceability.",
    physicalChange:
      "No physical change is made to the material. Properties are measured and judged. Inspection observes the sheet rather than altering it.",
    whyItMatters:
      "This is the gate that keeps off-spec sheet from reaching the customer, and it feeds defect data back to upstream stations. It catches problems that originated anywhere earlier in the line.",
    commonDefects: ["Out-of-tolerance thickness", "Off-target hardness", "Surface or visual defects"],
    learningInsight: "Inspection does not make quality, it confirms it and points back to where a defect was actually born.",
    safetyNote:
      "Handling moving or large sheets and using measurement tools calls for steady handling and awareness of pinch points at the unwind.",
    visualDescription: "Hardness probe, thickness scan, and a vision sweep run across the sheet. Every reading lands in spec.",
  },
  {
    id: "finished-roll",
    sequence: 10,
    title: "Finished Roll",
    actionLabel: "View Completion Summary",
    machineId: "finished-roll",
    inputStateId: "inspected-final",
    outputStateId: "inspected-final",
    purpose:
      "Wind the accepted sheet into a tidy, tension-controlled roll and identify it for storage and shipment.",
    inputMaterial: "The inspected, conforming, cured EPDM sheet ready to be wound.",
    outputMaterial: "A finished, labeled black EPDM rubber roll, wound to length and ready to ship.",
    physicalChange:
      "The flat sheet is wound onto a core under controlled tension into a cylindrical roll. Only its form factor changes. The cured rubber properties remain exactly as set upstream.",
    whyItMatters:
      "Proper winding tension and clear labeling protect the sheet in storage and transit and keep it traceable. A well-wound roll preserves all the quality built into the sheet.",
    commonDefects: ["Telescoping (sideways slippage of layers)", "Uneven winding tension", "Mislabeled or untraceable roll"],
    learningInsight: "The last step adds no rubber properties: it packages and preserves everything the line already achieved.",
    safetyNote:
      "Heavy rotating rolls and core handling are involved: keep hands clear of winding nips and use proper lifting aids for finished rolls.",
    visualDescription: "The finished black EPDM sheet is wound into a clean roll, labeled, and released as product.",
  },
];

export const processStepsById: Record<StationId, ProcessStep> = processSteps.reduce(
  (acc, s) => {
    acc[s.id] = s;
    return acc;
  },
  {} as Record<StationId, ProcessStep>,
);

export const LAST_STEP_INDEX = processSteps.length - 1;
export const WEIGHING_INDEX = processSteps.findIndex((s) => s.id === "weighing-station");
