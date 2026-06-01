import { fullAddress, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-navy-700 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md text-gray-200/80 text-sm space-y-1">
          <h3 className="text-white font-bold text-base">{site.name}</h3>
          <address className="not-italic">{fullAddress}</address>
          <p>
            Telp/WA:{" "}
            <a href={`https://wa.me/${site.whatsapp}`} className="hover:text-teal-400">
              {site.phone}
            </a>{" "}
            · Email:{" "}
            <a href={`mailto:${site.email}`} className="hover:text-teal-400">
              {site.email}
            </a>
          </p>
          <p>Jam operasional: {site.hours}</p>
        </div>
        <p className="text-gray-200/50 text-sm mt-6 border-t border-navy-700 pt-6">
          &copy; {new Date().getFullYear()} {site.name}. Seluruh hak dilindungi.
        </p>
      </div>
    </footer>
  );
}
