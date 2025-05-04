
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
  category: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Archival System",
    description: "Platform to manage university RECoT activities.",
    image: "",
    tags: ["Flask", "React.js", "MUI"],
    demoUrl: "#",
    repoUrl: "#",
    category: "Web App"
  },
  {
    id: 2,
    title: "Cosmic Runner",
    description: "2D game with dynamic obstacles.",
    image: "",
    tags: ["Pygame"],
    demoUrl: "#",
    repoUrl: "#",
    category: "Game"
  },
  {
    id: 3,
    title: "ReadVenture",
    description: "Book exchange and review platform.",
    image: "",
    tags: ["Django"],
    demoUrl: "#",
    repoUrl: "#",
    category: "Web App"
  },
  {
    id: 4,
    title: "Silent Speech Recognition",
    description: "Lip-reading with 85%+ accuracy.",
    image: "",
    tags: ["TensorFlow", "OpenCV"],
    demoUrl: "#",
    repoUrl: "#",
    category: "AI"
  }
];

const Projects = () => {
  const categories = ["All", ...Array.from(new Set(PROJECTS.map((project) => project.category)))];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeCategory);
  
  return (
    <section id="projects" className="section">
      <div className="container-wide">
        <h2 className="section-heading">My Projects</h2>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm" asChild>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
