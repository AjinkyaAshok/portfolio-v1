import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";

const ContactSection = () => {
  const [copied, setCopied] = React.useState(false);

  const email = "ajinkyaashokghate@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com/in/ajinkyaa" },
    { name: "GitHub", url: "https://github.com/ajinkyaashok" },
    { name: "Portfolio", url: "https://ajinkya.online" },
  ];

  return (
    <section className="section-padding px-6">
      <div className="max-w-4xl mx-auto">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-4 mb-6">
            Let's work together
          </h2>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Have a project in mind or looking for a frontend engineer? 
            I'm open to new opportunities and always happy to connect.
          </p>
        </motion.div>

        {/* Email Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl mb-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-xl">
                <Mail size={24} className="text-neutral-400" />
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-1">Email me at</p>
                <a
                  href={`mailto:${email}`}
                  className="text-xl md:text-2xl font-medium text-white hover:text-neutral-300 transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-400 
                         bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 
                         hover:text-white transition-all duration-200"
            >
              {copied ? (
                <>
                  <Check size={16} />
                  Copied!
                </>
              ) : (
                <>
                  <Copy size={16} />
                  Copy
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 px-5 py-3 text-sm text-neutral-400 
                         bg-white/[0.02] border border-white/5 rounded-xl 
                         hover:border-white/10 hover:text-white transition-all duration-200"
            >
              {link.name}
              <ArrowUpRight 
                size={14} 
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" 
              />
            </a>
          ))}
        </motion.div>

        {/* Availability Status */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 
                          border border-green-500/20 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-green-400">
              Currently available for new opportunities
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
