"use client";

import type { QuoteGroup } from "@/types/platform";

// Renders dynamic, material/product-aware RFQ questions. Controlled by the page.
export function QuoteQuestionPanel({
  groups,
  answers,
  onChange,
}: {
  groups: QuoteGroup[];
  answers: Record<string, string | boolean>;
  onChange: (id: string, value: string | boolean) => void;
}) {
  if (groups.length === 0) return null;
  return (
    <div className="space-y-3">
      {groups.map((g) => (
        <div key={g.id} className="panel-tight p-3.5">
          <div className="label-mono mb-2.5 text-violet-300">{g.label}</div>
          <div className="space-y-3">
            {g.questions.map((q) => {
              const val = answers[q.id];
              return (
                <div key={q.id}>
                  {q.type === "boolean" ? (
                    <label className="flex cursor-pointer items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={val === true}
                        onChange={(e) => onChange(q.id, e.target.checked)}
                        className="h-4 w-4 accent-violet-500"
                      />
                      <span className="text-[13px] text-ink">{q.label}</span>
                    </label>
                  ) : (
                    <>
                      <label className="mb-1 block text-[12.5px] text-ink-muted">{q.label}</label>
                      {q.type === "select" ? (
                        <select
                          value={(val as string) ?? ""}
                          onChange={(e) => onChange(q.id, e.target.value)}
                          className="w-full rounded-lg border border-line bg-base-850/60 px-3 py-2 text-sm text-ink focus:border-violet-500/50 focus:outline-none"
                        >
                          <option value="">Select…</option>
                          {(q.options ?? []).map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      ) : q.type === "textarea" ? (
                        <textarea
                          value={(val as string) ?? ""}
                          onChange={(e) => onChange(q.id, e.target.value)}
                          rows={2}
                          className="w-full rounded-lg border border-line bg-base-850/60 px-3 py-2 text-sm text-ink placeholder:text-ink-faint focus:border-violet-500/50 focus:outline-none"
                        />
                      ) : (
                        <input
                          type={q.type === "number" ? "number" : "text"}
                          value={(val as string) ?? ""}
                          onChange={(e) => onChange(q.id, e.target.value)}
                          className="w-full rounded-lg border border-line bg-base-850/60 px-3 py-2 text-sm text-ink placeholder:text-ink-faint focus:border-violet-500/50 focus:outline-none"
                        />
                      )}
                    </>
                  )}
                  {q.help && <p className="mt-1 text-[11px] leading-relaxed text-ink-faint">{q.help}</p>}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
