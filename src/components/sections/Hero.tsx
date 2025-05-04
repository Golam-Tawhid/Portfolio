import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hello, I'm{" "}
              <span className="gradient-text">Md Golam Tawhid Fahad</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Final-year Computer Science student at BRAC University passionate
              about Web Development, AI, and Machine Learning.
            </p>
            <p className="text-base md:text-lg max-w-md">
              I craft scalable web applications using Django, Flask, and React,
              and develop machine learning models with TensorFlow and OpenCV. I
              enjoy solving complex problems with creativity and technical
              depth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="group" asChild>
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-2xl absolute -z-10 animate-pulse-slow"></div>
            <div className="w-full aspect-square rounded-3xl overflow-hidden animate-fade-in">
              <img
                src="/gtf.png"
                alt="Md Golam Tawhid Fahad"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-fade-in">
          <span className="text-sm text-muted-foreground mb-2">
            Scroll to explore
          </span>
          <div className="w-5 h-9 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-2 bg-muted-foreground rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
