export default function Footer() {
  return (
    <footer className="bg-text-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 mb-12">
          <div className="flex flex-col gap-3">
            <p className="text-xl font-heading font-bold text-white">Brand</p>
            <p className="text-white/60 leading-relaxed">
              Delivering professional results for businesses of all sizes.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-white font-semibold tracking-wide">
              Quick Links
            </p>
            <nav className="flex flex-col gap-2">
              <a
                href="#features"
                className="text-white/60 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-white/60 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#testimonials"
                className="text-white/60 hover:text-white transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-white/60 hover:text-white transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-white font-semibold tracking-wide">
              Get In Touch
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-white/60">hello@yourbusiness.com</p>
              <p className="text-white/60">+1 (555) 000-0000</p>
              <p className="text-white/60">New York, NY, USA</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm">
            © 2025 Brand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
