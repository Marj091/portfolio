import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Marjolijn de Vries — Grafisch Vormgever";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F9F6F1",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          position: "relative",
        }}
      >
        {/* Decoratief terracotta vlak rechtsboven */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "340px",
            height: "340px",
            background: "#C1440E",
            borderRadius: "0 0 0 100%",
            opacity: 0.08,
          }}
        />

        {/* Decoratief vlak linksonder */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "200px",
            height: "200px",
            background: "#C1440E",
            borderRadius: "0 100% 0 0",
            opacity: 0.05,
          }}
        />

        {/* Label */}
        <div
          style={{
            fontSize: "18px",
            color: "#C1440E",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "28px",
          }}
        >
          GRAFISCH VORMGEVER · AI & AUTOMATISERING
        </div>

        {/* Naam */}
        <div
          style={{
            fontSize: "88px",
            fontWeight: 800,
            color: "#1A1A1A",
            lineHeight: 1.0,
            marginBottom: "32px",
          }}
        >
          Marjolijn de Vries
        </div>

        {/* Streep */}
        <div
          style={{
            width: "72px",
            height: "5px",
            background: "#C1440E",
            borderRadius: "4px",
            marginBottom: "32px",
          }}
        />

        {/* Subtekst */}
        <div
          style={{
            fontSize: "26px",
            color: "#6B6560",
            maxWidth: "680px",
            lineHeight: 1.5,
          }}
        >
          Duidelijke en consistente visuele communicatie, van brochures tot digitale uitingen.
        </div>

        {/* URL onderaan */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "100px",
            fontSize: "18px",
            color: "#C1440E",
            fontWeight: 600,
          }}
        >
          portfolio-phi-livid-36.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
