import type { CalibrationItem } from "@/types/qms";
export const calibrationRecords: CalibrationItem[] = [
  {
    "id": "durometer",
    "equipmentName": "Shore A Durometer (demo)",
    "area": "QC lab, hardness bench",
    "calibrationRequired": true,
    "calibrationStatus": "current",
    "lastCalibration": "2026-01 (demo)",
    "nextDue": "2027-01 (demo)",
    "owner": "Lab Technician",
    "relatedTest": "Hardness (Shore A durometer)",
    "recordConcept": "Calibration certificate against reference blocks (demo)"
  },
  {
    "id": "thickness-gauge",
    "equipmentName": "Thickness Gauge / Dial Micrometer (demo)",
    "area": "QC lab, dimensional bench",
    "calibrationRequired": true,
    "calibrationStatus": "current",
    "lastCalibration": "2026-02 (demo)",
    "nextDue": "2027-02 (demo)",
    "owner": "Lab Technician",
    "relatedTest": "Sheet thickness / gauge measurement",
    "recordConcept": "Gauge-block verification log (demo)"
  },
  {
    "id": "tensile-tester",
    "equipmentName": "Universal Tensile Tester (demo)",
    "area": "QC lab, physical-test cell",
    "calibrationRequired": true,
    "calibrationStatus": "due-soon",
    "lastCalibration": "2025-07 (demo)",
    "nextDue": "2026-07 (demo)",
    "owner": "Lab Supervisor",
    "relatedTest": "Tensile strength and elongation at break",
    "recordConcept": "Load-cell calibration record with traceability (demo)"
  },
  {
    "id": "compression-set-fixtures",
    "equipmentName": "Compression Set Fixtures and Spacers (demo)",
    "area": "QC lab, oven/aging area",
    "calibrationRequired": true,
    "calibrationStatus": "current",
    "lastCalibration": "2026-03 (demo)",
    "nextDue": "2027-03 (demo)",
    "owner": "Lab Technician",
    "relatedTest": "Compression set (deflection recovery)",
    "recordConcept": "Spacer-height dimensional check sheet (demo)"
  },
  {
    "id": "scales",
    "equipmentName": "Analytical and Bench Scales (demo)",
    "area": "Weigh station and lab",
    "calibrationRequired": true,
    "calibrationStatus": "current",
    "lastCalibration": "2026-04 (demo)",
    "nextDue": "2026-10 (demo)",
    "owner": "Weigh-Room Operator",
    "relatedTest": "Specific gravity / mass and batch weighment",
    "recordConcept": "Reference-weight verification log (demo)"
  },
  {
    "id": "temperature-devices",
    "equipmentName": "Temperature Measurement Devices (Thermocouples / IR) (demo)",
    "area": "Mixing, curing and lab areas",
    "calibrationRequired": true,
    "calibrationStatus": "due-soon",
    "lastCalibration": "2025-09 (demo)",
    "nextDue": "2026-09 (demo)",
    "owner": "Maintenance Engineer",
    "relatedTest": "Process temperature monitoring",
    "recordConcept": "Multi-point temperature calibration record (demo)"
  },
  {
    "id": "curing-instrumentation",
    "equipmentName": "Curing Chamber Instrumentation (concept, modeled)",
    "area": "Curing / autoclave station",
    "calibrationRequired": true,
    "calibrationStatus": "overdue",
    "lastCalibration": "2025-04 (demo)",
    "nextDue": "2026-04 (demo)",
    "owner": "Process Engineer",
    "relatedTest": "Cure adequacy / state of cure (concept)",
    "recordConcept": "Modeled sensor verification and uniformity survey (future-integration)"
  },
  {
    "id": "inspection-tools",
    "equipmentName": "Inspection Tools (Gauges, Calipers, Templates) (demo)",
    "area": "Inspection / finishing station",
    "calibrationRequired": true,
    "calibrationStatus": "current",
    "lastCalibration": "2026-02 (demo)",
    "nextDue": "2026-08 (demo)",
    "owner": "Quality Inspector",
    "relatedTest": "Visual and dimensional inspection",
    "recordConcept": "Hand-tool calibration register (demo)"
  },
  {
    "id": "calender-gauge",
    "equipmentName": "Calender Gauge / Thickness Sensor System (concept, modeled)",
    "area": "Calendering station",
    "calibrationRequired": true,
    "calibrationStatus": "not-applicable-demo",
    "lastCalibration": "n/a (demo placeholder)",
    "nextDue": "n/a (demo placeholder)",
    "owner": "Process Engineer",
    "relatedTest": "In-line sheet thickness profile (concept)",
    "recordConcept": "Modeled beta/profile-gauge verification (future-integration)"
  }
];
