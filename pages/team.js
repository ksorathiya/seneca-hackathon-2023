import { useCallback, useEffect, useState } from "react";
import Button from "../components/Button";
import ClickCount from "../components/ClickCount";
import styles from "../styles/home.module.css";

import Image from "next/image";

function  team(params){
 return (
  <>
  
  {/* HERO SECTION */}

  <section className="pt-6 pb-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <div className="flex items-center justify-between px-6 py-3.5 bg-white border border-gray-100 rounded-3xl">
              <div className="w-auto">
                <div className="flex flex-wrap items-center">
                  <div className="w-auto p-2">
                    <a className="inline-block" href="#">
                      <img
                        src="/assets/thinkingnorthsmartcitieslogosec.png"
                        width="250" 
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="visible md:invisible">
                  <div className="w-full w-auto p-2"></div>
                      <div className="w-full w-auto p-2">
                        <a
                          className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold focus:ring-4 focus:ring-blue-200 rounded-full bg-red-600 hover:bg-red-700"
                          href="#"
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
                <div className="flex flex-wrap items-center">

                  <div className="invisible md:visible">
                  <div className="w-auto hidden sm:block">
                    <div className="flex flex-wrap -m-2">
                      <div className="w-full w-auto p-2"></div>
                      <div className="w-full w-auto p-2">
                        <a
                          className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold focus:ring-4 focus:ring-blue-200 rounded-full bg-red-600 hover:bg-red-700"
                          href="#"
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
  {/* HERO SECTION */}

  {/* ORGANIZATION TEAM */}

<section class="relative pt-24 pb-36 overflow-hidden">
  <div class="container mx-auto px-4">
    <h2 class="mb-5 max-w-2xl mx-auto font-heading font-semibold text-center text-6xl sm:text-7xl text-gray-900">Our investors</h2>
    <p class="mb-20 text-base max-w-md mx-auto text-center text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
    <div class="flex flex-wrap -m-6">
      <div class="w-full md:w-1/2 xl:w-1/6 text-center p-6">
        <img class="mb-2 mx-auto" src="gradia-assets/images/teams/avatar-oval0.png" alt=""/>
        <h3 class="mb-1 font-heading font-bold text-lg text-gray-900">Cody Fisher</h3>
        <p class="text-sm text-gray-500">Plains GP Holdings</p>
      </div>
      <div class="w-full md:w-1/2 xl:w-1/6 text-center p-6">
        <img class="mb-2 mx-auto" src="gradia-assets/images/teams/avatar-oval1.png" alt=""/>
        <h3 class="mb-1 font-heading font-bold text-lg text-gray-900">Guy Hawkins</h3>
        <p class="text-sm text-gray-500">Northrop Grumman</p>
      </div>
      <div class="w-full md:w-1/2 xl:w-1/6 text-center p-6">
        <img class="mb-2 mx-auto" src="gradia-assets/images/teams/avatar-oval2.png" alt=""/>
        <h3 class="mb-1 font-heading font-bold text-lg text-gray-900">Ralph Edwards</h3>
        <p class="text-sm text-gray-500">Marathon Petroleum</p>
      </div>
      <div class="w-full md:w-1/2 xl:w-1/6 text-center p-6">
        <img class="mb-2 mx-auto" src="gradia-assets/images/teams/avatar-oval3.png" alt=""/>
        <h3 class="mb-1 font-heading font-bold text-lg text-gray-900">Floyd Miles</h3>
        <p class="text-sm text-gray-500">IBM</p>
      </div>
      <div class="w-full md:w-1/2 xl:w-1/6 text-center p-6">
        <img class="mb-2 mx-auto" src="gradia-assets/images/teams/avatar-oval4.png" alt=""/>
        <h3 class="mb-1 font-heading font-bold text-lg text-gray-900">Arlene McCoy</h3>
        <p class="text-sm text-gray-500">Chevron</p>
      </div>
      <div class="w-full md:w-1/2 xl:w-1/6 text-center p-6">
        <img class="mb-2 mx-auto" src="gradia-assets/images/teams/avatar-oval5.png" alt=""/>
        <h3 class="mb-1 font-heading font-bold text-lg text-gray-900">Dianne Russell</h3>
        <p class="text-sm text-gray-500">AT&amp;T</p>
      </div>
    </div>
  </div>
</section>

  {/* ORGANIZATION TEAM */}

  {/* FOOTER */}


  {/* FOOTER */}

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

export default team;