import {
  BoltIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const icons = [BoltIcon, ShieldCheckIcon, UserGroupIcon];

export default function Features({ translations }) {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="bg-bg py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="features-heading"
          className="text-3xl font-heading font-bold text-text-dark text-center mb-12"
        >
          {translations.heading}
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {translations.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-border flex flex-col gap-4"
              >
                <Icon className="h-8 w-8 text-accent" />
                <h3 className="text-xl font-heading font-semibold text-text-dark">
                  {item.title}
                </h3>
                <p className="text-text-gray leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
