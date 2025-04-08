import { FlipWords } from "../ui/flip-words";
import React from "react";

export default function HeroSectionFlipWords() {
  const words = ["responsive", "modern", "beautiful", "stable"];


  return (
    <div className="flex flex-col antialiased lg:flex-row items-center px-6 sm:px-10 m-auto">
      <div className="h-[25rem] sm:h-[30rem] lg:h-[40rem] flex justify-center items-center px-4">
        <div className="text-3xl sm:text-4xl lg:text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 text-center lg:text-left">
          I build <FlipWords words={words} /> <br />
          web applications with modern tech stack.
        </div>
      </div>


      <section className="border-[1px] rounded-md p-10 text-sm sm:text-base text-justify w-full lg:w-1/2 text-white font-soft mt-8 lg:mt-0">
        <p>
          Hello <br />
          I’m a frontend-focused Software Engineer skilled in React, Next.js, TypeScript, and Tailwind CSS.  
          I build scalable, high-performance web apps with seamless UI/UX and optimized backend integrations  
          using REST APIs and GraphQL. With a Master’s in Business Analytics, I combine technical expertise  
          and data-driven insights to craft impactful digital experiences. Let’s build something awesome! 🚀
        </p>
      </section>
    </div>
  );
}
