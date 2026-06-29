import type { AuditItem } from "@/types/factoryLife";
export const factoryAuditChecklist: AuditItem[] = [
  {
    "id": "rm-material-family-identified",
    "category": "raw-material",
    "question": "Is the base polymer family for the batch identified and confirmed against the order before staging?",
    "relatedStation": "raw-material-room",
    "helpsAnswer": "Answers the RFQ material selection (QuoteSelection.materialId) and the rfqIntelGroups ms-polymer-required question, since the staged polymer must match the polymer the customer requested or that service conditions imply."
  },
  {
    "id": "rm-grade-spec-matched",
    "category": "raw-material",
    "question": "Does each incoming ingredient category carry a grade designation that matches any named material specification on the RFQ?",
    "relatedStation": "raw-material-room",
    "helpsAnswer": "Supports the ms-named-spec field (ASTM line callout or customer compound number), confirming the raw stock conceptually aligns with the specification the quote is written against."
  },
  {
    "id": "rm-lot-traceability-captured",
    "category": "raw-material",
    "question": "Is incoming lot identification recorded so finished product can be linked back to the compound batch?",
    "relatedStation": "raw-material-room",
    "helpsAnswer": "Answers the ms-lot-traceability and qd-batch-traceability RFQ flags, which ask whether raw-material lot traceability and finished-goods traceability documentation are required."
  },
  {
    "id": "rm-storage-condition-controlled",
    "category": "raw-material",
    "question": "Are temperature-sensitive and moisture-sensitive categories stored in controlled conditions, with the reactive cure package held apart from heat?",
    "relatedStation": "raw-material-room",
    "helpsAnswer": "Reflects the raw-material-room factory data (clean, dry, temperature-controlled storage; cure package kept inert) that underpins whether the line can deliver the conforming material the RFQ assumes."
  },
  {
    "id": "rm-contamination-segregation",
    "category": "raw-material",
    "question": "Are ingredient categories segregated so cross-contamination between fillers, oils, and the cure package is prevented at staging?",
    "relatedStation": "raw-material-room",
    "helpsAnswer": "Guards against the raw-material-room common defect of cross-contamination, protecting the property and conformity claims the RFQ certification and test-report fields depend on."
  },
  {
    "id": "wg-batch-ticket-defined",
    "category": "weighing",
    "question": "Is a batch ticket established listing every ingredient category in its target relative proportion before portioning starts?",
    "relatedStation": "weighing-station",
    "helpsAnswer": "Connects the weighing-station recipe-ratio data to the RFQ hardness and property expectations (sheet-hardness selection, pm-sheet-hardness), since the polymer-to-filler-to-oil ratio governs the delivered hardness."
  },
  {
    "id": "wg-identities-verified",
    "category": "weighing",
    "question": "Is each ingredient category identity verified against the batch ticket as it is portioned onto the weigh tray?",
    "relatedStation": "weighing-station",
    "helpsAnswer": "Prevents the weighing-station missed-or-doubled-ingredient defect, protecting the consistency that lets one quoted batch behave like the next across a recurring order (sc-order-frequency)."
  },
  {
    "id": "wg-critical-ingredient-confirmed",
    "category": "weighing",
    "question": "Are critical ingredient categories, especially the separately portioned cure package, confirmed present and kept distinct from the masterbatch portion?",
    "relatedStation": "weighing-station",
    "helpsAnswer": "Ties the weighing-station data (cure package kept as a separate portion) to the curing readiness the RFQ relies on, since a missing or misportioned cure package undermines the cured-property claims."
  },
  {
    "id": "wg-scale-calibration-current",
    "category": "weighing",
    "question": "Is the weighing equipment calibration current so portioning is not subject to scale drift?",
    "relatedStation": "weighing-station",
    "helpsAnswer": "Addresses the weighing-station scale-drift defect and supports any qd-test-reports property data the customer expects, since off-ratio batches shift measured hardness and tensile results."
  },
  {
    "id": "mx-route-selected",
    "category": "mixing",
    "question": "Is the intended compounding route selected so the masterbatch is mixed before the cure package is worked in downstream?",
    "relatedStation": "internal-mixer",
    "helpsAnswer": "Maps the internal-mixer and two-roll-mill route data to the compounding capability the RFQ assumes, confirming the factory can produce the compound the quoted material requires."
  },
  {
    "id": "mx-dispersion-target-understood",
    "category": "mixing",
    "question": "Is the dispersion objective understood so filler and additives are distributed uniformly into the polymer rather than merely blended?",
    "relatedStation": "internal-mixer",
    "helpsAnswer": "Reflects the internal-mixer data that dispersion builds strength and color uniformity, underpinning the qd-test-reports tensile and the pm-surface-finish appearance expectations in the RFQ."
  },
  {
    "id": "mx-scorch-risk-recognized",
    "category": "mixing",
    "question": "Is the reason for holding the cure package out of the hot mixer recognized to avoid premature reaction during high-shear mixing?",
    "relatedStation": "internal-mixer",
    "helpsAnswer": "Connects the internal-mixer scorch concept to curing readiness, since a scorched compound cannot reach the cured properties the RFQ material selection promises."
  },
  {
    "id": "mx-contamination-cleandown",
    "category": "mixing",
    "question": "Is a clean-down between differing compounds accounted for so the mixed batch is not contaminated by a previous material?",
    "relatedStation": "internal-mixer",
    "helpsAnswer": "Protects the conformity behind the qd-coc-required certificate of conformity, since carryover contamination would conflict with the specification the quote is written against."
  },
  {
    "id": "mx-curative-incorporation-stage",
    "category": "mixing",
    "question": "Is the cure system worked in on the open mill at a cooler, safer stage rather than in the hot mixer?",
    "relatedStation": "two-roll-mill",
    "helpsAnswer": "Ties the two-roll-mill data (curative incorporated on the open, lower-temperature mill) to the curing-readiness assumptions behind the RFQ material and cure-concept selection."
  },
  {
    "id": "mc-thickness-target-set",
    "category": "milling-calendering",
    "question": "Is the target sheet thickness established for the forming step against the RFQ thickness requirement?",
    "relatedStation": "calender",
    "helpsAnswer": "Answers the sheet-thickness and pm-sheet-thickness-tolerance RFQ fields, since the calender sets the gauge that the quoted sheet must hold within a realistic tolerance for elastic material."
  },
  {
    "id": "mc-width-format-confirmed",
    "category": "milling-calendering",
    "question": "Is the intended sheet width and continuous-versus-cut format understood before forming begins?",
    "relatedStation": "calender",
    "helpsAnswer": "Connects to the sheet-width-length and sheet-format selections (continuous roll, cut sheets, or die-cut parts) that define the deliverable geometry on the RFQ."
  },
  {
    "id": "mc-surface-finish-feasible",
    "category": "milling-calendering",
    "question": "Is the requested surface finish achievable from the forming surface available at this station?",
    "relatedStation": "calender",
    "helpsAnswer": "Addresses the sheet-surface-finish and pm-sheet-surface-finish fields (smooth, fabric impression, or textured), since sheet finish commonly depends on the finishing surface used during forming."
  },
  {
    "id": "mc-feed-consistency-ready",
    "category": "milling-calendering",
    "question": "Is the milled feed strip homogeneous and air-free so the calender receives a consistent, fault-free input?",
    "relatedStation": "two-roll-mill",
    "helpsAnswer": "Reflects the two-roll-mill data that even homogenization hands the calender a consistent feed, protecting the thickness uniformity the RFQ thickness tolerance assumes."
  },
  {
    "id": "cu-cure-concept-matched",
    "category": "curing",
    "question": "Is the cure concept for the selected material understood so the uncured sheet can be converted into elastic finished rubber?",
    "relatedStation": "vulcanization",
    "helpsAnswer": "Ties the vulcanization cure-concept data to QuoteSelection.materialId, confirming the factory can crosslink the polymer family the RFQ specifies."
  },
  {
    "id": "cu-under-over-cure-awareness",
    "category": "curing",
    "question": "Is the risk of under-cure and over-cure recognized as a determinant of the finished mechanical properties?",
    "relatedStation": "vulcanization",
    "helpsAnswer": "Connects the vulcanization undercure and overcure defects to the qd-test-reports property data (hardness, tensile, elongation) the customer may require on acceptance."
  },
  {
    "id": "cu-form-compatibility",
    "category": "curing",
    "question": "Is the sheet form compatible with the curing approach so heat reaches the material evenly across width and thickness?",
    "relatedStation": "vulcanization",
    "helpsAnswer": "Addresses the vulcanization uneven-cure defect and supports the sheet-format and sheet-thickness RFQ selections, since form and gauge affect whether an even cure is achievable."
  },
  {
    "id": "cu-cooling-stabilization-planned",
    "category": "curing",
    "question": "Is controlled cooling planned so the cured sheet settles to stable dimensions before handling?",
    "relatedStation": "cooling",
    "helpsAnswer": "Reflects the cooling-station data that dimensions stabilize after cure, protecting the pm-final-dimensions and thickness-tolerance commitments in the RFQ."
  },
  {
    "id": "fn-trim-slit-capability",
    "category": "finishing",
    "question": "Is the trim and slit capability matched to the requested edge condition and finished width?",
    "relatedStation": "trimming-slitting",
    "helpsAnswer": "Answers the pm-edges-slitting and sheet-width RFQ fields (clean-cut, slit to width), since edge condition depends on the finishing method available at this station."
  },
  {
    "id": "fn-edge-quality-defined",
    "category": "finishing",
    "question": "Is the expected edge quality defined so ragged or angled edges are removed to a square, on-spec margin?",
    "relatedStation": "trimming-slitting",
    "helpsAnswer": "Connects the trimming-slitting ragged-edge defect to the pm-edges-slitting RFQ requirement and any boundary sample agreed for edge appearance."
  },
  {
    "id": "fn-packaging-requirements-known",
    "category": "finishing",
    "question": "Are winding, labeling, and protective packaging requirements known before the roll is finished?",
    "relatedStation": "finished-roll",
    "helpsAnswer": "Answers the sc-packaging RFQ field (carton, pallet, labeling, kitting), since the finished-roll station winds, labels, and protects product for shipment."
  },
  {
    "id": "qa-hardness-check-defined",
    "category": "quality",
    "question": "Is a hardness check defined against the target durometer range for the finished sheet?",
    "relatedStation": "inspection",
    "helpsAnswer": "Answers the sheet-hardness selection and pm-sheet-hardness field, verifying the inspection station confirms the durometer the RFQ requested."
  },
  {
    "id": "qa-dimensional-verification",
    "category": "quality",
    "question": "Is dimensional verification of thickness and width planned against the RFQ tolerances?",
    "relatedStation": "inspection",
    "helpsAnswer": "Connects the inspection thickness and dimension checks to pm-final-dimensions, pm-tolerances-critical, and the sheet thickness-tolerance fields the quote is written against."
  },
  {
    "id": "qa-test-reports-scoped",
    "category": "quality",
    "question": "Is the scope of required material test reports and measured properties agreed before production?",
    "relatedStation": "inspection",
    "helpsAnswer": "Answers the qd-test-reports field (which properties to report) and notes that actual testing should use a qualified lab and the official method, which the RFQ review flags."
  },
  {
    "id": "qa-coc-requirement-confirmed",
    "category": "quality",
    "question": "Is it confirmed whether a certificate of conformity is required with each shipment, tied to the controlling drawing revision?",
    "relatedStation": "inspection",
    "helpsAnswer": "Answers the qd-coc-required and qd-drawing-revision fields plus QuoteSelection.certificationNeeds, since the inspection gate produces the conforming determination a CoC relies on against the correct revision."
  },
  {
    "id": "sh-delivery-location-known",
    "category": "shipping",
    "question": "Is the delivery location and preferred shipping arrangement captured for the order?",
    "relatedStation": "",
    "helpsAnswer": "Answers the sc-delivery-location RFQ field (destination and Incoterms), which affects freight and timing in the quote."
  },
  {
    "id": "sh-need-by-date-firm",
    "category": "shipping",
    "question": "Is a target or required need-by date recorded, and is it firm?",
    "relatedStation": "",
    "helpsAnswer": "Answers the sc-target-lead-time field, since lead time depends on material availability and current capacity the quote must reflect."
  },
  {
    "id": "sh-shipping-packaging-agreed",
    "category": "shipping",
    "question": "Are shipping-stage packaging and labeling requirements agreed so finished rolls are protected in transit?",
    "relatedStation": "",
    "helpsAnswer": "Answers the sc-packaging RFQ field and builds on the finished-roll labeling data, since special packaging may add cost and lead time to the quote."
  },
  {
    "id": "rfq-drawing-available",
    "category": "rfq",
    "question": "Is a drawing, sketch, CAD file, or physical sample available for the requested part?",
    "relatedStation": "",
    "helpsAnswer": "Answers QuoteSelection.drawingAvailable and the pm-drawing-sample field, since a controlled drawing or sample greatly improves quote accuracy."
  },
  {
    "id": "rfq-quantity-volume-stated",
    "category": "rfq",
    "question": "Is the order quantity or estimated annual volume stated for the request?",
    "relatedStation": "",
    "helpsAnswer": "Answers QuoteSelection.quantity and the sc-annual-volume field, since volume tiers and recurring demand change how the quote is structured."
  },
  {
    "id": "rfq-application-environment-described",
    "category": "rfq",
    "question": "Is the application and service environment described well enough to confirm material fit?",
    "relatedStation": "",
    "helpsAnswer": "Answers QuoteSelection.application and the environment selections, which drive material suitability and the suggested route in the RFQ summary."
  },
  {
    "id": "rfq-missing-questions-flagged",
    "category": "rfq",
    "question": "Are outstanding missing inputs and open questions for the customer flagged for technical review?",
    "relatedStation": "",
    "helpsAnswer": "Answers the RFQSummary.missingInfo and questionsForCustomer fields, surfacing what a sales engineer must still ask before the quote is complete."
  }
];
