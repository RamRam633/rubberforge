"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  MAT,
  BaseFrame,
  Motor,
  GearHousing,
  ControlPanel,
  Railing,
  Bolt,
  rubberSheetMaterial,
} from "./kit";
import type { MachineModelProps } from "./types";

// Two-roll mill: two large horizontal counter-rotating polished rolls held in
// heavy side frames, with the compound banding around the front roll, a nip
// gap, a safety bar, and a side drive. Long axis (roll width) runs along X.
const ROLL_R = 0.52;
const ROLL_LEN = 3.3;
const ROLL_Y = 1.7;
const FRONT_Z = 0.58;
const BACK_Z = -0.58;

function MillRoll({
  z,
  spinRef,
  band = 0,
  bandMat,
}: {
  z: number;
  spinRef: React.RefObject<THREE.Group>;
  band?: number;
  bandMat?: THREE.Material;
}) {
  return (
    <group position={[0, ROLL_Y, z]} ref={spinRef}>
      {/* roll body */}
      <mesh rotation={[0, 0, Math.PI / 2]} material={MAT.polished} castShadow receiveShadow>
        <cylinderGeometry args={[ROLL_R, ROLL_R, ROLL_LEN, 40]} />
      </mesh>
      {/* end caps + visible bolt circles so rotation reads */}
      {[ROLL_LEN / 2, -ROLL_LEN / 2].map((x, i) => (
        <group key={i} position={[x, 0, 0]}>
          <mesh rotation={[0, 0, Math.PI / 2]} material={MAT.bodyPaintDark} castShadow>
            <cylinderGeometry args={[ROLL_R * 1.12, ROLL_R * 1.12, 0.18, 28]} />
          </mesh>
          {Array.from({ length: 6 }).map((_, b) => {
            const a = (b / 6) * Math.PI * 2;
            return <Bolt key={b} position={[i ? -0.12 : 0.12, Math.cos(a) * 0.32, Math.sin(a) * 0.32]} r={0.04} />;
          })}
        </group>
      ))}
      {/* rubber banding wrapped around the front roll, grows with progress */}
      {band > 0.02 && bandMat && (
        <mesh rotation={[0, 0, Math.PI / 2]} material={bandMat}>
          <cylinderGeometry
            args={[ROLL_R + 0.04 + band * 0.05, ROLL_R + 0.04 + band * 0.05, ROLL_LEN * 0.86, 36, 1, true, 0, Math.PI * 1.35]}
          />
        </mesh>
      )}
    </group>
  );
}

export function TwoRollMillModel({ active, transforming, progress = 0, done }: MachineModelProps) {
  const front = useRef<THREE.Group>(null);
  const back = useRef<THREE.Group>(null);

  useFrame((_, dt) => {
    const speed = transforming ? 3.2 : active ? 1.2 : 0.2;
    if (front.current) front.current.rotation.x += dt * speed;
    if (back.current) back.current.rotation.x -= dt * speed;
  });

  const band = done ? 0.9 : transforming ? progress : active ? 0.25 : 0;
  const on = active || transforming;

  // Banding + exit-strip materials are quantized to the discrete stage so they
  // are not rebuilt every frame while progress animates (mirrors WeighingStation).
  const stage = done ? "done" : transforming ? "run" : active ? "on" : "off";
  const bandMat = useMemo(() => {
    const r = stage === "done" ? 0.58 : stage === "run" ? 0.7 : 0.78;
    return rubberSheetMaterial("#151210", r);
  }, [stage]);
  const exitMat = useMemo(() => {
    const r = stage === "done" ? 0.35 : stage === "run" ? 0.42 : 0.5;
    return rubberSheetMaterial("#1b1714", r);
  }, [stage]);

  return (
    <group>
      <BaseFrame size={[4, 0.55, 2.6]} />

      {/* side frames holding the rolls */}
      {[1.85, -1.85].map((x) => (
        <mesh key={x} position={[x, 1.45, 0]} material={MAT.bodyPaint} castShadow receiveShadow>
          <boxGeometry args={[0.4, 2.4, 2.2]} />
        </mesh>
      ))}
      {/* bearing blocks */}
      {[1.85, -1.85].map((x) =>
        [FRONT_Z, BACK_Z].map((z) => (
          <mesh key={`${x}-${z}`} position={[x, ROLL_Y, z]} material={MAT.frameSteel} castShadow>
            <boxGeometry args={[0.5, 0.6, 0.6]} />
          </mesh>
        )),
      )}

      <MillRoll z={FRONT_Z} spinRef={front} band={band} bandMat={bandMat} />
      <MillRoll z={BACK_Z} spinRef={back} />

      {/* feed bank of stock sitting in the nip */}
      {on && (
        <mesh position={[0, ROLL_Y + ROLL_R - 0.05, 0]} rotation={[0, 0, Math.PI / 2]} material={MAT.rubberMatte}>
          <cylinderGeometry args={[0.16, 0.16, ROLL_LEN * 0.72, 16]} />
        </mesh>
      )}

      {/* milled strip exiting at the front */}
      <mesh position={[0, ROLL_Y - ROLL_R - 0.1, FRONT_Z + 1.0]} rotation={[Math.PI / 2.3, 0, 0]} material={exitMat} castShadow>
        <boxGeometry args={[ROLL_LEN * 0.8, 1.6, 0.04]} />
      </mesh>

      {/* yellow safety bar across the operator side */}
      <group position={[0, ROLL_Y + 0.05, FRONT_Z + 0.62]}>
        <mesh rotation={[0, 0, Math.PI / 2]} material={MAT.safety} castShadow>
          <cylinderGeometry args={[0.06, 0.06, ROLL_LEN, 12]} />
        </mesh>
        {[1.4, -1.4].map((x) => (
          <mesh key={x} position={[x, -0.3, 0]} material={MAT.safety}>
            <cylinderGeometry args={[0.04, 0.04, 0.6, 10]} />
          </mesh>
        ))}
      </group>

      {/* drive side: motor + gear housing */}
      <GearHousing position={[2.55, 1.3, 0]} size={[0.7, 1.4, 1.5]} material={MAT.bodyPaintDark} />
      <Motor position={[3.3, 1.3, 0]} length={1.1} radius={0.42} axis="x" />

      {/* control cabinet + guarding */}
      <ControlPanel position={[-2.7, 0, 1.2]} rotation={[0, 0.5, 0]} on={on} />
      <Railing position={[0, 0, 1.9]} length={4.2} axis="x" />
    </group>
  );
}
