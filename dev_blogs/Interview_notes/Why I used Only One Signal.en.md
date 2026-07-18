# Interview Note: Why I Used Only One Signal (Avoiding Overkill)

## Background
Mentor feedback: "It's inefficient to solve a problem that needs
10 resources with 100, 50, or 20 — unless you're deliberately
showing off a tech stack." This feedback actually replayed itself
in a real design decision after the spike — I wanted to combine
posture + squinting + distance into "stronger evidence," then
caught myself repeating the exact inefficiency pattern the mentor
warned about.

## Likely interview question
"Why didn't you also use signals like posture or eye strain,
instead of just distance/leaning?"

## Reasoning
1. A single signal (sustained closeness/leaning pattern) was
   already enough to answer the core MVP question: can a reliable
   signal be extracted from a webcam at all.
2. Every additional signal brings its own landmark set, threshold
   tuning, and false-positive cases. "Looks more accurate" and
   "is actually more accurate" are not the same thing.
3. A single signal is explainable to the user ("why did I get this
   notification"). Combining multiple signals turns it into a
   black box — explainability is part of product trust too.

## One-line takeaway
Knowing when to stop — and being able to explain why you didn't
add more — is as much a skill as avoiding over-engineering in the
first place.