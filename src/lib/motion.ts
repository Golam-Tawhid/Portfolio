export const springSmooth = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  mass: 0.8,
};

export const revealTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

export const cardHoverTransition = {
  duration: 0.25,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};
