# VDT Care

An AI-powered accessibility assistant that helps users read computer screens more comfortably by detecting viewing distance and adapting screen readability in real time.

---

## Overview

VDT Care is a computer vision project inspired by real-world observations made while working in an optical store.

The project explores how AI and adaptive interfaces can improve screen readability for individuals who struggle to see computer displays clearly but may not have access to specialized vision correction solutions.

Rather than replacing prescription eyewear, VDT Care aims to provide software-based accessibility assistance that helps reduce visual strain and improve digital comfort during everyday computer use.

---

## Background

While working in an optical store, I regularly met patients who experienced difficulty reading computer screens.

One particular group stood out to me.

Many were older adults experiencing presbyopia (age-related loss of near vision) or workers whose jobs required them to constantly switch between reading small printed text and viewing computer screens.

Examples included:

* Warehouse workers reading shipping labels while using computer systems
* Office workers switching between paperwork and monitors
* Administrative staff processing documents throughout the day

In many cases, specialized optical solutions already existed.

These included:

* Progressive lenses
* Occupational lenses
* Computer-specific (VDT) glasses

However, many patients were unable to obtain these solutions due to financial constraints.

Even with vision insurance, progressive lenses can easily cost several hundred dollars. Without insurance, lens costs alone may exceed $400 before frames are included.

As a result, many patients continued using glasses optimized for only one viewing distance:

* Reading glasses for near vision
* Distance glasses for far vision

Neither option adequately supported frequent transitions between near and intermediate viewing distances.

To compensate, patients often:

* Leaned closer to their monitors
* Moved their heads back and forth
* Adjusted their posture repeatedly
* Squinted to read small text
* Moved screens closer than recommended viewing distances

As someone working directly with these patients, I often felt limited in the solutions I could offer.

In many situations, my best recommendation was simply:

> "Try moving your monitor closer, or try to have monitor and the object closer together."

That experience led me to ask a question:

> Could software help bridge part of this accessibility gap when specialized vision correction is unavailable?

VDT Care was created to explore that possibility.

---

## Problem Statement

Many accessibility tools focus primarily on users with diagnosed visual impairments.

However, there is a large population of users who experience situational or economically constrained visual challenges.

These include:

* Users without computer-specific glasses
* Users with outdated prescriptions
* Individuals unable to afford progressive lenses
* Workers spending extended periods in front of monitors
* Older adults experiencing age-related changes in vision
* Individuals whose insurance does not adequately cover specialized lenses

Although effective optical solutions may exist, they are not always accessible.

As a result, users frequently develop compensatory behaviors that increase:

* Eye strain
* Neck strain
* Poor posture habits
* Visual fatigue
* Overall discomfort during computer use

Most software applications remain unaware when a user is struggling to read content.

VDT Care aims to create a more responsive and adaptive user experience.

---

## Project Goal

The goal of VDT Care is **not to replace prescription eyewear**.

Instead, the project seeks to provide software-based adaptive readability assistance that can help users interact with digital content more comfortably.

By understanding how users physically respond to visual difficulty, the application can automatically adapt the interface to improve readability and reduce strain.

---

## Proposed Solution

VDT Care uses computer vision to monitor user behavior through a standard webcam.

When the system detects that a user repeatedly moves closer to the monitor or exhibits behaviors associated with visual difficulty, it can automatically provide accessibility adjustments.

Potential responses include:

* Increasing text size
* Improving contrast
* Adjusting zoom levels
* Recommending accessibility settings
* Providing visual comfort alerts
* Tracking patterns of visual strain over time

Instead of requiring users to manually identify and adjust settings, the system proactively adapts based on observed behavior.

---

## How It Works

### Step 1: Face Detection

The webcam captures video frames and detects facial landmarks using MediaPipe.

### Step 2: Distance Estimation

Facial landmark measurements are used to estimate the user's distance from the screen.

### Step 3: Behavior Analysis

The system monitors viewing patterns and identifies behaviors such as:

* Repeated forward leaning
* Excessive screen proximity
* Frequent posture adjustments

### Step 4: Accessibility Response

When predefined thresholds are exceeded, the system can dynamically adjust readability settings.

Examples include:

* Enlarging text
* Increasing contrast
* Providing recommendations to improve visual comfort

### Step 5: Analytics Dashboard

The application records usage metrics such as:

* Average viewing distance
* Frequency of forward-leaning events
* Daily visual strain indicators
* Accessibility intervention frequency

These metrics are displayed through a user dashboard.

---

## MVP Features

### Computer Vision

* Real-time face tracking
* Facial landmark detection
* Distance estimation
* User posture monitoring

### Accessibility Features

* Dynamic text scaling
* Contrast enhancement recommendations
* Readability assistance triggers
* Visual comfort alerts

### Analytics

* Viewing distance history
* Session summaries
* Behavioral trend tracking
* Accessibility usage metrics

---

## Technical Stack

### Computer Vision

* OpenCV
* MediaPipe

### Backend

* Python
* FastAPI

### Data Processing

* Pandas

### Frontend & Dashboard

* Streamlit

### Version Control

* Git
* GitHub

---

## Why This Project Matters

This project originated from firsthand observations while working in an optical store.

I repeatedly encountered individuals whose visual challenges could potentially be addressed through specialized optical solutions, yet cost and insurance limitations often prevented access to those solutions.

VDT Care explores whether AI and computer vision can provide an additional layer of accessibility support through software.

The project sits at the intersection of:

* Computer Vision
* Human-Centered AI
* Accessibility Technology
* Digital Health
* Real-World Problem Solving

Rather than building AI solely as a technical exercise, my goal is to explore how technology can help people continue working, reading, and interacting with digital information more comfortably.

---

## Current Status

🚧 In Development

Current Milestones:

* [x] Problem Definition
* [x] Project Planning
* [x] Repository Setup
* [x] Technical Architecture Design
* [ ] Webcam Integration
* [ ] Face Landmark Detection
* [ ] Distance Estimation
* [ ] Accessibility Response System
* [ ] Analytics Dashboard
* [ ] MVP Release

---

## Future Directions

Potential future improvements include:

* Personalized user calibration
* Eye strain prediction models
* Multi-monitor support
* Workplace accessibility integrations
* Browser extension deployment
* Operating system accessibility integration
* AI-powered adaptive interface optimization

---

## Author

**Sungjun An**

Data Science Graduate

Interested in Computer Vision, Accessibility Technology, Human-Centered AI, and Data-Driven Solutions that improve people's daily lives.
