import React from "react";

export default function ContactSection() {
  return (
    <section
      className="bg-black py-24 px-4 md:px-12 flex flex-col items-center justify-center 
                 text-white space-y-6 rounded-b-xl shadow-lg max-w-7xl mx-auto"
    >
      {/* Title */}
      <h2
        className="text-2xl md:text-3xl font-semibold text-center 
                   bg-gradient-to-r from-[#333] to-[#555] bg-clip-text text-transparent"
      >
        Let’s chat!
      </h2>

      {/* Email Link */}
      <div className="flex justify-center">
        <a
          href="mailto:ajinkyaashokghate@gmail.com"
          aria-label="Send an email to Ajinkya Ashok Ghate"
          className="text-3xl md:text-5xl lg:text-6xl font-semibold 
                     text-white hover:text-[#909090] transition-colors duration-300 ease-in-out 
                     break-words text-center"
        >
          ajinkyaashokghate@gmail.com
        </a>
      </div>
    </section>
  );
}

