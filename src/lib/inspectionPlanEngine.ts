import type { InspectionPlan, QualityReview, ReviewOwner } from "@/types/quality";
import { productCategoriesById } from "./productCategories";
import { materialFamiliesById } from "./materialFamilies";
import { inspectionTemplatesById } from "./inspectionPlans";
import { qualityTestsById } from "./qualityTests";

export interface InspectionPlanInput {
  productId: string;
  materialId: string;
  environment: string[];
  criticalRequirement?: string;
  certificationRequested?: string;
  drawingAvailable?: boolean;
}

const envHas = (env: string[], ...needles: string[]) =>
  env.some((e) => needles.some((n) => e.toLowerCase().includes(n)));

// Environment + product driven test additions (display names).
function environmentTests(productId: string, env: string[]): string[] {
  const out: string[] = [];
  if (envHas(env, "oil", "fuel", "chemical", "solvent")) out.push("Fluid immersion / oil swell");
  if (envHas(env, "weather", "outdoor", "uv", "ozone")) out.push("Ozone / weathering resistance", "Heat aging");
  if (envHas(env, "high temp")) out.push("Heat aging");
  if (envHas(env, "low temp")) out.push("Low-temperature flexibility");
  if (productId.includes("gasket") || productId.includes("seal")) out.push("Compression set");
  if (productId.includes("fabric")) out.push("Ply adhesion");
  return [...new Set(out)];
}

export function buildInspectionPlan(input: InspectionPlanInput): InspectionPlan {
  const product = productCategoriesById[input.productId];
  const material = materialFamiliesById[input.materialId];
  const template = inspectionTemplatesById[input.productId];

  const recommendedChecks = template?.recommendedChecks ?? [
    "Material identity verification",
    "Thickness / dimensional inspection",
    "Hardness",
    "Visual inspection",
    "Lot traceability review",
  ];

  const envTests = environmentTests(input.productId, input.environment);
  const optionalChecks = [...new Set([...(template?.optionalChecks ?? []), ...envTests])].filter(
    (c) => !recommendedChecks.includes(c),
  );

  // Customer-requested tests parsed from the certification/testing request.
  const req = (input.certificationRequested ?? "").toLowerCase();
  const reqMap: [string, string][] = [
    ["hardness", "Hardness"],
    ["tensile", "Tensile strength"],
    ["elongation", "Elongation at break"],
    ["compression", "Compression set"],
    ["immersion", "Fluid immersion / oil swell"],
    ["oil", "Fluid immersion / oil swell"],
    ["aging", "Heat aging"],
    ["ozone", "Ozone / weathering resistance"],
    ["dimension", "Dimensional inspection"],
    ["adhesion", "Ply adhesion"],
    ["density", "Specific gravity / density"],
    ["abrasion", "Abrasion resistance"],
  ];
  const customerRequestedTests = [...new Set(reqMap.filter(([k]) => req.includes(k)).map(([, v]) => v))];

  const documentsToRequest = template?.documentsToRequest ?? [
    "Certificate of conformity (if requested)",
    "Lot traceability summary",
  ];

  // Standards from the template plus any implied by the test set.
  const allTests = [...recommendedChecks, ...optionalChecks, ...customerRequestedTests];
  const impliedStandards = new Set<string>(template?.standardsToConsider ?? []);
  Object.values(qualityTestsById).forEach((t) => {
    if (allTests.some((c) => c.toLowerCase().includes(t.name.toLowerCase().split(" ")[0]))) {
      t.relatedStandards.forEach((s) => impliedStandards.add(s.toUpperCase().replace(/-/g, " ")));
    }
  });
  const standardsToConsider = [...impliedStandards].slice(0, 8);

  const missingQualityInfo: string[] = [];
  const needsDrawing = /gasket|molded|die-cut|sleeve|washer|bushing/.test(input.productId);
  if (needsDrawing && !input.drawingAvailable)
    missingQualityInfo.push("Drawing or sample for dimensional inspection and tolerances");
  if (input.certificationRequested && !req.match(/astm|iso|spec|d\d|standard/))
    missingQualityInfo.push("Specific standard or specification for the requested testing");
  if (input.environment.length === 0) missingQualityInfo.push("Service environment (drives which tests apply)");

  const internalReviewNotes = [
    ...(template?.reviewNotes ?? []),
    material ? `Confirm ${material.abbreviation} suitability against the stated environment in technical review.` : "",
    "Preliminary inspection plan. Requires quality and engineering review before release.",
  ].filter(Boolean);

  return {
    productName: product?.name ?? "Unspecified product",
    materialName: material ? `${material.displayName} (${material.abbreviation})` : "Unspecified material",
    recommendedChecks,
    optionalChecks,
    customerRequestedTests,
    missingQualityInfo,
    documentsToRequest,
    standardsToConsider,
    internalReviewNotes,
  };
}

// Internal quality review summary (risk + owners) for a selection.
export function buildQualityReview(input: InspectionPlanInput, flags: { traceability?: boolean; certificate?: boolean }): QualityReview {
  const plan = buildInspectionPlan(input);
  let risk: QualityReview["riskLevel"] = "low";
  const hi = envHas(input.environment, "oil", "chemical", "high temp", "ozone", "food", "potable", "steam");
  if (hi || plan.customerRequestedTests.length >= 2) risk = "medium";
  if ((hi && plan.customerRequestedTests.length >= 2) || plan.missingQualityInfo.length >= 2) risk = "high";

  const owners: ReviewOwner[] = ["quality", "engineering"];
  if (flags.certificate || plan.customerRequestedTests.length > 0) owners.push("production");
  if (envHas(input.environment, "food", "potable")) owners.push("purchasing");

  return {
    riskLevel: risk,
    requiredTests: plan.recommendedChecks,
    optionalTests: [...new Set([...plan.optionalChecks, ...plan.customerRequestedTests])],
    standards: plan.standardsToConsider,
    documents: plan.documentsToRequest,
    missingInfo: plan.missingQualityInfo,
    traceabilityRequired: Boolean(flags.traceability),
    reviewOwners: [...new Set(owners)],
  };
}
