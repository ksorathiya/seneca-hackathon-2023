import { useCallback, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import ClickCount from "../components/ClickCount";
import styles from "../styles/home.module.css";

import Image from "next/image";

function  team(params){
 return (
  <>
  
  {/* HERO SECTION */}

<NavBar/>


  {/* HERO SECTION */}

  {/* ORGANIZATION TEAM */}
<div class="container mt-12 mb-24  px-6 mx-auto">
  <section class="mb-25 text-gray-800 text-center">
    <div class="mb-20 max-w-7xl mx-auto text-center">
      <h2 class="font-heading text-5xl md:text-5xl text-red-600 font-black tracking-tight">Meet the team of Smart Cities Hackathon!</h2>
      <br></br><br></br>
      <h2 class="font-heading text-4xl md:text-4xl text-gray-900 font-black tracking-tight mb-10">Leaders</h2>
      <p class="text-xl md:text-xl text-gray-600 font-medium tracking-tight mb-10 pb-20">Chief of Staff is responsible for volunteer/intern experience, equity, inclusiveness.</p>
    </div>
    {/* <h2 class="text-3xl font-bold mb-32">Meet the <u class="text-red-600">TEAM</u></h2> */}
     


     
    <div class="grid gap-x-6 lg:gap-x-12 md:grid-cols-4">
     
      <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="\assets\team\Mark_Buchner.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px;" }} />
              
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Mark Buchner</h5>
            <p class="mb-6">Academic Chair</p>
            <ul class="list-inside flex mx-auto justify-center">
  
              <a href="https://www.linkedin.com/in/mark-buchner-bb6a7013/" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="\assets\team\Kartik_Sorathiya.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Kartik Sorathiya</h5>
            <p class="mb-6">IT Consultant</p>
            <ul class="list-inside flex mx-auto justify-center">
  
              <a href="https://www.linkedin.com/in/kartiksorathiya/" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Santosh Bohara</h5>
            <p class="mb-6">IT Director</p>
            <ul class="list-inside flex mx-auto justify-center">
              <a href="https://www.linkedin.com/in/santosh-bohara-4b04a0140/" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Fenil Mehulkumar Mehta</h5>
            <p class="mb-6">Partner Experience Director</p>
            <ul class="list-inside flex mx-auto justify-center">
  
              <a href="#!" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
              </a>
            </ul>
          </div>
        </div>
      </div>

  </div>
  </section>
  </div>

<div class="container mt-12 mb-24  px-6 mx-auto">
  <section class="mb-25 text-gray-800 text-center">
     
    <div class="grid gap-x-6 lg:gap-x-12 md:grid-cols-4">
      <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="\assets\team\Neil_javiya.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Neil Javiya</h5>
            <p class="mb-6">Operations Director</p>
            <ul class="list-inside flex mx-auto justify-center">
  
              <a href="https://www.linkedin.com/in/neiljaviya/" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="\assets\team\David_Jeong.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">David Jeong</h5>
            <p class="mb-6">Marketing Consultant</p>
            <ul class="list-inside flex mx-auto justify-center">
  
              <a href="https://www.linkedin.com/in/david-jeong/" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Molika Tan</h5>
            <p class="mb-6">Social Media</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="https://www.linkedin.com/in/molikatan/" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Negar</h5>
            <p class="mb-6">Human Resources Manager</p>
            <ul class="list-inside flex mx-auto justify-center">
  
              <a href="#!" class="px-2">
                {/* <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/> */}
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
              </a>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </section>
  </div>

<div class="container my-12 px-6 mx-auto">

  <section class="mb-5 text-gray-800 text-center">
    {/* <h2 class="text-3xl font-bold mb-32">Meet the <u class="text-red-600">TEAM</u></h2> */}
     
    <div class="grid gap-x-6 lg:gap-x-12 md:grid-cols-3">

      <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="\assets\team\Shirlene_Phyllis.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Shirlene Phyllis Feliciano</h5>
            <p class="mb-6">Chief of Staff</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="https://www.linkedin.com/in/splfeliciano/" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Daisy Le</h5>
            <p class="mb-6">Finance Director</p>
            <ul class="list-inside flex mx-auto justify-center">
              <a href="https://www.linkedin.com/in/daisyldct/" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Aliraza Mutanza Versi</h5>
            <p class="mb-6">Student Experience Director</p>
            <ul class="list-inside flex mx-auto justify-center">
  
              <a href="https://www.linkedin.com/in/aliraza-m-versi-760692128/" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
      <h2 class="font-heading text-4xl md:text-4xl text-gray-900 font-black tracking-tight mb-1">IT Team</h2><br></br>
      <p class="text-xl md:text-xl text-gray-600 font-medium tracking-tight mb-10 pb-20">The IT department is responsible for the company's technology infrastructure. They are in charge of ensuring that all technical aspects of the company are running smoothly and efficiently. They also provide support to employees who have technical problems.</p>
    </div>
    {/* <h2 class="text-3xl font-bold mb-32">Meet the <u class="text-red-600">TEAM</u></h2> */}
     
    <div class="grid gap-x-6 lg:gap-x-12 md:grid-cols-4">

      <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="\assets\team\shivangi_sood.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Shivangi Sood</h5>
            <p class="mb-6">Full-stack Developer</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="https://www.linkedin.com/in/shivangi-sood/" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Janet Mejia Aguilar</h5>
            <p class="mb-6">CRM</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="#!" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Kendra Terrero</h5>
            <p class="mb-6">Creative Design</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="#!" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Navna</h5>
            <p class="mb-6">Creative Design</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="#!" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
      <h2 class="font-heading text-4xl md:text-4xl text-gray-900 font-black tracking-tight mb-10">Partner Experience Team</h2><br></br><br></br>
      {/* <p class="text-xl md:text-xl text-gray-600 font-medium tracking-tight mb-10 pb-20">The IT department is responsible for the company's technology infrastructure. They are in charge of ensuring that all technical aspects of the company are running smoothly and efficiently. They also provide support to employees who have technical problems.</p> */}
    </div>
    {/* <h2 class="text-3xl font-bold mb-32">Meet the <u class="text-red-600">TEAM</u></h2> */}
     
    <div class="grid gap-x-6 lg:gap-x-12 md:grid-cols-5">

      <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Arya Sanjay Patil</h5>
            <p class="mb-6">Challenge Set 1</p>
            <ul class="list-inside flex mx-auto justify-center">
              <a href="https://www.linkedin.com/in/arya-patil/" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Narayani</h5>
            <p class="mb-6">Challenge Set 2</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href=" https://www.linkedin.com/in/amizh/ " class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Sarabjeetkaur Shamshersingh</h5>
            <p class="mb-6">Challenge Set 3</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="#!" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Aishwarya Shrestha</h5>
            <p class="mb-6">Challenge Set 4</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="#!" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Khyati Jayeshbhai</h5>
            <p class="mb-6">Challenge Set 5</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="#!" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
    <div class="grid gap-x-6 lg:gap-x-12 md:grid-cols-4">
      <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Kohulann </h5>
            <p class="mb-6">Challenge Set 6</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="#!" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Nisali Sanara</h5>
            <p class="mb-6">Challenge Set 7</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="#!" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Hugo Vega Soto</h5>
            <p class="mb-6">Challenge Set 8</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="#!" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Krunal Vasoya</h5>
            <p class="mb-6">Challenge Set 10 & 11</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="#!" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
  <section class="mb-5 text-gray-800 text-center">
    <div class="mb-20 max-w-7xl mx-auto text-center">
      <br></br>
      <h2 class="font-heading text-4xl md:text-4xl text-gray-900 font-black tracking-tight mb-10">Student Experience Team</h2>
      <p class="text-xl md:text-xl text-gray-600 font-medium tracking-tight mb-10 pb-20">The Student Success Department is responsible to work closely and directly with students to serve students and collect students’ input towards the organization so as to provide the best services and events to students.</p>

    </div>
     
    <div class="grid gap-x-6 lg:gap-x-12 md:grid-cols-3">

      <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Muhammed Deensha</h5>
            <p class="mb-6">Challenge Set 6</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="#!" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Estevan Augusto Perez Maia</h5>
            <p class="mb-6">Challenge Set 1</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="#!" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Nirosan Perinpanayagam</h5>
            <p class="mb-6">Challenge Set 2</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="#!" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
              </a>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </section>
</div>
<div class="container my-12 px-6 mx-auto">

<section class="mb-25 text-gray-800 text-center">
    
    <div class="grid gap-x-6 lg:gap-x-12 md:grid-cols-3">

      <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="\assets\team\Nithila_Balasubramanian.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Nithila P</h5>
            <p class="mb-6">Challenge Set 3</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="#!" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Kavitha Raman</h5>
            <p class="mb-6">Challenge Set 4</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="#!" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Mohamed Ruziak Raman</h5>
            <p class="mb-6">Challenge Set 5</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="#!" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
              </a>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </section>

</div>


{/* STUDENT EXPERIENCE TEAM */}

{/* OPERATIONS TEAM */}
<div class="container mt-12 mb-24 px-6 mx-auto">
  <section class="mb-5 text-gray-800 text-center">
    <div class="mb-20 max-w-7xl mx-auto text-center">
      <br></br>
      <h2 class="font-heading text-4xl md:text-4xl text-gray-900 font-black tracking-tight mb-10">Operations Team</h2>
      <p class="text-xl md:text-xl text-gray-600 font-medium tracking-tight mb-10 pb-20">The Operation team is responsible for planning, organizing, and supervising operations, manufacturing and production processes, and service delivery to produce the desired outcome of a high-quality product or service that satisfies customer demands.The Operation team is responsible for planning, organizing, and supervising operations, manufacturing and production processes, and service delivery to produce the desired outcome of a high-quality product or service that satisfies customer demands.</p>

    </div>
     
    <div class="grid gap-x-6 lg:gap-x-12 md:grid-cols-5">

      <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Neev</h5>
            <p class="mb-6">SWAG</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="#!" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Rutt Desai</h5>
            <p class="mb-6">Facilities</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="#!" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Ayush Pankajkumar Shah</h5>
            <p class="mb-6">Microcreds</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="#!" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Tathagat Arya</h5>
            <p class="mb-6">Registration Desk, Activities</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="#!" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Tanmay Ambekar</h5>
            <p class="mb-6">Rules/Timeline</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="#!" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
  <section class="mb-5 text-gray-800 text-center">
    <div class="mb-20 max-w-7xl mx-auto text-center">
      <br></br>
      <h2 class="font-heading text-4xl md:text-4xl text-gray-900 font-black tracking-tight mb-10">Marketing Team</h2>
      <p class="text-xl md:text-xl text-gray-600 font-medium tracking-tight mb-10 pb-20">Marketing Depart is the face of Seneca Hackathon. It is the Marketing Department's job to reach out to prospects, customers, investors and/or the community, while creating an overarching image that represents your company in a positive light.</p>

    </div>
     
    <div class="grid gap-x-6 lg:gap-x-12 md:grid-cols-4">
     
      <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="\assets\team\blank.png" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Amizthini</h5>
            <p class="mb-6">Website Content</p>
            <ul class="list-inside flex mx-auto justify-center">
              <a href="https://www.linkedin.com/in/amizh/" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
                style={{"width": "150px;" }} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Kalp Nimesh Shah</h5>
            <p class="mb-6">Communications, Channels</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="#!" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Tonni-Ann Burgher</h5>
            <p class="mb-6">Public Relations</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="https://www.linkedin.com/in/tonni-ann-hinds-n%C3%A9e-burgher-3526a8180/" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Hleb Klymenko</h5>
            <p class="mb-6">Audio, TikTok</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="#!" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
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

{/* HUMAN RESOURCES TEAM */}

 {/* FINANCE TEAM */}
<div class="container mt-12 mb-24 px-6 mx-auto">
  <section class="mb-5 text-gray-800 text-center">
    <div class="mb-20 max-w-7xl mx-auto text-center">
      <br></br>
      <h2 class="font-heading text-4xl md:text-4xl text-gray-900 font-black tracking-tight mb-10">Finance Team</h2>
      <p class="text-xl md:text-xl text-gray-600 font-medium tracking-tight mb-10 pb-20">A finance team is also in charge of all duties related to your organization's capital funds, including acquiring and managing these funds including accounting, record keeping, administrative work, and cash flow.</p>

    </div>
     
    <div class="grid gap-x-6 lg:gap-x-12 md:grid-cols-1">
     
      
      <div class="mb-24 md:mb-0">
        <div class="rounded-lg shadow-lg h-full block bg-white">
          <div class="flex justify-center">
            <div class="flex justify-center" style={{"margin-top": "-75px"}}>
              <img src="\assets\team\Dristi_himmatramka.jpg" class="rounded-full mx-auto shadow-lg" alt=""
                style={{"width": "150px; "}} />
            </div>
          </div>
          <div class="p-6">
            <h5 class="text-lg font-bold mb-4">Dristi Himmatramka</h5>
            <p class="mb-6">Design Jam</p>
            <ul class="list-inside flex mx-auto justify-center">
              
              <a href="#!" class="px-2">
                <img src="/assets/linkedin-logo.png" alt="" style={{"width":"80px; height: 18px"}}/>
              </a>
            </ul>
          </div>
        </div>
      </div>

      </div>
  </section>
</div>


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