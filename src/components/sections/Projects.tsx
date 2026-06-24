"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { SectionShell } from "@/components/layout/SectionShell";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

const sizeClasses = {
  large: "md:col-span-2 md:row-span-2",
  medium: "md:col-span-1 md:row-span-2",
  small: "md:col-span-1 md:row-span-1",
};

export default function Projects() {
  return (
    <SectionShell
      id="projects"
      title="Projects"
      subtitle="Selected work spanning AI research, web platforms, and product engineering."
      className="bg-secondary/20"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[minmax(180px,auto)]">
        {projects.map((project, index) => (
          <ScrollReveal
            key={project.id}
            delay={index * 0.05}
            className={cn(sizeClasses[project.size])}
          >
            <TiltCard className="flex h-full flex-col overflow-hidden">
              <div className="relative aspect-video overflow-hidden bg-muted/30 md:aspect-auto md:min-h-[140px] md:flex-1">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {project.featured && (
                  <Badge className="absolute left-3 top-3 bg-primary/90 text-primary-foreground">
                    Featured
                  </Badge>
                )}
              </div>
              <div className="flex flex-col gap-3 p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-heading text-lg font-semibold">
                    {project.title}
                  </h3>
                  <Badge variant="outline">{project.category}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <p className="font-heading text-lg font-bold text-primary">
                        {metric.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto flex gap-2 pt-2">
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github data-icon="inline-start" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink data-icon="inline-start" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
    </SectionShell>
  );
}
