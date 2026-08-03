import { ImageResponse } from "next/og";

export const alt = "Bien Vivos — Tokio se vive mejor en español";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          color: "#fff5e7",
          background: "#180913",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 84% 18%, #00b6d1 0, transparent 25%), radial-gradient(circle at 18% 86%, #ff624f 0, transparent 30%), radial-gradient(circle at 72% 85%, #ef2d83 0, transparent 27%), linear-gradient(125deg, #671b3a, #180913 58%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -40,
            width: 360,
            height: 360,
            borderRadius: "50%",
            border: "44px solid #ffc31a",
            opacity: 0.9,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -120,
            left: -80,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "#d71844",
            opacity: 0.92,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "48px 58px 44px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ fontFamily: "sans-serif", fontSize: 26, fontWeight: 800, letterSpacing: "0.08em" }}>
              Nº 01 · 01.09.2026
            </div>
            <div style={{ fontFamily: "sans-serif", fontSize: 24, fontWeight: 800, letterSpacing: "0.08em" }}>
              TOKIO EN ESPAÑOL
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "sans-serif", fontSize: 128, fontWeight: 900, letterSpacing: "-0.08em", lineHeight: 0.8 }}>
              BIENVIVOS
            </div>
            <div style={{ marginTop: 34, maxWidth: 900, fontSize: 74, fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 0.9 }}>
              Tokio se vive mejor en español.
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div style={{ maxWidth: 720, fontFamily: "sans-serif", fontSize: 25, fontWeight: 700, lineHeight: 1.25 }}>
              La revista de Tokio para el mundo hispanohablante.
            </div>
            <div style={{ padding: "14px 22px", color: "#180913", background: "#ffc31a", fontFamily: "sans-serif", fontSize: 23, fontWeight: 900 }}>
              BIENVIVOS.COM
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
