import React, { useRef } from "react";
import MainImage from "../images/passport.jpg";
import { cn } from "../utils/utils";

import { TextGenerateEffect } from "../ui/text-generate-effect";
import { FlipWords } from "../ui/flip-words";
import { Spotlight } from "../ui/Spotlight";
import Headerv2 from "./Headerv2";
import HeroSectionFlipWords from "./HeroSectionFlipWords";

const word = ` About Me I’m a frontend-focused Software Engineer passionate about
          building scalable, high-performance web applications with React.js,
          Next.js, TypeScript, and Tailwind CSS. I specialize in creating
          seamless UI/UX experiences, optimizing performance, and integrating
          RESTful APIs & GraphQL for smooth backend connectivity. With a
          Master’s in Business Analytics, I blend technical expertise with
          data-driven decision-making to craft intelligent, user-centric
          solutions. Experienced in Agile development and CI/CD pipelines, I
          thrive on building impactful digital experiences. Let’s create
          something great! 🚀`;
const HeroSectionSpotlight = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div>
      {/* <section>
        <div className="mx-auto lg:w-1/3 md:w-1/3 w-1/2 overflow-hidden text-white mt-16">
          <div className="flex lg:animate-[move_6s_linear_infinite] md:animate-[move_6s_linear_infinite] animate-[move_3s_linear_infinite] ">
            <div className="whitespace-nowrap  text-[#a7a6a6]">
              SOFTWARE ENGINEERING ・ UI/UX ・ REACT JS ・ BRANDING ・ WEB ・
              SOFTWARE ENGINEERING ・ UI/UX ・ REACT JS ・ BRANDING ・ WEB ・
              SOFTWARE ENGINEERING ・ UI/UX ・ REACT JS ・ BRANDING ・ WEB ・
            </div>
          </div>
        </div>
      </section> */}

      {/* spotlight */}
      <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
          )}
        />

        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
            Crafting <br /> Seamless Experiences.
          </h1>
          <p className="mx-auto font-soft mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
            From building sleek, scalable applications with React to optimizing
            user experience with responsive designs, I thrive on turning ideas
            into clean, functional code. I could say more, but I might already
            be running out of lines!
          </p>
        </div>

        <Headerv2
          refsMap={{
            Home: homeRef,
            About: aboutRef,
            Projects: projectsRef,
            Contact: contactRef,
          }}
        />

      </div>
        {/* <section ref={homeRef} id="home" className="min-h-screen">
       <HeroSectionSpotlight/>
        </section>
        <section ref={aboutRef} id="about" className="min-h-screen">
          <HeroSectionFlipWords/>
        </section>
        <section ref={projectsRef} id="projects" className="min-h-screen">
          Projects Content
        </section>
        <section ref={contactRef} id="contact" className="min-h-screen">
          Contact Content
        </section> */}

      {/* flipwords */}

      {/* <TextGenerateEffect words={words} /> */}

      {/* <section className="flex items-center justify-center p-10">
        <div className="flex flex-col animate-[wiggle_5s_linear_infinite] tracking-tighter text-right font-bebas left- right- sm:text-5xl md:text-7xl lg:text-[160px] text-6xl">
          <h1 className="text-white font-semibold">SOFTWARE</h1>
          <h1 className="text-[#737373] font-semibold">ENGINEER</h1>
        </div>
      </section> */}

      {/* <section className="flex flex-col gap-y-3 text-lg text-center mt-12 text-white lg:px-96">
        <p>Hello</p>
        <p className="w-auto flex-grow">
          About Me I’m a frontend-focused Software Engineer passionate about
          building scalable, high-performance web applications with React.js,
          Next.js, TypeScript, and Tailwind CSS. I specialize in creating
          seamless UI/UX experiences, optimizing performance, and integrating
          RESTful APIs & GraphQL for smooth backend connectivity. With a
          Master’s in Business Analytics, I blend technical expertise with
          data-driven decision-making to craft intelligent, user-centric
          solutions. Experienced in Agile development and CI/CD pipelines, I
          thrive on building impactful digital experiences. Let’s create
          something great! 🚀
        </p>
      </section> */}
    </div>
  );
};

export default HeroSectionSpotlight;
