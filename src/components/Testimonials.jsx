import { StarIcon } from "@heroicons/react/24/solid";

export default function Testimonials({ translations }) {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-bg py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="testimonials-heading"
          className="text-3xl font-heading font-bold text-text-dark text-center mb-12"
        >
          {translations.heading}
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {translations.items.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-border flex flex-col gap-4"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-accent" />
                ))}
              </div>
              <p className="text-text-gray leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 mt-2">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="text-white text-sm font-semibold">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-text-dark">{t.name}</p>
                  <p className="text-sm text-text-gray">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
