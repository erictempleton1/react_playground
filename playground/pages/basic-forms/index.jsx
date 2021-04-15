import styles from './index.module.css';

const Index = () => (
  <div className={styles.Container}>
    <form>
      <div className={styles.Form__Group}>
        <label className={styles.Label} htmlFor="name">Name</label>
        <input id="name" className={styles.Form} placeholder="Enter name"></input>
      </div>
      <div className={styles.Form__Group}>
        <label className={styles.Label} htmlFor="name">Name</label>
        <input id="name" className={styles.Form} placeholder="Enter name"></input>
      </div>
    </form>
  </div>
);

export default Index;