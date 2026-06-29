import type { ProductCategory } from "@/types/platform";

export const productCategories: ProductCategory[] = [
  {
    "id": "rubber-sheet",
    "name": "Rubber Sheet",
    "shortDescription": "Calendered and cured elastomer sheet supplied in flat stock, used as gasket material, lining, pad stock, and feedstock for downstream cutting. The foundational product family of a custom rubber shop.",
    "commonMaterials": [
      "natural-rubber",
      "sbr",
      "epdm",
      "nbr",
      "neoprene",
      "general-purpose"
    ],
    "applications": [
      "Gasket and seal stock",
      "Equipment and tank lining",
      "Anti-vibration and bumper pads",
      "Skirtboard and chute protection",
      "Feedstock for die-cutting and slitting"
    ],
    "requiredQuoteInputs": [
      "polymer family",
      "thickness",
      "width",
      "length",
      "hardness band",
      "quantity"
    ],
    "optionalQuoteInputs": [
      "color",
      "surface finish (smooth or cloth-impression)",
      "tolerance class",
      "service temperature range",
      "chemical exposure"
    ],
    "manufacturingRoute": [
      "raw-materials",
      "weighing",
      "internal-mixing",
      "milling",
      "calendering",
      "curing",
      "cooling",
      "trimming-slitting",
      "inspection",
      "packaging"
    ],
    "likelyEquipment": [
      "Internal (Banbury-type) mixer",
      "Two-roll mill",
      "Calender",
      "Curing press or autoclave",
      "Slitting and trimming line"
    ],
    "commonDefects": [
      "Thickness variation across width",
      "Trapped air or blisters",
      "Backrinds or undercure",
      "Surface contamination or scorch"
    ],
    "inspectionConsiderations": [
      "Thickness mapping across the sheet",
      "Hardness band verification",
      "Visual surface and edge check",
      "Cure-state consistency review"
    ],
    "simulatorAvailability": "available-now",
    "routeNote": "Preliminary route guidance: standard mix, calender, and cure sequence; final route and tolerances require technical review for each specification."
  },
  {
    "id": "rubber-rolls",
    "name": "Rubber Rolls (Roll Covering)",
    "shortDescription": "Elastomer covering applied over a metal core or shaft to form an industrial roller, commonly used in conveying, printing, coating, and processing lines. Built up, cured, then ground to final dimension.",
    "commonMaterials": [
      "nbr",
      "epdm",
      "neoprene",
      "polyurethane",
      "natural-rubber",
      "general-purpose"
    ],
    "applications": [
      "Conveyor and feed rollers",
      "Coating and laminating rolls",
      "Print and nip rolls",
      "Squeeze and dewatering rolls in paper or steel mills"
    ],
    "requiredQuoteInputs": [
      "core or shaft drawing",
      "covering material",
      "covering thickness",
      "face length",
      "hardness band",
      "quantity"
    ],
    "optionalQuoteInputs": [
      "surface finish or grind spec",
      "crown profile",
      "groove pattern",
      "bonding requirement to core",
      "dynamic balancing need"
    ],
    "manufacturingRoute": [
      "raw-materials",
      "internal-mixing",
      "milling",
      "mandrel-build",
      "curing",
      "cooling",
      "finishing",
      "dimensional-inspection",
      "inspection",
      "packaging"
    ],
    "likelyEquipment": [
      "Internal mixer",
      "Two-roll mill",
      "Roll-building or strip-wind station",
      "Autoclave",
      "Roll grinder and lathe"
    ],
    "commonDefects": [
      "Bond separation from the core",
      "Porosity or voids in the cover",
      "Concentricity or runout error",
      "Hardness variation along the face"
    ],
    "inspectionConsiderations": [
      "Bond integrity check (tap or ultrasonic review)",
      "Diameter and concentricity measurement",
      "Hardness band verification along face",
      "Surface finish inspection"
    ],
    "simulatorAvailability": "simplified-route",
    "routeNote": "Preliminary route guidance: build over core, cure, then grind to size; bonding system and grind tolerances require technical review."
  },
  {
    "id": "cut-gaskets",
    "name": "Cut Gaskets",
    "shortDescription": "Flat gaskets cut from cured rubber sheet stock to a defined profile, used to seal flanged joints and enclosures. Typically die-cut or knife-cut from a qualified sheet.",
    "commonMaterials": [
      "epdm",
      "nbr",
      "neoprene",
      "natural-rubber",
      "sbr",
      "general-purpose"
    ],
    "applications": [
      "Flange and pipe-joint sealing",
      "Enclosure and cover seals",
      "Pump and valve body gaskets",
      "Manway and hatch sealing"
    ],
    "requiredQuoteInputs": [
      "gasket drawing or dimensions",
      "sheet material",
      "thickness",
      "hardness band",
      "quantity"
    ],
    "optionalQuoteInputs": [
      "bolt-hole pattern",
      "tolerance class",
      "service media",
      "adhesive backing",
      "edge or surface finish"
    ],
    "manufacturingRoute": [
      "sheet-stock",
      "die-cutting",
      "dimensional-inspection",
      "packaging"
    ],
    "likelyEquipment": [
      "Die-cutting press",
      "Steel-rule or matched-metal die",
      "CNC knife or waterjet cutter",
      "Dimensional inspection station"
    ],
    "commonDefects": [
      "Dimensional drift from die wear",
      "Ragged or torn edges",
      "Incomplete cut-through",
      "Hole misregistration"
    ],
    "inspectionConsiderations": [
      "Outline and bolt-circle dimensional check",
      "Edge quality review",
      "Thickness confirmation from source sheet",
      "First-article verification against drawing"
    ],
    "simulatorAvailability": "simplified-route",
    "routeNote": "Preliminary route guidance: cut from qualified sheet stock; die selection and tolerances require technical review."
  },
  {
    "id": "custom-die-cut",
    "name": "Custom Die-Cut Parts",
    "shortDescription": "Engineered flat or profiled parts die-cut from rubber sheet to a customer drawing, covering pads, washers, seals, insulators, and bespoke shapes. The general-purpose cutting service of the shop.",
    "commonMaterials": [
      "epdm",
      "nbr",
      "neoprene",
      "silicone",
      "sbr",
      "general-purpose"
    ],
    "applications": [
      "Custom seals and spacers",
      "Vibration and insulation pads",
      "Protective and masking parts",
      "Bespoke profiles for OEM assemblies"
    ],
    "requiredQuoteInputs": [
      "part drawing",
      "sheet material",
      "thickness",
      "hardness band",
      "quantity"
    ],
    "optionalQuoteInputs": [
      "tolerance class",
      "adhesive or liner backing",
      "color",
      "service environment",
      "kiss-cut vs through-cut"
    ],
    "manufacturingRoute": [
      "sheet-stock",
      "die-cutting",
      "dimensional-inspection",
      "inspection",
      "packaging"
    ],
    "likelyEquipment": [
      "Die-cutting or clicker press",
      "CNC knife or waterjet cutter",
      "Steel-rule die tooling",
      "Lamination station for backed parts"
    ],
    "commonDefects": [
      "Edge tearing or fraying",
      "Dimensional drift from die wear",
      "Adhesive misalignment on backed parts",
      "Incomplete cut or web tear"
    ],
    "inspectionConsiderations": [
      "First-article dimensional check to drawing",
      "Edge quality review",
      "Backing adhesion check where applicable",
      "Lot-to-lot consistency review"
    ],
    "simulatorAvailability": "future-module",
    "routeNote": "Preliminary route guidance: cut from qualified sheet to drawing; tooling and tolerance class require technical review."
  },
  {
    "id": "rubber-strips",
    "name": "Rubber Strips",
    "shortDescription": "Narrow continuous strips slit from cured sheet or produced by extrusion, used as sealing, edging, packing, and skirting. Supplied in coils or cut lengths.",
    "commonMaterials": [
      "epdm",
      "neoprene",
      "natural-rubber",
      "sbr",
      "nbr",
      "general-purpose"
    ],
    "applications": [
      "Conveyor skirtboard sealing",
      "Edge protection and trim",
      "Packing and shim strips",
      "Weather and dust sealing"
    ],
    "requiredQuoteInputs": [
      "material",
      "thickness",
      "width",
      "length or coil quantity",
      "hardness band"
    ],
    "optionalQuoteInputs": [
      "edge finish",
      "adhesive backing",
      "tolerance class",
      "color",
      "profiled cross-section"
    ],
    "manufacturingRoute": [
      "sheet-stock",
      "slitting",
      "inspection",
      "packaging"
    ],
    "likelyEquipment": [
      "Slitting line",
      "Rotary or shear slitters",
      "Extruder (for profiled strip)",
      "Coiling and cut-to-length station"
    ],
    "commonDefects": [
      "Width variation along length",
      "Wavy or stretched edges",
      "Thickness inconsistency",
      "Adhesive lift on backed strip"
    ],
    "inspectionConsiderations": [
      "Width and thickness check along length",
      "Edge straightness review",
      "Hardness band verification",
      "Backing adhesion check where applicable"
    ],
    "simulatorAvailability": "simplified-route",
    "routeNote": "Preliminary route guidance: slit from qualified sheet (or extrude for profiles); slitting tolerances require technical review."
  },
  {
    "id": "rubber-pads",
    "name": "Rubber Pads",
    "shortDescription": "Thicker cured-rubber blocks or shaped pads used for anti-vibration mounting, load bearing, bumpers, and isolation. Cut from heavy sheet or molded to shape.",
    "commonMaterials": [
      "natural-rubber",
      "neoprene",
      "sbr",
      "epdm",
      "nbr",
      "general-purpose"
    ],
    "applications": [
      "Anti-vibration machine mounting",
      "Bridge and structural bearing pads",
      "Bumper and impact protection",
      "Equipment leveling and isolation"
    ],
    "requiredQuoteInputs": [
      "material",
      "thickness",
      "length",
      "width",
      "hardness band",
      "quantity"
    ],
    "optionalQuoteInputs": [
      "surface pattern (ribbed, studded, plain)",
      "load rating context",
      "embedded plate or insert",
      "tolerance class",
      "service temperature range"
    ],
    "manufacturingRoute": [
      "sheet-stock",
      "die-cutting",
      "dimensional-inspection",
      "inspection",
      "packaging"
    ],
    "likelyEquipment": [
      "Die-cutting or clicker press",
      "Water jet or knife cutter",
      "Curing press (for molded pads)",
      "Dimensional inspection station"
    ],
    "commonDefects": [
      "Edge tearing on thick stock",
      "Thickness variation",
      "Surface-pattern defects",
      "Insert bond separation where plated"
    ],
    "inspectionConsiderations": [
      "Thickness and footprint dimensional check",
      "Hardness band verification",
      "Surface-pattern integrity review",
      "Insert bond check where applicable"
    ],
    "simulatorAvailability": "future-module",
    "routeNote": "Preliminary route guidance: cut from heavy sheet or mold to shape; load and isolation requirements require technical review."
  },
  {
    "id": "tank-pipe-lining",
    "name": "Tank and Pipe Lining",
    "shortDescription": "Sheet rubber bonded to the interior of tanks, vessels, and pipe to protect steel from corrosion and abrasion in aggressive process service. Applied as uncured or cured sheet, then bonded and cured in place or in autoclave.",
    "commonMaterials": [
      "natural-rubber",
      "neoprene",
      "butyl",
      "csm",
      "abrasion-resistant",
      "epdm"
    ],
    "applications": [
      "Chemical storage tank protection",
      "Slurry and tailings pipe lining",
      "Acid and process vessel lining",
      "Mineral processing equipment protection"
    ],
    "requiredQuoteInputs": [
      "substrate drawing or dimensions",
      "lining material",
      "lining thickness",
      "service media",
      "service temperature range",
      "quantity or surface area"
    ],
    "optionalQuoteInputs": [
      "number of plies",
      "spark-test requirement context",
      "cure method (in-situ or autoclave)",
      "hardness band",
      "access and field-install constraints"
    ],
    "manufacturingRoute": [
      "raw-materials",
      "internal-mixing",
      "milling",
      "calendering",
      "layering",
      "curing",
      "inspection",
      "packaging"
    ],
    "likelyEquipment": [
      "Internal mixer and mill",
      "Calender",
      "Autoclave or in-situ cure equipment",
      "Surface-prep and bonding station",
      "Spark-test inspection unit"
    ],
    "commonDefects": [
      "Disbond or void behind the lining",
      "Pinholes or porosity",
      "Seam or overlap failure",
      "Undercure in thick or recessed areas"
    ],
    "inspectionConsiderations": [
      "Bond integrity review (tap or holiday test)",
      "Pinhole or spark inspection",
      "Thickness and ply verification",
      "Seam and overlap inspection"
    ],
    "simulatorAvailability": "simplified-route",
    "routeNote": "Preliminary route guidance: prep substrate, bond sheet, then cure; bonding system and cure method require technical review."
  },
  {
    "id": "abrasion-liners",
    "name": "Abrasion Liners",
    "shortDescription": "Wear-resistant rubber panels and liners that protect chutes, hoppers, screens, and equipment from sliding and impact abrasion. Often supplied with fastening provisions or bonded backing.",
    "commonMaterials": [
      "natural-rubber",
      "abrasion-resistant",
      "sbr",
      "polyurethane",
      "neoprene",
      "general-purpose"
    ],
    "applications": [
      "Chute and hopper wear protection",
      "Screen and deck lining",
      "Mill and conveyor transfer-point protection",
      "Slurry-handling equipment lining"
    ],
    "requiredQuoteInputs": [
      "panel drawing or dimensions",
      "material",
      "thickness",
      "hardness band",
      "quantity"
    ],
    "optionalQuoteInputs": [
      "fastening method (bonded plate, embedded studs, bolt holes)",
      "metal or fabric backing",
      "impact vs sliding service context",
      "service temperature range",
      "tile or panel layout"
    ],
    "manufacturingRoute": [
      "raw-materials",
      "internal-mixing",
      "milling",
      "calendering",
      "curing",
      "cooling",
      "trimming-slitting",
      "inspection",
      "packaging"
    ],
    "likelyEquipment": [
      "Internal mixer and mill",
      "Calender",
      "Curing press or autoclave",
      "Backing bond station",
      "Trimming and finishing line"
    ],
    "commonDefects": [
      "Backing or stud bond separation",
      "Thickness variation",
      "Premature edge wear",
      "Undercure in thick sections"
    ],
    "inspectionConsiderations": [
      "Thickness and panel dimensional check",
      "Hardness band verification",
      "Backing or insert bond integrity review",
      "Surface and edge inspection"
    ],
    "simulatorAvailability": "simplified-route",
    "routeNote": "Preliminary route guidance: mix, calender, cure, then add backing or fasteners; wear material and fastening require technical review."
  },
  {
    "id": "rubber-sleeves",
    "name": "Rubber Sleeves",
    "shortDescription": "Tubular cured-rubber components built over a mandrel, used as protective, sealing, or connecting sleeves on shafts, pipes, and equipment. Seamless or wrapped construction.",
    "commonMaterials": [
      "epdm",
      "nbr",
      "neoprene",
      "natural-rubber",
      "silicone",
      "general-purpose"
    ],
    "applications": [
      "Shaft and coupling protection",
      "Pipe connection and expansion sleeves",
      "Cable and equipment boots",
      "Roller and spindle covers"
    ],
    "requiredQuoteInputs": [
      "inside diameter",
      "wall thickness",
      "length",
      "material",
      "hardness band",
      "quantity"
    ],
    "optionalQuoteInputs": [
      "outside diameter tolerance",
      "end configuration (cuff, flange, plain)",
      "reinforcement need",
      "surface finish",
      "service temperature range"
    ],
    "manufacturingRoute": [
      "internal-mixing",
      "milling",
      "mandrel-build",
      "curing",
      "finishing",
      "inspection"
    ],
    "likelyEquipment": [
      "Internal mixer and mill",
      "Mandrel build station",
      "Autoclave or press cure",
      "Mandrel extraction and trim station"
    ],
    "commonDefects": [
      "Wall thickness variation",
      "Seam or splice weakness",
      "Mandrel sticking or surface marking",
      "Air entrapment under the wall"
    ],
    "inspectionConsiderations": [
      "Inside diameter and wall thickness check",
      "Concentricity review",
      "Splice or seam integrity inspection",
      "Surface and end-finish inspection"
    ],
    "simulatorAvailability": "future-module",
    "routeNote": "Preliminary route guidance: build over mandrel, cure, then finish; reinforcement and dimensional tolerances require technical review."
  },
  {
    "id": "pinch-valve-sleeves",
    "name": "Pinch Valve Sleeves",
    "shortDescription": "Fabric-reinforced flexible tubular elements that form the flow-control element of a pinch valve, designed to repeatedly pinch closed and reopen in abrasive or slurry service. Built with reinforcement plies and pressure-tested.",
    "commonMaterials": [
      "natural-rubber",
      "abrasion-resistant",
      "nbr",
      "epdm",
      "neoprene",
      "general-purpose"
    ],
    "applications": [
      "Slurry and tailings flow control",
      "Abrasive powder and granular dosing",
      "Wastewater and sludge isolation",
      "Mineral and cement process valves"
    ],
    "requiredQuoteInputs": [
      "bore size",
      "valve face-to-face or sleeve length",
      "tube material",
      "reinforcement requirement",
      "service media",
      "quantity"
    ],
    "optionalQuoteInputs": [
      "operating pressure context",
      "end connection style",
      "hardness band",
      "number of reinforcement plies",
      "service temperature range"
    ],
    "manufacturingRoute": [
      "internal-mixing",
      "milling",
      "reinforcement-buildup",
      "curing",
      "trimming-slitting",
      "pressure-test",
      "inspection"
    ],
    "likelyEquipment": [
      "Internal mixer and mill",
      "Reinforcement ply build station",
      "Mandrel and press or autoclave cure",
      "Hydrostatic or pneumatic test rig",
      "Trimming station"
    ],
    "commonDefects": [
      "Ply separation or delamination",
      "Uneven wall causing biased closure",
      "Reinforcement misalignment",
      "Pinhole or porosity in the tube"
    ],
    "inspectionConsiderations": [
      "Pressure test to a reviewed level",
      "Wall thickness and bore check",
      "Ply count and orientation verification",
      "Closure and reopening function review"
    ],
    "simulatorAvailability": "future-module",
    "routeNote": "Preliminary route guidance: build reinforcement plies, cure, then pressure-test; reinforcement design and test level require technical review."
  },
  {
    "id": "bellows-boots",
    "name": "Bellows and Boots",
    "shortDescription": "Flexible convoluted or dome-shaped molded rubber components that protect joints and allow movement while excluding dust and contamination. Molded to a cavity to capture the convolute geometry.",
    "commonMaterials": [
      "neoprene",
      "epdm",
      "nbr",
      "silicone",
      "natural-rubber",
      "general-purpose"
    ],
    "applications": [
      "Steering and suspension joint protection",
      "Actuator and cylinder dust boots",
      "Expansion and flexible connectors",
      "Cable and shaft entry seals"
    ],
    "requiredQuoteInputs": [
      "part drawing",
      "material",
      "wall thickness",
      "hardness band",
      "quantity"
    ],
    "optionalQuoteInputs": [
      "convolute count and geometry",
      "end-cuff dimensions",
      "movement or flex range context",
      "service temperature range",
      "color"
    ],
    "manufacturingRoute": [
      "internal-mixing",
      "milling",
      "preform",
      "molding",
      "deflashing",
      "inspection",
      "packaging"
    ],
    "likelyEquipment": [
      "Internal mixer and mill",
      "Preform cutter",
      "Compression or transfer mold and press",
      "Deflashing station",
      "Dimensional inspection station"
    ],
    "commonDefects": [
      "Flash at parting lines",
      "Thin or torn convolute walls",
      "Incomplete fill in deep cavities",
      "Flex cracking from wall thinning"
    ],
    "inspectionConsiderations": [
      "Wall thickness in convolutes",
      "Dimensional check to drawing",
      "Flash and trim quality review",
      "Flex and movement function review"
    ],
    "simulatorAvailability": "future-module",
    "routeNote": "Preliminary route guidance: preform then mold the convolute geometry; mold design and flex requirements require technical review."
  },
  {
    "id": "molded-parts",
    "name": "Molded Parts",
    "shortDescription": "Custom rubber components produced by compression, transfer, or injection molding to a defined cavity, covering grommets, mounts, caps, diaphragms, and bespoke shapes. The core molding service of the shop.",
    "commonMaterials": [
      "nbr",
      "epdm",
      "neoprene",
      "silicone",
      "natural-rubber",
      "general-purpose"
    ],
    "applications": [
      "Grommets, bushings, and mounts",
      "Diaphragms and caps",
      "Custom OEM components",
      "Bonded rubber-to-metal parts"
    ],
    "requiredQuoteInputs": [
      "part drawing",
      "material",
      "hardness band",
      "quantity",
      "any insert or bonding requirement"
    ],
    "optionalQuoteInputs": [
      "color",
      "tolerance class",
      "surface finish",
      "service temperature range",
      "service media"
    ],
    "manufacturingRoute": [
      "internal-mixing",
      "milling",
      "preform",
      "molding",
      "deflashing",
      "inspection",
      "packaging"
    ],
    "likelyEquipment": [
      "Internal mixer and mill",
      "Preform cutter",
      "Compression, transfer, or injection molding press",
      "Deflashing or cryogenic deflash unit",
      "Dimensional inspection station"
    ],
    "commonDefects": [
      "Flash at parting line",
      "Incomplete fill or short shot",
      "Backrinds or knit lines",
      "Insert misposition on bonded parts"
    ],
    "inspectionConsiderations": [
      "Dimensional check to drawing",
      "Hardness band verification",
      "Flash and trim quality review",
      "Insert bond check on bonded parts"
    ],
    "simulatorAvailability": "future-module",
    "routeNote": "Preliminary route guidance: preform then mold to cavity; tooling, inserts, and tolerances require technical review."
  },
  {
    "id": "rubber-bushings",
    "name": "Rubber Bushings",
    "shortDescription": "Cylindrical molded rubber components, often bonded between inner and outer metal sleeves, used to isolate vibration and accommodate misalignment in mounts and linkages. Molded and frequently rubber-to-metal bonded.",
    "commonMaterials": [
      "natural-rubber",
      "nbr",
      "neoprene",
      "epdm",
      "general-purpose",
      "oil-resistant"
    ],
    "applications": [
      "Suspension and chassis mounts",
      "Pivot and linkage isolators",
      "Equipment vibration mounts",
      "Torsional and shock isolation"
    ],
    "requiredQuoteInputs": [
      "part drawing",
      "material",
      "hardness band",
      "inner and outer sleeve detail",
      "quantity"
    ],
    "optionalQuoteInputs": [
      "bond requirement",
      "stiffness or load context",
      "service temperature range",
      "tolerance class",
      "oil or fluid exposure"
    ],
    "manufacturingRoute": [
      "internal-mixing",
      "milling",
      "preform",
      "molding",
      "deflashing",
      "dimensional-inspection",
      "inspection",
      "packaging"
    ],
    "likelyEquipment": [
      "Internal mixer and mill",
      "Preform station",
      "Compression or injection molding press",
      "Metal-prep and bonding line",
      "Dimensional inspection station"
    ],
    "commonDefects": [
      "Rubber-to-metal bond failure",
      "Eccentricity between sleeves",
      "Flash or incomplete fill",
      "Stiffness variation lot to lot"
    ],
    "inspectionConsiderations": [
      "Bond integrity review (push-out or peel context)",
      "Concentricity and dimensional check",
      "Hardness band verification",
      "Stiffness consistency review"
    ],
    "simulatorAvailability": "future-module",
    "routeNote": "Preliminary route guidance: mold with bonded sleeves where required; bonding system and stiffness targets require technical review."
  },
  {
    "id": "rubber-washers",
    "name": "Rubber Washers",
    "shortDescription": "Annular sealing or cushioning elements, either die-cut from sheet or molded to shape, used under fasteners and in joints to seal and distribute load. A high-volume, simple-geometry product.",
    "commonMaterials": [
      "epdm",
      "nbr",
      "neoprene",
      "silicone",
      "natural-rubber",
      "general-purpose"
    ],
    "applications": [
      "Fastener sealing washers",
      "Faucet and plumbing seals",
      "Load-distribution and cushioning washers",
      "Enclosure and panel seals"
    ],
    "requiredQuoteInputs": [
      "outside diameter",
      "inside diameter",
      "thickness",
      "material",
      "hardness band",
      "quantity"
    ],
    "optionalQuoteInputs": [
      "tolerance class",
      "color",
      "service media",
      "service temperature range",
      "molded vs cut preference"
    ],
    "manufacturingRoute": [
      "sheet-stock",
      "die-cutting",
      "dimensional-inspection",
      "inspection",
      "packaging"
    ],
    "likelyEquipment": [
      "Die-cutting or clicker press",
      "Tube or hollow die tooling",
      "Compression mold (for molded washers)",
      "Dimensional inspection station"
    ],
    "commonDefects": [
      "Concentricity error between bores",
      "Edge tearing or burrs",
      "Thickness variation",
      "Dimensional drift from die wear"
    ],
    "inspectionConsiderations": [
      "Inside and outside diameter check",
      "Concentricity review",
      "Thickness confirmation",
      "Edge quality inspection"
    ],
    "simulatorAvailability": "future-module",
    "routeNote": "Preliminary route guidance: die-cut from sheet (or mold for tight tolerance); method and tolerance class require technical review."
  },
  {
    "id": "rubber-seals",
    "name": "Rubber Seals",
    "shortDescription": "Molded or cut elastomer sealing elements that contain fluids or exclude contamination across static and light-dynamic joints, including profile seals, lip seals, and custom sealing geometries. Material selection is driven by the sealed media.",
    "commonMaterials": [
      "nbr",
      "fkm",
      "epdm",
      "silicone",
      "neoprene",
      "oil-resistant"
    ],
    "applications": [
      "Static face and flange seals",
      "Lip and shaft seals",
      "Enclosure and door profile seals",
      "Hydraulic and pneumatic sealing"
    ],
    "requiredQuoteInputs": [
      "seal drawing or profile",
      "material",
      "hardness band",
      "service media",
      "quantity"
    ],
    "optionalQuoteInputs": [
      "service temperature range",
      "operating pressure context",
      "tolerance class",
      "surface finish",
      "color"
    ],
    "manufacturingRoute": [
      "internal-mixing",
      "milling",
      "preform",
      "molding",
      "deflashing",
      "dimensional-inspection",
      "inspection",
      "packaging"
    ],
    "likelyEquipment": [
      "Internal mixer and mill",
      "Preform station",
      "Compression, transfer, or injection molding press",
      "Deflashing unit",
      "Dimensional inspection station"
    ],
    "commonDefects": [
      "Flash or parting-line defects on the seal lip",
      "Incomplete fill",
      "Surface imperfections on the sealing face",
      "Compression-set sensitivity from material or geometry"
    ],
    "inspectionConsiderations": [
      "Sealing-surface and lip quality review",
      "Cross-section dimensional check",
      "Hardness band verification",
      "Material-to-media compatibility review"
    ],
    "simulatorAvailability": "future-module",
    "routeNote": "Preliminary route guidance: mold to profile (or cut simple geometries); material-media match and tolerances require technical review."
  },
  {
    "id": "fabric-reinforced-sheet",
    "name": "Fabric-Reinforced Sheet",
    "shortDescription": "Rubber sheet built with one or more fabric plies to add tensile strength and dimensional stability, used where unreinforced sheet would stretch or tear. Rubber is calendered onto fabric, layered, then cured.",
    "commonMaterials": [
      "epdm",
      "neoprene",
      "nbr",
      "sbr",
      "natural-rubber",
      "general-purpose"
    ],
    "applications": [
      "Diaphragm and membrane stock",
      "Reinforced gaskets and seals",
      "Expansion-joint and ducting material",
      "High-tension sealing applications"
    ],
    "requiredQuoteInputs": [
      "material",
      "total thickness",
      "number of fabric plies",
      "width",
      "length",
      "quantity"
    ],
    "optionalQuoteInputs": [
      "fabric type context",
      "hardness band",
      "surface finish",
      "tolerance class",
      "service temperature range"
    ],
    "manufacturingRoute": [
      "internal-mixing",
      "milling",
      "fabric-prep",
      "fabric-calendering",
      "layering",
      "curing",
      "cooling",
      "trimming-slitting",
      "inspection"
    ],
    "likelyEquipment": [
      "Internal mixer and mill",
      "Fabric prep and let-off",
      "Frictioning or topping calender",
      "Layering and build table",
      "Curing press or autoclave"
    ],
    "commonDefects": [
      "Ply-to-rubber delamination",
      "Fabric wrinkles or misalignment",
      "Trapped air between plies",
      "Uneven rubber penetration into fabric"
    ],
    "inspectionConsiderations": [
      "Ply adhesion review",
      "Total thickness and ply-count check",
      "Fabric alignment inspection",
      "Surface and edge review"
    ],
    "simulatorAvailability": "simplified-route",
    "routeNote": "Preliminary route guidance: calender rubber onto fabric, layer, then cure; ply construction and adhesion require technical review."
  },
  {
    "id": "sponge-foam-sheet",
    "name": "Sponge and Foam Sheet",
    "shortDescription": "Cellular rubber sheet, open-cell (sponge) or closed-cell, used for cushioning, sealing against light loads, insulation, and gap filling. Expanded during cure to develop the cell structure.",
    "commonMaterials": [
      "epdm",
      "neoprene",
      "nbr",
      "silicone",
      "general-purpose"
    ],
    "applications": [
      "Compression and dust seals",
      "Cushioning and padding",
      "Thermal and acoustic insulation",
      "Gap filling and weather sealing"
    ],
    "requiredQuoteInputs": [
      "material",
      "thickness",
      "density or firmness band",
      "width",
      "length",
      "quantity"
    ],
    "optionalQuoteInputs": [
      "open vs closed cell",
      "adhesive backing",
      "skin or no-skin surface",
      "tolerance class",
      "service temperature range"
    ],
    "manufacturingRoute": [
      "raw-materials",
      "weighing",
      "internal-mixing",
      "milling",
      "calendering",
      "curing",
      "cooling",
      "trimming-slitting",
      "inspection",
      "packaging"
    ],
    "likelyEquipment": [
      "Internal mixer and mill",
      "Calender",
      "Expansion cure oven or press",
      "Slitting and skiving line",
      "Lamination station for backed sheet"
    ],
    "commonDefects": [
      "Uneven cell structure or density",
      "Surface blisters or large voids",
      "Thickness variation after expansion",
      "Adhesive lift on backed sheet"
    ],
    "inspectionConsiderations": [
      "Density or firmness band verification",
      "Thickness check after expansion",
      "Cell-structure and surface review",
      "Backing adhesion check where applicable"
    ],
    "simulatorAvailability": "future-module",
    "routeNote": "Preliminary route guidance: mix, form, and expand during cure; density and cell structure require technical review."
  },
  {
    "id": "food-grade-sheet",
    "name": "Food-Grade Sheet",
    "shortDescription": "Rubber sheet compounded from food-contact-suitable ingredients for use in food, beverage, and processing equipment. Material selection and traceability are central; suitability for a given contact application requires technical review.",
    "commonMaterials": [
      "epdm",
      "silicone",
      "nbr",
      "food-grade",
      "general-purpose"
    ],
    "applications": [
      "Food-processing gaskets and seals",
      "Conveyor and contact surfaces",
      "Beverage and dairy equipment lining",
      "Sanitary enclosure sealing"
    ],
    "requiredQuoteInputs": [
      "material",
      "thickness",
      "width",
      "length",
      "hardness band",
      "intended contact media",
      "quantity"
    ],
    "optionalQuoteInputs": [
      "color",
      "surface finish",
      "temperature range (including wash or sanitation)",
      "tolerance class",
      "traceability or documentation needs"
    ],
    "manufacturingRoute": [
      "raw-materials",
      "weighing",
      "internal-mixing",
      "milling",
      "calendering",
      "curing",
      "cooling",
      "trimming-slitting",
      "inspection",
      "packaging"
    ],
    "likelyEquipment": [
      "Dedicated or cleaned internal mixer and mill",
      "Calender",
      "Curing press or autoclave",
      "Slitting and trimming line",
      "Inspection station"
    ],
    "commonDefects": [
      "Contamination from shared tooling",
      "Surface inclusions or marks",
      "Thickness variation",
      "Color or batch inconsistency"
    ],
    "inspectionConsiderations": [
      "Material and lot traceability review",
      "Surface cleanliness inspection",
      "Thickness and hardness band check",
      "Contact-application suitability review"
    ],
    "simulatorAvailability": "future-module",
    "routeNote": "Preliminary route guidance: standard sheet route using food-contact-suitable materials; contact suitability and documentation require technical review."
  },
  {
    "id": "potable-water-sheet",
    "name": "Potable-Water Sheet",
    "shortDescription": "Rubber sheet using materials selected as suitable for drinking-water contact, used in water-system gaskets, seals, and linings. Suitability for a given potable application requires technical review and appropriate documentation.",
    "commonMaterials": [
      "epdm",
      "potable-water",
      "silicone",
      "general-purpose"
    ],
    "applications": [
      "Water-main and pipe-joint gaskets",
      "Valve and pump seals in water systems",
      "Tank and reservoir lining seals",
      "Drinking-water equipment sealing"
    ],
    "requiredQuoteInputs": [
      "material",
      "thickness",
      "width",
      "length",
      "hardness band",
      "quantity"
    ],
    "optionalQuoteInputs": [
      "temperature range (cold or hot water)",
      "color",
      "surface finish",
      "tolerance class",
      "documentation or approval needs"
    ],
    "manufacturingRoute": [
      "raw-materials",
      "weighing",
      "internal-mixing",
      "milling",
      "calendering",
      "curing",
      "cooling",
      "trimming-slitting",
      "inspection",
      "packaging"
    ],
    "likelyEquipment": [
      "Dedicated or cleaned internal mixer and mill",
      "Calender",
      "Curing press or autoclave",
      "Slitting and trimming line",
      "Inspection station"
    ],
    "commonDefects": [
      "Contamination from shared tooling",
      "Surface inclusions",
      "Thickness variation",
      "Batch-to-batch material inconsistency"
    ],
    "inspectionConsiderations": [
      "Material and lot traceability review",
      "Surface cleanliness inspection",
      "Thickness and hardness band check",
      "Potable-application suitability review"
    ],
    "simulatorAvailability": "future-module",
    "routeNote": "Preliminary route guidance: standard sheet route using potable-suitable materials; potable suitability and documentation require technical review."
  },
  {
    "id": "high-temp-sheet",
    "name": "High-Temperature Sheet",
    "shortDescription": "Rubber sheet compounded from heat-resistant elastomer families for service at elevated temperatures where general-purpose rubbers would degrade. Material choice is driven by the upper temperature band and exposure media.",
    "commonMaterials": [
      "silicone",
      "fkm",
      "epdm",
      "high-temperature",
      "general-purpose"
    ],
    "applications": [
      "High-temperature gaskets and seals",
      "Oven, duct, and furnace sealing",
      "Hot-process equipment lining",
      "Heat-exposed insulation and padding"
    ],
    "requiredQuoteInputs": [
      "material",
      "thickness",
      "width",
      "length",
      "service temperature range",
      "hardness band",
      "quantity"
    ],
    "optionalQuoteInputs": [
      "chemical or media exposure",
      "color",
      "surface finish",
      "tolerance class",
      "continuous vs intermittent exposure context"
    ],
    "manufacturingRoute": [
      "raw-materials",
      "weighing",
      "internal-mixing",
      "milling",
      "calendering",
      "curing",
      "cooling",
      "trimming-slitting",
      "inspection",
      "packaging"
    ],
    "likelyEquipment": [
      "Internal mixer and mill",
      "Calender",
      "Curing press or autoclave (with post-cure capability)",
      "Slitting and trimming line",
      "Inspection station"
    ],
    "commonDefects": [
      "Undercure affecting heat performance",
      "Surface inclusions or contamination",
      "Thickness variation",
      "Premature aging if material is misselected"
    ],
    "inspectionConsiderations": [
      "Material-to-temperature-band suitability review",
      "Cure-state and post-cure review",
      "Thickness and hardness band check",
      "Surface inspection"
    ],
    "simulatorAvailability": "future-module",
    "routeNote": "Preliminary route guidance: standard sheet route with heat-resistant material and possible post-cure; temperature suitability requires technical review."
  }
];

export const productCategoriesById: Record<string, ProductCategory> = Object.fromEntries(
  productCategories.map((p) => [p.id, p]),
);
