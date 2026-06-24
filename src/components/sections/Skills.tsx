"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionShell } from "@/components/layout/SectionShell";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/lib/data/skills";
import { cn } from "@/lib/utils";

export default function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id);
  const active = skillCategories.find((c) => c.id === activeId)!;

  return (
    <SectionShell
      id="skills"
      title="Skills"
      subtitle="Interactive constellation of technologies I work with across the stack."
      className="bg-secondary/20"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <ScrollReveal>
          <div
            className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center"
            role="tablist"
            aria-label="Skill categories"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full border border-white/5 bg-card/30"
            />
            <div
              aria-hidden="true"
              className="absolute inset-8 rounded-full border border-dashed border-primary/20"
            />
            {skillCategories.map((category, index) => {
              const angle = (index / skillCategories.length) * 2 * Math.PI - Math.PI / 2;
              const radius = 42;
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);
              const isActive = activeId === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(category.id)}
                    className={cn(
                      "absolute -translate-x-1/2 -translate-y-1/2 rounded-full border px-3 py-2 text-xs font-medium transition-all duration-300 focus-ring md:min-h-11 md:min-w-11 md:text-sm",
                    isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
                      : "border-white/10 bg-background/80 text-foreground/80 hover:border-primary/30"
                  )}
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  {category.label}
                </button>
              );
            })}
            <div className="relative z-10 text-center">
              <p className="font-heading text-2xl font-bold gradient-text">
                {active.label}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {active.skills.length} technologies
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            role="tabpanel"
            aria-label={`${active.label} skills`}
            className="flex min-h-[280px] flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                {active.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Badge
                      variant="outline"
                      className="px-4 py-2 text-sm border-white/10 bg-card/50"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </SectionShell>
  );
}
