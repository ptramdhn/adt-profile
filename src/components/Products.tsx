"use client";

import { useState } from "react";

/* ─── Icon Components ─────────────────────────────────────────────── */

function RubberIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
      <circle cx="12" cy="12" r="5" strokeWidth={1.5} />
      <circle cx="12" cy="12" r="1.5" strokeWidth={1.5} />
    </svg>
  );
}

function PolyurethaneIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7l10 5 10-5-10-5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 17l10 5 10-5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 12l10 5 10-5" />
    </svg>
  );
}

function FabricationIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function CarbonIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}


/* ─── Category Data ───────────────────────────────────────────────── */

interface ProductCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  accentSolid: string;
  materials?: string[];
  products: string[];
}

const categories: ProductCategory[] = [
  {
    id: "rubber",
    title: "Rubber",
    tagline: "Oil Seal, O-Ring, Rod Seal, Wiper Seal, Coupling & Custom Rubber",
    description:
      "Produk karet industri berkualitas tinggi untuk berbagai aplikasi sealing, damping, dan coupling. Tersedia dalam berbagai material: Silicone (Food Grade), NBR (tahan gesek & minyak), SBR (fleksibel), dan Viton (tahan kimia & panas hingga 200°C).",
    icon: <RubberIcon />,
    accentColor: "text-teal-500",
    accentBg: "bg-teal-500/10",
    accentBorder: "border-teal-500/20",
    accentSolid: "bg-teal-500",
    materials: ["Silicone (Food Grade)", "NBR (Tahan Gesek & Minyak)", "SBR (Daya Flexible Tinggi)", "Viton (Tahan Kimia & Panas 200°C)"],
    products: [
      "Rubber Pad",
      "Rubber Bush",
      "Rubber Bellow",
      "Rubber Per Vibrator",
      "Rubber Butterfly",
      "Rubber Coupling",
      "Oil Seal TB & TC",
      "O-Ring & O-Ring Cord",
      "Wiper Seal",
      "Hydraulic Seal",
      "Rubber Starwheel",
      "Guider Diaphragm",
      "Rubber Buffer",
      "Rubber Mounting",
      "Rubber List",
      "Silicone Sucker",
    ],
  },
  {
    id: "polyurethane",
    title: "Polyurethane",
    tagline: "Rod Seal, Wiper Seal, PU Roll, Pelapisan Roda & Custom Polyurethane",
    description:
      "Produk polyurethane (PU) dengan ketahanan aus dan beban tinggi, ideal untuk aplikasi conveyor, material handling, dan sistem hidrolik. Tersedia untuk pelapisan roda forklift, hand pallet, dan custom sesuai kebutuhan.",
    icon: <PolyurethaneIcon />,
    accentColor: "text-amber-500",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/20",
    accentSolid: "bg-amber-500",
    products: [
      "Hydraulic Seal PU",
      "Wiper Seal PU",
      "Roller V",
      "Diaphragm PU",
      "Roller Grooving",
      "Polyurethane Coupling",
      "Star Wheel PU",
      "Roller PU",
      "Roda Hand Pallet",
      "Roda Fork Lift",
      "Gear PU",
      "Custom PU",
      "Wheel Thread",
      "Skird Conveyor",
    ],
  },
  {
    id: "fabrication",
    title: "Fabrication",
    tagline: "Pembuatan Spare Part Mesin, Gear, Shaft, Flange, Bushing & CNC Machining",
    description:
      "Layanan fabrikasi presisi menggunakan material S45C, VCN, SUS, Nylon, Teflon, dan lainnya. Meliputi pembuatan spare part mesin, berbagai jenis gear, shaft, flange, bushing, serta spare part mesin mie (slitter, sisir, retainer). Dikerjakan dengan mesin CNC untuk akurasi tinggi.",
    icon: <FabricationIcon />,
    accentColor: "text-blue-500",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/20",
    accentSolid: "bg-blue-500",
    materials: ["S45C", "VCN", "SUS (Stainless Steel)", "Nylon", "Teflon"],
    products: [
      "Spur Gear",
      "Helical Gear",
      "Spiral Bevel Gear",
      "Miter Gear",
      "Straight Bevel Gear",
      "Internal Gear",
      "Worm Gear",
      "Rack and Pinion",
      "Coupling Servo",
      "Inside & Outside Plat Coupling",
      "Bracket",
      "Sprocket Single / Double / Triplet",
      "Aluminum Lock",
      "Finger Bronze",
      "Ring Wear",
      "Flexible Metal",
      "Carbon Bearing",
      "Insulator",
      "Nozzle",
      "Machine Keys",
      "Universal Joint",
      "Spare Part Mesin Mie (Slitter, Sisir, Retainer, Lid Retainer)",
      "Noodle Slitter Set",
    ],
  },
  {
    id: "carbon",
    title: "Carbon",
    tagline: "Carbon Brush, Carbon Metal, Carbon Seal, Slip Ring & Commutator",
    description:
      "Komponen carbon untuk kelistrikan dan rotary equipment. Meliputi carbon brush untuk motor listrik, carbon metal, carbon seal, slip ring, carbon rod, dan commutator untuk berbagai aplikasi industri.",
    icon: <CarbonIcon />,
    accentColor: "text-orange-500",
    accentBg: "bg-orange-500/10",
    accentBorder: "border-orange-500/20",
    accentSolid: "bg-orange-500",
    products: [
      "Carbon Brush",
      "Carbon Metal",
      "Carbon Seal",
      "Slip Ring",
      "Carbon Rod",
      "Commutator",
      "Mechanical Seal",
    ],
  },

];

/* ─── Product Card Component ─────────────────────────────────────── */

function ProductCard({ cat, isActive, onToggle }: { cat: ProductCategory; isActive: boolean; onToggle: () => void }) {
  const displayProducts = isActive ? cat.products : cat.products.slice(0, 6);
  const hasMore = cat.products.length > 6;

  return (
    <div
      className={`relative bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
        isActive
          ? `shadow-xl ${cat.accentBorder} border-2 scale-[1.01]`
          : "border-gray-200 hover:shadow-lg hover:border-gray-300"
      }`}
    >
      {/* Accent Bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${cat.accentSolid}`} />

      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${cat.accentBg} ${cat.accentColor} flex items-center justify-center`}>
            {cat.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-navy-900">{cat.title}</h3>
            <p className="text-sm text-gray-500 mt-0.5 line-clamp-2">{cat.tagline}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-5">
          {cat.description}
        </p>

        {/* Material Badges */}
        {cat.materials && (
          <div className="mb-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Material Tersedia</p>
            <div className="flex flex-wrap gap-2">
              {cat.materials.map((mat) => (
                <span
                  key={mat}
                  className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${cat.accentBg} ${cat.accentColor}`}
                >
                  {mat}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Produk ({cat.products.length} item)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
            {displayProducts.map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-700 py-1">
                <span className={`w-1.5 h-1.5 mt-1.5 rounded-full flex-shrink-0 ${cat.accentSolid}`} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expand / Collapse */}
        {hasMore && (
          <button
            onClick={onToggle}
            className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              isActive
                ? `${cat.accentBg} ${cat.accentColor} hover:opacity-80`
                : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            }`}
            aria-expanded={isActive}
          >
            {isActive ? "Sembunyikan" : `Lihat Semua ${cat.products.length} Produk`}
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

/* ─── Main Products Section ───────────────────────────────────────── */

export function Products() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="produk" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-teal-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Katalog Lengkap
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Produk &amp; Layanan Kami
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Spesialis <strong>Fabrication, Polyurethane &amp; Rubber</strong> dengan pengalaman puluhan tahun.
            Kami memproduksi berbagai komponen industri dari beragam bahan baku sesuai fungsi dan kebutuhan Anda.
          </p>
        </div>

        {/* Quick Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#cat-${cat.id}`}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:shadow-md ${cat.accentBg} ${cat.accentColor} ${cat.accentBorder}`}
            >
              <span className="hidden sm:inline">{cat.icon}</span>
              {cat.title}
            </a>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat) => (
            <div key={cat.id} id={`cat-${cat.id}`} className="scroll-mt-24">
              <ProductCard
                cat={cat}
                isActive={expandedId === cat.id}
                onToggle={() => toggleExpand(cat.id)}
              />
            </div>
          ))}
        </div>

        {/* Total product count & CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-sm border border-gray-200">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-navy-900">
                {categories.reduce((sum, cat) => sum + cat.products.length, 0)}+
              </span>
              <span className="text-sm text-gray-500 text-left leading-tight">
                Jenis Produk<br />Tersedia
              </span>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-navy-900">{categories.length}</span>
              <span className="text-sm text-gray-500 text-left leading-tight">
                Kategori<br />Utama
              </span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Tidak menemukan produk yang Anda cari? Hubungi kami untuk katalog lengkap dan penawaran harga khusus.
          </p>
        </div>
      </div>
    </section>
  );
}
