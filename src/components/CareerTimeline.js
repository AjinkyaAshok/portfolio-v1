import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const careerData = [
  {
    role: "Software Engineer",
    company: "Procohat Technologies",
    duration: "Oct 2021 – Aug 2022",
    description:
      "Built and optimized scalable React applications using React, Redux, and Tailwind CSS. Improved efficiency by 20%, collaborated with cross-functional teams, and delivered data-driven insights.",
  },
  {
    role: "Frontend Developer",
    company: "Quanscendence Technologies",
    duration: "Apr 2020 – Oct 2021",
    description:
      "Contributed to an EdTech startup using React, Tailwind, and GraphQL; improved app responsiveness by 25%, enhanced UX, and reduced development time by 20%.",
  },
  {
    role: "Software Development Intern",
    company: "Anadigi Corp.",
    duration: "May 2019 – JUly 2019",
    description:
      "Assisted in building frontend components and learned best practices for scalable, maintainable codebases.",
  },
];

const CareerTimeline = ({timelineRef}) => {
  // const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section className="py-16 flex justify-center">
      <div className="w-full max-w-5xl px-4">
        {/* <h2 className="text-3xl font-bold mb-14 text-center text-gray-800 dark:text-white">
          Career Timeline
        </h2> */}

        <div className="relative top-10" ref={timelineRef}>
          {/* Background timeline line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-gray-300 dark:bg-gray-700"></div>

          {/* Scroll-progress animated line */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1 bg-blue-500 origin-top"
            style={{ scaleY }}
          ></motion.div>

          {careerData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12 flex flex-col md:flex-row items-center"
              >
                {/* Left Card */}
                <div
                  className={`w-full md:w-1/2 flex ${
                    isLeft ? "justify-end md:pr-8" : "justify-center md:invisible"
                  }`}
                >
                  {isLeft && (
                    <div className="bg-white dark:bg-zinc-950 p-5 rounded-lg shadow-lg max-w-md text-center md:text-right w-full">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {item.role}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.company} • {item.duration}
                      </p>
                      <p className="mt-2 text-gray-700 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 top-20 w-4 h-4 bg-neutral-400
                 rounded-full hidden md:block border-4 border-white dark:border-neutral-600"></div>

                {/* Right Card */}
                <div
                  className={`w-full md:w-1/2 flex ${
                    !isLeft ? "justify-start md:pl-8" : "justify-center md:invisible"
                  }`}
                >
                  {!isLeft && (
                    <div className="bg-white dark:bg-zinc-950 p-5 rounded-lg shadow-lg max-w-md text-center md:text-left w-full">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {item.role}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.company} • {item.duration}
                      </p>
                      <p className="mt-2 text-gray-700 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
