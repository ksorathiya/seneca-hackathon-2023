import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Button from "../components/Button";
import ClickCount from "../components/ClickCount";
import styles from "../styles/home.module.css";

function Contact(params){
 return (
  <>
        {/* // HERO SECTION */}
      
<nav class="relative px-10 py-8 bg-transparent">
  <div class="flex justify-between items-center">
    
    <div className="w-auto p-2">
      <a className="inline-block" href="/#">
        <img src="/assets/thinkingnorthsmartcitieslogosec.png" width="250" alt="" />
      </a>
    </div>

    <div class="lg:hidden">
      <button class="block navbar-burger text-red-500 hover:text-red-700 focus:outline-none">
        <svg class="h-4 w-4" fill="currentColor " viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Mobile menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
    </div>
    <ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex items-center w-auto space-x-12">
      <li><a class="text-sm hover:text-red-700 font-medium" href="/about">About</a></li>
      <li><a class="text-sm hover:text-red-700 font-medium" href="#">Timeline</a></li>
      <li><a class="text-sm hover:text-red-700 font-medium" href="#">History</a></li>
      <li><a class="text-sm hover:text-red-700 font-medium" href="#">Contact Us</a></li>
      <li><a class="text-sm hover:text-red-700 font-medium" href="#">Our Team</a></li>
    </ul>
    <ul class="hidden lg:flex items-center w-auto">
      <li><a class="block px-5 py-3 text-sm bg-red-600 hover:bg-red-600 text-white font-semibold border border-red-500 hover:border-red-600 rounded-full transition duration-200" href="/#">May 5th - 6th, 2023</a></li>
    </ul>
  </div>
  <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
    <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
    <nav class="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
      <div class="flex items-center mb-12">
        
      <div className="w-auto p-2">
      <a className="inline-block" href="/#">
        <img src="/assets/thinkingnorthsmartcitieslogosec.png" width="250" alt="" />
      </a>
      </div>
        <button class="navbar-close">
          <svg class="h-6 w-6 cursor-pointer hover:text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div>
        <ul>
          <li class="mb-1"><a class="block p-4 text-lg font-semibold hover:bg-red-50 hover:text-red-500 rounded" href="/about">About</a></li>
          <li class="mb-1"><a class="block p-4 text-lg font-semibold hover:bg-red-50 hover:text-red-500 rounded" href="#">Timeline</a></li>
          <li class="mb-1"><a class="block p-4 text-lg font-semibold hover:bg-red-50 hover:text-red-500 rounded" href="#">History</a></li>
          <li class="mb-1"><a class="block p-4 text-lg font-semibold hover:bg-red-50 hover:text-red-500 rounded" href="#">Contact Us</a></li>
          <li class="mb-1"><a class="block p-4 text-lg font-semibold hover:bg-red-50 hover:text-red-500 rounded" href="#">Our Team</a></li>
        </ul>
      </div>
      <div class="mt-auto">
        <div class="pt-6"><a class="block px-5 py-3 text-sm text-center font-semibold text-red-600 hover:text-white hover:bg-red-600 border border-red-600 hover:border-red-600 rounded transition duration-200" href="/#">May 5th - 6th, 2023</a></div>
        <p class="mt-6 mb-4 text-sm text-center text-gray-500">
          <span>&copy; 2022 All rights reserved.</span>
        </p>
      </div>
    </nav>
  </div>
</nav>  

{/* CONTACT US FORM */}


<section class="py-10 bg-white overflow-hidden">
  <div class="container mx-auto px-4">
    <div class="py-16 px-8 bg-gray-100 overflow-hidden border border-gray-100 rounded-3xl">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="w-full md:w-1/2 p-4">
            <div class="flex flex-col justify-between h-full">
              <div class="mb-10 md:max-w-md"><span class="inline-block mb-4 text-sm text-blue-500 font-bold uppercase tracking-widest">Contact Us</span>
                <h2 class="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">Let&rsquo;s with us!</h2>
                <p class="text-gray-500 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada tellus vestibulum, commodo pulvinar.</p>
              </div>
              <div class="flex flex-wrap -m-5">
                <div class="w-full p-5">
                  <div class="p-10 h-full bg-white border border-gray-100 rounded-3xl">
                    <div class="flex flex-wrap -m-3">
                      <div class="w-auto p-3">
                        <div class="flex items-center justify-center w-16 h-16 mx-auto bg-gray-100 rounded-xl">
                          <svg width="32" height="32" viewbox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.666 21.3334C18.666 23.6934 17.6393 25.8267 15.9993 27.2801C14.586 28.5601 12.7193 29.3334 10.666 29.3334C6.25268 29.3334 2.66602 25.7467 2.66602 21.3334C2.66602 18.6338 4.01797 16.2419 6.07321 14.7965C6.40413 14.5638 6.85175 14.723 7.03033 15.086C8.28888 17.6443 10.6049 19.56 13.3593 20.3067C14.1993 20.5467 15.0793 20.6667 15.9993 20.6667C16.649 20.6667 17.2713 20.6051 17.8759 20.4917C18.2604 20.4196 18.6431 20.666 18.66 21.0568C18.664 21.1495 18.666 21.2419 18.666 21.3334Z" fill="#3B82F6"></path>
                            <path d="M24 10.6666C24 11.7066 23.8 12.7066 23.44 13.6133C22.52 15.9333 20.5467 17.72 18.1067 18.3866C17.44 18.5733 16.7333 18.6666 16 18.6666C15.2667 18.6666 14.56 18.5733 13.8933 18.3866C11.4533 17.72 9.48 15.9333 8.56 13.6133C8.2 12.7066 8 11.7066 8 10.6666C8 6.25329 11.5867 2.66663 16 2.66663C20.4133 2.66663 24 6.25329 24 10.6666Z" fill="#3B82F6"></path>
                            <path d="M29.3327 21.3334C29.3327 25.7467 25.746 29.3334 21.3327 29.3334C20.34 29.3334 19.3851 29.1524 18.5075 28.8188C18.0826 28.6573 18.0033 28.1135 18.2991 27.7683C19.8218 25.9918 20.666 23.7147 20.666 21.3334C20.666 20.8801 20.626 20.4267 20.5593 20.0001V20.0001C20.5197 19.7541 20.6452 19.5123 20.8631 19.3917C22.6286 18.4143 24.0702 16.9168 24.9687 15.0871C25.1472 14.7237 25.5951 14.5641 25.9263 14.797C27.9811 16.2425 29.3327 18.6341 29.3327 21.3334Z" fill="#3B82F6"></path>
                          </svg>
                        </div>
                      </div>
                      <div class="flex-1 p-3">
                        <p class="text-gray-500 font-bold">Address</p>
                        <h3 class="font-heading text-xl text-gray-900 font-black">380 St Killda Road, Mellbourne 3004, Australia</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full p-5">
                  <div class="p-10 h-full bg-white border border-gray-100 rounded-3xl">
                    <div class="flex flex-wrap -m-3">
                      <div class="w-auto p-3">
                        <div class="flex items-center justify-center w-16 h-16 mx-auto bg-gray-100 rounded-xl">
                          <svg width="32" height="32" viewbox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.666 21.3334C18.666 23.6934 17.6393 25.8267 15.9993 27.2801C14.586 28.5601 12.7193 29.3334 10.666 29.3334C6.25268 29.3334 2.66602 25.7467 2.66602 21.3334C2.66602 18.6338 4.01797 16.2419 6.07321 14.7965C6.40413 14.5638 6.85175 14.723 7.03033 15.086C8.28888 17.6443 10.6049 19.56 13.3593 20.3067C14.1993 20.5467 15.0793 20.6667 15.9993 20.6667C16.649 20.6667 17.2713 20.6051 17.8759 20.4917C18.2604 20.4196 18.6431 20.666 18.66 21.0568C18.664 21.1495 18.666 21.2419 18.666 21.3334Z" fill="#3B82F6"></path>
                            <path d="M24 10.6666C24 11.7066 23.8 12.7066 23.44 13.6133C22.52 15.9333 20.5467 17.72 18.1067 18.3866C17.44 18.5733 16.7333 18.6666 16 18.6666C15.2667 18.6666 14.56 18.5733 13.8933 18.3866C11.4533 17.72 9.48 15.9333 8.56 13.6133C8.2 12.7066 8 11.7066 8 10.6666C8 6.25329 11.5867 2.66663 16 2.66663C20.4133 2.66663 24 6.25329 24 10.6666Z" fill="#3B82F6"></path>
                            <path d="M29.3327 21.3334C29.3327 25.7467 25.746 29.3334 21.3327 29.3334C20.34 29.3334 19.3851 29.1524 18.5075 28.8188C18.0826 28.6573 18.0033 28.1135 18.2991 27.7683C19.8218 25.9918 20.666 23.7147 20.666 21.3334C20.666 20.8801 20.626 20.4267 20.5593 20.0001V20.0001C20.5197 19.7541 20.6452 19.5123 20.8631 19.3917C22.6286 18.4143 24.0702 16.9168 24.9687 15.0871C25.1472 14.7237 25.5951 14.5641 25.9263 14.797C27.9811 16.2425 29.3327 18.6341 29.3327 21.3334Z" fill="#3B82F6"></path>
                          </svg>
                        </div>
                      </div>
                      <div class="flex-1 p-3">
                        <p class="text-gray-500 font-bold">Phone</p>
                        <h3 class="font-heading text-xl text-gray-900 font-black">+1 (123) 456 - 790</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full p-5">
                  <div class="p-10 h-full bg-white border border-gray-100 rounded-3xl">
                    <div class="flex flex-wrap -m-3">
                      <div class="w-auto p-3">
                        <div class="flex items-center justify-center w-16 h-16 mx-auto bg-gray-100 rounded-xl">
                          <svg width="32" height="32" viewbox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.666 21.3334C18.666 23.6934 17.6393 25.8267 15.9993 27.2801C14.586 28.5601 12.7193 29.3334 10.666 29.3334C6.25268 29.3334 2.66602 25.7467 2.66602 21.3334C2.66602 18.6338 4.01797 16.2419 6.07321 14.7965C6.40413 14.5638 6.85175 14.723 7.03033 15.086C8.28888 17.6443 10.6049 19.56 13.3593 20.3067C14.1993 20.5467 15.0793 20.6667 15.9993 20.6667C16.649 20.6667 17.2713 20.6051 17.8759 20.4917C18.2604 20.4196 18.6431 20.666 18.66 21.0568C18.664 21.1495 18.666 21.2419 18.666 21.3334Z" fill="#3B82F6"></path>
                            <path d="M24 10.6666C24 11.7066 23.8 12.7066 23.44 13.6133C22.52 15.9333 20.5467 17.72 18.1067 18.3866C17.44 18.5733 16.7333 18.6666 16 18.6666C15.2667 18.6666 14.56 18.5733 13.8933 18.3866C11.4533 17.72 9.48 15.9333 8.56 13.6133C8.2 12.7066 8 11.7066 8 10.6666C8 6.25329 11.5867 2.66663 16 2.66663C20.4133 2.66663 24 6.25329 24 10.6666Z" fill="#3B82F6"></path>
                            <path d="M29.3327 21.3334C29.3327 25.7467 25.746 29.3334 21.3327 29.3334C20.34 29.3334 19.3851 29.1524 18.5075 28.8188C18.0826 28.6573 18.0033 28.1135 18.2991 27.7683C19.8218 25.9918 20.666 23.7147 20.666 21.3334C20.666 20.8801 20.626 20.4267 20.5593 20.0001V20.0001C20.5197 19.7541 20.6452 19.5123 20.8631 19.3917C22.6286 18.4143 24.0702 16.9168 24.9687 15.0871C25.1472 14.7237 25.5951 14.5641 25.9263 14.797C27.9811 16.2425 29.3327 18.6341 29.3327 21.3334Z" fill="#3B82F6"></path>
                          </svg>
                        </div>
                      </div>
                      <div class="flex-1 p-3">
                        <p class="text-gray-500 font-bold">Email</p>
                        <h3 class="font-heading text-xl text-gray-900 font-black">support@zanrly.com</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 p-4">
            <form class="p-10 bg-white border border-gray-100 rounded-3xl">
              <div class="flex flex-wrap -m-3 mb-3">
                <div class="w-full p-3">
                  <label class="block mb-2 text-sm text-gray-500 font-bold" for="contactLightInput4-1">Full Name</label>
                  <input class="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-100 placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-full" id="contactLightInput4-1" type="text" placeholder="Enter your name"/>
                </div>
                <div class="w-full p-3">
                  <label class="block mb-2 text-sm text-gray-500 font-bold" for="contactLightInput4-2">Emaill address</label>
                  <input class="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-100 placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-full" id="contactLightInput4-2" type="text" placeholder="Email address"/>
                </div>
              </div>
              <div class="flex flex-wrap -m-3 mb-3">
                <div class="w-full p-3">
                  <label class="block mb-2 text-sm text-gray-500 font-bold" for="contactLightInput4-3">Phone</label>
                  <input class="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-100 placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-full" id="contactLightInput4-3" type="text" placeholder="Enter your phone number"/>
                </div>
                <div class="w-full p-3">
                  <label class="block mb-2 text-sm text-gray-500 font-bold" for="contactLightInput4-4">Subject</label>
                  <input class="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-100 placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-full" id="contactLightInput4-4" type="text" placeholder="Type your subject"/>
                </div>
              </div>
              <div class="flex flex-wrap -m-3.5">
                <div class="w-full p-3.5">
                  <label class="block mb-2 text-sm text-gray-500 font-bold" for="contactLightInput4-5">Message</label>
                  <textarea class="appearance-none px-6 py-5 w-full text-lg text-gray-500 font-bold bg-gray-100 placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-3xl" id="contactLightInput4-5" type="text" rows="8" placeholder="Enter your message"></textarea>
                </div>
                <div class="w-full p-3.5">
                  <div class="flex flex-wrap items-center -m-3">
                    <div class="w-full p-3">
                      <div class="flex">
                        <input class="opacity-0 absolute h-5 w-5" id="contactLightCheckbox4-1" type="checkbox"/>
                        <div class="flex flex-shrink-0 justify-center items-center w-6 h-6 mr-4 text-transparent bg-white border border-gray-200 rounded-md">
                          <svg width="9" height="7" viewbox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.603516 3.77075L2.68685 5.85409L7.89518 0.645752" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </div>
                        <label class="text-sm text-gray-500 font-bold" for="contactLightCheckbox4-1">I&rsquo;d llike to occasionally receive other communication from Zanrly, such as content and product news.</label>
                      </div>
                    </div>
                    <div class="w-full p-3">
                      <div class="flex flex-wrap md:justify-end -m-2">
                        <div class="w-full p-2"><a class="block w-full px-8 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full" href="#">Send Message</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* CONTACT US FORM */}
 
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
 )
}

export default Contact;