"use client";

import { MAT, BaseFrame, ControlPanel, Motor } from "./kit";
import type { MachineModelProps } from "./types";

// Generic industrial block. Used only as a fallback before a station's
// dedicated model is wired in.
export function PlaceholderMachineModel({ active }: MachineModelProps) {
  return (
    <group>
      <BaseFrame size={[3, 0.5, 2.2]} />
      <mesh position={[0, 1.5, 0]} material={MAT.bodyPaint} castShadow receiveShadow>
        <boxGeometry args={[2.4, 2, 1.8]} />
      </mesh>
      <Motor position={[1.6, 1.2, 0]} />
      <ControlPanel position={[-1.8, 0, 1]} on={active} />
    </group>
  );
}
