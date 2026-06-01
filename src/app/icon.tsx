import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

/**
 * Dynamic favicon generator.
 * Renders the company logo cropped into a perfect circle (rounded mask),
 * matching the visual style used in the Hero Section.
 */
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const logoBuffer = await readFile(
    path.join(process.cwd(), "public", "LOGO PERUSAHAAN ONLY.png")
  );
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          borderRadius: "9999px",
          overflow: "hidden",
          background: "#ffffff",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt="PT ADT"
          width={64}
          height={64}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "9999px",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
