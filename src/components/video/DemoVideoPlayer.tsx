"use client";

// Cinematic, capture-friendly product demo reel for RubberForge. A single iframe
// is driven through the real app routes with Ken Burns zoom/pan, on-screen
// captions, scene titles, a guide cursor, and crossfades. Title scenes render
// branded cards. Motion is driven imperatively in the rAF loop (refs, not React
// state) so it stays smooth and deterministic for capture.
//
// Query params:
//   ?play=1   autostart immediately (default true)
//   ?ui=0     hide playback controls (used for clean capture)

import { useCallback, useEffect, useRef, useState } from "react";
import {
  MARKETING_SCENES,
  sceneStartTimes,
  totalDurationSeconds,
  VIDEO_TITLE,
  VIDEO_URL,
  type VideoScene,
} from "@/lib/video/rubberforgeMarketingVideo";

const STARTS = sceneStartTimes();
const TOTAL = totalDurationSeconds();

const lerp = (a: number, b: number, t: number) => a + (b - a) * Math.max(0, Math.min(1, t));

function sceneIndexAt(elapsed: number): number {
  for (let i = MARKETING_SCENES.length - 1; i >= 0; i--) {
    if (elapsed >= STARTS[i]) return i;
  }
  return 0;
}

export function DemoVideoPlayer() {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const stageInnerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);

  const loadedRouteRef = useRef<string>("");
  const subRouteRef = useRef<number>(-1);
  const curIdxRef = useRef<number>(0);
  // clock: one rAF loop accumulates delta into elapsedRef while playingRef is true
  const elapsedRef = useRef<number>(0);
  const lastTsRef = useRef<number>(0);
  const playingRef = useRef<boolean>(true);
  const endedRef = useRef<boolean>(false);
  const applyFrameRef = useRef<(t: number) => void>(() => {});

  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [ended, setEnded] = useState(false);
  const [showUI, setShowUI] = useState(true);

  // read query params on mount; suppress the simulator first-visit modal in the
  // iframe by pre-setting the shared (same-origin) localStorage flag.
  useEffect(() => {
    try {
      const p = new URLSearchParams(window.location.search);
      if (p.get("ui") === "0") setShowUI(false);
      if (p.get("play") === "0") setPlaying(false);
      localStorage.setItem("rf-entered-factory", "1");
    } catch {
      /* ignore */
    }
  }, []);

  const scene = MARKETING_SCENES[idx];

  const scrollFrameTo = useCallback((target: string | number | undefined) => {
    const win = frameRef.current?.contentWindow;
    const doc = frameRef.current?.contentDocument;
    if (!win || !doc) return;
    try {
      const body = doc.body;
      const max = Math.max(0, (body?.scrollHeight ?? 0) - win.innerHeight);
      if (typeof target === "number") {
        win.scrollTo({ top: max * target, behavior: "auto" });
        return;
      }
      if (typeof target === "string") {
        const needle = target.toLowerCase();
        const els = Array.from(doc.querySelectorAll("span,h2,h3,p"));
        const hit = els.find((el) => (el.textContent || "").toLowerCase().includes(needle));
        if (hit) {
          const rect = (hit as HTMLElement).getBoundingClientRect();
          const top = win.scrollY + rect.top - win.innerHeight * 0.22;
          win.scrollTo({ top: Math.max(0, Math.min(max, top)), behavior: "auto" });
          return;
        }
      }
      win.scrollTo({ top: 0, behavior: "auto" });
    } catch {
      /* cross-doc access guard */
    }
  }, []);

  const loadRoute = useCallback(
    (route: string, target: string | number | undefined) => {
      const frame = frameRef.current;
      if (!frame) return;
      if (loadedRouteRef.current === route) {
        scrollFrameTo(target);
        return;
      }
      loadedRouteRef.current = route;
      // crossfade cover to hide the reload flash
      if (coverRef.current) coverRef.current.style.opacity = "1";
      frame.onload = () => {
        try {
          frame.contentWindow?.localStorage.setItem("rf-entered-factory", "1");
        } catch {
          /* ignore */
        }
        // settle, then scroll + reveal
        window.setTimeout(() => {
          scrollFrameTo(target);
          if (coverRef.current) coverRef.current.style.opacity = "0";
        }, 220);
      };
      frame.src = route;
    },
    [scrollFrameTo],
  );

  // when the scene changes, set up its first route (title scenes hide the iframe)
  useEffect(() => {
    subRouteRef.current = -1;
    if (scene.kind === "title" || scene.routes.length === 0) {
      loadedRouteRef.current = "";
      return;
    }
    subRouteRef.current = 0;
    loadRoute(scene.routes[0], scene.scrollTo);
    // reset Ken Burns origin for the new scene
    if (stageInnerRef.current && scene.zoom) {
      stageInnerRef.current.style.transformOrigin = `${scene.zoom.originX * 100}% ${scene.zoom.originY * 100}%`;
    }
  }, [idx, scene, loadRoute]);

  // keep refs in sync with state for the mount-only rAF loop
  useEffect(() => {
    playingRef.current = playing;
  }, [playing]);
  useEffect(() => {
    endedRef.current = ended;
  }, [ended]);

  // master clock: a single rAF loop for the component's life. Accumulates real
  // delta time into elapsedRef only while playing. Robust to dev StrictMode /
  // Fast Refresh and to seeking (which just sets elapsedRef).
  useEffect(() => {
    let raf = 0;
    lastTsRef.current = performance.now();
    const tick = (now: number) => {
      // clamp per-tick delta so a backgrounded tab (sparse rAF) can never
      // fast-forward / skip scenes; foreground 60fps is unaffected.
      const dt = Math.min(0.1, (now - lastTsRef.current) / 1000);
      lastTsRef.current = now;
      if (playingRef.current && !endedRef.current) {
        const next = Math.min(TOTAL, elapsedRef.current + dt);
        elapsedRef.current = next;
        applyFrameRef.current(next);
        if (next >= TOTAL) {
          endedRef.current = true;
          setEnded(true);
          setPlaying(false);
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // expose a tiny control API for the capture script (and manual testing):
  // window.__demoVideo.seek(t) jumps the reel to absolute time t.
  useEffect(() => {
    const api = {
      total: TOTAL,
      sceneCount: MARKETING_SCENES.length,
      seek: (t: number) => {
        const clamped = Math.max(0, Math.min(TOTAL - 0.01, t));
        elapsedRef.current = clamped;
        endedRef.current = false;
        setEnded(false);
        setPlaying(true);
        applyFrameRef.current(clamped);
      },
      currentRoute: () => loadedRouteRef.current,
    };
    (window as unknown as { __demoVideo?: typeof api }).__demoVideo = api;
    return () => {
      delete (window as unknown as { __demoVideo?: typeof api }).__demoVideo;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // apply a single frame of motion at absolute time `elapsed`
  const applyFrame = (elapsed: number) => {
    const i = sceneIndexAt(elapsed);
    if (i !== curIdxRef.current) {
      curIdxRef.current = i;
      setIdx(i);
    }
    const s = MARKETING_SCENES[i];
    const p = s.durationSeconds > 0 ? (elapsed - STARTS[i]) / s.durationSeconds : 0;

    // multi-route cross-dissolve within a scene
    if (s.kind === "app" && s.routes.length > 1) {
      const sub = Math.min(s.routes.length - 1, Math.floor(p * s.routes.length));
      if (sub !== subRouteRef.current) {
        subRouteRef.current = sub;
        const frac = typeof s.scrollTo === "number" ? s.scrollTo : 0;
        loadRoute(s.routes[sub], sub === 0 ? s.scrollTo : frac);
      }
    }

    // Ken Burns
    if (stageInnerRef.current) {
      if (s.kind === "app" && s.zoom) {
        const sc = lerp(s.zoom.from, s.zoom.to, p);
        stageInnerRef.current.style.transform = `scale(${sc.toFixed(4)})`;
        stageInnerRef.current.style.transformOrigin = `${s.zoom.originX * 100}% ${s.zoom.originY * 100}%`;
      } else {
        stageInnerRef.current.style.transform = "scale(1)";
      }
    }

    // caption fade (in over first 0.6s, out over last 0.6s of the scene)
    if (captionRef.current) {
      const tIn = Math.min(1, (elapsed - STARTS[i]) / 0.6);
      const tOut = Math.min(1, (STARTS[i] + s.durationSeconds - elapsed) / 0.6);
      captionRef.current.style.opacity = String(Math.max(0, Math.min(tIn, tOut)));
    }

    // guide cursor
    if (cursorRef.current) {
      if (s.kind === "app" && s.cursor) {
        cursorRef.current.style.opacity = "1";
        const cx = lerp(s.cursor.from[0], s.cursor.to[0], easeInOut(p));
        const cy = lerp(s.cursor.from[1], s.cursor.to[1], easeInOut(p));
        cursorRef.current.style.left = `${cx * 100}%`;
        cursorRef.current.style.top = `${cy * 100}%`;
        const click = s.cursor.clickAt;
        const ringOn = click !== undefined && Math.abs(p - click) < 0.06;
        cursorRef.current.dataset.click = ringOn ? "1" : "0";
      } else {
        cursorRef.current.style.opacity = "0";
      }
    }

    // progress bar
    if (progressRef.current) progressRef.current.style.width = `${(elapsed / TOTAL) * 100}%`;
  };
  // keep the loop pointed at the latest applyFrame closure
  applyFrameRef.current = applyFrame;

  const restart = () => {
    elapsedRef.current = 0;
    endedRef.current = false;
    loadedRouteRef.current = "";
    subRouteRef.current = -1;
    curIdxRef.current = 0;
    setEnded(false);
    setIdx(0);
    setPlaying(true);
    applyFrame(0);
  };

  const togglePlay = () => {
    if (ended) {
      restart();
      return;
    }
    setPlaying((p) => !p);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0d0c0a]">
      {/* 16:9 stage that fits any viewport (exact at 1920x1080) */}
      <div
        className="relative overflow-hidden bg-[#f5f1e8] shadow-2xl"
        style={{
          width: "min(100vw, calc(100vh * 16 / 9))",
          height: "min(100vh, calc(100vw * 9 / 16))",
        }}
      >
        {/* App layer (Ken Burns wrapper) */}
        <div ref={stageInnerRef} className="absolute inset-0 will-change-transform">
          <iframe
            ref={frameRef}
            title="RubberForge"
            className="h-full w-full border-0 bg-[#f5f1e8]"
            style={{ display: scene.kind === "title" ? "none" : "block" }}
            sandbox="allow-same-origin allow-scripts"
          />
        </div>

        {/* Title / closing cards */}
        {scene.kind === "title" && <TitleCard closing={idx === MARKETING_SCENES.length - 1} />}

        {/* reload crossfade cover */}
        <div
          ref={coverRef}
          className="pointer-events-none absolute inset-0 bg-[#f5f1e8] transition-opacity duration-300"
          style={{ opacity: 0 }}
        />

        {/* guide cursor */}
        <div
          ref={cursorRef}
          className="demo-cursor pointer-events-none absolute z-30 -translate-x-1/2 -translate-y-1/2"
          style={{ opacity: 0, left: "50%", top: "50%", transition: "opacity 0.4s" }}
          data-click="0"
        >
          <span className="demo-cursor-ring" />
          <svg viewBox="0 0 24 24" className="h-6 w-6 drop-shadow" aria-hidden>
            <path d="M4 3 L4 19 L9 14 L12.5 21 L15 20 L11.5 13 L18 13 Z" fill="#1f1b17" stroke="#fffdf8" strokeWidth="1.2" strokeLinejoin="round" />
          </svg>
        </div>

        {/* vignette + brand letterbox frame */}
        <div className="pointer-events-none absolute inset-0 z-20" style={{ boxShadow: "inset 0 0 120px 24px rgba(31,27,23,0.16)" }} />

        {/* scene title chip (top-left) */}
        {scene.kind === "app" && (
          <div className="pointer-events-none absolute left-[2.4%] top-[4.2%] z-30 flex items-center gap-2">
            <span className="rounded-md border border-line bg-base-950/80 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted backdrop-blur-sm">
              {scene.title}
            </span>
            <span className="rounded-md bg-violet-500/90 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-base-950">
              {scene.routes[Math.max(0, subRouteRef.current)] || scene.area}
            </span>
          </div>
        )}

        {/* caption (bottom) */}
        {scene.kind === "app" && (
          <div
            ref={captionRef}
            className="pointer-events-none absolute bottom-[7.5%] left-1/2 z-30 w-[88%] max-w-[78%] -translate-x-1/2 text-center"
            style={{ opacity: 0 }}
          >
            <div className="inline-block rounded-2xl border border-line bg-base-950/85 px-6 py-3 backdrop-blur-md">
              {scene.caption.split("\n").map((line, n) => (
                <p
                  key={n}
                  className={
                    n === 0
                      ? "font-display text-[1.7vw] font-semibold leading-tight text-ink"
                      : "mt-1 text-[1.12vw] leading-snug text-ink-muted"
                  }
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* progress bar */}
        <div className="absolute bottom-0 left-0 right-0 z-30 h-[3px] bg-[#1f1b17]/10">
          <div ref={progressRef} className="h-full bg-gradient-to-r from-violet-500 via-cyan-400 to-molten-400" style={{ width: "0%" }} />
        </div>

        {/* VayuAI corner mark */}
        <div className="pointer-events-none absolute bottom-[5%] right-[2.2%] z-30 font-mono text-[11px] tracking-[0.2em] text-ink-faint">
          {VIDEO_URL}
        </div>
      </div>

      {/* playback controls (hidden in capture with ?ui=0) */}
      {showUI && (
        <div className="absolute bottom-4 left-1/2 z-[210] flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/15 bg-black/55 px-4 py-2 text-white backdrop-blur">
          <button onClick={togglePlay} className="text-[13px] font-medium hover:text-violet-300">
            {ended ? "Replay" : playing ? "Pause" : "Play"}
          </button>
          <span className="h-3 w-px bg-white/20" />
          <button onClick={restart} className="text-[12px] text-white/70 hover:text-white">
            Restart
          </button>
          <span className="h-3 w-px bg-white/20" />
          <span className="font-mono text-[11px] text-white/60">
            {MARKETING_SCENES.length} scenes · ~{Math.round(TOTAL)}s
          </span>
          <span className="h-3 w-px bg-white/20" />
          <span className="font-mono text-[11px] text-white/50">{idx + 1}. {scene.title}</span>
        </div>
      )}
    </div>
  );
}

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function TitleCard({ closing }: { closing: boolean }) {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#f5f1e8] px-[8%] text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(900px 520px at 70% 8%, rgba(109,59,212,0.08), transparent 60%), radial-gradient(720px 480px at 8% 92%, rgba(184,134,11,0.07), transparent 58%)",
        }}
      />
      <div className="relative flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1b17]">
          <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
            <defs>
              <linearGradient id="dv-forge" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#6d3bd4" />
                <stop offset="1" stopColor="#0e8fa8" />
              </linearGradient>
            </defs>
            <circle cx="16" cy="16" r="8.2" fill="none" stroke="url(#dv-forge)" strokeWidth="1.8" />
            <circle cx="16" cy="16" r="3.4" fill="url(#dv-forge)" />
            <path d="M16 5.6 L16 9.2 M16 22.8 L16 26.4 M5.6 16 L9.2 16 M22.8 16 L26.4 16" stroke="url(#dv-forge)" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </span>
        <span className="font-display text-[3vw] font-semibold tracking-tight text-ink">
          Rubber<span className="text-gradient">Forge</span>
        </span>
      </div>
      <p className="relative mt-3 font-mono text-[1vw] uppercase tracking-[0.4em] text-molten-300">by VayuAI</p>
      {!closing ? (
        <>
          <h1 className="relative mt-7 max-w-[80%] font-display text-[2.4vw] font-semibold leading-tight text-ink text-balance">
            A Virtual Factory for Rubber Manufacturing
          </h1>
          <p className="relative mt-4 max-w-[64%] text-[1.15vw] leading-relaxed text-ink-muted">
            VayuAI builds virtual factory systems for industrial digital transformation.
            RubberForge is a digital twin-style virtual factory prototype for custom rubber.
          </p>
        </>
      ) : (
        <>
          <h1 className="relative mt-7 font-display text-[2.1vw] font-semibold leading-tight text-ink">
            A virtual factory system for industrial digital transformation.
          </h1>
          <p className="relative mt-5 font-mono text-[1.3vw] tracking-[0.18em] text-violet-300">{VIDEO_URL}</p>
          <p className="relative mt-2 text-[0.95vw] text-ink-faint">{VIDEO_TITLE}</p>
        </>
      )}
    </div>
  );
}
