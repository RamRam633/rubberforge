export function ProgressRail({
  value,
  label,
  size = "md",
}: {
  value: number;
  label?: string;
  size?: "sm" | "md";
}) {
  const v = Math.max(0, Math.min(100, value));
  const tone = v >= 80 ? "from-pass to-pass" : v >= 50 ? "from-violet-500 to-blue-500" : "from-molten-400 to-molten-500";
  return (
    <div>
      {label && (
        <div className="mb-1 flex items-center justify-between">
          <span className="label-mono">{label}</span>
          <span className="font-mono text-[12px] font-semibold text-ink">{v}%</span>
        </div>
      )}
      <div className={`w-full overflow-hidden rounded-full bg-base-700/60 ${size === "sm" ? "h-1.5" : "h-2.5"}`}>
        <div
          className={`h-full rounded-full bg-gradient-to-r ${tone} transition-[width] duration-500`}
          style={{ width: `${v}%` }}
        />
      </div>
    </div>
  );
}

export function StatusBadge({
  status,
  children,
}: {
  status: "ready" | "review" | "incomplete" | "ok" | "warn";
  children: React.ReactNode;
}) {
  const cls =
    status === "ready" || status === "ok"
      ? "border-pass/40 text-pass"
      : status === "review"
        ? "border-violet-400/40 text-violet-300"
        : status === "warn"
          ? "border-warn/40 text-warn"
          : "border-molten-400/40 text-molten-300";
  return <span className={`chip ${cls}`}>{children}</span>;
}
