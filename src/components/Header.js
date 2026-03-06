import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = ["Home", "About", "Experience", "Projects", "Contact"];

const Header = ({ refsMap }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (key) => {
    refsMap[key]?.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-black/80 backdrop-blur-lg border-b border-white/5" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-lg font-display font-semibold tracking-tight text-white"
          whileHover={{ scale: 1.02 }}
        >
          <span className="text-neutral-400">@</span>ajinkya
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="px-4 py-2 text-sm text-neutral-400 hover:text-white 
                         transition-colors duration-200 rounded-lg hover:bg-white/5"
            >
              {item}
            </button>
          ))}
          
          {/* CTA Button */}
          <a
            href="#contact"
            className="ml-4 px-4 py-2 text-sm font-medium text-black bg-white 
                       rounded-lg hover:bg-neutral-200 transition-colors duration-200"
          >
            Let's Talk
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/5"
          >
            <div className="px-6 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left px-4 py-3 text-neutral-400 
                             hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
              <a
                href="#contact"
                className="block w-full text-center mt-4 px-4 py-3 text-sm font-medium 
                           text-black bg-white rounded-lg hover:bg-neutral-200 transition-colors"
              >
                Let's Talk
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
