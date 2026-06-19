"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function CinematicMotion() {
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 18,
    damping: 28,
    mass: 1.8,
  });
  const smoothY = useSpring(mouseY, {
    stiffness: 18,
    damping: 28,
    mass: 1.8,
  });

  const parallaxX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const parallaxY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    let frame = 0;

    const updatePointer = (event: PointerEvent) => {
      const { innerWidth, innerHeight } = window;
      const normalizedX = (event.clientX - innerWidth / 2) / innerWidth;
      const normalizedY = (event.clientY - innerHeight / 2) / innerHeight;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        mouseX.set(normalizedX);
        mouseY.set(normalizedY);
        document.documentElement.style.setProperty(
          "--pointer-x",
          `${normalizedX * 100}`,
        );
        document.documentElement.style.setProperty(
          "--pointer-y",
          `${normalizedY * 100}`,
        );
      });
    };

    const resetPointer = () => {
      mouseX.set(0);
      mouseY.set(0);
      document.documentElement.style.setProperty("--pointer-x", "0");
      document.documentElement.style.setProperty("--pointer-y", "0");
    };

    window.addEventListener("pointermove", updatePointer, { passive: true });
    window.addEventListener("pointerleave", resetPointer);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("pointerleave", resetPointer);
    };
  }, [mouseX, mouseY, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 0.95,
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    const onLenisScroll = () => {
      ScrollTrigger.update();
    };
    const onRaf = (time: number) => {
      lenis.raf(time * 1000);
    };
    const onAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a[href^='#']") as HTMLAnchorElement | null;

      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href");
      if (!href || href === "#") {
        return;
      }

      const targetElement = document.querySelector<HTMLElement>(href);
      if (!targetElement) {
        return;
      }

      event.preventDefault();
      lenis.scrollTo(targetElement, {
        offset: -88,
        immediate: false,
      });
    };

    gsap.registerPlugin(ScrollTrigger);
    lenis.on("scroll", onLenisScroll);
    gsap.ticker.add(onRaf);
    gsap.ticker.lagSmoothing(0);

    document.addEventListener("click", onAnchorClick);

    const sections = gsap.utils.toArray<HTMLElement>("[data-cinematic='section']");

    gsap.fromTo(
      "header",
      {
        autoAlpha: 0,
        y: -12,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.75,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      "#hero .content > *",
      {
        autoAlpha: 0,
        y: 18,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.1,
      },
    );

    sections.forEach((section) => {
      const reveals = section.querySelectorAll<HTMLElement>(
        "[data-cinematic='reveal']",
      );
      const cards = section.querySelectorAll<HTMLElement>(".glass-card");

      gsap.set(section, {
        transformPerspective: 1400,
        transformStyle: "preserve-3d",
      });

      gsap.fromTo(
        section,
        {
          autoAlpha: 0,
          y: 36,
        },
        {
          autoAlpha: 1,
          y: 0,
          ease: "power2.out",
          duration: 0.9,
          scrollTrigger: {
            trigger: section,
            start: "top 86%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        reveals,
        {
          autoAlpha: 0,
          y: 16,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: section,
            start: "top 84%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        cards,
        {
          autoAlpha: 0,
          y: 22,
          scale: 0.99,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    return () => {
      document.removeEventListener("click", onAnchorClick);
      gsap.ticker.remove(onRaf);
      lenis.off("scroll", onLenisScroll);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="cinematic-overlay"
      style={{
        x: parallaxX,
        y: parallaxY,
      }}
    >
      <div className="cinematic-overlay__beam cinematic-overlay__beam--left" />
      <div className="cinematic-overlay__beam cinematic-overlay__beam--right" />
      <div className="cinematic-overlay__halo cinematic-overlay__halo--top" />
      <div className="cinematic-overlay__halo cinematic-overlay__halo--bottom" />
    </motion.div>
  );
}
