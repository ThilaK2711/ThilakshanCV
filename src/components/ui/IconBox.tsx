import type { LucideIcon } from "lucide-react";
import styles from "./IconBox.module.css";

type IconVariant = "indigo" | "cyan" | "violet" | "emerald" | "pink";
type IconSize = "sm" | "md" | "lg" | "xl";

interface IconBoxProps {
  icon: LucideIcon;
  variant?: IconVariant;
  size?: IconSize;
  className?: string;
}

const sizes: Record<IconSize, number> = {
  sm: 20,
  md: 28,
  lg: 40,
  xl: 56,
};

export function IconBox({
  icon: Icon,
  variant = "indigo",
  size = "md",
  className = "",
}: IconBoxProps) {
  const px = sizes[size];

  return (
    <div className={`${styles.box} ${styles[variant]} ${styles[size]} ${className}`}>
      <Icon size={px} strokeWidth={1.75} aria-hidden="true" />
    </div>
  );
}
