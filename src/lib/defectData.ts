import type { Defect, DefectId } from "@/types/simulation";

// Six defect cards, cause-and-effect verified. Used by the Defect Detective
// mode and the per-station learning panels.
export const defects: Defect[] = [
  {
    id: "poor-dispersion",
    name: "Poor Filler Dispersion",
    visualSymptom:
      "Dark, gritty specks, lumps, or a mottled, grainy surface where the carbon-black filler has not blended evenly into the polymer. The sheet looks patchy rather than uniformly deep black, and rubbing the surface may reveal hard agglomerated nodules.",
    likelyProcessSource:
      "Internal mixing, where the polymer is combined with the filler/carbon-black category, process oil, protective additives, and cure package to build a homogeneous compound (masterbatch and final mix stages).",
    explanation:
      "Carbon black arrives as tightly bound agglomerates of smaller aggregates. Breaking those agglomerates down requires the mixer to apply shear to the polymer and carry that shear into the filler so the polymer wets each particle. Dispersion fails when the polymer is not yet masticated and shear-receptive before filler is introduced, when process oil is added too early and lubricates the mass so it slips instead of shearing, when the chamber is overfilled, or when the compound simply does not receive enough total mixing work.",
    preventionConcept:
      "Control the total mixing work and the order in which ingredients are added so the polymer is masticated and shear-receptive before the filler goes in, and so process oil is staged to avoid lubricating away the shear the filler needs. Judge readiness by mixing-energy and dispersion indicators rather than by elapsed time alone, while keeping the compound cool enough that it does not begin to crosslink prematurely.",
    relatedStationId: "internal-mixer",
    relatedStationName: "Internal Mixer",
    severity: "high",
  },
  {
    id: "trapped-air",
    name: "Trapped Air (Air Entrapment / Blisters)",
    visualSymptom:
      "Bubbles, blisters, pinholes, or dome-shaped raised spots in the sheet, sometimes appearing only after cure when the trapped gas expands. Cross-sections show internal voids, and the surface may feel spongy or show small craters where bubbles have burst.",
    likelyProcessSource:
      "Sheet forming on the calender, where the warmed compound is squeezed between rolls into a continuous sheet. Air can also be folded in earlier during the milling that feeds the calender.",
    explanation:
      "As the compound is drawn into the calender nip, the rotating bank of stock ahead of the nip can fold pockets of air into the rubber if that bank is too large, uneven, or unsteady. Moisture or volatiles carried in with the compound add further gas. Because the rubber is highly viscous, that entrained air has no easy escape path and is laminated into the sheet as discrete voids. During vulcanization the trapped gas expands as it heats, turning small inclusions into visible blisters.",
    preventionConcept:
      "Feed the calender with a steady, uniform, well-formed bank so air is worked out at the nip rather than folded into it, and keep the incoming compound free of moisture and volatiles. Maintaining smooth, consistent stock flow lets any entrained air escape back through the bank instead of being sealed into the sheet.",
    relatedStationId: "calender",
    relatedStationName: "Calender",
    severity: "high",
  },
  {
    id: "uneven-thickness",
    name: "Uneven Sheet Thickness (Gauge Variation)",
    visualSymptom:
      "The sheet measures thicker in some areas and thinner in others, often thicker through the center or biased toward one edge. Learners would see a wedge-shaped or wavy gauge across the width, and a finished roll that telescopes or builds unevenly because thick and thin zones stack inconsistently.",
    likelyProcessSource:
      "Gauge control during sheet forming on the calender, where roll geometry and the distribution of stock across the rolls set the final thickness profile across the web.",
    explanation:
      "The squeezed compound pushes the rolls apart, so each roll bows slightly under that separating force and the gap tends to open toward the middle, which would leave the sheet thicker in the center unless the bowing is compensated. Uneven thickness also arises when stock is not spread evenly across the roll face, or when temperature varies across the width so the compound's stiffness and flow differ from place to place.",
    preventionConcept:
      "Spread the feed evenly across the full roll face and keep temperature uniform across the width so the compound flows consistently everywhere. Compensate for the rolls bowing apart so the effective gap stays even across the web, and monitor thickness continuously across the width so any drift is caught and corrected before it accumulates in the wound roll.",
    relatedStationId: "calender",
    relatedStationName: "Calender",
    severity: "medium",
  },
  {
    id: "under-cure",
    name: "Under-Cure (Incomplete Vulcanization)",
    visualSymptom:
      "The sheet feels soft, tacky, or weak, takes a dent or stretch and recovers slowly, and may smear or feel gummy. It lacks the snappy elastic rebound of properly cured rubber and tears or takes a permanent set easily under load.",
    likelyProcessSource:
      "Vulcanization, where the cure package crosslinks the polymer network under controlled heat to develop the sheet's final elastic properties.",
    explanation:
      "Vulcanization builds the crosslink network that gives rubber its strength and elasticity, and that network forms in proportion to the heat history the material receives, meaning temperature accumulated over time. If the sheet does not receive enough heat history, especially in its thicker or core regions where heat penetrates slowly, the network stays incomplete. A cure package that is too lean or poorly dispersed, or heat that is removed before the reaction has finished, leaves too few crosslinks.",
    preventionConcept:
      "Deliver enough uniform heat history for crosslinking to reach completion through the full thickness, allowing for the slow rate at which heat penetrates thicker sections. Confirm the cure state against the compound's known cure behavior, and make sure the cure package is correctly proportioned and well dispersed, rather than judging cure by appearance.",
    relatedStationId: "vulcanization",
    relatedStationName: "Vulcanization",
    severity: "high",
  },
  {
    id: "surface-contamination",
    name: "Surface Contamination (Foreign Inclusions)",
    visualSymptom:
      "Specks of dust, fibers, oil smears, off-color spots, or embedded foreign particles on or just beneath the surface that stand out against the uniform black. Learners would see streaks, fisheyes where the rubber refused to wet a contaminant, or pressed-in debris.",
    likelyProcessSource:
      "Material handling and housekeeping in the raw-material room and at the weighing station, where ingredients are stored, staged, and weighed before they reach the mixer.",
    explanation:
      "Most contamination enters the batch before any mixing happens. Open or mislabeled containers, shared scoops, spilled pigment or oil, airborne dust, and cross-contamination between materials at storage and weigh-out all introduce foreign matter into the ingredients. Once a contaminant is in the polymer, mixing only spreads it around, since downstream processing cannot pull it back out.",
    preventionConcept:
      "Enforce clean material handling and housekeeping discipline: keep ingredients sealed, segregated, and clearly labeled, use dedicated clean tools for each material, and protect weighed batches from airborne dust and cross-contamination. Because no later step can remove foreign matter from the compound, the only reliable control is to keep it out of the ingredients in the first place.",
    relatedStationId: "raw-material-room",
    relatedStationName: "Raw Material Room",
    severity: "medium",
  },
  {
    id: "edge-defects",
    name: "Edge Defects (Ragged or Damaged Edges)",
    visualSymptom:
      "Frayed, torn, wavy, or feathered sheet edges, nicks and tears running in from the side, or edges that are stretched and thinner than the body. The finished roll shows uneven, untidy edge stacking and may carry loose strings of rubber along the sides.",
    likelyProcessSource:
      "Trimming and slitting, where the sheet edges are cut to final width before the sheet is wound into a roll.",
    explanation:
      "The final edge is defined by the cutting operation. Dull, misaligned, or worn cutting elements tear the rubber rather than shearing it cleanly, leaving a ragged or feathered edge. If the sheet is not tracking steadily or its tension is uneven as it reaches the cut, the cut line wanders and the edge frays. Edge stock that was already thinner or weaker from earlier forming makes this worse.",
    preventionConcept:
      "Keep the cutting elements sharp and correctly aligned and hold the sheet under stable tension and tracking so the edge is sheared cleanly rather than torn. Make sure the incoming edge is sound and full-gauge before it reaches the cut, and inspect the trimmed edge so cutting flaws are caught before they propagate into the finished roll.",
    relatedStationId: "trimming-slitting",
    relatedStationName: "Trimming and Slitting",
    severity: "low",
  },
];

export const defectsById: Record<DefectId, Defect> = defects.reduce(
  (acc, d) => {
    acc[d.id] = d;
    return acc;
  },
  {} as Record<DefectId, Defect>,
);
