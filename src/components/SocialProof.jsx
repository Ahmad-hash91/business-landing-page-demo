export default function SocialProof({ translations }) {
  return (
    <section
      aria-labelledby="social-proof-heading"
      className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-y border-border"
    >
      <div className="max-w-7xl mx-auto">
        <h2 id="social-proof-heading" className="sr-only">
          Trusted by businesses
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {translations.stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              <span className="text-4xl font-heading font-extrabold text-primary sm:text-5xl tracking-tight">
                {stat.value}
              </span>
              <span className="mt-2 text-base font-medium text-text-gray max-w-50">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
