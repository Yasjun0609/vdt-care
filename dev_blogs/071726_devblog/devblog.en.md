# 071726 - README Rewrite & the "Overkill" Conversation

## Context
Uploaded the old README.md to check on formatting/translation, and
noticed the last update was 06/09 — four days before the mentor
feedback (06/13). It was still describing the pre-pivot version of
the project: auto-adjusting text/contrast, posture monitoring,
FastAPI + Streamlit, an analytics dashboard, a much broader target
user list. None of that matches where the project actually stands
now.

## What came up
Before touching the README, I ended up being honest about *why* the
old version looked like that — that part of me wants this project to
be a job-hunting showcase, stacking as much tech as possible ("everyone's
using AI now, if I don't I'll fall behind"), not just a problem I want
to solve.

Talked it through with Claude. The reframe that helped: the mentor's
"overkill" feedback wasn't "don't show off" — it was "you're mixing
two goals (solve the problem vs. show range) into one project without
noticing." Using MediaPipe/CV here is justified — it's the actual
mechanism the problem needs. But posture monitoring, a dashboard,
FastAPI/Streamlit — those aren't needed for *this* problem. If I want
to show stack range, that's what other, smaller projects are for, not
this one.

## What I did
- Archived the old README (docs/archive/README_v1_pre-mentor-feedback_060926.md)
  instead of deleting it — keeps the hypothesis → feedback → pivot
  story visible as evidence, not just something I'd have to explain
  in words
- Rewrote README.md around the actually-confirmed scope: target user,
  problem statement, mentor feedback + pivot, MVP boundaries, tech
  stack (React + TS + Vite + MediaPipe, no backend)
- Added a "What I Considered and Cut" section — explicitly listing
  posture monitoring, squint detection, auto-adjusting UI, the
  dashboard, and the FastAPI/Streamlit backend, with the reason each
  was cut
- Wrote README.ko.md as a full Korean translation, cross-linked with
  the English version (targeting the Korean job market too)

## Result / What I learned
The "What I Considered and Cut" section ended up being more valuable
than I expected — it turns the overkill conversation from something
I'd have to explain verbally in an interview into something already
visible in the repo. Reframing "I didn't build X" as "I considered X
and here's why I cut it" reads very differently.

## Next decision
MVP build (React + Vite scaffold) is next, but not today. Committing
the README rewrite + Korean translation + archived old version as-is
first.
