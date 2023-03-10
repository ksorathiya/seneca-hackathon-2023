let challengeSetCategories = [
  {
    imagePath: "/assets/Mental health icon.jpg",
    title: "Mental Health",
    description:
      "This challenge set aims to find innovative solutions to tackle mental health problems such as anxiety, depression, and isolation, which have been exacerbated by the pandemic. Ideas could include developing mental health apps, creating online communities for support, and sharing, and implementing effective strategies for promoting mental wellness among students in universities and colleges. Special emphasis will be placed on social media and online gambling addictions.",
  },
  {
    imagePath: "/assets/Smart buildings icon.jpg",
    title: "Smart Buildings",
    description:
      "This includes a broad set of method's, often Analytics, AI/ML and Deep Learning which use big data generated from everyday operations (such as HVAC systems) to positively influence operational KPIs including cost, efficiency, carbon footprint etc. Design and operations using digital twin or BIM is in scope. Farming and Urban farming is also in scope.",
  },
  {
    imagePath: "/assets/Data privacy icon.jpg",
    title: "Data Privacy and Security",
    description:
      "The challenge sets focus on the data privacy and security of ANY stakeholder in the smart city, including marginalized and disenfranchised communities, everyday citizens, small business owners, and city municipal governments.",
  },
  {
    imagePath: "/assets/Smart Analysis.jpg",
    title: "Smart Analytics and Insights",
    description:
      "The challenge sets on utilizing advanced technologies to extract meaningful insights from data, such as image and video data, traffic camera, drones and GIS analysis. These insights can be applied to a variety of fields to solve real-world problems and optimize processes.",
  },
  {
    imagePath: "/assets/Smart businesses icon.jpg",
    title: "Smart Business",
    description:
      "Challenge sets in this category could focus on developing solutions that leverage data and automation to enhance the efficiency, sustainability, and customer experience of businesses in smart cities, such as food order delivery services, ride-sharing platforms, carpooling apps, personal service scheduling, last-mile logistics.",
  },
  {
    imagePath: "/assets/Sustainable city icon.jpg",
    title: "Sustainable City",
    description:
      "Promote efficient, safe, and sustainable transportation, such as traffic management systems, intelligent transportation networks, or autonomous vehicles. Additionally, the challenge includes sets that address environmental concerns, such as preserving natural heritage, reducing waste and loss, and promoting sustainable living. Participants are also encouraged to create solutions that improve the quality of life for young families in smart cities, such as child care and safety and family-friendly public spaces.",
  },
];

export default function ChallengeSetCategories(props) {
  return (
    <div class="container px-4 py-6 mx-auto">
      <div class="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
        <div class="w-full lg:w-1/2 mb-4 lg:mb-0">
          <h2 class="font-heading mt-15 text-4xl md:text-5xl leading-3 text-gray-900 font-black tracking-tight">
            Challenge Set Categories
          </h2>
        </div>
        <div class="w-full lg:w-1/2 lg:pl-16">
          <p class="text-blueGray-400 text-md">
            Explore a variety of challenges in the hackathon and demonstrate
            your innovative skills and creativity. Choose your passion and make
            a real-world impact.
          </p>
        </div>
      </div>
      <div class="flex flex-wrap  -mb-6 text-center">
        {challengeSetCategories.map((challengeSet) => {
          return (
            <div class="w-full md:w-1/2 lg:w-1/3 md:px-3 mb-6 flex flex-col">
              <div class="p-5 bg-white shadow-md shadow-red-600/20 rounded flex-1">
                <img class="h-48 mx-auto" src={challengeSet.imagePath} alt="" />
                <h3 class="mb-2 font-bold font-heading">
                  {challengeSet.title}
                </h3>
                <p class="text-sm text-blueGray-400 leading-relaxed">
                  {challengeSet.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
