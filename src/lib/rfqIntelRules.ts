import type { RfqRuleGroup, RfqGroupCategory } from "@/types/quality";
import { rfqIntelGroups } from "./rfqIntelGroups";
import { groupMatchesProduct } from "./productAliases";

export const RFQ_CATEGORY_LABELS: Record<RfqGroupCategory, string> = {
  "material-sourcing": "Material & sourcing",
  "product-manufacturing": "Product & manufacturing",
  "quality-documentation": "Quality & documentation",
  "supply-chain": "Supply chain",
  "quality-test": "Testing requirements",
};

// Groups whose material / product / environment scopes match the selection.
// A group with no scopes is general and always applies. A group with scopes
// applies only when each of its non-empty scopes matches.
export function applicableRfqGroups(
  productId: string,
  materialId: string,
  environment: string[],
): RfqRuleGroup[] {
  return rfqIntelGroups.filter((g) => {
    const checks: boolean[] = [];
    if (g.appliesToMaterials.length) checks.push(g.appliesToMaterials.includes(materialId));
    if (g.appliesToProducts.length) checks.push(groupMatchesProduct(g.appliesToProducts, productId));
    if (g.appliesToEnvironments.length)
      checks.push(
        g.appliesToEnvironments.some((e) => environment.some((env) => env.toLowerCase().includes(e.toLowerCase()))),
      );
    return checks.length === 0 || checks.every(Boolean);
  });
}
