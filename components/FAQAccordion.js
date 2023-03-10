import React from "react";

let FAQs = [
  {
    question: `1. What is "Smart City"?`,
    answer:
      `For our hackathon, "Smart City" serves as a guiding concept for selecting a range of local social issues that resonate with you and ignite your passion. Together, these causes strive to enhance the well-being of you and your fellow citizens by improving various aspects of life such as sustainability, security, comfort, affordability, and productivity.`,
  },
  {
    question: "2. How can you help transform a city into a Smart City?",
    answer:
      "It's imperative that our participants recognize their vital role in shaping the future of their city. You are responsible for educating yourself on crucial social issues and not accepting them at face value from politicians or the media. To facilitate this, the hackathon motivates participants to explore areas of concern, discover a cause that deeply resonates with them, form a group of like-minded individuals, conduct research to understand the problem, utilize their innovation and skills to define a solution, and finally, with the help of provided expertise, create a tangible solution.",
  },
  {
    question: "3. What does our Smart Cities hackathon entail?",
    answer:
      "The hackathon presents an avenue for you to effect change by educating yourself, scrutinizing issues, employing critical thinking, absorbing guidance from subject matter experts, devising potential solutions, and presenting them to leaders in industry, government, and education who can help bring your vision to fruition. This is an exceptional opportunity for you to make a meaningful difference.",
  },
  {
    question: "4. Who is eligible to compete in the hackahton?",
    answer:
      "Seneca students and alumni are encouraged to collaborate with students from any school or program to form their teams. However, official partner schools have the exclusive privilege to submit teams that only consist of students from their respective schools to participate in the competition. There is no cost to any student thanks to the generous sponsors.",
  },
  {
    question: "5. How do I increase my chances of winning?",
    answer:
      "Diversity! To increase their chances of winning, a team should possess a well-rounded skill set that includes strong communication skills, leadership abilities, project management expertise, engineering skills, and proficiency in software development such as front-end, coding, back-end, and data if software is a part of the solution. A balanced combination of these skills will give a team a competitive advantage and make them more likely to succeed in the hackathon.",
  },
  {
    question:
      "6. What is the format of the hackathon?",
    answer:
      "The hackathon will consist of an all-virtual qualifier session on May 2-3, which will feature keynote speakers, breakout sessions, and technical and subject matter breakouts. Participants will be required to submit a playbook and a 4-minute video presentation for judging by a panel. The finalists will be selected based on their submissions and will compete on May 5th and 6th. May 5th will be a virtual event with keynote speeches, breakout sessions, and mentoring opportunities. On Saturday, May 6th, the event will be held in-person and run all day at the Seneca York CITE building. Breakfast, lunch dinner and snacks are provided. Virtual accommodations will be made available for participants from out of town or out of the country.",
  },
  {
    question: "7. What kind of solutions are typically developed?",
    answer:
      "Participants are expected to use the challenge sets as a guide to define the scope of their solutions. The most successful solutions will adhere to design thinking principles and solid system analysis and design methods. Participants should use highly iterative agile processes to work within the time constraints. The evaluation criteria for the solutions will be formally published. Each team's solution will be assessed by assigned independent expert  judges who will deliberate and rank the submissions they review based on the rubric",
  },
  {
    question: "8. What do I get?",
    answer:
      "Competing in a hackathon offers significant advantages for all participants, including microcredentials that are awarded to both participants and organizers. Winners are eligible for prizes that range from investor advice, internship and research opportunities, investor opportunities, and cash prizes. Participating in a hackathon provides valuable experiential learning opportunities that can be useful when building a resume or interviewing with potential employers. Employers also benefit from hackathons as they are viewed as effective HR/hiring tools for identifying top talent.",
  }
];

export default function FAQAccordion() {
  return (
    <div
      id="accordion-flush"
      data-accordion="collapse"
      data-active-classes="p-4 mb-2 bg-red-700 font-semibold text-bold rounded-xl dark:rounded dark:px-4 dark:bg-red-700 text-white dark:text-white text-2xl"
      data-inactive-classes="p-4 mb-2 text-2xl text-bold text-red-700 dark:font-semibold dark:rounded dark:px-4 dark:text-red-700 bg-white"
    >
      <h2 class="font-heading rounded-xl mb-6 text-3xl md:text-4xl lg:text-5xl text-red-700 font-black tracking-tight text-center">
        Frequently Asked Questions
      </h2>
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
