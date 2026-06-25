import { useState } from "react";

const faqList = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects are completed within 3 to 7 business days depending on the scope and complexity. We'll always confirm the timeline before starting.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes, all packages include revisions. The number of revisions depends on the package you choose — we want to make sure you're completely happy with the result.",
  },
  {
    question: "What do I need to provide to get started?",
    answer:
      "We'll need your business name, a description of your services, any text content you want included, and your preferred colors or branding. We'll guide you through everything.",
  },
  {
    question: "Can I request additional features not listed in your packages?",
    answer:
      "Absolutely. Send us a message describing what you need and we'll put together a custom offer that fits your requirements and budget.",
  },
];

export default function FAQ() {
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
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-3">
          {faqList.map((item, idx) => (
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
