import styles from './stacking-divs.module.css';

const Index = () => (
  <div className={styles.Container}>
    <div className={styles.Parent}>
    <a href="#home">
      <div className={`${styles.Button} ${styles.Bottom}`}></div>
      <div className={`${styles.Button} ${styles.Top}`}>Log in</div>
    </a>
  </div>
  </div>
);

export default Index;
