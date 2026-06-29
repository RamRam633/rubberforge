import type { StationId } from "@/types/simulation";
import type { CapabilityId } from "@/types/platform";

export interface Capability {
  id: CapabilityId;
  name: string;
  description: string;
  relatedStations: StationId[];
  /** Whether the live 3D simulator currently shows this capability. */
  inSimulator: boolean;
}

// The factory's process capabilities, tied to the 3D simulator stations.
export const capabilities: Capability[] = [
  {
    id: "compounding",
    name: "Compounding",
    description:
      "Combining a base polymer with reinforcing fillers, process oils, protective additives, and a cure system into one uniform compound. The recipe is assembled here conceptually, before any forming.",
    relatedStations: ["weighing-station", "internal-mixer"],
    inSimulator: true,
  },
  {
    id: "internal-mixing",
    name: "Internal Mixing",
    description:
      "High-shear dispersion of fillers and additives into the polymer matrix to build a homogeneous masterbatch. Dispersion quality set here drives strength and consistency downstream.",
    relatedStations: ["internal-mixer"],
    inSimulator: true,
  },
  {
    id: "milling",
    name: "Two-Roll Milling",
    description:
      "Open-mill homogenizing and conditioning of the compound, where the cure system is worked in evenly at a safer temperature than the hot mixer.",
    relatedStations: ["two-roll-mill"],
    inSimulator: true,
  },
  {
    id: "calendering",
    name: "Calendering",
    description:
      "Forming the compound into a continuous flat sheet of controlled thickness and surface, including calendering onto fabric for reinforced sheet.",
    relatedStations: ["calender"],
    inSimulator: true,
  },
  {
    id: "curing",
    name: "Curing / Vulcanization",
    description:
      "Applying heat so the cure system crosslinks the polymer chains, converting a workable compound into elastic, dimensionally stable rubber.",
    relatedStations: ["vulcanization"],
    inSimulator: true,
  },
  {
    id: "cutting-slitting",
    name: "Cutting & Slitting",
    description:
      "Trimming, slitting, and die-cutting cured stock to width and shape for sheet, strip, gasket, and die-cut parts.",
    relatedStations: ["trimming-slitting"],
    inSimulator: true,
  },
  {
    id: "molding",
    name: "Molding",
    description:
      "Forming and curing shaped parts such as molded components, sleeves, bushings, and seals. Modeled as a route today, with a dedicated 3D module planned.",
    relatedStations: [],
    inSimulator: false,
  },
  {
    id: "inspection-testing",
    name: "Inspection & Testing",
    description:
      "Verifying thickness, hardness, surface, and dimensions, which indirectly confirm that the formulation and process were suitable.",
    relatedStations: ["inspection"],
    inSimulator: true,
  },
  {
    id: "packaging",
    name: "Packaging",
    description:
      "Winding, labeling, and protecting finished product for storage and shipment while preserving the quality built into the part.",
    relatedStations: ["finished-roll"],
    inSimulator: true,
  },
];
