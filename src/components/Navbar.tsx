export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-sm border-b border-navy-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center">
          <span className="text-white font-bold text-sm sm:text-base">PT Anugrah Djaya Tunggal</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-200">
          <li><a href="#tentang" className="hover:text-teal-400 transition-colors">Tentang</a></li>
          <li><a href="#produk" className="hover:text-teal-400 transition-colors">Produk</a></li>
          <li><a href="#portofolio" className="hover:text-teal-400 transition-colors">Portofolio</a></li>
          <li><a href="#kontak" className="hover:text-teal-400 transition-colors">Kontak</a></li>
        </ul>
      </nav>
    </header>
  );
}
