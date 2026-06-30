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
      <rect x="0" y="0" width="240" height="150" rx="10" fill="#2a2622" />
      {/* polymer chains */}
      {chains.map((y, ci) => (
        <g key={ci}>
          <path
            d={`M14 ${y} q12 -8 24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0`}
            fill="none"
            stroke="#645c4e"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {Array.from({ length: 9 }).map((_, n) => {
            // Uncured chains read as inert (no drift); otherwise animate every
            // other bead so the 4-up row never crowds with particles.
            const animate = density !== "none" && n % 2 === 0;
            return (
              <circle
                key={n}
                className={animate ? "mol-bead" : undefined}
                style={animate ? { ["--bead-delay" as string]: `${(ci * 9 + n) * 0.13}s` } : undefined}
                cx={26 + n * 24}
                cy={y + (n % 2 ? -4 : 4)}
                r="3"
                fill="#3a342c"
                stroke="#6b6356"
                strokeWidth="1"
              />
            );
          })}
        </g>
      ))}
      {/* crosslinks between adjacent chains */}
      {xs.map((x, i) => {
        const top = chains[i % (chains.length - 1)];
        const bottom = chains[(i % (chains.length - 1)) + 1];
        return (
          <line key={i} className="crosslink-bond" style={{ ["--bond-delay" as string]: `${i * 0.22}s` }} x1={x} y1={top + (i % 2 ? 4 : -4)} x2={x} y2={bottom + (i % 2 ? -4 : 4)} stroke="#ff8c2b" strokeWidth="2.6" strokeLinecap="round" />
        );
      })}
      {label && (
        <text x="120" y="142" textAnchor="middle" fill="#9a9082" fontSize="9" fontFamily="monospace" letterSpacing="1">
          {label}
        </text>
      )}
    </svg>
  );
}
