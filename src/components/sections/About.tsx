"use client";

import { SectionShell } from "@/components/layout/SectionShell";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { aboutTimeline } from "@/lib/data/about";
import { profile } from "@/lib/data/profile";

export default function About() {
  return (
    <SectionShell
      id="about"
      title="About Me"
      subtitle="From classroom to research lab to startup, building with purpose at every step."
      className="bg-secondary/20"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <ScrollReveal>
          <div className="flex flex-col gap-4">
            {profile.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-lg text-foreground/85">
                {paragraph}
              </p>
            ))}
            <blockquote className="mt-4 border-l-2 border-primary pl-4 italic text-muted-foreground">
              {profile.philosophy}
            </blockquote>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/50 via-border to-transparent md:left-6"
          />
          <ol className="flex flex-col gap-8">
            {aboutTimeline.map((milestone, index) => (
              <ScrollReveal
                as="li"
                key={milestone.title}
                delay={index * 0.08}
                className="relative pl-10 md:pl-14"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-2.5 top-1.5 size-3 rounded-full border-2 border-primary bg-background md:left-4"
                />
                <p className="font-mono text-sm text-primary">{milestone.year}</p>
                <h3 className="mt-1 font-heading text-xl font-semibold">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {milestone.description}
                </p>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </div>
    </SectionShell>
  );
}
