// Some authored RFQ question groups scope themselves to product "concepts"
// (gasket, sleeve, sheet) rather than the canonical product ids. This maps
// those aliases to the real product ids so the dynamic questions fire.
export const PRODUCT_ALIASES: Record<string, string[]> = {
  gasket: ["cut-gaskets", "custom-die-cut"],
  "flange-gasket": ["cut-gaskets"],
  sleeve: ["rubber-sleeves", "pinch-valve-sleeves"],
  "pinch-valve-sleeve": ["pinch-valve-sleeves"],
  sheet: [
    "rubber-sheet",
    "fabric-reinforced-sheet",
    "sponge-foam-sheet",
    "food-grade-sheet",
    "potable-water-sheet",
    "high-temp-sheet",
  ],
  sheeting: ["rubber-sheet"],
  matting: ["rubber-pads"],
  seal: ["rubber-seals"],
  ring: ["rubber-seals", "rubber-washers"],
  molded: ["molded-parts"],
  liner: ["abrasion-liners", "tank-pipe-lining"],
};

// True if a group's product scope (possibly using aliases) covers productId.
export function groupMatchesProduct(appliesToProducts: string[], productId: string): boolean {
  if (appliesToProducts.length === 0) return true;
  for (const p of appliesToProducts) {
    if (p === productId) return true;
    if ((PRODUCT_ALIASES[p] ?? []).includes(productId)) return true;
  }
  return false;
}
