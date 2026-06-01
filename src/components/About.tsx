import { fullAddress, site } from "@/lib/site";

export function About() {
  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Tentang Kami</h2>
          <p className="text-gray-600 text-lg">
            PT Anugrah Djaya Tunggal adalah perusahaan supplier barang teknik yang
            berbadan hukum dan berkomitmen menyediakan solusi presisi untuk industri
            manufaktur Indonesia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-xl font-semibold text-navy-800 mb-4">Legalitas Perusahaan</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Berbadan Hukum <strong>PT Perorangan</strong> yang sah sesuai regulasi terbaru</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Terdaftar resmi dengan <strong>NIB {site.nib}</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Berdomisili di <strong>{fullAddress}</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Struktur organisasi jelas dengan Direktur sebagai penanggung jawab langsung</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-navy-800 mb-4">Visi & Misi</h3>
            <div className="space-y-4 text-gray-600">
              <div>
                <p className="font-medium text-navy-900 mb-1">Visi</p>
                <p>Menjadi mitra suplai barang teknik terdepan yang dipercaya oleh industri manufaktur nasional.</p>
              </div>
              <div>
                <p className="font-medium text-navy-900 mb-1">Misi</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Menyediakan produk teknik berkualitas dengan presisi tinggi</li>
                  <li>Menjamin ketepatan waktu pengiriman untuk mendukung operasional klien</li>
                  <li>Membangun hubungan bisnis jangka panjang berbasis kepercayaan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
