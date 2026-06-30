"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, ContactShadows, Environment, Lightformer } from "@react-three/drei";
import type { StationId } from "@/types/simulation";
import { MACHINE_MODELS } from "./machineRegistry";

// A single machine on a turntable, for the Process Library.
export function MachineViewer({ stationId }: { stationId: StationId }) {
  const Model = MACHINE_MODELS[stationId];
  return (
    <Canvas
      shadows
      dpr={[1, 1.8]}
      gl={{ antialias: true }}
      camera={{ position: [6.5, 4.2, 9], fov: 40, near: 0.5, far: 100 }}
    >
      <color attach="background" args={["#2a2622"]} />
      <fog attach="fog" args={["#2a2622", 18, 40]} />
      <ambientLight intensity={0.5} />
      <hemisphereLight intensity={0.4} color="#d8c8ef" groundColor="#26211a" />
      <directionalLight
        castShadow
        position={[5, 11, 7]}
        intensity={2.3}
        color="#fff2e2"
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={40}
        shadow-camera-left={-8}
        shadow-camera-right={8}
        shadow-camera-top={8}
        shadow-camera-bottom={-8}
        shadow-bias={-0.0004}
      />
      <directionalLight position={[-6, 6, -4]} intensity={0.5} color="#d9cdb8" />
      <Suspense fallback={null}>
        <Environment resolution={256}>
          <Lightformer intensity={2.2} position={[0, 7, 6]} scale={[14, 7, 1]} color="#fff3e2" />
          <Lightformer intensity={1.1} position={[-8, 5, -5]} scale={[8, 6, 1]} color="#d9cdb8" />
          <Lightformer intensity={1.3} form="ring" position={[9, 5, 6]} scale={4} color="#ffd9a8" />
        </Environment>
        <Model active transforming={false} progress={0} done={false} />
        <ContactShadows position={[0, 0.01, 0]} scale={16} blur={2.6} opacity={0.55} far={9} resolution={512} />
      </Suspense>
      <OrbitControls
        makeDefault
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.55}
        enableDamping
        dampingFactor={0.08}
        minDistance={4.5}
        maxDistance={22}
        maxPolarAngle={Math.PI / 2.1}
        target={[0, 1.5, 0]}
      />
    </Canvas>
  );
}
