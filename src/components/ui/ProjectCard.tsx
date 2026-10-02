import { FolderGit2, ExternalLink } from "lucide-react";
import type { Project } from "@/types";
import { projectIconMap } from "@/lib/iconMap";
import { Badge } from "./Badge";
import { IconBox } from "./IconBox";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

const iconVariants = {
  dashboard: "cyan" as const,
  code: "violet" as const,
  mobile: "pink" as const,
};

export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = projectIconMap[project.icon];
  const variant = iconVariants[project.icon];

  return (
    <article
      className={`glass-card ${styles.card}`}
    >
      <div className={styles.preview} aria-hidden="true">
        <div className={styles.previewTop}><span /><span /><span /><i /></div>
        <div className={styles.previewBody}>
          <div className={styles.previewSidebar}><i /><i /><i /><i /></div>
          <div className={styles.previewMain}>
            <div className={styles.previewHeading} />
            <div className={styles.previewStats}><i /><i /><i /></div>
            <div className={styles.previewChart}><i /><i /><i /><i /><i /><i /><i /></div>
            <div className={styles.previewRows}><i /><i /><i /></div>
          </div>
        </div>
      </div>
      <div className={styles.iconHeader}>
        <IconBox icon={Icon} variant={variant} size="lg" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <div className={styles.links}>
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <FolderGit2 size={14} aria-hidden="true" />
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={14} aria-hidden="true" />
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
