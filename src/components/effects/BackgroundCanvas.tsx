"use client";

export function BackgroundCanvas() {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${8 + ((i * 7.3) % 84)}%`,
    top: `${10 + ((i * 11.7) % 80)}%`,
    delay: `${i * 0.5}s`,
    size: i % 3 === 0 ? "size-1.5" : "size-1",
  }));

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="mesh-bg absolute inset-0 animate-mesh-drift" />
      <div className="noise-overlay absolute inset-0" />
      {particles.map((p) => (
        <span
          key={p.id}
          className={`absolute rounded-full bg-primary/30 animate-float-particle ${p.size}`}
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
