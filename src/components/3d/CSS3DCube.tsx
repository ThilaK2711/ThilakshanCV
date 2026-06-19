import styles from './CSS3DCube.module.css';

interface CSS3DCubeProps {
  className?: string;
}

export default function CSS3DCube({ className = '' }: CSS3DCubeProps) {
  return (
    <div className={`${styles.scene} ${className}`}>
      <div className={styles.cube}>
        <div className={`${styles.face} ${styles.front}`}>Java</div>
        <div className={`${styles.face} ${styles.back}`}>Python</div>
        <div className={`${styles.face} ${styles.right}`}>C++</div>
        <div className={`${styles.face} ${styles.left}`}>Node.js</div>
        <div className={`${styles.face} ${styles.top}`}>Express.js</div>
        <div className={`${styles.face} ${styles.bottom}`}>MongoDB</div>
      </div>
    </div>
  );
}
