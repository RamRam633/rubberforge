import type { ManufacturingControl } from "@/types/factoryIntel";
import type { StationId } from "@/types/simulation";

export const manufacturingControls: ManufacturingControl[] = [
  {
    "stationId": "raw-material-room",
    "purpose": "Receive, identify, and stage incoming elastomers, fillers, processing aids, and curatives prior to compounding. This station commonly governs material identity, condition on arrival, and controlled storage so that downstream compounding starts from verified, traceable inputs.",
    "criticalToQuality": [
      "Material identity and grade match against the receiving document and supplier label, which typically requires verification before sourcing or use",
      "Condition on receipt (contamination, moisture exposure, packaging integrity, signs of degradation)",
      "Storage environment control, since elastomers and curatives are often sensitive to heat, humidity, and light",
      "Age and shelf-life status, because some curatives and accelerators may lose activity over time",
      "Lot segregation so that distinct supplier lots are not unintentionally co-mingled"
    ],
    "inputVariables": [
      "Incoming material lots, supplier documentation, and labeled identity",
      "Storage environment conditions (ambient temperature and humidity that are typically monitored, not set as a process recipe)",
      "Receiving inspection criteria and acceptance/rejection decision inputs"
    ],
    "outputVariables": [
      "Released, identified, and staged raw materials ready for weighing",
      "Material status (accepted, quarantined, or rejected) and recorded lot identity",
      "Storage location and inventory record for each lot"
    ],
    "equipmentDependency": "Commonly depends on climate-controlled or monitored storage areas, racking, weigh-scales for receiving checks, and material-handling equipment such as pallet jacks or drum handlers. Any environmental monitoring instruments should be calibrated using an accredited or qualified lab for actual verification.",
    "materialDependency": "Directly dependent on supplier-provided elastomers, fillers, plasticizers, and curatives. Supplier names, grades, and certificates of analysis are illustrative examples only and require verification before sourcing; use the supplier's official documentation and a qualified lab where independent testing is needed.",
    "qualityCheckpoint": "Receiving inspection: identity confirmation, visual/condition check, documentation review, and a hold/release decision. Independent property testing, where used, typically requires the official test standard and an accredited or qualified lab.",
    "bottleneckRisks": "May become a bottleneck when receiving inspection, quarantine release, or storage capacity cannot keep pace with incoming deliveries, or when a single inspector handles all releases. Limited climate-controlled space can also constrain throughput.",
    "scrapRisks": "Rare direct scrap, but mis-identified, degraded, or moisture-affected material released here can cause large downstream scrap. Mixing lots or releasing expired curatives is a common upstream root cause of later rejects.",
    "maintenanceRisks": "Failure or drift of environmental monitoring or HVAC may go unnoticed and degrade stored material. Receiving scales require periodic calibration; uncalibrated scales can corrupt all downstream weighing accuracy.",
    "changeover": "Changeover is largely administrative: switching between supplier lots or material families requires clear segregation, label control, and updated inventory records to prevent cross-use.",
    "operatorSkill": "Typically moderate: trained receiving and warehouse personnel who can read documentation, recognize damaged or non-conforming material, and follow quarantine/release procedures. Material-identification judgment is the key skill.",
    "automationOpportunity": "Barcode/RFID lot tracking, automated environmental logging, and digital receiving inspection with photo capture may reduce identity errors and improve traceability without changing the physical process.",
    "traceabilityNeeds": "High. Each lot should carry a unique identifier linked to supplier documentation, receipt date, storage location, inspection result, and onward consumption, forming the root of the genealogy chain for any finished roll."
  },
  {
    "stationId": "weighing-station",
    "purpose": "Accurately dispense and stage the measured quantities of each compound ingredient for a batch before mixing. This station commonly establishes batch composition accuracy and the link between specific material lots and a specific batch.",
    "criticalToQuality": [
      "Weighing accuracy and resolution appropriate to each ingredient's proportion in the batch",
      "Correct ingredient selection and sequence so the right materials enter the right batch",
      "Cross-contamination control between ingredients, especially small-quantity curatives and accelerators",
      "Scale calibration status, which typically requires periodic verification against traceable references",
      "Complete batch-to-lot linkage capturing which material lots fed which batch"
    ],
    "inputVariables": [
      "Released raw material lots staged from the raw-material room",
      "Batch ticket or formulation call-out (target proportions, expressed conceptually, not as a disclosed recipe)",
      "Operator selection and dispensing actions"
    ],
    "outputVariables": [
      "Weighed and kitted ingredient sets staged for mixing",
      "Recorded actual weights per ingredient versus target",
      "Batch-to-lot consumption record"
    ],
    "equipmentDependency": "Commonly depends on calibrated platform and precision scales, dispensing tools, and dust-control or containment for fine fillers and additives. Scales should be calibrated against traceable references; use an accredited or qualified lab or service for actual calibration.",
    "materialDependency": "Dependent on availability and identity of all released ingredients. Any ingredient substitution requires verification and review before use; named grades or vendors are illustrative only and require verification before sourcing.",
    "qualityCheckpoint": "Weight verification against target tolerances, a second-check or independent verification step for critical small-quantity additives, and confirmation of correct ingredient identity before release to mixing.",
    "bottleneckRisks": "May bottleneck when many small additives are hand-weighed, when one scale serves multiple lines, or when verification steps are serial. Frequent recipe changes increase setup time per batch.",
    "scrapRisks": "A primary scrap-origination point: out-of-tolerance weights, wrong ingredient, omitted or doubled additions, or contamination can compromise the entire batch and may not be detectable until later. Curative dosing errors are an especially high-impact risk.",
    "maintenanceRisks": "Scale drift, worn load cells, or contamination buildup on weighing surfaces can introduce systematic error. Missed calibration intervals are a common latent failure.",
    "changeover": "Changeover between batches or formulations requires cleaning of weighing surfaces and tools to prevent carryover, plus re-staging of the correct ingredient set; carryover-sensitive additives often drive cleaning rigor.",
    "operatorSkill": "Typically moderate to high attention-to-detail skill: disciplined adherence to dispensing sequence, tolerance reading, and contamination control. Errors here are easy to make and costly downstream.",
    "automationOpportunity": "Automated or semi-automated dispensing, scale-interlocked batch tickets that block out-of-tolerance entries, and barcode-verified ingredient selection may reduce human dosing errors and capture weights automatically.",
    "traceabilityNeeds": "High. The batch record should capture each consumed lot, actual weights, operator, scale ID, and timestamp, extending the genealogy from raw material into the compounded batch."
  },
  {
    "stationId": "internal-mixer",
    "purpose": "Combine weighed ingredients into a homogeneous compound through intensive internal mixing. This station commonly determines compound dispersion, homogeneity, and the consistency of bulk material properties feeding the rest of the line.",
    "criticalToQuality": [
      "Dispersion and homogeneity of fillers and additives throughout the elastomer",
      "Batch-to-batch consistency of compound properties",
      "Thermal control during mixing to avoid premature reaction or degradation (managed conceptually, with no disclosed temperatures or times)",
      "Discharge consistency so each batch presents uniformly to downstream steps",
      "Avoidance of contamination or carryover between dissimilar compounds"
    ],
    "inputVariables": [
      "Kitted and weighed ingredient set from the weighing station",
      "Mixing energy and thermal conditions (controlled qualitatively as process inputs, not disclosed as setpoints)",
      "Mixing sequence and stage logic (conceptual, recipe-specific detail withheld)"
    ],
    "outputVariables": [
      "Mixed compound batch (often discharged as slabs or strips)",
      "Recorded process signatures such as energy/temperature trends used for monitoring",
      "Batch acceptance status pending compound testing"
    ],
    "equipmentDependency": "Commonly depends on an internal (intensive) mixer with its rotors, cooling circuits, ram, and discharge mechanism, plus instrumentation for monitoring. Equipment performance verification should rely on the manufacturer's official guidance and qualified service; named equipment is illustrative and requires verification before sourcing.",
    "materialDependency": "Highly dependent on the accuracy and identity of the upstream weighed set; a weighing error propagates directly. Compound behavior is also sensitive to raw-material lot variation, which typically requires review.",
    "qualityCheckpoint": "Process-signature monitoring during mixing plus post-mix compound testing (for example dispersion, viscosity-type, or cure-behavior indicators). Such testing typically requires the official test standard and an accredited or qualified lab for actual results.",
    "bottleneckRisks": "Often a central bottleneck because mixing is batch-wise, energy-intensive, and may require cooling between batches. Mixer availability frequently paces the whole line; unplanned cleaning or testing holds compound this.",
    "scrapRisks": "Poor dispersion, scorch from excess heat history, contamination, or out-of-spec compound can render an entire batch scrap. Because the batch is large, a single failure is costly.",
    "maintenanceRisks": "Rotor and chamber wear, cooling-circuit fouling, seal leaks, ram wear, and instrument drift can shift mixing behavior gradually. Cooling system reliability is a common critical maintenance item.",
    "changeover": "Changeover between dissimilar compounds typically requires chamber cleaning or purge sequences to prevent cross-contamination; color or curative-sensitive transitions usually drive more rigorous cleaning.",
    "operatorSkill": "Typically high: understanding of mixing behavior, recognition of abnormal process signatures, and judgment on discharge timing and batch acceptance. Often a key skilled role on the line.",
    "automationOpportunity": "Closed-loop monitoring of mixing energy and temperature trends, automated discharge logic, and statistical batch-signature comparison may improve consistency and flag anomalies earlier.",
    "traceabilityNeeds": "High. Each batch should be tied to its ingredient lots, mixer ID, process-signature record, operator, and test results, carrying genealogy forward to milling and calendering."
  },
  {
    "stationId": "two-roll-mill",
    "purpose": "Further work, blend, sheet, and feed the mixed compound, commonly used for warming, homogenizing, color or additive blending where applicable, and forming a continuous feed for the calender. This station typically conditions the compound to a uniform, workable state.",
    "criticalToQuality": [
      "Continued homogeneity and uniformity of the worked compound",
      "Consistent feed-stock condition (warm-up and plasticity state) presented to the calender",
      "Absence of contamination, foreign matter, or trapped air in the sheeted stock",
      "Color or additive blend uniformity where secondary additions are made",
      "Operator-controlled banding and sheet uniformity"
    ],
    "inputVariables": [
      "Mixed compound batch from the internal mixer",
      "Mechanical working and warm-up inputs (controlled qualitatively, no disclosed roll settings or temperatures)",
      "Any sanctioned secondary additions blended at the mill (conceptual)"
    ],
    "outputVariables": [
      "Conditioned, warmed, and uniform feed strip or sheet for the calender",
      "Visually verified surface and contamination status",
      "Reworkable scrap or trim that may be reintroduced where allowed"
    ],
    "equipmentDependency": "Commonly depends on a two-roll mill with temperature-controlled rolls, nip mechanism, guards, and safety devices including emergency stop and trip systems. Safety device function should be verified per the manufacturer's official guidance and applicable safety practice.",
    "materialDependency": "Dependent on the condition of the incoming mixed batch; a poorly dispersed or scorched batch cannot be fully corrected at the mill. Reintroduced rework, where permitted, requires review to avoid property drift.",
    "qualityCheckpoint": "Operator visual checks for uniformity, contamination, trapped air, and surface condition, plus confirmation that the feed stock is suitable before it reaches the calender.",
    "bottleneckRisks": "May bottleneck when milling is manual and operator-paced, or when one mill serves multiple calender runs. Frequent compound changes increase warm-up and cleaning time between runs.",
    "scrapRisks": "Contamination pickup, inconsistent banding, trapped air, or non-uniform feed can create downstream calender defects. Mill scrap is often reworkable, but uncontrolled rework can itself cause property variation.",
    "maintenanceRisks": "Roll surface wear or damage, nip-control wear, bearing wear, and degradation of safety trip systems are key risks. Safety-device reliability is a high-priority maintenance and inspection item due to operator hazard.",
    "changeover": "Changeover involves roll cleaning to prevent color or compound carryover and re-establishing a uniform band; color and curative-sensitive transitions drive cleaning effort.",
    "operatorSkill": "Typically high and hands-on: skilled judgment of banding, feed uniformity, and safe operation near an in-running nip. Strong safety discipline is essential because of the pinch hazard.",
    "automationOpportunity": "Automated strip feeding, conveyor stock-blenders, and vision-based contamination detection may reduce manual exposure and improve feed consistency, though skilled oversight typically remains.",
    "traceabilityNeeds": "Moderate to high. Records should link the milled feed to its source batch, mill ID, operator, and any secondary additions, maintaining continuity into the calendered sheet."
  },
  {
    "stationId": "calender",
    "purpose": "Form the conditioned compound into a continuous sheet of controlled thickness and width, and where applicable laminate to a substrate. This station commonly determines dimensional uniformity (gauge and width) and surface quality of the unvulcanized sheet.",
    "criticalToQuality": [
      "Thickness (gauge) uniformity across the width and along the length",
      "Width control and edge quality",
      "Surface finish and freedom from defects such as blisters, pinholes, or trapped air",
      "Sheet-to-substrate adhesion and alignment where lamination is performed",
      "Stable, continuous running condition to avoid gauge drift over a run"
    ],
    "inputVariables": [
      "Conditioned feed stock from the two-roll mill",
      "Roll geometry and thermal/speed conditions (controlled as process inputs, with no disclosed setpoints)",
      "Substrate or liner feed where lamination applies (conceptual)"
    ],
    "outputVariables": [
      "Continuous calendered sheet at target gauge and width (targets defined per job, not disclosed here)",
      "Inline gauge and width measurement signals where instrumented",
      "Edge trim and start-up scrap"
    ],
    "equipmentDependency": "Commonly depends on a multi-roll calender with precise roll positioning, temperature control, drive synchronization, and often inline thickness gauging. Calibration of gauging instruments should use traceable references and a qualified service or lab for actual verification.",
    "materialDependency": "Highly dependent on uniform, well-conditioned feed; feed variation shows directly as gauge and surface variation. Substrate material, where used, requires verification before sourcing and review for compatibility.",
    "qualityCheckpoint": "Inline gauge and width monitoring plus periodic operator measurement and surface inspection. Formal dimensional capability typically requires calibrated instruments and, where certified results are needed, an accredited or qualified lab.",
    "bottleneckRisks": "Frequently a capital-intensive bottleneck: start-up, threading, and gauge stabilization consume time, and the calender often paces sheet production. Width or gauge changes can require significant setup.",
    "scrapRisks": "Gauge excursions, edge defects, trapped air, surface blemishes, or lamination misalignment are common scrap sources. Because output is continuous, an undetected drift can scrap long lengths quickly.",
    "maintenanceRisks": "Roll wear, run-out, bearing wear, temperature-control faults, and drive synchronization issues directly degrade gauge uniformity. Inline gauge calibration drift is a key latent risk. Roll surface condition is a high-cost maintenance item.",
    "changeover": "Changeover for new gauge, width, or compound/color typically requires roll cleaning, repositioning, threading, and a stabilization period that generates start-up scrap; color transitions add cleaning rigor.",
    "operatorSkill": "Typically high: skilled monitoring of gauge trends, surface quality, and run stability, with the judgment to correct drift early. A central skilled role for sheet quality.",
    "automationOpportunity": "Closed-loop gauge control, automated edge-width control, and inline vision defect detection may reduce scrap and stabilize runs; profile-control systems are a common automation target.",
    "traceabilityNeeds": "High. The continuous sheet should be tied (by length or roll segment) to its source batch, calender ID, gauge/width records, and operator, so any later defect can be traced to a specific run window."
  },
  {
    "stationId": "vulcanization",
    "purpose": "Convert the shaped, unvulcanized sheet into a cured rubber with its intended mechanical and thermal properties through a controlled curing process. This station commonly determines final material performance and is often the most property-defining step.",
    "criticalToQuality": [
      "State of cure / degree of crosslinking uniformity across thickness and area (managed conceptually, no disclosed cure profile)",
      "Avoidance of undercure or overcure, both of which degrade properties",
      "Dimensional stability and freedom from cure-induced distortion",
      "Surface quality and freedom from cure defects such as blisters or porosity",
      "Consistency of cured properties batch to batch and run to run"
    ],
    "inputVariables": [
      "Unvulcanized calendered sheet (and any laminate) from the calender",
      "Cure energy/time/pressure environment (controlled as process inputs; specific temperatures, times, and pressures are intentionally not disclosed)",
      "Sheet thickness and loading configuration as presented to the cure step"
    ],
    "outputVariables": [
      "Vulcanized (cured) rubber sheet with developed properties",
      "Process records of the cure cycle signatures used for monitoring",
      "Cured product pending property verification"
    ],
    "equipmentDependency": "Commonly depends on curing equipment such as presses, autoclaves, or continuous curing systems with controlled and monitored heat and pressure, plus instrumentation and safety interlocks. Instrument accuracy should be verified with traceable references and a qualified service or lab.",
    "materialDependency": "Dependent on correct upstream compounding (curative system) and sheet condition; cure behavior is sensitive to compound and raw-material lot variation, which requires review. Substitutions require verification before use.",
    "qualityCheckpoint": "Cure-cycle monitoring plus post-cure property verification such as hardness-type, tensile-type, or cure-state indicators. These typically require the official test standard and an accredited or qualified lab for actual reported values.",
    "bottleneckRisks": "Often a major bottleneck because curing takes finite cycle time and may be batch-wise; press or autoclave capacity and cycle duration frequently limit overall throughput. Energy availability can also constrain it.",
    "scrapRisks": "Undercure, overcure, blistering, porosity, contamination, or distortion can scrap cured product, which is generally not reworkable once vulcanized. This makes cure errors among the most costly in the line.",
    "maintenanceRisks": "Heating-element or steam-system faults, pressure-system leaks, uneven heat distribution, sensor drift, and safety-interlock degradation are key risks. Uniform heat delivery and interlock integrity are high-priority maintenance and safety items.",
    "changeover": "Changeover between products of differing thickness or compound typically requires re-establishing the appropriate (undisclosed) cure conditions and verifying readiness, plus tooling or fixture changes where applicable.",
    "operatorSkill": "Typically high: understanding of cure behavior, recognition of cure defects, and disciplined cycle and safety control. Pressure and heat hazards make safety competence essential.",
    "automationOpportunity": "Recipe-managed cycle control with automatic logging, cure-state modeling or monitoring, and interlock-verified loading may improve consistency and reduce undercure/overcure risk.",
    "traceabilityNeeds": "High. Each cured lot or roll segment should link to its cure-cycle record, equipment ID, source sheet/batch, and property test results, since this step most strongly defines final performance."
  },
  {
    "stationId": "cooling",
    "purpose": "Bring the cured sheet to a stable handling and dimensional state in a controlled manner before downstream finishing. This station commonly governs dimensional stabilization and prevents heat-related handling defects.",
    "criticalToQuality": [
      "Controlled, uniform cooling to limit residual stress, warping, or shrinkage variation",
      "Dimensional stabilization before measurement and finishing",
      "Surface protection from contamination, sticking, or blocking during cooling",
      "Avoidance of thermal shock or uneven cooling that may distort the sheet",
      "Consistent handling condition before trimming and inspection"
    ],
    "inputVariables": [
      "Hot cured sheet from vulcanization",
      "Cooling medium and dwell conditions (controlled qualitatively as process inputs, not disclosed as setpoints)",
      "Sheet handling and support configuration during cooling"
    ],
    "outputVariables": [
      "Dimensionally stabilized, handleable cured sheet",
      "Recorded cooling condition where monitored",
      "Sheet ready for trimming/slitting"
    ],
    "equipmentDependency": "Commonly depends on cooling conveyors, cooling baths or tanks, festoon or rack systems, and fans or chilled-medium circuits. Any temperature monitoring should use calibrated instruments verified by a qualified service or lab.",
    "materialDependency": "Dependent on compound behavior and sheet thickness, which influence cooling response; thicker or filled compounds may stabilize differently and require review. Any anti-stick or liner media require verification before sourcing.",
    "qualityCheckpoint": "Confirmation that the sheet has stabilized dimensionally and is free of cooling-induced distortion, sticking, or contamination before it advances to finishing.",
    "bottleneckRisks": "May bottleneck when cooling dwell time exceeds upstream cycle pace or when cooling line length or rack capacity is limited. Often paces continuous lines if undersized.",
    "scrapRisks": "Uneven or overly rapid cooling can cause warping, dimensional drift, or surface marking; blocking/sticking can damage surfaces. These may render sections scrap or require re-inspection.",
    "maintenanceRisks": "Cooling-medium circulation faults, chiller or fan failures, conveyor tracking issues, and fouled cooling baths can produce non-uniform cooling. Cooling-system reliability is the key maintenance concern.",
    "changeover": "Changeover is usually minor and often limited to adjusting line speed/dwell qualitatively and managing any liner or anti-stick media for the new product; thickness changes may require dwell review.",
    "operatorSkill": "Typically low to moderate: monitoring for sticking, distortion, and tracking, with attention to handling. Less specialized than mixing or curing but still requires defect awareness.",
    "automationOpportunity": "Automated cooling conveyors with monitored medium temperature, tracking control, and inline temperature logging may stabilize the step and reduce handling-induced defects.",
    "traceabilityNeeds": "Moderate. Cooling-condition records can be linked to the roll segment and cure lot, mainly to support investigation of dimensional or surface issues found downstream."
  },
  {
    "stationId": "trimming-slitting",
    "purpose": "Trim edges and slit the cured sheet to specified widths and lengths, producing dimensionally defined product. This station commonly determines width accuracy, edge quality, and slit straightness of the finished sheet.",
    "criticalToQuality": [
      "Width and length dimensional accuracy to the job specification",
      "Edge quality and slit straightness without nicks, fraying, or taper",
      "Clean separation without contamination or embedded debris",
      "Consistent registration so multiple slit strips meet their respective specs",
      "Minimal usable-material loss from edge trim"
    ],
    "inputVariables": [
      "Stabilized cured sheet from cooling",
      "Cutting/slitting tooling and feed alignment inputs (positions defined per job, not disclosed as setpoints)",
      "Target widths and lengths from the job specification"
    ],
    "outputVariables": [
      "Trimmed and slit sheet at specified width and length",
      "Edge trim and off-cut scrap",
      "Dimensional records for the cut product"
    ],
    "equipmentDependency": "Commonly depends on slitting and trimming equipment such as rotary or shear knives, score-cut or razor systems, guides, and rewind/take-up, with sharp and properly set tooling. Tool condition should follow the manufacturer's official guidance; named tooling is illustrative and requires verification before sourcing.",
    "materialDependency": "Dependent on sheet flatness and stability from cooling; warped or tacky sheet cuts poorly. Hardness and thickness influence tool selection, which requires review.",
    "qualityCheckpoint": "Dimensional verification of width and length plus edge-quality inspection. Where certified dimensions are required, use calibrated instruments and, if independent results are needed, an accredited or qualified lab.",
    "bottleneckRisks": "May bottleneck on multi-width jobs requiring repositioning, on frequent blade changes, or when slitting speed is limited by cut quality. Setup-heavy jobs reduce throughput.",
    "scrapRisks": "Out-of-tolerance width/length, ragged or wavy edges, tool marks, or contamination from worn tooling are common scrap and rework sources. Excess edge trim also reduces yield.",
    "maintenanceRisks": "Blade dulling, nicks, misalignment, and guide wear directly degrade edge quality and dimensions. Tooling sharpness and alignment are frequent, high-impact maintenance items.",
    "changeover": "Changeover between widths and lengths typically requires repositioning guides and knives, tool changes, and a first-piece dimensional check before running the lot.",
    "operatorSkill": "Typically moderate: accurate setup, tool-condition judgment, and dimensional verification, with care around sharp tooling and moving web hazards.",
    "automationOpportunity": "Programmable knife positioning, automated edge-guidance, length measurement/counting, and inline width verification may reduce setup time and dimensional variation.",
    "traceabilityNeeds": "Moderate to high. Cut product should retain linkage to its parent roll/cure lot, with recorded dimensions and operator, so width or edge issues can be traced to the cut step or upstream."
  },
  {
    "stationId": "inspection",
    "purpose": "Verify that finished sheet meets dimensional, surface, and (where applicable) property-related acceptance criteria before release. This station commonly serves as the formal conformance gate and the basis for accept, rework, or reject decisions.",
    "criticalToQuality": [
      "Conformance to specified dimensions (thickness, width, length) within stated tolerances",
      "Surface and visual quality against defined defect criteria",
      "Property-related characteristics where required (for example hardness-type or other indicators)",
      "Correct sampling and inspection method so decisions are representative",
      "Clear, documented accept/rework/reject disposition with traceable records"
    ],
    "inputVariables": [
      "Trimmed and slit finished sheet",
      "Inspection criteria, acceptance limits, and sampling approach (defined per job/specification)",
      "Calibrated measurement and test inputs"
    ],
    "outputVariables": [
      "Inspection results and conformance disposition (accept, rework, reject)",
      "Defect classification and quantity records",
      "Released product or non-conformance records"
    ],
    "equipmentDependency": "Commonly depends on calibrated measuring instruments (thickness gauges, scales, dimensional tools), hardness-type testers, and visual inspection aids. Instruments should be calibrated against traceable references; certified property testing typically requires the official standard and an accredited or qualified lab.",
    "materialDependency": "Largely independent of new material inputs but dependent on consistent product presentation from upstream. Reference standards or master samples used for comparison require verification and review.",
    "qualityCheckpoint": "This station is itself the primary quality checkpoint and conformance gate; it should rely on calibrated instruments and documented criteria, with accredited or qualified lab testing where certified results are required.",
    "bottleneckRisks": "May bottleneck when inspection is fully manual, when 100 percent inspection is required, or when limited test equipment or inspectors are shared across lines. Hold-for-disposition queues can stall flow.",
    "scrapRisks": "Inspection does not create scrap but determines it; weak criteria or missed defects allow escapes, while overly tight or inconsistent judgment can over-reject good product. Both are costly.",
    "maintenanceRisks": "Out-of-calibration instruments or degraded test fixtures can produce wrong dispositions (accepting bad or rejecting good product). Calibration discipline is the dominant maintenance concern.",
    "changeover": "Changeover is mainly loading the correct specification, acceptance limits, and sampling plan for the job and confirming instrument suitability; minimal physical changeover.",
    "operatorSkill": "Typically high judgment for visual defect classification and disposition decisions, plus competence with measuring and test instruments. Consistency between inspectors is a recurring training need.",
    "automationOpportunity": "Automated vision inspection, inline thickness mapping, and digital data capture with statistical process monitoring may improve defect detection consistency and reduce inspector-to-inspector variation.",
    "traceabilityNeeds": "High. Inspection records, instrument IDs, sampling results, and dispositions should attach to each roll/lot, closing the genealogy chain and supporting any later quality investigation or RFQ quality evidence."
  },
  {
    "stationId": "finished-roll",
    "purpose": "Wind, label, package, and stage accepted product as finished rolls for storage and shipment. This station commonly governs final identification, protection, and the readiness of product for dispatch.",
    "criticalToQuality": [
      "Correct and complete labeling and identification matching the released product",
      "Wind quality (tension uniformity, alignment, core integrity) to prevent telescoping or surface marking",
      "Protective packaging suited to the product and storage/transport conditions",
      "Accurate length/quantity and pack configuration per the order",
      "Preservation of product condition (no contamination, blocking, or deformation in storage)"
    ],
    "inputVariables": [
      "Inspected and released finished sheet",
      "Winding and packaging configuration inputs (defined per order, not disclosed as setpoints)",
      "Labeling, identification, and order/packing requirements"
    ],
    "outputVariables": [
      "Labeled, packaged finished rolls ready for storage or shipment",
      "Finished-goods inventory and packing records",
      "Roll-level identification linked to the full production genealogy"
    ],
    "equipmentDependency": "Commonly depends on winding/rewind equipment, cores, labeling and marking tools, wrapping or packaging equipment, and handling gear. Any tension or length instrumentation should be verified with a qualified service.",
    "materialDependency": "Dependent on packaging consumables (cores, films, wrap, pallets); these and any named suppliers are illustrative only and require verification before sourcing. Packaging suitability for the product requires review.",
    "qualityCheckpoint": "Final verification of label/identity correctness, wind quality, length/quantity, and packaging integrity before the roll is moved to finished-goods inventory or shipment.",
    "bottleneckRisks": "May bottleneck during manual winding, labeling, or packaging, or when staging/storage space is limited. Order-specific pack configurations can slow throughput at period end.",
    "scrapRisks": "Poor winding (telescoping, marking, crushed cores), mislabeling, or inadequate packaging can damage otherwise good product or cause rejected shipments. Identity errors are a high-impact risk despite low direct scrap.",
    "maintenanceRisks": "Rewind tension-control faults, core-chuck wear, labeler or printer failures, and wrapping-equipment issues can degrade pack quality. Tension-control reliability is the key maintenance item.",
    "changeover": "Changeover involves core size, label/format, and packaging configuration changes for each order, plus verification that identity and pack details match the order before running.",
    "operatorSkill": "Typically moderate: careful winding, accurate labeling, and packaging judgment, with strong attention to identity verification to prevent mix-ups.",
    "automationOpportunity": "Automated tension-controlled winding, print-and-apply labeling tied to the production record, and barcode-verified packing may reduce identity errors and improve pack consistency.",
    "traceabilityNeeds": "High. The finished roll is the unit of sale; its label and record should carry the unique roll/lot ID linking back through inspection, cure, calender, mixing, and raw-material lots, completing end-to-end genealogy for traceability and any RFQ/quote evidence."
  }
];

export const manufacturingControlsByStation: Partial<Record<StationId, ManufacturingControl>> =
  Object.fromEntries(manufacturingControls.map((c) => [c.stationId, c]));
