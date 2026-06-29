import type { TraceabilityStage } from "@/types/quality";

export const traceabilityStages: TraceabilityStage[] = [
  {
    "id": "raw-polymer-lot",
    "label": "Raw Polymer (Base Elastomer) Lot",
    "idFormat": "POLY-2026-0001 (illustrative sample only)",
    "whatItLinks": "Links an incoming receipt of a base elastomer (for example a generic natural rubber, SBR, EPDM, NBR, or silicone gum category) back to the supplier's own batch or bale identifier, the receiving date, quantity received, and any supplier-provided certificate of analysis. It is the first internal handle the factory typically assigns when raw material arrives at the dock, and downstream batch tickets commonly reference it. Supplier names, grades, and any certificate claims shown here are illustrative examples and requires verification before sourcing.",
    "whyItMatters": "The base polymer often drives the dominant cost and performance characteristics of a finished rubber part, so an RFQ estimate may swing materially depending on which elastomer category and grade is assumed. For quoting, this lot id lets an estimator tie a price assumption to a specific received material rather than a generic guess. For quality, if a property issue appears later, investigators can typically trace which polymer lot fed which compound. Real polymer properties and supplier certificates should always be confirmed against the official material spec and an accredited or qualified lab before they are relied upon."
  },
  {
    "id": "filler-lot",
    "label": "Filler / Additive Lot",
    "idFormat": "FILL-CB-2026-0042 (illustrative sample only)",
    "whatItLinks": "Links a received lot of a non-polymer ingredient (generic categories such as carbon black, mineral filler, plasticizer/process oil, curative package, antidegradant, or pigment) to its supplier batch reference, receiving record, and storage location. A finished compound commonly draws from several of these lots at once, so a single batch ticket may cite multiple filler lot ids. Vendor and grade references here are illustrative examples and requires verification before sourcing.",
    "whyItMatters": "Fillers and additives often shift hardness, reinforcement, color, processing behavior, and cost, so an RFQ that assumes a different filler family can produce a different price and a different property envelope. Keeping filler lots separately identified lets a quote reflect realistic material assumptions and lets quality narrow a problem to a specific ingredient lot if one is later suspected. This chain deliberately does not record recipe loadings (phr), and any additive performance claims should be verified using the official standard and an accredited or qualified lab before sourcing or quoting against them."
  },
  {
    "id": "batch-ticket",
    "label": "Compound Batch Ticket (Work Order)",
    "idFormat": "BT-2026-000123 (illustrative sample only)",
    "whatItLinks": "Links the instruction to make one mixing batch to the specific raw-polymer-lot and filler-lot ids it is meant to consume, the target compound or recipe code (by reference, not by disclosed formulation), the operator or shift, and the scheduled equipment. It is the bridging document that turns identified raw materials into a planned mixed compound and is typically the join point where material lots and a future batch id meet.",
    "whyItMatters": "The batch ticket is where material traceability becomes actionable: it records the intended bill of materials by lot, so an estimator preparing an RFQ can reason about which material assumptions a future production run would commonly rely on, and quality can later confirm that what was planned matches what was actually consumed. Because this platform is educational and for quote preparation, the ticket here references a recipe code only and intentionally omits machine setup parameters, mixing sequence detail, and exact loadings, which would require the factory's own controlled procedures and verification."
  },
  {
    "id": "mixed-compound-batch",
    "label": "Mixed Compound Batch",
    "idFormat": "MX-2026-000123 (illustrative sample only)",
    "whatItLinks": "Links the physical output of one mixing operation (the uncured compound, often handled as slabs, strips, or pellets) back to its batch-ticket and therefore transitively to the polymer and filler lots that fed it. It commonly carries a small set of release checks (for example a generic rheometer/cure-behavior check, hardness, or specific gravity) recorded against the batch, and it is the unit that later feeds sheet forming.",
    "whyItMatters": "This is the first point where many factories have a tested, identity-stamped intermediate that can be accepted or rejected before further processing, so it is a natural cost and risk checkpoint in a quote: scrap or rework at the mixed-batch stage typically costs less than at finished goods. For quoting, an estimator may use typical batch sizes and typical first-pass acceptance rates to model yield, while noting these are illustrative planning assumptions. Any release-test limits should be confirmed against the official standard and an accredited or qualified lab rather than treated as guaranteed."
  },
  {
    "id": "calendered-sheet-lot",
    "label": "Calendered / Formed Sheet Lot",
    "idFormat": "SH-2026-00789 (illustrative sample only)",
    "whatItLinks": "Links a lot of uncured formed sheet (commonly produced by calendering or a comparable sheet-forming step, and possibly fabric-reinforced or plied) to the mixed-compound-batch it was formed from, plus the nominal gauge/width target and the forming line by reference. One compound batch may yield several sheet lots, and one sheet lot generally maps to a single compound batch, which keeps the upstream link clean.",
    "whyItMatters": "Sheet geometry (thickness, width, ply or reinforcement) often determines how much usable product a downstream cure run can yield and is a frequent driver of trim scrap, so it materially affects an RFQ's yield and material-utilization assumptions. Maintaining a sheet lot id lets a quote model realistic conversion losses from compound to sheet to finished roll. This chain records nominal targets only and deliberately excludes calender operating and setup parameters, which are factory-controlled and require verification before any real production planning."
  },
  {
    "id": "cure-lot",
    "label": "Cure (Vulcanization) Lot",
    "idFormat": "CURE-2026-00456 (illustrative sample only)",
    "whatItLinks": "Links a vulcanization run to the calendered-sheet-lot(s) loaded into it and to the curing-equipment reference, so the irreversible cure step is tied back through the sheet to the compound and raw lots. Where a cure run processes more than one sheet lot together, the cure-lot id is the record that captures that grouping and preserves which inputs were cured as a set.",
    "whyItMatters": "Vulcanization is the step that fixes most final mechanical properties and is effectively irreversible, so it is typically the highest-stakes point for both quality and cost: a mis-cured lot generally cannot be reworked and becomes scrap. For RFQ purposes, cure cycle time and oven/press occupancy are common throughput and cost drivers, so an estimator may model them as capacity assumptions while clearly flagging them as illustrative. This platform intentionally omits actual cure temperatures, times, and pressures; real cure validation requires the factory's own qualified process development and an accredited or qualified lab for property confirmation."
  },
  {
    "id": "finished-roll-id",
    "label": "Finished Roll / Product Unit ID",
    "idFormat": "ROLL-2026-0034-A (illustrative sample only)",
    "whatItLinks": "Links a single saleable unit (commonly a finished rubber roll, slab, or converted piece) to the cure-lot it came from, its measured length/width/gauge, and its disposition. This is usually the lowest-level serialized handle that a customer or shipment will actually reference, and it is the unit that inspection records and shipment documents are written against.",
    "whyItMatters": "The finished roll id is the customer-facing anchor of the whole chain: from it, a single scan should typically let the factory walk back through cure, sheet, compound, and raw lots, which is exactly the recall and warranty capability quality teams and many customers expect. For quoting, finished-unit dimensions and counts are what an RFQ ultimately prices, so tying the estimate to a realistic finished-unit definition keeps the quote honest. Yields and unit definitions here are illustrative planning figures and require review against the factory's real production data before being committed in a binding quote."
  },
  {
    "id": "inspection-record",
    "label": "Final Inspection / Test Record",
    "idFormat": "QC-2026-00987 (illustrative sample only)",
    "whatItLinks": "Links the final quality results for a finished-roll-id (generic checks such as dimensional measurement, hardness, visual/surface inspection, and any applicable property tests by reference) to that unit, the inspector or station, the date, and the accept/reject disposition. It commonly cites the test methods used by reference to their official standard designations rather than reproducing them.",
    "whyItMatters": "This record is where conformance is asserted for a specific unit, so it is the natural place a customer's incoming inspection or a later complaint will be reconciled against. For RFQ preparation, the inspection plan implied here (which characteristics are checked, and how often) is itself a cost and lead-time driver that an estimate may need to reflect. Any standard designations or pass/fail limits shown are illustrative examples; actual testing should use the official standard and an accredited or qualified lab, and this platform is not a certification authority and issues no compliance guarantee."
  },
  {
    "id": "shipment-document",
    "label": "Shipment / Dispatch Document",
    "idFormat": "SHIP-2026-004567 (illustrative sample only)",
    "whatItLinks": "Links a customer shipment to the finished-roll-id(s) and their associated inspection-record(s) included in it, along with the customer/order reference, quantities, ship date, and carrier reference. As the closing link in the chain, it lets a delivered unit be traced all the way back to its raw-polymer-lot and filler-lot, and lets a known raw lot be traced forward to every customer it reached.",
    "whyItMatters": "The shipment document closes the loop between what was made and what a customer received, which is what makes targeted recall, warranty handling, and dispute resolution practical rather than wholesale. For quote preparation, packing, freight, and lot-grouping assumptions captured at dispatch often feed landed-cost and lead-time portions of an RFQ. Carrier, incoterm, and delivery commitments referenced here are illustrative and require verification before sourcing or quoting; this platform does not guarantee suppliers, carriers, or delivered specifications."
  }
];
