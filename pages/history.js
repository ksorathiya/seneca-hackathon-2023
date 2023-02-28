import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Button from "../components/Button";
import ClickCount from "../components/ClickCount";
import styles from "../styles/home.module.css";
import Footer from "../components/footer";
import NavBar from "../components/NavBar";

function History(params){
 return (
  <>
        {/* // HERO SECTION */}
      
        <NavBar/> 

     {/* History CONTENT */}


<section class="py-10 bg-gray-50 overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="py-16 px-8 bg-grey rounded-3xl">
      <div class="max-w-7xl mx-auto"> 
        <div class="mb-12 md:max-w-4xl mx-auto text-center">
          <span class="inline-block mb-4 text-sm text-red-700 font-bold uppercase tracking-widest">History</span>
          <h2 class="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">Our Past Hackathons</h2>
          <p class="mb-4 text-xl text-gray-500 leading-tight font-medium text-coolGray-800 text-justify">This is our showcases which is full of innovative ideas from our previous hackathons. Here lies the themes, challenges, and teams behind these cutting-edge projects that solved complex problems. Explore this section for inspiration and to see the exciting world of our past hackathons!</p>
        </div>
        <div class="max-w-6xl mx-auto">
          <div class="flex flex-wrap -m-5 mb-10">
            <div class="w-full p-5">
              <div class="flex flex-wrap h-full bg-gray-100 overflow-hidden rounded-3xl">
                <div class="w-full md:w-1/2">
                  <img class="w-full h-full object-cover" src="/assets/digital-health-hackathon.jpeg" alt=""/>
                </div>
                <div class="flex-1">
                  <div class="md:max-w-lg p-10 h-full">
                    <div class="flex flex-col justify-between h-full">
                      <div class="flex-initial mb-8">
                        <a class="group inline-block mb-4" href="#">
                          <h3 class="font-heading text-2xl text-gray-900 hover:text-red-700 group-hover:underline font-black">Digital Health Hackathon</h3>
                        </a>
                        <p class="text-gray-500 text-base font-extralight text-justify">The Digital Health Hackathon was a 48-hour event where healthcare professionals, software developers, designers, and entrepreneurs collaborated to develop innovative digital solutions to healthcare challenges. Participants worked in teams to brainstorm, design, and develop their ideas, with support and mentorship from industry experts. At the end of the event, teams present their solutions to judges who evaluate them based on innovation, impact, and feasibility.</p>
                      </div>
                      <div class="flex-initial">
                        <div class="flex flex-wrap -m-2">
                          <div class="w-full md:w-auto p-2"><a class="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-gray-900 hover:bg-red-700 focus:ring-4 focus:ring-gray-600 rounded-full" href="#">Visit Hackathon Site</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full p-5">
              <div class="flex flex-wrap h-full bg-gray-100 overflow-hidden rounded-3xl">
                <div class="w-full md:w-1/2">
                  <img class="w-full h-full object-cover" src="/assets/sustainability-hackathon.jpeg" alt=""/>
                </div>
                <div class="flex-1">
                  <div class="md:max-w-lg p-10 h-full">
                    <div class="flex flex-col justify-between h-full">
                      <div class="flex-initial mb-8">
                        <a class="group inline-block mb-4" href="https://sustainability.senecahackathon.com/" target="_blank">
                          <h3 class="font-heading text-2xl text-gray-900 hover:text-red-700 group-hover:underline font-black">Sustainability Hackathon</h3>
                        </a>
                        <p class="text-gray-500 text-base font-extralight text-justify">The Seneca Sustainability Hackathon was a creative and collaborative event that brought together individuals with a passion for sustainability to generate innovative solutions to environmental challenges. Participants worked in teams to develop sustainable solutions that addressed a range of environmental issues, including climate change, waste reduction, and biodiversity conservation. The event provided a unique opportunity for participants to network, share ideas, and engage in hands-on problem-solving. Throughout the five-day competition, participants submitted their proposals in the form of videos, providing a brief summary of their experience. Only 37 teams out of 90 qualified for the first round, and after two more days of hard work and perfecting their pitches, 13 teams were chosen as winners for their particular category. The Seneca Sustainability Hackathon provided participants with a valuable opportunity to develop their skills, learn from industry experts, and contribute to meaningful change in the world.</p>
                      </div>
                      <div class="flex-initial">
                        <div class="flex flex-wrap -m-2">
                          <div class="w-full md:w-auto p-2"><a class="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-gray-900 hover:bg-red-700 focus:ring-4 focus:ring-gray-600 rounded-full" href="https://sustainability.senecahackathon.com/" target="_blank">Visit Hackathon Site</a></div>
                        </div>
                      </div>
                    </div>
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

     
     {/* ABOUT US CONTENT */}

      {/* // FOOTER SECTION */}

      <Footer/>

      {/* FOOTER SECTION */}
  </>
 )
}

export default History;