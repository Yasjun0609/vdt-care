# 071426 - First Spike: Can We Detect Webcam Distance?

## Question
After getting mentor feedback, decided to validate in code the
answer to "is CV actually necessary?" — can we track face-to-camera
distance from a webcam in real time, without noise?

## Hypothesis
The pixel distance between MediaPipe FaceLandmarker's left/right
eye landmarks will work as a usable distance proxy.

## What I did
Quickly threw together a single HTML prototype using Claude.

## What didn't work
- The readout box wasn't visible → turned out to be a CSS issue:
  `position: absolute` was collapsing the parent's height to 0.
  Fixed by taking `video` out of `absolute` and back into normal
  flow, leaving only `canvas` overlaid on top.

## Result / What I learned
The numbers were stable. Tracking worked better than expected, and
eye position was picked up reliably. Lighting and angle were limited
since I only tested in my room, but I moved my face through as many
left-right and up-down angles as I could to stress-test it. The
hypothesis held up, at least to some degree.

## Next decision
The MediaPipe spike confirmed functional feasibility. The next big
step, I think, is figuring out what 'evidence' would let the system
'judge' that a user isn't seeing the screen clearly at their working
distance — combining posture, eye squinting, and eye-to-monitor
distance. Whether to move to an MVP, whether MediaPipe alone can
even solve this, whether it's actually necessary, whether there's
an easier/lighter way to do it — I need to research and test this
more... a lot to think through.