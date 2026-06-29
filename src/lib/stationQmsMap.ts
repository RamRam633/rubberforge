import type { StationQms } from "@/types/qms";
import type { StationId } from "@/types/simulation";
export const stationQmsMap: StationQms[] = [
  {
    "stationId": "raw-material-room",
    "processOwner": "Material Handler",
    "controlledDocuments": [
      "Incoming Material Inspection Procedure (demo)",
      "Approved Supplier List (demo)",
      "Material Storage and FIFO Work Instruction (demo)"
    ],
    "recordsGenerated": [
      "Receiving Inspection Record (demo)",
      "Supplier Certificate of Analysis on file (demo)",
      "Lot Tag and Quarantine Log (demo)"
    ],
    "risksControls": [
      "Unidentified or mislabeled lot accepted: identity check against COA and lot tagging at the receiving gate",
      "Aged or moisture-sensitive curative used past condition: controlled storage with FIFO and condition review"
    ],
    "verificationPoints": [
      "Confirm material identity, grade reference, and packaging integrity against the COA and order",
      "Verify each accepted lot is tagged with a unique lot identifier before staging",
      "Check supplier appears on the approved supplier list and required documentation is present"
    ],
    "ncrTriggers": [
      "Incoming lot received without legible identification or matching certificate of analysis",
      "Material grade or supplier does not match the approved specification or supplier list"
    ],
    "auditQuestion": "How does the receiving station generally confirm that incoming material is the correct, properly documented grade and is staged traceably before acceptance?",
    "relatedClause": "clause-8",
    "traceabilityRecords": [
      "raw-polymer-lot id POLY-2026-0001 (illustrative sample only)",
      "filler-lot id FILL-CB-2026-0042 (illustrative sample only)"
    ]
  },
  {
    "stationId": "weighing-station",
    "processOwner": "Batch Technician",
    "controlledDocuments": [
      "Compound Batch Ticket Procedure (demo)",
      "Scale Calibration and Verification Work Instruction (demo)",
      "Weigh-Up and Identity Confirmation Work Instruction (demo)"
    ],
    "recordsGenerated": [
      "Weigh-Up Record against batch ticket (demo)",
      "Daily Scale Verification Log (demo)",
      "Material Lot Consumption Entry (demo)"
    ],
    "risksControls": [
      "Wrong lot or quantity staged to a batch: dual lot-id confirmation and weigh-against-ticket check",
      "Out-of-tolerance scale drift: scheduled calibration and daily verification before first weigh-up"
    ],
    "verificationPoints": [
      "Confirm staged lot identifiers match the batch ticket bill of materials before weighing",
      "Verify the scale shows a current calibration status and passes daily verification",
      "Check each weighed component is recorded against its lot id on the weigh-up record"
    ],
    "ncrTriggers": [
      "Weigh-up performed on a scale with expired or failed calibration verification",
      "Lot consumed does not match the lot called out on the compound batch ticket"
    ],
    "auditQuestion": "How does the weighing station generally ensure measuring equipment is verified and that the correct lots and quantities are confirmed against the batch ticket?",
    "relatedClause": "clause-7",
    "traceabilityRecords": [
      "batch-ticket id BT-2026-000123 (illustrative sample only)",
      "filler-lot id FILL-CB-2026-0042 (illustrative sample only)"
    ]
  },
  {
    "stationId": "internal-mixer",
    "processOwner": "Mixer Operator",
    "controlledDocuments": [
      "Internal (Banbury-type) Mixing Procedure (demo)",
      "Compound Release Test Plan (demo)",
      "Mixer Operating and Changeover Work Instruction (demo)"
    ],
    "recordsGenerated": [
      "Mixed Compound Batch Record (demo)",
      "Rheometer / Cure-Behavior Release Check Record (demo)",
      "Mooney Viscosity and Hardness Check Record (demo)"
    ],
    "risksControls": [
      "Cross-contamination from a prior compound: documented changeover and line-clearance before mixing",
      "Out-of-spec dispersion or scorch behavior released: rheometer and viscosity release check before acceptance"
    ],
    "verificationPoints": [
      "Confirm the mixed batch is stamped with a unique batch id linked to its batch ticket",
      "Verify generic release checks (cure behavior, viscosity, hardness, specific gravity) fall within demo acceptance limits",
      "Check changeover and line clearance were recorded before the batch was started"
    ],
    "ncrTriggers": [
      "Mixed batch fails a release check such as rheometer cure-behavior or Mooney viscosity against demo limits",
      "Batch produced without a completed changeover or line-clearance record"
    ],
    "auditQuestion": "How does the mixing station generally verify a compound batch meets release checks and is traceable before it moves to sheet forming?",
    "relatedClause": "clause-8",
    "traceabilityRecords": [
      "mixed-compound-batch id MX-2026-000123 (illustrative sample only)",
      "batch-ticket id BT-2026-000123 (illustrative sample only)"
    ]
  },
  {
    "stationId": "two-roll-mill",
    "processOwner": "Mill / Calender Operator",
    "controlledDocuments": [
      "Two-Roll Mill Operating Procedure (demo)",
      "Compound Warm-Up and Homogenization Work Instruction (demo)",
      "Mill Nip and Roll Inspection Work Instruction (demo)"
    ],
    "recordsGenerated": [
      "Mill Processing Record (demo)",
      "Strip / Slab Identity Tag (demo)",
      "Visual Homogeneity Check Record (demo)"
    ],
    "risksControls": [
      "Inconsistent or under-homogenized compound carried forward: visual blending check before transfer",
      "Material mix-up at the mill: batch-id tag carried from mixer through to milled strip"
    ],
    "verificationPoints": [
      "Confirm the milled strip or slab retains the upstream mixed-compound batch id",
      "Verify visual homogeneity and absence of contamination before transfer to forming",
      "Check the mill record references the operator and shift handling the batch"
    ],
    "ncrTriggers": [
      "Visual contamination, foreign matter, or porosity observed in the milled compound",
      "Milled material cannot be linked back to a valid mixed-compound batch id"
    ],
    "auditQuestion": "How does the mill station generally maintain compound identity and confirm visual conformity before the material is formed?",
    "relatedClause": "clause-8",
    "traceabilityRecords": [
      "mixed-compound-batch id MX-2026-000123 (illustrative sample only)",
      "calendered-sheet-lot id SH-2026-00789 (illustrative sample only)"
    ]
  },
  {
    "stationId": "calender",
    "processOwner": "Mill / Calender Operator",
    "controlledDocuments": [
      "Calendering / Sheet-Forming Procedure (demo)",
      "Gauge and Width Control Plan (demo)",
      "Calender Roll and Reinforcement Setup Work Instruction (demo)"
    ],
    "recordsGenerated": [
      "Calendered Sheet Lot Record (demo)",
      "Inline Thickness (Gauge) Measurement Log (demo)",
      "Sheet Lot Identity Tag (demo)"
    ],
    "risksControls": [
      "Gauge or width drift outside nominal target: inline thickness monitoring against demo tolerance",
      "Ply or fabric reinforcement misalignment: setup verification and first-piece check before run"
    ],
    "verificationPoints": [
      "Confirm formed sheet meets nominal gauge and width targets within demo tolerance",
      "Verify each sheet lot is tagged and linked to its source mixed-compound batch",
      "Check first-piece and periodic dimensional readings are recorded for the lot"
    ],
    "ncrTriggers": [
      "Sheet gauge, width, or ply alignment falls outside the nominal demo tolerance",
      "Sheet lot produced without a recorded link to a valid compound batch"
    ],
    "auditQuestion": "How does the calendering station generally control sheet geometry and preserve the link from sheet lot back to its compound batch?",
    "relatedClause": "clause-8",
    "traceabilityRecords": [
      "calendered-sheet-lot id SH-2026-00789 (illustrative sample only)",
      "mixed-compound-batch id MX-2026-000123 (illustrative sample only)"
    ]
  },
  {
    "stationId": "vulcanization",
    "processOwner": "Cure Operator",
    "controlledDocuments": [
      "Vulcanization (Cure) Process Procedure (demo)",
      "Autoclave / Press Loading and Cure-Cycle Control Plan (demo)",
      "Cure Validation and Monitoring Work Instruction (demo)"
    ],
    "recordsGenerated": [
      "Cure Lot Run Record (demo)",
      "Cure Cycle Monitoring Chart (demo)",
      "Loaded Sheet-Lot Grouping Record (demo)"
    ],
    "risksControls": [
      "Under-cure or over-cure fixing wrong final properties: cure-cycle monitoring and validated process reference",
      "Wrong sheet lots loaded together: load list verification against the cure lot record"
    ],
    "verificationPoints": [
      "Confirm the cure run is monitored against a validated, demo cure-cycle reference",
      "Verify which sheet lots were loaded as a set are captured on the cure lot record",
      "Check the irreversible cure step links each cure lot back to its sheet lots"
    ],
    "ncrTriggers": [
      "Cure cycle monitoring shows a deviation from the validated demo cure profile",
      "Cure lot record does not capture which sheet lots were processed as a set"
    ],
    "auditQuestion": "How does the vulcanization station generally monitor the cure cycle and preserve traceability across the irreversible cure step?",
    "relatedClause": "clause-8",
    "traceabilityRecords": [
      "cure-lot id CURE-2026-00456 (illustrative sample only)",
      "calendered-sheet-lot id SH-2026-00789 (illustrative sample only)"
    ]
  },
  {
    "stationId": "cooling",
    "processOwner": "Cure Operator",
    "controlledDocuments": [
      "Post-Cure Cooling and Stabilization Procedure (demo)",
      "Cooling Handling and Staging Work Instruction (demo)",
      "Dimensional Stabilization Hold Work Instruction (demo)"
    ],
    "recordsGenerated": [
      "Cooling and Stabilization Log (demo)",
      "Post-Cure Hold Record (demo)",
      "Cured Lot Staging Record (demo)"
    ],
    "risksControls": [
      "Distortion or shrinkage from uneven or rushed cooling: controlled cooling and stabilization hold",
      "Cured lot identity lost during staging: cure-lot tag carried through cooling and staging"
    ],
    "verificationPoints": [
      "Confirm cured material is cooled and held per the demo stabilization sequence before handling",
      "Verify the cure lot id remains attached through cooling and staging",
      "Check the cooling log records the lot and its hold status"
    ],
    "ncrTriggers": [
      "Visible distortion, warpage, or surface defect attributed to uncontrolled cooling",
      "Cured lot staged for next steps without a maintained cure lot identity"
    ],
    "auditQuestion": "How does the cooling station generally protect dimensional stability and retain cured-lot identity before downstream conversion?",
    "relatedClause": "clause-8",
    "traceabilityRecords": [
      "cure-lot id CURE-2026-00456 (illustrative sample only)",
      "finished-roll-id ROLL-2026-0034-A (illustrative sample only)"
    ]
  },
  {
    "stationId": "trimming-slitting",
    "processOwner": "Mill / Calender Operator",
    "controlledDocuments": [
      "Trimming and Slitting Procedure (demo)",
      "Finished Width and Edge-Quality Control Plan (demo)",
      "Blade Condition and Changeover Work Instruction (demo)"
    ],
    "recordsGenerated": [
      "Trim / Slit Conversion Record (demo)",
      "Finished Roll Dimensional Check Record (demo)",
      "Trim Scrap and Yield Log (demo)"
    ],
    "risksControls": [
      "Out-of-tolerance finished width or ragged edges: dimensional and edge check after slitting",
      "Mislabeled finished unit after conversion: roll id assigned and linked to the parent cure lot"
    ],
    "verificationPoints": [
      "Confirm finished width, length, and edge quality meet demo tolerance after conversion",
      "Verify each finished roll is serialized and linked to its cure lot",
      "Check trim scrap and yield are recorded against the lot"
    ],
    "ncrTriggers": [
      "Finished roll dimension or edge quality falls outside the demo specification",
      "Finished roll cannot be linked to a valid parent cure lot"
    ],
    "auditQuestion": "How does the trimming and slitting station generally verify finished dimensions and assign a traceable identity to each saleable unit?",
    "relatedClause": "clause-8",
    "traceabilityRecords": [
      "finished-roll-id ROLL-2026-0034-A (illustrative sample only)",
      "cure-lot id CURE-2026-00456 (illustrative sample only)"
    ]
  },
  {
    "stationId": "inspection",
    "processOwner": "QA Inspector",
    "controlledDocuments": [
      "Final Inspection and Test Procedure (demo)",
      "Inspection and Test Plan with sampling (demo)",
      "Nonconforming Product Control Procedure (demo)"
    ],
    "recordsGenerated": [
      "Final Inspection / Test Record (demo)",
      "Accept / Reject Disposition Record (demo)",
      "Nonconformance Report (NCR) entry (demo)"
    ],
    "risksControls": [
      "Nonconforming unit released to stock: defined accept/reject gate with NCR for failures",
      "Inconsistent inspection method applied: documented inspection and test plan with sampling"
    ],
    "verificationPoints": [
      "Confirm generic checks (dimensional, hardness, visual/surface, applicable property tests by reference) per the demo plan",
      "Verify accept/reject disposition is recorded against each finished roll id",
      "Check failures route to a nonconformance record rather than to stock"
    ],
    "ncrTriggers": [
      "Finished unit fails a planned check such as hardness, dimensional, or visual/surface against demo limits",
      "Unit dispositioned to stock without a completed final inspection record"
    ],
    "auditQuestion": "How does the inspection station generally assert conformance per a defined plan and control any nonconforming product before release?",
    "relatedClause": "clause-8",
    "traceabilityRecords": [
      "inspection-record id QC-2026-00987 (illustrative sample only)",
      "finished-roll-id ROLL-2026-0034-A (illustrative sample only)"
    ]
  },
  {
    "stationId": "finished-roll",
    "processOwner": "Production Supervisor",
    "controlledDocuments": [
      "Finished Goods Identification and Packaging Procedure (demo)",
      "Release and Shipment Authorization Work Instruction (demo)",
      "Traceability and Records Retention Procedure (demo)"
    ],
    "recordsGenerated": [
      "Finished Goods Release Record (demo)",
      "Packaging and Labeling Record (demo)",
      "Shipment Traceability Packet linking roll to lots (demo)"
    ],
    "risksControls": [
      "Unit released without passing inspection: release authorization tied to a passed inspection record",
      "Broken backward traceability at dispatch: roll id linked to cure, sheet, compound, and raw lots before release"
    ],
    "verificationPoints": [
      "Confirm release is authorized only against a passing final inspection record",
      "Verify packaging and label carry the finished roll id and required references",
      "Check a single roll id can be walked back through cure, sheet, compound, and raw lots"
    ],
    "ncrTriggers": [
      "Finished roll authorized for shipment without a passing inspection record on file",
      "Backward traceability from finished roll to raw lots cannot be reconstructed"
    ],
    "auditQuestion": "How does the finished goods station generally authorize release and preserve end-to-end traceability from saleable unit back to raw material?",
    "relatedClause": "clause-8",
    "traceabilityRecords": [
      "finished-roll-id ROLL-2026-0034-A (illustrative sample only)",
      "raw-polymer-lot id POLY-2026-0001 (illustrative sample only)"
    ]
  }
];
export const stationQmsById: Partial<Record<StationId, StationQms>> = Object.fromEntries(stationQmsMap.map((s) => [s.stationId, s]));
