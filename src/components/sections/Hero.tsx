"use client";

import { Code2, Terminal, Cpu, Braces } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { IconBox } from "@/components/ui/IconBox";
import { StaggerChildren, StaggerItem } from "@/components/ui/StaggerChildren";
import styles from "./Hero.module.css";

export function Hero() {
  const nameParts = profile.name.split(" ");

  return (
    <section id="hero" className={`section ${styles.hero}`} data-cinematic="section">
      <div className={`container ${styles.inner}`}>
        <StaggerChildren className={styles.content}>
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
            </div>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </section>
  );
}
