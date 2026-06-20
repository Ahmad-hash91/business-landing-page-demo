import Button from "./Button";

export default function Header({ changeLanguageHandler }) {
  return (
    <div className="flex flex-row justify-between items-center px-6 py-4 border-b border-border">
      <div>
        <p className="text-xl font-heading font-bold text-primary">Brand</p>
      </div>
      <div className="flex flex-row items-center gap-8">
        <nav className="flex flex-row gap-6">
          <a
            href="#features"
            className="text-text-gray hover:text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#about"
            className="text-text-gray hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#testimonials"
            className="text-text-gray hover:text-primary transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-text-gray hover:text-primary transition-colors"
          >
            Contact
          </a>
        </nav>
        <Button
          onClickHandler={changeLanguageHandler}
          className="bg-transparent text-text-gray hover:bg-border px-3 py-2 rounded-lg"
        >
          EN | AR
        </Button>
      </div>
    </div>
  );
}
