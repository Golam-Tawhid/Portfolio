"use client";

import { motion } from "framer-motion";
import { revealTransition } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ScrollRevealElement = "div" | "li" | "section";

interface ScrollRevealProps {
  delay?: number;
  as?: ScrollRevealElement;
  className?: string;
  children: React.ReactNode;
}

export function ScrollReveal({
  as = "div",
  children,
  className,
  delay = 0,
}: ScrollRevealProps) {
  const motionProps = {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { ...revealTransition, delay },
    className: cn(className),
    children,
  };

  if (as === "li") return <motion.li {...motionProps} />;
  if (as === "section") return <motion.section {...motionProps} />;
  return <motion.div {...motionProps} />;
}
