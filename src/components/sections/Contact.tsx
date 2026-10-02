import { Mail, MessageCircle, MapPin, GitBranch, BriefcaseBusiness } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { IconBox } from "@/components/ui/IconBox";
import { SectionHeader } from "@/components/ui/SectionHeader";
import styles from "./Contact.module.css";

export function Contact() {
  const whatsappNumber = "94" + profile.phone.replace(/^0/, "");
  const whatsappUrl =
    "https://wa.me/" +
    whatsappNumber +
    "?text=Hi%20Lingeswaran%2C%20I%20found%20your%20portfolio.";

  return (
    <section id="contact" className={"section " + styles.contact}>
      <div className="container">
        <FadeIn>
          <SectionHeader label="05 · GET IN TOUCH" title="Let’s build something useful" gradient />
        </FadeIn>
        <FadeIn delay={0.08}>
          <p className={styles.text}>
            I&apos;m currently open to new opportunities. Whether you have a
            question or just want to say hi, feel free to reach out.
          </p>
        </FadeIn>
        <div className={styles.grid}>
          <FadeIn delay={0.12}>
            <a href={"mailto:" + profile.email} className={"glass-card " + styles.card + " " + styles.email}>
              <IconBox icon={Mail} variant="violet" size="md" />
              <div className={styles.cardText}>
                <span className={styles.label}>Email</span>
                <span className={styles.value}>{profile.email}</span>
              </div>
            </a>
          </FadeIn>
          <FadeIn delay={0.16}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={"glass-card " + styles.card + " " + styles.phone}>
              <IconBox icon={MessageCircle} variant="cyan" size="md" />
              <div className={styles.cardText}>
                <span className={styles.label}>WhatsApp</span>
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
                className={"glass-card " + styles.card + " " + styles.github}
              >
                <IconBox icon={GitBranch} variant="emerald" size="md" />
                <div className={styles.cardText}>
                  <span className={styles.label}>GitHub</span>
                  <span className={styles.value}>ThilaK2711</span>
                </div>
              </a>
            )}
          </FadeIn>
          <FadeIn delay={0.22}>
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={"glass-card " + styles.card + " " + styles.linkedin}
              >
                <IconBox icon={BriefcaseBusiness} variant="cyan" size="md" />
                <div className={styles.cardText}>
                  <span className={styles.label}>LinkedIn</span>
                  <span className={styles.value}>{profile.name}</span>
                </div>
              </a>
            )}
          </FadeIn>
          <FadeIn delay={0.24}>
            <div className={"glass-card " + styles.card + " " + styles.full + " " + styles.location}>
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
            <Button href={"mailto:" + profile.email} variant="primary">
              Say Hello
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
