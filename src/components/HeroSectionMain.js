import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSectionMain = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-16">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium 
                         text-neutral-400 bg-white/5 border border-white/10 rounded-full">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            Open to Frontend Engineer roles
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold 
                         tracking-tight text-white leading-[1.1] mb-6">
            Hi, I'm Ajinkya
            <span className="block text-neutral-500 mt-2">
              Frontend Engineer
            </span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-10"
        >
          3+ years building with React and Next.js App Router. Focused on RSC-first architectures, 
          Core Web Vitals optimization, and shipping measurably faster user experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          <a
            href="#projects"
            className="px-6 py-3 text-sm font-medium text-black bg-white rounded-lg 
                       hover:bg-neutral-200 transition-all duration-200 
                       hover:shadow-lg hover:shadow-white/10"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-sm font-medium text-white bg-white/5 
                       border border-white/10 rounded-lg hover:bg-white/10 
                       hover:border-white/20 transition-all duration-200"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-4"
        >
          {[
            { icon: Github, href: "https://github.com/ajinkyaashok", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/ajinkyaashok", label: "LinkedIn" },
            { icon: Mail, href: "mailto:ajinkyaashokghate@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="p-2.5 text-neutral-500 hover:text-white bg-white/5 
                         border border-white/10 rounded-lg hover:bg-white/10 
                         hover:border-white/20 transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-neutral-600"
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSectionMain;
