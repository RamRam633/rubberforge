import type { ImprovementItem } from "@/types/qms";
export const continualImprovement: ImprovementItem[] = [
  {
    "id": "ci-1",
    "source": "Internal audit finding (demo)",
    "relatedProcess": "Sales and contract review (RFQ intake)",
    "problemOrOpportunity": "A noticeable share of incoming RFQs in the modeled workflow arrive missing key fields such as elastomer family, hardness target, dimensional tolerances, or end-use, which forces rework and delays quoting.",
    "proposedAction": "Introduce a mandatory RFQ completeness checklist and required-field gating at intake so an enquiry cannot advance to quoting until the core technical fields are captured.",
    "owner": "Sales and Contract Review Lead",
    "priority": "high",
    "status": "planned",
    "expectedBenefit": "Faster, lower-rework quoting with fewer back-and-forth clarification cycles",
    "linkedRiskOrOpportunity": "Risk of misquoting and non-conforming product from incomplete customer requirements"
  },
  {
    "id": "ci-2",
    "source": "Nonconformance report trend (demo NCR cluster)",
    "relatedProcess": "Incoming material receipt and goods-in inspection",
    "problemOrOpportunity": "Certificates of analysis and batch documentation for incoming raw rubber, fillers, and curatives are sometimes captured inconsistently, leaving gaps when a downstream investigation needs to trace material properties.",
    "proposedAction": "Standardize a structured material documentation capture step at goods-in that records supplier batch identity, certificate references, and key declared properties against each received lot.",
    "owner": "Incoming Quality (Goods-In) Supervisor",
    "priority": "high",
    "status": "in-progress",
    "expectedBenefit": "Complete, retrievable material history for every received lot",
    "linkedRiskOrOpportunity": "Risk of unverified material properties entering production undetected"
  },
  {
    "id": "ci-3",
    "source": "Internal audit finding (demo)",
    "relatedProcess": "Quality planning and in-process inspection",
    "problemOrOpportunity": "Inspection plans across product families in the modeled factory vary in format and content, so similar parts may receive inconsistent check points, sample frequencies, and acceptance criteria.",
    "proposedAction": "Develop a standardized inspection plan template with defined characteristics, methods, and sampling logic, then roll it out across the modeled product families.",
    "owner": "Quality Engineering Lead",
    "priority": "medium",
    "status": "planned",
    "expectedBenefit": "Consistent, repeatable inspection coverage across product lines",
    "linkedRiskOrOpportunity": "Opportunity to reduce escaped defects through uniform inspection discipline"
  },
  {
    "id": "ci-4",
    "source": "Risk review (supplier risk workshop, demo)",
    "relatedProcess": "Supplier management and purchasing",
    "problemOrOpportunity": "The modeled supplier qualification flow does not consistently verify that suppliers provide current required documents such as material certificates, test reports, and regulatory or restricted-substance declarations.",
    "proposedAction": "Add a supplier document verification gate to the purchasing and qualification process that flags missing or expired documents before orders are released.",
    "owner": "Purchasing and Supplier Quality Manager",
    "priority": "medium",
    "status": "idea",
    "expectedBenefit": "Higher confidence in supplier-provided evidence before commitment",
    "linkedRiskOrOpportunity": "Risk of accepting material from inadequately documented suppliers"
  },
  {
    "id": "ci-5",
    "source": "Customer feedback (audit-readiness query, demo)",
    "relatedProcess": "Traceability and identification across production stations",
    "problemOrOpportunity": "The traceability chain in the modeled line has weak links between raw material lots, mixing batches, cured parts, and finished goods, making full forward and backward trace slow and incomplete.",
    "proposedAction": "Strengthen lot and batch linkage at each station so material identity carries through mixing, forming, curing, and final inspection into the shipment record.",
    "owner": "Traceability and Identification Owner",
    "priority": "high",
    "status": "in-progress",
    "expectedBenefit": "Faster, more complete recall and root-cause traceability",
    "linkedRiskOrOpportunity": "Opportunity to contain quality issues to specific lots rather than broad holds"
  },
  {
    "id": "ci-6",
    "source": "Risk review (process FMEA, demo)",
    "relatedProcess": "Calendering and sheet forming process control",
    "problemOrOpportunity": "Sheet thickness variation is a commonly recognized failure mode in rubber sheet forming, and the modeled process control does not yet surface early warning when thickness drifts toward tolerance limits.",
    "proposedAction": "Add an in-process thickness monitoring concept with trend visibility and drift alerts so operators can react before sheets fall out of specification.",
    "owner": "Process Control Engineer",
    "priority": "high",
    "status": "idea",
    "expectedBenefit": "Reduced scrap and out-of-tolerance sheet from earlier intervention",
    "linkedRiskOrOpportunity": "Risk of dimensional non-conformance and downstream assembly issues"
  },
  {
    "id": "ci-7",
    "source": "Nonconformance report (demo) plus customer feedback",
    "relatedProcess": "Design and contract review (customer drawing handling)",
    "problemOrOpportunity": "Customer-supplied drawings and specifications in the modeled workflow are not always validated for completeness, revision currency, and manufacturability before they drive tooling and production.",
    "proposedAction": "Introduce a customer drawing validation step that confirms revision level, tolerance feasibility, and key feature clarity before the job is released to production planning.",
    "owner": "Design and Drawing Review Engineer",
    "priority": "medium",
    "status": "planned",
    "expectedBenefit": "Fewer surprises and reworks caused by ambiguous or outdated drawings",
    "linkedRiskOrOpportunity": "Risk of producing to an incorrect or superseded specification"
  },
  {
    "id": "ci-8",
    "source": "Internal audit finding (demo)",
    "relatedProcess": "Measuring and test equipment calibration control",
    "problemOrOpportunity": "Calibration status for gauges, durometers, scales, and test instruments in the modeled lab and line is hard to see at a glance, so overdue or out-of-calibration equipment may be used without prompt awareness.",
    "proposedAction": "Build a calibration visibility view that shows each instrument identity, due date, and status so overdue items are surfaced clearly before use.",
    "owner": "Calibration and Metrology Coordinator",
    "priority": "medium",
    "status": "planned",
    "expectedBenefit": "Lower risk of decisions made on uncalibrated measurements",
    "linkedRiskOrOpportunity": "Risk of accepting product based on inaccurate measurement data"
  },
  {
    "id": "ci-9",
    "source": "Risk review (competence gap review, demo)",
    "relatedProcess": "Competence, training, and awareness",
    "problemOrOpportunity": "The modeled training matrix is incomplete and not consistently linked to specific roles and critical operations such as mixing, curing, and final inspection, leaving competence coverage unclear.",
    "proposedAction": "Strengthen the training matrix to map required competencies to each role and critical operation, with status tracking for completed and pending training.",
    "owner": "Training and Competence Manager",
    "priority": "low",
    "status": "idea",
    "expectedBenefit": "Clear visibility of who is qualified for each critical operation",
    "linkedRiskOrOpportunity": "Opportunity to reduce process variation driven by uneven operator competence"
  }
];
