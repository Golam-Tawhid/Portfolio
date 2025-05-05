import React from "react";
import { Button } from "../ui/button";
import { FileText, Mail, Linkedin, Github } from "lucide-react";

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
}

const SkillBar = ({ name, percentage, color = "bg-primary" }: SkillBarProps) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} animate-skill-bar rounded-full`}
          style={{ "--skill-percent": `${percentage}%` } as React.CSSProperties}
        ></div>
      </div>
    </div>
  );
};

const About = () => {
  const skills = [
    { name: "Python", percentage: 80, color: "bg-yellow-500" },
    { name: "C++", percentage: 80, color: "bg-blue-500" },
    { name: "JavaScript", percentage: 90, color: "bg-yellow-400" },
    { name: "React", percentage: 85, color: "bg-blue-600" },
    { name: "Flask", percentage: 75, color: "bg-green-600" },
    { name: "Django", percentage: 75, color: "bg-green-700" },
    { name: "MySQL", percentage: 80, color: "bg-orange-500" },
    { name: "MongoDB", percentage: 80, color: "bg-green-500" },
    { name: "TensorFlow", percentage: 70, color: "bg-purple-500" },
    { name: "Scikit-learn", percentage: 70, color: "bg-purple-600" },
    { name: "Git", percentage: 85, color: "bg-gray-600" },
    { name: "Linux", percentage: 80, color: "bg-gray-700" },
  ];

  return (
    <section id="about" className="section bg-secondary/50">
      <div className="container-wide">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Md Golam Tawhid Fahad</h1>
            <p className="text-lg">
              I’m Md Golam Tawhid Fahad, a final-year Computer Science undergraduate at BRAC University, deeply passionate about Web Development, Artificial Intelligence (AI), and Machine Learning (ML). With hands-on experience in building scalable web applications using Django, Flask, and React, and a strong foundation in machine learning using TensorFlow and OpenCV, I thrive in environments that demand creativity, logical problem-solving, and technical depth.
            </p>
            <p className="text-lg">
              My technical journey has been shaped by developing end-to-end systems—from dynamic web platforms to real-time ML models. I enjoy contributing to research that bridges computer science and real-world impact, especially in areas like biomedical engineering and multilingual voice recognition.
            </p>
            <p className="text-lg">
              I aspire to work in a collaborative setting that pushes technological boundaries and allows me to continually learn, innovate, and build solutions that matter.
            </p>
            <div className="flex space-x-6 mt-4">
              <a href="mailto:tawhidfahad199@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <Mail className="w-6 h-6 text-primary hover:text-primary/80 transition-colors" />
              </a>
              {/* <a href="tel:+8801703045450" target="_blank" rel="noopener noreferrer" aria-label="Phone">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary hover:text-primary/80 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l3.6 7.59-1.35 2.44a11.05 11.05 0 005.11 5.11l2.44-1.35L19 19v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                </svg>
              </a> */}
              <a href="https://github.com/Golam-Tawhid" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-6 h-6 text-primary hover:text-primary/80 transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/g-t-fahad" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6 text-primary hover:text-primary/80 transition-colors" />
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">My Skills</h3>
            
            <div className="space-y-6">
              {skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;