import type { RouteStep } from "@/types/platform";

// ── RFQ selection + preliminary summary ──────────────────────────────────────
// Quote preparation only. No pricing is produced anywhere in this app.

export interface QuoteSelection {
  productId: string;
  materialId: string;
  application: string;
  environment: string[];
  dimensions: Record<string, string>;
  quantity: string;
  drawingAvailable: boolean;
  certificationNeeds: string;
  notes: string;
  /** Answers to dynamic, material/product-aware questions, keyed by question id. */
  answers: Record<string, string | boolean>;
}

export const ENVIRONMENT_OPTIONS = [
  "Outdoor / weather",
  "UV / sunlight",
  "Ozone",
  "Potable water",
  "Steam / hot water",
  "Petroleum oil / fuel",
  "Chemicals / solvents",
  "Abrasive / wear",
  "High temperature",
  "Low temperature",
  "Food contact",
  "Indoor / general",
] as const;

export interface RFQSummary {
  productName: string;
  materialName: string;
  dimensions: Record<string, string>;
  quantity: string;
  application: string;
  environment: string[];
  /** Preliminary suggested manufacturing route (educational guidance, not a plan). */
  suggestedRoute: RouteStep[];
  routeNote: string;
  /** Required inputs the customer has not yet provided. */
  missingInfo: string[];
  /** Open questions a sales engineer should ask. */
  questionsForCustomer: string[];
  /** Internal technical-review flags. */
  technicalReviewNotes: string[];
}

export function emptySelection(): QuoteSelection {
  return {
    productId: "",
    materialId: "",
    application: "",
    environment: [],
    dimensions: {},
    quantity: "",
    drawingAvailable: false,
    certificationNeeds: "",
    notes: "",
    answers: {},
  };
}
