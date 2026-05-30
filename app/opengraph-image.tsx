import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            IN
          </div>
          <span style={{ color: "#9b9ba3", fontSize: 26, fontFamily: "monospace" }}>
            {profile.domain}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "white", fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>
            {profile.name}
          </div>
          <div style={{ color: "#5b8cff", fontSize: 40, fontWeight: 600, marginTop: 8 }}>
            {profile.subtitle}
          </div>
          <div
            style={{
              color: "#9b9ba3",
              fontSize: 28,
              marginTop: 24,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            {profile.tagline}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
