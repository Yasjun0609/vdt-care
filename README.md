# VDT Care

[한국어](./README.ko.md) | **English**

> An early-warning signal for unmet vision needs, detected from how someone
> unconsciously interacts with their screen — not a diagnosis, not a
> replacement for an eye exam.

---

## Overview

VDT Care is a computer vision project inspired by real-world observations
made while working at an optometry clinic in California.

It explores a narrow question: **can a webcam detect unconscious
compensatory behavior — leaning in, moving closer — that signals someone
may need an eye exam, before they've realized it themselves?**

VDT Care does not diagnose vision problems, estimate lens prescriptions,
or replace an optometrist. It only surfaces a behavioral signal and
suggests the user consider getting their vision checked.

---

## Background

While working at an optometry clinic, I regularly saw patients who
struggled to read their computer screens clearly. Many had presbyopia
or outdated prescriptions, and hadn't yet come in for an exam — they
didn't necessarily know something had changed.

What I noticed wasn't just that they squinted. It was that many of
them unconsciously leaned toward the monitor, or moved their heads
closer, without seeming to register that they were doing it. The
behavior showed up before the awareness did.

That gap — between an unconscious physical response and the person's
own awareness of it — is what this project tries to detect.

---

## Problem Statement

Existing accessibility tools (font scaling, zoom, OS-level accessibility
settings) all require the user to already know they need them.

But many people don't reach that point of awareness on their own. They
adapt physically — leaning in, moving closer — long before they
consciously connect that to "maybe I need glasses" or "maybe my
prescription changed."

VDT Care targets that specific gap: **detecting the unconscious
compensatory behavior itself**, as an early signal, rather than waiting
for the user to notice and act.

### Target user

Computer users (commonly 40+) who:
- may have presbyopia or an outdated prescription
- haven't yet sought an eye exam
- unconsciously lean or move closer to their screen without realizing it

---

## Mentor Feedback & Pivot

Early on, the idea was closer to an adaptive-UI tool — auto-enlarging
text, adjusting contrast, etc. based on detected strain.

A mentor (AI engineer) asked a question that reshaped the project:

> "Why is computer vision necessary here? Why not just tell users to
> increase font size or use existing OS accessibility settings?"

That question exposed that the original idea didn't actually need CV —
existing tools already solve "make text bigger." The project pivoted
from **adaptive UI** to **behavioral signal detection**: CV isn't the
product, it's the sensing mechanism for a problem that couldn't
otherwise be observed (the user doesn't know they have it).

A second round of feedback ("solving a 10-resource problem with 100,
50, or 20 resources is inefficient, unless you're deliberately showing
off a tech stack") led to further trimming — see **What I Considered
and Cut** below.

Full notes: [`/mentor_feedbacks`](./mentor_feedbacks), 
[`/dev_blogs`](./dev_blogs)

---

## What I Considered and Cut

To keep this project honest about scope, and not overkill it:

| Considered | Why it was cut |
|---|---|
| Posture monitoring | Different problem (ergonomics), needs its own detection pipeline, not part of the vision-need signal |
| Eye-squint detection | Requires a separate CV approach; a single, well-validated signal (sustained closeness/leaning) was already sufficient to justify the recommendation |
| Auto-adjusting text/contrast/zoom | This is what existing OS accessibility tools already do — not a differentiated problem for CV to solve |
| Analytics dashboard | Not needed to validate the core hypothesis; adds surface area without adding signal |
| FastAPI backend + Streamlit dashboard | No server-side need identified yet; a client-side-only web app is simpler and sufficient |
| Lens power estimation / self-diagnosis | Out of scope by design — this is not a diagnostic tool |

More detail: [`/interview_notes`](./interview_notes)

---

## MVP Scope

**In scope:**
- Webcam permission + face detection (MediaPipe FaceLandmarker)
- Face-to-camera distance estimation (eye-landmark pixel distance)
- Detection of *sustained/repeated* closeness or leaning (not one-off movement)
- A simple, gentle recommendation UI (e.g. "Consider getting your vision checked")

**Explicitly out of scope (v1):**
- Accounts, login, cloud storage, database
- Chatbot / conversational interface
- Posture correction or ergonomics coaching
- Eye exercises
- Lens prescription estimation
- Self-diagnosis of any kind

---

## Tech Stack

- **Frontend:** React + TypeScript + Vite
- **Computer Vision:** MediaPipe (Tasks Vision — FaceLandmarker)
- **Backend:** None (client-side only, unless a real need emerges)

Chosen for the smallest stack that can validate the hypothesis —
not for stack breadth. See [What I Considered and Cut](#what-i-considered-and-cut).

---

## How It Works

1. **Face detection** — webcam frames processed via MediaPipe FaceLandmarker
2. **Distance proxy** — pixel distance between eye-corner landmarks, used
   as a relative (not absolute) closeness measure
3. **Pattern detection** — flags *sustained* closeness/leaning over a
   session, filtering out brief, normal head movement
4. **Recommendation** — a single, non-alarming suggestion to consider an
   eye exam, not a diagnosis

---

## Current Status

🚧 In development

- [x] Problem definition
- [x] Mentor feedback incorporated, scope narrowed
- [x] Technical feasibility spike (webcam distance detection via MediaPipe)
- [ ] MVP UI (React + TS + Vite)
- [ ] Sustained-pattern detection logic
- [ ] Recommendation UI
- [ ] Usability testing

---

## Future Directions (not committed, ideas only)

- Personalized baseline calibration
- Browser extension packaging
- Multi-session pattern tracking (still no account/cloud required)

---

## Author

**Sungjun An**

Data Science graduate. Built this after observing the problem firsthand
while working at an optometry clinic — interested in computer vision,
accessibility, and software that responds to problems people don't yet know they have.