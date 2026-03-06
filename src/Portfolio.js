import React, { useRef } from "react";
import Footer from "./components/Footer";
import HeroSectionMain from "./components/HeroSectionMain";
import HeroSectionSecondary from "./components/HeroSectionSecondary";
import ContactSection from "./components/Contact";
import Projects from "./components/Projects";
import Header from "./components/Header";
import ExperienceTimeline from "./components/ExperienceTimeline";

const Portfolio = () => {
  const refsMap = {
    Home: useRef(null),
    About: useRef(null),
    Experience: useRef(null),
    Projects: useRef(null),
    Contact: useRef(null),
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Navigation */}
      <Header refsMap={refsMap} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section ref={refsMap.Home} id="home">
          <HeroSectionMain />
        </section>

        {/* About Section */}
        <section ref={refsMap.About} id="about">
          <HeroSectionSecondary />
        </section>

        {/* Experience Section */}
        <section ref={refsMap.Experience} id="experience">
          <ExperienceTimeline />
        </section>

        {/* Projects Section */}
        <section ref={refsMap.Projects} id="projects">
          <Projects />
        </section>

        {/* Contact Section */}
        <section ref={refsMap.Contact} id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;
