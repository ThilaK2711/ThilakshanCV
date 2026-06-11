import { profile } from "@/data/profile";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copyright}>
          © {year} {profile.name}. All rights reserved.
        </p>
        <div className={styles.socials}>
          {profile.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
