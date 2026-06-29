import type { StationId } from "@/types/simulation";

// Common contract every machine model implements. The parent positions the
// model on the line; the model renders at its own local origin with the base
// sitting on the floor (y = 0) and material flowing along +X.
export interface MachineModelProps {
  /** This machine is the current active station. */
  active?: boolean;
  /** A transform animation is currently running at this station. */
  transforming?: boolean;
  /** 0..1 progress of the active transform (drives material colour + motion). */
  progress?: number;
  /** This station's work is complete. */
  done?: boolean;
}

export interface MachineModelEntry {
  id: StationId;
  Model: React.ComponentType<MachineModelProps>;
}
