import react from "react";
import Image from "next/image";

export default function Footer() 
{
 return(
 <div>
  <section className="py-10 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="py-16 px-8 mb-8 bg-white rounded-3xl">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap items-center justify-center md:justify-between -m-4">
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
                    <li className="inline-flex text-sm p-6">
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
          <div className="flex flex-wrap justify-between">
            <div className="w-full text-sm text-left">
              <span>Ⓒ Copyright. All rights reserved by </span>
              <a className="text-red-600 hover:text-red-700" href="#">
                Smart Cities Hackathon.
              </a>
            </div>
          
            <a href="https://simplystech.com" className="w-full pt-5" target="_blank">
            <span className="text-sm block md:hidden bg-slate-50">
            <span className="">made with ❤️ by </span><span className="align-sub"><img
                        className="inline align-top"
                        src="/assets/simplystech-logo.svg"
                        width="70px"
                        alt=""
                      /></span>
            </span></a>
            <a href="https://simplystech.com" target="_blank">
            <span className="text-xs hidden md:block fixed bottom-5 right-5 border px-2 py-1 rounded-sm shadow-sm  bg-slate-50">
              <span className="">made with ❤️ by </span><span className="align-sub"><img
                        className="inline align-top"
                        src="/assets/simplystech-logo.svg"
                        width="70px"
                        alt=""
                      /></span>
            </span></a>
          </div>
        </div>
      </section>
 </div>)
}