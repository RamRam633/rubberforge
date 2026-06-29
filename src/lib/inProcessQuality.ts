import type { InProcessCheckpoint } from "@/types/quality";
import type { StationId } from "@/types/simulation";

export const inProcessCheckpoints: InProcessCheckpoint[] = [
  {
    "stationId": "raw-material-room",
    "checks": [
      "Incoming material identity check: confirm each polymer, filler, and chemical drum or bag label matches the accompanying paperwork (material name, grade, lot/batch number, supplier name). Vendor names and grade designations on documentation are illustrative only and require verification before sourcing.",
      "Certificate of analysis (CoA) presence and review: confirm a supplier CoA or equivalent test report accompanies the lot; record stated property values without treating them as independently confirmed. Any property used for design typically requires verification using the official standard and an accredited or qualified lab for actual testing.",
      "Visual and condition check: inspect packaging for damage, moisture ingress, contamination, or signs of degradation; note color, form, and any caking that may indicate age or improper storage.",
      "Quarantine and storage segregation: hold newly received material in a labelled quarantine or staging area, segregated from released stock, until identity and documentation are confirmed.",
      "Shelf-life and FIFO check: record receipt date and supplier shelf-life or use-by information where stated; flag near-expiry or aged stock so first-expiry-first-out rotation can be applied.",
      "Lot traceability record creation: assign an internal receiving record linking supplier lot to internal lot, so material can be traced forward to any batch that consumes it."
    ],
    "releaseConcept": "Conceptual incoming material disposition: material commonly moves from quarantine to released (usable) status only after identity, documentation, and condition checks are satisfied. Items with missing paperwork, damage, or out-of-spec indications are typically held for review and may be rejected or returned. This is an internal acceptance decision, not a certification; stated supplier values still require independent verification before being relied upon."
  },
  {
    "stationId": "weighing-station",
    "checks": [
      "Released-material confirmation: verify that every ingredient drawn for weighing carries released (not quarantined) status and a valid internal lot reference before it is dispensed.",
      "Batch ticket / formulation sheet match: confirm the batch ticket identifies the correct product and that each ingredient line is dispensed in the listed sequence; specific quantities and formulations are controlled internally and are not part of this educational description.",
      "Ingredient identity at point of use: independently re-confirm material identity at the scale (label plus lot) to guard against mix-ups, since visually similar powders are a common source of error.",
      "Scale verification and tolerance check: confirm the scale has a current calibration or verification status and that each dispensed weight falls within the allowed tolerance band before acceptance; calibration commonly references the official method and a qualified lab or service.",
      "Lot traceability capture: record the specific lot consumed for each ingredient against the batch number so finished material can be traced back to every component.",
      "Staging and second check: stage the completed weigh-up as a kitted batch, ideally with a second-person or system verification of count and identity before release to mixing."
    ],
    "releaseConcept": "Conceptual batch-kit signoff: a weighed batch is typically released to mixing only after the batch ticket is complete, all weights are within tolerance, lots are recorded, and a verification (second-person or system) is signed off. An out-of-tolerance or unverifiable weigh-up is held or re-worked rather than passed forward."
  },
  {
    "stationId": "internal-mixer",
    "checks": [
      "Batch-kit and ticket reconciliation: confirm the kitted, verified weigh-up matches the batch ticket and that the correct order of addition is followed; exact mixer setup and operating parameters are controlled internally and are not described here.",
      "Process-indicator monitoring: monitor the available in-process indicators (such as power draw trend, temperature trend, and cycle progression) against the expected internal profile for the compound family to catch abnormal batches; specific setpoints are not disclosed.",
      "Batch traceability logging: record the batch number, consumed ingredient lots, equipment ID, and operator so the mix is fully traceable forward and backward.",
      "Dump-batch visual and condition check: at discharge, visually assess the compound for uniform appearance, color consistency, absence of unmixed agglomerates or contamination, and expected handling behavior.",
      "Sampling for downstream verification: retain a representative sample for in-process or lab checks (for example rheological behavior or hardness once cured); any cure or property testing typically uses the official standard and an accredited or qualified lab.",
      "Equipment cleanliness / changeover check: confirm the mixer was cleaned or purged appropriately between dissimilar compounds to prevent cross-contamination."
    ],
    "releaseConcept": "Conceptual mixed-batch disposition: a mixed batch is commonly placed on hold pending in-process or lab verification of key indicators, then released to milling if results conform. Batches that look abnormal at dump or that fail an in-process check are quarantined for review and may be reworked or scrapped, with the decision logged against the batch number."
  },
  {
    "stationId": "two-roll-mill",
    "checks": [
      "Incoming batch identity and status: confirm the compound arriving at the mill carries its batch number and a released-from-mixing status before processing; machine setup parameters are controlled internally and not described here.",
      "Compound condition and homogeneity check: visually assess the milled sheet for consistent color and surface, freedom from contamination, porosity, or unmixed material, and confirm it bands and handles as expected for that compound family.",
      "In-process consistency indicators: monitor available indicators of consistency such as sheet appearance and feel, and where used a quick in-process hardness or thickness sense-check, against internal expectations; precise targets are not disclosed.",
      "Cleanliness and cross-contamination control: verify mill rolls and surrounding area were cleaned at changeover so a prior compound or foreign material is not carried into the current batch.",
      "Traceability continuity: maintain the batch identity on the milled stock (tagging or routing) so traceability is preserved into calendering or downstream forming.",
      "Sample retention: where required, take a milled sample for downstream property verification, noting that any reported cured property requires testing to the official standard at an accredited or qualified lab."
    ],
    "releaseConcept": "Conceptual mill-stock signoff: milled stock typically advances only when its identity is confirmed, the sheet appears homogeneous and uncontaminated, and consistency indicators look normal for that compound. Suspect stock is set aside for review and may be remilled or rejected, with the disposition recorded against the batch."
  },
  {
    "stationId": "calender",
    "checks": [
      "Input stock identity and readiness: confirm the feed compound carries the correct batch identity and released status, and that any substrate or reinforcement (if used) matches the job order; substrate vendor and grade references are illustrative and require verification before sourcing.",
      "Sheet gauge / thickness monitoring: monitor sheet thickness against the order requirement using the available in-process gauging, watching for drift or out-of-tolerance trends across the width and length; specific gauge setpoints are controlled internally.",
      "Surface and defect check: inspect the calendered sheet for surface defects such as blisters, pinholes, embedded contamination, edge irregularities, or thickness streaks.",
      "Ply / lamination integrity check (where applicable): where multiple plies or a coated substrate are involved, verify lamination appearance and adhesion behavior look consistent with expectations.",
      "Width, length, and yield tracking: confirm produced width and run length meet the order and log usable yield versus scrap for traceability and downstream planning.",
      "Traceability tagging: tag the calendered roll or sheet with batch and run identity so it links to the consumed compound and forward to vulcanization."
    ],
    "releaseConcept": "Conceptual calendered-stock disposition: a calendered sheet or roll is commonly accepted for the next step when thickness is within tolerance, the surface is free of disqualifying defects, and any lamination looks sound. Out-of-gauge or defective sections are typically marked, trimmed out, held, or rejected, and the disposition is recorded against the run."
  },
  {
    "stationId": "vulcanization",
    "checks": [
      "Input identity and routing confirmation: verify the uncured stock entering cure carries the correct batch and job identity and is routed to the correct cure process for that compound; exact cure temperatures, times, and pressures are controlled internally and are not described here.",
      "Process-record monitoring: confirm the cure cycle record (such as a time and temperature trace or equivalent process log) was captured for the batch and that it followed the expected internal profile, without disclosing setpoints.",
      "State-of-cure verification concept: verify adequate state of cure using appropriate in-process or lab methods (for example a cure-indicator sample or post-cure property check); any reported cure state or property requires testing to the official standard at an accredited or qualified lab.",
      "Cured-part visual and defect check: inspect cured material for under-cure or over-cure indications, blisters, porosity, surface tack, backrind, or incomplete forming as applicable to the product.",
      "Dimensional / shrinkage check: confirm cured dimensions and any expected shrinkage behavior are consistent with the order requirement using appropriate measurement.",
      "Traceability and cycle linkage: link the specific cure cycle record and equipment to the batch number so cure conditions are traceable for every released unit."
    ],
    "releaseConcept": "Conceptual cure-release hold point: vulcanized material is commonly held pending confirmation that the cure record is complete and that state-of-cure and visual checks conform, then released for cooling and downstream steps. Material with an incomplete cure record or failing checks is quarantined for review and may be rejected, since under- or over-cure is generally not correctable. Any property claim still requires verification at an accredited or qualified lab."
  },
  {
    "stationId": "cooling",
    "checks": [
      "Identity and cure-release confirmation: confirm material entering cooling carries its batch identity and a cure-release status so only properly cured stock is staged here.",
      "Controlled cool-down handling: confirm the product is cooled in the intended controlled manner and supported or laid so it does not distort, with handling appropriate to the product geometry; specific cooling parameters are controlled internally.",
      "Dimensional stability / set check concept: where relevant, allow appropriate stabilization time and check that dimensions and flatness remain within the order requirement after cooling, since some compounds change slightly as they cool and relax.",
      "Surface and handling-damage check: inspect for cooling-related issues such as warpage, surface marking, sticking, or contamination picked up during handling or staging.",
      "Staging and segregation: stage cooled stock in a labelled area segregated from uncured or in-process material to prevent mix-ups.",
      "Traceability continuity: maintain batch identity through cooling so the link to cure records and upstream lots is preserved."
    ],
    "releaseConcept": "Conceptual cooled-stock signoff: cooled material typically advances to finishing once it has stabilized, holds dimensions and flatness within the order requirement, and shows no cooling or handling damage. Distorted or damaged stock is held for review and may be reworked where possible or rejected, with the outcome logged."
  },
  {
    "stationId": "trimming-slitting",
    "checks": [
      "Job-order and identity match: confirm the cooled stock matches the work order (product, batch, target width and length) before any cut is made, preserving batch identity on each resulting piece.",
      "Dimensional check of cut output: verify trimmed or slit width, length, and squareness against the order tolerance using appropriate measurement; specific tolerances come from the customer requirement and order, not from this description.",
      "Edge and cut-quality check: inspect cut edges for cleanliness, freedom from tears, ragged edges, or delamination at the cut, and confirm slit lanes are consistent.",
      "Defect-removal verification: confirm that sections previously marked defective upstream (for example out-of-gauge or surface defects) were trimmed out and not carried into finished pieces.",
      "Scrap and yield logging: record usable output versus trim scrap against the batch for traceability and yield tracking.",
      "Traceability transfer: ensure each finished piece, roll, or coil retains a batch or job tag linking it back through cure to the original compound lots."
    ],
    "releaseConcept": "Conceptual finishing signoff: trimmed or slit pieces are commonly passed to inspection when dimensions are within the order tolerance, edges are clean, and flagged defects have been removed. Out-of-tolerance or poorly cut pieces are held for rework (recut where feasible) or rejected, with the disposition recorded against the job."
  },
  {
    "stationId": "inspection",
    "checks": [
      "Order conformance review: verify the finished item against the customer order and internal specification for dimensions, appearance, and any agreed acceptance criteria; the acceptance criteria originate from the order, not from this educational description.",
      "Documentation and traceability completeness: confirm the batch record, cure record, and lot traceability chain are complete and consistent for the item, so each shipped unit can be traced to its components.",
      "Property-verification status check: confirm that any required property testing (for example hardness, tensile, or other agreed properties) was performed and recorded; such testing typically uses the official standard and an accredited or qualified lab, and reported values require that verification rather than being asserted here.",
      "Visual and dimensional final check: perform a final visual and dimensional check for defects (surface, edge, contamination, cure-related) using an appropriate sampling or full-inspection approach per the order.",
      "Nonconformance handling: confirm any nonconformances are documented, segregated, and dispositioned (rework, use-as-is with concession only if the customer agrees, or reject) rather than silently passed.",
      "Labelling and quantity check: verify part identification, quantity, and any required markings match the order before the item moves to packing."
    ],
    "releaseConcept": "Conceptual quality release / final hold point: a finished item is typically released for packing and shipment only when it conforms to the order, the traceability and required test records are complete, and no open nonconformance remains. Items failing any criterion are held under nonconformance control and dispositioned; release here is an internal acceptance decision against the customer order and is not a certification or compliance attestation."
  },
  {
    "stationId": "finished-roll",
    "checks": [
      "Released-status confirmation: confirm the roll or finished unit carries an inspection-released status and matching identification before it is packed and labelled.",
      "Final identification and labelling: verify the roll label or tag shows the correct product, batch or lot, quantity or length, and any customer-required markings, so the shipped unit remains traceable.",
      "Protective packaging check: confirm packaging, cores, interleaving, or wrapping appropriate to the product are applied so the roll is protected against handling, moisture, and contamination in transit.",
      "Quantity, length, and weight verification: verify final roll length, count, or weight against the order and packing documentation.",
      "Shipping documentation match: confirm the packing list and any accompanying records (such as a CoA the customer requested) match the physical roll and its batch; any property values reported on such records still require verification at an accredited or qualified lab and are not independently certified here.",
      "Storage and handling note: stage the packed roll in a labelled finished-goods area with appropriate orientation and conditions until dispatch."
    ],
    "releaseConcept": "Conceptual ship-release signoff: a finished roll is commonly released to dispatch only when it is inspection-released, correctly labelled and traceable, properly packaged, and matched to the order quantity and shipping documents. Any mismatch in identity, count, or packaging is resolved before shipment, and the dispatch decision is recorded; this is an internal shipping signoff, not a guarantee of supplier specs or a third-party certification."
  }
];

export const inProcessByStation: Partial<Record<StationId, InProcessCheckpoint>> =
  Object.fromEntries(inProcessCheckpoints.map((c) => [c.stationId, c]));
