import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import FAQAccordion from "../components/FAQAccordion";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import ClickCount from "../components/ClickCount";
import styles from "../styles/home.module.css";
import Footer from "../components/footer";

function Challenge(params) {
    return (
        <>
            {/* // HERO SECTION */}

            <NavBar />
            {/* Challenge sets */}

            {/* Challenge Sets */}

            <section class="pt-28 pb-20 bg-gray-200 overflow-hidden">
                <div class="container mx-auto px-4">
                    <h2 class="mb-20 font-heading font-sans font-semibold text-6xl sm:text-7xl text-gray-700 text-center">Challenge Sets for Smart Cities Hackathon</h2>
                    <div class="flex flex-wrap -m-4">
                        <div class="w-full m-4 md:w-1/3 p-2 block max-w-md bg-white border border-gray-500 border-0 border-b-4 rounded-lg shadow hover:bg-gray-200">
                            <div class="md:max-w-md mx-auto text-center p-4">
                            <Image
                                    src="/assets/Mental health icon.jpg"
                                    height={150}
                                    width={150}
                                />
                                <p class="font-heading font-semibold text-2xl text-red-700">Mental Health</p>
                                <p class="font-heading text-left font-medium text-lg text-gray-900">This challenge set aims to find innovative solutions to tackle mental health problems such as anxiety, depression, and isolation, which have been exacerbated by the pandemic. Ideas could include developing mental health apps, creating online communities for support, and sharing, and implementing effective strategies for promoting mental wellness among students in universities and colleges. Special emphasis will be placed on social media and online gambling addictions.</p>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 m-4 p-2 block max-w-md bg-white border border-gray-500 border-0 border-b-4 rounded-lg shadow hover:bg-gray-200">
                            <div class="md:max-w-md mx-auto text-center p-4">
                            <Image
                                    src="/assets/Smart buildings icon.jpg"
                                    height={150}
                                    width={150}
                                />
                                <p class="font-heading font-semibold text-2xl text-red-700">Smart Buildings</p>
                                <p class="font-heading text-left font-medium text-lg text-gray-900">This includes a broad set of method's, often Analytics, AI/ML and Deep Learning which use big data generated from everyday operations (such as HVAC systems) to positively influence operational KPIs including cost, efficiency, carbon footprint etc. Design and operations using digital twin or BIM is in scope. Farming and Urban farming is also in scope.</p>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 m-4 p-2 block max-w-md bg-white border border-gray-500 border-0 border-b-4 rounded-lg shadow hover:bg-gray-200">
                            <div class="md:max-w-md mx-auto text-center p-4">
                                <Image
                                    src="/assets/Data privacy icon.jpg"
                                    height={150}
                                    width={150}
                                />
                                <p class="font-heading font-semibold text-2xl text-red-700">Data Privacy and Security</p>
                                <p class="font-heading text-left font-medium text-lg text-gray-900">The challenge sets focus on the data privacy and security of ANY stakeholder in the smart city, including marginalized and disenfranchised communities, everyday citizens, small business owners, and city municipal governments..</p>        </div>
                        </div>
                        <div class="w-full md:w-1/3 m-4 p-2 block max-w-md bg-white border border-gray-500 border-0 border-b-4 rounded-lg shadow hover:bg-gray-200">
                            <div class="md:max-w-md mx-auto text-center p-4">
                            <Image
                                    src="/assets/Smart Analysis.jpg"
                                    height={150}
                                    width={150}
                                />
                                <p class="font-heading font-semibold text-2xl text-red-700">Smart Analytics and Insights</p>
                                <p class="font-heading text-left font-medium text-lg text-gray-900">The challenge sets on utilizing advanced technologies to extract meaningful insights from data, such as image and video data, traffic camera, drones and GIS analysis. These insights can be applied to a variety of fields to solve real-world problems and optimize processes.</p>        </div>
                        </div>
                        <div class="w-full md:w-1/3 m-4 p-2 block max-w-md bg-white border border-gray-500 border-0 border-b-4 rounded-lg shadow hover:bg-gray-200">
                            <div class="md:max-w-md mx-auto text-center p-4">
                            <Image
                                    src="/assets/Smart businesses icon.jpg"
                                    height={150}
                                    width={150}
                                />
                                <p class="font-heading font-semibold text-2xl text-red-700">Smart Business</p>
                                <p class="font-heading text-left font-medium text-lg text-gray-900">Challenge sets in this category could focus on developing solutions that leverage data and automation to enhance the efficiency, sustainability, and customer experience of businesses in smart cities, such as food order delivery services, ride-sharing platforms, carpooling apps, personal service scheduling, last-mile logistics.</p>        </div>
                        </div>
                        <div class="w-full md:w-1/3 m-4 p-2 block max-w-md bg-white border border-gray-500 border-0 border-b-4 rounded-lg shadow hover:bg-gray-200">
                            <div class="md:max-w-md mx-auto text-center p-4">
                            <Image
                                    src="/assets/Sustainable city icon.jpg"
                                    height={150}
                                    width={150}
                                />
                                <p class="font-heading font-semibold text-2xl text-red-700">Sustainable City</p>
                                <p class="font-heading text-left font-medium text-lg text-gray-900">Promote efficient, safe, and sustainable transportation, such as traffic management systems, intelligent transportation networks, or autonomous vehicles. Additionally, the challenge includes sets that address environmental concerns, such as preserving natural heritage, reducing waste and loss, and promoting sustainable living. Participants are also encouraged to create solutions that improve the quality of life for young families in smart cities, such as child care and safety and family-friendly public spaces.</p>        </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* // FOOTER SECTION */}

            <Footer />

            {/* FOOTER SECTION */}
        </>
    );
}

export default Challenge;
