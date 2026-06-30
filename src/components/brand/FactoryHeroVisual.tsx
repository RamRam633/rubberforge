/**
 * The RubberForge hero illustration: a digital twin-style virtual rubber factory.
 * Reads left to right as the material transformation, polymer + filler -> mixing
 * -> calendering -> vulcanization/crosslink -> QA coupon -> finished roll, with a
 * traceability thread connecting every stage. Light Factory Control Room theme:
 * white blueprint surface, graphite/blue lines, steel machines, amber active
 * cure, cyan QA/thread, black rubber and filler cues, violet chemistry accents.
 */
export function FactoryHeroVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`panel-raised stage-glow relative aspect-[4/3] overflow-hidden ${className}`}>
      <svg viewBox="0 0 480 360" className="absolute inset-0 h-full w-full" role="img" aria-label="Virtual rubber factory: polymer to finished roll">
        <defs>
          <radialGradient id="fh-glow" cx="50%" cy="28%" r="80%">
            <stop offset="0" stopColor="rgba(109, 59, 212,0.07)" />
            <stop offset="1" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="fh-cure" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#fcd34d" />
            <stop offset="0.55" stopColor="#b8860b" />
            <stop offset="1" stopColor="#8a6608" />
          </radialGradient>
          <linearGradient id="fh-thread" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#6d3bd4" />
            <stop offset="1" stopColor="#0e8fa8" />
          </linearGradient>
          <linearGradient id="fh-sheet" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#3f3f46" />
            <stop offset="1" stopColor="#18181b" />
          </linearGradient>
        </defs>

        <rect width="480" height="360" fill="#ffffff" />
        <rect width="480" height="360" fill="url(#fh-glow)" />
        {/* faint blueprint grid */}
        {Array.from({ length: 11 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 48} y1="0" x2={i * 48} y2="360" stroke="rgba(31, 27, 23,0.05)" />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 48} x2="480" y2={i * 48} stroke="rgba(31, 27, 23,0.05)" />
        ))}

        <text x="40" y="34" fill="#8a8073" fontFamily="monospace" fontSize="11" letterSpacing="3">RUBBERFORGE · VAYUAI</text>

        {/* Polymer chain motif: monomer beads along a chain, with crosslink ties */}
        <g>
          <path d="M44 80 Q 70 64 96 80 T 148 80 T 200 80 T 252 80 T 304 80 T 356 80 T 408 80 T 436 80" fill="none" stroke="#6d3bd4" strokeWidth="1.6" />
          {Array.from({ length: 9 }).map((_, i) => (
            <circle key={`bead${i}`} cx={44 + i * 49} cy="80" r="3.2" fill="#ffffff" stroke="#6d3bd4" strokeWidth="1.3" />
          ))}
          <path d="M44 100 Q 96 112 148 100 T 252 100 T 356 100 T 436 100" fill="none" stroke="#6d3bd4" strokeWidth="1" opacity="0.7" />
          {[142, 240, 338].map((x, i) => (
            <line key={`xl${i}`} x1={x} y1="80" x2={x} y2="100" stroke="#b8860b" strokeWidth="1.8">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2.6s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            </line>
          ))}
        </g>

        {/* The dark rubber sheet that runs from forming through cure to output */}
        <rect x="160" y="206" width="220" height="6" rx="3" fill="url(#fh-sheet)" />

        {/* Stage 1: raw polymer block + carbon-black filler particles */}
        <g>
          <rect x="52" y="196" width="30" height="30" rx="3" fill="#eaddc7" stroke="#a8987a" strokeWidth="1.2" />
          {[[60, 204], [73, 209], [62, 218], [74, 221], [67, 212]].map(([x, y], i) => (
            <circle key={`cb${i}`} cx={x} cy={y} r="2.4" fill="#171717" />
          ))}
        </g>

        {/* Stage 2: mixing rollers (two-roll mill reference) dispersing filler */}
        <g>
          {[126, 150].map((cx, i) => (
            <g key={`roll${i}`}>
              <circle cx={cx} cy="211" r="13" fill="#ddd1ba" stroke="#8a8073" strokeWidth="1.6" />
              <line x1={cx} y1="208" x2={cx} y2="214" stroke="#4a443b" strokeWidth="1.6">
                <animateTransform attributeName="transform" type="rotate" from={`0 ${cx} 211`} to={`${i ? -360 : 360} ${cx} 211`} dur="4s" repeatCount="indefinite" />
              </line>
            </g>
          ))}
          {[[138, 200], [134, 224], [142, 222]].map(([x, y], i) => (
            <circle key={`mb${i}`} cx={x} cy={y} r="2" fill="#171717" />
          ))}
        </g>

        {/* Stage 3: calender forming the sheet (stacked nip rollers) */}
        <g>
          <circle cx="206" cy="194" r="9" fill="#e6ddca" stroke="#6b6356" strokeWidth="1.6" />
          <circle cx="206" cy="216" r="9" fill="#e6ddca" stroke="#6b6356" strokeWidth="1.6" />
        </g>

        {/* Stage 4: vulcanization / crosslink node (active amber) */}
        <g>
          <circle cx="288" cy="209" r="20" fill="url(#fh-cure)">
            <animate attributeName="r" values="19;21;19" dur="2.4s" repeatCount="indefinite" />
          </circle>
          {[[280, 202], [296, 202], [288, 209], [280, 216], [296, 216]].map(([x, y], i) => (
            <circle key={`xn${i}`} cx={x} cy={y} r="2" fill="#7c2d12" />
          ))}
          {[[280, 202, 288, 209], [296, 202, 288, 209], [288, 209, 280, 216], [288, 209, 296, 216], [280, 202, 296, 202], [280, 216, 296, 216]].map(([x1, y1, x2, y2], i) => (
            <line key={`xe${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#7c2d12" strokeWidth="1.3">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
            </line>
          ))}
        </g>

        {/* Stage 5: QA test coupon (dumbbell tensile specimen) in cyan */}
        <g transform="translate(352, 209)">
          <path d="M-14 -4 h7 v-4 h6 v8 h-6 v-4 h-2 v4 h-2 v-4 h-3 z M14 -4 h-7 v-4 h-6 v8 h6 v-4 h2 v4 h2 v-4 h3 z M-9 -1 h18 v2 h-18 z" fill="none" stroke="#0e8fa8" strokeWidth="1.6" />
          <path d="M-4 8 l3 3 l6 -7" fill="none" stroke="#0e8fa8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Stage 6: finished rubber roll (wound) */}
        <g>
          <circle cx="416" cy="209" r="16" fill="#18181b" stroke="#3f3f46" strokeWidth="1.5" />
          <circle cx="416" cy="209" r="10" fill="none" stroke="#52525b" strokeWidth="1" />
          <circle cx="416" cy="209" r="5" fill="none" stroke="#71717a" strokeWidth="1" />
          <circle cx="416" cy="209" r="1.8" fill="#6d3bd4" />
        </g>

        {/* Traceability digital thread connecting every stage */}
        <line x1="60" y1="252" x2="420" y2="252" stroke="#ddd1ba" strokeWidth="2" />
        <line x1="60" y1="252" x2="288" y2="252" stroke="url(#fh-thread)" strokeWidth="2.4" />
        {[67, 138, 206, 288, 352, 416].map((x, i) => (
          <circle key={`tn${i}`} cx={x} cy="252" r="3.6" fill="#ffffff" stroke={i === 3 ? "#b8860b" : "#0e8fa8"} strokeWidth="1.8" />
        ))}
        <circle cy="252" r="4" fill="#b8860b">
          <animate attributeName="cx" values="67;416;67" dur="6s" repeatCount="indefinite" />
        </circle>

        <text x="40" y="300" fill="#6b6356" fontFamily="monospace" fontSize="9.5" letterSpacing="1.5">
          POLYMER → COMPOUND → PROCESS → CURE → QUALITY → OUTPUT
        </text>
        <text x="40" y="320" fill="#8a8073" fontFamily="monospace" fontSize="8.5" letterSpacing="2">DIGITAL TWIN-STYLE VIRTUAL RUBBER FACTORY</text>
      </svg>
    </div>
  );
}
