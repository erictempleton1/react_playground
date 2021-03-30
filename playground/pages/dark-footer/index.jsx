import styles from './dark-footer.module.css';

export default function Index() {
  return (
    <div className={styles.Content__Container}>
      <main className={styles.Content}></main>
      <footer className={styles.Content__Footer}>
        <div className="Footer__Column">Column 1</div>
        <div className="Footer__Column">Column 2</div>
        <div className="Footer__Column">Column 3</div>
        <div className="Footer__Column">Column 4</div>
      </footer>
    </div>
  );
}