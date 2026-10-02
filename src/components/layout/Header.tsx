"use client";

import { NAV_ITEMS } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import styles from "./Header.module.css";

const SECTION_IDS = NAV_ITEMS.map((item) => item.href.slice(1));

export function Header() {
  const activeId = useScrollSpy(SECTION_IDS);

  return (
    <header className={styles.header}>
      <div className={styles.pill}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.monogram}>LT</span>
          <span className={styles.brandCopy}>
            <strong>Lingeswaran Thilakshan</strong>
            <small>SLIIT · SOFTWARE ENGINEERING</small>
          </span>
        </a>
        <nav className={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={activeId === item.href.slice(1) ? "location" : undefined}
              className={[styles.navLink, activeId === item.href.slice(1) ? styles.active : ""].join(" ")}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className={styles.talk} href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  );
}
