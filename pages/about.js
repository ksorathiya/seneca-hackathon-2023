import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Button from "../components/Button";
import ClickCount from "../components/ClickCount";
import styles from "../styles/home.module.css";

function About(params){
 return (
  <>
        {/* // HERO SECTION */}
      <section className="pt-6 pb-6 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-1">
            <div className="flex items-center justify-between px-6 py-3.5 bg-white border border-gray-100 rounded-3xl">
              <div className="w-auto">
                <div className="flex flex-wrap items-center">
                  <div className="w-auto p-2">
                    <a className="inline-block" href="/#">
                      <img
                        src="/assets/thinkingnorthsmartcitieslogosec.png"
                        width="250" 
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="visible md:invisible">
                  <div className="w-full w-auto p-2"></div>
                      <div className="w-full w-auto p-2 mr-3">
                        <a
                          className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold focus:ring-4 focus:ring-blue-200 rounded-full bg-red-600 hover:bg-red-700 mr-3"
                          href="#"
                        >
                          About Us
                        </a>
                      </div>
                  </div>

                  <div className="visible md:invisible">
                  <div className="w-full w-auto p-2"></div>
                      <div className="w-full w-auto p-2">
                        <a
                          className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold focus:ring-4 focus:ring-blue-200 rounded-full bg-red-600 hover:bg-red-700"
                          href="/#"
                        >
                          May 5th - 6th, 2023
                        </a>
                      </div>
                  </div>
                </div>
              </div>
              <div className="w-auto">
                <div className="flex flex-wrap items-center">
                  <div className="w-auto hidden sm:block"></div>
                </div>
              </div>
              <div className="w-auto">
                <div className="flex flex-wrap items-left">

                  <div className="invisible md:visible">
                  <div className="w-auto hidden sm:block">
                    <div className="flex flex-wrap -m-2">
                      <div className="w-full w-auto p-2"></div>
                      <div className="w-full w-auto p-2 mr-3">
                        <a
                          className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold focus:ring-4 focus:ring-blue-200 rounded-full bg-red-600 hover:bg-red-700"
                          href="/about"
                        >
                          About Us
                        </a>
                      </div>
                    </div>
                  </div></div>

                  <div className="invisible md:visible">
                  <div className="w-auto hidden sm:block">
                    <div className="flex flex-wrap -m-2">
                      <div className="w-full w-auto p-2"></div>
                      <div className="w-full w-auto p-2">
                        <a
                          className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold focus:ring-4 focus:ring-blue-200 rounded-full bg-red-600 hover:bg-red-700"
                          href="/#"
                        >
                          May 5th - 6th, 2023
                        </a>
                      </div>
                    </div>
                  </div></div>
                  <div className="w-auto hidden">
                    <a className="inline-block" href="#">
                      <svg
                        className="navbar-burger text-blue-500"
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
            <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
              <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
              <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
                <div className="flex flex-wrap justify-between h-full">
                  <div className="w-full">
                    <div className="flex items-center justify-between -m-2">
                      <div className="w-auto p-2">
                        <a className="inline-block" href="#">
                          <Image
                            src="/assets/seneca-hackathon-logo.png"
                            width="64px"
                            height="64px"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="w-auto p-2">
                        <a className="inline-block navbar-burger" href="#">
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
                  <div className="flex flex-col justify-center py-8 w-full">
                    <ul>
                      <li className="mb-9">
                        <a
                          className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                          href="#"
                        >
                          Features
                        </a>
                      </li>
                      <li className="mb-9">
                        <a
                          className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                          href="#"
                        >
                          Solutions
                        </a>
                      </li>
                      <li className="mb-9">
                        <a
                          className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                          href="#"
                        >
                          Resources
                        </a>
                      </li>
                      <li>
                        <a
                          className="inline-block text-sm font-bold text-gray-900 hover:text-gray-700"
                          href="#"
                        >
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-end w-full pb-8">
                    <div className="flex flex-wrap -m-2">
                      <div className="w-full p-2">
                        <a
                          className="block w-full px-4 py-2.5 text-sm text-center text-gray-900 font-bold bg-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 border rounded-full"
                          href="#"
                        >
                          Log In
                        </a>
                      </div>
                      <div className="w-full p-2">
                        <a
                          className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
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
          
        </div>
      </section>

     {/* ABOUT US CONTENT */}


<section class="py-8 md:py-12 bg-coolGray-50" style={{"background-image": "url('flex-ui-assets/elements/pattern-light-big.svg'); background-repeat: no-repeat; background-position: center;"}}>
  <div class="container px-4 mx-auto">
    <div class="md:max-w-2xl mx-auto mb-12 text-center">
      <div class="flex items-center justify-center">
        <p class="inline-block text-red-500 font-medium">Hackathon</p>
        <span class="mx-1 text-green-500">&bull;</span>
        <p class="inline-block text-red-500 font-medium">2023</p>
      </div>
      <div class="flex items-center justify-center">
        <p class="inline-block text-red-500 font-medium">May 5th - May 6th</p>
      </div>
      <h2 class="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter">About Us</h2>
      {/* <p class="mb-6 text-lg md:text-xl font-medium text-coolGray-500">Join the brightest minds from across the globe and help solve real-world challenges in making cities smarter.</p> */}
      <div class="inline-block py-1 px-3 text-xs leading-5 text-red-500 font-medium uppercase bg-red-100 rounded-full shadow-sm">Seneca</div>
    </div>
    <div class="mb-10 mx-auto max-w-max overflow-hidden rounded-lg">
      <img src="/assets/about-us-image2.png" alt=""/>
    </div>
    <div class="md:max-w-6xl mx-auto">
      {/* <p class="mb-8 pb-10 text-lg md:text-xl font-medium text-coolGray-500 border-b border-coolGray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.</p> */}
      {/* <h3 class="mb-4 text-2xl md:text-3xl font-semibold text-coolGray-800">Header 1</h3> */}
      {/* <p class="mb-4 text-base md:text-lg text-coolGray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.</p> */}
      <div class="mb-6 p-6 border-l-2 border-red-500">
        <p class="mb-4 text-xl md:text-2xl leading-tight font-medium text-coolGray-800 text-justify ">Smart Cities Hackathon is a student-focused innovation competition that offers a unique learning opportunity. It brings together students from various backgrounds to collaborate on real-world problems. In addition, it encourages and develops creative design thinking, entrepreneurship, and problem-solving skills. Technical experts and mentors assist the teams in getting ready for their presentation. The presentations will be judged by an expert panel of investors, school representatives, and specialists. Along with receiving prizes, the winning teams will be given consideration for investment opportunities. This year, we will host the event in person at Seneca CITE Building. We can't wait to see you on May 5th and 6th!!!!! All the best!!!!!</p>
        <br></br>
        <span class="text-right text-base md:text-lg text-coolGray-400 font-medium ">&mdash; 2023 ThinkingNorth Smart Cities</span>
        {/* <span class="text-base md:text-lg text-coolGray-400 font-medium">&mdash; John Doe, CEO &amp; Founder</span> */}
      </div>

    </div>
  </div>
</section>
     
     {/* ABOUT US CONTENT */}

      {/* // FOOTER SECTION */}

      <section className="py-10 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="py-16 px-8 mb-8 bg-white rounded-3xl">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap items-center justify-between -m-4">
                <div className="w-auto p-4">
                  <a className="inline-block" href="#">
                    <img
                      src="assets/thinkingnorthsmartcitieslogosec.png"
                      width="200"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-auto p-4">
                  <ul className="-m-6">
                    <li className="inline-flex p-6">
                      <a
                        className="inline-block text-black hover:underline font-bold"
                        href="https://analytics.umami.is/share/BKAQfqM8MxFHd9Z6/Seneca%20Hackathon"
                        target="_blank"
                      >
                        Site Analytics
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-auto p-4">
                  <div className="flex flex-wrap -m-4">
                    <div className="w-auto p-4">
                      <a
                        className="block"
                        href="https://www.instagram.com/senecahackathon/"
                        target="_blank"
                      >
                        <Image
                          src="/zanrly-assets/images/insta.svg"
                          width="25"
                          height="25"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="w-auto p-4">
                      <a
                        className="block"
                        href="https://twitter.com/SenecaHackathon"
                        target="_blank"
                      >
                        <Image
                          width="25"
                          height="25"
                          src="/zanrly-assets/images/twitter.svg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="w-auto p-4">
                      <a
                        className="block"
                        href="https://www.linkedin.com/company/seneca-hackathon/"
                        target="_blank"
                      >
                        <Image
                          width="25"
                          height="25"
                          src="/assets/linkedin.svg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="w-auto p-4">
                      <a
                        className="block"
                        href="https://www.facebook.com/SenecaHackathon2022"
                        target="_blank"
                      >
                        <Image
                          width="25"
                          height="25"
                          src="/zanrly-assets/images/footers/fb.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center font-bold">
            <span>Ⓒ Copyright. All rights reserved by </span>
            <a className="text-red-600 hover:text-red-700" href="#">
              Smart Cities Hackathon.
            </a>
          </p>
        </div>
      </section>

      {/* FOOTER SECTION */}
  </>
 )
}

export default About;