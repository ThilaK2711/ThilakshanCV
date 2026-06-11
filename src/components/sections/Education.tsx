import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { FadeIn } from "@/components/ui/FadeIn";
import { IconBox } from "@/components/ui/IconBox";
import { SectionHeader } from "@/components/ui/SectionHeader";
import styles from "./Education.module.css";

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <FadeIn>
          <SectionHeader label="Education" title="Academic background" gradient />
        </FadeIn>
        <div className={styles.list}>
          {education.map((item, index) => (
            <FadeIn key={item.institution} delay={index * 0.1}>
              <article className={`glass-card ${styles.card}`}>
                <div className={styles.iconPanel}>
                  <IconBox icon={GraduationCap} variant="violet" size="lg" />
                </div>
                <div className={styles.accentBar} />
                <div className={styles.body}>
                  <div className={styles.header}>
                    <h3 className={styles.degree}>{item.degree}</h3>
                    <span className={styles.date}>
                      {item.startDate} – {item.endDate}
                    </span>
                  </div>
                  <p className={styles.field}>{item.field}</p>
                  <p className={styles.institution}>{item.institution}</p>
                  <p className={styles.location}>{item.location}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
