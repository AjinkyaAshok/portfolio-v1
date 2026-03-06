import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";

// PLACEHOLDER: Your career/experience data
const experienceData = [
  {
    role: "Software Engineer",
    company: "Procohat Technologies",
    companyUrl: "", // PLACEHOLDER: Company website URL
    duration: "Oct 2021 – Aug 2022",
    type: "Full-time",
    description:
      "Built and optimized scalable React applications using React, Redux, and Tailwind CSS. Improved efficiency by 20%, collaborated with cross-functional teams, and delivered data-driven insights.",
    skills: ["React", "Redux", "Tailwind CSS", "TypeScript"],
  },
  {
    role: "Frontend Developer",
    company: "Quanscendence Technologies",
    companyUrl: "", // PLACEHOLDER: Company website URL
    duration: "Apr 2020 – Oct 2021",
    type: "Full-time",
    description:
      "Contributed to an EdTech startup using React, Tailwind, and GraphQL; improved app responsiveness by 25%, enhanced UX, and reduced development time by 20%.",
    skills: ["React", "GraphQL", "Tailwind CSS", "REST APIs"],
  },
  {
    role: "Software Development Intern",
    company: "Anadigi Corp.",
    companyUrl: "", // PLACEHOLDER: Company website URL
    duration: "May 2019 – July 2019",
    type: "Internship",
    description:
      "Assisted in building frontend components and learned best practices for scalable, maintainable codebases.",
    skills: ["JavaScript", "HTML/CSS", "React"],
  },
];

const ExperienceTimeline = ({ timelineRef }) => {
  return (
    <section ref={timelineRef} className="section-padding px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2">
            {/* PLACEHOLDER: Section title */}
            Where I've worked
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-white/20 border-2 border-white/40" />

                {/* Card */}
                <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:border-white/10 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
                          >
                            {exp.company}
                            <ExternalLink size={12} />
                          </a>
                        ) : (
                          <span className="text-neutral-400">{exp.company}</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-neutral-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {exp.duration}
                      </span>
                      <span className="px-2 py-0.5 text-xs bg-white/5 border border-white/10 rounded">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 text-xs text-neutral-500 bg-white/[0.03] rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          {/* PLACEHOLDER: Your resume link */}
          <button
            type="button"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium 
                       text-white bg-white/5 border border-white/10 rounded-lg 
                       hover:bg-white/10 hover:border-white/20 transition-all duration-200"
          >
            <Briefcase size={16} />
            View Full Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
