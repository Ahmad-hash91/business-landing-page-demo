import { useState } from "react";
import Button from "./Button";

export default function ClosingCTA({ translations }) {
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-primary py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-xl mx-auto text-center">
        <h2
          id="contact-heading"
          className="text-3xl font-heading font-bold text-white mb-4"
        >
          {translations.heading}
        </h2>
        <p className="text-white/80 mb-10">{translations.subline}</p>

        {submitted ? (
          <div className="bg-white rounded-2xl p-10 flex flex-col items-center gap-4">
            <span className="text-success text-5xl">✓</span>
            <p className="text-text-dark font-semibold text-lg">
              {translations.successMessage}
            </p>
          </div>
        ) : (
          <form
            onSubmit={submitHandler}
            className="bg-white rounded-2xl p-8 flex flex-col gap-5 text-left"
          >
            <div className="flex flex-col gap-1">
              <label
                htmlFor="username"
                className="text-sm font-medium text-text-dark"
              >
                Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                placeholder={translations.namePlaceholder}
                className="border border-border rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-sm font-medium text-text-dark"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder={translations.emailPlaceholder}
                className="border border-border rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="message"
                className="text-sm font-medium text-text-dark"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                maxLength={500}
                rows={4}
                required
                placeholder={translations.messagePlaceholder}
                className="border border-border rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-xl"
            >
              {translations.submitButton}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
