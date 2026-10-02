"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}

export function FadeIn({
  children,
  delay = 0,
  className,
  direction = "up",
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();

  const offset = {
    up: { x: 0, y: 28 },
    left: { x: -28, y: 0 },
    right: { x: 28, y: 0 },
  }[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={prefersReducedMotion ? false : {
        opacity: 0,
        x: offset.x,
        y: offset.y,
        scale: 0.99,
      }}
      animate={
        isInView || prefersReducedMotion
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
            }
          : {
              opacity: 0,
              x: offset.x,
              y: offset.y,
              scale: 0.99,
            }
      }
      transition={{
        duration: prefersReducedMotion ? 0 : 0.42,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
