import type { StationId } from "@/types/simulation";

// Non-blocking factory-intelligence updates surfaced as each station completes in
// the default experience. These replace the old classroom checkpoint questions:
// the line never stops to quiz the user, it narrates the factory like a digital
// twin-style walkthrough. Conceptual and hedged, no settings or recipes.

export interface FactoryNote {
  kind: string; // Factory Observation | Process Note | Quality Checkpoint | Digital Thread | QMS Record
  message: string;
}

export const stationFactoryNotes: Record<StationId, FactoryNote> = {
  "raw-material-room": {
    kind: "Digital Thread",
    message:
      "Incoming polymer, filler, oil, and additive categories are received and staged by lot. The factory record opens a genealogy that every downstream batch, sample, and output will trace back to.",
  },
  "weighing-station": {
    kind: "QMS Record",
    message:
      "Ingredient categories are assembled into a batch against a controlled batch ticket. The thread now links this batch to its material lots and to the controlled record that governs it.",
  },
  "internal-mixer": {
    kind: "Factory Observation",
    message:
      "Raw polymer, filler, oil, and additive categories are being dispersed into a unified uncured compound. The factory record links this batch to its material lots, process route, and downstream QA checks.",
  },
  "two-roll-mill": {
    kind: "Process Note",
    message:
      "The compound is being warmed, blended, and sheeted into a continuous blanket. Dispersion quality and a uniform, continuous web become the things the line watches here.",
  },
  calender: {
    kind: "Process Note",
    message:
      "The compound is being formed into a continuous sheet. Thickness, width, surface finish, and feed stability become the critical quality concerns at this stage.",
  },
  vulcanization: {
    kind: "Quality Checkpoint",
    message:
      "Heat is crosslinking the compound, turning a plastic blanket into a cured elastomer. Cure state now drives the property profile, and a cure record is added to the thread for later QA review.",
  },
  cooling: {
    kind: "Factory Observation",
    message:
      "The cured sheet is being stabilized and staged as work in progress. Dimensional stability and flatness settle here before the sheet moves to finishing.",
  },
  "trimming-slitting": {
    kind: "Process Note",
    message:
      "Edges are trimmed and the sheet is slit to its finished width. Edge quality and width control are the checks that matter at this station.",
  },
  inspection: {
    kind: "Quality Checkpoint",
    message:
      "A sample is taken for conceptual checks such as hardness, thickness, visual, and dimensional. The thread links these inspection records to the batch, ready for a QA Lab handoff and a release decision.",
  },
  "finished-roll": {
    kind: "Digital Thread",
    message:
      "The finished sheet is wound, labeled, and packed. The thread closes: a traceable, documented product linked back through cure, calendering, mixing, and the original raw-material lots.",
  },
};
