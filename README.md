# VDT Care

An AI-powered accessibility assistant that helps users read computer screens more comfortably by detecting viewing distance and adjusting readability in real time.

---

## Background

While working at an optical store, I frequently met patients who struggled to read computer screens clearly.

Many of them wore everyday prescription glasses but did not have computer-specific (VDT) glasses optimized for monitor viewing distances.

As a result, I observed a common pattern:

- Leaning closer to the monitor
- Moving their head back and forth to find a clearer focal point
- Squinting while reading text
- Maintaining poor posture for extended periods

Although these users often needed better vision correction for computer work, they still had to continue working, studying, or browsing on their devices.

This observation led me to ask a simple question:

> Can software help users read screens more comfortably when their visual setup is not ideal?

VDT Care was created to explore that question.

---

## Problem Statement

Many accessibility tools focus on users with diagnosed visual impairments.

However, there is a large group of users who experience temporary or situational difficulty reading screens:

- Users without computer-specific glasses
- Users with outdated prescriptions
- Users experiencing digital eye strain
- Users working long hours in front of monitors
- Older adults with reduced near/intermediate vision

These users often compensate by moving closer to the screen, which may increase:

- Eye fatigue
- Neck strain
- Poor posture habits
- Overall visual discomfort

The challenge is that most software applications are unaware that the user is struggling.

VDT Care aims to make screen interfaces more responsive to the user's visual behavior.

---

## Proposed Solution

VDT Care uses computer vision to estimate a user's viewing distance and posture through a standard webcam.

When the system detects that the user repeatedly moves too close to the screen, it can:

- Increase text size
- Improve contrast
- Recommend accessibility adjustments
- Track patterns of visual strain over time

Instead of requiring users to manually adjust settings, the system proactively adapts based on observed behavior.

---

## How It Works

### Step 1: Face Detection

The webcam captures video frames and identifies facial landmarks using MediaPipe.

### Step 2: Distance Estimation

Facial landmark measurements are used to estimate the user's distance from the monitor.

### Step 3: Behavior Analysis

The system monitors changes in viewing distance and identifies repeated forward-leaning behavior.

### Step 4: Accessibility Response

If the user consistently moves closer than a predefined threshold, readability settings are adjusted automatically.

### Step 5: Usage Analytics

The application records metrics such as:

- Average viewing distance
- Frequency of forward-leaning events
- Daily visual strain indicators

These metrics are displayed through a simple dashboard.

---

## MVP Features

### Computer Vision

- Real-time face tracking
- Facial landmark detection
- Distance estimation

### Accessibility Features

- Dynamic text scaling
- Contrast adjustment recommendations
- Visual comfort alerts

### Analytics

- Viewing distance history
- Forward-leaning frequency
- Session summaries

---

## Technical Stack

### Computer Vision

- OpenCV
- MediaPipe

### Backend

- Python
- FastAPI

### Data Processing

- Pandas

### Frontend / Dashboard

- Streamlit

### Version Control

- Git
- GitHub

---

## Why This Project Matters

This project is inspired by a real-world problem observed while working in an optical store.

Rather than building AI solely as a technical exercise, the goal is to explore how computer vision can improve accessibility and reduce everyday visual discomfort.

VDT Care represents an intersection of:

- Computer Vision
- Human-Centered AI
- Accessibility
- Digital Health

---

## Current Status

🚧 In Development

Current milestone:

- [x] Project planning
- [x] Repository setup
- [ ] Webcam integration
- [ ] Face landmark detection
- [ ] Distance estimation
- [ ] Accessibility adjustments
- [ ] Dashboard implementation

---

## Future Directions

Potential future improvements include:

- Multi-monitor support
- Personalized calibration
- Eye strain prediction models
- Workplace accessibility integrations
- Browser extension deployment

---

## Author

Sungjun An

Data Science Graduate

Interested in Computer Vision, Accessibility, AI Applications, and Data-Driven Solutions that improve people's daily lives.