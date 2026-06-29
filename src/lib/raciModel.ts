import type { RaciRow } from "@/types/operatingModel";
export const raciModel: RaciRow[] = [
  {
    "workflow": "Customer requirement review",
    "responsible": "Sales Engineer with Requirement Intake Agent (structures and checks the inquiry for completeness, flags ambiguous or missing specifications; supports review only, cannot decide autonomously)",
    "accountable": "Sales Engineering Manager (human)",
    "consulted": [
      "Applications Engineer",
      "Quality Engineer"
    ],
    "informed": [
      "Account Manager",
      "Production Planner"
    ]
  },
  {
    "workflow": "RFQ qualification",
    "responsible": "Estimating Engineer with RFQ Qualification Agent (assesses technical and capability fit, surfaces gaps and risks; recommends a go or no-go for human review, cannot decide autonomously)",
    "accountable": "Commercial Manager (human)",
    "consulted": [
      "Process Engineer",
      "Quality Engineer"
    ],
    "informed": [
      "Sales Engineering Manager",
      "Production Planner"
    ]
  },
  {
    "workflow": "Material approval",
    "responsible": "Materials Engineer with Material Review Agent (checks supplier documentation and demo certificate-of-analysis records for completeness and traceability; recommends, cannot approve materials autonomously)",
    "accountable": "Quality Manager (human)",
    "consulted": [
      "Process Engineer",
      "Lab Technician"
    ],
    "informed": [
      "Purchasing Lead",
      "Production Planner"
    ]
  },
  {
    "workflow": "Process route definition",
    "responsible": "Process Engineer with Route Definition Agent (drafts and structures the routing, checks step sequence and traceability links for completeness; supports authoring, cannot release a route autonomously)",
    "accountable": "Manufacturing Engineering Manager (human)",
    "consulted": [
      "Quality Engineer",
      "Production Supervisor"
    ],
    "informed": [
      "Production Planner",
      "Maintenance Lead"
    ]
  },
  {
    "workflow": "Supplier approval",
    "responsible": "Supplier Quality Engineer with Supplier Qualification Agent (consolidates demo audit and performance records, flags documentation gaps; recommends, never approves a supplier autonomously)",
    "accountable": "Quality Manager (human)",
    "consulted": [
      "Purchasing Lead",
      "Materials Engineer"
    ],
    "informed": [
      "Commercial Manager",
      "Production Planner"
    ]
  },
  {
    "workflow": "Production release",
    "responsible": "Production Planner with Release Readiness Agent (verifies that prerequisite records and approvals are present and traceable, flags missing items; supports the readiness check, cannot release production autonomously)",
    "accountable": "Production Manager (human)",
    "consulted": [
      "Quality Engineer",
      "Process Engineer"
    ],
    "informed": [
      "Production Supervisor",
      "Sales Engineering Manager"
    ]
  },
  {
    "workflow": "QA release",
    "responsible": "Quality Engineer with QA Release Agent (cross-checks demo inspection and test records against requirements for completeness and consistency, flags discrepancies; recommends, cannot release quality autonomously)",
    "accountable": "Quality Manager (human)",
    "consulted": [
      "Lab Technician",
      "Production Supervisor"
    ],
    "informed": [
      "Production Manager",
      "Account Manager"
    ]
  },
  {
    "workflow": "NCR disposition",
    "responsible": "Quality Engineer with NCR Disposition Agent (structures the nonconformance, suggests candidate dispositions with rationale and traceability; supports analysis, cannot decide disposition autonomously)",
    "accountable": "Quality Manager (human)",
    "consulted": [
      "Process Engineer",
      "Production Supervisor"
    ],
    "informed": [
      "Materials Engineer",
      "Production Manager"
    ]
  },
  {
    "workflow": "CAPA closure",
    "responsible": "Quality Engineer with CAPA Review Agent (checks root-cause analysis, action evidence, and effectiveness records for completeness; recommends closure for human review, cannot close a CAPA autonomously)",
    "accountable": "Quality Manager (human)",
    "consulted": [
      "Process Engineer",
      "Manufacturing Engineering Manager"
    ],
    "informed": [
      "Production Manager",
      "Internal Auditor"
    ]
  },
  {
    "workflow": "Management review",
    "responsible": "Quality Manager with Management Review Agent (assembles demo metrics, trends, and open-action summaries into a structured input pack; supports preparation, cannot make management decisions autonomously)",
    "accountable": "General Manager (human)",
    "consulted": [
      "Production Manager",
      "Commercial Manager"
    ],
    "informed": [
      "Quality Engineer",
      "Manufacturing Engineering Manager"
    ]
  },
  {
    "workflow": "Internal audit",
    "responsible": "Internal Auditor with Audit Support Agent (maps evidence to checklist items, flags coverage gaps and potential findings for auditor review; supports the audit, cannot conclude findings autonomously)",
    "accountable": "Quality Manager (human)",
    "consulted": [
      "Process Engineer",
      "Production Supervisor"
    ],
    "informed": [
      "General Manager",
      "Process Owners"
    ]
  }
];
