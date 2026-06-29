import type { SupplierControl } from "@/types/qms";
export const supplierControl: SupplierControl[] = [
  {
    "id": "base-polymer",
    "category": "Base polymer supplier",
    "suppliedItem": "Base polymers and elastomer feedstock, commonly natural rubber bales (ribbed smoked sheet or technically specified grades) and synthetic elastomers such as SBR, NBR, EPDM, neoprene/CR, and butyl, supplied as bales, crumb, or pellets.",
    "requiredDocuments": [
      "Certificate of Analysis (CoA, demo) reporting lot Mooney viscosity, volatile/moisture content, and grade identity",
      "Certificate of Conformance (CoC, demo) declaring the lot meets the agreed elastomer grade specification",
      "Technical Data Sheet (TDS, demo) for the polymer grade",
      "Safety Data Sheet (SDS, demo)"
    ],
    "qualityRisks": [
      "Lot-to-lot Mooney viscosity or molecular-weight drift that shifts processing behavior and state of cure downstream",
      "Grade substitution, contamination, or excess moisture in bales that can cause porosity, scorch variation, or inconsistent mixing"
    ],
    "receivingChecks": [
      "Verify lot/grade identity and quantity on the CoA against the purchase order and label, and confirm bale integrity (no contamination, damaged wrap, or water ingress)",
      "Spot-check incoming Mooney viscosity on a representative sample using the official method and a qualified lab (modeled receiving test)",
      "Quarantine the lot pending document review and any required incoming test before release to mixing (modeled hold)"
    ],
    "approvalConcept": "approved-demo",
    "performanceMetricConcept": "On-spec CoA lots and Mooney-within-range rate (demo metric)",
    "relatedClause": "clause-8",
    "relatedProcess": "Mixing and masterbatch preparation"
  },
  {
    "id": "filler",
    "category": "Filler supplier",
    "suppliedItem": "Reinforcing and extending fillers, commonly carbon black grades and precipitated or fumed silica, plus mineral fillers such as clay, calcium carbonate, and talc, supplied in bags, bulk bags, or bulk delivery.",
    "requiredDocuments": [
      "Certificate of Analysis (CoA, demo) reporting properties such as surface area/iodine number, structure (DBP/oil absorption), and moisture",
      "Certificate of Conformance (CoC, demo) to the agreed filler grade",
      "Technical Data Sheet (TDS, demo)",
      "Safety Data Sheet (SDS, demo), with particular attention to dust handling"
    ],
    "qualityRisks": [
      "Variation in surface area, structure, or grit/sieve residue that shifts reinforcement, dispersion, and final hardness/abrasion behavior",
      "Moisture pickup or cross-contamination between grades causing porosity, dispersion defects, or carbon-black/silica mix-ups"
    ],
    "receivingChecks": [
      "Confirm filler grade, lot, and bag/bulk-bag count against the CoA and purchase order, and inspect packaging for damage or moisture",
      "Sieve-residue or sieve-grit spot check and moisture check on a representative sample using the official method (modeled incoming test)",
      "Segregate by grade and verify silo/bin labeling before transfer to weigh-up to prevent commingling (modeled control)"
    ],
    "approvalConcept": "approved-demo",
    "performanceMetricConcept": "Filler dispersion-related defect rate and CoA conformance (demo metric)",
    "relatedClause": "clause-8",
    "relatedProcess": "Weighing, dispensing, and mixing"
  },
  {
    "id": "oil-plasticizer",
    "category": "Oil / plasticizer supplier",
    "suppliedItem": "Process and extender oils and plasticizers, commonly paraffinic, naphthenic, and aromatic/TDAE process oils plus ester plasticizers, supplied in drums, totes/IBCs, or bulk tanker.",
    "requiredDocuments": [
      "Certificate of Analysis (CoA, demo) reporting properties such as viscosity, specific gravity, and flash point",
      "Certificate of Conformance (CoC, demo) to the agreed oil/plasticizer grade",
      "Technical Data Sheet (TDS, demo)",
      "Safety Data Sheet (SDS, demo)"
    ],
    "qualityRisks": [
      "Wrong oil type or viscosity/aromaticity drift that alters compound softening, processability, and aging behavior",
      "Water contamination or cross-contamination between grades in shared totes or tanker lines causing inconsistent mixing and porosity"
    ],
    "receivingChecks": [
      "Match grade, lot, and volume on the CoA to the purchase order, and confirm seal/tamper-evidence and clean transfer connections",
      "Spot-check specific gravity or viscosity, plus a visual clarity/water check, on an incoming sample (modeled receiving test)",
      "Hold incoming totes/tanker in a labeled receiving location pending document and test review before transfer to storage (modeled hold)"
    ],
    "approvalConcept": "approved-demo",
    "performanceMetricConcept": "Grade/viscosity conformance and contamination-free receipt rate (demo metric)",
    "relatedClause": "clause-8",
    "relatedProcess": "Weighing, dispensing, and mixing"
  },
  {
    "id": "additive",
    "category": "Additive supplier",
    "suppliedItem": "Curatives and chemical additives, commonly vulcanizing agents (such as sulfur), accelerators, activators (such as zinc oxide and stearic acid), antidegradants/antioxidants, and processing aids, supplied as powders, granules, pre-weighed bags, or polymer-bound predispersions.",
    "requiredDocuments": [
      "Certificate of Analysis (CoA, demo) reporting identity, assay/purity, and where relevant melting point or particle size",
      "Certificate of Conformance (CoC, demo) to the agreed additive grade",
      "Technical Data Sheet (TDS, demo)",
      "Safety Data Sheet (SDS, demo)"
    ],
    "qualityRisks": [
      "Incorrect identity, assay, or accelerator activity that shifts scorch safety and state of cure, risking under-cure or over-cure",
      "Caking, moisture, or cross-contamination of small-dose chemicals that causes weigh errors and inconsistent cure"
    ],
    "receivingChecks": [
      "Verify chemical name, grade, lot, and quantity on the CoA against the purchase order and label, and inspect for caking, moisture, or damaged packaging",
      "Confirm identity by label and CoA cross-check, with melting-point or appearance spot check on a representative sample where applicable (modeled incoming test)",
      "Route to controlled, labeled, FIFO chemical storage and quarantine until document review is complete (modeled hold)"
    ],
    "approvalConcept": "conditional-demo",
    "performanceMetricConcept": "Cure-window consistency and additive CoA conformance (demo metric)",
    "relatedClause": "clause-8",
    "relatedProcess": "Curatives weighing and mixing"
  },
  {
    "id": "fabric-reinforcement",
    "category": "Fabric / reinforcement supplier",
    "suppliedItem": "Fabric and reinforcement materials, commonly woven and dipped textile fabrics (nylon, polyester, aramid, cotton), steel or brass-coated wire/cord, and adhesion-treated plies used in reinforced sheet, belting, and hose.",
    "requiredDocuments": [
      "Certificate of Analysis (CoA, demo) reporting properties such as construction/count, breaking strength, and dip/adhesion treatment",
      "Certificate of Conformance (CoC, demo) to the agreed fabric or cord specification",
      "Technical Data Sheet (TDS, demo)",
      "Test report (demo) for adhesion or peel where adhesion-treated"
    ],
    "qualityRisks": [
      "Inadequate adhesion treatment, width/weave defects, or contamination causing ply separation, delamination, or weak rubber-to-fabric bond",
      "Strength or count variation and moisture pickup that reduce reinforced-product integrity and dimensional consistency"
    ],
    "receivingChecks": [
      "Confirm fabric/cord type, construction, roll width, and lot on the CoA against the purchase order, and inspect rolls for damage, contamination, or moisture",
      "Visual weave/edge and width check plus an adhesion or peel spot check on a sample where applicable (modeled incoming test)",
      "Store rolls in controlled humidity with labeling and FIFO, holding until document review before release to calendering (modeled control)"
    ],
    "approvalConcept": "approved-demo",
    "performanceMetricConcept": "Adhesion conformance and reinforced-ply defect rate (demo metric)",
    "relatedClause": "clause-8",
    "relatedProcess": "Calendering and ply building"
  },
  {
    "id": "equipment",
    "category": "Equipment supplier",
    "suppliedItem": "Production equipment and capital machinery, commonly internal mixers, two-roll mills, calenders, extruders, curing presses, and autoclaves, plus associated spare and wear parts, supplied as new machines, rebuilds, or service.",
    "requiredDocuments": [
      "Certificate of Conformance (CoC, demo) and factory acceptance test (FAT) report against the agreed machine specification",
      "Operation, maintenance, and spare-parts documentation (demo)",
      "Declaration of conformity and safety/guarding documentation (demo)",
      "Material and pressure-vessel/code documentation where applicable (demo), to be confirmed with an accredited authority"
    ],
    "qualityRisks": [
      "Machine not meeting agreed capability, accuracy, or safety/interlock requirements, causing process variation or downtime at commissioning",
      "Incomplete documentation, untraceable spares, or unverified pressure-vessel/code status that delays safe qualified operation"
    ],
    "receivingChecks": [
      "Verify the delivered machine, model, and accessories against the purchase order and FAT report, and inspect for transit damage",
      "Witness or review site acceptance test (SAT) and confirm safety guarding, interlocks, and documentation are present before sign-off (modeled acceptance)",
      "Confirm pressure-vessel or jurisdictional inspection status with a qualified authority before placing into service (modeled control, verify independently)"
    ],
    "approvalConcept": "conditional-demo",
    "performanceMetricConcept": "On-time, on-spec FAT/SAT pass rate and post-install uptime (demo metric)",
    "relatedClause": "clause-8",
    "relatedProcess": "Equipment commissioning and maintenance"
  },
  {
    "id": "testing-lab",
    "category": "Testing lab supplier",
    "suppliedItem": "External testing and calibration laboratory services, commonly third-party physical/mechanical rubber testing, chemical analysis, and the calibration of in-house instruments such as durometers, tensile testers, cure meters, and balances.",
    "requiredDocuments": [
      "Calibration certificate (demo) with measurement traceability and stated uncertainty for each calibrated instrument",
      "Test report (demo) for outsourced tests referencing the method used",
      "Laboratory accreditation/scope evidence (demo), to be confirmed with the accreditation body",
      "Statement of method or standard referenced (demo)"
    ],
    "qualityRisks": [
      "Use of an out-of-scope or non-accredited method, or unclear measurement traceability, undermining the validity of acceptance decisions",
      "Expired calibration or large measurement uncertainty that lets out-of-spec product pass or in-spec product be rejected"
    ],
    "receivingChecks": [
      "Verify the calibration certificate covers the correct instrument, range, and date, with traceability and uncertainty stated, before returning the instrument to use",
      "Confirm the test report cites the agreed method and that the laboratory scope/accreditation is current (modeled verification, confirm with the accreditation body)",
      "Update the instrument calibration register and apply a calibration status label before release (modeled control)"
    ],
    "approvalConcept": "approved-demo",
    "performanceMetricConcept": "On-time calibration return and accreditation-scope validity (demo metric)",
    "relatedClause": "clause-8",
    "relatedProcess": "Calibration control and quality testing"
  },
  {
    "id": "packaging",
    "category": "Packaging supplier",
    "suppliedItem": "Packaging materials, commonly cores and tubes, stretch and shrink film, separator/interleaf and anti-tack materials, cartons, pallets, strapping, and labels used to protect and identify finished rubber goods.",
    "requiredDocuments": [
      "Certificate of Conformance (CoC, demo) to the agreed packaging specification and dimensions",
      "Technical Data Sheet (TDS, demo) for film, anti-tack, or separator materials",
      "Safety Data Sheet (SDS, demo) where chemically relevant (such as anti-tack agents)",
      "Compatibility or migration statement (demo) where the material contacts the rubber surface"
    ],
    "qualityRisks": [
      "Anti-tack or separator material that contaminates, stains, or interferes with the rubber surface or later adhesion/bonding",
      "Weak or wrong-spec film, cartons, or pallets causing transit damage, blocking/tack, or mislabeling and traceability loss"
    ],
    "receivingChecks": [
      "Verify packaging type, dimensions, and lot on the CoC against the purchase order, and inspect for damage, soiling, or moisture",
      "Spot-check film gauge/strength or separator suitability and confirm label print quality and accuracy (modeled incoming check)",
      "Confirm surface-contact materials are the approved compatible grade before release to packing (modeled control)"
    ],
    "approvalConcept": "approved-demo",
    "performanceMetricConcept": "Packaging conformance and transit-damage/contamination rate (demo metric)",
    "relatedClause": "clause-8",
    "relatedProcess": "Packing and preservation"
  },
  {
    "id": "freight-logistics",
    "category": "Freight / logistics provider",
    "suppliedItem": "Freight and logistics services, commonly inbound raw-material transport and outbound finished-goods shipping by road, sea, or air, including carriers, forwarders, and warehousing/handling providers.",
    "requiredDocuments": [
      "Certificate of Conformance (CoC, demo) or signed service-level agreement defining handling, temperature, and on-time terms",
      "Proof of delivery and bill of lading/transport record (demo)",
      "Insurance and liability documentation (demo)",
      "Temperature or condition record (demo) where controlled transport is specified"
    ],
    "qualityRisks": [
      "Mishandling, crushing, or contamination in transit that damages rubber goods or compromises packaging and traceability",
      "Temperature/UV/ozone exposure or delays in transit that degrade sensitive elastomers or disrupt FIFO and shelf life"
    ],
    "receivingChecks": [
      "Inspect delivered goods and packaging for transit damage, contamination, or moisture, and reconcile quantity against the bill of lading and proof of delivery",
      "Review any required condition/temperature record and note exceptions on receipt (modeled receiving check)",
      "Log nonconforming or damaged shipments and quarantine affected goods pending disposition (modeled hold)"
    ],
    "approvalConcept": "conditional-demo",
    "performanceMetricConcept": "On-time delivery and damage-free receipt rate (demo metric)",
    "relatedClause": "clause-8",
    "relatedProcess": "Receiving, dispatch, and preservation"
  }
];
