"use client";

import type { CSSProperties } from "react";

export function BackgroundEffects() {
  const particles = Array.from({ length: 18 }, (_, index) => index);

  return (
    <div className="bg-effects" aria-hidden="true">
      <div className="bg-grid" />
      <div className="bg-beam bg-beam--left" />
      <div className="bg-beam bg-beam--right" />
      <div className="bg-vignette" />
      <div className="orb orb-indigo" />
      <div className="orb orb-violet" />
      <div className="orb orb-cyan" />
      <div className="orb orb-pink" />
      <div className="particles">
        {particles.map((particle) => (
          <span
            key={particle}
            className="particle"
            style={
              {
                "--particle-x": `${(particle * 17) % 100}%`,
                "--particle-y": `${(particle * 29) % 100}%`,
                "--particle-delay": `${particle * 0.35}s`,
                "--particle-duration": `${10 + (particle % 6)}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
