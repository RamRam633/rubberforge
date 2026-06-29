import type { CapaStep } from "@/types/qms";
export const capaWorkflow: CapaStep[] = [
  {
    "step": "Problem statement",
    "description": "DEMO placeholder: state the nonconformance plainly using the what, where, and how-detected facts: which product or batch, which station or process area, the requirement that was not met, and the evidence that triggered the NCR. Keep it factual and free of assumed causes so the rest of the workflow stays objective."
  },
  {
    "step": "Containment",
    "description": "DEMO placeholder: take immediate action to limit the impact while the cause is still unknown. This commonly means quarantining or segregating the suspect material, holding release, and checking whether any adjacent or already-shipped lots may share the issue. Containment controls exposure, it does not yet fix the underlying problem."
  },
  {
    "step": "Root cause analysis",
    "description": "DEMO placeholder: investigate why the nonconformance occurred rather than only what happened, using a structured method (for example asking why repeatedly or a cause-and-effect breakdown across people, method, material, machine, and environment). Aim to reach a verifiable contributing cause supported by records and observations, not a guess."
  },
  {
    "step": "Corrective action",
    "description": "DEMO placeholder: define and implement actions that address the identified root cause so the same nonconformance is less likely to recur, for example a process-control change, an added verification gate, equipment attention, or revised work instructions. Assign an owner and a target date for each action."
  },
  {
    "step": "Effectiveness check",
    "description": "DEMO placeholder: after the corrective action has had time to operate, verify that it actually worked by reviewing later batches, in-process data, or audit results for recurrence. If the issue reappears, the workflow loops back to deepen the root cause analysis rather than closing prematurely."
  },
  {
    "step": "Closure",
    "description": "DEMO placeholder: once effectiveness is demonstrated, formally close the NCR with the evidence retained: the disposition applied, the actions taken, the verification result, and the approver. Closure records the full history so the QMS model keeps an auditable trail for this demo audit-readiness prototype."
  }
];
