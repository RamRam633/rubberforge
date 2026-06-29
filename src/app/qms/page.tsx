import type { Metadata } from "next";
import { QMSCommandCenter } from "@/components/qms/QMSCommandCenter";

export const metadata: Metadata = {
  title: "QMS Command Center · RubberForge",
  description:
    "An ISO 9001-aligned virtual factory quality-management system model for RubberForge: clause map, process ownership, document control, risk-based thinking, customer review, production controls, traceability, nonconformance and CAPA, internal audit, management review, and continual improvement. Not a certificate, not compliance.",
};

export default function QMSPage() {
  return <QMSCommandCenter />;
}
