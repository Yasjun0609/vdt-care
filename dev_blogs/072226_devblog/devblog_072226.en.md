# 072126 & 072226 - Porting the Spike into React, and Fighting the Environment

## Goal for today
Port the already-validated distance-detection logic from the HTML spike
into a real React + TypeScript hook (`useFaceDistance`), and confirm it
behaves identically inside the actual project — nothing more than that.

## What I did
- Scaffolded the Vite + React + TS project (package.json, tsconfig,
  vite.config, index.html)
- Wrote `useFaceDistance.ts`, porting the spike's camera + MediaPipe
  FaceLandmarker logic into a proper hook, with two changes a throwaway
  spike didn't need: cleanup on unmount (stopping the camera stream,
  cancelling the animation frame) and keeping the hook responsible only
  for the distance signal, not for judging "closeness" (that's next
  session's layer)
- Wrote a minimal `App.tsx` as a test harness — explicitly not final UI,
  just enough to visually confirm the hook works

## What didn't work
- `npm` wasn't installed even though Node was (`node -v` worked, `npm`
  didn't) — separate packages on this distro, fixed with `apt install npm`
- Files initially got pasted flat into the repo root instead of nested
  under `src/` — Vite couldn't resolve `/src/main.tsx`, fixed by moving
  files into the right folders
- MediaPipe failed with WebGL context errors in Chrome
  (`emscripten_webgl_create_context() returned error 0`) — turned out
  Chrome's hardware acceleration was fully disabled in its own settings
  (confirmed via `chrome://gpu`: WebGL, Compositing, Rasterization all
  "Disabled" or "Software only")
- Switched the MediaPipe delegate from GPU to CPU as a first fix, which
  helped but wasn't sufficient on its own — texture binding still failed
  until hardware acceleration was re-enabled in Chrome settings and the
  browser restarted
- Firefox separately failed to get camera access at all — likely Chrome
  was still holding the camera device from an earlier test

## Result
After enabling hardware acceleration in Chrome and restarting, the app
worked: two tracked eye landmarks, a live distance reading (166.8px),
and status showing "tracking" at 98% of baseline — matching the spike's
behavior exactly. Also recorded a short phone video of it working, as
demo evidence.

## A design decision I didn't chase today
Users with hardware acceleration disabled will hit this same failure.
Deliberately not designing a fallback UX for that today — there's
exactly one user right now (me), and building a fallback before the
MVP itself exists or has been tested by anyone else would be solving a
problem I haven't confirmed is real yet. Noting it here as a future
consideration, not a task.

## Timeline check-in
Talked through a rough estimate for the rest of the MVP: sustained-
pattern detection, recommendation UI, threshold tuning, light visual
polish, and deployment to Vercel. At the current pace, that's roughly
4-5 more sessions, or about 2-3 weeks. Scope staying this narrow is
the reason that estimate is short.

## Next decision
Next session starts with Layer 2: `useSustainedCloseness`, the hook
that decides whether a closeness/leaning pattern has been sustained
long enough to matter.
