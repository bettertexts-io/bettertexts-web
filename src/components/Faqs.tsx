import Image from "next/image";

import { Container } from "@/components/Container";
import backgroundImage from "@/images/background-faqs.jpg";

const faqs = [
  [
    {
      question: "What is BetterTexts?",
      answer:
        "BetterTexts is a service that uses artificial intelligence technology to automatically rewrite text to make it unique, without changing its meaning. This can be useful for avoiding plagiarism, as well as for improving the overall quality of your writing.",
    },
    {
      question: "How does the AI Paraphrasing service work?",
      answer:
        "Our AI Paraphrasing service works by analyzing your text and understanding its meaning and context. It then rewrites it to produce a unique version, while maintaining the same meaning. The final result is checked for plagiarism and then returned to you.",
    },
  ],
  [
    {
      question: "What are the benefits of using BetterTexts?",
      answer:
        "AI Paraphrasing can help you avoid duplications, improve the quality of your writing, and save time. It can also help you create unique content that can be used for SEO or other purposes.",
    },
    {
      question: "How accurate is the AI Paraphrasing service?",
      answer:
        "Our AI Paraphrasing service uses advanced algorithms to ensure that the rewritten text is accurate and matches your selected tone of voice. However, as with any AI-based technology, there may be some inaccuracies or errors. We recommend that you review the paraphrased text before using it.",
    },
  ],
];

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-50%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
