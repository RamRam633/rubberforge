"use client";

import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { VestColor } from "@/types/factoryLife";

type Vec3 = [number, number, number];

const VEST_HEX: Record<VestColor, string> = {
  amber: "#e2a629",
  blue: "#5d75f0",
  green: "#37b24d",
  orange: "#e8730c",
  violet: "#7a6cf0",
  steel: "#9aa3ae",
};

const SKIN = new THREE.MeshStandardMaterial({ color: "#caa07a", roughness: 0.7, metalness: 0.02 });
const TROUSER = new THREE.MeshStandardMaterial({ color: "#2c3340", roughness: 0.8, metalness: 0.05 });
const BOOT = new THREE.MeshStandardMaterial({ color: "#15171b", roughness: 0.7, metalness: 0.1 });
const HAT = new THREE.MeshStandardMaterial({ color: "#e8b923", roughness: 0.5, metalness: 0.1 });

/**
 * A deliberately low-poly, stylised operator figure. It stands at a safe
 * observation distance from the machinery; it never reaches into a nip point,
 * roll, or hot surface. The presence is conceptual, conveying that people run
 * the line, not a depiction of a manual operation.
 */
export function FactoryWorker({
  position,
  vestColor = "steel",
  facing = 0,
  phase = 0,
  active = false,
}: {
  position: Vec3;
  vestColor?: VestColor;
  facing?: number;
  phase?: number;
  active?: boolean;
}) {
  const root = useRef<THREE.Group>(null);
  const vest = useMemo(
    () => new THREE.MeshStandardMaterial({ color: VEST_HEX[vestColor], roughness: 0.55, metalness: 0.08 }),
    [vestColor],
  );

  // A gentle idle motion: a small bob plus a slight sway. Cheap and bounded so
  // ten figures cost almost nothing per frame.
  useFrame((state) => {
    if (!root.current) return;
    const t = state.clock.elapsedTime + phase;
    root.current.position.y = position[1] + Math.sin(t * (active ? 2.4 : 1.1)) * 0.012;
    root.current.rotation.y = facing + Math.sin(t * 0.6) * 0.05;
  });

  return (
    <group ref={root} position={position} rotation={[0, facing, 0]}>
      {/* boots */}
      <mesh position={[-0.07, 0.05, 0.02]} material={BOOT} castShadow>
        <boxGeometry args={[0.1, 0.1, 0.18]} />
      </mesh>
      <mesh position={[0.07, 0.05, 0.02]} material={BOOT} castShadow>
        <boxGeometry args={[0.1, 0.1, 0.18]} />
      </mesh>
      {/* legs */}
      <mesh position={[-0.07, 0.32, 0]} material={TROUSER} castShadow>
        <boxGeometry args={[0.11, 0.46, 0.12]} />
      </mesh>
      <mesh position={[0.07, 0.32, 0]} material={TROUSER} castShadow>
        <boxGeometry args={[0.11, 0.46, 0.12]} />
      </mesh>
      {/* torso + hi-vis vest */}
      <mesh position={[0, 0.74, 0]} material={vest} castShadow>
        <boxGeometry args={[0.32, 0.42, 0.2]} />
      </mesh>
      {/* shoulders / arms */}
      <mesh position={[-0.21, 0.78, 0]} material={vest} castShadow>
        <boxGeometry args={[0.1, 0.34, 0.12]} />
      </mesh>
      <mesh position={[0.21, 0.78, 0]} material={vest} castShadow>
        <boxGeometry args={[0.1, 0.34, 0.12]} />
      </mesh>
      {/* hands */}
      <mesh position={[-0.21, 0.58, 0.02]} material={SKIN} castShadow>
        <boxGeometry args={[0.09, 0.1, 0.1]} />
      </mesh>
      <mesh position={[0.21, 0.58, 0.02]} material={SKIN} castShadow>
        <boxGeometry args={[0.09, 0.1, 0.1]} />
      </mesh>
      {/* neck + head */}
      <mesh position={[0, 1.0, 0]} material={SKIN}>
        <cylinderGeometry args={[0.05, 0.06, 0.07, 8]} />
      </mesh>
      <mesh position={[0, 1.1, 0]} material={SKIN} castShadow>
        <sphereGeometry args={[0.12, 12, 10]} />
      </mesh>
      {/* hard hat */}
      <mesh position={[0, 1.17, 0]} material={HAT} castShadow>
        <sphereGeometry args={[0.135, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
      </mesh>
      <mesh position={[0, 1.15, 0]} material={HAT}>
        <cylinderGeometry args={[0.15, 0.15, 0.02, 12]} />
      </mesh>
    </group>
  );
}
