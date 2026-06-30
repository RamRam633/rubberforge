"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  MAT,
  BaseFrame,
  Column,
  ControlPanel,
  IndicatorLight,
  Bolt,
  Pipe,
  rubberSheetMaterial,
} from "./kit";
import type { MachineModelProps } from "./types";

// Inspection / QA station: an open lab-like bench holding a flat sample coupon,
// lit from above by an emissive inspection lamp on an arm. A thickness scanner
// gantry spans the bench with a sensor head that sweeps along the coupon (Z),
// a hardness tester column beside the bench with a probe that dips down to the
// coupon, and a pass/fail stack light tower. Bench long axis runs along X so
// material reads as flowing left -> right through the cell.

const BENCH_TOP_Y = 1.0; // height of the bench worktop surface
const BENCH_W = 3.2; // bench length along X
const BENCH_D = 1.7; // bench depth along Z
const COUPON_Y = BENCH_TOP_Y + 0.06;

// Emissive material for the overhead inspection lamp panel.
function useLampMaterial(on: boolean) {
  return useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#fbf6e6",
        emissive: "#fff4d6",
        emissiveIntensity: on ? 2.6 : 0.25,
        roughness: 0.4,
      }),
    [on],
  );
}

export function InspectionStationModel({ active, transforming, progress = 0, done }: MachineModelProps) {
  const scanner = useRef<THREE.Group>(null);
  const probe = useRef<THREE.Group>(null);
  const fan = useRef<THREE.Group>(null);

  const on = Boolean(active || transforming || done);
  const lampMat = useLampMaterial(on);

  // Coupon colour: a clean finished cured sheet, getting slightly cleaner/darker
  // as inspection completes.
  const couponMat = useMemo(
    () => rubberSheetMaterial(done ? "#15161a" : "#1b1714", 0.42 - progress * 0.1),
    [done, progress],
  );

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;

    // Scanner head sweeps across the coupon along Z. Fast when transforming,
    // gentle drift when active, parked at the near edge when idle.
    if (scanner.current) {
      if (transforming) {
        scanner.current.position.z = Math.sin(t * 2.4) * 0.62;
      } else if (active) {
        scanner.current.position.z = Math.sin(t * 0.7) * 0.5;
      } else {
        scanner.current.position.z += (-0.62 - scanner.current.position.z) * Math.min(1, dt * 3);
      }
    }

    // Hardness probe dips down to touch the coupon then lifts. Quick taps while
    // transforming, occasional press when active, lifted clear when idle.
    if (probe.current) {
      let dip = 0;
      if (transforming) {
        dip = Math.max(0, Math.sin(t * 3.1)) * 0.34;
      } else if (active) {
        dip = Math.max(0, Math.sin(t * 0.9)) * 0.18;
      }
      probe.current.position.y = -dip;
    }

    // Small cooling fan on the analyser cabinet for life.
    if (fan.current) {
      const fanSpeed = transforming ? 9 : active ? 3 : 0.4;
      fan.current.rotation.z += dt * fanSpeed;
    }
  });

  // Pass/fail stack light logic driven by progress thresholds.
  const redOn = on && progress < 0.34 && !done;
  const amberOn = on && progress >= 0.34 && progress < 0.78 && !done;
  const greenOn = done || (on && progress >= 0.78);

  return (
    <group>
      {/* ── Floor plinth the whole cell stands on ─────────────────────── */}
      <BaseFrame size={[4.4, 0.34, 2.4]} />

      {/* ── QA bench: worktop on four legs, operator-facing apron ─────── */}
      {/* legs */}
      {[
        [BENCH_W / 2 - 0.18, BENCH_D / 2 - 0.16],
        [-(BENCH_W / 2 - 0.18), BENCH_D / 2 - 0.16],
        [BENCH_W / 2 - 0.18, -(BENCH_D / 2 - 0.16)],
        [-(BENCH_W / 2 - 0.18), -(BENCH_D / 2 - 0.16)],
      ].map(([lx, lz], i) => (
        <Column
          key={i}
          position={[lx, 0.34, lz]}
          height={BENCH_TOP_Y - 0.34}
          thickness={0.16}
          material={MAT.lightSteel}
        />
      ))}
      {/* worktop */}
      <mesh position={[0, BENCH_TOP_Y, 0]} material={MAT.bodyPaint} castShadow receiveShadow>
        <boxGeometry args={[BENCH_W, 0.1, BENCH_D]} />
      </mesh>
      {/* stainless inspection surface inlay */}
      <mesh position={[0, BENCH_TOP_Y + 0.052, 0.05]} material={MAT.polished} receiveShadow>
        <boxGeometry args={[BENCH_W - 0.5, 0.02, BENCH_D - 0.35]} />
      </mesh>
      {/* front apron with bolts, operator side (+Z) */}
      <mesh position={[0, BENCH_TOP_Y - 0.22, BENCH_D / 2 - 0.04]} material={MAT.bodyPaintDark} castShadow>
        <boxGeometry args={[BENCH_W - 0.1, 0.34, 0.06]} />
      </mesh>
      {[-1.2, -0.4, 0.4, 1.2].map((bx) => (
        <Bolt key={bx} position={[bx, BENCH_TOP_Y - 0.22, BENCH_D / 2 - 0.005]} r={0.04} />
      ))}

      {/* ── Sample coupon under inspection on the bench ──────────────── */}
      <mesh position={[0, COUPON_Y, 0.05]} material={couponMat} castShadow receiveShadow>
        <boxGeometry args={[1.5, 0.05, 0.9]} />
      </mesh>
      {/* a small offcut coupon staged for the hardness tester */}
      <mesh position={[-1.05, COUPON_Y - 0.005, -0.45]} material={couponMat} castShadow>
        <boxGeometry args={[0.4, 0.05, 0.4]} />
      </mesh>

      {/* ── Thickness scanner gantry spanning the bench across Z ─────── */}
      {/* two uprights at either end of the bench (along X) */}
      {[BENCH_W / 2 - 0.12, -(BENCH_W / 2 - 0.12)].map((ux) => (
        <group key={ux}>
          <mesh position={[ux, BENCH_TOP_Y + 0.78, 0]} material={MAT.frameSteel} castShadow>
            <boxGeometry args={[0.16, 1.5, 0.18]} />
          </mesh>
          <mesh position={[ux, BENCH_TOP_Y + 0.06, 0]} material={MAT.bodyPaintDark} castShadow>
            <boxGeometry args={[0.24, 0.12, 0.24]} />
          </mesh>
        </group>
      ))}
      {/* the cross beam carrying the linear rail (runs along X) */}
      <mesh position={[0, BENCH_TOP_Y + 1.52, 0]} material={MAT.lightSteel} castShadow>
        <boxGeometry args={[BENCH_W - 0.06, 0.16, 0.3]} />
      </mesh>
      {/* linear guide rail along the front face of the beam */}
      <mesh position={[0, BENCH_TOP_Y + 1.42, 0.16]} material={MAT.darkPolished}>
        <boxGeometry args={[BENCH_W - 0.2, 0.05, 0.04]} />
      </mesh>

      {/* scanner carriage + sensor head that travels down to the coupon (moves in Z) */}
      <group ref={scanner} position={[0, BENCH_TOP_Y + 1.42, 0]}>
        {/* carriage block riding the beam */}
        <mesh position={[0, 0, 0]} material={MAT.bodyPaint} castShadow>
          <boxGeometry args={[0.42, 0.3, 0.34]} />
        </mesh>
        {/* vertical post dropping toward the coupon */}
        <mesh position={[0, -0.62, 0]} material={MAT.lightSteel} castShadow>
          <boxGeometry args={[0.1, 0.95, 0.1]} />
        </mesh>
        {/* sensor head body */}
        <mesh position={[0, -1.12, 0]} material={MAT.blackPlastic} castShadow>
          <boxGeometry args={[0.26, 0.2, 0.26]} />
        </mesh>
        {/* emissive measuring spot / laser dot facing down */}
        <IndicatorLight position={[0, -1.24, 0]} color="#2ba6c4" on={on} r={0.05} />
        {/* status light on the carriage */}
        <IndicatorLight position={[0, 0.18, 0.18]} color={on ? "#2ba6c4" : "#1f1814"} on={on} r={0.035} />
      </group>

      {/* ── Overhead inspection lamp on a jointed arm ────────────────── */}
      {/* arm post rises from the back-left corner of the bench */}
      <Column
        position={[-(BENCH_W / 2 - 0.1), BENCH_TOP_Y, -(BENCH_D / 2 - 0.1)]}
        height={1.7}
        thickness={0.12}
        material={MAT.frameSteel}
      />
      {/* horizontal arm reaching over the centre of the coupon */}
      <mesh
        position={[-(BENCH_W / 2 - 0.1) + 0.75, BENCH_TOP_Y + 1.66, -(BENCH_D / 2 - 0.1) + 0.4]}
        material={MAT.lightSteel}
        castShadow
      >
        <boxGeometry args={[1.6, 0.09, 0.09]} />
      </mesh>
      {/* lamp housing + emissive panel angled down at the coupon */}
      <group position={[0.15, BENCH_TOP_Y + 1.5, 0.0]} rotation={[0.32, 0, 0]}>
        <mesh material={MAT.bodyPaintDark} castShadow>
          <boxGeometry args={[1.3, 0.14, 0.5]} />
        </mesh>
        <mesh position={[0, -0.08, 0]} material={lampMat}>
          <boxGeometry args={[1.18, 0.03, 0.4]} />
        </mesh>
      </group>

      {/* ── Hardness tester stand beside the bench (operator side, +Z) ─ */}
      <group position={[-1.05, 0, BENCH_D / 2 - 0.05]}>
        {/* heavy base */}
        <mesh position={[0, BENCH_TOP_Y - 0.42, 0]} material={MAT.bodyPaintDark} castShadow receiveShadow>
          <boxGeometry args={[0.5, 0.16, 0.5]} />
        </mesh>
        {/* column */}
        <mesh position={[0.14, BENCH_TOP_Y + 0.32, -0.06]} material={MAT.frameSteel} castShadow>
          <cylinderGeometry args={[0.06, 0.06, 1.5, 14]} />
        </mesh>
        {/* head / dial gauge housing cantilevered over the offcut coupon */}
        <mesh position={[-0.06, BENCH_TOP_Y + 0.95, -0.06]} material={MAT.bodyPaint} castShadow>
          <boxGeometry args={[0.46, 0.34, 0.34]} />
        </mesh>
        {/* round dial gauge face on the operator-facing front */}
        <mesh position={[-0.06, BENCH_TOP_Y + 0.95, 0.12]} rotation={[Math.PI / 2, 0, 0]} material={MAT.polished}>
          <cylinderGeometry args={[0.13, 0.13, 0.04, 20]} />
        </mesh>
        <IndicatorLight position={[-0.06, BENCH_TOP_Y + 0.95, 0.15]} color="#2ba6c4" on={on} r={0.03} />
        {/* descending probe assembly that dips to touch the coupon */}
        <group ref={probe} position={[-0.06, BENCH_TOP_Y + 0.74, -0.06]}>
          <mesh position={[0, 0, 0]} material={MAT.lightSteel} castShadow>
            <cylinderGeometry args={[0.035, 0.035, 0.34, 12]} />
          </mesh>
          {/* indenter tip */}
          <mesh position={[0, -0.2, 0]} material={MAT.darkPolished} castShadow>
            <coneGeometry args={[0.05, 0.1, 12]} />
          </mesh>
        </group>
      </group>

      {/* ── Pass / fail stack light tower ────────────────────────────── */}
      <group position={[BENCH_W / 2 + 0.42, 0, 0.2]}>
        {/* pole */}
        <mesh position={[0, BENCH_TOP_Y + 0.55, 0]} material={MAT.frameSteel} castShadow>
          <cylinderGeometry args={[0.05, 0.06, 1.5, 12]} />
        </mesh>
        {/* base flange */}
        <mesh position={[0, BENCH_TOP_Y - 0.18, 0]} material={MAT.bodyPaintDark} castShadow receiveShadow>
          <cylinderGeometry args={[0.18, 0.2, 0.1, 16]} />
        </mesh>
        {/* three stacked lens domes: red (top), amber, green (bottom) */}
        {[
          { y: BENCH_TOP_Y + 1.5, color: "#ff4d3d", lit: redOn },
          { y: BENCH_TOP_Y + 1.28, color: "#ffaa2b", lit: amberOn },
          { y: BENCH_TOP_Y + 1.06, color: "#34d399", lit: greenOn },
        ].map((seg, i) => (
          <group key={i} position={[0, seg.y, 0]}>
            <mesh material={MAT.blackPlastic}>
              <cylinderGeometry args={[0.13, 0.13, 0.02, 16]} />
            </mesh>
            <IndicatorLight position={[0, 0.09, 0]} color={seg.color} on={seg.lit} r={0.12} />
          </group>
        ))}
        {/* cap */}
        <mesh position={[0, BENCH_TOP_Y + 1.66, 0]} material={MAT.frameSteel}>
          <cylinderGeometry args={[0.1, 0.13, 0.06, 16]} />
        </mesh>
      </group>

      {/* ── Analyser / data cabinet beside the bench with a cooling fan ─ */}
      <group position={[BENCH_W / 2 + 0.5, 0, -0.7]}>
        <mesh position={[0, BENCH_TOP_Y - 0.05, 0]} material={MAT.bodyPaint} castShadow receiveShadow>
          <boxGeometry args={[0.6, 1.1, 0.7]} />
        </mesh>
        {/* fan grille on operator-facing side */}
        <group ref={fan} position={[0, BENCH_TOP_Y + 0.1, 0.36]}>
          {Array.from({ length: 4 }).map((_, i) => (
            <mesh key={i} rotation={[0, 0, (i / 4) * Math.PI]} material={MAT.darkPolished}>
              <boxGeometry args={[0.24, 0.05, 0.02]} />
            </mesh>
          ))}
          <mesh material={MAT.blackPlastic}>
            <cylinderGeometry args={[0.05, 0.05, 0.04, 12]} />
          </mesh>
        </group>
        <mesh position={[0, BENCH_TOP_Y + 0.1, 0.355]} material={MAT.frameSteel}>
          <torusGeometry args={[0.14, 0.015, 8, 20]} />
        </mesh>
      </group>

      {/* signal cable from analyser cabinet up to the scanner beam */}
      <Pipe
        from={[BENCH_W / 2 + 0.5, BENCH_TOP_Y + 0.5, -0.7]}
        to={[BENCH_W / 2 - 0.12, BENCH_TOP_Y + 1.45, 0]}
        radius={0.03}
        material={MAT.blackPlastic}
      />

      {/* ── Operator control panel ───────────────────────────────────── */}
      <ControlPanel position={[1.9, 0, BENCH_D / 2 + 0.55]} rotation={[0, -0.4, 0]} on={on} />
    </group>
  );
}
