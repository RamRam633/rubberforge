"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, memo, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import type { SimState } from "@/types/simulation";
import type { MachineModelProps } from "@/components/machines/types";
import {
  STATION_ORDER,
  stationPosition,
  stationX,
  closeUpShot,
  fullFactoryShot,
  cutawayShot,
  LINE_CENTER_X,
  LINE_LENGTH,
  STATION_SPACING,
} from "@/lib/scene/layout";
import { MACHINE_MODELS } from "./machineRegistry";
import { FactoryEnvironment } from "./FactoryEnvironment";
import { CrewLayer } from "./CrewLayer";
import { CameraRig } from "./CameraRig";
import { MachineLabel } from "@/components/machines/kit";
import { materialStates } from "@/lib/materialData";
import { processSteps } from "@/lib/processData";

export type ViewMode = "factory" | "closeup" | "cutaway" | "chemistry" | "intel";

const MemoEnvironment = memo(FactoryEnvironment);

interface MachineSlotProps extends MachineModelProps {
  Model: React.ComponentType<MachineModelProps>;
  position: [number, number, number];
}
const MachineSlot = memo(function MachineSlot({ Model, position, ...rest }: MachineSlotProps) {
  return (
    <group position={position}>
      <Model {...rest} />
    </group>
  );
});

// Shadow-casting key light that follows the active station for crisp local shadows.
function KeyLight({ x }: { x: number }) {
  const light = useRef<THREE.DirectionalLight>(null);
  const target = useRef<THREE.Object3D>(null);
  useEffect(() => {
    if (light.current && target.current) light.current.target = target.current;
  }, []);
  return (
    <group position={[x, 0, 0]}>
      <directionalLight
        ref={light}
        castShadow
        position={[-5, 13, 9]}
        intensity={2.3}
        color="#fff2e2"
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={48}
        shadow-camera-left={-9}
        shadow-camera-right={9}
        shadow-camera-top={9}
        shadow-camera-bottom={-9}
        shadow-bias={-0.0004}
      />
      <object3D ref={target} />
    </group>
  );
}

/** Glowing material laid on the line up to the active station, conveying flow. */
function MaterialOnLine({ activeIndex, toneA, toneB }: { activeIndex: number; toneA: string; toneB: string }) {
  const startX = -STATION_SPACING * 0.6;
  const endX = stationX(activeIndex);
  const len = Math.max(0.1, endX - startX);
  const mat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: toneB, emissive: toneA, emissiveIntensity: 0.5, roughness: 0.6 }),
    [toneA, toneB],
  );
  return (
    <mesh position={[startX + len / 2, 0.06, 0]} material={mat}>
      <boxGeometry args={[len, 0.04, 0.7]} />
    </mesh>
  );
}

// These three receive props that are stable during a transform, so memoizing
// them keeps them from re-rendering on every progress frame (only the active
// machine re-renders per frame).
const MemoKeyLight = memo(KeyLight);
const MemoMaterialOnLine = memo(MaterialOnLine);
const MemoMachineLabel = memo(MachineLabel);

function SceneContents({
  state,
  viewMode,
  progress,
  showCrew,
}: {
  state: SimState;
  viewMode: ViewMode;
  progress: number;
  showCrew: boolean;
}) {
  const positions = useMemo(() => STATION_ORDER.map((_, i) => stationPosition(i)), []);
  const activeX = stationX(state.activeIndex);
  const activeStep = processSteps[state.activeIndex];
  const material = materialStates[state.materialStateId];

  const shot = useMemo(() => {
    if (viewMode === "factory") return fullFactoryShot(state.activeIndex);
    if (viewMode === "cutaway") return cutawayShot(state.activeIndex);
    return closeUpShot(state.activeIndex);
  }, [viewMode, state.activeIndex]);

  // Stable so the memoized label does not re-render every progress frame.
  const labelPos = useMemo<[number, number, number]>(() => [activeX, 4.4, 0], [activeX]);

  return (
    <>
      <color attach="background" args={["#272b33"]} />
      <fog attach="fog" args={["#272b33", 32, 82]} />

      <ambientLight intensity={0.6} />
      <hemisphereLight intensity={0.55} color="#cfe0ff" groundColor="#2a241b" />
      <directionalLight position={[18, 10, -8]} intensity={0.9} color="#bcd6ff" />
      <MemoKeyLight x={activeX} />

      <Suspense fallback={null}>
        <MemoEnvironment />

        {STATION_ORDER.map((id, i) => {
          const isActive = i === state.activeIndex;
          const done = state.completedSteps.includes(id);
          return (
            <MachineSlot
              key={id}
              Model={MACHINE_MODELS[id]}
              position={positions[i]}
              active={isActive}
              transforming={isActive && state.transforming}
              progress={isActive ? progress : done ? 1 : 0}
              done={done}
            />
          );
        })}

        <MemoMaterialOnLine activeIndex={state.activeIndex} toneA={material.tone} toneB={material.tone} />

        {showCrew && (viewMode === "factory" || viewMode === "closeup") && <CrewLayer state={state} />}

        <MemoMachineLabel
          position={labelPos}
          title={activeStep.title}
          sub={`Station ${activeStep.sequence} / 10`}
        />
      </Suspense>

      <CameraRig shot={shot} />
    </>
  );
}

export function FactoryScene3D({
  state,
  viewMode,
  progress,
  showCrew = true,
}: {
  state: SimState;
  viewMode: ViewMode;
  progress: number;
  showCrew?: boolean;
}) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.8]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      camera={{ position: fullFactoryShot(0).position, fov: 42, near: 0.5, far: 200 }}
    >
      <SceneContents state={state} viewMode={viewMode} progress={progress} showCrew={showCrew} />
    </Canvas>
  );
}
