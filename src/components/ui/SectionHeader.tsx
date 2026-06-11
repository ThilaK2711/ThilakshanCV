import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  label: string;
  title: string;
  gradient?: boolean;
}

export function SectionHeader({ label, title, gradient }: SectionHeaderProps) {
  return (
    <div className={`section-header ${styles.wrapper}`}>
      <span className="section-label">{label}</span>
      <h2 className={`section-title ${gradient ? "gradient-text" : ""}`}>
        {title}
      </h2>
    </div>
  );
}
