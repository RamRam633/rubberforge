# RubberForge

An interactive, animated learning simulator that teaches how an industrial **rubber sheet** is
manufactured, from raw ingredient categories to a finished, inspected, wound roll. The first build
covers a **Black EPDM Rubber Sheet**.

> Factorio meets industrial training meets an animated manufacturing documentary.

It is an educational simulation based on real process logic. It is **not** a sourcing tool, a cost
calculator, a static course, or a machine operating manual. All content is conceptual: generic
ingredient categories and process logic only, with no real formulations, temperatures, cure times,
or machine settings.

## Run it

```bash
npm install
npm run dev      # http://localhost:5194
npm run build    # production build
```

## The line

Ten stations run in a fixed, gated sequence, each with its own animated scene and learning panel:

1. Raw Material Room → 2. Weighing Station → 3. Internal Mixer → 4. Two-Roll Mill →
5. Calender → 6. Vulcanization → 7. Cooling → 8. Trimming & Slitting → 9. Inspection →
10. Finished Roll

The material moves through eight states (separate raw → weighed batch → rough mixed → smooth milled
→ uncured sheet → cured sheet → cooled & trimmed → inspected final).

## Pages

- **Home** `/` — landing and overview.
- **Simulator** `/simulator` — the interactive factory: build a batch, run each station, pass
  checkpoints, finish the roll.
- **Process Library** `/process` — a readable reference for every station, ingredient, and defect.
- **Defect Detective** `/defects` — diagnose six defects by tracing each symptom to its station.
- **About** `/about` — scope, accuracy, and safety framing.

## Stack

Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · React Three Fiber / three.js
(the molecular crosslinking scene during vulcanization) · Framer Motion · lucide-react.

## Structure

```
src/
  app/            # routes: home, simulator, process, defects, about
  components/     # FactoryScene, StationViewport, MolecularScene, Simulator, panels, cards
  lib/            # simulationState (reducer) + typed seed data (process, ingredient, defect, quiz, material)
  types/          # simulation.ts domain types
```

The simulation is a deterministic `useReducer` state machine in `lib/simulationState.ts`. Each
station unlocks the next; checkpoints and the completion summary surface as the line progresses.
