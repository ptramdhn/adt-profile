// Single source of truth — NAP (Name, Address, Phone) & data perusahaan.
// Wajib IDENTIK dengan Google Business Profile & direktori (konsistensi NAP).
export const site = {
  name: "PT Anugrah Djaya Tunggal",
  shortName: "Anugrah Djaya Tunggal",
  url: "https://anugrahdjayatunggal.me",
  email: "anugrahdjayatunggal@gmail.com",
  phone: "+62 858-8891-2997", // tampilan
  phoneE164: "+6285888912997", // tel: & schema
  whatsapp: "6285888912997",
  foundingDate: "2025-12-31",
  nib: "3112250037484",
  address: {
    street: "Jl. Luar Batang V No.14 2, RT.5/RW.4, Penjaringan, Kecamatan Penjaringan",
    locality: "Jakarta Utara",
    region: "Daerah Khusus Ibukota Jakarta",
    postalCode: "14440",
    country: "ID",
  },
  // Koordinat presisi dari pin Google Maps "Vonk".
  geo: { lat: -6.123082944211318, lng: 106.8063633784829 },
  hours: "Senin–Sabtu, 08:00–17:00 WIB",
} as const;

export const fullAddress = `${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}`;

// Embed resmi Google Maps (pin "Vonk").
export const mapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.5283080957527!2d106.8063633784829!3d-6.123082944211318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d90678d38dd%3A0xe491d91e359bad74!2sVonk!5e0!3m2!1sid!2sid!4v1780294283974!5m2!1sid!2sid";
