import React from "react";
import { FlipWords } from "../ui/flip-words";
const HeroSectionSecondary = () => {
  const words = ["responsive", "modern", "scalable", "stable"];

  return (
    <section className="flex flex-col lg:flex-row items-center px-6 sm:px-10 mx-auto antialiased gap-10 lg:gap-16">
      {/* Left Hero Text */}
      <div className="flex justify-center items-center h-[25rem] sm:h-[30rem] lg:h-[40rem] px-4 w-full lg:w-1/2">
        <h1 className="text-4xl sm:text-4xl lg:text-5xl font-normal text-neutral-600 dark:text-neutral-400 text-left leading-snug">
          I build <FlipWords words={words} />
          <br />
          web applications with modern tech stack.
        </h1>
      </div>

      {/* Right Description Section */}
      {/* <aside className="border border-neutral-700 rounded-md p-8 sm:p-10 w-full lg:w-1/2 text-white font-soft text-sm sm:text-base text-justify bg-black/[0.85]"> */}
      <aside className="shadow-lg shadow-zinc-900 rounded-md p-8 sm:p-10 w-full lg:w-1/2 text-justify font-light text-neutral-300  sm:text-base bg-zinc-950">
        <p className="leading-relaxed">
          Frontend-focused Software Engineer specializing in React, Next.js,
          TypeScript, and Tailwind CSS, with expertise in building scalable,
          high-performance web applications and delivering seamless UI/UX
          experiences. Skilled in Redux, modern state management, and
          integrating REST APIs and GraphQL for optimized backend communication.
          Experienced in Agile workflows and CI/CD pipelines. Holding a Master’s
          in Business Analytics, I combine technical expertise with data-driven
          insights to create intelligent, impactful digital solutions that drive
          business growth.
        </p>
      </aside>
    </section>
  );
};
export default HeroSectionSecondary;
