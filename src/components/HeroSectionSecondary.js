import React from "react";
import { motion } from "framer-motion";
import ProfileImage from "../images/user_profile_picture.jpg";

const HeroSectionSecondary = () => {
  // PLACEHOLDER: Your skills data
  const skills = [
    { name: "React" },
    { name: "TypeScript" },
    { name: "Next.js" },
    { name: "Tailwind CSS" },
    { name: "Node.js" },
    { name: "GraphQL" },
  ];

  // PLACEHOLDER: Your stats/metrics
  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "20+", label: "Projects Completed" },
    { value: "15+", label: "Happy Clients" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
            About
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2">
            {/* PLACEHOLDER: Section title */}
            A bit about me
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* Main Bio Card - Spans 2 columns */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 p-8 bg-white/[0.02] border border-white/5 rounded-2xl 
                       hover:border-white/10 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* PLACEHOLDER: Your profile image */}
              <img
                src={ProfileImage}
                alt="Profile"
                className="w-24 h-24 rounded-2xl object-cover border border-white/10"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {/* PLACEHOLDER: Your name */}
                  Ajinkya Ashok
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {/* PLACEHOLDER: Your bio paragraph */}
                  Frontend-focused Software Engineer with expertise in React, Next.js, 
                  TypeScript, and Tailwind CSS. I specialize in building scalable, 
                  high-performance web applications with seamless UI/UX experiences. 
                  With a Master's in Business Analytics, I combine technical skills 
                  with data-driven insights to create impactful digital solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            variants={itemVariants}
            className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl 
                       hover:border-white/10 transition-all duration-300"
          >
            <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-6">
              Quick Stats
            </h3>
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-baseline justify-between">
                  <span className="text-3xl font-display font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="text-sm text-neutral-500">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-1 p-8 bg-white/[0.02] border border-white/5 
                       rounded-2xl hover:border-white/10 transition-all duration-300"
          >
            <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-6">
              Core Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-sm text-neutral-300 bg-white/5 
                             border border-white/10 rounded-lg"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            variants={itemVariants}
            className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl 
                       hover:border-white/10 transition-all duration-300"
          >
            <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">
              Location
            </h3>
            {/* PLACEHOLDER: Your location */}
            <p className="text-xl font-semibold text-white mb-1">United States</p>
            <p className="text-sm text-neutral-500">Remote friendly</p>
          </motion.div>

          {/* Currently Card */}
          <motion.div
            variants={itemVariants}
            className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                       border border-white/5 rounded-2xl hover:border-white/10 
                       transition-all duration-300"
          >
            <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">
              Currently
            </h3>
            {/* PLACEHOLDER: What you're currently doing/learning */}
            <p className="text-xl font-semibold text-white mb-1">
              Open to Work
            </p>
            <p className="text-sm text-neutral-400">
              Looking for Frontend Engineer roles
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSectionSecondary;
