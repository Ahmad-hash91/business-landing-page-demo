// Header.jsx
import Button from "./Button";

export default function Header({ changeLanguageHandler, translations }) {
  return (
    <div className="flex flex-row justify-between items-center px-6 py-4 border-b border-border">
      <div>
        <p className="text-xl font-heading font-bold text-primary">
          {translations.brand}
        </p>
      </div>
      <div className="flex flex-row items-center gap-8">
        <nav className="flex flex-row gap-6">
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
      </div>
    </div>
  );
}
