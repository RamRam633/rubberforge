import type { Band } from "@/types/platform";
import type { CompoundConfig, CompoundTendencies, Tendency } from "@/types/chemistry";
import { materialFamiliesById } from "./materialFamilies";

// ── Conceptual Compound Builder engine ───────────────────────────────────────
// Maps qualitative choices to qualitative TENDENCIES. This is an educational
// estimate, never a production formulation: no phr, no cure parameters.

const BAND_SCORE: Record<Band, number> = {
  low: 1,
  medium: 2,
  high: 3,
  "very-high": 4,
  "application-dependent": 2,
};

const LEVEL_DELTA = { low: -1, medium: 0, high: 1 } as const;

function clamp(n: number): number {
  return Math.max(1, Math.min(4, Math.round(n)));
}

function toTendency(score: number): Tendency {
  const s = clamp(score);
  return (["low", "medium", "high", "very-high"] as Tendency[])[s - 1];
}

const COST_SCORE: Record<string, number> = { low: 1, medium: 2, high: 3, "very-high": 4 };

export function computeTendencies(config: CompoundConfig): CompoundTendencies {
  const base = materialFamiliesById[config.polymerId];
  const filler = LEVEL_DELTA[config.fillerLevel];
  const oil = LEVEL_DELTA[config.oilLevel];

  // Baselines seeded from the chosen polymer family.
  let hardness = 2 + filler - oil;
  let flexibility = 2 - filler + oil;
  let abrasion = (base ? BAND_SCORE[base.abrasionResistance] : 2) + filler * 0.5 - oil * 0.5;
  let processability = 2 - filler + oil;
  let weather = base ? BAND_SCORE[base.weatherResistance] : 2;
  let oilResist = base ? BAND_SCORE[base.oilResistance] : 2;
  let compressionSetRisk = 2 + oil * 0.5;
  const cost = base ? COST_SCORE[base.costTier] ?? 2 : 2;

  // Protection emphasis nudges one property and adds a note.
  const notes: string[] = [];
  switch (config.protection) {
    case "weather-ozone":
      weather += 1;
      notes.push("Protection package emphasises weather and ozone resistance (antiozonant/antioxidant categories).");
      break;
    case "oil-fuel":
      oilResist += 1;
      notes.push("Emphasis on oil/fuel service: polymer choice usually matters more than additives here.");
      break;
    case "heat-aging":
      compressionSetRisk -= 0.5;
      notes.push("Emphasis on heat aging: antioxidant strategy and cure system both matter.");
      break;
    case "abrasion":
      abrasion += 1;
      notes.push("Emphasis on abrasion: reinforcing filler and polymer resilience both contribute.");
      break;
    case "food-potable":
      notes.push("Food/potable emphasis requires specific ingredient selection and documentation, always subject to review and not implied here.");
      break;
  }

  // Cure concept affects compression-set tendency and heat behaviour.
  if (config.cure === "peroxide-style") {
    compressionSetRisk -= 1;
    notes.push("Peroxide-style cure concept is generally associated with lower compression set and better heat aging, with its own processing considerations.");
  } else if (config.cure === "sulfur-style") {
    compressionSetRisk += 0.5;
    notes.push("Sulfur-style cure concept is a common, versatile system; compression set is typically higher than peroxide-style.");
  } else {
    notes.push("Special cure system: behaviour is highly material-dependent and set by the polymer chemistry.");
  }

  notes.push("Conceptual compound balance only: an educational estimate, not a production formulation. Requires lab validation and technical review.");

  const reviewQuestions = [
    "What is the exact service environment (media, temperature range, exposure)?",
    "What hardness and dimensional tolerances are required?",
    ...(base?.quoteQuestions ?? []).slice(0, 2),
  ];

  return {
    hardness: toTendency(hardness),
    flexibility: toTendency(flexibility),
    abrasion: toTendency(abrasion),
    processability: toTendency(processability),
    weatherResistance: toTendency(weather),
    oilResistance: toTendency(oilResist),
    compressionSetRisk: toTendency(compressionSetRisk),
    costTier: toTendency(cost),
    notes,
    reviewQuestions,
  };
}
