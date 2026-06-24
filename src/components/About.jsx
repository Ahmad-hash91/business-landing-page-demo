export default function About() {
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
            Who We Are
          </h2>
          <p className="text-text-gray leading-relaxed">
            We are a dedicated team of professionals committed to delivering
            exceptional results for businesses of all sizes. With years of
            experience across multiple industries, we bring both expertise and
            passion to every project we take on.
          </p>
          <ul className="flex flex-col gap-3">
            {[
              "Client-first approach in everything we do",
              "Transparent communication at every stage",
              "Proven track record across multiple industries",
              "Committed to long-term partnerships",
            ].map((item, index) => (
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
        <div
          role="img"
          aria-label="About us visual"
          className="bg-border rounded-2xl aspect-square flex items-center justify-center"
        >
          <p className="text-text-gray text-sm">Image placeholder</p>
        </div>
      </div>
    </section>
  );
}
