# Session Report — 07/17/26

## Summary
Reviewed the project's original README (last updated 06/09, pre-dating
mentor feedback from 06/13) and found it out of sync with the project's
actual current scope. Used the review as an opportunity to have an
honest conversation about project motivation, rewrote the README to
match the confirmed MVP scope, translated it to Korean, archived the
old version, and logged the day's thinking process in the dev blog.

## What was done

1. **Reviewed uploaded `README.md`**
   - Identified it as a pre-mentor-feedback draft (dated 06/09 vs.
     feedback on 06/13)
   - Flagged mismatches with current scope: adaptive UI (auto text/
     contrast adjustment), posture monitoring, analytics dashboard,
     FastAPI + Streamlit stack, broader target-user list

2. **Reviewed uploaded mentor feedback (`mentor-feedback_061326.md`)**
   - Core question: "Is computer vision truly necessary here?"
   - Reconfirmed the pivot: from adaptive UI to behavioral-signal
     detection

3. **Had an honest discussion about project motivation**
   - Acknowledged wanting the project to double as a job-search
     showcase, with pressure to add technologies for their own sake
   - Reframed the mentor's "overkill" feedback: not "don't show off,"
     but "don't mix problem-solving and stack-showcasing goals inside
     one project without noticing it"
   - Decided: CV/MediaPipe is justified (it's the actual mechanism the
     problem needs); posture monitoring, dashboard, and the FastAPI/
     Streamlit backend are not, and were confirmed as out of scope

4. **Decided to archive, not delete, the old README**
   - Path: `docs/archive/README_v1_pre-mentor-feedback_060926.md`
   - Rationale: preserves the hypothesis → feedback → pivot story as
     visible evidence in the repo, not just something to explain
     verbally in an interview

5. **Rewrote `README.md`**
   - Sections: Overview, Background, Problem Statement, Mentor
     Feedback & Pivot, What I Considered and Cut, MVP Scope, Tech
     Stack, How It Works, Current Status, Future Directions, Author
   - Tech stack confirmed: React + TypeScript + Vite, MediaPipe
     (FaceLandmarker), no backend unless justified
   - Added internal anchor link from Tech Stack to the "What I
     Considered and Cut" section

6. **Wrote `README.ko.md`**
   - Full Korean translation, structurally matching the English
     version, cross-linked at the top of both files

7. **Wrote dev blog entry (`071726_devblog`)**
   - `devblog.en.md` and `devblog.ko.md`
   - Documents today's context, the overkill conversation, actions
     taken, and what was learned

8. **Prepared commit title and description**
   - Title: `docs: rewrite README to match post-pivot MVP scope, add Korean translation`
   - Description covers README rewrite, cut-features section, Korean
     translation, and archiving the old version

## Files touched today
- `README.md` (rewritten)
- `README.ko.md` (new)
- `docs/archive/README_v1_pre-mentor-feedback_060926.md` (archived old version)
- `dev_blogs/071726_devblog/devblog.en.md` (new)
- `dev_blogs/071726_devblog/devblog.ko.md` (new)

## Next session
Start the MVP build: React + TypeScript + Vite scaffold, porting the
validated distance-detection logic from the `experiments/01-webcam-
distance-detection` spike into a real component, then building the
sustained-pattern detection logic on top of it.
