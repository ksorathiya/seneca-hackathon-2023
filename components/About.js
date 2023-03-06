export default function HackathonHero(props) {
  return (
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap lg:flex-nowrap py-16 px-8">
        <div class="w-full">
          <div class="">
            <div class="mb-4">
              <div
                class="text-2xl inline-block py-2 px-4 text-red-600 font-semibold bg-red-50 rounded-xl mb-4"
                contenteditable="false"
              >
                About the Hackathon
              </div>
              <h2 class="text-4xl my-4 font-bold font-heading">
                An all-inclusive student-focused innovation competition.
              </h2>
            </div>
            <div className="flex flex-wrap my-10">
              <div class="w-full md:w-1/2 py-10 px-2 flex flex-col bg-gray-900">
                <div class="flex items-start  ">
                  <div class="w-8 mr-5 text-blue-500"></div>
                  <div>
                    <h3 class="mb-4 text-3xl font-semibold text-white font-heading">
                      Experiential Learning
                    </h3>
                    <p class="text-white leading-loose">
                      Our hackathon provides a unique experiential learning
                      experience for students to develop creative thinking,
                      entrepreneurship, and problem-solving skills.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 py-10 px-2 flex flex-col">
                <div class="flex items-start ">
                  <div class="w-8 mr-5 text-blue-500"></div>
                  <div>
                    <h3 class="mb-4 text-3xl font-semibold font-heading">
                      Collaboration
                    </h3>
                    <p class="text-blueGray-400 leading-loose">
                      We bring together students from diverse backgrounds to
                      work together on addressing real-world challenges.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 py-10 px-2 flex flex-col">
                <div class="flex items-start ">
                  <div class="w-8 mr-5 text-blue-500"></div>
                  <div>
                    <h3 class="mb-4 text-3xl font-semibold font-heading">
                      Mentorship and Technical Support
                    </h3>
                    <p class="text-blueGray-400 leading-loose">
                      Teams receive support from subject-specific mentors and
                      technical specialists to help them bring their ideas to
                      life.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 py-10 px-2 flex flex-col  bg-red-600">
                <div class="flex items-start ">
                  <div class="w-8 mr-5 text-blue-500"></div>
                  <div>
                    <h3 class="mb-4 text-3xl text-white font-semibold font-heading">
                      Showcase
                    </h3>
                    <p class="text-white leading-loose">
                      Teams get to showcase their solutions in a fun and lively
                      environment to be adjudicated by a panel of experts
                      consisting of investors, partners, school representatives,
                      and domain specialists.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 py-10 px-2 flex flex-col bg-gray-900">
                <div class="flex items-start ">
                  <div class="w-8 mr-5 text-blue-500"></div>
                  <div>
                    <h3 class="mb-4 text-3xl text-white font-semibold font-heading">
                      Winning Opportunities
                    </h3>
                    <p class="text-white leading-loose">
                      The winning teams have the opportunity to receive prizes
                      and be considered for applied research project investment
                      opportunities.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 py-10 px-2 flex flex-col">
                <div class="flex items-start ">
                  <div class="w-8 mr-5 text-blue-500"></div>
                  <div>
                    <h3 class="mb-4 text-3xl font-semibold font-heading">
                      Student-Led
                    </h3>
                    <p class="text-blueGray-400 leading-loose">
                      Our hackathon is mainly organized by the students, alumni,
                      professors, and members of Seneca College, with the
                      support of sponsors, including our title sponsor
                      ThinkingNorth for the Smart Cities Hackathon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
