import styles from './link-hover-line.module.css';

export default function Index() {
  return (
    <div className={styles.Nav__Container}>
      <a className={styles.Nav__Link} href="#home">Home</a>
      <a className={styles.Nav__Link} href="#about">About</a>
      <a className={styles.Nav__Link} href="#contact">Contact</a>
    </div>
  )
}