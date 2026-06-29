"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  MAT,
  Column,
  Motor,
  GearHousing,
  ControlPanel,
  IndicatorLight,
  Bolt,
  rubberSheetMaterial,
} from "./kit";
import type { MachineModelProps } from "./types";

// Cooling conveyor: a long, low horizontal belt conveyor carrying the cured
// rubber sheet slowly along +X. Heavy steel side rails on stubby legs, a dense
// bank of conveyor rollers spanning the bed, side guide rails, and overhead
// cooling fans (a housing ring + spinning blades) that draw heat off the sheet.
// The travelling sheet picks up a cool blue tint as it moves down the line.

const BED_LEN = 6.2; // length of the conveyor bed along X
const BED_HALF = BED_LEN / 2;
const BED_W = 1.7; // belt width along Z
const RAIL_Z = BED_W / 2 + 0.06; // side rail centre line
const DECK_Y = 0.92; // height of the roller tops / sheet plane
const N_ROLLERS = 13;
const ROLLER_R = 0.13;
const ROLLER_LEN = BED_W - 0.04;

// ── A single conveyor roller spanning the bed (axis along Z), with caps. ──────
function ConveyorRoller({ x, spinRef }: { x: number; spinRef: React.RefObject<THREE.Group> }) {
  return (
    <group position={[x, DECK_Y, 0]} rotation={[Math.PI / 2, 0, 0]} ref={spinRef}>
      <mesh material={MAT.darkPolished} castShadow receiveShadow>
        <cylinderGeometry args={[ROLLER_R, ROLLER_R, ROLLER_LEN, 18]} />
      </mesh>
      {[ROLLER_LEN / 2, -ROLLER_LEN / 2].map((y, i) => (
        <mesh key={i} position={[0, y, 0]} material={MAT.bodyPaintDark}>
          <cylinderGeometry args={[ROLLER_R * 1.18, ROLLER_R * 1.18, 0.05, 14]} />
        </mesh>
      ))}
    </group>
  );
}

// ── Cooling fan: a steel housing ring, a back grille hub and spinning blades. ─
function CoolingFan({
  position,
  bladeRef,
  r = 0.46,
}: {
  position: [number, number, number];
  bladeRef: React.RefObject<THREE.Group>;
  r?: number;
}) {
  // Fan faces down (-Y) onto the sheet: build in local XZ plane, blades spin
  // about the Y axis of the local group.
  const bladeMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#1d2228", roughness: 0.5, metalness: 0.55 }),
    [],
  );
  return (
    <group position={position}>
      {/* shroud ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]} material={MAT.lightSteel} castShadow>
        <torusGeometry args={[r, 0.07, 10, 28]} />
      </mesh>
      {/* protective grille bars across the underside */}
      {[-0.5, -0.17, 0.17, 0.5].map((f, i) => (
        <mesh key={i} position={[f * r, -0.04, 0]} material={MAT.frameSteel}>
          <boxGeometry args={[0.025, 0.025, r * 1.85]} />
        </mesh>
      ))}
      {/* spinning blade assembly */}
      <group ref={bladeRef}>
        <mesh material={MAT.bodyPaintDark} castShadow>
          <cylinderGeometry args={[0.1, 0.1, 0.14, 16]} />
        </mesh>
        {Array.from({ length: 5 }).map((_, i) => {
          const a = (i / 5) * Math.PI * 2;
          return (
            <mesh
              key={i}
              position={[Math.cos(a) * r * 0.5, 0, Math.sin(a) * r * 0.5]}
              rotation={[0.5, -a, 0]}
              material={bladeMat}
              castShadow
            >
              <boxGeometry args={[r * 0.78, 0.02, 0.2]} />
            </mesh>
          );
        })}
      </group>
      {/* short stub motor on top of the fan */}
      <mesh position={[0, 0.16, 0]} material={MAT.blackPlastic} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 0.18, 14]} />
      </mesh>
    </group>
  );
}

export function CoolingConveyorModel({ active, transforming, progress = 0, done }: MachineModelProps) {
  const rollerRefs = useRef<React.RefObject<THREE.Group>[]>(
    Array.from({ length: N_ROLLERS }, () => ({ current: null })),
  );
  const fanRefs = useRef<React.RefObject<THREE.Group>[]>(
    Array.from({ length: 3 }, () => ({ current: null })),
  );
  const sheetRef = useRef<THREE.Group>(null);

  // Sheet colour: starts warm (just-cured, slightly brown-black) and cools to a
  // clean blue-tinted dark as it travels the conveyor. Drive by progress.
  const sheetColor = useMemo(() => {
    const t = done ? 1 : THREE.MathUtils.clamp(progress, 0, 1);
    const warm = new THREE.Color("#2a2420"); // warm just-off-the-press
    const cool = new THREE.Color("#171b22"); // cooled, faint blue cast
    return "#" + warm.clone().lerp(cool, t).getHexString();
  }, [progress, done]);
  const sheetMat = useMemo(() => rubberSheetMaterial(sheetColor, 0.46), [sheetColor]);

  useFrame((_, dt) => {
    const rollSpeed = transforming ? 1.0 : active ? 0.45 : 0.08;
    for (const r of rollerRefs.current) {
      if (r.current) r.current.rotation.y += dt * rollSpeed;
    }
    const fanSpeed = active || transforming ? 9 : 0.6;
    for (const f of fanRefs.current) {
      if (f.current) f.current.rotation.y += dt * fanSpeed;
    }
    // sheet creeps slowly along +X and loops back to the head of the belt
    if (sheetRef.current) {
      const creep = transforming ? 0.5 : active ? 0.22 : 0.04;
      let x = sheetRef.current.position.x + dt * creep;
      if (x > BED_HALF - 1.0) x = -BED_HALF + 1.0;
      sheetRef.current.position.x = x;
    }
  });

  const on = active || transforming;

  return (
    <group>
      {/* ── Stubby legs (low conveyor) ──────────────────────────────── */}
      {[-BED_HALF + 0.5, -1.4, 1.4, BED_HALF - 0.5].map((x) =>
        [RAIL_Z, -RAIL_Z].map((z) => (
          <group key={`leg-${x}-${z}`}>
            <Column position={[x, 0, z]} height={DECK_Y - 0.14} thickness={0.16} material={MAT.bodyPaintDark} />
            {/* foot pad */}
            <mesh position={[x, 0.02, z]} material={MAT.frameSteel} castShadow>
              <boxGeometry args={[0.28, 0.04, 0.28]} />
            </mesh>
          </group>
        )),
      )}
      {/* cross braces low between leg pairs */}
      {[-BED_HALF + 0.5, -1.4, 1.4, BED_HALF - 0.5].map((x) => (
        <mesh key={`brace-${x}`} position={[x, 0.32, 0]} material={MAT.frameSteel} castShadow>
          <boxGeometry args={[0.1, 0.1, BED_W + 0.1]} />
        </mesh>
      ))}

      {/* ── Side rails (heavy steel beams running the length) ───────── */}
      {[RAIL_Z, -RAIL_Z].map((z) => (
        <mesh key={`rail-${z}`} position={[0, DECK_Y - 0.04, z]} material={MAT.bodyPaint} castShadow receiveShadow>
          <boxGeometry args={[BED_LEN, 0.26, 0.14]} />
        </mesh>
      ))}
      {/* bolt heads along the near side rail so length reads */}
      {Array.from({ length: 7 }).map((_, i) => (
        <Bolt key={`rb-${i}`} position={[-BED_HALF + 0.6 + i * (BED_LEN - 1.2) / 6, DECK_Y - 0.04, RAIL_Z + 0.08]} r={0.035} />
      ))}

      {/* ── Conveyor rollers across the bed ─────────────────────────── */}
      {Array.from({ length: N_ROLLERS }).map((_, i) => {
        const x = -BED_HALF + 0.45 + i * (BED_LEN - 0.9) / (N_ROLLERS - 1);
        return <ConveyorRoller key={`roll-${i}`} x={x} spinRef={rollerRefs.current[i]} />;
      })}

      {/* ── Side guide rails (low raised lips that keep the sheet centred) ── */}
      {[RAIL_Z - 0.02, -RAIL_Z + 0.02].map((z, idx) => (
        <group key={`guide-${idx}`}>
          <mesh position={[0, DECK_Y + 0.16, z]} material={MAT.lightSteel} castShadow>
            <boxGeometry args={[BED_LEN - 0.3, 0.06, 0.05]} />
          </mesh>
          {/* small upright stanchions holding the guide rail */}
          {Array.from({ length: 6 }).map((_, i) => {
            const gx = -BED_HALF + 0.7 + i * (BED_LEN - 1.4) / 5;
            return (
              <mesh key={i} position={[gx, DECK_Y + 0.08, z]} material={MAT.frameSteel}>
                <cylinderGeometry args={[0.025, 0.025, 0.18, 8]} />
              </mesh>
            );
          })}
        </group>
      ))}

      {/* ── Travelling cured sheet lying flat on the rollers ────────── */}
      <group ref={sheetRef} position={[-BED_HALF + 1.0, DECK_Y + ROLLER_R + 0.03, 0]}>
        <mesh material={sheetMat} castShadow receiveShadow>
          <boxGeometry args={[2.4, 0.05, BED_W - 0.25]} />
        </mesh>
      </group>
      {/* a second sheet section trailing, so the belt looks continuously loaded */}
      {on && (
        <mesh position={[BED_HALF - 1.6, DECK_Y + ROLLER_R + 0.03, 0]} material={sheetMat} castShadow receiveShadow>
          <boxGeometry args={[2.0, 0.05, BED_W - 0.25]} />
        </mesh>
      )}

      {/* ── Overhead gantry posts + beam carrying the cooling fans ──── */}
      {[-2.0, 2.0].map((x) =>
        [RAIL_Z, -RAIL_Z].map((z) => (
          <Column key={`gpost-${x}-${z}`} position={[x, DECK_Y + 0.1, z]} height={1.55} thickness={0.1} material={MAT.frameSteel} />
        )),
      )}
      {[RAIL_Z, -RAIL_Z].map((z) => (
        <mesh key={`gbeam-${z}`} position={[0, DECK_Y + 1.62, z]} material={MAT.frameSteel} castShadow>
          <boxGeometry args={[4.6, 0.1, 0.1]} />
        </mesh>
      ))}

      {/* ── Three cooling fans hanging from the gantry over the sheet ── */}
      {[-1.5, 0, 1.5].map((x, i) => (
        <group key={`fan-${i}`}>
          {/* short drop bracket to the gantry beam */}
          <mesh position={[x, DECK_Y + 1.42, 0]} material={MAT.frameSteel}>
            <boxGeometry args={[0.06, 0.36, 0.06]} />
          </mesh>
          <CoolingFan position={[x, DECK_Y + 1.18, 0]} bladeRef={fanRefs.current[i]} r={0.46} />
        </group>
      ))}

      {/* ── Drive end: gear housing + motor turning the conveyor ────── */}
      <GearHousing position={[BED_HALF + 0.05, DECK_Y - 0.1, 0]} size={[0.5, 0.7, BED_W * 0.7]} material={MAT.bodyPaintDark} />
      <Motor position={[BED_HALF + 0.45, DECK_Y - 0.1, 0]} length={0.8} radius={0.26} axis="z" />

      {/* ── Operator-side control panel + status lamps facing +Z ───── */}
      <ControlPanel position={[-BED_HALF - 0.2, 0, RAIL_Z + 0.6]} rotation={[0, 0.35, 0]} on={on} />
      <group position={[0, DECK_Y + 0.34, RAIL_Z + 0.04]}>
        <IndicatorLight position={[-0.8, 0, 0]} color="#38bdf8" on={on} />
        <IndicatorLight position={[-0.55, 0, 0]} color={done ? "#34d399" : "#64748b"} on={done || on} />
      </group>
    </group>
  );
}
