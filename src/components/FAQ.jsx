import { useState } from "react";

export default function FAQ({ translations }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItemHandler = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <h2
          id="faq-heading"
          className="text-3xl font-heading font-bold text-text-dark text-center mb-12"
        >
          {translations.heading}
        </h2>
        <div className="flex flex-col gap-3">
          {translations.items.map((item, idx) => (
            <div
              key={idx}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleItemHandler(idx)}
                className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-text-dark hover:bg-bg transition-colors"
              >
                <span>{item.question}</span>
                <span className="text-primary text-xl shrink-0 ml-4">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-6 py-5 text-text-gray leading-relaxed border-t border-border">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
