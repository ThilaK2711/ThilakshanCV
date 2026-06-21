"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import styles from "./About.module.css";

const highlights = [
  "Developer focused on full-stack web and mobile apps",
  "Always learning new tools, patterns, and technologies",
  "Interested in clean UI, performance, and practical solutions"
];

export function About() {
  return (
    <section id="about" className="section" data-cinematic="section">
      <div className="container">
        <FadeIn>
          <SectionHeader label="01" title="About Me" gradient />
        </FadeIn>
        <div className={styles.grid}>
          <FadeIn delay={0.08} className={styles.content}>
            <p>{profile.bio}</p>
            <ul className={styles.highlights}>
              {highlights.map((highlight) => (
                <li key={highlight} className={styles.highlightItem}>
                  {highlight}
                </li>
              ))}
            </ul>
            <p className={styles.location}>
              <MapPin size={14} aria-hidden="true" />
              {profile.location}
            </p>
          </FadeIn>
          <FadeIn delay={0.16} direction="left" className={styles.iconWrapper}>
            <div className={styles.avatarRing}>
              <div className={`glass-card ${styles.avatarCard}`}>
                {profile.avatar ? (
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    fill
                    className={styles.avatarPhoto}
                    priority
                  />
                ) : (
                  <span className={styles.avatarInitials}>
                    {profile.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
