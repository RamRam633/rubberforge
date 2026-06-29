import type { LabEngineResult, EngineTest, TestStatus } from "@/types/qaLab";
import { labTestEngineData } from "./labTestEngine";

// Deterministic DEMO test-recommendation engine. Qualitative statuses only, no
// real numeric results. Outputs are educational and require qualified lab
// procedures and review before any real use.

export interface LabEngineInput {
  materialId?: string;
  productId?: string;
  applications: string[]; // app keys
  defects: string[]; // defect ids
  customerTests: string[]; // test names requested by customer
}

// The baseline checks a rubber sheet sample generally gets.
const BASELINE = ["hardness", "thickness", "visual", "dimensional"];

// Map UI application keys to the authored rule phrasing.
const APP_KEYWORDS: Record<string, RegExp> = {
  outdoor: /outdoor|weather/i,
  oil: /oil/i,
  sealing: /seal|compress/i,
  abrasion: /abrasion/i,
  "high-temp": /high.?temp|temperature/i,
  potable: /potable|food/i,
  chemical: /chemical/i,
};

export const LAB_APPLICATIONS: { key: string; label: string }[] = [
  { key: "outdoor", label: "Outdoor / weather" },
  { key: "oil", label: "Oil exposure" },
  { key: "sealing", label: "Sealing / compression" },
  { key: "abrasion", label: "Abrasion" },
  { key: "high-temp", label: "High temperature" },
  { key: "potable", label: "Potable / food documentation" },
  { key: "chemical", label: "Chemical exposure" },
];

function norm(s: string): string {
  return s.trim().toLowerCase();
}

export function runLabTests(input: LabEngineInput): LabEngineResult {
  const recommended = new Map<string, { reason: string; fromDefect: boolean }>();
  const questions = new Set<string>();
  const warnings = new Set<string>();

  for (const t of BASELINE) recommended.set(t, { reason: "Baseline check for sheet stock.", fromDefect: false });

  // Application rules
  for (const app of input.applications) {
    const kw = APP_KEYWORDS[app];
    const rule = kw ? labTestEngineData.applicationRules.find((r) => kw.test(r.application)) : undefined;
    if (rule) {
      for (const t of rule.recommendedTests) if (!recommended.has(norm(t))) recommended.set(norm(t), { reason: `Service condition: ${rule.application}.`, fromDefect: false });
      rule.questionsToAsk.forEach((q) => questions.add(q));
      rule.warnings.forEach((wn) => warnings.add(wn));
    }
  }

  // Material rule
  if (input.materialId) {
    const mr = labTestEngineData.materialRules.find((r) => r.material === input.materialId);
    if (mr) for (const t of mr.recommendedTests) if (!recommended.has(norm(t))) recommended.set(norm(t), { reason: mr.note, fromDefect: false });
  }

  // Defect diagnostic rules
  const defectActive = input.defects.length > 0;
  for (const d of input.defects) {
    const dr = labTestEngineData.defectRules.find((r) => r.defect === d);
    if (dr) for (const t of dr.diagnosticTests) recommended.set(norm(t), { reason: `Helps diagnose ${d}: ${dr.howItHelps}`, fromDefect: true });
  }

  if (input.applications.length === 0 && input.defects.length === 0) {
    warnings.add("No service conditions or defects selected, so only baseline checks are suggested. Add application context for a fuller plan.");
  }

  const customerSet = new Set(input.customerTests.map(norm));

  const tests: EngineTest[] = [...recommended.entries()].map(([name, meta]) => {
    let status: TestStatus = "recommended";
    if (customerSet.has(name)) status = "required-by-customer";
    else if (meta.fromDefect) status = "review-needed";
    return { test: name, status, reason: meta.reason };
  });
  // Customer-requested tests not otherwise covered
  for (const ct of input.customerTests) {
    if (!recommended.has(norm(ct))) tests.push({ test: norm(ct), status: "required-by-customer", reason: "Requested by the customer." });
  }

  const missingTests = input.customerTests.map(norm).filter((ct) => !recommended.has(ct));

  let releaseDecision = "accepted-demo";
  if (defectActive) releaseDecision = "ncr-required";
  else if (warnings.size > 0 || missingTests.length > 0) releaseDecision = "customer-clarification-required";

  const documentationPackage = [
    "Certificate of conformance (demo)",
    "Traceability summary (lot to sample)",
    "Inspection record (demo)",
    "Test report preview (demo)",
  ];

  return {
    recommendedTests: tests,
    questions: [...questions],
    warnings: [...warnings],
    missingTests,
    releaseDecision,
    documentationPackage,
  };
}
