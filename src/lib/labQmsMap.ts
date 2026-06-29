import type { LabQmsLink } from "@/types/qaLab";
export const labQmsMap: LabQmsLink[] = [
  {
    "station": "rheology-cure",
    "controlledMethodRef": "ASTM D5289 / ISO 6502 (oscillating disc and moving die rheometry, referenced by designation only)",
    "calibrationConcept": "torque and temperature transducer verification against traceable reference standards on a defined interval",
    "recordGenerated": "demo cure-curve record showing scorch and optimum-cure markers, simulated and labeled DEMO",
    "traceability": "linked to demo batch ID, compound code, and instrument serial in the virtual log",
    "reviewStatus": "controlled-demo",
    "ncrTrigger": "demo cure profile drifts outside the conceptual acceptance window for scorch or cure time",
    "capaLink": "raises a demo CAPA concept to investigate mixing or material variation",
    "auditEvidence": "retained cure-curve record plus instrument calibration status flag (demo)"
  },
  {
    "station": "hardness",
    "controlledMethodRef": "ASTM D2240 / ISO 48 (durometer and IRHD hardness, referenced by designation only)",
    "calibrationConcept": "durometer indenter and spring force checked against certified reference blocks periodically",
    "recordGenerated": "demo hardness reading set with median value, simulated and labeled DEMO",
    "traceability": "tied to demo sample ID and durometer asset number in the virtual log",
    "reviewStatus": "controlled-demo",
    "ncrTrigger": "demo median hardness falls outside the stated qualitative target band",
    "capaLink": "links to a demo CAPA concept on cure state or filler loading review",
    "auditEvidence": "retained hardness record with reference-block check note (demo)"
  },
  {
    "station": "tensile-utm",
    "controlledMethodRef": "ASTM D412 / ISO 37 (tensile strength and elongation of vulcanized rubber, referenced by designation only)",
    "calibrationConcept": "load cell and extensometer verified against traceable masses and gauge standards on schedule",
    "recordGenerated": "demo stress-strain summary with tensile and elongation results, simulated and labeled DEMO",
    "traceability": "associated with demo specimen die ID, batch, and UTM serial in the virtual log",
    "reviewStatus": "review-required-demo",
    "ncrTrigger": "demo tensile or elongation result indicates a weak or undercured specimen versus the qualitative spec",
    "capaLink": "opens a demo CAPA concept to examine dispersion or cure adequacy",
    "auditEvidence": "retained stress-strain record plus load-cell calibration status (demo)"
  },
  {
    "station": "compression-set",
    "controlledMethodRef": "ASTM D395 / ISO 815 (compression set under constant deflection, referenced by designation only)",
    "calibrationConcept": "spacer thickness gauges and oven temperature uniformity verified against traceable standards",
    "recordGenerated": "demo compression-set percentage record with recovery note, simulated and labeled DEMO",
    "traceability": "linked to demo button ID, fixture number, and conditioning log in the virtual record",
    "reviewStatus": "review-required-demo",
    "ncrTrigger": "demo set percentage exceeds the qualitative limit indicating poor recovery",
    "capaLink": "links to a demo CAPA concept on crosslink density and cure-state review",
    "auditEvidence": "retained set-result record with fixture and conditioning trace (demo)"
  },
  {
    "station": "aging-oven",
    "controlledMethodRef": "ASTM D573 / ISO 188 (heat aging in an air oven, referenced by designation only)",
    "calibrationConcept": "oven temperature and air-circulation uniformity mapped against a traceable thermometer",
    "recordGenerated": "demo before-and-after property retention record, simulated and labeled DEMO",
    "traceability": "tied to demo specimen set, oven asset ID, and exposure-duration log entry",
    "reviewStatus": "controlled-demo",
    "ncrTrigger": "demo retained property after aging drops below the qualitative retention threshold",
    "capaLink": "raises a demo CAPA concept to review antidegradant package adequacy",
    "auditEvidence": "retained aging record with oven temperature-mapping reference (demo)"
  },
  {
    "station": "fluid-immersion",
    "controlledMethodRef": "ASTM D471 / ISO 1817 (effect of liquids on rubber, referenced by designation only)",
    "calibrationConcept": "balance and volume measurement verified against traceable masses and reference volumes",
    "recordGenerated": "demo mass and volume change record after immersion, simulated and labeled DEMO",
    "traceability": "associated with demo specimen ID, test-fluid lot reference, and immersion log",
    "reviewStatus": "review-required-demo",
    "ncrTrigger": "demo swell or mass change exceeds the qualitative compatibility limit for the service fluid",
    "capaLink": "opens a demo CAPA concept on polymer-fluid compatibility selection",
    "auditEvidence": "retained immersion record with balance calibration status note (demo)"
  },
  {
    "station": "ozone-weathering",
    "controlledMethodRef": "ASTM D1149 / ISO 1431 (ozone resistance under static or dynamic strain, referenced by designation only)",
    "calibrationConcept": "ozone concentration and chamber temperature verified against a traceable monitoring reference",
    "recordGenerated": "demo surface-cracking rating record after exposure, simulated and labeled DEMO",
    "traceability": "linked to demo specimen ID, chamber asset number, and exposure-cycle log",
    "reviewStatus": "controlled-demo",
    "ncrTrigger": "demo specimen shows surface cracking earlier than the qualitative resistance expectation",
    "capaLink": "links to a demo CAPA concept on antiozonant and polymer-backbone review",
    "auditEvidence": "retained cracking-rating record with ozone-monitor calibration flag (demo)"
  },
  {
    "station": "dimensional",
    "controlledMethodRef": "lab procedure (demo) for dimensional verification of molded and extruded parts",
    "calibrationConcept": "calipers, optical comparator, and gauges verified against traceable gauge blocks on interval",
    "recordGenerated": "demo dimensional inspection record against nominal and tolerance, simulated and labeled DEMO",
    "traceability": "tied to demo part number, drawing revision, and measuring-instrument asset ID",
    "reviewStatus": "controlled-demo",
    "ncrTrigger": "demo measured feature falls outside the stated qualitative tolerance band",
    "capaLink": "raises a demo CAPA concept on mold wear or shrinkage-compensation review",
    "auditEvidence": "retained dimensional record with gauge-block calibration reference (demo)"
  },
  {
    "station": "documentation-release",
    "controlledMethodRef": "lab procedure (demo) for record review and conditional release decision",
    "calibrationConcept": "no instrument; periodic review that controlled methods and asset calibrations remain current",
    "recordGenerated": "demo release-review summary with disposition status, simulated and labeled DEMO",
    "traceability": "consolidates demo batch ID, all upstream station records, and reviewer sign-off reference",
    "reviewStatus": "review-required-demo",
    "ncrTrigger": "demo release attempted while an upstream station record is pending or shows a failing result",
    "capaLink": "links any open demo NCR to its corresponding demo CAPA concept before disposition",
    "auditEvidence": "retained release-review summary with linked record index and reviewer trace (demo)"
  }
];
export const labQmsByStation: Record<string, LabQmsLink> = Object.fromEntries(labQmsMap.map((l) => [l.station, l]));
