import React, { useRef, useCallback } from "react";
import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import Portfolio from "../../components/Portfolio/Portfolio";
import Experience from "../../components/Experience/Experience";
import Education from "../../components/Education/Education";
import ContactForm from "../../components/ContactForm/ContactForm";

const Home = () => {
  const sectionRefs = useRef({});

  const scrollToSection = useCallback((sectionId) => {
    const section = sectionRefs.current[sectionId];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Section ${sectionId} not found`);
    }
  }, []);

  return (
    <Layout scrollToSection={scrollToSection}>
      <div ref={(el) => (sectionRefs.current.hero = el)} id="hero">
        <Hero />
      </div>
      <div ref={(el) => (sectionRefs.current.services = el)} id="services">
        <Services />
      </div>
      <div ref={(el) => (sectionRefs.current.portfolio = el)} id="portfolio">
        <Portfolio />
      </div>
      <div ref={(el) => (sectionRefs.current.experience = el)} id="experience">
        <Experience />
      </div>
      <div ref={(el) => (sectionRefs.current.education = el)} id="education">
        <Education />
      </div>
      <div ref={(el) => (sectionRefs.current.contact = el)} id="contact">
        <ContactForm />
      </div>
    </Layout>
  );
};

export default Home;
