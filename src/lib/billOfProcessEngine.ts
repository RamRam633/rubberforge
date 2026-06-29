import type { RouteStep } from "@/types/platform";
import type { Equipment } from "@/types/factoryIntel";
import type { ReviewOwner } from "@/types/quality";
import { productCategoriesById } from "./productCategories";
import { materialFamiliesById } from "./materialFamilies";
import { equipmentLibrary } from "./equipmentLibrary";
import { inspectionTemplatesById } from "./inspectionPlans";
import { suggestRoute } from "./routeEngine";

export interface BillOfProcess {
  productName: string;
  materialName: string;
  route: RouteStep[];
  routeNote: string;
  requiredEquipment: Equipment[];
  ingredientCategories: string[];
  processCheckpoints: string[];
  qualityChecks: string[];
  documentsToRequest: string[];
  sourcingQuestions: string[];
  technicalRisks: string[];
  reviewOwners: ReviewOwner[];
}

// Deterministic "Factory Bill of Process" for a product + material.
export function buildBillOfProcess(productId: string, materialId: string): BillOfProcess {
  const product = productCategoriesById[productId];
  const material = materialFamiliesById[materialId];
  const fabric = productId === "fabric-reinforced-sheet";
  const route = suggestRoute(productId, { fabricReinforced: fabric });

  // Equipment whose related-products list includes this product.
  let requiredEquipment = equipmentLibrary.filter((e) => e.relatedProducts.includes(productId));
  if (requiredEquipment.length === 0) {
    // Fallback: core line equipment (mixing/milling/forming/curing/inspection).
    const coreCats = ["mixing", "milling", "sheeting-forming", "curing", "inspection-testing"];
    requiredEquipment = equipmentLibrary.filter((e) => coreCats.includes(e.category));
  }

  const ingredientCategories = [
    material ? `Base polymer (${material.abbreviation})` : "Base polymer",
    "Reinforcing filler",
    "Process oil / plasticizer",
    "Protective additives (antioxidant / antiozonant)",
    "Cure system",
    "Pigment",
    ...(fabric ? ["Reinforcement fabric"] : []),
  ];

  const template = inspectionTemplatesById[productId];
  const qualityChecks = template?.recommendedChecks ?? [
    "Material identity verification",
    "Thickness / dimensional inspection",
    "Hardness check",
    "Visual inspection",
  ];
  const documentsToRequest = template?.documentsToRequest ?? [
    "Certificate of conformity (if requested)",
    "Lot traceability summary",
  ];

  const processCheckpoints = [
    "Incoming raw material inspection and certificate review",
    "Batch weighing verification and lot traceability",
    "In-process inspection at mixing, forming, and curing",
    "Finished-product inspection and release",
  ];

  const technicalRisks = [
    ...(product?.commonDefects ?? []),
    ...(material ? [material.cautionNotes] : []),
  ].filter(Boolean);

  return {
    productName: product?.name ?? "Unspecified product",
    materialName: material ? `${material.displayName} (${material.abbreviation})` : "Unspecified material",
    route,
    routeNote: product?.routeNote ?? "Preliminary route guidance, not a production plan.",
    requiredEquipment,
    ingredientCategories,
    processCheckpoints,
    qualityChecks,
    documentsToRequest,
    sourcingQuestions: material?.quoteQuestions ?? [],
    technicalRisks,
    reviewOwners: ["engineering", "quality", "production", "purchasing"],
  };
}
