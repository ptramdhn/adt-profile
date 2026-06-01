const clients = [
  "PT Dellifood Sentosa",
];

export function Portfolio() {
  return (
    <section id="portofolio" className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Rekam Jejak Kami</h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Kami telah dipercaya oleh perusahaan-perusahaan besar sebagai mitra suplai
            barang teknik yang andal.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {clients.map((client) => (
            <div
              key={client}
              className="bg-navy-800 border border-navy-600 rounded-lg p-6 text-center w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)]"
            >
              <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-white font-semibold">{client}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-200/60 text-sm mt-8">
          Dan berbagai klien industri lainnya yang kami layani secara berkelanjutan.
        </p>
      </div>
    </section>
  );
}
