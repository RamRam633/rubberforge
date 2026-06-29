// VayuAI / RubberForge product positioning. Educational + RFQ-preparation
// platform; no claims of live production data, certification, or pricing.

export const PRODUCT_STATEMENT =
  "RubberForge by VayuAI turns vague rubber product inquiries into technically complete, quote-ready RFQs by guiding customers through a virtual rubber factory: materials, product forms, manufacturing routes, chemistry, quality tests, documentation, and factory review logic.";

export const TAGLINE = "Run a virtual rubber factory to build better RFQs.";

export const PROBLEM = {
  summary: "Most custom rubber quote requests arrive incomplete.",
  gaps: [
    "Unclear material or polymer family",
    "Missing dimensions or tolerances",
    "No drawing or sample",
    "Unknown application environment",
    "Unclear quality and testing requirements",
    "No certification or documentation expectations",
    "Unknown quantity or timeline",
  ],
  consequences: [
    "Sales back-and-forth",
    "Engineering delays",
    "Quality risk from wrong material assumptions",
    "Slow quote turnaround",
  ],
};

export const SOLUTION_FLOW = [
  "Vague inquiry",
  "Guided product & material selection",
  "Virtual process route",
  "Chemistry & manufacturing explanation",
  "Quality & testing requirements",
  "RFQ completeness review",
  "Quote-ready technical package",
];

export interface UseCase {
  title: string;
  audience: string;
  body: string;
}
export const USE_CASES: UseCase[] = [
  { title: "Customer education", audience: "Buyers", body: "Help non-technical buyers understand product options, materials, and what a good RFQ needs." },
  { title: "Technical RFQ intake", audience: "Sales", body: "Capture structured, technically complete requirements instead of a free-text contact form." },
  { title: "Sales enablement", audience: "Sales engineering", body: "Give the sales team a guided, credible way to qualify inquiries before engineering review." },
  { title: "Engineering pre-review", audience: "Engineering", body: "Surface material, chemistry, route, and risk context so engineering starts with a head start." },
  { title: "Quality requirement capture", audience: "Quality", body: "Identify the tests, standards, and documentation a job implies before it reaches the floor." },
  { title: "Digital factory demonstration", audience: "Marketing", body: "Show factory capability visually as a modern, memorable digital front door." },
];

export const FOR_MANUFACTURERS = {
  intro:
    "A rubber manufacturer can use RubberForge as a digital front door that educates customers and standardizes incoming quote requests.",
  benefits: [
    "Replace static website contact forms with a guided technical intake",
    "Educate customers before the RFQ so requests arrive more complete",
    "Capture better technical information and reduce sales-engineering back-and-forth",
    "Show factory capability visually instead of describing it in PDFs",
    "Standardize incoming quote requests into a reviewable package",
    "Prepare internal review packages for engineering and quality",
    "Differentiate the company with a modern digital experience",
  ],
  cta: "Configure this virtual factory for your rubber business",
  ctaNote: "Placeholder contact for now. RubberForge is a VayuAI prototype, not yet a configured production deployment.",
};

export const FOR_CUSTOMERS = {
  intro: "Customers use RubberForge to understand their options and submit a stronger request.",
  steps: [
    "Understand product options and forms",
    "Compare materials by the property that matters",
    "Learn what information the factory needs",
    "See how the product is actually made",
    "Identify likely quality and testing requirements",
    "Submit a better, more complete RFQ",
  ],
};

export const ABOUT_PLATFORM = {
  framing:
    "RubberForge is built by VayuAI as a digital twin-style virtual factory prototype: an interactive front door and RFQ intelligence layer for custom rubber manufacturing.",
  current: [
    "Interactive 3D virtual factory",
    "Material, product, and process education",
    "Rubber chemistry layer",
    "RFQ qualification and completeness review",
    "Quality, testing, and standards guidance",
    "Supply-chain and factory intelligence",
  ],
  notYet: [
    "Live production monitoring",
    "A real digital twin connected to running machines",
    "Certified quality records",
    "Production scheduling",
    "Real pricing",
    "ERP / MES integration",
  ],
  future: [
    "Manufacturer-specific configuration",
    "Real equipment and capability data",
    "A live RFQ database with document upload",
    "An internal admin review dashboard",
    "CRM / ERP integration",
    "Real-time factory data, simulation, and optimization",
  ],
};

// Credible VayuAI language to use sparingly across the product.
export const VAYU_LANGUAGE = [
  "virtual factory experience",
  "digital factory front door",
  "RFQ intelligence",
  "manufacturing knowledge interface",
  "technical intake system",
  "manufacturing route engine",
  "quality-aware quote workflow",
  "digital thread",
  "factory review package",
];
