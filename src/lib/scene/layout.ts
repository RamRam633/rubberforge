import type { StationId } from "@/types/simulation";

// ── Factory floor layout ─────────────────────────────────────────────────────
// Ten stations are placed along the +X axis. Material flows from left (raw) to
// right (finished roll). 1 unit ~= 1 metre.

export const STATION_ORDER: StationId[] = [
  "raw-material-room",
  "weighing-station",
  "internal-mixer",
  "two-roll-mill",
  "calender",
  "vulcanization",
  "cooling",
  "trimming-slitting",
  "inspection",
  "finished-roll",
];

export const STATION_SPACING = 9;

export function stationX(index: number): number {
  return index * STATION_SPACING;
}

export function stationPosition(index: number): [number, number, number] {
  return [stationX(index), 0, 0];
}

export const LINE_LENGTH = STATION_SPACING * (STATION_ORDER.length - 1);
export const LINE_CENTER_X = LINE_LENGTH / 2;

// ── Camera framing ───────────────────────────────────────────────────────────
export interface CameraShot {
  position: [number, number, number];
  target: [number, number, number];
}

// Close-up on a single active machine: orbit a bit to the front-right, framed
// to fit tall machines.
export function closeUpShot(index: number): CameraShot {
  const x = stationX(index);
  return {
    position: [x + 7, 5.4, 11],
    target: [x, 2.2, 0],
  };
}

// Pull back to see the whole production line.
export function fullFactoryShot(activeIndex: number): CameraShot {
  const x = stationX(activeIndex);
  return {
    position: [x + 9, 12.5, 26],
    target: [Math.min(Math.max(x, 8), LINE_LENGTH - 8), 2, 0],
  };
}

// Tight framing for the cutaway / material view.
export function cutawayShot(index: number): CameraShot {
  const x = stationX(index);
  return {
    position: [x + 3.4, 2.8, 5.6],
    target: [x, 1.7, 0],
  };
}
