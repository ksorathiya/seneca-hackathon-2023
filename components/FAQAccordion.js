import React from "react";

let FAQs = [
  { question: "question 1", answer: "answer 1" },
  { question: "question 2", answer: "answer 2" },
  { question: "question 3", answer: "answer 3" },
  { question: "question 4", answer: "answer 4" },
  { question: "question 5", answer: "answer 5" },
  { question: "question 6", answer: "answer 6" },
  { question: "question 7", answer: "answer 7" },
  { question: "question 8", answer: "answer 8" },
];

export default function FAQAccordion() {
  return (
    <div
      id="accordion-flush"
      data-accordion="collapse"
      data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      data-inactive-classes="text-gray-500 dark:text-gray-400"
    >
      {FAQs.map((faq, index) => {
        return (
          <>
            <h2 id={"accordion-flush-heading-" + index}>
              <button
                type="button"
                class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target={"#accordion-flush-body-" + index}
                aria-expanded="true"
                aria-controls={"accordion-flush-body-" + index}
              >
                <span>{faq.question}</span>
                <svg
                  data-accordion-icon
                  class="w-6 h-6 rotate-180 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id={"accordion-flush-body-" + index}
              class="hidden"
              aria-labelledby={"accordion-flush-heading-" + index}
            >
              <div class="py-5 font-light border-b border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
