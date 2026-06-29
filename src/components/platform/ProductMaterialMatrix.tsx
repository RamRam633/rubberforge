import type { ProductMaterialMatrix as MatrixData, MaterialFamily, MatrixLevel } from "@/types/platform";

const DOT: Record<MatrixLevel, { node: React.ReactNode; title: string }> = {
  common: { node: <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />, title: "Commonly used" },
  "suitable-with-review": {
    node: <span className="h-2.5 w-2.5 rounded-full border-[1.5px] border-molten-400" />,
    title: "May be suitable, requires technical review",
  },
  "not-typical": { node: <span className="h-px w-2.5 bg-line-strong" />, title: "Not typical" },
};

export function ProductMaterialMatrix({
  matrix,
  materialsById,
}: {
  matrix: MatrixData;
  materialsById: Record<string, MaterialFamily>;
}) {
  return (
    <div className="panel overflow-hidden">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 border-b border-line px-4 py-2.5 text-[11px] text-ink-muted">
        <span className="label-mono">Legend</span>
        <span className="flex items-center gap-1.5">{DOT.common.node} commonly used</span>
        <span className="flex items-center gap-1.5">{DOT["suitable-with-review"].node} may suit, review</span>
        <span className="flex items-center gap-1.5">{DOT["not-typical"].node} not typical</span>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[640px]">
          {/* Header */}
          <div
            className="grid border-b border-line bg-base-850/50"
            style={{ gridTemplateColumns: `minmax(180px,1.4fr) repeat(${matrix.columns.length}, minmax(0,1fr))` }}
          >
            <div className="px-3 py-2 label-mono">Material</div>
            {matrix.columns.map((c) => (
              <div key={c} className="px-2 py-2 text-center text-[11px] font-medium text-ink-muted">{c}</div>
            ))}
          </div>

          {/* Rows */}
          {matrix.rows.map((row) => {
            const m = materialsById[row.materialId];
            return (
              <div
                key={row.materialId}
                className="grid items-center border-b border-line/60 last:border-0 hover:bg-base-800/40"
                style={{ gridTemplateColumns: `minmax(180px,1.4fr) repeat(${matrix.columns.length}, minmax(0,1fr))` }}
              >
                <div className="px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-[13px] font-semibold text-ink">{m?.displayName ?? row.materialId}</span>
                    <span className="chip border-violet-500/25 px-1.5 py-0 text-violet-300">{m?.abbreviation}</span>
                  </div>
                  <div className="mt-0.5 text-[10.5px] leading-snug text-ink-faint">{row.note}</div>
                </div>
                {matrix.columns.map((col) => {
                  const cell = row.cells.find((c) => c.column === col);
                  const level = cell?.level ?? "not-typical";
                  return (
                    <div key={col} className="flex items-center justify-center py-2.5" title={DOT[level].title}>
                      {DOT[level].node}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
