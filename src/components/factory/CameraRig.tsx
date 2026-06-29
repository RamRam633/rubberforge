"use client";

import { useEffect, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import type { CameraShot } from "@/lib/scene/layout";

// Guided camera: animates toward the requested shot whenever it changes, then
// hands control to the user for free orbit/pan until the next shot.
export function CameraRig({ shot }: { shot: CameraShot }) {
  const controls = useRef<OrbitControlsImpl>(null);
  const { camera } = useThree();

  const desiredPos = useRef(new THREE.Vector3(...shot.position));
  const desiredTarget = useRef(new THREE.Vector3(...shot.target));
  const transitioning = useRef(true);

  useEffect(() => {
    desiredPos.current.set(...shot.position);
    desiredTarget.current.set(...shot.target);
    transitioning.current = true;
  }, [shot.position, shot.target]);

  useFrame(() => {
    if (!transitioning.current || !controls.current) return;
    camera.position.lerp(desiredPos.current, 0.06);
    controls.current.target.lerp(desiredTarget.current, 0.08);
    controls.current.update();
    if (
      camera.position.distanceTo(desiredPos.current) < 0.25 &&
      controls.current.target.distanceTo(desiredTarget.current) < 0.18
    ) {
      // Snap to the exact pose so no residual offset lingers, then hand off.
      camera.position.copy(desiredPos.current);
      controls.current.target.copy(desiredTarget.current);
      controls.current.update();
      transitioning.current = false;
    }
  });

  return (
    <OrbitControls
      ref={controls}
      makeDefault
      enablePan
      enableDamping
      dampingFactor={0.08}
      minDistance={3.5}
      maxDistance={48}
      maxPolarAngle={Math.PI / 2.05}
      onStart={() => {
        transitioning.current = false;
      }}
    />
  );
}
