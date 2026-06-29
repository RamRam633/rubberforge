import type { CapabilityChain } from "@/types/factoryIntel";

export const capabilityChains: CapabilityChain[] = [
  {
    "id": "chain-epdm-sheet-weather",
    "materialId": "epdm",
    "materialLabel": "EPDM (ethylene propylene diene monomer)",
    "processes": [
      "Compound intake and lot review (incoming material typically checked against a supplier datasheet, requires verification before sourcing)",
      "Internal mixing / mill warm-up to soften the compound",
      "Calendering into continuous sheet of the target thickness",
      "Vulcanization (commonly continuous or autoclave cure, parameters not specified here)",
      "Trim, inspect, and roll-up for stock or conversion"
    ],
    "equipment": [
      "Internal mixer (e.g. Banbury-type, illustrative example, requires verification before sourcing)",
      "Two-roll mill",
      "Calender (multi-roll)",
      "Vulcanizing line or autoclave",
      "Thickness gauge and inspection table"
    ],
    "products": [
      "rubber-sheet",
      "rubber-rolls",
      "high-temp-sheet"
    ],
    "tests": [
      "hardness",
      "tensile-strength",
      "ozone-weathering",
      "heat-aging",
      "thickness"
    ],
    "quoteQuestions": [
      "Service environment (outdoor, ozone, UV, steam) so the RFQ can confirm EPDM is the typical fit versus an oil-resistant family",
      "Required sheet thickness and tolerance, which often drives whether calendering or molding is more economical",
      "Hardness target (Shore A) since it affects sealing and the compound selection",
      "Continuous-use temperature, because EPDM is commonly chosen for heat and weathering but not for petroleum oils"
    ],
    "summary": "EPDM sheet stock for weather, ozone, and steam-side sealing, calendered and cured into sheet and rolls."
  },
  {
    "id": "chain-nbr-gaskets-oil",
    "materialId": "nbr",
    "materialLabel": "NBR (nitrile / acrylonitrile-butadiene rubber)",
    "processes": [
      "Compound and lot verification against the oil-resistance grade expected (requires verification before sourcing)",
      "Mill blending and warm-up",
      "Calendering to gauge for sheet stock",
      "Die-cutting or kiss-cutting gaskets from cured sheet",
      "Dimensional check and packing with lot identification"
    ],
    "equipment": [
      "Two-roll mill",
      "Calender",
      "Vulcanizing line",
      "Hydraulic die-cutting press or flatbed die cutter",
      "Calipers and optical/measuring comparator"
    ],
    "products": [
      "cut-gaskets",
      "custom-die-cut",
      "rubber-seals"
    ],
    "tests": [
      "hardness",
      "fluid-immersion",
      "compression-set",
      "dimensional",
      "specific-gravity"
    ],
    "quoteQuestions": [
      "Which fluids the gasket contacts (fuels, hydraulic oil, greases), since NBR is commonly specified for petroleum media but acrylonitrile content matters",
      "Gasket geometry, hole pattern, and tolerance so cutting method and tooling can be estimated",
      "Annual or batch quantity, which often decides between steel-rule die, hard tooling, or knife/waterjet cutting",
      "Compression-set or sealing-load expectations, because these may rule a specific hardness in or out"
    ],
    "summary": "Oil-resistant NBR gaskets and seals die-cut from calendered sheet for fuel and hydraulic media."
  },
  {
    "id": "chain-silicone-foodgrade",
    "materialId": "silicone",
    "materialLabel": "Silicone (VMQ / silicone rubber)",
    "processes": [
      "Verify the compound is a food-contact or potable-grade type per the relevant standard and documentation (use the official standard and an accredited/qualified lab for actual testing)",
      "Clean-area milling to limit contamination",
      "Calendering or molding to the target form",
      "Cure (commonly a press cure plus a post-cure step, parameters not specified here)",
      "Visual and surface inspection, then traceability-labeled packing"
    ],
    "equipment": [
      "Two-roll mill (segregated for silicone)",
      "Calender or compression/transfer molding press",
      "Post-cure oven",
      "Cleanroom or controlled inspection area",
      "Color and surface inspection station"
    ],
    "products": [
      "food-grade-sheet",
      "potable-water-sheet",
      "molded-parts"
    ],
    "tests": [
      "hardness",
      "tensile-strength",
      "heat-aging",
      "color-check",
      "coc-review"
    ],
    "quoteQuestions": [
      "The specific food-contact or potable-water standard the part must satisfy, because compliance evidence requires verification and an accredited lab",
      "Continuous and peak temperature, since silicone is commonly chosen for wide thermal range but tensile strength is modest",
      "Whether a certificate of conformance or material traceability package is required with each lot",
      "Color, translucency, and surface finish expectations, which affect compound and tooling choice"
    ],
    "summary": "Food- and potable-grade silicone sheet and molded parts for wide-temperature, clean-contact service."
  },
  {
    "id": "chain-natural-rubber-abrasion",
    "materialId": "natural-rubber",
    "materialLabel": "Natural rubber (NR)",
    "processes": [
      "Compound intake and abrasion-grade lot review (requires verification before sourcing)",
      "Mastication and mill blending to working plasticity",
      "Calendering of sheet or building up a lining laminate with a tie/bonding layer",
      "Vulcanization (autoclave or in-place cure, parameters not specified here)",
      "Adhesion and thickness verification before shipment or installation handoff"
    ],
    "equipment": [
      "Internal mixer",
      "Two-roll mill",
      "Calender",
      "Autoclave or in-situ curing equipment",
      "Adhesion / peel test fixture and thickness gauge"
    ],
    "products": [
      "abrasion-liners",
      "tank-pipe-lining",
      "rubber-pads"
    ],
    "tests": [
      "hardness",
      "abrasion",
      "tear-resistance",
      "adhesion",
      "thickness"
    ],
    "quoteQuestions": [
      "The abrasive medium and slurry conditions (particle size, sliding versus impact wear), since NR is commonly favored for high-resilience abrasion but not for oils or high heat",
      "Substrate material and surface condition for bonded linings, which drives the adhesion approach",
      "Required lining thickness and coverage area for material and labor estimation",
      "Whether the lining is shop-applied or field-applied, because that changes the cure method and handoff"
    ],
    "summary": "Abrasion-resistant natural rubber linings and pads for slurry, chute, and tank-wear service."
  },
  {
    "id": "chain-sbr-general-sheet",
    "materialId": "sbr",
    "materialLabel": "SBR (styrene-butadiene rubber)",
    "processes": [
      "Compound and lot review for general-purpose grade (requires verification before sourcing)",
      "Mill warm-up and blending",
      "Calendering to commercial-grade sheet thickness",
      "Vulcanization (continuous or autoclave, parameters not specified here)",
      "Slitting to strip or roll width, then visual inspection"
    ],
    "equipment": [
      "Two-roll mill",
      "Calender",
      "Vulcanizing line",
      "Slitting / cutting station",
      "Inspection table and thickness gauge"
    ],
    "products": [
      "rubber-sheet",
      "rubber-strips",
      "rubber-pads"
    ],
    "tests": [
      "hardness",
      "tensile-strength",
      "elongation",
      "thickness",
      "visual"
    ],
    "quoteQuestions": [
      "The application duty (general gasketing, padding, skirting) so the RFQ can confirm a commercial SBR grade is sufficient versus a specialty polymer",
      "Sheet or strip dimensions, thickness, and tolerance for cutting and yield estimation",
      "Volume and roll-versus-cut-piece format, which affects pricing and packaging",
      "Whether any oil, ozone, or heat exposure exists, since SBR is commonly a low-cost general grade not suited to those"
    ],
    "summary": "General-purpose SBR sheet, strip, and pads for economical gasketing and padding duty."
  },
  {
    "id": "chain-fkm-hightemp-seals",
    "materialId": "fkm",
    "materialLabel": "FKM (fluoroelastomer)",
    "processes": [
      "Verify the FKM type and grade matches the chemical and temperature duty (requires verification before sourcing)",
      "Controlled milling and preforming",
      "Compression or transfer molding of seals and molded parts",
      "Press cure plus post-cure (parameters not specified here)",
      "Dimensional, visual, and traceability review before release"
    ],
    "equipment": [
      "Two-roll mill",
      "Compression / transfer molding press",
      "Post-cure oven",
      "Optical/measuring comparator",
      "Lot traceability and inspection station"
    ],
    "products": [
      "rubber-seals",
      "molded-parts",
      "high-temp-sheet"
    ],
    "tests": [
      "hardness",
      "fluid-immersion",
      "heat-aging",
      "compression-set",
      "traceability-review"
    ],
    "quoteQuestions": [
      "The chemicals, fuels, or aggressive media in contact, since FKM is commonly chosen for harsh chemical and high-temperature service but grades vary widely",
      "Continuous and excursion temperature, which may push toward a specific fluoroelastomer family",
      "Seal geometry and tolerance class for tooling and molding-method estimation",
      "Whether full material traceability or a certificate of conformance is required per lot, given the typically higher-stakes service"
    ],
    "summary": "High-performance FKM seals and molded parts for aggressive chemical and high-temperature sealing."
  },
  {
    "id": "chain-fabric-reinforced-sleeves",
    "materialId": "neoprene",
    "materialLabel": "Fabric-reinforced rubber (textile-plied elastomer)",
    "processes": [
      "Review elastomer cover grade and fabric ply specification against the duty (requires verification before sourcing)",
      "Frictioning / coating the textile plies with rubber on a calender",
      "Building up the ply laminate to the required construction",
      "Vulcanization of the built-up assembly (autoclave or press, parameters not specified here)",
      "Fabric and ply inspection, dimensional check, and packing"
    ],
    "equipment": [
      "Calender (frictioning / coating)",
      "Ply build-up / lay-up table or wrapping equipment",
      "Mandrel tooling (for sleeves and boots)",
      "Autoclave or molding press",
      "Inspection station with thickness and ply checks"
    ],
    "products": [
      "fabric-reinforced-sheet",
      "rubber-sleeves",
      "pinch-valve-sleeves"
    ],
    "tests": [
      "tensile-strength",
      "adhesion",
      "fabric-inspection",
      "thickness",
      "dimensional"
    ],
    "quoteQuestions": [
      "Working and burst pressure expectations, since reinforcement ply count and fabric type are commonly driven by pressure and flex demands",
      "Inside diameter, length, and flange or end detail for sleeves and boots, which set the mandrel and tooling",
      "The flowing or contacting medium so the cover elastomer grade can be matched (abrasion, chemical, or temperature)",
      "Flex or movement cycle expectations for bellows and boots, because ply adhesion and construction must be verified for fatigue"
    ],
    "summary": "Fabric-reinforced sleeves, pinch-valve sleeves, and bellows built from calendered ply laminates for pressure and flex duty."
  }
];
