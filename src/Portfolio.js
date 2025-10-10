import React, { useRef } from "react";
import Footer from "./components/Footer";
import HeroSectionMain from "./components/HeroSectionMain";
import HeroSectionSecondary from "./components/HeroSectionSecondary";
import ContactSection from "./components/Contact";
import { AnimatedProjectsScroll } from "./components/Projects";
import Header from "./components/Header";

const Portfolio = () => {
  const refsMap = {
    Home: useRef(null),
    About: useRef(null),
    Projects: useRef(null),
    Contact: useRef(null),
  };

  return (
    <div className="bg-[#0D0D0D]">
      
      <div className="lg:w-8/12 m-auto shadow-2xl  shadow-black bg-[#0D0D0D] ">
        <Header refsMap={refsMap} />

        <section ref={refsMap.Home}>
          <HeroSectionMain />
        </section>

        <section ref={refsMap.About}>
          <HeroSectionSecondary />
        </section>

        <section ref={refsMap.Projects}>
          <AnimatedProjectsScroll />
        </section>

        <section ref={refsMap.Contact}>
          <ContactSection />
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
