import type { FactoryUtility } from "@/types/factoryIntel";

export const factoryUtilities: FactoryUtility[] = [
  {
    "id": "compressed-air",
    "name": "Compressed Air System",
    "whatItIs": "A plant-wide system that draws in ambient air, compresses it, then dries, filters, and stores it before distributing it through piping to points of use. Typically built around one or more air compressors (rotary screw units are common in this size of plant), a receiver tank, a refrigerated or desiccant dryer, coalescing filters, and a regulated distribution loop. Air quality (dryness, oil content, particulate) is usually matched to the most demanding consumer rather than the average.",
    "whatItSupports": "Pneumatic actuators, cylinders, and clamps on mixing, milling, and calendering equipment; pneumatic conveying and blow-off; air-operated diaphragm pumps; tyre or bladder inflation in some curing setups; and shop tools in maintenance. Instrument-grade dry air is often segregated for control valves and sensors, since moisture and oil can foul pneumatic controls.",
    "relatedStations": [
      "internal-mixer",
      "two-roll-mill",
      "vulcanization"
    ],
    "risks": [
      "Undersized capacity or excessive leakage commonly causes pressure droop that disrupts pneumatic actuation; leak rates of a meaningful fraction of output are common in older systems and typically warrant a leak survey.",
      "Moisture or oil carryover can foul pneumatic controls and contaminate product surfaces; dryer dew point and filter condition often require periodic verification.",
      "Compressed air is one of the most energy-intensive utilities per unit of useful work, so oversizing and poor part-load control may drive high operating cost."
    ],
    "sourcingNote": "When sizing, demand is typically estimated from a point-of-use audit (flow, pressure, duty cycle) plus a leakage and growth allowance rather than nameplate alone. Vendor and standard references such as ISO 8573 for air-purity classes are illustrative examples only and require verification before sourcing; confirm actual purity needs with the equipment makers and use the official standard and a qualified test for any air-quality acceptance."
  },
  {
    "id": "process-heat",
    "name": "Process Heat / Steam & Thermal Fluid System",
    "whatItIs": "The system that generates and distributes the elevated-temperature heating medium used across the plant, commonly saturated steam from a packaged boiler, hot water, or a circulating thermal-oil (heat-transfer fluid) loop. It typically includes the heat source, feedwater or fluid treatment, distribution piping, traps or expansion provisions, and condensate or return recovery. Rubber plants often favour thermal fluid where higher, more uniform temperatures are wanted without high-pressure steam.",
    "whatItSupports": "Platen and mould heating for vulcanization, heated rolls on calenders and some mills, jacketed equipment, and space or feedstock pre-conditioning. The curing step is usually the dominant heat consumer, so reliability and temperature uniformity of this system directly affect cure quality.",
    "relatedStations": [
      "calender",
      "vulcanization",
      "two-roll-mill"
    ],
    "risks": [
      "Loss of heat supply or poor temperature uniformity can cause under-cure or scorch; redundancy and control tuning are commonly reviewed for the curing line.",
      "Steam systems require feedwater treatment and trap maintenance; neglected traps and scale often waste energy and may cause water hammer.",
      "Thermal fluids degrade and can become a fire hazard if overheated or leaked onto hot surfaces; fluid condition and leak management typically require periodic review."
    ],
    "sourcingNote": "Heat load is typically derived from a process energy balance (mass throughput, target temperatures, cycle counts) with margin, not from a single peak figure. References to pressure-vessel and boiler codes or thermal-fluid handling guidance are illustrative examples only and require verification before sourcing; engage a qualified boiler or thermal-system supplier and use the official code and an accredited inspector for any pressure equipment."
  },
  {
    "id": "cooling-water",
    "name": "Cooling Water System",
    "whatItIs": "A closed or open recirculating loop that removes heat from process equipment, commonly using a cooling tower, evaporative cooler, or chiller with pumps, a basin or tank, heat exchangers, and treated circulating water. Many rubber plants run a tempered-water loop so equipment can be cooled to a controlled temperature rather than chilled outright, since over-cooling can be as undesirable as overheating.",
    "whatItSupports": "Mixer and mill roll cooling to manage compound temperature during shear-heavy steps, calender roll temperature control, post-cure cooling, and cooling of hydraulics, compressors, and other utilities. The internal mixer and mills are often the largest heat rejecters because mechanical work converts to heat in the rubber.",
    "relatedStations": [
      "internal-mixer",
      "two-roll-mill",
      "calender",
      "cooling"
    ],
    "risks": [
      "Inadequate flow or fouled heat exchangers can let compound temperatures rise, risking premature crosslinking (scorch) during mixing and milling.",
      "Open-loop and tower water needs treatment against scale, corrosion, and biological growth (including Legionella in evaporative systems); water chemistry typically requires ongoing monitoring.",
      "Pump or tower failure removes cooling from multiple stations at once, so single points of failure and standby capacity are commonly reviewed."
    ],
    "sourcingNote": "Cooling duty is typically sized from the combined heat rejection of connected equipment plus ambient and water-quality conditions, not from one machine. References to cooling-tower water-treatment guidance or Legionella control practices are illustrative examples only and require verification before sourcing; confirm rejection loads with equipment makers and use the official guidance and a qualified water-treatment provider for any treatment program."
  },
  {
    "id": "electrical-power",
    "name": "Electrical Power Distribution",
    "whatItIs": "The system that takes incoming utility power and steps, distributes, protects, and conditions it for the plant: transformers, main and sub-distribution switchgear, motor control centres, variable-frequency drives, panelboards, grounding, and protective devices. Rubber plants are motor-heavy (large mixer and mill drives), so power factor, harmonics, and starting current are often significant design considerations.",
    "whatItSupports": "Essentially everything with a motor, heater, or controller: the internal mixer and mill drives, calender and conveyor drives, curing-press heaters and hydraulics, ventilation, pumps, lighting, instrumentation, and the control systems for every station. Critical loads (controls, safety systems, emergency lighting) are often on separate or backed-up circuits.",
    "relatedStations": [],
    "risks": [
      "Large drive starts and nonlinear loads can cause voltage sag and harmonic distortion that disturb sensitive controls; power-quality assessment is commonly warranted.",
      "Arc-flash and shock hazards require proper protection coordination, labelling, and safe-work practices; these typically require review by a qualified electrical engineer.",
      "Loss of power mid-cure or mid-batch can scrap product and create unsafe stored-energy conditions, so orderly shutdown and selected backup are often planned."
    ],
    "sourcingNote": "Connected and demand loads are typically built from a load schedule (motor ratings, duty cycles, diversity) with growth allowance, not summed nameplates alone. References to electrical-installation and arc-flash standards are illustrative examples only and require verification before sourcing; engage a licensed electrical engineer and use the official code and a qualified study (load flow, short-circuit, arc-flash) for any actual design."
  },
  {
    "id": "ventilation-dust",
    "name": "Ventilation & Dust/Fume Collection",
    "whatItIs": "The combined system that supplies fresh air, exhausts contaminated air, and captures airborne dust and fumes at the source. It commonly includes local exhaust hoods at the weighing and mixing areas, dust collectors (baghouse or cartridge type) for powder handling, fume extraction over curing where volatiles and smoke can be released, make-up air units, and general building ventilation.",
    "whatItSupports": "Powder and filler weighing and charging (carbon black and other fine powders are notably dusty), the internal mixer charge area, and the vulcanization area where heat and cure fumes are generated. Good capture at these points typically protects both worker health and housekeeping, and reduces cross-contamination of compounds.",
    "relatedStations": [
      "weighing-station",
      "internal-mixer",
      "vulcanization",
      "raw-material-room"
    ],
    "risks": [
      "Inadequate capture of fine powders and cure fumes may create occupational exposure and housekeeping problems; capture velocities and filter integrity commonly require periodic verification.",
      "Some rubber dusts and accumulations can be combustible, so collector design and explosion protection often need expert review.",
      "Recirculating poorly filtered air can spread contamination; filter loading and make-up air balance typically require monitoring."
    ],
    "sourcingNote": "Capture and airflow needs are typically derived from contaminant type, generation rate, and an industrial-hygiene assessment, not a generic rule of thumb. References to local-exhaust ventilation guidance, combustible-dust standards, and occupational exposure limits are illustrative examples only and require verification before sourcing; engage a qualified ventilation engineer and industrial hygienist and use the official standard and an accredited lab for any exposure or air-quality measurement."
  },
  {
    "id": "material-handling",
    "name": "Material Handling System",
    "whatItIs": "The network of equipment and methods that moves materials between stations: powered and gravity conveyors, pallet jacks and forklifts, bins, totes, carts, automated guided vehicles in some plants, and the layout that links them. In a rubber plant it spans bagged and bulk raw materials, mixed batches, intermediate sheet or strip stock, and finished rolls or parts.",
    "whatItSupports": "Movement from the raw-material room and weighing area into mixing, transfer of warm compound from mixer to mill to calender, staging of intermediate stock, and conveyance of cured product to trimming, inspection, and the warehouse. Smooth flow here often governs whether the line runs continuously or stalls between steps.",
    "relatedStations": [
      "raw-material-room",
      "internal-mixer",
      "calender",
      "finished-roll"
    ],
    "risks": [
      "Bottlenecks or breakdowns in handling can stall the whole line and let warm intermediate stock cool or age beyond useful working windows.",
      "Powered handling equipment and pinch points are common injury sources; traffic separation, guarding, and operator training are typically reviewed.",
      "Heavy or bulky intermediate stock and rolls can be damaged or contaminated in transit, so handling methods and surface protection often require review."
    ],
    "sourcingNote": "Equipment is typically specified from throughput, load weights and dimensions, travel distances, and floor or aisle constraints, not from catalogue defaults. References to powered-industrial-truck and conveyor-safety standards are illustrative examples only and require verification before sourcing; confirm load ratings with the maker and use the official standard and a qualified inspector for any lifting or powered-truck program."
  },
  {
    "id": "hoists-lifts",
    "name": "Hoists, Cranes & Lifting Equipment",
    "whatItIs": "Overhead and mobile lifting gear used to handle heavy items: jib and bridge cranes, electric or manual chain hoists, mould and platen handling rigs, scissor or post lifts, and the slings, hooks, and below-the-hook devices that go with them. Curing moulds, large rolls, mixer rotors, and machine components are often too heavy for manual handling and rely on this equipment.",
    "whatItSupports": "Mould and die changes at the curing presses, roll changes on mills and calenders, loading and unloading of heavy rolls of stock, and maintenance lifts of machine assemblies. Safe, repeatable lifting at the curing and calendering areas typically keeps changeovers efficient and reduces drops and pinch injuries.",
    "relatedStations": [
      "calender",
      "vulcanization",
      "two-roll-mill",
      "internal-mixer"
    ],
    "risks": [
      "Overloading, worn slings, or improper rigging can cause dropped loads; rated capacities and pre-use inspection typically require strict adherence.",
      "Lifting equipment requires periodic inspection and competent operators; lapses here are a recognized source of serious incidents.",
      "Suspended loads over work areas create struck-by hazards, so exclusion zones and travel paths are commonly reviewed."
    ],
    "sourcingNote": "Lifting equipment is specified from the heaviest expected load, lift height, span, and duty class, with a margin, rather than a nominal figure. References to crane, hoist, and sling inspection standards are illustrative examples only and require verification before sourcing; confirm rated capacities with the maker and use the official standard and a qualified competent person for inspection and operator certification."
  },
  {
    "id": "maintenance-shop",
    "name": "Maintenance Shop & Spares",
    "whatItIs": "The in-house workshop and spare-parts function that keeps equipment running: mechanical and electrical workbenches, basic machine tools, lubrication and alignment gear, a spares store with critical components, and the planning system (preventive and predictive maintenance schedules, work orders, condition monitoring). It is the home base for both planned upkeep and breakdown response.",
    "whatItSupports": "All production equipment, with particular attention to the high-stress assets: mixer rotors and bearings, mill and calender rolls and drives, curing-press hydraulics and heaters, and the utility systems above. A well-stocked critical-spares list often determines how quickly a line recovers from a failure.",
    "relatedStations": [],
    "risks": [
      "Reactive-only maintenance and thin critical spares commonly lead to long unplanned downtime on the mixer, calender, or presses.",
      "Maintenance tasks involve hazardous energy (electrical, hydraulic, thermal, stored mechanical); lockout/tagout and safe-work procedures typically require strict review.",
      "Poor lubrication, alignment, or substitution of non-equivalent parts can shorten asset life and affect product quality."
    ],
    "sourcingNote": "Spares and maintenance scope are typically driven by criticality analysis, OEM recommendations, and failure history, not by generic kits. References to maintenance-management and lockout/tagout standards are illustrative examples only and require verification before sourcing; confirm part equivalence with the OEM and use the official standard and qualified personnel for any energy-control or reliability program."
  },
  {
    "id": "tooling-storage",
    "name": "Tooling & Mould Storage",
    "whatItIs": "The controlled storage and management of moulds, dies, rollers, knives, and fixtures used to shape and finish product: racking or shelving (often climate-aware), an identification and location system, cleaning and light-refurbishment provisions, and records of each tool's condition and history. In rubber processing, moulds and calender rolls are valuable, precision items whose surface condition directly transfers to product.",
    "whatItSupports": "Curing presses (moulds and bladders), calender and milling rolls, and the trimming and slitting tooling. Organized, protected tooling typically shortens changeovers and protects surface finish, while poor storage can introduce corrosion, nicks, or contamination that show up on parts.",
    "relatedStations": [
      "vulcanization",
      "calender",
      "trimming-slitting"
    ],
    "risks": [
      "Corrosion, mechanical damage, or contamination of stored moulds and rolls can transfer defects directly to product surfaces.",
      "Lost or mis-identified tooling and missing condition records often cause delays and quality variation at changeover.",
      "Heavy tooling poses handling and storage-stability hazards, so racking design and lifting practices are commonly reviewed."
    ],
    "sourcingNote": "Storage and tracking are typically scoped from tool count, size, weight, sensitivity to humidity or corrosion, and changeover frequency. References to tooling-care and preservation guidance are illustrative examples only and require verification before sourcing; confirm preservation methods with the tool maker and treat any surface-finish or corrosion acceptance as something to verify against the part's own requirements."
  },
  {
    "id": "qa-lab",
    "name": "Quality Assurance Laboratory",
    "whatItIs": "The on-site lab that characterizes raw materials, in-process compound, and finished product. Typical equipment includes a cure-characterization rheometer or moving-die rheometer, a tensile/universal testing machine, hardness durometers, density and specific-gravity apparatus, and ovens for heat-ageing and conditioning, plus sample preparation. It generates the data used to release material and investigate problems.",
    "whatItSupports": "Incoming raw-material checks, batch verification after mixing (cure behaviour, viscosity indicators), and finished-product property testing before inspection sign-off. The lab often gates the mixing and curing steps because cure and physical-property data confirm a batch behaves as intended before it is committed downstream.",
    "relatedStations": [
      "raw-material-room",
      "internal-mixer",
      "vulcanization",
      "inspection"
    ],
    "risks": [
      "Uncalibrated or drifting instruments can pass bad material or reject good material; calibration and traceability typically require ongoing control.",
      "Non-representative sampling or inconsistent specimen preparation may produce misleading results, so sampling plans and methods commonly require review.",
      "The lab is a control point, not a certification authority; results require correct method use and qualified interpretation."
    ],
    "sourcingNote": "Lab scope is typically driven by the properties that actually gate release for the products made, not by a maximal equipment list. References to test methods (for example tensile, hardness, or cure-rheometer methods) and laboratory-competence frameworks are illustrative examples only and require verification before sourcing; use the official standard and an accredited or qualified lab for any actual acceptance testing or certification."
  },
  {
    "id": "warehouse",
    "name": "Warehouse & Inventory Storage",
    "whatItIs": "Controlled storage for raw materials, intermediates, and finished goods, with racking, segregation by material type, environmental control where needed (some elastomers, chemicals, and adhesives are temperature- or humidity-sensitive and have shelf lives), and an inventory system tracking lots, quantities, and dates. It buffers the plant against supply and demand variability.",
    "whatItSupports": "Feeds the raw-material room and weighing area with elastomers, fillers, and chemicals; holds intermediate stock; and stores finished rolls and parts ahead of shipping. First-in/first-out rotation and shelf-life control are often important because aged or improperly stored ingredients can change cure behaviour and product properties.",
    "relatedStations": [
      "raw-material-room",
      "finished-roll"
    ],
    "risks": [
      "Poor environmental control or rotation can let temperature- or humidity-sensitive materials and curatives age out of specification before use.",
      "Mis-identification or mixed lots can break traceability and cause the wrong material to reach the line; lot control typically requires discipline.",
      "Incompatible chemicals stored together create fire or reactivity hazards, so segregation and safety-data-driven storage are commonly reviewed."
    ],
    "sourcingNote": "Capacity and conditions are typically sized from inventory turns, lot sizes, shelf-life and storage-condition requirements, and segregation needs, not floor area alone. References to chemical-storage and safety-data-sheet guidance are illustrative examples only and require verification before sourcing; confirm storage conditions and shelf life with the material supplier's documentation and treat any storage-compatibility decision as something to verify."
  },
  {
    "id": "shipping-area",
    "name": "Shipping & Dispatch Area",
    "whatItIs": "The outbound zone where finished product is staged, packed, protected, documented, and loaded: dock doors and levellers, staging lanes, packing and wrapping stations, weighing and labelling, and the paperwork for dispatch. For rubber rolls and parts, packaging often must protect against deformation, surface marking, ozone and light exposure, and contamination during transit.",
    "whatItSupports": "Takes product from the finished-roll and inspection areas, applies protective packaging and identification, and releases it to carriers. Correct labelling, lot traceability, and protective packing here typically preserve the quality built upstream and support any later claims or recalls.",
    "relatedStations": [
      "finished-roll",
      "inspection"
    ],
    "risks": [
      "Inadequate packaging can let rolls deform, take a set, or pick up surface damage and contamination in transit.",
      "Labelling or documentation errors break lot traceability and may cause mis-shipment; verification steps are commonly reviewed.",
      "Dock and loading operations involve forklift and trailer-movement hazards, so dock safety practices typically require review."
    ],
    "sourcingNote": "Packaging and dock provisions are typically specified from product fragility, transit mode and duration, and environmental exposure, not from a default carton. References to packaging, labelling, and dangerous-goods transport guidance are illustrative examples only and require verification before sourcing; confirm protective requirements against the product's own needs and use the official regulation and a qualified party for any regulated-shipment determination."
  },
  {
    "id": "safety-systems",
    "name": "Safety Systems & Emergency Response",
    "whatItIs": "The plant-wide protective infrastructure: fire detection and suppression (extinguishers, hydrants, sprinklers or special systems), machine guarding and interlocks, emergency-stop circuits, lockout/tagout provisions, gas and smoke detection where relevant, emergency lighting and egress, eyewash/shower stations, personal protective equipment, alarms, and the emergency response plan. Rubber processing combines heat, heavy moving equipment, dust, chemicals, and combustible material, so layered protection is typical.",
    "whatItSupports": "Every station, with focused attention on high-energy and high-hazard areas: nip points on mills and calenders, the hot curing presses, dusty powder handling, and chemical storage. Guarding and emergency stops on the mills and calenders, and fire protection around curing and storage, are commonly treated as primary safeguards.",
    "relatedStations": [
      "two-roll-mill",
      "calender",
      "vulcanization",
      "weighing-station"
    ],
    "risks": [
      "Defeated guards, missing interlocks, or untested emergency stops on mills and calenders are associated with severe nip-point injuries.",
      "Combustible dust, hot surfaces, and stored chemicals create fire and reactivity hazards that require detection, suppression, and housekeeping to be maintained, not just installed.",
      "Safety systems that are not inspected, tested, and drilled may fail when needed; testing schedules and training typically require ongoing review."
    ],
    "sourcingNote": "Safety provisions are typically driven by a documented hazard and risk assessment of the actual processes and layout, not by a generic checklist. References to machine-safety, fire-protection, and lockout/tagout standards are illustrative examples only and require verification before sourcing; engage qualified safety and fire-protection professionals and use the official standard and an accredited authority for any compliance determination. This platform is educational and is not a certification or compliance authority."
  }
];
