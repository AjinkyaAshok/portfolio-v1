const projects = [
    {
      title: "Case Study One",
      description: "A design system built for scalable SaaS products.",
      role: "Lead UI Developer",
      tools: ["Figma", "React", "Tailwind"],
      link: "#",
    },
    {
      title: "Case Study Two",
      description: "Marketing site rebrand for a fintech startup.",
      role: "Frontend Developer",
      tools: ["Next.js", "GSAP", "Tailwind"],
      link: "#",
    },
    // Add more projects here...
  ];
  
  export default function ProjectSectionNew() {
    return (
      <section className="min-h-screen bg-black py-20 px-4">
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Project Case Studies
          </h2>
  
          <div className="flex flex-col gap-y-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/20 rounded-xl p-6 backdrop-blur-lg transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="text-sm text-gray-400 mb-1">
                  <span className="font-medium text-white">Role: </span>
                  {project.role}
                </div>
                <div className="text-sm text-gray-400 mb-4">
                  <span className="font-medium text-white">Tools: </span>
                  {project.tools.join(", ")}
                </div>
                <a
                  href={project.link}
                  className="inline-block mt-auto text-sm text-white underline underline-offset-4 hover:text-gray-300 transition"
                >
                  Read Case Study →
                </a>
              </div>
              
            ))}
          </div>
      
        </div>
      </section>
    );
  }
  