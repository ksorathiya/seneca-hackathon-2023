import { useCallback, useEffect, useState } from "react";
import Button from "../components/Button";
import ClickCount from "../components/ClickCount";
import styles from "../styles/home.module.css";

import Image from "next/image";

function  team(params){
 return (
  <>
  
  {/* HERO SECTION */}

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

  {/* HERO SECTION */}

  {/* ORGANIZATION TEAM */}
<div class="container my-12 px-6 mx-auto">
  <section class="mb-5 text-gray-800 text-center">
    <div class="mb-20 max-w-7xl mx-auto text-center">
      <h2 class="font-heading text-5xl md:text-5xl text-red-600 font-black tracking-tight">Meet the team of Smart Cities Hackathon!</h2>
      <br></br><br></br>
      <h2 class="font-heading text-4xl md:text-4xl text-gray-900 font-black tracking-tight mb-10">Board of Directors</h2><br></br>
    </div>
    {/* <h2 class="text-3xl font-bold mb-32">Meet the <u class="text-red-600">TEAM</u></h2> */}
     
    <div class="grid gap-x-6 lg:gap-x-12 md:grid-cols-7">
     
      <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="\assets\team\Mark_Buchner.jpg" class="rounded-full mx-auto shadow-lg" alt=""
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
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
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

      <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
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
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
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
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
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

      <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
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

      <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="\assets\team\Shirlene_Phyllis.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Shirlene Phyllis Feliciano</h5>
            <p class="mb-6">Chief of Staff</p>
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
{/* ORGANTIZATION TEAM */}

{/* IT TEAM */}
<div class="container my-12 px-6 mx-auto">
  <section class="mb-5 text-gray-800 text-center">
    <div class="mb-20 max-w-7xl mx-auto text-center">
      <br></br>
      <h2 class="font-heading text-4xl md:text-4xl text-gray-900 font-black tracking-tight mb-10">IT Team</h2><br></br>
    </div>
    {/* <h2 class="text-3xl font-bold mb-32">Meet the <u class="text-red-600">TEAM</u></h2> */}
     
    <div class="grid gap-x-6 lg:gap-x-12 md:grid-cols-4">
     
      <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="\assets\team\Kartik_Sorathiya.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Kartik Sorathiya</h5>
            <p class="mb-6">IT Consultant</p>
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
              <img src="\assets\team\Santosh_Bohara.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Santosh Bohara</h5>
            <p class="mb-6">IT Director</p>
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
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Shivangi Sood</h5>
            <p class="mb-6">Full-stack Developer</p>
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

      {/* <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Rajdeep Kaur</h5>
            <p class="mb-6">Full-stack Developer</p>
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
      </div> */}

      <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="\assets\team\Janet_Mejia.JPG" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Janet Mejia Aguilar</h5>
            <p class="mb-6">CRM</p>
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
{/* IT TEAM */}

{/* PARTNER EXPERIENCE TEAM */}
<div class="container mt-12 mb-24 px-6 mx-auto">
  <section class="mb-25 text-gray-800 text-center">
    <div class="mb-20 max-w-7xl mx-auto text-center">
      <br></br>
      <h2 class="font-heading text-4xl md:text-4xl text-gray-900 font-black tracking-tight mb-10">Partner Experience Team</h2><br></br>
    </div>
    {/* <h2 class="text-3xl font-bold mb-32">Meet the <u class="text-red-600">TEAM</u></h2> */}
     
    <div class="grid gap-x-6 lg:gap-x-12 md:grid-cols-6">
     
      <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="\assets\team\Fenil_Mehta.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Fenil Mehulkumar Mehta</h5>
            <p class="mb-6">Partner Experience Director</p>
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
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Arya Sanjay Patil</h5>
            <p class="mb-6">Challenge Set 1</p>
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
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Narayani</h5>
            <p class="mb-6">Challenge Set 2</p>
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
              <img src="\assets\team\Sarabjeet.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Sarabjeetkaur Shamshersingh</h5>
            <p class="mb-6">Challenge Set 3</p>
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
              <img src="\assets\team\Aishwarya.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Aishwarya Shrestha</h5>
            <p class="mb-6">Challenge Set 4</p>
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
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Khyati Jayeshbhai</h5>
            <p class="mb-6">Challenge Set 5</p>
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
{/* COLUMN 2 */}
<div class="container my-12 px-6 mx-auto">
  <section class="mb-5 text-gray-800 text-center">
    {/* <h2 class="text-3xl font-bold mb-32">Meet the <u class="text-red-600">TEAM</u></h2> */}
    <div class="grid gap-x-6 lg:gap-x-12 md:grid-cols-5">
      <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Kohulann </h5>
            <p class="mb-6">Challenge Set 6</p>
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
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Nisali Sanara</h5>
            <p class="mb-6">Challenge Set 7</p>
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
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Hugo Vega Soto</h5>
            <p class="mb-6">Challenge Set 8</p>
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
              <img src="\assets\team\Fenil_Mehta.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Fenil Mehta</h5>
            <p class="mb-6">Challenge Set 9</p>
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
              <img src="\assets\team\Krunal.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Krunal Vasoya</h5>
            <p class="mb-6">Challenge Set 10 & 11</p>
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
  
{/* PARTNER EXPERIENCE TEAM */}

{/* STUDENT EXPERIENCE TEAM */}
<div class="container mt-12 mb-24 px-6 mx-auto">
  <section class="mb-25 text-gray-800 text-center">
    <div class="mb-20 max-w-7xl mx-auto text-center">
      <br></br>
      <h2 class="font-heading text-4xl md:text-4xl text-gray-900 font-black tracking-tight mb-10">Student Experience Team</h2><br></br>
    </div>
     
    <div class="grid gap-x-6 lg:gap-x-12 md:grid-cols-8">
     
      <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Aliraza Mutanza Versi</h5>
            <p class="mb-6">Student Experience Director</p>
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
              <img src="\assets\team\Fenil_Mehta.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Fenil Mehulkumar Mehta</h5>
            <p class="mb-6">Challenge Set 1</p>
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
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Estevan Augusto Perez Maia</h5>
            <p class="mb-6">Challenge Set 1</p>
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
              <img src="\assets\team\Nirosan_Perinpanayagam.jpeg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Nirosan Perinpanayagam</h5>
            <p class="mb-6">Challenge Set 2</p>
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
              <img src="\assets\team\Nithila_Balasubramanian.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Nithila P</h5>
            <p class="mb-6">Challenge Set 3</p>
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
              <img src="\assets\team\Kavitha_Raman.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Kavitha Raman</h5>
            <p class="mb-6">Challenge Set 4</p>
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
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Mohamed Ruziak Raman</h5>
            <p class="mb-6">Challenge Set 5</p>
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
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Muhammed Deensha</h5>
            <p class="mb-6">Challenge Set 6</p>
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
{/* COLUMN 2 */}
{/* <div class="container my-12 px-6 mx-auto">
  <section class="mb-5 text-gray-800 text-center">
    <div class="grid gap-x-6 lg:gap-x-12 md:grid-cols-5">
      <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Kohulann </h5>
            <p class="mb-6">Challenge Set 6</p>
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
            <h5 class="text-lg font-bold mb-4">Nisali Sanara</h5>
            <p class="mb-6">Challenge Set 7</p>
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
            <h5 class="text-lg font-bold mb-4">Hugo Vega Soto</h5>
            <p class="mb-6">Challenge Set 8</p>
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
            <h5 class="text-lg font-bold mb-4">Fenil Mehta</h5>
            <p class="mb-6">Challenge Set 9</p>
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
            <h5 class="text-lg font-bold mb-4">Krunal Vasoya</h5>
            <p class="mb-6">Challenge Set 10 & 11</p>
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
</div> */}
{/* STUDENT EXPERIENCE TEAM */}

{/* OPERATIONS TEAM */}
<div class="container mt-12 mb-24 px-6 mx-auto">
  <section class="mb-25 text-gray-800 text-center">
    <div class="mb-20 max-w-7xl mx-auto text-center">
      <br></br>
      <h2 class="font-heading text-4xl md:text-4xl text-gray-900 font-black tracking-tight mb-10">Operations Team</h2><br></br>
    </div>
     
    <div class="grid gap-x-6 lg:gap-x-12 md:grid-cols-7">
     
      <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="\assets\team\Neil_javiya.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Neil Javiya</h5>
            <p class="mb-6">Operations Director</p>
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
              <img src="\assets\team\Daisy_Le.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Daisy Le</h5>
            <p class="mb-6">Finance Director</p>
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
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Neev</h5>
            <p class="mb-6">SWAG</p>
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
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Rutt Desai</h5>
            <p class="mb-6">Facilities</p>
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
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Ayush Pankajkumar Shah</h5>
            <p class="mb-6">Microcreds</p>
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
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Tathagat Arya</h5>
            <p class="mb-6">Registration Desk, Activities</p>
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
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Tanmay Ambekar</h5>
            <p class="mb-6">Rules/Timeline</p>
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
{/* OPERATIONS TEAM */}

{/* MARKETING TEAM */}
<div class="container mt-12 mb-24 px-6 mx-auto">
  <section class="mb-25 text-gray-800 text-center">
    <div class="mb-20 max-w-7xl mx-auto text-center">
      <br></br>
      <h2 class="font-heading text-4xl md:text-4xl text-gray-900 font-black tracking-tight mb-10">Marketing Team</h2><br></br>
    </div>
     
    <div class="grid gap-x-6 lg:gap-x-12 md:grid-cols-8">
     
      <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="\assets\team\David_Jeong.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">David Jeong</h5>
            <p class="mb-6">Marketing Consultant</p>
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
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Amizthini</h5>
            <p class="mb-6">Website Content</p>
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
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Molika Tan</h5>
            <p class="mb-6">Social Media</p>
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
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Kalp Nimesh Shah</h5>
            <p class="mb-6">Communications, Channels</p>
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
              <img src="\assets\team\Kendra_Terrero.png" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Kendra Terrero</h5>
            <p class="mb-6">Creative Design</p>
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
              <img src="\assets\team\Tonni-Ann.JPG" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Tonni-Ann Burgher</h5>
            <p class="mb-6">Public Relations</p>
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
              <img src="\assets\team\Dristi_himmatramka.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Dristi Himmatramka</h5>
            <p class="mb-6">Design Jam</p>
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
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Hleb Klymenko</h5>
            <p class="mb-6">Audio, TikTok</p>
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

{/* MARKETING TEAM */}

{/* HUMAN RESOURCES TEAM */}
<div class="container mt-12 mb-24 px-6 mx-auto">
  <section class="mb-25 text-gray-800 text-center">
    <div class="mb-20 max-w-7xl mx-auto text-center">
      <br></br>
      <h2 class="font-heading text-4xl md:text-4xl text-gray-900 font-black tracking-tight mb-10">Human Resources Team</h2><br></br>
    </div>
     
    <div class="grid gap-x-6 lg:gap-x-12 md:grid-cols-1">
     
      <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px"}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Negar</h5>
            <p class="mb-6">Human Resources Manager</p>
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
{/* HUMAN RESOURCES TEAM */}


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