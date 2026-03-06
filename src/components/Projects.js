import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

// PLACEHOLDER: Your projects data
const projectsData = [
  {
    title: "Check-Inn Optimization",
    description:
      "Delivery Access Management prototype aimed at streamlining check-ins for food delivery agents across residential and commercial complexes.",
    image: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/40ab4a62bf8e37e8df9d8fb26b2f9d112098ffcb/d13d493611ea393573e7f3d7fc37f9ba8a8fbe1a",
    tags: ["Case Study", "UX Design", "Figma"],
    liveUrl: "https://www.figma.com/community/file/1473705913486771548",
    githubUrl: "",
    featured: true,
  },
  {
    title: "Dash Dine",
    description:
      "Designed and developed end-to-end food delivery platform using React.js and Redux. Improved UX via enhanced filtering and streamlined order flows.",
    image: "", // PLACEHOLDER: Add your project image path
    tags: ["React", "Redux", "Tailwind CSS", "Full Stack"],
    liveUrl: "https://dashdine.netlify.app",
    githubUrl: "", // PLACEHOLDER: GitHub URL
    featured: true,
  },
  {
    title: "Tindog",
    description:
      "A playful concept inspired by Tinder for dogs, demonstrating creative UI design and user flow skills in a fun, engaging format.",
    image: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/a7feea485ae7fc505784030fe5e5c1928855940a/e3f15078d8486e3358b151ad2a7cb8e866ee456e",
    tags: ["Concept", "UI Design", "Prototyping"],
    liveUrl: "https://www.figma.com/community/file/1491455039743664381",
    githubUrl: "",
    featured: false,
  },
  // PLACEHOLDER: Add more projects here
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/5 
                  hover:border-white/10 transition-all duration-500 ${
                    project.featured ? "md:col-span-2" : ""
                  }`}
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
            <span className="text-neutral-600 text-sm">
              {/* PLACEHOLDER: Add project image */}
              Image placeholder
            </span>
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Quick Links - Top Right */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
              aria-label="View live project"
            >
              <ExternalLink size={16} className="text-white" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
              aria-label="View source code"
            >
              <Github size={16} className="text-white" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-1 text-xs text-neutral-400 bg-white/5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2 group-hover:text-neutral-200 transition-colors">
          {project.title}
          <ArrowUpRight 
            size={18} 
            className="text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" 
          />
        </h3>

        {/* Description */}
        <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>

      {/* Clickable overlay link */}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="absolute inset-0"
          aria-label={`View ${project.title}`}
        />
      )}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
              Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2">
              {/* PLACEHOLDER: Section title */}
              Selected work
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md">
            {/* PLACEHOLDER: Section description */}
            A collection of projects I've worked on, from concept to deployment.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          {/* PLACEHOLDER: Link to all projects or GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
          >
            View all projects on GitHub
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
