import { useEffect, useRef, useState } from "react";
import {
  FaceLandmarker,
  FilesetResolver,
  type NormalizedLandmark,
} from "@mediapipe/tasks-vision";

// Outer eye-corner landmark indices (MediaPipe FaceMesh topology).
// Validated in experiments/01-webcam-distance-detection.
const LEFT_EYE_OUTER = 33;
const RIGHT_EYE_OUTER = 263;

// How much weight to give new frames vs. the running average.
// Lower = smoother but slower to react. Same value the spike used.
const SMOOTHING = 0.2;

export type FaceDistanceStatus =
  | "loading-model"
  | "requesting-camera"
  | "tracking"
  | "no-face"
  | "error";

export interface FaceDistanceState {
  status: FaceDistanceStatus;
  /** Smoothed eye-to-eye pixel distance. Null until the first face is seen. */
  distancePx: number | null;
  /** First stable reading, used as the "normal" reference point. */
  baselinePx: number | null;
  /** distancePx / baselinePx. >1 means closer than baseline. Null until baseline is set. */
  ratio: number | null;
  errorMessage?: string;
}

/**
 * Tracks face-to-camera distance via webcam using MediaPipe FaceLandmarker.
 *
 * Owns the video/canvas elements internally — attach the returned refs to
 * <video> and <canvas> elements in the component. This hook only produces
 * the raw distance signal; it intentionally does NOT decide what counts as
 * "sustained closeness" (that's useSustainedCloseness, layered on top).
 */
export function useFaceDistance() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [state, setState] = useState<FaceDistanceState>({
    status: "loading-model",
    distancePx: null,
    baselinePx: null,
    ratio: null,
  });

  useEffect(() => {
    let cancelled = false;
    let animationFrameId: number;
    let stream: MediaStream | null = null;
    let smoothed: number | null = null;
    let baseline: number | null = null;

    async function start() {
      try {
        const filesetResolver = await FilesetResolver.forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm"
        );
        const faceLandmarker = await FaceLandmarker.createFromOptions(
          filesetResolver,
          {
            baseOptions: {
              modelAssetPath:
                "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
              delegate: "CPU",
                /**delegate: "GPU",**/
            },
            runningMode: "VIDEO",
            numFaces: 1,
          }
        );

        if (cancelled) return;
        setState((s) => ({ ...s, status: "requesting-camera" }));

        stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 640, height: 480 },
        });
        if (cancelled) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }

        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!video || !canvas) return;

        video.srcObject = stream;
        await new Promise<void>((resolve) => {
          video.onloadedmetadata = () => resolve();
        });
        await video.play();

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");

        const loop = () => {
          if (cancelled) return;
          const now = performance.now();
          const result = faceLandmarker.detectForVideo(video, now);

          if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);

          if (result.faceLandmarks && result.faceLandmarks.length > 0) {
            const lm = result.faceLandmarks[0];
            const p1: NormalizedLandmark = lm[LEFT_EYE_OUTER];
            const p2: NormalizedLandmark = lm[RIGHT_EYE_OUTER];

            const dx = (p1.x - p2.x) * canvas.width;
            const dy = (p1.y - p2.y) * canvas.height;
            const dist = Math.sqrt(dx * dx + dy * dy);

            smoothed =
              smoothed === null ? dist : smoothed * (1 - SMOOTHING) + dist * SMOOTHING;
            if (baseline === null) baseline = smoothed;

            if (ctx) {
              ctx.fillStyle = "#4ade80";
              [p1, p2].forEach((p) => {
                ctx.beginPath();
                ctx.arc(p.x * canvas.width, p.y * canvas.height, 4, 0, Math.PI * 2);
                ctx.fill();
              });
            }

            setState({
              status: "tracking",
              distancePx: smoothed,
              baselinePx: baseline,
              ratio: baseline ? smoothed / baseline : null,
            });
          } else {
            setState((s) => ({ ...s, status: "no-face" }));
          }

          animationFrameId = requestAnimationFrame(loop);
        };

        animationFrameId = requestAnimationFrame(loop);
      } catch (err) {
        if (cancelled) return;
        setState((s) => ({
          ...s,
          status: "error",
          errorMessage: err instanceof Error ? err.message : String(err),
        }));
      }
    }

    start();

    return () => {
      cancelled = true;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      stream?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  return { videoRef, canvasRef, ...state };
}
