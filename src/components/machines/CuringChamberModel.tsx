"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  MAT,
  BaseFrame,
  ControlPanel,
  IndicatorLight,
  Pipe,
  Bolt,
  RubberSheet,
  rubberSheetMaterial,
} from "./kit";
import type { MachineModelProps } from "./types";

// Curing / vulcanization autoclave: a large horizontal cylindrical pressure
// vessel resting on two curved saddle supports, with a round hinged domed door
// on the +X (exit) end carrying a locking ring and bolts, pressure gauges and
// steam/coolant pipes running over the top, an access ladder, and the sheet
// entering one end uncured and leaving the other cured. Long axis runs along X.
const VESSEL_R = 1.1;
const VESSEL_LEN = 3.0;
const VESSEL_Y = 1.65;
const VESSEL_X0 = -VESSEL_LEN / 2; // inlet (back) face centre
const VESSEL_X1 = VESSEL_LEN / 2; // exit (door) face centre

/** Curved steel saddle cradle that the cylindrical shell rests in. */
function Saddle({ x }: { x: number }) {
  return (
    <group position={[x, 0, 0]}>
      {/* heavy plate cradle hugging the underside of the vessel */}
      <mesh
        position={[0, VESSEL_Y, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        material={MAT.bodyPaint}
        castShadow
        receiveShadow
      >
        <cylinderGeometry
          args={[VESSEL_R + 0.12, VESSEL_R + 0.12, 0.5, 28, 1, true, Math.PI * 0.18, Math.PI * 0.64]}
        />
      </mesh>
      {/* support web plate down to the base */}
      <mesh position={[0, (VESSEL_Y - VESSEL_R) / 2 + 0.1, 0]} material={MAT.bodyPaintDark} castShadow receiveShadow>
        <boxGeometry args={[0.16, VESSEL_Y - VESSEL_R + 0.2, 1.6]} />
      </mesh>
      {/* side gusset plates */}
      {[0.6, -0.6].map((z) => (
        <mesh key={z} position={[0, (VESSEL_Y - VESSEL_R) / 2 + 0.1, z]} material={MAT.frameSteel} castShadow>
          <boxGeometry args={[0.1, VESSEL_Y - VESSEL_R, 0.5]} />
        </mesh>
      ))}
      {/* foot pad */}
      <mesh position={[0, 0.12, 0]} material={MAT.bodyPaintDark} castShadow receiveShadow>
        <boxGeometry args={[0.7, 0.24, 1.9]} />
      </mesh>
      {[0.55, -0.55].map((z) => (
        <Bolt key={z} position={[0, 0.24, z]} r={0.05} />
      ))}
    </group>
  );
}

/** A small round pressure gauge dial with a needle, facing +Z. */
function Gauge({
  position,
  lit,
  rot = [0, 0, 0],
}: {
  position: [number, number, number];
  lit: number;
  rot?: [number, number, number];
}) {
  const needle = useRef<THREE.Group>(null);
  useFrame(() => {
    if (needle.current) {
      // needle sweeps with pressure (lit 0..1 → about 220° of travel)
      needle.current.rotation.z = Math.PI * 0.6 - lit * Math.PI * 1.2;
    }
  });
  return (
    <group position={position} rotation={rot}>
      {/* body */}
      <mesh rotation={[Math.PI / 2, 0, 0]} material={MAT.lightSteel} castShadow>
        <cylinderGeometry args={[0.14, 0.14, 0.08, 18]} />
      </mesh>
      {/* dial face */}
      <mesh position={[0, 0, 0.045]} rotation={[Math.PI / 2, 0, 0]} material={MAT.beige}>
        <cylinderGeometry args={[0.115, 0.115, 0.01, 18]} />
      </mesh>
      {/* needle */}
      <group ref={needle} position={[0, 0, 0.055]}>
        <mesh position={[0.04, 0, 0]} material={MAT.hazardRed}>
          <boxGeometry args={[0.1, 0.012, 0.008]} />
        </mesh>
      </group>
      <mesh position={[0, 0, 0.058]} material={MAT.blackPlastic}>
        <sphereGeometry args={[0.018, 10, 10]} />
      </mesh>
    </group>
  );
}

export function CuringChamberModel({ active, transforming, progress = 0, done }: MachineModelProps) {
  const door = useRef<THREE.Group>(null);
  const fan = useRef<THREE.Group>(null);

  const on = active || transforming;
  // heat level: ramps with progress while transforming, holds warm when done
  const heat = done ? 0.55 : transforming ? 0.25 + progress * 0.75 : active ? 0.12 : 0;
  const pulse = useRef(0);

  // Emissive heat-band material on the vessel mid-section. Intensity follows heat.
  const heatMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#3a2a1c",
        emissive: "#ff6a18",
        emissiveIntensity: 0,
        roughness: 0.55,
        metalness: 0.6,
      }),
    [],
  );

  // Shell paint for the main pressure vessel.
  const shellMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#645c4e", roughness: 0.34, metalness: 0.82 }),
    [],
  );

  // Exiting cured sheet: rebuilt only when the discrete stage changes, not every
  // frame as progress animates (avoids per-frame material allocation).
  const exitSheetMat = useMemo(
    () => rubberSheetMaterial(done || transforming ? "#161618" : "#1c1c20", done ? 0.42 : 0.5),
    [done, transforming],
  );

  useFrame((_, dt) => {
    pulse.current += dt;
    // door cracks open slightly when the cure is done (unloading)
    const targetDoor = done ? -0.55 : 0;
    if (door.current) {
      door.current.rotation.y += (targetDoor - door.current.rotation.y) * Math.min(1, dt * 2.5);
    }
    // internal circulation fan: fast when curing, idle otherwise
    const fanSpeed = transforming ? 5.5 : active ? 1.4 : 0.15;
    if (fan.current) fan.current.rotation.x += dt * fanSpeed;
    // glowing heat band, with a gentle live shimmer while curing
    const shimmer = transforming ? 0.85 + Math.sin(pulse.current * 4) * 0.15 : 1;
    heatMat.emissiveIntensity = heat * 2.4 * shimmer;
  });

  // gauge indicator light pulses while pressurised
  const gaugePulse = transforming ? (Math.sin(pulse.current * 5) > 0 ? 1 : 0) : 0;

  return (
    <group>
      {/* steel skid base under the saddles */}
      <BaseFrame size={[3.4, 0.32, 2.2]} />

      {/* ── main horizontal pressure vessel shell ───────────────────────── */}
      <group position={[0, VESSEL_Y, 0]}>
        <mesh rotation={[0, 0, Math.PI / 2]} material={shellMat} castShadow receiveShadow>
          <cylinderGeometry args={[VESSEL_R, VESSEL_R, VESSEL_LEN, 40]} />
        </mesh>

        {/* emissive heat band around the mid-section (curing glow) */}
        <mesh rotation={[0, 0, Math.PI / 2]} material={heatMat}>
          <cylinderGeometry args={[VESSEL_R + 0.012, VESSEL_R + 0.012, VESSEL_LEN * 0.5, 40, 1, true]} />
        </mesh>

        {/* reinforcing ring ribs around the shell so the cylinder reads */}
        {[-0.95, -0.32, 0.32, 0.95].map((x) => (
          <mesh key={x} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={MAT.frameSteel} castShadow>
            <torusGeometry args={[VESSEL_R + 0.03, 0.05, 10, 40]} />
          </mesh>
        ))}

        {/* fixed (back / inlet) domed head */}
        <mesh
          position={[VESSEL_X0, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
          material={shellMat}
          castShadow
          receiveShadow
        >
          <sphereGeometry args={[VESSEL_R, 32, 18, 0, Math.PI * 2, 0, Math.PI / 2]} />
        </mesh>
        {/* inlet throat where the uncured sheet enters */}
        <mesh position={[VESSEL_X0 - 0.18, -0.15, 0]} rotation={[0, 0, Math.PI / 2]} material={MAT.bodyPaintDark} castShadow>
          <boxGeometry args={[0.3, 0.7, 1.6]} />
        </mesh>
      </group>

      {/* internal circulation fan, visible through the open door when done */}
      <group ref={fan} position={[VESSEL_X1 - 0.35, VESSEL_Y, 0]} rotation={[0, 0, Math.PI / 2]}>
        <mesh material={MAT.darkPolished}>
          <cylinderGeometry args={[0.1, 0.1, 0.18, 12]} />
        </mesh>
        {Array.from({ length: 4 }).map((_, i) => {
          const a = (i / 4) * Math.PI * 2;
          return (
            <mesh
              key={i}
              position={[0, 0, 0]}
              rotation={[a, 0.4, 0]}
              material={MAT.darkPolished}
              castShadow
            >
              <boxGeometry args={[0.55, 0.02, 0.18]} />
            </mesh>
          );
        })}
      </group>

      {/* ── hinged domed door on the +X (exit) end ──────────────────────── */}
      {/* hinge pivots about a point on the +Z edge of the opening */}
      <group position={[VESSEL_X1, VESSEL_Y, VESSEL_R]}>
        <group ref={door} position={[0, 0, -VESSEL_R]}>
          {/* locking ring flange (slightly larger than the shell) */}
          <mesh position={[0.04, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={MAT.frameSteel} castShadow>
            <torusGeometry args={[VESSEL_R + 0.06, 0.08, 12, 44]} />
          </mesh>
          {/* the domed door cap */}
          <mesh position={[0.05, 0, 0]} rotation={[0, 0, -Math.PI / 2]} material={shellMat} castShadow receiveShadow>
            <sphereGeometry args={[VESSEL_R + 0.02, 32, 18, 0, Math.PI * 2, 0, Math.PI / 2.1]} />
          </mesh>
          {/* ring of swing bolts around the door rim */}
          {Array.from({ length: 14 }).map((_, i) => {
            const a = (i / 14) * Math.PI * 2;
            return (
              <mesh
                key={i}
                position={[0.06, Math.cos(a) * (VESSEL_R + 0.06), Math.sin(a) * (VESSEL_R + 0.06)]}
                rotation={[0, 0, Math.PI / 2]}
                material={MAT.lightSteel}
                castShadow
              >
                <cylinderGeometry args={[0.045, 0.045, 0.14, 8]} />
              </mesh>
            );
          })}
          {/* central hand-wheel for the door clamp */}
          <group position={[0.55, 0, 0]}>
            <mesh rotation={[0, 0, Math.PI / 2]} material={MAT.bodyPaintDark} castShadow>
              <torusGeometry args={[0.26, 0.035, 10, 24]} />
            </mesh>
            {[0, Math.PI / 2].map((a) => (
              <mesh key={a} rotation={[a, 0, Math.PI / 2]} material={MAT.bodyPaintDark}>
                <cylinderGeometry args={[0.025, 0.025, 0.52, 8]} />
              </mesh>
            ))}
            <mesh rotation={[0, 0, Math.PI / 2]} material={MAT.hazardRed}>
              <cylinderGeometry args={[0.07, 0.07, 0.16, 12]} />
            </mesh>
          </group>
        </group>
        {/* hinge knuckle on the frame */}
        <mesh position={[0.1, 0, 0]} material={MAT.frameSteel} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.6, 12]} />
        </mesh>
      </group>

      {/* ── saddle supports ─────────────────────────────────────────────── */}
      <Saddle x={-0.95} />
      <Saddle x={0.95} />

      {/* ── steam / coolant manifold over the top ───────────────────────── */}
      {/* main run along the crown of the vessel */}
      <Pipe from={[-1.5, VESSEL_Y + VESSEL_R + 0.16, 0.42]} to={[1.2, VESSEL_Y + VESSEL_R + 0.16, 0.42]} radius={0.07} material={MAT.coolant} />
      {/* branches diving into the shell */}
      {[-1.0, 0, 1.0].map((x) => (
        <Pipe
          key={x}
          from={[x, VESSEL_Y + VESSEL_R + 0.16, 0.42]}
          to={[x, VESSEL_Y + VESSEL_R - 0.12, 0.2]}
          radius={0.045}
          material={MAT.coolant}
        />
      ))}
      {/* steam supply riser at the inlet end */}
      <Pipe from={[-1.5, VESSEL_Y + VESSEL_R + 0.16, 0.42]} to={[-1.5, 0.4, 0.42]} radius={0.07} material={MAT.copper} />
      {/* safety relief stack on the crown */}
      <Pipe from={[0.6, VESSEL_Y + VESSEL_R - 0.05, -0.3]} to={[0.6, VESSEL_Y + VESSEL_R + 0.6, -0.3]} radius={0.05} material={MAT.lightSteel} />
      <mesh position={[0.6, VESSEL_Y + VESSEL_R + 0.62, -0.3]} material={MAT.frameSteel} castShadow>
        <cylinderGeometry args={[0.08, 0.05, 0.14, 12]} />
      </mesh>

      {/* ── pressure gauges + pulsing indicator lights (operator side) ──── */}
      <group position={[-0.7, VESSEL_Y + VESSEL_R - 0.05, 0.78]}>
        <Gauge position={[0, 0.25, 0.18]} lit={heat} rot={[-0.35, 0, 0]} />
        <Gauge position={[0.42, 0.18, 0.16]} lit={heat * 0.8} rot={[-0.35, 0, 0]} />
        {/* gauge backing plate */}
        <mesh position={[0.2, 0.22, 0.08]} rotation={[-0.35, 0, 0]} material={MAT.bodyPaintDark} castShadow>
          <boxGeometry args={[0.85, 0.5, 0.05]} />
        </mesh>
      </group>

      {/* indicator light bank on the shell, pulsing while pressurised */}
      <group position={[0.2, VESSEL_Y + 0.55, VESSEL_R - 0.05]}>
        <mesh material={MAT.blackPlastic} castShadow>
          <boxGeometry args={[0.5, 0.16, 0.1]} />
        </mesh>
        <IndicatorLight position={[-0.15, 0, 0.07]} color="#34d399" on={on} r={0.04} />
        <IndicatorLight position={[0, 0, 0.07]} color="#ff8c2b" on={transforming && gaugePulse > 0.5} r={0.04} />
        <IndicatorLight position={[0.15, 0, 0.07]} color="#cf3a2c" on={done} r={0.04} />
      </group>

      {/* ── access ladder / rail up the inlet end (operator-facing +Z) ──── */}
      <group position={[VESSEL_X0 - 0.05, 0, 0.85]}>
        {[0.2, -0.2].map((z) => (
          <mesh key={z} position={[0, VESSEL_Y * 0.55, z]} material={MAT.safety} castShadow>
            <cylinderGeometry args={[0.035, 0.035, VESSEL_Y * 1.1, 10]} />
          </mesh>
        ))}
        {[0.3, 0.75, 1.2, 1.65].map((y) => (
          <mesh key={y} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]} material={MAT.safety}>
            <cylinderGeometry args={[0.025, 0.025, 0.4, 8]} />
          </mesh>
        ))}
      </group>

      {/* ── material: uncured sheet entering, cured sheet exiting ───────── */}
      {/* uncured compound feeding in at the inlet (rough, near-black matte) */}
      <RubberSheet
        position={[VESSEL_X0 - 0.95, VESSEL_Y - 0.55, 0]}
        size={[1.5, 0.06, 1.3]}
        color="#1c1c20"
        roughness={0.82}
      />
      {/* cured sheet leaving past the door (cleaner, slightly darker) */}
      <mesh
        position={[VESSEL_X1 + 1.05, VESSEL_Y - 0.55, 0]}
        material={exitSheetMat}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[1.5, 0.06, 1.3]} />
      </mesh>

      {/* control cabinet on the operator side */}
      <ControlPanel position={[2.6, 0, 1.4]} rotation={[0, -0.5, 0]} on={on} />
    </group>
  );
}
