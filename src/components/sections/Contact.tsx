import { Mail, Phone, MapPin, GitBranch } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { IconBox } from "@/components/ui/IconBox";
import { SectionHeader } from "@/components/ui/SectionHeader";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`} data-cinematic="section">
      <div className="container">
        <FadeIn>
          <SectionHeader label="Contact" title="Let's connect" gradient />
        </FadeIn>
        <FadeIn delay={0.08}>
          <p className={styles.text}>
            I&apos;m currently open to new opportunities. Whether you have a
            question or just want to say hi, feel free to reach out.
          </p>
        </FadeIn>
        <div className={styles.grid}>
          <FadeIn delay={0.12}>
            <a href={`mailto:${profile.email}`} className={`glass-card ${styles.card} ${styles.email}`}>
              <IconBox icon={Mail} variant="violet" size="md" />
              <div className={styles.cardText}>
                <span className={styles.label}>Email</span>
                <span className={styles.value}>{profile.email}</span>
              </div>
            </a>
          </FadeIn>
          <FadeIn delay={0.16}>
            <a href={`tel:${profile.phone}`} className={`glass-card ${styles.card} ${styles.phone}`}>
              <IconBox icon={Phone} variant="cyan" size="md" />
              <div className={styles.cardText}>
                <span className={styles.label}>Phone</span>
                <span className={styles.value}>{profile.phone}</span>
              </div>
            </a>
          </FadeIn>
          <FadeIn delay={0.2}>
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card ${styles.card} ${styles.github}`}
              >
                <IconBox icon={GitBranch} variant="emerald" size="md" />
                <div className={styles.cardText}>
                  <span className={styles.label}>GitHub</span>
                  <span className={styles.value}>L.ThilaKshan1127</span>
                </div>
              </a>
            )}
          </FadeIn>
          <FadeIn delay={0.24}>
            <div className={`glass-card ${styles.card} ${styles.full} ${styles.location}`}>
              <IconBox icon={MapPin} variant="pink" size="md" />
              <div className={styles.cardText}>
                <span className={styles.label}>Location</span>
                <span className={styles.value}>{profile.address}</span>
              </div>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.24}>
          <div className={styles.cta}>
            <Button href={`mailto:${profile.email}`} variant="primary">
              Say Hello
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
