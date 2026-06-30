// Marketing / demo video timeline for "RubberForge by VayuAI - A Virtual Factory
// for Rubber Manufacturing". Drives the cinematic /demo-video route and the
// capture script (scripts/capture-marketing-video.mjs).
//
// Honest framing only: digital twin-style, virtual factory, prototype, simulated
// records, ISO 9001-aligned QMS MODEL, future data-connected roadmap. Never claims
// a live production twin, ISO certification, official records, machine connectivity,
// real pricing, production-ready formulations, or exact cure settings.

export const VIDEO_TITLE =
  "RubberForge by VayuAI - A Virtual Factory for Rubber Manufacturing";
export const VIDEO_URL = "rubberforge.vayuai.ai";

export type SceneKind = "title" | "app";

export interface VideoScene {
  /** stable scene id */
  id: string;
  /** short scene title shown subtly on screen */
  title: string;
  /** seconds this scene is on screen */
  durationSeconds: number;
  /** human-readable app area */
  area: string;
  /** real app route(s) shown in the cinematic frame; if more than one, the scene
   *  cross-dissolves between them across its duration */
  routes: string[];
  /** user action / camera action description (also a capture note) */
  action: string;
  /** on-screen caption (1-2 lines; use \n for the line break) */
  caption: string;
  /** the focal visual for this scene */
  keyVisual: string;
  /** the message the scene must land */
  keyMessage: string;
  /** notes for whoever captures / edits */
  captureNotes: string;
  /** "title" = branded card, "app" = real app iframe */
  kind: SceneKind;
  /** scroll the shown route to the section whose kicker/heading contains this text
   *  (case-insensitive), or to a fraction (0-1) of the page height */
  scrollTo?: string | number;
  /** Ken Burns zoom: scale from -> to, around a normalized origin (0-1) */
  zoom?: { from: number; to: number; originX: number; originY: number };
  /** a soft guide cursor that drifts from -> to (normalized 0-1), optional click
   *  ring at the given progress (0-1) */
  cursor?: { from: [number, number]; to: [number, number]; clickAt?: number };
}

export const MARKETING_SCENES: VideoScene[] = [
  {
    id: "vayuai-context",
    title: "VayuAI",
    durationSeconds: 14,
    area: "Title",
    routes: [],
    kind: "title",
    action: "Branded open: VayuAI wordmark resolves into the RubberForge title card.",
    caption:
      "VayuAI builds virtual factory systems for industrial digital transformation.\nRubberForge is our implementation for custom rubber manufacturing.",
    keyVisual: "VayuAI / RubberForge title card on warm paper with the brand gradient.",
    keyMessage: "Set the company context and the product name in one premium card.",
    captureNotes: "Pure overlay card, no iframe. Hold steady; this is the open frame.",
  },
  {
    id: "why-virtual-factories",
    title: "Why a virtual factory",
    durationSeconds: 18,
    area: "About / positioning",
    routes: ["/about"],
    kind: "app",
    action: "Slow pan down the About page positioning.",
    caption:
      "A factory is not a folder of PDFs, emails, and tribal knowledge.\nRubberForge turns that scattered knowledge into one explorable system.",
    keyVisual: "About page narrative and the virtual-factory positioning.",
    keyMessage: "Frame the problem: manufacturing knowledge is fragmented today.",
    captureNotes: "Gentle downward pan (scroll 0 -> ~0.4). Keep text readable.",
    scrollTo: 0,
    zoom: { from: 1.04, to: 1.0, originX: 0.5, originY: 0.2 },
  },
  {
    id: "rubberforge-overview",
    title: "RubberForge",
    durationSeconds: 18,
    area: "Home",
    routes: ["/"],
    kind: "app",
    action: "Hold on the home hero with its live flow field, then a soft push-in.",
    caption:
      "A digital twin-style virtual rubber factory.\nProduction, QA, chemistry, QMS, AI agents, traceability, and outputs in one system.",
    keyVisual: "Home hero: headline, brand gradient, the interactive flow field.",
    keyMessage: "Position the full scope in one line; this is more than an RFQ tool.",
    captureNotes: "Start at top (scroll 0). Subtle push-in on the hero.",
    scrollTo: 0,
    zoom: { from: 1.0, to: 1.06, originX: 0.4, originY: 0.42 },
    cursor: { from: [0.3, 0.78], to: [0.18, 0.62] },
  },
  {
    id: "enter-virtual-factory",
    title: "Virtual Factory",
    durationSeconds: 28,
    area: "Simulator / production floor",
    routes: ["/simulator"],
    kind: "app",
    action:
      "Enter the 3D production floor; drift across the line, settle on the active station and its inspector.",
    caption:
      "Walk the production floor.\nFollow material from raw polymer to finished elastomer, station by station.",
    keyVisual: "3D production line, station chips with live process motion, the layer inspector.",
    keyMessage: "Show the centerpiece: an explorable 3D factory, not a diagram.",
    captureNotes:
      "Allow ~2s for the 3D to mount. Slow pan across the 3D, then ease toward the process line / inspector panel.",
    scrollTo: 0,
    zoom: { from: 1.02, to: 1.1, originX: 0.5, originY: 0.4 },
    cursor: { from: [0.55, 0.55], to: [0.4, 0.46], clickAt: 0.7 },
  },
  {
    id: "chemistry-materials",
    title: "Chemistry & materials",
    durationSeconds: 26,
    area: "Materials + Chemistry",
    routes: ["/materials", "/chemistry"],
    kind: "app",
    action:
      "Show the materials library and its risk/cure tags, then cross-dissolve to the rubber-chemistry visuals.",
    caption:
      "Rubber manufacturing is chemistry plus process.\nPolymer family, filler, cure behavior, compatibility, and application risk shape the route.",
    keyVisual: "Material cards with compatibility/cure/risk tags; crosslink-density diagrams.",
    keyMessage: "Material science is first-class here, not an afterthought.",
    captureNotes:
      "First ~13s on /materials (cards + tags), cross-dissolve to /chemistry (crosslink diagrams animating). Keep zoom gentle.",
    scrollTo: 0.12,
    zoom: { from: 1.05, to: 1.0, originX: 0.5, originY: 0.5 },
  },
  {
    id: "products-routes",
    title: "Products & routes",
    durationSeconds: 16,
    area: "Products",
    routes: ["/products"],
    kind: "app",
    action: "Pan the products catalog and its material / route mapping.",
    caption:
      "Products map to material families, process routes, QA expectations, and documentation needs.",
    keyVisual: "Product catalog with the product-to-material-to-route relationship.",
    keyMessage: "Everything is connected: a product pulls a whole technical context.",
    captureNotes: "Scroll ~0.1 -> 0.45 slowly. No clicks needed.",
    scrollTo: 0.08,
    zoom: { from: 1.03, to: 1.0, originX: 0.5, originY: 0.35 },
  },
  {
    id: "qa-lab",
    title: "Virtual QA Lab",
    durationSeconds: 28,
    area: "QA Lab",
    routes: ["/qa-lab"],
    kind: "app",
    action:
      "Open the 3D QA lab, then move down to the cure-curve, hardness, tensile and compression-set simulators.",
    caption:
      "The QA Lab turns process assumptions into evidence.\nCure behavior, hardness, tensile response, and release status stay connected to the model.",
    keyVisual: "3D lab scene, MDR cure curve drawing in, mechanical-test simulators, lab report.",
    keyMessage: "Quality is demonstrated with simulated test evidence, not just claimed.",
    captureNotes:
      "Hold ~2s on the 3D lab, then scroll to the cure-curve / test simulators (~0.45). Simulated demo data only.",
    scrollTo: 0,
    zoom: { from: 1.04, to: 1.0, originX: 0.5, originY: 0.4 },
    cursor: { from: [0.6, 0.5], to: [0.45, 0.55], clickAt: 0.5 },
  },
  {
    id: "qms",
    title: "QMS Command Center",
    durationSeconds: 22,
    area: "QMS",
    routes: ["/qms"],
    kind: "app",
    action: "Pan the QMS command center: clause map, document control, risk, CAPA, audit.",
    caption:
      "Quality is modeled as a system, not an afterthought.\nISO 9001-aligned model. Audit-readiness oriented. Human-accountable.",
    keyVisual: "QMS command center, ISO 9001-aligned clause coverage, the readiness model.",
    keyMessage: "A serious, governed quality model (a MODEL, never a certification).",
    captureNotes:
      "Scroll 0 -> ~0.35. Caption must say 'aligned' / 'model', never 'certified'.",
    scrollTo: 0,
    zoom: { from: 1.0, to: 1.05, originX: 0.5, originY: 0.3 },
  },
  {
    id: "ai-operating-model",
    title: "AI operating model",
    durationSeconds: 20,
    area: "Home / AI operating model",
    routes: ["/"],
    kind: "app",
    action: "Scroll the home page to the AI operating model section; hold on the agents + accountability.",
    caption:
      "Specialized AI agents support requirements, materials, routes, lab evidence, and outputs.\nAI structures the work. Humans stay accountable for approval and release.",
    keyVisual: "AI agent roster, RACI, human-in-the-loop accountability banner.",
    keyMessage: "AI-assisted, human-accountable. No autonomous-compliance claims.",
    captureNotes: "Scroll to the 'Digital factory operating model' section. Hold steady to read.",
    scrollTo: "operating model",
    zoom: { from: 1.02, to: 1.0, originX: 0.5, originY: 0.4 },
  },
  {
    id: "digital-thread",
    title: "Digital thread",
    durationSeconds: 20,
    area: "Home / digital thread",
    routes: ["/"],
    kind: "app",
    action: "Scroll to the digital-thread backbone; the node pulse travels the chain.",
    caption:
      "The digital thread is the backbone.\nRequirement, material, process, QA sample, test record, QMS record, release, output.",
    keyVisual: "Digital-thread nodes with the staggered signal pulse traveling the chain.",
    keyMessage: "One traceable thread connects every record end to end.",
    captureNotes: "Scroll to the 'digital thread' section. Let the node pulse run.",
    scrollTo: "digital thread",
    zoom: { from: 1.03, to: 1.0, originX: 0.5, originY: 0.5 },
  },
  {
    id: "factory-outputs",
    title: "Factory Outputs",
    durationSeconds: 24,
    area: "Outputs",
    routes: ["/outputs"],
    kind: "app",
    action:
      "Pan the outputs grid: RFQ package, inspection plan, bill of process, traceability report, audit, technical review.",
    caption:
      "RFQ is one output, not the product.\nRubberForge generates the technical packages a real program needs.",
    keyVisual: "Factory outputs grid; the cards lift and their source-layer chips respond.",
    keyMessage: "Reframe away from 'RFQ tool': it produces a whole deliverable set.",
    captureNotes: "Scroll ~0.05 -> ~0.5. Hover-lift motion on the cards reads well here.",
    scrollTo: 0.05,
    zoom: { from: 1.0, to: 1.05, originX: 0.5, originY: 0.35 },
    cursor: { from: [0.25, 0.45], to: [0.7, 0.6] },
  },
  {
    id: "roadmap",
    title: "Roadmap",
    durationSeconds: 16,
    area: "Home / maturity roadmap",
    routes: ["/"],
    kind: "app",
    action: "Scroll to the digital-twin maturity roadmap; hold on the five levels.",
    caption:
      "Today: virtual, knowledge-connected, workflow-ready.\nNext: documents, ERP/MES, quality records, machine data, and simulation.",
    keyVisual: "Five-level digital-twin maturity model from virtual to live data-connected.",
    keyMessage: "Honest roadmap: what is built now vs. the data-connected future.",
    captureNotes: "Scroll to the 'maturity' / 'roadmap' section. Steady hold.",
    scrollTo: "roadmap",
    zoom: { from: 1.02, to: 1.0, originX: 0.5, originY: 0.45 },
  },
  {
    id: "closing",
    title: "RubberForge by VayuAI",
    durationSeconds: 14,
    area: "Title",
    routes: [],
    kind: "title",
    action: "Closing card: RubberForge by VayuAI, tagline, and the live URL.",
    caption:
      "RubberForge by VayuAI\nA virtual factory system for industrial digital transformation.\nExplore: rubberforge.vayuai.ai",
    keyVisual: "Closing brand card with the live URL.",
    keyMessage: "Brand sign-off and call to action.",
    captureNotes: "Pure overlay card. Hold to end of runtime.",
  },
];

/** cumulative start time (seconds) for each scene */
export function sceneStartTimes(scenes: VideoScene[] = MARKETING_SCENES): number[] {
  const starts: number[] = [];
  let acc = 0;
  for (const s of scenes) {
    starts.push(acc);
    acc += s.durationSeconds;
  }
  return starts;
}

/** total runtime in seconds */
export function totalDurationSeconds(scenes: VideoScene[] = MARKETING_SCENES): number {
  return scenes.reduce((sum, s) => sum + s.durationSeconds, 0);
}
