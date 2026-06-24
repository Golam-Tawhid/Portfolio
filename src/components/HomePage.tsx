"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Contact from "@/components/sections/Contact";

const BackgroundCanvas = dynamic(
  () =>
    import("@/components/effects/BackgroundCanvas").then((m) => m.BackgroundCanvas),
  { ssr: false }
);

const CustomCursor = dynamic(
  () => import("@/components/effects/CustomCursor").then((m) => m.CustomCursor),
  { ssr: false }
);

const About = dynamic(() => import("@/components/sections/About"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Research = dynamic(() => import("@/components/sections/Research"));
const Skills = dynamic(() => import("@/components/sections/Skills"));
const Achievements = dynamic(() => import("@/components/sections/Achievements"));
const Blog = dynamic(() => import("@/components/sections/Blog"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));

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
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
