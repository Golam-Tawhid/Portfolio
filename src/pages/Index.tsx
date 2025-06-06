import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Research from "../components/sections/Research";
import Blog from "../components/sections/Blog";
import Contact from "../components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Research />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
