import type { MdrDemo } from "@/types/qaLab";
export const mdrDemo: MdrDemo = {
  "intro": "The Moving Die Rheometer (MDR) is a rotorless oscillating-disc instrument that tracks how a rubber compound's torque develops as it cures, producing a cure curve that is the backbone of vulcanization quality control. In this educational simulation it helps you understand the shape of that curve, how a batch builds modulus over time, and where scorch, cure development, and over-cure broadly sit. All values shown here are demo and simulated, and real cure characterization requires qualified lab procedures and recognized methods.",
  "regions": [
    {
      "label": "Minimum torque (ML) concept",
      "note": "The low point early in the curve reflects the uncured compound's viscosity and flow behavior before crosslinking begins, and is commonly used as a proxy for processability."
    },
    {
      "label": "Scorch tendency concept",
      "note": "The point where torque first starts rising off the minimum indicates the onset of crosslinking, and an early rise generally signals a greater tendency toward premature scorch during processing."
    },
    {
      "label": "Cure development region",
      "note": "The rising portion of the curve represents active crosslink formation, and its steepness broadly reflects how quickly the compound builds modulus, often described as cure rate."
    },
    {
      "label": "Optimum cure region concept",
      "note": "The portion of the curve approaching a defined fraction of full torque development is commonly used to conceptually mark a practical cure point for downstream processing decisions."
    },
    {
      "label": "Maximum torque (MH) concept",
      "note": "The plateau or peak near the end reflects the fully developed crosslink network and is generally associated with the cured compound's stiffness and crosslink density."
    }
  ],
  "interpretation": [
    {
      "reading": "Curve has not reached its plateau or torque is still climbing at the end of the run",
      "meaning": "Generally suggests potential under-cure, where the crosslink network is incomplete and properties such as modulus and set may fall short of expectation."
    },
    {
      "reading": "Torque rises, peaks, then declines (a reversion-style drop) over time",
      "meaning": "Commonly indicates over-cure or reversion tendency, where prolonged heat history degrades the network and can soften the cured part."
    },
    {
      "reading": "Repeated batches show closely overlapping curves with consistent ML, MH, and rise timing",
      "meaning": "Typically points to good batch-to-batch consistency, while drifting or scattered curves may flag mixing, weighing, or material variation worth review."
    }
  ],
  "links": [
    {
      "topic": "Mixing",
      "why": "Filler dispersion and additive distribution from the mixing stage strongly influence minimum torque and cure behavior, so MDR curves often reveal mixing variation."
    },
    {
      "topic": "Vulcanization",
      "why": "The MDR curve is essentially a direct picture of the vulcanization reaction, showing how crosslinks form and the network develops over time."
    },
    {
      "topic": "Under-cure",
      "why": "A curve that never reaches a stable plateau is a classic conceptual indicator of under-cure and an incomplete crosslink network."
    },
    {
      "topic": "Over-cure",
      "why": "A falling torque tail after the peak commonly signals over-cure or reversion, linking curve shape to potential loss of properties."
    },
    {
      "topic": "Scorch",
      "why": "The early onset of torque rise broadly relates to scorch safety, helping anticipate premature crosslinking during handling and forming."
    },
    {
      "topic": "Batch-consistency",
      "why": "Overlaying cure curves across batches is a common way to monitor consistency, since shifts in ML, MH, or rise time flag process drift."
    }
  ],
  "caveats": [
    "All cure curves and statuses in this simulation are demo and simulated for learning, and are not measurements of any real compound or batch.",
    "MDR is one important characterization tool, not a complete release decision on its own, and is typically used alongside other physical and chemical tests.",
    "Actual cure characterization and any pass or fail judgment must follow qualified lab procedures and official recognized methods, not the conceptual shapes shown here."
  ]
};
// Deterministic, conceptual demo cure curve (normalized 0..1, no real values).
export const mdrCurvePoints: { t: number; v: number }[] = [
  {
    "t": 0,
    "v": 0.161
  },
  {
    "t": 0.036,
    "v": 0.145
  },
  {
    "t": 0.071,
    "v": 0.123
  },
  {
    "t": 0.107,
    "v": 0.141
  },
  {
    "t": 0.143,
    "v": 0.177
  },
  {
    "t": 0.179,
    "v": 0.2
  },
  {
    "t": 0.214,
    "v": 0.221
  },
  {
    "t": 0.25,
    "v": 0.25
  },
  {
    "t": 0.286,
    "v": 0.29
  },
  {
    "t": 0.321,
    "v": 0.343
  },
  {
    "t": 0.357,
    "v": 0.41
  },
  {
    "t": 0.393,
    "v": 0.487
  },
  {
    "t": 0.429,
    "v": 0.57
  },
  {
    "t": 0.464,
    "v": 0.651
  },
  {
    "t": 0.5,
    "v": 0.724
  },
  {
    "t": 0.536,
    "v": 0.784
  },
  {
    "t": 0.571,
    "v": 0.831
  },
  {
    "t": 0.607,
    "v": 0.865
  },
  {
    "t": 0.643,
    "v": 0.89
  },
  {
    "t": 0.679,
    "v": 0.906
  },
  {
    "t": 0.714,
    "v": 0.918
  },
  {
    "t": 0.75,
    "v": 0.925
  },
  {
    "t": 0.786,
    "v": 0.93
  },
  {
    "t": 0.821,
    "v": 0.934
  },
  {
    "t": 0.857,
    "v": 0.936
  },
  {
    "t": 0.893,
    "v": 0.937
  },
  {
    "t": 0.929,
    "v": 0.938
  },
  {
    "t": 0.964,
    "v": 0.939
  },
  {
    "t": 1,
    "v": 0.939
  }
];
export const mdrCurveMarkers: { id: string; label: string; x: number }[] = [
  {
    "id": "ml",
    "label": "Minimum torque",
    "x": 0.06
  },
  {
    "id": "scorch",
    "label": "Scorch tendency",
    "x": 0.12
  },
  {
    "id": "cure",
    "label": "Cure development",
    "x": 0.42
  },
  {
    "id": "optimum",
    "label": "Optimum cure region",
    "x": 0.62
  },
  {
    "id": "mh",
    "label": "Maximum torque",
    "x": 0.86
  }
];
