"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type Phase = "uncured" | "curing" | "cured";

const CHAINS = 4;
const NODES = 7;
const SPAN_X = 6.4;
const CHAIN_GAP = 1.7;

// Backbone node positions: a few polymer chains stacked in y, gently waved.
function buildNodes() {
  const pts: THREE.Vector3[] = [];
  for (let c = 0; c < CHAINS; c++) {
    const y = (c - (CHAINS - 1) / 2) * CHAIN_GAP;
    for (let n = 0; n < NODES; n++) {
      const x = (n / (NODES - 1) - 0.5) * SPAN_X;
      const z = Math.sin(n * 1.1 + c) * 0.5;
      pts.push(new THREE.Vector3(x, y + Math.sin(n * 0.9 + c * 1.3) * 0.18, z));
    }
  }
  return pts;
}

// Crosslinks bridge adjacent chains at staggered nodes.
function buildCrosslinks() {
  const links: Array<{ a: number; b: number; order: number }> = [];
  let order = 0;
  for (let c = 0; c < CHAINS - 1; c++) {
    for (let n = 1; n < NODES; n += 2) {
      const a = c * NODES + n;
      const b = (c + 1) * NODES + n;
      links.push({ a, b, order: order++ });
    }
  }
  return links;
}

function Network({ phaseRef }: { phaseRef: React.MutableRefObject<Phase> }) {
  const group = useRef<THREE.Group>(null);
  const nodes = useMemo(buildNodes, []);
  const links = useMemo(buildCrosslinks, []);
  const formed = useRef(0); // 0..1 crosslink completion
  const crossRefs = useRef<(THREE.Mesh | null)[]>([]);

  const backbone = useMemo(() => {
    const segs: Array<[THREE.Vector3, THREE.Vector3]> = [];
    for (let c = 0; c < CHAINS; c++) {
      for (let n = 0; n < NODES - 1; n++) {
        segs.push([nodes[c * NODES + n], nodes[c * NODES + n + 1]]);
      }
    }
    return segs;
  }, [nodes]);

  useFrame((_, delta) => {
    const phase = phaseRef.current;
    const target = phase === "cured" ? 1 : phase === "curing" ? 1 : 0;
    const rate = phase === "curing" ? 0.42 : 1.8;
    formed.current += (target - formed.current) * Math.min(1, delta * rate);
    if (phase === "uncured") formed.current *= 1 - Math.min(1, delta * 2);

    links.forEach((l, i) => {
      const mesh = crossRefs.current[i];
      if (!mesh) return;
      const threshold = l.order / links.length;
      const local = THREE.MathUtils.clamp((formed.current - threshold) * 4, 0, 1);
      mesh.scale.y = local;
      mesh.visible = local > 0.02;
      const mat = mesh.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.5 + local * 1.6;
    });

    if (group.current) {
      group.current.rotation.y += delta * 0.25;
      group.current.rotation.x = Math.sin(performance.now() / 3000) * 0.12;
    }
  });

  return (
    <group ref={group}>
      {/* backbone bonds */}
      {backbone.map(([a, b], i) => {
        const mid = a.clone().add(b).multiplyScalar(0.5);
        const dir = b.clone().sub(a);
        const len = dir.length();
        const quat = new THREE.Quaternion().setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          dir.clone().normalize(),
        );
        return (
          <mesh key={`bb-${i}`} position={mid} quaternion={quat}>
            <cylinderGeometry args={[0.05, 0.05, len, 6]} />
            <meshStandardMaterial color="#4b4f57" roughness={0.6} />
          </mesh>
        );
      })}

      {/* nodes */}
      {nodes.map((p, i) => (
        <mesh key={`nd-${i}`} position={p}>
          <sphereGeometry args={[0.26, 18, 18]} />
          <meshStandardMaterial color="#20232a" roughness={0.35} metalness={0.2} />
        </mesh>
      ))}

      {/* crosslinks */}
      {links.map((l, i) => {
        const a = nodes[l.a];
        const b = nodes[l.b];
        const mid = a.clone().add(b).multiplyScalar(0.5);
        const dir = b.clone().sub(a);
        const len = dir.length();
        const quat = new THREE.Quaternion().setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          dir.clone().normalize(),
        );
        return (
          <mesh
            key={`cl-${i}`}
            ref={(m) => {
              crossRefs.current[i] = m;
            }}
            position={mid}
            quaternion={quat}
            scale={[1, 0, 1]}
          >
            <cylinderGeometry args={[0.09, 0.09, len, 8]} />
            <meshStandardMaterial color="#ff8c2b" emissive="#f97316" emissiveIntensity={0.6} roughness={0.3} />
          </mesh>
        );
      })}
    </group>
  );
}

export default function MolecularScene({ phase }: { phase: Phase }) {
  const phaseRef = useRef<Phase>(phase);
  phaseRef.current = phase;
  return (
    <Canvas camera={{ position: [0, 0, 11], fov: 42 }} dpr={[1, 2]} gl={{ antialias: true }}>
      <color attach="background" args={["#0c0a09"]} />
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 8]} intensity={2.6} color="#ffb066" />
      <directionalLight position={[-6, -3, 4]} intensity={1.3} color="#38bdf8" />
      <Network phaseRef={phaseRef} />
    </Canvas>
  );
}
