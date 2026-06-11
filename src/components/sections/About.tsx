"use client";

import { User, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { FadeIn } from "@/components/ui/FadeIn";
import { IconBox } from "@/components/ui/IconBox";
import { SectionHeader } from "@/components/ui/SectionHeader";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <FadeIn>
          <SectionHeader label="About" title="Who I am" gradient />
        </FadeIn>
        <div className={styles.grid}>
          <FadeIn delay={0.08} className={styles.content}>
            <p>{profile.bio}</p>
            <p className={styles.location}>
              <MapPin size={14} aria-hidden="true" />
              {profile.location}
            </p>
          </FadeIn>
          <FadeIn delay={0.16} direction="left" className={styles.iconWrapper}>
            <div className={styles.avatarRing}>
              <div className={`glass-card ${styles.avatarCard}`}>
                <IconBox icon={User} variant="indigo" size="xl" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
