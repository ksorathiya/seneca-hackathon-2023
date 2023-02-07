import { useCallback, useEffect, useState } from "react";
import Button from "../components/Button";
import ClickCount from "../components/ClickCount";
import styles from "../styles/home.module.css";

import Image from "next/image";

function throwError() {
  console.log(
    // The function body() is not defined
    document.body()
  );
}

function Home() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((v) => v + 1);
  }, [setCount]);

  useEffect(() => {
    const r = setInterval(() => {
      increment();
    }, 1000);

    return () => {
      clearInterval(r);
    };
  }, [increment]);

  return (
    <>
      {/* // HERO SECTION */}
      <section class="pt-6 pb-20 bg-gray-50 overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="mb-6">
            <div class="flex items-center justify-between px-6 py-3.5 bg-white border border-gray-100 rounded-3xl">
              <div class="w-auto">
                <div class="flex flex-wrap items-center">
                  <div class="w-auto p-2">
                    <a href="#">
                      <img
                        src="/assets/seneca-hackathon-logo.png"
                        width="250"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div class="w-auto">
                <div class="flex flex-wrap items-center">
                  <div class="w-auto hidden lg:block"></div>
                </div>
              </div>
              <div class="w-auto">
                <div class="flex flex-wrap items-center">
                  <div class="w-auto hidden lg:block">
                    <div class="flex flex-wrap -m-2">
                      <div class="w-full md:w-auto p-2"></div>
                      <div class="w-full md:w-auto p-2">
                        <a
                          class="block w-full px-4 py-2.5 text-sm text-center text-white font-bold focus:ring-4 focus:ring-blue-200 rounded-full bg-red-600 hover:bg-red-700"
                          href="#"
                        >
                          May 5th - 6th, 2023
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="w-auto lg:hidden">
                    <a class="inline-block" href="#">
                      <svg
                        class="navbar-burger text-blue-500"
                        width="45"
                        height="45"
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="56"
                          height="56"
                          rx="28"
                          fill="currentColor"
                        ></rect>
                        <path
                          d="M37 32H19M37 24H19"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
              <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
              <nav class="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
                <div class="flex flex-wrap justify-between h-full">
                  <div class="w-full">
                    <div class="flex items-center justify-between -m-2">
                      <div class="w-auto p-2">
                        <a class="inline-block" href="#">
                          <Image
                            src="/assets/seneca-hackathon-logo.png"
                            width="64"
                            height="64"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="w-auto p-2">
                        <a class="inline-block navbar-burger" href="#">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 18L18 6M6 6L18 18"
                              stroke="#111827"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col justify-center py-8 w-full">
                    <ul>
                      <li class="mb-9">
                        <a
                          class="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                          href="#"
                        >
                          Features
                        </a>
                      </li>
                      <li class="mb-9">
                        <a
                          class="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                          href="#"
                        >
                          Solutions
                        </a>
                      </li>
                      <li class="mb-9">
                        <a
                          class="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                          href="#"
                        >
                          Resources
                        </a>
                      </li>
                      <li>
                        <a
                          class="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                          href="#"
                        >
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="flex flex-col justify-end w-full pb-8">
                    <div class="flex flex-wrap -m-2">
                      <div class="w-full p-2">
                        <a
                          class="block w-full px-4 py-2.5 text-sm text-center text-gray-900 font-bold bg-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 border rounded-full"
                          href="#"
                        >
                          Log In
                        </a>
                      </div>
                      <div class="w-full p-2">
                        <a
                          class="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                          href="#"
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div
            class="bg-white overflow-hidden border border-gray-100 rounded-3xl"
            style={{
              "background-image":
                "url('https://images.unsplash.com/photo-1525935944571-4e99237764c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80'); background-size: cover; background-position: center; background-repeat: no-repeat;",
            }}
          >
            <div
              class="px-8 py-20 w-full h-full flex  justify-center items-center 
             bg-gray-900/30 backdrop-brightness-75"
            >
              <div class="md:max-w-2xl text-center mx-auto">
                <span class="inline-block mb-3 text-sm font-bold uppercase tracking-widest text-red-600">
                  build innovations for future
                </span>
                <h1
                  class="font-heading mb-6 text-5xl lg:text-6xl text-white font-black tracking-tight"
                  contenteditable="false"
                >
                  <span contenteditable="false">
                    SMART CITIES <span className="text-red-500">HACKATHON</span>
                  </span>
                  {/* <span class="text-transparent bg-clip-text bg-gradient-orange-light">
                    HACKATHON
                  </span> */}
                  <br />
                  {/* <span>build innovation for the future</span> */}
                </h1>
                <p class="mb-8 text-xl text-gray-300 ">
                  Join the brightest minds from across the globe and help solve
                  real-world challenges in making cities smarter.
                </p>
                <div class="max-w-lg mx-auto">
                  <div class="flex-wrap -m-2">
                    <div class="w-full md:w-auto p-2">
                      <div class="flex flex-wrap justify-center -m-2">
                        <div class="w-full md:w-auto p-2">
                          <a
                            class="block w-full px-8 py-3.5 text-lg text-center text-white focus:ring-4 focus:ring-blue-200 rounded-full bg-red-600 hover:bg-red-700"
                            href="#"
                          >
                            Registrations will start soon!
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
<section class="py-16 bg-gray-100 overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap -m-4">
      <div class="w-full md:w-1/2 p-4">
        <div class="flex flex-col justify-between h-full">
          <div class="flex-initial mb-10">
            <div class="md:max-w-lg">
              <h2 class="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">Frequently Asked Questions</h2>
              <p class="text-gray-500 font-bold">Do you have any questions regarding the SmartCities Hackathon?</p>
            </div>
          </div>
          <div class="flex-initial">
            <div class="flex flex-wrap -m-4">
              <div class="w-full p-4">
                <a class="block p-10 bg-white rounded-3xl" href="#">
                  <div class="flex flex-wrap -m-2">
                    <div class="flex-1 p-2">
                      <h3 class="font-heading mb-3 text-xl text-gray-900 font-black">What is SmartCities Hackathon?</h3>
                      <p class="text-gray-500 font-bold">Smart Cities hackathon is the program where all the innovative ideas run for the future of our cities.</p>
                    </div>
                    <div class="w-auto p-2">
                      <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.07928 15.8201L12.3093 15.8201L17.9193 15.8201C18.8793 15.8201 19.3593 14.6601 18.6793 13.9801L13.4993 8.80007C12.6693 7.97007 11.3193 7.97007 10.4893 8.80007L8.51928 10.7701L5.30927 13.9801C4.63927 14.6601 5.11928 15.8201 6.07928 15.8201Z" fill="#6B7280"></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <div class="w-full p-4">
                <a class="block p-10 bg-white rounded-3xl" href="#">
                  <div class="flex flex-wrap -m-2">
                    <div class="flex-1 p-2">
                      <h3 class="font-heading text-xl text-gray-900 font-black">What is the main agenda of the SmartCities?</h3>
                      <p class="text-gray-500 font-bold">We are checking the innovative ideas for our future cities.</p>

                    </div>
                    <div class="w-auto p-2">
                      <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.9207 8.17993L11.6907 8.17993H6.08072C5.12072 8.17993 4.64073 9.33993 5.32073 10.0199L10.5007 15.1999C11.3307 16.0299 12.6807 16.0299 13.5107 15.1999L15.4807 13.2299L18.6907 10.0199C19.3607 9.33993 18.8807 8.17993 17.9207 8.17993Z" fill="#6B7280"></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <div class="w-full p-4">
                <a class="block p-10 bg-white rounded-3xl" href="#">
                  <div class="flex flex-wrap -m-2">
                    <div class="flex-1 p-2">
                      <h3 class="font-heading text-xl text-gray-900 font-black">How do I register for hackaton?</h3>
                      <p class="text-gray-500 font-bold">You can click the register button and fill and submit the google form.</p>
                    </div>
                    <div class="w-auto p-2">
                      <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.9207 8.17993L11.6907 8.17993H6.08072C5.12072 8.17993 4.64073 9.33993 5.32073 10.0199L10.5007 15.1999C11.3307 16.0299 12.6807 16.0299 13.5107 15.1999L15.4807 13.2299L18.6907 10.0199C19.3607 9.33993 18.8807 8.17993 17.9207 8.17993Z" fill="#6B7280"></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 p-4">
        <img class="mx-auto md:mr-0" src="/assets/seneca-hackathon-faq.jpeg" alt=""/>
      </div>
    </div>
  </div>
</section>
<section class="py-10 bg-gray-900 overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="py-16 px-8 bg-gray-800 rounded-3xl">
      <div class="max-w-7xl mx-auto">
        <div class="mb-12 md:max-w-4xl mx-auto text-center">
          <span class="inline-block mb-4 text-sm text-blue-500 font-bold uppercase tracking-widest">Blog</span>
          <h2 class="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-tight">Our past hackathons</h2>
          <p class="md:max-w-md mx-auto text-gray-500 font-bold">Here you can see the success and theme of past hackathons we conducted so far.</p>
        </div>
        <div class="max-w-5xl mx-auto">
          <div class="flex flex-wrap -m-5 mb-10">
            <div class="w-full p-5">
              <div class="flex flex-wrap h-full bg-gray-900 overflow-hidden rounded-3xl">
                <div class="w-full md:w-1/2">
                  <img class="w-full h-full object-cover" src="/assets/sustainability-hackathon.jpeg" alt=""/>
                </div>
                <div class="flex-1">
                  <div class="md:max-w-lg p-10 h-full">
                    <div class="flex flex-col justify-between h-full">
                      <div class="flex-initial mb-8">
                        <p class="mb-3 text-sm text-gray-400 font-bold">1st Hackathon &bull; 2022</p>
                        <a class="group inline-block mb-4" href="#">
                          <h3 class="font-heading text-2xl text-white hover:text-gray-200 group-hover:underline font-black">Digital Health Hackathon.</h3>
                        </a>
                        <p class="text-gray-400 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada tellus vestibulum, commodo pulvinar.</p>
                      </div>
                      <div class="flex-initial">
                        <div class="flex flex-wrap -m-2">
                          <div class="w-full md:w-auto p-2"><a class="block w-full px-4 py-2.5 text-sm text-center text-gray-900 font-bold bg-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-600 rounded-full" href="#">Read More</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full p-5">
              <div class="flex flex-wrap h-full bg-gray-900 overflow-hidden rounded-3xl">
                <div class="w-full md:w-1/2">
                  <img class="w-full h-full object-cover" src="/assets/digital-health-hackathon.jpeg" alt=""/>
                </div>
                <div class="flex-1">
                  <div class="md:max-w-lg p-10 h-full">
                    <div class="flex flex-col justify-between h-full">
                      <div class="flex-initial mb-8">
                        <p class="mb-3 text-sm text-gray-400 font-bold">2nd Hackathon &bull; 2022</p>
                        <a class="group inline-block mb-4" href="#">
                          <h3 class="font-heading text-2xl text-white hover:text-gray-200 group-hover:underline font-black">Sustainability Hackathon</h3>
                        </a>
                        <p class="text-gray-400 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada tellus vestibulum, commodo pulvinar.</p>
                      </div>
                      <div class="flex-initial">
                        <div class="flex flex-wrap -m-2">
                          <div class="w-full md:w-auto p-2"><a class="block w-full px-4 py-2.5 text-sm text-center text-gray-900 font-bold bg-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-600 rounded-full" href="#">Read More</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap md:justify-center -m-2">
          <div class="w-full md:w-auto p-2"><a class="block w-full px-12 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full" href="#">Read more News</a></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-white overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="mb-16 max-w-xl mx-auto text-center">
      <span class="inline-block mb-2 text-sm text-blue-500 font-bold uppercase tracking-widest">Our team</span>
      <h2 class="font-heading text-4xl md:text-5xl text-gray-900 font-black tracking-tight">The brain behind Hackathon</h2>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="w-full md:w-1/3 p-4">
        <div class="flex flex-col justify-between px-8 pt-10 pb-12 h-full text-center bg-white border border-gray-100 rounded-3xl">
          <div class="flex-initial mb-11">
            <img class="mb-8 mx-auto rounded-3xl" src="/assets/mark-buchner.jpeg" alt=""/>
            <h3 class="font-heading mb-2 text-2xl text-gray-900 font-black tracking-tight">Mark Buchner</h3>
            <p class="text-sm text-gray-500 font-bold">Director</p>
            <p class="text-sm text-gray-500 font-bold">Program Co-ordinator</p>
            <p class="text-sm text-gray-500 font-bold">Seneca College</p>
          </div>
          <div class="flex-initial">
            <div class="flex flex-wrap justify-center -m-4">
              <div class="w-auto p-4">
                <a class="block" href="#">
                  <img src="zanrly-assets/images/insta.svg" alt=""/>
                </a>
              </div>
              <div class="w-auto p-4">
                <a class="block" href="#">
                  <img src="zanrly-assets/images/twitter.svg" alt=""/>
                </a>
              </div>
              <div class="w-auto p-4">
                <a class="block" href="#">
                  <img src="zanrly-assets/images/fb.svg" alt=""/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-4">
        <div class="flex flex-col justify-between px-8 pt-10 pb-12 h-full text-center bg-white border border-gray-100 rounded-3xl">
          <div class="flex-initial mb-11">
            <img class="mb-8 mx-auto rounded-3xl" src="zanrly-assets/images/teams/avatar.png" alt=""/>
            <h3 class="font-heading mb-2 text-2xl text-gray-900 font-black tracking-tight">John Doe</h3>
            <p class="text-sm text-gray-500 font-bold">Design, Founder</p>
          </div>
          <div class="flex-initial">
            <div class="flex flex-wrap justify-center -m-4">
              <div class="w-auto p-4">
                <a class="block" href="#">
                  <img src="zanrly-assets/images/insta.svg" alt=""/>
                </a>
              </div>
              <div class="w-auto p-4">
                <a class="block" href="#">
                  <img src="zanrly-assets/images/twitter.svg" alt=""/>
                </a>
              </div>
              <div class="w-auto p-4">
                <a class="block" href="#">
                  <img src="zanrly-assets/images/fb.svg" alt=""/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-4">
        <div class="flex flex-col justify-between px-8 pt-10 pb-12 h-full text-center bg-white border border-gray-100 rounded-3xl">
          <div class="flex-initial mb-11">
            <img class="mb-8 mx-auto rounded-3xl" src="zanrly-assets/images/teams/avatar.png" alt=""/>
            <h3 class="font-heading mb-2 text-2xl text-gray-900 font-black tracking-tight">Random</h3>
            <p class="text-sm text-gray-500 font-bold">Seneca College</p>
          </div>
          <div class="flex-initial">
            <div class="flex flex-wrap justify-center -m-4">
              <div class="w-auto p-4">
                <a class="block" href="#">
                  <img src="zanrly-assets/images/insta.svg" alt=""/>
                </a> 
              </div>
              <div class="w-auto p-4">
                <a class="block" href="#">
                  <img src="zanrly-assets/images/twitter.svg" alt=""/>
                </a>
              </div>
              <div class="w-auto p-4">
                <a class="block" href="#">
                  <img src="zanrly-assets/images/fb.svg" alt=""/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* FAQ SECTION */}
      {/* <section class="py-16 bg-gray-100 overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="md:max-w-lg mb-10">
            <span class="inline-block mb-5 text-sm text-red-600 font-bold uppercase tracking-widest">
              Frequently asked questions
            </span>
            <h2 class="font-heading text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">
              Common Answers
            </h2>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="w-full md:w-1/2 p-4">
              <div class="flex flex-col justify-between p-10 h-full bg-white rounded-3xl">
                <div class="flex-initial mb-8 md:mb-36">
                  <h3 class="font-heading text-xl text-gray-900 font-black">
                    How does Zanrly help you in problems?
                  </h3>
                </div>
                <div class="flex-initial">
                  <p class="text-gray-500 font-bold">
                    Lorem ipsum dolor sit amet, to the consectr adipiscing elit.
                    Volutpat tempor to the condi mentum vitae vel purus.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 p-4">
              <div class="flex flex-col justify-between p-10 h-full bg-white rounded-3xl">
                <div class="flex-initial mb-8 md:mb-36">
                  <h3 class="font-heading text-xl text-gray-900 font-black">
                    What makes us look good?
                  </h3>
                </div>
                <div class="flex-initial">
                  <p class="text-gray-500 font-bold">
                    Lorem ipsum dolor sit amet, to the consectr adipiscing elit.
                    Volutpat tempor to the condi mentum vitae vel purus.Mauris
                    accumsan tristique velit, lobortis tincidunt ex interdum
                    sagittis.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 p-4">
              <div class="flex flex-col justify-between p-10 h-full bg-white rounded-3xl">
                <div class="flex-initial mb-8 md:mb-36">
                  <h3 class="font-heading text-xl text-gray-900 font-black">
                    What kind of fille do you offer with the packages?
                  </h3>
                </div>
                <div class="flex-initial">
                  <p class="text-gray-500 font-bold">
                    Lorem ipsum dolor sit amet, to the consectr adipiscing elit.
                    Volutpat tempor to the condi mentum vitae vel purus.Mauris
                    accumsan tristique velit, lobortis tincidunt ex interdum
                    sagittis.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 p-4">
              <div class="flex flex-col justify-between p-10 h-full bg-white rounded-3xl">
                <div class="flex-initial mb-8 md:mb-36">
                  <h3 class="font-heading text-xl text-gray-900 font-black">
                    Is it really unlimited downloads?
                  </h3>
                </div>
                <div class="flex-initial">
                  <p class="text-gray-500 font-bold">
                    Lorem ipsum dolor sit amet, to the consectr adipiscing elit.
                    Volutpat tempor to the condi mentum vitae vel purus.Mauris
                    accumsan tristique velit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* FAQ SECTION */}

      {/* // FOOTER SECTION */}
      <section class="py-10 bg-gray-50 overflow-hidden">
        <div class="container mx-auto px-4">
          <p class="text-center font-bold">
            <span>Ⓒ Copyright. All rights reserved by </span>
            <a class="text-red-600 hover:text-red-700" href="#">
              Smart Cities Hackathon
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
