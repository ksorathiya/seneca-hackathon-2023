import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Button from "../components/Button";
import ClickCount from "../components/ClickCount";
import styles from "../styles/home.module.css";
import Script from 'next/script'


function Contact(params){
// States for contact form fields
const [fullname, setFullname] = useState("");
const [email, setEmail] = useState("");
const [number, setNumber] = useState("");
const [subject, setSubject] = useState("");
const [message, setMessage] = useState("");

//   Form validation state
const [errors, setErrors] = useState({});

//   Setting button text on form submission
const [buttonText, setButtonText] = useState("Send");

// Setting success or failure messages states
const [showSuccessMessage, setShowSuccessMessage] = useState(false);
const [showFailureMessage, setShowFailureMessage] = useState(false);

// Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["number"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   Handling form submit

const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          number:number,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
    console.log(fullname, email, subject, message);
  };
 return (
  <>
<Script src="\components\faqs.js" />
 
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
          <li class="mb-1"><a class="block p-4 text-lg font-semibold hover:bg-red-50 hover:text-red-500 rounded" href="/team">Our Team</a></li>
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

           {/* FAQs SECTION */}
<section class=" overflow-hidden">
  <div class="container mx-auto px-4">
    <h2 class="font-heading mb-6 text-3xl md:text-4xl lg:text-5xl text-red-600 font-black tracking-tight text-center">Frequently asked question</h2>
    <div class="max-w-2xl mx-auto bg-gradient-cyan p-0.5">
      <div class="flex flex-wrap">

        <div class="w-full">
          
            <div class="pb-0.5 bg-gradient-cyan">
              <div class="py-3.5 px-5 bg-white rounded-3xl" className="accordian">
                <div class="flex flex-wrap items-center justify-between -m-2">
                  <div class="w-auto p-2" >
                   <a data-te-collapse-init
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      href="#collapseExample"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample">
                   <div className=" accordian_question"><p class="mb-5 font-heading font-bold text-lg text-red-700">
                  1. What is a Smart City?</p></div></a>
                  <div className="accordian_answer">
                    <p class="text-base text-black" id="collapseExample" data-te-collapse-item>A Smart City is an urban development vision to integrate information and communication technology (ICT) and Internet of Things (IoT) technology in a secure fashion to manage a city's assets and resources more efficiently for the city's future development.</p></div>
                  </div>
                  <div class="w-auto p-2">
                    <svg width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="w-full">
          <a href="#">
            <div class="pb-0.5 bg-gradient-cyan">
              <div class="py-3.5 px-5 bg-white rounded-3xl">
                <div class="flex flex-wrap justify-between -m-2">
                  <div class="w-auto p-2">
                    <p class="mb-5 font-heading font-bold text-lg text-red-700">2. What are the criteria for a city to become a Smart City?</p>
                    <p class="text-base text-black">The criteria for a city to become a Smart City include a solid and reliable ICT infrastructure with efficient energy management systems, smart transportation, and mobility solutions. Moreover, with effective waste management systems and efficient public services, including the basic needs like electricity, water, heating, and other households that need to be managed within these areas.</p>
                  </div>
                  <div class="w-auto p-2">
                    <svg width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="w-full">
          <a href="#">
            <div class="pb-0.5 bg-gradient-cyan">
              <div class="py-3.5 px-5 bg-white rounded-3xl">
                <div class="flex flex-wrap items-center justify-between -m-2">
                  <div class="w-auto p-2">
                  <p class="mb-5 font-heading font-bold text-lg text-red-700">3. What is a Smart Cities hackathon?</p>
                  <p class="text-base text-black">A Smart Cities hackathon is where developers, designers, data scientists, and other tech-savvy individuals come together to develop innovative solutions for urban problems related to the development of Smart Cities.</p>
                  </div>
                  <div class="w-auto p-2">
                    <svg width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="w-full">
          <a href="#">
            <div class="pb-0.5 bg-gradient-cyan">
              <div class="py-3.5 px-5 bg-white rounded-3xl">
                <div class="flex flex-wrap items-center justify-between -m-2">
                  <div class="w-auto p-2">
                  <p class="mb-5 font-heading font-bold text-lg text-red-700">4. Who can participate in a Smart Cities hackathon?</p>
                  <p class="text-base text-black">Anyone with a passion for technology and innovation can participate in a Smart Cities hackathon, including students, developers, data scientists, and urban planners, if they think they have a solution to making an efficient and effective city transformation that is technically and realistically feasible.</p>                  
                  </div>
                  <div class="w-auto p-2">
                    <svg width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="w-full">
          <a href="#">
            <div class="pb-0.5 bg-gradient-cyan">
              <div class="py-3.5 px-5 bg-white rounded-3xl">
                <div class="flex flex-wrap items-center justify-between -m-2">
                  <div class="w-auto p-2">
                  <p class="mb-5 font-heading font-bold text-lg text-red-700">5. What is the format of a Smart Cities hackathon?</p>
                  <p class="text-base text-black">A Smart Cities hackathon typically begins with a series of presentations and workshops on the theme of Smart Cities. Participants then form teams and work on a solution to a specific problem related to the development of Smart Cities. The hackathon culminates in a pitch competition, where teams present their solutions to a panel of judges.</p>                  
                  </div>
                  <div class="w-auto p-2">
                    <svg width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="w-full">
          <a href="#">
            <div class="pb-0.5 bg-gradient-cyan">
              <div class="py-3.5 px-5 bg-white rounded-3xl">
                <div class="flex flex-wrap items-center justify-between -m-2">
                  <div class="w-auto p-2">
                  <p class="mb-5 font-heading font-bold text-lg text-red-700">6. What solutions are typically developed during a Smart Cities hackathon?</p>
                  <p class="text-base text-black">Solutions developed during a Smart Cities hackathon can range from smart transportation systems to efficient energy management systems, from waste management solutions to public safety systems, and from smart healthcare systems to citizen engagement platforms.</p>
                  </div>
                  <div class="w-auto p-2">
                    <svg width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                </div>

              </div>
            </div>
          </a>
        </div>
        <div class="w-full">
          <a href="#">
            <div class="pb-0.5 bg-gradient-cyan">
              <div class="py-3.5 px-5 bg-white rounded-3xl">
                <div class="flex flex-wrap items-center justify-between -m-2">
                  <div class="w-auto p-2">
                  <p class="mb-5 font-heading font-bold text-lg text-red-700">7. How can I get involved in a Smart Cities hackathon?</p>
                  <p class="text-base text-black">You can get involved in a Smart Cities hackathon by searching for events in your area or by contacting organizations specializing in developing Smart Cities. You can also sign up for updates on hackathons and other events related to Smart Cities.</p>                  
                  </div>
                  <div class="w-auto p-2">
                    <svg width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
{/* FAQs SECTION */}

          <div class="w-full md:w-1/2 p-4">
            <form onSubmit={handleSubmit} class="p-10 bg-white border border-gray-100 rounded-3xl">
              <div class="flex flex-wrap -m-3 mb-3">
                <div class="w-full p-3">
                  <label class="block mb-2 text-md text-red-500 font-bold" for="contactLightInput4-1" htmlFor="fullname">Full Name</label>
                  <input class="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-100 placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-full" id="contactLightInput4-1" type="text" value={fullname} onChange={(e) => {
                  setFullname(e.target.value); 
                  }} name="fullname" placeholder="Enter your name"/>
                </div>
                <div class="w-full p-3">
                  <label class="block mb-2 text-md text-red-500 font-bold" for="contactLightInput4-2" htmlFor="email">Emaill address</label>
                  <input class="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-100 placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-full" id="contactLightInput4-2" type="email" name="email" value={email} onChange={(e) => {
              setEmail(e.target.value);
            }} placeholder="Email address"/>
                </div>
              </div>
              <div class="flex flex-wrap -m-3 mb-3">
                <div class="w-full p-3">
                  <label class="block mb-2 text-md text-red-500 font-bold" for="contactLightInput4-3" htmlFor="number">Phone</label>
                  <input class="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-100 placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-full" id="contactLightInput4-3" type="text" name="number" value={number} onChange={(e) => {
              setNumber(e.target.value);
            }} placeholder="Enter your phone number"/>
                </div>
                <div class="w-full p-3">
                  <label class="block mb-2 text-md text-red-500 font-bold" for="contactLightInput4-4" htmlFor="subject">Subject</label>
                  <input class="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-100 placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-full" id="contactLightInput4-4" type="text"
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }} placeholder="Type your subject"/>
                </div>
              </div>
              <div class="flex flex-wrap -m-3.5">
                <div class="w-full p-3.5">
                  <label class="block mb-2 text-md text-red-500 font-bold" for="contactLightInput4-5" htmlFor="message">Message</label>
                  <textarea name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }} class="appearance-none px-6 py-5 w-full text-lg text-gray-500 font-bold bg-gray-100 placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-3xl" id="contactLightInput4-5" type="text" rows="8" placeholder="Enter your message"></textarea>
                </div>
                <div class="w-full p-3.5">
                  <div class="flex flex-wrap items-center -m-3">
                    <div class="w-full p-3">
                      {/* <div class="flex">
                        <input class="opacity-0 absolute h-5 w-5" id="contactLightCheckbox4-1" type="checkbox"/>
                        <div class="flex flex-shrink-0 justify-center items-center w-6 h-6 mr-4 text-transparent bg-white border border-gray-200 rounded-md">
                          <svg width="9" height="7" viewbox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.603516 3.77075L2.68685 5.85409L7.89518 0.645752" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </div>
                        <label class="text-sm text-gray-500 font-bold" for="contactLightCheckbox4-1">I&rsquo;d llike to occasionally receive other communication from Zanrly, such as content and product news.</label>
                      </div> */}
                    </div>
                    <div class="w-full p-11">
                      <div class="flex flex-wrap md:justify-end -m-2">
                        <div class="w-full p-2"><button type="submit" class="block w-full px-8 py-3.5 text-lg text-center text-white font-bold bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-blue-200 rounded-full">Send Message</button></div>
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
<section>
        <div className="container mx-auto px-4">
          <div className="py-8 px-8 bg-white overflow-hidden border border-gray-100 rounded-3xl">
            <div className="max-w-7xl mx-auto">
              <div className="mb-10 md:max-w-3xl">
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
                            src="/assets/email-message-mail-envelope-svgrepo-com.svg"
                            width="40"
                            height="40"
                          />
                        </div>
                      </div>
                      <div className="flex-1 p-3">
                        <p className="text-gray-500 font-bold">Email</p>
                        <h3 className="font-heading md:text-xl text-md text-gray-900 font-black">
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