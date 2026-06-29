import type { LabZone } from "@/types/qaLab";
export const labStations: LabZone[] = [
  {
    "id": "sample-receiving",
    "name": "Sample Receiving Desk",
    "purpose": "The intake point where samples and specimens pulled from the production line are logged, identified, and tied back to their originating batch before any testing begins.",
    "whatHappens": "A technician records each incoming sample against its lot and station of origin, assigns a tracking identifier, and routes it to the appropriate bench based on the requested test plan. Nothing moves further into the lab until traceability back to the batch is established.",
    "equipmentConcept": [
      "label and barcode printer",
      "sample log terminal",
      "intake balance for quick mass check"
    ],
    "props": [
      "incoming sample tray",
      "lot traceability log binder",
      "barcode label printer",
      "status whiteboard listing pending jobs",
      "bins of bagged and tagged coupons"
    ],
    "relatedTests": [
      "visual",
      "dimensional"
    ],
    "signText": "SAMPLE RECEIVING"
  },
  {
    "id": "sample-prep",
    "name": "Sample Cutting / Preparation Bench",
    "purpose": "Where bulk sheet or molded pieces are cut into the standardized test specimens that mechanical and physical tests require.",
    "whatHappens": "Technicians die-cut dumbbells, punch discs, and buff coupons to the geometry each method calls for, then condition them before testing so results are comparable. Specimen quality is checked here because a poorly cut edge can quietly skew a tensile or tear result.",
    "equipmentConcept": [
      "dumbbell and disc cutting dies with a press",
      "rotary thickness gauge",
      "buffing wheel for surface prep"
    ],
    "props": [
      "set of steel cutting dies",
      "specimen press",
      "stack of die-cut dumbbell coupons",
      "conditioning rack",
      "thickness dial gauge"
    ],
    "relatedTests": [
      "tensile strength",
      "tear resistance",
      "hardness"
    ],
    "signText": "SPECIMEN PREP"
  },
  {
    "id": "rheology-cure",
    "name": "Rheology / Cure Testing Area",
    "purpose": "Where small uncured compound samples are evaluated for how they cure, giving an early read on whether a batch will vulcanize as intended.",
    "whatHappens": "A pellet of uncured compound is run on a moving die rheometer or oscillating curemeter to generate a cure curve concept, indicating scorch tendency and cure progression in demo form. This area is conceptual in the virtual lab and flags scorch or under-cure risk before parts are committed to the press.",
    "equipmentConcept": [
      "moving die rheometer (MDR)",
      "oscillating disc rheometer (ODR)",
      "Mooney viscometer"
    ],
    "props": [
      "rheometer cabinet with heated dies",
      "cure curve printout on the bench",
      "tray of uncured compound pellets",
      "sample tongs",
      "cycle status display"
    ],
    "relatedTests": [
      "hardness",
      "modulus"
    ],
    "signText": "RHEOLOGY / CURE"
  },
  {
    "id": "hardness",
    "name": "Hardness Testing Bench",
    "purpose": "Where the indentation hardness of cured rubber is checked as a fast, non-destructive screen of compound and cure state.",
    "whatHappens": "A Shore A or Shore D durometer is pressed against a flat, sufficiently thick coupon and several readings are averaged to a demo value. A hardness result far from the expected grade can hint at the wrong compound or an under-cure or over-cure condition, so it is treated as a status of pass demo or review needed rather than a certified number.",
    "equipmentConcept": [
      "Shore A durometer",
      "Shore D durometer",
      "durometer test stand"
    ],
    "props": [
      "durometer mounted on a test stand",
      "stacked rubber test pads",
      "calibration reference blocks",
      "flat granite bench surface",
      "reading log sheet"
    ],
    "relatedTests": [
      "hardness"
    ],
    "signText": "HARDNESS"
  },
  {
    "id": "tensile-utm",
    "name": "Tensile / Universal Testing Machine Area",
    "purpose": "Where dumbbell specimens are pulled to break to characterize strength, stretch, and stiffness of the cured rubber.",
    "whatHappens": "A universal testing machine grips a specimen and stretches it at a controlled rate while an extensometer tracks elongation, producing demo values for tensile strength, elongation at break, and modulus together. A low or erratic result is flagged as review needed because it commonly points to under-cure, poor dispersion, or contamination rather than to a true material grade.",
    "equipmentConcept": [
      "universal testing machine (UTM)",
      "extensometer",
      "pneumatic specimen grips"
    ],
    "props": [
      "floor-standing UTM with crosshead",
      "tray of dumbbell specimens",
      "stress-strain curve on the control screen",
      "broken specimen halves in a tray",
      "grip alignment jig"
    ],
    "relatedTests": [
      "tensile strength",
      "elongation",
      "modulus"
    ],
    "signText": "TENSILE / UTM"
  },
  {
    "id": "compression-set",
    "name": "Compression Set Station",
    "purpose": "Where rubber is held compressed for a period to see how much permanent deformation remains after release, a key indicator for sealing parts.",
    "whatHappens": "Disc specimens are clamped at a fixed deflection in a jig, held in an oven for a set duration, then released and remeasured for recovery in demo form. Poor recovery is reported as review needed because it commonly signals an over-cure, under-cure, or a compound poorly suited to long-term sealing.",
    "equipmentConcept": [
      "compression set jig with spacer bars",
      "thickness measuring stand",
      "conditioning oven"
    ],
    "props": [
      "stacked compression jigs with bolted plates",
      "puck-shaped disc specimens",
      "spacer bar set",
      "dial thickness stand",
      "timer and oven log"
    ],
    "relatedTests": [
      "compression set",
      "thickness"
    ],
    "signText": "COMPRESSION SET"
  },
  {
    "id": "aging-oven",
    "name": "Aging / Oven Testing Area",
    "purpose": "Where specimens are exposed to elevated temperature for a defined time to estimate how properties may shift as the material ages.",
    "whatHappens": "Coupons are placed in a circulating air oven and held warm, then retested for hardness and tensile change against their as-received state in demo form. A large drift after aging is flagged as review needed, since heat aging often surfaces a compound that will harden, soften, or embrittle in service.",
    "equipmentConcept": [
      "air circulating aging oven",
      "cell aging oven for separating compounds",
      "durometer for post-aging checks"
    ],
    "props": [
      "forced-air aging oven",
      "specimen hang rack inside the chamber",
      "oven log with elapsed-time entries",
      "heat-resistant gloves",
      "tray of before-and-after coupons"
    ],
    "relatedTests": [
      "heat aging",
      "hardness",
      "tensile strength"
    ],
    "signText": "HEAT AGING OVENS"
  },
  {
    "id": "fluid-immersion",
    "name": "Fluid Immersion Station",
    "purpose": "Where specimens are soaked in representative test fluids to gauge how much the rubber may swell, soften, or change when exposed to oils or chemicals.",
    "whatHappens": "Coupons are immersed in sealed jars of test media for a set period, then weighed and measured for volume and property change in demo form. Excessive swelling is reported as review needed because it commonly indicates the elastomer family is a poor match for the fluid, a frequent concern for oil and chemical exposure parts.",
    "equipmentConcept": [
      "sealed immersion jars and bath",
      "analytical balance for mass change",
      "fume hood for volatile media"
    ],
    "props": [
      "rows of labeled immersion jars",
      "fume hood with sample baskets",
      "analytical balance",
      "volume displacement cup",
      "chemical handling tray with gloves"
    ],
    "relatedTests": [
      "fluid immersion",
      "specific gravity"
    ],
    "signText": "FLUID IMMERSION"
  },
  {
    "id": "ozone-weathering",
    "name": "Ozone / Weathering Chamber Area",
    "purpose": "Where stretched specimens are exposed to controlled ozone and weathering conditions to screen for surface cracking resistance.",
    "whatHappens": "Strips held under tension on a rack are placed in an ozone chamber and inspected over time for the onset of fine surface cracks in demo form. Early cracking is flagged as review needed, since it commonly distinguishes weather-resistant families from those that degrade outdoors or under ozone.",
    "equipmentConcept": [
      "ozone test chamber",
      "static strain test racks",
      "weatherometer concept for light and moisture"
    ],
    "props": [
      "sealed ozone chamber with viewing window",
      "bent-loop specimen racks",
      "magnifier for crack inspection",
      "exposure timer panel",
      "outdoor-aging sample board"
    ],
    "relatedTests": [
      "ozone/weathering",
      "visual"
    ],
    "signText": "OZONE / WEATHERING"
  },
  {
    "id": "abrasion",
    "name": "Abrasion Testing Area",
    "purpose": "Where rubber is worn against an abrasive surface to compare how well a compound resists material loss in wear-driven service.",
    "whatHappens": "A specimen is pressed against a rotating abrasive drum and the volume lost is measured in demo form to rank wear resistance. High material loss is reported as review needed, since abrasion performance helps confirm whether a compound suits parts that see rubbing, sliding, or scuffing.",
    "equipmentConcept": [
      "rotary drum abrasion tester",
      "cylindrical specimen holder",
      "precision balance for mass loss"
    ],
    "props": [
      "rotating abrasion drum with mounted abrasive sheet",
      "cylindrical specimen pegs",
      "worn coupons in a sample tray",
      "balance for weighing loss",
      "abrasive sheet stock roll"
    ],
    "relatedTests": [
      "abrasion",
      "specific gravity"
    ],
    "signText": "ABRASION TEST"
  },
  {
    "id": "dimensional",
    "name": "Dimensional Inspection Bench",
    "purpose": "Where finished and in-process pieces are measured against drawing tolerances for size, thickness, and form.",
    "whatHappens": "Technicians use calipers, micrometers, and thickness gauges to verify key dimensions and check for distortion, then record each measurement against the spec. A part outside tolerance is logged as fail demo or review needed and tied back to its trimming, calendering, or molding step.",
    "equipmentConcept": [
      "digital calipers and micrometers",
      "dial thickness gauge",
      "optical comparator or measuring microscope"
    ],
    "props": [
      "granite surface plate",
      "caliper and micrometer set",
      "thickness dial gauge stand",
      "gauge pins and feeler gauges",
      "inspection drawing on a stand"
    ],
    "relatedTests": [
      "dimensional",
      "thickness",
      "visual"
    ],
    "signText": "DIMENSIONAL INSPECTION"
  },
  {
    "id": "documentation-release",
    "name": "Documentation / Release Desk",
    "purpose": "Where test outcomes are gathered into a demo conformance summary that decides whether a lot is recommended for release or held for review.",
    "whatHappens": "The technician compiles qualitative statuses across the test plan, confirms traceability to the batch, and prepares a demo release record. This desk does not issue official certificates; it produces an educational summary clearly labeled as simulated, with any failing or pending item flagged for follow-up.",
    "equipmentConcept": [
      "documentation workstation",
      "report and label printer",
      "records archive terminal"
    ],
    "props": [
      "release desk with monitor",
      "demo conformance summary sheet (marked simulated)",
      "batch traceability folder",
      "status stamp set (hold / release demo)",
      "sign-off log binder"
    ],
    "relatedTests": [
      "visual",
      "dimensional",
      "hardness"
    ],
    "signText": "DOCUMENTATION / RELEASE"
  },
  {
    "id": "retained-storage",
    "name": "Retained Sample Storage",
    "purpose": "Where a portion of each tested lot is archived and held so that questions raised later can be checked against a real piece of the original material.",
    "whatHappens": "Labeled retain coupons are filed by lot and date on controlled shelving and kept for a defined retention period. If a customer concern or later test dispute arises, the matching retain is pulled to re-examine or re-test against the original batch in demo form.",
    "equipmentConcept": [
      "controlled retain shelving",
      "retain log terminal",
      "environmental monitor for storage conditions"
    ],
    "props": [
      "rows of labeled retain bins",
      "shelving organized by lot and date",
      "retain register binder",
      "temperature and humidity gauge",
      "sealed retain sample bags"
    ],
    "relatedTests": [
      "visual",
      "dimensional"
    ],
    "signText": "RETAINED SAMPLES"
  }
];
export const labStationsById: Record<string, LabZone> = Object.fromEntries(labStations.map((z) => [z.id, z]));
