"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Research from "@/components/sections/Research";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import { BackgroundCanvas } from "@/components/effects/BackgroundCanvas";
import { CustomCursor } from "@/components/effects/CustomCursor";

export default function HomePage() {
  return (
    <>
      <BackgroundCanvas />
      <CustomCursor />
      <Navbar />
      <main id="main" className="flex min-h-screen flex-col">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Skills />
        <Achievements />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
