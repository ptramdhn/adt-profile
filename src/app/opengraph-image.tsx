import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "PT Anugrah Djaya Tunggal — Supplier Barang Teknik Jakarta Utara";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a1628",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ color: "#0fb5ba", fontSize: 30, letterSpacing: 2, textTransform: "uppercase" }}>
          Supplier Barang Teknik · Jakarta Utara
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, marginTop: 24 }}>
          {site.name}
        </div>
        <div style={{ fontSize: 32, color: "#e2e8f0", marginTop: 28, maxWidth: 900 }}>
          Rubber · Polyurethane · Carbon · Fabrikasi Logam
        </div>
      </div>
    ),
    { ...size }
  );
}
