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
  return (
    <>
      {/* // HERO SECTION */}
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
          <div
            className="bg-white overflow-hidden border border-gray-100 rounded-3xl"
            style={{
              "background-image":
                "url('https://images.unsplash.com/photo-1525935944571-4e99237764c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80'); background-size: cover; background-position: center; background-repeat: no-repeat;",
            }}
          >
            <div
              className="px-8 py-20 w-full h-full flex  justify-center items-center 
             bg-gray-900/30 backdrop-brightness-75"
            >
              <div className="md:max-w-2xl text-center mx-auto">
                <span className="inline-block mb-3 text-sm font-bold uppercase tracking-widest text-red-600">
                  build innovations for future
                </span>
                <h1
                  className="font-heading mb-6 text-5xl lg:text-6xl text-white font-black tracking-tight"
                  contenteditable="false"
                >
                  <span contenteditable="false">
                    SMART CITIES <span className="text-red-500">HACKATHON</span>
                  </span>
                  {/* <span className="text-transparent bg-clip-text bg-gradient-orange-light">
                    HACKATHON
                  </span> */}
                  <br />
                  {/* <span>build innovation for the future</span> */}
                </h1>
                <p className="mb-8 text-xl text-white ">
                  Join the brightest minds from across the globe and help solve real-world challenges in making cities smarter.
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
                            Registrations will start soon!
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col justify-between w-full h-full">
                  <div class="pt-8">
                    <div class="flex flex-wrap justify-center">
                      <div class="w-auto p-1.5">
                        <a
                          class="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-red-500 rounded-full"
                          href="https://www.instagram.com/senecahackathon/"
                          target="_blank"
                        >
                          <img src="zanrly-assets/images/insta.svg" alt="" />
                        </a>
                      </div>
                      <div class="w-auto p-1.5">
                        <a
                          class="flex items-center justify-center w-10 h-10 bg-white hover:bg-red-500 rounded-full"
                          href="https://twitter.com/SenecaHackathon"
                          target="_blank"
                        >
                          <img src="assets/linkedin.svg" alt="" />
                        </a>
                      </div>
                      <div class="w-auto p-1.5">
                        <a
                          class="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-red-500 rounded-full"
                          href="https://twitter.com/SenecaHackathon"
                          target="_blank"
                        >
                          <img src="zanrly-assets/images/twitter.svg" alt="" />
                        </a>
                      </div>
                      <div class="w-auto p-1.5">
                        <a
                          class="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-red-500 rounded-full"
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
        </div>
      </section>
      {/* DESIGN JAM SECTION 1 */}

      <section class="py-10 bg-gray-50 overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="py-16 px-8 bg-white rounded-3xl">
            <div class="max-w-7xl mx-auto">
              <div class="flex flex-wrap -m-8 mb-10">
                <div class="w-full md:w-1/2 p-8">
                  <div class="md:max-w-lg">
                    <h2
                      class="font-heading mb-6 text-4xl md:text-5xl text-gray-900 font-black tracking-tight"
                      contenteditable="false"
                    >
                      Design Jam by{" "}
                      <img
                        class="mt-5"
                        src="https://yfile.news.yorku.ca/wp-content/uploads/2021/09/yu-logo-header.png"
                        alt=""
                      />
                    </h2>

                    <p class="mb-8 text-xl font-bold" contenteditable="false">
                      A 12 - 16 hours asynchronous online learning organized by
                      &nbsp;
                      <span className="text-red-600">
                        Smart Cities Hackathon
                      </span>
                      , in association with York University's YSpace.
                    </p>
                    <div class="flex flex-wrap -m-2">
                      <div class="w-full md:w-auto p-2">
                        <a
                          class="block w-full px-8 py-3.5 text-lg text-center text-white font-bold focus:ring-4 focus:ring-blue-200 rounded-full bg-red-600 hover:bg-red-700"
                          href="https://yspace.apps01.yorku.ca/forms/view.php?id=104364"
                          target="_blank"
                        >
                          Enroll Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/2 p-8">
                  <img
                    class="mx-auto md:mr-0 rounded-3xl"
                    src="https://static.shuffle.dev/uploads/files/32/32cc320452c9e2effc7f8e2f8a8bbd93f7d6bf5d/37547.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="p-8 md:p-12 bg-gray-100 rounded-3xl">
                <div class="flex flex-wrap -m-8">
                  <div class="w-full md:w-1/3 p-8">
                    <div class="flex flex-wrap -m-3">
                      <div class="w-auto md:w-full lg:w-auto p-3">
                        <div class="flex items-center justify-center w-12 h-12 bg-white rounded-xl">
                          <Image
                            src="/assets/flag-svgrepo-com.svg"
                            height={30}
                            width={30}
                          />
                        </div>
                      </div>
                      <div class="flex-1 p-3">
                        <h3 class="font-heading mb-2 text-xl text-gray-900 font-black">
                          Enhance Your Chances
                        </h3>
                        <p class="text-sm text-gray-700 font-bold">
                          Improve your chances of success in the upcoming Smart
                          Cities Hackathon by participating in the Design Jam
                          and learning valuable design thinking skills.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/3 p-8">
                    <div class="flex flex-wrap -m-3">
                      <div class="w-auto md:w-full lg:w-auto p-3">
                        <div class="flex items-center justify-center w-12 h-12 bg-white rounded-xl">
                          <Image
                            src="/assets/speed-svgrepo-com.svg"
                            height={30}
                            width={30}
                          />
                        </div>
                      </div>
                      <div class="flex-1 p-3">
                        <h3 class="font-heading mb-2 text-xl text-gray-900 font-black">
                          Accelerate Your Skills
                        </h3>
                        <p class="text-sm text-gray-700 font-bold">
                          Gain lifelong design thinking skills for a better
                          chance at winning the Smart Cities Hackathon.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/3 p-8">
                    <div class="flex flex-wrap -m-3">
                      <div class="w-auto md:w-full lg:w-auto p-3">
                        <div class="flex items-center justify-center w-12 h-12 bg-white rounded-xl">
                          <Image
                            src="/assets/sofa-svgrepo-com.svg"
                            height={30}
                            width={30}
                          />
                        </div>
                      </div>
                      <div class="flex-1 p-3">
                        <h3 class="font-heading mb-2 text-xl text-gray-900 font-black">
                          Limited Spots Available
                        </h3>
                        <p class="text-sm text-gray-700 font-bold">
                          50 spots for domestic and 50 for international
                          students. First-come, first-served basis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/3 p-8">
                    <div class="flex flex-wrap -m-3">
                      <div class="w-auto md:w-full lg:w-auto p-3">
                        <div class="flex items-center justify-center w-12 h-12 bg-white rounded-xl">
                          <Image
                            src="/assets/dollar-symbol-money-svgrepo-com.svg"
                            height={30}
                            width={30}
                          />
                        </div>
                      </div>
                      <div class="flex-1 p-3">
                        <h3 class="font-heading mb-2 text-xl text-gray-900 font-black">
                          Earn a $325 Stipend
                        </h3>
                        <p class="text-sm text-gray-700 font-bold">
                          Participate and earn a stipend for your efforts. *Only
                          domestic students are eligible for the stipend.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/3 p-8">
                    <div class="flex flex-wrap -m-3">
                      <div class="w-auto md:w-full lg:w-auto p-3">
                        <div class="flex items-center justify-center w-12 h-12 bg-white rounded-xl">
                          <Image
                            src="/assets/fast-forward-button-svgrepo-com.svg"
                            height={30}
                            width={30}
                          />
                        </div>
                      </div>
                      <div class="flex-1 p-3">
                        <h3 class="font-heading mb-2 text-xl text-gray-900 font-black">
                          Fast Track to the Hackathon
                        </h3>
                        <p class="text-sm text-gray-700 font-bold">
                          Participating in the Design Jam provides a fast track
                          to the Smart Cities Hackathon qualifier event.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/3 p-8">
                    <div class="flex flex-wrap -m-3">
                      <div class="w-auto md:w-full lg:w-auto p-3">
                        <div class="flex items-center justify-center w-12 h-12 bg-white rounded-xl">
                          <Image
                            src="/assets/deadline-stopwatch-hourglass-svgrepo-com.svg"
                            height={30}
                            width={30}
                          />
                        </div>
                      </div>
                      <div class="flex-1 p-3">
                        <h3 class="font-heading mb-2 text-xl text-gray-900 font-black">
                          Submission Deadline
                        </h3>
                        <p class="text-sm text-gray-700 font-bold">
                          The submission deadline for the playbook and video
                          pitch or in-person feedback session at Seneca HELIX is
                          March 10th at 11:59pm. Make sure to submit your
                          application in time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* DESIGN JAM SECTION 1 */}
      {/* DESIGN JAM SECTION 2 */}
      {/* <section class="py-16 bg-gray-100 overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="max-w-lg mx-auto text-center">
            <h2 class="font-heading max-w-xl mb-4 text-4xl md:text-5xl text-gray-900 font-black tracking-tight">
              How to register for the Design Jam
            </h2>
            <p class="mb-12 text-gray-700 font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              tempor condimentum commodo tincidunt sit dictumst. Eu placerat
              arcu at sem vitae eros.
            </p>
          </div>
          <div
            class="py-16 px-8 md:px-16 overflow-hidden rounded-3xl"
            style={{
              "background-image":
                "url('zanrly-assets/images/how-it-works/work.png')",
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
                        Choose A Package
                      </h3>
                      <p class="text-gray-300 font-bold">
                        Lorem ipsum dolor sit amet, to the consectetur
                        adipiscing elit.
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
                        Pay with One Click
                      </h3>
                      <p class="text-gray-300 font-bold">
                        Lorem ipsum dolor sit amet, to the consectetur
                        adipiscing elit.
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
                        Get Instant Access
                      </h3>
                      <p class="text-gray-300 font-bold">
                        Lorem ipsum dolor sit amet, to the consectetur
                        adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* DESIGN JAM SECTION 2 */}
      {/* DESIGN JAM SECTION 3 */}
      {/* <section class="py-16 bg-gray-100 overflow-hidden">
        <div class="container mx-auto px-4">
          <div
            class="py-16 px-8 md:px-16 rounded-3xl"
            style={{
              "background-image":
                "url(zanrly-assets/images/features/people.png)",
              "background-size": "cover",
              "background-position": "center",
              "background-repeat": "no-repeat",
            }}
          >
            <h2 class="font-heading mb-6 text-4xl md:text-5xl text-white font-black tracking-tight md:max-w-lg">
              Build website animations and interactions visually.
            </h2>
            <p class="mb-14 text-lg text-gray-200 font-bold md:max-w-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              venenatis volutpat velit, quis iaculis velit bibendum a. Maecenas
              accumsan fermentum nisl.
            </p>
            <div class="flex flex-wrap -m-2">
              <div class="w-auto p-2">
                <div class="flex flex-wrap px-3 py-2 bg-white rounded-full">
                  <div class="w-auto mr-2 pt-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                        fill="#3B82F6"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p class="text-sm text-gray-900 font-bold">
                      Exportable code
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-auto p-2">
                <div class="flex flex-wrap px-3 py-2 bg-white rounded-full">
                  <div class="w-auto mr-2 pt-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                        fill="#3B82F6"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p class="text-sm text-gray-900 font-bold">
                      Easy integration
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-auto p-2">
                <div class="flex flex-wrap px-3 py-2 bg-white rounded-full">
                  <div class="w-auto mr-2 pt-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                        fill="#3B82F6"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p class="text-sm text-gray-900 font-bold">
                      Satisfied customers
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-auto p-2">
                <div class="flex flex-wrap px-3 py-2 bg-white rounded-full">
                  <div class="w-auto mr-2 pt-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.095 1H3.905C2.085 1 1 2.085 1 3.905V8.09C1 9.915 2.085 11 3.905 11H8.09C9.91 11 10.995 9.915 10.995 8.095V3.905C11 2.085 9.915 1 8.095 1ZM8.39 4.85L5.555 7.685C5.485 7.755 5.39 7.795 5.29 7.795C5.19 7.795 5.095 7.755 5.025 7.685L3.61 6.27C3.465 6.125 3.465 5.885 3.61 5.74C3.755 5.595 3.995 5.595 4.14 5.74L5.29 6.89L7.86 4.32C8.005 4.175 8.245 4.175 8.39 4.32C8.535 4.465 8.535 4.7 8.39 4.85Z"
                        fill="#3B82F6"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p class="text-sm text-gray-900 font-bold">
                      Increased conversion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* DESIGN JAM SECTION 3 */}
      {/* HACKATHON TIMELINE SECTION */}
      {/* <section class="py-10 bg-gray-50 overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="py-16 px-8 bg-white rounded-3xl">
            <div class="max-w-7xl mx-auto">
              <h2 class="font-heading max-w-xl mb-20 text-4xl md:text-5xl text-gray-900 font-black tracking-tight">
                Hackathon Timeline
              </h2>
              <div class="flex flex-wrap -m-3">
                <div class="w-full md:w-1/2 lg:w-1/4 p-3">
                  <div class="flex flex-wrap items-center -m-3 mb-2">
                    <div class="w-auto p-3">
                      <div class="flex items-center justify-center w-16 h-16 text-xl text-gray-900 font-black bg-gray-100 rounded-full">
                        1
                      </div>
                    </div>
                    <div class="flex-1 p-3">
                      <div class="bg-gray-200 h-px"></div>
                    </div>
                  </div>
                  <div class="md:w-3/4">
                    <h3 class="font-heading mb-4 text-2xl text-gray-900 font-bold">
                      Connect
                    </h3>
                    <p class="text-gray-700 font-bold">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/4 p-3">
                  <div class="flex flex-wrap items-center -m-3 mb-2">
                    <div class="w-auto p-3">
                      <div class="flex items-center justify-center w-16 h-16 text-xl text-white font-black rounded-full bg-red-600">
                        2
                      </div>
                    </div>
                    <div class="flex-1 p-3">
                      <div class="bg-gray-200 h-px"></div>
                    </div>
                  </div>
                  <div class="md:w-3/4">
                    <h3 class="font-heading mb-4 text-2xl text-gray-900 font-bold">
                      Store
                    </h3>
                    <p class="text-gray-700 font-bold">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/4 p-3">
                  <div class="flex flex-wrap items-center -m-3 mb-2">
                    <div class="w-auto p-3">
                      <div class="flex items-center justify-center w-16 h-16 text-xl text-gray-900 font-black bg-gray-100 rounded-full">
                        3
                      </div>
                    </div>
                    <div class="flex-1 p-3">
                      <div class="bg-gray-200 h-px"></div>
                    </div>
                  </div>
                  <div class="md:w-3/4">
                    <h3 class="font-heading mb-4 text-2xl text-gray-900 font-bold">
                      Ship
                    </h3>
                    <p class="text-gray-700 font-bold">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/4 p-3">
                  <div class="flex flex-wrap items-center -m-3 mb-2">
                    <div class="w-auto p-3">
                      <div class="flex items-center justify-center w-16 h-16 text-xl text-gray-900 font-black bg-gray-100 rounded-full">
                        4
                      </div>
                    </div>
                    <div class="flex-1 lg:hidden p-3">
                      <div class="bg-gray-200 h-px"></div>
                    </div>
                  </div>
                  <div class="md:w-3/4">
                    <h3 class="font-heading mb-4 text-2xl text-gray-900 font-bold">
                      Deliver
                    </h3>
                    <p class="text-gray-700 font-bold">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* HACKATHON TIMELINE SECTION */}
      {/* SPONSORS SECTION */}
      <section class="py-10 bg-gray-50 overflow-hidden">
        <div class="container mx-auto px-4">
          <h2 class="font-heading mb-10 text-4xl md:text-5xl text-gray-900 font-black tracking-tight text-center">
            Sponsors
          </h2>
        </div>
              {/* CTA SECTION */}
<section class="py-10 bg-white overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="py-16 px-8 md:px-16 bg-red-700 overflow-hidden rounded-3xl">
      <div class="flex flex-wrap items-center -m-4">
        <div class="w-full md:w-1/5 p-4 items-left">
          <div class="md:max-w-md md:mr-auto">
            <div class="flex flex-wrap -m-2">
              {/* <span class="inline-block mb-3 text-sm text-blue-500 font-bold uppercase tracking-widest">Newsletter</span> */}
          {/* <h2 class="font-heading text-4xl md:text-5xl text-gray-900 font-black tracking-tight">Join to get exclusive contents for free.</h2> */}
          <img src="https://static.shuffle.dev/uploads/files/32/32cc320452c9e2effc7f8e2f8a8bbd93f7d6bf5d/52005.jpeg" width="250" alt="" style={{"background-color":"white; border-radius:10%"}}/>
            </div>
          </div>
        </div>
        <div class="w-full md:w-4/5 p-4">
          <div class="w-full lg:flex-1 p-2">
                {/* <input class="px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-white outline-none focus:ring-4 focus:ring-blue-200 placeholder-gray-500 rounded-full" id="newsletterLightInput3-1" type="text" placeholder="Email address"/> */}
                <h2 class="font-heading text-4xl md:text-5xl text-white font-black tracking-tight">SMART CITIES REVOLUTION - GET CONNECTED</h2>
          </div>
          {/* <br></br>
              <div class="w-full lg:w-auto p-2">
                <div class="flex flex-wrap justify-center -m-2">
                  <div class="w-full lg:w-auto p-2"><a class="block w-full px-8 py-3.5 text-lg text-center text-white font-bold bg-gray-800 hover:bg-red-400 focus:ring-4 focus:ring-gray-800 rounded-full" href="#">Get Connected</a></div>
                </div>
              </div> */}
        </div>
      </div>
    </div>
  </div>
</section>
      {/* CTA SECTION */}
        <div class="container mx-auto px-4">
          <div class="bg-white border border-gray-50 rounded-3xl">
            <div class="flex flex-wrap items-center">
              <div class="w-full sm:w-1/3 border-b sm:border-r border-gray-50">
                <div class="py-12 lg:py-20 px-8">
                  <a href="https://www.yorku.ca/" target="_blank">
                    <img
                      class="mx-auto"
                      src="https://static.shuffle.dev/uploads/files/32/32cc320452c9e2effc7f8e2f8a8bbd93f7d6bf5d/yu-logo-header-1.png"
                      width="300px"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="w-full sm:w-1/3 border-b border-gray-50">
                <div class="py-12 lg:py-20 px-8">
                  <a href="https://thinkingnorth.com/" target="_blank">
                    <img
                      class="mx-auto"
                      src="https://static.shuffle.dev/uploads/files/32/32cc320452c9e2effc7f8e2f8a8bbd93f7d6bf5d/52005.jpeg"
                      width="150px"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="w-full sm:w-1/3 border-b sm:border-r border-gray-50">
                <div class="py-12 lg:py-20 px-8">
                  <a
                    href="https://www.senecacollege.ca/alumni.html"
                    target="_blank"
                  >
                    <img
                      class="mx-auto"
                      src="https://static.shuffle.dev/uploads/files/32/32cc320452c9e2effc7f8e2f8a8bbd93f7d6bf5d/file-img-Alumni-logo-RGB-Primary-1.png"
                      width="300px"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-50">
                <div class="py-12 lg:py-20 px-8">
                  <a href="https://cpos.com/" target="_blank">
                    <img
                      class="mx-auto"
                      src="https://static.shuffle.dev/uploads/files/32/32cc320452c9e2effc7f8e2f8a8bbd93f7d6bf5d/Logo-1.svg"
                      width="300px"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-50">
                <div class="py-12 lg:py-20 px-8">
                  <a href="https://getoppos.com/" target="_blank">
                    <img
                      class="mx-auto"
                      src="https://static.shuffle.dev/uploads/files/32/32cc320452c9e2effc7f8e2f8a8bbd93f7d6bf5d/Oppos20Logo20-20actual20black-1-at-2x.png"
                      width="300px"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="w-full sm:w-1/3">
                <div class="py-12 lg:py-20 px-8">
                  <a href="https://www.ridealike.com/" target="_blank">
                    <img
                      class="mx-auto"
                      src="https://static.shuffle.dev/uploads/files/32/32cc320452c9e2effc7f8e2f8a8bbd93f7d6bf5d/RideAlike.png"
                      width="300px"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="w-full sm:w-1/3 border-b sm:border-r border-gray-50">
                <div class="py-12 lg:py-20 px-8 bg-black">
                  <a href="https://raceatlas.com/" target="_blank">
                    <img
                      class="mx-auto"
                      src="https://static.shuffle.dev/uploads/files/32/32cc320452c9e2effc7f8e2f8a8bbd93f7d6bf5d/raceatlas-logo.png"
                      width="300px"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="w-full sm:w-1/3 border-b sm:border-r border-gray-50">
                <div class="py-12 lg:py-20 px-8">
                  <a href="https://inheritchain.com/" target="_blank">
                    <img
                      class="mx-auto"
                      src="https://static.shuffle.dev/uploads/files/32/32cc320452c9e2effc7f8e2f8a8bbd93f7d6bf5d/inheritchainDK-web.png"
                      width="300px"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="w-full sm:w-1/3 border-b border-gray-50">
                <div class="py-12 lg:py-20 px-8 bg-purple-900">
                  <a href="https://trinetra.ca/" target="_blank">
                    <img
                      class="mx-auto"
                      src="https://static.shuffle.dev/uploads/files/32/32cc320452c9e2effc7f8e2f8a8bbd93f7d6bf5d/Trinetra-Logo-White-1536x477.png"
                      width="300px"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-50">
                <div class="py-12 lg:py-20 px-8">
                  <a href="https://innovatecities.com/" target="_blank">
                    <img
                      class="mx-auto"
                      src="https://innovatecities.com/wp-content/uploads/2021/04/IC_Logo_CL.png"
                      width="300px"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              {/* <div class="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-50"></div>
              <div class="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-50"></div>
              <div class="w-full sm:w-1/3"></div> */}
            </div>
          </div>
        </div>
      </section>
      {/* SPONSORS SECTION */}
    
      {/* INSTAFEED */}
      <section class="py-10 bg-gray-50 overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="py-16 px-8 md:px-16 insta-background overflow-hidden rounded-3xl">
            <div class="flex flex-wrap items-center -m-4">
              <div class="w-full md:w-1/2 p-4">
                <h2 class="font-heading text-4xl md:text-5xl text-white font-black ">
                  A few glimpses from our Instagram. <br />
                  <div className="mt-10 text-2xl ">
                    Follow us for more{" "}
                    <a
                      href="https://www.instagram.com/senecahackathon/"
                      className="hover:underline"
                      target="_blank"
                    >
                      @senecahackathon
                    </a>
                  </div>
                </h2>
              </div>
              <div class="w-full md:w-1/2 p-4">
                <figure data-behold-id="b6fLoGUYdeONBNwzRmgi"></figure>
                <script
                  src="https://w.behold.so/widget.js"
                  type="module"
                ></script>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTAFEED */}

      {/* TESTIMONIALS SECTION */}
      {/* <section className="pt-10 pb-16 bg-gray-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="px-8 pt-16 bg-white border border-gray-100 rounded-t-3xl">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap items-center justify-between -m-4 pb-12">
                <div className="w-full md:w-1/2 p-4">
                  <span className="inline-block mb-2 text-sm text-red-600 font-bold uppercase tracking-widest">
                    Testimonials
                  </span>
                  <h2 className="font-heading text-4xl md:text-5xl text-gray-900 font-black tracking-tight">
                    Our customer says
                  </h2>
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <div className="flex flex-wrap md:justify-end -m-2">
                    <div className="w-auto p-2">
                      <a
                        className="inline-block px-10 py-3.5 text-gray-200 hover:text-blue-500 bg-gray-100 hover:bg-gray-50 rounded-full"
                        href="#"
                      >
                        <svg
                          width="8"
                          height="14"
                          viewBox="0 0 8 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.98023 0.319993L2.77023 3.52999L0.800234 5.48999C-0.0297656 6.31999 -0.0297656 7.66999 0.800234 8.49999L5.98023 13.68C6.66023 14.36 7.82023 13.87 7.82023 12.92V7.30999V1.07999C7.82023 0.119992 6.66023 -0.360007 5.98023 0.319993Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div className="w-auto p-2">
                      <a
                        className="inline-block px-10 py-3.5 text-blue-500 bg-gray-100 rounded-full"
                        href="#"
                      >
                        <svg
                          width="8"
                          height="14"
                          viewBox="0 0 8 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.01977 0.319993L5.22977 3.52999L7.19977 5.48999C8.02977 6.31999 8.02977 7.66999 7.19977 8.49999L2.01977 13.68C1.33977 14.36 0.179766 13.87 0.179766 12.92V7.30999V1.07999C0.179766 0.119992 1.33977 -0.360007 2.01977 0.319993Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative px-8">
            <div className="max-w-7xl mx-auto">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white border-l border-r border-b border-gray-100 rounded-b-3xl"></div>
              <div className="relative z-10 flex flex-nowrap -m-4">
                <div className="flex-shrink-0 max-w-sm p-4">
                  <div className="flex flex-col justify-between p-8 h-full bg-gray-100 border border-gray-100 rounded-3xl shadow-md">
                    <div className="flex-initial mb-14">
                      <svg
                        className="mb-4"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.787 15.5068H4.53366C4.64033 9.28012 5.86699 8.25346 9.69366 5.98679C10.1337 5.72012 10.2803 5.16012 10.0137 4.70679C9.76033 4.26679 9.18699 4.12012 8.74699 4.38679C4.24033 7.05346 2.66699 8.68012 2.66699 16.4268V23.6135C2.66699 25.8935 4.52033 27.7335 6.78699 27.7335H10.787C13.1337 27.7335 14.907 25.9601 14.907 23.6135V19.6135C14.907 17.2801 13.1337 15.5068 10.787 15.5068Z"
                          fill="#3B82F6"
                        ></path>
                        <path
                          d="M25.2134 15.5065H18.9601C19.0667 9.27988 20.2934 8.25321 24.1201 5.98655C24.5601 5.71988 24.7067 5.15988 24.4401 4.70655C24.1734 4.26655 23.6134 4.11988 23.1601 4.38655C18.6534 7.05321 17.0801 8.67988 17.0801 16.4399V23.6265C17.0801 25.9065 18.9334 27.7465 21.2001 27.7465H25.2001C27.5467 27.7465 29.3201 25.9732 29.3201 23.6265V19.6265C29.3334 17.2799 27.5601 15.5065 25.2134 15.5065Z"
                          fill="#3B82F6"
                        ></path>
                      </svg>
                      <p className="text-lg text-gray-700 font-bold">
                        "Had some issues where my site crashed and broke,
                        reached out to Shuffle Editor to see if they could help
                        me fix it.
                      </p>
                    </div>
                    <div className="flex-initial">
                      <div className="flex flex-wrap -m-2">
                        <div className="w-auto p-2">
                          <img
                            className="rounded-full"
                            src="zanrly-assets/images/testimonials/avatar3.png"
                            alt=""
                          />
                        </div>
                        <div className="flex-1 p-2">
                          <h3 className="font-heading text-lg text-gray-900 font-black">
                            Monica
                          </h3>
                          <p className="text-sm text-gray-500 font-bold">
                            @monicajonhson
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 max-w-sm p-4">
                  <div className="flex flex-col justify-between p-8 h-full bg-gray-100 border border-gray-100 rounded-3xl shadow-md">
                    <div className="flex-initial mb-14">
                      <svg
                        className="mb-4"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.787 15.5068H4.53366C4.64033 9.28012 5.86699 8.25346 9.69366 5.98679C10.1337 5.72012 10.2803 5.16012 10.0137 4.70679C9.76033 4.26679 9.18699 4.12012 8.74699 4.38679C4.24033 7.05346 2.66699 8.68012 2.66699 16.4268V23.6135C2.66699 25.8935 4.52033 27.7335 6.78699 27.7335H10.787C13.1337 27.7335 14.907 25.9601 14.907 23.6135V19.6135C14.907 17.2801 13.1337 15.5068 10.787 15.5068Z"
                          fill="#3B82F6"
                        ></path>
                        <path
                          d="M25.2134 15.5065H18.9601C19.0667 9.27988 20.2934 8.25321 24.1201 5.98655C24.5601 5.71988 24.7067 5.15988 24.4401 4.70655C24.1734 4.26655 23.6134 4.11988 23.1601 4.38655C18.6534 7.05321 17.0801 8.67988 17.0801 16.4399V23.6265C17.0801 25.9065 18.9334 27.7465 21.2001 27.7465H25.2001C27.5467 27.7465 29.3201 25.9732 29.3201 23.6265V19.6265C29.3334 17.2799 27.5601 15.5065 25.2134 15.5065Z"
                          fill="#3B82F6"
                        ></path>
                      </svg>
                      <p className="text-lg text-gray-700 font-bold">
                        "Had some issues where my site crashed and broke,
                        reached out to Shuffle Editor to see if they could help
                        me fix it.
                      </p>
                    </div>
                    <div className="flex-initial">
                      <div className="flex flex-wrap -m-2">
                        <div className="w-auto p-2">
                          <img
                            className="rounded-full"
                            src="zanrly-assets/images/testimonials/avatar3.png"
                            alt=""
                          />
                        </div>
                        <div className="flex-1 p-2">
                          <h3 className="font-heading text-lg text-gray-900 font-black">
                            Monica
                          </h3>
                          <p className="text-sm text-gray-500 font-bold">
                            @monicajonhson
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 max-w-sm p-4">
                  <div className="flex flex-col justify-between p-8 h-full bg-gray-100 border border-gray-100 rounded-3xl shadow-md">
                    <div className="flex-initial mb-14">
                      <svg
                        className="mb-4"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.787 15.5068H4.53366C4.64033 9.28012 5.86699 8.25346 9.69366 5.98679C10.1337 5.72012 10.2803 5.16012 10.0137 4.70679C9.76033 4.26679 9.18699 4.12012 8.74699 4.38679C4.24033 7.05346 2.66699 8.68012 2.66699 16.4268V23.6135C2.66699 25.8935 4.52033 27.7335 6.78699 27.7335H10.787C13.1337 27.7335 14.907 25.9601 14.907 23.6135V19.6135C14.907 17.2801 13.1337 15.5068 10.787 15.5068Z"
                          fill="#3B82F6"
                        ></path>
                        <path
                          d="M25.2134 15.5065H18.9601C19.0667 9.27988 20.2934 8.25321 24.1201 5.98655C24.5601 5.71988 24.7067 5.15988 24.4401 4.70655C24.1734 4.26655 23.6134 4.11988 23.1601 4.38655C18.6534 7.05321 17.0801 8.67988 17.0801 16.4399V23.6265C17.0801 25.9065 18.9334 27.7465 21.2001 27.7465H25.2001C27.5467 27.7465 29.3201 25.9732 29.3201 23.6265V19.6265C29.3334 17.2799 27.5601 15.5065 25.2134 15.5065Z"
                          fill="#3B82F6"
                        ></path>
                      </svg>
                      <p className="text-lg text-gray-700 font-bold">
                        "Had some issues where my site crashed and broke,
                        reached out to Shuffle Editor to see if they could help
                        me fix it.
                      </p>
                    </div>
                    <div className="flex-initial">
                      <div className="flex flex-wrap -m-2">
                        <div className="w-auto p-2">
                          <img
                            className="rounded-full"
                            src="zanrly-assets/images/testimonials/avatar3.png"
                            alt=""
                          />
                        </div>
                        <div className="flex-1 p-2">
                          <h3 className="font-heading text-lg text-gray-900 font-black">
                            Monica
                          </h3>
                          <p className="text-sm text-gray-500 font-bold">
                            @monicajonhson
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 max-w-sm p-4">
                  <div className="flex flex-col justify-between p-8 h-full bg-gray-100 border border-gray-100 rounded-3xl shadow-md">
                    <div className="flex-initial mb-14">
                      <svg
                        className="mb-4"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.787 15.5068H4.53366C4.64033 9.28012 5.86699 8.25346 9.69366 5.98679C10.1337 5.72012 10.2803 5.16012 10.0137 4.70679C9.76033 4.26679 9.18699 4.12012 8.74699 4.38679C4.24033 7.05346 2.66699 8.68012 2.66699 16.4268V23.6135C2.66699 25.8935 4.52033 27.7335 6.78699 27.7335H10.787C13.1337 27.7335 14.907 25.9601 14.907 23.6135V19.6135C14.907 17.2801 13.1337 15.5068 10.787 15.5068Z"
                          fill="#3B82F6"
                        ></path>
                        <path
                          d="M25.2134 15.5065H18.9601C19.0667 9.27988 20.2934 8.25321 24.1201 5.98655C24.5601 5.71988 24.7067 5.15988 24.4401 4.70655C24.1734 4.26655 23.6134 4.11988 23.1601 4.38655C18.6534 7.05321 17.0801 8.67988 17.0801 16.4399V23.6265C17.0801 25.9065 18.9334 27.7465 21.2001 27.7465H25.2001C27.5467 27.7465 29.3201 25.9732 29.3201 23.6265V19.6265C29.3334 17.2799 27.5601 15.5065 25.2134 15.5065Z"
                          fill="#3B82F6"
                        ></path>
                      </svg>
                      <p className="text-lg text-gray-700 font-bold">
                        "Had some issues where my site crashed and broke,
                        reached out to Shuffle Editor to see if they could help
                        me fix it.
                      </p>
                    </div>
                    <div className="flex-initial">
                      <div className="flex flex-wrap -m-2">
                        <div className="w-auto p-2">
                          <img
                            className="rounded-full"
                            src="zanrly-assets/images/testimonials/avatar3.png"
                            alt=""
                          />
                        </div>
                        <div className="flex-1 p-2">
                          <h3 className="font-heading text-lg text-gray-900 font-black">
                            Monica
                          </h3>
                          <p className="text-sm text-gray-500 font-bold">
                            @monicajonhson
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 max-w-sm p-4">
                  <div className="flex flex-col justify-between p-8 h-full bg-gray-100 border border-gray-100 rounded-3xl shadow-md">
                    <div className="flex-initial mb-14">
                      <svg
                        className="mb-4"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.787 15.5068H4.53366C4.64033 9.28012 5.86699 8.25346 9.69366 5.98679C10.1337 5.72012 10.2803 5.16012 10.0137 4.70679C9.76033 4.26679 9.18699 4.12012 8.74699 4.38679C4.24033 7.05346 2.66699 8.68012 2.66699 16.4268V23.6135C2.66699 25.8935 4.52033 27.7335 6.78699 27.7335H10.787C13.1337 27.7335 14.907 25.9601 14.907 23.6135V19.6135C14.907 17.2801 13.1337 15.5068 10.787 15.5068Z"
                          fill="#3B82F6"
                        ></path>
                        <path
                          d="M25.2134 15.5065H18.9601C19.0667 9.27988 20.2934 8.25321 24.1201 5.98655C24.5601 5.71988 24.7067 5.15988 24.4401 4.70655C24.1734 4.26655 23.6134 4.11988 23.1601 4.38655C18.6534 7.05321 17.0801 8.67988 17.0801 16.4399V23.6265C17.0801 25.9065 18.9334 27.7465 21.2001 27.7465H25.2001C27.5467 27.7465 29.3201 25.9732 29.3201 23.6265V19.6265C29.3334 17.2799 27.5601 15.5065 25.2134 15.5065Z"
                          fill="#3B82F6"
                        ></path>
                      </svg>
                      <p className="text-lg text-gray-700 font-bold">
                        "Had some issues where my site crashed and broke,
                        reached out to Shuffle Editor to see if they could help
                        me fix it.
                      </p>
                    </div>
                    <div className="flex-initial">
                      <div className="flex flex-wrap -m-2">
                        <div className="w-auto p-2">
                          <img
                            className="rounded-full"
                            src="zanrly-assets/images/testimonials/avatar3.png"
                            alt=""
                          />
                        </div>
                        <div className="flex-1 p-2">
                          <h3 className="font-heading text-lg text-gray-900 font-black">
                            Monica
                          </h3>
                          <p className="text-sm text-gray-500 font-bold">
                            @monicajonhson
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* TESTIMONIALS SECTION */}
      {/* PREVIOUS HACKATHONS SECTION */}
      {/* <section className="pt-10 pb-16 bg-gray-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <span className="inline-block mb-5 text-sm text-red-600 font-bold uppercase tracking-widest">
            What we found
          </span>
          <h2 className="font-heading mb-12 text-4xl text-gray-900 font-black tracking-tight">
            Previous Hackathons
          </h2>
          <div className="flex flex-wrap -m-4">
            <div className="w-full md:w-1/2 p-4">
              <div className="p-8 md:p-16 text-center h-full bg-white border border-gray-100 rounded-3xl">
                <img
                  className="mb-8 mx-auto"
                  src="zanrly-assets/images/features/apple.png"
                  alt=""
                />
                <h3 className="font-heading mb-7 text-4xl text-gray-900 font-black tracking-tight">
                  Build what you imagine
                </h3>
                <p className="text-xl font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  venenatis volutpat velit, quis iaculis velit bibendum a.
                  Maecenas accumsan fermentum nisl.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="p-8 md:p-16 text-center h-full bg-white border border-gray-100 rounded-3xl">
                <img
                  className="mb-8 mx-auto"
                  src="zanrly-assets/images/features/work.png"
                  alt=""
                />
                <h3 className="font-heading mb-7 text-4xl text-gray-900 font-black tracking-tight">
                  Take control of design &amp; development
                </h3>
                <p className="text-xl font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  venenatis volutpat velit, quis iaculis velit bibendum a.
                  Maecenas accumsan fermentum nisl.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* PREVIOUS HACKATHONS SECTION */}
      {/* FAQs SECTION */}
      {/* <section className="py-10 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative py-16 px-8 bg-white overflow-hidden rounded-3xl">
            <div className="absolute top-0 left-1/2 min-w-max transform -translate-x-1/2">
              <div className="absolute bg-gradient-radial-white w-full h-full"></div>
              <img src="zanrly-assets/images/faq/pattern-gray.png" alt="" />
            </div>
            <div className="relative z-10">
              <div className="mb-10 md:max-w-xl mx-auto text-center">
                <span className="inline-block mb-5 text-sm text-red-600 font-bold uppercase tracking-widest">
                  Frequently asked questions
                </span>
                <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">
                  Got questions? We’re here to help!
                </h2>
                <p className="text-gray-500 font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Malesuada tellus vestibulum, commodo pulvinar.
                </p>
              </div>
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-wrap -m-3 mb-10">
                  <div className="w-full p-3">
                    <a className="block p-10 bg-gray-100 rounded-3xl" href="#">
                      <div className="flex flex-wrap -m-2">
                        <div className="flex-1 p-2">
                          <h3 className="font-heading mb-4 text-xl text-gray-900 font-black">
                            Do you provide any free plan?
                          </h3>
                          <p className="text-gray-500 font-bold">
                            Lorem ipsum dolor sit amet, to the consectr
                            adipiscing elit. Volutpat tempor to the condi mentum
                            vitae vel purus.
                          </p>
                        </div>
                        <div className="w-auto p-2">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.07928 15.82L12.3093 15.82L17.9193 15.82C18.8793 15.82 19.3593 14.66 18.6793 13.98L13.4993 8.80001C12.6693 7.97001 11.3193 7.97001 10.4893 8.80001L8.51928 10.77L5.30927 13.98C4.63927 14.66 5.11928 15.82 6.07928 15.82Z"
                              fill="#D1D5DB"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="w-full p-3">
                    <a className="block p-10 bg-gray-100 rounded-3xl" href="#">
                      <div className="flex flex-wrap -m-2">
                        <div className="flex-1 p-2">
                          <h3 className="font-heading text-xl text-gray-900 font-black">
                            How to claim your 25% discount offer?
                          </h3>
                        </div>
                        <div className="w-auto p-2">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.9207 8.17999H11.6907H6.08072C5.12072 8.17999 4.64073 9.33999 5.32073 10.02L10.5007 15.2C11.3307 16.03 12.6807 16.03 13.5107 15.2L15.4807 13.23L18.6907 10.02C19.3607 9.33999 18.8807 8.17999 17.9207 8.17999Z"
                              fill="#D1D5DB"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="w-full p-3">
                    <a className="block p-10 bg-gray-100 rounded-3xl" href="#">
                      <div className="flex flex-wrap -m-2">
                        <div className="flex-1 p-2">
                          <h3 className="font-heading text-xl text-gray-900 font-black">
                            What’s your refund policy?
                          </h3>
                        </div>
                        <div className="w-auto p-2">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.9207 8.17999H11.6907H6.08072C5.12072 8.17999 4.64073 9.33999 5.32073 10.02L10.5007 15.2C11.3307 16.03 12.6807 16.03 13.5107 15.2L15.4807 13.23L18.6907 10.02C19.3607 9.33999 18.8807 8.17999 17.9207 8.17999Z"
                              fill="#D1D5DB"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="w-full p-3">
                    <a className="block p-10 bg-gray-100 rounded-3xl" href="#">
                      <div className="flex flex-wrap -m-2">
                        <div className="flex-1 p-2">
                          <h3 className="font-heading text-xl text-gray-900 font-black">
                            How to get support for the product?
                          </h3>
                        </div>
                        <div className="w-auto p-2">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.9207 8.17999H11.6907H6.08072C5.12072 8.17999 4.64073 9.33999 5.32073 10.02L10.5007 15.2C11.3307 16.03 12.6807 16.03 13.5107 15.2L15.4807 13.23L18.6907 10.02C19.3607 9.33999 18.8807 8.17999 17.9207 8.17999Z"
                              fill="#D1D5DB"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <p className="text-gray-500 font-bold text-center">
                  <span>Still have any questions? </span>
                  <a className="text-red-600 hover:text-red-700" href="#">
                    Contact us
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* FAQs SECTION */}
      {/* CONTACT US SECTION */}
      <section className="py-10 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="py-16 px-8 bg-white overflow-hidden border border-gray-100 rounded-3xl">
            <div className="max-w-7xl mx-auto">
              <div className="mb-10 md:max-w-3xl">
                <span className="inline-block mb-4 text-sm font-bold uppercase tracking-widest text-red-600">
                  Contact Us
                </span>
                <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">
                  Want to reach out directly?
                </h2>
                {/* <p className="md:max-w-md text-gray-500 font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Malesuada tellus vestibulum, commodo pulvinar.
                </p> */}
              </div>
              <div className="mb-10 p-10 bg-gray-100 border border-gray-100 rounded-3xl">
                <div className="flex flex-wrap -m-3 mb-3">
                  <div className="w-auto p-3">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white rounded-xl">
                      <Image
                        src="/assets/map-marker-svgrepo-com.svg"
                        width="50"
                        height="50"
                      />
                    </div>
                  </div>
                  <div className="flex-1 p-3">
                    <p className="text-gray-500 font-bold">Address</p>
                    <h3 className="font-heading text-xl text-gray-900 font-black">
                      Seneca College Newnham Campus, 1750 Finch Ave E, North
                      York, Toronto, ON M2J 2X5
                    </h3>
                  </div>
                </div>
                <iframe
                  className="w-full h-96 rounded-3xl"
                  src="https://maps.google.com/maps?q=Seneca College Newnham Campus, Finch, Seneca Hill,
                      Toronto, ON M2J 5G3&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                ></iframe>
              </div>
              <div className="flex flex-wrap -m-4">
                <div className="w-full md:w-1/2 p-4">
                  <div className="p-10 h-full bg-gray-100 border border-gray-100 rounded-3xl">
                    <div className="flex flex-wrap -m-3">
                      <div className="w-auto p-3">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white rounded-xl">
                          <Image
                            src="/assets/email-message-mail-envelope-svgrepo-com.svg"
                            width="40"
                            height="40"
                          />
                        </div>
                      </div>
                      <div className="flex-1 p-3">
                        <p className="text-gray-500 font-bold">Email</p>
                        <h3 className="font-heading md:text-xl text-md text-gray-900 font-black">
                          info@senecahackathon.com
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="w-full md:w-1/2 p-4">
                  <div className="p-10 h-full bg-gray-100 border border-gray-100 rounded-3xl">
                    <div className="flex flex-wrap -m-3">
                      <div className="w-auto p-3">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white rounded-xl">
                          <Image
                            src="/assets/phone-call-phone-svgrepo-com.svg"
                            width="40"
                            height="40"
                          />
                        </div>
                      </div>
                      <div className="flex-1 p-3">
                        <p className="text-gray-500 font-bold">Phone</p>
                        <h3 className="font-heading text-xl text-gray-900 font-black">
                          +1 (123) 456 - 790
                        </h3>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CONTACT US SECTION */}


      {/* TEAM SECTION 1*/}
      
{/* <section class="py-16 bg-white overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="mb-16 max-w-xl mx-auto text-center">
      <span class="inline-block mb-2 text-sm text-blue-500 font-bold uppercase tracking-widest">Our team</span>
      <h2 class="font-heading text-4xl md:text-5xl text-gray-900 font-black tracking-tight">The brains behind Smart Cities Hackathon</h2>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="w-full md:w-1/4 p-4">
        <div class="flex flex-col justify-between px-8 pt-10 pb-12 h-full text-center bg-gray-100 rounded-3xl">
          <div class="flex-initial mb-8">
            <img class="mb-8 mx-auto rounded-3xl" src="zanrly-assets/images/teams/avatar.png" alt=""/>
            <h3 class="font-heading mb-2 text-2xl text-gray-900 font-black tracking-tight">Ben Rogers</h3>
            <p class="text-sm text-gray-500 font-bold">Board Excecutive</p>
          </div>
          <div class="flex-initial">
            <div class="flex flex-wrap justify-center -m-1.5">
              <div class="w-auto p-1.5">
                <a class="flex items-center justify-center w-10 h-10 bg-white rounded-full" href="#">
                  <img src="zanrly-assets/images/insta.svg" alt=""/>
                </a>
              </div>
              <div class="w-auto p-1.5">
                <a class="flex items-center justify-center w-10 h-10 bg-white rounded-full" href="#">
                  <img src="zanrly-assets/images/twitter.svg" alt=""/>
                </a>
              </div>
              <div class="w-auto p-1.5">
                <a class="flex items-center justify-center w-10 h-10 bg-white rounded-full" href="#">
                  <img src="zanrly-assets/images/fb.svg" alt=""/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/4 p-4">
        <div class="flex flex-col justify-between px-8 pt-10 pb-12 h-full text-center bg-gray-100 rounded-3xl">
          <div class="flex-initial mb-8">
            <img class="mb-8 mx-auto rounded-3xl" src="zanrly-assets/images/teams/avatar.png" alt=""/>
            <h3 class="font-heading mb-2 text-2xl text-gray-900 font-black tracking-tight">Suzanne Abraham</h3>
            <p class="text-sm text-gray-500 font-bold">Board Excecutive</p>
          </div>
          <div class="flex-initial">
            <div class="flex flex-wrap justify-center -m-1.5">
              <div class="w-auto p-1.5">
                <a class="flex items-center justify-center w-10 h-10 bg-white rounded-full" href="#">
                  <img src="zanrly-assets/images/insta.svg" alt=""/>
                </a>
              </div>
              <div class="w-auto p-1.5">
                <a class="flex items-center justify-center w-10 h-10 bg-white rounded-full" href="#">
                  <img src="zanrly-assets/images/twitter.svg" alt=""/>
                </a>
              </div>
              <div class="w-auto p-1.5">
                <a class="flex items-center justify-center w-10 h-10 bg-white rounded-full" href="#">
                  <img src="zanrly-assets/images/fb.svg" alt=""/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/4 p-4">
        <div class="flex flex-col justify-between px-8 pt-10 pb-12 h-full text-center bg-gray-100 rounded-3xl">
          <div class="flex-initial mb-8">
            <img class="mb-8 mx-auto rounded-3xl" src="zanrly-assets/images/teams/avatar.png" alt=""/>
            <h3 class="font-heading mb-2 text-2xl text-gray-900 font-black tracking-tight">Mehdi Akbari</h3>
            <p class="text-sm text-gray-500 font-bold">Board Excecutive</p>
          </div>
          <div class="flex-initial">
            <div class="flex flex-wrap justify-center -m-1.5">
              <div class="w-auto p-1.5">
                <a class="flex items-center justify-center w-10 h-10 bg-white rounded-full" href="#">
                  <img src="zanrly-assets/images/insta.svg" alt=""/>
                </a>
              </div>
              <div class="w-auto p-1.5">
                <a class="flex items-center justify-center w-10 h-10 bg-white rounded-full" href="#">
                  <img src="zanrly-assets/images/twitter.svg" alt=""/>
                </a>
              </div>
              <div class="w-auto p-1.5">
                <a class="flex items-center justify-center w-10 h-10 bg-white rounded-full" href="#">
                  <img src="zanrly-assets/images/fb.svg" alt=""/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/4 p-4">
        <div class="flex flex-col justify-between px-8 pt-10 pb-12 h-full text-center bg-gray-100 rounded-3xl">
          <div class="flex-initial mb-8">
            <img class="mb-8 mx-auto rounded-3xl" src="zanrly-assets/images/teams/avatar.png" alt=""/>
            <h3 class="font-heading mb-2 text-2xl text-gray-900 font-black tracking-tight">Namrata Barai</h3>
            <p class="text-sm text-gray-500 font-bold">Board Excecutive</p>
          </div>
          <div class="flex-initial">
            <div class="flex flex-wrap justify-center -m-1.5">
              <div class="w-auto p-1.5">
                <a class="flex items-center justify-center w-10 h-10 bg-white rounded-full" href="#">
                  <img src="zanrly-assets/images/insta.svg" alt=""/>
                </a>
              </div>
              <div class="w-auto p-1.5">
                <a class="flex items-center justify-center w-10 h-10 bg-white rounded-full" href="#">
                  <img src="zanrly-assets/images/twitter.svg" alt=""/>
                </a>
              </div>
              <div class="w-auto p-1.5">
                <a class="flex items-center justify-center w-10 h-10 bg-white rounded-full" href="#">
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
<section class="py-1 bg-white overflow-hidden">
  <div class="container mx-auto px-4">
    {/* <div class="mb-16 max-w-xl mx-auto text-center">
      <span class="inline-block mb-2 text-sm text-blue-500 font-bold uppercase tracking-widest">Our team</span>
      <h2 class="font-heading text-4xl md:text-5xl text-gray-900 font-black tracking-tight">The brains behind Smart Cities Hackathon</h2>
    </div> */}
    {/* <div class="flex flex-wrap -m-4">
      <div class="w-full md:w-1/4 p-4">
        <div class="flex flex-col justify-between px-8 pt-10 pb-12 h-full text-center bg-gray-100 rounded-3xl">
          <div class="flex-initial mb-8">
            <img class="mb-8 mx-auto rounded-3xl" src="zanrly-assets/images/teams/avatar.png" alt=""/>
            <h3 class="font-heading mb-2 text-2xl text-gray-900 font-black tracking-tight">Mark Buchner</h3>
            <p class="text-sm text-gray-500 font-bold">Academic Chair</p>
          </div>
          <div class="flex-initial">
            <div class="flex flex-wrap justify-center -m-1.5">
              <div class="w-auto p-1.5">
                <a class="flex items-center justify-center w-10 h-10 bg-white rounded-full" href="#">
                  <img src="zanrly-assets/images/insta.svg" alt=""/>
                </a>
              </div>
              <div class="w-auto p-1.5">
                <a class="flex items-center justify-center w-10 h-10 bg-white rounded-full" href="#">
                  <img src="zanrly-assets/images/twitter.svg" alt=""/>
                </a>
              </div>
              <div class="w-auto p-1.5">
                <a class="flex items-center justify-center w-10 h-10 bg-white rounded-full" href="#">
                  <img src="zanrly-assets/images/fb.svg" alt=""/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/4 p-4">
        <div class="flex flex-col justify-between px-8 pt-10 pb-12 h-full text-center bg-gray-100 rounded-3xl">
          <div class="flex-initial mb-8">
            <img class="mb-8 mx-auto rounded-3xl" src="zanrly-assets/images/teams/avatar.png" alt=""/>
            <h3 class="font-heading mb-2 text-2xl text-gray-900 font-black tracking-tight">Kumar Rajendra</h3>
            <p class="text-sm text-gray-500 font-bold">Industry Chair</p>
          </div>
          <div class="flex-initial">
            <div class="flex flex-wrap justify-center -m-1.5">
              <div class="w-auto p-1.5">
                <a class="flex items-center justify-center w-10 h-10 bg-white rounded-full" href="#">
                  <img src="zanrly-assets/images/insta.svg" alt=""/>
                </a>
              </div>
              <div class="w-auto p-1.5">
                <a class="flex items-center justify-center w-10 h-10 bg-white rounded-full" href="#">
                  <img src="zanrly-assets/images/twitter.svg" alt=""/>
                </a>
              </div>
              <div class="w-auto p-1.5">
                <a class="flex items-center justify-center w-10 h-10 bg-white rounded-full" href="#">
                  <img src="zanrly-assets/images/fb.svg" alt=""/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/4 p-4">
        <div class="flex flex-col justify-between px-8 pt-10 pb-12 h-full text-center bg-gray-100 rounded-3xl">
          <div class="flex-initial mb-8">
            <img class="mb-8 mx-auto rounded-3xl" src="zanrly-assets/images/teams/avatar.png" alt=""/>
            <h3 class="font-heading mb-2 text-2xl text-gray-900 font-black tracking-tight">Shirlene Phyllis Feliciano</h3>
            <p class="text-sm text-gray-500 font-bold">Cheif of Staff</p>
          </div>
          <div class="flex-initial">
            <div class="flex flex-wrap justify-center -m-1.5">
              <div class="w-auto p-1.5">
                <a class="flex items-center justify-center w-10 h-10 bg-white rounded-full" href="#">
                  <img src="zanrly-assets/images/insta.svg" alt=""/>
                </a>
              </div>
              <div class="w-auto p-1.5">
                <a class="flex items-center justify-center w-10 h-10 bg-white rounded-full" href="#">
                  <img src="zanrly-assets/images/twitter.svg" alt=""/>
                </a>
              </div>
              <div class="w-auto p-1.5">
                <a class="flex items-center justify-center w-10 h-10 bg-white rounded-full" href="#">
                  <img src="zanrly-assets/images/fb.svg" alt=""/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/4 p-4">
        <div class="flex flex-col justify-between px-8 pt-10 pb-12 h-full text-center bg-gray-100 rounded-3xl">
          <div class="flex-initial mb-8">
            <img class="mb-8 mx-auto rounded-3xl" src="zanrly-assets/images/teams/avatar.png" alt=""/>
            <h3 class="font-heading mb-2 text-2xl text-gray-900 font-black tracking-tight">Negar</h3>
            <p class="text-sm text-gray-500 font-bold">Human Resource Manager</p>
          </div>
          <div class="flex-initial">
            <div class="flex flex-wrap justify-center -m-1.5">
              <div class="w-auto p-1.5">
                <a class="flex items-center justify-center w-10 h-10 bg-white rounded-full" href="#">
                  <img src="zanrly-assets/images/insta.svg" alt=""/>
                </a>
              </div>
              <div class="w-auto p-1.5">
                <a class="flex items-center justify-center w-10 h-10 bg-white rounded-full" href="#">
                  <img src="zanrly-assets/images/twitter.svg" alt=""/>
                </a>
              </div>
              <div class="w-auto p-1.5">
                <a class="flex items-center justify-center w-10 h-10 bg-white rounded-full" href="#">
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


<section class="py-20 bg-white overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap items-center -m-8 lg:-m-16">
      <div class="w-full md:w-1/2 p-8 lg:p-16">
        <div class="p-8 bg-gray-100 rounded-3xl">
          {/* <img class="mb-40" src="zanrly-assets/logos/zanrly-logo.svg" alt=""/> */}
          {/* <a className="block w-1/2 px-4 py-2.5 text-sm text-center text-white font-bold focus:ring-4 focus:ring-blue-200 rounded-full bg-red-600 hover:bg-red-700" href="#">
          Smart Cities Hackathon Team
          </a>
          <br></br><br></br><br></br><br></br>
          <h2 class="font-heading mb-4 text-4xl md:text-5xl text-gray-900 font-black tracking-tight">Meet out Leadership Team!</h2>
          <p class="text-gray-700 font-bold">We believe that collaboration and open communication are key to success. Our team members worked closely together, shared ideas and feedback, and ensured that everyone is aligned on our goals. We held regular meetings to keep everyone up-to-date and to ensure that we're always moving forward together to make this Hackathon a success.</p>
        </div>
      </div>
      <div class="w-full md:w-1/2 p-8 lg:p-16">
        <div class="flex flex-wrap -m-4">
          <div class="w-auto lg:w-1/2 p-4">
            <div class="flex flex-wrap items-center -m-2">
              <div class="w-auto p-2">
                <img class="rounded-3xl" src="zanrly-assets/images/teams/avatar2.png" alt=""/>
              </div>
              <div class="flex-1 p-2">
                <h3 class="font-heading mb-0.5 text-xl font-bold">Kartik Sarothiya</h3>
                <p class="text-sm text-gray-500 font-bold">IT Consultant</p>
              </div>
            </div>
          </div>
          <div class="w-auto lg:w-1/2 p-4">
            <div class="flex flex-wrap items-center -m-2">
              <div class="w-auto p-2">
                <img class="rounded-3xl" src="zanrly-assets/images/teams/avatar2.png" alt=""/>
              </div>
              <div class="flex-1 p-2">
                <h3 class="font-heading mb-0.5 text-xl font-bold">Santosh Bohara</h3>
                <p class="text-sm text-gray-500 font-bold">IT Director</p>
              </div>
            </div>
          </div>
          <div class="w-auto lg:w-1/2 p-4">
            <div class="flex flex-wrap items-center -m-2">
              <div class="w-auto p-2">
                <img class="rounded-3xl" src="zanrly-assets/images/teams/avatar2.png" alt=""/>
              </div>
              <div class="flex-1 p-2">
                <h3 class="font-heading mb-0.5 text-xl font-bold">Fenil Mehulkumar Mehta</h3>
                <p class="text-sm text-gray-500 font-bold">Partner Experience Director</p>
              </div>
            </div>
          </div>
          <div class="w-auto lg:w-1/2 p-4">
            <div class="flex flex-wrap items-center -m-2">
              <div class="w-auto p-2">
                <img class="rounded-3xl" src="zanrly-assets/images/teams/avatar2.png" alt=""/>
              </div>
              <div class="flex-1 p-2">
                <h3 class="font-heading mb-0.5 text-xl font-bold">Aliraza Mutanza Versi</h3>
                <p class="text-sm text-gray-500 font-bold">Student Experience Director</p>
              </div>
            </div>
          </div>
          <div class="w-auto lg:w-1/2 p-4">
            <div class="flex flex-wrap items-center -m-2">
              <div class="w-auto p-2">
                <img class="rounded-3xl" src="zanrly-assets/images/teams/avatar2.png" alt=""/>
              </div>
              <div class="flex-1 p-2">
                <h3 class="font-heading mb-0.5 text-xl font-bold">Neil Javiya</h3>
                <p class="text-sm text-gray-500 font-bold">Operations Director</p>
              </div>
            </div>
          </div>
          <div class="w-auto lg:w-1/2 p-4">
            <div class="flex flex-wrap items-center -m-2">
              <div class="w-auto p-2">
                <img class="rounded-3xl" src="zanrly-assets/images/teams/avatar2.png" alt=""/>
              </div>
              <div class="flex-1 p-2">
                <h3 class="font-heading mb-0.5 text-xl font-bold">Daisy Le</h3>
                <p class="text-sm text-gray-500 font-bold">Finance Director</p>
              </div>
            </div>
          </div>
          <div class="w-auto lg:w-1/2 p-4">
            <div class="flex flex-wrap items-center -m-2">
              <div class="w-auto p-2">
                <img class="rounded-3xl" src="zanrly-assets/images/teams/avatar2.png" alt=""/>
              </div>
              <div class="flex-1 p-2">
                <h3 class="font-heading mb-0.5 text-xl font-bold">David Jeong</h3>
                <p class="text-sm text-gray-500 font-bold">Marketing Consultant</p>
              </div>
            </div>
          </div>
          <div class="w-auto lg:w-1/2 p-4">
            <div class="flex flex-wrap items-center -m-2">
              <div class="w-auto p-2">
                <img class="rounded-3xl" src="zanrly-assets/images/teams/avatar2.png" alt=""/>
              </div>
              <div class="flex-1 p-2">
                <h3 class="font-heading mb-0.5 text-xl font-bold">Hleb Klymenko</h3>
                <p class="text-sm text-gray-500 font-bold">Marketing Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
</section> */}
      {/* TEAM SECTION 1*/}

      {/* TEAM SECTION 2 */}
      {/* <!-- Container for demo purpose --> */}
<div class="container my-24 px-6 mx-auto">

  {/* <!-- Section: Design Block --> */}
  <section class="mb-32 text-gray-800 text-center">
    <div class="mb-32 max-w-xl mx-auto text-center">
      <span class="underline inline-block mb-2 text-lg text-red-600 font-bold uppercase tracking-widest hover:text-red-900"><a href="/team" target="_blank">Our team</a></span>
      <h2 class="font-heading text-4xl md:text-5xl text-gray-900 font-black tracking-tight">The brains behind Smart Cities Hackathon</h2>
    </div>
    {/* <h2 class="text-3xl font-bold mb-32">Meet the <u class="text-red-600">TEAM</u></h2> */}

    <div class="grid gap-x-6 lg:gap-x-12 md:grid-cols-6">
      <div class="mb-24 md:mb-0">
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

      <div class="mb-24 md:mb-0">
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
              {/* <a href="#!" class="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-4 h-4 text-blue-600">
                  <path fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a href="#!" class="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 text-blue-600">
                  <path fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </a> */}
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

      <div class="mb-24 md:mb-0">
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

      <div class="mb-24 md:mb-0">
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

      <div class="mb-24 md:mb-0">
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

      <div class="">
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
{/* Column 2 */}
  {/* <section class="mb-16 text-gray-800 text-center">
    

    <div class="grid gap-x-6 lg:gap-x-12 md:grid-cols-4">
      <div class="mb-16 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Marta Smith</h5>
            <p class="mb-6">Frontend Developer</p>
            <ul class="list-inside flex mx-auto justify-center">
              <a href="#!" class="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="w-4 h-4 text-blue-600">
                  <path fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </a>
              <a href="#!" class="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 text-blue-600">
                  <path fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </a>
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

      <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Darren Randolph</h5>
            <p class="mb-6">Marketing expert</p>
            <ul class="list-inside flex mx-auto justify-center">
              <a href="#!" class="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-4 h-4 text-blue-600">
                  <path fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a href="#!" class="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 text-blue-600">
                  <path fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </a>
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

      <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Darren Randolph</h5>
            <p class="mb-6">Marketing expert</p>
            <ul class="list-inside flex mx-auto justify-center">
              <a href="#!" class="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-4 h-4 text-blue-600">
                  <path fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a href="#!" class="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 text-blue-600">
                  <path fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </a>
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

      <div class="">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="https://mdbootstrap.com/img/new/avatars/15.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Ayat Black</h5>
            <p class="mb-6">Web designer</p>
            <ul class="list-inside flex mx-auto justify-center">
              <a href="#!" class="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 text-blue-600">
                  <path fill="currentColor"
                    d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z" />
                </svg>
              </a>
              <a href="#!" class="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 text-blue-600">
                  <path fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>
              <a href="#!" class="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 text-blue-600">
                  <path fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </ul>
          </div>
        </div>
      </div> 
    </div>
  </section>
  {/* <!-- Section: Design Block --> */}

</div>
{/* <!-- Container for demo purpose --> */}

{/* Directors */}
<div class="container my-12 px-6 mx-auto">

  <section class="mb-12 text-gray-800 text-center">

    <div class="grid md:grid-cols-9 xl:grid-cols-9 gap-x-6 lg:gap-xl-12">
      <div class="mb-12">
        <img src="/assets/mark-buchner.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
          style={{"max-width": "100px"}} />

        <p class="font-bold mb-2">Shirlene Phyllis Feliciano</p>
        <p class="text-gray-500">Cheif of Staff</p>
      </div>

      <div class="mb-12">
        <img src="https://mdbootstrap.com/img/new/avatars/5.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
          style={{"max-width": "100px"}} />

        <p class="font-bold mb-2">Negar</p>
        <p class="text-gray-500">Human Resource Manager</p>
      </div>

      <div class="mb-12">
        <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
          style={{"max-width": "100px"}} />
        <p class="font-bold mb-2">Kartik Sorathiya</p>
        <p class="text-gray-500">IT Consultant </p>
      </div>
      <div class="mb-12">
        <img src="https://mdbootstrap.com/img/new/avatars/7.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
          style={{"max-width": "100px"}} />
        <p class="font-bold mb-2">Santosh Bohara</p>
        <p class="text-gray-500">IT Director</p>
      </div>

      <div class="mb-12">
        <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
          style={{"max-width": "100px"}} />
        <p class="font-bold mb-2">Fenil Mehulkumar Mehta</p>
        <p class="text-gray-500">Partner Experience Director</p>
      </div>

      <div class="mb-12">
        <img src="https://mdbootstrap.com/img/new/avatars/9.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
          style={{"max-width": "100px"}} />
        <p class="font-bold mb-2">Aliraza Mutanza Versi</p>
        <p class="text-gray-500">Student Experience Director</p>
      </div>

      <div class="mb-12">
        <img src="https://mdbootstrap.com/img/new/avatars/10.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
          style={{"max-width": "100px"}} />
        <p class="font-bold mb-2">Neil Javiya</p>
        <p class="text-gray-500">Operations Director</p>
      </div>

      <div class="mb-12">
        <img src="https://mdbootstrap.com/img/new/avatars/11.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
          style={{"max-width": "100px"}} />
        <p class="font-bold mb-2">Daisy Le</p>
        <p class="text-gray-500">Finance Director</p>
      </div>

      <div class="mb-12">
        <img src="https://mdbootstrap.com/img/new/avatars/11.jpg" class="rounded-full mx-auto shadow-lg mb-4" alt=""
          style={{"max-width": "100px"}} />
        <p class="font-bold mb-2">David Jeong</p>
        <p class="text-gray-500">Marketing Consultant</p>
      </div>

    </div>
  </section>

</div>
      {/* TEAM SECTION 2 */}

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
  );
}

export default Home;