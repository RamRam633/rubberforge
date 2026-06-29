import type { SupplierCategory } from "@/types/factoryIntel";

export const supplierCategories: SupplierCategory[] = [
  {
    "id": "rubber-mixing-oem",
    "name": "Rubber Mixing Equipment OEMs",
    "equipmentCategory": "mixing",
    "whatTheySell": "Suppliers in this category commonly build internal batch mixers (intermeshing or tangential rotor types), continuous mixers, and the associated two-roll or open mills used to incorporate fillers, oils, and curatives into a rubber masterbatch. Offerings often include the mixer body, rotors, dust stops, ram/hydraulic system, drive train, temperature-control circuits, and the downstream drop mill or extruder/dump system. Many also supply weigh/feed systems and batch-off cooling lines as an integrated package. Scope varies widely, so the exact configuration requires verification before sourcing.",
    "capabilitiesToAsk": [
      "Rotor geometry options offered (intermeshing vs tangential) and the chamber free-volume range available, plus how they typically match chamber size to your batch mass and target throughput",
      "Materials of construction and wear-protection options for rotors, chamber walls, and dust stops, since these commonly drive maintenance interval and contamination risk",
      "Temperature-control approach (drilled vs cast cooling passages, water circuit design) and the instrumentation provided to monitor mix energy/temperature, noting actual operating setpoints are yours to develop",
      "In-house capability for rebuilds, rotor re-tipping, and chamber relining versus reliance on third parties"
    ],
    "buyerPrep": [
      "Your typical and peak batch sizes, the polymer families and filler loadings you expect to run, and your target batches-per-hour, so the supplier can sanity-check chamber sizing",
      "Available factory floor area, ceiling height, and the mezzanine/charging-deck layout, since internal mixers are tall and need overhead feed access",
      "Your utility envelope: installed electrical capacity, cooling-water flow and temperature, and compressed-air availability"
    ],
    "integrationQuestions": [
      "How does the mixer hand off to downstream equipment (drop mill, batch-off, extruder) and what mechanical and signal interfaces are provided at that boundary",
      "What dust-extraction connection points exist on the mixer and dump area, so the dust-collection supplier can be coordinated",
      "Can batch data (energy, temperature, time, ram position) be exported to a plant historian or MES, and via what protocol"
    ],
    "sparesService": "Mixers are long-life capital assets, so it commonly matters whether the OEM supports multi-decade spare availability, planned rotor/chamber rebuild programs, and field service for alignment and commissioning. Ask about recommended wear-part stocking and typical lead times, and treat any quoted interval as requiring verification.",
    "controlsAutomation": "These lines typically include a PLC-based batch controller managing charge sequence, ram, mixing time/energy targets, and discharge. Discuss whether recipe handling, batch logging, and interlocks are open and documented, and how the control system would integrate with a plant-wide automation layer rather than remaining a closed island.",
    "vendorExamples": []
  },
  {
    "id": "calender-line-mfr",
    "name": "Calender Line Manufacturers",
    "equipmentCategory": "sheeting-forming",
    "whatTheySell": "Manufacturers in this category commonly supply multi-roll calenders (two, three, or four roll, in I, L, Z, or S configurations) used to sheet rubber compound to a controlled thickness, and to skim or coat fabric and cord for reinforced products. A line often bundles the roll stack, roll-bending/crossing gear for gauge control, drive and gearbox, feed/let-off and wind-up stations, cooling drums, and an inspection/take-off section. Sheet-handling, fabric tension control, and edge trimming are frequently included. Configuration scope requires verification before sourcing.",
    "capabilitiesToAsk": [
      "Roll face width and diameter range offered, and the gauge-control features provided (roll bending, roll crossing, profile sensing), since these commonly govern thickness uniformity across the web",
      "Roll surface and crown options and the roll-material/hardness choices, plus their approach to roll grinding and refurbishment",
      "Drive and tension-control architecture for let-off, calender, and wind-up, especially for fabric/cord skimming where tension control matters",
      "Whether they provide in-line thickness/gauge measurement and how that data feeds back to gap control, noting actual setpoints remain yours"
    ],
    "buyerPrep": [
      "The products you intend to run (gum sheet, friction/skim coating, fabric ply) with target width and thickness ranges and tolerance expectations",
      "Your upstream feed method (warm-up mill, extruder, strip feed) and downstream process (curing, ply building, cutting) so the line can be specified end to end",
      "Floor length available, since calender lines with let-off and wind-up can be long, plus crane access for roll changes and utility/cooling capacity"
    ],
    "integrationQuestions": [
      "How does the calender accept feed from the upstream warm-up mill or extruder, and what buffering or festoon is provided between stages",
      "What is the take-off interface to downstream cutting, ply-building, or curing, and how is line speed synchronized across sections",
      "Can gauge, speed, and tension data be exported to plant systems for SPC, and through what protocol"
    ],
    "sparesService": "Calenders are precision, long-life machines, so it commonly matters whether the maker supports roll regrinding/recrowning, bearing and bending-system rebuilds, and drive spares over the equipment life. Ask about wear-part stocking guidance and field-service availability for alignment, and verify any lead-time or interval figures.",
    "controlsAutomation": "Lines in this category typically use PLC plus drive control to coordinate multi-section speed, tension, and gauge, often with an HMI for product setups. Discuss whether stored setups, gauge-feedback loops, and line-section interlocks are documented and open, and how the controls would tie into a wider plant automation and data-collection layer.",
    "vendorExamples": []
  },
  {
    "id": "autoclave-curing-supplier",
    "name": "Autoclave and Curing System Suppliers",
    "equipmentCategory": "curing",
    "whatTheySell": "Suppliers in this category commonly provide pressure vessels and curing systems used to vulcanize rubber under heat and pressure, including steam, hot-air, or steam/air autoclaves, plus the doors, trolleys/racks, and loading systems. Packages often include the vessel, the heating and pressurization circuits, safety relief and interlock hardware, control instrumentation, and sometimes vacuum capability. Some also supply continuous or rotary curing equipment for specific product forms. Vessel design and code scope requires verification before sourcing, and pressure vessels are commonly subject to jurisdictional code requirements that you must confirm with qualified parties.",
    "capabilitiesToAsk": [
      "Vessel size range, door type and safety-interlock design, and the heating/pressurization media options (steam, hot air, steam-air) they support",
      "Their approach to pressure-vessel code compliance and documentation, recognizing that applicable codes and inspections must be confirmed with an accredited inspector/authority for your jurisdiction and are not guaranteed by any example reference",
      "Instrumentation and recording provided for cure cycles (temperature/pressure logging) for traceability, while actual cure schedules remain yours to develop and validate",
      "Loading/handling options (trolley systems, racks) and how the vessel throughput matches your batch cadence"
    ],
    "buyerPrep": [
      "The product geometries and load patterns you plan to cure, your required usable vessel dimensions, and expected loads per cycle",
      "Your available curing media: steam supply pressure/quality, hot-air heating source, compressed air, and cooling, since these drive vessel and utility design",
      "Site constraints for a pressure vessel: floor loading, clearances, ventilation, and the jurisdictional inspection/registration steps you will need to confirm independently"
    ],
    "integrationQuestions": [
      "How do parts enter and exit the autoclave (trolley, conveyor) and how does that interface with upstream forming/building and downstream finishing",
      "What cure-cycle data can be exported for traceability and via what protocol, so it can join a plant quality record",
      "How are safety interlocks (door, pressure, temperature) implemented and how do they coordinate with any plant-wide safety and alarm system"
    ],
    "sparesService": "Pressure vessels are long-life assets with safety-critical components, so it commonly matters whether the supplier supports periodic inspection support, door-seal and gasket spares, relief-device and instrument calibration, and field service. Confirm that any inspection or recertification interval is verified with an accredited authority, not assumed from a quote.",
    "controlsAutomation": "Curing systems typically include a controller that sequences heat-up, hold, and cool-down with safety interlocks and cycle recording. Discuss whether cure-cycle programs and logs are documented and exportable, and how alarms and interlocks would integrate with plant SCADA, while keeping actual cure recipes under your own validation.",
    "vendorExamples": []
  },
  {
    "id": "hydraulic-press-mfr",
    "name": "Hydraulic and Curing Press Manufacturers",
    "equipmentCategory": "molding",
    "whatTheySell": "Manufacturers in this category commonly build hydraulic presses used for compression, transfer, and injection molding and vulcanization of rubber parts, in single or multi-daylight and multi-station configurations. A press package often includes the frame, platens, heating (electric or steam) and platen-temperature control, the hydraulic power unit, clamp and ejection systems, safety guarding, and the control system. Injection presses add the injection unit and screw/plunger assembly. Tonnage, daylight, and platen options vary widely and require verification before sourcing.",
    "capabilitiesToAsk": [
      "Clamp tonnage range, platen size and number of daylights/stations offered, and the platen-heating method and zone control provided, noting your actual setpoints remain yours to develop",
      "Process types supported (compression, transfer, injection) and the mold-mounting, ejection, and demolding-aid options available",
      "Hydraulic system design, pressure/parallelism control, and the safety guarding and interlock approach for operator protection",
      "In-house capability for tooling interface design, trials, and acceptance testing of the press before shipment"
    ],
    "buyerPrep": [
      "Representative part families, projected annual volumes, and approximate mold sizes/weights so tonnage, daylight, and platen size can be specified",
      "Your molding process intent (compression vs transfer vs injection) and any inserts/preform handling needs",
      "Utility availability (electrical capacity, steam if used, cooling water, compressed air) and floor loading/headroom for press installation and mold changes"
    ],
    "integrationQuestions": [
      "How are molds loaded/changed and can the press accept quick-mold-change or automated part-removal interfaces from a handling integrator",
      "What process data (platen temperature, pressure, cycle stages) can be exported for traceability and via what protocol",
      "How do press safety interlocks and emergency stops coordinate with a cell-level or plant-level safety architecture"
    ],
    "sparesService": "Presses are durable capital equipment, so it commonly matters whether the maker supports seal kits, valve/pump spares, heater and thermocouple replacements, platen reconditioning, and field service for commissioning. Ask about recommended spare stocking and typical lead times, and verify any quoted figures.",
    "controlsAutomation": "Curing presses typically run a PLC-based controller sequencing clamp, heat, cure timer, and demold with recipe storage per mold. Discuss whether setups and cycle logs are documented and exportable, and how the press controller would integrate with cell automation (robots, handling) and a plant data layer, while cure schedules stay under your own validation.",
    "vendorExamples": []
  },
  {
    "id": "rubber-cutting-supplier",
    "name": "Rubber Cutting and Slitting Equipment Suppliers",
    "equipmentCategory": "cutting-finishing",
    "whatTheySell": "Suppliers in this category commonly provide equipment to cut, slit, skive, punch, or trim rubber stock and finished parts, including bias and straight cutters for sheet and fabric-reinforced material, slitter rewinders, cut-to-length lines, die-cutting/clicker presses, waterjet or knife cutting tables, and deflashing/trimming systems. Packages may include the cutting station, feed/registration, scrap handling, and stacking or take-off. Cooling or cryogenic deflashing systems for molded parts also fall in this category. Configuration scope requires verification before sourcing.",
    "capabilitiesToAsk": [
      "Cutting methods offered (rotary/guillotine knife, die/clicker, waterjet, cryogenic deflash) and the material width, thickness, and reinforcement types each handles",
      "Feed, registration, and length/width accuracy features, plus blade or die life expectations and the ease of changeover between products",
      "Scrap and trim handling, dust/particulate capture at the cut, and operator-guarding for cutting hazards",
      "For deflashing systems, the handling and media approach, recognizing actual process parameters remain yours to develop"
    ],
    "buyerPrep": [
      "The stock and part forms you will cut (gum sheet, fabric ply, extruded profile, molded parts), with width/thickness ranges and tolerance and edge-quality expectations",
      "Target throughput and batch/changeover frequency, plus whether cuts are straight, bias, profiled, or die-shaped",
      "Upstream source of material (calender, extruder, mold) and downstream destination (building, packing) so the cutting station fits the flow, plus utility and floor-space limits"
    ],
    "integrationQuestions": [
      "How does the cutter receive material from upstream (roll, festoon, conveyor) and synchronize speed or registration with it",
      "What is the take-off/stacking interface to downstream building, inspection, or packing, and can a handling integrator tie into it",
      "Can cut counts, lengths, and reject data be exported to plant systems, and via what protocol"
    ],
    "sparesService": "Cutting equipment relies on consumable blades, dies, and belts, so it commonly matters whether the supplier supports blade resharpening/replacement, die maintenance, and quick spares. Ask about consumable life guidance, sharpening service, and lead times, and treat any quoted life as requiring verification for your materials.",
    "controlsAutomation": "These systems typically use PLC/HMI control for length, registration, and cut sequencing, sometimes with servo feed for accuracy. Discuss whether cut programs and counts are stored and exportable, how guarding interlocks behave, and how the station would integrate with line synchronization and plant data collection.",
    "vendorExamples": []
  },
  {
    "id": "lab-testing-supplier",
    "name": "Rubber Lab and Test Instrument Suppliers",
    "equipmentCategory": "inspection-testing",
    "whatTheySell": "Suppliers in this category commonly provide laboratory and quality instruments used to characterize rubber compounds and finished parts, such as cure meters (moving-die and oscillating-disc rheometers), Mooney viscometers, hardness durometers, tensile/elongation universal testers, density and specific-gravity equipment, rebound/abrasion testers, aging ovens, and dispersion or analytical instruments. Packages often include the instrument, fixtures, calibration tooling, and software for data capture. Scope and method coverage require verification before sourcing.",
    "capabilitiesToAsk": [
      "Which property tests each instrument supports and the published method families it can run, while noting that you must use the official standard and an accredited/qualified lab for actual testing and acceptance decisions",
      "Calibration approach, traceability of calibration, and the recommended calibration interval, recognizing these require verification with a qualified calibration provider",
      "Data-capture software, export formats, and the ability to feed results into SPC or a LIMS",
      "Fixture and sample-prep tooling included, and operator-training or method-setup support offered"
    ],
    "buyerPrep": [
      "The properties you need to monitor for incoming materials, in-process compound, and finished parts, mapped to the relevant published methods you intend to follow",
      "Your expected sample volume and turnaround needs, to size instrument count and any automation/autosampling",
      "Lab space, environmental controls (temperature/humidity), and utilities, plus who will own calibration and method validation internally"
    ],
    "integrationQuestions": [
      "Can instrument results be exported to a LIMS, SPC package, or plant historian, and through what file formats or protocols",
      "How are samples identified and linked to production batches so results are traceable back to a mix or molding lot",
      "Does the software support user method templates and audit-friendly records, while final acceptance still rests on the official standard and a qualified lab"
    ],
    "sparesService": "Test instruments need ongoing calibration and consumables, so it commonly matters whether the supplier offers calibration service, dies/load-cell/sensor spares, and software support. Ask about calibration-service availability and consumable lead times, and confirm that calibration traceability is verified with a qualified provider rather than assumed.",
    "controlsAutomation": "Modern lab instruments typically run software-driven test sequences with electronic data capture. Discuss whether methods, results, and audit trails are exportable and whether the system can integrate with a LIMS/SPC environment, keeping in mind that test method selection and acceptance criteria must follow the official standard and accredited-lab practice.",
    "vendorExamples": []
  },
  {
    "id": "dust-collection-supplier",
    "name": "Dust Collection and Air-Handling Suppliers",
    "equipmentCategory": "raw-material-handling",
    "whatTheySell": "Suppliers in this category commonly provide dust, fume, and process-air systems for rubber plants, including baghouse and cartridge dust collectors, ductwork and capture hoods at mixers, mills, weigh stations, and cutting points, fume extraction for curing/molding areas, and fans, dampers, and filter media. Packages often include collector, fan, filter cleaning system, hoppers/scrap return, and instrumentation. Carbon-black and filler handling areas commonly demand particular attention. System design and any combustible-dust considerations require verification before sourcing with qualified safety and engineering parties.",
    "capabilitiesToAsk": [
      "Capture-hood and ductwork design approach for your specific dust/fume sources (mixer charge, weigh, mill, cut points, cure fume) and how airflow is sized to each pickup",
      "Filter media and cleaning-system options, expected filter life, and emission/return-air handling, while any compliance threshold must be verified with the official requirements and a qualified party",
      "Their approach to combustible-dust and deflagration considerations for filler/carbon-black handling, recognizing these must be confirmed with a qualified safety engineer and applicable standards, not assumed",
      "Maintenance access for filter changes and the dust/scrap disposal or return arrangement"
    ],
    "buyerPrep": [
      "A list of dust and fume sources by location (mixers, mills, weigh, cutting, curing) with rough generation and the materials involved (fillers, carbon black, oils)",
      "Your facility layout and available routing for ductwork and the location for the collector and discharge",
      "Any applicable emission, ventilation, and combustible-dust requirements you must confirm independently with qualified parties for your jurisdiction"
    ],
    "integrationQuestions": [
      "How do capture hoods physically interface with mixers, mills, and cutting stations supplied by other OEMs, and who owns the duct connection points",
      "Can collector status, differential pressure, and fan/alarm signals be tied into plant SCADA, and via what protocol",
      "How does collected material get returned or disposed, and does that interface with material-handling equipment"
    ],
    "sparesService": "Collectors rely on filter media and cleaning components, so it commonly matters whether the supplier stocks filters, valves, and fan spares and offers filter-change and inspection service. Ask about filter-life guidance and lead times, and treat any emission or safety figure as requiring verification with the official requirements.",
    "controlsAutomation": "Dust systems typically include controls for fan speed, pulse/cleaning cycles, and differential-pressure alarms. Discuss whether status and alarms integrate with plant SCADA and how interlocks coordinate with the equipment being ventilated, while combustible-dust safeguards remain subject to qualified safety review.",
    "vendorExamples": []
  },
  {
    "id": "material-handling-integrator",
    "name": "Material Handling and Conveying Integrators",
    "equipmentCategory": "packaging-shipping",
    "whatTheySell": "Integrators in this category commonly design and supply systems to move raw materials, in-process stock, and finished goods through a rubber plant, including bulk filler/oil storage and metering, weigh and batching systems feeding the mixer, conveyors and AGVs, pallet and tote handling, robotic part removal at presses, and end-of-line palletizing/stacking and packing. They typically integrate components from multiple OEMs into a coordinated flow rather than building every machine themselves. Scope and degree of automation require verification before sourcing.",
    "capabilitiesToAsk": [
      "Range of handling supported (bulk powder/oil metering, festoon/strip conveying, finished-part robotics, palletizing) and which they build versus integrate from third parties",
      "Their experience coordinating interfaces between mixers, calenders, presses, and packing, and how they manage overall line control and synchronization",
      "Weigh/batch accuracy and traceability features for material feed to mixing, recognizing recipe values remain yours to develop",
      "Safety design for conveyors and robots (guarding, light curtains, e-stops) and how they validate a safe integrated cell"
    ],
    "buyerPrep": [
      "A material flow map: what moves from receiving through mixing, forming, curing, finishing, and shipping, with rough volumes and weights at each step",
      "The OEM equipment already selected or planned, so the integrator knows the interfaces it must connect",
      "Facility layout, aisle and door constraints, floor loading, and your degree-of-automation goal and budget envelope"
    ],
    "integrationQuestions": [
      "What mechanical and signal interfaces are needed at each OEM machine (mixer, calender, press, cutter) and who owns each handshake",
      "How is overall flow coordinated: is there a line/cell controller, and how does it talk to individual machine PLCs and to a plant MES",
      "How is material and part traceability maintained across handoffs so a finished item links back to its mix and cure records"
    ],
    "sparesService": "Handling systems combine conveyors, drives, robots, and controls, so it commonly matters whether the integrator supports spares across that mix, offers service for re-teaching robots and tuning drives, and can support the system as a whole. Ask about spare-stocking guidance and response times, and verify any availability claims.",
    "controlsAutomation": "Integrators in this category typically own cell- and line-level control and the data layer tying machines together, often via PLC plus a SCADA/MES interface. Discuss whether the integration architecture is open and documented, how it coordinates with each OEM's native controls, and how production and traceability data reach plant systems.",
    "vendorExamples": []
  },
  {
    "id": "controls-automation-integrator",
    "name": "Controls and Automation Integrators",
    "equipmentCategory": "inspection-testing",
    "whatTheySell": "Integrators in this category commonly provide the plant-wide control, data, and automation layer that ties individual machines together, including PLC and HMI programming, SCADA, MES/historian integration, recipe and batch management, machine-to-machine interlocks, networking, and traceability/reporting. They typically work above the individual OEM controllers, standardizing data collection, alarms, and operator interfaces across mixing, forming, curing, and finishing. Some also retrofit or modernize controls on existing machines. Scope and architecture require verification before sourcing.",
    "capabilitiesToAsk": [
      "Experience with the control platforms and protocols used by your chosen OEM machines, and their approach to a standardized plant data model across mixing, calendering, curing, and molding",
      "Recipe/batch management and traceability design, so a finished part links to its mix, cure, and test records, while the actual recipe values stay under your control",
      "SCADA/MES/historian integration capability and reporting, including SPC dashboards fed by lab and process data",
      "Their approach to control-system safety, change management, documentation, and cybersecurity for plant networks"
    ],
    "buyerPrep": [
      "A list of the machines and their native controllers and protocols, plus what data each can expose, so the integrator can plan the data layer",
      "Your traceability and reporting requirements: what must be linked, recorded, and retained from material to finished goods",
      "Your IT/OT environment, network constraints, and any internal standards the integration must follow"
    ],
    "integrationQuestions": [
      "How will the layer connect to each OEM controller (protocol, tags) and who resolves gaps where a machine exposes limited data",
      "Where does recipe and setpoint ownership sit, ensuring the plant retains control of its own process values rather than embedding them opaquely",
      "How is end-to-end traceability assembled across machines, and how are time sync, batch identity, and reject handling managed"
    ],
    "sparesService": "Control systems need ongoing support, so it commonly matters whether the integrator provides documented code and backups, remote and on-site support, spare controllers/IO guidance, and a path for future modifications. Ask about support-response terms and how source/configuration is handed over, and verify any availability commitments.",
    "controlsAutomation": "This category is itself the controls-and-automation backbone, so the central questions are openness, documentation, and ownership: confirm that PLC/SCADA code, tag databases, and recipes are documented and handed to you, that the architecture avoids vendor lock-in where practical, and that it cleanly federates each machine's native controls into one plant view.",
    "vendorExamples": []
  }
];

export const supplierCategoriesById: Record<string, SupplierCategory> = Object.fromEntries(
  supplierCategories.map((s) => [s.id, s]),
);
