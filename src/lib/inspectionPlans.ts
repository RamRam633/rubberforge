import type { InspectionTemplate } from "@/types/quality";

export const inspectionTemplates: InspectionTemplate[] = [
  {
    "productId": "rubber-sheet",
    "recommendedChecks": [
      "visual inspection",
      "thickness",
      "hardness",
      "dimensional inspection"
    ],
    "optionalChecks": [
      "tensile and elongation",
      "specific gravity",
      "surface finish check (smooth vs cloth-impression)",
      "cure-state consistency review",
      "accelerated heat aging"
    ],
    "documentsToRequest": [
      "coc",
      "dimensional-report",
      "hardness-report",
      "traceability-summary"
    ],
    "standardsToConsider": [
      "ASTM D2000 (line-callout classification)",
      "ASTM D2240 (durometer hardness)",
      "ASTM D412 (tension)",
      "ISO 7619-1 (hardness)"
    ],
    "reviewNotes": [
      "Preliminary plan only; the specific checks, sampling, and acceptance limits require quality and engineering review against the actual specification and drawing.",
      "Thickness commonly mapped at multiple points across the width because calendered sheet may vary edge-to-center; the tolerance class typically needs confirmation before sourcing.",
      "Standard codes listed are illustrative examples and require verification before sourcing; use the official standard and an accredited or qualified lab for actual testing."
    ]
  },
  {
    "productId": "cut-gaskets",
    "recommendedChecks": [
      "visual inspection",
      "dimensional inspection",
      "thickness",
      "hardness"
    ],
    "optionalChecks": [
      "bolt-circle and hole-pattern verification",
      "first-article inspection to drawing",
      "edge-quality review",
      "compression set (where the joint is bolted-tight)",
      "material-to-media compatibility review"
    ],
    "documentsToRequest": [
      "coc",
      "dimensional-report",
      "drawing-ack",
      "traceability-summary"
    ],
    "standardsToConsider": [
      "ASTM D2000 (material line callout)",
      "ASTM F104 (gasket material classification)",
      "ASTM D2240 (hardness)",
      "ASTM F36 (compressibility and recovery)"
    ],
    "reviewNotes": [
      "Gasket outline, bolt circle, and hole pattern typically benefit from a first-article check against the customer drawing before a full run; final acceptance requires quality and engineering review.",
      "Thickness and hardness are commonly inherited from the qualified source sheet, so the sheet lot traceability often matters as much as the cut part itself.",
      "Listed standards are illustrative only and require verification before sourcing; actual testing should use the official standard and an accredited or qualified lab."
    ]
  },
  {
    "productId": "rubber-strips",
    "recommendedChecks": [
      "visual inspection",
      "thickness",
      "dimensional inspection",
      "hardness"
    ],
    "optionalChecks": [
      "width-along-length check",
      "edge-straightness review",
      "coil length or piece-count verification",
      "adhesive-backing adhesion check (where backed)",
      "tensile and elongation"
    ],
    "documentsToRequest": [
      "coc",
      "dimensional-report",
      "packing-list",
      "traceability-summary"
    ],
    "standardsToConsider": [
      "ASTM D2000 (material classification)",
      "ASTM D2240 (hardness)",
      "ASTM D412 (tension, where applicable)",
      "ISO 3302-1 (dimensional tolerances)"
    ],
    "reviewNotes": [
      "Width and thickness are commonly checked at intervals along the length because slit strip may drift; sampling frequency and tolerance class require quality review.",
      "For adhesive-backed strip, the backing adhesion and liner condition typically warrant a separate check; this requires confirmation against the intended application.",
      "Standard codes shown are illustrative examples and require verification before sourcing; use the official standard and a qualified lab for real testing."
    ]
  },
  {
    "productId": "custom-die-cut",
    "recommendedChecks": [
      "visual inspection",
      "dimensional inspection",
      "thickness",
      "first-article inspection to drawing"
    ],
    "optionalChecks": [
      "hardness",
      "edge-quality review",
      "backing or liner adhesion check (kiss-cut vs through-cut)",
      "lot-to-lot consistency review",
      "tolerance-class verification"
    ],
    "documentsToRequest": [
      "coc",
      "dimensional-report",
      "drawing-ack",
      "traceability-summary"
    ],
    "standardsToConsider": [
      "ASTM D2000 (material line callout)",
      "ASTM D2240 (hardness)",
      "ISO 3302-1 (dimensional tolerances for rubber products)"
    ],
    "reviewNotes": [
      "A first-article check to the customer drawing is commonly recommended before a production run because die wear may shift dimensions over time; final acceptance requires quality and engineering review.",
      "Backed or kiss-cut parts often need an added adhesion and cut-depth check; this requires confirmation against the part definition.",
      "The standards listed are illustrative only and require verification before sourcing; actual testing should use the official standard and an accredited or qualified lab."
    ]
  },
  {
    "productId": "rubber-sleeves",
    "recommendedChecks": [
      "visual inspection",
      "dimensional inspection",
      "wall-thickness check",
      "hardness"
    ],
    "optionalChecks": [
      "inside-diameter and outside-diameter verification",
      "concentricity review",
      "splice or seam integrity inspection",
      "end-configuration check (cuff, flange, plain)",
      "surface-finish inspection"
    ],
    "documentsToRequest": [
      "coc",
      "dimensional-report",
      "hardness-report",
      "traceability-summary"
    ],
    "standardsToConsider": [
      "ASTM D2000 (material classification)",
      "ASTM D2240 (hardness)",
      "ISO 3302-1 (dimensional tolerances for rubber products)"
    ],
    "reviewNotes": [
      "Inside diameter, wall thickness, and concentricity are commonly checked because mandrel-built sleeves may vary in wall; sampling and tolerance class require quality and engineering review.",
      "Splice or seam areas typically warrant added scrutiny on wrapped construction; any pressure or function check requires engineering review and is out of scope of these visual and dimensional checks.",
      "Listed standards are illustrative only and require verification before sourcing; actual testing should use the official standard and an accredited or qualified lab."
    ]
  },
  {
    "productId": "pinch-valve-sleeves",
    "recommendedChecks": [
      "visual inspection",
      "dimensional inspection",
      "wall-thickness check",
      "ply-count and orientation verification"
    ],
    "optionalChecks": [
      "pressure test to a reviewed level",
      "bore and length verification",
      "closure and reopening function review",
      "delamination or ply-separation inspection",
      "hardness"
    ],
    "documentsToRequest": [
      "coc",
      "dimensional-report",
      "traceability-summary",
      "drawing-ack"
    ],
    "standardsToConsider": [
      "ASTM D2000 (material classification)",
      "ASTM D2240 (hardness)",
      "ASTM D413 (rubber-to-fabric adhesion)"
    ],
    "reviewNotes": [
      "Wall uniformity, ply count, and ply orientation are commonly verified because uneven wall may bias closure; the pressure-test level and acceptance criteria must be set by quality and engineering review, not assumed.",
      "Any pressure or function test should be performed by qualified personnel to a reviewed and documented level; these template checks do not define a safe test pressure.",
      "Standard codes shown are illustrative examples requiring verification before sourcing; use the official standard and an accredited or qualified lab for actual testing."
    ]
  },
  {
    "productId": "molded-parts",
    "recommendedChecks": [
      "visual inspection",
      "dimensional inspection",
      "hardness",
      "flash and trim quality review"
    ],
    "optionalChecks": [
      "first-article inspection to drawing",
      "insert-bond check on bonded parts",
      "compression set (for sealing geometries)",
      "surface-finish and parting-line review",
      "tolerance-class verification"
    ],
    "documentsToRequest": [
      "coc",
      "dimensional-report",
      "hardness-report",
      "traceability-summary"
    ],
    "standardsToConsider": [
      "ASTM D2000 (material line callout)",
      "ASTM D2240 (hardness)",
      "ISO 3302-1 (molding tolerance classes)",
      "ASTM D395 (compression set, where relevant)"
    ],
    "reviewNotes": [
      "A first-article inspection to the customer drawing is commonly recommended before production because tooling and fill may shift dimensions; final acceptance requires quality and engineering review.",
      "Bonded rubber-to-metal parts typically warrant a bond-integrity check; insert position and bond acceptance require engineering review and are not implied by these checks.",
      "Standard codes are illustrative examples that require verification before sourcing; use the official standard and an accredited or qualified lab for any real testing."
    ]
  },
  {
    "productId": "rubber-seals",
    "recommendedChecks": [
      "visual inspection",
      "dimensional inspection",
      "hardness",
      "sealing-surface and lip quality review"
    ],
    "optionalChecks": [
      "compression set",
      "material-to-media compatibility review",
      "cross-section dimensional check",
      "fluid-immersion or volume-change context (where media-driven)",
      "tolerance-class verification"
    ],
    "documentsToRequest": [
      "coc",
      "dimensional-report",
      "compression-set-report",
      "traceability-summary"
    ],
    "standardsToConsider": [
      "ASTM D2000 (material line callout)",
      "ASTM D2240 (hardness)",
      "ASTM D395 (compression set)",
      "ASTM D471 (fluid resistance)"
    ],
    "reviewNotes": [
      "Material-to-media match is commonly central for seals because the sealed fluid drives elastomer selection; this requires engineering review and is not confirmed by hardness or dimensional checks alone.",
      "Sealing-face and lip quality typically warrant focused review since parting-line defects on the lip may cause leakage; acceptance limits require quality and engineering review.",
      "The standards listed are illustrative only and require verification before sourcing; actual testing should use the official standard and an accredited or qualified lab."
    ]
  },
  {
    "productId": "fabric-reinforced-sheet",
    "recommendedChecks": [
      "visual inspection",
      "total-thickness check",
      "ply-count verification",
      "ply-adhesion review"
    ],
    "optionalChecks": [
      "fabric-alignment inspection",
      "hardness",
      "trapped-air or delamination inspection",
      "tensile and elongation",
      "edge and surface review"
    ],
    "documentsToRequest": [
      "coc",
      "dimensional-report",
      "traceability-summary",
      "mtr"
    ],
    "standardsToConsider": [
      "ASTM D2000 (rubber compound classification)",
      "ASTM D413 (rubber-to-fabric adhesion)",
      "ASTM D2240 (hardness)",
      "ASTM D412 (tension, where applicable)"
    ],
    "reviewNotes": [
      "Ply adhesion and ply count are commonly the defining quality concerns because delamination or wrinkled fabric may compromise the part; adhesion acceptance requires quality and engineering review.",
      "An MTR-style record is often useful for the fabric component as well as the rubber compound, since both contribute to performance; the documentation set requires confirmation against the specification.",
      "Standard codes are illustrative examples that require verification before sourcing; use the official standard and an accredited or qualified lab for real testing."
    ]
  },
  {
    "productId": "sponge-foam-sheet",
    "recommendedChecks": [
      "visual inspection",
      "thickness",
      "density or firmness verification",
      "cell-structure and surface review"
    ],
    "optionalChecks": [
      "open vs closed cell confirmation",
      "compression-deflection or compression set context",
      "skin vs no-skin surface check",
      "adhesive-backing adhesion check (where backed)",
      "water-absorption context (closed-cell sealing)"
    ],
    "documentsToRequest": [
      "coc",
      "dimensional-report",
      "traceability-summary",
      "sds-tds"
    ],
    "standardsToConsider": [
      "ASTM D1056 (flexible cellular rubber, sponge and expanded)",
      "ASTM D1667 (closed-cell context)",
      "ASTM D3574 (flexible foam test methods)"
    ],
    "reviewNotes": [
      "Density or firmness and post-expansion thickness are commonly verified because cellular sheet may vary after cure; firmness bands and acceptance limits require quality review.",
      "Open-cell versus closed-cell behavior strongly affects sealing and water resistance; the correct grade for the application requires engineering review and is not implied by appearance.",
      "Listed standards are illustrative only and require verification before sourcing; actual testing should use the official standard and a qualified lab."
    ]
  },
  {
    "productId": "food-grade-sheet",
    "recommendedChecks": [
      "visual inspection",
      "material and lot traceability review",
      "thickness",
      "hardness"
    ],
    "optionalChecks": [
      "surface-cleanliness inspection",
      "contact-application suitability review",
      "color match",
      "dedicated or cleaned-tooling confirmation",
      "odor or extractables context"
    ],
    "documentsToRequest": [
      "coc",
      "traceability-summary",
      "regulatory-declaration",
      "sds-tds"
    ],
    "standardsToConsider": [
      "ASTM D2000 (base compound classification)",
      "ASTM D2240 (hardness)",
      "food-contact regulatory references (illustrative, framework varies by region)"
    ],
    "reviewNotes": [
      "Suitability for a specific food-contact application requires technical and regulatory review; these template checks do not establish food-contact compliance or any certification.",
      "Material and lot traceability and a supplier regulatory declaration are commonly the central documents; the exact regulatory framework varies by region and must be confirmed before sourcing.",
      "Any regulatory or compliance reference here is illustrative only and requires verification; rely on the official regulation and qualified review, not on this template."
    ]
  },
  {
    "productId": "high-temp-sheet",
    "recommendedChecks": [
      "visual inspection",
      "thickness",
      "hardness",
      "material-to-temperature-band suitability review"
    ],
    "optionalChecks": [
      "cure-state and post-cure review",
      "accelerated heat-aging context",
      "tensile and elongation",
      "chemical or media exposure review",
      "specific gravity"
    ],
    "documentsToRequest": [
      "coc",
      "traceability-summary",
      "hardness-report",
      "tensile-report"
    ],
    "standardsToConsider": [
      "ASTM D2000 (heat-aging suffix and classification)",
      "ASTM D2240 (hardness)",
      "ASTM D573 (heat aging of rubber)",
      "ASTM D412 (tension)"
    ],
    "reviewNotes": [
      "Material selection against the upper service-temperature band is commonly the decisive factor; suitability requires engineering review and is not confirmed by hardness or thickness checks alone.",
      "Heat-aging behavior and any required post-cure typically warrant review; continuous versus intermittent exposure context should be confirmed before sourcing.",
      "Standard codes listed are illustrative examples requiring verification before sourcing; use the official standard and an accredited or qualified lab for actual heat-aging testing."
    ]
  }
];

export const inspectionTemplatesById: Record<string, InspectionTemplate> = Object.fromEntries(
  inspectionTemplates.map((t) => [t.productId, t]),
);
