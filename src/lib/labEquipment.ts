import type { LabEquipment } from "@/types/qaLab";
export const labEquipment: LabEquipment[] = [
  {
    "id": "moving-die-rheometer",
    "equipmentName": "Moving Die Rheometer (MDR)",
    "category": "rheology-cure",
    "whatItMeasures": "Tracks torque as an uncured compound sample crosslinks at a fixed test temperature, so the lab can read out cure behavior over time.",
    "whyItMatters": "The cure curve it produces is the single most useful batch fingerprint for confirming a compound will vulcanize the way it did last time before any of it is committed to the line.",
    "sampleType": "disc",
    "relatedProperties": [
      "modulus",
      "hardness"
    ],
    "relatedMethods": [
      "ASTM D2000"
    ],
    "relatedProducts": [
      "natural-rubber",
      "sbr",
      "epdm"
    ],
    "relatedDefects": [
      "scorch",
      "under-cure",
      "over-cure"
    ],
    "relatedStations": [
      "internal-mixer",
      "two-roll-mill",
      "vulcanization"
    ],
    "outputRecord": "demo cure curve with scorch and cure-time markers",
    "calibrationConcept": "periodic torque and temperature verification against reference standards",
    "maintenanceConcept": "die cavity cleaning and seal condition checks between runs",
    "safetyNote": "hot dies and pinch points are present, so the unit is treated as a closed heated cavity during operation",
    "demoAnimationIdea": "torque trace climbing from a scorch dip up to a cure plateau"
  },
  {
    "id": "oscillating-disc-rheometer",
    "equipmentName": "Oscillating Disc Rheometer (ODR)",
    "category": "rheology-cure",
    "whatItMeasures": "Records the torque rise of a compound around an oscillating disc as it cures, giving a classic cure trace.",
    "whyItMatters": "It is the legacy cure-curve method many specifications still call out, so it commonly serves as a cross-check or correlation reference against newer rotorless instruments.",
    "sampleType": "disc",
    "relatedProperties": [
      "modulus",
      "hardness"
    ],
    "relatedMethods": [
      "ASTM D2000"
    ],
    "relatedProducts": [
      "natural-rubber",
      "sbr",
      "neoprene"
    ],
    "relatedDefects": [
      "scorch",
      "under-cure",
      "over-cure"
    ],
    "relatedStations": [
      "internal-mixer",
      "vulcanization"
    ],
    "outputRecord": "demo rotor-based cure trace",
    "calibrationConcept": "torque span check using a known reference torque element",
    "maintenanceConcept": "rotor inspection and cavity cleaning to prevent residue buildup",
    "safetyNote": "heated cavity and rotating element are enclosed during the test cycle",
    "demoAnimationIdea": "disc oscillating inside a sealed cavity with a rising torque line beside it"
  },
  {
    "id": "mooney-viscometer",
    "equipmentName": "Mooney Viscometer",
    "category": "rheology-cure",
    "whatItMeasures": "Measures the resistance of a raw or partly compounded rubber to a slowly rotating rotor, reported as Mooney viscosity, and can also flag scorch onset.",
    "whyItMatters": "Viscosity that drifts batch to batch generally signals a raw-material or mixing change and predicts how the stock will process on the mill and calender.",
    "sampleType": "disc",
    "relatedProperties": [
      "hardness"
    ],
    "relatedMethods": [
      "ASTM D2000"
    ],
    "relatedProducts": [
      "natural-rubber",
      "sbr",
      "butyl"
    ],
    "relatedDefects": [
      "scorch",
      "poor-dispersion"
    ],
    "relatedStations": [
      "raw-material-room",
      "internal-mixer",
      "two-roll-mill"
    ],
    "outputRecord": "demo Mooney viscosity value and scorch-time note",
    "calibrationConcept": "torque reference check and rotor dimension verification",
    "maintenanceConcept": "rotor and die-surface cleaning to keep readings repeatable",
    "safetyNote": "heated platens close around the sample, so the test area stays enclosed while warm",
    "demoAnimationIdea": "rotor turning in a stock puck with a viscosity needle settling to a plateau"
  },
  {
    "id": "cure-curve-display",
    "equipmentName": "Cure Curve Display",
    "category": "rheology-cure",
    "whatItMeasures": "Presents the torque-versus-time data from a rheometer run as a readable curve with the key cure landmarks called out.",
    "whyItMatters": "Turning raw rheometer data into a labeled scorch, optimum-cure, and plateau picture is what lets an operator decide cure readiness at a glance.",
    "sampleType": "disc",
    "relatedProperties": [
      "modulus",
      "hardness"
    ],
    "relatedMethods": [
      "ASTM D2000"
    ],
    "relatedProducts": [
      "natural-rubber",
      "epdm",
      "nbr"
    ],
    "relatedDefects": [
      "scorch",
      "under-cure",
      "over-cure"
    ],
    "relatedStations": [
      "internal-mixer",
      "vulcanization"
    ],
    "outputRecord": "annotated demo cure-curve view with cure-state markers",
    "calibrationConcept": "display verification against the source instrument data record",
    "maintenanceConcept": "software and data-link checks so curves render from current run data",
    "safetyNote": "a read-only display surface with no moving or heated parts to contact",
    "demoAnimationIdea": "scorch, cure-time, and plateau markers fading in along a drawn cure curve"
  },
  {
    "id": "universal-testing-machine",
    "equipmentName": "Universal Testing Machine (Tensile)",
    "category": "mechanical",
    "whatItMeasures": "Pulls a rubber specimen at a controlled rate while recording force and stretch, so the lab can read tensile strength, elongation, and modulus.",
    "whyItMatters": "Tensile and elongation are the headline strength numbers most customer specifications hinge on, and a drop in them generally points back to cure or dispersion problems.",
    "sampleType": "dumbbell",
    "relatedProperties": [
      "tensile strength",
      "elongation",
      "modulus"
    ],
    "relatedMethods": [
      "ASTM D412",
      "ISO 37"
    ],
    "relatedProducts": [
      "natural-rubber",
      "sbr",
      "epdm"
    ],
    "relatedDefects": [
      "under-cure",
      "poor-dispersion",
      "contamination"
    ],
    "relatedStations": [
      "vulcanization",
      "inspection"
    ],
    "outputRecord": "demo stress-strain curve with strength and elongation at break",
    "calibrationConcept": "load cell and crosshead-travel verification against traceable references",
    "maintenanceConcept": "grip-face inspection and drive-system checks to avoid specimen slippage",
    "safetyNote": "specimens can snap under tension, so the test space is treated as a guarded pull zone",
    "demoAnimationIdea": "dumbbell stretching thin and parting at the neck as a curve traces out"
  },
  {
    "id": "specimen-die-cutter",
    "equipmentName": "Specimen Die Cutter",
    "category": "mechanical",
    "whatItMeasures": "Cuts standardized test-piece shapes such as dumbbells and tear pieces from a cured rubber sheet using shaped dies.",
    "whyItMatters": "Tensile and tear results only mean something when every specimen has the same clean geometry, so consistent die cutting is the foundation under the strength data.",
    "sampleType": "dumbbell",
    "relatedProperties": [
      "tensile strength",
      "tear resistance",
      "elongation"
    ],
    "relatedMethods": [
      "ASTM D412",
      "ASTM D624"
    ],
    "relatedProducts": [
      "natural-rubber",
      "sbr",
      "nbr"
    ],
    "relatedDefects": [
      "contamination",
      "trapped-air"
    ],
    "relatedStations": [
      "vulcanization",
      "trimming-slitting",
      "inspection"
    ],
    "outputRecord": "logged die type and specimen-prep note",
    "calibrationConcept": "cutting-edge geometry and width verification against a reference die",
    "maintenanceConcept": "blade-edge sharpness and nick inspection to keep specimen edges clean",
    "safetyNote": "sharp cutting dies are handled as a guarded press operation",
    "demoAnimationIdea": "die pressing down and lifting away to reveal a clean dumbbell shape"
  },
  {
    "id": "dumbbell-specimen-rack",
    "equipmentName": "Dumbbell Specimen Rack",
    "category": "mechanical",
    "whatItMeasures": "Holds and organizes prepared dumbbell test pieces by batch while they wait for conditioning and pull testing.",
    "whyItMatters": "Specimens generally need a controlled rest and conditioning period before testing, and keeping them traceable to their batch is what makes the later results defensible.",
    "sampleType": "dumbbell",
    "relatedProperties": [
      "tensile strength",
      "elongation"
    ],
    "relatedMethods": [
      "ASTM D412",
      "ISO 37"
    ],
    "relatedProducts": [
      "natural-rubber",
      "epdm",
      "silicone"
    ],
    "relatedDefects": [
      "contamination",
      "bloom"
    ],
    "relatedStations": [
      "inspection"
    ],
    "outputRecord": "specimen-to-batch tracking tag",
    "calibrationConcept": "not a measuring device, so labeling and slot-identity checks apply instead",
    "maintenanceConcept": "cleaning and slot-condition checks to prevent surface contamination of pieces",
    "safetyNote": "a passive holding fixture with no powered or heated parts",
    "demoAnimationIdea": "rows of labeled dumbbells sliding into numbered rack slots"
  },
  {
    "id": "tear-test-fixture",
    "equipmentName": "Tear Test Fixture",
    "category": "mechanical",
    "whatItMeasures": "Holds a notched or angled rubber specimen in the testing machine so the force needed to propagate a tear can be captured.",
    "whyItMatters": "Tear resistance generally governs how a part survives demolding, edge stress, and handling, so it is a key durability check beyond plain tensile strength.",
    "sampleType": "coupon",
    "relatedProperties": [
      "tear resistance"
    ],
    "relatedMethods": [
      "ASTM D624",
      "ISO 34"
    ],
    "relatedProducts": [
      "natural-rubber",
      "sbr",
      "neoprene"
    ],
    "relatedDefects": [
      "under-cure",
      "poor-dispersion",
      "trapped-air"
    ],
    "relatedStations": [
      "vulcanization",
      "trimming-slitting",
      "inspection"
    ],
    "outputRecord": "demo peak tear-force record",
    "calibrationConcept": "alignment and grip-spacing verification within the test frame",
    "maintenanceConcept": "grip-surface and notch-alignment inspection between specimens",
    "safetyNote": "specimens release energy when they tear through, so the zone stays guarded",
    "demoAnimationIdea": "a notched coupon splitting along its cut as force peaks"
  },
  {
    "id": "extensometer-and-grips",
    "equipmentName": "Extensometer and Grips",
    "category": "mechanical",
    "whatItMeasures": "Tracks the true gauge-length stretch of a specimen during a pull while the grips hold it without slipping.",
    "whyItMatters": "Elongation and modulus generally need real gauge-length measurement rather than crosshead motion, so good grips and an extensometer are what keep those numbers honest.",
    "sampleType": "dumbbell",
    "relatedProperties": [
      "elongation",
      "modulus",
      "tensile strength"
    ],
    "relatedMethods": [
      "ASTM D412",
      "ISO 37"
    ],
    "relatedProducts": [
      "natural-rubber",
      "sbr",
      "silicone"
    ],
    "relatedDefects": [
      "under-cure",
      "contamination"
    ],
    "relatedStations": [
      "vulcanization",
      "inspection"
    ],
    "outputRecord": "demo gauge-length strain trace",
    "calibrationConcept": "extension-span verification against a reference gauge",
    "maintenanceConcept": "grip-face and contact-arm cleaning to prevent slip and drift",
    "safetyNote": "moving grips and a stretched specimen make this a guarded pull region",
    "demoAnimationIdea": "gauge marks on a specimen spreading apart as the extensometer follows"
  },
  {
    "id": "durometer-hardness-tester",
    "equipmentName": "Durometer Hardness Tester",
    "category": "physical",
    "whatItMeasures": "Presses a standard indenter into the rubber surface and reads how far it sinks in, reported as a Shore hardness number.",
    "whyItMatters": "Hardness is the fastest stand-in for cure state and stiffness, so a quick durometer reading commonly catches under-cure or a wrong batch before deeper testing.",
    "sampleType": "button",
    "relatedProperties": [
      "hardness"
    ],
    "relatedMethods": [
      "ASTM D2240",
      "ISO 7619"
    ],
    "relatedProducts": [
      "natural-rubber",
      "epdm",
      "nbr"
    ],
    "relatedDefects": [
      "under-cure",
      "over-cure",
      "hardness-drift"
    ],
    "relatedStations": [
      "vulcanization",
      "cooling",
      "inspection"
    ],
    "outputRecord": "demo Shore hardness reading",
    "calibrationConcept": "indenter-force and zero verification against reference blocks",
    "maintenanceConcept": "indenter-tip and presser-foot condition checks for clean contact",
    "safetyNote": "a small spring-loaded indenter, handled to keep fingers clear of the foot",
    "demoAnimationIdea": "an indenter dimpling a rubber pad while a hardness dial settles"
  },
  {
    "id": "thickness-gauge",
    "equipmentName": "Thickness Gauge",
    "category": "physical",
    "whatItMeasures": "Measures local sheet or part thickness using a constant-pressure presser foot against a flat anvil.",
    "whyItMatters": "Thickness directly feeds tensile and tear math and is itself a calender and gauge-control check, so an out-of-band reading flags both data and process issues.",
    "sampleType": "coupon",
    "relatedProperties": [
      "thickness"
    ],
    "relatedMethods": [
      "ASTM D2240"
    ],
    "relatedProducts": [
      "epdm",
      "neoprene",
      "silicone"
    ],
    "relatedDefects": [
      "trapped-air",
      "hardness-drift"
    ],
    "relatedStations": [
      "calender",
      "trimming-slitting",
      "inspection"
    ],
    "outputRecord": "demo thickness value with location note",
    "calibrationConcept": "gauge-block verification across the working range",
    "maintenanceConcept": "anvil and presser-foot cleaning to keep contact flat and true",
    "safetyNote": "a light contact foot lowers onto the sample, kept clear of fingertips",
    "demoAnimationIdea": "a presser foot dropping onto a sheet as a thickness number locks in"
  },
  {
    "id": "specific-gravity-and-density-balance",
    "equipmentName": "Specific Gravity and Density Balance",
    "category": "physical",
    "whatItMeasures": "Compares a specimen's weight in air and in liquid to compute its density or specific gravity.",
    "whyItMatters": "Density is one of the cheapest, most sensitive checks that the right filler loading and formulation went into a batch, so a shift commonly exposes a compounding error.",
    "sampleType": "coupon",
    "relatedProperties": [
      "specific gravity"
    ],
    "relatedMethods": [
      "ASTM D297",
      "ISO 2781"
    ],
    "relatedProducts": [
      "epdm",
      "nbr",
      "fkm"
    ],
    "relatedDefects": [
      "poor-dispersion",
      "contamination",
      "trapped-air"
    ],
    "relatedStations": [
      "weighing-station",
      "internal-mixer",
      "inspection"
    ],
    "outputRecord": "demo specific-gravity value",
    "calibrationConcept": "balance verification with reference masses and known-density check",
    "maintenanceConcept": "pan and liquid-vessel cleaning plus draft-shield care",
    "safetyNote": "involves an immersion liquid, kept contained and away from spills",
    "demoAnimationIdea": "a coupon weighed in air then dipped in liquid as a density value resolves"
  },
  {
    "id": "compression-set-fixtures",
    "equipmentName": "Compression Set Fixtures",
    "category": "physical",
    "whatItMeasures": "Holds button specimens at a fixed compressed height for a set period and temperature so recovery loss can be measured afterward.",
    "whyItMatters": "Compression set predicts whether a seal or gasket will keep sealing over time, so it is one of the most important durability checks for sealing applications.",
    "sampleType": "button",
    "relatedProperties": [
      "compression set",
      "hardness"
    ],
    "relatedMethods": [
      "ASTM D395",
      "ISO 815"
    ],
    "relatedProducts": [
      "epdm",
      "nbr",
      "silicone"
    ],
    "relatedDefects": [
      "compression-set",
      "under-cure",
      "over-cure"
    ],
    "relatedStations": [
      "vulcanization",
      "inspection"
    ],
    "outputRecord": "demo compression-set percentage",
    "calibrationConcept": "spacer-height and parallelism verification of the fixture plates",
    "maintenanceConcept": "plate-flatness and spacer-condition checks to hold true compression",
    "safetyNote": "plates are clamped under load and used hot, so they are handled as a heated clamped assembly",
    "demoAnimationIdea": "a button squashed flat between plates, then springing partway back"
  },
  {
    "id": "abrasion-tester",
    "equipmentName": "Abrasion Tester",
    "category": "physical",
    "whatItMeasures": "Runs a rubber specimen against a controlled abrasive surface and measures the volume of material worn away.",
    "whyItMatters": "Abrasion loss generally predicts service life for tread, belt, and wear-pad parts, so it is the key screen for any abrasion-exposed application.",
    "sampleType": "button",
    "relatedProperties": [
      "abrasion",
      "hardness"
    ],
    "relatedMethods": [
      "ASTM D5963",
      "ISO 4649"
    ],
    "relatedProducts": [
      "natural-rubber",
      "sbr",
      "polyurethane"
    ],
    "relatedDefects": [
      "poor-dispersion",
      "under-cure"
    ],
    "relatedStations": [
      "vulcanization",
      "inspection"
    ],
    "outputRecord": "demo abrasion volume-loss value",
    "calibrationConcept": "abrasive-sheet check against a reference rubber of known loss",
    "maintenanceConcept": "abrasive-surface replacement and specimen-holder cleaning on a set schedule",
    "safetyNote": "a moving abrasive surface, kept enclosed while the test runs",
    "demoAnimationIdea": "a button tracking across a drum as a wear figure climbs"
  },
  {
    "id": "rebound-resilience-tester",
    "equipmentName": "Rebound Resilience Tester",
    "category": "physical",
    "whatItMeasures": "Drops or swings a standard mass against the rubber and measures how much energy bounces back as rebound resilience.",
    "whyItMatters": "Resilience reflects the energy return and damping of a compound, which generally tracks with cure state and helps separate a lively batch from a sluggish one.",
    "sampleType": "button",
    "relatedProperties": [
      "hardness",
      "modulus"
    ],
    "relatedMethods": [
      "ASTM D2000"
    ],
    "relatedProducts": [
      "natural-rubber",
      "sbr",
      "polyurethane"
    ],
    "relatedDefects": [
      "under-cure",
      "over-cure",
      "poor-dispersion"
    ],
    "relatedStations": [
      "vulcanization",
      "inspection"
    ],
    "outputRecord": "demo rebound-resilience percentage",
    "calibrationConcept": "pendulum drop-height and zero-loss verification",
    "maintenanceConcept": "pivot and striker-face inspection to keep energy loss consistent",
    "safetyNote": "a swinging mass is involved, so the path stays clear and guarded",
    "demoAnimationIdea": "a pendulum striking a pad and rebounding to a marked height"
  },
  {
    "id": "air-aging-oven",
    "equipmentName": "Air Aging Oven",
    "category": "environmental",
    "whatItMeasures": "Holds specimens at an elevated temperature in circulating air for a set time to simulate long-term heat exposure before and after property testing.",
    "whyItMatters": "Heat aging reveals whether a compound will harden, soften, or lose strength in service, so it is the standard way to estimate durability for hot applications.",
    "sampleType": "dumbbell",
    "relatedProperties": [
      "heat aging",
      "tensile strength",
      "hardness"
    ],
    "relatedMethods": [
      "ASTM D573",
      "ISO 188"
    ],
    "relatedProducts": [
      "epdm",
      "nbr",
      "silicone"
    ],
    "relatedDefects": [
      "over-cure",
      "hardness-drift",
      "cracking"
    ],
    "relatedStations": [
      "vulcanization",
      "inspection"
    ],
    "outputRecord": "demo before-and-after property comparison",
    "calibrationConcept": "chamber temperature-uniformity verification with a reference probe",
    "maintenanceConcept": "airflow and door-seal checks to hold even temperature",
    "safetyNote": "a hot enclosure, treated as a heated chamber kept closed during aging",
    "demoAnimationIdea": "specimens sitting in a glowing chamber as an aging timer advances"
  },
  {
    "id": "fluid-immersion-station",
    "equipmentName": "Fluid Immersion Station",
    "category": "environmental",
    "whatItMeasures": "Soaks specimens in a defined test fluid for a set period so swelling and property change from fluid exposure can be assessed.",
    "whyItMatters": "Many seals live in oil or chemicals, and immersion testing shows whether a compound will swell or weaken in that fluid, which is decisive for material selection.",
    "sampleType": "coupon",
    "relatedProperties": [
      "fluid immersion",
      "hardness",
      "tensile strength"
    ],
    "relatedMethods": [
      "ASTM D471",
      "ISO 1817"
    ],
    "relatedProducts": [
      "nbr",
      "fkm",
      "csm"
    ],
    "relatedDefects": [
      "swelling",
      "contamination"
    ],
    "relatedStations": [
      "inspection"
    ],
    "outputRecord": "demo volume-and-mass change record",
    "calibrationConcept": "bath temperature and balance verification for change measurement",
    "maintenanceConcept": "fluid-condition monitoring and vessel cleaning between media",
    "safetyNote": "test fluids are kept contained and handled in a ventilated area concept",
    "demoAnimationIdea": "a coupon submerged in fluid then swelling slightly as it is lifted out"
  },
  {
    "id": "ozone-and-weathering-chamber",
    "equipmentName": "Ozone and Weathering Chamber",
    "category": "environmental",
    "whatItMeasures": "Exposes strained specimens to a controlled ozone or weathering environment and watches for surface cracking over time.",
    "whyItMatters": "Ozone attack causes the fine surface cracking that ages outdoor rubber, so this chamber is the standard screen for weather-exposed parts and elastomer selection.",
    "sampleType": "coupon",
    "relatedProperties": [
      "ozone/weathering",
      "cracking"
    ],
    "relatedMethods": [
      "ASTM D1149",
      "ISO 1431"
    ],
    "relatedProducts": [
      "epdm",
      "neoprene",
      "csm"
    ],
    "relatedDefects": [
      "cracking",
      "bloom"
    ],
    "relatedStations": [
      "inspection"
    ],
    "outputRecord": "demo crack-onset and severity rating",
    "calibrationConcept": "ozone-concentration verification against a reference monitor",
    "maintenanceConcept": "ozone-generator and strain-jig condition checks",
    "safetyNote": "ozone is a hazardous gas, so the chamber concept is a sealed, vented enclosure",
    "demoAnimationIdea": "fine cracks creeping across a stretched coupon under a faint haze"
  },
  {
    "id": "low-temperature-flexibility-chamber",
    "equipmentName": "Low-Temperature Flexibility Chamber",
    "category": "environmental",
    "whatItMeasures": "Cools specimens to low temperature and checks whether they stay flexible or turn brittle and stiff.",
    "whyItMatters": "Cold service can turn a seal glassy and leak-prone, so low-temperature flexibility is the key check for any part expected to flex in the cold.",
    "sampleType": "coupon",
    "relatedProperties": [
      "low-temperature flexibility",
      "hardness"
    ],
    "relatedMethods": [
      "ASTM D2000"
    ],
    "relatedProducts": [
      "silicone",
      "epdm",
      "natural-rubber"
    ],
    "relatedDefects": [
      "cracking",
      "hardness-drift"
    ],
    "relatedStations": [
      "inspection"
    ],
    "outputRecord": "demo low-temperature flexibility status",
    "calibrationConcept": "chamber low-temperature verification with a reference probe",
    "maintenanceConcept": "refrigeration and seal checks to hold a stable cold soak",
    "safetyNote": "very cold surfaces can cause cold-contact injury, so the chamber stays closed during soak",
    "demoAnimationIdea": "a chilled strip bending freely, then stiffening as the temperature drops"
  },
  {
    "id": "heat-resistance-station",
    "equipmentName": "Heat Resistance Station",
    "category": "environmental",
    "whatItMeasures": "Combines hot-air aging with property retesting to characterize how much strength and hardness a compound keeps after sustained heat.",
    "whyItMatters": "High-temperature applications generally demand proof that a compound holds its properties when hot, so this station ties aging directly to retained mechanical results.",
    "sampleType": "dumbbell",
    "relatedProperties": [
      "heat aging",
      "tensile strength",
      "hardness"
    ],
    "relatedMethods": [
      "ASTM D573",
      "ISO 188"
    ],
    "relatedProducts": [
      "silicone",
      "fkm",
      "epdm"
    ],
    "relatedDefects": [
      "hardness-drift",
      "over-cure",
      "cracking"
    ],
    "relatedStations": [
      "vulcanization",
      "inspection"
    ],
    "outputRecord": "demo retained-property summary after heat exposure",
    "calibrationConcept": "temperature-uniformity verification tied to the retest instruments",
    "maintenanceConcept": "oven airflow and probe checks plus retest-fixture upkeep",
    "safetyNote": "hot specimens and surfaces are handled as a heated work area concept",
    "demoAnimationIdea": "a bar chart of retained strength shrinking as exposure time grows"
  },
  {
    "id": "calipers",
    "equipmentName": "Calipers",
    "category": "dimensional",
    "whatItMeasures": "Reads outside, inside, and step dimensions of a part across a broad size range with a sliding jaw.",
    "whyItMatters": "Dimensional conformance is what makes a part fit its assembly, so calipers are the everyday first check that trimmed and slit goods meet drawing sizes.",
    "sampleType": "coupon",
    "relatedProperties": [
      "dimensional",
      "thickness"
    ],
    "relatedMethods": [
      "ASTM D2000"
    ],
    "relatedProducts": [
      "epdm",
      "neoprene",
      "natural-rubber"
    ],
    "relatedDefects": [
      "compression-set",
      "swelling"
    ],
    "relatedStations": [
      "trimming-slitting",
      "inspection",
      "finished-roll"
    ],
    "outputRecord": "demo dimensional reading against nominal",
    "calibrationConcept": "gauge-block verification across the measuring span",
    "maintenanceConcept": "jaw cleaning and zero-check before each measuring session",
    "safetyNote": "a hand tool with no powered hazard, handled to protect the jaw edges",
    "demoAnimationIdea": "caliper jaws closing on a strip as a measurement reads out"
  },
  {
    "id": "micrometer",
    "equipmentName": "Micrometer",
    "category": "dimensional",
    "whatItMeasures": "Measures thin sheet and fine feature thickness to high resolution using a precision spindle and anvil.",
    "whyItMatters": "Calendered gauge and thin-section tolerance generally need finer resolution than calipers give, so the micrometer is the precise thickness check behind the strength math.",
    "sampleType": "coupon",
    "relatedProperties": [
      "thickness",
      "dimensional"
    ],
    "relatedMethods": [
      "ASTM D2240"
    ],
    "relatedProducts": [
      "silicone",
      "epdm",
      "neoprene"
    ],
    "relatedDefects": [
      "trapped-air",
      "hardness-drift"
    ],
    "relatedStations": [
      "calender",
      "trimming-slitting",
      "inspection"
    ],
    "outputRecord": "demo precise thickness reading",
    "calibrationConcept": "reference-standard and zero verification at multiple points",
    "maintenanceConcept": "anvil and spindle-face cleaning with consistent contact-force practice",
    "safetyNote": "a hand instrument with no powered hazard, kept clean and protected",
    "demoAnimationIdea": "a spindle advancing onto a thin sheet as a fine reading appears"
  },
  {
    "id": "optical-inspection-light-and-surface-defect-viewer",
    "equipmentName": "Optical Inspection Light and Surface Defect Viewer",
    "category": "dimensional",
    "whatItMeasures": "Illuminates and magnifies the rubber surface so visual defects can be spotted and graded against acceptance examples.",
    "whyItMatters": "Surface defects like blisters, bloom, and contamination often decide acceptance before any property test, so controlled lighting and magnification make the visual call reliable.",
    "sampleType": "coupon",
    "relatedProperties": [
      "visual"
    ],
    "relatedMethods": [
      "ASTM D2000"
    ],
    "relatedProducts": [
      "epdm",
      "silicone",
      "neoprene"
    ],
    "relatedDefects": [
      "bloom",
      "contamination",
      "trapped-air"
    ],
    "relatedStations": [
      "calender",
      "inspection",
      "finished-roll"
    ],
    "outputRecord": "demo visual-defect grading note",
    "calibrationConcept": "lighting-level and magnification reference check",
    "maintenanceConcept": "lens and light-source cleaning to keep the view clear",
    "safetyNote": "bright lighting is involved, so direct eye exposure to the source is avoided",
    "demoAnimationIdea": "a magnifier sweeping a sheet and circling a surface blemish"
  },
  {
    "id": "sample-photography-station",
    "equipmentName": "Sample Photography Station",
    "category": "dimensional",
    "whatItMeasures": "Captures consistent, scaled images of specimens and defects under fixed lighting for the record.",
    "whyItMatters": "A traceable image generally settles disputes and documents a defect far better than words, so consistent photography is part of a defensible QA record.",
    "sampleType": "coupon",
    "relatedProperties": [
      "visual",
      "dimensional"
    ],
    "relatedMethods": [
      "ASTM D2000"
    ],
    "relatedProducts": [
      "natural-rubber",
      "epdm",
      "silicone"
    ],
    "relatedDefects": [
      "bloom",
      "cracking",
      "contamination"
    ],
    "relatedStations": [
      "inspection",
      "finished-roll"
    ],
    "outputRecord": "demo scaled defect image with batch tag",
    "calibrationConcept": "scale-bar and color-reference verification in frame",
    "maintenanceConcept": "lighting and lens cleaning plus fixed-setup checks for repeatable shots",
    "safetyNote": "a lit imaging stand, with bright sources kept out of direct view",
    "demoAnimationIdea": "a specimen framed on a lit stage as a scaled photo snaps into the record"
  },
  {
    "id": "lims-style-terminal",
    "equipmentName": "LIMS-Style Terminal",
    "category": "documentation",
    "whatItMeasures": "Does not measure rubber directly; it gathers instrument results and statuses into batch records for review and release.",
    "whyItMatters": "Tying every test result back to its batch and giving it a clear status is what turns scattered readings into a defensible quality record and a release decision.",
    "sampleType": "coupon",
    "relatedProperties": [
      "tensile strength",
      "hardness",
      "dimensional"
    ],
    "relatedMethods": [
      "ASTM D2000"
    ],
    "relatedProducts": [
      "natural-rubber",
      "epdm",
      "nbr"
    ],
    "relatedDefects": [
      "hardness-drift",
      "contamination"
    ],
    "relatedStations": [
      "inspection",
      "finished-roll"
    ],
    "outputRecord": "demo batch test record with qualitative pass or review status",
    "calibrationConcept": "data-entry verification against source instrument records",
    "maintenanceConcept": "data-backup and access-control upkeep for record integrity",
    "safetyNote": "a workstation only, with standard ergonomic and electrical care",
    "demoAnimationIdea": "test results streaming into a batch card that flips to a pass-demo status"
  }
];
export const labEquipmentById: Record<string, LabEquipment> = Object.fromEntries(labEquipment.map((e) => [e.id, e]));
