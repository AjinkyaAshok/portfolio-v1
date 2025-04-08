import React from "react";
import { motion } from "framer-motion";

import MainImage from "../images/passport.jpg";

export default function Headerv2({ refsMap }) {

  // const handleScroll = (key) => {
  //   refsMap[key]?.current?.scrollIntoView({ behavior: "smooth" });
  // };
  return (
    <motion.div
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="bg-white/10 border border-white/20 backdrop-blur-md drop-shadow-lg text-white/80 rounded-2xl px-5 mt-5 h-20 w-11/12 max-w-6xl mx-auto top-0 absolute flex justify-between items-center z-50"
  >
    <div className="flex items-center gap-3">
      <img className="w-10 h-10 rounded-full border border-white/30" src={MainImage} alt="Profile" />
      <h1 className="text-lg md:text-xl font-semibold tracking-wide">Ajinkya Ashok</h1>
    </div>

    <nav className="hidden md:flex flex-col md:flex-row items-center gap-2 md:gap-x-6 text-sm md:text-base">
      {["Home", "About", "Projects", "Contact"].map((item, i) => (
        <motion.button
          key={item}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative px-2 py-1 text-white/80 hover:text-white transition duration-200"
          // onClick={() => handleScroll(item)}
        >
          <span className="hover-underline-animation">{item}</span>
        </motion.button>
      ))}
    </nav>

    <style jsx>{`
      .hover-underline-animation::after {
        content: "";
        position: absolute;
        width: 0%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: white;
        transition: width 0.3s ease-in-out;
      }
      .hover-underline-animation:hover::after {
        width: 100%;
      }
    `}</style>
  </motion.div>
  );
}
