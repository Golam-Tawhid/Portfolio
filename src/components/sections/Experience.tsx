"use client";

import { useState } from "react";
import { SectionShell } from "@/components/layout/SectionShell";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { experiences } from "@/lib/data/experience";
import { cn } from "@/lib/utils";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <SectionShell
      id="experience"
      title="Experience"
      subtitle="Building products, conducting research, and shipping solutions across domains."
    >
      <div className="relative mx-auto max-w-3xl">
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-[11px] top-0 w-px bg-border md:left-[15px]"
        />
        <ol className="flex flex-col gap-6">
          {experiences.map((exp, index) => {
            const isActive = activeIndex === index;
            return (
              <ScrollReveal as="li" key={exp.organization} delay={index * 0.06}>
                  <div
                    className={cn(
                      "relative rounded-xl border transition-all duration-300",
                      isActive
                        ? "border-primary/40 bg-card shadow-[0_0_30px_-10px_hsl(var(--primary)/0.3)]"
                        : "border-white/5 bg-card/50 hover:border-white/10"
                    )}
                  >
                    <button
                      type="button"
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      onClick={() => setActiveIndex(isActive ? null : index)}
                      aria-expanded={isActive}
                      className="relative w-full p-6 pl-10 text-left focus-ring md:pl-12"
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute left-3 top-8 size-4 rounded-full border-2 transition-colors md:left-4",
                          isActive
                            ? "border-primary bg-primary"
                            : "border-muted-foreground bg-background"
                        )}
                      />
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                        <h3 className="font-heading text-lg font-semibold">
                          {exp.role}
                        </h3>
                        <span className="font-mono text-sm text-primary">
                          {exp.duration}
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-muted-foreground">
                        {exp.organization}
                        {exp.location ? ` · ${exp.location}` : ""}
                      </p>
                      <p
                        className={cn(
                          "mt-3 text-muted-foreground transition-all duration-300",
                          isActive ? "opacity-100" : "line-clamp-2 opacity-80"
                        )}
                      >
                        {exp.description}
                      </p>
                    </button>
                    {isActive && (
                      <ul className="flex flex-col gap-2 border-t border-white/5 px-6 pb-6 pl-10 md:pl-12">
                        {exp.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-sm text-foreground/80 before:text-primary before:content-['▸']"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </ScrollReveal>
            );
          })}
        </ol>
      </div>
    </SectionShell>
  );
}
