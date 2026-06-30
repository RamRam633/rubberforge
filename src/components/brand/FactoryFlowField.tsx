"use client";

// Interactive factory flow field for the hero. Tracer particles stream along an
// incompressible curl-noise velocity field with a gentle line-direction drift
// (material moving through the factory), leaving streamline trails you can read.
// The cursor is a vortex: hovering swirls the flow, moving stirs and injects
// compound. Clicking fires a cure pulse: an expanding wavefront ring plus a
// burst of sparks (vulcanization spreading outward). Warm-paper family palette.
// Pauses its animation loop when the hero is scrolled out of view.
import { useEffect, useRef } from "react";

// violet, deep violet, cyan, magenta, gold (tuned for warm paper)
const INKS = ["#5a2fb0", "#4a2a8f", "#0c6f86", "#9c2f63", "#8a6510"];

type P = { x: number; y: number; px: number; py: number; vx: number; vy: number; age: number; max: number; c: number; fresh: boolean };
type Ripple = { x: number; y: number; t0: number };
type Spark = { x: number; y: number; px: number; py: number; vx: number; vy: number; t0: number; life: number; c: number };

export default function FactoryFlowField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d", { alpha: true })!;
    const parent = canvas.parentElement!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, dpr = Math.min(devicePixelRatio || 1, 1.5);
    let visible = true;

    // soft round dye sprite per ink (the compound bloom under the cursor)
    const sprites = INKS.map((col) => {
      const s = 64, c = document.createElement("canvas");
      c.width = c.height = s;
      const g = c.getContext("2d")!;
      const rg = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
      rg.addColorStop(0, col); rg.addColorStop(0.16, col); rg.addColorStop(1, "transparent");
      g.fillStyle = rg; g.fillRect(0, 0, s, s);
      return c;
    });

    const resize = () => {
      const r = parent.getBoundingClientRect();
      w = Math.max(1, r.width); h = Math.max(1, r.height);
      dpr = Math.min(devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    // pause the loop when the hero band is off-screen
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 });
    io.observe(parent);

    // Reduced motion: keep the hero fully static. No animation loop, no pointer
    // listeners, no drift; the canvas stays clean and the headline/visual carry it.
    if (reduce) {
      return () => {
        ro.disconnect();
        io.disconnect();
      };
    }

    const COUNT = Math.round(Math.min(2300, Math.max(800, (w * h) / 620)));
    const ps: P[] = [];
    const make = (x?: number, y?: number): P => {
      const xx = x ?? Math.random() * w, yy = y ?? Math.random() * h;
      return { x: xx, y: yy, px: xx, py: yy, vx: 0, vy: 0, age: Math.random() * 8, max: 7 + Math.random() * 9, c: (Math.pow(Math.random(), 2.3) * INKS.length) | 0, fresh: true };
    };
    for (let i = 0; i < COUNT; i++) ps.push(make());

    // incompressible flow = 2D curl of a layered sinusoidal potential
    const K = 0.0024;
    const DRIFT = 9; // gentle left-to-right line drift (px/s)
    const flow = (x: number, y: number, t: number, out: { vx: number; vy: number }) => {
      const U = x * K, V = y * K;
      const a = U + 0.16 * t, b = V - 0.11 * t, cc = 0.7 * U + V + 0.09 * t;
      const dU = Math.cos(a) * Math.cos(b) + 0.42 * Math.cos(cc);
      const dV = -Math.sin(a) * Math.sin(b) + 0.6 * Math.cos(cc);
      out.vx = dV; out.vy = -dU;
    };

    const mouse = { x: 0, y: 0, px: 0, py: 0, inside: false, has: false };
    const ripples: Ripple[] = [];
    const sparks: Spark[] = [];
    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      mouse.x = x; mouse.y = y;
      mouse.inside = x >= -40 && y >= -40 && x <= w + 40 && y <= h + 40;
      if (!mouse.has) { mouse.px = x; mouse.py = y; mouse.has = true; }
    };
    const onDown = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      if (x >= 0 && y >= 0 && x <= w && y <= h && !reduce) {
        const t0 = performance.now() / 1000;
        ripples.push({ x, y, t0 });
        if (ripples.length > 5) ripples.shift();
        // cure-pulse spark burst (the fireworks)
        const n = 16 + ((Math.random() * 10) | 0);
        for (let i = 0; i < n; i++) {
          const ang = (i / n) * Math.PI * 2 + Math.random() * 0.5;
          const sp = 140 + Math.random() * 230;
          sparks.push({ x, y, px: x, py: y, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp, t0, life: 0.5 + Math.random() * 0.55, c: (Math.random() * INKS.length) | 0 });
        }
        if (sparks.length > 420) sparks.splice(0, sparks.length - 420);
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });

    const fv = { vx: 0, vy: 0 };
    let raf = 0, prev = performance.now();
    const WAVE = 520; // wavefront speed px/s

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (!visible) { prev = now; return; }
      const dt = Math.min(0.04, (now - prev) / 1000); prev = now;
      const t = now / 1000;

      // fade previous frame -> streamline trails (paper shows through)
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = `rgba(0,0,0,${reduce ? 0.14 : 0.04})`;
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";

      const mvx = mouse.x - mouse.px, mvy = mouse.y - mouse.py;
      mouse.px += mvx * 0.5; mouse.py += mvy * 0.5;
      const speedM = Math.hypot(mvx, mvy);
      const stir = mouse.inside ? Math.min(1, speedM / 12) : 0;

      // inject compound bloom where the cursor moves
      if (mouse.inside && stir > 0.06 && !reduce) {
        const n = 2 + ((stir * 6) | 0);
        ctx.globalAlpha = 0.05;
        for (let i = 0; i < n; i++) {
          const sx = mouse.x + (Math.random() - 0.5) * 26, sy = mouse.y + (Math.random() - 0.5) * 26;
          const sp = sprites[(Math.pow(Math.random(), 2) * INKS.length) | 0];
          const sz = 26 + Math.random() * 26;
          ctx.drawImage(sp, sx - sz / 2, sy - sz / 2, sz, sz);
        }
        ctx.globalAlpha = 1;
      }

      const FLOWV = reduce ? 10 : 82;
      ctx.lineCap = "round";

      for (let i = 0; i < ps.length; i++) {
        const p = ps[i];
        flow(p.x, p.y, t, fv);
        let vx = fv.vx * FLOWV + DRIFT, vy = fv.vy * FLOWV;

        // cursor vortex: tangential swirl + gentle suction
        if (mouse.inside) {
          const dx = p.x - mouse.x, dy = p.y - mouse.y, d2 = dx * dx + dy * dy;
          if (d2 < 42000) {
            const d = Math.sqrt(d2) + 1, fall = 1 - d2 / 42000;
            const swirl = (40 + stir * 320) * fall;
            vx += (-dy / d) * swirl + mvx * 0.5 * fall;
            vy += (dx / d) * swirl + mvy * 0.5 * fall;
          }
        }

        // cure-pulse wavefronts: a radial impulse at the expanding ring
        for (const rp of ripples) {
          const age = t - rp.t0, R = age * WAVE;
          const dx = p.x - rp.x, dy = p.y - rp.y, d = Math.hypot(dx, dy) + 1;
          const band = Math.exp(-((d - R) ** 2) / 1400) * Math.exp(-age * 1.6);
          if (band > 0.01) { const f = band * 520; vx += (dx / d) * f; vy += (dy / d) * f; }
        }

        p.vx += (vx - p.vx) * 0.18; p.vy += (vy - p.vy) * 0.18;
        p.x += p.vx * dt; p.y += p.vy * dt;
        p.age += dt;

        if (p.age > p.max || p.x < -30 || p.x > w + 30 || p.y < -30 || p.y > h + 30) {
          ps[i] = make(); continue;
        }

        // draw the streamline segment (skip the first frame after respawn)
        if (!p.fresh) {
          const sp = Math.hypot(p.vx, p.vy);
          const lifeIn = Math.min(1, p.age / 0.7), lifeOut = Math.min(1, (p.max - p.age) / 2.5);
          const a = Math.min(0.5, 0.12 + sp / 450) * lifeIn * lifeOut;
          if (a > 0.004) {
            ctx.strokeStyle = `rgba(${hexToRgb(INKS[p.c])},${a.toFixed(3)})`;
            ctx.lineWidth = 1.1 + Math.min(1.4, sp / 520);
            ctx.beginPath();
            ctx.moveTo(p.px, p.py);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
          }
        }
        p.px = p.x; p.py = p.y; p.fresh = false;
      }

      // expanding cure-pulse rings (gold = heat / vulcanization front)
      for (const rp of ripples) {
        const age = t - rp.t0, R = age * WAVE, env = Math.exp(-age * 1.7);
        if (env > 0.03) {
          ctx.strokeStyle = `rgba(184,134,11,${(0.34 * env).toFixed(3)})`;
          ctx.lineWidth = 1.8;
          ctx.beginPath(); ctx.arc(rp.x, rp.y, R, 0, Math.PI * 2); ctx.stroke();
        }
      }
      for (let i = ripples.length - 1; i >= 0; i--) if (t - ripples[i].t0 > 2.4) ripples.splice(i, 1);

      // sparks (the fireworks): bright streaks that radiate out, drag and fade
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        const age = t - s.t0;
        if (age > s.life) { sparks.splice(i, 1); continue; }
        s.px = s.x; s.py = s.y;
        s.vx *= 0.93; s.vy *= 0.93;
        s.x += s.vx * dt; s.y += s.vy * dt;
        const k = 1 - age / s.life;
        const a = Math.min(0.85, k * k * 0.95);
        ctx.strokeStyle = `rgba(${hexToRgb(INKS[s.c])},${a.toFixed(3)})`;
        ctx.lineWidth = 1.3 + k * 1.1;
        ctx.beginPath(); ctx.moveTo(s.px, s.py); ctx.lineTo(s.x, s.y); ctx.stroke();
      }
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" />;
}

function hexToRgb(hex: string): string {
  const n = parseInt(hex.slice(1), 16);
  return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`;
}
