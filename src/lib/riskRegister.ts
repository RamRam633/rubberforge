import type { RiskEntry } from "@/types/qms";
export const riskRegister: RiskEntry[] = [
  {
    "id": "risk-1",
    "riskStatement": "Customer requirements may be captured ambiguously or incompletely, so the modeled order proceeds against an unclear or assumed specification.",
    "processArea": "Order intake and requirements review",
    "cause": "Incoming specifications that omit the controlling standard revision, acceptance ranges, test method, or intended service (commonly arriving as a hardness value with no method stated), combined with no structured review gate before acceptance.",
    "effect": "Material is generally made to the wrong target, leading to customer rejection at dock, rework, or a part that is unfit for the actual application even though it passes an internally chosen test.",
    "severity": "high",
    "likelihood": "medium",
    "detection": "moderate",
    "controls": [
      "Modeled requirements review checklist before order acceptance (demo)",
      "Placeholder rule that a controlling standard revision and acceptance range must be recorded per line item",
      "Customer-document expectations surfaced per quality test in the prototype"
    ],
    "mitigation": "Add a modeled contract-review sign-off step that blocks order release until specification, revision, acceptance limits, and test method are confirmed with the customer.",
    "owner": "Sales and Contract Review Lead",
    "relatedClause": "clause-8",
    "linkedStation": "raw-material-room",
    "linkedTest": "Certificate of Conformance Review",
    "status": "open"
  },
  {
    "id": "risk-2",
    "riskStatement": "An incorrect base polymer or grade may be selected for the stated service environment, so the compound is fundamentally unsuited to the application.",
    "processArea": "Material selection and design input",
    "cause": "A polymer family chosen without confirming compatibility against the actual service fluid, temperature, ozone, or cold exposure, typically when application details are vague or a substitution is made without re-checking suitability.",
    "effect": "The finished sheet generally swells, hardens, cracks, or embrittles in service, causing field failure even when routine lot tests look acceptable.",
    "severity": "high",
    "likelihood": "medium",
    "detection": "hard",
    "controls": [
      "Modeled material-selection guidance mapping service conditions to compound families (demo)",
      "Placeholder design-input record capturing intended service environment",
      "Suitability-screening tests surfaced in the prototype (fluid immersion, ozone, low-temperature)"
    ],
    "mitigation": "Introduce a modeled material-suitability gate that requires environment-matched screening evidence before a grade is approved for the order.",
    "owner": "Materials and Compounding Engineer",
    "relatedClause": "clause-8",
    "linkedStation": "raw-material-room",
    "linkedTest": "Fluid Immersion (Resistance to Liquids)",
    "status": "open"
  },
  {
    "id": "risk-3",
    "riskStatement": "Incoming raw materials may vary lot to lot between suppliers or shipments, so the same recipe yields inconsistent compound behavior.",
    "processArea": "Supplier control and incoming material",
    "cause": "Normal batch-to-batch variation in polymer, filler, or curative lots, compounded by limited incoming verification and no trend monitoring across supplier deliveries.",
    "effect": "Cure rate, dispersion, and physical properties generally drift between batches, producing intermittent off-spec sheet that is hard to attribute to a single cause.",
    "severity": "medium",
    "likelihood": "high",
    "detection": "moderate",
    "controls": [
      "Modeled incoming-inspection and lot-acceptance checks (demo)",
      "Placeholder approved-supplier list with required certificates",
      "Specific-gravity quick check surfaced as an early consistency screen"
    ],
    "mitigation": "Add modeled incoming-lot trend monitoring with a quick density and identity screen before each lot is released to staging.",
    "owner": "Supplier Quality Engineer",
    "relatedClause": "clause-8",
    "linkedStation": "raw-material-room",
    "linkedTest": "Specific Gravity (Density)",
    "status": "monitored"
  },
  {
    "id": "risk-4",
    "riskStatement": "Required certification or supporting documentation may be missing, incomplete, or inconsistent at material acceptance, so material is taken in without verified provenance.",
    "processArea": "Documentation control and incoming acceptance",
    "cause": "Certificates arriving without the correct specification reference, lot identification, or attached results, accepted because no enforced document-completeness check exists at receiving.",
    "effect": "Material with unverified conformance generally enters production, weakening traceability and creating downstream rejection or containment exposure if a problem later surfaces.",
    "severity": "medium",
    "likelihood": "medium",
    "detection": "easy",
    "controls": [
      "Modeled certificate-of-conformance review against the purchase specification (demo)",
      "Placeholder document-completeness checklist at receiving",
      "Quarantine-until-verified rule in the prototype workflow"
    ],
    "mitigation": "Enforce a modeled hold that prevents lot release until a complete, specification-matched certificate is logged.",
    "owner": "Quality Documentation Controller",
    "relatedClause": "clause-8",
    "linkedStation": "raw-material-room",
    "linkedTest": "Certificate of Conformance Review",
    "status": "monitored"
  },
  {
    "id": "risk-5",
    "riskStatement": "An ingredient may be weighed to the wrong quantity or the wrong ingredient staged, so the batch enters mixing off-formulation.",
    "processArea": "Batch weighing and preparation",
    "cause": "Manual weighing errors, mislabeled or mis-staged ingredients, or an uncalibrated scale, occurring where a single weighing step feeds the mixer with no independent verification.",
    "effect": "The compound generally cures or performs incorrectly, and because the error is built in at the start it commonly cannot be corrected by any later station.",
    "severity": "high",
    "likelihood": "medium",
    "detection": "moderate",
    "controls": [
      "Modeled second-check or scan-verify step at weighing (demo)",
      "Placeholder calibrated-scale requirement before batch start",
      "Per-batch weigh record linked to lot in the prototype"
    ],
    "mitigation": "Add a modeled independent weigh-verification (second check or barcode confirmation) before the batch is released to the mixer.",
    "owner": "Compounding and Weighing Supervisor",
    "relatedClause": "clause-8",
    "linkedStation": "weighing-station",
    "linkedTest": "Specific Gravity (Density)",
    "status": "open"
  },
  {
    "id": "risk-6",
    "riskStatement": "Filler and curatives may disperse unevenly during internal mixing, so strength and property uniformity are not properly built into the material.",
    "processArea": "Internal mixing and dispersion",
    "cause": "Insufficient or uneven mechanical work in the mixer, agglomerated filler, or an unstable working temperature, where dispersion quality depends on the mixing step itself.",
    "effect": "Poor dispersion generally produces weak spots, color and property non-uniformity, and reduced strength that cannot be recovered downstream.",
    "severity": "high",
    "likelihood": "medium",
    "detection": "hard",
    "controls": [
      "Modeled dispersion checks and in-process learning panels (demo)",
      "Placeholder mixing-completion criteria before discharge",
      "Tensile and visual screens surfaced as dispersion indicators"
    ],
    "mitigation": "Add a modeled dispersion-acceptance check at mixer discharge before the compound advances to milling.",
    "owner": "Mixing Process Engineer",
    "relatedClause": "clause-8",
    "linkedStation": "internal-mixer",
    "linkedTest": "Tensile Strength",
    "status": "monitored"
  },
  {
    "id": "risk-7",
    "riskStatement": "Sheet thickness may vary across width or length during calendering, so the gauge falls outside the agreed tolerance.",
    "processArea": "Calendering and gauge forming",
    "cause": "Nip or roll variation, uneven feed, or thermal drift at the calender, where the sheet geometry is established and a gauge fault formed here carries through to the finished roll.",
    "effect": "Out-of-tolerance thickness generally causes downstream fit or sealing problems and scrap, since the defect is locked into the formed sheet.",
    "severity": "medium",
    "likelihood": "medium",
    "detection": "easy",
    "controls": [
      "Modeled in-line thickness monitoring concept (demo)",
      "Placeholder first-piece gauge check at calender start",
      "Thickness and gauge test surfaced for the formed sheet"
    ],
    "mitigation": "Add a modeled continuous gauge-monitoring alert with a first-piece and periodic thickness verification at the calender.",
    "owner": "Calender Line Supervisor",
    "relatedClause": "clause-8",
    "linkedStation": "calender",
    "linkedTest": "Thickness and Gauge",
    "status": "monitored"
  },
  {
    "id": "risk-8",
    "riskStatement": "The sheet may be under-cured or over-cured during vulcanization, so the cure state does not match the target and properties are wrong.",
    "processArea": "Vulcanization and curing",
    "cause": "Inadequate or excessive time or temperature exposure (modeled at a high level, no settings), uneven heating, or a process upset at the curing station where final chemistry is set.",
    "effect": "Under-cure generally leaves the sheet soft, weak, and incompletely networked, while over-cure can embrittle it; both commonly pass a quick look yet fail in service.",
    "severity": "high",
    "likelihood": "medium",
    "detection": "hard",
    "controls": [
      "Modeled cure-state verification step (demo)",
      "Placeholder process-parameter monitoring at the curing station",
      "Hardness, tensile, and heat-aging screens surfaced as cure-state indicators"
    ],
    "mitigation": "Add a modeled cure-confirmation check using state-of-cure indicators before the sheet is released from curing.",
    "owner": "Curing Process Engineer",
    "relatedClause": "clause-8",
    "linkedStation": "vulcanization",
    "linkedTest": "Hardness (Durometer)",
    "status": "open"
  },
  {
    "id": "risk-9",
    "riskStatement": "Critical line equipment may go down unexpectedly, so production is interrupted mid-process and in-line material is left in an uncontrolled state.",
    "processArea": "Equipment reliability and maintenance",
    "cause": "Mechanical failure, wear, or lack of preventive maintenance on shared machines (for example mixer, calender, or curing equipment), where any single machine stoppage halts the modeled line.",
    "effect": "Interrupted batches generally must be scrapped or requalified, schedules slip, and partially processed material can drift out of control during the stoppage.",
    "severity": "medium",
    "likelihood": "medium",
    "detection": "easy",
    "controls": [
      "Modeled preventive-maintenance schedule per machine (demo)",
      "Placeholder machine-status indicators in the prototype",
      "Hold-and-disposition rule for in-line material during a stoppage"
    ],
    "mitigation": "Add a modeled preventive-maintenance and spares plan for the highest-impact machines with a defined stoppage disposition procedure.",
    "owner": "Maintenance and Reliability Lead",
    "relatedClause": "clause-8",
    "linkedStation": "various",
    "linkedTest": "n/a",
    "status": "monitored"
  },
  {
    "id": "risk-10",
    "riskStatement": "Measuring and test equipment may be used past its calibration due date, so reported results cannot be trusted.",
    "processArea": "Calibration and measurement assurance",
    "cause": "A missed or overdue calibration on scales, durometers, gauges, or test instruments, occurring where no enforced due-date control blocks use of out-of-calibration equipment.",
    "effect": "Decisions are generally made on unreliable readings, so conforming material may be rejected or non-conforming material accepted, and prior results may need re-verification.",
    "severity": "high",
    "likelihood": "low",
    "detection": "easy",
    "controls": [
      "Modeled calibration register with due dates (demo)",
      "Placeholder block-on-overdue rule for measurement devices",
      "Calibrated-device requirement tied to each quality test"
    ],
    "mitigation": "Add a modeled calibration-due alert that disables a device from acceptance use once its due date passes.",
    "owner": "Calibration and Metrology Coordinator",
    "relatedClause": "clause-8",
    "linkedStation": "various",
    "linkedTest": "Hardness (Durometer)",
    "status": "open"
  },
  {
    "id": "risk-11",
    "riskStatement": "A defect may pass final inspection undetected, so non-conforming sheet escapes to the customer.",
    "processArea": "Final inspection and acceptance",
    "cause": "Sampling limits, subjective visual judgment without limit samples, or inspector workload at the inspection gate, where the final check is the last barrier before shipment.",
    "effect": "Off-spec material generally reaches the customer, causing returns, complaints, and erosion of confidence, while masking the upstream source of the defect.",
    "severity": "high",
    "likelihood": "medium",
    "detection": "moderate",
    "controls": [
      "Modeled inspection gate with defect-feedback to upstream stations (demo)",
      "Placeholder limit samples and defined acceptance criteria",
      "Visual and dimensional inspection surfaced at the gate"
    ],
    "mitigation": "Add a modeled acceptance plan with limit samples and a periodic gauge-repeatability check on the inspection step.",
    "owner": "Quality Inspection Lead",
    "relatedClause": "clause-8",
    "linkedStation": "inspection",
    "linkedTest": "Visual Inspection",
    "status": "monitored"
  },
  {
    "id": "risk-12",
    "riskStatement": "The link between a shipped roll and its compound lot and process records may be broken, so affected product cannot be reliably isolated later.",
    "processArea": "Traceability and records",
    "cause": "A missing or mismatched lot identifier at a handoff (for example between weighing, curing, and the finished roll), where traceability depends on every step preserving the linkage.",
    "effect": "If a problem surfaces, containment generally widens because the manufacturer cannot tell which rolls share a suspect batch, raising recall and regulated-use exposure.",
    "severity": "high",
    "likelihood": "low",
    "detection": "moderate",
    "controls": [
      "Modeled digital thread linking lot to station records (demo)",
      "Placeholder lot-identifier carry-through at each handoff",
      "Traceability review surfaced as a documentation check"
    ],
    "mitigation": "Add a modeled traceability-continuity check that flags any roll missing an unbroken lot-to-station record before shipment.",
    "owner": "Traceability and Records Owner",
    "relatedClause": "clause-8",
    "linkedStation": "finished-roll",
    "linkedTest": "Traceability Review",
    "status": "monitored"
  },
  {
    "id": "risk-13",
    "riskStatement": "Finished rolls may be damaged or inadequately protected during packaging and handling, so conforming product degrades before it reaches the customer.",
    "processArea": "Packaging, preservation and handling",
    "cause": "Poor packaging specification, rough handling, or exposure to contamination, heat, or ozone during staging, occurring after the product has already passed inspection.",
    "effect": "Good sheet generally arrives with edge damage, surface contamination, deformation, or early aging, producing rejections that the line tests would not have caught.",
    "severity": "medium",
    "likelihood": "medium",
    "detection": "easy",
    "controls": [
      "Modeled packaging and preservation specification (demo)",
      "Placeholder handling and storage-condition guidance",
      "Surface and visual checks before pack-out"
    ],
    "mitigation": "Add a modeled pre-shipment packaging-verification check confirming protection, labeling, and storage conditions for each roll.",
    "owner": "Shipping and Logistics Supervisor",
    "relatedClause": "clause-8",
    "linkedStation": "finished-roll",
    "linkedTest": "Surface Finish and Texture",
    "status": "monitored"
  },
  {
    "id": "risk-14",
    "riskStatement": "Orders may ship late against the committed date, so on-time delivery performance and customer commitments are missed.",
    "processArea": "Planning and delivery performance",
    "cause": "Upstream delays such as material variation, equipment downtime, rework, or unrealistic scheduling, where any single station holdup cascades to the delivery date.",
    "effect": "Late delivery generally triggers customer dissatisfaction, expediting cost, and pressure to skip checks, which can in turn raise quality-escape risk.",
    "severity": "medium",
    "likelihood": "medium",
    "detection": "easy",
    "controls": [
      "Modeled schedule and delivery-tracking view (demo)",
      "Placeholder on-time-delivery performance indicator",
      "Escalation rule when a station holds material beyond plan"
    ],
    "mitigation": "Add a modeled delivery-risk indicator that escalates at-risk orders early and protects in-line quality checks from being bypassed.",
    "owner": "Production Planning Manager",
    "relatedClause": "clause-8",
    "linkedStation": "various",
    "linkedTest": "n/a",
    "status": "monitored"
  },
  {
    "id": "risk-15",
    "riskStatement": "Documentation for regulated food-contact or potable-water service may be insufficient or mismatched, so product is offered for a regulated use it is not demonstrably qualified for.",
    "processArea": "Regulatory and compliance documentation",
    "cause": "Reliance on color or appearance instead of verified grade and listing, or missing regulated-use declarations, where food and potable claims require specific documented qualification that the modeled workflow may not enforce.",
    "effect": "Material may generally be supplied for a sensitive contact application without adequate evidence, creating significant regulatory, safety, and liability exposure for the customer.",
    "severity": "high",
    "likelihood": "low",
    "detection": "hard",
    "controls": [
      "Modeled regulated-use declaration and documentation check (demo)",
      "Placeholder rule that color or appearance never confirms food or potable status",
      "Certificate and traceability review surfaced for regulated orders"
    ],
    "mitigation": "Add a modeled regulated-use gate that requires documented grade qualification and listing evidence before a food-contact or potable claim is accepted.",
    "owner": "Regulatory and Compliance Officer",
    "relatedClause": "clause-8",
    "linkedStation": "raw-material-room",
    "linkedTest": "Color and Appearance Check",
    "status": "open"
  },
  {
    "id": "risk-16",
    "riskStatement": "The QMS model, default tests, and reference assumptions may not match a given region or operating context, so guidance is applied where it does not fit.",
    "processArea": "Context of the organization and applicability",
    "cause": "Illustrative standards, climate assumptions (such as cold-flexibility or ozone exposure defaults), and demo placeholder data that may not reflect a specific market, regulation, or local condition, applied without re-checking relevance.",
    "effect": "Users may generally over-trust placeholder content, leading to selection or acceptance decisions that are reasonable in one context but inappropriate in another.",
    "severity": "medium",
    "likelihood": "medium",
    "detection": "moderate",
    "controls": [
      "Modeled context-relevance notes and demo-data labeling (demo)",
      "Placeholder cautions that standards are illustrative and require verification",
      "Climate and service-condition prompts surfaced before suitability tests"
    ],
    "mitigation": "Add a modeled context-confirmation step prompting users to validate region, regulation, and climate assumptions against local requirements before relying on defaults.",
    "owner": "QMS Model Steward",
    "relatedClause": "clause-8",
    "linkedStation": "various",
    "linkedTest": "Low-Temperature Flexibility",
    "status": "monitored"
  }
];
