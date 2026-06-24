"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { profile } from "@/lib/data/profile";

function HeroVisual() {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });

  return (
    <div
      className="hero-photo-frame hero-photo-rim relative aspect-[4/5] w-full max-w-md"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setSpotlight({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, hsl(var(--primary) / 0.18), transparent 55%)`,
        }}
      />
      <Image
        src="/profile.png"
        alt={profile.fullName}
        fill
        priority
        quality={85}
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, 400px"
      />
    </div>
  );
}

function RoleTyping() {
  const roles = profile.roles;
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (text.length < current.length) {
            setText(current.slice(0, text.length + 1));
          } else {
            setTimeout(() => setDeleting(true), 2000);
          }
        } else if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setDeleting(false);
          setIndex((i) => (i + 1) % roles.length);
        }
      },
      deleting ? 40 : 60
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, index, roles]);

  return (
    <span className="font-mono text-primary" aria-live="polite">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center pb-16 pt-28 md:pt-32"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 items-center gap-12 xl:grid-cols-2">
          <StaggerContainer className="flex flex-col gap-6">
            <StaggerItem>
              <p className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
                {profile.headline}
              </p>
            </StaggerItem>
            <StaggerItem>
              <h1 className="font-heading text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[1.05] tracking-tight">
                {profile.heroName}
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="min-h-[2rem] text-lg text-muted-foreground md:text-xl">
                <RoleTyping />
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="max-w-xl text-lg text-foreground/80">
                {profile.tagline}
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="group">
                  <Link href="#projects">
                    View Projects
                    <ArrowRight
                      data-icon="inline-end"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#contact">Get In Touch</Link>
                </Button>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <StaggerContainer className="flex justify-center xl:justify-end">
            <StaggerItem className="w-full max-w-md">
              <HeroVisual />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
