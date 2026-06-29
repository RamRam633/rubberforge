import type { Ingredient, IngredientId } from "@/types/simulation";

// The six raw ingredient CATEGORIES for a black EPDM rubber sheet.
// Generic, educational categories: no real formulation or loadings.
export const ingredients: Ingredient[] = [
  {
    id: "polymer",
    category: "Elastomer base",
    displayName: "EPDM Elastomer",
    role: "The rubber matrix that everything else is mixed into",
    description:
      "EPDM (ethylene propylene diene monomer) is a saturated-backbone synthetic rubber that forms the continuous elastic phase of the sheet. Its low residual unsaturation is what gives the finished product its standout resistance to weather, ozone, and heat.",
    appearance:
      "Supplied as large compact bales or friable crumb of pale, slightly translucent off-white rubber, firm to the touch.",
    contributesTo: ["flexibility", "weather resistance", "elasticity", "heat resistance"],
    colorHint: "#EDE6D6",
    form: "bale",
  },
  {
    id: "filler",
    category: "Reinforcing filler",
    displayName: "Carbon Black",
    role: "Reinforces the matrix and provides the deep black color",
    description:
      "Carbon black is a reinforcing filler whose fine particles bond into the rubber network to raise strength, stiffness, and abrasion resistance. It simultaneously delivers the characteristic deep black tone and helps screen the compound from UV light.",
    appearance:
      "An extremely fine, light, dusty powder of intense matte near-black, staining and easily airborne.",
    contributesTo: ["strength", "abrasion resistance", "durability", "color"],
    colorHint: "#1A1A1A",
    form: "powder",
  },
  {
    id: "process-oil",
    category: "Plasticizer oil",
    displayName: "Process Oil",
    role: "Softens the compound and eases mixing and forming",
    description:
      "Process oil is a plasticizing fluid that lubricates the rubber chains so the stiff polymer and powdery filler can be blended and shaped smoothly. It lowers viscosity, improves workability, and tunes the softness of the cured sheet.",
    appearance:
      "A clear-to-amber viscous oil that pours slowly, leaving a slick film, ranging from straw to dark honey in tone.",
    contributesTo: ["workability", "flexibility", "softness", "mixing ease"],
    colorHint: "#C8922E",
    form: "liquid",
  },
  {
    id: "protective-additives",
    category: "Antidegradant package",
    displayName: "Protective Additives",
    role: "Resist aging from heat, oxygen, ozone, and weather",
    description:
      "This category of antioxidants and antiozonants intercepts the chemical reactions that would otherwise crack and embrittle rubber over time. They extend service life by guarding the compound against heat, oxygen, ozone, and outdoor exposure.",
    appearance:
      "Typically waxy flakes, pale pastilles, or tan-to-brown granules, sometimes faintly oily to the touch.",
    contributesTo: ["durability", "ozone resistance", "weather resistance", "service life"],
    colorHint: "#B8A074",
    form: "granule",
  },
  {
    id: "cure-package",
    category: "Vulcanization system",
    displayName: "Cure Package",
    role: "Enables crosslinking that turns the mix into solid rubber",
    description:
      "The cure package is the conceptual system of curing agents and accelerators that forms crosslinks between polymer chains during vulcanization. Crosslinking is what converts the soft, plastic mixture into a permanently elastic, set-resistant sheet.",
    appearance:
      "A blend of fine pale-yellow and off-white crystalline solids, often dispersed on a carrier so it looks like light dusty granules.",
    contributesTo: ["elasticity", "strength", "heat resistance", "shape retention"],
    colorHint: "#E8DFA8",
    form: "granule",
  },
  {
    id: "pigment",
    category: "Colorant",
    displayName: "Black Pigment",
    role: "Sets and reinforces the final black appearance and identity",
    description:
      "Pigment is the colorant category that fixes the sheet's visual identity, here kept generically black for a consistent, uniform color. It ensures a deep, even tone across the roll and reinforces the product's black appearance for easy identification.",
    appearance:
      "A dense, very fine deep-black powder or paste-like dispersion, uniform and strongly tinting in small amounts.",
    contributesTo: ["color", "appearance", "consistency", "identification"],
    colorHint: "#0E0E10",
    form: "powder",
  },
];

export const ingredientsById: Record<IngredientId, Ingredient> = ingredients.reduce(
  (acc, ing) => {
    acc[ing.id] = ing;
    return acc;
  },
  {} as Record<IngredientId, Ingredient>,
);

export const ALL_INGREDIENT_IDS: IngredientId[] = ingredients.map((i) => i.id);
