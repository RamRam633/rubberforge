import type { LabWorkflowStep } from "@/types/qaLab";
export const labWorkflow: LabWorkflowStep[] = [
  {
    "index": 1,
    "id": "receive",
    "title": "Receive Sample",
    "description": "The incoming compound sample or cured sheet section is logged into the virtual QA Lab and tied back to its batch and station history. Material family, application intent, and customer requirements are recorded so the test plan can be scoped before any specimen is cut.",
    "whatAppears": "A sample tray slides onto the intake bench and a traceability tag animates open, linking the sample card to its batch lineage and the finished-roll station upstream.",
    "outputConcept": "sample logged and traceability link established (demo)",
    "relatedZone": "Sample Intake and Traceability",
    "relatedTests": [
      "visual",
      "specific gravity"
    ]
  },
  {
    "index": 2,
    "id": "prepare",
    "title": "Prepare Specimens",
    "description": "Test pieces are conceptually die-cut and conditioned from the sheet so each property method has the geometry it expects, such as dumbbells for tensile and discs for compression set. This step shows why specimen geometry and conditioning matter without giving cutting settings or operational detail.",
    "whatAppears": "A sheet section animates under a cutting die outline and several specimen shapes (dumbbell, disc, strip) lift out and arrange onto a conditioning rack with a settling timer.",
    "outputConcept": "specimens prepared and conditioned (demo)",
    "relatedZone": "Specimen Preparation Bench",
    "relatedTests": [
      "thickness",
      "dimensional",
      "visual"
    ]
  },
  {
    "index": 3,
    "id": "cure-rheology",
    "title": "Cure / Rheology Review",
    "description": "The cure behavior of the compound is reviewed conceptually using an MDR or ODR style cure curve, illustrating scorch safety, cure development, and the torque rise that indicates crosslink formation. This is a teaching view of state of cure, not a machine instruction or cure schedule.",
    "whatAppears": "An MDR-style torque-versus-time curve draws in, highlighting the scorch toe, the rising cure slope, and a plateau marker, with under-cure and over-cure zones shaded on either side.",
    "outputConcept": "cure development reviewed, state of cure looks consistent (demo)",
    "relatedZone": "Rheology and Cure Review Station",
    "relatedTests": [
      "hardness",
      "compression set"
    ]
  },
  {
    "index": 4,
    "id": "hardness-thickness",
    "title": "Hardness and Thickness",
    "description": "Durometer hardness and sheet thickness are checked as fast, non-destructive indicators that the compound and cure landed in the expected range. Hardness commonly references method designations such as ASTM D2240 and ISO 7619, which broadly cover indentation hardness of rubber.",
    "whatAppears": "A durometer foot presses onto the specimen and a dial sweeps to a reading, while a thickness gauge steps across the sheet plotting a row of point measurements.",
    "outputConcept": "hardness and thickness within demo expectation (pass demo)",
    "relatedZone": "Physical Properties Bench",
    "relatedTests": [
      "hardness",
      "thickness"
    ]
  },
  {
    "index": 5,
    "id": "tensile",
    "title": "Tensile / Elongation",
    "description": "A specimen is pulled to illustrate stress-strain behavior, capturing tensile strength, elongation at break, and modulus at strain, the core mechanical indicators of a cured rubber. These properties commonly reference designations such as ASTM D412 and ISO 37, which broadly cover tension testing of vulcanized rubber.",
    "whatAppears": "A dumbbell specimen stretches between two grips as a stress-strain curve traces upward in real time, marking a modulus point on the rise and a break point where the curve ends.",
    "outputConcept": "tensile, elongation, and modulus look nominal (pass demo)",
    "relatedZone": "Universal Tensile Frame",
    "relatedTests": [
      "tensile strength",
      "elongation",
      "modulus"
    ]
  },
  {
    "index": 6,
    "id": "compression-set",
    "title": "Compression Set",
    "description": "Disc specimens are held under compression and then released to show how much permanent deformation remains, a key indicator for sealing and gasket service. Compression set commonly references designations such as ASTM D395 and ISO 815, which broadly cover the residual deformation of rubber under sustained compression.",
    "whatAppears": "Disc specimens compress between plates in a fixture, then release and partially recover, with a recovery percentage gauge filling in to show set remaining.",
    "outputConcept": "compression set looks acceptable for sealing intent (demo)",
    "relatedZone": "Compression Set Fixtures",
    "relatedTests": [
      "compression set"
    ]
  },
  {
    "index": 7,
    "id": "environmental",
    "title": "Environmental Testing",
    "description": "Aging, fluid immersion, and ozone or weathering exposures are selected based on the material family and application, since outdoor, oil, and high-temperature service stress rubber in different ways. These exposures commonly reference designations such as ASTM D573, D471, and D1149, or ISO 188, ISO 1817, and ISO 1431, which broadly cover heat aging, liquid immersion, and ozone resistance.",
    "whatAppears": "Three exposure chambers light up in sequence (heat oven, fluid bath, ozone cabinet) and a before-and-after property bar shows each specimen retaining or losing performance by exposure type.",
    "outputConcept": "environmental durability flagged as recommended or required by application (demo)",
    "relatedZone": "Environmental Exposure Chambers",
    "relatedTests": [
      "heat aging",
      "fluid immersion",
      "ozone/weathering"
    ]
  },
  {
    "index": 8,
    "id": "dimensional-visual",
    "title": "Dimensional / Visual Inspection",
    "description": "The cured sheet is measured against its dimensional targets and scanned for surface and internal defects such as bloom, trapped air, contamination, or cracking. This combines metrology with a trained visual review to catch issues that property tests alone may miss.",
    "whatAppears": "A measurement grid overlays the sheet checking width, thickness, and flatness, while a magnified surface scan highlights candidate defect spots with labeled callouts.",
    "outputConcept": "dimensions in tolerance, surface review needs a second look (review needed, demo)",
    "relatedZone": "Metrology and Visual Inspection Booth",
    "relatedTests": [
      "dimensional",
      "thickness",
      "visual"
    ]
  },
  {
    "index": 9,
    "id": "documentation",
    "title": "Documentation Review",
    "description": "All demo results, specimen records, and exposure selections are gathered into a single review package and checked against the customer requirements and referenced method designations. This step shows what a complete, traceable quality record looks like, not an official certificate or a compliance claim.",
    "whatAppears": "Result cards stack into a documentation folder and a checklist ticks through traceability, required tests, and method references, leaving any open items visibly flagged.",
    "outputConcept": "documentation package assembled, one item pending (demo)",
    "relatedZone": "Documentation and Records Review Desk",
    "relatedTests": [
      "dimensional",
      "visual",
      "specific gravity"
    ]
  },
  {
    "index": 10,
    "id": "release",
    "title": "Release Decision",
    "description": "The reviewer weighs the assembled demo results and open items to reach a conceptual disposition for the sample. This teaches how a real lab routes a lot to release, hold, or further action, always subject to qualified lab procedures and technical review.",
    "whatAppears": "A decision panel surfaces five routes and a marker settles onto one as the supporting result cards and open flags animate into the chosen path.",
    "outputConcept": "release options: accepted demo / hold for review / NCR required / customer clarification required / additional testing required",
    "relatedZone": "Release and Disposition Review",
    "relatedTests": [
      "visual",
      "dimensional",
      "hardness"
    ]
  }
];
