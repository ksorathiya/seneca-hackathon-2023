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
    <title>Seneca Hackathon</title>
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
                            width="64px"
                            height="64px"
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



      {/* York University Design JAM */}
<section class="py-10 bg-white overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="py-16 px-8 border border-gray-100 overflow-hidden rounded-3xl" style={{"background-image": "url('/assets/designJam2.png'); background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: fixed; background-size: contain; background-size: 100%"}}>
      <div class="mb-6 max-w-lg mx-auto text-center"  >
        <span class="inline-block mb-2 text-sm text-red-500 font-bold uppercase tracking-widest;">Accepting Applications until March 17</span>
        <h2 class="font-heading text-4xl md:text-5xl text-white font-black tracking-tight">Be a part of York University Design Jam now!</h2>
        <br></br>
        <p class="mb-8 text-l text-white">
                  Am amazing opportunity to win $325 stipend! Participate in the Design Jam as a team or an individual. Prepare for upcoming Hackathon and learn how Design Thinking works.
        </p>
      </div>
      <div class="md:max-w-sm mx-auto mb-10">
        <div class="flex flex-wrap -m-2">
          {/* <div class="w-full p-2">
            <input class="px-6 py-3.5 w-full text-lg text-gray-500 text-center font-bold bg-gray-100 outline-none focus:ring-4 focus:ring-blue-200 placeholder-gray-500 rounded-full" id="newsletterLightBorderInput4-1" type="text" placeholder="Email address">
          </div> */}
          <div class="w-full p-2">
            <div class="flex flex-wrap justify-center -m-2">
              <div class="w-full p-2"><a class="block w-full px-8 py-3.5 text-lg text-center text-white font-bold bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-200 rounded-full" href="https://docs.google.com/forms/d/e/1FAIpQLSfG5LlNoyex58EwgIXxDDhq8t0xhZSX_qW67JyMCtIoSvD-Yw/viewform?usp=sf_link" target="_blank">Register</a></div>
              <span class="inline-block mb-2 text-sm text-white font-bold uppercase tracking-widest;">Limiited Spots!</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center -m-3" >
        <div class="w-auto p-3">
          <div class="flex flex-wrap">
            <div class="w-auto mr-2 pt-1">
              <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z" fill="#FC0328"></path>
              </svg>
            </div>
            <div class="flex-1">
              <p class="text-sm text-white font-bold">Cash Prize</p>
            </div>
          </div>
        </div>
        <div class="w-auto p-3">
          <div class="flex flex-wrap">
            <div class="w-auto mr-2 pt-1">
              <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z" fill="#FC0328"></path>
              </svg>
            </div>
            <div class="flex-1">
              <p class="text-sm text-white font-bold">Design Thinking Lab</p>
            </div>
          </div>
        </div>
        <div class="w-auto p-3">
          <div class="flex flex-wrap">
            <div class="w-auto mr-2 pt-1">
              <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z" fill="#FC0328"></path>
              </svg>
            </div>
            <div class="flex-1">
              <p class="text-sm text-white font-bold">Prepare for Hackathon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      
      {/* DESIGN JAM SECTION 3 */}
      <section class="py-16 bg-gray-100 overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="max-w-lg mx-auto text-center">
            <h2 class="font-heading max-w-xl mb-4 text-4xl md:text-5xl text-red-500 font-black tracking-tight">
              How to register for the Design Jam
            </h2>
            <p class="mb-12 text-gray-700 font-bold">
              Follow three easy steps to complete your registration for Design Jam. 
            </p>
          </div>
          <div
            class="py-16 px-8 md:px-16 overflow-hidden rounded-3xl"
            style={{
              "background-image":
                "url('assets/designJam.png')",
              "background-size": "cover",
              "background-position": "center",
              "background-repeat": "no-repeat",
            }}
          >
            <div class="max-w-md">
              <div class="flex flex-wrap">
                <div class="w-full">
                  <div class="flex flex-wrap -m-3.5">
                    <div class="flex flex-col items-center w-auto p-3.5">
                      <div class="flex items-center justify-center w-9 h-9 rounded-full bg-red-600">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.66699 11.3333L8.00033 14.6666L16.3337 6.33325"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <div class="w-px flex-1 border border-gray-600 border-dashed"></div>
                    </div>
                    <div class="flex-1 p-3.5 pb-14">
                      <span class="inline-block mb-2.5 text-sm text-gray-400 font-bold uppercase">
                        Step 1
                      </span>
                      <h3 class="font-heading mb-2.5 text-xl text-white font-black">
                        Apply
                      </h3>
                      <p class="text-gray-300 font-bold">
                        Submit your application to participate in the Smart Cities Design Jam, whether as a team or an individual 
                      </p>
                    </div>
                  </div>
                </div>
                <div class="w-full">
                  <div class="flex flex-wrap -m-3.5">
                    <div class="flex flex-col items-center w-auto p-3.5">
                      <div class="flex items-center justify-center w-9 h-9 rounded-full bg-red-600">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.66699 11.3333L8.00033 14.6666L16.3337 6.33325"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <div class="w-px flex-1 border border-gray-600 border-dashed"></div>
                    </div>
                    <div class="flex-1 p-3.5 pb-14">
                      <span class="inline-block mb-2.5 text-sm text-gray-400 font-bold uppercase">
                        Step 2
                      </span>
                      <h3 class="font-heading mb-2.5 text-xl text-white font-black">
                        Enhance Your Skills
                      </h3>
                      <p class="text-gray-300 font-bold">
                        Attend the accelerator program and gain valuable design thinking skills to improve your chances in the Smart Cities Hackathon. 
                      </p>
                    </div>
                  </div>
                </div>
                <div class="w-full">
                  <div class="flex flex-wrap -m-3.5">
                    <div class="flex flex-col items-center w-auto p-3.5">
                      <div class="flex items-center justify-center w-9 h-9 border border-gray-700 rounded-full bg-red-600">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.66699 11.3333L8.00033 14.6666L16.3337 6.33325"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div class="flex-1 p-3.5">
                      <span class="inline-block mb-2.5 text-sm text-gray-400 font-bold uppercase">
                        Step 3
                      </span>
                      <h3 class="font-heading mb-2.5 text-xl text-white font-black">
                        Earn a Stipend
                      </h3>
                      <p class="text-gray-300 font-bold">
                        Domestic students are eligible to earn $325 stipend for their participation in the Design Jam. This is unique opportunity not only to improve your skills, but also to revive financial compensation. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* DESIGN JAM SECTION 3 */}
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
