import type { Equipment } from "@/types/factoryIntel";
import type { StationId } from "@/types/simulation";

export const equipmentLibrary: Equipment[] = [
  {
    "id": "eq-bale-storage",
    "name": "Bale Storage and Staging Area",
    "category": "raw-material-handling",
    "whatItDoes": "Provides controlled storage for incoming rubber bales (natural and synthetic) on racks or pallets, keeping them organized by lot, grade, and date so that material can be staged in first-in-first-out order before mixing. It is typically a climate-aware area rather than a single machine.",
    "whereInFactory": "At the receiving end of the plant, commonly adjacent to the raw-material room and ahead of the weighing station.",
    "inputState": "Sealed or wrapped polymer bales as received from suppliers, often on pallets with lot tags.",
    "outputState": "Lot-identified bales staged and ready to move to weighing and cutting for batch preparation.",
    "relatedStations": [
      "raw-material-room",
      "weighing-station"
    ],
    "relatedProducts": [
      "rubber-sheet",
      "molded-parts",
      "rubber-seals",
      "high-temp-sheet"
    ],
    "variants": [
      "Static pallet racking",
      "Drive-in/drive-through racking",
      "Conditioned (temperature/humidity-aware) bale room",
      "Outdoor covered staging for bulk grades"
    ],
    "purchasingConsiderations": [
      "Racking load rating and bale footprint typically drive layout and cost",
      "Whether conditioned storage is needed often depends on polymer grades and local climate",
      "Forklift or clamp-truck access and aisle width commonly affect throughput",
      "Fire-load and segregation needs may require review with facilities and insurers"
    ],
    "engineeringConsiderations": [
      "FIFO flow and lot traceability are usually the core design intent",
      "Segregation of incompatible grades to limit cross-contamination is commonly considered",
      "Aging and bloom risk on long-stored polymers often informs stock rotation",
      "Material flow distance to the mixer typically influences placement"
    ],
    "qualityRisks": [
      "Mixed or mislabeled lots can lead to contamination and recipe errors",
      "Prolonged or poorly controlled storage may promote bloom on certain polymers",
      "Moisture pickup on hygroscopic ingredients can affect downstream mixing"
    ],
    "maintenanceConsiderations": [
      "Racking inspection for damage and overload is commonly scheduled",
      "Housekeeping to control dust and contamination is typically routine"
    ],
    "safetyNote": "Stacked bales and rack loading carry load-stability and forklift-traffic awareness; layouts commonly separate pedestrian and vehicle paths.",
    "supplierCategory": "material-handling-integrator",
    "vendorExamples": [],
    "sourcingQuestions": [
      "What polymer grades and bale formats must the storage area accommodate?",
      "Is conditioned (temperature or humidity controlled) storage required for your grades?",
      "What lot-traceability and FIFO method should the layout support?",
      "What handling equipment (forklift, clamp truck) and aisle constraints apply? (requires verification before sourcing)"
    ],
    "linkedDefects": [
      "contamination",
      "bloom"
    ]
  },
  {
    "id": "eq-ingredient-bins",
    "name": "Ingredient Storage Bins and Hoppers",
    "category": "raw-material-handling",
    "whatItDoes": "Holds dry compounding ingredients (curatives, accelerators, activators, pigments, processing aids) in labeled bins or hoppers so that small-quantity additives can be staged and dispensed accurately for each batch.",
    "whereInFactory": "In or beside the raw-material room and weighing station, upstream of the internal mixer.",
    "inputState": "Bagged or drummed dry chemicals received from suppliers, often as powders or granules.",
    "outputState": "Sorted, labeled, accessible ingredients ready for weighing into batch kits.",
    "relatedStations": [
      "raw-material-room",
      "weighing-station"
    ],
    "relatedProducts": [
      "rubber-sheet",
      "molded-parts",
      "high-temp-sheet",
      "food-grade-sheet"
    ],
    "variants": [
      "Open labeled bins for hand-scooped additives",
      "Sealed hoppers with slide gates",
      "Mobile ingredient carts",
      "Color-coded bins for hazard or allergen segregation"
    ],
    "purchasingConsiderations": [
      "Material of construction commonly chosen for chemical compatibility and cleanability",
      "Sealed vs open designs often depend on dust and contamination control needs",
      "Labeling and bin-identification systems typically support traceability",
      "Footprint and mobility may matter for compact weighing areas"
    ],
    "engineeringConsiderations": [
      "Segregation of reactive curatives from other ingredients is commonly a design goal",
      "Dust containment to protect adjacent material is often considered",
      "Ergonomics of scooping and dispensing typically affects bin height and access",
      "Clear identification to prevent ingredient mix-ups is usually central"
    ],
    "qualityRisks": [
      "Cross-contamination between bins can cause off-spec batches",
      "Moisture pickup in open bins may degrade hygroscopic powders",
      "Mislabeling can lead to wrong-ingredient errors"
    ],
    "maintenanceConsiderations": [
      "Periodic cleaning between material changes is commonly needed",
      "Inspection of gates and seals on closed hoppers is typically routine"
    ],
    "safetyNote": "Some compounding chemicals are dust or skin/eye irritants, so containment and handling awareness is commonly emphasized near these bins.",
    "supplierCategory": "material-handling-integrator",
    "vendorExamples": [],
    "sourcingQuestions": [
      "Which ingredient classes need segregation or hazard color-coding?",
      "Are sealed hoppers required for dust or moisture control?",
      "What material of construction suits your chemicals and cleaning regime?",
      "What labeling/traceability scheme should the bins support? (requires verification before sourcing)"
    ],
    "linkedDefects": [
      "contamination",
      "scorch"
    ]
  },
  {
    "id": "eq-cb-filler-handling",
    "name": "Carbon Black and Filler Handling System",
    "category": "raw-material-handling",
    "whatItDoes": "Conveys, stores, and meters bulk fillers such as carbon black, silica, and clays from bags or bulk silos to the mixer feed, commonly using pneumatic conveying or screw feeders while containing the very fine, staining dust these materials generate.",
    "whereInFactory": "Between bulk filler storage (silos or bag-dump stations) and the internal mixer feed area.",
    "inputState": "Bulk or bagged powdered fillers, often fine and dust-prone.",
    "outputState": "Metered filler delivered to the mixer feed with dust contained at transfer points.",
    "relatedStations": [
      "raw-material-room",
      "weighing-station",
      "internal-mixer"
    ],
    "relatedProducts": [
      "rubber-sheet",
      "abrasion-liners",
      "molded-parts",
      "high-temp-sheet"
    ],
    "variants": [
      "Bag-dump station with dust hood",
      "Pneumatic (dilute/dense phase) conveying",
      "Screw or vibratory feeders",
      "Bulk silo with loss-in-weight feed"
    ],
    "purchasingConsiderations": [
      "Dust containment and integrated extraction are commonly major selection factors",
      "Conveying method often depends on filler type, abrasiveness, and distance",
      "Wear-resistant contact surfaces may matter for abrasive fillers",
      "Integration with batch weighing and dust collection typically needs coordination"
    ],
    "engineeringConsiderations": [
      "Containment of staining, respirable dust is commonly a primary design concern",
      "Avoiding filler degradation or pellet breakdown during conveying is often considered",
      "Static and combustible-dust awareness typically informs system design",
      "Consistent metering to support dispersion downstream is usually a goal"
    ],
    "qualityRisks": [
      "Inconsistent filler metering can contribute to poor dispersion",
      "Cross-contamination between filler types may affect properties",
      "Moisture pickup in silica or clay can disrupt mixing"
    ],
    "maintenanceConsiderations": [
      "Filter and conveying-line cleaning is commonly scheduled to prevent buildup",
      "Wear inspection on feeders and bends is typical with abrasive fillers"
    ],
    "safetyNote": "Fine fillers create respirable and potentially combustible dust, so extraction, containment, and static/ignition awareness are commonly central; verify combustible-dust handling with qualified specialists.",
    "supplierCategory": "dust-collection-supplier",
    "vendorExamples": [],
    "sourcingQuestions": [
      "Which fillers (carbon black, silica, clays) and in what bulk/bag formats?",
      "Is integrated dust extraction and combustible-dust handling required?",
      "What conveying distance and layout constraints apply?",
      "How should the system integrate with batch weighing and the mixer feed? (requires verification before sourcing)"
    ],
    "linkedDefects": [
      "poor-dispersion",
      "contamination"
    ]
  },
  {
    "id": "eq-oil-tanks",
    "name": "Process Oil and Plasticizer Tank System",
    "category": "raw-material-handling",
    "whatItDoes": "Stores liquid process oils, plasticizers, and other liquid additives in tanks, commonly with heating and pumping so the liquids can be metered into the mixer at a consistent, pumpable condition.",
    "whereInFactory": "In a liquid-storage area, often bunded, with feed lines routed to the internal mixer.",
    "inputState": "Bulk or drummed liquid oils and plasticizers, sometimes viscous when cold.",
    "outputState": "Temperature-conditioned, metered liquid delivered to the mixer charge.",
    "relatedStations": [
      "raw-material-room",
      "weighing-station",
      "internal-mixer"
    ],
    "relatedProducts": [
      "rubber-sheet",
      "sponge-foam-sheet",
      "molded-parts",
      "abrasion-liners"
    ],
    "variants": [
      "Heated bulk tanks with circulation",
      "Drum-heating and pump stations",
      "Day tanks for in-process buffering",
      "Loss-in-weight liquid metering skids"
    ],
    "purchasingConsiderations": [
      "Tank material and seals commonly selected for liquid compatibility",
      "Heating and insulation often needed for viscous oils",
      "Bunding/containment is typically required for spill control",
      "Metering accuracy may drive choice of pump and feed system"
    ],
    "engineeringConsiderations": [
      "Maintaining a consistent, pumpable liquid condition is commonly a design intent",
      "Spill containment and clean transfer are typically core concerns",
      "Avoiding cross-contamination between liquid grades is often considered",
      "Accurate liquid metering to support batch consistency is usually a goal"
    ],
    "qualityRisks": [
      "Inaccurate liquid dosing can shift compound behavior",
      "Contamination between oil grades may affect properties",
      "Degraded or oxidized oil can introduce variability"
    ],
    "maintenanceConsiderations": [
      "Pump, valve, and line inspection for leaks is commonly routine",
      "Filter and strainer checks on feed lines are typical"
    ],
    "safetyNote": "Heated oils and slip/spill hazards are commonly managed with bunding and containment awareness; some plasticizers warrant handling review.",
    "supplierCategory": "material-handling-integrator",
    "vendorExamples": [],
    "sourcingQuestions": [
      "Which liquid additives and viscosities must the system handle?",
      "Is tank heating and insulation required for your oils?",
      "What containment/bunding and spill-control expectations apply?",
      "What liquid-metering accuracy do you need at the mixer feed? (requires verification before sourcing)"
    ],
    "linkedDefects": [
      "contamination",
      "poor-dispersion"
    ]
  },
  {
    "id": "eq-weighing-scale",
    "name": "Precision Weighing Scale",
    "category": "raw-material-handling",
    "whatItDoes": "Provides accurate weighing of individual compounding ingredients, especially small-quantity curatives and accelerators, so each batch kit matches its intended formulation. It is the core instrument of the weighing station.",
    "whereInFactory": "At the weighing station, between ingredient storage and the internal mixer.",
    "inputState": "Loose ingredients scooped or poured from bins for measurement.",
    "outputState": "Weighed-out ingredient portions assembled into a batch kit.",
    "relatedStations": [
      "weighing-station",
      "raw-material-room"
    ],
    "relatedProducts": [
      "rubber-sheet",
      "molded-parts",
      "rubber-seals",
      "high-temp-sheet"
    ],
    "variants": [
      "Bench platform scales for bulk ingredients",
      "High-resolution scales for small additives",
      "Multiple scale ranges for coarse and fine dosing",
      "Scales with data capture/printout for traceability"
    ],
    "purchasingConsiderations": [
      "Capacity and resolution commonly matched to the smallest critical additive",
      "Data capture and traceability output may be valuable for records",
      "Calibration support and traceable references are typically important",
      "Environment (dust, vibration) often affects scale choice"
    ],
    "engineeringConsiderations": [
      "Selecting the right resolution for critical low-dose curatives is commonly central",
      "Calibration and verification routines typically support accuracy claims",
      "Placement away from vibration and drafts is often considered",
      "Traceability of weighing records is usually a design goal"
    ],
    "qualityRisks": [
      "Inaccurate weighing of curatives can cause scorch or under/over-cure",
      "Drifted calibration can systematically bias batches",
      "Misread small doses may shift hardness and other properties"
    ],
    "maintenanceConsiderations": [
      "Regular calibration against traceable references is commonly required",
      "Cleaning to prevent buildup and tare drift is typically routine"
    ],
    "safetyNote": "Primarily an accuracy-critical instrument; awareness focuses on chemical handling at the weighing point rather than machine hazards.",
    "supplierCategory": "lab-testing-supplier",
    "vendorExamples": [],
    "sourcingQuestions": [
      "What is the smallest critical dose, and what resolution does it require?",
      "Do you need data capture/printout for batch traceability?",
      "What calibration and verification support is expected?",
      "What environmental conditions (dust, vibration) will the scale operate in? (use an accredited/qualified lab or calibration service for actual verification)"
    ],
    "linkedDefects": [
      "scorch",
      "under-cure",
      "hardness-drift"
    ]
  },
  {
    "id": "eq-batch-weighing-system",
    "name": "Automated Batch Weighing System",
    "category": "raw-material-handling",
    "whatItDoes": "Coordinates the assembly of complete compound batches by guiding or automating the dosing of polymers, fillers, oils, and chemicals against a recorded recipe, commonly with software that logs each weighing for traceability.",
    "whereInFactory": "Spanning the weighing station and mixer feed area, integrating bins, oil tanks, and filler feeds.",
    "inputState": "Individual ingredient streams from bins, tanks, and filler handling.",
    "outputState": "A complete, recipe-matched, traceable batch kit delivered to the mixer.",
    "relatedStations": [
      "weighing-station",
      "raw-material-room",
      "internal-mixer"
    ],
    "relatedProducts": [
      "rubber-sheet",
      "molded-parts",
      "high-temp-sheet",
      "abrasion-liners"
    ],
    "variants": [
      "Operator-guided manual dispensing with logging",
      "Semi-automated with auto-dosing of major streams",
      "Fully automated multi-component weighing",
      "Integrated with plant batch-record software"
    ],
    "purchasingConsiderations": [
      "Degree of automation commonly scaled to volume and recipe complexity",
      "Software traceability and recipe management are often key features",
      "Integration with existing bins, tanks, and feeders typically needs scoping",
      "Calibration and validation of multiple scales may add to cost"
    ],
    "engineeringConsiderations": [
      "End-to-end recipe traceability is commonly the central design intent",
      "Error-proofing to prevent wrong-ingredient or wrong-quantity dosing is often considered",
      "Synchronization of multiple feed streams is typically a design factor",
      "Auditability of batch records is usually a goal"
    ],
    "qualityRisks": [
      "A software or sensor error can propagate to many batches",
      "Drift in any contributing scale can bias formulations",
      "Recipe-version mismatches may cause systematic errors"
    ],
    "maintenanceConsiderations": [
      "Coordinated calibration across all scales is commonly scheduled",
      "Software updates and backup of recipe data are typically managed"
    ],
    "safetyNote": "Integration with automated feeders introduces machine-motion awareness at transfer points; chemical handling awareness still applies.",
    "supplierCategory": "controls-automation-integrator",
    "vendorExamples": [],
    "sourcingQuestions": [
      "What level of weighing automation fits your batch volume and recipe count?",
      "What recipe-management and batch-traceability features are required?",
      "Which existing feed devices must be integrated?",
      "What validation/calibration approach is expected for the combined system? (requires verification before sourcing)"
    ],
    "linkedDefects": [
      "scorch",
      "under-cure",
      "poor-dispersion"
    ]
  },
  {
    "id": "eq-dust-collection",
    "name": "Dust Collection and Extraction System",
    "category": "raw-material-handling",
    "whatItDoes": "Captures airborne dust generated during filler handling, weighing, and mixing through hoods and ductwork, then filters it before air is recirculated or exhausted, keeping fine powders contained and the workspace cleaner.",
    "whereInFactory": "Distributed across raw-material handling, weighing, and mixing areas, with a central collector and ductwork.",
    "inputState": "Dust-laden air from capture points at bins, filler feeds, and the mixer.",
    "outputState": "Filtered air plus collected dust gathered for disposal or reclaim.",
    "relatedStations": [
      "raw-material-room",
      "weighing-station",
      "internal-mixer"
    ],
    "relatedProducts": [
      "rubber-sheet",
      "abrasion-liners",
      "molded-parts",
      "high-temp-sheet"
    ],
    "variants": [
      "Baghouse (fabric filter) collectors",
      "Cartridge collectors",
      "Cyclone pre-separators",
      "Wet scrubbers for certain dusts"
    ],
    "purchasingConsiderations": [
      "Filter type commonly matched to dust characteristics and loading",
      "Combustible-dust mitigation features may be required and need expert review",
      "Airflow capacity typically sized to number and type of capture points",
      "Energy use and filter-replacement cost often factor into selection"
    ],
    "engineeringConsiderations": [
      "Effective capture velocity at each source is commonly a core design factor",
      "Combustible-dust deflagration awareness typically informs collector choice",
      "Duct routing to minimize buildup is often considered",
      "Filtered-air return vs exhaust balance is usually evaluated"
    ],
    "qualityRisks": [
      "Poor capture can let dust settle and cross-contaminate compounds",
      "Filter leakage may reintroduce dust to the workspace",
      "Inadequate extraction at the mixer can affect housekeeping and dispersion area cleanliness"
    ],
    "maintenanceConsiderations": [
      "Filter inspection and replacement is commonly scheduled",
      "Duct and hopper cleaning to prevent buildup is typically routine",
      "Differential-pressure monitoring often signals filter condition"
    ],
    "safetyNote": "Carbon black and many fillers form combustible dust, so deflagration protection and ignition-source awareness are commonly essential; verify combustible-dust design with qualified specialists.",
    "supplierCategory": "dust-collection-supplier",
    "vendorExamples": [],
    "sourcingQuestions": [
      "What dusts and loading will the system handle, and are any combustible?",
      "How many capture points and what total airflow is needed?",
      "Is filtered air to be recirculated or exhausted?",
      "What combustible-dust protection is required for your materials? (requires verification before sourcing with qualified specialists)"
    ],
    "linkedDefects": [
      "contamination",
      "poor-dispersion"
    ]
  },
  {
    "id": "eq-internal-mixer",
    "name": "Internal (Banbury-Type) Mixer",
    "category": "mixing",
    "whatItDoes": "Performs the primary intensive mixing of rubber compound, kneading polymer, fillers, oils, and chemicals between counter-rotating rotors in an enclosed chamber so that ingredients are dispersed and distributed into a homogeneous masterbatch. It is the heart of compounding.",
    "whereInFactory": "In the mixing area, fed from weighing and filler handling, discharging to the batch-off mill.",
    "inputState": "A weighed batch kit of polymer, fillers, oils, and chemicals.",
    "outputState": "A hot, mixed compound batch dropped to the downstream mill for sheeting and cooling.",
    "relatedStations": [
      "internal-mixer",
      "weighing-station",
      "two-roll-mill"
    ],
    "relatedProducts": [
      "rubber-sheet",
      "molded-parts",
      "high-temp-sheet",
      "abrasion-liners"
    ],
    "variants": [
      "Tangential-rotor designs",
      "Intermeshing-rotor designs",
      "Different chamber sizes for batch scale",
      "Variable-speed and temperature-controlled units"
    ],
    "purchasingConsiderations": [
      "Rotor geometry and chamber size commonly matched to compound types and batch scale",
      "Cooling capacity is typically critical to control heat history",
      "Integration with batch weighing and the batch-off mill needs coordination",
      "Wear-part availability and rebuild support often affect lifetime cost"
    ],
    "engineeringConsiderations": [
      "Achieving good filler dispersion and distribution is commonly the central intent",
      "Managing heat buildup to avoid premature reaction is typically a key concern",
      "Rotor and chamber wear affecting mixing quality is often monitored",
      "Consistency batch-to-batch is usually a primary goal"
    ],
    "qualityRisks": [
      "Insufficient mixing can cause poor dispersion of fillers",
      "Excess heat history may trigger scorch in the compound",
      "Contamination from prior batches or worn parts can carry over"
    ],
    "maintenanceConsiderations": [
      "Rotor, chamber, and seal wear inspection is commonly scheduled",
      "Cooling-system integrity is typically monitored",
      "Ram and discharge-door mechanism upkeep is routine"
    ],
    "safetyNote": "An intensive machine with powerful rotors, a moving ram, and hot discharge; interlocks and energy-isolation awareness are commonly emphasized.",
    "supplierCategory": "rubber-mixing-oem",
    "vendorExamples": [
      "Farrel",
      "HF Mixing Group",
      "Kobelco"
    ],
    "sourcingQuestions": [
      "What compound families and batch scale must the mixer handle?",
      "Is tangential or intermeshing rotor geometry better for your compounds?",
      "What cooling capacity is needed to control heat history?",
      "How will the mixer integrate with weighing and the batch-off mill? (requires verification before sourcing)"
    ],
    "linkedDefects": [
      "poor-dispersion",
      "scorch",
      "contamination"
    ]
  },
  {
    "id": "eq-batch-off-mill",
    "name": "Batch-Off Mill (Dump Mill)",
    "category": "mixing",
    "whatItDoes": "Receives the hot batch dropped from the internal mixer, blends and homogenizes it further between two rolls, and forms it into a continuous sheet or strip that can be cooled and stored as compound stock for downstream processing.",
    "whereInFactory": "Directly beneath or beside the internal mixer, feeding the cooling conveyor or batch-off line.",
    "inputState": "A hot, freshly dropped mixed batch from the internal mixer.",
    "outputState": "A continuous warm compound sheet or strip ready for cooling.",
    "relatedStations": [
      "internal-mixer",
      "two-roll-mill",
      "cooling"
    ],
    "relatedProducts": [
      "rubber-sheet",
      "molded-parts",
      "high-temp-sheet",
      "abrasion-liners"
    ],
    "variants": [
      "Single dump mill",
      "Dump mill plus pickup/conveyor system",
      "Mills with stock blenders",
      "Different roll sizes for batch scale"
    ],
    "purchasingConsiderations": [
      "Roll size and capacity commonly matched to mixer batch size",
      "Integration into a batch-off cooling line is typically planned together",
      "Cooling and drive capacity often factor into selection",
      "Safety systems are commonly a key part of the package"
    ],
    "engineeringConsiderations": [
      "Further homogenizing the batch after the mixer is commonly the design intent",
      "Forming a uniform sheet for cooling is typically a goal",
      "Managing residual heat before cooling is often considered",
      "Smooth handoff from mixer to cooling line is usually emphasized"
    ],
    "qualityRisks": [
      "Inadequate blending can leave dispersion or color variation",
      "Excess working may add heat and risk scorch",
      "Inconsistent sheet form can disrupt cooling and storage"
    ],
    "maintenanceConsiderations": [
      "Roll surface and bearing inspection is commonly scheduled",
      "Drive and nip-adjustment mechanism upkeep is typical",
      "Safety-system function checks are routine"
    ],
    "safetyNote": "An open-roll nip is a classic high-hazard point; trip cables, body bars, and reversing safety systems are commonly central to safe use.",
    "supplierCategory": "rubber-mixing-oem",
    "vendorExamples": [],
    "sourcingQuestions": [
      "What mixer batch size must the mill keep up with?",
      "Will it feed a batch-off cooling line, and how should they integrate?",
      "What roll size and drive capacity suit your throughput?",
      "What nip safety systems are included in the package? (requires verification before sourcing)"
    ],
    "linkedDefects": [
      "poor-dispersion",
      "scorch"
    ]
  },
  {
    "id": "eq-cooling-conveyor",
    "name": "Batch-Off Cooling Conveyor (Wig-Wag Line)",
    "category": "mixing",
    "whatItDoes": "Cools the warm compound sheet leaving the batch-off mill, commonly by passing it through a dip tank or air-cooling festoon and then stacking it in folds (wig-wag) onto pallets, while an anti-tack dip helps prevent the layers from sticking together.",
    "whereInFactory": "Downstream of the batch-off mill, ending at compound-stock staging.",
    "inputState": "A continuous warm compound sheet from the batch-off mill.",
    "outputState": "Cooled, anti-tack-coated, neatly stacked compound slabs ready for storage.",
    "relatedStations": [
      "cooling",
      "two-roll-mill",
      "internal-mixer"
    ],
    "relatedProducts": [
      "rubber-sheet",
      "molded-parts",
      "high-temp-sheet",
      "abrasion-liners"
    ],
    "variants": [
      "Dip-tank (wet) anti-tack lines",
      "Air-cooling festoon lines",
      "Combination dip-plus-air lines",
      "Wig-wag stackers with pallet handling"
    ],
    "purchasingConsiderations": [
      "Cooling method commonly chosen by compound tack and throughput",
      "Anti-tack system and its drying capacity often factor in",
      "Line length and footprint typically scale with required cooling",
      "Stacker handling and pallet integration may be part of scope"
    ],
    "engineeringConsiderations": [
      "Cooling the compound below its scorch-risk range is commonly the intent",
      "Preventing slabs from sticking during storage is typically a goal",
      "Even cooling to avoid warpage is often considered",
      "Gentle handling to preserve sheet integrity is usually emphasized"
    ],
    "qualityRisks": [
      "Incomplete cooling can allow continued reaction and scorch in storage",
      "Insufficient anti-tack can cause slabs to bond together",
      "Contamination from dip-tank fouling may transfer to compound"
    ],
    "maintenanceConsiderations": [
      "Dip-tank cleaning and anti-tack concentration upkeep is commonly routine",
      "Belt tracking and drive maintenance is typical",
      "Fan and cooling-medium checks on air lines are scheduled"
    ],
    "safetyNote": "Moving belts, wet floors near dip tanks, and stacking motion carry pinch and slip awareness; guarding is commonly emphasized.",
    "supplierCategory": "rubber-mixing-oem",
    "vendorExamples": [],
    "sourcingQuestions": [
      "What compound throughput and starting temperature must the line cool?",
      "Is a wet dip or air-cooling approach preferred for your tack profile?",
      "What anti-tack system and drying are needed?",
      "Should the line include a wig-wag stacker and pallet handling? (requires verification before sourcing)"
    ],
    "linkedDefects": [
      "scorch",
      "contamination"
    ]
  },
  {
    "id": "eq-two-roll-mill",
    "name": "Two-Roll Mill",
    "category": "milling",
    "whatItDoes": "Works rubber compound between two counter-rotating rolls running at slightly different speeds, allowing operators to warm up stock, blend in additives, refine dispersion, and sheet out compound for downstream forming. It is a versatile open-mill workhorse.",
    "whereInFactory": "In the milling/mixing area, often used for warm-up and feeding calenders or extruders.",
    "inputState": "Cooled compound slabs or partially mixed stock needing further working.",
    "outputState": "Warmed, blended, sheeted compound ready for calendering, forming, or molding prep.",
    "relatedStations": [
      "two-roll-mill",
      "internal-mixer",
      "calender"
    ],
    "relatedProducts": [
      "rubber-sheet",
      "rubber-strips",
      "cut-gaskets",
      "molded-parts"
    ],
    "variants": [
      "Lab/small mills for development",
      "Production mills with stock blenders",
      "Mills with temperature-controlled rolls",
      "Mills paired with feed conveyors"
    ],
    "purchasingConsiderations": [
      "Roll size and friction ratio commonly matched to the work intended",
      "Roll temperature control may be important for sensitive compounds",
      "Safety systems are typically a central part of selection",
      "Drive capacity often scales with compound stiffness"
    ],
    "engineeringConsiderations": [
      "Refining dispersion and blending in additives is commonly the intent",
      "Managing heat input to avoid premature reaction is typically a concern",
      "Roll-surface condition affecting banding and sheeting is often monitored",
      "Operator technique interacts strongly with consistency"
    ],
    "qualityRisks": [
      "Uneven working can leave poor dispersion or banding issues",
      "Excess milling heat may cause scorch",
      "Contamination from shared rolls between compounds can occur"
    ],
    "maintenanceConsiderations": [
      "Roll-surface, bearing, and gear inspection is commonly scheduled",
      "Cooling/heating circuit checks are typical",
      "Safety-device function testing is routine"
    ],
    "safetyNote": "The open nip is one of the most hazardous points in a rubber plant; trip cables, body bars, and rapid roll-reverse braking are commonly essential awareness items.",
    "supplierCategory": "rubber-mixing-oem",
    "vendorExamples": [],
    "sourcingQuestions": [
      "What roll size and friction ratio suit your warm-up and blending tasks?",
      "Is roll temperature control needed for your compounds?",
      "What nip-safety systems (trip cable, body bar, fast reverse) are included?",
      "What downstream equipment will the mill feed? (requires verification before sourcing)"
    ],
    "linkedDefects": [
      "poor-dispersion",
      "scorch",
      "contamination"
    ]
  },
  {
    "id": "eq-mill-safety-system",
    "name": "Open-Mill Safety System Package",
    "category": "milling",
    "whatItDoes": "Bundles the protective devices around an open two-roll mill, commonly including a body-actuated trip bar, overhead and front trip cables, and a fast roll-reversing brake, so that contact with the nip triggers an immediate stop or reverse. It is a support system rather than a process machine.",
    "whereInFactory": "Mounted on and around two-roll mills and batch-off mills wherever an open nip exists.",
    "inputState": "An operating open-roll mill needing nip protection.",
    "outputState": "A mill equipped with rapid-stop/reverse protection at the nip.",
    "relatedStations": [],
    "relatedProducts": [
      "rubber-sheet"
    ],
    "variants": [
      "Body-bar (lever) trip systems",
      "Cable trip systems",
      "Combined bar-plus-cable systems",
      "Systems with reverse-rotation braking"
    ],
    "purchasingConsiderations": [
      "Stopping/reversing performance is commonly the central concern",
      "Compatibility with the specific mill and drive is typically required",
      "Integration with the mill control and braking is often part of scope",
      "Periodic verification and documentation support may matter"
    ],
    "engineeringConsiderations": [
      "Minimizing stopping distance after a trip is commonly the design intent",
      "Reliable actuation from any operator position is typically a goal",
      "Fail-safe behavior on power or sensor loss is often considered",
      "Coordination with the mill drive and brake is usually essential"
    ],
    "qualityRisks": [
      "This is a safety system; its primary failure mode is reduced protection rather than product defects"
    ],
    "maintenanceConsiderations": [
      "Regular function and stopping-performance verification is commonly essential",
      "Cable tension and bar linkage checks are typical",
      "Brake-wear inspection is scheduled"
    ],
    "safetyNote": "This system exists specifically to mitigate the severe nip hazard; treating its periodic verification as essential is commonly emphasized, and actual safety conformity should be reviewed by qualified personnel.",
    "supplierCategory": "rubber-mixing-oem",
    "vendorExamples": [],
    "sourcingQuestions": [
      "Which mills (size, drive, brake) must the safety package fit?",
      "What stopping/reversing performance do you require?",
      "How will the package integrate with the existing mill controls?",
      "What periodic verification and documentation are supported? (actual safety conformity requires verification by qualified personnel)"
    ],
    "linkedDefects": []
  },
  {
    "id": "eq-calender",
    "name": "Calender (Roll Stack)",
    "category": "sheeting-forming",
    "whatItDoes": "Passes rubber compound through a stack of large precision rolls to form continuous sheet of controlled thickness and width, and can laminate compound onto fabric or skim it onto reinforcement. It is the primary machine for producing rubber sheeting.",
    "whereInFactory": "In the sheeting/forming area, fed by warm-up mills and feeding cooling drums and windup.",
    "inputState": "Warmed, plasticated compound (and optionally fabric for reinforcement).",
    "outputState": "Continuous calendered rubber sheet of controlled gauge, possibly fabric-backed.",
    "relatedStations": [
      "calender",
      "two-roll-mill",
      "cooling"
    ],
    "relatedProducts": [
      "rubber-sheet",
      "fabric-reinforced-sheet",
      "food-grade-sheet",
      "high-temp-sheet"
    ],
    "variants": [
      "Three-roll stacks",
      "Four-roll stacks",
      "Inverted-L and Z configurations",
      "Roll-bending/crossing equipped stacks for gauge control"
    ],
    "purchasingConsiderations": [
      "Number and arrangement of rolls commonly chosen by product and gauge needs",
      "Roll precision and deflection-compensation often determine thickness uniformity",
      "Width and speed capability typically scale with product range",
      "Integration with feed mills, gauging, and windup needs coordination"
    ],
    "engineeringConsiderations": [
      "Achieving uniform cross-web thickness is commonly the central intent",
      "Compensating for roll deflection across the width is typically a concern",
      "Consistent feed and bank stability affect surface quality",
      "Air entrapment avoidance during forming is often considered"
    ],
    "qualityRisks": [
      "Roll deflection or feed variation can cause thickness variation",
      "Trapped air may form blisters in the sheet",
      "Poor fabric handling can cause weak adhesion in reinforced sheet"
    ],
    "maintenanceConsiderations": [
      "Roll-surface, bearing, and drive inspection is commonly scheduled",
      "Roll temperature and gap-control system upkeep is typical",
      "Alignment and roll-crossing mechanism checks are routine"
    ],
    "safetyNote": "Multiple in-running nips at high force make a calender a major hazard; nip guarding, trip devices, and isolation awareness are commonly central.",
    "supplierCategory": "calender-line-mfr",
    "vendorExamples": [],
    "sourcingQuestions": [
      "What sheet products, widths, and gauge range must the calender produce?",
      "Is fabric lamination/skimming required?",
      "What thickness-uniformity expectations drive roll precision and deflection control?",
      "How should the calender integrate with feed, gauging, cooling, and windup? (requires verification before sourcing)"
    ],
    "linkedDefects": [
      "trapped-air",
      "poor-adhesion",
      "contamination"
    ]
  },
  {
    "id": "eq-inline-thickness-gauge-calender",
    "name": "In-Line Thickness Gauge (Calender Line)",
    "category": "sheeting-forming",
    "whatItDoes": "Continuously measures the thickness of sheet as it leaves the calender, commonly using non-contact sensing, and feeds the reading back so the line can hold a consistent gauge across the running web. It is a quality-feedback instrument on the forming line.",
    "whereInFactory": "Mounted on the calender line just after the roll stack, ahead of cooling.",
    "inputState": "Continuously moving calendered sheet of nominal target gauge.",
    "outputState": "A running thickness measurement (and trend) used to keep gauge on target.",
    "relatedStations": [
      "calender",
      "cooling",
      "inspection"
    ],
    "relatedProducts": [
      "rubber-sheet",
      "fabric-reinforced-sheet",
      "high-temp-sheet",
      "food-grade-sheet"
    ],
    "variants": [
      "Single-point non-contact gauges",
      "Traversing/scanning gauges for cross-web profile",
      "Contact roller gauges",
      "Gauges integrated with line control"
    ],
    "purchasingConsiderations": [
      "Contact vs non-contact sensing commonly chosen by product and surface",
      "Single-point vs scanning depends on cross-web control needs",
      "Integration with the calender control loop may be desired",
      "Calibration support and traceability are typically valued"
    ],
    "engineeringConsiderations": [
      "Reliable measurement of moving, sometimes tacky web is commonly a concern",
      "Resolution adequate to detect meaningful gauge drift is typically required",
      "Placement to read a stable web region is often considered",
      "Data logging for traceability is usually a goal"
    ],
    "qualityRisks": [
      "Undetected gauge drift can yield off-spec thickness",
      "Sensor drift or fouling can give misleading readings",
      "Single-point gauges may miss cross-web variation"
    ],
    "maintenanceConsiderations": [
      "Calibration against traceable standards is commonly scheduled",
      "Sensor-window cleaning is typical on tacky lines",
      "Verification of feedback linkage is routine"
    ],
    "safetyNote": "Mounted near moving web and rolls, so installation and service awareness around line motion is commonly noted; the gauge itself is low-hazard.",
    "supplierCategory": "controls-automation-integrator",
    "vendorExamples": [],
    "sourcingQuestions": [
      "What gauge range and resolution must the gauge cover?",
      "Do you need single-point or cross-web scanning?",
      "Should it feed back into the calender control loop?",
      "What calibration and data-logging support is expected? (use an accredited/qualified lab for actual calibration verification)"
    ],
    "linkedDefects": [
      "hardness-drift",
      "trapped-air"
    ]
  },
  {
    "id": "eq-cooling-drums",
    "name": "Cooling Drums (Chill Rolls)",
    "category": "sheeting-forming",
    "whatItDoes": "Draws freshly formed sheet over a series of internally cooled rolls to bring the warm calendered web down to a stable handling temperature before windup, helping set the sheet and reduce tack. It is part of the sheeting line train.",
    "whereInFactory": "On the calender line between gauging and the winder.",
    "inputState": "Warm calendered sheet leaving the roll stack and gauge.",
    "outputState": "Cooled, dimensionally settled sheet ready for windup or further handling.",
    "relatedStations": [
      "cooling",
      "calender",
      "finished-roll"
    ],
    "relatedProducts": [
      "rubber-sheet",
      "fabric-reinforced-sheet",
      "food-grade-sheet",
      "high-temp-sheet"
    ],
    "variants": [
      "Single-drum chill rolls",
      "Multi-drum cooling trains",
      "Water-cooled vs refrigerated rolls",
      "Drums with web-tension control"
    ],
    "purchasingConsiderations": [
      "Number and size of drums commonly scaled to line speed and gauge",
      "Cooling medium and capacity often factor into selection",
      "Web-handling and tension control may be integrated",
      "Surface finish of drums can affect sheet appearance"
    ],
    "engineeringConsiderations": [
      "Bringing the web to a stable, low-tack temperature is commonly the intent",
      "Even cooling to avoid curl or distortion is typically a goal",
      "Maintaining web tension without marking the surface is often considered",
      "Condensation management on cold rolls is sometimes a factor"
    ],
    "qualityRisks": [
      "Insufficient cooling can leave tacky sheet that blocks on the roll",
      "Uneven cooling may cause curl or distortion",
      "Surface marking from rolls can affect appearance"
    ],
    "maintenanceConsiderations": [
      "Cooling-circuit and rotary-union upkeep is commonly scheduled",
      "Drum-surface inspection for marking is typical",
      "Bearing and drive maintenance is routine"
    ],
    "safetyNote": "Rotating cooled rolls and the web path carry nip and entanglement awareness; guarding is commonly emphasized.",
    "supplierCategory": "calender-line-mfr",
    "vendorExamples": [],
    "sourcingQuestions": [
      "What line speed and sheet gauge must the cooling train handle?",
      "What cooling medium and capacity are available or required?",
      "Is web-tension control needed to avoid distortion?",
      "What surface finish is needed to avoid marking your products? (requires verification before sourcing)"
    ],
    "linkedDefects": [
      "cracking",
      "contamination"
    ]
  },
  {
    "id": "eq-fabric-feed",
    "name": "Fabric Feed and Let-Off System",
    "category": "sheeting-forming",
    "whatItDoes": "Unwinds reinforcing fabric or fabric plies under controlled tension and aligns them so the calender can skim or laminate rubber onto the textile, producing fabric-reinforced sheet with good ply adhesion. It supports the forming line.",
    "whereInFactory": "Ahead of the calender on the sheeting line, feeding fabric into the roll stack.",
    "inputState": "Rolls of reinforcing fabric or textile plies on let-off stands.",
    "outputState": "Tensioned, aligned fabric delivered into the calender nip for coating or lamination.",
    "relatedStations": [
      "calender",
      "two-roll-mill"
    ],
    "relatedProducts": [
      "fabric-reinforced-sheet",
      "rubber-sheet",
      "bellows-boots",
      "rubber-sleeves"
    ],
    "variants": [
      "Single let-off stands",
      "Multi-ply creels",
      "Systems with tension control and edge guiding",
      "Accumulators for roll changes without stopping"
    ],
    "purchasingConsiderations": [
      "Tension control and edge guiding commonly central to ply quality",
      "Number of plies and fabric types determine creel design",
      "Roll-change strategy (accumulator vs stop) may affect uptime",
      "Integration with the calender feed geometry needs coordination"
    ],
    "engineeringConsiderations": [
      "Consistent fabric tension and alignment is commonly the intent for good adhesion",
      "Avoiding wrinkles or skew that weaken the laminate is typically a goal",
      "Maintaining fabric condition (dryness, cleanliness) is often considered",
      "Smooth roll changes to limit splices is sometimes a factor"
    ],
    "qualityRisks": [
      "Poor tension or alignment can cause weak or uneven ply adhesion",
      "Contaminated or damp fabric may impair bonding",
      "Wrinkles can create weak spots in reinforced sheet"
    ],
    "maintenanceConsiderations": [
      "Tension-control and edge-guide calibration is commonly scheduled",
      "Roller and brake inspection is typical",
      "Splice-detection and guiding sensor checks are routine"
    ],
    "safetyNote": "Unwinding rolls, web tension, and the feed nip carry entanglement awareness; guarding and controlled roll-handling are commonly emphasized.",
    "supplierCategory": "calender-line-mfr",
    "vendorExamples": [],
    "sourcingQuestions": [
      "What fabric types, widths, and ply counts must be fed?",
      "What tension-control and edge-guiding precision is needed for adhesion?",
      "Is non-stop roll changing (accumulator) required?",
      "How will the system integrate with the calender feed geometry? (requires verification before sourcing)"
    ],
    "linkedDefects": [
      "poor-adhesion",
      "contamination"
    ]
  },
  {
    "id": "eq-autoclave",
    "name": "Curing Autoclave",
    "category": "curing",
    "whatItDoes": "Vulcanizes rubber parts and sheet by holding them under pressurized heat (commonly steam or hot air with pressure) in a sealed pressure vessel, so the compound crosslinks into its final elastic, durable state. It is a primary batch curing method.",
    "whereInFactory": "In the vulcanization area, loaded from curing racks and trolleys.",
    "inputState": "Uncured (green) rubber parts, lined items, or wrapped sheet loaded on racks or mandrels.",
    "outputState": "Fully vulcanized parts and sheet with developed elastic properties.",
    "relatedStations": [
      "vulcanization",
      "cooling",
      "inspection"
    ],
    "relatedProducts": [
      "tank-pipe-lining",
      "abrasion-liners",
      "rubber-sleeves",
      "high-temp-sheet"
    ],
    "variants": [
      "Steam autoclaves",
      "Hot-air/pressure autoclaves",
      "Combination steam/air units",
      "Various vessel diameters and lengths"
    ],
    "purchasingConsiderations": [
      "Vessel size commonly matched to part and rack dimensions",
      "Heating medium and uniformity often determine cure consistency",
      "Pressure-vessel certification and code compliance must be verified with qualified authorities",
      "Loading method (rail, trolley) typically affects throughput"
    ],
    "engineeringConsiderations": [
      "Uniform heat distribution for even cure is commonly the central intent",
      "Avoiding under-cured cores in thick sections is typically a concern",
      "Pressure to suppress voids and porosity is often considered",
      "Repeatable cure history across loads is usually a goal"
    ],
    "qualityRisks": [
      "Cold spots can leave under-cured regions",
      "Excess exposure may over-cure and embrittle parts",
      "Inadequate pressure can leave trapped air or porosity"
    ],
    "maintenanceConsiderations": [
      "Door seal, locking, and safety-interlock upkeep is commonly essential",
      "Steam/air system and trap maintenance is typical",
      "Temperature-mapping verification is often scheduled"
    ],
    "safetyNote": "A pressure vessel with stored energy and hot surfaces; door-interlock integrity and pressure-relief awareness are commonly critical, and code compliance requires verification by qualified authorities.",
    "supplierCategory": "autoclave-curing-supplier",
    "vendorExamples": [],
    "sourcingQuestions": [
      "What part and rack sizes define the required vessel dimensions?",
      "What heating medium and temperature uniformity do your products need?",
      "What pressure-vessel code/certification applies in your jurisdiction? (requires verification with qualified authorities)",
      "What loading and throughput targets must be supported? (requires verification before sourcing)"
    ],
    "linkedDefects": [
      "under-cure",
      "over-cure",
      "trapped-air"
    ]
  },
  {
    "id": "eq-compression-press",
    "name": "Compression Curing Press",
    "category": "curing",
    "whatItDoes": "Cures rubber by clamping a charged mold between heated platens under hydraulic force, so the compound flows to fill the cavity and vulcanizes into a finished molded shape. It combines forming and curing for molded parts and sheet.",
    "whereInFactory": "In the molding/vulcanization area, fed by prepared compound blanks.",
    "inputState": "Pre-weighed green compound blanks or preforms placed in the mold.",
    "outputState": "A vulcanized molded part or sheet in its final shape, with flash to remove.",
    "relatedStations": [
      "vulcanization",
      "trimming-slitting",
      "inspection"
    ],
    "relatedProducts": [
      "molded-parts",
      "rubber-pads",
      "rubber-seals",
      "rubber-bushings"
    ],
    "variants": [
      "Single-station presses",
      "Multi-daylight (multi-platen) presses",
      "Vacuum-assisted presses for void control",
      "Frame designs sized to platen area"
    ],
    "purchasingConsiderations": [
      "Platen size and clamp force commonly matched to part area and count",
      "Platen heating uniformity often drives cure consistency",
      "Vacuum assist may matter for void-sensitive parts",
      "Daylight count typically affects throughput per cycle"
    ],
    "engineeringConsiderations": [
      "Uniform platen temperature for even cure is commonly the central intent",
      "Adequate clamp to prevent flash and incomplete fill is typically a concern",
      "Air evacuation to avoid trapped voids is often considered",
      "Repeatable closing and cure history is usually a goal"
    ],
    "qualityRisks": [
      "Uneven platen heat can cause local under- or over-cure",
      "Insufficient clamp or fill can leave incomplete parts",
      "Trapped air can create voids or surface defects"
    ],
    "maintenanceConsiderations": [
      "Platen-heating uniformity verification is commonly scheduled",
      "Hydraulic system and seal upkeep is typical",
      "Safety-interlock and light-curtain checks are routine"
    ],
    "safetyNote": "High clamp force and hot platens create crush and burn hazards; two-hand controls, light curtains, and isolation awareness are commonly emphasized.",
    "supplierCategory": "hydraulic-press-mfr",
    "vendorExamples": [],
    "sourcingQuestions": [
      "What part areas and clamp force does your molding require?",
      "How many daylights/platens fit your throughput needs?",
      "Is vacuum assist needed for void-sensitive parts?",
      "What platen-heating uniformity do your products demand? (requires verification before sourcing)"
    ],
    "linkedDefects": [
      "under-cure",
      "over-cure",
      "trapped-air"
    ]
  },
  {
    "id": "eq-continuous-curing-line",
    "name": "Continuous Curing Line",
    "category": "curing",
    "whatItDoes": "Vulcanizes continuous profiles or sheet as they move through a heated zone (such as a hot-air tunnel, salt bath, microwave, or rotary drum cure unit), enabling steady production of extruded or calendered product without batch loading. It is the continuous counterpart to autoclave curing.",
    "whereInFactory": "Inline after extrusion or calendering, ahead of cutting and windup.",
    "inputState": "Continuous green profile, strip, or sheet from forming.",
    "outputState": "Continuously vulcanized profile or sheet ready for cutting and finishing.",
    "relatedStations": [
      "vulcanization",
      "calender",
      "cooling"
    ],
    "relatedProducts": [
      "rubber-strips",
      "rubber-sheet",
      "sponge-foam-sheet",
      "rubber-sleeves"
    ],
    "variants": [
      "Hot-air tunnel (UHF/HAV) lines",
      "Salt-bath (LCM) lines",
      "Microwave preheat plus hot-air lines",
      "Rotary-drum (Rotocure) sheet lines"
    ],
    "purchasingConsiderations": [
      "Cure method commonly chosen by profile type and throughput",
      "Line length and heating capacity scale with product and speed",
      "Energy use and footprint often factor into selection",
      "Downstream cooling and cutting integration needs coordination"
    ],
    "engineeringConsiderations": [
      "Even, complete cure at line speed is commonly the central intent",
      "Avoiding distortion of unsupported profiles is typically a concern",
      "Consistent residence time and heat history is often a goal",
      "Handoff to cooling and cutting is usually considered"
    ],
    "qualityRisks": [
      "Excess speed can leave under-cured product",
      "Slow speed or hot zones may over-cure and embrittle",
      "Profile sag or distortion can occur before cure sets"
    ],
    "maintenanceConsiderations": [
      "Heating-element and zone-uniformity checks are commonly scheduled",
      "Conveyor/belt tracking maintenance is typical",
      "For salt-bath lines, bath condition upkeep is routine"
    ],
    "safetyNote": "High temperatures and, for some methods, hot media or microwave energy carry burn and exposure awareness; guarding and isolation are commonly emphasized.",
    "supplierCategory": "autoclave-curing-supplier",
    "vendorExamples": [],
    "sourcingQuestions": [
      "What profiles or sheet, and at what throughput, must the line cure?",
      "Which cure method (hot-air, salt-bath, microwave, rotary drum) fits your product?",
      "What footprint and energy constraints apply?",
      "How will the line integrate with forming, cooling, and cutting? (requires verification before sourcing)"
    ],
    "linkedDefects": [
      "under-cure",
      "over-cure",
      "cracking"
    ]
  },
  {
    "id": "eq-curing-racks",
    "name": "Curing Racks, Trolleys, and Mandrels",
    "category": "curing",
    "whatItDoes": "Holds and supports green parts, lined components, or wound sheet during autoclave curing, organizing the load so heat reaches all surfaces evenly and parts hold their shape while vulcanizing. It is support tooling for batch curing.",
    "whereInFactory": "In and around the vulcanization area, moving between loading and the autoclave.",
    "inputState": "Green parts or lined items needing support and spacing for cure.",
    "outputState": "A loaded, well-spaced rack ready for the autoclave and unloaded cured parts after.",
    "relatedStations": [
      "vulcanization",
      "cooling"
    ],
    "relatedProducts": [
      "tank-pipe-lining",
      "abrasion-liners",
      "rubber-sleeves",
      "bellows-boots"
    ],
    "variants": [
      "Shelf and tray racks",
      "Mandrels for tubular parts",
      "Rolled-sheet cores",
      "Custom fixtures for specific parts"
    ],
    "purchasingConsiderations": [
      "Fit to the autoclave interior and parts commonly central",
      "Material able to withstand repeated cure cycles is typically required",
      "Loading ergonomics and trolley mobility may matter",
      "Quantity to keep the autoclave loaded affects throughput"
    ],
    "engineeringConsiderations": [
      "Even spacing for uniform heat access is commonly the intent",
      "Supporting parts to prevent sag or distortion is typically a goal",
      "Durability through repeated thermal cycling is often considered",
      "Easy load/unload to limit cycle gaps is usually valued"
    ],
    "qualityRisks": [
      "Crowded loading can cause local under-cure from blocked heat",
      "Poor support may distort parts during cure",
      "Rack residue can contaminate part surfaces"
    ],
    "maintenanceConsiderations": [
      "Inspection for warping and residue buildup is commonly routine",
      "Cleaning between part types limits contamination",
      "Trolley wheel and frame upkeep is typical"
    ],
    "safetyNote": "Hot racks after cure and manual handling carry burn and lifting awareness; handling aids and PPE are commonly emphasized.",
    "supplierCategory": "autoclave-curing-supplier",
    "vendorExamples": [],
    "sourcingQuestions": [
      "What parts and autoclave dimensions must the racks suit?",
      "What spacing and support do your parts need for even cure?",
      "What load weight and trolley handling are required?",
      "How many racks keep your autoclave continuously loaded? (requires verification before sourcing)"
    ],
    "linkedDefects": [
      "under-cure",
      "contamination"
    ]
  },
  {
    "id": "eq-slitter",
    "name": "Slitting Machine (Slitter)",
    "category": "cutting-finishing",
    "whatItDoes": "Cuts wide cured or uncured rubber sheet into narrower rolls or strips of defined width by passing the web through rotary or razor knives, producing trimmed-to-width product for downstream use. It is a primary width-conversion machine.",
    "whereInFactory": "In the trimming/slitting area, between sheet production and windup.",
    "inputState": "Wide rolls or continuous webs of rubber or fabric-reinforced sheet.",
    "outputState": "Multiple narrower rolls or strips at specified widths with trimmed edges.",
    "relatedStations": [
      "trimming-slitting",
      "finished-roll",
      "calender"
    ],
    "relatedProducts": [
      "rubber-strips",
      "rubber-sheet",
      "fabric-reinforced-sheet",
      "abrasion-liners"
    ],
    "variants": [
      "Rotary shear slitters",
      "Razor-blade slitters",
      "Score/crush slitters",
      "Slitter-rewinders combining cut and windup"
    ],
    "purchasingConsiderations": [
      "Knife type commonly chosen by material thickness and reinforcement",
      "Width range and number of cuts scale with product mix",
      "Edge-quality needs may drive blade and tension selection",
      "Integration with rewind/windup is often part of scope"
    ],
    "engineeringConsiderations": [
      "Clean, straight edges at target width is commonly the central intent",
      "Maintaining web tension to avoid wander is typically a concern",
      "Blade condition affecting edge quality is often monitored",
      "Handling reinforced webs without fraying is sometimes a factor"
    ],
    "qualityRisks": [
      "Dull or misaligned knives can cause ragged or off-width edges",
      "Tension variation may cause width drift",
      "Reinforced webs can fray if cut poorly"
    ],
    "maintenanceConsiderations": [
      "Blade sharpening/replacement is commonly scheduled",
      "Tension-control and guiding calibration is typical",
      "Knife-alignment checks are routine"
    ],
    "safetyNote": "Exposed knives and moving web make cut and entanglement hazards prominent; guarding and blade-handling awareness are commonly emphasized.",
    "supplierCategory": "rubber-cutting-supplier",
    "vendorExamples": [],
    "sourcingQuestions": [
      "What sheet types, thicknesses, and widths must be slit?",
      "What edge quality and width tolerance do your products need?",
      "How many simultaneous cuts and what roll changeover frequency?",
      "Should the slitter integrate rewinding/windup? (requires verification before sourcing)"
    ],
    "linkedDefects": [
      "contamination"
    ]
  },
  {
    "id": "eq-die-cutting-press",
    "name": "Die-Cutting Press",
    "category": "cutting-finishing",
    "whatItDoes": "Cuts shaped parts such as gaskets, washers, and custom profiles from rubber sheet by pressing a shaped die through the material, commonly with a clicker, traveling-head, or rotary die system. It is the primary machine for producing flat cut parts.",
    "whereInFactory": "In the cutting/finishing area, converting sheet into finished flat parts.",
    "inputState": "Cured rubber sheet (plain or fabric-reinforced) staged for cutting.",
    "outputState": "Finished die-cut parts (gaskets, washers, profiles) plus skeleton scrap.",
    "relatedStations": [
      "trimming-slitting",
      "inspection",
      "finished-roll"
    ],
    "relatedProducts": [
      "cut-gaskets",
      "custom-die-cut",
      "rubber-washers",
      "rubber-seals"
    ],
    "variants": [
      "Clicker (swing-arm) presses",
      "Traveling-head presses",
      "Rotary die-cutting",
      "Beam/hydraulic presses for large dies"
    ],
    "purchasingConsiderations": [
      "Cutting force and bed size commonly matched to part size and sheet hardness",
      "Die type (steel-rule vs forged) depends on volume and tolerance",
      "Throughput and automation level scale with order volumes",
      "Tooling cost and changeover ease often factor in"
    ],
    "engineeringConsiderations": [
      "Clean full-depth cuts without crushing is commonly the central intent",
      "Consistent part dimensions across the sheet is typically a goal",
      "Material yield/nesting affects scrap and cost",
      "Die wear influencing edge quality is often monitored"
    ],
    "qualityRisks": [
      "Worn dies can leave incomplete cuts or rough edges",
      "Crushing can distort soft parts near the cut",
      "Sheet defects (voids, contamination) carry into parts"
    ],
    "maintenanceConsiderations": [
      "Die sharpening and cutting-board upkeep is commonly scheduled",
      "Press force and parallelism checks are typical",
      "Safety-device verification is routine"
    ],
    "safetyNote": "A descending cutting head with high force creates crush and cut hazards; two-hand or interlocked controls are commonly essential.",
    "supplierCategory": "rubber-cutting-supplier",
    "vendorExamples": [],
    "sourcingQuestions": [
      "What part shapes, sizes, and sheet hardness must be cut?",
      "What volumes and tolerances determine die type and automation?",
      "What bed size and cutting force do your parts require?",
      "What tooling and changeover approach fits your product mix? (requires verification before sourcing)"
    ],
    "linkedDefects": [
      "contamination",
      "trapped-air"
    ]
  },
  {
    "id": "eq-winder",
    "name": "Winder / Rewinder",
    "category": "cutting-finishing",
    "whatItDoes": "Winds finished rubber sheet or strip into rolls under controlled tension, often interleaving a liner to prevent the layers from sticking, producing tidy, handleable finished rolls. It is the takeup end of sheet and slitting lines.",
    "whereInFactory": "At the end of calender, slitting, or curing lines, producing finished rolls.",
    "inputState": "Continuous cured or cooled sheet/strip from upstream forming or cutting.",
    "outputState": "Neatly wound finished rolls, commonly with interleaf liner and labeled.",
    "relatedStations": [
      "finished-roll",
      "trimming-slitting",
      "cooling"
    ],
    "relatedProducts": [
      "rubber-rolls",
      "rubber-sheet",
      "rubber-strips",
      "fabric-reinforced-sheet"
    ],
    "variants": [
      "Surface winders",
      "Center winders",
      "Turret/automatic roll-change winders",
      "Winders with interleaf liner feed"
    ],
    "purchasingConsiderations": [
      "Winding method commonly chosen by product tack and roll size",
      "Tension control central to roll quality and blocking prevention",
      "Interleaf capability may be needed for tacky sheet",
      "Roll-change automation scales with throughput"
    ],
    "engineeringConsiderations": [
      "Consistent tension for firm, even rolls is commonly the intent",
      "Preventing layers from blocking is typically a goal",
      "Avoiding stretch or distortion during windup is often considered",
      "Clean roll edges and core alignment are usually valued"
    ],
    "qualityRisks": [
      "Too-tight winding can stretch or distort sheet",
      "Missing or poor interleaf can cause layers to block",
      "Tension variation may yield soft or telescoped rolls"
    ],
    "maintenanceConsiderations": [
      "Tension-control and drive calibration is commonly scheduled",
      "Roller and core-chuck inspection is typical",
      "Interleaf-feed mechanism upkeep is routine"
    ],
    "safetyNote": "Rotating roll and web nip points carry entanglement hazards; guarding and controlled roll handling are commonly emphasized.",
    "supplierCategory": "rubber-cutting-supplier",
    "vendorExamples": [],
    "sourcingQuestions": [
      "What sheet/strip products and roll sizes must be wound?",
      "Is interleaf liner needed for tacky products?",
      "What tension control and roll-quality expectations apply?",
      "Is automatic roll changing required for throughput? (requires verification before sourcing)"
    ],
    "linkedDefects": [
      "cracking",
      "contamination"
    ]
  },
  {
    "id": "eq-injection-molding-press",
    "name": "Rubber Injection Molding Press",
    "category": "molding",
    "whatItDoes": "Injects warmed rubber compound into a closed, heated mold under pressure and vulcanizes it in place, producing molded parts with good repeatability and short cycle suitability for higher volumes. It is a primary molding route for precision parts.",
    "whereInFactory": "In the molding area, fed with strip or pelletized compound.",
    "inputState": "Warmed strip or feedstock compound supplied to the injection unit.",
    "outputState": "Vulcanized molded parts (often with minimal flash) plus sprues/runners.",
    "relatedStations": [
      "vulcanization",
      "trimming-slitting",
      "inspection"
    ],
    "relatedProducts": [
      "molded-parts",
      "rubber-seals",
      "rubber-bushings",
      "pinch-valve-sleeves"
    ],
    "variants": [
      "Vertical injection presses",
      "Horizontal injection presses",
      "Liquid silicone (LSR) injection systems",
      "Multi-cavity tooling configurations"
    ],
    "purchasingConsiderations": [
      "Clamp force and shot capacity commonly matched to part size and cavities",
      "Injection unit type depends on compound (solid vs liquid)",
      "Tooling cost and cavity count scale with volume",
      "Automation/part-removal options often factor in"
    ],
    "engineeringConsiderations": [
      "Complete, void-free cavity fill is commonly the central intent",
      "Even mold heating for uniform cure is typically a concern",
      "Flash and material-yield control affect finishing effort",
      "Consistent part-to-part repeatability is usually a goal"
    ],
    "qualityRisks": [
      "Incomplete fill can leave short shots or voids",
      "Trapped air may form voids or weld-line defects",
      "Uneven mold heat can cause local under- or over-cure"
    ],
    "maintenanceConsiderations": [
      "Injection-unit and screw/plunger upkeep is commonly scheduled",
      "Mold-heating uniformity verification is typical",
      "Hydraulic and safety-interlock checks are routine"
    ],
    "safetyNote": "High clamp force, injection pressure, and hot tooling create crush and burn hazards; interlocks, light curtains, and isolation awareness are commonly emphasized.",
    "supplierCategory": "hydraulic-press-mfr",
    "vendorExamples": [],
    "sourcingQuestions": [
      "What part sizes, cavity counts, and volumes must the press support?",
      "Solid rubber, liquid silicone, or both?",
      "What clamp force and shot capacity do your parts need?",
      "What level of automation and part removal is required? (requires verification before sourcing)"
    ],
    "linkedDefects": [
      "trapped-air",
      "under-cure",
      "over-cure"
    ]
  },
  {
    "id": "eq-transfer-molding-press",
    "name": "Transfer Molding Press",
    "category": "molding",
    "whatItDoes": "Forces a measured charge of compound from a transfer pot through runners into closed mold cavities, then cures it, suiting parts with inserts or intricate geometry where compression molding struggles. It bridges compression and injection methods.",
    "whereInFactory": "In the molding area, alongside compression and injection presses.",
    "inputState": "A measured compound charge loaded into the transfer pot, sometimes with inserts placed.",
    "outputState": "Vulcanized molded parts (often with inserts) plus transfer pad and runners.",
    "relatedStations": [
      "vulcanization",
      "trimming-slitting",
      "inspection"
    ],
    "relatedProducts": [
      "molded-parts",
      "rubber-bushings",
      "rubber-seals",
      "pinch-valve-sleeves"
    ],
    "variants": [
      "Pot-transfer presses",
      "Plunger-transfer tooling",
      "Multi-cavity transfer molds",
      "Insert-molding configurations"
    ],
    "purchasingConsiderations": [
      "Clamp force and pot capacity commonly matched to part and cavity count",
      "Suitability for inserts and intricate parts often drives selection",
      "Tooling complexity and cost scale with cavities and inserts",
      "Platen heating uniformity affects cure quality"
    ],
    "engineeringConsiderations": [
      "Even cavity fill through runners is commonly the central intent",
      "Reliable insert positioning and bonding is typically a concern",
      "Air evacuation to avoid voids is often considered",
      "Material yield (transfer pad/runner waste) is sometimes a factor"
    ],
    "qualityRisks": [
      "Incomplete transfer can cause short fill",
      "Trapped air may form voids in cavities",
      "Poor insert bonding can weaken parts"
    ],
    "maintenanceConsiderations": [
      "Transfer-pot and plunger upkeep is commonly scheduled",
      "Platen-heating and runner-condition checks are typical",
      "Safety-interlock verification is routine"
    ],
    "safetyNote": "High clamp and transfer force plus hot tooling create crush and burn hazards; interlocks and isolation awareness are commonly emphasized.",
    "supplierCategory": "hydraulic-press-mfr",
    "vendorExamples": [],
    "sourcingQuestions": [
      "What part geometries and inserts must the press handle?",
      "What clamp force and pot capacity suit your parts?",
      "How many cavities and what insert-handling is needed?",
      "What platen-heating uniformity do your products require? (requires verification before sourcing)"
    ],
    "linkedDefects": [
      "trapped-air",
      "under-cure",
      "poor-adhesion"
    ]
  },
  {
    "id": "eq-deflashing",
    "name": "Deflashing System",
    "category": "molding",
    "whatItDoes": "Removes the thin flash and excess rubber left around molded parts, commonly by cryogenic tumbling (embrittling flash with cold then blasting it off), mechanical tumbling, or hand trimming, producing clean finished parts. It is a finishing step after molding.",
    "whereInFactory": "In the molding/finishing area, downstream of the molding presses.",
    "inputState": "Molded parts carrying flash, sprues, or runner remnants.",
    "outputState": "Cleaned, deflashed parts ready for inspection and packing.",
    "relatedStations": [
      "trimming-slitting",
      "inspection",
      "vulcanization"
    ],
    "relatedProducts": [
      "molded-parts",
      "rubber-seals",
      "rubber-bushings",
      "rubber-washers"
    ],
    "variants": [
      "Cryogenic deflashing (cryo-blast)",
      "Mechanical tumbling/brushing",
      "Manual trimming stations",
      "Combination systems"
    ],
    "purchasingConsiderations": [
      "Deflashing method commonly chosen by part delicacy and flash type",
      "Cryogenic systems involve cryogen supply and handling considerations",
      "Throughput and batch size scale with order volume",
      "Risk of part damage often guides method and settings"
    ],
    "engineeringConsiderations": [
      "Removing flash without damaging the part is commonly the central intent",
      "Reaching recessed or complex flash areas is typically a concern",
      "Avoiding surface marring or embrittlement is often considered",
      "Consistent finish across a batch is usually a goal"
    ],
    "qualityRisks": [
      "Aggressive deflashing can mar or chip delicate parts",
      "Incomplete flash removal leaves cosmetic or functional defects",
      "Improper handling can introduce contamination"
    ],
    "maintenanceConsiderations": [
      "Media, brush, and blast-component upkeep is commonly scheduled",
      "For cryogenic units, cryogen-system maintenance is typical",
      "Tumbler and drive inspection is routine"
    ],
    "safetyNote": "Cryogenic deflashing involves very cold media (frostbite and asphyxiation awareness in enclosed areas) and blast energy; ventilation and PPE awareness are commonly emphasized.",
    "supplierCategory": "rubber-cutting-supplier",
    "vendorExamples": [],
    "sourcingQuestions": [
      "What part types and flash characteristics must be deflashed?",
      "How delicate are the parts, and what damage risk is acceptable?",
      "What throughput and batch sizes apply?",
      "Is cryogenic media supply and handling feasible at your site? (requires verification before sourcing)"
    ],
    "linkedDefects": [
      "contamination",
      "cracking"
    ]
  },
  {
    "id": "eq-durometer",
    "name": "Durometer (Hardness Tester)",
    "category": "inspection-testing",
    "whatItDoes": "Measures the hardness of cured rubber by pressing a standardized indenter into the surface and reading the resistance, giving a quick check that a compound is within its intended hardness range. It is a fundamental quality-lab instrument.",
    "whereInFactory": "At the inspection station and quality lab, sampling cured product.",
    "inputState": "Cured rubber samples or finished parts of adequate thickness.",
    "outputState": "A hardness reading used to judge cure and compound consistency.",
    "relatedStations": [
      "inspection",
      "vulcanization"
    ],
    "relatedProducts": [
      "rubber-sheet",
      "molded-parts",
      "rubber-seals",
      "rubber-pads"
    ],
    "variants": [
      "Shore A durometers (soft to medium)",
      "Shore D durometers (hard)",
      "Bench/stand-mounted test rigs",
      "Digital readout units"
    ],
    "purchasingConsiderations": [
      "Hardness scale commonly matched to product range",
      "Bench stand may improve repeatability over handheld",
      "Calibration support and traceable references are typically important",
      "Digital data capture may aid record-keeping"
    ],
    "engineeringConsiderations": [
      "Repeatable, comparable readings are commonly the central intent",
      "Adequate sample thickness for valid measurement is typically required",
      "Operator technique affecting handheld readings is often noted",
      "Correlation of hardness to cure state is usually understood as indicative"
    ],
    "qualityRisks": [
      "Drifted calibration can mislead pass/fail decisions",
      "Thin or uneven samples can give invalid readings",
      "Hardness drift may signal cure or formulation issues"
    ],
    "maintenanceConsiderations": [
      "Calibration against traceable references is commonly scheduled",
      "Indenter and spring condition checks are typical",
      "Clean measuring surface is routine"
    ],
    "safetyNote": "A low-hazard bench instrument; primary care is measurement validity rather than machine safety.",
    "supplierCategory": "lab-testing-supplier",
    "vendorExamples": [],
    "sourcingQuestions": [
      "What hardness range and scales do your products span?",
      "Is a bench stand needed for repeatability?",
      "What calibration and traceability support is expected?",
      "Do you need digital data capture for records? (use the official standard and an accredited/qualified lab for actual testing)"
    ],
    "linkedDefects": [
      "hardness-drift",
      "under-cure",
      "over-cure"
    ]
  },
  {
    "id": "eq-tensile-tester",
    "name": "Tensile Testing Machine (Universal Tester)",
    "category": "inspection-testing",
    "whatItDoes": "Stretches standardized rubber specimens to measure properties such as tensile strength and elongation, helping confirm that cured compound meets its mechanical expectations. It is a core physical-properties lab machine.",
    "whereInFactory": "In the quality lab, testing prepared specimens from production samples.",
    "inputState": "Cut or molded test specimens (commonly dumbbell shapes) prepared from product.",
    "outputState": "Mechanical-property results used to assess compound and cure quality.",
    "relatedStations": [
      "inspection",
      "vulcanization"
    ],
    "relatedProducts": [
      "rubber-sheet",
      "molded-parts",
      "fabric-reinforced-sheet",
      "abrasion-liners"
    ],
    "variants": [
      "Single-column testers (lower force)",
      "Dual-column testers (higher force)",
      "Units with extensometers for accurate elongation",
      "Systems with environmental chambers"
    ],
    "purchasingConsiderations": [
      "Force capacity and travel commonly matched to specimen properties",
      "Extensometry needs depend on elongation accuracy required",
      "Grips suited to elastic specimens are typically important",
      "Software and data capture often factor into selection"
    ],
    "engineeringConsiderations": [
      "Accurate, repeatable property measurement is commonly the central intent",
      "Proper specimen preparation strongly affects validity",
      "Grip slippage on elastic samples is typically a concern",
      "Correlation of results to cure and formulation is understood as indicative"
    ],
    "qualityRisks": [
      "Poor specimen prep can invalidate results",
      "Grip slippage can bias elongation readings",
      "Calibration drift can mislead acceptance decisions"
    ],
    "maintenanceConsiderations": [
      "Load-cell and extensometer calibration is commonly scheduled",
      "Grip and fixture inspection is typical",
      "Drive and alignment checks are routine"
    ],
    "safetyNote": "Specimens can snap under tension and release energy; guarding and eye-protection awareness are commonly emphasized.",
    "supplierCategory": "lab-testing-supplier",
    "vendorExamples": [],
    "sourcingQuestions": [
      "What property ranges and specimen types must the tester handle?",
      "Is an extensometer needed for accurate elongation?",
      "What force capacity and grip types suit your samples?",
      "Do you need an environmental chamber for elevated-temperature tests? (use the official standard and an accredited/qualified lab for actual testing)"
    ],
    "linkedDefects": [
      "under-cure",
      "over-cure",
      "poor-adhesion"
    ]
  },
  {
    "id": "eq-compression-set-fixture",
    "name": "Compression-Set Test Fixture",
    "category": "inspection-testing",
    "whatItDoes": "Holds rubber specimens compressed by a fixed amount between plates so that, after conditioning in an oven, the recovery can be measured to assess how well the material returns to shape, an indicator of sealing performance and cure quality. It is a fixture used with an aging oven.",
    "whereInFactory": "In the quality lab, used together with the aging oven.",
    "inputState": "Standardized rubber specimens (often discs or buttons) for compression.",
    "outputState": "Compressed specimens whose recovery is later measured for a compression-set result.",
    "relatedStations": [
      "inspection",
      "vulcanization"
    ],
    "relatedProducts": [
      "rubber-seals",
      "molded-parts",
      "cut-gaskets",
      "rubber-washers"
    ],
    "variants": [
      "Plate-and-spacer fixtures",
      "Multi-cavity fixtures",
      "Fixtures sized to standard specimen geometries",
      "Fixtures for different deflection setups"
    ],
    "purchasingConsiderations": [
      "Fixture geometry commonly matched to standardized specimen sizes",
      "Material and finish for durability and reuse are typically considered",
      "Capacity (number of specimens) may matter for batch testing",
      "Compatibility with the aging oven is usually required"
    ],
    "engineeringConsiderations": [
      "Consistent, defined deflection across specimens is commonly the central intent",
      "Flat, parallel plates for valid measurement are typically required",
      "Repeatable setup to compare results is often a goal",
      "Correlation of set to sealing/cure is understood as indicative"
    ],
    "qualityRisks": [
      "Non-parallel plates can bias results",
      "Inconsistent deflection invalidates comparisons",
      "High compression set may indicate cure or formulation problems"
    ],
    "maintenanceConsiderations": [
      "Plate flatness and spacer condition checks are commonly routine",
      "Cleaning between tests limits contamination",
      "Inspection for wear is typical"
    ],
    "safetyNote": "A low-hazard fixture; main care is dimensional integrity and safe handling of hot specimens after oven conditioning.",
    "supplierCategory": "lab-testing-supplier",
    "vendorExamples": [],
    "sourcingQuestions": [
      "Which standard specimen geometries must the fixture accommodate?",
      "How many specimens per batch do you test?",
      "Is it compatible with your aging oven?",
      "What deflection setups do your products require? (use the official standard and an accredited/qualified lab for actual testing)"
    ],
    "linkedDefects": [
      "compression-set",
      "over-cure",
      "under-cure"
    ]
  },
  {
    "id": "eq-aging-oven",
    "name": "Aging / Heat-Conditioning Oven",
    "category": "inspection-testing",
    "whatItDoes": "Holds rubber specimens at elevated temperature for a conditioning period so that heat-aging effects on properties can be assessed and compression-set specimens can be conditioned, supporting durability evaluation. It is a lab conditioning oven.",
    "whereInFactory": "In the quality lab, often used with compression-set fixtures and test specimens.",
    "inputState": "Test specimens (and fixtures) to be conditioned at elevated temperature.",
    "outputState": "Heat-conditioned specimens ready for property or recovery measurement.",
    "relatedStations": [
      "inspection",
      "vulcanization"
    ],
    "relatedProducts": [
      "rubber-seals",
      "high-temp-sheet",
      "molded-parts",
      "abrasion-liners"
    ],
    "variants": [
      "Gravity-convection ovens",
      "Forced-air (mechanical convection) ovens",
      "Multi-cell ovens isolating compounds",
      "Ovens with airflow control for aging tests"
    ],
    "purchasingConsiderations": [
      "Temperature uniformity commonly central to valid aging results",
      "Forced-air vs gravity convection depends on test needs",
      "Multi-cell designs may prevent cross-contamination between compounds",
      "Calibration and mapping support are typically important"
    ],
    "engineeringConsiderations": [
      "Uniform, stable temperature for valid conditioning is commonly the central intent",
      "Adequate, controlled airflow for aging tests is typically a concern",
      "Avoiding cross-contamination between samples is often considered",
      "Repeatable conditions across runs is usually a goal"
    ],
    "qualityRisks": [
      "Temperature non-uniformity can bias aging results",
      "Cross-contamination between compounds can affect outcomes",
      "Drifted control can invalidate comparisons"
    ],
    "maintenanceConsiderations": [
      "Temperature calibration and mapping is commonly scheduled",
      "Airflow and seal inspection is typical",
      "Heating-element checks are routine"
    ],
    "safetyNote": "Hot surfaces and heated specimens carry burn awareness; ventilation for any released volatiles is commonly noted.",
    "supplierCategory": "lab-testing-supplier",
    "vendorExamples": [],
    "sourcingQuestions": [
      "What temperature range and uniformity do your aging tests need?",
      "Is forced-air or gravity convection appropriate?",
      "Do you need multi-cell isolation between compounds?",
      "What calibration and mapping support is expected? (use the official standard and an accredited/qualified lab for actual testing)"
    ],
    "linkedDefects": [
      "compression-set",
      "cracking",
      "over-cure"
    ]
  },
  {
    "id": "eq-visual-inspection-station",
    "name": "Visual Inspection Station",
    "category": "inspection-testing",
    "whatItDoes": "Provides a well-lit, organized workstation where operators examine sheet and parts for surface defects such as blisters, contamination, bloom, and cracks, and verify basic appearance and dimensions before product moves on. It is the human gate for cosmetic and gross-defect quality.",
    "whereInFactory": "At the inspection station, between curing/finishing and packaging.",
    "inputState": "Cured sheet, rolls, or finished parts presented for examination.",
    "outputState": "Accepted product (and segregated rejects) with defects identified.",
    "relatedStations": [
      "inspection",
      "finished-roll",
      "trimming-slitting"
    ],
    "relatedProducts": [
      "rubber-sheet",
      "molded-parts",
      "cut-gaskets",
      "rubber-rolls"
    ],
    "variants": [
      "Lightboxes/backlit tables for sheet",
      "Magnified inspection stations",
      "Stations with reference defect samples",
      "Stations with measurement aids and templates"
    ],
    "purchasingConsiderations": [
      "Lighting quality and consistency commonly central to defect detection",
      "Magnification and aids may suit small or critical parts",
      "Ergonomics for sustained inspection often matter",
      "Reference standards and templates may be included"
    ],
    "engineeringConsiderations": [
      "Lighting that reveals subtle surface defects is commonly the central intent",
      "Consistent inspection criteria to reduce subjectivity is typically a goal",
      "Ergonomics to maintain inspector attention is often considered",
      "Clear reject segregation to prevent mixups is usually emphasized"
    ],
    "qualityRisks": [
      "Poor lighting can let defects pass undetected",
      "Inconsistent criteria cause variable accept/reject decisions",
      "Inspector fatigue may reduce detection over time"
    ],
    "maintenanceConsiderations": [
      "Lighting upkeep and replacement is commonly routine",
      "Cleanliness to avoid introducing contamination is typical",
      "Reference-sample upkeep is occasionally needed"
    ],
    "safetyNote": "A low-hazard station; care centers on lighting ergonomics and safe handling of product rather than machine hazards.",
    "supplierCategory": "lab-testing-supplier",
    "vendorExamples": [],
    "sourcingQuestions": [
      "What products and defect types must inspectors detect?",
      "What lighting and magnification suit your critical defects?",
      "Are reference defect samples or templates needed?",
      "What ergonomics and throughput must the station support? (requires verification before sourcing)"
    ],
    "linkedDefects": [
      "bloom",
      "contamination",
      "cracking"
    ]
  },
  {
    "id": "eq-roll-wrapper",
    "name": "Roll Wrapping Machine",
    "category": "packaging-shipping",
    "whatItDoes": "Wraps finished rubber rolls in protective film or covering and secures them for storage and shipment, protecting the product from dirt, moisture, and handling damage. It is a primary packaging machine for rolled goods.",
    "whereInFactory": "In the packaging/shipping area, after final inspection of finished rolls.",
    "inputState": "Inspected, labeled finished rolls staged for protection.",
    "outputState": "Wrapped, protected rolls ready for palletizing and shipment.",
    "relatedStations": [
      "finished-roll",
      "inspection"
    ],
    "relatedProducts": [
      "rubber-rolls",
      "rubber-sheet",
      "fabric-reinforced-sheet",
      "high-temp-sheet"
    ],
    "variants": [
      "Spiral (orbital) wrappers",
      "Stretch-film roll wrappers",
      "Semi-automatic wrappers",
      "Wrappers with end-protection application"
    ],
    "purchasingConsiderations": [
      "Roll size range commonly central to wrapper selection",
      "Wrap material and protection level matched to product needs",
      "Automation level scales with shipment volume",
      "Integration with labeling and palletizing may be desired"
    ],
    "engineeringConsiderations": [
      "Secure, protective wrap without product damage is commonly the central intent",
      "Consistent coverage including ends is typically a goal",
      "Handling a range of roll sizes is often considered",
      "Throughput matching upstream output is usually a factor"
    ],
    "qualityRisks": [
      "Loose or incomplete wrap can let contamination reach product",
      "Over-tight wrapping may mark or distort soft rolls",
      "Damaged wrap can expose product in transit"
    ],
    "maintenanceConsiderations": [
      "Film-feed and tensioner upkeep is commonly scheduled",
      "Drive and rotation mechanism inspection is typical",
      "Cutting/sealing component checks are routine"
    ],
    "safetyNote": "Rotating wrap motion and roll handling carry entanglement and lifting hazards; guarding and handling aids are commonly emphasized.",
    "supplierCategory": "material-handling-integrator",
    "vendorExamples": [],
    "sourcingQuestions": [
      "What roll size range and weights must be wrapped?",
      "What protection level and wrap material do your products need?",
      "What throughput and automation level are required?",
      "Should wrapping integrate with labeling and palletizing? (requires verification before sourcing)"
    ],
    "linkedDefects": [
      "contamination"
    ]
  },
  {
    "id": "eq-palletizer",
    "name": "Palletizing System",
    "category": "packaging-shipping",
    "whatItDoes": "Stacks finished, packaged rubber goods (rolls, boxed parts, slabs) onto pallets in stable patterns for storage and shipping, commonly using a robotic arm or layer-forming system, reducing manual lifting. It is a primary end-of-line handling machine.",
    "whereInFactory": "At the end of the packaging line, before pallet wrapping and dispatch.",
    "inputState": "Wrapped rolls or boxed/packaged parts arriving from packaging.",
    "outputState": "Stable, stacked pallet loads ready for stretch-wrapping and shipment.",
    "relatedStations": [
      "finished-roll"
    ],
    "relatedProducts": [
      "rubber-rolls",
      "rubber-sheet",
      "molded-parts",
      "cut-gaskets"
    ],
    "variants": [
      "Robotic-arm palletizers",
      "Conventional layer (gantry) palletizers",
      "Collaborative-robot palletizers",
      "Semi-automatic palletizing aids"
    ],
    "purchasingConsiderations": [
      "Product mix and pallet patterns commonly central to system choice",
      "Throughput and load weights determine robot/system size",
      "Floor space and integration with conveyors matter",
      "Flexibility for mixed products may be valued"
    ],
    "engineeringConsiderations": [
      "Stable, transport-safe stacking is commonly the central intent",
      "Handling varied product shapes and weights is typically a concern",
      "Pattern flexibility for product mix is often considered",
      "Integration with upstream conveying is usually a factor"
    ],
    "qualityRisks": [
      "Unstable stacking can cause load shifts and product damage",
      "Mishandling can mark or deform soft products",
      "Wrong pattern may not protect product in transit"
    ],
    "maintenanceConsiderations": [
      "Robot/mechanism and gripper upkeep is commonly scheduled",
      "Conveyor and sensor maintenance is typical",
      "Safety-system (guarding, scanners) verification is routine"
    ],
    "safetyNote": "Robotic motion and heavy loads create impact and crush hazards; perimeter guarding, area scanners, and isolation awareness are commonly emphasized.",
    "supplierCategory": "controls-automation-integrator",
    "vendorExamples": [],
    "sourcingQuestions": [
      "What product types, weights, and pallet patterns must be handled?",
      "What throughput must the palletizer sustain?",
      "What floor space and conveyor integration apply?",
      "How much product-mix flexibility is required? (requires verification before sourcing)"
    ],
    "linkedDefects": [
      "contamination"
    ]
  }
];

export const equipmentById: Record<string, Equipment> = Object.fromEntries(equipmentLibrary.map((e) => [e.id, e]));

// Primary equipment for a simulator station (first match by related station).
export function primaryEquipmentForStation(stationId: StationId): Equipment | undefined {
  return equipmentLibrary.find((e) => e.relatedStations.includes(stationId));
}
