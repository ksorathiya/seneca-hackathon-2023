export default function DesignJamHero(props) {
  return (
    <div className="bg-white overflow-hidden border border-gray-100 h-full">
              <div
                className="px-8 py-20 w-full h-full flex justify-center items-center 
             bg-white backdrop-brightness-75"
              >
                <div className="md:max-w-2xl text-center mx-auto">
                  <span className="inline-block mb-3 text-sm font-bold uppercase tracking-widest text-red-600">
                    Also checkout
                  </span>
                  <h1
                    className="font-heading text-4xl lg:text-5xl text-black font-black tracking-tight"
                    contenteditable="false"
                  >
                      Design Jam by
                    <br />
                  </h1>
                  <img
                        className="m-auto my-5"
                        src="https://yfile.news.yorku.ca/wp-content/uploads/2021/09/yu-logo-header.png"
                        alt=""
                      />
                  <p className="text-xl text-black ">
                    A 12 - 16 hours asynchronous online learning organized by
                    &nbsp;
                    <br />
                    <span className="text-red-600">Smart Cities Hackathon</span>
                    , in association with York University's YSpace.
                    <br></br>
                    <br></br>
                    
                  </p>
                  <div className="max-w-lg mx-auto">
                    <div className="flex-wrap -m-2">
                      <div className="w-full md:w-auto p-2">
                        <div className="flex flex-wrap justify-center -m-2">
                          <div className="w-full md:w-auto p-2">
                            <a
                              className="block w-full px-8 py-3.5 text-lg text-center text-white focus:ring-4 focus:ring-blue-200 rounded-full bg-red-600 hover:bg-red-700"
                              href="#"
                            >
                              Enroll Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between w-full h-full">
                    
                    <span className="text-red-600 mt-3 text-sm">
                      enrollment ends on March 10!
                    </span>
                    
                  </div>
                </div>
              </div>
            </div>
  );
}
