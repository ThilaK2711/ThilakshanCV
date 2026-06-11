"use client";

import { skills, skillCategories } from "@/data/skills";
import { skillCategoryIcons } from "@/lib/iconMap";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { IconBox } from "@/components/ui/IconBox";
import { SectionHeader } from "@/components/ui/SectionHeader";
import CSS3DCube from "@/components/3d/CSS3DCube";
import styles from "./Skills.module.css";

const categoryVariants = {
  frontend: "cyan" as const,
  backend: "violet" as const,
  tools: "emerald" as const,
};

export function Skills() {
  const categories = Object.keys(skillCategories) as Array<
    keyof typeof skillCategories
  >;

  return (
    <section id="skills" className="section">
      <div className="container">
        <FadeIn>
          <SectionHeader label="Skills" title="Core technologies" gradient />
        </FadeIn>
        <div className={styles.skillsContainer}>
          <div className={styles.grid}>
          {categories.map((category, index) => {
            const categorySkills = skills.filter((s) => s.category === category);
            if (categorySkills.length === 0) return null;

            const CategoryIcon = skillCategoryIcons[category];

            return (
              <FadeIn
                key={category}
                delay={index * 0.1}
                className={styles[category]}
              >
                <div className={`glass-card ${styles.category} ${styles[`card_${category}`]}`}>
                  <div className={styles.categoryHeader}>
                    <IconBox
                      icon={CategoryIcon}
                      variant={categoryVariants[category]}
                      size="md"
                    />
                    <h3 className={`${styles.categoryTitle} ${styles[`title_${category}`]}`}>
                      {skillCategories[category]}
                    </h3>
                  </div>
                  <div className={styles.badges}>
                    {categorySkills.map((skill) => (
                      <Badge key={skill.name} variant={category}>
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
          </div>
          <div className={styles.cubeContainer}>
            <CSS3DCube />
          </div>
        </div>
      </div>
    </section>
  );
}
