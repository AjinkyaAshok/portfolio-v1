import React,  from "react";


import Footer from "./components/Footer";
import HeroSectionSpotlight from "./components/HeroSectionSpotlight";
import HeroSectionFlipWords from "./components/HeroSectionFlipWords";

import ContactSection from "./components/Contacts";
import { AnimatedTestimonialsDemo } from "./components/Experience";

const Portfolio = () => {
  // const contactRef = useRef(null);
  // const workRef = useRef(null);
  // const homeRef = useRef(null);

  // const scrollContact = () => {
  //   contactRef.current.scrollIntoView({ behavior: "smooth" });
  // };
  // const scrollWork = () => {
  //   workRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  // const scrollHome = () => {
  //   homeRef.current.scrollIntoView(false, { behavior: "smooth" });
  // };

  return (
    <div className="bg-[#0D0D0D]">
      {/* ogi */}
      {/* <div className="relative h-full w-full bg-[#0D0D0D] px-4 py-8 sm:px-3 md:px-8 lg:px-8"> */}
      <div className="lg:w-8/12  m-auto shadow-2xl shadow-black bg-[#0D0D0D] ">
        {/* <Headerv2 /> */}
        <HeroSectionSpotlight />
        <HeroSectionFlipWords />

        {/* <Card /> */}
        {/* <FollowingPointerDemo/> */}
        <AnimatedTestimonialsDemo />
        {/* <ProjectSectionNew /> */}
        {/* <Timeline /> */}
        {/* <Projects /> */}
        {/* <AppleCardsCarouselDemo/> */}
        {/* <FeaturesSectionDemo/> */}
        <ContactSection />
        <Footer />
      </div>
      {/* <Header  ref={[scrollContact,scrollWork,scrollHome]}/> */}
    </div>
  );
};

export default Portfolio;
