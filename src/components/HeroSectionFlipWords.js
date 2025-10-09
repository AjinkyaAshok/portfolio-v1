import React from "react";
import { FlipWords } from "../ui/flip-words";
export default function HeroSectionFlipWords() {
  const words = ["responsive", "modern", "beautiful", "stable"];

  return (
    <section className="flex flex-col lg:flex-row items-center px-6 sm:px-10 mx-auto antialiased gap-10 lg:gap-16">
      {/* Left Hero Text */}
      <div className="flex justify-center items-center h-[25rem] sm:h-[30rem] lg:h-[40rem] px-4 w-full lg:w-1/2">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-600 dark:text-neutral-400 text-center lg:text-left leading-snug">
          I build <FlipWords words={words} /> <br />
          web applications with modern tech stack.
        </h1>
      </div>

      {/* Right Description Section */}
      <aside className="border border-neutral-700 rounded-md p-8 sm:p-10 w-full lg:w-1/2 text-white font-soft text-sm sm:text-base text-justify bg-black/[0.85]">
        <p className="leading-relaxed">
          Hello <br />
          I’m a frontend-focused Software Engineer skilled in React, Next.js,
          TypeScript, and Tailwind CSS. I build scalable, high-performance web
          apps with seamless UI/UX and optimized backend integrations using REST
          APIs and GraphQL. With a Master’s in Business Analytics, I combine
          technical expertise and data-driven insights to craft impactful
          digital experiences. Let’s build something awesome! 🚀
        </p>
      </aside>
    </section>
  );
}
