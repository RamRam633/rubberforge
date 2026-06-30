#!/usr/bin/env node
// Capture the RubberForge marketing demo reel (the /demo-video route) to a video
// or to a deterministic frame sequence.
//
// Usage:
//   node scripts/capture-marketing-video.mjs [--mode=video|frames] [--fps=15]
//
//   --mode=video   (default) Playwright records the auto-playing reel in real
//                  time -> marketing-video-output/rubberforge-demo.webm. If
//                  ffmpeg is present it is also transcoded to .mp4.
//   --mode=frames  Deterministic: seek the reel frame-by-frame and screenshot
//                  each -> marketing-video-output/frames/*.png + manifest.json,
//                  then print the exact ffmpeg command to assemble the .mp4.
//
// Env:
//   DEMO_BASE   base origin of the running app (default http://localhost:5194)
//
// Requirements: a running RubberForge server (dev or, preferred, production),
// Playwright (`npm i -D playwright && npx playwright install chromium`), and
// optionally ffmpeg for mp4 assembly. The script reports clearly when a
// requirement is missing instead of faking output.

import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const m = a.match(/^--([^=]+)=?(.*)$/);
    return m ? [m[1], m[2] || true] : [a, true];
  }),
);
const MODE = args.mode === "frames" ? "frames" : "video";
const FPS = Math.max(5, Math.min(30, parseInt(args.fps || "15", 10)));
const BASE = (process.env.DEMO_BASE || "http://localhost:5194").replace(/\/$/, "");
const DEMO_URL = `${BASE}/demo-video?ui=0&play=1`;
const W = 1920;
const H = 1080;
const OUT = path.resolve("marketing-video-output");
const FRAMES_DIR = path.join(OUT, "frames");

// Resolve a usable ffmpeg: prefer a system ffmpeg on PATH (can mux mp4), then
// fall back to the `ffmpeg-static` devDependency (a full static build with
// libx264 + the mp4 muxer). Returns a binary path/name, or null.
async function resolveFfmpeg() {
  if (spawnSync("ffmpeg", ["-version"], { stdio: "ignore" }).status === 0) return "ffmpeg";
  try {
    const mod = await import("ffmpeg-static");
    const p = mod.default || mod;
    if (typeof p === "string" && existsSync(p)) return p;
  } catch {
    /* not installed */
  }
  return null;
}

async function loadPlaywright() {
  try {
    return await import("playwright");
  } catch {
    return null;
  }
}

function fail(msg) {
  console.error(`\n[capture] ${msg}\n`);
  process.exit(1);
}

async function main() {
  mkdirSync(OUT, { recursive: true });

  const pw = await loadPlaywright();
  if (!pw) {
    fail(
      "Playwright is not installed. Install it, then re-run:\n" +
        "  npm i -D playwright\n" +
        "  npx playwright install chromium\n" +
        `  node scripts/capture-marketing-video.mjs --mode=${MODE}\n\n` +
        "No video was produced. The /demo-video route still works in a browser; " +
        "you can also screen-record it manually at 1920x1080 (see VIDEO_EXPORT.md).",
    );
  }
  const { chromium } = pw;
  const ffmpegBin = await resolveFfmpeg();

  console.log(`[capture] mode=${MODE} base=${BASE} viewport=${W}x${H} ffmpeg=${ffmpegBin || "none"}`);

  const browser = await chromium.launch({ args: ["--autoplay-policy=no-user-gesture-required"] });

  if (MODE === "video") {
    const context = await browser.newContext({
      viewport: { width: W, height: H },
      deviceScaleFactor: 1,
      reducedMotion: "no-preference",
      recordVideo: { dir: OUT, size: { width: W, height: H } },
    });
    const page = await context.newPage();
    // suppress the simulator first-visit modal in the iframes (same origin)
    await page.goto(BASE, { waitUntil: "domcontentloaded" }).catch(() => {});
    await page.evaluate(() => {
      try {
        localStorage.setItem("rf-entered-factory", "1");
      } catch {}
    });
    await page.goto(DEMO_URL, { waitUntil: "load" });
    await page.waitForFunction("window.__demoVideo && window.__demoVideo.total", null, { timeout: 20000 });
    const total = await page.evaluate("window.__demoVideo.total");
    await page.evaluate("window.__demoVideo.seek(0)");
    console.log(`[capture] recording ${total}s of real-time playback...`);
    await page.waitForTimeout((total + 2) * 1000);
    const videoHandle = page.video();
    await context.close(); // finalizes the webm
    await browser.close();

    const webmTmp = videoHandle ? await videoHandle.path() : null;
    const webm = path.join(OUT, "rubberforge-demo.webm");
    if (webmTmp && existsSync(webmTmp)) {
      if (webmTmp !== webm) {
        // move/rename to the stable name
        rmSync(webm, { force: true });
        spawnSync("mv", [webmTmp, webm]);
      }
      console.log(`[capture] wrote ${webm}`);
      if (ffmpegBin) {
        const mp4 = path.join(OUT, "rubberforge-marketing-demo.mp4");
        const r = spawnSync(ffmpegBin, ["-y", "-i", webm, "-c:v", "libx264", "-preset", "slow", "-crf", "21", "-pix_fmt", "yuv420p", "-movflags", "+faststart", mp4], {
          stdio: "inherit",
        });
        if (r.status === 0) console.log(`[capture] transcoded -> ${mp4}`);
        else console.log("[capture] ffmpeg transcode failed; keep the .webm or assemble manually.");
      } else {
        console.log(
          "[capture] ffmpeg not found. The .webm is a finished landscape video and is usable as-is.\n" +
            "          To make an .mp4:  ffmpeg -i marketing-video-output/rubberforge-demo.webm \\\n" +
            "            -c:v libx264 -pix_fmt yuv420p -movflags +faststart marketing-video-output/rubberforge-marketing-demo.mp4",
        );
      }
    } else {
      fail("Playwright did not produce a video file. Check that the server is running and reachable.");
    }
    return;
  }

  // ---- frames mode: deterministic seek-stepped screenshots ----
  rmSync(FRAMES_DIR, { recursive: true, force: true });
  mkdirSync(FRAMES_DIR, { recursive: true });
  const context = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 1, reducedMotion: "no-preference" });
  const page = await context.newPage();
  await page.goto(BASE, { waitUntil: "domcontentloaded" }).catch(() => {});
  await page.evaluate(() => {
    try {
      localStorage.setItem("rf-entered-factory", "1");
    } catch {}
  });
  await page.goto(DEMO_URL, { waitUntil: "load" });
  await page.waitForFunction("window.__demoVideo && window.__demoVideo.total", null, { timeout: 20000 });
  const total = await page.evaluate("window.__demoVideo.total");
  const frameCount = Math.round(total * FPS);
  console.log(`[capture] frames mode: ${frameCount} frames @ ${FPS}fps (total ${total}s)`);

  let lastRoute = "";
  for (let f = 0; f < frameCount; f++) {
    const t = f / FPS;
    await page.evaluate((tt) => window.__demoVideo.seek(tt), t);
    // when the shown route changes, give the real page time to load/scroll
    const route = await page.evaluate("(window.__demoVideo.currentRoute && window.__demoVideo.currentRoute()) || ''");
    if (route !== lastRoute) {
      lastRoute = route;
      await page.waitForTimeout(1400);
    } else {
      await page.waitForTimeout(40);
    }
    const name = `frame_${String(f).padStart(5, "0")}.png`;
    await page.screenshot({ path: path.join(FRAMES_DIR, name) });
    if (f % 50 === 0) console.log(`[capture]  ${f}/${frameCount}`);
  }
  await context.close();
  await browser.close();

  const manifest = { title: "RubberForge marketing demo", width: W, height: H, fps: FPS, frameCount, totalSeconds: total };
  writeFileSync(path.join(OUT, "manifest.json"), JSON.stringify(manifest, null, 2));
  const ffmpegCmd = `ffmpeg -y -framerate ${FPS} -i marketing-video-output/frames/frame_%05d.png -c:v libx264 -pix_fmt yuv420p -movflags +faststart marketing-video-output/rubberforge-marketing-demo.mp4`;
  writeFileSync(path.join(OUT, "assemble.sh"), `#!/bin/sh\n${ffmpegCmd}\n`);
  console.log(`[capture] wrote ${frameCount} frames + manifest.json`);
  console.log(`[capture] assemble with:\n  ${ffmpegCmd}`);
  if (ffmpegBin) {
    const mp4 = path.join(OUT, "rubberforge-marketing-demo.mp4");
    const r = spawnSync(
      ffmpegBin,
      ["-y", "-framerate", String(FPS), "-i", path.join(FRAMES_DIR, "frame_%05d.png"), "-c:v", "libx264", "-pix_fmt", "yuv420p", "-movflags", "+faststart", mp4],
      { stdio: "inherit" },
    );
    if (r.status === 0) console.log(`[capture] assembled ${mp4}`);
  } else {
    console.log("[capture] no ffmpeg available; run the command above after installing ffmpeg (or `npm i -D ffmpeg-static`).");
  }
}

main().catch((e) => fail(e?.stack || String(e)));
