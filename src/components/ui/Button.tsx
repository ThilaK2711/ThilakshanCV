import styles from "./Button.module.css";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export function Button({ href, variant = "primary", children }: ButtonProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className={`${styles.button} ${styles[variant]}`}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}
