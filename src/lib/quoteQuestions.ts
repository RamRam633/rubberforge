import type { QuoteGroup } from "@/types/platform";
import { groupMatchesProduct } from "./productAliases";

export const quoteGroups: QuoteGroup[] = [
  {
    "id": "mat-epdm-exposure",
    "label": "EPDM: Exposure and Service Environment",
    "appliesToMaterials": [
      "epdm"
    ],
    "appliesToProducts": [],
    "questions": [
      {
        "id": "epdm-outdoor-weather",
        "label": "Will the part see outdoor, weather, ozone, or UV exposure?",
        "type": "select",
        "options": [
          "yes-continuous-outdoor",
          "yes-intermittent",
          "indoor-only",
          "application-dependent"
        ],
        "help": "EPDM is commonly chosen for outdoor and weathering service because it generally offers good ozone, UV, and weather resistance. Telling us the exposure helps confirm fit."
      },
      {
        "id": "epdm-water-steam-potable",
        "label": "Is the service hot water, steam, or potable (drinking) water?",
        "type": "select",
        "options": [
          "potable-water",
          "hot-water",
          "steam",
          "general-water",
          "not-water",
          "application-dependent"
        ],
        "help": "EPDM is often used for hot water and steam-side sealing. Potable water typically requires a documentation review, so flag it here if it applies."
      },
      {
        "id": "epdm-petroleum-contact",
        "label": "Will the part contact petroleum oils, fuels, or mineral-oil greases?",
        "type": "boolean",
        "help": "Important: EPDM is generally not suitable for petroleum oils and fuels. If oil or fuel contact is expected, a different polymer (for example NBR or FKM) usually requires technical review."
      },
      {
        "id": "epdm-temp-band",
        "label": "Roughly how hot does the service get?",
        "type": "select",
        "options": [
          "low",
          "medium",
          "high",
          "very-high",
          "application-dependent"
        ],
        "help": "Qualitative band only. Share the actual expected temperature in the notes if known so we can confirm suitability during technical review."
      },
      {
        "id": "epdm-notes",
        "label": "Other media or conditions we should know about",
        "type": "textarea",
        "help": "List any chemicals, cleaning agents, or unusual conditions the part will see. This guides compound selection."
      }
    ]
  },
  {
    "id": "mat-nbr-media",
    "label": "NBR (nitrile): Oil, Fuel, and Media Contact",
    "appliesToMaterials": [
      "nbr"
    ],
    "appliesToProducts": [],
    "questions": [
      {
        "id": "nbr-media-type",
        "label": "What oil, fuel, or media will the part contact?",
        "type": "textarea",
        "help": "NBR is commonly used for petroleum oils, fuels, and hydraulic fluids. Name the specific fluid (for example engine oil, diesel, hydraulic fluid) so we can confirm fit."
      },
      {
        "id": "nbr-ozone-weather",
        "label": "Is ozone, weather, or outdoor UV exposure significant?",
        "type": "boolean",
        "help": "Note: standard NBR generally has limited ozone and weather resistance. If outdoor exposure matters, a protected compound or an alternative polymer often requires technical review."
      },
      {
        "id": "nbr-temp-band",
        "label": "Service temperature band",
        "type": "select",
        "options": [
          "low",
          "medium",
          "high",
          "very-high",
          "application-dependent"
        ],
        "help": "Qualitative band only. NBR is typically used in low-to-medium temperature oil service; higher temperatures may point toward FKM or HNBR-type materials."
      },
      {
        "id": "nbr-dynamic-static",
        "label": "Is the application static or dynamic?",
        "type": "select",
        "options": [
          "static-seal",
          "dynamic-seal",
          "intermittent-movement",
          "application-dependent"
        ],
        "help": "Dynamic service adds wear and abrasion considerations that may influence the compound."
      }
    ]
  },
  {
    "id": "mat-silicone-service",
    "label": "Silicone (VMQ): Temperature, Mechanical Load, and Documentation",
    "appliesToMaterials": [
      "silicone"
    ],
    "appliesToProducts": [],
    "questions": [
      {
        "id": "silicone-temp-range",
        "label": "What temperature range must the part handle (cold and hot extremes)?",
        "type": "text",
        "help": "Silicone is commonly chosen for wide temperature range service, including high heat and cold flexibility. Describe both extremes so we can confirm suitability during technical review."
      },
      {
        "id": "silicone-tear-abrasion",
        "label": "Will the part see meaningful tear, abrasion, or mechanical stress?",
        "type": "select",
        "options": [
          "low",
          "medium",
          "high",
          "application-dependent"
        ],
        "help": "Note: standard silicone generally has lower tear and abrasion resistance than many other rubbers. High mechanical load may require a reinforced grade or a different polymer, which requires technical review."
      },
      {
        "id": "silicone-food-contact",
        "label": "Is food-contact or medical-type documentation needed?",
        "type": "boolean",
        "help": "Silicone is commonly used where food-contact-grade documentation is requested. Flag this so the right documentation path can be reviewed. We do not pre-certify suitability without review."
      },
      {
        "id": "silicone-media",
        "label": "What media or environment will the part contact?",
        "type": "textarea",
        "help": "List fluids, steam, dry heat, or other conditions. This helps confirm whether silicone or an alternative is the better fit."
      }
    ]
  },
  {
    "id": "mat-fkm-chemistry",
    "label": "FKM / fluoroelastomer: Chemistry, Temperature, and Cost",
    "appliesToMaterials": [
      "fkm"
    ],
    "appliesToProducts": [],
    "questions": [
      {
        "id": "fkm-chemicals",
        "label": "What chemicals or fluids will the part contact?",
        "type": "textarea",
        "help": "FKM (fluoroelastomer, also known by trade names such as Viton) is commonly used for aggressive fuels, oils, and many chemicals. Name the specific media so we can confirm fit, since some chemicals still require a specialty grade."
      },
      {
        "id": "fkm-temp-band",
        "label": "Service temperature band",
        "type": "select",
        "options": [
          "low",
          "medium",
          "high",
          "very-high",
          "application-dependent"
        ],
        "help": "Qualitative band only. FKM is often selected for high and very-high temperature chemical service. Share the actual expected temperature in notes if known."
      },
      {
        "id": "fkm-premium-cost",
        "label": "Is premium material cost acceptable for this application?",
        "type": "boolean",
        "help": "FKM generally carries a higher material cost than general-purpose rubbers. Confirming budget tolerance up front helps us recommend the right balance of performance and cost."
      },
      {
        "id": "fkm-low-temp-need",
        "label": "Is low-temperature flexibility important?",
        "type": "select",
        "options": [
          "yes",
          "no",
          "application-dependent"
        ],
        "help": "Standard FKM grades may have limited low-temperature flexibility. If cold service matters, a specialty grade often requires technical review."
      }
    ]
  },
  {
    "id": "mat-natural-rubber-need",
    "label": "Natural Rubber (NR): Primary Performance Need",
    "appliesToMaterials": [
      "natural-rubber"
    ],
    "appliesToProducts": [],
    "questions": [
      {
        "id": "nr-primary-driver",
        "label": "Is abrasion resistance or resilience the main need?",
        "type": "select",
        "options": [
          "abrasion-resistance",
          "resilience-rebound",
          "both",
          "tear-strength",
          "application-dependent"
        ],
        "help": "Natural rubber is commonly used where high abrasion resistance and high resilience are the priority (for example linings and dynamic parts)."
      },
      {
        "id": "nr-oil-weather",
        "label": "Will the part contact oil, fuel, or significant outdoor/ozone exposure?",
        "type": "boolean",
        "help": "Important: natural rubber generally has poor oil and fuel resistance and limited ozone and weather resistance. If either is present, an alternative polymer typically requires technical review."
      },
      {
        "id": "nr-temp-band",
        "label": "Service temperature band",
        "type": "select",
        "options": [
          "low",
          "medium",
          "high",
          "application-dependent"
        ],
        "help": "Qualitative band only. Natural rubber is typically used in lower-temperature service."
      },
      {
        "id": "nr-notes",
        "label": "Application details (impact, sliding wear, load)",
        "type": "textarea",
        "help": "Describe how the part is loaded and what it rubs or impacts against. This helps confirm whether natural rubber or a blend is the better fit."
      }
    ]
  },
  {
    "id": "mat-butyl-function",
    "label": "Butyl (IIR): Gas Retention vs Chemical Resistance",
    "appliesToMaterials": [
      "butyl"
    ],
    "appliesToProducts": [],
    "questions": [
      {
        "id": "butyl-primary-function",
        "label": "What is the primary function: gas/air retention or chemical resistance?",
        "type": "select",
        "options": [
          "gas-air-retention",
          "chemical-acid-resistance",
          "vibration-damping",
          "both",
          "application-dependent"
        ],
        "help": "Butyl is commonly chosen for low gas permeability (good air and gas retention) and for resistance to many acids and polar fluids. Knowing the priority guides the compound."
      },
      {
        "id": "butyl-media",
        "label": "What gas, air, or chemical media will the part contain or contact?",
        "type": "textarea",
        "help": "Name the gas or chemical so we can confirm fit. Note: butyl generally has poor resistance to petroleum oils and fuels."
      },
      {
        "id": "butyl-temp-band",
        "label": "Service temperature band",
        "type": "select",
        "options": [
          "low",
          "medium",
          "high",
          "application-dependent"
        ],
        "help": "Qualitative band only. Share the actual expected temperature in notes if known."
      }
    ]
  },
  {
    "id": "mat-polyurethane-driver",
    "label": "Polyurethane (PU): Wear and Load Profile",
    "appliesToMaterials": [
      "polyurethane"
    ],
    "appliesToProducts": [],
    "questions": [
      {
        "id": "pu-primary-driver",
        "label": "What is the main driver: abrasion, load-bearing, or wear life?",
        "type": "select",
        "options": [
          "abrasion-resistance",
          "load-bearing",
          "wear-life-toughness",
          "all-of-these",
          "application-dependent"
        ],
        "help": "Polyurethane is commonly selected for high abrasion resistance, high load-bearing capability, and toughness (for example wheels, pads, and wear parts)."
      },
      {
        "id": "pu-load-band",
        "label": "How heavy is the mechanical load or stress?",
        "type": "select",
        "options": [
          "low",
          "medium",
          "high",
          "very-high",
          "application-dependent"
        ],
        "help": "Qualitative band only. Describe the actual load in notes if known so we can confirm hardness and grade direction during technical review."
      },
      {
        "id": "pu-wet-chemical",
        "label": "Will the part see water, steam, or chemical exposure?",
        "type": "textarea",
        "help": "Note: some polyurethanes may have limited resistance to prolonged hot water, steam, or certain chemicals. Tell us the environment so we can confirm fit."
      },
      {
        "id": "pu-dynamic",
        "label": "Is the part static or dynamic (rolling, sliding, flexing)?",
        "type": "select",
        "options": [
          "static",
          "rolling",
          "sliding",
          "flexing",
          "application-dependent"
        ],
        "help": "Dynamic service influences the grade and hardness selection."
      }
    ]
  },
  {
    "id": "prod-gasket-spec",
    "label": "Gasket: Sealing and Geometry Details",
    "appliesToMaterials": [],
    "appliesToProducts": [
      "gasket"
    ],
    "questions": [
      {
        "id": "gasket-sealing-surface",
        "label": "What does the gasket seal against (surface type and flatness)?",
        "type": "textarea",
        "help": "Describe the mating surfaces (for example metal flange, plastic housing, painted surface) and how flat or rough they are. This affects hardness and thickness selection."
      },
      {
        "id": "gasket-thickness",
        "label": "Required gasket thickness",
        "type": "text",
        "help": "Give the target thickness with units if known, or describe the available compression gap. Exact dimensions are confirmed during technical review."
      },
      {
        "id": "gasket-bolt-pattern",
        "label": "Is a drawing, bolt pattern, or flange standard available?",
        "type": "select",
        "options": [
          "drawing-available",
          "sample-available",
          "bolt-pattern-described",
          "need-help-defining",
          "application-dependent"
        ],
        "help": "A drawing or sample greatly speeds quoting. You can upload it separately. If you only know a flange size, describe it in the notes."
      },
      {
        "id": "gasket-static-dynamic",
        "label": "Is the seal static or does it see movement or pulsation?",
        "type": "select",
        "options": [
          "static",
          "dynamic-or-pulsating",
          "application-dependent"
        ],
        "help": "Static face seals and moving or pulsating joints often call for different compounds and hardness."
      },
      {
        "id": "gasket-media-temp",
        "label": "What media, pressure, and temperature must the gasket handle?",
        "type": "textarea",
        "help": "List the sealed fluid or gas plus a rough temperature and pressure level. This drives material selection and requires technical review for confirmation."
      }
    ]
  },
  {
    "id": "prod-sleeve-spec",
    "label": "Sleeve / Pinch-Valve Sleeve: Dimensions and Service",
    "appliesToMaterials": [],
    "appliesToProducts": [
      "sleeve",
      "pinch-valve-sleeve"
    ],
    "questions": [
      {
        "id": "sleeve-diameter",
        "label": "Bore diameter (and outside diameter if known)",
        "type": "text",
        "help": "Give the inside bore size with units. Add the outside diameter or flange face size if known. Exact dimensions are confirmed during technical review."
      },
      {
        "id": "sleeve-length",
        "label": "Overall length (face to face)",
        "type": "text",
        "help": "Provide the required length with units, or the valve model the sleeve fits."
      },
      {
        "id": "sleeve-reinforcement",
        "label": "Is fabric or cord reinforcement needed?",
        "type": "select",
        "options": [
          "reinforced",
          "unreinforced",
          "not-sure",
          "application-dependent"
        ],
        "help": "Reinforcement is commonly used where pressure or repeated pinching is involved. If unsure, we can advise during technical review."
      },
      {
        "id": "sleeve-media",
        "label": "What media flows through the sleeve?",
        "type": "textarea",
        "help": "Name the slurry, fluid, or solids handled, including abrasiveness and any chemicals. This drives the elastomer choice (for example natural rubber for abrasion, NBR for oil)."
      },
      {
        "id": "sleeve-pressure-load",
        "label": "Operating pressure or pinching load level",
        "type": "select",
        "options": [
          "low",
          "medium",
          "high",
          "very-high",
          "application-dependent"
        ],
        "help": "Qualitative band only. Share the actual pressure in notes if known so we can confirm the construction during technical review."
      },
      {
        "id": "sleeve-sample-drawing",
        "label": "Is a sample or drawing available?",
        "type": "select",
        "options": [
          "drawing-available",
          "sample-available",
          "valve-model-known",
          "none-yet",
          "application-dependent"
        ],
        "help": "A sample, drawing, or valve model number greatly speeds quoting. You can upload it separately."
      }
    ]
  },
  {
    "id": "prod-rubber-sheet-spec",
    "label": "Rubber Sheet: Format and Properties",
    "appliesToMaterials": [],
    "appliesToProducts": [
      "rubber-sheet"
    ],
    "questions": [
      {
        "id": "sheet-thickness",
        "label": "Required sheet thickness",
        "type": "text",
        "help": "Give the target thickness with units. Tolerances are confirmed during technical review."
      },
      {
        "id": "sheet-width-length",
        "label": "Required width and length (or cut size)",
        "type": "text",
        "help": "Provide width and length with units, or the finished cut-piece dimensions if you need parts rather than stock."
      },
      {
        "id": "sheet-format",
        "label": "Roll or cut sheet format?",
        "type": "select",
        "options": [
          "continuous-roll",
          "cut-sheets",
          "die-cut-parts",
          "application-dependent"
        ],
        "help": "Tell us whether you need bulk roll stock, flat sheets, or cut-to-shape pieces."
      },
      {
        "id": "sheet-hardness",
        "label": "Desired hardness level",
        "type": "select",
        "options": [
          "soft",
          "medium",
          "hard",
          "application-dependent"
        ],
        "help": "Qualitative band only. If you have a target hardness in mind, add it in the notes and we will confirm a workable range during technical review."
      },
      {
        "id": "sheet-surface-finish",
        "label": "Surface finish requirement",
        "type": "select",
        "options": [
          "smooth",
          "fabric-impression",
          "textured",
          "no-preference",
          "application-dependent"
        ],
        "help": "Some applications need a smooth sealing face; others accept a fabric or molded finish. Let us know if it matters."
      },
      {
        "id": "sheet-material-service",
        "label": "Preferred material or service conditions",
        "type": "textarea",
        "help": "If you know the polymer (for example EPDM for weather, NBR for oil) note it. Otherwise describe the media, temperature, and exposure so we can recommend a fit."
      }
    ]
  },
  {
    "id": "prod-molded-parts-spec",
    "label": "Molded Parts: Geometry, Tolerance, and Volume",
    "appliesToMaterials": [],
    "appliesToProducts": [
      "molded-parts"
    ],
    "questions": [
      {
        "id": "molded-drawing-sample",
        "label": "Is a drawing or sample available?",
        "type": "select",
        "options": [
          "drawing-available",
          "sample-available",
          "both",
          "concept-only",
          "application-dependent"
        ],
        "help": "A dimensioned drawing or a physical sample is the fastest path to an accurate quote for molded parts. You can upload it separately."
      },
      {
        "id": "molded-tolerance",
        "label": "How tight are the tolerance and dimensional requirements?",
        "type": "select",
        "options": [
          "loose",
          "standard",
          "tight",
          "application-dependent"
        ],
        "help": "Qualitative band only. Molded rubber tolerances depend on geometry and tooling, and tight needs require technical review. Note any critical dimensions in the part details."
      },
      {
        "id": "molded-volume",
        "label": "Estimated annual or per-order volume",
        "type": "number",
        "help": "Approximate quantity helps us advise on tooling approach and pricing. A rough number is fine."
      },
      {
        "id": "molded-material-service",
        "label": "Preferred material and service conditions",
        "type": "textarea",
        "help": "Note the polymer if known (for example FKM for chemicals, silicone for heat) or describe media, temperature, and exposure so we can recommend a fit."
      },
      {
        "id": "molded-features",
        "label": "Key features (inserts, bonding to metal, undercuts)",
        "type": "textarea",
        "help": "Call out metal inserts, rubber-to-metal bonding, threads, or undercuts. These influence tooling and feasibility, which require technical review."
      }
    ]
  }
];

// Groups whose material/product scope matches the current selection.
export function applicableQuoteGroups(productId: string, materialId: string): QuoteGroup[] {
  return quoteGroups.filter((g) => {
    const mOk = g.appliesToMaterials.length === 0 || g.appliesToMaterials.includes(materialId);
    const pOk = groupMatchesProduct(g.appliesToProducts, productId);
    // Show a group if it targets the chosen material OR the chosen product.
    const targetsMaterial = g.appliesToMaterials.length > 0;
    const targetsProduct = g.appliesToProducts.length > 0;
    if (targetsMaterial && targetsProduct) return mOk && pOk;
    if (targetsMaterial) return g.appliesToMaterials.includes(materialId);
    if (targetsProduct) return pOk;
    return false;
  });
}
