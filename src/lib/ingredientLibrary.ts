import type { IngredientLibraryItem } from "@/types/factoryIntel";

export const ingredientLibrary: IngredientLibraryItem[] = [
  {
    "id": "mat-nr",
    "name": "Natural Rubber (NR)",
    "category": "base-polymer",
    "function": "Primary elastomer base providing high green strength, excellent tensile and tear strength, and good fatigue resistance; the structural backbone of many general-purpose compounds.",
    "whereIntroduced": "Charged first at the mixing stage (internal mixer or open mill) as the polymer base before fillers, oils, and curatives are added.",
    "physicalForm": "Commonly supplied as baled solid rubber (technically specified grades or ribbed smoked sheet); sometimes crumb or block. Bales are typically wrapped and palletized.",
    "handling": "Bales are heavy and may require mastication to break down before compounding. Keep clean and free of grit; commonly cut or warmed to ease mill loading. Mind manual-handling load.",
    "storage": "Typically stored cool, dry, and out of direct sunlight to limit oxidation and crystallization hardening. Older bales may stiffen and often need extra mastication.",
    "supplyChain": "Sourced from plantation/agricultural commodity producers and traders (often Southeast Asia). Lead times and pricing can be volatile and seasonal; commonly buffer with safety stock. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover grade designation, dirt/ash content, plasticity (initial and retention indices), volatile matter, and nitrogen content. Use the official standard and a qualified lab for actual testing.",
    "compatibility": "Often blended with SBR/BR for general use. Generally poor resistance to ozone, weathering, and hydrocarbon oils unless protected/blended. Not for hot-oil or fuel service.",
    "processingEffect": "High green strength aids building tack and shape holding; may require mastication to reduce viscosity for good filler incorporation. Strain-crystallizing, which aids uncured strength.",
    "propertyEffect": "Tends to deliver high tensile/tear and good resilience and low heat build-up, with limited heat, ozone, and oil resistance.",
    "riskIfPoor": "High dirt or inconsistent plasticity may cause dispersion problems, viscosity drift batch-to-batch, and weak spots; off-spec bales can shift cure behavior.",
    "sourcingQuestions": [
      "Which technically specified grade and what are the typical plasticity and dirt limits?",
      "What is the typical lead time and how is lot-to-lot consistency controlled?",
      "Is mastication assumed in your reported viscosity figures?"
    ],
    "relatedMaterials": [
      "mat-sbr",
      "mat-cr",
      "mat-cb"
    ],
    "relatedDefects": [
      "poor-dispersion",
      "scorch",
      "cracking"
    ],
    "relatedTests": [
      "tensile-strength",
      "elongation",
      "tear-resistance"
    ]
  },
  {
    "id": "mat-sbr",
    "name": "Styrene-Butadiene Rubber (SBR)",
    "category": "base-polymer",
    "function": "General-purpose synthetic elastomer offering good abrasion resistance and consistent quality; a common cost-effective workhorse, often blended with NR.",
    "whereIntroduced": "Charged at the mixing stage as a polymer base, alone or blended with NR/BR.",
    "physicalForm": "Supplied as bales (dry) or as oil-extended bales; emulsion and solution grades exist. Also available as crumb.",
    "handling": "Generally easier to handle than NR and often needs little or no mastication. Keep oil-extended grades segregated by oil type to avoid mix-ups.",
    "storage": "Typically stored cool and dry; oil-extended grades commonly kept away from heat to limit oil migration. Long storage is generally tolerated.",
    "supplyChain": "Sourced from petrochemical/synthetic rubber producers. Generally more price-stable than NR but tied to monomer (styrene/butadiene) markets. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover bound styrene content, Mooney viscosity, oil/extender level (if oil-extended), volatile matter, and stabilizer type. Use a qualified lab for actual testing.",
    "compatibility": "Often blended with NR/BR. Generally poor resistance to oils, ozone, and high heat unless protected. Not for fuel/oil-immersion service.",
    "processingEffect": "Lower green strength than NR (may need building-tack help); generally good mixing and extrusion behavior. Mooney consistency drives processing consistency.",
    "propertyEffect": "Tends to give good abrasion and wear, consistent properties, slightly lower resilience and higher heat build-up than NR.",
    "riskIfPoor": "Variable styrene or Mooney may shift hardness and cure rate; wrong extender oil can hurt low-temperature behavior and cause migration.",
    "sourcingQuestions": [
      "Is this a dry or oil-extended grade, and which extender oil category?",
      "What is the typical bound styrene and Mooney viscosity range?",
      "How is lot-to-lot Mooney consistency controlled?"
    ],
    "relatedMaterials": [
      "mat-nr",
      "mat-cb",
      "mat-paraffinic-oil"
    ],
    "relatedDefects": [
      "poor-dispersion",
      "hardness-drift",
      "scorch"
    ],
    "relatedTests": [
      "abrasion",
      "hardness",
      "tensile-strength"
    ]
  },
  {
    "id": "mat-epdm",
    "name": "Ethylene Propylene Diene Rubber (EPDM)",
    "category": "base-polymer",
    "function": "Weather/ozone/heat-resistant elastomer for outdoor seals, weatherstrip, roofing, and hot-water/steam service; strong resistance to polar fluids and water.",
    "whereIntroduced": "Charged at the mixing stage as the polymer base; can be sulfur- or peroxide-cured depending on grade and diene type.",
    "physicalForm": "Supplied as bales, pellets, or crumb; oil-extended grades are common. Pellet/free-flow forms ease automated feeding.",
    "handling": "Generally clean-handling; pellet grades feed well. Keep separate from sulfur-cure-incompatible peroxide lines to avoid cross-contamination of curatives.",
    "storage": "Typically stored cool and dry; oil-extended grades kept away from heat. Long shelf life is common.",
    "supplyChain": "Sourced from synthetic rubber producers (often a limited set of global makers). Lead times can lengthen during tight supply; requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover ethylene content, diene type/level (e.g., ENB), Mooney viscosity, oil extension level, and volatiles. Use a qualified lab for actual testing.",
    "compatibility": "Generally poor resistance to mineral oils, fuels, and nonpolar hydrocarbons. Good with water, steam, glycols, many acids/bases. Use paraffinic oils, not aromatic, to avoid bleed.",
    "processingEffect": "Diene level affects cure rate and state; high-ethylene grades may be stiffer and need warming. Oil and filler loading strongly affect processing.",
    "propertyEffect": "Tends to give excellent ozone/weather/heat aging and good electrical/insulation, with poor oil resistance.",
    "riskIfPoor": "Variable diene/ethylene may cause cure-rate drift and inconsistent set; wrong oil type causes bloom/bleed and surface issues.",
    "sourcingQuestions": [
      "What diene type and level, and is the grade intended for sulfur or peroxide cure?",
      "Is it oil-extended, and with which oil category?",
      "What is the typical ethylene content and Mooney range?"
    ],
    "relatedMaterials": [
      "mat-paraffinic-oil",
      "mat-peroxide",
      "mat-cb"
    ],
    "relatedDefects": [
      "under-cure",
      "bloom",
      "compression-set"
    ],
    "relatedTests": [
      "ozone-weathering",
      "heat-aging",
      "compression-set"
    ]
  },
  {
    "id": "mat-nbr",
    "name": "Nitrile Rubber (NBR)",
    "category": "base-polymer",
    "function": "Oil- and fuel-resistant elastomer for seals, gaskets, hoses, and O-rings in contact with hydrocarbons; resistance scales with acrylonitrile (ACN) content.",
    "whereIntroduced": "Charged at the mixing stage as the polymer base.",
    "physicalForm": "Supplied as bales or crumb; powdered/free-flow grades exist. ACN level is a key grade descriptor.",
    "handling": "Generally clean-handling. Higher-ACN grades are stiffer and may need warming. Keep grades clearly labeled by ACN level to avoid swap errors.",
    "storage": "Typically stored cool and dry; protected from ozone/light which can attack the unsaturated backbone over time.",
    "supplyChain": "Sourced from synthetic rubber producers. Pricing tracks butadiene/acrylonitrile feedstocks; requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover ACN content, Mooney viscosity, volatile matter, and stabilizer system. Use a qualified lab for actual testing.",
    "compatibility": "Generally poor ozone/weather resistance (often blended with PVC or protected). Good with oils/fuels; poor with ketones, esters, strong oxidizers. Low-temperature flexibility drops as ACN rises.",
    "processingEffect": "Mooney and ACN affect viscosity and cure; consistent ACN is important for repeatable swell behavior.",
    "propertyEffect": "Tends to give strong oil/fuel resistance; higher ACN improves oil resistance but worsens low-temperature flex.",
    "riskIfPoor": "ACN variation shifts fluid-swell and low-temp performance; poor stabilization can cause premature aging.",
    "sourcingQuestions": [
      "What is the ACN content and target oil-resistance level?",
      "Is ozone protection assumed via blending or additives?",
      "What Mooney viscosity range and lot consistency are typical?"
    ],
    "relatedMaterials": [
      "mat-cr",
      "mat-ester-plasticizer",
      "mat-antioxidant"
    ],
    "relatedDefects": [
      "swelling",
      "cracking"
    ],
    "relatedTests": [
      "fluid-immersion",
      "low-temp-flex",
      "hardness"
    ]
  },
  {
    "id": "mat-cr",
    "name": "Chloroprene Rubber (CR / Neoprene-type)",
    "category": "base-polymer",
    "function": "Balanced general-purpose elastomer with moderate oil, weather, ozone, and flame resistance; common in seals, belts, coated fabrics, and adhesives.",
    "whereIntroduced": "Charged at the mixing stage as the polymer base; commonly cured with metal oxides rather than sulfur alone.",
    "physicalForm": "Supplied as chips/bales; different grades by crystallization rate and viscosity.",
    "handling": "Can be prone to scorch; commonly handled with temperature control in mind. Keep curative (metal oxide) lines clean. Slow-crystallizing vs fast-crystallizing grades behave differently.",
    "storage": "Typically stored cool and dry; some grades may stiffen via crystallization over time and recover with warming.",
    "supplyChain": "Sourced from a small number of global synthetic producers; supply can tighten, lengthening lead times. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover Mooney viscosity, crystallization tendency, volatile matter, and stabilizer system. Use a qualified lab for actual testing.",
    "compatibility": "Uses metal-oxide cure (zinc/magnesium oxide style). Moderate oil resistance (between NR and NBR). Avoid mixing curative philosophies; not for strong oxidizers/ketones.",
    "processingEffect": "Scorch-sensitive; mixing and storage temperature matter. Crystallization can affect mill behavior and tack.",
    "propertyEffect": "Tends to give balanced weather/ozone/flame/oil resistance with good adhesion to substrates.",
    "riskIfPoor": "Off-spec viscosity or stabilizer can worsen scorch and aging; crystallization variability affects building tack.",
    "sourcingQuestions": [
      "Is this a fast- or slow-crystallizing grade and what viscosity?",
      "What scorch behavior is typical and how is it controlled?",
      "Which metal-oxide cure approach is recommended?"
    ],
    "relatedMaterials": [
      "mat-metal-oxide",
      "mat-nbr",
      "mat-antiozonant"
    ],
    "relatedDefects": [
      "scorch",
      "bloom",
      "poor-adhesion"
    ],
    "relatedTests": [
      "ozone-weathering",
      "heat-aging",
      "fluid-immersion"
    ]
  },
  {
    "id": "mat-vmq",
    "name": "Silicone Rubber (VMQ)",
    "category": "base-polymer",
    "function": "Wide-temperature elastomer for extreme heat and cold, with good flexibility, low compression set, and physiological inertness in many grades; common in seals, gaskets, and tubing.",
    "whereIntroduced": "Charged at the mixing stage; high-consistency (HCR) grades on mills/internal mixers, liquid (LSR) grades via metered injection systems. Commonly peroxide- or platinum-cured.",
    "physicalForm": "HCR gum/bales or two-part liquid (LSR) in pails/drums; often supplied as pre-catalyzed or two-component kits.",
    "handling": "Keep extremely clean; silicone is contamination-sensitive and can poison platinum cures (e.g., from sulfur, amines, tin). Segregate tools to avoid cross-contamination with other rubbers.",
    "storage": "Typically stored cool; two-part/LSR and platinum systems may have limited shelf life and require controlled conditions. Track shelf-life dates.",
    "supplyChain": "Sourced from specialty silicone producers; relatively higher cost and sometimes longer lead times. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover base viscosity/plasticity, volatile content, catalyst/cure type, and durometer target after cure. Use a qualified lab for actual testing.",
    "compatibility": "Platinum cure is poisoned by many contaminants. Generally poor resistance to many fuels/oils (except fluorosilicone). Good with hot air, water, many polar fluids.",
    "processingEffect": "Low green strength; LSR needs clean metered processing. Often requires a post-cure step to remove volatiles and reach final properties.",
    "propertyEffect": "Tends to give excellent high/low-temperature stability and set resistance, with modest tensile/tear versus organic rubbers.",
    "riskIfPoor": "Contamination causes cure inhibition (tacky/uncured spots); volatile content drives shrinkage and post-cure needs.",
    "sourcingQuestions": [
      "Is this HCR or LSR, and peroxide or platinum cured?",
      "What is the recommended post-cure approach conceptually?",
      "What durometer target and lot consistency are typical?"
    ],
    "relatedMaterials": [
      "mat-silica",
      "mat-peroxide",
      "mat-release-agent"
    ],
    "relatedDefects": [
      "under-cure",
      "compression-set",
      "contamination"
    ],
    "relatedTests": [
      "heat-aging",
      "low-temp-flex",
      "compression-set"
    ]
  },
  {
    "id": "mat-fkm",
    "name": "Fluoroelastomer (FKM)",
    "category": "base-polymer",
    "function": "High-performance elastomer for aggressive chemicals, fuels, and high heat; premium seals/O-rings in demanding fluid and temperature service.",
    "whereIntroduced": "Charged at the mixing stage; cure chemistry (bisphenol, peroxide, or diamine style) is grade-dependent.",
    "physicalForm": "Supplied as bales/slabs or pre-compounded gum; different families by fluorine level and cure type.",
    "handling": "Premium-cost material; minimize scrap. Keep cure systems matched to grade and avoid cross-contamination. Observe enhanced dust/fume controls during downstream heating per facility safety practice.",
    "storage": "Typically stored cool and dry; precompounded grades may have shelf-life limits. Track lot and date.",
    "supplyChain": "Sourced from a limited set of specialty fluoropolymer producers; long lead times and high cost are common. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover fluorine content/family, Mooney viscosity, cure-system type, and volatile matter. Use a qualified lab for actual testing.",
    "compatibility": "Cure type must match grade. Generally poor with ketones, esters, amines, and hot water/steam (grade-dependent); excellent with many oils, fuels, and aggressive chemicals.",
    "processingEffect": "Often requires a post-cure to develop full properties; cure family affects scorch and demold behavior.",
    "propertyEffect": "Tends to give outstanding heat and chemical resistance with comparatively limited low-temperature flexibility.",
    "riskIfPoor": "Wrong cure family or off-spec fluorine shifts chemical/heat resistance and set; under-developed cure (no post-cure) hurts properties.",
    "sourcingQuestions": [
      "Which FKM family and cure type (bisphenol/peroxide/diamine)?",
      "Is this a base gum or precompound, and what post-cure is assumed?",
      "What fluid/temperature targets must it meet (for verification)?"
    ],
    "relatedMaterials": [
      "mat-peroxide",
      "mat-metal-oxide",
      "mat-cb"
    ],
    "relatedDefects": [
      "under-cure",
      "compression-set",
      "swelling"
    ],
    "relatedTests": [
      "fluid-immersion",
      "heat-aging",
      "compression-set"
    ]
  },
  {
    "id": "mat-iir",
    "name": "Butyl Rubber (IIR)",
    "category": "base-polymer",
    "function": "Low-permeability elastomer prized for air/gas barrier and vibration damping; common in inner liners, bladders, seals, and damping mounts.",
    "whereIntroduced": "Charged at the mixing stage as the polymer base; halobutyl variants enable co-curing with other rubbers.",
    "physicalForm": "Supplied as bales; regular butyl and halogenated (chloro-/bromobutyl) grades.",
    "handling": "Generally clean-handling but slow-curing; keep separate from incompatible curatives. Halobutyl improves cure compatibility in blends.",
    "storage": "Typically stored cool and dry; long shelf life is common. Keep grades distinctly labeled (butyl vs halobutyl).",
    "supplyChain": "Sourced from a small number of global synthetic producers; lead times can be long during tight supply. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover unsaturation level, Mooney viscosity, halogen content (for halobutyl), and volatiles. Use a qualified lab for actual testing.",
    "compatibility": "Low unsaturation means slow sulfur cure; halobutyl helps. Generally poor with hydrocarbon oils/fuels; excellent air/moisture barrier and acid/ozone resistance.",
    "processingEffect": "Slow cure rate; blends with high-unsaturation rubbers can cure-mismatch unless halobutyl is used. Good tack control needed.",
    "propertyEffect": "Tends to give very low gas permeability and high damping, with modest oil resistance.",
    "riskIfPoor": "Variable unsaturation/halogen shifts cure rate and adhesion in blends; inconsistency causes air-retention and bonding issues.",
    "sourcingQuestions": [
      "Is this regular butyl or halobutyl (chloro/bromo)?",
      "What Mooney and unsaturation/halogen levels are typical?",
      "Is co-cure with other rubbers in a blend intended?"
    ],
    "relatedMaterials": [
      "mat-cb",
      "mat-metal-oxide",
      "mat-tackifier"
    ],
    "relatedDefects": [
      "under-cure",
      "poor-adhesion",
      "trapped-air"
    ],
    "relatedTests": [
      "heat-aging",
      "ozone-weathering",
      "compression-set"
    ]
  },
  {
    "id": "mat-csm",
    "name": "Chlorosulfonated Polyethylene (CSM)",
    "category": "base-polymer",
    "function": "Weather-, ozone-, chemical-, and color-stable elastomer for outdoor and chemical-contact parts, coated fabrics, hoses, and rollers.",
    "whereIntroduced": "Charged at the mixing stage as the polymer base; commonly cured with metal-oxide/special systems.",
    "physicalForm": "Supplied as chips/bales; grades vary by chlorine and sulfur content.",
    "handling": "Can be moisture- and scorch-sensitive; keep dry and temperature-controlled. Metal-oxide curatives must be handled cleanly.",
    "storage": "Typically stored cool and dry, protected from moisture which can affect cure behavior. Track lot/date.",
    "supplyChain": "Sourced from a limited set of specialty producers; availability has historically varied, so requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover chlorine and sulfur content, Mooney viscosity, and volatile/moisture level. Use a qualified lab for actual testing.",
    "compatibility": "Uses metal-oxide/special cure systems. Good resistance to ozone, weather, many acids and oxidizers; limited with some solvents. Pigments load cleanly for bright colors.",
    "processingEffect": "Moisture and temperature sensitivity affect cure and scorch; acid acceptors are commonly part of the system.",
    "propertyEffect": "Tends to give excellent weather/ozone/chemical resistance and good color retention, with moderate mechanical strength.",
    "riskIfPoor": "Moisture pickup or off-spec halogen shifts cure and aging; poor handling causes scorch and color variability.",
    "sourcingQuestions": [
      "What chlorine/sulfur content and viscosity grade?",
      "How is moisture controlled in packaging/storage?",
      "Which cure approach is recommended for the target service?"
    ],
    "relatedMaterials": [
      "mat-metal-oxide",
      "mat-pigment",
      "mat-mineral-filler"
    ],
    "relatedDefects": [
      "scorch",
      "contamination",
      "cracking"
    ],
    "relatedTests": [
      "ozone-weathering",
      "heat-aging",
      "color-check"
    ]
  },
  {
    "id": "mat-pu",
    "name": "Polyurethane (PU / millable or castable)",
    "category": "base-polymer",
    "function": "Tough, abrasion-resistant elastomer for wheels, rollers, seals, and wear parts; outstanding tear/abrasion at higher hardness.",
    "whereIntroduced": "Millable grades enter at the mixing stage; castable systems are metered/mixed as two components and poured, not mill-compounded.",
    "physicalForm": "Millable gum bales, or castable liquid prepolymer plus curative (two-component). Cast systems are moisture-sensitive liquids.",
    "handling": "Castable prepolymers are moisture-sensitive (commonly kept sealed/blanketed) and curatives may require careful handling per facility safety practice. Avoid moisture ingress.",
    "storage": "Typically stored sealed and dry; liquid prepolymers have defined shelf life and may need controlled temperature. Track shelf-life dates.",
    "supplyChain": "Sourced from specialty PU/prepolymer producers; lead times moderate, but specific curatives can be constrained. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover isocyanate (NCO) content for prepolymers, viscosity, moisture, and target hardness after cure. Use a qualified lab for actual testing.",
    "compatibility": "Moisture reacts with isocyanate (causes bubbles). Generally poor with hot water/steam and strong acids/bases; good with many oils and excellent abrasion. Match curative to prepolymer.",
    "processingEffect": "Cast cure is exothermic and moisture-sensitive; bubbles/voids arise from moisture or trapped air. Millable grades process more like conventional rubber.",
    "propertyEffect": "Tends to give exceptional abrasion/tear and load-bearing, with limited high-heat and hydrolysis resistance.",
    "riskIfPoor": "Off-spec NCO or moisture causes bubbles, soft/incomplete cure, and hardness drift; wrong curative ratio shifts properties.",
    "sourcingQuestions": [
      "Is this millable or castable, and what curative system?",
      "What NCO content/moisture limits and shelf life apply?",
      "What target hardness and abrasion performance are expected (for verification)?"
    ],
    "relatedMaterials": [
      "mat-release-agent",
      "mat-pigment",
      "mat-mineral-filler"
    ],
    "relatedDefects": [
      "trapped-air",
      "hardness-drift",
      "swelling"
    ],
    "relatedTests": [
      "abrasion",
      "tear-resistance",
      "hardness"
    ]
  },
  {
    "id": "mat-cb",
    "name": "Carbon Black",
    "category": "filler",
    "function": "Primary reinforcing filler that boosts strength, abrasion resistance, and modulus; also provides UV protection and black color. Grade (structure/surface area) tunes properties.",
    "whereIntroduced": "Added during mixing after the polymer is broken down, dispersed into the rubber before curatives.",
    "physicalForm": "Supplied as pellets (low-dust, common) or fluffy powder; bulk bags, sacks, or bulk silo delivery.",
    "handling": "Dusty (especially fluffy grade); commonly handled with dust control and PPE per facility practice. Pelletized forms reduce airborne dust. Keep grades segregated to avoid mix-ups.",
    "storage": "Typically stored dry to prevent moisture pickup and caking; kept away from contamination. FIFO by lot is common.",
    "supplyChain": "Sourced from carbon black producers (oil-derived); pricing tracks feedstock and energy. Bulk vs bagged affects lead time/logistics. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover surface area (e.g., iodine/N2 area), structure (oil absorption), pour density, moisture, ash, and sieve residue. Use a qualified lab for actual testing.",
    "compatibility": "Broadly compatible across most rubbers. Higher-structure/finer grades reinforce more but mix harder. Grade choice strongly affects conductivity, color, and hysteresis.",
    "processingEffect": "Loading and grade drive viscosity, mixing energy, and dispersion difficulty; poor incorporation leads to dispersion defects.",
    "propertyEffect": "Tends to raise hardness, modulus, abrasion resistance, and tear strength; affects heat build-up and electrical properties.",
    "riskIfPoor": "Wrong grade or contamination causes property shifts and dispersion defects; moisture/caking impairs feeding and dispersion.",
    "sourcingQuestions": [
      "Which grade (surface area/structure) and pellet or fluffy form?",
      "What are typical moisture, ash, and sieve-residue limits?",
      "How is lot-to-lot reinforcement consistency controlled?"
    ],
    "relatedMaterials": [
      "mat-silica",
      "mat-mineral-filler",
      "mat-processing-aid"
    ],
    "relatedDefects": [
      "poor-dispersion",
      "hardness-drift",
      "contamination"
    ],
    "relatedTests": [
      "hardness",
      "abrasion",
      "tensile-strength"
    ]
  },
  {
    "id": "mat-mineral-filler",
    "name": "Mineral Filler (general non-black, e.g., talc/whiting style)",
    "category": "filler",
    "function": "Non-reinforcing to semi-reinforcing extender that lowers cost, adjusts hardness and viscosity, and can aid extrusion smoothness; often used in light-colored compounds.",
    "whereIntroduced": "Added during mixing with or after polymer breakdown, before curatives.",
    "physicalForm": "Fine powder; bags or bulk bags. Surface-treated grades exist.",
    "handling": "Dusty; commonly handled with dust control. Keep dry and free of grit; segregate grades to control color and consistency.",
    "storage": "Typically stored dry to avoid caking and moisture; protected from contamination. FIFO common.",
    "supplyChain": "Sourced from mineral processors/quarry-based suppliers; generally widely available with moderate lead time. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover particle size, moisture, brightness/whiteness, oil absorption, and impurity/heavy-metal limits. Use a qualified lab for actual testing.",
    "compatibility": "Broadly compatible; high loadings dilute reinforcement and may reduce strength. Surface treatment improves polymer wetting. Watch acidity/alkalinity effects on cure.",
    "processingEffect": "Adjusts viscosity and shrinkage; very high loading can stiffen and reduce flow. Moisture can cause porosity in cure.",
    "propertyEffect": "Tends to raise hardness and lower cost while typically reducing tensile/tear versus reinforcing fillers.",
    "riskIfPoor": "Excess moisture causes porosity; grit/oversize particles cause defects; impurities may affect cure rate and color.",
    "sourcingQuestions": [
      "What particle size and moisture limits are typical?",
      "Is the grade surface-treated, and for which polymers?",
      "What impurity/heavy-metal limits apply for the intended use (for verification)?"
    ],
    "relatedMaterials": [
      "mat-clay-caco3",
      "mat-cb",
      "mat-paraffinic-oil"
    ],
    "relatedDefects": [
      "trapped-air",
      "poor-dispersion",
      "hardness-drift"
    ],
    "relatedTests": [
      "hardness",
      "specific-gravity",
      "tensile-strength"
    ]
  },
  {
    "id": "mat-silica",
    "name": "Precipitated Silica",
    "category": "filler",
    "function": "Reinforcing light-colored filler that improves tear, abrasion, and (with coupling) rolling resistance; key for non-black reinforced and low-hysteresis compounds.",
    "whereIntroduced": "Added during mixing, commonly together with a silane coupling agent and process aids to enable reinforcement.",
    "physicalForm": "Fine powder or granules/microbeads; bags or bulk bags. Different surface areas available.",
    "handling": "Dusty and moisture-sensitive; commonly handled with dust control and kept dry. A coupling/silane step is typically needed for full reinforcement.",
    "storage": "Typically stored dry and sealed to prevent moisture pickup, which strongly affects reactivity and cure. FIFO common.",
    "supplyChain": "Sourced from specialty silica producers; moderate lead time, grade-dependent availability. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover surface area (BET/CTAB), moisture, pH, oil absorption, and sieve residue. Use a qualified lab for actual testing.",
    "compatibility": "Silica is acidic and can retard sulfur cure; coupling agents and cure adjustment are typical. Without silane, reinforcement and dispersion suffer. Good in light/colored compounds.",
    "processingEffect": "Raises viscosity and mixing energy; high moisture and missing coupling agent worsen dispersion and slow cure.",
    "propertyEffect": "Tends to give high tear/abrasion and lower heat build-up (when coupled), with strong dependence on the silane step.",
    "riskIfPoor": "High moisture or poor coupling causes slow cure, poor dispersion, and property loss; pH variation shifts cure.",
    "sourcingQuestions": [
      "What surface area and moisture/pH ranges are typical?",
      "Is the grade intended for use with a silane coupling agent?",
      "How is lot consistency of surface area controlled?"
    ],
    "relatedMaterials": [
      "mat-cb",
      "mat-processing-aid",
      "mat-bonding-system"
    ],
    "relatedDefects": [
      "poor-dispersion",
      "under-cure",
      "scorch"
    ],
    "relatedTests": [
      "tear-resistance",
      "abrasion",
      "hardness"
    ]
  },
  {
    "id": "mat-clay-caco3",
    "name": "Clay / Calcium Carbonate Filler",
    "category": "filler",
    "function": "Economical extender/semi-reinforcing filler to adjust cost, hardness, and processing; calcium carbonate is a common cheap diluent, clay adds modest reinforcement.",
    "whereIntroduced": "Added during mixing with or after polymer breakdown, before curatives.",
    "physicalForm": "Fine powder; bags or bulk bags. Coated (e.g., stearate-treated calcium carbonate) and uncoated grades exist.",
    "handling": "Dusty; commonly handled with dust control. Coated grades disperse more easily. Keep dry and free of contamination.",
    "storage": "Typically stored dry to avoid moisture and caking; protected from grit/contamination. FIFO common.",
    "supplyChain": "Sourced from mineral/ground-calcium-carbonate and clay processors; widely available, generally short lead times. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover particle size, moisture, brightness, surface coating level (if coated), and impurity limits. Use a qualified lab for actual testing.",
    "compatibility": "Broadly compatible; calcium carbonate is largely inert but high loadings dilute strength. Some clays can affect cure (pH/adsorption). Coating improves dispersion.",
    "processingEffect": "Adjusts viscosity, cost, and smoothness; high loadings reduce flow and strength. Moisture risks porosity.",
    "propertyEffect": "Tends to raise hardness and lower cost with limited reinforcement; clay can give modest strength gains over calcium carbonate.",
    "riskIfPoor": "Moisture or impurities cause porosity and cure shifts; oversize/grit causes surface and strength defects.",
    "sourcingQuestions": [
      "Is the grade coated or uncoated, and what coating level?",
      "What particle size and moisture limits are typical?",
      "What brightness/impurity limits apply for light-colored use (for verification)?"
    ],
    "relatedMaterials": [
      "mat-mineral-filler",
      "mat-cb",
      "mat-pigment"
    ],
    "relatedDefects": [
      "trapped-air",
      "poor-dispersion",
      "hardness-drift"
    ],
    "relatedTests": [
      "hardness",
      "specific-gravity",
      "visual"
    ]
  },
  {
    "id": "mat-specialty-reinforcement",
    "name": "Specialty Reinforcement Filler (e.g., short-fiber / nanofiller category)",
    "category": "filler",
    "function": "Specialty additive to selectively boost stiffness, anisotropic strength, tear, or barrier properties beyond conventional fillers; used for targeted performance gains.",
    "whereIntroduced": "Added during mixing; orientation-sensitive types (short fibers) may align during downstream forming, affecting directional properties.",
    "physicalForm": "Short chopped fibers, platelets, or fine specialty powders; bags or specialty packaging. Often pre-treated for compatibility.",
    "handling": "Some grades are dusty or fluffy and need dust control; fiber types can bridge/clump and need careful dispersion. Surface treatment affects handling and bonding.",
    "storage": "Typically stored dry and sealed; some specialty grades are moisture- or contamination-sensitive. Track lot/date.",
    "supplyChain": "Sourced from specialty additive suppliers; can be niche with longer lead times and higher cost. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover particle/fiber size and aspect ratio, surface treatment, moisture, and purity. Use a qualified lab for actual testing.",
    "compatibility": "Compatibility depends on surface treatment and base polymer; poor treatment leads to weak interface and dispersion defects. May require dispersion aids.",
    "processingEffect": "Can raise viscosity sharply and complicate dispersion; fiber orientation introduces directional (anisotropic) behavior.",
    "propertyEffect": "Tends to raise targeted stiffness/tear or barrier with possible anisotropy; gains depend heavily on dispersion and interface.",
    "riskIfPoor": "Poor dispersion/interface gives weak spots and inconsistent properties; clumping causes defects.",
    "sourcingQuestions": [
      "What size/aspect ratio and surface treatment are provided?",
      "Which base polymers is it designed to bond with?",
      "What dispersion approach is recommended (for verification)?"
    ],
    "relatedMaterials": [
      "mat-cb",
      "mat-silica",
      "mat-bonding-system"
    ],
    "relatedDefects": [
      "poor-dispersion",
      "poor-adhesion",
      "cracking"
    ],
    "relatedTests": [
      "tear-resistance",
      "modulus",
      "tensile-strength"
    ]
  },
  {
    "id": "mat-paraffinic-oil",
    "name": "Paraffinic / Naphthenic Process Oil",
    "category": "oil-plasticizer",
    "function": "Process/extender oil that softens the compound, aids filler dispersion, lowers viscosity, and reduces cost; oil type is matched to polymer polarity.",
    "whereIntroduced": "Added during mixing, commonly alongside filler to aid incorporation; oil-extended polymers arrive pre-oiled.",
    "physicalForm": "Liquid; drums, totes (IBCs), or bulk tank. Viscosity varies by grade.",
    "handling": "Liquid handling (pumps/metering); commonly heated slightly for low-viscosity transfer. Avoid spills and cross-contamination between oil types.",
    "storage": "Typically stored in sealed drums/tanks, protected from contamination and temperature extremes. Track grade clearly to avoid mix-ups.",
    "supplyChain": "Sourced from petroleum/process-oil suppliers; pricing tracks crude. Bulk vs drum affects lead time. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover viscosity, aniline point/aromaticity, pour point, flash point, and volatility. Use a qualified lab for actual testing.",
    "compatibility": "Paraffinic/naphthenic oils suit nonpolar rubbers (NR, SBR, EPDM). Poorly matched oil bleeds/migrates. Avoid in highly polar rubbers where it is incompatible.",
    "processingEffect": "Lowers viscosity and mixing energy; too much oil reduces strength and can bloom. Volatility affects weight loss and porosity.",
    "propertyEffect": "Tends to soften, lower hardness, and improve low-temperature flexibility; excess reduces tensile and can migrate.",
    "riskIfPoor": "Wrong type/aromaticity causes bleed, bloom, and staining; high volatility causes porosity and shrinkage.",
    "sourcingQuestions": [
      "What oil type (paraffinic/naphthenic) and aniline point?",
      "What viscosity, pour point, and volatility are typical?",
      "Which base polymers is it intended to be compatible with?"
    ],
    "relatedMaterials": [
      "mat-sbr",
      "mat-epdm",
      "mat-low-temp-plasticizer"
    ],
    "relatedDefects": [
      "bloom",
      "swelling",
      "hardness-drift"
    ],
    "relatedTests": [
      "hardness",
      "low-temp-flex",
      "specific-gravity"
    ]
  },
  {
    "id": "mat-aromatic-oil",
    "name": "Aromatic-Type Process Oil (controlled-use)",
    "category": "oil-plasticizer",
    "function": "High-solvency process oil that aids dispersion and tack in compatible nonpolar rubbers; modern use is controlled and increasingly replaced by low-PAH alternatives.",
    "whereIntroduced": "Added during mixing with filler where high solvency is needed; subject to compliance review before selection.",
    "physicalForm": "Liquid; drums, totes, or bulk. Darker, higher-aromaticity oils.",
    "handling": "Liquid handling with care; some aromatic oils raise health/labeling considerations and require compliance review and PPE per facility safety practice.",
    "storage": "Typically stored sealed and segregated; clearly labeled given controlled-use status. Track grade and compliance documentation.",
    "supplyChain": "Sourced from process-oil suppliers offering low-PAH/treated alternatives; selection commonly driven by regulatory review. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover aromaticity, PAH content (for low-PAH grades), viscosity, and flash point. Use the official standard and a qualified lab for actual testing.",
    "compatibility": "Suits nonpolar rubbers needing high solvency; can stain and may carry compliance constraints. Verify regulatory acceptability before use.",
    "processingEffect": "Strong solvency aids dispersion and tack; staining and migration risks are higher than paraffinic oils.",
    "propertyEffect": "Tends to improve processing/tack with possible staining and migration; property trade-offs depend on loading.",
    "riskIfPoor": "Compliance/PAH issues and staining are the main risks; migration causes surface and bonding problems.",
    "sourcingQuestions": [
      "Is this a low-PAH/treated grade, and what documentation is available (for verification)?",
      "What aromaticity and viscosity are typical?",
      "What staining behavior should be expected?"
    ],
    "relatedMaterials": [
      "mat-paraffinic-oil",
      "mat-sbr",
      "mat-nr"
    ],
    "relatedDefects": [
      "bloom",
      "contamination",
      "swelling"
    ],
    "relatedTests": [
      "specific-gravity",
      "hardness",
      "visual"
    ]
  },
  {
    "id": "mat-ester-plasticizer",
    "name": "Ester Plasticizer",
    "category": "oil-plasticizer",
    "function": "Polar plasticizer that softens and improves low-temperature flexibility in polar rubbers (e.g., NBR, CR) where mineral oils are incompatible.",
    "whereIntroduced": "Added during mixing as the softener of choice for polar polymers.",
    "physicalForm": "Liquid; drums or totes. Many ester chemistries (different families and molecular weights).",
    "handling": "Liquid metering; some esters have specific handling/compliance considerations and require review. Avoid mixing incompatible ester types.",
    "storage": "Typically stored sealed and away from heat; track grade and compliance documentation. Some esters are moisture-sensitive.",
    "supplyChain": "Sourced from plasticizer/specialty-chemical suppliers; moderate lead time, grade- and compliance-dependent. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover ester identity/purity, viscosity, moisture, acidity, and volatility. Use a qualified lab for actual testing.",
    "compatibility": "Suits polar rubbers (NBR, CR); incompatible/extracts in some fluid contact. Higher-MW esters resist extraction/migration better. Verify food/medical compliance where relevant.",
    "processingEffect": "Softens and improves cold flexibility; volatile/low-MW types may migrate or extract, causing hardening over time.",
    "propertyEffect": "Tends to improve low-temperature flex and softness; trade-off is potential extraction in fluids and migration.",
    "riskIfPoor": "Migration/extraction causes hardening and dimensional change; off-spec acidity can affect cure and aging.",
    "sourcingQuestions": [
      "Which ester family and molecular weight (extraction resistance)?",
      "What compliance documentation is available if food/medical contact (for verification)?",
      "What moisture and acidity limits are typical?"
    ],
    "relatedMaterials": [
      "mat-nbr",
      "mat-cr",
      "mat-low-temp-plasticizer"
    ],
    "relatedDefects": [
      "swelling",
      "hardness-drift",
      "bloom"
    ],
    "relatedTests": [
      "low-temp-flex",
      "fluid-immersion",
      "hardness"
    ]
  },
  {
    "id": "mat-silicone-process-aid",
    "name": "Silicone Process Aid",
    "category": "oil-plasticizer",
    "function": "Processing additive that lubricates flow, reduces die drag, improves surface finish, and aids release without much affecting bulk properties at low loadings.",
    "whereIntroduced": "Added during mixing in small amounts; primarily a processing modifier rather than a bulk softener.",
    "physicalForm": "Liquid, paste, or supported powder/masterbatch; pails, drums, or bags.",
    "handling": "Easy to over-dose; commonly metered carefully because excess can harm adhesion and printing/bonding. Keep clean to avoid cross-contamination of bonding lines.",
    "storage": "Typically stored sealed and away from contamination; track grade. Generally stable shelf life.",
    "supplyChain": "Sourced from specialty additive/silicone suppliers; moderate lead time. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover active content, viscosity/form, volatiles, and carrier identity. Use a qualified lab for actual testing.",
    "compatibility": "Broadly usable at low levels; excess silicone can migrate to the surface and harm bonding, painting, or printing. Watch interaction with adhesion systems.",
    "processingEffect": "Improves flow, release, and surface smoothness; lowers die build-up. Overuse causes surface bloom/migration.",
    "propertyEffect": "Tends to improve surface finish and release with minimal bulk property change at low loadings.",
    "riskIfPoor": "Overdose or migration causes poor adhesion, surface defects, and secondary-operation failures.",
    "sourcingQuestions": [
      "What active content and carrier form is supplied?",
      "What loading range avoids adhesion problems (for verification)?",
      "Is it compatible with the intended bonding/printing steps?"
    ],
    "relatedMaterials": [
      "mat-processing-aid",
      "mat-release-agent",
      "mat-vmq"
    ],
    "relatedDefects": [
      "poor-adhesion",
      "bloom",
      "contamination"
    ],
    "relatedTests": [
      "surface-finish",
      "adhesion",
      "visual"
    ]
  },
  {
    "id": "mat-low-temp-plasticizer",
    "name": "Low-Temperature Plasticizer",
    "category": "oil-plasticizer",
    "function": "Specialty softener selected to extend low-temperature flexibility and reduce brittle point, important for cold-service seals and dynamic parts.",
    "whereIntroduced": "Added during mixing where cold flexibility is a design requirement.",
    "physicalForm": "Liquid; drums or totes. Often low-MW ester or specially formulated softeners.",
    "handling": "Liquid metering; volatile/low-MW grades can be migration-prone and need accurate dosing. Some have compliance considerations requiring review.",
    "storage": "Typically stored sealed and cool; protect from contamination and moisture. Track grade and compliance documentation.",
    "supplyChain": "Sourced from plasticizer/specialty suppliers; grade-specific availability, moderate lead time. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover identity/purity, viscosity, pour/brittle behavior, moisture, and volatility. Use a qualified lab for actual testing.",
    "compatibility": "Type must match polymer polarity; mismatched grades migrate/bleed. Some extract in fluids. Verify compliance where food/medical contact applies.",
    "processingEffect": "Softens and lowers brittle point; high volatility/migration can cause property drift and surface bloom over time.",
    "propertyEffect": "Tends to lower brittle point and improve cold flexibility; trade-off is possible migration and reduced fluid resistance.",
    "riskIfPoor": "Migration/extraction causes hardening, dimensional change, and loss of cold flexibility in service.",
    "sourcingQuestions": [
      "What brittle/low-temperature performance is typical for this grade?",
      "How is migration/extraction resistance characterized?",
      "Which polymers is it compatible with (for verification)?"
    ],
    "relatedMaterials": [
      "mat-ester-plasticizer",
      "mat-nbr",
      "mat-paraffinic-oil"
    ],
    "relatedDefects": [
      "bloom",
      "hardness-drift"
    ],
    "relatedTests": [
      "low-temp-flex",
      "hardness",
      "fluid-immersion"
    ]
  },
  {
    "id": "mat-sulfur-system",
    "name": "Sulfur-Style Cure Package",
    "category": "cure-system",
    "function": "Crosslinking system for unsaturated rubbers (NR, SBR, NBR, etc.) built around sulfur with accelerators and activators to form sulfur crosslinks during cure.",
    "whereIntroduced": "Added at the end of mixing (final stage) at lower temperatures to avoid premature crosslinking (scorch); kept separate from the masterbatch.",
    "physicalForm": "Sulfur as powder or oil-treated/polymer-bound grades; accelerators/activators as powders or pre-dispersed pellets/masterbatch.",
    "handling": "Dusty; commonly handled with dust control and added late and cool to avoid scorch. Pre-dispersed forms reduce dust and improve dispersion. Keep curatives segregated.",
    "storage": "Typically stored cool, dry, and segregated to prevent caking, moisture pickup, and cross-contamination. Track lot/date and shelf life of accelerators.",
    "supplyChain": "Sourced from rubber-chemical suppliers; generally available, moderate lead time. Accelerator availability varies by type. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover purity/assay, particle size, moisture, melting/decomposition behavior, and ash. Use a qualified lab for actual testing.",
    "compatibility": "For unsaturated rubbers only (not fully saturated polymers). Accelerator/activator balance sets scorch and cure rate. Some chemistries face nitrosamine/compliance scrutiny, requiring review.",
    "processingEffect": "Controls scorch safety and cure rate; late, cool addition and good dispersion are key to avoid premature cure. Acidic fillers can retard.",
    "propertyEffect": "Tends to set crosslink density, hence hardness, modulus, set, and aging; type affects heat resistance of the network.",
    "riskIfPoor": "Wrong balance or moisture causes scorch, under-cure, or over-cure; poor dispersion causes uneven properties and bloom.",
    "sourcingQuestions": [
      "What sulfur form and accelerator types are in the package?",
      "What scorch-safety and cure-rate behavior is typical (for verification)?",
      "Are there compliance considerations for the accelerators used?"
    ],
    "relatedMaterials": [
      "mat-nr",
      "mat-sbr",
      "mat-antioxidant"
    ],
    "relatedDefects": [
      "scorch",
      "under-cure",
      "over-cure"
    ],
    "relatedTests": [
      "hardness",
      "compression-set",
      "heat-aging"
    ]
  },
  {
    "id": "mat-peroxide",
    "name": "Peroxide-Style Cure Package",
    "category": "cure-system",
    "function": "Crosslinking system forming carbon-carbon bonds; works on saturated and unsaturated rubbers (EPDM, silicone, some FKM), giving good heat resistance and low compression set.",
    "whereIntroduced": "Added at the final mixing stage, cool, to avoid premature decomposition; often paired with a co-agent.",
    "physicalForm": "Peroxide as liquid, powder, or supported masterbatch (commonly on a carrier for safety and dispersion). Co-agents as powders/liquids.",
    "handling": "Peroxides are reactive/oxidizing; commonly handled per facility safety practice with temperature control and away from incompatibles. Supported grades are safer and disperse better.",
    "storage": "Typically stored cool and segregated from oxidizers/reducers and heat; many have defined shelf life and temperature limits. Track expiry strictly.",
    "supplyChain": "Sourced from specialty peroxide/rubber-chemical suppliers; lead times moderate, shelf-life-limited. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover active oxygen/assay, carrier/support level, decomposition behavior, and moisture. Use a qualified lab for actual testing.",
    "compatibility": "Sensitive to cure-inhibiting ingredients (some antioxidants, acidic fillers, certain oils). Not ideal where high tear/flex fatigue from sulfur is needed. Co-agents tune crosslinking.",
    "processingEffect": "Decomposition temperature governs cure onset; air/oxygen can inhibit surface cure (tacky surface). Co-agent improves efficiency.",
    "propertyEffect": "Tends to give good heat aging and low compression set with somewhat lower tear/fatigue than sulfur networks.",
    "riskIfPoor": "Expired/low-assay peroxide or inhibiting ingredients cause under-cure and tacky surfaces; over-aggressive systems embrittle.",
    "sourcingQuestions": [
      "What active assay, carrier, and shelf life apply?",
      "What co-agent is recommended for the target polymer (for verification)?",
      "Which ingredients are known to inhibit this peroxide?"
    ],
    "relatedMaterials": [
      "mat-epdm",
      "mat-vmq",
      "mat-fkm"
    ],
    "relatedDefects": [
      "under-cure",
      "over-cure",
      "compression-set"
    ],
    "relatedTests": [
      "compression-set",
      "heat-aging",
      "hardness"
    ]
  },
  {
    "id": "mat-metal-oxide",
    "name": "Metal-Oxide Cure System",
    "category": "cure-system",
    "function": "Crosslinking/acid-acceptor system for halogen-containing rubbers (CR, CSM, some others) using metal oxides (e.g., zinc/magnesium oxide style) to form the network and scavenge acids.",
    "whereIntroduced": "Added during mixing as part of the cure package for halogenated polymers; balance affects scorch and cure.",
    "physicalForm": "Fine powders; sometimes pre-dispersed. Bags or pre-dispersed pellets.",
    "handling": "Dusty; commonly handled with dust control. Balance of oxides affects scorch safety. Keep segregated from other curative philosophies to avoid cross-contamination.",
    "storage": "Typically stored dry to prevent moisture and caking; protected from contamination. Track lot/date.",
    "supplyChain": "Sourced from rubber-chemical/metal-oxide suppliers; generally available, moderate lead time. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover purity/assay, particle size/surface area, moisture, and heavy-metal/impurity limits. Use a qualified lab for actual testing.",
    "compatibility": "For halogenated rubbers (CR/CSM); not a substitute for sulfur/peroxide in non-halogen polymers. Activity depends on oxide surface area and balance. Acid acceptors guard against degradation.",
    "processingEffect": "Oxide surface area/activity affects cure rate and scorch; moisture impairs performance. Balance tunes scorch vs cure.",
    "propertyEffect": "Tends to set the crosslink network and aging stability for halogen rubbers; balance affects set and heat resistance.",
    "riskIfPoor": "Low-activity or moist oxide causes under-cure and poor aging; imbalance causes scorch or weak network.",
    "sourcingQuestions": [
      "What oxide type, surface area, and purity are supplied?",
      "What scorch/cure behavior is typical for the target polymer (for verification)?",
      "What moisture and heavy-metal limits apply?"
    ],
    "relatedMaterials": [
      "mat-cr",
      "mat-csm",
      "mat-iir"
    ],
    "relatedDefects": [
      "scorch",
      "under-cure",
      "compression-set"
    ],
    "relatedTests": [
      "hardness",
      "heat-aging",
      "compression-set"
    ]
  },
  {
    "id": "mat-special-cure",
    "name": "Special / Polymer-Dependent Cure System",
    "category": "cure-system",
    "function": "Grade-specific crosslinking chemistry required by certain polymers (e.g., bisphenol or diamine systems for FKM, platinum addition cure for some silicones) where standard systems do not apply.",
    "whereIntroduced": "Added per the polymer maker's chemistry, often as a matched curative or two-component system; some require a post-cure step.",
    "physicalForm": "Varies: precompounded curatives, two-part liquid systems, or matched powder packages.",
    "handling": "Must be matched exactly to the polymer grade; commonly handled cleanly because contaminants can inhibit (notably platinum cures). Track component ratios carefully.",
    "storage": "Typically stored per supplier guidance, often cool with defined shelf life; two-component/platinum systems are especially time- and contamination-sensitive. Track expiry.",
    "supplyChain": "Sourced from the specialty polymer/curative supplier; can be proprietary, niche, and long-lead. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover active content/assay, ratio/component identity, shelf life, and moisture/volatiles. Use a qualified lab for actual testing.",
    "compatibility": "Highly polymer-specific; mismatched chemistry gives no or poor cure. Platinum systems are poisoned by sulfur, amines, tin, and some plasticizers. Often needs post-cure.",
    "processingEffect": "Cure onset and post-cure needs are grade-dependent; contamination causes inhibition and surface tack.",
    "propertyEffect": "Tends to develop full heat/chemical resistance and set only after correct cure and post-cure; wrong system undercuts performance.",
    "riskIfPoor": "Mismatched or contaminated system causes inhibition, under-cure, poor set, and lost chemical/heat resistance.",
    "sourcingQuestions": [
      "Which exact cure chemistry matches the specified polymer grade?",
      "What post-cure approach is conceptually recommended (for verification)?",
      "What contaminants are known to inhibit this system?"
    ],
    "relatedMaterials": [
      "mat-fkm",
      "mat-vmq",
      "mat-peroxide"
    ],
    "relatedDefects": [
      "under-cure",
      "contamination",
      "compression-set"
    ],
    "relatedTests": [
      "compression-set",
      "heat-aging",
      "fluid-immersion"
    ]
  },
  {
    "id": "mat-antioxidant",
    "name": "Antioxidant",
    "category": "additive",
    "function": "Protective additive that slows oxidative aging from heat and oxygen, preserving tensile, elongation, and flex life over the part's service life.",
    "whereIntroduced": "Added during mixing into the masterbatch so it is well dispersed before cure.",
    "physicalForm": "Powder, flake, pellet, or liquid; some staining (amine-type) and non-staining (phenolic-type) families. Bags or drums.",
    "handling": "Dusty grades need dust control; staining types must be kept away from light-colored compounds. Pre-dispersed forms ease handling. Watch peroxide-cure inhibition with some amines.",
    "storage": "Typically stored cool, dry, and dark; some discolor with light/air. Track lot/date and shelf life.",
    "supplyChain": "Sourced from rubber-chemical suppliers; generally available, moderate lead time. Some specific chemistries face compliance scrutiny, requiring review. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover assay/purity, melting point, moisture, and ash. Use a qualified lab for actual testing.",
    "compatibility": "Staining amines unsuitable for light/colored parts; some antioxidants inhibit peroxide cure. Choose family by color, volatility, and extraction needs.",
    "processingEffect": "Minimal at low loadings; poor dispersion leaves unprotected zones. Volatile types can fume during downstream heating.",
    "propertyEffect": "Tends to extend heat-aging and flex-fatigue life with little effect on initial properties.",
    "riskIfPoor": "Insufficient/poorly dispersed antioxidant causes premature aging and cracking; staining types discolor light parts; bloom if overloaded.",
    "sourcingQuestions": [
      "Is this a staining (amine) or non-staining (phenolic) type?",
      "Is it compatible with the intended cure system (e.g., peroxide)?",
      "What loading and volatility behavior are typical (for verification)?"
    ],
    "relatedMaterials": [
      "mat-antiozonant",
      "mat-wax",
      "mat-nr"
    ],
    "relatedDefects": [
      "cracking",
      "bloom",
      "hardness-drift"
    ],
    "relatedTests": [
      "heat-aging",
      "tensile-strength",
      "elongation"
    ]
  },
  {
    "id": "mat-antiozonant",
    "name": "Antiozonant",
    "category": "additive",
    "function": "Protective additive that guards against ozone attack and surface cracking on unsaturated rubbers in dynamic or static outdoor service; often paired with protective wax.",
    "whereIntroduced": "Added during mixing into the masterbatch for good dispersion; works alongside wax for static and dynamic ozone protection.",
    "physicalForm": "Powder, pellet, or liquid (commonly a p-phenylenediamine-type for chemical antiozonants). Bags or drums.",
    "handling": "Many chemical antiozonants are staining and discoloring; keep away from light-colored parts and skin/contact per facility safety practice. Pre-dispersed forms reduce dust.",
    "storage": "Typically stored cool, dry, and dark; prone to discoloration and oxidation. Track lot/date and shelf life.",
    "supplyChain": "Sourced from rubber-chemical suppliers; generally available, moderate lead time. Some chemistries face compliance scrutiny. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover assay/purity, melting point, moisture, and ash. Use a qualified lab for actual testing.",
    "compatibility": "For unsaturated rubbers (NR, SBR, etc.); staining and unsuitable for light colors. Works with wax for combined static/dynamic protection. Limited benefit in saturated rubbers (EPDM relies more on backbone).",
    "processingEffect": "Minimal processing effect; poor dispersion leaves unprotected zones. Some migrate/bloom by design to renew surface protection.",
    "propertyEffect": "Tends to greatly improve ozone-crack resistance and flex life; trade-off is staining and surface discoloration.",
    "riskIfPoor": "Too little or poorly dispersed leads to ozone cracking; excess blooms and stains; wrong type fails dynamic protection.",
    "sourcingQuestions": [
      "Which antiozonant family and is staining acceptable for the part color?",
      "Is combined wax-plus-chemical protection intended (for verification)?",
      "What loading and bloom behavior are typical?"
    ],
    "relatedMaterials": [
      "mat-wax",
      "mat-antioxidant",
      "mat-nr"
    ],
    "relatedDefects": [
      "cracking",
      "bloom",
      "hardness-drift"
    ],
    "relatedTests": [
      "ozone-weathering",
      "heat-aging",
      "visual"
    ]
  },
  {
    "id": "mat-wax",
    "name": "Protective Wax",
    "category": "additive",
    "function": "Physical-barrier additive that blooms to the surface and shields against static ozone attack; complements chemical antiozonants, mainly for non-flexing (static) parts.",
    "whereIntroduced": "Added during mixing into the masterbatch; designed to migrate slowly to form a protective surface film.",
    "physicalForm": "Waxy flakes, pastilles, or powder (blends of paraffin/microcrystalline waxes). Bags.",
    "handling": "Low-melting; commonly kept cool to avoid clumping. Controlled bloom is the point, but excess looks like a surface defect. Keep clean.",
    "storage": "Typically stored cool and dry to prevent fusing/caking; protected from heat. Track lot/date.",
    "supplyChain": "Sourced from wax/rubber-chemical suppliers; generally available, moderate lead time. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover melting/congealing range, carbon-chain distribution, oil content, and color. Use a qualified lab for actual testing.",
    "compatibility": "Best for static ozone protection; on flexing parts the wax film cracks, so chemical antiozonants are needed too. Excess wax can hurt adhesion and printing.",
    "processingEffect": "Acts partly as a process lubricant; bloom rate depends on wax blend and temperature. Overuse causes heavy surface bloom.",
    "propertyEffect": "Tends to improve static ozone resistance via surface film; minimal bulk property change at typical levels.",
    "riskIfPoor": "Wrong bloom rate gives no protection or excessive bloom (appearance/adhesion issues); inconsistent melting range shifts performance.",
    "sourcingQuestions": [
      "What melting range and wax blend (paraffin/microcrystalline) is supplied?",
      "What bloom rate behavior is typical for the service temperature (for verification)?",
      "Could it affect downstream adhesion or printing?"
    ],
    "relatedMaterials": [
      "mat-antiozonant",
      "mat-antioxidant",
      "mat-processing-aid"
    ],
    "relatedDefects": [
      "bloom",
      "poor-adhesion",
      "cracking"
    ],
    "relatedTests": [
      "ozone-weathering",
      "visual",
      "surface-finish"
    ]
  },
  {
    "id": "mat-processing-aid",
    "name": "Processing Aid",
    "category": "additive",
    "function": "Flow/dispersion additive (fatty acids, soaps, peptizers, low-MW polymers) that eases mixing, lowers viscosity, improves filler wetting, and aids extrusion/mold flow.",
    "whereIntroduced": "Added during mixing, often early to aid filler incorporation; type chosen by the function needed (dispersion vs flow vs release).",
    "physicalForm": "Powder, flake, pellet, paste, or liquid; bags, pails, or drums.",
    "handling": "Mostly easy to handle; some are dusty or low-melting. Over-dosing can cause bloom and adhesion loss, so dosing accuracy matters.",
    "storage": "Typically stored cool and dry to prevent caking/fusing; protected from contamination. Track lot/date.",
    "supplyChain": "Sourced from rubber-chemical/additive suppliers; generally available, moderate lead time. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover composition/active content, melting/softening point, acid value (for fatty types), and moisture. Use a qualified lab for actual testing.",
    "compatibility": "Broadly compatible at low levels; excess fatty acids/soaps can bloom or interfere with cure activation and adhesion. Match type to polymer and goal.",
    "processingEffect": "Lowers viscosity and mixing energy, improves dispersion and surface finish; overuse causes bloom and reduced strength.",
    "propertyEffect": "Tends to be processing-focused with small property effects at proper loading; excess can lower strength and adhesion.",
    "riskIfPoor": "Wrong type or overdose causes bloom, adhesion loss, and cure interference; off-spec acid value shifts activation.",
    "sourcingQuestions": [
      "What is the active composition and intended function (dispersion/flow/release)?",
      "What loading avoids bloom and adhesion loss (for verification)?",
      "Does it interact with the cure activation system?"
    ],
    "relatedMaterials": [
      "mat-cb",
      "mat-silica",
      "mat-wax"
    ],
    "relatedDefects": [
      "bloom",
      "poor-dispersion",
      "poor-adhesion"
    ],
    "relatedTests": [
      "surface-finish",
      "hardness",
      "visual"
    ]
  },
  {
    "id": "mat-tackifier",
    "name": "Tackifier",
    "category": "additive",
    "function": "Additive that raises uncured (building) tack so plies and components stick together before cure, important for built-up and laminated parts.",
    "whereIntroduced": "Added during mixing into compounds that must adhere to themselves or to plies/fabric before vulcanization.",
    "physicalForm": "Resin flakes, lumps, pellets, or liquid (hydrocarbon, phenolic, or rosin-type resins). Bags or drums.",
    "handling": "Some resins are sticky/low-melting and clump; commonly kept cool. Keep clean to avoid contamination of bonding surfaces.",
    "storage": "Typically stored cool and dry to prevent fusing/blocking; protected from heat. Track lot/date and shelf life.",
    "supplyChain": "Sourced from resin/rubber-chemical suppliers; generally available, moderate lead time. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover softening point, color, acid value (rosin types), and volatiles. Use a qualified lab for actual testing.",
    "compatibility": "Type matched to polymer for compatibility and tack; some resins (e.g., reactive phenolics) also reinforce/cure-couple. Excess can bloom or soften the cured part.",
    "processingEffect": "Improves building tack and ply adhesion; can affect viscosity and cure (reactive types). Overuse softens and blooms.",
    "propertyEffect": "Tends to improve green tack and inter-ply bonding; reactive types may add stiffness/adhesion in the cured state.",
    "riskIfPoor": "Insufficient tack causes ply separation and trapped air; wrong/excess resin blooms, softens, or weakens the part.",
    "sourcingQuestions": [
      "Which resin type and softening point for the target polymer?",
      "Is it a reactive (reinforcing) or non-reactive tackifier?",
      "What loading gives adequate tack without bloom (for verification)?"
    ],
    "relatedMaterials": [
      "mat-bonding-system",
      "mat-fabric",
      "mat-nr"
    ],
    "relatedDefects": [
      "poor-adhesion",
      "trapped-air",
      "bloom"
    ],
    "relatedTests": [
      "adhesion",
      "tensile-strength",
      "visual"
    ]
  },
  {
    "id": "mat-pigment",
    "name": "Pigment / Colorant",
    "category": "additive",
    "function": "Coloring additive (inorganic or organic pigments) for non-black or color-coded parts; provides identification, aesthetics, and sometimes UV/heat stability.",
    "whereIntroduced": "Added during mixing, often as a pre-dispersed masterbatch for even color; requires good dispersion to avoid streaks.",
    "physicalForm": "Powder or pre-dispersed pellet/paste masterbatch; bags or pails. Inorganic (heat-stable) and organic (bright, but heat/bleed-sensitive) types.",
    "handling": "Powders are dusty and staining; pre-dispersed forms are cleaner and disperse better. Keep color lines clean to avoid cross-contamination between colors.",
    "storage": "Typically stored dry and sealed; protected from contamination and (for some organics) light. Track lot/date for color matching.",
    "supplyChain": "Sourced from pigment/masterbatch suppliers; generally available, moderate lead time, color-match dependent. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover color strength/shade, heat stability, moisture, and heavy-metal/impurity limits. Use a qualified lab for actual testing.",
    "compatibility": "Inorganic pigments are heat/bleed-stable; some organics bleed or shift under cure heat. Verify compliance (heavy metals) for food/medical/toy use. Avoid cure interference.",
    "processingEffect": "Mainly affects color and dispersion; poor dispersion causes streaks/specks. Some pigments mildly affect cure.",
    "propertyEffect": "Tends to set color and some UV/heat stability with minimal mechanical effect; some pigments aid weathering.",
    "riskIfPoor": "Poor dispersion or weak heat-stability causes color streaks, shade drift, and bleed; impurities raise compliance risk.",
    "sourcingQuestions": [
      "Is the pigment inorganic or organic, and heat-stable at cure conditions (for verification)?",
      "What heavy-metal/compliance documentation is available for the end use?",
      "Is a pre-dispersed masterbatch available for even color?"
    ],
    "relatedMaterials": [
      "mat-mineral-filler",
      "mat-clay-caco3",
      "mat-csm"
    ],
    "relatedDefects": [
      "poor-dispersion",
      "contamination",
      "bloom"
    ],
    "relatedTests": [
      "color-check",
      "visual",
      "heat-aging"
    ]
  },
  {
    "id": "mat-flame-retardant",
    "name": "Flame-Retardant Additive (category)",
    "category": "additive",
    "function": "Additive category that reduces flammability, smoke, or flame spread for parts with fire-performance requirements; chemistry chosen by polymer and target test.",
    "whereIntroduced": "Added during mixing, often at significant loadings (mineral hydrate types) which affect mechanical properties and processing.",
    "physicalForm": "Powders (mineral hydrates, phosphorus or other systems) or liquids; bags or drums. Often high loading required.",
    "handling": "Mineral types are dusty and high-loading; commonly handled with dust control. Some halogenated chemistries face compliance scrutiny, requiring review. Keep dry.",
    "storage": "Typically stored dry to avoid moisture (some are hydrates); protected from contamination. Track lot/date.",
    "supplyChain": "Sourced from flame-retardant/additive suppliers; availability varies by chemistry and compliance status. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover active content, particle size, moisture, and impurity/compliance markers. Use the official standard and a qualified lab for actual fire testing.",
    "compatibility": "High mineral loadings dilute strength; some systems interfere with cure. Verify regulatory acceptability and target fire-test method before selection. Synergists may be needed.",
    "processingEffect": "High loading raises viscosity and abrasiveness on equipment; moisture (hydrates) can cause porosity. May slow or alter cure.",
    "propertyEffect": "Tends to improve fire performance while often reducing tensile/elongation and flexibility at high loadings.",
    "riskIfPoor": "Off-spec loading or moisture undermines fire performance and causes porosity/strength loss; compliance gaps create regulatory risk.",
    "sourcingQuestions": [
      "Which flame-retardant chemistry and what target fire test must be met (for verification)?",
      "What loading and compliance documentation are available?",
      "Is a synergist required, and what property trade-offs are expected?"
    ],
    "relatedMaterials": [
      "mat-mineral-filler",
      "mat-csm",
      "mat-clay-caco3"
    ],
    "relatedDefects": [
      "trapped-air",
      "poor-dispersion",
      "hardness-drift"
    ],
    "relatedTests": [
      "heat-aging",
      "hardness",
      "specific-gravity"
    ]
  },
  {
    "id": "mat-bonding-system",
    "name": "Bonding / Adhesion System (rubber-to-substrate)",
    "category": "additive",
    "function": "System that promotes adhesion of rubber to metal, fabric, or other substrates, either as an in-rubber bonding agent or as a surface-applied adhesive/primer for bonded assemblies.",
    "whereIntroduced": "In-rubber bonding agents are added during mixing; surface adhesives/primers are applied to the substrate before molding/bonding (a separate prep step).",
    "physicalForm": "In-rubber agents as powders/pre-dispersed forms; surface systems as solvent- or water-based liquids (primer plus topcoat). Bags, cans, or drums.",
    "handling": "Solvent-based primers need ventilation, flammables handling, and PPE per facility safety practice; surface cleanliness is critical. In-rubber agents must be evenly dispersed.",
    "storage": "Liquid adhesives typically stored sealed, cool, away from ignition sources, with defined shelf life; in-rubber agents kept dry. Track expiry strictly.",
    "supplyChain": "Sourced from specialty adhesive/rubber-chemical suppliers; lead times moderate, some proprietary. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover active/solids content, viscosity, shelf life, and solvent type. Use a qualified lab for actual adhesion testing.",
    "compatibility": "Adhesive must match both the rubber and the substrate; mismatch or contamination causes bond failure. Oils, waxes, mold release, and silicone process aids can poison bonds.",
    "processingEffect": "Surface prep, dryness, and timing are critical; contamination or wrong cure window causes weak bonds. In-rubber agents must disperse well.",
    "propertyEffect": "Tends to determine bond strength and durability of the rubber-to-substrate interface, often the weakest link in bonded parts.",
    "riskIfPoor": "Wrong system, contamination, or poor surface prep causes adhesion failure and delamination in service.",
    "sourcingQuestions": [
      "Is this an in-rubber agent or a surface primer/adhesive system?",
      "Which rubber and substrate combination is it qualified for (for verification)?",
      "What surface-prep and shelf-life requirements apply?"
    ],
    "relatedMaterials": [
      "mat-fabric",
      "mat-tackifier",
      "mat-silica"
    ],
    "relatedDefects": [
      "poor-adhesion",
      "contamination",
      "cracking"
    ],
    "relatedTests": [
      "adhesion",
      "tensile-strength",
      "visual"
    ]
  },
  {
    "id": "mat-fabric",
    "name": "Fabric Reinforcement",
    "category": "reinforcement",
    "function": "Textile reinforcement (woven or cord fabric of nylon, polyester, aramid, cotton, etc.) embedded in rubber to carry load, control stretch, and add burst/tensile strength in hoses, belts, and diaphragms.",
    "whereIntroduced": "Introduced during building/assembly, not mixing; calendered/coated with rubber and layered into the part before cure. Often pre-treated for adhesion (e.g., dip-treated cords).",
    "physicalForm": "Rolls of woven fabric or cord/ply material; widths and constructions vary. Commonly supplied with an adhesion treatment.",
    "handling": "Rolls handled to avoid creasing, contamination, and moisture pickup; cut and aligned carefully. Adhesion treatment surfaces must stay clean and undamaged.",
    "storage": "Typically stored flat/rolled, dry, and clean to protect adhesion treatment and avoid moisture; protected from light/heat per material. Track lot and treatment date.",
    "supplyChain": "Sourced from technical-textile/cord-fabric suppliers; lead times moderate to long for specialty constructions. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover fiber type, construction (count/denier/weave), breaking strength, adhesion-treatment type, and moisture. Use a qualified lab for actual testing.",
    "compatibility": "Fiber and treatment must match the rubber for adhesion; untreated/contaminated fabric bonds poorly. Different fibers differ in heat/stretch/strength. Verify treatment-to-rubber compatibility.",
    "processingEffect": "Calendering/coating quality and ply alignment drive bond and trapped-air risk; moisture or contamination causes delamination and blisters.",
    "propertyEffect": "Tends to dominate tensile/burst strength and dimensional stability of reinforced parts; controls stretch and pressure rating.",
    "riskIfPoor": "Wrong construction or poor adhesion treatment causes ply separation, blisters, and burst failures; moisture causes delamination.",
    "sourcingQuestions": [
      "What fiber type, construction, and breaking strength are specified?",
      "What adhesion treatment is applied and for which rubber (for verification)?",
      "How are moisture and treatment freshness controlled?"
    ],
    "relatedMaterials": [
      "mat-bonding-system",
      "mat-tackifier",
      "mat-nr"
    ],
    "relatedDefects": [
      "poor-adhesion",
      "trapped-air",
      "cracking"
    ],
    "relatedTests": [
      "fabric-inspection",
      "adhesion",
      "tensile-strength"
    ]
  },
  {
    "id": "mat-release-agent",
    "name": "Mold Release Agent",
    "category": "consumable",
    "function": "Process consumable applied to molds (or built into the compound) to ease demolding, reduce sticking and tearing, and protect surface finish; a tool consumable, not a part ingredient.",
    "whereIntroduced": "Applied to the mold surface before/between molding cycles (external type), or sometimes a small internal release additive is mixed in. Not part of the cured material in the external case.",
    "physicalForm": "Aerosol, liquid (solvent- or water-based), or paste; cans, drums, or totes. Semi-permanent and sacrificial types exist.",
    "handling": "Solvent/aerosol types need ventilation and flammables handling per facility safety practice; over-application transfers to parts and harms adhesion/printing. Keep off bonding surfaces.",
    "storage": "Typically stored sealed, cool, away from ignition sources; aerosols pressure-sensitive. Track shelf life and lot.",
    "supplyChain": "Sourced from release-agent/process-chemical suppliers; generally available, short to moderate lead time. Requires verification before sourcing.",
    "qualityCoa": "A certificate of analysis would conceptually cover active/solids content, carrier/solvent type, and transfer characteristics. Use a qualified lab for actual evaluation.",
    "compatibility": "Silicone-based releases can transfer and ruin downstream bonding/painting; choose non-transfer/water-based where secondary operations follow. Verify compatibility with the rubber and any post-ops.",
    "processingEffect": "Eases demolding and protects surface finish; over-application causes part contamination, surface defects, and adhesion loss.",
    "propertyEffect": "Tends not to affect bulk properties (external type), but residue can degrade surface adhesion, printing, and appearance.",
    "riskIfPoor": "Wrong type or over-application causes surface contamination, poor adhesion in secondary operations, and finish defects; too little causes sticking/tearing.",
    "sourcingQuestions": [
      "Is it transfer or non-transfer (for parts needing post-bonding/painting)?",
      "Is it silicone-based, and is that acceptable for downstream operations (for verification)?",
      "Is it compatible with the rubber and mold material?"
    ],
    "relatedMaterials": [
      "mat-silicone-process-aid",
      "mat-bonding-system",
      "mat-vmq"
    ],
    "relatedDefects": [
      "contamination",
      "poor-adhesion",
      "trapped-air"
    ],
    "relatedTests": [
      "surface-finish",
      "adhesion",
      "visual"
    ]
  }
];

export const ingredientLibraryById: Record<string, IngredientLibraryItem> = Object.fromEntries(
  ingredientLibrary.map((i) => [i.id, i]),
);
