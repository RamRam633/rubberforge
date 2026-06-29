import type { MaintenanceConcept } from "@/types/factoryLife";
import type { StationId } from "@/types/simulation";
export const maintenanceConcepts: MaintenanceConcept[] = [
  {
    "stationId": "raw-material-room",
    "maintenanceConcern": "The raw-material room is broadly about keeping bales, fillers, and additives staged in stable, well-organized storage conditions, so the main upkeep theme tends to center on the integrity of storage racking, material-handling aids, and the climate and dust-control environment rather than on any high-energy machinery.",
    "wearPoint": "The points most likely to show gradual wear are the floor surfaces and rack contact faces that bear repeated bale loading, along with door seals, dust-extraction filter media, and the wheels or rollers of any manual handling carts used to stage material.",
    "inspectionNeed": "A sensible inspection emphasis is conceptual: confirming that storage labels and lot identifiers remain legible, that racks appear stable and undamaged, and that environmental indicators such as humidity and temperature readouts fall within an expected band, all observed by a person reading panels and tags from a safe walkway.",
    "sparePartsCategory": "Spare-part thinking here leans toward consumables and facility items: replacement filter cartridges for dust extraction, door and seal components, label stock, and cart wheels or bearings.",
    "downtimeRisk": "Downtime exposure is generally low and indirect, since a disruption here usually slows material availability to downstream stations rather than halting a running line outright.",
    "qualityImpact": "Quality impact is mostly upstream and subtle: poor storage climate, contamination, or mislabeling can introduce moisture or mix-ups that later affect batch consistency, so disciplined storage conditions are a quiet contributor to finished-product uniformity.",
    "healthBadge": "ready"
  },
  {
    "stationId": "weighing-station",
    "maintenanceConcern": "The weighing station's upkeep concept is dominated by measurement trust, so the recurring theme is keeping scales, load cells, and dispensing aids in a state where their readings can be relied upon, supported by calibration discipline and cleanliness.",
    "wearPoint": "Likely wear concentrates on load-cell mounts and weigh-platform surfaces that see repeated loading, along with scoops, hoppers, and any small dosing mechanisms whose contact surfaces can accumulate residue or drift over time.",
    "inspectionNeed": "The central inspection need is calibration verification against reference standards, conceptually framed as periodic check-weighing and reviewing calibration certificates, with operators reading the indicator panel and recording values rather than intervening in any energized mechanism.",
    "sparePartsCategory": "Spare-part categories include load cells, calibration reference weights, indicator displays, and replaceable dosing or hopper liners.",
    "downtimeRisk": "Downtime risk is moderate in effect though usually short in duration, because an out-of-tolerance scale may pause batching until it is re-verified, which can ripple to the mixer schedule.",
    "qualityImpact": "Quality impact is direct and significant: because additive and filler proportions are set here, drift in weighing accuracy can shift batch composition, so gauge calibration is one of the clearest links between maintenance and consistent material properties downstream.",
    "healthBadge": "needs-review"
  },
  {
    "stationId": "internal-mixer",
    "maintenanceConcern": "The internal mixer is a heavy-duty mixing concept, so its upkeep theme broadly concerns the condition of the rotors, mixing chamber, and the sealing and temperature-control systems that keep mixing energy and contamination under control, all considered conceptually rather than as operating steps.",
    "wearPoint": "The most wear-prone elements are conceptually the rotor surfaces and chamber walls subject to abrasive and shear contact, the dust stops or seals that separate the chamber from drive components, and the ram contact faces.",
    "inspectionNeed": "Inspection emphasis is on monitoring trends, conceptually reviewing chamber temperature and drive-load readings on a panel, watching for seal integrity indicators, and noting any sign of contamination, with personnel observing instrumentation and collecting samples at a safe distance from the enclosed chamber.",
    "sparePartsCategory": "Spare-part categories include rotor and chamber wear components, dust-stop seals, temperature sensors, and cooling-circuit elements.",
    "downtimeRisk": "Downtime risk is high in consequence because the mixer is often a line bottleneck, so degraded seals or worn surfaces that force an unplanned stoppage can hold up everything downstream.",
    "qualityImpact": "Quality impact is central: wear, leakage, or contamination in the mixing chamber can undermine dispersion and batch-to-batch consistency, making mixer condition one of the strongest determinants of uniform material entering the rest of the line.",
    "healthBadge": "ready"
  },
  {
    "stationId": "two-roll-mill",
    "maintenanceConcern": "The two-roll mill's upkeep concept revolves around the condition and alignment of its two rolls and the systems that control their temperature and spacing, with the recurring theme being roll-surface integrity and gap consistency, treated purely conceptually.",
    "wearPoint": "Wear points are conceptually the roll surfaces themselves, the bearings supporting the rolls, and the drive and gap-adjustment hardware, all of which can degrade with sustained load.",
    "inspectionNeed": "The inspection need is framed conceptually around verifying that roll surfaces and bearing condition appear sound and that temperature readings are stable, with operators reading the control panel and a tablet and observing the machine from a guarded, safe position well clear of the nip region.",
    "sparePartsCategory": "Spare-part categories include roll bearings, gap-adjustment components, temperature-control parts, and roll-surface refurbishment items.",
    "downtimeRisk": "Downtime risk is moderate to high, since the mill is often part of the critical processing path and bearing or surface problems can require it to be taken out of service.",
    "qualityImpact": "Quality impact is meaningful: uneven roll surfaces or inconsistent gap can affect how uniformly material is worked, which can carry through to thickness and homogeneity in later sheet-forming, so roll condition is a recognized quality lever.",
    "healthBadge": "ready"
  },
  {
    "stationId": "calender",
    "maintenanceConcern": "The calender concept is about producing a continuous sheet to a target thickness and finish, so its upkeep theme strongly centers on the precision of the calender rolls and their drives, with surface condition and roll parallelism being the dominant concerns considered conceptually.",
    "wearPoint": "Wear points are conceptually the polished roll surfaces, the roll bearings, and the bearing housings or adjustment mechanisms that govern roll positioning under load.",
    "inspectionNeed": "Inspection emphasis is conceptual surface-quality and alignment monitoring, including reviewing thickness-gauge trends and roll-surface condition reports on a panel, with personnel reading instrumentation and inspecting sample sheet away from the rotating rolls.",
    "sparePartsCategory": "Spare-part categories include precision roll bearings, roll-surface refinishing items, thickness-gauge components, and drive elements.",
    "downtimeRisk": "Downtime risk is high in significance because the calender often defines line throughput and a surface or bearing fault can halt continuous sheet production.",
    "qualityImpact": "Quality impact is among the most direct on the line: roll-surface condition and parallelism translate almost immediately into sheet finish and gauge uniformity, so calender roll upkeep is a primary driver of visible product quality.",
    "healthBadge": "ready"
  },
  {
    "stationId": "vulcanization",
    "maintenanceConcern": "The vulcanization concept concerns delivering uniform heat across the cure chamber, so its upkeep theme centers on the integrity of heating elements, chamber insulation, seals, and the instrumentation that confirms temperature uniformity, all framed conceptually and not as operating settings.",
    "wearPoint": "Wear points are conceptually the heating elements, chamber door and seal surfaces, insulation, and the temperature sensors whose drift can mislead uniformity readings.",
    "inspectionNeed": "Inspection need is framed around verifying temperature-uniformity instrumentation and sensor calibration, conceptually reviewing chamber temperature maps and sensor checks on a panel, with operators monitoring readouts and status indicators from a safe distance from the hot chamber.",
    "sparePartsCategory": "Spare-part categories include heating elements, chamber seals and gaskets, insulation components, and calibrated temperature sensors.",
    "downtimeRisk": "Downtime risk is high in consequence because cure is often a gating step, and a heating or sensor fault that compromises uniformity can stop the chamber from being used until confidence is restored.",
    "qualityImpact": "Quality impact is fundamental: non-uniform chamber conditions can produce uneven cure state across the product, so the reliability and calibration of the cure-chamber heating and sensing system is one of the most decisive quality factors on the line.",
    "healthBadge": "needs-review"
  },
  {
    "stationId": "cooling",
    "maintenanceConcern": "The cooling station's concept is about removing heat in a controlled, even way after cure, so its upkeep theme broadly concerns the cooling medium circuits, conveyance surfaces, and the sensors that confirm the product reaches a stable temperature, considered conceptually.",
    "wearPoint": "Wear points are conceptually the cooling-circuit pumps and lines, conveyor or roller contact surfaces that carry the sheet, and temperature sensors subject to drift.",
    "inspectionNeed": "Inspection emphasis is conceptual condition and temperature monitoring, including reviewing coolant flow and outlet-temperature readings on a panel and checking conveyance surfaces for wear, with personnel reading instrumentation rather than handling moving equipment.",
    "sparePartsCategory": "Spare-part categories include circulation pump components, hoses and seals, conveyor rollers or belts, and temperature sensors.",
    "downtimeRisk": "Downtime risk is generally moderate, since cooling problems may slow the line or require buffering but are less likely than mixer or cure faults to force an immediate full stop.",
    "qualityImpact": "Quality impact is real though more subtle: uneven or insufficient cooling can leave residual heat that affects dimensional stability and handling of the sheet, so steady cooling supports consistent downstream finishing.",
    "healthBadge": "ready"
  },
  {
    "stationId": "trimming-slitting",
    "maintenanceConcern": "The trimming and slitting concept is about cutting the sheet to width and removing edges cleanly, so its upkeep theme centers strongly on cutting-tool condition and the alignment of slitting and edge-guiding systems, treated conceptually.",
    "wearPoint": "Wear points are conceptually the cutting blades and their edges, the blade mounts and bearings, and the web-guiding or tensioning components that keep the cut path straight.",
    "inspectionNeed": "Inspection need is framed around verifying blade sharpness and alignment conceptually, including reviewing edge-quality samples and cut-position readings, with operators inspecting collected samples and reading status panels rather than reaching toward active cutting elements.",
    "sparePartsCategory": "Spare-part categories include replacement cutting blades, blade bearings and mounts, web-guide components, and tensioning parts.",
    "downtimeRisk": "Downtime risk is moderate, since a dull or misaligned blade can usually be scheduled for replacement, though an unexpected failure may briefly interrupt the finishing flow.",
    "qualityImpact": "Quality impact is direct on the visible product edge: cutting-blade condition governs edge quality and width accuracy, so blade upkeep is the clearest quality lever at this station.",
    "healthBadge": "ready"
  },
  {
    "stationId": "inspection",
    "maintenanceConcern": "The inspection station's concept is about reliable measurement and detection, so its upkeep theme is dominated by keeping gauges, testers, vision systems, and lighting in a verified, calibrated state, all framed conceptually.",
    "wearPoint": "Wear points are conceptually the measurement sensors and probes, vision-system optics and lighting that can degrade or soil over time, and any sample-handling contact surfaces.",
    "inspectionNeed": "The central inspection need is self-referential calibration assurance: conceptually verifying gauges and testers against reference standards and confirming vision and lighting performance, with personnel reading results on tablets and reviewing calibration records.",
    "sparePartsCategory": "Spare-part categories include measurement sensors and probes, vision-system optics and lighting, reference calibration standards, and display components.",
    "downtimeRisk": "Downtime risk is generally low in direct line terms, but an uncalibrated tester can create a quality-confidence gap that may pause release decisions until measurement trust is restored.",
    "qualityImpact": "Quality impact is pivotal in an assurance sense: because this station decides what passes, drift in its gauges and testers can let nonconformities through or reject good product, so calibration discipline here protects the integrity of every quality judgment.",
    "healthBadge": "ready"
  },
  {
    "stationId": "finished-roll",
    "maintenanceConcern": "The finished-roll station's concept is about winding, supporting, and staging completed product for storage and dispatch, so its upkeep theme broadly concerns the winding mechanism, core supports, and handling aids that protect the finished roll, considered conceptually.",
    "wearPoint": "Wear points are conceptually the winding-shaft bearings and tensioning components, the roll-support cradles or rollers, and the wheels or surfaces of any handling carts used to move finished rolls.",
    "inspectionNeed": "Inspection need is framed around verifying smooth, even winding and sound support condition, conceptually reviewing tension readings and roll-surface appearance, with operators observing the wound roll, reading status panels, and updating records at a safe distance.",
    "sparePartsCategory": "Spare-part categories include winding-shaft bearings, tensioning components, support rollers or cradles, and handling-cart wheels.",
    "downtimeRisk": "Downtime risk is generally low to moderate, since winding or handling issues tend to slow dispatch and staging rather than halt upstream processing.",
    "qualityImpact": "Quality impact is mostly about preservation: uneven winding tension or damaged supports can mark or deform the finished sheet, so steady winding and careful handling protect the quality already built into the product.",
    "healthBadge": "ready"
  }
];
export const maintenanceByStation: Partial<Record<StationId, MaintenanceConcept>> =
  Object.fromEntries(maintenanceConcepts.map((m) => [m.stationId, m]));
