import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";
import ClickCount from "../components/ClickCount";
import styles from "../styles/home.module.css";
import Script from "next/script";
import FAQAccordion from "../components/FAQAccordion";
import Footer from "../components/footer";

function Contact(params) {
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
          number: number,
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

      <NavBar />

      {/* CONTACT US FORM */}

      <section class="py-10 bg-white overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="py-16 px-8 bg-gray-100 overflow-hidden border border-gray-100 rounded-3xl">
            <div class="max-w-7xl mx-auto">
              <div class="flex flex-wrap -m-4">
                <div class="w-full md:w-1/2 p-4">
                  {/* FAQs SECTION */}
                  <FAQAccordion />
                </div>
                {/* FAQs SECTION */}

                <div class="w-full md:w-1/2 p-4">
                <h2 class="font-heading rounded-xl mb-1 text-3xl md:text-4xl lg:text-5xl text-red-700 font-black tracking-tight text-center">Contact Us</h2>
                <p class="mb-9 text-sm text-center md:text-xl leading-tight font-light text-coolGray-800 "> We will respond to your inquiry within 24 business hours.</p>
                  <form
                    onSubmit={handleSubmit}
                    class="p-10 bg-white border border-gray-100 rounded-3xl"
                  >
                    <div class="flex flex-wrap -m-3 mb-3">
                      <div class="w-full p-3">
                        <label
                          class="block mb-2 text-md text-red-700 font-bold"
                          for="contactLightInput4-1"
                          htmlFor="fullname"
                        >
                          Full Name
                        </label>
                        <input
                          class="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-100 placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-full"
                          id="contactLightInput4-1"
                          type="text"
                          value={fullname}
                          onChange={(e) => {
                            setFullname(e.target.value);
                          }}
                          name="fullname"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div class="w-full p-3">
                        <label
                          class="block mb-2 text-md text-red-700 font-bold"
                          for="contactLightInput4-2"
                          htmlFor="email"
                        >
                          Email address
                        </label>
                        <input
                          class="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-100 placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-full"
                          id="contactLightInput4-2"
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          placeholder="Email address"
                        />
                      </div>
                    </div>
                    <div class="flex flex-wrap -m-3 mb-3">
                      <div class="w-full p-3">
                        <label
                          class="block mb-2 text-md text-red-700 font-bold"
                          for="contactLightInput4-3"
                          htmlFor="number"
                        >
                          Phone
                        </label>
                        <input
                          class="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-100 placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-full"
                          id="contactLightInput4-3"
                          type="text"
                          name="number"
                          value={number}
                          onChange={(e) => {
                            setNumber(e.target.value);
                          }}
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div class="w-full p-3">
                        <label
                          class="block mb-2 text-md text-red-700 font-bold"
                          for="contactLightInput4-4"
                          htmlFor="subject"
                        >
                          Subject
                        </label>
                        <input
                          class="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-100 placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-full"
                          id="contactLightInput4-4"
                          type="text"
                          name="subject"
                          value={subject}
                          onChange={(e) => {
                            setSubject(e.target.value);
                          }}
                          placeholder="Type your subject"
                        />
                      </div>
                    </div>
                    <div class="flex flex-wrap -m-3.5">
                      <div class="w-full p-3.5">
                        <label
                          class="block mb-2 text-md text-red-700 font-bold"
                          for="contactLightInput4-5"
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={message}
                          onChange={(e) => {
                            setMessage(e.target.value);
                          }}
                          class="appearance-none px-6 py-5 w-full text-lg text-gray-500 font-bold bg-gray-100 placeholder-gray-500 outline-none focus:ring-4 focus:ring-blue-200 rounded-3xl"
                          id="contactLightInput4-5"
                          type="text"
                          rows="8"
                          placeholder="Enter your message"
                        ></textarea>
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
                              <div class="w-full p-2">
                                <button
                                  type="submit"
                                  class="block w-full px-8 py-3.5 text-lg text-center text-white font-bold bg-red-700 hover:bg-gray-500 focus:ring-4 focus:ring-blue-200 rounded-full"
                                >
                                  Send Message
                                </button>
                              </div>
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

      <Footer/>

      {/* FOOTER SECTION */}
    </>
  );
}

export default Contact;
