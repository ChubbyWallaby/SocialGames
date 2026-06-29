import { ImageResponse } from "next/og";

export const alt = "Confide — Social Deduction Games on WhatsApp";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #7c3aed 0%, #ec4899 50%, #f59e0b 100%)",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255,255,255,0.95)",
            borderRadius: "32px",
            padding: "60px 80px",
            maxWidth: "900px",
          }}
        >
          <p
            style={{
              fontSize: 72,
              fontWeight: "bold",
              background: "linear-gradient(135deg, #7c3aed, #ec4899)",
              backgroundClip: "text",
              color: "transparent",
              margin: 0,
              marginBottom: "16px",
            }}
          >
            Confide
          </p>
          <p
            style={{
              fontSize: 28,
              color: "#6b7280",
              margin: 0,
              textAlign: "center",
            }}
          >
            Social Deduction Games on WhatsApp
          </p>
          <p
            style={{
              fontSize: 20,
              color: "#9ca3af",
              margin: 0,
              marginTop: "12px",
            }}
          >
            5-8 players · 5-7 days · fully async
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
