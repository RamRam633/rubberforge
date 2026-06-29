import type { StationId } from "@/types/simulation";
import type { MachineModelProps } from "@/components/machines/types";
import { TwoRollMillModel } from "@/components/machines/TwoRollMillModel";
import { PlaceholderMachineModel } from "@/components/machines/PlaceholderMachineModel";

import { RawMaterialStorageModel } from "@/components/machines/RawMaterialStorageModel";
import { WeighingStationModel } from "@/components/machines/WeighingStationModel";
import { InternalMixerModel } from "@/components/machines/InternalMixerModel";
import { CalenderModel } from "@/components/machines/CalenderModel";
import { CuringChamberModel } from "@/components/machines/CuringChamberModel";
import { CoolingConveyorModel } from "@/components/machines/CoolingConveyorModel";
import { TrimmingStationModel } from "@/components/machines/TrimmingStationModel";
import { InspectionStationModel } from "@/components/machines/InspectionStationModel";
import { FinishedRollModel } from "@/components/machines/FinishedRollModel";

// Each station maps to a dedicated, identifiable industrial model.
export const MACHINE_MODELS: Record<StationId, React.ComponentType<MachineModelProps>> = {
  "raw-material-room": RawMaterialStorageModel,
  "weighing-station": WeighingStationModel,
  "internal-mixer": InternalMixerModel,
  "two-roll-mill": TwoRollMillModel,
  calender: CalenderModel,
  vulcanization: CuringChamberModel,
  cooling: CoolingConveyorModel,
  "trimming-slitting": TrimmingStationModel,
  inspection: InspectionStationModel,
  "finished-roll": FinishedRollModel,
};

export const FALLBACK_MODEL = PlaceholderMachineModel;
