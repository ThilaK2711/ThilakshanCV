"use client";

import { motion, useInView } from "framer-motion";
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

  const offset = {
    up: { x: 0, y: 28 },
    left: { x: -28, y: 0 },
    right: { x: 28, y: 0 },
  }[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y, filter: "blur(6px)" }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)" }
          : { opacity: 0, x: offset.x, y: offset.y, filter: "blur(6px)" }
      }
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 18,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
