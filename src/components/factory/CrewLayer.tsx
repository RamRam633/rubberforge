"use client";

import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { FactoryWorker } from "@/components/machines/FactoryWorker";
import { Pallet, MAT } from "@/components/machines/kit";
import { STATION_ORDER, stationX, STATION_SPACING } from "@/lib/scene/layout";
import { factoryRoles } from "@/lib/factoryRoles";
import { humanInteractions } from "@/lib/humanInteractions";
import type { StationId, SimState } from "@/types/simulation";
import type { VestColor } from "@/types/factoryLife";

function vestForStation(stationId: StationId): VestColor {
  const direct = humanInteractions.find((i) => i.stationId === stationId);
  if (direct) {
    const r = factoryRoles.find((x) => x.id === direct.roleId);
    if (r) return r.vestColor;
  }
  const related = factoryRoles.find((r) => r.relatedStations.includes(stationId));
  return related?.vestColor ?? "steel";
}

/** A pallet of staged material that glides along the aisle toward the active
 * station, conveying that material physically moves between zones. It travels
 * the open aisle, never through a machine. */
function MaterialCart({ activeIndex }: { activeIndex: number }) {
  const group = useRef<THREE.Group>(null);
  const target = useMemo(() => stationX(Math.max(0, activeIndex)) - STATION_SPACING * 0.42, [activeIndex]);

  useFrame(() => {
    if (!group.current) return;
    group.current.position.x += (target - group.current.position.x) * 0.04;
  });

  return (
    <group ref={group} position={[target, 0, 3.5]}>
      <Pallet position={[0, 0, 0]} />
      {/* stacked stock on the pallet */}
      <mesh position={[0, 0.42, 0]} material={MAT.rubberMatte} castShadow>
        <boxGeometry args={[0.95, 0.5, 0.8]} />
      </mesh>
      <mesh position={[0, 0.74, 0]} material={MAT.beige} castShadow>
        <boxGeometry args={[0.8, 0.18, 0.7]} />
      </mesh>
      {/* tow handle */}
      <mesh position={[0, 0.5, 0.7]} rotation={[0.5, 0, 0]} material={MAT.frameSteel}>
        <cylinderGeometry args={[0.03, 0.03, 0.9, 8]} />
      </mesh>
    </group>
  );
}

/**
 * The human + material-movement layer over the production line. Each station
 * gets one operator standing at a safe observation distance on the aisle side,
 * plus a single material cart moving between zones. All presence is conceptual.
 */
export function CrewLayer({ state }: { state: SimState }) {
  const workers = useMemo(
    () =>
      STATION_ORDER.map((id, i) => ({
        id,
        x: stationX(i),
        vest: vestForStation(id),
        phase: i * 1.7,
        index: i,
      })),
    [],
  );

  return (
    <group>
      {workers.map((w) => (
        <FactoryWorker
          key={w.id}
          position={[w.x + 1.4, 0, 3.0]}
          facing={Math.PI - 0.35}
          vestColor={w.vest}
          phase={w.phase}
          active={w.index === state.activeIndex && state.transforming}
        />
      ))}
      {/* A supervisor doing a walk-down, set back on the aisle. */}
      <FactoryWorker position={[stationX(state.activeIndex) - 2.2, 0, 4.4]} facing={Math.PI / 2} vestColor="violet" phase={3.1} />
      <MaterialCart activeIndex={state.activeIndex} />
    </group>
  );
}
