import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} Ajinkya Ghate. All rights reserved.
        </p>
        <p className="text-sm text-neutral-600">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
