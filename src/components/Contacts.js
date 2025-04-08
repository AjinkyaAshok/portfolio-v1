import React from "react";

export default function ContactSection() {
  return (
    <section className="bg-black py-24 px-4 md:px-12 flex flex-col items-center justify-center text-white space-y-6 rounded-b-xl shadow-lg max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold text-center text-gradient">
        Let’s chat!
      </h2>
      
     

      <div className="flex justify-center">
        <a
          href="mailto:ajinkyaashokghate@gmail.com"
          className="text-6xl font-semibold text-white hover:text-[#909090] transition-all duration-300 ease-in-out"
        >
          ajinkyaashokghate@gmail.com
        </a>
      </div>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(to right, #333, #555);
          -webkit-background-clip: text;
          color: transparent;
        }
      `}</style>
    </section>
  );
}
