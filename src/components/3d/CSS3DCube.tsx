import styles from './CSS3DCube.module.css';

interface CSS3DCubeProps {
  className?: string;
}

export default function CSS3DCube({ className = '' }: CSS3DCubeProps) {
  return (
    <div className={`${styles.scene} ${className}`}>
      <div className={styles.cube}>
        <div className={`${styles.face} ${styles.front}`}>Front</div>
        <div className={`${styles.face} ${styles.back}`}>Back</div>
        <div className={`${styles.face} ${styles.right}`}>Right</div>
        <div className={`${styles.face} ${styles.left}`}>Left</div>
        <div className={`${styles.face} ${styles.top}`}>Top</div>
        <div className={`${styles.face} ${styles.bottom}`}>Bottom</div>
      </div>
    </div>
  );
}
