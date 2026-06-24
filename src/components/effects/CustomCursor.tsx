"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const enabledCursor = finePointer && !reducedMotion && window.innerWidth >= 768;
    setEnabled(enabledCursor);

    if (!enabledCursor) return;

    document.body.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest('a, button, [role="button"], input, textarea, select, label')
      );
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-screen"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        animate={{
          width: hovering ? 40 : 12,
          height: hovering ? 40 : 12,
          marginLeft: hovering ? -20 : -6,
          marginTop: hovering ? -20 : -6,
          opacity: hovering ? 0.5 : 0.8,
        }}
        transition={{ duration: 0.2 }}
        className="rounded-full border border-primary/50 bg-primary/20 shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
      />
    </motion.div>
  );
}
