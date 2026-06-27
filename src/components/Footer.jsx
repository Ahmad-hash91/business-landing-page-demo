export default function Footer({ translations }) {
  return (
    <footer className="bg-text-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 mb-12">
          <div className="flex flex-col gap-3">
            <p className="text-xl font-heading font-bold text-white">
              {translations.brand}
            </p>
            <p className="text-white/60 leading-relaxed">
              {translations.tagline}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white font-semibold tracking-wide">
              {translations.quickLinksHeading}
            </p>
            <nav className="flex flex-col gap-2">
              {translations.navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white font-semibold tracking-wide">
              {translations.contactHeading}
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-white/60">{translations.email}</p>
              <p className="text-white/60">{translations.phone}</p>
              <p className="text-white/60">{translations.location}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm">{translations.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
