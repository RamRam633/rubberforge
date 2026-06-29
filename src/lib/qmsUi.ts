// Shared status -> tone mapping for QMS / lab chips. Pure helpers, no JSX.

export type Tone = "pass" | "warn" | "fail" | "info" | "muted";

const TONE_BY_STATUS: Record<string, Tone> = {
  // good / done
  modeled: "pass", approved: "pass", current: "pass", conforming: "pass", mitigated: "pass",
  closed: "pass", "closed-demo": "pass", "done-demo": "pass", "pass-demo": "pass", "accepted-demo": "pass",
  "controlled-demo": "pass", "trained-demo": "pass", "approved-demo": "pass", relevant: "pass", "not-relevant": "muted",
  // in progress / caution
  partial: "warn", draft: "warn", "under-review": "warn", "due-soon": "warn", "in-progress": "warn",
  monitored: "warn", planned: "warn", "in-training-demo": "warn", "conditional-demo": "warn", "review-needed": "warn",
  "review-required-demo": "warn", "minor-finding": "warn", "hold-for-review": "warn", "needs-customer-clarification": "warn",
  "planned-demo": "warn", "relevance-to-be-assessed": "warn", "action-required": "warn", "due-demo": "warn",
  // bad / blocking
  future: "fail", overdue: "fail", "major-finding": "fail", open: "fail", "fail-demo": "fail",
  blocked: "fail", "rejected-demo": "fail", "ncr-required": "fail", "ncr-opened": "fail", critical: "fail",
  // neutral / info
  pending: "info", "pending-demo": "info", opportunity: "info", idea: "info", "demo-placeholder": "info",
  "not-applicable-demo": "muted", "pending-demo-status": "info", "under-review-demo": "warn",
};

export function statusTone(status: string): Tone {
  const k = status.toLowerCase().trim();
  return TONE_BY_STATUS[k] ?? "muted";
}

export const TONE_CLS: Record<Tone, string> = {
  pass: "border-pass/40 bg-pass/10 text-pass",
  warn: "border-molten-400/40 bg-molten-400/10 text-molten-300",
  fail: "border-fail/40 bg-fail/10 text-[#fca5a5]",
  info: "border-blue-400/40 bg-blue-400/10 text-blue-300",
  muted: "border-line text-ink-faint",
};

export function statusClass(status: string): string {
  return TONE_CLS[statusTone(status)];
}

export function prettyStatus(status: string): string {
  return status.replace(/-/g, " ").replace(/\bdemo\b/i, "(demo)");
}

// Clause labels for cross references.
export const CLAUSE_SHORT: Record<string, string> = {
  "clause-4": "Cl. 4 Context",
  "clause-5": "Cl. 5 Leadership",
  "clause-6": "Cl. 6 Planning",
  "clause-7": "Cl. 7 Support",
  "clause-8": "Cl. 8 Operation",
  "clause-9": "Cl. 9 Performance",
  "clause-10": "Cl. 10 Improvement",
};
export function clauseShort(id: string): string {
  return CLAUSE_SHORT[id] ?? id;
}
