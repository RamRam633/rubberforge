import type { Metadata } from "next";
import { QALab } from "@/components/qalab/QALab";

export const metadata: Metadata = {
  title: "Virtual QA Lab · RubberForge",
  description:
    "A simulated industrial rubber testing laboratory: sample receiving, specimen prep, MDR rheology and cure, hardness, tensile, compression set, aging, fluid immersion, ozone, dimensional inspection, traceability, and a demo release decision. Educational and conceptual, no certificates or compliance claims.",
};

export default function QALabPage() {
  return <QALab />;
}
