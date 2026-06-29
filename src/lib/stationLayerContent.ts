import type { StationLayerContent } from "@/types/factoryPlatform";
import type { StationId } from "@/types/simulation";
export const stationLayerContent: Record<StationId, StationLayerContent> = {
  "raw-material-room": {
    "process": {
      "headline": "Receiving and lot-staging incoming compound inputs",
      "points": [
        "Incoming polymers, fillers, process oils, and cure-package components generally arrive here as separately packaged, unverified inputs and leave as identified, lot-tagged, staged material ready for weighing and mixing.",
        "Route logic typically branches on identity and acceptance: confirmed lots move to staging, while questionable or unlabeled material is commonly held or quarantined pending review.",
        "This station usually transforms loose deliveries into an organized, traceable inventory state, often the first point where each material is tied to a lot identifier.",
        "In this prototype the staging logic is illustrative; it does not reflect live inventory levels or a real warehouse feed."
      ]
    },
    "chemistry": {
      "headline": "Ingredients staged before any crosslink forms",
      "points": [
        "No chemical transformation is intended here: raw polymer, reinforcing and extending fillers, plasticizing oils, and the cure package are generally kept separate and inert until later mixing.",
        "The cure package (commonly a vulcanizing agent with accelerators and activators) is the component that will later enable crosslinking, but it typically stays unreacted at this stage.",
        "Material behavior here is mostly about preservation: polymers and curatives can be sensitive to moisture, heat, and age, so conditions are generally controlled to protect later compound behavior.",
        "Crosslink chemistry is described conceptually only; this station defines no formulations, ratios, or cure conditions."
      ]
    },
    "quality": {
      "headline": "Incoming inspection and identity verification gate",
      "points": [
        "This is typically the receiving-inspection checkpoint: material identity, labeling, packaging integrity, and accompanying paperwork are commonly verified against expectations before acceptance.",
        "Tests named generically may include identity confirmation, basic appearance or contamination checks, moisture-sensitivity review, and review of supplier-provided test documentation; specifics generally require technical review.",
        "Defects often caught here include mislabeled or unidentified lots, wrong material grade, damaged or contaminated packaging, expired or aged curatives, and missing supplier documentation.",
        "Catching an identity or documentation issue at this gate generally prevents costly downstream defects in mixing and cure."
      ]
    },
    "supply-chain": {
      "headline": "Vendor lots, certificates, and staging capacity",
      "points": [
        "This station depends heavily on raw-material suppliers and the consistency of their lots; substitutions or grade changes typically require technical review before acceptance.",
        "Equipment dependency is usually modest but real: scales, labeling and scanning tools, and controlled storage space, with limited staging capacity as a common constraint.",
        "Documentation dependency is significant: supplier certificates of analysis, lot numbers, and traceability records are generally needed to accept and stage material.",
        "In this prototype these dependencies are modeled conceptually and are not connected to a live ERP, supplier portal, or inventory system."
      ]
    },
    "people": {
      "headline": "Receiving and incoming-quality roles coordinate",
      "points": [
        "A receiving or warehouse operator, typically supported by an incoming-quality or QC reviewer, is usually involved in checking, identifying, and staging material at a safe distance from any hazardous operation.",
        "They commonly monitor lot identity, label and certificate match, packaging condition, and storage placement by lot.",
        "Key decisions often include accept, hold, or quarantine, and how to organize lots for first-in-first-out use; borderline cases generally get escalated for technical review.",
        "Roles here are conceptual and supervisory; no hazardous manual handling is implied or instructed."
      ]
    },
    "maintenance": {
      "headline": "Storage conditions and handling-equipment upkeep",
      "points": [
        "Equipment health here generally centers on storage environment control and on handling aids such as scales, scanners, and material movers being kept calibrated and functional.",
        "Common wear or risk points include drifting scale calibration, failing climate or humidity control, and degraded label or barcode legibility over time.",
        "Downtime risk is typically indirect: if storage conditions or identification tools fail, material may be mis-staged or compromised, stalling everything downstream.",
        "Maintenance concepts here are illustrative and not tied to real equipment telemetry in this prototype."
      ]
    },
    "documentation": {
      "headline": "Lot records and traceability origin point",
      "points": [
        "This station is generally where the traveler or batch record begins, linking each incoming lot to a unique identifier for downstream traceability.",
        "Records commonly captured include lot numbers, supplier and certificate references, received quantities, acceptance status, and storage location.",
        "Outputs can feed a traceability report and the receiving section of a factory audit report or quality plan, establishing the material genealogy used later.",
        "All records shown here are illustrative prototype artifacts, not real production or audit data."
      ]
    },
    "rfq": {
      "headline": "Material inputs that help scope outputs",
      "points": [
        "For this station, customer-relevant inputs generally include the intended elastomer family or performance targets, any required material grades or approved suppliers, and any incoming-inspection or documentation expectations.",
        "Open technical questions often include whether specific material traceability levels or supplier documentation are required, and whether customer-approved or restricted materials apply; these typically require technical review.",
        "This feeds an RFQ package as one output among several (factory audit report, quality plan, bill of process, traceability report, technical review), not as the product's primary purpose.",
        "Any cost or sourcing implications are preliminary and would need confirmation before any firm quote."
      ]
    }
  },
  "weighing-station": {
    "process": {
      "headline": "Compound recipe becomes a weighed batch kit",
      "points": [
        "Input is generally a released compound specification plus staged raw materials; output is typically a reconciled batch kit ready for mixing.",
        "Route logic commonly branches by compound family and batch size, so the ingredient set and staging order may differ per recipe.",
        "Each ingredient is measured against its target, with over/under tolerance checks that often gate whether the kit proceeds.",
        "This is a simulated weighing step in the virtual factory, not a feed from real scales or live batch systems."
      ]
    },
    "chemistry": {
      "headline": "Setting the proportions that govern later cure",
      "points": [
        "Conceptually the relative proportions assembled here help pre-determine how the compound will flow, build viscosity, and crosslink downstream.",
        "Curatives, accelerators, and reinforcing additives are generally kept as discrete components at this stage; no transformation has occurred yet.",
        "Small proportioning deviations may shift crosslink density or cure behavior later, which is why reconciliation generally matters before mixing.",
        "Exact loadings, ratios, and cure conditions are intentionally withheld and would require technical review for any real compound."
      ]
    },
    "quality": {
      "headline": "First-pass tolerance and identity checkpoint",
      "points": [
        "This is commonly the earliest checkpoint where weighed quantities are verified against targets within an allowed tolerance band.",
        "Generic checks may include ingredient identity confirmation, scale verification, and a two-person or independent reconciliation review.",
        "Defects typically caught here include wrong material, missing or duplicated additions, and out-of-tolerance weights before they reach the mixer.",
        "Catching errors at this station is generally cheaper than detecting them as cured-property failures later."
      ]
    },
    "supply-chain": {
      "headline": "Depends on staged, identified, in-spec materials",
      "points": [
        "Relies on upstream raw materials being correctly received, identified, and released, so lot identity and availability are key dependencies.",
        "Equipment dependency centers on calibrated weighing devices and a controlled staging area; vendor scope often includes scale calibration services.",
        "Documentation dependency includes the compound specification and incoming material records that link each addition to a lot.",
        "Substitutions or lot changes generally require review, since they can ripple into mixing and cured properties."
      ]
    },
    "people": {
      "headline": "Compounder and verifier own the kit",
      "points": [
        "A weighing operator or compounder typically assembles the kit while a second person or supervisor often performs independent verification.",
        "They commonly monitor target-versus-actual weights, ingredient identity, and that the addition sequence matches the recipe.",
        "Key decisions include accepting a weight within tolerance, re-weighing, or holding a kit for review when something does not reconcile.",
        "Roles are described conceptually and observed at a safe distance; this prototype depicts no hands-on hazardous handling."
      ]
    },
    "maintenance": {
      "headline": "Scale accuracy is the critical asset",
      "points": [
        "Equipment health here generally hinges on weighing-device accuracy, so calibration drift is the primary concern.",
        "Common wear and fault points may include load cells, worn pans or fixtures, dust ingress, and environmental vibration affecting readings.",
        "Downtime risk is typically a scale out of calibration or out of service, which can stall every batch that routes through this station.",
        "Preventive routines often include scheduled calibration checks and verification weights, modeled conceptually in this prototype."
      ]
    },
    "documentation": {
      "headline": "Batch ticket and ingredient traceability",
      "points": [
        "The main output is generally a batch ticket or traveler entry recording each ingredient, its target, and its actual weight.",
        "Records here typically establish lot-to-batch traceability by linking material lots to the kit and downstream batch.",
        "Reconciliation notes and operator/verifier sign-offs commonly form part of the batch record for later review.",
        "These are illustrative generated outputs in the virtual factory, not entries in a live quality or ERP system."
      ]
    },
    "rfq": {
      "headline": "What the compound needs, what stays open",
      "points": [
        "Useful customer inputs generally include the target compound or performance intent, batch-size expectations, and any traceability requirements.",
        "Open technical questions often cover required weighing tolerance, lot-control granularity, and documentation depth for the application.",
        "Whether specific material identity or substitution constraints apply usually remains to be confirmed via technical review.",
        "No formulation, loadings, or pricing are provided here; this layer frames the questions, not commitments."
      ]
    }
  },
  "internal-mixer": {
    "process": {
      "headline": "Intensive mixing forms the uniform compound",
      "points": [
        "Weighed raw materials (polymer bales plus filler, additive, and processing categories) generally enter as discrete, segregated charges and leave as a single, more homogeneous masterbatch or compound.",
        "Rotors and a movable ram apply intensive shear inside a closed chamber, generally to disperse and distribute fillers and additives into the polymer.",
        "Curatives are often added later (downstream or in a separate stage) rather than in the most intensive step, commonly to reduce the risk of premature reaction.",
        "Route logic typically depends on the polymer family and product form: harder, higher-loaded compounds commonly require more mixing energy. This remains a preliminary, conceptual depiction."
      ]
    },
    "chemistry": {
      "headline": "Dispersion sets up the compound, not cure",
      "points": [
        "This step is generally about physical incorporation: wetting and breaking down filler agglomerates so they distribute through the polymer, rather than chemical crosslinking.",
        "Mixing typically raises compound temperature through shear, so processes are commonly managed to incorporate the network's ingredients without triggering early reaction (often called scorch).",
        "Crosslink chemistry (the cure system that later forms the rubber network) is conceptually staged so it stays dormant here and activates downstream during vulcanization.",
        "Compound behavior such as flow, tack, and later cure response is shaped here, but specific systems require technical review and are not specified."
      ]
    },
    "quality": {
      "headline": "First compound-integrity checkpoint",
      "points": [
        "This is typically the earliest point to judge whether ingredients are uniformly combined, often via sampled batch testing rather than full inspection.",
        "Commonly named generic checks include dispersion assessment, a rheology or cure-behavior test, a hardness indication, and a density or specific-gravity verification.",
        "Defects often caught or originating here include poor dispersion, undermixing or overmixing, contamination, and signs of premature reaction (scorch).",
        "All checks are conceptual and preliminary. Pass or fail thresholds would require technical review and are not defined in this prototype."
      ]
    },
    "supply-chain": {
      "headline": "Depends on verified incoming materials",
      "points": [
        "Output quality generally depends on correctly identified and weighed incoming materials, so this station tends to inherit any upstream supply or labeling issues.",
        "Equipment dependency centers on the internal (Banbury-type) mixer itself plus its drive and temperature-control systems, typically sourced from specialized OEMs.",
        "Documentation dependency commonly includes incoming material identity and lot references so each batch can be linked back to its raw inputs.",
        "Vendor substitutions or grade changes upstream may shift mixing behavior and often warrant re-qualification, noted here as a roadmap consideration."
      ]
    },
    "people": {
      "headline": "Mixing operator monitors from the panel",
      "points": [
        "A mixing operator or compounder is typically the primary role, working from the control station at a safe observation distance, not inside the machine.",
        "They generally monitor cycle progress, power or energy draw, and temperature trends as indirect signals that mixing is proceeding as intended.",
        "Decisions often include when a batch appears adequately mixed, whether to hold or re-sample, and whether to flag a batch for review.",
        "A process or quality engineer is commonly consulted for judgment calls. Hazardous manual intervention is out of scope and not depicted."
      ]
    },
    "maintenance": {
      "headline": "Shear-exposed surfaces are the wear points",
      "points": [
        "Equipment health here generally centers on surfaces exposed to high shear and abrasion, commonly the rotors, chamber walls, ram, and seals.",
        "Wear or seal degradation may gradually change how energy transfers into the batch, which can affect dispersion consistency over time.",
        "Cooling and temperature-control circuits are typical attention points, since loss of control may compromise batches.",
        "Downtime risk is often significant because this station is commonly a single shared chokepoint. Condition monitoring is a future, not-yet-connected capability in this prototype."
      ]
    },
    "documentation": {
      "headline": "Batch record begins the digital thread",
      "points": [
        "This station typically opens or extends the batch record (traveler), capturing which material lots and quantities went into the compound.",
        "Conceptual outputs may include a batch genealogy entry linking inputs to a compound lot, plus any sampled test results recorded against that lot.",
        "These records feed traceability reports and the bill-of-process view as preliminary, illustrative artifacts.",
        "In this prototype the records are modeled, not auto-captured from real equipment. Live data capture is explicitly future work."
      ]
    },
    "rfq": {
      "headline": "Compound intent drives mixing questions",
      "points": [
        "Useful customer inputs generally include the target polymer family, intended product form, and the service or environment the part must withstand, which shape compound design.",
        "Open technical questions often include required performance bands (for example a hardness range or key resistances) that may influence loading and mixing approach.",
        "Whether the customer has an existing approved compound or needs one developed is commonly a gating question and usually requires technical review.",
        "Outputs at this stage stay conceptual: a preliminary compounding view within an RFQ package or bill of process, and never a formulation, phr, or settings."
      ]
    }
  },
  "two-roll-mill": {
    "process": {
      "headline": "Open milling conditions and blends the band",
      "points": [
        "The hot, uncured masterbatch from the internal mixer typically enters here and leaves as a more uniform, cooled, continuous blanket of still-uncured compound ready to feed the calender.",
        "On counter-rotating rolls the compound is generally sheared and folded by the roll action so it bands onto one roll, sheds heat toward a stable working state, and accepts the reactive cure package into a more even distribution.",
        "Route logic commonly places open, lower-temperature mechanical working here precisely because heat can escape: this is where curatives are generally blended in, conceptually distinct from the calender, which mainly forms gauge.",
        "The defining transformation is conditioning and homogenization, not shaping; the material typically stays soft, reworkable, and uncured throughout."
      ]
    },
    "chemistry": {
      "headline": "Curatives worked in while staying uncured",
      "points": [
        "The compound is generally homogenized in the open air, where heat can dissipate, so the reactive cure system can be distributed more evenly without triggering premature reaction (scorch).",
        "Conceptually the crosslink network has not yet formed: the cure package is positioned for later activation, and the material generally remains plastic and reworkable here.",
        "Even incorporation of curatives now is what typically sets up more uniform crosslinking downstream; poor distribution here often shows up as uneven cure later.",
        "No temperatures, times, or loadings are given at this educational level; the key idea is lower-temperature conditioning that generally keeps the compound inert until the cure step."
      ]
    },
    "quality": {
      "headline": "Homogeneity and contamination checkpoint",
      "points": [
        "A common in-process check confirms the arriving compound carries its batch identity and a released-from-mixing status before the mill runs, with machine setup controlled internally and not described here.",
        "Operators typically assess the milled band visually for consistent color and surface, freedom from obvious contamination or porosity, and expected banding behavior; an indicative in-process consistency sense-check may be used against internal expectations.",
        "Defects often surfaced here include uneven cure-package distribution, air entrapment in the band, contamination carried over at changeover, and poor banding or sticking to the wrong roll.",
        "Any reported cured property generally requires testing to the applicable standard at an accredited or qualified lab; checks here are indicative, not certifications."
      ]
    },
    "supply-chain": {
      "headline": "Curative package and roll dependency",
      "points": [
        "This station typically depends on the separately portioned cure package plus the released masterbatch from mixing; both would normally carry valid lot identity to preserve traceability.",
        "Equipment dependency centers conceptually on the mill rolls and their temperature-control and gap systems; roll condition and changeover cleanliness are commonly treated as prerequisites for a clean band.",
        "Documentation dependency generally includes the batch ticket, the consumed compound and curative lot references, and changeover cleaning records that help prevent cross-contamination.",
        "Any vendor or grade references for curatives are illustrative and commonly require verification before sourcing."
      ]
    },
    "people": {
      "headline": "Mill operator monitors band from guarded panel",
      "points": [
        "A mill and calender operator role typically oversees this stage, confirming the band looks consistent, bands correctly, and is tracked with the right batch identity.",
        "They commonly monitor sheet appearance, temperature stability, and any displayed status, escalating gauge drift, contamination, or poor homogeneity rather than reaching toward the rolls to correct it by hand.",
        "Decisions here generally involve whether milled stock appears uniform enough to advance, or whether it should be set aside for review or remilling.",
        "Safety framing keeps the role at a guarded position well clear of the in-running nip, which is treated as a serious pinch hazard, never as a manual operation."
      ]
    },
    "maintenance": {
      "headline": "Roll surface and gap consistency upkeep",
      "points": [
        "Equipment health here broadly concerns the condition and alignment of the two rolls and the systems controlling their temperature and spacing, considered conceptually.",
        "Likely wear points commonly include the roll surfaces themselves, the supporting bearings, and the drive and gap-adjustment hardware, all of which can degrade under sustained load.",
        "Inspection emphasis is generally on confirming roll surfaces and bearing condition appear sound and temperatures read stable, observed from a guarded position clear of the nip.",
        "Downtime risk is often moderate to high since the mill commonly sits on the critical path; bearing or surface problems may require it to be taken out of service."
      ]
    },
    "documentation": {
      "headline": "Milled-stock identity carried forward",
      "points": [
        "Outputs here typically include continuity of the mixed-compound-batch record, with the milled stock tagged or routed so its batch identity is preserved into calendering.",
        "Records commonly capture the consumed compound and curative lots, an equipment reference, operator or shift, and any changeover cleaning, feeding the broader traceability and bill-of-process outputs.",
        "Where used, a retained milled sample may be noted for downstream property verification, with the reminder that reported cured properties require accredited or qualified lab testing.",
        "All identifiers are illustrative; this is a virtual-factory prototype, not a record drawn from real production, sensors, or quality systems."
      ]
    },
    "rfq": {
      "headline": "Compound family and curative assumptions to confirm",
      "points": [
        "As one possible output, a preliminary quote view generally needs the customer's target compound family and the property envelope expected, since these shape how the band is conditioned and which curative approach is assumed.",
        "Mill throughput and homogenization behavior commonly inform yield, scrap, and lead-time assumptions that an estimate may reflect, all flagged as illustrative planning figures.",
        "Open technical questions often include the actual cure system, acceptable consistency tolerances, and changeover frequency, which typically require technical review against the factory's real capability.",
        "Exact recipes, settings, and curative loadings are intentionally out of scope here and would require the factory's controlled procedures and verification."
      ]
    }
  },
  "calender": {
    "process": {
      "headline": "Forming compound into precise-gauge sheet",
      "points": [
        "Warm, plasticized compound enters and exits as a continuous sheet of controlled gauge, formed in the nip between heated rolls, generally produced as standalone sheet or applied onto a fabric ply.",
        "Route logic typically depends on the downstream form needed: a single calendered sheet may feed building or molding, while frictioning or topping onto fabric supports coated-fabric and reinforced-product routes.",
        "The input is commonly a milled or strip-fed compound and the output is a dimensionally consistent web; gauge and surface finish are generally set here rather than corrected later.",
        "Crosslinking is not intended at this station; the sheet generally leaves uncured and shapeable, with final properties developed downstream."
      ]
    },
    "chemistry": {
      "headline": "Shaping uncured compound, no crosslinking",
      "points": [
        "The compound is generally worked while warm and plastic so it flows into a thin, uniform web; this is a physical forming step, not a curing step.",
        "Heat and shear in the nip typically reduce viscosity enough for smooth spreading, while the crosslink network is deliberately left undeveloped for later cure.",
        "Filler and additive dispersion carried from mixing largely governs how evenly the sheet forms; poorly dispersed compound may show surface or thickness irregularity.",
        "When coating fabric, adhesion concepts (wetting and mechanical keying of compound into the ply) matter, and bond quality often requires technical review rather than assumption."
      ]
    },
    "quality": {
      "headline": "Gauge and surface inspection point",
      "points": [
        "This is commonly a dimensional checkpoint where sheet thickness, width, and surface continuity are monitored, often using inline gauge measurement concepts alongside periodic manual checks.",
        "Generically named tests may include thickness/gauge measurement, visual surface inspection, and ply or coat-weight checks for frictioned fabric.",
        "Defects typically caught here include gauge variation, trapped air or blisters, pin holes, scorch marks, edge irregularity, and uneven fabric coverage.",
        "Acceptance against a target generally requires a defined specification; out-of-band readings often trigger a hold pending technical review."
      ]
    },
    "supply-chain": {
      "headline": "Depends on compound, fabric, roll readiness",
      "points": [
        "Primary dependency is an in-spec mixed compound arriving in usable condition; upstream mixing or milling variability often propagates into sheet quality here.",
        "Reinforced routes add a fabric or ply dependency, where vendor consistency in weave, width, and finish can affect coating behavior.",
        "Equipment dependency centers on the calender rolls and their drive and heating systems; roll surface condition is generally critical to gauge.",
        "Documentation dependency typically includes the compound batch record and any fabric certificate of analysis so the formed sheet stays traceable to its inputs."
      ]
    },
    "people": {
      "headline": "Operator monitors gauge and feed",
      "points": [
        "A calender operator or line technician generally oversees this station, monitoring sheet gauge, surface appearance, feed consistency, and roll behavior from a safe distance.",
        "Typical decisions include adjusting setpoints within approved ranges, flagging gauge drift, and calling a hold when surface or thickness defects appear.",
        "A quality or process engineer is often consulted for first-piece approval and for judging borderline sheet against specification.",
        "Operation near rotating heated rolls is inherently hazardous; in this prototype people are shown supervising and deciding, never performing manual operation inside the nip."
      ]
    },
    "maintenance": {
      "headline": "Roll condition drives sheet quality",
      "points": [
        "Equipment health here centers on roll surface integrity, roll alignment and gap control, and the condition of bearings, drives, and heating circuits.",
        "Common wear points generally include roll surface marks or scoring, bearing wear, and drift in temperature-control elements, any of which can show up as gauge or finish defects.",
        "Downtime risks typically involve roll resurfacing or regrind, drive or gearbox issues, and loss of even heating across the roll face.",
        "Condition concepts such as periodic roll inspection and temperature-uniformity checks are commonly used; specifics generally require the equipment maintenance plan."
      ]
    },
    "documentation": {
      "headline": "Sheet record links to batch",
      "points": [
        "The traveler entry here generally records that a given compound batch was formed into sheet, capturing target versus observed gauge and any operator notes.",
        "Batch records commonly carry the inline gauge log, surface inspection results, and, for reinforced sheet, the fabric lot reference for traceability.",
        "Outputs this station can feed include a bill-of-process step, a quality-plan checkpoint entry, and a traceability link from finished sheet back to compound and fabric lots.",
        "These records are prototype-style illustrative outputs, not live MES or production-system data."
      ]
    },
    "rfq": {
      "headline": "Sheet form questions for the customer",
      "points": [
        "Useful customer inputs generally include the intended sheet form (standalone versus fabric-reinforced), target gauge and tolerance, required width, and surface-finish expectations.",
        "Open technical questions often cover whether a fabric ply is required, what reinforcement it uses, and how tight the gauge tolerance must be.",
        "Any stated dimensional or finish targets here are typically preliminary and would need technical review before being treated as a commitment.",
        "This station contributes one slice of an RFQ package; sheet-forming feasibility commonly informs but does not by itself set scope, lead time, or cost."
      ]
    }
  },
  "vulcanization": {
    "process": {
      "headline": "Heat crosslinks blanket into cured rubber",
      "points": [
        "This station typically takes a shaped but uncured compound (a plastic, formable blanket) and applies heat to convert it into a set, elastic cured part.",
        "Input state is generally green stock that can still flow or deform; output state is commonly a dimensionally stable elastomer that holds its shape under load.",
        "Route logic often branches on geometry and volume: discrete or molded parts may run through batch cure cycles, while continuous profiles or sheet may run a continuous line. Final routing requires technical review.",
        "In this prototype the flow is illustrated conceptually only. Actual cycle selection depends on part design and is not represented as live equipment data."
      ]
    },
    "chemistry": {
      "headline": "Crosslink network locks elastic behavior",
      "points": [
        "The transformation here is generally the formation of a crosslink network: previously mobile polymer chains become tied together at points, which is what turns a plastic blanket into an elastic solid.",
        "Before cure the compound typically behaves plastically and can be reshaped; after cure it commonly behaves elastically, recovering its shape after deformation.",
        "The degree of crosslinking strongly influences final properties (hardness, set, elasticity), so cure state is usually treated as a key conceptual variable rather than a single fixed condition.",
        "This layer is intentionally conceptual. No temperatures, times, phr, or recipe details are provided; cure development is described as a phenomenon, not a setpoint."
      ]
    },
    "quality": {
      "headline": "Cure verification gate before finishing",
      "points": [
        "This is generally a critical quality checkpoint: the part is checked to confirm it has reached an acceptable cured state rather than remaining under or over cured.",
        "Tests named generically may include hardness checks, a cure-state or rheology-style assessment on representative samples, dimensional checks, and visual inspection of the surface.",
        "Defects commonly caught here can include undercure or overcure indications, surface blistering or porosity, scorch-related issues carried in from upstream, and shape or dimensional deviation after cure.",
        "Any pass or fail decision here typically requires technical review against the part's own specification, which is not encoded in this prototype."
      ]
    },
    "supply-chain": {
      "headline": "Energy, equipment, and process records",
      "points": [
        "The main raw-material dependency is upstream: a correctly mixed and shaped green compound delivered in spec, since this station cannot correct a flawed formulation.",
        "Equipment dependency is significant and commonly includes the heat source (autoclave or continuous line), pressure and steam or thermal-fluid utilities, and supporting controls and instrumentation.",
        "Documentation dependency typically includes the intended process window and any supplier or customer technical requirements, which generally arrive as controlled documents subject to review.",
        "Vendor reliability for energy and equipment service tends to be a continuity concern, though in this prototype no live utility or vendor feeds are connected."
      ]
    },
    "people": {
      "headline": "Operators and engineers monitor cure",
      "points": [
        "Roles generally involved include a cure or process operator monitoring the run and a process engineer who owns the cure approach and reviews results.",
        "They typically monitor cycle progress indicators, loading and unloading sequencing, and sample test outcomes, watching for drift away from the intended window.",
        "Decisions commonly made here include accepting a batch, holding for review, or flagging a cycle as suspect; these are routed to technical review rather than made arbitrarily.",
        "All monitoring is described at a safe distance. This prototype does not depict or instruct any hazardous manual operation near hot or pressurized equipment."
      ]
    },
    "maintenance": {
      "headline": "Heat and pressure equipment wear",
      "points": [
        "Equipment health here is generally a priority because heat and pressure cycling tend to stress seals, doors or closures, heating elements or steam paths, and instrumentation over time.",
        "Common wear points may include door or vessel seals, sensors and gauges that can drift, and continuous-line surfaces and drives subject to repeated thermal loading.",
        "Downtime risk is typically high impact: a heat-source or utility failure can stall throughput and put in-process material at risk, so preventive attention is usually emphasized.",
        "In this prototype, equipment health is conceptual. No real condition-monitoring or sensor data is connected; predictive maintenance is a future capability."
      ]
    },
    "documentation": {
      "headline": "Cure records feed batch traceability",
      "points": [
        "Outputs generated here generally include a cure or cycle record tied to the batch traveler, capturing that a cure step occurred and which lot it applied to.",
        "Traceability typically links the cured lot back to its green compound and forward to finishing, supporting a batch-record and bill-of-process view.",
        "Reports this station can contribute to may include a quality-plan entry for cure verification and a traceability report segment, available as one of several prototype outputs.",
        "These records are illustrative in this prototype and are not synced to a real MES, ERP, or certified quality system; that integration is roadmap."
      ]
    },
    "rfq": {
      "headline": "Cure expectations and acceptance criteria",
      "points": [
        "Customer information useful for this station generally includes the intended service conditions and any required cured-property targets (for example hardness or set expectations) stated at a high level.",
        "Helpful inputs may also include required tests or acceptance criteria the customer expects at cure, and any applicable standard references they work to.",
        "Open technical questions often remain around the cure approach and acceptance limits for the specific compound and geometry, which typically require technical review.",
        "An RFQ package is only one of several outputs this station can feed (alongside a factory audit report, quality plan, bill of process, and traceability report), with cure details kept preliminary until reviewed."
      ]
    }
  },
  "cooling": {
    "process": {
      "headline": "Cured sheet cools and stabilizes",
      "points": [
        "Cured sheet generally enters hot and dimensionally unsettled, and commonly leaves cooled toward ambient with geometry stabilized enough for handling and downstream work.",
        "Cool-down is typically controlled and gradual so the sheet relaxes evenly rather than locking in distortion, with work-in-progress staged on racks or buffers.",
        "Route logic commonly branches: stabilized stock advances to inspection or finishing, while pieces flagged for thermal or dimensional concern may be held for technical review.",
        "In this prototype the staging and routing are simulated, not read from a live line; actual conveyor speeds and cooling-line settings would require technical review for a real factory."
      ]
    },
    "chemistry": {
      "headline": "Network sets as the sheet relaxes",
      "points": [
        "The crosslinked network formed during cure generally continues to settle as the material cools, with residual reaction effects often tapering off rather than stopping instantly.",
        "Cooling typically reduces internal stress and lets the compound contract toward its stable dimensions, since rubber commonly shrinks as it leaves elevated temperature.",
        "Behavior here is largely physical (thermal contraction, stress relaxation) rather than new chemistry, though the established network gives the sheet its final elastic character.",
        "Conceptually, uneven cooling can leave locked-in stress; this is described qualitatively only, and no temperatures, times, or formulation details are implied."
      ]
    },
    "quality": {
      "headline": "Dimensional and surface stability check",
      "points": [
        "This is commonly a stabilization checkpoint where the cooled sheet is assessed for flatness, dimensional settling, and visible surface condition before it moves on.",
        "Generically named checks may include dimensional or thickness measurement, flatness or warp observation, and surface or visual inspection once the part is stable enough to handle.",
        "Defects often surfaced here include warping, shrinkage outside expected bounds, blistering revealed on cool-down, and distortion from uneven staging.",
        "Findings are preliminary in this prototype and would typically need confirmation against the customer specification and technical review."
      ]
    },
    "supply-chain": {
      "headline": "Equipment, racking, and record dependencies",
      "points": [
        "Cooling depends less on raw materials and more on equipment and infrastructure: cooling conveyors or lines, racks, buffers, and a controlled staging area.",
        "Vendor and equipment dependencies commonly include the cooling-line supplier and ambient or airflow controls; spare components support uninterrupted staging.",
        "Documentation dependency centers on the traveler and batch identity following the sheet, so stabilized stock stays linked to its cure history.",
        "Capacity of the staging buffer is a planning dependency, since work-in-progress accumulating here can constrain upstream throughput."
      ]
    },
    "people": {
      "headline": "Operator monitors staging and readiness",
      "points": [
        "A line operator or material handler is typically involved, monitoring the staging area from a safe distance and tracking which lots are ready to advance.",
        "They commonly watch for visible distortion, confirm pieces have settled and cooled enough to handle safely, and keep work-in-progress organized and identified.",
        "Decisions are largely flow decisions: when a lot is stable enough to release downstream, or when something looks off and should be held for review.",
        "Supervisors or quality staff may be consulted on hold or release calls; no hazardous handling of hot surfaces or moving equipment is implied here."
      ]
    },
    "maintenance": {
      "headline": "Cooling-line and staging equipment health",
      "points": [
        "Equipment health here generally covers cooling conveyors, airflow or circulation components, and the integrity of racks and buffers.",
        "Common wear points may include conveyor belts and rollers, fans or blowers, and rack hardware that sees repeated loading.",
        "Downtime risks often involve airflow or conveyor stoppage, which can back up work-in-progress and disrupt upstream flow.",
        "Preventive checks and cleanliness of the staging area typically support consistent stabilization; specifics would require a real maintenance plan."
      ]
    },
    "documentation": {
      "headline": "Traveler updated as stock stabilizes",
      "points": [
        "The traveler or batch record is typically updated to mark cool-down and staging complete, preserving the link from cure to the next operation.",
        "Traceability outputs commonly include lot identity, stabilization status, and any hold or release note recorded at this station.",
        "Generated outputs may feed a traceability report and a bill-of-process step entry, plus inputs to a later quality plan or factory audit report.",
        "In this prototype these records are illustrative; tying them to real batch and quality systems is roadmap, not a live connection today."
      ]
    },
    "rfq": {
      "headline": "Stability needs and open questions",
      "points": [
        "Useful customer information includes target dimensions and tolerances, required flatness, and how the parts will be packed, stored, or handled after cooling.",
        "Knowing downstream expectations (immediate finishing versus storage) helps frame staging and dwell needs at a conceptual level.",
        "Open technical questions often include acceptable dimensional drift after stabilization and any warp limits, which generally require technical review.",
        "As one input among several outputs (RFQ package, quality plan, traveler, factory audit report), this station mainly informs handling, staging, and dimensional-stability expectations."
      ]
    }
  },
  "trimming-slitting": {
    "process": {
      "headline": "Squaring edges, slitting to finished width",
      "points": [
        "Input is typically a cured, dimensionally settled sheet at production width; output is a finished-width strip or panel with clean, squared edges.",
        "Edges are commonly trimmed first to remove the rough selvage, then the sheet is slit to the target width, sometimes into several strips in one pass.",
        "Route logic generally depends on the ordered width: full-width orders may skip slitting, while multi-strip orders set the number and spacing of cuts.",
        "An edge-quality check commonly gates this station, so passing sheets typically move to inspection while edge defects may route to rework or scrap."
      ]
    },
    "chemistry": {
      "headline": "Crosslink network complete, only geometry changes",
      "points": [
        "The crosslink network is generally already set, so cutting typically does not alter the cured elastic behaviour of the material.",
        "This is mechanical finishing: the polymer chains commonly stay tied into one connected network and no further reaction is intended here.",
        "A freshly cut edge exposes interior compound, which typically behaves like the bulk when the cure is reasonably uniform through thickness.",
        "Any residual dimensional settling from upstream is commonly minor by this point and is not a chemical change."
      ]
    },
    "quality": {
      "headline": "Edge-quality and finished-width checkpoint",
      "points": [
        "This is often the dimensional gate for finished width, with checks against the target width and the straightness of the cut.",
        "Typical generic checks may include visual edge inspection, width measurement, and squareness or edge-straightness verification.",
        "Defects often caught here include ragged or nicked edges, width out of tolerance, taper or wander along the length, and edge cracks.",
        "Borderline edge cosmetics generally require technical review against agreed acceptance criteria before release."
      ]
    },
    "supply-chain": {
      "headline": "Blade and tooling driven, low material dependency",
      "points": [
        "Raw-material dependency is generally minimal here since the compound is already cured; the main consumables are typically cutting blades or knives.",
        "Equipment dependency commonly centres on the slitter or trimming unit, its blade holders, and accurate width-setting guides.",
        "Documentation dependency generally includes the customer width specification and the edge-quality acceptance criteria.",
        "Blade supply and resharpening cadence may become a planning factor when run volumes are high."
      ]
    },
    "people": {
      "headline": "Operator monitors edge quality and width",
      "points": [
        "A finishing or slitting operator role is typically involved, monitoring edge appearance and confirming the cut width against the spec.",
        "From a safe distance and with guards in place, they generally watch for blade wear signs, edge raggedness, and any drift in width across the run.",
        "Decisions commonly include when to accept, when to flag for rework, and when to call for a blade change or width reset.",
        "Hazardous interaction with moving blades or nip points is out of scope here; the focus is observation and quality judgement, not manual cutting near rotating or sharp equipment."
      ]
    },
    "maintenance": {
      "headline": "Blade sharpness is the main wear point",
      "points": [
        "Equipment health here generally hinges on blade or knife condition, since dull edges tend to tear rather than cut cleanly.",
        "Common wear points may include cutting edges, blade bearings or holders, and the guides that hold width accuracy.",
        "Downtime risk often comes from blade changes, edge-quality drift, or misaligned guides producing off-width product.",
        "A preventive blade inspection and replacement cadence typically reduces the chance of a defect run reaching inspection."
      ]
    },
    "documentation": {
      "headline": "Finished-width record on the traveler",
      "points": [
        "The traveler or batch record commonly captures the finished width achieved and the edge-quality check result at this step.",
        "Traceability generally carries the batch identity forward so the trimmed strip stays linked to its compound and cure history.",
        "Possible outputs may feed a quality plan entry or a dimensional line item in a downstream factory or traceability report.",
        "Any rework or scrap decision at the edge check is typically logged for the batch record."
      ]
    },
    "rfq": {
      "headline": "Finished width and edge criteria needed",
      "points": [
        "Customer info generally needed includes the required finished width and tolerance, plus how the part will be supplied (strip, panel, or full width).",
        "Edge-quality expectations and any cosmetic acceptance criteria typically need to be stated, since these drive the gate here.",
        "Open technical questions often include whether slit edges must be sealed or simply clean, and any straightness requirement.",
        "Final width and edge acceptance commonly require technical review against the application, so figures here remain preliminary."
      ]
    }
  },
  "inspection": {
    "process": {
      "headline": "Cured parts checked, accepted or held",
      "points": [
        "Conceptually, parts arriving from upstream curing move from a cured-but-unverified state to a dispositioned state of accept, hold, or rework candidate.",
        "Route logic is typically a gate: parts passing conceptual checks generally continue downstream, while flagged units are commonly diverted to a hold area pending technical review.",
        "This station often samples or screens for hardness, thickness, visual, and dimensional attributes rather than altering the part.",
        "Disposition here may branch back to earlier stations (rework or scrap) or forward to packaging, depending on the deviation observed."
      ]
    },
    "chemistry": {
      "headline": "Verifying the crosslinked network indirectly",
      "points": [
        "By inspection, the rubber is generally already vulcanized, meaning the polymer chains have commonly formed a crosslinked network that gives the part its elastic, set shape.",
        "Inspection does not transform the material further; it typically infers cure state indirectly, since properties like hardness often correlate with how fully the network developed.",
        "Under- or over-crosslinked regions may surface here as softness, excessive stiffness, or surface tackiness, all read as symptoms rather than measured chemistry.",
        "Any chemistry judgment at this station remains preliminary and conceptual, and confirming actual crosslink quality usually requires lab-level methods and technical review."
      ]
    },
    "quality": {
      "headline": "Primary accept-or-hold quality gate",
      "points": [
        "This is generally the dedicated quality checkpoint where conceptual hardness, thickness, visual, and dimensional checks converge on a clear accept or hold call.",
        "Generically named methods may include durometer-style hardness checks, thickness gauging, visual surface review, and dimensional measurement against a drawing.",
        "Defects commonly caught here often include flash, surface blemishes, voids or blisters, dimensional drift, and signs of incomplete or uneven cure.",
        "Results feed a pass or hold disposition, and borderline cases typically escalate for technical review rather than auto-passing."
      ]
    },
    "supply-chain": {
      "headline": "Depends on gauges, specs, and standards",
      "points": [
        "This station typically depends less on raw material and more on calibrated inspection equipment (hardness testers, gauges, measuring tools) and their calibration status.",
        "Documentation dependency is significant: inspection usually needs the part drawing, the acceptance criteria, and the relevant specification or standard reference to judge against.",
        "Vendor dependency commonly includes calibration service providers and gauge suppliers, since out-of-calibration equipment can invalidate results.",
        "Upstream traceability records (which batch, which cure run) are generally needed so a hold can be traced back to its source."
      ]
    },
    "people": {
      "headline": "Inspector dispositions parts at a distance",
      "points": [
        "A quality inspector or technician is typically the lead role here, working on cooled, handleable parts rather than hot or hazardous in-process material.",
        "They generally compare observed values against acceptance criteria and watch for visual defects, trends, and repeat patterns across a batch.",
        "The key decision is disposition: accept, hold, or flag for rework or scrap, with borderline calls usually escalated for technical review.",
        "Conceptually they may also signal upstream when a defect pattern suggests a process drift, supporting feedback rather than just sorting."
      ]
    },
    "maintenance": {
      "headline": "Gauge calibration is the health concept",
      "points": [
        "Equipment health here centers on inspection instruments staying within calibration, since drift commonly causes false accepts or false holds.",
        "Wear points typically include worn gauge anvils, damaged probe tips, and degraded reference standards or master samples.",
        "Downtime risk is generally a stalled inspection queue: if a key gauge is out of service or out of calibration, parts may back up awaiting disposition.",
        "Routine verification against masters and scheduled recalibration are commonly the safeguards, all conceptual in this prototype."
      ]
    },
    "documentation": {
      "headline": "Inspection records and disposition outputs",
      "points": [
        "This station typically generates the inspection record on the traveler, capturing checked attributes and the accept or hold disposition.",
        "Outputs may include a conceptual inspection report or quality plan entry, plus non-conformance notes when a part is held.",
        "Traceability is generally preserved by linking each result back to the batch and cure run, supporting later traceability reports.",
        "These records often feed downstream outputs such as a factory audit report or technical review summary, all illustrative in this prototype."
      ]
    },
    "rfq": {
      "headline": "Clarifying acceptance criteria for the part",
      "points": [
        "For this station, customer input commonly needed includes the inspection drawing, tolerance expectations, and any required hardness or dimensional acceptance criteria.",
        "Open technical questions often include which attributes are critical-to-function, what sampling level is expected, and how tight visual cosmetic standards must be.",
        "It generally helps to know whether the customer expects a formal inspection report or certificate of conformance as a deliverable.",
        "Any commitments on inspection scope remain preliminary here and typically require technical review against the final specification."
      ]
    }
  },
  "finished-roll": {
    "process": {
      "headline": "Winding, labeling, and lot linkage",
      "points": [
        "Input is generally the inspected, conforming, cured EPDM sheet; output is typically a tension-wound, labeled, packed roll prepared for storage and shipment.",
        "This is commonly the line's output station: form factor changes (flat sheet to cylindrical roll), but no material state change occurs here.",
        "Route logic is generally terminal: typically only sheet that passed final inspection arrives, so winding and identification are commonly the last actions before dispatch.",
        "A finished-unit identifier is generally assigned and linked back to the cure, sheet, compound, and raw lots that fed it."
      ]
    },
    "chemistry": {
      "headline": "No new chemistry, properties already fixed",
      "points": [
        "No material transformation occurs here; the cured crosslink network and final properties were generally set upstream at vulcanization.",
        "The roll's behavior is conceptually the sum of polymer choice, ingredient categories, processing, and cure state, not anything added at winding.",
        "Stable storage conditions typically help preserve cured properties over time, though long-term aging behavior usually requires technical review.",
        "The main chemistry-adjacent risk here is administrative, not material: a mislabel can disconnect a physically sound roll from its true compound and cure history."
      ]
    },
    "quality": {
      "headline": "Final identity and winding-quality check",
      "points": [
        "This is commonly the final-disposition checkpoint where the finished unit, its measured length, width, and gauge, and its accept/reject status are generally recorded against its ID.",
        "Generically named checks may include winding-quality inspection, dimensional verification, label and identity verification, and an outer visual/surface check.",
        "Defects often caught or confirmed here may include telescoping (sideways layer slippage), uneven winding tension, and mislabeled or untraceable rolls.",
        "Property tests (such as hardness or applicable property checks) are typically performed earlier at final inspection; results may often be confirmed against an accredited or qualified lab before release."
      ]
    },
    "supply-chain": {
      "headline": "Cores, packaging, and label data dependency",
      "points": [
        "Raw-material dependency here is generally consumables: winding cores, wrap or protective packaging, and labels rather than rubber ingredients.",
        "Equipment dependency centers on the winder and core-handling/lifting aids; vendor dependency typically shifts toward packaging and logistics partners.",
        "Documentation dependency is generally high: the accept/reject record, lot linkage, and shipment reference commonly need to be in place before the unit can move.",
        "Carrier, packing, and lot-grouping assumptions referenced at dispatch are illustrative and generally require verification before sourcing or quoting."
      ]
    },
    "people": {
      "headline": "Finishing and shipping operator oversight",
      "points": [
        "A finishing or shipping operator is typically involved, monitoring winding tension, roll build, and label accuracy from a safe distance.",
        "Quality or inspection staff often confirm the final disposition and that the unit ID correctly links back to its source lots.",
        "Key decisions are commonly release versus hold: accept, set aside for rework, or reject based on the inspection record.",
        "Heavy rotating rolls and core handling are generally involved; people commonly keep clear of winding nips and rely on guarding and proper lifting aids rather than hazardous manual operation."
      ]
    },
    "maintenance": {
      "headline": "Winder, core handling, and tension health",
      "points": [
        "Equipment health here generally centers on the winder drive, tension control, and core-handling/lifting aids.",
        "Common wear points may include tension-control components, winding nips and guides, and labeling or marking hardware.",
        "Downtime risks often relate to unstable winding tension (which can cause telescoping) or core-handling and lifting-aid faults that stall dispatch.",
        "Specific maintenance intervals and condition thresholds typically require the factory's own controlled procedures and technical review."
      ]
    },
    "documentation": {
      "headline": "Finished-unit ID and traceability closeout",
      "points": [
        "This station typically generates the finished-unit/roll ID, the lowest-level serialized handle a customer or shipment usually references (for example, an illustrative ROLL-2026-0034-A).",
        "From that ID a single scan should generally let the factory walk back through cure, sheet, compound, and raw lots, supporting recall and warranty traceability.",
        "Outputs may include the final inspection/disposition record and the shipment/dispatch document that closes the loop between what was made and what the customer received.",
        "These records can feed a traceability report or factory-audit output; yields and unit definitions here are illustrative planning figures and generally require review against real production data."
      ]
    },
    "rfq": {
      "headline": "Finished-unit definition and dispatch terms",
      "points": [
        "Customer info needed here generally includes the finished-unit definition: roll length, width, gauge, and the quantity or counts being considered, since these are among what an RFQ package output ultimately prices.",
        "Packaging, labeling, and marking requirements are commonly needed, as they may affect a quote-ready output and dispatch handling.",
        "Open technical questions often include delivery, incoterm, lot-grouping, and traceability-documentation expectations, which generally require verification before quoting.",
        "Finished-unit dimensions and yields stated here are preliminary planning assumptions and typically require technical review before any binding commitment."
      ]
    }
  }
};
