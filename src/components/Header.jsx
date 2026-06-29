import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from "./Button";

export default function Header({ changeLanguageHandler, translations }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="border-b border-border bg-white">
      <div className="flex flex-row justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <p className="text-xl font-heading font-bold text-primary">
          {translations.brand}
        </p>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex flex-row gap-6">
            {translations.navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-text-gray hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button
            onClickHandler={changeLanguageHandler}
            className="bg-transparent text-text-gray hover:bg-border px-3 py-2 rounded-lg"
          >
            {translations.languageToggle}
          </Button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-text-gray hover:text-primary transition-colors"
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden flex flex-col px-6 pb-4 gap-4 border-t border-border">
          {translations.navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-text-gray hover:text-primary transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
