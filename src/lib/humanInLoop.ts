import type { HilGate } from "@/types/operatingModel";
export const humanInLoop: HilGate[] = [
  {
    "gate": "Material approval",
    "whoApproves": "Quality Engineer (Incoming Materials)",
    "supportingAgent": "Incoming Material Review Agent",
    "whyHumanRequired": "Accepting an incoming material lot into production carries product-safety and traceability risk that an accountable quality engineer must own, since the agent only structures and flags demo evidence and cannot autonomously certify a lot as fit for use.",
    "whatAgentProvides": "Structured summary of simulated incoming inspection records, supplier documentation completeness, and flagged gaps for human review"
  },
  {
    "gate": "Quality release",
    "whoApproves": "Quality Manager (Product Release)",
    "supportingAgent": "Release Readiness Agent",
    "whyHumanRequired": "Releasing product against requirements is a controlled quality decision with downstream customer and liability impact, so an accountable quality manager must sign off rather than an agent that only assembles and checks the demo record set.",
    "whatAgentProvides": "Traceability and completeness check of simulated process, inspection, and test records with open-item highlights for human review"
  },
  {
    "gate": "Supplier approval",
    "whoApproves": "Procurement Quality Lead (Supplier Approval)",
    "supportingAgent": "Supplier Qualification Agent",
    "whyHumanRequired": "Adding or approving a supplier commits the organization to a sourcing relationship and shared quality risk, which generally requires an accountable procurement quality lead to judge fitness rather than an agent that only organizes qualification inputs.",
    "whatAgentProvides": "Structured supplier qualification dossier from simulated assessments and document status, with missing-evidence flags for human review"
  },
  {
    "gate": "NCR disposition",
    "whoApproves": "Material Review Board Chair (accountable human)",
    "supportingAgent": "Nonconformance Triage Agent",
    "whyHumanRequired": "Deciding the disposition of nonconforming material (use-as-is, rework, scrap, or return) is a judgment-based risk decision that an accountable material review board chair must make, since the agent can only propose options and cannot autonomously accept nonconforming product.",
    "whatAgentProvides": "Structured NCR record with simulated evidence, affected-lot traceability, and recommended disposition options for human review"
  },
  {
    "gate": "CAPA closure",
    "whoApproves": "Quality Manager (CAPA Owner)",
    "supportingAgent": "CAPA Effectiveness Agent",
    "whyHumanRequired": "Confirming that a corrective or preventive action is effective and may be closed requires accountable human judgment on residual risk, because the agent only checks completeness and evidence and cannot autonomously declare a CAPA effective.",
    "whatAgentProvides": "Completeness and traceability summary of simulated CAPA steps, root-cause linkage, and effectiveness-evidence gaps for human review"
  },
  {
    "gate": "Customer requirement approval",
    "whoApproves": "Quality Manager with Sales/Contracts Lead (accountable humans)",
    "supportingAgent": "Requirement Capture Agent",
    "whyHumanRequired": "Accepting customer requirements commits the organization to contractual obligations and feasibility it must be able to meet, so accountable quality and contracts roles must approve rather than an agent that only extracts and structures stated requirements.",
    "whatAgentProvides": "Structured requirement breakdown from demo customer inputs with ambiguity, conflict, and feasibility-question flags for human review"
  },
  {
    "gate": "QMS management review",
    "whoApproves": "Top Management / Management Representative (accountable humans)",
    "supportingAgent": "Management Review Pack Agent",
    "whyHumanRequired": "Management review conclusions and resulting actions set the direction and resourcing of the quality system, a leadership accountability that cannot be delegated to an agent that only compiles and organizes the demo review inputs.",
    "whatAgentProvides": "Compiled management review pack from simulated metrics, audit and CAPA status, and open actions, with input-completeness flags for human review"
  },
  {
    "gate": "Official certification/compliance decision",
    "whoApproves": "Authorized Certifying Body / Accountable Compliance Officer (external human authority)",
    "supportingAgent": "Conformity Evidence Agent",
    "whyHumanRequired": "Any official certification or compliance determination rests solely with an authorized human authority, since RubberForge is an educational ISO 9001-aligned prototype that is never certified or compliant and the agent only organizes preliminary demo evidence.",
    "whatAgentProvides": "Organized, clearly-labeled demo conformity evidence map with explicit gaps and disclaimers, prepared only to support human review"
  }
];
