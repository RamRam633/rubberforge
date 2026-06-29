import type { StationId } from "@/types/simulation";
import type { HealthBadge } from "@/types/factoryLife";
import { STATION_ORDER } from "./scene/layout";
import { processSteps } from "./processData";
import { factoryRoles, factoryRolesById } from "./factoryRoles";
import { humanInteractions } from "./humanInteractions";
import { maintenanceByStation } from "./maintenanceConcepts";

// A conceptual "digital thread": the record of what each station contributes to
// the story of a part, and which role stewards it. Used to drive the production
// board and the digital-thread overlay. All values are illustrative, not live
// telemetry from real equipment.

export type StationStatus = "queued" | "running" | "done";

export interface ThreadStation {
  stationId: StationId;
  sequence: number;
  title: string;
  roleId: string;
  roleName: string;
  dataCaptured: string;
  feedsRfq: string;
  health: HealthBadge;
}

const STATION_THREAD: Record<StationId, { dataCaptured: string; feedsRfq: string }> = {
  "raw-material-room": {
    dataCaptured: "Lot and supplier identity, material family, certificate-of-analysis reference.",
    feedsRfq: "Confirms the polymer family and grade behind a quote can be sourced and traced.",
  },
  "weighing-station": {
    dataCaptured: "Batch ticket identity, ingredient kit reconciliation, operator confirmation.",
    feedsRfq: "Shows batch-to-batch consistency, a common buyer concern during qualification.",
  },
  "internal-mixer": {
    dataCaptured: "Mix cycle reference, batch identity, conceptual energy and temperature trend.",
    feedsRfq: "Indicates compound uniformity, which underpins repeatable physical properties.",
  },
  "two-roll-mill": {
    dataCaptured: "Sheeting pass reference, blanket continuity check, operator sign-off.",
    feedsRfq: "Supports the dimensional and surface expectations stated in a quote.",
  },
  calender: {
    dataCaptured: "Gauge trend, width reference, fabric-feed status where applicable.",
    feedsRfq: "Directly informs thickness tolerance feasibility on a sheet RFQ.",
  },
  vulcanization: {
    dataCaptured: "Cure cycle reference, batch identity, conceptual time-temperature window.",
    feedsRfq: "Cure state drives the property claims (hardness, set) a buyer relies on.",
  },
  cooling: {
    dataCaptured: "Cool-down reference, dimensional-stability hold, WIP staging location.",
    feedsRfq: "Affects final flatness and dimensional stability after the line.",
  },
  "trimming-slitting": {
    dataCaptured: "Trim and slit width reference, edge-quality check, scrap note.",
    feedsRfq: "Confirms the finished width and edge condition a quote specifies.",
  },
  inspection: {
    dataCaptured: "Hardness, thickness, visual, and dimensional check references; disposition.",
    feedsRfq: "The acceptance evidence a buyer expects against the agreed specification.",
  },
  "finished-roll": {
    dataCaptured: "Roll or pack identity, label, packing list, traceability link to source lots.",
    feedsRfq: "Closes the thread: a shippable, documented, traceable finished product.",
  },
};

function roleForStation(stationId: StationId): { id: string; name: string } {
  const direct = humanInteractions.find((i) => i.stationId === stationId);
  if (direct) {
    const r = factoryRolesById[direct.roleId];
    if (r) return { id: r.id, name: r.displayName };
  }
  const byRelated = factoryRoles.find((r) => r.relatedStations.includes(stationId));
  if (byRelated) return { id: byRelated.id, name: byRelated.displayName };
  return { id: "production-supervisor", name: "Production Supervisor" };
}

/** The full conceptual thread across all ten stations. */
export function buildDigitalThread(): ThreadStation[] {
  return STATION_ORDER.map((stationId, i) => {
    const step = processSteps[i];
    const role = roleForStation(stationId);
    const thread = STATION_THREAD[stationId];
    return {
      stationId,
      sequence: step.sequence,
      title: step.title,
      roleId: role.id,
      roleName: role.name,
      dataCaptured: thread.dataCaptured,
      feedsRfq: thread.feedsRfq,
      health: maintenanceByStation[stationId]?.healthBadge ?? "ready",
    };
  });
}

export interface BoardRow extends ThreadStation {
  status: StationStatus;
  statusLabel: string;
}

const STATUS_LABEL: Record<StationStatus, string> = {
  queued: "Queued",
  running: "Running",
  done: "Released",
};

/**
 * A conceptual shift / production board derived from how far a run has
 * advanced. currentIndex is the station presently in focus.
 */
export function buildProductionBoard(currentIndex: number): BoardRow[] {
  return buildDigitalThread().map((s, i) => {
    const status: StationStatus = i < currentIndex ? "done" : i === currentIndex ? "running" : "queued";
    return { ...s, status, statusLabel: STATUS_LABEL[status] };
  });
}

export interface ShiftSummary {
  released: number;
  running: number;
  queued: number;
  total: number;
}

export function shiftSummary(board: BoardRow[]): ShiftSummary {
  return {
    released: board.filter((b) => b.status === "done").length,
    running: board.filter((b) => b.status === "running").length,
    queued: board.filter((b) => b.status === "queued").length,
    total: board.length,
  };
}
