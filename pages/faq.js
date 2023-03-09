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

      <section className="pb-4 bg-white overflow-hidden">
        <NavBar />
      </section>
      <section class="py-4 md:py-8 bg-coolGray-50">
        <div class="container px-4 mx-auto">
          <div class="md:max-w-4xl mx-auto mb-12 text-center">
            <FAQAccordion />
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
