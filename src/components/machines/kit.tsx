"use client";

import * as THREE from "three";
import { Html } from "@react-three/drei";
import { useMemo } from "react";

type Vec3 = [number, number, number];

// ── Shared materials ─────────────────────────────────────────────────────────
// Constructed once and reused across every machine for a coherent industrial
// palette and good batching. Static parts only; dynamic rubber colour is set
// per-instance via the `color` prop on RubberSheet / RubberLump.
export const MAT = {
  floor: new THREE.MeshStandardMaterial({ color: "#313338", roughness: 0.96, metalness: 0.04 }),
  bodyPaint: new THREE.MeshStandardMaterial({ color: "#36424e", roughness: 0.5, metalness: 0.55 }),
  bodyPaintDark: new THREE.MeshStandardMaterial({ color: "#232a31", roughness: 0.55, metalness: 0.6 }),
  frameSteel: new THREE.MeshStandardMaterial({ color: "#2b3037", roughness: 0.42, metalness: 0.85 }),
  lightSteel: new THREE.MeshStandardMaterial({ color: "#98a1ab", roughness: 0.34, metalness: 0.82 }),
  polished: new THREE.MeshStandardMaterial({ color: "#ced4dc", roughness: 0.13, metalness: 1 }),
  darkPolished: new THREE.MeshStandardMaterial({ color: "#7e858f", roughness: 0.2, metalness: 1 }),
  rubberMatte: new THREE.MeshStandardMaterial({ color: "#141418", roughness: 0.9, metalness: 0.04 }),
  safety: new THREE.MeshStandardMaterial({ color: "#e2a629", roughness: 0.5, metalness: 0.25 }),
  hazardRed: new THREE.MeshStandardMaterial({ color: "#cf3a2c", roughness: 0.5, metalness: 0.3 }),
  beige: new THREE.MeshStandardMaterial({ color: "#e3d9c2", roughness: 0.82, metalness: 0.03 }),
  blackPlastic: new THREE.MeshStandardMaterial({ color: "#15171b", roughness: 0.6, metalness: 0.18 }),
  glass: new THREE.MeshStandardMaterial({
    color: "#0b0f13",
    roughness: 0.08,
    metalness: 0.2,
    transparent: true,
    opacity: 0.34,
  }),
  copper: new THREE.MeshStandardMaterial({ color: "#b07a45", roughness: 0.4, metalness: 0.85 }),
  coolant: new THREE.MeshStandardMaterial({ color: "#3f6b86", roughness: 0.4, metalness: 0.7 }),
  amber: new THREE.MeshStandardMaterial({ color: "#c8922e", roughness: 0.3, metalness: 0.1 }),
  concreteLight: new THREE.MeshStandardMaterial({ color: "#3a3c41", roughness: 0.95, metalness: 0.03 }),
};

export function rubberSheetMaterial(color = "#1a1b1f", roughness = 0.5) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness: 0.16 });
}

// ── Primitive helpers ────────────────────────────────────────────────────────
export function Bolt({ position, r = 0.035 }: { position: Vec3; r?: number }) {
  return (
    <mesh position={position} rotation={[Math.PI / 2, 0, 0]} material={MAT.lightSteel} castShadow>
      <cylinderGeometry args={[r, r, r * 1.1, 6]} />
    </mesh>
  );
}

/** Box plinth base with four feet pads. */
export function BaseFrame({
  position = [0, 0, 0],
  size = [3, 0.5, 2.4],
}: {
  position?: Vec3;
  size?: Vec3;
}) {
  const [w, h, d] = size;
  const fx = w / 2 - 0.18;
  const fz = d / 2 - 0.18;
  return (
    <group position={position}>
      <mesh position={[0, h / 2 + 0.06, 0]} material={MAT.frameSteel} castShadow receiveShadow>
        <boxGeometry args={[w, h, d]} />
      </mesh>
      {[
        [fx, 0.03, fz],
        [-fx, 0.03, fz],
        [fx, 0.03, -fz],
        [-fx, 0.03, -fz],
      ].map((p, i) => (
        <mesh key={i} position={p as Vec3} material={MAT.bodyPaintDark} castShadow>
          <boxGeometry args={[0.4, 0.12, 0.4]} />
        </mesh>
      ))}
    </group>
  );
}

export function Column({
  position,
  height = 2,
  thickness = 0.22,
  material = MAT.frameSteel,
}: {
  position: Vec3;
  height?: number;
  thickness?: number;
  material?: THREE.Material;
}) {
  return (
    <mesh position={[position[0], position[1] + height / 2, position[2]]} material={material} castShadow>
      <boxGeometry args={[thickness, height, thickness]} />
    </mesh>
  );
}

/** Horizontal industrial roller with darker bearing end caps. */
export function Roller({
  position = [0, 0, 0],
  length = 2.4,
  radius = 0.42,
  axis = "x",
  material = MAT.polished,
}: {
  position?: Vec3;
  length?: number;
  radius?: number;
  axis?: "x" | "z";
  material?: THREE.Material;
}) {
  const rot: Vec3 = axis === "x" ? [0, 0, Math.PI / 2] : [Math.PI / 2, 0, 0];
  return (
    <group position={position} rotation={rot}>
      <mesh material={material} castShadow receiveShadow>
        <cylinderGeometry args={[radius, radius, length, 36]} />
      </mesh>
      {[length / 2, -length / 2].map((y, i) => (
        <mesh key={i} position={[0, y, 0]} material={MAT.bodyPaintDark} castShadow>
          <cylinderGeometry args={[radius * 1.08, radius * 1.08, 0.16, 24]} />
        </mesh>
      ))}
    </group>
  );
}

/** Drive motor: body cylinder + cooling fins + terminal box. */
export function Motor({
  position,
  length = 1,
  radius = 0.36,
  axis = "x",
}: {
  position: Vec3;
  length?: number;
  radius?: number;
  axis?: "x" | "z";
}) {
  const rot: Vec3 = axis === "x" ? [0, 0, Math.PI / 2] : [Math.PI / 2, 0, 0];
  return (
    <group position={position}>
      <group rotation={rot}>
        <mesh material={MAT.bodyPaintDark} castShadow>
          <cylinderGeometry args={[radius, radius, length, 24]} />
        </mesh>
        {Array.from({ length: 7 }).map((_, i) => (
          <mesh key={i} position={[0, -length / 2 + 0.12 + i * (length - 0.24) / 6, 0]} material={MAT.frameSteel}>
            <cylinderGeometry args={[radius * 1.12, radius * 1.12, 0.03, 24]} />
          </mesh>
        ))}
      </group>
      <mesh position={[0, radius + 0.08, 0]} material={MAT.blackPlastic} castShadow>
        <boxGeometry args={[0.3, 0.2, 0.26]} />
      </mesh>
    </group>
  );
}

export function GearHousing({
  position,
  size = [0.8, 1, 0.7],
  material = MAT.bodyPaint,
}: {
  position: Vec3;
  size?: Vec3;
  material?: THREE.Material;
}) {
  return (
    <mesh position={position} material={material} castShadow receiveShadow>
      <boxGeometry args={size} />
    </mesh>
  );
}

export function IndicatorLight({
  position,
  color = "#34d399",
  on = true,
  r = 0.045,
}: {
  position: Vec3;
  color?: string;
  on?: boolean;
  r?: number;
}) {
  const mat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: on ? 2.2 : 0.05,
        roughness: 0.3,
      }),
    [color, on],
  );
  return (
    <mesh position={position} material={mat}>
      <sphereGeometry args={[r, 14, 14]} />
    </mesh>
  );
}

/** Emergency-stop button (visual element only). */
export function EStop({ position }: { position: Vec3 }) {
  return (
    <group position={position}>
      <mesh material={MAT.safety} castShadow>
        <boxGeometry args={[0.2, 0.2, 0.05]} />
      </mesh>
      <mesh position={[0, 0, 0.05]} rotation={[Math.PI / 2, 0, 0]} material={MAT.hazardRed} castShadow>
        <cylinderGeometry args={[0.06, 0.07, 0.06, 18]} />
      </mesh>
      <mesh position={[0, 0, 0.09]} material={MAT.hazardRed}>
        <sphereGeometry args={[0.06, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
      </mesh>
    </group>
  );
}

/** Free-standing control cabinet with a screen, buttons and an e-stop. */
export function ControlPanel({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  on = true,
}: {
  position?: Vec3;
  rotation?: Vec3;
  on?: boolean;
}) {
  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, 0.75, 0]} material={MAT.bodyPaint} castShadow receiveShadow>
        <boxGeometry args={[0.9, 1.5, 0.4]} />
      </mesh>
      {/* screen */}
      <mesh position={[0, 1.05, 0.21]} material={on ? screenMat : MAT.blackPlastic}>
        <boxGeometry args={[0.6, 0.4, 0.02]} />
      </mesh>
      {/* buttons */}
      <IndicatorLight position={[-0.22, 0.66, 0.21]} color="#34d399" on={on} />
      <IndicatorLight position={[-0.04, 0.66, 0.21]} color="#ff8c2b" on={on} />
      <IndicatorLight position={[0.14, 0.66, 0.21]} color="#38bdf8" on={on} />
      <EStop position={[0.22, 0.4, 0.21]} />
    </group>
  );
}

const screenMat = new THREE.MeshStandardMaterial({
  color: "#0a2734",
  emissive: "#0e3a4d",
  emissiveIntensity: 0.8,
  roughness: 0.2,
});

/** Open-ended frustum feed hopper with a rim. */
export function Hopper({
  position,
  topR = 0.9,
  botR = 0.34,
  height = 1,
}: {
  position: Vec3;
  topR?: number;
  botR?: number;
  height?: number;
}) {
  return (
    <group position={position}>
      <mesh material={MAT.lightSteel} castShadow receiveShadow>
        <cylinderGeometry args={[topR, botR, height, 28, 1, true]} />
      </mesh>
      <mesh position={[0, height / 2, 0]} material={MAT.frameSteel}>
        <torusGeometry args={[topR, 0.04, 10, 28]} />
      </mesh>
    </group>
  );
}

/** Yellow safety railing: posts + two rails. */
export function Railing({
  position = [0, 0, 0],
  length = 4,
  height = 1.1,
  posts = 4,
  axis = "x",
}: {
  position?: Vec3;
  length?: number;
  height?: number;
  posts?: number;
  axis?: "x" | "z";
}) {
  const along = (t: number): Vec3 => (axis === "x" ? [t, 0, 0] : [0, 0, t]);
  return (
    <group position={position}>
      {Array.from({ length: posts }).map((_, i) => {
        const t = -length / 2 + (i * length) / (posts - 1);
        const [px, , pz] = along(t);
        return (
          <mesh key={i} position={[px, height / 2, pz]} material={MAT.safety} castShadow>
            <cylinderGeometry args={[0.04, 0.04, height, 10]} />
          </mesh>
        );
      })}
      {[height, height * 0.55].map((h, i) => (
        <mesh
          key={i}
          position={[0, h, 0]}
          rotation={axis === "x" ? [0, 0, Math.PI / 2] : [Math.PI / 2, 0, 0]}
          material={MAT.safety}
          castShadow
        >
          <cylinderGeometry args={[0.035, 0.035, length, 10]} />
        </mesh>
      ))}
    </group>
  );
}

/** A pipe between two world-space points. */
export function Pipe({
  from,
  to,
  radius = 0.06,
  material = MAT.lightSteel,
}: {
  from: Vec3;
  to: Vec3;
  radius?: number;
  material?: THREE.Material;
}) {
  const { pos, quat, len } = useMemo(() => {
    const a = new THREE.Vector3(...from);
    const b = new THREE.Vector3(...to);
    const dir = b.clone().sub(a);
    const length = dir.length();
    const mid = a.clone().add(b).multiplyScalar(0.5);
    const q = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      dir.clone().normalize(),
    );
    return { pos: mid, quat: q, len: length };
  }, [from, to]);
  return (
    <mesh position={pos} quaternion={quat} material={material} castShadow>
      <cylinderGeometry args={[radius, radius, len, 14]} />
    </mesh>
  );
}

/** Flat rubber sheet segment (used by machines and the travelling material). */
export function RubberSheet({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  size = [3, 0.05, 1.6],
  color = "#1a1b1f",
  roughness = 0.5,
}: {
  position?: Vec3;
  rotation?: Vec3;
  size?: Vec3;
  color?: string;
  roughness?: number;
}) {
  const mat = useMemo(() => rubberSheetMaterial(color, roughness), [color, roughness]);
  return (
    <mesh position={position} rotation={rotation} material={mat} castShadow receiveShadow>
      <boxGeometry args={size} />
    </mesh>
  );
}

/** Rough uncured compound lump. */
export function RubberLump({
  position = [0, 0, 0],
  radius = 0.5,
  color = "#16161a",
}: {
  position?: Vec3;
  radius?: number;
  color?: string;
}) {
  const mat = useMemo(
    () => new THREE.MeshStandardMaterial({ color, roughness: 0.92, metalness: 0.05, flatShading: true }),
    [color],
  );
  return (
    <mesh position={position} material={mat} castShadow scale={[1.2, 0.8, 1]}>
      <icosahedronGeometry args={[radius, 1]} />
    </mesh>
  );
}

export function Drum({ position, color = "#2b3037" }: { position: Vec3; color?: string }) {
  const mat = useMemo(() => new THREE.MeshStandardMaterial({ color, roughness: 0.5, metalness: 0.6 }), [color]);
  return (
    <group position={position}>
      <mesh material={mat} castShadow receiveShadow>
        <cylinderGeometry args={[0.42, 0.42, 1.1, 24]} />
      </mesh>
      {[0.45, 0, -0.45].map((y, i) => (
        <mesh key={i} position={[0, y, 0]} material={MAT.frameSteel}>
          <torusGeometry args={[0.42, 0.03, 8, 24]} />
        </mesh>
      ))}
    </group>
  );
}

export function Pallet({ position = [0, 0, 0] }: { position?: Vec3 }) {
  const wood = useMemo(() => new THREE.MeshStandardMaterial({ color: "#6b5638", roughness: 0.9 }), []);
  return (
    <group position={position}>
      {[-0.55, 0, 0.55].map((z, i) => (
        <mesh key={i} position={[0, 0.06, z]} material={wood} castShadow receiveShadow>
          <boxGeometry args={[1.4, 0.12, 0.22]} />
        </mesh>
      ))}
      <mesh position={[0, 0.16, 0]} material={wood} castShadow>
        <boxGeometry args={[1.4, 0.08, 1.3]} />
      </mesh>
    </group>
  );
}

export function StorageBale({ position, color = "#e3d9c2" }: { position: Vec3; color?: string }) {
  const mat = useMemo(() => new THREE.MeshStandardMaterial({ color, roughness: 0.82, metalness: 0.03 }), [color]);
  return (
    <mesh position={position} material={mat} castShadow receiveShadow>
      <boxGeometry args={[1, 0.55, 0.7]} />
    </mesh>
  );
}

/** Floor flow-direction chevron, laid flat just above the floor. */
export function FlowArrow({ position, flip = false }: { position: Vec3; flip?: boolean }) {
  return (
    <group position={[position[0], 0.02, position[2]]} rotation={[-Math.PI / 2, 0, flip ? Math.PI : 0]}>
      {[0.35, -0.05].map((off, i) => (
        <group key={i} position={[off, 0, 0]}>
          <mesh position={[0, 0.28, 0]} rotation={[0, 0, -Math.PI / 4]} material={MAT.safety}>
            <boxGeometry args={[0.5, 0.12, 0.001]} />
          </mesh>
          <mesh position={[0, -0.28, 0]} rotation={[0, 0, Math.PI / 4]} material={MAT.safety}>
            <boxGeometry args={[0.5, 0.12, 0.001]} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

/** Billboarded HTML label that floats above a machine. */
export function MachineLabel({
  position,
  title,
  sub,
  tone = "#ff8c2b",
}: {
  position: Vec3;
  title: string;
  sub?: string;
  tone?: string;
}) {
  return (
    <Html position={position} center distanceFactor={16} zIndexRange={[20, 0]} pointerEvents="none">
      <div className="pointer-events-none -translate-y-1/2 select-none whitespace-nowrap rounded-md border border-white/10 bg-black/70 px-2.5 py-1 backdrop-blur-sm">
        <div className="font-mono text-[11px] uppercase tracking-wider" style={{ color: tone }}>
          {title}
        </div>
        {sub && <div className="font-mono text-[9px] text-white/55">{sub}</div>}
      </div>
    </Html>
  );
}
