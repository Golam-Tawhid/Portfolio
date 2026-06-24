"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { SectionShell } from "@/components/layout/SectionShell";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { achievementStats, certifications } from "@/lib/data/stats";
import { Badge } from "@/components/ui/badge";

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      setCount(value);
      return;
    }

    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * value);
      setCount(start);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-heading text-4xl font-bold gradient-text md:text-5xl">
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <SectionShell
      id="achievements"
      title="Achievements"
      subtitle="Impact measured in projects shipped, research pursued, and teams led."
    >
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {achievementStats.map((stat, index) => (
          <ScrollReveal key={stat.label} delay={index * 0.08}>
            <div className="flex flex-col items-center gap-2 rounded-xl border border-white/5 bg-card/50 p-6 text-center transition-colors hover:border-primary/20">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.2}>
        <div className="mt-12">
          <h3 className="mb-4 font-heading text-lg font-semibold">Certifications</h3>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <Badge key={cert} variant="outline" className="border-white/10 bg-card/50 px-3 py-1.5">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </SectionShell>
  );
}
