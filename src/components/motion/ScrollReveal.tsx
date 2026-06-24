"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { revealTransition } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  ...props
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ ...revealTransition, delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
