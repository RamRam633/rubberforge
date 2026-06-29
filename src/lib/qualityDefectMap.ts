import type { QualityDefectLink } from "@/types/quality";

export const qualityDefectLinks: QualityDefectLink[] = [
  {
    "defectId": "poor-dispersion",
    "detectingTests": [
      "tensile-strength",
      "tear-resistance",
      "visual"
    ],
    "inspectionCheckpoint": "First caught visually on the Two-Roll Mill as streaky or speckled stock, then confirmed at Inspection on cured samples where reinforcement-sensitive properties are measured.",
    "customerImpact": "Reinforcement is typically lower and more variable, so tensile, tear, and fatigue performance often drift batch to batch. For a load-bearing or dynamic part this may mean premature tearing or a shorter service life, and the actual margin is application-dependent and requires verification against the end use.",
    "prevention": "Control total mixing work and ingredient-addition sequence so the polymer is masticated and shear-receptive before filler is added, and judge readiness by mixing-energy and dispersion indicators rather than elapsed time alone. Silica-filled grades commonly rely on a coupling system and generally require technical review before quoting."
  },
  {
    "defectId": "bloom",
    "detectingTests": [
      "visual",
      "surface-finish",
      "color-check"
    ],
    "inspectionCheckpoint": "Develops on cooled, stored goods and is commonly caught at final Inspection by surface and color checks, or noticed by the customer after shipment because bloom can return hours to days later.",
    "customerImpact": "A hazy or powdery film may be purely cosmetic, or it may interfere with sealing, printing, painting, or bonding surfaces, so acceptability is application-dependent. Some antiozonant or wax bloom is protective and intended for outdoor service, so whether it is a reject typically requires technical review against the cosmetic requirement and end use.",
    "prevention": "Keep migrating ingredients within their typical solubility limits for the elastomer and confirm a full state of cure so less unreacted curative remains free to migrate, while moderating storage temperature swings that accelerate diffusion. Because protective bloom can be intended, any cosmetic-versus-functional call generally requires technical review against the application."
  },
  {
    "defectId": "scorch",
    "detectingTests": [
      "visual",
      "surface-finish",
      "hardness"
    ],
    "inspectionCheckpoint": "Appears in the uncured compound and is generally caught on the Two-Roll Mill or at the Calender when the stock stops flowing cleanly and shows hard lumps or a tough skin.",
    "customerImpact": "Prematurely set stock generally will not flow or cure correctly downstream, so affected lots are commonly scrapped before they ship. If scorched material slips through it may cure unevenly and underperform mechanically, with the severity application-dependent and requiring verification before release.",
    "prevention": "Limit accumulated heat history through mixing, milling, and storage so the compound's processing safety margin is not spent before the intended cure step, and provide adequate cooling between operations. Highly active cure systems commonly need technical review of the full thermal route, since once the network starts forming early the stock is generally unsalvageable."
  },
  {
    "defectId": "under-cure",
    "detectingTests": [
      "hardness",
      "compression-set",
      "tensile-strength"
    ],
    "inspectionCheckpoint": "Develops at Vulcanization and is typically detected just after at Inspection through low durometer, high compression set, and reduced mechanical strength, especially in thicker cross-sections.",
    "customerImpact": "An incompletely crosslinked part commonly shows lower strength, higher permanent set, more extractables, and a tendency to bloom, which can shorten life and degrade sealing. Because the same compound may be under-cured in a thick section while fine in a thin one, the impact is geometry- and application-dependent and requires verification of state of cure.",
    "prevention": "Deliver enough uniform heat history for crosslinking to reach completion through the full thickness, allowing for the slow rate at which heat penetrates thicker sections, and confirm the cure state against the compound's known cure behavior rather than by appearance. A correctly proportioned, well-dispersed cure package supports a complete network."
  },
  {
    "defectId": "over-cure",
    "detectingTests": [
      "elongation",
      "tensile-strength",
      "hardness"
    ],
    "inspectionCheckpoint": "Arises at Vulcanization and is caught at Inspection through loss of elongation, embrittlement, or, in reverting systems, an unexpected softening and surface degradation, often most severe at edges and thin walls.",
    "customerImpact": "Embrittled parts may crack or lose flexibility, while reverted parts can be soft and weak, so dynamic or flexing applications may fail early. Which behavior dominates depends on the polymer and cure chemistry, so cure-window robustness for parts with mixed wall thickness commonly requires technical review.",
    "prevention": "Aim for the optimum state of cure rather than simply the minimum, recognizing that thin sections and surfaces reach temperature first and can pass their optimum while thicker cores still approach full cure. Selecting a compound with a robust cure window for parts of mixed wall thickness generally requires technical review."
  },
  {
    "defectId": "trapped-air",
    "detectingTests": [
      "visual",
      "specific-gravity",
      "tensile-strength"
    ],
    "inspectionCheckpoint": "Often entrained at the Calender but usually revealed when heat expands the gas at Vulcanization, then caught at Inspection as blisters, pinholes, domed soft spots, or voids seen on a cut section.",
    "customerImpact": "Voids generally lower strength and can ruin sealing, barrier, or pressure-holding performance, so leak paths or weak spots may appear in service. For void-critical applications the tolerance is application-dependent and requires verification of the shaping route and any internal-soundness requirement.",
    "prevention": "Feed forming steps with steady, well-formed stock so entrained air works out rather than being folded in, keep incoming compound free of moisture and low-boiling volatiles, and maintain adequate consolidation pressure so any residual gas stays compressed. Drying hygroscopic fillers commonly reduces gas generation at cure."
  },
  {
    "defectId": "contamination",
    "detectingTests": [
      "visual",
      "fabric-inspection",
      "traceability-review"
    ],
    "inspectionCheckpoint": "Can enter as early as the Raw Material Room or Weighing Station and is commonly traced back through material handling, then caught at Inspection as embedded inclusions, off-color veins, or unexpected cure behavior.",
    "customerImpact": "Foreign matter can locally weaken the part, seed cracks, or shift cure, and a wrong-compound carryover may behave unpredictably in service. Cleanliness and traceability needs differ sharply between a critical seal and a general grommet, so any cleanliness specification is application-dependent and requires technical review at RFQ.",
    "prevention": "Enforce clean material handling and housekeeping: keep ingredients sealed, segregated, and clearly labeled, use dedicated clean tooling per material, and apply cleardown or purge discipline on shared equipment between compounds. Because no later step can remove foreign matter, the reliable control is to keep it out of the stream from the start."
  },
  {
    "defectId": "poor-adhesion",
    "detectingTests": [
      "adhesion",
      "fabric-inspection"
    ],
    "inspectionCheckpoint": "The bond is formed during Vulcanization, so failures originate there and are caught at Inspection by peel or pull checks on bonded or plied samples, or in service as delamination.",
    "customerImpact": "Rubber may peel or delaminate from a metal or fabric insert or between plies under load, which can disable a bonded component. Bondability is strongly polymer- and substrate-dependent and some elastomers are commonly hard to bond, so bonded constructions generally require technical review of substrate, surface preparation, and adhesive system before a quote.",
    "prevention": "Ensure clean, properly prepared bonding surfaces and a compatible primer or tie system that is activated under sufficient heat and pressure while the rubber co-cures into the bond, and keep oils and mold release off the interface. Low-surface-energy polymers commonly need specific surface preparation, which generally requires technical review."
  },
  {
    "defectId": "swelling",
    "detectingTests": [
      "fluid-immersion",
      "dimensional",
      "hardness"
    ],
    "inspectionCheckpoint": "A service behavior simulated at Inspection by fluid-immersion checks that measure dimensional change, mass change, and hardness shift after exposure to a representative medium; the root cause is set far upstream at material selection.",
    "customerImpact": "An incompatible elastomer can swell, soften, distort, or degrade in the service fluid, drifting out of tolerance and losing sealing or structural function. Compatibility is highly application-dependent, so the actual fluid, temperature, and duration always require technical review against the real media, and suitability cannot be assumed or guaranteed.",
    "prevention": "Match the polymer family to the service fluid, temperature, and duration using the like-dissolves-like principle so the network resists absorbing the medium, and support it with a full state of cure that limits uptake. Fluid compatibility is highly application-dependent and always requires technical review of the actual media before any compound is recommended."
  },
  {
    "defectId": "cracking",
    "detectingTests": [
      "ozone-weathering",
      "low-temp-flex",
      "visual"
    ],
    "inspectionCheckpoint": "A finished-part and in-service behavior under strain plus environment; initiation sites can be introduced at Trimming and Slitting, while crack resistance is assessed at Inspection through ozone, flex, or weathering exposures and is often seen later in the field.",
    "customerImpact": "Strained outer surfaces of unsaturated elastomers may craze or crack over time from ozone, weathering, or repeated flexing, which can progress to leaks or fracture. Protective additives buy time, but the right backbone for the environment is the durable fix, and exposure conditions are application-dependent and require technical review against real service.",
    "prevention": "Choose a backbone suited to the environment (saturated or specialty polymers generally resist ozone better) and support it with an adequate antidegradant package, while reducing stress raisers such as sharp trimmed edges, inclusions, and under-cure that seed cracks. Exposure conditions are application-dependent and crack resistance generally requires technical review against real service."
  },
  {
    "defectId": "compression-set",
    "detectingTests": [
      "compression-set",
      "heat-aging"
    ],
    "inspectionCheckpoint": "A finished-part property revealed under sustained compression and heat, evaluated at Inspection by recovery checks (often combined with heat aging) on seal, gasket, or O-ring samples, and seen in service as a seal that stops sealing.",
    "customerImpact": "A part that stays flattened loses sealing force over time, so gaskets and O-rings may leak as the load relaxes. Recovery is application-dependent on service temperature, load, and time, so for sealing parts the cure state and polymer or cure-system choice generally require technical review before commitment.",
    "prevention": "Achieve a full, stable state of cure so the network recovers rather than rearranging under load and heat, and limit excess plasticizer or extractables that worsen set. For elevated-temperature sealing, the polymer and cure-system choice strongly affect recovery and generally require technical review against the service temperature and load."
  },
  {
    "defectId": "hardness-drift",
    "detectingTests": [
      "hardness",
      "modulus"
    ],
    "inspectionCheckpoint": "A finished-state property confirmed at Inspection by durometer checks, with modulus as a corroborating stiffness measure; root causes trace back to weighing accuracy, mixing consistency, and cure uniformity.",
    "customerImpact": "Parts that read harder or softer than the target band, or that vary across a batch or along a roll, may seal, fit, or wear differently than expected. Target hardness is application-dependent and best stated as a qualitative band, and tight tolerances generally require technical review of process capability before commitment.",
    "prevention": "Hold weighing accuracy, mixing consistency (dispersion and charge control), and cure uniformity steady, since hardness integrates crosslink density and filler loading and is sensitive to all three. Target hardness is best stated as a qualitative band, and tight tolerances generally require technical review of process capability before commitment."
  }
];

export const qualityDefectLinksById: Record<string, QualityDefectLink> = Object.fromEntries(
  qualityDefectLinks.map((d) => [d.defectId, d]),
);
