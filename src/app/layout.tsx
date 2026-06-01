import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site, fullAddress } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "PT Anugrah Djaya Tunggal — Supplier Barang Teknik Jakarta Utara";
const description =
  "Supplier barang teknik di Jakarta Utara: mechanical seal, flexible hose, sprocket & roll conveyor. Berbadan hukum resmi — hubungi kami untuk penawaran harga.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "supplier barang teknik Jakarta Utara",
    "mechanical seal",
    "flexible hose",
    "sprocket",
    "roll conveyor",
    "industrial parts",
    "supplier barang teknik",
    "PT Anugrah Djaya Tunggal",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  // Deklarasi eksplisit tag <link rel="icon"> untuk memperkuat sinyal favicon
  // ke Google bot. Next.js juga otomatis emit dari file icon.png/apple-icon.png
  // di folder app/, tapi deklarasi eksplisit ini berperan sebagai backup signal.
  icons: {
    icon: [
      { url: "/logo-anugrah-djaya-tunggal.webp", type: "image/webp" },
    ],
    apple: [
      { url: "/logo-anugrah-djaya-tunggal.webp", type: "image/webp" },
    ],
    shortcut: ["/logo-anugrah-djaya-tunggal.webp"],
  },
  openGraph: {
    title,
    description,
    url: site.url,
    siteName: site.name,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Ganti dengan kode verifikasi dari Google Search Console saat tersedia.
  // verification: { google: "GANTI_DENGAN_KODE_VERIFIKASI" },
};

/**
 * WebSite Schema — sinyal utama yang Google gunakan untuk menentukan
 * "site name" di hasil pencarian (SERP).
 * Tanpa ini, Google cenderung fallback ke nama domain mentah.
 * Ref: https://developers.google.com/search/docs/appearance/site-names
 */
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  alternateName: site.shortName,
  url: site.url,
  inLanguage: "id-ID",
  publisher: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  alternateName: site.shortName,
  url: site.url,
  logo: `${site.url}/logo-anugrah-djaya-tunggal.webp`,
  description,
  foundingDate: site.foundingDate,
  email: site.email,
  telephone: site.phoneE164,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phoneE164,
    contactType: "sales",
    availableLanguage: ["Indonesian"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "WholesaleStore",
  name: site.name,
  image: `${site.url}/logo-anugrah-djaya-tunggal.webp`,
  url: site.url,
  telephone: site.phoneE164,
  email: site.email,
  priceRange: "$$",
  foundingDate: site.foundingDate,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "17:00",
  },
  areaServed: [
    { "@type": "City", name: "Jakarta Utara" },
    { "@type": "Country", name: "Indonesia" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}

// fullAddress di-import agar tetap menjadi acuan tunggal; dipakai komponen lain.
void fullAddress;
