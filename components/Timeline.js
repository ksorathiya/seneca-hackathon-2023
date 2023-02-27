let TimelineData = [
  {date:"April 29th", title:"Registration Ends", description:"The last date to make your mark and join us for the “ThinkingNorth Smart Cities Hackathon 2023”."},
  {date:"May 2nd - 3rd", title:"Qualifier (Virtual)", description:"You along with your team would work on one of the challenge sets and will prepare a solution proposal."},
  {date:"May 5th", title:"Finale Day 1 (Virtual)", description:"If your submission is selected for the next round, you will be joining us on first day of finale virtually."},
  {date:"May 6th", title:"Finale Day 2 (Hybrid)", description:"Second day of finale could be attended in-person or online with a lot of mentoring and fun activities."}
]

export default function Timeline(props) {
  return <div className="w-full xl:w-3/4 mx-auto px-4">
  <div className="py-16 px-8 bg-white rounded-3xl">
    <div className="max-w-8xl mx-auto">
      <h2 className="font-heading  mb-20 text-4xl md:text-5xl text-gray-900 font-black tracking-tight">
        Hackathon Timeline (2023)
      </h2>
      <div className="flex flex-wrap -m-3">
        {TimelineData.map((timestamp)=>{return <div className="w-full md:w-1/2 lg:w-1/4 p-3">
          <div className="flex flex-wrap items-center -m-3 mb-2">
            <div className="w-auto p-3">
              <div className="flex items-center justify-center  text-xl text-white font-bold bg-red-600 p-4 rounded-md">
                {timestamp.date}
              </div>
            </div>
            <div className="flex-1 p-3">
              <div className="bg-gray-200 h-px"></div>
            </div>
          </div>
          <div className="md:w-3/4">
            <h3 className="font-heading mb-4 text-xl text-gray-900 font-bold">
            {timestamp.title}
            </h3>
            <p className="text-sm text-gray-600">
              {timestamp.description}
            </p>
          </div>
        </div>})}
      </div>
    </div>
  </div>
</div>
}
