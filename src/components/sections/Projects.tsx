import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import styles from "./Projects.module.css";

export function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section">
      <div className="container">
        <FadeIn>
          <SectionHeader label="04 · SELECTED WORK" title="Applications built to solve real problems" gradient />
        </FadeIn>
        <div className={styles.grid}>
          {featured.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
