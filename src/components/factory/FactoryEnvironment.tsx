"use client";

import * as THREE from "three";
import { Environment, Lightformer } from "@react-three/drei";
import { MAT, Pallet, Drum, StorageBale, FlowArrow } from "@/components/machines/kit";
import { LINE_LENGTH, LINE_CENTER_X, STATION_SPACING, stationX } from "@/lib/scene/layout";

const floorMat = new THREE.MeshStandardMaterial({ color: "#2f3136", roughness: 0.95, metalness: 0.04 });
const laneMat = new THREE.MeshStandardMaterial({ color: "#3c3e44", roughness: 0.9 });
const lineMat = new THREE.MeshStandardMaterial({ color: "#cdb15a", roughness: 0.7, emissive: "#3a3010", emissiveIntensity: 0.2 });
const fixtureMat = new THREE.MeshStandardMaterial({ color: "#1a1d22", roughness: 0.6, metalness: 0.5 });
const panelMat = new THREE.MeshStandardMaterial({ color: "#d6ece8", emissive: "#b6e2ea", emissiveIntensity: 1.5, roughness: 0.4 });
const silhouetteMat = new THREE.MeshStandardMaterial({ color: "#191c21", roughness: 0.9, metalness: 0.2 });

export function FactoryEnvironment() {
  const x0 = -STATION_SPACING * 0.8;
  const x1 = LINE_LENGTH + STATION_SPACING * 0.8;
  const width = x1 - x0;

  return (
    <group>
      {/* In-scene reflection environment (no network HDRI) for metal highlights */}
      <Environment resolution={256}>
        <Lightformer intensity={2.2} position={[0, 8, 6]} scale={[20, 8, 1]} color="#fff3e2" />
        <Lightformer intensity={1.1} position={[-12, 5, -8]} scale={[10, 8, 1]} color="#d9cdb8" />
        <Lightformer intensity={1.4} form="ring" position={[14, 6, 8]} scale={5} color="#ffd9a8" />
        <Lightformer intensity={0.8} position={[0, 0.5, -14]} scale={[24, 3, 1]} color="#7a7062" />
      </Environment>

      {/* Concrete floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[LINE_CENTER_X, 0, 0]} material={floorMat} receiveShadow>
        <planeGeometry args={[width + 20, 34]} />
      </mesh>

      {/* Worn material lane down the centre */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[LINE_CENTER_X, 0.01, 0]} material={laneMat} receiveShadow>
        <planeGeometry args={[width, 5]} />
      </mesh>
      {/* Yellow lane edge stripes */}
      {[2.55, -2.55].map((z) => (
        <mesh key={z} rotation={[-Math.PI / 2, 0, 0]} position={[LINE_CENTER_X, 0.02, z]} material={lineMat}>
          <planeGeometry args={[width, 0.12]} />
        </mesh>
      ))}

      {/* Flow-direction chevrons between stations */}
      {Array.from({ length: 9 }).map((_, i) => (
        <FlowArrow key={i} position={[stationX(i) + STATION_SPACING / 2, 0, 0]} />
      ))}

      {/* Overhead light fixtures */}
      {Array.from({ length: 7 }).map((_, i) => {
        const x = x0 + 2 + (i * width) / 6;
        return (
          <group key={i} position={[x, 9, 0]}>
            <mesh material={fixtureMat}>
              <boxGeometry args={[2.6, 0.3, 1.2]} />
            </mesh>
            <mesh position={[0, -0.18, 0]} material={panelMat}>
              <boxGeometry args={[2.4, 0.05, 1.0]} />
            </mesh>
          </group>
        );
      })}

      {/* Background equipment silhouettes (depth) */}
      {Array.from({ length: 12 }).map((_, i) => {
        const x = x0 + (i * width) / 11;
        const h = 3 + ((i * 7) % 5) * 0.8;
        return (
          <mesh key={i} position={[x, h / 2, -12 - ((i * 3) % 4)]} material={silhouetteMat}>
            <boxGeometry args={[2.2 + ((i * 5) % 3), h, 2]} />
          </mesh>
        );
      })}

      {/* Raw end: pallets with bales + drums */}
      <group position={[x0 + 1.2, 0, 5.2]}>
        <Pallet position={[0, 0, 0]} />
        <StorageBale position={[-0.3, 0.5, 0.1]} />
        <StorageBale position={[0.45, 0.5, -0.15]} />
        <StorageBale position={[0.05, 1.05, 0]} />
      </group>
      <Drum position={[x0 + 1.0, 0.55, 6.6]} color="#7a5a2c" />
      <Drum position={[x0 + 1.9, 0.55, 6.8]} color="#2b2722" />

      {/* Finish end: finished rolls on a pallet */}
      <group position={[x1 - 1.4, 0, 5]}>
        <Pallet position={[0, 0, 0]} />
        {[0, 1, 2].map((i) => (
          <mesh key={i} position={[-0.4 + i * 0.42, 0.45, 0]} rotation={[0, 0, Math.PI / 2]} material={MAT.rubberMatte} castShadow>
            <cylinderGeometry args={[0.34, 0.34, 0.9, 24]} />
          </mesh>
        ))}
      </group>
    </group>
  );
}
