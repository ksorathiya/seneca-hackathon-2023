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
              <div className="w-auto">
                <div className="flex flex-wrap items-center">
                  <div className="w-auto hidden lg:block"></div>
                </div>
              </div>
              <div className="w-auto">
                <div className="flex flex-wrap items-center">
                  <div className="w-auto hidden lg:block">
                    <div className="flex flex-wrap -m-2">
                      <div className="w-full md:w-auto p-2"></div>
                      <div className="w-full md:w-auto p-2">
                        <a
                          className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold focus:ring-4 focus:ring-blue-200 rounded-full bg-red-600 hover:bg-red-700"
                          href="#"
                        >
                          May 5th - 6th, 2023
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto lg:hidden">
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
                <p className="mb-8 text-xl text-gray-300 ">
                  Join the brightest minds from across the globe and help solve
                  real-world challenges in making cities smarter.
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
                      Win a $325 stipend by participating in the Design Jam by
                      York University.{" "}
                    </p>
                    <div class="flex flex-wrap -m-2">
                      <div class="w-full md:w-auto p-2">
                        <a
                          class="block w-full px-8 py-3.5 text-lg text-center text-white font-bold focus:ring-4 focus:ring-blue-200 rounded-full bg-red-600 hover:bg-red-700"
                          href="#"
                        >
                          Register Here
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
                          Gain design thinking skills for a better chance at
                          winning the Smart Cities Hackathon.
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* DESIGN JAM SECTION 1 */}
      {/* DESIGN JAM SECTION 2 */}
      <section class="py-16 bg-gray-100 overflow-hidden">
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
      </section>

      {/* DESIGN JAM SECTION 2 */}
      {/* DESIGN JAM SECTION 3 */}
      <section class="py-16 bg-gray-100 overflow-hidden">
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
      </section>
      {/* DESIGN JAM SECTION 3 */}
      {/* HACKATHON TIMELINE SECTION */}
      <section class="py-10 bg-gray-50 overflow-hidden">
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
      </section>
      {/* HACKATHON TIMELINE SECTION */}
      {/* SPONSORS SECTION */}
      <section className="py-10 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="font-heading mb-10 mx-auto text-center text-4xl md:text-5xl text-gray-900 font-black tracking-tight">
            Our Sponsors
          </h2>
        </div>
        <div className="container mx-auto px-4">
          <div className="bg-white border border-gray-50 rounded-3xl">
            <div className="flex flex-wrap items-stretch">
              <div className="w-full sm:w-1/3 border-b sm:border-r border-gray-50">
                <div className="py-12 lg:py-20 px-8">
                  <img
                    className="mx-auto"
                    src="zanrly-assets/brands/brand.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full sm:w-1/3 border-b sm:border-r border-gray-50">
                <div className="py-12 lg:py-20 px-8">
                  <img
                    className="mx-auto"
                    src="zanrly-assets/brands/brand3.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full sm:w-1/3 border-b border-gray-50">
                <div className="py-12 lg:py-20 px-8">
                  <img
                    className="mx-auto"
                    src="zanrly-assets/brands/brand4.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-50">
                <div className="py-12 lg:py-20 px-8">
                  <img
                    className="mx-auto"
                    src="zanrly-assets/brands/brand7.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-50">
                <div className="py-12 lg:py-20 px-8">
                  <img
                    className="mx-auto"
                    src="zanrly-assets/brands/brand5.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full sm:w-1/3">
                <div className="py-12 lg:py-20 px-8">
                  <img
                    className="mx-auto"
                    src="zanrly-assets/brands/brand6.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SPONSORS SECTION */}
      {/* CTA SECTION */}
      <section className="py-10 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="py-16 px-8 text-center rounded-3xl bg-red-600">
            <div className="md:max-w-lg mx-auto">
              <h2 className="font-heading mb-6 text-4xl md:text-5xl text-white font-black tracking-tight">
                Invest in a better way to work online.
              </h2>
              <p className="mb-10 text-xl font-bold text-gray-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                venenatis volutpat velit, quis iaculis velit bibendum a.
                Maecenas accumsan fermentum nisl.
              </p>
              <div className="flex flex-wrap justify-center -m-2 mb-4">
                <div className="w-auto p-2">
                  <a
                    className="block w-full px-8 py-3.5 text-lg text-center font-bold focus:ring-4 focus:ring-gray-600 rounded-full hover:bg-gray-300 text-black bg-gray-100"
                    href="#"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA SECTION */}
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
      <section className="pt-10 pb-16 bg-gray-100 overflow-hidden">
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
      </section>
      {/* PREVIOUS HACKATHONS SECTION */}
      {/* FAQs SECTION */}
      <section className="py-10 bg-gray-50 overflow-hidden">
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
      </section>
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
                <p className="md:max-w-md text-gray-500 font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Malesuada tellus vestibulum, commodo pulvinar.
                </p>
              </div>
              <div className="mb-6 p-10 bg-gray-100 border border-gray-100 rounded-3xl">
                <div className="flex flex-wrap -m-3 mb-3">
                  <div className="w-auto p-3">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white rounded-xl">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.666 21.3334C18.666 23.6934 17.6393 25.8267 15.9993 27.2801C14.586 28.5601 12.7193 29.3334 10.666 29.3334C6.25268 29.3334 2.66602 25.7467 2.66602 21.3334C2.66602 18.6338 4.01797 16.2419 6.07321 14.7965C6.40413 14.5638 6.85175 14.723 7.03033 15.086C8.28888 17.6443 10.6049 19.56 13.3593 20.3067C14.1993 20.5467 15.0793 20.6667 15.9993 20.6667C16.649 20.6667 17.2713 20.6051 17.8759 20.4917C18.2604 20.4196 18.6431 20.666 18.66 21.0568C18.664 21.1495 18.666 21.2419 18.666 21.3334Z"
                          fill="#3B82F6"
                        ></path>
                        <path
                          d="M24 10.6666C24 11.7066 23.8 12.7066 23.44 13.6133C22.52 15.9333 20.5467 17.72 18.1067 18.3866C17.44 18.5733 16.7333 18.6666 16 18.6666C15.2667 18.6666 14.56 18.5733 13.8933 18.3866C11.4533 17.72 9.48 15.9333 8.56 13.6133C8.2 12.7066 8 11.7066 8 10.6666C8 6.25329 11.5867 2.66663 16 2.66663C20.4133 2.66663 24 6.25329 24 10.6666Z"
                          fill="#3B82F6"
                        ></path>
                        <path
                          d="M29.3327 21.3334C29.3327 25.7467 25.746 29.3334 21.3327 29.3334C20.34 29.3334 19.3851 29.1524 18.5075 28.8188C18.0826 28.6573 18.0033 28.1135 18.2991 27.7683C19.8218 25.9918 20.666 23.7147 20.666 21.3334C20.666 20.8801 20.626 20.4267 20.5593 20.0001V20.0001C20.5197 19.7541 20.6452 19.5123 20.8631 19.3917C22.6286 18.4143 24.0702 16.9168 24.9687 15.0871C25.1472 14.7237 25.5951 14.5641 25.9263 14.797C27.9811 16.2425 29.3327 18.6341 29.3327 21.3334Z"
                          fill="#3B82F6"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 p-3">
                    <p className="text-gray-500 font-bold">Address</p>
                    <h3 className="font-heading text-xl text-gray-900 font-black">
                      380 St Killda Road, Mellbourne VIC 3004, Australia
                    </h3>
                  </div>
                </div>
                <iframe
                  className="w-full h-96 rounded-3xl"
                  src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                ></iframe>
              </div>
              <div className="flex flex-wrap -m-4">
                <div className="w-full md:w-1/2 p-4">
                  <div className="p-10 h-full bg-gray-100 border border-gray-100 rounded-3xl">
                    <div className="flex flex-wrap -m-3">
                      <div className="w-auto p-3">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white rounded-xl">
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.666 21.3334C18.666 23.6934 17.6393 25.8267 15.9993 27.2801C14.586 28.5601 12.7193 29.3334 10.666 29.3334C6.25268 29.3334 2.66602 25.7467 2.66602 21.3334C2.66602 18.6338 4.01797 16.2419 6.07321 14.7965C6.40413 14.5638 6.85175 14.723 7.03033 15.086C8.28888 17.6443 10.6049 19.56 13.3593 20.3067C14.1993 20.5467 15.0793 20.6667 15.9993 20.6667C16.649 20.6667 17.2713 20.6051 17.8759 20.4917C18.2604 20.4196 18.6431 20.666 18.66 21.0568C18.664 21.1495 18.666 21.2419 18.666 21.3334Z"
                              fill="#3B82F6"
                            ></path>
                            <path
                              d="M24 10.6666C24 11.7066 23.8 12.7066 23.44 13.6133C22.52 15.9333 20.5467 17.72 18.1067 18.3866C17.44 18.5733 16.7333 18.6666 16 18.6666C15.2667 18.6666 14.56 18.5733 13.8933 18.3866C11.4533 17.72 9.48 15.9333 8.56 13.6133C8.2 12.7066 8 11.7066 8 10.6666C8 6.25329 11.5867 2.66663 16 2.66663C20.4133 2.66663 24 6.25329 24 10.6666Z"
                              fill="#3B82F6"
                            ></path>
                            <path
                              d="M29.3327 21.3334C29.3327 25.7467 25.746 29.3334 21.3327 29.3334C20.34 29.3334 19.3851 29.1524 18.5075 28.8188C18.0826 28.6573 18.0033 28.1135 18.2991 27.7683C19.8218 25.9918 20.666 23.7147 20.666 21.3334C20.666 20.8801 20.626 20.4267 20.5593 20.0001V20.0001C20.5197 19.7541 20.6452 19.5123 20.8631 19.3917C22.6286 18.4143 24.0702 16.9168 24.9687 15.0871C25.1472 14.7237 25.5951 14.5641 25.9263 14.797C27.9811 16.2425 29.3327 18.6341 29.3327 21.3334Z"
                              fill="#3B82F6"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 p-3">
                        <p className="text-gray-500 font-bold">Email</p>
                        <h3 className="font-heading text-xl text-gray-900 font-black">
                          support@zanrly.com
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <div className="p-10 h-full bg-gray-100 border border-gray-100 rounded-3xl">
                    <div className="flex flex-wrap -m-3">
                      <div className="w-auto p-3">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white rounded-xl">
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.666 21.3334C18.666 23.6934 17.6393 25.8267 15.9993 27.2801C14.586 28.5601 12.7193 29.3334 10.666 29.3334C6.25268 29.3334 2.66602 25.7467 2.66602 21.3334C2.66602 18.6338 4.01797 16.2419 6.07321 14.7965C6.40413 14.5638 6.85175 14.723 7.03033 15.086C8.28888 17.6443 10.6049 19.56 13.3593 20.3067C14.1993 20.5467 15.0793 20.6667 15.9993 20.6667C16.649 20.6667 17.2713 20.6051 17.8759 20.4917C18.2604 20.4196 18.6431 20.666 18.66 21.0568C18.664 21.1495 18.666 21.2419 18.666 21.3334Z"
                              fill="#3B82F6"
                            ></path>
                            <path
                              d="M24 10.6666C24 11.7066 23.8 12.7066 23.44 13.6133C22.52 15.9333 20.5467 17.72 18.1067 18.3866C17.44 18.5733 16.7333 18.6666 16 18.6666C15.2667 18.6666 14.56 18.5733 13.8933 18.3866C11.4533 17.72 9.48 15.9333 8.56 13.6133C8.2 12.7066 8 11.7066 8 10.6666C8 6.25329 11.5867 2.66663 16 2.66663C20.4133 2.66663 24 6.25329 24 10.6666Z"
                              fill="#3B82F6"
                            ></path>
                            <path
                              d="M29.3327 21.3334C29.3327 25.7467 25.746 29.3334 21.3327 29.3334C20.34 29.3334 19.3851 29.1524 18.5075 28.8188C18.0826 28.6573 18.0033 28.1135 18.2991 27.7683C19.8218 25.9918 20.666 23.7147 20.666 21.3334C20.666 20.8801 20.626 20.4267 20.5593 20.0001V20.0001C20.5197 19.7541 20.6452 19.5123 20.8631 19.3917C22.6286 18.4143 24.0702 16.9168 24.9687 15.0871C25.1472 14.7237 25.5951 14.5641 25.9263 14.797C27.9811 16.2425 29.3327 18.6341 29.3327 21.3334Z"
                              fill="#3B82F6"
                            ></path>
                          </svg>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CONTACT US SECTION */}

      {/* // FOOTER SECTION */}

      <section className="py-10 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="py-16 px-8 mb-8 bg-white rounded-3xl">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap items-center justify-between -m-4">
                <div className="w-auto p-4">
                  <a className="inline-block" href="#">
                    <img
                      src="assets/seneca-hackathon-logo.png"
                      width="200"
                      alt=""
                    />
                  </a>
                </div>
                {/* <div className="w-auto p-4">
                  <ul className="-m-6">
                    <li className="inline-flex p-6">
                      <a
                        className="inline-block text-gray-500 hover:text-gray-600 font-bold"
                        href="#"
                      >
                        Products
                      </a>
                    </li>
                    <li className="inline-flex p-6">
                      <a
                        className="inline-block text-gray-500 hover:text-gray-600 font-bold"
                        href="#"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="inline-flex p-6">
                      <a
                        className="inline-block text-gray-500 hover:text-gray-600 font-bold"
                        href="#"
                      >
                        Careers
                      </a>
                    </li>
                    <li className="inline-flex p-6">
                      <a
                        className="inline-block text-gray-500 hover:text-gray-600 font-bold"
                        href="#"
                      >
                        Portfolio
                      </a>
                    </li>
                    <li className="inline-flex p-6">
                      <a
                        className="inline-block text-gray-500 hover:text-gray-600 font-bold"
                        href="#"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div> */}
                <div className="w-auto p-4">
                  <div className="flex flex-wrap -m-4">
                    <div className="w-auto p-4">
                      <a className="block" href="#">
                        <img src="zanrly-assets/images/insta.svg" alt="" />
                      </a>
                    </div>
                    <div className="w-auto p-4">
                      <a className="block" href="#">
                        <img src="zanrly-assets/images/twitter.svg" alt="" />
                      </a>
                    </div>
                    <div className="w-auto p-4">
                      <a className="block" href="#">
                        <img src="zanrly-assets/images/footers/fb.svg" alt="" />
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
