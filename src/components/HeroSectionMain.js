import React from "react";
import { cn } from "../utils/utils";
import { Spotlight } from "../ui/Spotlight";

const HeroSectionMain = () => {
  return (
    <section
      className="relative flex h-[40rem] w-full overflow-hidden rounded-md 
                 bg-black/[0.96] antialiased md:items-center md:justify-center
                 pt-24"  // Add top padding equal or larger than navbar height
    >
      {/* Background Grid */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 select-none [background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      {/* Spotlight */}
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 top-14 md:top-0 text-center">
        <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-400 
                       bg-clip-text text-4xl font-bold text-transparent 
                       md:text-7xl leading-tight tracking-tight">
          Crafting <br className="hidden sm:block" /> Seamless Experiences.
        </h1>
        <p className="mt-6 mx-auto max-w-xl text-base text-neutral-300 
                      font-light md:text-lg leading-relaxed">
          From building sleek, scalable applications with React to optimizing
          user experience with responsive designs — I thrive on turning ideas
          into clean, functional code.
        </p>
      </div>
    </section>
  );
};

export default HeroSectionMain;
