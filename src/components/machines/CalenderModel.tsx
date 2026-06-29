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
  Bolt,
  RubberSheet,
  rubberSheetMaterial,
} from "./kit";
import type { MachineModelProps } from "./types";

// Calender: a tall machine with a vertical STACK of large polished rolls held in
// two heavy side frames. Compound is fed into the top nip; adjacent rolls
// counter-rotate to squeeze a thin sheet that exits horizontally from the
// bottom nip and travels +X. A thickness gauge head scans across the roll width
// just after the exit. This station only FORMS the sheet (no curing).
const ROLL_R = 0.55;
const ROLL_LEN = 3.4;
const FRAME_X = 1.95;
// four stacked roll heights (bottom nip near the exit conveyor line)
const ROLL_YS = [1.35, 2.45, 3.55, 4.55];
const SHEET_Y = ROLL_YS[0] - ROLL_R; // sheet leaves the bottom roll underside

function PolishedRoll({
  y,
  spinRef,
  reverse,
}: {
  y: number;
  spinRef: React.RefObject<THREE.Group>;
  reverse: boolean;
}) {
  return (
    <group position={[0, y, 0]} ref={spinRef}>
      {/* polished roll body, axis along X */}
      <mesh rotation={[0, 0, Math.PI / 2]} material={MAT.polished} castShadow receiveShadow>
        <cylinderGeometry args={[ROLL_R, ROLL_R, ROLL_LEN, 40]} />
      </mesh>
      {/* bearing end caps + bolt circles so rotation reads */}
      {[ROLL_LEN / 2, -ROLL_LEN / 2].map((x, i) => (
        <group key={i} position={[x, 0, 0]}>
          <mesh rotation={[0, 0, Math.PI / 2]} material={MAT.bodyPaintDark} castShadow>
            <cylinderGeometry args={[ROLL_R * 1.14, ROLL_R * 1.14, 0.2, 28]} />
          </mesh>
          {/* journal stub into the bearing block */}
          <mesh
            position={[i ? -0.18 : 0.18, 0, 0]}
            rotation={[0, 0, Math.PI / 2]}
            material={MAT.darkPolished}
            castShadow
          >
            <cylinderGeometry args={[ROLL_R * 0.32, ROLL_R * 0.32, 0.4, 18]} />
          </mesh>
          {Array.from({ length: 6 }).map((_, b) => {
            const a = (b / 6) * Math.PI * 2 + (reverse ? 0.4 : 0);
            return (
              <Bolt
                key={b}
                position={[i ? -0.13 : 0.13, Math.cos(a) * 0.34, Math.sin(a) * 0.34]}
                r={0.04}
              />
            );
          })}
        </group>
      ))}
    </group>
  );
}

export function CalenderModel({ active, transforming, progress = 0, done }: MachineModelProps) {
  const rolls = [
    useRef<THREE.Group>(null),
    useRef<THREE.Group>(null),
    useRef<THREE.Group>(null),
    useRef<THREE.Group>(null),
  ];
  const gauge = useRef<THREE.Group>(null);
  const transferA = useRef<THREE.Group>(null);
  const transferB = useRef<THREE.Group>(null);

  // material reveal: cured sheet darker/cleaner, sheet length grows with progress
  const reveal = done ? 1 : transforming ? progress : active ? 0.18 : 0;
  const sheetColor = done ? "#16171b" : "#1a1b1f";
  const sheetMat = useMemo(
    () => rubberSheetMaterial(sheetColor, 0.42 - reveal * 0.08),
    [sheetColor, reveal],
  );

  useFrame((state, dt) => {
    const speed = transforming ? 3.4 : active ? 1.1 : 0.18;
    // adjacent rolls counter-rotate
    rolls.forEach((r, i) => {
      if (r.current) r.current.rotation.x += dt * speed * (i % 2 === 0 ? 1 : -1);
    });
    if (transferA.current) transferA.current.rotation.x += dt * speed * 0.7;
    if (transferB.current) transferB.current.rotation.x += dt * speed * 0.7;
    // gauge head scans side to side across roll width along X
    if (gauge.current) {
      const t = state.clock.elapsedTime;
      const scan = transforming ? 1 : active ? 0.5 : 0.12;
      gauge.current.position.x = Math.sin(t * (transforming ? 2.2 : 1.0)) * 1.3 * scan;
    }
  });

  const on = active || transforming;
  const topY = ROLL_YS[ROLL_YS.length - 1];

  // exiting sheet length grows with progress
  const sheetLen = 0.6 + reveal * 2.4;
  const sheetStartX = ROLL_LEN * 0; // centered, extends toward +X
  const sheetCenterX = sheetStartX + sheetLen / 2 - 0.1;

  return (
    <group>
      <BaseFrame size={[3.1, 0.55, 2.4]} />

      {/* two heavy side FRAMES: tall vertical steel plates */}
      {[FRAME_X, -FRAME_X].map((x) => (
        <group key={x}>
          <mesh position={[x, (topY + 0.55) / 2 + 0.3, 0]} material={MAT.bodyPaint} castShadow receiveShadow>
            <boxGeometry args={[0.42, topY + 0.9, 2.0]} />
          </mesh>
          {/* frame face bolt rows so the plates read as steel */}
          {ROLL_YS.map((y, i) =>
            [0.7, -0.7].map((z, j) => (
              <Bolt key={`${i}-${j}`} position={[x + (x > 0 ? -0.22 : 0.22), y, z]} r={0.05} />
            )),
          )}
          {/* top cross cap */}
          <mesh position={[x, topY + 0.7, 0]} material={MAT.frameSteel} castShadow>
            <boxGeometry args={[0.5, 0.3, 2.1]} />
          </mesh>
        </group>
      ))}

      {/* bearing blocks at each roll end, both frames */}
      {[FRAME_X, -FRAME_X].map((x) =>
        ROLL_YS.map((y) => (
          <mesh key={`${x}-${y}`} position={[x, y, 0]} material={MAT.frameSteel} castShadow>
            <boxGeometry args={[0.46, 0.62, 0.7]} />
          </mesh>
        )),
      )}

      {/* roll-gap adjustment screws on top of each upper bearing block (operator side) */}
      {[FRAME_X, -FRAME_X].map((x) =>
        ROLL_YS.slice(1).map((y) => (
          <group key={`adj-${x}-${y}`} position={[x, y + 0.45, 0.0]}>
            <mesh material={MAT.darkPolished} castShadow>
              <cylinderGeometry args={[0.05, 0.05, 0.35, 12]} />
            </mesh>
            <mesh position={[0, 0.22, 0]} material={MAT.hazardRed} castShadow>
              <cylinderGeometry args={[0.14, 0.14, 0.08, 6]} />
            </mesh>
          </group>
        )),
      )}

      {/* the vertical STACK of polished rolls */}
      {ROLL_YS.map((y, i) => (
        <PolishedRoll key={y} y={y} spinRef={rolls[i]} reverse={i % 2 === 1} />
      ))}

      {/* FEED BANK of compound sitting in the top nip */}
      {on && (
        <group position={[0, topY + ROLL_R - 0.06, 0]}>
          <mesh rotation={[0, 0, Math.PI / 2]} material={MAT.rubberMatte} castShadow>
            <cylinderGeometry args={[0.2, 0.2, ROLL_LEN * 0.78, 16]} />
          </mesh>
          {/* rough compound mound feeding in */}
          <mesh position={[0, 0.18, 0]} material={MAT.rubberMatte} scale={[1, 0.6, 0.7]} castShadow>
            <icosahedronGeometry args={[0.34, 1]} />
          </mesh>
        </group>
      )}

      {/* thin film carried down the face of the bottom roll between rolls */}
      {reveal > 0.04 &&
        ROLL_YS.slice(0, -1).map((y, i) => (
          <mesh
            key={`web-${y}`}
            position={[0, (y + ROLL_YS[i + 1]) / 2, ROLL_R * 0.55]}
            rotation={[0, 0, Math.PI / 2]}
            material={sheetMat}
          >
            <cylinderGeometry
              args={[ROLL_R + 0.02, ROLL_R + 0.02, ROLL_LEN * 0.9, 24, 1, true, 0, Math.PI * 0.5]}
            />
          </mesh>
        ))}

      {/* transfer / guide rollers carrying the sheet away after the bottom nip */}
      <group ref={transferA} position={[1.05, SHEET_Y - 0.02, 0]}>
        <mesh rotation={[0, 0, Math.PI / 2]} material={MAT.lightSteel} castShadow receiveShadow>
          <cylinderGeometry args={[0.18, 0.18, ROLL_LEN * 0.82, 24]} />
        </mesh>
        {[ROLL_LEN * 0.41, -ROLL_LEN * 0.41].map((x, i) => (
          <mesh key={i} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={MAT.bodyPaintDark}>
            <cylinderGeometry args={[0.21, 0.21, 0.1, 16]} />
          </mesh>
        ))}
      </group>
      <group ref={transferB} position={[2.45, SHEET_Y - 0.02, 0]}>
        <mesh rotation={[0, 0, Math.PI / 2]} material={MAT.lightSteel} castShadow receiveShadow>
          <cylinderGeometry args={[0.16, 0.16, ROLL_LEN * 0.82, 24]} />
        </mesh>
        {[ROLL_LEN * 0.41, -ROLL_LEN * 0.41].map((x, i) => (
          <mesh key={i} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={MAT.bodyPaintDark}>
            <cylinderGeometry args={[0.19, 0.19, 0.1, 16]} />
          </mesh>
        ))}
      </group>
      {/* small posts holding the transfer rollers */}
      {[1.05, 2.45].map((x) =>
        [ROLL_LEN * 0.41, -ROLL_LEN * 0.41].map((z, j) => (
          <mesh key={`${x}-${j}`} position={[x, (SHEET_Y - 0.06) / 2, z]} material={MAT.frameSteel} castShadow>
            <boxGeometry args={[0.12, SHEET_Y - 0.06, 0.12]} />
          </mesh>
        )),
      )}

      {/* the SHEET exiting horizontally from the bottom nip, travelling +X */}
      {reveal > 0.02 && (
        <RubberSheet
          position={[sheetCenterX, SHEET_Y - 0.08, 0]}
          size={[sheetLen, 0.035, ROLL_LEN * 0.82]}
          color={sheetColor}
          roughness={0.42 - reveal * 0.08}
        />
      )}

      {/* THICKNESS GAUGE: C-frame arm over the sheet, cyan-screened head scanning along X */}
      <group position={[1.75, 0, 0]}>
        {/* upright support */}
        <mesh position={[0, SHEET_Y + 0.55, -ROLL_LEN * 0.46]} material={MAT.bodyPaintDark} castShadow>
          <boxGeometry args={[0.14, SHEET_Y + 1.1, 0.14]} />
        </mesh>
        {/* cross beam (the scan track) above the sheet */}
        <mesh
          position={[0, SHEET_Y + 1.05, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          material={MAT.lightSteel}
          castShadow
        >
          <cylinderGeometry args={[0.06, 0.06, ROLL_LEN * 0.9, 14]} />
        </mesh>
        {/* travelling sensor head */}
        <group ref={gauge} position={[0, SHEET_Y + 1.05, 0]}>
          {/* C-frame straddling the sheet */}
          <mesh position={[0, -0.18, 0]} material={MAT.bodyPaint} castShadow>
            <boxGeometry args={[0.26, 0.5, 0.22]} />
          </mesh>
          {/* lower jaw under the sheet */}
          <mesh position={[0, -(SHEET_Y + 1.05) + (SHEET_Y - 0.18), 0]} material={MAT.bodyPaint} castShadow>
            <boxGeometry args={[0.26, 0.12, 0.3]} />
          </mesh>
          {/* cyan screen facing operator (+Z) */}
          <mesh position={[0, -0.05, 0.13]} material={gaugeScreenMat}>
            <boxGeometry args={[0.2, 0.16, 0.02]} />
          </mesh>
          {/* sensor emitter eye underside */}
          <mesh position={[0, -0.42, 0]} material={gaugeEyeMat}>
            <sphereGeometry args={[0.04, 12, 12]} />
          </mesh>
        </group>
      </group>

      {/* drive side: gear housing + motor on the frame end (-X) */}
      <GearHousing position={[-2.5, 1.4, 0]} size={[0.7, 2.2, 1.4]} material={MAT.bodyPaintDark} />
      <Motor position={[-3.25, 1.7, 0]} length={1.0} radius={0.4} axis="x" />
      {/* drive coupling stub into bottom roll */}
      <mesh position={[-2.25, ROLL_YS[0], 0]} rotation={[0, 0, Math.PI / 2]} material={MAT.darkPolished} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 0.4, 14]} />
      </mesh>

      {/* control cabinet on the operator side */}
      <ControlPanel position={[2.6, 0, 1.5]} rotation={[0, -0.5, 0]} on={on} />
    </group>
  );
}

const gaugeScreenMat = new THREE.MeshStandardMaterial({
  color: "#06343d",
  emissive: "#22d3ee",
  emissiveIntensity: 1.5,
  roughness: 0.22,
});

const gaugeEyeMat = new THREE.MeshStandardMaterial({
  color: "#22d3ee",
  emissive: "#22d3ee",
  emissiveIntensity: 2.0,
  roughness: 0.3,
});
