export default function HackathonHero(props) {
  return (
    <div className="bg-white overflow-hidden border border-gray-100 ">
              <div
                className="px-8 py-20 w-full h-full flex justify-center items-center 
             bg-gray-900 backdrop-brightness-75"
              >
                <div className="md:max-w-2xl text-center mx-auto">
                  <img src="/assets/thinking-north-logo.png" width="100px" class="m-auto"/>
                  <span className="inline-block mb-3 text-sm font-bold tracking-widest text-white">
                    presents
                  </span>
                  <h1
                    className="font-heading mb-6 text-5xl lg:text-6xl text-white font-black tracking-tight"
                    contenteditable="false"
                  >
                    <span contenteditable="false">
                      SMART CITIES{" "}
                      <span className="text-red-500">HACKATHON</span>
                    </span>
                    {/* <span className="text-transparent bg-clip-text bg-gradient-orange-light">
                    HACKATHON
                  </span> */}
                    <br />
                    {/* <span>build innovation for the future</span> */}
                  </h1>
                  <p className="mb-8 text-xl text-white ">
                    Join the brightest minds from across the globe and help
                    solve real-world challenges in making cities smarter.
                  </p>
                  <div className="max-w-lg mx-auto">
                    <div className="flex-wrap -m-2">
                      <div className="w-full md:w-auto p-2">
                        <div className="flex flex-wrap justify-center -m-2">
                          <div className="w-full md:w-auto p-2">
                            <a
                              className="block w-full px-8 py-3.5 text-lg text-center text-white focus:ring-4 focus:ring-blue-200 rounded-full bg-red-600 hover:bg-red-700"
                              target="_blank"
                              href="https://senecahackathon.eventbrite.ca"
                            >
                              Register Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between w-full h-full">
                    <div className="pt-8">
                      <div className="flex flex-wrap justify-center">
                        <div className="w-auto p-1.5">
                          <a
                            className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-red-500 rounded-full"
                            href="https://www.instagram.com/senecahackathon/"
                            target="_blank"
                          >
                            <img src="zanrly-assets/images/insta.svg" alt="" />
                          </a>
                        </div>
                        <div className="w-auto p-1.5">
                          <a
                            className="flex items-center justify-center w-10 h-10 bg-white hover:bg-red-500 rounded-full"
                            href="https://twitter.com/SenecaHackathon"
                            target="_blank"
                          >
                            <img src="assets/linkedin.svg" alt="" />
                          </a>
                        </div>
                        <div className="w-auto p-1.5">
                          <a
                            className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-red-500 rounded-full"
                            href="https://twitter.com/SenecaHackathon"
                            target="_blank"
                          >
                            <img
                              src="zanrly-assets/images/twitter.svg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="w-auto p-1.5">
                          <a
                            className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-red-500 rounded-full"
                            href="https://www.facebook.com/SenecaHackathon2022"
                            target="_blank"
                          >
                            <img src="zanrly-assets/images/fb.svg" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  );
}
