"use client";

import { SectionShell } from "@/components/layout/SectionShell";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import {
  researchAreas,
  researchInterests,
  researchItems,
} from "@/lib/data/research";

export default function Research() {
  return (
    <SectionShell
      id="research"
      title="Research"
      subtitle="Academic work at the intersection of AI, speech, vision, and health informatics."
    >
      <div className="mb-10 flex flex-col gap-6">
        <ScrollReveal>
          <div>
            <h3 className="mb-3 font-heading text-lg font-semibold">
              Research Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {researchInterests.map((interest) => (
                <Badge key={interest} variant="outline">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <div>
            <h3 className="mb-3 font-heading text-lg font-semibold">Areas</h3>
            <div className="flex flex-wrap gap-2">
              {researchAreas.map((area) => (
                <Badge key={area} variant="secondary">
                  {area}
                </Badge>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {researchItems.map((item, index) => (
          <ScrollReveal key={item.title} delay={index * 0.08}>
            <article className="group h-full rounded-xl border border-white/5 bg-card/80 p-6 transition-colors hover:border-primary/20">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Badge
                  variant={
                    item.status === "Published"
                      ? "default"
                      : item.status === "Submitted"
                        ? "secondary"
                        : "outline"
                  }
                >
                  {item.status}
                </Badge>
                <span className="font-mono text-xs text-muted-foreground">
                  {item.year}
                </span>
                <span className="text-xs text-muted-foreground">·</span>
                <span className="text-xs text-primary">{item.area}</span>
              </div>
              <h3 className="font-heading text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              {item.venue && (
                <p className="mt-2 font-mono text-xs text-muted-foreground">
                  {item.venue}
                </p>
              )}
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </SectionShell>
  );
}
