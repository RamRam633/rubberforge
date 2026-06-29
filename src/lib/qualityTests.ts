import type { QualityTest } from "@/types/quality";

export const qualityTests: QualityTest[] = [
  {
    "id": "hardness",
    "name": "Hardness (Durometer)",
    "whatItMeasures": "The resistance of a cured rubber surface to indentation, typically reported on a Shore A (or Shore D for harder compounds) scale, giving a single point value that correlates with stiffness.",
    "whyItMatters": "Hardness is often the first and most requested property on a rubber datasheet. It commonly drives sealing force, feel, and how a part behaves under load, and it is a quick screen for whether a compound roughly matches the intended grade.",
    "relevantProducts": [
      "rubber-sheet",
      "cut-gaskets",
      "molded-parts",
      "rubber-seals",
      "rubber-pads"
    ],
    "relevantMaterials": [
      "natural-rubber",
      "epdm",
      "nbr",
      "neoprene",
      "general-purpose"
    ],
    "sampleType": "Flat coupon or stacked sheet pieces of sufficient thickness, or a representative flat area on a finished part",
    "failureMeaning": "A reading outside the agreed range may indicate the wrong compound was used, an under-cure or over-cure condition, plasticizer or filler variation, or measurement on too thin a section.",
    "relatedDefects": [
      "under-cure",
      "over-cure",
      "hardness-drift"
    ],
    "relatedRfqQuestions": [
      "What hardness grade and tolerance do you require?",
      "Is the hardness specified on Shore A or Shore D?",
      "Should hardness be verified on each lot or per shipment?"
    ],
    "relatedStandards": [
      "astm-d2240",
      "iso-7619",
      "iso-48"
    ],
    "customerDocument": "A lot or batch test report listing the measured hardness against the specified range, often included on a certificate of conformance.",
    "explanation": "Durometer hardness is measured by pressing a standardized indenter into the rubber and reading how far it penetrates. Because it is fast and non-destructive, it is widely used as a routine check, but it samples only the surface and a single point, so several readings are typically averaged. Thin or curved parts can read artificially high if the indenter feels the backing.",
    "caution": "Hardness alone does not confirm a compound's identity or performance; two very different rubbers can share a hardness value. Standard references here are illustrative examples and require verification before sourcing; use the official standard and an accredited or qualified lab for actual testing."
  },
  {
    "id": "tensile-strength",
    "name": "Tensile Strength",
    "whatItMeasures": "The maximum stress a rubber specimen sustains while being stretched to break, commonly reported as force per unit of original cross-sectional area.",
    "whyItMatters": "Tensile strength is a core indicator of compound integrity and state of cure. It often serves as a baseline mechanical property on datasheets and a sensitive flag for mixing, dispersion, or curing problems even when hardness looks correct.",
    "relevantProducts": [
      "rubber-sheet",
      "molded-parts",
      "rubber-strips",
      "rubber-seals",
      "fabric-reinforced-sheet"
    ],
    "relevantMaterials": [
      "natural-rubber",
      "sbr",
      "nbr",
      "neoprene",
      "general-purpose"
    ],
    "sampleType": "Die-cut dumbbell specimens taken from a sheet or a molded slab",
    "failureMeaning": "A low result may indicate under-cure, poor filler dispersion, contamination, trapped air, or a compound substitution; abnormal results paired with low elongation can suggest over-cure or degradation.",
    "relatedDefects": [
      "under-cure",
      "poor-dispersion",
      "contamination"
    ],
    "relatedRfqQuestions": [
      "What minimum tensile strength is required?",
      "Should specimens be cut in a specific orientation relative to grain or calendering?",
      "Is testing required per lot or only on first article?"
    ],
    "relatedStandards": [
      "astm-d412",
      "iso-37"
    ],
    "customerDocument": "A mechanical property test report stating tensile strength with the specimen type and orientation, frequently grouped with elongation and modulus.",
    "explanation": "A dumbbell-shaped specimen is gripped at both ends and pulled apart at a controlled rate until it breaks. The peak force divided by the original cross-section gives tensile strength. Because the property reflects how well the polymer network formed and how cleanly fillers dispersed, it is a workhorse acceptance test for sheet and molded goods.",
    "caution": "Tensile values are sensitive to specimen geometry, cutting quality, and pull rate, so results are only comparable when the same method is followed. The standards listed are examples and require verification before sourcing; use the official standard and an accredited or qualified lab for actual testing."
  },
  {
    "id": "elongation",
    "name": "Elongation at Break",
    "whatItMeasures": "How far a rubber specimen stretches, as a percentage of its original length, at the moment it breaks during a tensile pull.",
    "whyItMatters": "Elongation describes the material's flexibility and ductility. It commonly pairs with tensile strength to characterize a compound, and a drop in elongation is often an early sign of over-cure, aging, or embrittlement.",
    "relevantProducts": [
      "rubber-sheet",
      "rubber-strips",
      "bellows-boots",
      "rubber-sleeves",
      "molded-parts"
    ],
    "relevantMaterials": [
      "natural-rubber",
      "epdm",
      "silicone",
      "neoprene",
      "general-purpose"
    ],
    "sampleType": "Die-cut dumbbell specimens, usually the same ones used for tensile testing",
    "failureMeaning": "Low elongation may indicate over-cure, aging or heat damage, excessive filler, or a brittle compound; unusually high elongation with low strength can suggest under-cure.",
    "relatedDefects": [
      "over-cure",
      "under-cure",
      "cracking"
    ],
    "relatedRfqQuestions": [
      "What minimum elongation at break do you require?",
      "Will the part see repeated flexing or large deflection in service?",
      "Should elongation be reported alongside tensile and modulus?"
    ],
    "relatedStandards": [
      "astm-d412",
      "iso-37"
    ],
    "customerDocument": "A mechanical property report listing percent elongation at break with the corresponding specimen and method.",
    "explanation": "Elongation is recorded during the same tensile pull used for strength: the gauge length is tracked until the specimen breaks, and the increase over the starting length is expressed as a percentage. It captures how much deformation the rubber tolerates before failure, which matters for parts that bend, stretch, or seal under deflection.",
    "caution": "Elongation depends heavily on specimen preparation and test speed and should not be compared across different methods. Listed standards are illustrative and require verification before sourcing; use the official standard and an accredited or qualified lab for actual testing."
  },
  {
    "id": "modulus",
    "name": "Modulus at Specified Elongation",
    "whatItMeasures": "The stress required to stretch a rubber specimen to a defined elongation (for example a stated percentage of strain), reflecting stiffness within the working range rather than at break.",
    "whyItMatters": "Modulus is often a more telling fingerprint of cure state and reinforcement than tensile strength, because it samples the material before failure. It commonly helps confirm batch-to-batch consistency and how firmly a part will resist deformation in use.",
    "relevantProducts": [
      "rubber-seals",
      "rubber-bushings",
      "molded-parts",
      "rubber-pads",
      "rubber-sheet"
    ],
    "relevantMaterials": [
      "nbr",
      "sbr",
      "natural-rubber",
      "neoprene",
      "general-purpose"
    ],
    "sampleType": "Die-cut dumbbell specimens, typically shared with the tensile test",
    "failureMeaning": "A low modulus may suggest under-cure or insufficient reinforcement; a result may point to over-cure, excess filler, or a different compound than specified.",
    "relatedDefects": [
      "under-cure",
      "over-cure",
      "poor-dispersion"
    ],
    "relatedRfqQuestions": [
      "At what elongation should modulus be reported?",
      "Is modulus a specified acceptance property or for reference only?",
      "Do you need modulus tracked for lot-to-lot consistency?"
    ],
    "relatedStandards": [
      "astm-d412",
      "iso-37"
    ],
    "customerDocument": "A mechanical property report stating modulus at the agreed elongation, usually grouped with tensile and elongation values.",
    "explanation": "During a tensile pull, the stress is recorded at one or more defined strains rather than only at break. This intermediate stiffness, the modulus at a stated elongation, often shifts measurably with cure level and filler dispersion, making it a useful consistency check even when break values stay stable.",
    "caution": "Rubber modulus here means stress at a defined strain, not the elastic modulus of metals, so the reporting basis must be stated. Standards shown are examples and require verification before sourcing; use the official standard and an accredited or qualified lab for actual testing."
  },
  {
    "id": "tear-resistance",
    "name": "Tear Resistance",
    "whatItMeasures": "The force needed to propagate a tear through a rubber specimen, often using a nicked or specially shaped sample to concentrate the tearing action.",
    "whyItMatters": "Tear resistance commonly governs how a part survives handling, installation, and service where edges, holes, or notches exist. Gaskets, boots, and sheet goods that must be cut, clamped, or flexed often fail at a tear before they fail in pure tension.",
    "relevantProducts": [
      "cut-gaskets",
      "bellows-boots",
      "rubber-sheet",
      "sponge-foam-sheet",
      "custom-die-cut"
    ],
    "relevantMaterials": [
      "natural-rubber",
      "epdm",
      "neoprene",
      "silicone",
      "general-purpose"
    ],
    "sampleType": "Die-cut specimens of a defined tear geometry (for example angle or trouser style) from a sheet",
    "failureMeaning": "Low tear resistance may indicate under-cure, poor dispersion, contamination, or a compound not suited to the cutting and flexing the part will see.",
    "relatedDefects": [
      "under-cure",
      "poor-dispersion",
      "cracking"
    ],
    "relatedRfqQuestions": [
      "Will the part have cut edges, bolt holes, or notches that concentrate stress?",
      "Is a minimum tear resistance specified?",
      "Which tear specimen geometry should be used?"
    ],
    "relatedStandards": [
      "astm-d624",
      "iso-34"
    ],
    "customerDocument": "A test report stating tear resistance with the specimen geometry, sometimes included where parts have die-cut features.",
    "explanation": "Unlike tensile testing, tear tests deliberately concentrate force at a single point so the specimen fails by a tear propagating through it. Because real parts often have edges and holes, tear resistance can predict field durability better than tensile strength for cut or flexed goods. Results depend strongly on the chosen specimen shape.",
    "caution": "Tear values are method-specific and not comparable across different specimen geometries. The standards named are illustrative and require verification before sourcing; use the official standard and an accredited or qualified lab for actual testing."
  },
  {
    "id": "compression-set",
    "name": "Compression Set",
    "whatItMeasures": "The permanent deformation remaining after a rubber specimen has been held compressed for a period and then released, expressed as a percentage of the original compression that did not recover.",
    "whyItMatters": "Compression set is one of the most important properties for sealing parts. A high set means the rubber stays squashed and loses sealing force over time, so it commonly predicts long-term gasket and seal reliability under sustained load and temperature.",
    "relevantProducts": [
      "rubber-seals",
      "cut-gaskets",
      "rubber-pads",
      "molded-parts",
      "sponge-foam-sheet"
    ],
    "relevantMaterials": [
      "epdm",
      "nbr",
      "silicone",
      "neoprene",
      "high-temperature"
    ],
    "sampleType": "Molded discs or stacked plies held at a fixed deflection in a fixture",
    "failureMeaning": "A high set may indicate under-cure, an unsuitable polymer for the temperature, or compound aging, all of which can lead to seal leakage in service.",
    "relatedDefects": [
      "under-cure",
      "compression-set",
      "over-cure"
    ],
    "relatedRfqQuestions": [
      "What temperature and duration represent your service conditions?",
      "Is a maximum compression set specified?",
      "Will the seal be statically loaded for long periods?"
    ],
    "relatedStandards": [
      "astm-d395",
      "iso-815"
    ],
    "customerDocument": "A compression set report stating the percent set with the test temperature and exposure period used.",
    "explanation": "A specimen is compressed by a set amount, held under temperature for a defined time, then released and allowed to recover. The portion of the deformation that does not spring back is the compression set. Lower is better for seals, since it means the rubber keeps pushing against the mating surface and maintains a seal.",
    "caution": "Compression set is meaningful only with the temperature and duration stated, and lab conditions may not mirror real service. Standards listed are examples and require verification before sourcing; use the official standard and an accredited or qualified lab for actual testing."
  },
  {
    "id": "specific-gravity",
    "name": "Specific Gravity (Density)",
    "whatItMeasures": "The density of the cured rubber relative to water, a single value that reflects the overall compound formulation balance of polymer, fillers, and other ingredients.",
    "whyItMatters": "Specific gravity is a fast, inexpensive consistency check. Because each compound has a characteristic density, a shift commonly signals a formulation error, wrong material, or filler variation before more expensive tests are run.",
    "relevantProducts": [
      "rubber-sheet",
      "molded-parts",
      "cut-gaskets",
      "rubber-strips",
      "rubber-pads"
    ],
    "relevantMaterials": [
      "natural-rubber",
      "sbr",
      "nbr",
      "epdm",
      "general-purpose"
    ],
    "sampleType": "A small solid coupon or trimmed piece from a sheet or finished part",
    "failureMeaning": "A density outside the expected band may indicate a mixing error, the wrong compound, an off filler loading, or porosity and trapped air in the sample.",
    "relatedDefects": [
      "contamination",
      "trapped-air",
      "poor-dispersion"
    ],
    "relatedRfqQuestions": [
      "Do you have a target specific gravity for the specified compound?",
      "Should density be tracked per lot as a quick consistency check?",
      "Is the material solid or a sponge or foam grade?"
    ],
    "relatedStandards": [
      "astm-d297",
      "astm-d792",
      "iso-2781"
    ],
    "customerDocument": "A test report listing measured specific gravity against a nominal value, often part of a routine lot check.",
    "explanation": "Specific gravity is usually found by weighing a sample in air and in water and comparing. Since the value is highly repeatable for a given recipe, it acts as a low-cost fingerprint: a small deviation can flag that something in the mix changed, prompting a closer look before parts ship.",
    "caution": "Density confirms consistency, not performance, and porosity can bias the result. The standards cited are illustrative and require verification before sourcing; use the official standard and an accredited or qualified lab for actual testing."
  },
  {
    "id": "abrasion",
    "name": "Abrasion Resistance",
    "whatItMeasures": "How much rubber is worn away when a specimen is rubbed against an abrasive surface under controlled conditions, typically reported as volume or mass loss, or as an index relative to a reference.",
    "whyItMatters": "Abrasion resistance is central to wear parts. For linings and rolls that contact slurries, ore, or moving product, it commonly predicts service life and is a primary selection criterion for abrasion-resistant compounds.",
    "relevantProducts": [
      "abrasion-liners",
      "rubber-rolls",
      "tank-pipe-lining",
      "rubber-sheet",
      "pinch-valve-sleeves"
    ],
    "relevantMaterials": [
      "natural-rubber",
      "sbr",
      "polyurethane",
      "abrasion-resistant",
      "general-purpose"
    ],
    "sampleType": "Disc or button specimens, or a coupon cut from a lining sheet",
    "failureMeaning": "High wear loss may indicate the wrong compound for the duty, under-cure, poor dispersion, or contamination that creates weak spots.",
    "relatedDefects": [
      "poor-dispersion",
      "under-cure",
      "contamination"
    ],
    "relatedRfqQuestions": [
      "What is the abrasive media and is it sliding, impacting, or both?",
      "Is an abrasion loss limit or index specified?",
      "Which abrasion method best represents your wear mechanism?"
    ],
    "relatedStandards": [
      "astm-d5963",
      "iso-4649",
      "astm-d394"
    ],
    "customerDocument": "An abrasion test report stating the loss or index with the method used, often requested for wear-critical linings.",
    "explanation": "A specimen is pressed against a moving abrasive surface and the material removed is measured. Lab abrasion is a comparative screen: it ranks compounds and confirms consistency, but the real wear mechanism (sliding, gouging, impact) varies, so the chosen method should resemble the service condition as closely as possible.",
    "caution": "Lab abrasion results rank compounds but do not directly predict field life, which depends on the actual media and dynamics. Standards listed are examples and require verification before sourcing; use the official standard and an accredited or qualified lab for actual testing."
  },
  {
    "id": "heat-aging",
    "name": "Heat Aging",
    "whatItMeasures": "The change in properties such as hardness, tensile strength, and elongation after a specimen is held at elevated temperature for a period, showing how the compound degrades with heat exposure.",
    "whyItMatters": "Heat aging commonly predicts how a rubber will hold up over time at service temperature. Many failures are slow thermal degradation rather than sudden breakage, so aged property retention is a key durability indicator, especially for high-temperature grades.",
    "relevantProducts": [
      "high-temp-sheet",
      "rubber-seals",
      "bellows-boots",
      "molded-parts",
      "rubber-sleeves"
    ],
    "relevantMaterials": [
      "epdm",
      "silicone",
      "fkm",
      "high-temperature",
      "neoprene"
    ],
    "sampleType": "Coupons or dumbbells aged in an oven, then compared against unaged controls",
    "failureMeaning": "Large property changes after aging may indicate an unsuitable polymer for the temperature, weak antidegradant protection, under-cure, or a compound substitution.",
    "relatedDefects": [
      "hardness-drift",
      "cracking",
      "under-cure"
    ],
    "relatedRfqQuestions": [
      "What is the maximum continuous service temperature?",
      "How much property change after aging is acceptable?",
      "What aging temperature and duration represent your application?"
    ],
    "relatedStandards": [
      "astm-d573",
      "iso-188"
    ],
    "customerDocument": "A heat-aging report comparing before and after properties, with the aging temperature and time stated.",
    "explanation": "Specimens are held in a hot-air oven for a set time and temperature, then retested and compared to unaged controls. The percentage change in hardness, tensile, and elongation shows how the compound resists thermal degradation. It is a practical accelerated stand-in for long service exposure, though acceleration assumptions have limits.",
    "caution": "Accelerated aging approximates but does not equal real-time service, and over-acceleration can change degradation mechanisms. The standards named are illustrative and require verification before sourcing; use the official standard and an accredited or qualified lab for actual testing."
  },
  {
    "id": "ozone-weathering",
    "name": "Ozone and Weathering Resistance",
    "whatItMeasures": "Whether a strained rubber specimen develops surface cracks after exposure to a controlled ozone atmosphere or weathering conditions, indicating susceptibility to environmental cracking.",
    "whyItMatters": "Ozone cracking commonly affects rubber that is stretched or flexed outdoors or near electrical equipment. For exposed seals, boots, and sheet goods, ozone and weather resistance often determines whether a part survives in the field rather than just on the bench.",
    "relevantProducts": [
      "rubber-seals",
      "bellows-boots",
      "rubber-sheet",
      "rubber-strips",
      "molded-parts"
    ],
    "relevantMaterials": [
      "epdm",
      "neoprene",
      "csm",
      "butyl",
      "general-purpose"
    ],
    "sampleType": "Strained strip or loop specimens mounted in an ozone chamber or weathering exposure",
    "failureMeaning": "Surface cracking after exposure may indicate a polymer with poor ozone resistance, insufficient antiozonant protection, or the wrong compound for an outdoor or exposed application.",
    "relatedDefects": [
      "cracking",
      "bloom",
      "hardness-drift"
    ],
    "relatedRfqQuestions": [
      "Will the part be exposed to weather, sunlight, or ozone sources?",
      "Is the part under tension or flexing in service?",
      "Is ozone resistance a specified requirement?"
    ],
    "relatedStandards": [
      "astm-d1149",
      "iso-1431"
    ],
    "customerDocument": "An ozone or weathering exposure report noting whether cracking appeared under the agreed conditions.",
    "explanation": "Specimens are held under strain and exposed to an ozone-rich atmosphere or a weathering cycle, then examined for cracks. Saturated rubbers like EPDM and butyl typically resist ozone well, while diene rubbers often need antiozonant protection. The test screens whether a compound suits exposed, strained service.",
    "caution": "Chamber exposure approximates but cannot fully reproduce outdoor weather, and a surface bloom is not necessarily a failure. Standards shown are examples and require verification before sourcing; use the official standard and an accredited or qualified lab for actual testing."
  },
  {
    "id": "fluid-immersion",
    "name": "Fluid Immersion (Resistance to Liquids)",
    "whatItMeasures": "The change in volume, mass, hardness, and strength after a specimen is immersed in a specified fluid such as oil, fuel, or chemical for a period, showing how the rubber swells or degrades.",
    "whyItMatters": "Compatibility with the contacting fluid is often make-or-break for seals and linings. A compound that swells or softens excessively in service fluid commonly loses sealing force or strength, so immersion testing is a primary selection check for oil-resistant and chemical-service parts.",
    "relevantProducts": [
      "rubber-seals",
      "tank-pipe-lining",
      "pinch-valve-sleeves",
      "cut-gaskets",
      "molded-parts"
    ],
    "relevantMaterials": [
      "nbr",
      "fkm",
      "epdm",
      "oil-resistant",
      "neoprene"
    ],
    "sampleType": "Coupons or dumbbells immersed in the test fluid, compared against unexposed controls",
    "failureMeaning": "Excessive swelling, weight change, or property loss may indicate an incompatible polymer, the wrong compound, or a fluid more aggressive than assumed.",
    "relatedDefects": [
      "swelling",
      "hardness-drift",
      "cracking"
    ],
    "relatedRfqQuestions": [
      "What fluids will the part contact, and at what temperature?",
      "Are there limits on allowable volume or property change?",
      "Should a representative service fluid or a standard reference fluid be used?"
    ],
    "relatedStandards": [
      "astm-d471",
      "iso-1817"
    ],
    "customerDocument": "A fluid immersion report listing volume and property changes with the fluid, temperature, and duration noted.",
    "explanation": "Specimens are immersed in the chosen fluid at temperature for a set time, then measured for changes in size, weight, hardness, and strength. Some swelling can be acceptable, but large changes signal incompatibility. Matching the polymer family to the fluid (for example NBR for oils, EPDM for many polar fluids) is fundamental.",
    "caution": "Standard reference fluids approximate but do not equal real service fluids, which vary by additive and temperature. The standards listed are illustrative and require verification before sourcing; use the official standard and an accredited or qualified lab for actual testing."
  },
  {
    "id": "low-temp-flex",
    "name": "Low-Temperature Flexibility",
    "whatItMeasures": "Whether a rubber specimen remains flexible or becomes brittle and stiff when chilled, often assessed by bending, impact, or a stiffening point at reduced temperature.",
    "whyItMatters": "Cold service can turn an otherwise good seal or boot rigid, causing cracking or loss of sealing. Low-temperature behavior commonly determines suitability for outdoor, refrigerated, or cold-climate applications and is a key limit for polymer selection.",
    "relevantProducts": [
      "bellows-boots",
      "rubber-seals",
      "rubber-sleeves",
      "rubber-sheet",
      "molded-parts"
    ],
    "relevantMaterials": [
      "silicone",
      "epdm",
      "nbr",
      "neoprene",
      "general-purpose"
    ],
    "sampleType": "Strip or coupon specimens conditioned to low temperature, then bent or impacted",
    "failureMeaning": "Stiffening or brittle fracture at the test temperature may indicate a polymer or plasticizer system unsuited to cold service, or a compound substitution.",
    "relatedDefects": [
      "cracking",
      "hardness-drift",
      "swelling"
    ],
    "relatedRfqQuestions": [
      "What is the lowest temperature the part will see?",
      "Will the part be flexed or sealing while cold?",
      "Is a minimum low-temperature flexibility specified?"
    ],
    "relatedStandards": [
      "astm-d2137",
      "astm-d1053",
      "iso-812"
    ],
    "customerDocument": "A low-temperature report stating the behavior (pass, brittle point, or stiffening) at the agreed temperature.",
    "explanation": "Specimens are cooled to a target temperature and then bent or struck to see whether they stay flexible or crack. Silicone typically excels in cold, while many compounds stiffen as plasticizers lose mobility. The test defines a practical cold limit for the part and guides polymer choice for cold climates.",
    "caution": "Brittleness and stiffening limits depend on the method and how the part is loaded, so lab results guide rather than guarantee field behavior. Standards cited are examples and require verification before sourcing; use the official standard and an accredited or qualified lab for actual testing."
  },
  {
    "id": "thickness",
    "name": "Thickness and Gauge",
    "whatItMeasures": "The measured thickness of sheet, lining, or a part feature, checked at points or across an area against the specified gauge and tolerance.",
    "whyItMatters": "Thickness commonly affects sealing, fit, wear life, and material cost. Out-of-gauge sheet or lining can leak, fail to fit, or wear through early, so dimensional gauge control is a routine and high-frequency acceptance check.",
    "relevantProducts": [
      "rubber-sheet",
      "tank-pipe-lining",
      "abrasion-liners",
      "fabric-reinforced-sheet",
      "sponge-foam-sheet"
    ],
    "relevantMaterials": [
      "general-purpose",
      "abrasion-resistant",
      "natural-rubber",
      "epdm",
      "neoprene"
    ],
    "sampleType": "Sheet or finished part measured directly, or coupons taken across the width",
    "failureMeaning": "Out-of-tolerance thickness may indicate calendering or molding variation, gauge band drift across width, or shrinkage, any of which can affect fit and performance.",
    "relatedDefects": [
      "trapped-air",
      "hardness-drift",
      "compression-set"
    ],
    "relatedRfqQuestions": [
      "What nominal thickness and tolerance do you require?",
      "Is thickness critical across the full width or only at specific points?",
      "Should thickness be measured per roll, per sheet, or per part?"
    ],
    "relatedStandards": [
      "astm-d3767",
      "iso-23529"
    ],
    "customerDocument": "A dimensional report or gauge map listing measured thickness against the specified range.",
    "explanation": "Thickness is measured with a calibrated gauge at agreed locations, since rubber sheet and lining can vary across width and length. Consistent gauge matters for sealing surfaces, lining wear allowance, and material usage. Soft and sponge materials need a defined contact force so the gauge does not compress them and read low.",
    "caution": "Soft, sponge, or textured materials can read inconsistently depending on gauge pressure, so the measurement basis must be defined. The standards named are illustrative and require verification before sourcing; use the official standard and an accredited or qualified lab for actual testing."
  },
  {
    "id": "dimensional",
    "name": "Dimensional Inspection",
    "whatItMeasures": "Whether the overall dimensions of a part or cut piece (length, width, diameter, hole pattern, profile) fall within the specified tolerances.",
    "whyItMatters": "Dimensional accuracy commonly determines whether a gasket, die-cut, or molded part fits and seals on the mating hardware. Because rubber shrinks and deforms, dimensional checks are essential to confirm parts assemble correctly the first time.",
    "relevantProducts": [
      "cut-gaskets",
      "custom-die-cut",
      "molded-parts",
      "rubber-washers",
      "rubber-bushings"
    ],
    "relevantMaterials": [
      "general-purpose",
      "nbr",
      "epdm",
      "neoprene",
      "natural-rubber"
    ],
    "sampleType": "Finished cut or molded parts measured against the drawing",
    "failureMeaning": "Out-of-tolerance dimensions may indicate mold shrinkage variation, tooling wear, cutting setup drift, or material movement after processing.",
    "relatedDefects": [
      "compression-set",
      "trapped-air",
      "over-cure"
    ],
    "relatedRfqQuestions": [
      "Do you have a drawing with dimensions and tolerances?",
      "Which dimensions are critical to fit and function?",
      "Is first-article dimensional approval required before production?"
    ],
    "relatedStandards": [
      "iso-3302-1",
      "astm-d3767",
      "iso-23529"
    ],
    "customerDocument": "A dimensional inspection report or first-article report listing measured dimensions against the drawing tolerances.",
    "explanation": "Parts are measured against the drawing, ideally with attention to the features that drive fit and sealing. Rubber adds complexity because it is flexible and can shrink after molding, so measuring conditions and how the part is supported matter. Critical dimensions are usually identified up front so inspection focuses where it counts.",
    "caution": "Flexible parts can measure differently depending on how they are held and at what temperature, so the method should be agreed. Standards listed are examples and require verification before sourcing; use the official standard and an accredited or qualified lab for actual testing."
  },
  {
    "id": "visual",
    "name": "Visual Inspection",
    "whatItMeasures": "The presence of visible surface and edge defects such as blisters, pits, tears, inclusions, flash, bloom, or color irregularity, judged against agreed acceptance criteria.",
    "whyItMatters": "Visual inspection is the most universal and frequent quality gate. Many defects that signal deeper process problems first show up as visible features, and customers commonly expect a clean, defect-free surface on sealing and appearance-critical parts.",
    "relevantProducts": [
      "rubber-sheet",
      "molded-parts",
      "cut-gaskets",
      "rubber-seals",
      "custom-die-cut"
    ],
    "relevantMaterials": [
      "general-purpose",
      "natural-rubber",
      "epdm",
      "neoprene",
      "silicone"
    ],
    "sampleType": "Finished parts or sheet examined directly, often the full lot or a sampling",
    "failureMeaning": "Visible defects may indicate trapped air, contamination, bloom, under-cure or over-cure, or handling damage, each pointing to a different upstream cause.",
    "relatedDefects": [
      "trapped-air",
      "contamination",
      "bloom"
    ],
    "relatedRfqQuestions": [
      "Do you have a visual acceptance standard or limit samples?",
      "Are cosmetic defects acceptable if function is unaffected?",
      "Which surfaces are appearance- or seal-critical?"
    ],
    "relatedStandards": [
      "iso-3302-1",
      "astm-d3183"
    ],
    "customerDocument": "A visual inspection record or acceptance note, sometimes referencing photographs or limit samples.",
    "explanation": "Trained inspection compares parts to agreed criteria or limit samples, flagging blisters, inclusions, flash, surface bloom, and color issues. Because it catches a wide range of problems early and cheaply, visual inspection underpins most quality plans. Clear, shared acceptance criteria prevent disputes over what counts as a defect.",
    "caution": "Visual judgment is subjective without limit samples or defined criteria, and a cosmetic bloom is not always a functional defect. The standards cited are illustrative and require verification before sourcing; use the official standard and an accredited or qualified lab for actual testing."
  },
  {
    "id": "adhesion",
    "name": "Adhesion (Bond Strength)",
    "whatItMeasures": "The strength of the bond between rubber and a substrate such as metal, fabric, or another rubber layer, typically assessed by peeling or pulling the layers apart and noting where failure occurs.",
    "whyItMatters": "For bonded and lined parts, the bond is often the weakest link. Linings that debond or bushings that separate from metal commonly fail in service even when the rubber itself is sound, so adhesion is a critical check for composite and lined products.",
    "relevantProducts": [
      "tank-pipe-lining",
      "rubber-bushings",
      "abrasion-liners",
      "rubber-rolls",
      "fabric-reinforced-sheet"
    ],
    "relevantMaterials": [
      "natural-rubber",
      "neoprene",
      "nbr",
      "abrasion-resistant",
      "general-purpose"
    ],
    "sampleType": "Bonded coupons or sections of a lined or composite part prepared for peel or pull testing",
    "failureMeaning": "Low bond strength or failure at the interface may indicate poor surface preparation, adhesive or primer issues, contamination, or under-cure of the bond.",
    "relatedDefects": [
      "poor-adhesion",
      "contamination",
      "under-cure"
    ],
    "relatedRfqQuestions": [
      "What substrate is the rubber bonded to?",
      "Is a minimum bond strength or failure mode specified?",
      "Should adhesion be checked on production parts or witness coupons?"
    ],
    "relatedStandards": [
      "astm-d429",
      "astm-d413",
      "iso-813"
    ],
    "customerDocument": "An adhesion test report stating bond strength and the failure mode (for example rubber tear versus interface separation).",
    "explanation": "Bonded specimens are peeled or pulled apart and the force and failure location are recorded. The preferred outcome is failure within the rubber rather than at the interface, since that shows the bond is stronger than the material. Surface preparation and primer application are usually the decisive factors for good adhesion.",
    "caution": "Bond results depend heavily on surface preparation and specimen design, and witness coupons may not perfectly represent production parts. Standards shown are examples and require verification before sourcing; use the official standard and an accredited or qualified lab for actual testing."
  },
  {
    "id": "fabric-inspection",
    "name": "Fabric and Reinforcement Inspection",
    "whatItMeasures": "The condition, placement, count, and bonding of fabric plies or reinforcement layers within a reinforced rubber product, including ply alignment and any exposed or wrinkled reinforcement.",
    "whyItMatters": "In fabric-reinforced sheet and similar products, the reinforcement carries load and controls stretch. Misplaced, wrinkled, or poorly bonded plies commonly cause delamination, uneven strength, or early failure, so reinforcement inspection is key for these composite goods.",
    "relevantProducts": [
      "fabric-reinforced-sheet",
      "tank-pipe-lining",
      "rubber-sleeves",
      "bellows-boots",
      "pinch-valve-sleeves"
    ],
    "relevantMaterials": [
      "general-purpose",
      "neoprene",
      "nbr",
      "natural-rubber",
      "epdm"
    ],
    "sampleType": "Cross-sections or cut coupons exposing the ply structure, plus surface examination of the finished product",
    "failureMeaning": "Defects in the reinforcement may indicate ply misalignment, wrinkling, poor ply-to-ply adhesion, or trapped air, leading to weak spots or delamination.",
    "relatedDefects": [
      "poor-adhesion",
      "trapped-air",
      "contamination"
    ],
    "relatedRfqQuestions": [
      "How many plies and what reinforcement type are required?",
      "Is ply count or orientation specified?",
      "Should a cross-section be reviewed to confirm ply integrity?"
    ],
    "relatedStandards": [
      "astm-d413",
      "iso-3302-1"
    ],
    "customerDocument": "An inspection report or cross-section review noting ply count, placement, and bond condition for reinforced products.",
    "explanation": "Reinforced products are examined at the surface and often in cross-section to confirm the fabric or cord plies are present, correctly placed, and well bonded. Because the reinforcement governs strength and stretch direction, problems like wrinkles or weak ply bonds can undermine an otherwise good rubber matrix. This check complements adhesion testing.",
    "caution": "Cross-sectioning is destructive and samples only specific locations, so it indicates but does not guarantee whole-part integrity. The standards listed are illustrative and require verification before sourcing; use the official standard and an accredited or qualified lab for actual testing."
  },
  {
    "id": "surface-finish",
    "name": "Surface Finish and Texture",
    "whatItMeasures": "The texture, smoothness, gloss, or defined finish of a part surface, judged against agreed criteria such as a specified finish callout or comparison samples.",
    "whyItMatters": "Surface finish commonly affects sealing on smooth mating faces, grip or release on rolls, cleanability on food-contact surfaces, and appearance. A finish that is too rough or too glossy can impair function, so it is checked where the surface does real work.",
    "relevantProducts": [
      "rubber-rolls",
      "molded-parts",
      "rubber-seals",
      "food-grade-sheet",
      "rubber-sheet"
    ],
    "relevantMaterials": [
      "silicone",
      "epdm",
      "neoprene",
      "food-grade",
      "general-purpose"
    ],
    "sampleType": "Finished parts or representative surface areas compared to a finish standard or sample",
    "failureMeaning": "An off finish may indicate mold surface wear, release issues, contamination, or process variation, and on rolls or seals can affect grip, release, or sealing.",
    "relatedDefects": [
      "contamination",
      "bloom",
      "over-cure"
    ],
    "relatedRfqQuestions": [
      "Is a specific surface finish or texture required?",
      "Does the surface need to seal, grip, release, or be easily cleaned?",
      "Are comparison samples available to define acceptable finish?"
    ],
    "relatedStandards": [
      "iso-3302-1",
      "astm-d3183"
    ],
    "customerDocument": "A surface finish acceptance note, often referencing a finish callout or agreed comparison samples.",
    "explanation": "Surface finish is assessed against an agreed reference, since the right texture depends on the job: a sealing face may need smoothness, a drive roll a controlled texture, and a food-contact sheet an easily cleaned surface. Mold condition and release practices strongly influence finish, so consistency here reflects tooling and process control.",
    "caution": "Finish acceptance is often subjective without comparison samples, and surface bloom can be mistaken for a finish defect. Standards cited are examples and require verification before sourcing; use the official standard and an accredited or qualified lab for actual testing."
  },
  {
    "id": "color-check",
    "name": "Color and Appearance Check",
    "whatItMeasures": "Whether the part color and appearance match an agreed reference or color standard, including shade consistency across a lot and from lot to lot.",
    "whyItMatters": "Color commonly carries meaning in rubber goods: it can signal a grade, a food or potable rating, or a customer brand expectation. Color shift can also hint at compound variation, so appearance matching supports both identification and consistency.",
    "relevantProducts": [
      "food-grade-sheet",
      "rubber-sheet",
      "molded-parts",
      "potable-water-sheet",
      "rubber-strips"
    ],
    "relevantMaterials": [
      "food-grade",
      "silicone",
      "epdm",
      "potable-water",
      "general-purpose"
    ],
    "sampleType": "Finished parts or sheet compared visually or instrumentally to a color reference",
    "failureMeaning": "A color mismatch may indicate pigment or compound variation, contamination, cure differences, or use of the wrong material grade.",
    "relatedDefects": [
      "contamination",
      "bloom",
      "hardness-drift"
    ],
    "relatedRfqQuestions": [
      "Is there a required color or color standard to match?",
      "Does color indicate a specific grade or rating for your use?",
      "How tight must shade consistency be across lots?"
    ],
    "relatedStandards": [
      "astm-d2244",
      "astm-d1729"
    ],
    "customerDocument": "A color match or appearance report referencing the agreed color standard or limit samples.",
    "explanation": "Color is judged against a reference, either visually under controlled lighting or with an instrument that reports color values. Because color sometimes encodes a grade or rating and reflects compound consistency, a shift can prompt investigation. Pigment loading, cure, and contamination all influence the final shade.",
    "caution": "Color is not a substitute for verifying grade or rating, and color alone never confirms a food or potable status. The standards named are illustrative and require verification before sourcing; use the official standard and an accredited or qualified lab for actual testing."
  },
  {
    "id": "traceability-review",
    "name": "Traceability Review",
    "whatItMeasures": "Whether materials, batches, and finished parts can be linked back through records such as compound lot numbers, batch identifiers, and production records, establishing a documented chain from raw material to shipped product.",
    "whyItMatters": "Traceability commonly underpins quality investigations, recalls, and regulated applications. When a problem arises, the ability to trace a part to its compound lot and process records often determines how quickly and narrowly an issue can be contained.",
    "relevantProducts": [
      "food-grade-sheet",
      "potable-water-sheet",
      "molded-parts",
      "rubber-seals",
      "tank-pipe-lining"
    ],
    "relevantMaterials": [
      "food-grade",
      "potable-water",
      "high-temperature",
      "oil-resistant",
      "general-purpose"
    ],
    "sampleType": "Documentation and records rather than a physical specimen, cross-referenced to finished parts",
    "failureMeaning": "Gaps in traceability may indicate weak lot control, missing batch records, or labeling errors, which can complicate investigations and undermine confidence in regulated parts.",
    "relatedDefects": [
      "contamination",
      "hardness-drift",
      "poor-dispersion"
    ],
    "relatedRfqQuestions": [
      "Do you require lot or batch traceability on shipped parts?",
      "Should compound lot numbers appear on documentation or packaging?",
      "Is traceability needed for regulated or safety-critical use?"
    ],
    "relatedStandards": [
      "iso-9001"
    ],
    "customerDocument": "A traceability record or statement linking the shipped lot to its compound batch and production records.",
    "explanation": "Traceability review checks that records connect each shipped part to its compound lot and key process steps. Strong traceability lets a manufacturer isolate which parts share a suspect batch, narrowing containment and supporting regulated applications. It is a documentation and systems check rather than a physical material test.",
    "caution": "Traceability records confirm linkage and control, not material performance, and a clean record does not by itself certify any property. The standard cited is illustrative and requires verification before sourcing; use the official standard and an accredited or qualified lab for actual testing where physical properties are involved."
  },
  {
    "id": "coc-review",
    "name": "Certificate of Conformance Review",
    "whatItMeasures": "Whether a certificate of conformance and any attached test data correctly state that the supplied product meets the agreed specification, with the right references, lot identification, and reported results.",
    "whyItMatters": "The certificate of conformance is often the document a customer relies on at receiving. A complete, accurate certificate commonly speeds acceptance and supports the customer's own quality records, while gaps or mismatches can hold up a shipment.",
    "relevantProducts": [
      "rubber-sheet",
      "cut-gaskets",
      "molded-parts",
      "food-grade-sheet",
      "potable-water-sheet"
    ],
    "relevantMaterials": [
      "general-purpose",
      "food-grade",
      "potable-water",
      "oil-resistant",
      "high-temperature"
    ],
    "sampleType": "Documentation review of the certificate and supporting test records against the specification",
    "failureMeaning": "An incomplete or inconsistent certificate may indicate a specification mismatch, transcription error, missing test data, or unclear lot identification that should be resolved before acceptance.",
    "relatedDefects": [
      "hardness-drift",
      "contamination",
      "under-cure"
    ],
    "relatedRfqQuestions": [
      "What must the certificate of conformance reference and include?",
      "Do you require specific test results attached to the certificate?",
      "Should the certificate cite the specification revision and lot numbers?"
    ],
    "relatedStandards": [
      "iso-9001",
      "iso-10474"
    ],
    "customerDocument": "The certificate of conformance itself, often with attached test reports, reviewed against the purchase specification.",
    "explanation": "Reviewing the certificate of conformance confirms it names the correct specification and revision, identifies the lot, and reports the agreed results consistently. Because customers often accept material on the strength of this document, catching mismatches before shipment avoids rejections at the customer dock. It is a documentation check, not a physical test.",
    "caution": "A certificate attests to claimed conformance but is only as reliable as the underlying testing and records behind it. The standards listed are illustrative and require verification before sourcing; use the official standard and an accredited or qualified lab for actual testing of physical properties."
  }
];

export const qualityTestsById: Record<string, QualityTest> = Object.fromEntries(
  qualityTests.map((t) => [t.id, t]),
);
