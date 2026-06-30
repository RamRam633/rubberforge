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
  IndicatorLight,
  rubberSheetMaterial,
} from "./kit";
import type { MachineModelProps } from "./types";

// Trimming / slitting + winding station: guide rollers carry the cooled, cured
// sheet in along +X, a pair of circular slitter knife wheels ride the +/- Z edges of
// the sheet path, the trimmed scrap curls away into a side bin, and the clean
// sheet builds up into a wound roll on a driven shaft at the +X end. The wound
// roll radius grows with progress. Sheet travels left to right (+X).

const SHEET_Y = 1.15; // height of the sheet path
const SHEET_W = 1.7; // trimmed sheet width (between the knives), along Z
const FRAME_X = 1.55; // half span of the side frames
const KNIFE_X = 0.0; // slitter station x position
const WIND_X = 2.65; // winding shaft x position
const WIND_CORE_R = 0.28; // empty winding core radius
const KNIFE_R = 0.34; // slitter blade radius

// One circular slitter blade: a thin polished disc with a hub, sitting on the
// cross-shaft at a sheet edge. Spins about Z so its rim cuts along the +X path.
function SlitterBlade({
  z,
  spinRef,
}: {
  z: number;
  spinRef: React.RefObject<THREE.Group>;
}) {
  return (
    <group position={[KNIFE_X, SHEET_Y, z]} ref={spinRef}>
      {/* thin polished cutting disc, flat in the X-Y plane, edge bites the sheet */}
      <mesh rotation={[Math.PI / 2, 0, 0]} material={MAT.polished} castShadow>
        <cylinderGeometry args={[KNIFE_R, KNIFE_R, 0.018, 40]} />
      </mesh>
      {/* bevelled rim ring so the blade reads as sharpened */}
      <mesh rotation={[Math.PI / 2, 0, 0]} material={MAT.darkPolished}>
        <cylinderGeometry args={[KNIFE_R + 0.006, KNIFE_R - 0.05, 0.01, 40]} />
      </mesh>
      {/* central hub clamping the disc to the cross-shaft */}
      <mesh rotation={[Math.PI / 2, 0, 0]} material={MAT.bodyPaintDark} castShadow>
        <cylinderGeometry args={[0.075, 0.075, 0.12, 18]} />
      </mesh>
      {/* hub bolts so spin reads */}
      {Array.from({ length: 4 }).map((_, i) => {
        const a = (i / 4) * Math.PI * 2;
        return <Bolt key={i} position={[Math.cos(a) * 0.05, Math.sin(a) * 0.05, 0]} r={0.018} />;
      })}
    </group>
  );
}

// A horizontal guide roller running across the sheet (long axis along Z),
// carried in the side frames. Polished idler that turns as the sheet passes.
function GuideRoller({
  x,
  spinRef,
  radius = 0.16,
}: {
  x: number;
  spinRef: React.RefObject<THREE.Group>;
  radius?: number;
}) {
  return (
    <group position={[x, SHEET_Y - radius - 0.03, 0]} ref={spinRef} rotation={[Math.PI / 2, 0, 0]}>
      <mesh material={MAT.polished} castShadow receiveShadow>
        <cylinderGeometry args={[radius, radius, SHEET_W + 0.5, 28]} />
      </mesh>
      {[(SHEET_W + 0.5) / 2, -(SHEET_W + 0.5) / 2].map((y, i) => (
        <mesh key={i} position={[0, y, 0]} material={MAT.bodyPaintDark} castShadow>
          <cylinderGeometry args={[radius * 1.12, radius * 1.12, 0.08, 18]} />
        </mesh>
      ))}
    </group>
  );
}

export function TrimmingStationModel({ active, transforming, progress = 0, done }: MachineModelProps) {
  const bladeTop = useRef<THREE.Group>(null);
  const bladeBot = useRef<THREE.Group>(null);
  const guideIn = useRef<THREE.Group>(null);
  const guideMid = useRef<THREE.Group>(null);
  const windRoll = useRef<THREE.Group>(null);

  useFrame((_, dt) => {
    // knife wheels spin fast under cut, slow when idling, near-still at rest
    const knife = transforming ? 9 : active ? 1.6 : 0.15;
    if (bladeTop.current) bladeTop.current.rotation.z -= dt * knife;
    if (bladeBot.current) bladeBot.current.rotation.z -= dt * knife;

    // guide rollers turn with the moving web
    const web = transforming ? 4.5 : active ? 1.0 : 0.08;
    if (guideIn.current) guideIn.current.rotation.y += dt * web;
    if (guideMid.current) guideMid.current.rotation.y += dt * web;

    // the take-up shaft + wound roll rotate as material winds on
    if (windRoll.current) windRoll.current.rotation.z -= dt * (transforming ? 3.0 : active ? 0.7 : 0.06);
  });

  const on = active || transforming;
  // wound-roll growth: empty when idle, builds with progress, full when done
  const wound = done ? 1 : transforming ? progress : active ? 0.12 : 0;
  const rollR = WIND_CORE_R + wound * 0.7; // outer radius of the building roll

  // sheet colour: cured feed slightly rough, cleaner once trimmed/wound
  const feedMat = useMemo(() => rubberSheetMaterial("#1b1714", 0.5), []);
  const woundMat = useMemo(() => rubberSheetMaterial("#161719", 0.42), []);
  // scrap edge strip, rough offcut compound
  const scrapMat = useMemo(() => rubberSheetMaterial("#151210", 0.85), []);

  return (
    <group>
      <BaseFrame size={[5.4, 0.5, 2.4]} position={[0, 0, 0]} />

      {/* ── twin side frames running the length of the line (along Z edges) ── */}
      {[SHEET_W / 2 + 0.34, -(SHEET_W / 2 + 0.34)].map((z) => (
        <group key={z}>
          {/* low longitudinal beam */}
          <mesh position={[0.4, 0.78, z]} material={MAT.bodyPaint} castShadow receiveShadow>
            <boxGeometry args={[4.4, 0.28, 0.22]} />
          </mesh>
          {/* uprights carrying the roller / knife bearings */}
          {[-1.55, KNIFE_X, 1.2, WIND_X].map((ux) => (
            <mesh key={ux} position={[ux, SHEET_Y - 0.18, z]} material={MAT.frameSteel} castShadow>
              <boxGeometry args={[0.2, (SHEET_Y - 0.18) * 1.05 + 0.5, 0.2]} />
            </mesh>
          ))}
        </group>
      ))}

      {/* ── incoming guide rollers (feed the sheet in) ── */}
      <GuideRoller x={-1.55} spinRef={guideIn} radius={0.17} />
      <GuideRoller x={-0.7} spinRef={guideMid} radius={0.14} />

      {/* ── incoming cured, cooled sheet travelling in along +X ── */}
      <mesh
        position={[-1.05, SHEET_Y, 0]}
        material={feedMat}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[2.1, 0.035, SHEET_W + 0.42]} />
      </mesh>
      {/* trimmed-width sheet between knives and the wind-up */}
      <mesh position={[1.35, SHEET_Y, 0]} material={woundMat} castShadow receiveShadow>
        <boxGeometry args={[2.5, 0.03, SHEET_W]} />
      </mesh>

      {/* ── slitter cross-shaft spanning the two blades ── */}
      <mesh position={[KNIFE_X, SHEET_Y, 0]} rotation={[Math.PI / 2, 0, 0]} material={MAT.darkPolished} castShadow>
        <cylinderGeometry args={[0.05, 0.05, SHEET_W + 0.9, 18]} />
      </mesh>
      {/* bearing blocks at each frame for the slitter shaft */}
      {[SHEET_W / 2 + 0.34, -(SHEET_W / 2 + 0.34)].map((z) => (
        <mesh key={z} position={[KNIFE_X, SHEET_Y, z]} material={MAT.frameSteel} castShadow>
          <boxGeometry args={[0.26, 0.3, 0.26]} />
        </mesh>
      ))}
      {/* the two circular slitter blades riding the sheet edges */}
      <SlitterBlade z={SHEET_W / 2 - 0.02} spinRef={bladeTop} />
      <SlitterBlade z={-(SHEET_W / 2 - 0.02)} spinRef={bladeBot} />

      {/* ── trimmed scrap edges curling away to the back-side bin ── */}
      {on &&
        [SHEET_W / 2 + 0.02, -(SHEET_W / 2 + 0.02)].map((z, i) => {
          const sign = z > 0 ? 1 : -1;
          return (
            <mesh
              key={i}
              position={[0.55, SHEET_Y - 0.18, z + sign * 0.32]}
              rotation={[sign * 0.5, 0, 0.35]}
              material={scrapMat}
              castShadow
            >
              <boxGeometry args={[1.5, 0.02, 0.12]} />
            </mesh>
          );
        })}
      {/* scrap collection bin behind the line (-Z) */}
      <group position={[0.55, 0.42, SHEET_W / 2 + 0.95]}>
        <mesh material={MAT.bodyPaintDark} castShadow receiveShadow>
          <boxGeometry args={[1.5, 0.7, 0.7]} />
        </mesh>
        {/* rim */}
        <mesh position={[0, 0.36, 0]} material={MAT.lightSteel}>
          <boxGeometry args={[1.56, 0.05, 0.76]} />
        </mesh>
        {/* loose offcut coils in the bin */}
        {on &&
          [-0.4, 0.05, 0.45].map((ox, i) => (
            <mesh key={i} position={[ox, 0.18, 0]} rotation={[Math.PI / 2, 0, i * 0.7]} material={scrapMat}>
              <torusGeometry args={[0.14, 0.045, 8, 18]} />
            </mesh>
          ))}
      </group>

      {/* ── winding shaft + building wound roll at the +X end ── */}
      <group position={[WIND_X, SHEET_Y, 0]} ref={windRoll}>
        {/* the take-up core shaft */}
        <mesh rotation={[Math.PI / 2, 0, 0]} material={MAT.darkPolished} castShadow>
          <cylinderGeometry args={[WIND_CORE_R, WIND_CORE_R, SHEET_W + 0.6, 28]} />
        </mesh>
        {/* concentric rubber layers of the finished roll, grow with progress */}
        {wound > 0.02 && (
          <mesh rotation={[Math.PI / 2, 0, 0]} material={woundMat} castShadow receiveShadow>
            <cylinderGeometry args={[rollR, rollR, SHEET_W + 0.04, 36]} />
          </mesh>
        )}
        {/* a couple of visible wrap seams so the roll reads as wound layers */}
        {wound > 0.25 &&
          [0.55, 0.78].map((f, i) => (
            <mesh key={i} rotation={[Math.PI / 2, 0, 0]} material={MAT.bodyPaintDark}>
              <cylinderGeometry
                args={[WIND_CORE_R + (rollR - WIND_CORE_R) * f, WIND_CORE_R + (rollR - WIND_CORE_R) * f, SHEET_W + 0.06, 30, 1, true]}
              />
            </mesh>
          ))}
        {/* shaft end flanges so rotation reads */}
        {[(SHEET_W + 0.6) / 2, -(SHEET_W + 0.6) / 2].map((y, i) => (
          <group key={i} position={[0, y, 0]}>
            <mesh rotation={[Math.PI / 2, 0, 0]} material={MAT.bodyPaintDark} castShadow>
              <cylinderGeometry args={[WIND_CORE_R * 1.2, WIND_CORE_R * 1.2, 0.1, 22]} />
            </mesh>
            {Array.from({ length: 4 }).map((_, b) => {
              const a = (b / 4) * Math.PI * 2;
              return <Bolt key={b} position={[Math.cos(a) * 0.18, i ? 0.06 : -0.06, Math.sin(a) * 0.18]} r={0.022} />;
            })}
          </group>
        ))}
      </group>
      {/* winding-shaft bearing pillars at each frame */}
      {[SHEET_W / 2 + 0.34, -(SHEET_W / 2 + 0.34)].map((z) => (
        <mesh key={z} position={[WIND_X, SHEET_Y, z]} material={MAT.frameSteel} castShadow>
          <boxGeometry args={[0.3, 0.34, 0.3]} />
        </mesh>
      ))}

      {/* ── drive: gear housing + motor turning the take-up shaft ── */}
      <GearHousing position={[WIND_X, SHEET_Y, -(SHEET_W / 2 + 0.62)]} size={[0.5, 0.7, 0.55]} material={MAT.bodyPaintDark} />
      <Motor position={[WIND_X, SHEET_Y, -(SHEET_W / 2 + 1.15)]} length={0.8} radius={0.28} axis="z" />

      {/* ── operator control panel toward +Z (viewer side) ── */}
      <ControlPanel position={[-2.4, 0, SHEET_W / 2 + 0.7]} rotation={[0, 0.35, 0]} on={on} />

      {/* status indicator strip on the front beam, operator side */}
      <group position={[1.2, 0.95, SHEET_W / 2 + 0.36]}>
        <mesh material={MAT.blackPlastic} castShadow>
          <boxGeometry args={[0.5, 0.16, 0.06]} />
        </mesh>
        <IndicatorLight position={[-0.14, 0, 0.05]} color="#34d399" on={on} />
        <IndicatorLight position={[0, 0, 0.05]} color="#ff8c2b" on={transforming} />
        <IndicatorLight position={[0.14, 0, 0.05]} color="#cf3a2c" on={done} />
      </group>
    </group>
  );
}
