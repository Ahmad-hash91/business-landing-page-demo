import {
  BoltIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function Features() {
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
          What We Offer
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-border flex flex-col gap-4">
            <BoltIcon className="h-8 w-8 text-accent" />
            <h3 className="text-xl font-heading font-semibold text-text-dark">
              Quick Turnaround
            </h3>
            <p className="text-text-gray leading-relaxed">
              We deliver results quickly without compromising on quality or
              attention to detail.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-border flex flex-col gap-4">
            <ShieldCheckIcon className="h-8 w-8 text-accent" />
            <h3 className="text-xl font-heading font-semibold text-text-dark">
              Trusted Quality
            </h3>
            <p className="text-text-gray leading-relaxed">
              Every project is built to the highest standard, backed by our
              satisfaction guarantee.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-border flex flex-col gap-4">
            <UserGroupIcon className="h-8 w-8 text-accent" />
            <h3 className="text-xl font-heading font-semibold text-text-dark">
              Dedicated Support
            </h3>
            <p className="text-text-gray leading-relaxed">
              Our team is always available to answer questions and support you
              every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
