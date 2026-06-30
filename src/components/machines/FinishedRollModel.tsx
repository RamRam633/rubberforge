"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  MAT,
  BaseFrame,
  Bolt,
  Pallet,
  IndicatorLight,
  Railing,
  rubberSheetMaterial,
} from "./kit";
import type { MachineModelProps } from "./types";

// Finished-roll area: a large wound rubber roll resting in a two-saddle steel
// cradle stand. The roll is a matte-black cylinder along X with a steel core
// shaft poking out both ends, concentric layer rings on each end face (so the
// "wound" silhouette reads), and an optional shrink-wrap sheen. A label placard
// on a post stands beside it; two finished rolls sit stacked on a pallet behind.
// Output product, so it reads as a clean, finished good.

const ROLL_R = 0.9;
const ROLL_LEN = 3.0;
const ROLL_Y = 1.45; // centre height of the roll on its cradle
const SHAFT_OVERHANG = 0.45;

/** A single finished, wound rubber roll: body + layer end rings + core shaft. */
function WoundRoll({
  position = [0, 0, 0],
  length = ROLL_LEN,
  radius = ROLL_R,
  spinRef,
  color = "#151210",
  shrink = false,
}: {
  position?: [number, number, number];
  length?: number;
  radius?: number;
  spinRef?: React.RefObject<THREE.Group>;
  color?: string;
  shrink?: boolean;
}) {
  const bodyMat = useMemo(() => rubberSheetMaterial(color, 0.82), [color]);
  // Layer rings: alternating tones on the end faces to read as a wound coil.
  const ringMats = useMemo(
    () => [
      rubberSheetMaterial("#1c1d22", 0.7),
      rubberSheetMaterial("#101013", 0.86),
    ],
    [],
  );
  const wrapMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#202228",
        roughness: 0.12,
        metalness: 0.04,
        transparent: true,
        opacity: 0.22,
      }),
    [],
  );

  const rings = 5;

  return (
    <group position={position} ref={spinRef}>
      {/* main wound body */}
      <mesh rotation={[0, 0, Math.PI / 2]} material={bodyMat} castShadow receiveShadow>
        <cylinderGeometry args={[radius, radius, length, 44]} />
      </mesh>

      {/* shrink-wrap sheen, slightly larger translucent skin */}
      {shrink && (
        <mesh rotation={[0, 0, Math.PI / 2]} material={wrapMat}>
          <cylinderGeometry args={[radius + 0.02, radius + 0.02, length * 0.98, 44, 1, true]} />
        </mesh>
      )}

      {/* concentric layer rings on each end face */}
      {[length / 2, -length / 2].map((x, side) =>
        Array.from({ length: rings }).map((_, i) => {
          const rr = radius * (0.32 + (i / rings) * 0.66);
          return (
            <mesh
              key={`${side}-${i}`}
              position={[x + (side ? -0.006 : 0.006), 0, 0]}
              rotation={[0, 0, Math.PI / 2]}
              material={ringMats[i % 2]}
            >
              <torusGeometry args={[rr, 0.028, 8, 40]} />
            </mesh>
          );
        }),
      )}

      {/* steel core shaft poking out both ends */}
      <mesh rotation={[0, 0, Math.PI / 2]} material={MAT.polished} castShadow>
        <cylinderGeometry args={[0.12, 0.12, length + SHAFT_OVERHANG * 2, 20]} />
      </mesh>
      {/* shaft end collars */}
      {[length / 2 + SHAFT_OVERHANG * 0.6, -(length / 2 + SHAFT_OVERHANG * 0.6)].map((x, i) => (
        <mesh key={i} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={MAT.darkPolished} castShadow>
          <cylinderGeometry args={[0.17, 0.17, 0.12, 18]} />
        </mesh>
      ))}
    </group>
  );
}

/** A V-saddle support: two angled steel cheeks on a post, cradling the roll. */
function Saddle({ x }: { x: number }) {
  const saddleR = ROLL_R + 0.06;
  return (
    <group position={[x, 0, 0]}>
      {/* upright post under the saddle */}
      <mesh position={[0, ROLL_Y * 0.42, 0]} material={MAT.bodyPaint} castShadow receiveShadow>
        <boxGeometry args={[0.34, ROLL_Y * 0.84, 1.5]} />
      </mesh>
      {/* curved cradle seat (concave cylinder section the roll sits in) */}
      <mesh
        position={[0, ROLL_Y, 0]}
        rotation={[0, 0, Math.PI / 2]}
        material={MAT.frameSteel}
        castShadow
        receiveShadow
      >
        <cylinderGeometry args={[saddleR, saddleR, 0.34, 28, 1, true, Math.PI * 0.18, Math.PI * 0.64]} />
      </mesh>
      {/* two angled cheek plates forming the V */}
      {[-1, 1].map((s) => (
        <mesh
          key={s}
          position={[0, ROLL_Y - 0.16, s * (saddleR * 0.62)]}
          rotation={[s * 0.62, 0, 0]}
          material={MAT.lightSteel}
          castShadow
        >
          <boxGeometry args={[0.34, 0.7, 0.06]} />
        </mesh>
      ))}
      {/* bolts at the post foot */}
      {[-0.5, 0.5].map((z) => (
        <Bolt key={z} position={[0, 0.06, z]} r={0.05} />
      ))}
    </group>
  );
}

export function FinishedRollModel({ active, transforming, progress = 0, done }: MachineModelProps) {
  const roll = useRef<THREE.Group>(null);

  useFrame((_, dt) => {
    // The main roll turns slowly and steadily (it is a finished good on display),
    // a touch faster while transforming so the wound layers read as moving.
    const speed = transforming ? 0.9 : active ? 0.45 : 0.18;
    if (roll.current) roll.current.rotation.x += dt * speed;
  });

  // Cured finished sheet: slightly darker / cleaner as it nears completion.
  const rollColor = done ? "#101116" : transforming ? "#151210" : "#16171c";
  const on = active || transforming;
  const greenOn = !!done;

  return (
    <group>
      {/* heavy steel base plinth the cradle stand bolts onto */}
      <BaseFrame size={[3.6, 0.4, 2.2]} />

      {/* two-saddle cradle stand */}
      <Saddle x={-1.05} />
      <Saddle x={1.05} />
      {/* longitudinal tie beam linking the two saddle posts */}
      <mesh position={[0, 0.55, -0.62]} material={MAT.frameSteel} castShadow>
        <boxGeometry args={[2.7, 0.18, 0.18]} />
      </mesh>
      <mesh position={[0, 0.55, 0.62]} material={MAT.frameSteel} castShadow>
        <boxGeometry args={[2.7, 0.18, 0.18]} />
      </mesh>

      {/* the main wound finished roll resting in the cradle */}
      <WoundRoll
        position={[0, ROLL_Y, 0]}
        spinRef={roll}
        color={rollColor}
        shrink={done || progress > 0.5}
      />

      {/* label placard: a light board on a post beside the roll (operator side) */}
      <group position={[-1.95, 0, 1.0]}>
        <mesh position={[0, 0.78, 0]} material={MAT.darkPolished} castShadow>
          <cylinderGeometry args={[0.045, 0.045, 1.56, 12]} />
        </mesh>
        {/* board backing */}
        <mesh position={[0, 1.5, 0]} rotation={[0, 0.25, 0]} material={MAT.frameSteel} castShadow>
          <boxGeometry args={[0.7, 0.5, 0.04]} />
        </mesh>
        {/* light label face (blank, no text) */}
        <mesh position={[0, 1.5, 0.03]} rotation={[0, 0.25, 0]} material={MAT.beige}>
          <boxGeometry args={[0.62, 0.42, 0.02]} />
        </mesh>
        {/* small green "done" indicator on the placard post */}
        <IndicatorLight position={[0, 1.12, 0.06]} color="#34d399" on={greenOn} r={0.05} />
      </group>

      {/* two finished rolls stacked on a pallet nearby (behind, output buffer) */}
      <group position={[2.55, 0, -1.35]}>
        <Pallet />
        <WoundRoll position={[0, 0.55, 0]} length={1.25} radius={0.42} color="#131318" shrink />
        <WoundRoll position={[0, 1.05, 0]} length={1.25} radius={0.42} color="#15161b" shrink />
      </group>

      {/* a single staged roll on the floor on the far operator corner */}
      <WoundRoll position={[2.7, 0.46, 1.35]} length={1.4} radius={0.4} color="#141419" shrink />

      {/* status indicator cluster on the base front (operator side) */}
      <group position={[-1.4, 0.7, 1.05]}>
        <mesh material={MAT.bodyPaintDark} castShadow>
          <boxGeometry args={[0.34, 0.22, 0.08]} />
        </mesh>
        <IndicatorLight position={[-0.09, 0, 0.06]} color="#34d399" on={greenOn} r={0.04} />
        <IndicatorLight position={[0.02, 0, 0.06]} color="#ff8c2b" on={on && !done} r={0.04} />
        <IndicatorLight position={[0.11, 0, 0.06]} color="#2ba6c4" on={on} r={0.04} />
      </group>

      {/* yellow safety railing along the operator side */}
      <Railing position={[0, 0, 1.85]} length={3.4} axis="x" posts={4} />
    </group>
  );
}
