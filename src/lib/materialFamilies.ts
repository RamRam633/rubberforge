import type { MaterialFamily, FilterTag } from "@/types/platform";

// Generated rubber material families (preliminary, qualitative, educational).
export const materialFamilies: MaterialFamily[] = [
  {
    "id": "natural-rubber",
    "displayName": "Natural Rubber",
    "abbreviation": "NR",
    "kind": "polymer",
    "polymerFamily": "Polyisoprene (natural)",
    "commonNames": [
      "Natural rubber",
      "NR",
      "Polyisoprene",
      "Pale crepe / RSS grades"
    ],
    "costTier": "low",
    "weatherResistance": "low",
    "oilResistance": "low",
    "waterResistance": "high",
    "chemicalResistance": "medium",
    "abrasionResistance": "very-high",
    "temperatureBand": "low",
    "temperatureNote": "Generally suited to moderate service temperatures; performance commonly falls off as heat increases and the material is not typically chosen for sustained hot service. Generally stays flexible well in cold.",
    "strengths": [
      "Very high resilience and rebound (low heat build-up under flexing)",
      "Excellent abrasion and tear resistance",
      "High tensile strength even in gum (unfilled) compounds",
      "Good low-temperature flexibility",
      "Strong dynamic fatigue performance"
    ],
    "limitations": [
      "Poor resistance to petroleum oils, fuels and greases (commonly swells)",
      "Weak ozone, weathering and UV resistance unless protected",
      "Limited high-temperature capability",
      "Attacked by many strong oxidizing chemicals"
    ],
    "applications": [
      "Anti-vibration mounts and bushings",
      "Conveyor belt covers and skirtboard",
      "Tyre and tread-related dynamic parts",
      "Springs, bumpers and shock pads",
      "General mechanical rubber goods needing resilience"
    ],
    "productForms": [
      "Molded parts",
      "Extruded profiles",
      "Sheet and strip",
      "Calendered fabric-reinforced sheet",
      "Lathe-cut and die-cut parts"
    ],
    "chemicalCharacter": "A non-polar, highly unsaturated hydrocarbon elastomer (cis-1,4-polyisoprene) valued for resilience but reactive at its backbone double bonds.",
    "polarity": "low",
    "saturation": "unsaturated",
    "cureConcept": "sulfur-style cure system (conceptual)",
    "whyItBehaves": "The flexible, regular cis-polyisoprene chains crystallize under strain, giving very high strength and abrasion resistance, while the many backbone double bonds that allow ready sulfur curing also leave it vulnerable to ozone, oxygen and oil swelling.",
    "bestEnvironments": [
      "Dynamic mechanical loading and vibration isolation",
      "Wet and water-contact service",
      "Cold or moderate ambient conditions",
      "Abrasive bulk-material handling"
    ],
    "weakEnvironments": [
      "Petroleum oil, fuel and grease contact",
      "Outdoor ozone and prolonged UV exposure",
      "Sustained high heat"
    ],
    "quoteQuestions": [
      "Will the part see any petroleum oils, fuels or greases, even as splash or mist?",
      "Is the service indoor or exposed to outdoor ozone and sunlight (does it need antiozonant protection or a different family)?",
      "What is the dynamic duty (flexing, impact, vibration) versus static load?",
      "What maximum sustained operating temperature is expected?"
    ],
    "manufacturingNotes": "Commonly molded, extruded and calendered; generally takes high reinforcement and bonds well to fabric and metal. Compound design and protective additives strongly influence weather and aging behaviour, so application review is advised.",
    "cautionNotes": "Natural rubber latex proteins can be an allergen concern in some skin-contact uses; specify the requirement so an appropriate grade or alternative can be reviewed.",
    "chemistryNotes": "Strain-induced crystallization is the structural reason for its high gum strength; the same unsaturated backbone is why it commonly needs antioxidant and antiozonant protection for outdoor life.",
    "compatibilityNotes": "Generally compatible with water and many dilute aqueous solutions; generally not selected for petroleum oils, fuels or strong oxidizers. Final compatibility requires technical review against the actual media.",
    "safeExplanation": "Natural rubber is an unsaturated, non-polar elastomer known for very high resilience, abrasion and tear strength, but it is generally not selected for petroleum oil contact or prolonged outdoor ozone exposure.",
    "filterTags": [
      "abrasion-resistant",
      "water-resistant",
      "general-purpose"
    ]
  },
  {
    "id": "sbr",
    "displayName": "Styrene-Butadiene Rubber",
    "abbreviation": "SBR",
    "kind": "polymer",
    "polymerFamily": "Styrene-butadiene copolymer",
    "commonNames": [
      "Styrene-butadiene rubber",
      "SBR",
      "Buna-S (historical)",
      "GR-S (historical)"
    ],
    "costTier": "low",
    "weatherResistance": "low",
    "oilResistance": "low",
    "waterResistance": "high",
    "chemicalResistance": "medium",
    "abrasionResistance": "high",
    "temperatureBand": "low",
    "temperatureNote": "Generally suited to moderate temperatures, broadly similar to natural rubber; not typically chosen for sustained hot service.",
    "strengths": [
      "Cost-effective, widely available general-purpose elastomer",
      "Good abrasion resistance",
      "Consistent quality from synthetic production",
      "Good water resistance",
      "Blends readily with natural rubber and other diene rubbers"
    ],
    "limitations": [
      "Poor resistance to petroleum oils and fuels",
      "Weak ozone, UV and weathering resistance unless protected",
      "Lower resilience and higher heat build-up than natural rubber",
      "Limited high-temperature capability"
    ],
    "applications": [
      "General mechanical rubber goods",
      "Conveyor belt covers",
      "Shoe soles and heels",
      "Floor mats and matting",
      "Molded and extruded utility parts"
    ],
    "productForms": [
      "Molded parts",
      "Extruded profiles",
      "Sheet and strip",
      "Calendered sheet",
      "Die-cut parts"
    ],
    "chemicalCharacter": "A non-polar, unsaturated synthetic hydrocarbon copolymer of styrene and butadiene, a common general-purpose rubber.",
    "polarity": "low",
    "saturation": "unsaturated",
    "cureConcept": "sulfur-style cure system (conceptual)",
    "whyItBehaves": "The styrene units stiffen and toughen the butadiene backbone, giving good abrasion at low cost, but the residual unsaturation leaves it open to ozone and oxidation, and its non-polar nature means petroleum oils commonly swell it.",
    "bestEnvironments": [
      "General-purpose indoor mechanical service",
      "Wet and water-contact applications",
      "Abrasive wear surfaces at moderate temperature"
    ],
    "weakEnvironments": [
      "Petroleum oil and fuel contact",
      "Outdoor ozone and UV exposure",
      "Sustained high heat"
    ],
    "quoteQuestions": [
      "Is this a cost-driven general-purpose part, or are there oil, ozone or heat demands that point to another family?",
      "Will the part be exposed outdoors to sunlight and ozone?",
      "Is any petroleum oil, fuel or grease contact expected?",
      "What abrasion or wear duty does the surface need to handle?"
    ],
    "manufacturingNotes": "Generally processes much like natural rubber and is frequently blended with it; molded, extruded and calendered with conventional methods. Protective additives strongly influence outdoor life, so review the exposure.",
    "cautionNotes": "Often selected primarily on cost; confirm that oil, weather or temperature demands are genuinely modest before specifying, or a more capable family may be required.",
    "chemistryNotes": "Higher bound-styrene content generally raises hardness and abrasion resistance but reduces low-temperature flexibility; the trade-off is set in compound design.",
    "compatibilityNotes": "Generally compatible with water and many dilute aqueous media; generally not selected for petroleum oils and fuels. Confirm against the actual service media by technical review.",
    "safeExplanation": "SBR is an unsaturated, non-polar general-purpose elastomer known for good abrasion resistance and low cost, but like natural rubber it is generally not selected for petroleum oil contact or prolonged outdoor ozone exposure.",
    "filterTags": [
      "general-purpose",
      "abrasion-resistant",
      "water-resistant"
    ]
  },
  {
    "id": "epdm",
    "displayName": "Ethylene Propylene Diene Rubber",
    "abbreviation": "EPDM",
    "kind": "polymer",
    "polymerFamily": "Ethylene-propylene-diene terpolymer",
    "commonNames": [
      "EPDM",
      "Ethylene propylene diene monomer rubber",
      "EP rubber (EPM/EPDM family)",
      "Nordel (trade-name example)"
    ],
    "costTier": "medium",
    "weatherResistance": "very-high",
    "oilResistance": "low",
    "waterResistance": "very-high",
    "chemicalResistance": "high",
    "abrasionResistance": "medium",
    "temperatureBand": "high",
    "temperatureNote": "Generally good for elevated-temperature service in air, steam and hot water, with good low-temperature flexibility; not suited to hot petroleum oil.",
    "strengths": [
      "Outstanding ozone, UV and weathering resistance",
      "Excellent resistance to water, steam and hot water",
      "Good resistance to many polar fluids, dilute acids and bases",
      "Good electrical insulation properties",
      "Good heat and low-temperature performance"
    ],
    "limitations": [
      "Poor resistance to petroleum oils, fuels and most hydrocarbon solvents (commonly swells badly)",
      "Lower abrasion and tear strength than NR/SBR in many compounds",
      "Bonding to metal and to oil-resistant rubbers needs care",
      "Generally not selected for mineral-oil-based hydraulic systems"
    ],
    "applications": [
      "Weatherseals, glazing and architectural gaskets",
      "Roofing membrane and outdoor seals",
      "Hot-water and steam seals and hoses",
      "Automotive coolant and cooling-system parts",
      "Electrical insulation and connector seals"
    ],
    "productForms": [
      "Extruded profiles and seals",
      "Sponge and dense weatherstrip",
      "Molded parts",
      "Sheet",
      "Hose and tubing"
    ],
    "chemicalCharacter": "A non-polar polyolefin elastomer with a saturated main chain whose curing unsaturation sits on pendant diene side groups rather than in the backbone.",
    "polarity": "low",
    "saturation": "saturated",
    "cureConcept": "sulfur-style or peroxide-style cure system (conceptual), depending on diene type and requirements",
    "whyItBehaves": "Because the saturated ethylene-propylene main chain has no reactive backbone double bonds, EPDM generally resists ozone, oxygen, UV and hot water, while its non-polar hydrocarbon nature is the same reason petroleum oils commonly swell it and rule it out for oil service.",
    "bestEnvironments": [
      "Outdoor and weather-exposed sealing",
      "Hot water, steam and coolant contact",
      "Dilute acids, bases and many polar chemicals",
      "UV and ozone-rich environments"
    ],
    "weakEnvironments": [
      "Petroleum oils, fuels and greases",
      "Aliphatic and aromatic hydrocarbon solvents",
      "Mineral-oil hydraulic fluids"
    ],
    "quoteQuestions": [
      "Is the part for outdoor weather, ozone, water or steam service (EPDM's strengths)?",
      "Is there any petroleum oil, fuel, grease or hydrocarbon solvent contact (which generally rules EPDM out)?",
      "Does it need a peroxide-style cure for higher heat and lower compression set?",
      "Will it be bonded to metal or to an oil-resistant rubber, which needs adhesion review?"
    ],
    "manufacturingNotes": "Available in sulfur-curable and peroxide-curable grades; peroxide systems generally improve heat and compression-set performance. Keeping oil-resistant and EPDM compounds separated in tooling can matter where cross-contamination would affect the part.",
    "cautionNotes": "A very common misapplication is using EPDM where oil contact occurs; confirm the fluid list before specifying. Bonding and co-curing with oil-resistant rubbers requires technical review.",
    "chemistryNotes": "The third (diene) monomer mainly provides pendant cure sites; the load-bearing backbone stays largely saturated, which is the root of the weather and ozone resistance.",
    "compatibilityNotes": "Generally compatible with water, steam, glycol coolants, and many dilute aqueous chemicals; generally incompatible with petroleum oils and hydrocarbon solvents. Verify against the actual media.",
    "safeExplanation": "EPDM is a non-polar elastomer family with a saturated backbone, known for weather, ozone, water and steam resistance, but it is generally not selected for petroleum oil exposure.",
    "filterTags": [
      "weather-resistant",
      "water-resistant",
      "high-temperature",
      "chemical-resistant"
    ]
  },
  {
    "id": "nbr",
    "displayName": "Nitrile Rubber",
    "abbreviation": "NBR",
    "kind": "polymer",
    "polymerFamily": "Acrylonitrile-butadiene copolymer",
    "commonNames": [
      "Nitrile rubber",
      "NBR",
      "Buna-N",
      "Nitrile (acrylonitrile-butadiene)"
    ],
    "costTier": "medium",
    "weatherResistance": "low",
    "oilResistance": "high",
    "waterResistance": "high",
    "chemicalResistance": "medium",
    "abrasionResistance": "high",
    "temperatureBand": "medium",
    "temperatureNote": "Generally suited to moderate to moderately elevated temperatures in oil; capability and low-temperature flexibility commonly shift with acrylonitrile content.",
    "strengths": [
      "Strong resistance to petroleum oils, fuels and greases",
      "Good abrasion and mechanical strength",
      "Good resistance to many aliphatic hydrocarbons",
      "Wide range of grades tunable by acrylonitrile level",
      "Good water resistance"
    ],
    "limitations": [
      "Poor ozone, UV and weathering resistance (commonly cracks outdoors unless protected)",
      "Generally not suited to strong oxidizers, ketones, esters or many polar solvents",
      "Limited high-temperature capability versus FKM",
      "Low-temperature flexibility trades off against oil resistance"
    ],
    "applications": [
      "Oil seals, O-rings and gaskets",
      "Fuel and oil hoses",
      "Hydraulic seals and diaphragms",
      "Engine and transmission components",
      "Oilfield and automotive sealing"
    ],
    "productForms": [
      "O-rings and molded seals",
      "Extruded profiles and hose",
      "Sheet and gasket stock",
      "Diaphragms",
      "Die-cut and lathe-cut parts"
    ],
    "chemicalCharacter": "A polar, unsaturated copolymer whose nitrile (acrylonitrile) groups provide the oil resistance while the butadiene segments retain rubbery flexibility.",
    "polarity": "medium",
    "saturation": "unsaturated",
    "cureConcept": "sulfur-style cure system (conceptual)",
    "whyItBehaves": "The polar nitrile groups resist swelling by non-polar petroleum oils, which is the central reason nitrile is chosen, but the butadiene backbone keeps reactive double bonds that leave it weak against ozone and weather; raising acrylonitrile content generally boosts oil resistance while reducing cold flexibility.",
    "bestEnvironments": [
      "Petroleum oil, fuel and grease sealing",
      "Hydraulic and lubrication systems",
      "Engine-compartment indoor service",
      "Aliphatic hydrocarbon contact"
    ],
    "weakEnvironments": [
      "Outdoor ozone, UV and weathering",
      "Ketones, esters and strong polar solvents",
      "Strong oxidizing acids"
    ],
    "quoteQuestions": [
      "What specific oils, fuels or fluids will the part contact, and at what temperature?",
      "Will the part see outdoor ozone or UV (which may call for a protected grade or a family such as HNBR or CR)?",
      "What low-temperature flexibility is required, since that commonly competes with oil resistance?",
      "Is a low-, medium- or high-acrylonitrile grade preferred for this fluid and temperature balance?"
    ],
    "manufacturingNotes": "Acrylonitrile content is a key design lever and is generally chosen per application to balance oil resistance against low-temperature performance. Antiozonant protection is commonly added when any outdoor exposure is possible.",
    "cautionNotes": "Standard NBR is generally not a weatherproof material; it is not typically specified for sustained outdoor ozone service without review of protection or an alternative such as CR or HNBR.",
    "chemistryNotes": "Higher bound acrylonitrile generally means more polarity, better oil resistance, and poorer cold flexibility; this single ratio explains much of the grade-to-grade difference.",
    "compatibilityNotes": "Generally compatible with petroleum oils, fuels, greases and many aliphatic hydrocarbons; generally incompatible with ketones, esters, chlorinated solvents and strong oxidizers. Confirm against the actual fluids.",
    "safeExplanation": "NBR is a polar, oil-resistant elastomer known for resistance to petroleum oils, fuels and greases, but it is generally not selected for outdoor ozone or strong polar-solvent exposure.",
    "filterTags": [
      "oil-resistant",
      "abrasion-resistant",
      "water-resistant",
      "chemical-resistant"
    ]
  },
  {
    "id": "neoprene",
    "displayName": "Chloroprene Rubber (Neoprene-type)",
    "abbreviation": "CR",
    "kind": "polymer",
    "polymerFamily": "Polychloroprene",
    "commonNames": [
      "Chloroprene rubber",
      "CR",
      "Neoprene (trade-name example)",
      "Polychloroprene"
    ],
    "costTier": "medium",
    "weatherResistance": "high",
    "oilResistance": "medium",
    "waterResistance": "high",
    "chemicalResistance": "medium",
    "abrasionResistance": "high",
    "temperatureBand": "medium",
    "temperatureNote": "Generally suited to moderate to moderately elevated temperatures with balanced all-round behaviour rather than extreme-temperature performance.",
    "strengths": [
      "Balanced moderate resistance to both weather/ozone and oil",
      "Tends to resist burning better than many hydrocarbon elastomers (flame-retardant tendency)",
      "Good resistance to many refrigerants and chemicals",
      "Good adhesion and bonding behaviour",
      "Good toughness and abrasion resistance"
    ],
    "limitations": [
      "Generally not as oil-resistant as NBR nor as weather-resistant as EPDM",
      "Limited resistance to strong oxidizers and some aromatic solvents",
      "Can stiffen and crystallize at low temperature on storage",
      "Higher cost than general-purpose SBR/NR"
    ],
    "applications": [
      "Weather and general-purpose seals and gaskets",
      "Wetsuits and sponge products",
      "Belts, hoses and bridge bearings",
      "Adhesives and coated fabrics",
      "Refrigeration and HVAC seals"
    ],
    "productForms": [
      "Molded parts",
      "Extruded profiles",
      "Sponge and foam",
      "Sheet",
      "Coated fabric and adhesives"
    ],
    "chemicalCharacter": "A moderately polar elastomer whose chlorine atoms on the polychloroprene backbone give a balance of oil, weather and flame-resistant behaviour.",
    "polarity": "medium",
    "saturation": "unsaturated",
    "cureConcept": "material-specific special system (metal-oxide-style cure, conceptual)",
    "whyItBehaves": "The chlorine substituent adds enough polarity to give moderate oil resistance and a flame-retardant tendency, while also reducing backbone reactivity enough for good ozone and weather resistance, so CR generally ends up an all-rounder rather than a specialist at either extreme.",
    "bestEnvironments": [
      "General outdoor and weather service needing some oil tolerance",
      "Moderate oil and refrigerant contact",
      "Applications wanting a flame-retardant tendency",
      "Water and marine exposure"
    ],
    "weakEnvironments": [
      "Aggressive hot petroleum oil (where NBR is generally better)",
      "Severe ozone where EPDM generally excels",
      "Strong oxidizers and some aromatic solvents",
      "Very low temperature long-term storage"
    ],
    "quoteQuestions": [
      "Does the application need a balance of both weather and oil resistance rather than the extreme of either?",
      "Is a flame-retardant tendency part of the requirement?",
      "Will the part see refrigerants, water or moderate oils?",
      "Is low-temperature storage or service a concern (crystallization risk)?"
    ],
    "manufacturingNotes": "Generally cured with a metal-oxide-style system rather than ordinary sulfur; bonds and laminates well, which suits coated fabrics and sponge. Grade selection balances crystallization and processing behaviour.",
    "cautionNotes": "Often requested by a trade name; confirm whether the real need is oil resistance (consider NBR) or weather resistance (consider EPDM), since CR is a compromise of both.",
    "chemistryNotes": "The carbon-chlorine bonds underpin both the flame-retardant tendency and the moderate oil resistance; they also distinguish CR's cure chemistry from sulfur-cured diene rubbers.",
    "compatibilityNotes": "Generally compatible with moderate oils, refrigerants, water and many dilute chemicals; generally not the first choice for aggressive hot oils or strong oxidizers. Verify against the actual media.",
    "safeExplanation": "CR / chloroprene (neoprene-type) is a moderately polar elastomer known for a balance of weather, ozone and moderate oil resistance plus a flame-retardant tendency, but it is generally not the top choice where extreme oil or extreme weather resistance is the single priority.",
    "filterTags": [
      "weather-resistant",
      "oil-resistant",
      "water-resistant",
      "general-purpose"
    ]
  },
  {
    "id": "silicone",
    "displayName": "Silicone Rubber",
    "abbreviation": "VMQ",
    "kind": "polymer",
    "polymerFamily": "Polysiloxane (silicone)",
    "commonNames": [
      "Silicone rubber",
      "VMQ",
      "Polysiloxane",
      "Silastic (trade-name example)"
    ],
    "costTier": "high",
    "weatherResistance": "very-high",
    "oilResistance": "low",
    "waterResistance": "high",
    "chemicalResistance": "medium",
    "abrasionResistance": "low",
    "temperatureBand": "very-high",
    "temperatureNote": "Generally retains flexibility and properties across a very wide span, from very cold to high heat, broader than most organic rubbers; an extreme-temperature specialist.",
    "strengths": [
      "Very wide service temperature range, hot and cold",
      "Excellent ozone, UV and weather resistance",
      "Grades intended for sensitive contact uses are available (where specified and subject to review)",
      "Good electrical insulation and dielectric stability",
      "Stable properties over a wide temperature range"
    ],
    "limitations": [
      "Low tensile, tear and abrasion strength versus many organic rubbers",
      "Poor resistance to many concentrated solvents, fuels and some steam service (grade-dependent)",
      "Higher cost",
      "Generally not selected for dynamic high-wear or high-pressure sealing without support"
    ],
    "applications": [
      "High- and low-temperature seals and gaskets",
      "Medical, pharmaceutical and food-contact parts (where specified)",
      "Electrical insulation, keypads and connectors",
      "Oven, appliance and lighting seals",
      "Tubing for sensitive fluids (where specified)"
    ],
    "productForms": [
      "Molded parts",
      "Extruded profiles and tubing",
      "Sheet",
      "Sponge",
      "Liquid-silicone (LSR) molded parts"
    ],
    "chemicalCharacter": "A special silicon-oxygen (siloxane) backbone elastomer rather than a carbon-chain rubber, giving exceptional thermal and weather stability.",
    "polarity": "special",
    "saturation": "saturated",
    "cureConcept": "peroxide-style or addition-cure special system (conceptual)",
    "whyItBehaves": "The inorganic Si-O backbone is generally far more thermally and oxidatively stable than carbon-carbon chains, giving the very wide temperature range and weather resistance, but that same flexible backbone has low intrinsic strength, which is why tear and abrasion resistance are generally weak.",
    "bestEnvironments": [
      "Extreme hot and cold service",
      "Outdoor weather, ozone and UV exposure",
      "Sensitive contact uses such as food, medical and pharma (where specified)",
      "Electrical insulation"
    ],
    "weakEnvironments": [
      "High-wear, high-pressure dynamic sealing",
      "Concentrated solvents, fuels and oils (grade-dependent)",
      "High-pressure steam"
    ],
    "quoteQuestions": [
      "What are the high and low temperature extremes the part must survive?",
      "Is a food-contact, medical or pharmaceutical grade required (where specified and subject to review)?",
      "Does the application involve abrasion, tearing or high mechanical stress that silicone may not tolerate?",
      "What fluids or solvents will it contact, since chemical resistance is grade-dependent?"
    ],
    "manufacturingNotes": "Available as solid (HCR/HTV) and liquid silicone (LSR) systems; a post-cure step is commonly used to stabilize properties for demanding uses. Cleanliness and dedicated tooling commonly matter for sensitive-contact grades.",
    "cautionNotes": "Generally not a structural or high-abrasion material; it is not typically specified where mechanical toughness drives the design. Food, medical and pharmaceutical suitability always requires grade selection and technical review.",
    "chemistryNotes": "The siloxane backbone's bond strength and low intermolecular forces explain both the temperature stability and the softness; reinforcing fillers are generally essential to reach usable strength.",
    "compatibilityNotes": "Generally compatible with hot air, water, weather and many dilute chemicals; generally not selected for fuels, concentrated solvents or high-wear oil service. Compatibility and contact suitability require review.",
    "safeExplanation": "Silicone (VMQ) is a special siloxane-backbone elastomer known for an exceptionally wide temperature range and excellent weather resistance, but it is generally not selected where high tear, abrasion or petroleum-oil resistance is the priority.",
    "filterTags": [
      "high-temperature",
      "weather-resistant",
      "food-potable",
      "premium"
    ]
  },
  {
    "id": "fkm",
    "displayName": "Fluoroelastomer",
    "abbreviation": "FKM",
    "kind": "polymer",
    "polymerFamily": "Fluoroelastomer (fluorocarbon rubber)",
    "commonNames": [
      "Fluoroelastomer",
      "FKM",
      "Fluorocarbon rubber",
      "Viton (trade-name example)"
    ],
    "costTier": "very-high",
    "weatherResistance": "very-high",
    "oilResistance": "very-high",
    "waterResistance": "high",
    "chemicalResistance": "very-high",
    "abrasionResistance": "medium",
    "temperatureBand": "very-high",
    "temperatureNote": "Generally excellent at sustained high temperatures and in many aggressive fluids; low-temperature flexibility is more limited and grade-dependent.",
    "strengths": [
      "Outstanding resistance to a very broad range of chemicals, fuels and oils",
      "Excellent high-temperature capability",
      "Excellent ozone, UV and weather resistance",
      "Low permeability to many fluids and gases",
      "Stable in many aggressive automotive and aerospace fluids"
    ],
    "limitations": [
      "High cost (premium material)",
      "Limited low-temperature flexibility (grade-dependent)",
      "Generally not ideal for hot water/steam and certain amines, ketones and esters (grade-dependent)",
      "Higher density than hydrocarbon rubbers"
    ],
    "applications": [
      "Aggressive-fluid seals and O-rings",
      "Fuel-system and chemical-process sealing",
      "High-temperature engine and turbine seals",
      "Aerospace and oilfield sealing",
      "Chemical handling gaskets and diaphragms"
    ],
    "productForms": [
      "O-rings and molded seals",
      "Sheet and gasket stock",
      "Extruded profiles",
      "Diaphragms",
      "Custom molded parts"
    ],
    "chemicalCharacter": "A special, highly fluorinated elastomer with a saturated backbone whose strong carbon-fluorine bonds give exceptional heat and chemical resistance.",
    "polarity": "special",
    "saturation": "saturated",
    "cureConcept": "material-specific special system (bisphenol-style or peroxide-style cure, conceptual)",
    "whyItBehaves": "The dense shield of strong carbon-fluorine bonds along a saturated backbone generally resists heat, oxidation and chemical attack better than most other elastomers, which is why FKM is a premium chemical and high-temperature choice, while that same rigidity commonly limits cold flexibility.",
    "bestEnvironments": [
      "Aggressive chemicals, fuels and oils",
      "Sustained high-temperature service",
      "Outdoor weather and ozone",
      "Low-permeation sealing of demanding fluids"
    ],
    "weakEnvironments": [
      "Very low temperature service (grade-dependent)",
      "Hot water and steam (grade-dependent)",
      "Certain amines, ketones, esters and some brake fluids"
    ],
    "quoteQuestions": [
      "What chemicals or fuels and what peak temperature define the duty (to help select the right FKM grade type)?",
      "Is low-temperature flexibility required, since standard FKM is generally limited in the cold?",
      "Will the part see hot water, steam, amines or ketones that some FKM grades resist poorly?",
      "Is the premium cost justified versus a less expensive family for this service?"
    ],
    "manufacturingNotes": "Available in several grade families differentiated by fluorine level and cure type for specific fluid and temperature needs; a post-cure step is commonly used. Grade selection should be matched carefully to the chemical exposure.",
    "cautionNotes": "Premium-priced; it is generally specified only where heat or chemical demands genuinely require it. Certain fluids (some amines, ketones, esters, hot water) can defeat common grades, so verify the fluid list against the chosen grade.",
    "chemistryNotes": "Differences in fluorine content and monomer type across FKM grade families generally drive their fluid resistance and low-temperature behaviour; this is a main selection axis.",
    "compatibilityNotes": "Generally compatible with a very broad range of oils, fuels, aggressive chemicals and high heat; check specifically for amines, ketones, esters, hot water and steam where some grades are weak. Match grade to media by review.",
    "safeExplanation": "FKM / fluoroelastomer is a premium, special elastomer with a saturated, highly fluorinated backbone, known for exceptional high-temperature and broad chemical resistance, but it is generally not selected for very low-temperature service or certain amines, ketones and hot-water duties without careful grade review.",
    "filterTags": [
      "chemical-resistant",
      "high-temperature",
      "oil-resistant",
      "weather-resistant",
      "premium"
    ]
  },
  {
    "id": "butyl",
    "displayName": "Butyl Rubber",
    "abbreviation": "IIR",
    "kind": "polymer",
    "polymerFamily": "Isobutylene-isoprene copolymer",
    "commonNames": [
      "Butyl rubber",
      "IIR",
      "Isobutylene-isoprene rubber",
      "Exxon Butyl (trade-name example)"
    ],
    "costTier": "medium",
    "weatherResistance": "high",
    "oilResistance": "low",
    "waterResistance": "very-high",
    "chemicalResistance": "high",
    "abrasionResistance": "medium",
    "temperatureBand": "high",
    "temperatureNote": "Generally good for moderate to elevated temperatures with good heat and weather aging; not suited to petroleum oil service.",
    "strengths": [
      "Very low gas and air permeability (excellent air/gas retention)",
      "Good ozone, weather and aging resistance",
      "Good resistance to many acids, bases and polar chemicals",
      "Good damping and vibration absorption",
      "Very good water and steam resistance"
    ],
    "limitations": [
      "Poor resistance to petroleum oils, fuels and hydrocarbon solvents",
      "Slow cure and limited compatibility for blending with diene rubbers",
      "Lower resilience (high damping can be a drawback where rebound is needed)",
      "Limited high-temperature capability versus FKM/silicone"
    ],
    "applications": [
      "Tyre inner tubes and inner liners",
      "Air and gas seals and bladders",
      "Pharmaceutical stoppers and closures (where specified)",
      "Steam and chemical hoses and diaphragms",
      "Vibration damping mounts"
    ],
    "productForms": [
      "Molded parts",
      "Extruded profiles",
      "Sheet and bladder stock",
      "Inner tubes and liners",
      "Pharmaceutical closures (where specified)"
    ],
    "chemicalCharacter": "A non-polar, largely saturated isobutylene-based elastomer whose tightly packed backbone gives very low gas permeability.",
    "polarity": "low",
    "saturation": "partially-saturated",
    "cureConcept": "sulfur-style cure system (conceptual), aided by the small isoprene unsaturation; halobutyl variants enable other cure routes",
    "whyItBehaves": "The dense, regular isobutylene chains generally pack tightly to block gas molecules, giving the hallmark air and gas impermeability, and because only a little isoprene unsaturation remains, butyl generally ages and resists ozone well; that same non-polar hydrocarbon makeup is why oils commonly swell it.",
    "bestEnvironments": [
      "Air and gas containment and sealing",
      "Weather, ozone and water exposure",
      "Many acids, bases and polar chemicals",
      "Vibration damping"
    ],
    "weakEnvironments": [
      "Petroleum oils, fuels and greases",
      "Aliphatic and aromatic hydrocarbon solvents",
      "Applications needing high resilience and rebound"
    ],
    "quoteQuestions": [
      "Is air, gas or vapour retention (low permeability) the main requirement?",
      "Will the part contact any petroleum oils, fuels or hydrocarbon solvents (which generally rules butyl out)?",
      "Is a halobutyl variant needed for faster cure, better bonding or pharmaceutical use (where specified)?",
      "Is high damping desirable, or is rebound/resilience needed instead?"
    ],
    "manufacturingNotes": "Generally cures more slowly than diene rubbers; halogenated variants (chlorobutyl/bromobutyl) commonly improve cure rate and co-vulcanization with other rubbers. Keeping it separate from oil-resistant compounds can matter where contamination would affect the part.",
    "cautionNotes": "Generally not specified for petroleum oil service. Its high damping means low rebound, which can be a drawback in spring-like dynamic parts; confirm the dynamic requirement.",
    "chemistryNotes": "The low residual unsaturation is generally what gives both the good aging resistance and the slow cure; halogenation adds reactive sites that address the cure-rate and bonding limitations.",
    "compatibilityNotes": "Generally compatible with air, gases, water, steam and many polar chemicals; generally incompatible with petroleum oils and hydrocarbon solvents. Verify against the actual media.",
    "safeExplanation": "Butyl (IIR) is a non-polar, largely saturated elastomer known for very low gas permeability plus good weather and chemical resistance, but it is generally not selected for petroleum oil exposure.",
    "filterTags": [
      "weather-resistant",
      "water-resistant",
      "chemical-resistant",
      "general-purpose"
    ]
  },
  {
    "id": "csm",
    "displayName": "Chlorosulfonated Polyethylene",
    "abbreviation": "CSM",
    "kind": "polymer",
    "polymerFamily": "Chlorosulfonated polyethylene",
    "commonNames": [
      "Chlorosulfonated polyethylene",
      "CSM",
      "Chlorosulfonated PE rubber",
      "Hypalon (trade-name example)"
    ],
    "costTier": "high",
    "weatherResistance": "very-high",
    "oilResistance": "medium",
    "waterResistance": "high",
    "chemicalResistance": "very-high",
    "abrasionResistance": "high",
    "temperatureBand": "high",
    "temperatureNote": "Generally good for moderate to elevated temperatures with excellent weather and chemical aging; a durable outdoor and chemical performer.",
    "strengths": [
      "Excellent ozone, UV and weather resistance",
      "Strong resistance to many acids, oxidizers and chemicals",
      "Good abrasion resistance",
      "Good colour stability and retention outdoors",
      "Moderate oil resistance"
    ],
    "limitations": [
      "Higher cost than general-purpose rubbers",
      "Moderate (not high) oil resistance versus NBR",
      "Limited very-low-temperature flexibility (grade-dependent)",
      "Processing and curing generally require specific handling"
    ],
    "applications": [
      "Outdoor and chemical-resistant coverings and linings",
      "Roofing and pond/tank liners",
      "Industrial hoses and coated fabrics",
      "Cable jacketing and electrical covers",
      "Chemical-service seals and gaskets"
    ],
    "productForms": [
      "Sheet and lining",
      "Coated fabric",
      "Extruded profiles and hose",
      "Molded parts",
      "Cable jacketing"
    ],
    "chemicalCharacter": "A polyethylene-based elastomer with a saturated backbone carrying chlorine and sulfonyl groups that deliver strong weather and chemical resistance.",
    "polarity": "medium",
    "saturation": "saturated",
    "cureConcept": "material-specific special system (metal-oxide-style cure, conceptual)",
    "whyItBehaves": "Starting from a saturated polyethylene backbone removes the backbone double bonds that ozone attacks, while the added chlorine and sulfonyl groups generally raise chemical and oxidizer resistance and provide cure sites, giving CSM its standout weather-plus-chemical durability with moderate oil tolerance.",
    "bestEnvironments": [
      "Outdoor weather, ozone and UV exposure",
      "Acids, oxidizers and aggressive chemicals",
      "Coverings and linings needing colour retention",
      "Moderate oil with weather demands"
    ],
    "weakEnvironments": [
      "Aggressive hot petroleum oil where NBR is generally stronger",
      "Very low temperature service (grade-dependent)",
      "Some chlorinated and aromatic solvents"
    ],
    "quoteQuestions": [
      "Is the part for combined outdoor weather and chemical/oxidizer exposure (a CSM sweet spot)?",
      "What specific acids or oxidizers are involved, and at what concentration and temperature?",
      "Is colour retention or appearance outdoors important?",
      "Is moderate oil resistance enough, or is NBR-level oil resistance required?"
    ],
    "manufacturingNotes": "Generally uses a metal-oxide-style cure system and benefits from specific handling during mixing and processing. Often supplied as sheet, lining and coated fabric for protective service.",
    "cautionNotes": "Premium-priced; generally specified where both weather and chemical/oxidizer resistance are needed together, since cheaper families commonly cover only one. Oil resistance is moderate, not a substitute for nitrile.",
    "chemistryNotes": "Chlorine content and sulfonyl groups generally control both the chemical resistance and the cure chemistry; the saturated base is the source of the ozone and weather durability.",
    "compatibilityNotes": "Generally compatible with weather, many acids, oxidizers and dilute chemicals plus moderate oils; generally not the first choice for aggressive hot oils or certain chlorinated/aromatic solvents. Verify against the actual media.",
    "safeExplanation": "CSM / chlorosulfonated polyethylene is an elastomer with a saturated backbone, known for excellent weather, ozone and chemical/oxidizer resistance with moderate oil resistance, but it is generally not selected where high-temperature petroleum-oil resistance is the single priority.",
    "filterTags": [
      "weather-resistant",
      "chemical-resistant",
      "abrasion-resistant",
      "premium"
    ]
  },
  {
    "id": "polyurethane",
    "displayName": "Polyurethane Elastomer",
    "abbreviation": "AU/EU",
    "kind": "polymer",
    "polymerFamily": "Polyurethane (polyester-AU / polyether-EU)",
    "commonNames": [
      "Polyurethane rubber",
      "PU / PUR",
      "AU (polyester) and EU (polyether)",
      "Vulkollan (trade-name example)"
    ],
    "costTier": "high",
    "weatherResistance": "medium",
    "oilResistance": "high",
    "waterResistance": "application-dependent",
    "chemicalResistance": "medium",
    "abrasionResistance": "very-high",
    "temperatureBand": "medium",
    "temperatureNote": "Generally suited to moderate temperatures; high heat and prolonged hot water/steam can degrade it (polyester grades especially), so service conditions need review.",
    "strengths": [
      "Exceptional abrasion and wear resistance",
      "Very high tensile strength and load-bearing capacity",
      "Good resistance to petroleum oils and many hydrocarbons",
      "Good tear strength and cut resistance",
      "Wide hardness range from soft to very hard"
    ],
    "limitations": [
      "Susceptible to hydrolysis (water/humidity attack), polyester grades especially",
      "Limited high-temperature capability",
      "Attacked by hot water, steam, strong acids/bases and some solvents",
      "Compression set and heat build-up can limit dynamic seal use"
    ],
    "applications": [
      "Wear pads, liners and abrasion components",
      "Wheels, rollers and casters",
      "Hydraulic seals and wipers (where conditions suit)",
      "Scraper blades and screens",
      "Drive belts and couplings"
    ],
    "productForms": [
      "Cast molded parts",
      "Sheet and rod",
      "Wheels and rollers",
      "Extruded and machined parts",
      "Thermoplastic PU (TPU) parts"
    ],
    "chemicalCharacter": "A polar segmented elastomer built from hard and soft urethane segments, giving high toughness and abrasion resistance.",
    "polarity": "high",
    "saturation": "saturated",
    "cureConcept": "material-specific special system (isocyanate/polyol reaction-cure, conceptual)",
    "whyItBehaves": "The phase-separated hard and soft segments generally act like built-in reinforcement, giving the high strength, load capacity and abrasion resistance polyurethane is known for, while the ester or ether linkages in the soft segment are a weak point that hot water and humidity can hydrolyze.",
    "bestEnvironments": [
      "High-abrasion and high-wear duty",
      "High-load and impact applications",
      "Petroleum oil and hydrocarbon contact (within temperature limits)",
      "Dry to mild-humidity service"
    ],
    "weakEnvironments": [
      "Hot water, steam and prolonged high humidity (hydrolysis)",
      "High temperature service",
      "Strong acids, bases and some polar solvents"
    ],
    "quoteQuestions": [
      "Is severe abrasion, wear or high load the primary driver (a polyurethane strength)?",
      "Will the part see hot water, steam or sustained humidity (which may favour a polyether/EU grade over polyester/AU)?",
      "What hardness and load-bearing range is required?",
      "What is the maximum service temperature, since PU is generally limited in the heat?"
    ],
    "manufacturingNotes": "Commonly cast from liquid systems and also available as thermoplastic (TPU) for extrusion and molding; polyester (AU) grades generally offer higher mechanical strength while polyether (EU) grades generally offer better hydrolysis resistance. Grade choice is application-driven.",
    "cautionNotes": "Hydrolysis is a classic failure mode: polyester-based PU is generally not specified for hot or wet service without reviewing a polyether grade or alternative. Heat build-up can limit fast dynamic sealing.",
    "chemistryNotes": "Hard-segment content generally sets hardness and load capacity; the soft-segment chemistry (polyester versus polyether) generally sets the balance between strength and water/hydrolysis resistance.",
    "compatibilityNotes": "Generally compatible with petroleum oils, greases and many hydrocarbons in dry service; generally incompatible with hot water, steam, strong acids/bases and some solvents. Match grade to media and temperature by review.",
    "safeExplanation": "Polyurethane (AU/EU) is a polar, segmented elastomer known for very high abrasion resistance and load-bearing strength, but it is generally not selected for hot-water, steam or sustained high-humidity service, especially in polyester grades, without grade review.",
    "filterTags": [
      "abrasion-resistant",
      "oil-resistant",
      "premium"
    ]
  },
  {
    "id": "food-grade",
    "displayName": "Food-Grade Rubber (Category)",
    "abbreviation": "FOOD",
    "kind": "category",
    "polymerFamily": "Application category (multiple polymer families)",
    "commonNames": [
      "Food-grade rubber",
      "Food-contact elastomers",
      "Sanitary-grade rubber",
      "Food-contact-intended grades (where specified)"
    ],
    "costTier": "high",
    "weatherResistance": "application-dependent",
    "oilResistance": "application-dependent",
    "waterResistance": "high",
    "chemicalResistance": "application-dependent",
    "abrasionResistance": "application-dependent",
    "temperatureBand": "application-dependent",
    "temperatureNote": "Depends entirely on the base polymer selected; silicone and EPDM-type food grades commonly serve hot or repeated-wash service, while NBR-type grades commonly suit fatty/oily food contact, all subject to review.",
    "strengths": [
      "Compounded with ingredients intended for food-contact suitability (where specified)",
      "Available across several base polymers to match the food and process",
      "Often supports cleaning, wash-down and sanitation cycles",
      "Can target low taste/odour transfer",
      "Selectable for hot, cold, oily or aqueous foods"
    ],
    "limitations": [
      "Contact suitability is grade- and review-specific, not automatic for a polymer family",
      "Base-polymer limitations still apply (oil, heat, weather)",
      "May cost more than standard grades",
      "Requires documentation and verification of contact suitability"
    ],
    "applications": [
      "Food and beverage processing seals and gaskets",
      "Dairy and brewery tubing and diaphragms",
      "Conveyor and handling components for food",
      "Filling, packaging and dispensing parts",
      "Sanitary fittings and closures"
    ],
    "productForms": [
      "Molded seals and gaskets",
      "Extruded profiles and tubing",
      "Sheet",
      "Diaphragms",
      "Custom sanitary parts"
    ],
    "chemicalCharacter": "A need-based category in which a suitable base polymer (commonly silicone, EPDM or NBR type) is compounded with food-contact-intended ingredients, where specified and subject to review.",
    "polarity": "special",
    "saturation": "special",
    "cureConcept": "base-polymer-dependent cure system (conceptual), selected with food-contact-intended ingredients",
    "whyItBehaves": "Behaviour generally follows the chosen base polymer: silicone food grades commonly bring temperature range, EPDM food grades commonly bring water and steam resistance, and nitrile food grades commonly bring fatty-food/oil resistance, so the category is really about matching the right chemistry to the food and process plus verifying contact suitability.",
    "bestEnvironments": [
      "Food and beverage contact (where specified)",
      "Wash-down and sanitation cycles",
      "Aqueous and many fatty foods, by appropriate polymer",
      "Hot or cold food handling, by appropriate polymer"
    ],
    "weakEnvironments": [
      "Any service the underlying base polymer cannot handle",
      "Undocumented or unreviewed contact requirements",
      "Media outside the verified compatibility of the chosen grade"
    ],
    "quoteQuestions": [
      "What food or beverage type contacts the part (aqueous, fatty/oily, acidic, alcoholic)?",
      "What contact-suitability documentation is required (where specified)?",
      "What temperatures and cleaning/sanitation cycles must the part survive?",
      "Which base polymer best fits the food and process (silicone, EPDM, NBR type, or other), pending review?"
    ],
    "manufacturingNotes": "Selection generally starts from the food and process, then picks a base polymer and a grade compounded with food-contact-intended ingredients; dedicated tooling and cleanliness controls are commonly used. Contact suitability requires technical review and documentation rather than being assumed.",
    "cautionNotes": "Food-contact suitability is generally not established by polymer family alone and typically requires technical review and appropriate documentation. We describe a need here, not a guarantee of compliance.",
    "chemistryNotes": "The same backbone chemistries described for silicone, EPDM and NBR generally apply; the food-grade distinction lies in ingredient selection and verification rather than a different polymer.",
    "compatibilityNotes": "Compatibility generally tracks the chosen base polymer (for example EPDM for aqueous/steam, NBR for fatty foods, silicone for wide temperature). Final selection and contact suitability require review against the specific food and applicable requirements.",
    "safeExplanation": "Food-grade rubber is a need-based category rather than a single polymer, where a suitable base material (commonly silicone, EPDM or NBR type) is compounded for food-contact suitability where specified, always subject to technical review and documentation.",
    "filterTags": [
      "food-potable",
      "water-resistant",
      "general-purpose"
    ]
  },
  {
    "id": "potable-water",
    "displayName": "Potable-Water Rubber (Category)",
    "abbreviation": "POTABLE",
    "kind": "category",
    "polymerFamily": "Application category (multiple polymer families)",
    "commonNames": [
      "Potable-water rubber",
      "Drinking-water contact elastomers",
      "Drinking-water-contact grades (where specified)",
      "Water-contact-intended materials (where specified)"
    ],
    "costTier": "high",
    "weatherResistance": "application-dependent",
    "oilResistance": "low",
    "waterResistance": "very-high",
    "chemicalResistance": "high",
    "abrasionResistance": "application-dependent",
    "temperatureBand": "application-dependent",
    "temperatureNote": "Depends on the base polymer; EPDM-type grades commonly serve cold and hot potable water within limits, all subject to grade selection and review.",
    "strengths": [
      "Compounded for drinking-water contact suitability (where specified)",
      "Strong resistance to water and many water-treatment chemicals",
      "Low taste, odour and leachate transfer when properly specified",
      "Generally resistant to chlorine and chloramine disinfectants at typical levels (grade-dependent)",
      "Commonly based on weather- and water-resistant polymers"
    ],
    "limitations": [
      "Contact suitability is grade- and review-specific, not automatic",
      "Generally not intended for petroleum oil service",
      "Base-polymer limitations still apply",
      "Requires documentation and verification of contact suitability"
    ],
    "applications": [
      "Potable-water valve and pump seals",
      "Pipe gaskets and joint rings for drinking water",
      "Water meter and fitting seals",
      "Diaphragms in water systems",
      "Tank and reservoir seals"
    ],
    "productForms": [
      "Molded seals and gaskets",
      "Joint rings and O-rings",
      "Extruded profiles",
      "Diaphragms",
      "Sheet"
    ],
    "chemicalCharacter": "A need-based category in which a water-suitable base polymer (commonly EPDM type) is compounded with drinking-water-contact-intended ingredients, where specified and subject to review.",
    "polarity": "low",
    "saturation": "saturated",
    "cureConcept": "base-polymer-dependent cure system (conceptual), commonly peroxide-style for EPDM-type potable grades",
    "whyItBehaves": "Potable-water grades are generally built on saturated, water- and ozone-stable polymers such as EPDM because their non-reactive backbones commonly resist water, disinfectants and aging while keeping leachate and taste transfer low; the same non-polar nature means they are generally not for oil service.",
    "bestEnvironments": [
      "Cold and hot drinking-water contact (where specified)",
      "Chlorinated and chloraminated water at typical disinfectant levels",
      "Long-term immersion in potable systems",
      "Water-treatment chemical contact (dilute, grade-dependent)"
    ],
    "weakEnvironments": [
      "Petroleum oils, fuels and greases",
      "Aggressive solvents and concentrated chemicals",
      "Service outside the chosen base polymer's limits"
    ],
    "quoteQuestions": [
      "Is this cold, hot or both for potable-water service?",
      "What drinking-water contact documentation is required (where specified)?",
      "What disinfectant type and level (chlorine, chloramine) is present?",
      "Are there pressure, temperature or immersion conditions that affect grade choice, pending review?"
    ],
    "manufacturingNotes": "Commonly based on EPDM-type grades compounded with drinking-water-contact-intended ingredients; selection and contact suitability require technical review and documentation. Cleanliness and grade traceability are commonly controlled.",
    "cautionNotes": "Drinking-water suitability is generally not established by polymer family alone and typically requires technical review and appropriate documentation. We describe a need here, not a guarantee of compliance.",
    "chemistryNotes": "EPDM's saturated, non-polar backbone generally underlies both the water/disinfectant resistance and the low leachate behaviour; the potable distinction is in ingredient selection and verification.",
    "compatibilityNotes": "Generally compatible with cold and hot potable water and typical disinfectants when the right grade is selected; generally not for petroleum oils or aggressive solvents. Contact suitability requires review.",
    "safeExplanation": "Potable-water rubber is a need-based category rather than a single polymer, commonly served by EPDM-type grades compounded for drinking-water contact where specified, always subject to technical review and documentation, and generally not selected for petroleum oil exposure.",
    "filterTags": [
      "food-potable",
      "water-resistant",
      "weather-resistant",
      "chemical-resistant"
    ]
  },
  {
    "id": "abrasion-resistant",
    "displayName": "Abrasion-Resistant Rubber (Category)",
    "abbreviation": "ABRASION",
    "kind": "category",
    "polymerFamily": "Application category (multiple polymer families)",
    "commonNames": [
      "Abrasion-resistant rubber",
      "Wear-resistant grades",
      "Anti-wear lining rubber",
      "High-abrasion compounds"
    ],
    "costTier": "medium",
    "weatherResistance": "application-dependent",
    "oilResistance": "application-dependent",
    "waterResistance": "high",
    "chemicalResistance": "application-dependent",
    "abrasionResistance": "very-high",
    "temperatureBand": "application-dependent",
    "temperatureNote": "Depends on the base polymer; natural-rubber and polyurethane wear grades commonly serve moderate temperatures, with capability set by the chosen chemistry.",
    "strengths": [
      "Optimized for wear, cutting, gouging and impact resistance",
      "Available from resilient (NR) to very tough (PU) base polymers",
      "Long service life in many abrasive bulk-handling duties",
      "Good energy return in resilient grades to help deflect impact",
      "Selectable hardness for sliding versus impact wear"
    ],
    "limitations": [
      "Base-polymer limitations still apply (oil, heat, weather)",
      "Highest-abrasion grades may trade off oil or temperature resistance",
      "Optimal grade depends on the abrasive mechanism (sliding, impact, cutting)",
      "May cost more than general-purpose grades"
    ],
    "applications": [
      "Chute, hopper and bin liners",
      "Conveyor belt covers and skirting",
      "Pump and pipe linings for slurry",
      "Wear pads, scraper blades and screens",
      "Cyclone and mill liners"
    ],
    "productForms": [
      "Sheet and lining",
      "Molded wear parts",
      "Bonded-to-metal liners",
      "Cast polyurethane parts",
      "Extruded and die-cut parts"
    ],
    "chemicalCharacter": "A need-based category in which a wear-optimized base polymer (commonly natural rubber, SBR blends or polyurethane) is selected for the specific abrasion mechanism.",
    "polarity": "special",
    "saturation": "special",
    "cureConcept": "base-polymer-dependent cure system (conceptual), selected for wear performance",
    "whyItBehaves": "Two different chemistries generally win for different reasons: resilient natural rubber resists impact and gouging abrasion by rebounding, while tough segmented polyurethane resists sliding and cutting wear through strength, so the right pick generally depends on whether the abrasion is impact-driven or sliding-driven.",
    "bestEnvironments": [
      "Abrasive bulk-material handling",
      "Slurry and sliding-wear surfaces",
      "Impact and gouging duty (resilient grades)",
      "Mining, aggregate and mineral processing"
    ],
    "weakEnvironments": [
      "Service outside the base polymer's oil, heat or weather limits",
      "Wrong wear-mechanism match (impact grade in sliding duty or vice versa)",
      "Aggressive chemical exposure beyond the base grade"
    ],
    "quoteQuestions": [
      "Is the wear mainly impact/gouging, sliding, or cutting (this generally changes the polymer choice)?",
      "Is the abrasive wet or dry, and at what particle size and angle of attack?",
      "Is any oil, heat or chemical present that constrains the base polymer?",
      "Is high resilience (natural rubber) or maximum toughness (polyurethane) the better fit for this duty?"
    ],
    "manufacturingNotes": "Grade selection generally follows the abrasion mechanism: resilient diene rubbers for impact, polyurethane for sliding/cutting; many wear parts are bonded to metal backing. Hardness and resilience are tuned to the duty by technical review.",
    "cautionNotes": "There is generally no single best abrasion rubber; matching the polymer to the wear mechanism is important, and a mismatch can wear faster than a general-purpose grade. Confirm any oil, heat or chemical constraints.",
    "chemistryNotes": "Resilience-driven wear resistance (strain crystallization in NR) and strength-driven wear resistance (hard/soft segments in PU) are distinct mechanisms; the category spans both.",
    "compatibilityNotes": "Compatibility generally tracks the chosen base polymer; natural-rubber wear grades generally avoid oil, while polyurethane grades tolerate many oils but generally dislike hot water. Match grade to media and wear mechanism by review.",
    "safeExplanation": "Abrasion-resistant rubber is a need-based category rather than a single polymer, commonly served by resilient natural rubber for impact wear and tough polyurethane for sliding wear, with the base-polymer limitations (oil, heat, weather) still applying and requiring technical review.",
    "filterTags": [
      "abrasion-resistant",
      "general-purpose",
      "water-resistant"
    ]
  },
  {
    "id": "oil-resistant",
    "displayName": "Oil-Resistant Rubber (Category)",
    "abbreviation": "OIL",
    "kind": "category",
    "polymerFamily": "Application category (multiple polymer families)",
    "commonNames": [
      "Oil-resistant rubber",
      "Fuel-resistant grades",
      "Oil-seal compounds",
      "Hydrocarbon-resistant elastomers"
    ],
    "costTier": "medium",
    "weatherResistance": "application-dependent",
    "oilResistance": "very-high",
    "waterResistance": "high",
    "chemicalResistance": "application-dependent",
    "abrasionResistance": "application-dependent",
    "temperatureBand": "application-dependent",
    "temperatureNote": "Depends on the base polymer; NBR-type grades commonly cover moderate-temperature oil service while FKM-type grades commonly extend oil resistance to high temperatures, all by grade selection.",
    "strengths": [
      "Resists swelling and degradation in many petroleum oils, fuels and greases",
      "Range of grades from cost-effective (NBR) to premium high-temperature (FKM)",
      "Good sealing performance in many lubrication and hydraulic systems",
      "Selectable for fuel, mineral oil or aggressive-fluid service",
      "Good mechanical strength in many oil-resistant grades"
    ],
    "limitations": [
      "Polar oil-resistant grades (NBR) often weak in ozone/weather unless protected",
      "Premium grades (FKM) carry high cost and limited cold flexibility",
      "Wrong grade can swell or harden in the actual fluid",
      "Base-polymer limits still apply (temperature, weather)"
    ],
    "applications": [
      "Oil and fuel seals, O-rings and gaskets",
      "Hydraulic and lubrication system parts",
      "Engine and transmission components",
      "Fuel hoses and diaphragms",
      "Oilfield and industrial fluid sealing"
    ],
    "productForms": [
      "O-rings and molded seals",
      "Extruded hose and profiles",
      "Sheet and gasket stock",
      "Diaphragms",
      "Die-cut and lathe-cut parts"
    ],
    "chemicalCharacter": "A need-based category in which a polar or fluorinated base polymer (commonly NBR, HNBR, CR or FKM type) resists swelling by non-polar oils and fuels.",
    "polarity": "high",
    "saturation": "special",
    "cureConcept": "base-polymer-dependent cure system (conceptual), selected for the specific fluid and temperature",
    "whyItBehaves": "Oil resistance generally comes from polarity or fluorination: polar nitrile groups (NBR) or dense carbon-fluorine bonds (FKM) keep non-polar petroleum oils from swelling the rubber, so the category is about choosing enough polarity/fluorine for the fluid while accepting the trade-offs (weaker weather for NBR, high cost for FKM).",
    "bestEnvironments": [
      "Petroleum oils, fuels and greases",
      "Hydraulic and lubrication systems",
      "Engine and drivetrain service",
      "Aggressive fluids at high temperature (FKM-type grades)"
    ],
    "weakEnvironments": [
      "Outdoor ozone/weather for unprotected NBR grades",
      "Very low temperature for some FKM grades",
      "Strong polar solvents (ketones, esters) that can defeat common oil grades"
    ],
    "quoteQuestions": [
      "What oils, fuels or fluids contact the part, and at what temperature?",
      "Is outdoor ozone/weather also a factor (which may push toward CR or a protected grade)?",
      "Is high-temperature or aggressive-fluid service needed (which may point toward FKM)?",
      "What low-temperature flexibility is required, since it commonly trades off with oil resistance?"
    ],
    "manufacturingNotes": "Grade selection generally runs from cost-effective NBR to premium FKM based on fluid aggressiveness and temperature; CR and HNBR commonly fill the middle where some weather resistance is also needed. The fluid list and temperature should drive grade choice by review.",
    "cautionNotes": "Oil resistance is generally fluid-specific: a grade fine in mineral oil may fail in fuel, brake fluid or a polar solvent. Always verify the actual fluid against the chosen grade, and confirm any outdoor exposure.",
    "chemistryNotes": "Polarity (acrylonitrile content in NBR) and fluorination (in FKM) are two routes to oil resistance; each generally carries its own secondary limitation that the category must manage.",
    "compatibilityNotes": "Compatibility is generally strongly fluid-dependent; NBR commonly suits common oils and fuels, FKM commonly extends to aggressive fluids and heat, and neither set is for the others' weak fluids. Match grade to the exact media by review.",
    "safeExplanation": "Oil-resistant rubber is a need-based category rather than a single polymer, commonly served by polar NBR-type grades for everyday oils and premium FKM-type grades for aggressive or high-temperature fluids, with grade selection driven by the specific fluid and temperature and requiring technical review.",
    "filterTags": [
      "oil-resistant",
      "chemical-resistant",
      "high-temperature",
      "water-resistant"
    ]
  },
  {
    "id": "high-temperature",
    "displayName": "High-Temperature Rubber (Category)",
    "abbreviation": "HIGHTEMP",
    "kind": "category",
    "polymerFamily": "Application category (multiple polymer families)",
    "commonNames": [
      "High-temperature rubber",
      "Heat-resistant grades",
      "High-heat elastomers",
      "Thermally stable rubber compounds"
    ],
    "costTier": "high",
    "weatherResistance": "high",
    "oilResistance": "application-dependent",
    "waterResistance": "application-dependent",
    "chemicalResistance": "application-dependent",
    "abrasionResistance": "application-dependent",
    "temperatureBand": "very-high",
    "temperatureNote": "Defined by the need for elevated-temperature service; silicone commonly offers a very wide range, FKM commonly excels in hot aggressive fluids, and EPDM commonly serves hot water/steam, all by grade selection.",
    "strengths": [
      "Retains useful properties at elevated temperatures",
      "Choice of polymers for hot air (silicone), hot fluids (FKM) or hot water/steam (EPDM)",
      "Good resistance to heat aging and oxidation in the right grade",
      "Often pairs heat resistance with weather/ozone resistance",
      "Stable sealing performance over a wide temperature range (grade-dependent)"
    ],
    "limitations": [
      "No single polymer covers every hot environment (air vs fluid vs steam differs)",
      "Premium grades (silicone, FKM) generally cost more",
      "Heat resistance can trade off against mechanical strength (silicone)",
      "Base-polymer fluid limits still apply at temperature"
    ],
    "applications": [
      "Engine, exhaust-area and turbine seals",
      "Oven, appliance and lighting gaskets",
      "Steam and hot-water seals and hoses",
      "Hot-process industrial gaskets",
      "High-temperature electrical insulation"
    ],
    "productForms": [
      "Molded seals and gaskets",
      "O-rings",
      "Extruded profiles and tubing",
      "Sheet",
      "Diaphragms"
    ],
    "chemicalCharacter": "A need-based category in which a thermally stable base polymer (commonly silicone, FKM or EPDM type) is matched to the specific hot environment.",
    "polarity": "special",
    "saturation": "special",
    "cureConcept": "base-polymer-dependent cure system (conceptual), commonly peroxide-style or special systems for heat stability",
    "whyItBehaves": "Heat resistance generally comes from stable backbones and bonds: silicone's inorganic siloxane chain handles a very wide temperature range, FKM's carbon-fluorine shield handles many hot aggressive fluids, and EPDM's saturated backbone handles hot water and steam, so the right choice generally depends on whether the heat is dry, fluid-borne or steam.",
    "bestEnvironments": [
      "Sustained elevated-temperature service",
      "Hot air and dry heat (silicone)",
      "Hot aggressive fluids (FKM)",
      "Hot water and steam (EPDM)"
    ],
    "weakEnvironments": [
      "A hot environment outside the chosen polymer's fluid compatibility",
      "High mechanical wear at temperature (silicone)",
      "Very low temperature for some FKM grades"
    ],
    "quoteQuestions": [
      "What are the peak and continuous service temperatures?",
      "Is the heat dry air, a hot fluid/oil, or hot water/steam (this generally selects the polymer)?",
      "What fluids or chemicals are present at that temperature?",
      "Are mechanical strength or abrasion also required alongside heat resistance?"
    ],
    "manufacturingNotes": "Grade selection generally follows the hot environment: silicone for wide-range dry heat, FKM for hot aggressive fluids, EPDM for hot water/steam; a post-cure step is commonly used for silicone and FKM to stabilize properties. Match polymer to both temperature and media by review.",
    "cautionNotes": "High temperature alone generally does not pick the material; the surrounding fluid commonly matters as much as the heat. Verify both temperature and media together, since a hot-air grade may fail in hot oil or steam.",
    "chemistryNotes": "Thermal stability generally traces to bond strength and backbone type (siloxane in silicone, carbon-fluorine in FKM, saturated polyolefin in EPDM); each suits a different hot medium.",
    "compatibilityNotes": "Compatibility generally depends on both temperature and fluid; pairing silicone with hot air, FKM with hot oils/chemicals, and EPDM with hot water/steam is common, and these are generally not interchangeable. Confirm the grade against the actual hot media by review.",
    "safeExplanation": "High-temperature rubber is a need-based category rather than a single polymer, commonly served by silicone for wide-range dry heat, FKM for hot aggressive fluids, and EPDM for hot water and steam, with the correct choice depending on both temperature and the surrounding media and requiring technical review.",
    "filterTags": [
      "high-temperature",
      "chemical-resistant",
      "weather-resistant",
      "premium"
    ]
  },
  {
    "id": "general-purpose",
    "displayName": "General-Purpose Rubber (Category)",
    "abbreviation": "GP",
    "kind": "category",
    "polymerFamily": "Application category (multiple polymer families)",
    "commonNames": [
      "General-purpose rubber",
      "Utility-grade rubber",
      "Commercial-grade compounds",
      "Standard mechanical rubber goods"
    ],
    "costTier": "low",
    "weatherResistance": "application-dependent",
    "oilResistance": "low",
    "waterResistance": "high",
    "chemicalResistance": "medium",
    "abrasionResistance": "high",
    "temperatureBand": "low",
    "temperatureNote": "Generally aimed at moderate ambient conditions; not typically intended for hot, aggressive-fluid or extreme-environment service, where a specialty family is generally required.",
    "strengths": [
      "Cost-effective for everyday, non-demanding mechanical parts",
      "Good resilience and abrasion in NR/SBR-based grades",
      "Widely available and generally easy to process",
      "Good water resistance",
      "Broad hardness and form selection"
    ],
    "limitations": [
      "Poor petroleum oil and fuel resistance",
      "Weak ozone, UV and weather resistance unless protected",
      "Limited high-temperature capability",
      "Generally not for aggressive chemical or specialty environments"
    ],
    "applications": [
      "General mechanical rubber goods",
      "Pads, mats, bumpers and spacers",
      "Gaskets and seals for mild conditions",
      "Grommets, washers and mounts",
      "Utility molded and extruded parts"
    ],
    "productForms": [
      "Molded parts",
      "Extruded profiles",
      "Sheet and strip",
      "Die-cut and lathe-cut parts",
      "Calendered sheet"
    ],
    "chemicalCharacter": "A need-based category typically served by non-polar, unsaturated diene rubbers (commonly natural rubber and SBR or their blends) for everyday mild-duty parts.",
    "polarity": "low",
    "saturation": "unsaturated",
    "cureConcept": "sulfur-style cure system (conceptual), typical of diene general-purpose rubbers",
    "whyItBehaves": "General-purpose grades generally lean on inexpensive, resilient diene rubbers that give good strength and abrasion at low cost, but their non-polar, unsaturated chemistry is the same reason they are generally weak in oil, ozone and heat, so they are typically reserved for mild, indoor, non-fluid duty.",
    "bestEnvironments": [
      "Mild indoor mechanical service",
      "Water and dry ambient conditions",
      "Cost-sensitive non-specialty parts",
      "Moderate abrasion and load"
    ],
    "weakEnvironments": [
      "Petroleum oil and fuel contact",
      "Outdoor ozone, UV and weather",
      "High temperature",
      "Aggressive chemical exposure"
    ],
    "quoteQuestions": [
      "Is this genuinely a mild-duty part, or are oil, weather, heat or chemicals involved (which generally need a specialty family)?",
      "Will the part be used outdoors or only indoors?",
      "What hardness and basic mechanical properties are needed?",
      "Is cost the main driver, with no special environmental demands?"
    ],
    "manufacturingNotes": "Usually based on natural rubber, SBR or their blends and processed by conventional molding, extrusion and calendering. If the duty turns out to involve oil, weather, heat or chemicals, selection should generally move to the appropriate specialty family by review.",
    "cautionNotes": "General-purpose grades are easy to over-apply; confirm there is no oil, weather, heat or chemical demand before specifying, or premature failure can result. Outdoor use generally needs protective additives or a weather-resistant family.",
    "chemistryNotes": "The same diene chemistry described for natural rubber and SBR generally governs this category; its strengths (resilience, abrasion, cost) and weaknesses (oil, ozone, heat) are inherited directly.",
    "compatibilityNotes": "Generally compatible with water and mild dry-ambient service; generally incompatible with petroleum oils, fuels and aggressive chemicals, and not typically for outdoor or hot service unprotected. Verify mild conditions by review.",
    "safeExplanation": "General-purpose rubber is a need-based category rather than a single polymer, commonly served by natural rubber and SBR-type grades for mild, cost-sensitive mechanical parts, but generally not selected for petroleum oil, outdoor weather, high heat or aggressive chemical service.",
    "filterTags": [
      "general-purpose",
      "abrasion-resistant",
      "water-resistant"
    ]
  }
];

export const materialFamiliesById: Record<string, MaterialFamily> = Object.fromEntries(
  materialFamilies.map((m) => [m.id, m]),
);

export const polymerFamilies: MaterialFamily[] = materialFamilies.filter((m) => m.kind === "polymer");

export const ALL_FILTER_TAGS: FilterTag[] = [
  "abrasion-resistant",
  "water-resistant",
  "general-purpose",
  "weather-resistant",
  "high-temperature",
  "chemical-resistant",
  "oil-resistant",
  "food-potable",
  "premium"
];
