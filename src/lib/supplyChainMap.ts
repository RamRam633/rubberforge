import type { SupplyChainStage } from "@/types/factoryIntel";

export const supplyChainStages: SupplyChainStage[] = [
  {
    "id": "polymer-producers",
    "name": "Base Polymer / Elastomer Producers",
    "stageType": "supplier",
    "whatIsSupplied": "The base elastomers that define the compound family, commonly natural rubber grades and synthetic elastomers such as SBR, EPDM, NBR, CR, silicone, or fluoroelastomer, typically supplied as bales, crumb, pellets, or gum. These set core properties (temperature range, chemical and oil resistance, set and aging behavior). Exact polymer choice and any blend ratios are application-specific and require verification before sourcing.",
    "documentsThatMatter": [
      "certificate of analysis",
      "TDS",
      "lot/batch traceability"
    ],
    "risks": [
      "Lot-to-lot variation in viscosity, molecular weight, or volatile content that can shift processing and cured properties",
      "Natural rubber price and availability swings (weather, region, harvest) and grade substitution that may not be like-for-like",
      "Polymer family or grade misidentification (for example an EPDM grade unsuitable for the intended oil exposure), which requires verification against the application"
    ],
    "questionsToAsk": [
      "What is the exact polymer grade and producer, and is a representative CoA and TDS available for the offered lots (illustrative grades cited in any RFQ are examples only and require verification before sourcing)?",
      "What lot/batch traceability and typical lot size do you provide, and how is incoming material identified?",
      "What is typical lead time, minimum order quantity, and how is grade-change or discontinuation communicated?"
    ],
    "manufacturingImpact": "The base polymer is the largest single driver of both unit cost and achievable performance, so it dominates a quote. Viscosity and consistency affect mixing and downstream processing behavior, and any uncontrolled grade change can move properties out of spec. For RFQ purposes, capture grade, producer, typical price basis, MOQ, and lead time, and flag any specialty elastomer as a cost and schedule risk."
  },
  {
    "id": "filler-producers",
    "name": "Filler & Reinforcing Filler Producers",
    "stageType": "supplier",
    "whatIsSupplied": "Particulate fillers that reinforce or extend the compound, commonly carbon black grades and precipitated or fumed silica, plus mineral fillers such as clays, calcium carbonate, or talc. These influence hardness, strength, abrasion resistance, and cost. Grade selection and loading are formulation-dependent and require verification before sourcing.",
    "documentsThatMatter": [
      "certificate of analysis",
      "SDS",
      "TDS"
    ],
    "risks": [
      "Variation in particle size, surface area, or structure that changes reinforcement and processing behavior",
      "Moisture pickup in hygroscopic fillers (notably silica) during storage or transit, affecting handling and cured properties",
      "Carbon black grade substitution that is not equivalent in reinforcement class, which requires verification"
    ],
    "questionsToAsk": [
      "What is the exact filler grade and a representative CoA, including the property indicators relevant to reinforcement (any specific grades named are illustrative and require verification before sourcing)?",
      "How is moisture controlled and reported, and what packaging protects against pickup in transit?",
      "What is the current SDS, and what dust or handling precautions apply on receipt?"
    ],
    "manufacturingImpact": "Fillers are typically the second-largest cost contributor after the polymer and strongly affect mechanical properties and processability. Inconsistent particle characteristics or moisture can cause variation between batches. For quoting, record grade, typical price, packaging, and any moisture-sensitivity that drives storage requirements, and treat any reinforcing-grade substitution as a property risk needing verification."
  },
  {
    "id": "oil-suppliers",
    "name": "Process Oil & Plasticizer Suppliers",
    "stageType": "supplier",
    "whatIsSupplied": "Process oils and plasticizers used to aid processing and adjust softness and low-temperature behavior, commonly paraffinic, naphthenic, or non-aromatic process oils and ester plasticizers. Compatibility with the chosen elastomer is essential, and specific oil type and level are formulation-dependent and require verification before sourcing.",
    "documentsThatMatter": [
      "certificate of analysis",
      "SDS",
      "TDS"
    ],
    "risks": [
      "Oil-elastomer incompatibility causing bleed, blooming, or property loss if the wrong oil family is used",
      "Regulatory attention on aromatic-content oils, so grade and any food-contact or restricted-substance status requires review and verification",
      "Viscosity or purity variation between lots, or a mislabeled tank or drum that can carry contamination through the whole batch"
    ],
    "questionsToAsk": [
      "What is the exact oil/plasticizer type and a representative CoA, and is it stated compatible with the intended elastomer family (compatibility claims require verification before sourcing)?",
      "What is the current SDS and any restricted-substance or food-contact status, to be confirmed against the official requirement and a qualified lab where applicable?",
      "How are drums or bulk deliveries identified, and what shelf-life or storage guidance applies?"
    ],
    "manufacturingImpact": "Oils and plasticizers are usually a smaller cost line but disproportionately affect processability and long-term property stability, including bleed or migration that can show up as a field failure. Incompatibility or a regulatory issue on oil grade can disqualify a compound. For RFQ work, capture oil family, compatibility note, SDS status, and any restricted-substance flags, and verify regulatory claims independently."
  },
  {
    "id": "additive-suppliers",
    "name": "Curatives & Additive Suppliers",
    "stageType": "supplier",
    "whatIsSupplied": "The chemical additive package: curing/vulcanizing agents and accelerators, activators, antioxidants and antiozonants, processing aids, and pigments or specialty additives. These control crosslinking, aging resistance, and appearance. Exact chemistries, levels, and cure-system choices are formulation-dependent and confidential, and require verification before sourcing. No recipe quantities or cure conditions are provided here.",
    "documentsThatMatter": [
      "certificate of analysis",
      "SDS",
      "shelf-life info"
    ],
    "risks": [
      "Shelf-life and reactivity loss in curatives and accelerators that can cause undercure or scorch tendencies if expired or mis-stored",
      "Cross-contamination between active additives, which can strongly affect cure behavior even at trace levels",
      "Restricted-substance or labeling concerns (for example certain accelerators or pigments) requiring SDS and regulatory review, with counterfeit or off-spec risk on poorly controlled routes"
    ],
    "questionsToAsk": [
      "What is the exact additive identity and a representative CoA, and what is the stated shelf life and storage condition (specific accelerator or antioxidant grades cited anywhere are illustrative and require verification before sourcing)?",
      "What is the current SDS, and are there restricted-substance, dust, or handling precautions for this additive?",
      "How is each additive uniquely identified and segregated to prevent cross-contamination, and how are expiry dates tracked?"
    ],
    "manufacturingImpact": "Additives are small by weight but decisive for cure and durability, so an expired, contaminated, or substituted additive can scrap a whole batch or cause latent field failures. Shelf-life control and segregation are central quality concerns. For quoting, record additive identities at the category level, shelf-life and storage needs, SDS status, and any restricted-substance flags, without exposing recipe detail."
  },
  {
    "id": "reinforcement-suppliers",
    "name": "Reinforcement & Insert Suppliers (textile, cord, metal)",
    "stageType": "supplier",
    "whatIsSupplied": "Embedded reinforcements and bonded components for engineered rubber parts, commonly textile fabrics and cords (polyester, nylon, aramid), steel wire or cord, and metal inserts or bonding substrates, often with adhesion treatments or primers. Used in hoses, belts, seals, and bonded mounts. Specific reinforcement construction and bonding system are design-dependent and require verification before sourcing.",
    "documentsThatMatter": [
      "certificate of conformity",
      "TDS",
      "drawing/spec revision"
    ],
    "risks": [
      "Adhesion failure at the rubber-to-substrate or rubber-to-cord interface if surface preparation, primer, or material is off-spec",
      "Dimensional or construction variation in fabric, cord, or inserts that shows up after molding",
      "Drawing or spec revision mismatch between supplier and factory, so an outdated revision may be supplied, plus corrosion or contamination on metal inserts affecting bond integrity"
    ],
    "questionsToAsk": [
      "What is the exact reinforcement construction or insert part and the drawing/spec revision it is built to, and is a certificate of conformity provided (any standard or material references are illustrative and require verification before sourcing)?",
      "What surface treatment, primer, or bonding-system compatibility is stated, and how is it verified (bond performance should be confirmed using the official method and a qualified lab)?",
      "How are inserts protected from corrosion and contamination, and what incoming inspection or dimensional report is supplied?"
    ],
    "manufacturingImpact": "Reinforcements and inserts can be a major cost element in engineered parts and are a common root cause of bond and durability failures. Revision control between supplier and factory is critical because a part built to a superseded drawing may pass dimensional checks yet fail in service. For RFQ, capture construction, revision, bonding-system note, and conformity documentation, and flag adhesion as a verification item."
  },
  {
    "id": "packaging-suppliers",
    "name": "Packaging & Consumables Suppliers",
    "stageType": "supplier",
    "whatIsSupplied": "Packaging and handling consumables for incoming materials and finished goods, commonly liners and bags, drums and containers, pallets, dunnage, anti-stick interleaves or dusting agents, desiccants, and labels. Some packaging contacts the rubber directly and may need to meet cleanliness or contact requirements. Specific packaging specs are application-dependent and require verification before sourcing.",
    "documentsThatMatter": [
      "certificate of conformity",
      "regulatory/food-contact docs",
      "TDS"
    ],
    "risks": [
      "Packaging that contaminates or reacts with rubber (residual oils, incompatible interleaves, migrating substances)",
      "Moisture or contamination ingress through damaged or inadequate packaging, degrading moisture-sensitive fillers or additives",
      "Unverified food-contact or regulatory claims (needing the official requirement and a qualified lab to confirm), and mislabeling that breaks lot traceability"
    ],
    "questionsToAsk": [
      "What is the packaging material and a certificate of conformity, and does any rubber-contact packaging carry verified regulatory or food-contact documentation (contact claims require verification before sourcing)?",
      "How does the packaging protect moisture-sensitive materials, and what storage life does it support?",
      "How are labels applied and what information do they carry to preserve lot/batch traceability?"
    ],
    "manufacturingImpact": "Packaging is a low-cost line that can cause high-cost problems: contamination of contact surfaces, moisture damage to sensitive materials, or a broken traceability chain that complicates any recall. Contact and regulatory claims must be verified independently. For quoting, capture packaging spec, contact status where relevant, and labeling approach, and note any food-contact or regulated end use as a verification item."
  },
  {
    "id": "inbound-freight",
    "name": "Inbound Freight & Logistics",
    "stageType": "inbound",
    "whatIsSupplied": "Transport of raw materials from suppliers to the factory across road, sea, or air, including temperature and moisture protection in transit, customs handling for imports, and chain-of-custody documentation. Lead times and transit conditions vary by mode, lane, and season and require verification before commitment.",
    "documentsThatMatter": [
      "lot/batch traceability",
      "shelf-life info",
      "SDS"
    ],
    "risks": [
      "Temperature, humidity, or sunlight exposure in transit degrading sensitive elastomers, oils, or curatives",
      "Transit and customs delays consuming the remaining shelf life of time-sensitive additives before receipt",
      "Dangerous-goods documentation gaps for SDS-classified materials, plus damage, contamination, or broken traceability across carrier handoffs"
    ],
    "questionsToAsk": [
      "What transit conditions and protection are provided for temperature- or moisture-sensitive materials, and how are they monitored?",
      "What is the realistic door-to-door lead time by lane, and how much shelf life typically remains on arrival for time-sensitive additives?",
      "How are SDS-classified or dangerous goods handled and documented, and how is lot/batch traceability maintained across carrier handoffs?"
    ],
    "manufacturingImpact": "Freight directly affects landed cost, total lead time, and the arriving condition of materials, so it belongs in any realistic quote and schedule. A long or poorly controlled transit can quietly consume additive shelf life or degrade sensitive stock before it ever reaches receiving. For RFQ, capture mode, lane lead time, transit protection, and dangerous-goods handling, and treat seasonal and customs variability as schedule risk."
  },
  {
    "id": "receiving-inspection",
    "name": "Receiving & Incoming Inspection",
    "stageType": "inbound",
    "whatIsSupplied": "The gate where incoming materials are checked against the order and released, rejected, or quarantined. Commonly includes verifying identity and quantity, checking packaging and labels, reviewing supplier documentation, and sampling for incoming tests. Test scope and acceptance criteria are program-specific and any actual testing should use the official method and an accredited or qualified lab.",
    "documentsThatMatter": [
      "certificate of analysis",
      "certificate of conformity",
      "inspection report"
    ],
    "risks": [
      "Accepting off-spec or mislabeled material because documents were not reconciled against the physical lot",
      "Taking CoA or CoC at face value without independent verification where the application warrants it, or releasing near-expiry additives for want of a shelf-life check",
      "Missing or weak quarantine of nonconforming material, allowing it to reach production"
    ],
    "questionsToAsk": [
      "What incoming checks are commonly performed (identity, quantity, packaging, documentation) and what is sampled for test, recognizing actual testing requires the official method and a qualified lab?",
      "How are CoA and CoC reconciled to the physical lot, and when is independent verification triggered?",
      "How are nonconforming or quarantined lots controlled, and how are shelf-life and traceability recorded at receipt?"
    ],
    "manufacturingImpact": "Incoming inspection is the cheapest place to catch a defect, since the cost of a bad raw material rises sharply once it enters mixing and processing. Robust document reconciliation, sampling, and quarantine prevent off-spec stock from propagating. For quoting and capability discussions, describe inspection scope and quarantine discipline rather than guaranteeing specific test results, which depend on accredited testing."
  },
  {
    "id": "storage",
    "name": "Raw Material Storage & Inventory",
    "stageType": "internal",
    "whatIsSupplied": "Controlled storage of released raw materials, commonly with environmental control (temperature, humidity, light protection) for sensitive items, segregation to prevent cross-contamination, and inventory rotation. Good practice typically uses first-expiry-first-out for shelf-life-limited materials. Specific storage conditions are material-dependent and follow each material's TDS and shelf-life guidance.",
    "documentsThatMatter": [
      "shelf-life info",
      "lot/batch traceability",
      "SDS"
    ],
    "risks": [
      "Shelf-life expiry of curatives, accelerators, or treated reinforcements held too long or rotated poorly",
      "Moisture pickup or contamination of hygroscopic fillers and reactive additives in uncontrolled storage, or cross-contamination from inadequate segregation of active materials",
      "Inventory and traceability errors that break the link between a stored lot and its documentation"
    ],
    "questionsToAsk": [
      "What storage conditions are typically maintained for temperature-, moisture-, and light-sensitive materials, per each material's TDS and shelf-life info?",
      "How is stock rotated (for example first-expiry-first-out) and how is expiry monitored?",
      "How are incompatible or active materials segregated, and how is lot/batch traceability preserved through storage and issue?"
    ],
    "manufacturingImpact": "Storage protects the value and quality already paid for: poor conditions or rotation can scrap expensive curatives or quietly degrade sensitive stock, turning good incoming material into a batch failure later. Carrying cost and shelf-life-driven write-offs also affect overall cost. For RFQ and capability discussion, describe environmental control, segregation, and rotation discipline as quality safeguards."
  },
  {
    "id": "batch-prep",
    "name": "Batch Preparation & Weighing",
    "stageType": "internal",
    "whatIsSupplied": "Assembling each batch by issuing, weighing, and staging the raw materials called for by the controlled formulation, with checks on material identity, lot, and quantity before they go to mixing. Exact formulations, loadings, and ingredient quantities are confidential and not specified here. Accuracy and traceability of what enters each batch are the focus.",
    "documentsThatMatter": [
      "lot/batch traceability",
      "certificate of analysis",
      "shelf-life info"
    ],
    "risks": [
      "Weighing or dispensing errors that move a batch out of spec, with low-level additives being especially sensitive",
      "Wrong-material or wrong-lot selection, including use of an expired or quarantined lot, or loss of lot linkage if consumed lots are not recorded against the produced batch",
      "Cross-contamination from shared scoops, scales, or staging areas"
    ],
    "questionsToAsk": [
      "How is material identity, correct lot, and shelf-life status verified before a material is weighed into a batch?",
      "How are consumed lots recorded against each produced batch to maintain end-to-end traceability?",
      "What controls prevent weighing errors and cross-contamination at staging (without disclosing any formulation detail)?"
    ],
    "manufacturingImpact": "Batch preparation is where formulation intent becomes a physical batch, so accuracy and lot discipline here directly determine consistency and the integrity of the traceability record. An error with a small but potent additive can be as damaging as a major one. For quoting, this stage supports claims about batch-to-batch consistency and traceability; it does not require disclosing recipes, which stay confidential."
  },
  {
    "id": "production",
    "name": "Production / Compounding & Forming",
    "stageType": "internal",
    "whatIsSupplied": "Converting prepared batches into shaped or formed rubber, commonly through mixing/compounding to disperse ingredients, followed by a forming and vulcanization route appropriate to the part (for example molding, extrusion, or calendering) and any bonding to inserts or reinforcements. No machine setup values, cure temperatures, or cure times are provided; these are confidential process parameters established through qualification.",
    "documentsThatMatter": [
      "drawing/spec revision",
      "lot/batch traceability",
      "inspection report"
    ],
    "risks": [
      "Process variation across a run causing inconsistent dispersion, undercure, or dimensional drift, detected through monitoring rather than assumed",
      "Building to a superseded drawing or spec revision, producing technically conforming but wrong-revision parts",
      "Bond or interface defects with inserts and reinforcements that only surface under stress or aging, or changeover errors carrying the wrong compound or contamination into a run"
    ],
    "questionsToAsk": [
      "Which forming route (for example molding, extrusion, or calendering) is typically used for parts of this type, recognizing actual process parameters are confidential and qualification-based?",
      "How is the correct drawing/spec revision confirmed at the start of a run, and how is revision control enforced?",
      "How is in-process consistency monitored across a run, and how is the run linked to its batch and lot records?"
    ],
    "manufacturingImpact": "Production is the core conversion step and a major cost and quality driver, since process consistency determines whether good material becomes good parts. Revision control and in-process monitoring guard against systematic defects. For RFQ, describe capability at the route level (the kinds of parts and processes the factory runs) without exposing process parameters, which are established through qualification and kept confidential."
  },
  {
    "id": "qa",
    "name": "Quality Assurance & Testing",
    "stageType": "internal",
    "whatIsSupplied": "Verifying that finished or in-process parts meet requirements, commonly through dimensional checks, visual inspection, and property or performance tests, with documented disposition (accept, rework, or reject) and records linking results to the part, batch, and lots. Actual property and performance testing should follow the official standard and use an accredited or qualified lab; this stage describes the QA function, not test verdicts.",
    "documentsThatMatter": [
      "inspection report",
      "certificate of analysis",
      "lot/batch traceability"
    ],
    "risks": [
      "Sampling plans that miss intermittent or location-specific defects",
      "Relying on internal screening checks where the application actually requires accredited testing to the official method",
      "Records that do not fully tie results back to batch and consumed lots, or drift in uncalibrated measurement and test equipment"
    ],
    "questionsToAsk": [
      "What inspection and test methods are commonly applied to parts of this type, and which results require the official standard and an accredited or qualified lab rather than an internal screen?",
      "What is the sampling approach, and how is disposition of nonconforming parts handled?",
      "How do QA records link each result to the part, batch, and consumed lots, and how is test equipment calibration controlled?"
    ],
    "manufacturingImpact": "QA is the last internal safeguard before parts ship and is central to credible quoting, because customers buy documented conformance, not assertions. Escaped defects are far costlier in the field than at QA. For RFQ, describe inspection scope, sampling, disposition, and traceability honestly, distinguish internal screening from accredited testing, and avoid implying certifications or guaranteed results the factory cannot independently substantiate."
  },
  {
    "id": "outbound-shipping",
    "name": "Outbound Shipping & Dispatch",
    "stageType": "outbound",
    "whatIsSupplied": "Preparing released parts for the customer, commonly including protective packaging, labeling, lot and quantity verification, assembling the shipping documentation pack, and dispatch via the chosen carrier. Documentation and packaging requirements are customer- and destination-specific and require verification before commitment.",
    "documentsThatMatter": [
      "certificate of conformity",
      "lot/batch traceability",
      "inspection report"
    ],
    "risks": [
      "Mislabeling or mis-shipment breaking the link between delivered parts and their quality records",
      "Inadequate protection in transit (rubber can be affected by ozone, sunlight, heat, or compression over time) degrading parts before use",
      "Incomplete or mismatched documentation pack versus customer or destination requirements, including export or customs gaps causing holds"
    ],
    "questionsToAsk": [
      "What documentation pack typically accompanies a shipment (for example certificate of conformity and lot records), and how is it matched to the customer's stated requirement, which requires verification before commitment?",
      "How are parts protected in transit against ozone, heat, sunlight, and compression for the expected shipping duration?",
      "How is lot/batch traceability carried onto the shipment label and paperwork, and how are export or customs documents handled where applicable?"
    ],
    "manufacturingImpact": "Outbound shipping completes the traceability chain to the customer and affects delivered cost, on-time performance, and the condition parts arrive in. A labeling error or weak documentation pack can undermine an otherwise sound product and complicate any later investigation. For quoting, capture packaging, documentation, and shipping terms, and verify customer and destination requirements rather than assuming them."
  }
];
