"use client";

import { ArrowRight, Code2, Layers3, Sparkles, Terminal } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { StaggerChildren, StaggerItem } from "@/components/ui/StaggerChildren";
import styles from "./Hero.module.css";

const stackChips = ["React", "Next.js", "Node.js", "Java", "Python", "React Native"];

const highlights = [
  {
    label: "Focus",
    value: "Full-stack web and mobile",
  },
  {
    label: "Style",
    value: "Clean UI, performance, motion",
  },
  {
    label: "Mindset",
    value: "Practical, user-first, always learning",
  },
];

export function Hero() {
  const nameParts = profile.name.split(" ");

  return (
    <section id="hero" className={`section ${styles.hero}`} data-cinematic="section">
      <div className={`container ${styles.inner}`}>
        <StaggerChildren className={styles.content}>
          <StaggerItem className={styles.copy}>
            <StaggerChildren className={styles.copyInner}>
              <StaggerItem>
                <div className={styles.status}>
                  <span className={styles.dot} />
                  Open to opportunities
                </div>
              </StaggerItem>
              <StaggerItem>
                <h1 className={styles.name}>
                  {nameParts.map((part, i) => (
                    <span key={part} className={styles.namePart}>
                      {part}
                      {i < nameParts.length - 1 ? " " : ""}
                    </span>
                  ))}
                </h1>
              </StaggerItem>
              <StaggerItem>
                <p className={styles.title}>{profile.title}</p>
              </StaggerItem>
              <StaggerItem>
                <p className={styles.tagline}>{profile.tagline}</p>
              </StaggerItem>
              <StaggerItem>
                <div className={styles.actions}>
                  <Button href="#projects" variant="primary">
                    View Projects
                  </Button>
                  <Button href="#contact" variant="secondary">
                    Contact Me
                  </Button>
                  <Button href={profile.resumeUrl} variant="secondary">
                    Resume
                  </Button>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className={styles.highlights}>
                  {highlights.map((item) => (
                    <div key={item.label} className={`glass-card ${styles.highlightCard}`}>
                      <span className={styles.highlightLabel}>{item.label}</span>
                      <span className={styles.highlightValue}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </StaggerItem>
            </StaggerChildren>
          </StaggerItem>
          <StaggerItem className={styles.visual}>
            <div className={`glass-card ${styles.snapshot}`}>
              <div className={styles.snapshotHeader}>
                <span className={styles.snapshotTitle}>Developer snapshot</span>
                <span className={styles.snapshotBadge}>
                  <Sparkles size={12} aria-hidden="true" />
                  Ready to build
                </span>
              </div>
              <div className={styles.snapshotBody}>
                <div className={styles.snapshotRow}>
                  <Code2 size={18} aria-hidden="true" />
                  <div>
                    <p>Frontend</p>
                    <span>Interfaces with polish and motion</span>
                  </div>
                </div>
                <div className={styles.snapshotRow}>
                  <Terminal size={18} aria-hidden="true" />
                  <div>
                    <p>Backend</p>
                    <span>APIs, logic, and clean integrations</span>
                  </div>
                </div>
                <div className={styles.snapshotRow}>
                  <Layers3 size={18} aria-hidden="true" />
                  <div>
                    <p>Stack</p>
                    <span>React, Next.js, Java, Node.js, Python</span>
                  </div>
                </div>
              </div>
              <div className={styles.chips}>
                {stackChips.map((chip) => (
                  <span key={chip} className={styles.chip}>
                    {chip}
                  </span>
                ))}
              </div>
              <a href="#about" className={styles.scrollCue}>
                Explore more
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            </div>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </section>
  );
}
