import type { OrgFunction } from "@/types/operatingModel";
export const orgFunctions: OrgFunction[] = [
  {
    "id": "leadership",
    "name": "Executive / Plant Leadership",
    "mission": "Sets the virtual factory's quality policy, objectives, and resource priorities, and holds final accountability for production release and quality decisions that the AI agents only support and never make autonomously.",
    "humanRoles": [
      "Plant Manager",
      "Quality Manager",
      "Continuous Improvement Lead"
    ],
    "supportingAgents": [
      "Management Review Dashboard Agent",
      "KPI Trend Analyst Agent",
      "Audit Readiness Coordinator Agent"
    ],
    "relatedLayer": "qms"
  },
  {
    "id": "quality",
    "name": "Quality Management",
    "mission": "Maintains the ISO 9001-aligned management system, owns nonconformance and CAPA handling, and keeps every quality decision under an accountable human approver while AI agents assemble evidence and flag gaps.",
    "humanRoles": [
      "Quality Manager",
      "QA Inspector",
      "Document Controller"
    ],
    "supportingAgents": [
      "Nonconformance Triage Agent",
      "CAPA Drafting Assistant Agent",
      "Traceability Linker Agent"
    ],
    "relatedLayer": "quality"
  },
  {
    "id": "production",
    "name": "Production / Operations",
    "mission": "Runs the simulated production line across the ten stations from raw-material-room to finished-roll, executing work orders while AI agents surface preliminary status and flag deviations for supervisor review.",
    "humanRoles": [
      "Production Supervisor",
      "Plant Manager",
      "QA Inspector"
    ],
    "supportingAgents": [
      "Production Status Monitor Agent",
      "Deviation Alert Agent",
      "Batch Record Compiler Agent"
    ],
    "relatedLayer": "process"
  },
  {
    "id": "process-eng",
    "name": "Process Engineering",
    "mission": "Defines and verifies the demo process parameters and control plans for mixing, milling, calendering, and vulcanization, with engineers approving every parameter change that AI agents only recommend.",
    "humanRoles": [
      "Process Engineer",
      "Production Supervisor",
      "Continuous Improvement Lead"
    ],
    "supportingAgents": [
      "Process Parameter Advisor Agent",
      "Control Plan Reviewer Agent",
      "Deviation Alert Agent"
    ],
    "relatedLayer": "process"
  },
  {
    "id": "materials-chemistry",
    "name": "Materials / Rubber Chemistry",
    "mission": "Manages the demo material masters and compound structure for rubber chemistry, supporting material decisions with traceable provenance while a chemist remains the accountable approver for any formulation record.",
    "humanRoles": [
      "Rubber Chemist",
      "QA Lab Engineer",
      "Process Engineer"
    ],
    "supportingAgents": [
      "Material Master Validator Agent",
      "Compound Consistency Checker Agent",
      "Traceability Linker Agent"
    ],
    "relatedLayer": "chemistry"
  },
  {
    "id": "qa-lab",
    "name": "QA Lab",
    "mission": "Plans and records simulated laboratory tests and inspections, organizing results and completeness checks for human review without ever auto-releasing a result or passing a sample on its own.",
    "humanRoles": [
      "QA Lab Engineer",
      "Quality Manager",
      "Calibration Coordinator"
    ],
    "supportingAgents": [
      "Test Plan Structuring Agent",
      "Lab Result Completeness Agent",
      "Calibration Status Tracker Agent"
    ],
    "relatedLayer": "quality"
  },
  {
    "id": "maintenance",
    "name": "Maintenance / Reliability",
    "mission": "Keeps the virtual equipment running across all stations through preventive and corrective maintenance, with AI agents proposing schedules and flagging anomalies that a maintenance lead reviews and approves.",
    "humanRoles": [
      "Maintenance Lead",
      "Production Supervisor",
      "Calibration Coordinator"
    ],
    "supportingAgents": [
      "Maintenance Scheduler Agent",
      "Equipment Anomaly Watcher Agent",
      "Calibration Status Tracker Agent"
    ],
    "relatedLayer": "maintenance"
  },
  {
    "id": "supply-chain",
    "name": "Supply Chain / Supplier Quality",
    "mission": "Manages the demo supplier roster and incoming material records, where AI agents structure supplier evidence and completeness while supplier approval stays an explicit human decision.",
    "humanRoles": [
      "Supply Chain Manager",
      "Supplier Quality Engineer",
      "Quality Manager"
    ],
    "supportingAgents": [
      "Supplier Evidence Organizer Agent",
      "Incoming Inspection Recorder Agent",
      "Material Master Validator Agent"
    ],
    "relatedLayer": "supply-chain"
  },
  {
    "id": "sales",
    "name": "Sales / Customer Requirements",
    "mission": "Translates simulated customer requirements and RFQs into reviewable specifications, with applications engineers approving every commitment that AI agents only draft and structure.",
    "humanRoles": [
      "Sales / Applications Engineer",
      "Quality Manager",
      "Process Engineer"
    ],
    "supportingAgents": [
      "RFQ Requirement Parser Agent",
      "Spec Conformity Reviewer Agent",
      "Customer Requirement Mapper Agent"
    ],
    "relatedLayer": "rfq"
  },
  {
    "id": "documentation",
    "name": "Documentation / Compliance",
    "mission": "Controls the demo document and record set for the ISO 9001-aligned system, maintaining version control and traceability while AI agents check completeness and a document controller approves releases.",
    "humanRoles": [
      "Document Controller",
      "Quality Manager",
      "Calibration Coordinator"
    ],
    "supportingAgents": [
      "Document Control Agent",
      "Traceability Linker Agent",
      "Audit Readiness Coordinator Agent"
    ],
    "relatedLayer": "documentation"
  },
  {
    "id": "improvement",
    "name": "Continuous Improvement",
    "mission": "Reviews simulated quality and process trends to recommend preliminary improvement actions, with a continuous improvement lead and process owners deciding which AI-suggested actions are adopted.",
    "humanRoles": [
      "Continuous Improvement Lead",
      "Quality Manager",
      "Process Engineer"
    ],
    "supportingAgents": [
      "KPI Trend Analyst Agent",
      "Improvement Opportunity Finder Agent",
      "CAPA Drafting Assistant Agent"
    ],
    "relatedLayer": "qms"
  }
];
