import Button from "./Button";
import workplace from "../../assets/workplace.jpeg";
export default function Hero({ translations }) {
  return (
    <section className="px-6 py-20 md:py-28 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-dark leading-tight">
          {translations.heading}
        </h1>
        <p className="text-lg text-text-gray max-w-md">
          {translations.subline}
        </p>
        <Button
          onClickHandler={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl"
        >
          {translations.cta}
        </Button>
      </div>

      <img src={workplace} className="object-cover h-full w-full rounded-2xl" />
    </section>
  );
}
