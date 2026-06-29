import { factoryOutputs } from "./factoryOutputs";
import { factoryLayersById } from "./factoryLayers";
import type { FactoryLayerId } from "@/types/factoryPlatform";

// Readable labels for the routes that systems/outputs cross-link to.
export const PAGE_LABELS: Record<string, string> = {
  "/": "Home",
  "/simulator": "Virtual Factory",
  "/systems": "Factory Systems",
  "/materials": "Materials",
  "/products": "Products",
  "/quality-lab": "Quality Lab",
  "/outputs": "Factory Outputs",
  "/chemistry": "Chemistry",
  "/factory-intelligence": "Factory Intelligence",
  "/process": "Process Library",
  "/defects": "Defect Detective",
  "/glossary": "Glossary",
  "/factory": "Capabilities",
  "/quote": "RFQ Builder",
  "/about": "About",
};

export function pageLabel(href: string): string {
  return PAGE_LABELS[href.split("#")[0]] ?? href;
}

const OUTPUT_NAME: Record<string, string> = Object.fromEntries(factoryOutputs.map((o) => [o.id, o.name]));
export function outputLabel(id: string): string {
  return OUTPUT_NAME[id] ?? id;
}

export function layerName(id: FactoryLayerId): string {
  return factoryLayersById[id]?.name ?? id;
}
export function layerAccent(id: FactoryLayerId): string {
  return factoryLayersById[id]?.accent ?? "#9ea4d6";
}
