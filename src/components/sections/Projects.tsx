
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
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with product catalog, cart functionality, and payment processing.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "#",
    repoUrl: "#",
    category: "Web App"
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description: "Real-time weather application that displays forecasts and historical weather data with interactive charts.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["React", "Chart.js", "Weather API", "Tailwind CSS"],
    demoUrl: "#",
    repoUrl: "#",
    category: "Web App"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, drag-and-drop interface, and team permissions.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    tags: ["Vue.js", "Firebase", "Tailwind CSS", "Drag & Drop"],
    demoUrl: "#",
    repoUrl: "#",
    category: "Web App"
  },
  {
    id: 4,
    title: "Finance Tracker",
    description: "Personal finance application for tracking expenses, creating budgets, and visualizing spending habits.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["React", "D3.js", "Express", "PostgreSQL"],
    demoUrl: "#",
    repoUrl: "#",
    category: "Web App"
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
