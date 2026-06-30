# RubberForge marketing / demo video

A real product-demo reel that walks the **actual deployed RubberForge app** end to
end and explains the bigger idea: VayuAI builds virtual factory systems for
industrial digital transformation, and RubberForge is the implementation for
custom rubber manufacturing.

It is built as a cinematic in-app route (`/demo-video`) that drives the real app
screens (via a same-origin iframe) with Ken Burns zoom/pan, on-screen captions,
scene titles, a guide cursor, and crossfades. A capture script records it.

- **Title:** RubberForge by VayuAI - A Virtual Factory for Rubber Manufacturing
- **Aspect ratio:** 16:9 landscape, designed for **1920x1080**
- **Target duration:** ~264 seconds (~4m24s), within the 3-5 minute target
- **Scenes:** 13 (see `src/lib/video/rubberforgeMarketingVideo.ts`)
- **Audio:** none (captions only). Optional voiceover script is below.
- **For:** website, LinkedIn, YouTube, customer demos, investor product explainer

Honest framing throughout: digital twin-**style**, virtual factory, **prototype**,
**simulated** demo records, **ISO 9001-aligned** QMS **model**, future
data-connected **roadmap**. It never claims a live production twin, ISO
certification, official QA records, machine connectivity, real pricing,
production-ready formulations, or exact cure settings.

## Files

| File | Purpose |
|---|---|
| `src/lib/video/rubberforgeMarketingVideo.ts` | The 13-scene timeline (durations, routes, captions, camera/cursor, capture notes). Edit this to change the story. |
| `src/app/demo-video/page.tsx` | The `/demo-video` route. |
| `src/components/video/DemoVideoPlayer.tsx` | The cinematic player (clock, iframe driver, captions, cursor, Ken Burns, title cards). |
| `scripts/capture-marketing-video.mjs` | Capture to `.webm`/`.mp4` (real-time) or to a frame sequence + ffmpeg command. |
| `marketing-video-output/` | Output folder (gitignored). |

## Preview the reel in a browser (no capture)

```bash
npm run dev            # or: npm run build && npm run start
# open http://localhost:5194/demo-video
```

Query params: `?ui=0` hides the playback controls (used for clean capture);
`?play=0` starts paused. The reel auto-plays and loops the 13 scenes.

## Capture the video

A RubberForge server must be running. **Production is preferred** for a clean
capture (no dev overlay, faster):

```bash
npm run build
npm run start          # serves on http://localhost:5194
```

Then, in another terminal, install the capture tooling once and run it. The
script auto-detects a full ffmpeg for the `.mp4` step: either a **system ffmpeg**,
or the **`ffmpeg-static`** package (a bundled static build). Install either one for
an automatic `.mp4`; without one you still get the finished `.webm` plus the exact
ffmpeg command to make the `.mp4`. (Both `playwright` and `ffmpeg-static` are kept
out of the committed dependencies so they never affect the app's deploy.)

```bash
npm i -D playwright ffmpeg-static     # capture driver + a static ffmpeg (install on demand)
npx playwright install chromium
node scripts/capture-marketing-video.mjs            # real-time -> .webm AND .mp4
# or, deterministic frame export:
node scripts/capture-marketing-video.mjs --mode=frames --fps=15
```

Point the script at a different host with `DEMO_BASE`, e.g. capture the **live
site** directly:

```bash
DEMO_BASE=https://rubberforge.vayuai.ai node scripts/capture-marketing-video.mjs
```

### Expected output (`marketing-video-output/`)

- `--mode=video` (default): `rubberforge-demo.webm` plus, when a full ffmpeg is
  available (system ffmpeg or `ffmpeg-static`), `rubberforge-marketing-demo.mp4`
  (H.264, 1920x1080, faststart - the file to upload). A pre-rendered MP4 from the
  current build is already in `marketing-video-output/`.
- `--mode=frames`: `frames/frame_00000.png ...`, `manifest.json`, `assemble.sh`,
  and (if ffmpeg present) the assembled `.mp4`.

### Assemble / transcode manually with ffmpeg

From a frame sequence:

```bash
ffmpeg -y -framerate 15 -i marketing-video-output/frames/frame_%05d.png \
  -c:v libx264 -pix_fmt yuv420p -movflags +faststart \
  marketing-video-output/rubberforge-marketing-demo.mp4
```

From the recorded `.webm`:

```bash
ffmpeg -y -i marketing-video-output/rubberforge-demo.webm \
  -c:v libx264 -pix_fmt yuv420p -movflags +faststart \
  marketing-video-output/rubberforge-marketing-demo.mp4
```

## How to regenerate

1. Edit scenes/captions/durations in `src/lib/video/rubberforgeMarketingVideo.ts`
   (or the player visuals in `DemoVideoPlayer.tsx`).
2. `npm run build && npm run start`.
3. `node scripts/capture-marketing-video.mjs`.

## Add voiceover later (optional)

The video is designed to work with captions only. To add narration:

1. Record the script below as `voiceover.mp3` (one continuous take, ~4m20s, or
   per-scene clips).
2. Mux it onto the video:

   ```bash
   ffmpeg -i rubberforge-marketing-demo.mp4 -i voiceover.mp3 \
     -c:v copy -c:a aac -shortest rubberforge-marketing-demo-vo.mp4
   ```

If you record per scene, the scene durations are in the timeline file; pad or
trim narration to match, or adjust `durationSeconds` and re-capture.

### Optional voiceover script (not required)

1. **VayuAI context** - "VayuAI builds virtual factory systems for industrial digital transformation. RubberForge is our implementation for custom rubber manufacturing."
2. **Why** - "A factory is not a folder of PDFs, emails, and tribal knowledge. RubberForge turns that scattered knowledge into one explorable system."
3. **Overview** - "This is a digital twin-style virtual rubber factory: production, QA, chemistry, quality management, AI agents, traceability, and outputs in one system."
4. **Virtual factory** - "Walk the production floor in 3D and follow material from raw polymer to finished elastomer, station by station."
5. **Chemistry and materials** - "Rubber manufacturing is chemistry plus process. Polymer family, filler, cure behavior, compatibility, and application risk all shape the route."
6. **Products and routes** - "Every product maps to material families, process routes, quality expectations, and the documentation it needs."
7. **QA Lab** - "The virtual QA lab turns process assumptions into evidence: cure behavior, hardness, tensile response, and a release decision, all on simulated demo data."
8. **QMS** - "Quality is modeled as a system. The QMS model is ISO 9001-aligned and audit-readiness oriented, and it stays human-accountable."
9. **AI operating model** - "Specialized AI agents support requirements, materials, routes, lab evidence, and outputs. AI structures the work; humans stay accountable for approval and release."
10. **Digital thread** - "The digital thread is the backbone: requirement, material, process, QA sample, test record, quality record, release, and output, all traceable."
11. **Outputs** - "An RFQ package is one output, not the product. RubberForge generates the technical packages a real program needs."
12. **Roadmap** - "Today it is virtual, knowledge-connected, and workflow-ready. Next: documents, ERP and MES, quality records, machine data, and simulation."
13. **Closing** - "RubberForge by VayuAI. A virtual factory system for industrial digital transformation. Explore at rubberforge dot vayuai dot ai."

## Add background music later (optional)

```bash
ffmpeg -i rubberforge-marketing-demo.mp4 -i music.mp3 \
  -filter_complex "[1:a]volume=0.18[a]" -map 0:v -map "[a]" \
  -c:v copy -shortest rubberforge-marketing-demo-music.mp4
```

Use a licensed track (industrial/ambient/cinematic). Keep it under the captions
in level so the on-screen text stays the focus.

## Where to use the final video

- Website hero or a "See RubberForge" section
- LinkedIn (native upload of the .mp4 performs best; 1920x1080)
- YouTube (set it as the channel/product demo; .webm or .mp4)
- Customer demo decks and investor product explainers

## Known limitations

- **Capture tooling is installed on demand and kept out of the committed deps** so
  it can never affect the app's Vercel deploy. `playwright` (the browser driver) and
  `ffmpeg-static` (a static ffmpeg for the `.mp4` step) are each `npm i -D ...` when
  you want to (re)capture; the script detects them and degrades gracefully if absent.
  The current `.mp4` is already rendered in `marketing-video-output/`.
- **Real-time mode** captures the real app including 3D, so a scene can show a
  brief load/settle at its start (a crossfade hides most of it). For a perfectly
  clean cut, use `--mode=frames`, which waits for each route before each shot.
- **3D scenes are real-time**, so frames mode is deterministic for the 2D overlays
  and page content but not for the exact 3D camera phase.
- The reel depends on the app being reachable at `DEMO_BASE`. Prefer a production
  server (`npm run start`) over `npm run dev` for the cleanest, fastest capture.
- This is a marketing reel, not a narrated course. It uses captions only; audio is
  optional and added later.
