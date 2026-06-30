"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import * as THREE from "three";
import { MAT } from "@/components/machines/kit";
import { labStationsById } from "@/lib/labStations";
import { Loader2 } from "lucide-react";

type Vec3 = [number, number, number];

// Cleaner, brighter lab materials than the production floor.
const LAB = {
  benchTop: new THREE.MeshStandardMaterial({ color: "#ddd1ba", roughness: 0.4, metalness: 0.5 }),
  white: new THREE.MeshStandardMaterial({ color: "#ece6dc", roughness: 0.6, metalness: 0.1 }),
  screen: new THREE.MeshStandardMaterial({ color: "#241f30", emissive: "#5a35b0", emissiveIntensity: 0.7, roughness: 0.3 }),
  amber: new THREE.MeshStandardMaterial({ color: "#b8860b", emissive: "#b8860b", emissiveIntensity: 0.5 }),
  glass: new THREE.MeshStandardMaterial({ color: "#d4cdbe", roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.35 }),
  rubber: new THREE.MeshStandardMaterial({ color: "#1b1714", roughness: 0.8 }),
};

function Bench({ position }: { position: Vec3 }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.92, 0]} material={LAB.benchTop} castShadow receiveShadow>
        <boxGeometry args={[2.2, 0.1, 1.2]} />
      </mesh>
      {[[-0.95, -0.5], [0.95, -0.5], [-0.95, 0.5], [0.95, 0.5]].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.46, z]} material={MAT.frameSteel}>
          <boxGeometry args={[0.1, 0.92, 0.1]} />
        </mesh>
      ))}
      <mesh position={[0, 0.2, 0]} material={LAB.white}>
        <boxGeometry args={[2.0, 0.5, 1.0]} />
      </mesh>
    </group>
  );
}

function Instrument({ zoneId, position, active, onSelect, children, label }: { zoneId: string; position: Vec3; active: boolean; onSelect: (id: string) => void; children: React.ReactNode; label: string }) {
  const [hover, setHover] = useState(false);
  return (
    <group position={position}>
      <Bench position={[0, 0, 0]} />
      <group
        position={[0, 0.97, 0]}
        onClick={(e) => { e.stopPropagation(); onSelect(zoneId); }}
        onPointerOver={(e) => { e.stopPropagation(); setHover(true); }}
        onPointerOut={() => setHover(false)}
        scale={active || hover ? 1.05 : 1}
      >
        {children}
        {(active || hover) && (
          <mesh position={[0, -0.02, 0]}>
            <ringGeometry args={[0.85, 0.95, 32]} />
            <meshBasicMaterial color={active ? "#6d3bd4" : "#6d3bd4"} side={THREE.DoubleSide} transparent opacity={0.8} />
          </mesh>
        )}
      </group>
      <Html position={[0, 2.1, 0]} center distanceFactor={11}>
        <div className={`pointer-events-none whitespace-nowrap rounded-md border px-2 py-0.5 font-mono text-[10px] ${active ? "border-violet-400 bg-violet-500/20 text-violet-100" : "border-[rgba(109,59,212,0.25)] bg-[#1f1b17]/80 text-[#d9cdb8]"}`}>
          {label}
        </div>
      </Html>
    </group>
  );
}

// Instrument geometries (simple, recognizable)
const MDR = () => (<><mesh position={[-0.3, 0.2, 0]} material={LAB.white}><boxGeometry args={[0.5, 0.4, 0.5]} /></mesh><mesh position={[0.3, 0.32, 0]} material={LAB.screen}><boxGeometry args={[0.45, 0.34, 0.05]} /></mesh></>);
const UTM = () => (<><mesh position={[-0.35, 0.55, 0]} material={MAT.lightSteel}><boxGeometry args={[0.1, 1.1, 0.1]} /></mesh><mesh position={[0.35, 0.55, 0]} material={MAT.lightSteel}><boxGeometry args={[0.1, 1.1, 0.1]} /></mesh><mesh position={[0, 1.05, 0]} material={MAT.frameSteel}><boxGeometry args={[0.9, 0.12, 0.2]} /></mesh><mesh position={[0, 0.55, 0]} material={LAB.rubber}><boxGeometry args={[0.08, 0.3, 0.08]} /></mesh></>);
const Durometer = () => (<><mesh position={[0, 0.05, 0]} material={MAT.bodyPaintDark}><boxGeometry args={[0.5, 0.1, 0.4]} /></mesh><mesh position={[-0.15, 0.45, 0]} material={MAT.lightSteel}><boxGeometry args={[0.06, 0.8, 0.06]} /></mesh><mesh position={[0.05, 0.55, 0]} material={LAB.white}><cylinderGeometry args={[0.12, 0.12, 0.2, 12]} /></mesh></>);
const Oven = ({ on }: { on: boolean }) => (<><mesh position={[0, 0.35, 0]} material={LAB.white}><boxGeometry args={[0.7, 0.7, 0.6]} /></mesh><mesh position={[0, 0.4, 0.31]} material={on ? LAB.amber : MAT.glass}><boxGeometry args={[0.4, 0.4, 0.02]} /></mesh></>);
const Fluid = () => (<>{[-0.3, 0, 0.3].map((x) => (<mesh key={x} position={[x, 0.18, 0]} material={LAB.glass}><cylinderGeometry args={[0.1, 0.1, 0.36, 16]} /></mesh>))}</>);
const Compression = () => (<><mesh position={[0, 0.5, 0]} material={MAT.frameSteel}><boxGeometry args={[0.5, 0.06, 0.5]} /></mesh><mesh position={[0, 0.05, 0]} material={MAT.frameSteel}><boxGeometry args={[0.5, 0.06, 0.5]} /></mesh><mesh position={[0, 0.27, 0]} material={LAB.rubber}><cylinderGeometry args={[0.13, 0.13, 0.4, 16]} /></mesh></>);
const Dimensional = () => (<><mesh position={[0, 0.3, 0]} material={MAT.lightSteel}><boxGeometry args={[0.5, 0.04, 0.3]} /></mesh><mesh position={[-0.2, 0.5, 0]} material={LAB.amber}><sphereGeometry args={[0.08, 12, 12]} /></mesh><mesh position={[0.1, 0.12, 0]} material={LAB.rubber}><boxGeometry args={[0.5, 0.04, 0.25]} /></mesh></>);

const STATIONS: { id: string; pos: Vec3; node: React.ReactNode }[] = [
  { id: "rheology-cure", pos: [-4.5, 0, -1.5], node: <MDR /> },
  { id: "hardness", pos: [-1.5, 0, -1.5], node: <Durometer /> },
  { id: "tensile-utm", pos: [1.5, 0, -1.5], node: <UTM /> },
  { id: "compression-set", pos: [4.5, 0, -1.5], node: <Compression /> },
  { id: "aging-oven", pos: [-4.5, 0, 1.8], node: <Oven on /> },
  { id: "fluid-immersion", pos: [-1.5, 0, 1.8], node: <Fluid /> },
  { id: "ozone-weathering", pos: [1.5, 0, 1.8], node: <Oven on={false} /> },
  { id: "dimensional", pos: [4.5, 0, 1.8], node: <Dimensional /> },
];

function Scene({ active, onSelect }: { active: string | null; onSelect: (id: string) => void }) {
  return (
    <>
      <color attach="background" args={["#36302a"]} />
      <fog attach="fog" args={["#36302a", 22, 60]} />
      <ambientLight intensity={0.85} />
      <hemisphereLight intensity={0.7} color="#ece6dc" groundColor="#2a2240" />
      <directionalLight position={[6, 12, 6]} intensity={1.4} color="#ffffff" castShadow shadow-mapSize={[1024, 1024]} />
      <directionalLight position={[-8, 8, -4]} intensity={0.5} color="#d9cdb8" />

      <Suspense fallback={null}>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
          <planeGeometry args={[40, 30]} />
          <meshStandardMaterial color="#36302a" roughness={0.9} metalness={0.05} />
        </mesh>
        {/* lane stripe */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0.15]}>
          <planeGeometry args={[18, 0.12]} />
          <meshBasicMaterial color="#6d3bd4" transparent opacity={0.35} />
        </mesh>
        {STATIONS.map((s) => (
          <Instrument key={s.id} zoneId={s.id} position={s.pos} active={active === s.id} onSelect={onSelect} label={labStationsById[s.id]?.signText ?? s.id}>
            {s.node}
          </Instrument>
        ))}
      </Suspense>

      <OrbitControls enablePan={false} minDistance={6} maxDistance={22} maxPolarAngle={Math.PI / 2.15} target={[0, 0.8, 0]} />
    </>
  );
}

export function VirtualQALabScene({ active, onSelect }: { active: string | null; onSelect: (id: string) => void }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <div className="flex h-full w-full items-center justify-center gap-2 bg-base-850 text-ink-faint">
        <Loader2 className="h-4 w-4 animate-spin" /> <span className="font-mono text-xs">building QA lab…</span>
      </div>
    );
  }
  return (
    <Canvas shadows dpr={[1, 1.8]} gl={{ antialias: true, powerPreference: "high-performance" }} camera={{ position: [0, 7, 13], fov: 42 }}>
      <Scene active={active} onSelect={onSelect} />
    </Canvas>
  );
}
