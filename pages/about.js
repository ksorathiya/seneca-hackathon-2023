import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import FAQAccordion from "../components/FAQAccordion";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import ClickCount from "../components/ClickCount";
import styles from "../styles/home.module.css";
import Footer from "../components/footer";

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
              <p class="mb-4 text-5xl md:text-7xl leading-tight font-bold text-coolGray-800 text-left ">
                Welcome Message from the
              </p>
              <p class="mb-4 text-4xl md:text-5xl leading-tight font-bold text-red-700 text-left ">
                Organizers to the hackers
              </p>
              <p class="text-xl md:text-2xl leading-tight font-bold text-coolGray-800 text-left ">
                Welcome Message
              </p>
              <p class="mb-4 text-xl md:text-xl leading-tight font-light text-coolGray-800 text-justify ">
                Get ready for an unforgettable experience as we announce the return of the Hackathon! This student-focused innovation competition is the ultimate learning opportunity that will challenge you to think outside the box and create innovative solutions to real-world problems.
              </p>
              <p class="mb-4 text-xl md:text-xl leading-tight font-light text-coolGray-800 text-justify ">
                Gather your friends and colleagues from different backgrounds to collaborate and develop your problem-solving skills. Our technical experts and mentors will guide you every step of the way to ensure that you are ready for the ultimate presentation to our expert panel of investors, school representatives, and specialists.
              </p>
              <p class="mb-4 text-xl md:text-xl leading-tight font-light text-coolGray-800 text-justify ">
                Excitingly, the winning teams won't just walk away with amazing prizes, but will also be given consideration for investment opportunities.
              </p>
              <p class="mb-4 text-xl md:text-xl leading-tight font-light text-coolGray-800 text-justify ">
                This year, we're taking things to the next level and hosting the event in person at the incredible Seneca CITE Building. We can't wait to see you on May 5th and 6th for an unforgettable experience. Don't miss out on this opportunity to showcase your skills and make a difference in the world! 
              </p>
              <br></br>
              <span class="text-right text-base md:text-lg text-coolGray-400 font-bold ">
                2023 Thinking North Smart Cities Organizers
              </span>
              {/* <span class="text-base md:text-lg text-coolGray-400 font-medium">&mdash; John Doe, CEO &amp; Founder</span> */}
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT US CONTENT */}
      {/* // FOOTER SECTION */}

      <Footer/>

      {/* FOOTER SECTION */}
    </>
  );
}

export default About;
