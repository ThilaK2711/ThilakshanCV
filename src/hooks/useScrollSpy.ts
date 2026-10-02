"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view for active nav highlighting.
 * Usage: pass section IDs that match your page anchors.
 */
export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const currentSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top - offset) -
              Math.abs(b.boundingClientRect.top - offset),
          )[0];

        if (currentSection) {
          setActiveId(currentSection.target.id);
        }
      },
      { rootMargin: `-${offset}px 0px -55% 0px` }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}
