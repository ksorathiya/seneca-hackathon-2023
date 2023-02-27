export default function Timeline(props) {
  return <div className="w-full xl:w-3/4 mx-auto px-4">
  <div className="py-16 px-8 bg-white rounded-3xl">
    <div className="max-w-8xl mx-auto">
      <h2 className="font-heading  mb-20 text-4xl md:text-5xl text-gray-900 font-black tracking-tight">
        Hackathon Timeline (2023)
      </h2>
      <div className="flex flex-wrap -m-3">
        <div className="w-full md:w-1/2 lg:w-1/4 p-3">
          <div className="flex flex-wrap items-center -m-3 mb-2">
            <div className="w-auto p-3">
              <div className="flex items-center justify-center  text-xl text-gray-900 font-black bg-gray-100 p-5 rounded-full">
                April 29
              </div>
            </div>
            <div className="flex-1 p-3">
              <div className="bg-gray-200 h-px"></div>
            </div>
          </div>
          <div className="md:w-3/4">
            <h3 className="font-heading mb-4 text-2xl text-gray-900 font-bold">
            REGISTRATION <br/> ENDS
            </h3>
            {/* <p className="text-gray-600">
              Description on what is expected on this day?
            </p> */}
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-3">
          <div className="flex flex-wrap items-center -m-3 mb-2">
            <div className="w-auto p-3">
              <div className="flex items-center justify-center  text-xl text-gray-900 font-black bg-gray-100 p-5 rounded-full">
                May 2nd - 3rd
              </div>
            </div>
            <div className="flex-1 p-3">
              <div className="bg-gray-200 h-px"></div>
            </div>
          </div>
          <div className="md:w-3/4">
            <h3 className="font-heading mb-4 text-2xl text-gray-900 font-bold">
                QUALIFIER <br/>(Virtual)
            </h3>
            {/* <p className="text-gray-600">
              Description on what is expected on this day?
            </p> */}
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-3">
          <div className="flex flex-wrap items-center -m-3 mb-2">
            <div className="w-auto p-3">
              <div className="flex items-center justify-center  text-xl text-gray-900 font-black bg-gray-100 p-5 rounded-full">
                May 5th
              </div>
            </div>
            <div className="flex-1 p-3">
              <div className="bg-gray-200 h-px"></div>
            </div>
          </div>
          <div className="md:w-3/4">
            <h3 className="font-heading mb-4 text-2xl text-gray-900 font-bold">
              FINALE DAY 1 (Virtual)
            </h3>
            {/* <p className="text-gray-600">
              Description on what is expected on this day?
            </p> */}
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-3">
          <div className="flex flex-wrap items-center -m-3 mb-2">
            <div className="w-auto p-3">
              <div className="flex items-center justify-center  text-xl text-gray-900 font-black bg-gray-100 p-5 rounded-full">
                May 6th
              </div>
            </div>
            <div className="flex-1 p-3">
              <div className="bg-gray-200 h-px"></div>
            </div>
          </div>
          <div className="md:w-3/4">
            <h3 className="font-heading mb-4 text-2xl text-gray-900 font-bold">
              FINALE DAY 2 (Hybrid)
            </h3>
            {/* <p className="text-gray-600">
              Description on what is expected on this day?
            </p> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
}
