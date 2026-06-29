export type UserMode = "customer" | "engineer" | "factory-review";

export interface UserModeDef {
  id: UserMode;
  name: string;
  audience: string;
  tagline: string;
  emphasis: string[];
  icon: "user" | "wrench" | "clipboard";
}

// Three lenses on the same virtual factory. The active mode changes what is
// emphasised across the app without changing navigation.
export const userModes: UserModeDef[] = [
  {
    id: "customer",
    name: "Customer",
    audience: "Buyers and non-technical visitors",
    tagline: "Product-first, quote-focused, plain language.",
    emphasis: [
      "Product selection and simple material guidance",
      "Virtual factory tour and what happens at each step",
      "What information is needed for a quote",
      "RFQ summary",
    ],
    icon: "user",
  },
  {
    id: "engineer",
    name: "Engineer",
    audience: "Engineers, technical buyers, application reviewers",
    tagline: "Materials, chemistry, process, tests, and standards.",
    emphasis: [
      "Material behaviour and chemistry",
      "Process routes and defects",
      "Quality tests and standards references",
      "Application risk and compatibility",
    ],
    icon: "wrench",
  },
  {
    id: "factory-review",
    name: "Factory Review",
    audience: "The manufacturer's internal team",
    tagline: "Completeness, route, equipment, quality, and review.",
    emphasis: [
      "RFQ completeness and missing information",
      "Suggested manufacturing route and equipment",
      "Quality, testing, and documentation requirements",
      "Traceability, internal notes, and bill of process",
    ],
    icon: "clipboard",
  },
];

export const userModesById: Record<UserMode, UserModeDef> = Object.fromEntries(
  userModes.map((m) => [m.id, m]),
) as Record<UserMode, UserModeDef>;
