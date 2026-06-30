"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  MAT,
  Pallet,
  StorageBale,
  Drum,
  Bolt,
  IndicatorLight,
} from "./kit";
import type { MachineModelProps } from "./types";

// Raw material storage / receiving area: a tall industrial pallet-rack shelving
// unit. Heavy steel uprights and horizontal beam levels carry light beige
// polymer bales, with a pallet of bales at the base, oil + filler drums, an open
// bin of black filler, a stack of tan additive sacks, and a hanging sign post.
// This is a static storage station: the only motion is a subtle status light.
const RACK_W = 5.0; // along X (material-flow direction)
const RACK_D = 1.5; // along Z (depth)
const UPRIGHT_H = 4.2; // rack height
const UPRIGHT_T = 0.16; // upright post thickness
const SHELF_Y = [0.05, 1.45, 2.85]; // beam-level heights (loaded levels above)

// ── A single upright frame: two posts joined by diagonal cross-bracing ────────
function RackUpright({ x }: { x: number }) {
  const zFront = RACK_D / 2 - UPRIGHT_T / 2;
  const zBack = -RACK_D / 2 + UPRIGHT_T / 2;
  return (
    <group position={[x, 0, 0]}>
      {/* two vertical posts */}
      {[zFront, zBack].map((z) => (
        <mesh
          key={z}
          position={[0, UPRIGHT_H / 2, z]}
          material={MAT.frameSteel}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[UPRIGHT_T, UPRIGHT_H, UPRIGHT_T]} />
        </mesh>
      ))}
      {/* base foot plates */}
      {[zFront, zBack].map((z) => (
        <mesh key={`f${z}`} position={[0, 0.04, z]} material={MAT.bodyPaintDark} castShadow>
          <boxGeometry args={[0.34, 0.08, 0.34]} />
        </mesh>
      ))}
      {/* anchor bolts in the foot plates */}
      {[zFront, zBack].map((z) => (
        <Bolt key={`b${z}`} position={[0, 0.09, z]} r={0.035} />
      ))}
      {/* diagonal cross-bracing (zig-zag) between the posts */}
      {[0.55, 1.4, 2.25, 3.1].map((y, i) => (
        <mesh
          key={i}
          position={[0, y, 0]}
          rotation={[i % 2 ? -0.62 : 0.62, 0, 0]}
          material={MAT.lightSteel}
          castShadow
        >
          <boxGeometry args={[0.05, 0.05, RACK_D * 1.18]} />
        </mesh>
      ))}
      {/* horizontal tie at each shelf level on this upright */}
      {SHELF_Y.map((y) => (
        <mesh key={`t${y}`} position={[0, y + 0.18, 0]} material={MAT.lightSteel} castShadow>
          <boxGeometry args={[0.05, 0.05, RACK_D]} />
        </mesh>
      ))}
    </group>
  );
}

// ── One shelf level: two load beams (front + back) running along X ────────────
function ShelfBeams({ y }: { y: number }) {
  const zFront = RACK_D / 2 - UPRIGHT_T / 2;
  const zBack = -RACK_D / 2 + UPRIGHT_T / 2;
  return (
    <group position={[0, y, 0]}>
      {[zFront, zBack].map((z) => (
        <group key={z} position={[0, 0, z]}>
          {/* orange step-beam (warehouse load beam) */}
          <mesh position={[0, 0.18, 0]} material={MAT.safety} castShadow receiveShadow>
            <boxGeometry args={[RACK_W - UPRIGHT_T, 0.14, 0.1]} />
          </mesh>
          {/* lower lip of the C-channel */}
          <mesh position={[0, 0.1, 0.03]} material={MAT.safety}>
            <boxGeometry args={[RACK_W - UPRIGHT_T, 0.04, 0.05]} />
          </mesh>
        </group>
      ))}
      {/* wire-deck slats spanning the two beams */}
      {Array.from({ length: 7 }).map((_, i) => {
        const z = -RACK_D / 2 + 0.18 + (i * (RACK_D - 0.36)) / 6;
        return (
          <mesh key={i} position={[0, 0.27, z]} material={MAT.lightSteel}>
            <boxGeometry args={[RACK_W - 0.3, 0.025, 0.04]} />
          </mesh>
        );
      })}
    </group>
  );
}

export function RawMaterialStorageModel({ active, transforming, done }: MachineModelProps) {
  const light = useRef<THREE.Group>(null);

  // Subtle "pulse" of the status light position-less; we just toggle emissive via
  // a slowly oscillating scale on the lamp housing so storage feels alive.
  const blink = useRef(0);
  useFrame((_, dt) => {
    blink.current += dt * (transforming ? 4 : active ? 1.6 : 0.7);
    if (light.current) {
      const s = 1 + Math.sin(blink.current) * 0.12;
      light.current.scale.set(s, s, s);
    }
  });

  const on = active || transforming || done;

  // dark matte interior for the open filler bin
  const binInner = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#0c0d10", roughness: 0.96, metalness: 0.02 }),
    [],
  );
  // loose black filler heap inside the bin
  const fillerHeap = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#161310", roughness: 0.95, metalness: 0.03, flatShading: true }),
    [],
  );
  // tan additive sack material
  const sackMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#c9b48a", roughness: 0.88, metalness: 0.02 }),
    [],
  );
  // sign board + post
  const signMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#1c2026", roughness: 0.6, metalness: 0.3 }),
    [],
  );

  return (
    <group>
      {/* ── PALLET RACK SKELETON ─────────────────────────────────────────── */}
      {[-RACK_W / 2, 0, RACK_W / 2].map((x) => (
        <RackUpright key={x} x={x} />
      ))}
      {SHELF_Y.slice(1).map((y) => (
        <ShelfBeams key={y} y={y} />
      ))}
      {/* top header beam tying the uprights together */}
      <mesh position={[0, UPRIGHT_H - 0.06, RACK_D / 2 - UPRIGHT_T / 2]} material={MAT.frameSteel} castShadow>
        <boxGeometry args={[RACK_W, 0.12, 0.1]} />
      </mesh>
      <mesh position={[0, UPRIGHT_H - 0.06, -RACK_D / 2 + UPRIGHT_T / 2]} material={MAT.frameSteel} castShadow>
        <boxGeometry args={[RACK_W, 0.12, 0.1]} />
      </mesh>

      {/* ── LEVEL 2 LOAD: row of beige polymer bales ─────────────────────── */}
      {[-1.6, -0.4, 0.8].map((x) => (
        <StorageBale key={`l2${x}`} position={[x, SHELF_Y[1] + 0.55, 0]} />
      ))}
      {/* a slightly darker compound bale to vary the load */}
      <StorageBale position={[1.85, SHELF_Y[1] + 0.55, 0]} color="#cdc3a8" />

      {/* ── LEVEL 3 LOAD: bales + a pair of drums ────────────────────────── */}
      {[-1.7, -0.55].map((x) => (
        <StorageBale key={`l3${x}`} position={[x, SHELF_Y[2] + 0.55, 0]} />
      ))}
      {/* drums standing on the top shelf */}
      <group position={[0.9, SHELF_Y[2] + 0.62, 0]}>
        <Drum position={[0, 0, 0]} color="#7a5a2c" />
      </group>
      <group position={[1.75, SHELF_Y[2] + 0.62, 0]}>
        <Drum position={[0, 0, 0]} color="#23262b" />
      </group>

      {/* ── BASE LEVEL: pallet stacked with bales on the floor ───────────── */}
      <Pallet position={[-1.7, 0, 0]} />
      <StorageBale position={[-1.7, 0.5, 0.3]} />
      <StorageBale position={[-1.7, 0.5, -0.4]} color="#dad0b6" />
      <StorageBale position={[-1.7, 1.07, -0.05]} />

      {/* second pallet of bales toward operator side / floor */}
      <Pallet position={[1.7, 0, 0.0]} />
      <StorageBale position={[1.7, 0.5, 0.3]} color="#dad0b6" />
      <StorageBale position={[1.7, 0.5, -0.4]} />

      {/* ── FLOOR DRUMS (oil + filler) in front of the rack ──────────────── */}
      <Drum position={[-0.2, 0.55, 1.7]} color="#7a5a2c" />
      <Drum position={[0.65, 0.55, 1.75]} color="#23262b" />

      {/* ── OPEN BIN OF BLACK FILLER ─────────────────────────────────────── */}
      <group position={[2.55, 0, 1.55]}>
        {/* steel bin walls (open top) */}
        {(
          [
            [0, 0.45, 0.45, [0.9, 0.9, 0.06]],
            [0, 0.45, -0.45, [0.9, 0.9, 0.06]],
            [0.45, 0.45, 0, [0.06, 0.9, 0.9]],
            [-0.45, 0.45, 0, [0.06, 0.9, 0.9]],
          ] as [number, number, number, [number, number, number]][]
        ).map((w, i) => (
          <mesh key={i} position={[w[0], w[1], w[2]]} material={MAT.bodyPaint} castShadow receiveShadow>
            <boxGeometry args={w[3]} />
          </mesh>
        ))}
        {/* dark matte interior cube */}
        <mesh position={[0, 0.4, 0]} material={binInner}>
          <boxGeometry args={[0.82, 0.82, 0.82]} />
        </mesh>
        {/* heaped black filler mounding above the rim */}
        <mesh position={[0, 0.82, 0]} material={fillerHeap} scale={[1, 0.55, 1]} castShadow>
          <icosahedronGeometry args={[0.42, 1]} />
        </mesh>
      </group>

      {/* ── STACK OF TAN ADDITIVE SACKS ──────────────────────────────────── */}
      <group position={[-2.9, 0, 1.4]}>
        {(
          [
            [0, 0.18, 0, 0.05],
            [0.06, 0.5, 0.04, -0.12],
            [-0.05, 0.82, -0.03, 0.18],
            [0.03, 1.13, 0.02, -0.05],
          ] as [number, number, number, number][]
        ).map((s, i) => (
          <mesh
            key={i}
            position={[s[0], s[1], s[2]]}
            rotation={[0, s[3], 0]}
            material={sackMat}
            castShadow
            receiveShadow
            scale={[1, 0.62, 0.8]}
          >
            {/* rounded box look via a low-detail rounded sphere-ish geometry */}
            <boxGeometry args={[0.78, 0.46, 0.6]} />
          </mesh>
        ))}
      </group>

      {/* ── HANGING SIGN POST ────────────────────────────────────────────── */}
      <group position={[-RACK_W / 2 - 0.15, 0, RACK_D / 2 + 0.25]}>
        {/* vertical sign post */}
        <mesh position={[0, 1.4, 0]} material={MAT.frameSteel} castShadow>
          <cylinderGeometry args={[0.05, 0.05, 2.8, 12]} />
        </mesh>
        {/* horizontal arm reaching over the receiving area */}
        <mesh position={[0.45, 2.7, 0]} material={MAT.frameSteel} castShadow>
          <boxGeometry args={[0.95, 0.06, 0.06]} />
        </mesh>
        {/* hanging sign board */}
        <group position={[0.8, 2.35, 0]}>
          <mesh material={signMat} castShadow receiveShadow>
            <boxGeometry args={[0.7, 0.5, 0.04]} />
          </mesh>
          {/* two little hanger links */}
          {[-0.25, 0.25].map((dx) => (
            <mesh key={dx} position={[dx, 0.3, 0]} material={MAT.lightSteel}>
              <cylinderGeometry args={[0.012, 0.012, 0.16, 8]} />
            </mesh>
          ))}
          {/* status indicator light on the sign post, subtly pulsing */}
          <group ref={light} position={[0, -0.02, 0.04]}>
            <IndicatorLight position={[0, 0, 0]} color={done ? "#34d399" : on ? "#ff8c2b" : "#3b3f46"} on={on} r={0.06} />
          </group>
        </group>
      </group>
    </group>
  );
}
