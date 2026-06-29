export type CrosslinkDensity = "none" | "low" | "medium" | "high";

const COUNT: Record<CrosslinkDensity, number> = { none: 0, low: 2, medium: 4, high: 7 };

// Conceptual diagram: independent polymer chains (uncured) gain crosslinks
// (amber bridges) as cure density rises. Educational, not to scale.
export function CrosslinkDiagram({
  density = "medium",
  className = "",
  label,
}: {
  density?: CrosslinkDensity;
  className?: string;
  label?: string;
}) {
  const chains = [28, 58, 88, 118];
  const links = COUNT[density];
  // Evenly spaced crosslink x-positions across the width.
  const xs = Array.from({ length: links }, (_, i) => 36 + ((i + 1) * 200) / (links + 1));

  return (
    <svg viewBox="0 0 240 150" className={className} role="img" aria-label={label || `Crosslink density: ${density}`}>
      <rect x="0" y="0" width="240" height="150" rx="10" fill="#0c0a13" />
      {/* polymer chains */}
      {chains.map((y, ci) => (
        <g key={ci}>
          <path
            d={`M14 ${y} q12 -8 24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0`}
            fill="none"
            stroke="#5a5570"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {Array.from({ length: 9 }).map((_, n) => (
            <circle key={n} cx={26 + n * 24} cy={y + (n % 2 ? -4 : 4)} r="3" fill="#23202e" stroke="#6a6486" strokeWidth="1" />
          ))}
        </g>
      ))}
      {/* crosslinks between adjacent chains */}
      {xs.map((x, i) => {
        const top = chains[i % (chains.length - 1)];
        const bottom = chains[(i % (chains.length - 1)) + 1];
        return (
          <line key={i} x1={x} y1={top + (i % 2 ? 4 : -4)} x2={x} y2={bottom + (i % 2 ? -4 : 4)} stroke="#ff8c2b" strokeWidth="2.6" strokeLinecap="round" />
        );
      })}
      {label && (
        <text x="120" y="142" textAnchor="middle" fill="#868ca6" fontSize="9" fontFamily="monospace" letterSpacing="1">
          {label}
        </text>
      )}
    </svg>
  );
}
