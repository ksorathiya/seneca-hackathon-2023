import { useCallback, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import HackathonHero from "../components/HackathonHero";
import ChallengeSetCategories from "../components/ChallengeSetCategories";
import About from "../components/About";
import DesignJamHero from "../components/DesignJamHero";
import Timeline from "../components/Timeline";
import ImageGrid from "../components/ImageGrid";
import Foo from "../components/Button";
import ClickCount from "../components/ClickCount";
import styles from "../styles/home.module.css";

import Image from "next/image";
import Footer from "../components/footer";

function throwError() {
  console.log(
    // The function body() is not defined
    document.body()
  );
}

function Home() {
  return (
    <>
      <section className="pb-4 bg-white overflow-hidden">
        <NavBar />
      </section>

      <section className="pb-4 bg-gray-50 overflow-hidden">
        <HackathonHero />
      </section>

      <section class="pb-4 bg-gray-50 overflow-hidden">
        <About />
      </section>

      <section className="py-4 bg-gray-50 overflow-hidden">
        <Timeline />
      </section>
      <section className="py-4 bg-gray-50 overflow-hidden">
        <ChallengeSetCategories />
      </section>

      {/* SPONSORS SECTION */}
      <section className="py-4 bg-gray-50 overflow-hidden">
        {/* CTA SECTION */}

        <div className="container mx-auto px-4">
          <h2 className="font-heading m-10 text-4xl md:text-5xl text-gray-900 font-black tracking-tight text-center">
            Our Sponsors
          </h2>
          <div className="py-10 mb-10 px-8 md:px-10 bg-red-700 overflow-hidden rounded-3xl">
            <div className="flex flex-wrap items-center -m-4">
              <div className="w-full md:w-1/5 p-4 items-left">
                <div className="md:max-w-md md:mr-auto">
                  <div className="flex flex-wrap justify-center -m-2">
                    {/* <span className="inline-block mb-3 text-sm text-blue-500 font-bold uppercase tracking-widest">Newsletter</span> */}
                    {/* <h2 className="font-heading text-4xl md:text-5xl text-gray-900 font-black tracking-tight">Join to get exclusive contents for free.</h2> */}
                    <img
                      src="/assets/thinkingnorthlogo.png"
                      width="300"
                      alt=""
                      style={{
                        "background-color": "white; border-radius:10%",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-4/5 p-4">
                <div className="w-full lg:flex-1 p-2">
                  {/* <input className="px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-white outline-none focus:ring-4 focus:ring-blue-200 placeholder-gray-500 rounded-full" id="newsletterLightInput3-1" type="text" placeholder="Email address"/> */}
                  <h2 className="font-heading text-4xl text-center md:text-left md:text-5xl text-white font-black">
                    Thinking North Investors Group, <br /> <br />A big shoutout
                    to our title sponsor.
                  </h2>
                </div>
                {/* <br></br>
              <div className="w-full lg:w-auto p-2">
                <div className="flex flex-wrap justify-center -m-2">
                  <div className="w-full lg:w-auto p-2"><a className="block w-full px-8 py-3.5 text-lg text-center text-white font-bold bg-gray-800 hover:bg-red-400 focus:ring-4 focus:ring-gray-800 rounded-full" href="#">Get Connected</a></div>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="container mx-auto px-4">
          <div className="bg-white border border-gray-50 rounded-3xl">
            <div className="flex flex-wrap items-center">
              <div className="w-full sm:w-1/3 border-b sm:border-r border-gray-50">
                <div className="py-12 lg:py-20 px-8">
                  <a href="https://www.yorku.ca/" target="_blank">
                    <img
                      className="mx-auto"
                      src="https://static.shuffle.dev/uploads/files/32/32cc320452c9e2effc7f8e2f8a8bbd93f7d6bf5d/yu-logo-header-1.png"
                      width="300px"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="w-full sm:w-1/3 border-b border-gray-50">
                <div className="py-12 lg:py-20 px-8">
                  <a href="https://thinkingnorth.com/" target="_blank">
                    <img
                      class="mx-auto"
                      src="assets/thinkingnorthlogo.png"
                      width="300px"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-50">
                <div class="py-12 lg:py-20 px-8">
                  <a href="https://mircom.com/" target="_blank">
                    <img
                      class="mx-auto"
                      src="https://mircom.com/wp-content/uploads/logo.png"
                      width="300px"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="w-full sm:w-1/3 border-b sm:border-r border-gray-50">
                <div className="py-12 lg:py-20 px-8">
                  <a
                    href="https://www.senecacollege.ca/alumni.html"
                    target="_blank"
                  >
                    <img
                      className="mx-auto"
                      src="https://static.shuffle.dev/uploads/files/32/32cc320452c9e2effc7f8e2f8a8bbd93f7d6bf5d/file-img-Alumni-logo-RGB-Primary-1.png"
                      width="300px"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-50">
                <div className="py-12 lg:py-20 px-8">
                  <a href="https://cpos.com/" target="_blank">
                    <img
                      className="mx-auto"
                      src="https://static.shuffle.dev/uploads/files/32/32cc320452c9e2effc7f8e2f8a8bbd93f7d6bf5d/Logo-1.svg"
                      width="300px"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-50">
                <div className="py-12 lg:py-20 px-8">
                  <a href="https://getoppos.com/" target="_blank">
                    <img
                      className="mx-auto"
                      src="https://static.shuffle.dev/uploads/files/32/32cc320452c9e2effc7f8e2f8a8bbd93f7d6bf5d/Oppos20Logo20-20actual20black-1-at-2x.png"
                      width="300px"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="w-full sm:w-1/3">
                <div className="py-12 lg:py-20 px-8">
                  <a href="https://www.ridealike.com/" target="_blank">
                    <img
                      className="mx-auto"
                      src="https://static.shuffle.dev/uploads/files/32/32cc320452c9e2effc7f8e2f8a8bbd93f7d6bf5d/RideAlike.png"
                      width="300px"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="w-full sm:w-1/3 border-b sm:border-r border-gray-50">
                <div class="py-12 lg:py-20 px-8">
                  <a href="https://raceatlas.com/" target="_blank">
                    <img
                      class="mx-auto"
                      src="assets/raceAtlasLogo.png"
                      width="400px"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="w-full sm:w-1/3 border-b sm:border-r border-gray-50">
                <div className="py-12 lg:py-20 px-8">
                  <a href="https://inheritchain.com/" target="_blank">
                    <img
                      className="mx-auto"
                      src="https://static.shuffle.dev/uploads/files/32/32cc320452c9e2effc7f8e2f8a8bbd93f7d6bf5d/inheritchainDK-web.png"
                      width="300px"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="w-full sm:w-1/3 border-b border-gray-50">
                <div className="py-12 lg:py-20 px-8 bg-purple-900">
                  <a href="https://trinetra.ca/" target="_blank">
                    <img
                      className="mx-auto"
                      src="https://static.shuffle.dev/uploads/files/32/32cc320452c9e2effc7f8e2f8a8bbd93f7d6bf5d/Trinetra-Logo-White-1536x477.png"
                      width="300px"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-50">
                <div className="py-12 lg:py-20 px-8">
                  <a href="https://innovatecities.com/" target="_blank">
                    <img
                      className="mx-auto"
                      src="https://innovatecities.com/wp-content/uploads/2021/04/IC_Logo_CL.png"
                      width="300px"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-50">
                <div className="py-12 lg:py-20 px-8">
                  <a href="https://simplystech.com/" target="_blank">
                    <img
                      className="mx-auto"
                      src="/assets/simplystech-logo.svg"
                      width="300px"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-50">
                <div className="py-12 lg:py-20 px-8">
                  <a href="https://www.vaughan.ca/" target="_blank">
                    <img
                      className="mx-auto"
                      src="https://www.vaughan.ca/themes/custom/city_of_vaughan/images/logo.svg"
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

      <section className="p-20 bg-gray-900 overflow-hidden">
        <h2 className="font-heading mb-10 text-4xl md:text-5xl text-white font-black tracking-tight text-center">
          The Organizing Committee
        </h2>
        <ImageGrid />
      </section>

      {/* INSTAFEED */}
      <section className="py-4 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="py-16 px-8 md:px-16 insta-background overflow-hidden rounded-3xl">
            <div className="flex flex-wrap items-center -m-4">
              <div className="w-full md:w-1/2 p-4">
                <h2 className="font-heading text-4xl md:text-5xl text-white font-black ">
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
              <div className="w-full md:w-1/2 p-4">
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
                    Praises for hackathons organized by our team
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

      {/* 

<section className="py-20">
  <div className="container px-4 mx-auto">
    <div className="max-w-4xl mx-auto">
      <ul className="space-y-4">
        <li className="px-6 py-8 bg-gray-50 rounded-lg">
          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="group w-full flex justify-between items-center text-left font-bold font-heading" type="button">
            <span className="group-hover:text-red-500 text-lg font-bold font-heading">Fusce eget nunc et libero accumsan rutrum quis nec lectus?</span>
            <svg className="flex-shrink-0 w-4 h-4 ml-2 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
            </svg>
          </button>
          <div id="dropdown" className="dropdown-item max-w-2xl mt-2 text-lg text-gray-500 leading-loose"  data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
          <p id="dropdown" aria-labelledby="dropdownDefaultButton">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligula urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.</p></div>
        </li>
        <script src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"></script>
        <li className="px-6 py-8 bg-gray-50 rounded-lg">
          <button className="group w-full flex justify-between items-center text-left font-bold font-heading">
            <span className="group-hover:text-red-500 text-lg font-bold font-heading">Donec sed leo sit amet ante ornare laoreet in quis est?</span>
            <svg className="flex-shrink-0 w-4 h-4 ml-2 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <p className="hidden max-w-2xl mt-2 text-lg text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel orci gravida, hendrerit enim non, gravida turpis. Praesent non lectus porttitor, scelerisque nulla nec, ornare neque. Integer massa libero, ornare ut leo nec, scelerisque rutrum elit. Morbi et massa id ipsum lobortis rhoncus. Aenean sit amet porta nulla, quis varius risus. Suspendisse ultrices ut lectus non laoreet. Etiam ornare laoreet tortor quis porttitor. Suspendisse tempus erat non dui volutpat eleifend.</p>
        </li>
        <li className="px-6 py-8 bg-gray-50 rounded-lg">
          <button className="group w-full flex justify-between items-center text-left font-bold font-heading">
            <span className="group-hover:text-red-500 text-lg font-bold font-heading">Mauris vitae ex ut lectus cursus ornare?</span>
            <svg className="flex-shrink-0 w-4 h-4 ml-2 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <p className="hidden max-w-2xl mt-2 text-lg text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel orci gravida, hendrerit enim non, gravida turpis. Praesent non lectus porttitor, scelerisque nulla nec, ornare neque. Integer massa libero, ornare ut leo nec, scelerisque rutrum elit. Morbi et massa id ipsum lobortis rhoncus. Aenean sit amet porta nulla, quis varius risus. Suspendisse ultrices ut lectus non laoreet. Etiam ornare laoreet tortor quis porttitor. Suspendisse tempus erat non dui volutpat eleifend.</p>
        </li>
        <li className="px-6 py-8 bg-gray-50 rounded-lg">
          <button className="group w-full flex justify-between items-center text-left">
            <span className="group-hover:text-red-500 text-lg font-bold font-heading">Nam consequat, augue sed rutrum faucibus?</span>
            <svg className="flex-shrink-0 w-4 h-4 ml-2 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <p className="hidden max-w-2xl mt-2 text-lg text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligula urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.</p>
        </li>
        <li className="px-6 py-8 bg-gray-50 rounded-lg">
          <button className="group w-full flex justify-between items-center text-left">
            <span className="group-hover:text-red-500 text-lg font-bold font-heading">Cras at ante non ligula pharetra elementum?</span>
            <svg className="flex-shrink-0 w-4 h-4 ml-2 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <p className="hidden max-w-2xl mt-2 text-lg text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligula urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.</p>
        </li>
      </ul>
    </div>
  </div>
</section> */}
      {/* FAQs SECTION */}
      {/* CONTACT US SECTION */}
      <section className="py-4 bg-gray-50 overflow-hidden">
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
                            src="/assets/mailseneca.png"
                            width="40"
                            height="40"
                          />
                        </div>
                      </div>
                      <div className="flex-1 p-3">
                        <p className="text-gray-500 font-bold">Email</p>
                        <h3 className="font-heading md:text-l text-sm text-gray-900 font-black">
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

      {/* // FOOTER SECTION */}

      <Footer />

      {/* FOOTER SECTION */}
    </>
  );
}

export default Home;
