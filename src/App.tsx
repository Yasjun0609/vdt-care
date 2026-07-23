import { useFaceDistance } from "./hooks/useFaceDistance";

// NOTE: this is a dev/verification view, not the final product UI.
// Its only job right now is to prove useFaceDistance behaves the same
// as the validated HTML spike (experiments/01-webcam-distance-detection).
// Visual design comes later, once the detection layer is solid.
function App() {
  const { videoRef, canvasRef, status, distancePx, ratio } = useFaceDistance();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#111", color: "#eee", minHeight: "100vh", padding: 20 }}>
      <div style={{ position: "relative", width: 640, maxWidth: "100%", margin: "0 auto" }}>
        <video ref={videoRef} autoPlay playsInline muted style={{ display: "block", width: "100%", borderRadius: 8 }} />
        <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, width: "100%", borderRadius: 8 }} />
      </div>

      <div style={{ width: 640, maxWidth: "100%", margin: "12px auto", padding: 16, background: "#1b1b1b", borderRadius: 8 }}>
        <div>얼굴 간 거리 프록시 (px)</div>
        <div style={{ fontSize: 48, fontWeight: 700 }}>
          {distancePx !== null ? distancePx.toFixed(1) : "--"}
        </div>
        <div>
          status: {status}
          {ratio !== null && `  |  기준 대비 ${(ratio * 100).toFixed(0)}%`}
        </div>
      </div>
    </div>
  );
}

export default App;
