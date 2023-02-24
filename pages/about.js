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
        <Footer/>
      {/* FOOTER SECTION */}
    </>
  );
}

export default About;
