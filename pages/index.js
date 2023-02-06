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
      {/* DESIGN JAM SECTION 1 */}
      <section class="py-10 bg-gray-50 overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="py-16 px-8 bg-white rounded-3xl">
            <div class="max-w-7xl mx-auto">
              <div class="flex flex-wrap -m-8 mb-10">
                <div class="w-full md:w-1/2 p-8">
                  <div class="md:max-w-lg">
                    <h2 class="font-heading mb-6 text-4xl md:text-5xl text-gray-900 font-black tracking-tight">
                      Design Jam by York University
                    </h2>
                    <p class="mb-8 text-xl font-bold">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis venenatis volutpat velit, quis iaculis velit bibendum
                      a. Maecenas accumsan fermentum nisl.
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
                    src="zanrly-assets/images/features/invest.png"
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
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z"
                              fill="#3B82F6"
                            ></path>
                            <path
                              d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                              fill="#3B82F6"
                            ></path>
                            <path
                              d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z"
                              fill="#3B82F6"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div class="flex-1 p-3">
                        <h3 class="font-heading mb-2 text-xl text-gray-900 font-black">
                          Lorem ipsum dolores
                        </h3>
                        <p class="text-sm text-gray-700 font-bold">
                          Lorem ipsum dolor sit amet sectetur adip elit donec.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/3 p-8">
                    <div class="flex flex-wrap -m-3">
                      <div class="w-auto md:w-full lg:w-auto p-3">
                        <div class="flex items-center justify-center w-12 h-12 bg-white rounded-xl">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z"
                              fill="#3B82F6"
                            ></path>
                            <path
                              d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                              fill="#3B82F6"
                            ></path>
                            <path
                              d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z"
                              fill="#3B82F6"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div class="flex-1 p-3">
                        <h3 class="font-heading mb-2 text-xl text-gray-900 font-black">
                          Lorem ipsum dolores
                        </h3>
                        <p class="text-sm text-gray-700 font-bold">
                          Lorem ipsum dolor sit amet sectetur adip elit donec.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-1/3 p-8">
                    <div class="flex flex-wrap -m-3">
                      <div class="w-auto md:w-full lg:w-auto p-3">
                        <div class="flex items-center justify-center w-12 h-12 bg-white rounded-xl">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z"
                              fill="#3B82F6"
                            ></path>
                            <path
                              d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                              fill="#3B82F6"
                            ></path>
                            <path
                              d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z"
                              fill="#3B82F6"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div class="flex-1 p-3">
                        <h3 class="font-heading mb-2 text-xl text-gray-900 font-black">
                          Lorem ipsum dolores
                        </h3>
                        <p class="text-sm text-gray-700 font-bold">
                          Lorem ipsum dolor sit amet sectetur adip elit donec.
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
      {/* DESIGN JAM SECTION 2 */}
      {/* DESIGN JAM SECTION 3 */}
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
