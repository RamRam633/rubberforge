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
  IndicatorLight,
  EStop,
  Hopper,
  Bolt,
  Pipe,
  rubberSheetMaterial,
} from "./kit";
import type { MachineModelProps } from "./types";

// Internal (Banbury-style) mixer: a tall, heavy enclosed batch mixer. A big
// boxy steel mixing chamber sits on a heavy base; a top feed hopper with a
// hydraulic RAM cylinder presses stock down into the throat; two short fluted
// counter-rotating rotors churn inside (visible through a +Z inspection window);
// a motor-heavy side drive turns them; a discharge door under the chamber drops
// the darkened batch. Material reference axis runs along +X.

const CHAMBER_W = 2.4; // along X
const CHAMBER_H = 2.0;
const CHAMBER_D = 1.7; // along Z
const CHAMBER_CY = 0.55 + 1.0; // base top (~1.1) plus half chamber height
const ROTOR_R = 0.42;
const ROTOR_LEN = CHAMBER_W * 0.62;
const ROTOR_GAP = 0.5; // half-distance between the two rotor centres along X

// One short fluted rotor: a body cylinder wrapped with a few helical-looking
// blade ridges so its rotation reads clearly through the window.
function Rotor({
  spinRef,
}: {
  spinRef: React.RefObject<THREE.Group>;
}) {
  const bladeMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#6b6356", roughness: 0.35, metalness: 0.9 }),
    [],
  );
  return (
    <group ref={spinRef}>
      {/* rotor core, long axis along X */}
      <mesh rotation={[0, 0, Math.PI / 2]} material={MAT.darkPolished} castShadow>
        <cylinderGeometry args={[ROTOR_R, ROTOR_R, ROTOR_LEN, 24]} />
      </mesh>
      {/* fluted nog blades: angled bars around the body */}
      {Array.from({ length: 4 }).map((_, i) => {
        const a = (i / 4) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[0, Math.cos(a) * (ROTOR_R + 0.04), Math.sin(a) * (ROTOR_R + 0.04)]}
            rotation={[a, 0.5, 0]}
            material={bladeMat}
            castShadow
          >
            <boxGeometry args={[ROTOR_LEN * 0.92, 0.09, 0.18]} />
          </mesh>
        );
      })}
      {/* shaft stubs poking out each end */}
      {[ROTOR_LEN / 2 + 0.12, -ROTOR_LEN / 2 - 0.12].map((x, i) => (
        <mesh key={i} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={MAT.lightSteel} castShadow>
          <cylinderGeometry args={[0.12, 0.12, 0.24, 16]} />
        </mesh>
      ))}
    </group>
  );
}

export function InternalMixerModel({ active, transforming, progress = 0, done }: MachineModelProps) {
  const rotorA = useRef<THREE.Group>(null);
  const rotorB = useRef<THREE.Group>(null);
  const ram = useRef<THREE.Group>(null);
  const fan = useRef<THREE.Group>(null);

  const baseRamY = CHAMBER_CY + CHAMBER_H / 2 + 0.95; // ram piston rest height

  useFrame((_, dt) => {
    const speed = transforming ? 4.0 : active ? 1.3 : 0.18;
    if (rotorA.current) rotorA.current.rotation.x += dt * speed;
    if (rotorB.current) rotorB.current.rotation.x -= dt * speed;
    if (fan.current) fan.current.rotation.z += dt * speed * 1.6;
    // hydraulic ram presses down while transforming, eases up otherwise
    if (ram.current) {
      const target = transforming ? -0.45 : active ? -0.12 : 0;
      ram.current.position.y += (target - ram.current.position.y) * Math.min(1, dt * 4);
    }
  });

  const on = active || transforming;

  // batch colour: raw-ish toward fully blended matte black as the cure proceeds.
  // Quantized to a few discrete steps so the material is not rebuilt every frame.
  const batchT = done ? 1 : transforming ? Math.round(progress * 4) / 4 : active ? 0.25 : 0;
  const batchColor = useMemo(() => {
    const c = new THREE.Color("#2a2a2e").lerp(new THREE.Color("#151210"), THREE.MathUtils.clamp(batchT, 0, 1));
    return `#${c.getHexString()}`;
  }, [batchT]);

  const dischargeOpen = done || progress > 0.85;

  // memoised so we don't allocate a new THREE material every frame/render
  const churnMat = useMemo(() => rubberSheetMaterial(batchColor, 0.92), [batchColor]);
  const dropMat = useMemo(() => rubberSheetMaterial(batchColor, 0.95), [batchColor]);

  return (
    <group>
      {/* heavy base plinth */}
      <BaseFrame size={[2.9, 0.55, 2.1]} />

      {/* ── main mixing chamber body ────────────────────────────────────── */}
      <mesh position={[0, CHAMBER_CY, 0]} material={MAT.bodyPaint} castShadow receiveShadow>
        <boxGeometry args={[CHAMBER_W, CHAMBER_H, CHAMBER_D]} />
      </mesh>
      {/* rounded chamber shoulders so the silhouette reads as a twin-bore body */}
      {[ROTOR_GAP, -ROTOR_GAP].map((x) => (
        <mesh
          key={x}
          position={[x, CHAMBER_CY - 0.2, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          material={MAT.bodyPaint}
          castShadow
          receiveShadow
        >
          <cylinderGeometry args={[ROTOR_R + 0.34, ROTOR_R + 0.34, CHAMBER_D + 0.02, 24]} />
        </mesh>
      ))}
      {/* chamber side end-plates (drive + idle), darker cast steel */}
      {[CHAMBER_W / 2 + 0.03, -CHAMBER_W / 2 - 0.03].map((x, i) => (
        <group key={i} position={[x, CHAMBER_CY, 0]}>
          <mesh material={MAT.bodyPaintDark} castShadow receiveShadow>
            <boxGeometry args={[0.18, CHAMBER_H + 0.1, CHAMBER_D + 0.1]} />
          </mesh>
          {/* bolt ring around each rotor bearing */}
          {[ROTOR_GAP, -ROTOR_GAP].map((bz) =>
            Array.from({ length: 8 }).map((_, b) => {
              const a = (b / 8) * Math.PI * 2;
              return (
                <Bolt
                  key={`${bz}-${b}`}
                  position={[i ? -0.09 : 0.09, CHAMBER_CY * 0 + Math.cos(a) * 0.32 - 0.18, bz + Math.sin(a) * 0.32]}
                  r={0.035}
                />
              );
            }),
          )}
        </group>
      ))}

      {/* ── cutaway inspection window on the +Z face ─────────────────────── */}
      {/* recessed dark interior so the rotors stand out behind the glass */}
      <mesh position={[0, CHAMBER_CY - 0.18, CHAMBER_D / 2 - 0.06]} material={MAT.blackPlastic}>
        <boxGeometry args={[CHAMBER_W - 0.5, CHAMBER_H - 0.7, 0.06]} />
      </mesh>
      {/* the two counter-rotating rotors, recessed into the chamber */}
      <group position={[0, CHAMBER_CY - 0.18, CHAMBER_D / 2 - 0.28]}>
        <group position={[ROTOR_GAP, 0, 0]}>
          <Rotor spinRef={rotorA} />
        </group>
        <group position={[-ROTOR_GAP, 0, 0]}>
          <Rotor spinRef={rotorB} />
        </group>
        {/* churning compound mass sitting on the rotors, darkens with progress */}
        {on && (
          <mesh position={[0, -ROTOR_R - 0.06, 0]} material={churnMat} castShadow>
            <boxGeometry args={[ROTOR_GAP * 2 + ROTOR_R * 1.6, 0.34, 0.5]} />
          </mesh>
        )}
      </group>
      {/* glass panel + steel window frame on the operator face */}
      <mesh position={[0, CHAMBER_CY - 0.18, CHAMBER_D / 2 + 0.01]} material={MAT.glass}>
        <boxGeometry args={[CHAMBER_W - 0.5, CHAMBER_H - 0.7, 0.04]} />
      </mesh>
      {/* window frame bars */}
      {[
        [0, (CHAMBER_H - 0.7) / 2, CHAMBER_W - 0.46, 0.07] as const,
        [0, -(CHAMBER_H - 0.7) / 2, CHAMBER_W - 0.46, 0.07] as const,
      ].map(([fx, fy, fw, fh], i) => (
        <mesh
          key={`h${i}`}
          position={[fx, CHAMBER_CY - 0.18 + fy, CHAMBER_D / 2 + 0.03]}
          material={MAT.lightSteel}
        >
          <boxGeometry args={[fw, fh, 0.05]} />
        </mesh>
      ))}
      {[(CHAMBER_W - 0.5) / 2, -(CHAMBER_W - 0.5) / 2].map((fx, i) => (
        <mesh key={`v${i}`} position={[fx, CHAMBER_CY - 0.18, CHAMBER_D / 2 + 0.03]} material={MAT.lightSteel}>
          <boxGeometry args={[0.07, CHAMBER_H - 0.7, 0.05]} />
        </mesh>
      ))}

      {/* ── top feed hopper + throat ─────────────────────────────────────── */}
      {/* throat collar joining chamber top to hopper */}
      <mesh position={[0, CHAMBER_CY + CHAMBER_H / 2 + 0.1, 0]} material={MAT.frameSteel} castShadow>
        <boxGeometry args={[0.9, 0.2, 0.9]} />
      </mesh>
      <Hopper
        position={[0, CHAMBER_CY + CHAMBER_H / 2 + 0.7, 0]}
        topR={0.78}
        botR={0.32}
        height={0.9}
      />

      {/* ── vertical RAM cylinder + piston above the hopper ──────────────── */}
      {/* support yoke / cylinder mount bridging up from the chamber top */}
      {[0.42, -0.42].map((x) => (
        <mesh
          key={x}
          position={[x, CHAMBER_CY + CHAMBER_H / 2 + 1.0, 0]}
          material={MAT.frameSteel}
          castShadow
        >
          <boxGeometry args={[0.12, 1.0, 0.12]} />
        </mesh>
      ))}
      {/* hydraulic cylinder body (fixed) */}
      <mesh
        position={[0, baseRamY + 0.55, 0]}
        material={MAT.lightSteel}
        castShadow
        receiveShadow
      >
        <cylinderGeometry args={[0.3, 0.3, 0.9, 20]} />
      </mesh>
      <mesh position={[0, baseRamY + 1.02, 0]} material={MAT.bodyPaintDark} castShadow>
        <cylinderGeometry args={[0.34, 0.34, 0.14, 20]} />
      </mesh>
      {/* oil feed line to the ram */}
      <Pipe
        from={[0.3, baseRamY + 0.9, 0]}
        to={[0.95, baseRamY + 0.4, 0]}
        radius={0.05}
        material={MAT.amber}
      />
      {/* moving piston rod + weight plug that lowers into the hopper throat */}
      <group ref={ram} position={[0, 0, 0]}>
        <mesh position={[0, baseRamY, 0]} material={MAT.polished} castShadow>
          <cylinderGeometry args={[0.1, 0.1, 0.9, 16]} />
        </mesh>
        {/* weight / plunger head */}
        <mesh position={[0, baseRamY - 0.55, 0]} material={MAT.bodyPaintDark} castShadow receiveShadow>
          <cylinderGeometry args={[0.34, 0.3, 0.36, 18]} />
        </mesh>
      </group>

      {/* ── motor-heavy side drive (drive side at -X end-plate) ──────────── */}
      <GearHousing
        position={[-(CHAMBER_W / 2 + 0.55), CHAMBER_CY - 0.1, 0]}
        size={[0.95, 1.5, 1.3]}
        material={MAT.bodyPaintDark}
      />
      {/* large primary motor */}
      <Motor position={[-(CHAMBER_W / 2 + 1.45), CHAMBER_CY - 0.1, 0]} length={1.3} radius={0.46} axis="x" />
      {/* belt guard / flywheel cover with a spinning cooling fan visible */}
      <group position={[-(CHAMBER_W / 2 + 0.95), CHAMBER_CY + 0.85, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} material={MAT.frameSteel} castShadow>
          <cylinderGeometry args={[0.36, 0.36, 0.4, 20]} />
        </mesh>
        <group ref={fan} position={[0, 0, 0.22]}>
          {Array.from({ length: 5 }).map((_, i) => {
            const a = (i / 5) * Math.PI * 2;
            return (
              <mesh key={i} position={[Math.cos(a) * 0.18, Math.sin(a) * 0.18, 0]} rotation={[0, 0, a]} material={MAT.darkPolished}>
                <boxGeometry args={[0.22, 0.06, 0.02]} />
              </mesh>
            );
          })}
          <mesh material={MAT.lightSteel}>
            <cylinderGeometry args={[0.07, 0.07, 0.06, 12]} />
          </mesh>
        </group>
      </group>

      {/* ── discharge door area below the chamber ────────────────────────── */}
      {/* sloped discharge chute / door under the twin bore */}
      <group position={[0, CHAMBER_CY - CHAMBER_H / 2 - 0.05, 0.15]}>
        <mesh rotation={[dischargeOpen ? -0.5 : -0.05, 0, 0]} material={MAT.bodyPaintDark} castShadow receiveShadow>
          <boxGeometry args={[CHAMBER_W - 0.3, 0.16, 0.7]} />
        </mesh>
        {/* drop-door hinge actuators */}
        {[0.9, -0.9].map((x) => (
          <mesh key={x} position={[x, 0.05, -0.2]} material={MAT.lightSteel} castShadow>
            <cylinderGeometry args={[0.06, 0.06, 0.5, 12]} />
          </mesh>
        ))}
      </group>
      {/* darkened mixed batch dropping out when nearly done */}
      {dischargeOpen && (
        <mesh
          position={[0, 0.78, 0.32]}
          material={dropMat}
          castShadow
        >
          <boxGeometry args={[1.5, 0.42, 0.7]} />
        </mesh>
      )}

      {/* ── control panel, lights, e-stop on the operator (+Z) front ─────── */}
      <ControlPanel position={[1.95, 0, 1.5]} rotation={[0, -0.55, 0]} on={on} />
      {/* status light stack mounted on the chamber front corner */}
      <group position={[CHAMBER_W / 2 - 0.15, CHAMBER_CY + 0.5, CHAMBER_D / 2 + 0.06]}>
        <mesh material={MAT.blackPlastic} castShadow>
          <cylinderGeometry args={[0.07, 0.07, 0.5, 12]} />
        </mesh>
        <IndicatorLight position={[0, 0.16, 0.02]} color="#cf3a2c" on={transforming} r={0.06} />
        <IndicatorLight position={[0, 0, 0.02]} color="#e2a629" on={on && !transforming} r={0.06} />
        <IndicatorLight position={[0, -0.16, 0.02]} color="#34d399" on={done || on} r={0.06} />
      </group>
      {/* e-stop on the chamber face for quick reach */}
      <EStop position={[-CHAMBER_W / 2 + 0.25, CHAMBER_CY - 0.7, CHAMBER_D / 2 + 0.04]} />
    </group>
  );
}
