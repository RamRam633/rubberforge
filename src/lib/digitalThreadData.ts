export type ThreadKind =
  | "requirement"
  | "material"
  | "product"
  | "route"
  | "station"
  | "chemistry"
  | "quality"
  | "documentation"
  | "rfq"
  | "review";

export interface ThreadNode {
  id: string;
  label: string;
  kind: ThreadKind;
  description: string;
  href?: string;
}

// The digital thread: how a customer requirement connects through the factory
// to a reviewable RFQ. Central concept of the platform.
export const digitalThread: ThreadNode[] = [
  { id: "requirement", label: "Customer requirement", kind: "requirement", description: "The application, environment, and constraints the part must meet.", href: "/quote" },
  { id: "material", label: "Material selection", kind: "material", description: "An elastomer family matched to the environment and budget.", href: "/materials" },
  { id: "product", label: "Product category", kind: "product", description: "The product form: sheet, gasket, sleeve, molded part, and more.", href: "/products" },
  { id: "route", label: "Manufacturing route", kind: "route", description: "A preliminary process route from compound to finished part.", href: "/products" },
  { id: "station", label: "Machine stations", kind: "station", description: "The equipment and process controls at each step of the line.", href: "/factory-intelligence" },
  { id: "chemistry", label: "Chemistry concepts", kind: "chemistry", description: "Why the material and cure behave the way they do.", href: "/chemistry" },
  { id: "quality", label: "Quality tests", kind: "quality", description: "The tests and standards the application implies.", href: "/quality-lab" },
  { id: "documentation", label: "Documentation", kind: "documentation", description: "Traceability and the documents a customer may request.", href: "/quality-lab" },
  { id: "rfq", label: "RFQ summary", kind: "rfq", description: "A quote-ready technical package with a completeness score.", href: "/quote" },
  { id: "review", label: "Internal review", kind: "review", description: "Bill of process, missing info, and review owners for the factory team.", href: "/quote" },
];
