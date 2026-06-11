import { NAV_ITEMS, SITE_NAME } from "@/lib/constants";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.pill}>
        <a href="#hero" className={styles.logo}>
          {SITE_NAME}
        </a>
        <nav className={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
