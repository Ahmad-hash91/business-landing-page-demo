import handshake from "../../assets/handshake.avif";
export default function About({ translations }) {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <h2
            id="about-heading"
            className="text-3xl font-heading font-bold text-text-dark"
          >
            {translations.heading}
          </h2>
          <p className="text-text-gray leading-relaxed">{translations.body}</p>
          <ul className="flex flex-col gap-3">
            {translations.bullets.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-text-gray"
              >
                <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <img
          src={handshake}
          className="object-cover h-full w-full rounded-2xl"
        />
      </div>
    </section>
  );
}
