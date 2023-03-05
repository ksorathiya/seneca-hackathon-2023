import React from "react";

let FAQs = [
  { question: "1. What is a Smart City?", answer: "A Smart City is an urban development vision to integrate information and communication technology (ICT) and Internet of Things (IoT) technology in a secure fashion to manage a city's assets and resources more efficiently for the city's future development" },
  { question: "2. What are the criteria for a city to become a Smart City?", answer: "The criteria for a city to become a Smart City include a solid and reliable ICT infrastructure with efficient energy management systems, smart transportation, and mobility solutions. Moreover, with effective waste management systems and efficient public services, including the basic needs like electricity, water, heating, and other households that need to be managed within these areas." },
  { question: "3. What is a Smart Cities hackathon?", answer: "A Smart Cities hackathon is where developers, designers, data scientists, and other tech-savvy individuals come together to develop innovative solutions for urban problems related to the development of Smart Cities." },
  { question: "4. Who can participate in a Smart Cities hackathon?", answer: "Anyone with a passion for technology and innovation can participate in a Smart Cities hackathon, including students, developers, data scientists, and urban planners, if they think they have a solution to making an efficient and effective city transformation that is technically and realistically feasible." },
  { question: "5. What is the format of a Smart Cities hackathon?", answer: "A Smart Cities hackathon typically begins with a series of presentations and workshops on the theme of Smart Cities. Participants then form teams and work on a solution to a specific problem related to the development of Smart Cities. The hackathon culminates in a pitch competition, where teams present their solutions to a panel of judges." },
  { question: "6. What solutions are typically developed during a Smart Cities hackathon?", answer: "Solutions developed during a Smart Cities hackathon can range from smart transportation systems to efficient energy management systems, from waste management solutions to public safety systems, and from smart healthcare systems to citizen engagement platforms." },
  { question: "7. How can I get involved in a Smart Cities hackathon?", answer: "You can get involved in a Smart Cities hackathon by searching for events in your area or by contacting organizations specializing in developing Smart Cities. You can also sign up for updates on hackathons and other events related to Smart Cities." },
];

export default function FAQAccordion() {
  return (
    
    <div
      id="accordion-flush"
      data-accordion="collapse"
      data-active-classes="p-4 mb-2 bg-red-700 font-semibold text-bold rounded-xl dark:rounded dark:px-4 dark:bg-red-700 text-gray-200 dark:text-gray-200 text-2xl"
      data-inactive-classes="p-4 mb-2 text-2xl text-bold text-red-700 dark:font-semibold dark:rounded dark:px-4 dark:text-red-700 bg-white"
    >
      <h2 class="font-heading rounded-xl mb-6 text-3xl md:text-4xl lg:text-5xl text-red-700 font-black tracking-tight text-center">Frequently Asked Questions</h2>
      {FAQs.map((faq, index) => {
        return (
          <>
            <h2 id={"accordion-flush-heading-" + index}>
              <button
                type="button"
                class="flex px-4 text-2xl items-center justify-between rounded w-full py-5 text-left text-red-700 border-b-2 border-gray-600 dark:border-white-400 dark:text-white-400 dark:text-2xl"
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
              <div class="p-2 mb-2 rounded-xl text-xl font-light font-medium border-b-2 bg-white border-gray-500 dark:border-gray-600 text-center md:text-justify">
                <p class="mb-2 p-2 text-xl font-medium text-black dark:text-gray-500">
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
