"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cardHoverTransition } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: y * -8, y: x * 8 });
  };

  const handleLeave = () => setRotate({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={cardHoverTransition}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className={cn("card-glow rounded-xl border border-white/5 bg-card/80", className)}
    >
      {children}
    </motion.div>
  );
}
