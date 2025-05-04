
import React from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

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
    { name: "JavaScript", percentage: 90, color: "bg-yellow-500" },
    { name: "React", percentage: 85, color: "bg-blue-500" },
    { name: "TypeScript", percentage: 80, color: "bg-blue-700" },
    { name: "Node.js", percentage: 75, color: "bg-green-600" },
    { name: "HTML/CSS", percentage: 95, color: "bg-orange-500" },
  ];

  return (
    <section id="about" className="section bg-secondary/50">
      <div className="container-wide">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <p className="text-lg">
              I'm a passionate software developer with expertise in creating responsive, user-friendly web applications. 
              With over 5 years of experience in the tech industry, I've developed a strong foundation in both frontend 
              and backend technologies.
            </p>
            <p>
              My journey began with a Bachelor's degree in Computer Science from Tech University. 
              Since then, I've worked with startups and established companies alike, bringing ideas to life 
              through clean, efficient code and thoughtful user experiences.
            </p>
            <p>
              When I'm not coding, you can find me hiking, reading about emerging tech trends, or 
              contributing to open-source projects. I'm constantly learning and exploring new technologies 
              to stay at the forefront of our rapidly evolving industry.
            </p>
            
            <div>
              <Button variant="outline" className="mt-4" asChild>
                <a href="/resume.pdf" download>
                  <FileText className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
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
