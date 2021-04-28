import styles from './index.module.css';

const Index = () => (
  <div className={styles.Container}>
    <div className={styles.Email__Container}>
      <div className={styles.Email__CTA_Text}>
        <div className={styles.CTA_Text__Large}>
          Join our newsletter
        </div>
        <div className={styles.CTA_Text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <form>
        <div className={styles.Email__Form_Group}>
          <input className={styles.Input} type="text" name="email" id="email" placeholder="Enter your email" aria-label="Email" />
          <button type="button" className={`${styles.Button}`}>Sign up</button>
        </div>
      </form>
    </div>
  </div>
);

export default Index;