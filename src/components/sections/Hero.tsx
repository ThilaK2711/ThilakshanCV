import { ArrowRight, Sparkles, Terminal } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { StaggerChildren, StaggerItem } from "@/components/ui/StaggerChildren";
import styles from "./Hero.module.css";

const stackChips = [
  "React",
  "Next.js",
  "Node.js",
  "Java",
  "Python",
  "React Native",
  "Flutter",
  ".NET",
  "PostgreSQL",
];

const highlights = [
  { label: "Education", value: "Software Engineering · SLIIT" },
  { label: "Focus", value: "Full-stack web and mobile" },
  { label: "Location", value: "Jaffna, Sri Lanka" },
];

export function Hero() {
  const nameParts = profile.name.split(" ");

  return (
    <section id="hero" className={`section ${styles.hero}`}>
      <div className={`container ${styles.inner}`}>
        <StaggerChildren className={styles.content}>
          <StaggerItem className={styles.copy}>
            <StaggerChildren className={styles.copyInner}>
              <StaggerItem>
                <div className={styles.status}>
                  <span className={styles.dot} />
                  Available for opportunities
                </div>
              </StaggerItem>
              <StaggerItem>
                <h1 className={styles.name}>
                  {nameParts.map((part, i) => (
                    <span key={part} className={styles.namePart}>
                      {part}
                      {i < nameParts.length - 1 ? " " : ""}
                    </span>
                  ))}
                </h1>
              </StaggerItem>
              <StaggerItem>
                <p className={styles.title}>{profile.title}</p>
              </StaggerItem>
              <StaggerItem>
                <p className={styles.tagline}>{profile.tagline}</p>
              </StaggerItem>
              <StaggerItem>
                <div className={styles.actions}>
                  <Button href="#projects" variant="primary">
                    View Projects
                  </Button>
                  <Button href="#contact" variant="secondary">
                    Contact Me
                  </Button>
                  <Button href={profile.resumeUrl} variant="secondary">
                    Resume
                  </Button>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className={styles.highlights}>
                  {highlights.map((item) => (
                    <div key={item.label} className={`glass-card ${styles.highlightCard}`}>
                      <span className={styles.highlightLabel}>{item.label}</span>
                      <span className={styles.highlightValue}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </StaggerItem>
            </StaggerChildren>
          </StaggerItem>
          <StaggerItem className={styles.visual}>
            <div className={`glass-card ${styles.snapshot}`}>
              <div className={styles.editorBar}>
                <span className={styles.windowDots} aria-hidden="true"><i /><i /><i /></span>
                <span className={styles.snapshotTitle}>thilakshan.config.ts</span>
                <span className={styles.editorLanguage}>TYPESCRIPT</span>
              </div>
              <div className={styles.codeCanvas} aria-label="Developer profile code preview">
                <div><span className={styles.lineNumber}>01</span><span className={styles.codeComment}>// A little about what I build</span></div>
                <div><span className={styles.lineNumber}>02</span><span className={styles.codeKeyword}>export const</span> <span className={styles.codeName}>developer</span> = {"{"}</div>
                <div><span className={styles.lineNumber}>03</span>  <span className={styles.codeKey}>name</span>: <span className={styles.codeString}>&quot;Lingeswaran Thilakshan&quot;</span>,</div>
                <div><span className={styles.lineNumber}>04</span>  <span className={styles.codeKey}>education</span>: <span className={styles.codeString}>&quot;Software Engineering · SLIIT&quot;</span>,</div>
                <div><span className={styles.lineNumber}>05</span>  <span className={styles.codeKey}>location</span>: <span className={styles.codeString}>&quot;Jaffna, Sri Lanka&quot;</span>,</div>
                <div><span className={styles.lineNumber}>06</span>  <span className={styles.codeKey}>stack</span>: {"{"}</div>
                <div><span className={styles.lineNumber}>07</span>    <span className={styles.codeKey}>frontend</span>: [<span className={styles.codeString}>&quot;React&quot;</span>, <span className={styles.codeString}>&quot;Next.js&quot;</span>],</div>
                <div><span className={styles.lineNumber}>08</span>    <span className={styles.codeKey}>backend</span>: [<span className={styles.codeString}>&quot;Java&quot;</span>, <span className={styles.codeString}>&quot;.NET&quot;</span>, <span className={styles.codeString}>&quot;Node.js&quot;</span>, <span className={styles.codeString}>&quot;Python&quot;</span>],</div>
                <div><span className={styles.lineNumber}>09</span>    <span className={styles.codeKey}>data</span>: [<span className={styles.codeString}>&quot;PostgreSQL&quot;</span>],</div>
                <div><span className={styles.lineNumber}>10</span>    <span className={styles.codeKey}>mobile</span>: [<span className={styles.codeString}>&quot;React Native&quot;</span>, <span className={styles.codeString}>&quot;Flutter&quot;</span>]
                </div>
                <div><span className={styles.lineNumber}>11</span>  {"}"}</div>
                <div><span className={styles.lineNumber}>12</span>{"}"};<span className={styles.cursor} aria-hidden="true" /></div>
              </div>
              <div className={styles.terminalBar}>
                <span><Terminal size={14} aria-hidden="true" /> building useful things</span>
                <span><Sparkles size={13} aria-hidden="true" /> READY TO BUILD</span>
              </div>
              <div className={styles.snapshotFooter}>
                <span>Technology I work with</span>
                <div className={styles.chips}>
                  {stackChips.map((chip) => <span key={chip} className={styles.chip}>{chip}</span>)}
                </div>
              </div>
              <a href="#about" className={styles.scrollCue}>Explore portfolio <ArrowRight size={14} aria-hidden="true" /></a>
            </div>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </section>
  );
}
