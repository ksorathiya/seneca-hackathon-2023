import { useCallback, useEffect, useState } from "react";
import Button from "../components/Button";
import ClickCount from "../components/ClickCount";
import styles from "../styles/home.module.css";

import Image from "next/image";

function  team(params){
 return (
  <>
  
  {/* HERO SECTION */}

  <section className="pt-6 pb-2 bg-gray-50 overflow-hidden">
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

<div class="container my-12 px-6 mx-auto">
  <section class="mb-5 text-gray-800 text-center">
    <div class="mb-20 max-w-xl mx-auto text-center">
      <span class="underline inline-block mb-2 text-lg text-red-600 font-bold uppercase tracking-widest hover:text-red-900"><a href="/team" target="_blank">Our team</a></span>
      <h2 class="font-heading text-4xl md:text-5xl text-gray-900 font-black tracking-tight">The brains behind Smart Cities Hackathon</h2>
      <br></br>
      <h2 class="font-heading text-2xl md:text-2xl text-gray-900 font-black tracking-tight">Board of Directors</h2><br></br>
    </div>
    {/* <h2 class="text-3xl font-bold mb-32">Meet the <u class="text-red-600">TEAM</u></h2> */}
     
    <div class="grid gap-x-6 lg:gap-x-12 md:grid-cols-6">
     
      <div class="mb-2 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="/assets/mark-buchner.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Mark Buchner</h5>
            <p class="mb-6">Academic Chair</p>
            <ul class="list-inside flex mx-auto justify-center">
  
              <a href="#!" class="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 text-blue-600">
                  <path fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div class="mb-2 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Ben Rogers</h5>
            <p class="mb-6">Board Excecutive</p>
            <ul class="list-inside flex mx-auto justify-center">
              <a href="#!" class="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 text-blue-600">
                  <path fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div class="mb-2 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Suzanne Abraham</h5>
            <p class="mb-6">Board Executive</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="#!" class="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 text-blue-600">
                  <path fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div class="mb-2 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Mehdi Akbari</h5>
            <p class="mb-6">Board Executive</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="#!" class="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 text-blue-600">
                  <path fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div class="mb-2 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Namrata Barai</h5>
            <p class="mb-6">Board Excecutive</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="#!" class="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 text-blue-600">
                  <path fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div class="mb-2 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="https://mdbootstrap.com/img/new/avatars/15.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Kumar Rajendra</h5>
            <p class="mb-6">Industry Chair</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="#!" class="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 text-blue-600">
                  <path fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


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