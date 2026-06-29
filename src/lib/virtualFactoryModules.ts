export type ModuleStatus = "built" | "configurable" | "data-connected";

export interface VFModule {
  id: string;
  name: string;
  description: string;
  status: ModuleStatus;
  href: string;
  icon: "factory" | "flask" | "route" | "wrench" | "shield" | "file" | "clipboard" | "git";
}

export const virtualFactoryModules: VFModule[] = [
  { id: "3d-factory", name: "3D Virtual Factory", description: "A realistic, interactive rubber sheet line from raw ingredients to a finished roll.", status: "built", href: "/simulator", icon: "factory" },
  { id: "material-chemistry", name: "Material & Chemistry Intelligence", description: "Elastomer families, properties, and the chemistry behind how rubber behaves.", status: "built", href: "/materials", icon: "flask" },
  { id: "route-engine", name: "Product Route Engine", description: "Deterministic preliminary manufacturing routes per product and material.", status: "built", href: "/products", icon: "route" },
  { id: "equipment-supply", name: "Equipment & Supply Chain Library", description: "Machines, ingredients, suppliers, utilities, and supply-chain dependencies.", status: "built", href: "/factory-intelligence", icon: "wrench" },
  { id: "quality-lab", name: "Quality Lab & Standards", description: "Tests, standards references, inspection plans, and quality-aware defects.", status: "built", href: "/quality-lab", icon: "shield" },
  { id: "rfq-builder", name: "RFQ Builder", description: "Turns a selection into a quote-ready technical package with a completeness score.", status: "built", href: "/quote", icon: "clipboard" },
  { id: "factory-review", name: "Internal Factory Review", description: "Bill of process, required equipment, quality plan, and review owners.", status: "configurable", href: "/quote", icon: "file" },
  { id: "traceability", name: "Traceability & Documentation", description: "The lot/batch digital thread and the documents a customer may request.", status: "configurable", href: "/quality-lab", icon: "git" },
];
