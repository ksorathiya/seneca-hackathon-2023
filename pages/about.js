import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import FAQAccordion from "../components/FAQAccordion";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import ClickCount from "../components/ClickCount";
import styles from "../styles/home.module.css";

function About(params) {
  return (
    <>
      {/* // HERO SECTION */}

      <NavBar />
      {/* ABOUT US CONTENT */}
      <section
        class="py-8 md:py-12 bg-coolGray-50"
        style={{
          "background-image":
            "url('flex-ui-assets/elements/pattern-light-big.svg'); background-repeat: no-repeat; background-position: center;",
        }}
      >
        <div class="container px-4 mx-auto">
          <div class="md:max-w-2xl mx-auto mb-12 text-center">
            <div class="flex items-center justify-center">
              <p class="inline-block text-red-500 font-medium">Hackathon</p>
              <span class="mx-1 text-green-500">&bull;</span>
              <p class="inline-block text-red-500 font-medium">2023</p>
            </div>
            <div class="flex items-center justify-center">
              <p class="inline-block text-red-500 font-medium">
                May 5th - May 6th
              </p>
            </div>
            <h2 class="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter">
              About Us
            </h2>
            {/* <p class="mb-6 text-lg md:text-xl font-medium text-coolGray-500">Join the brightest minds from across the globe and help solve real-world challenges in making cities smarter.</p> */}
            <div class="inline-block py-1 px-3 text-xs leading-5 text-red-500 font-medium uppercase bg-red-100 rounded-full shadow-sm">
              Seneca
            </div>
          </div>
          <div class="mb-10 mx-auto max-w-max overflow-hidden rounded-lg">
            <img src="/assets/about-us-image2.png" alt="" />
          </div>
          <div class="md:max-w-6xl mx-auto">
            {/* <p class="mb-8 pb-10 text-lg md:text-xl font-medium text-coolGray-500 border-b border-coolGray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.</p> */}
            {/* <h3 class="mb-4 text-2xl md:text-3xl font-semibold text-coolGray-800">Header 1</h3> */}
            {/* <p class="mb-4 text-base md:text-lg text-coolGray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.</p> */}
            <div class="mb-6 p-6 border-l-2 border-red-500">
              <p class="mb-4 text-xl md:text-2xl leading-tight font-medium text-coolGray-800 text-justify ">
                Smart Cities Hackathon is a student-focused innovation
                competition that offers a unique learning opportunity. It brings
                together students from various backgrounds to collaborate on
                real-world problems. In addition, it encourages and develops
                creative design thinking, entrepreneurship, and problem-solving
                skills. Technical experts and mentors assist the teams in
                getting ready for their presentation. The presentations will be
                judged by an expert panel of investors, school representatives,
                and specialists. Along with receiving prizes, the winning teams
                will be given consideration for investment opportunities. This
                year, we will host the event in person at Seneca CITE Building.
                We can't wait to see you on May 5th and 6th!!!!! All the
                best!!!!!
              </p>
              <br></br>
              <span class="text-right text-base md:text-lg text-coolGray-400 font-medium ">
                &mdash; 2023 ThinkingNorth Smart Cities
              </span>
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
                      src="assets/thinking-north-smart-cities-hackathon-logo.png"
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

export default About;
