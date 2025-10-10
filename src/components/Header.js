import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import MainImage from "../images/user_profile_picture.jpg";

const NAV_ITEMS = ["Home", "About", "Projects", "Contact"];

const Header = ({ refsMap }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (key) => {
    refsMap[key]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-10 mx-auto
                 w-11/12 max-w-6xl flex justify-between items-center
                 px-5 h-20 z-50 bg-white/10 border border-white/20
                 backdrop-blur-md drop-shadow-lg text-white/80 rounded-2xl"
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src={MainImage}
          alt="Profile"
          className="w-10 h-10 rounded-full border border-white/30"
        />
        <h1 className="text-lg md:text-xl font-semibold tracking-wide">
          Ajinkya Ashok
        </h1>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-6 text-sm md:text-base">
        {NAV_ITEMS.map((item) => (
          <motion.button
            key={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative px-2 py-1 text-white/80 hover:text-white transition duration-200"
            onClick={() => handleScroll(item)}
          >
            <span className="hover-underline-animation">{item}</span>
          </motion.button>
        ))}
      </nav>

      {/* Mobile Menu */}
      <button
        className="block md:hidden text-white"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full bg-black/90 backdrop-blur-lg
                     border-t border-white/10 flex flex-col items-center py-4 md:hidden rounded-b-2xl"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className="py-2 text-white/80 hover:text-white w-full text-center transition"
              onClick={() => {
                handleScroll(item);
                setMenuOpen(false);
              }}
            >
              {item}
            </button>
          ))}
        </motion.nav>
      )}

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
    </motion.header>
  );
};

export default Header;
