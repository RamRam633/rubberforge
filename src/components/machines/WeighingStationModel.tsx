"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  MAT,
  Hopper,
  Drum,
  Bolt,
  IndicatorLight,
  EStop,
  rubberSheetMaterial,
} from "./kit";
import type { MachineModelProps } from "./types";

// Batch weighing station: a heavy platform floor scale on short load-cell feet
// with a slim digital-readout post beside it, a bank of feed hoppers mounted on
// a gantry frame above the deck, a weigh tray on the deck, and bulk material
// containers (a drum, a black-filler bin, a beige sack) around it. Material
// flows along +X. Operator-facing detail (readout, e-stop) faces +Z.

const DECK_W = 2.0; // X span of the scale deck
const DECK_D = 1.5; // Z span of the scale deck
const DECK_Y = 0.34; // top surface height of the deck
const HOPPER_Y = 2.95; // hopper body centre height on the gantry
const TRAY_X = 0.1; // where the weigh tray / fill point sits on the deck
const TRAY_Z = -0.1;

// Number of falling ingredient particles animated during a transform.
const PARTICLE_COUNT = 14;

export function WeighingStationModel({ active, transforming, progress = 0, done }: MachineModelProps) {
  const particlesRef = useRef<THREE.Group>(null);
  const dialRef = useRef<THREE.Mesh>(null);

  const on = active || transforming;

  // Readout glow ramps up while transforming so the "scale is filling" reads.
  const screenMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#08272e",
        emissive: "#14c98f",
        emissiveIntensity: 0.4,
        roughness: 0.18,
      }),
    [],
  );

  // Black-filler material in the bin, getting cleaner as the batch completes.
  const fillerMat = useMemo(() => rubberSheetMaterial("#101014", 0.95), []);

  // Tinted overlay heap material so the tray colour tracks batch state without
  // rebuilding a material every frame. Re-created only when the stage changes.
  const trayHeapColor = done ? "#15161b" : transforming ? "#151210" : "#101014";
  const trayHeapMat = useMemo(() => rubberSheetMaterial(trayHeapColor, 0.9), [trayHeapColor]);

  // The growing heap of weighed compound sitting in the tray.
  const heapMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#151210",
        roughness: 0.92,
        metalness: 0.05,
        flatShading: true,
      }),
    [],
  );

  // Per-particle phase offsets so the stream is not lock-stepped.
  const phases = useMemo(
    () => Array.from({ length: PARTICLE_COUNT }, (_, i) => (i / PARTICLE_COUNT) * Math.PI * 2),
    [],
  );

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;

    // Readout screen pulse: stronger and faster while dosing.
    const baseGlow = done ? 1.6 : transforming ? 2.4 : active ? 1.0 : 0.35;
    screenMat.emissiveIntensity = baseGlow + (on ? Math.sin(t * (transforming ? 9 : 3)) * 0.25 : 0);

    // Slim needle/sweep on the readout post nudges as weight accumulates.
    if (dialRef.current) {
      const target = -0.9 + progress * 1.8;
      dialRef.current.rotation.z += (target - dialRef.current.rotation.z) * Math.min(1, dt * 4);
    }

    // Falling ingredient particles: only visible while dosing. They drop from
    // the centre hopper spout down to the tray and recycle.
    const grp = particlesRef.current;
    if (grp) {
      const dosing = !!transforming;
      grp.visible = dosing;
      if (dosing) {
        const spoutY = HOPPER_Y - 0.62;
        const fallTo = DECK_Y + 0.18;
        const span = spoutY - fallTo;
        for (let i = 0; i < grp.children.length; i++) {
          const m = grp.children[i];
          // Fraction 0..1 of the fall, looped, offset per particle.
          const f = ((t * 1.6 + phases[i]) % (Math.PI * 2)) / (Math.PI * 2);
          m.position.y = spoutY - f * span;
          // Slight horizontal scatter as they fall.
          m.position.x = Math.sin(phases[i] * 3) * 0.06 * f;
          m.position.z = Math.cos(phases[i] * 2) * 0.06 * f;
          const s = 0.5 + f * 0.5;
          m.scale.setScalar(s);
        }
      }
    }
  });

  // Heap of compound in the tray grows with progress.
  const heapScale = done ? 1 : transforming ? 0.25 + progress * 0.75 : active ? 0.2 : 0.08;

  return (
    <group>
      {/* ── Platform floor scale: heavy steel deck on short load-cell feet ── */}
      {/* Four load-cell feet (squat cylindrical sensors) */}
      {[
        [DECK_W / 2 - 0.22, DECK_D / 2 - 0.22],
        [-(DECK_W / 2 - 0.22), DECK_D / 2 - 0.22],
        [DECK_W / 2 - 0.22, -(DECK_D / 2 - 0.22)],
        [-(DECK_W / 2 - 0.22), -(DECK_D / 2 - 0.22)],
      ].map(([fx, fz], i) => (
        <group key={i} position={[fx, 0, fz]}>
          {/* base pad on the floor */}
          <mesh position={[0, 0.03, 0]} material={MAT.bodyPaintDark} castShadow receiveShadow>
            <boxGeometry args={[0.3, 0.06, 0.3]} />
          </mesh>
          {/* load cell puck */}
          <mesh position={[0, 0.12, 0]} material={MAT.darkPolished} castShadow>
            <cylinderGeometry args={[0.1, 0.12, 0.14, 16]} />
          </mesh>
        </group>
      ))}

      {/* deck side rails (low kerb around the platform) */}
      <mesh position={[0, 0.27, 0]} material={MAT.frameSteel} castShadow receiveShadow>
        <boxGeometry args={[DECK_W + 0.08, 0.14, DECK_D + 0.08]} />
      </mesh>
      {/* deck top plate: brushed checker-plate steel */}
      <mesh position={[0, DECK_Y, 0]} material={MAT.lightSteel} castShadow receiveShadow>
        <boxGeometry args={[DECK_W, 0.06, DECK_D]} />
      </mesh>
      {/* corner bolts anchoring the deck plate */}
      {[
        [DECK_W / 2 - 0.12, DECK_D / 2 - 0.12],
        [-(DECK_W / 2 - 0.12), DECK_D / 2 - 0.12],
        [DECK_W / 2 - 0.12, -(DECK_D / 2 - 0.12)],
        [-(DECK_W / 2 - 0.12), -(DECK_D / 2 - 0.12)],
      ].map(([bx, bz], i) => (
        <Bolt key={i} position={[bx, DECK_Y + 0.04, bz]} r={0.04} />
      ))}

      {/* ── Weigh tray / bin sitting on the deck ── */}
      <group position={[TRAY_X, DECK_Y + 0.03, TRAY_Z]}>
        {/* open-top tray walls */}
        <mesh material={MAT.bodyPaint} castShadow receiveShadow>
          <boxGeometry args={[0.86, 0.34, 0.78]} />
        </mesh>
        {/* hollow inner well (darker) */}
        <mesh position={[0, 0.06, 0]} material={MAT.bodyPaintDark}>
          <boxGeometry args={[0.72, 0.26, 0.64]} />
        </mesh>
        {/* weighed compound heap, grows with progress */}
        <mesh
          position={[0, 0.04, 0]}
          scale={[0.32, 0.18 * heapScale + 0.04, 0.28]}
          material={heapMat}
          castShadow
        >
          <icosahedronGeometry args={[1, 1]} />
        </mesh>
        {/* tinted overlay heap so colour tracks progress without rebuilding mat */}
        {heapScale > 0.12 && (
          <mesh
            position={[0, 0.04, 0]}
            scale={[0.3, 0.16 * heapScale + 0.03, 0.26]}
            material={trayHeapMat}
          >
            <icosahedronGeometry args={[1, 1]} />
          </mesh>
        )}
      </group>

      {/* ── Gantry frame holding the feed hoppers above the deck ── */}
      {/* four corner posts */}
      {[
        [DECK_W / 2 - 0.05, DECK_D / 2 - 0.12],
        [-(DECK_W / 2 - 0.05), DECK_D / 2 - 0.12],
        [DECK_W / 2 - 0.05, -(DECK_D / 2 - 0.12)],
        [-(DECK_W / 2 - 0.05), -(DECK_D / 2 - 0.12)],
      ].map(([px, pz], i) => (
        <mesh key={i} position={[px, 1.95, pz]} material={MAT.frameSteel} castShadow receiveShadow>
          <boxGeometry args={[0.12, 3.3, 0.12]} />
        </mesh>
      ))}
      {/* top cross-beams (along X) carrying the hopper deck */}
      {[DECK_D / 2 - 0.12, -(DECK_D / 2 - 0.12)].map((bz, i) => (
        <mesh key={i} position={[0, 3.55, bz]} material={MAT.frameSteel} castShadow>
          <boxGeometry args={[DECK_W + 0.1, 0.14, 0.14]} />
        </mesh>
      ))}
      {/* top cross-beams (along Z) */}
      {[DECK_W / 2 - 0.05, -(DECK_W / 2 - 0.05)].map((bx, i) => (
        <mesh key={i} position={[bx, 3.55, 0]} material={MAT.frameSteel} castShadow>
          <boxGeometry args={[0.14, 0.14, DECK_D]} />
        </mesh>
      ))}
      {/* hopper mounting plate */}
      <mesh position={[0, 3.42, 0]} material={MAT.bodyPaintDark} castShadow receiveShadow>
        <boxGeometry args={[DECK_W - 0.1, 0.08, DECK_D - 0.2]} />
      </mesh>

      {/* three small feed hoppers dispensing ingredients onto the deck */}
      {[-0.62, 0.1, 0.82].map((hx, i) => (
        <group key={i}>
          <Hopper position={[hx, HOPPER_Y, 0]} topR={0.34} botR={0.1} height={0.66} />
          {/* dosing spout under each hopper */}
          <mesh position={[hx, HOPPER_Y - 0.5, 0]} material={MAT.darkPolished} castShadow>
            <cylinderGeometry args={[0.07, 0.05, 0.22, 14]} />
          </mesh>
          {/* small dosing-valve actuator box on the spout (operator side) */}
          <mesh position={[hx, HOPPER_Y - 0.46, 0.16]} material={MAT.blackPlastic} castShadow>
            <boxGeometry args={[0.16, 0.16, 0.12]} />
          </mesh>
          {/* per-hopper status light */}
          <IndicatorLight
            position={[hx, HOPPER_Y + 0.36, 0.2]}
            color={i === 1 ? "#34d399" : "#2ba6c4"}
            on={on}
          />
        </group>
      ))}

      {/* ── Falling ingredient particles from the centre hopper ── */}
      <group ref={particlesRef} position={[0.1, 0, 0]} visible={false}>
        {phases.map((_, i) => (
          <mesh key={i} material={heapMat}>
            <sphereGeometry args={[0.028, 8, 8]} />
          </mesh>
        ))}
      </group>

      {/* ── Digital readout post beside the scale (operator side, +Z) ── */}
      <group position={[1.32, 0, 1.05]}>
        {/* slim cabinet column */}
        <mesh position={[0, 0.85, 0]} material={MAT.bodyPaint} castShadow receiveShadow>
          <boxGeometry args={[0.42, 1.7, 0.3]} />
        </mesh>
        {/* angled head housing the screen */}
        <mesh position={[0, 1.78, 0.05]} rotation={[-0.28, 0, 0]} material={MAT.bodyPaintDark} castShadow>
          <boxGeometry args={[0.5, 0.42, 0.34]} />
        </mesh>
        {/* emissive digital screen */}
        <mesh position={[0, 1.8, 0.24]} rotation={[-0.28, 0, 0]} material={screenMat}>
          <boxGeometry args={[0.38, 0.28, 0.02]} />
        </mesh>
        {/* sweep needle across the screen (weight indication) */}
        <mesh
          ref={dialRef}
          position={[0, 1.78, 0.255]}
          rotation={[-0.28, 0, -0.9]}
          material={MAT.lightSteel}
        >
          <boxGeometry args={[0.02, 0.18, 0.008]} />
        </mesh>
        {/* base plinth */}
        <mesh position={[0, 0.08, 0]} material={MAT.bodyPaintDark} castShadow receiveShadow>
          <boxGeometry args={[0.5, 0.16, 0.4]} />
        </mesh>
        {/* status lights + tare/zero buttons on the column face */}
        <IndicatorLight position={[-0.1, 1.15, 0.16]} color="#34d399" on={on} />
        <IndicatorLight position={[0.06, 1.15, 0.16]} color="#ff8c2b" on={transforming} />
        <EStop position={[0, 0.78, 0.16]} />
      </group>

      {/* ── Material containers around the station ── */}
      {/* steel drum of compound (infeed side) */}
      <Drum position={[-1.95, 0.55, 0.95]} color="#383029" />

      {/* black-filler bin (open-top tote with carbon-black filler) */}
      <group position={[-1.95, 0, -0.95]}>
        {/* tote body */}
        <mesh position={[0, 0.5, 0]} material={MAT.bodyPaintDark} castShadow receiveShadow>
          <boxGeometry args={[0.9, 1.0, 0.9]} />
        </mesh>
        {/* hollow top rim */}
        <mesh position={[0, 1.0, 0]} material={MAT.frameSteel} castShadow>
          <boxGeometry args={[0.94, 0.06, 0.94]} />
        </mesh>
        {/* filler heaped inside */}
        <mesh position={[0, 0.96, 0]} scale={[0.36, 0.12, 0.36]} material={fillerMat} castShadow>
          <icosahedronGeometry args={[1, 1]} />
        </mesh>
        {/* fork pockets */}
        {[0.22, -0.22].map((z, i) => (
          <mesh key={i} position={[0, 0.08, z]} material={MAT.blackPlastic}>
            <boxGeometry args={[0.94, 0.12, 0.18]} />
          </mesh>
        ))}
      </group>

      {/* beige polymer sack leaning against the readout side */}
      <group position={[1.55, 0, -0.7]} rotation={[0, 0.4, 0.06]}>
        <mesh position={[0, 0.32, 0]} material={MAT.beige} castShadow receiveShadow>
          <boxGeometry args={[0.62, 0.7, 0.42]} />
        </mesh>
        {/* tied-off seam ridges top and bottom */}
        <mesh position={[0, 0.66, 0]} material={MAT.beige} castShadow>
          <boxGeometry args={[0.5, 0.1, 0.16]} />
        </mesh>
      </group>
    </group>
  );
}
