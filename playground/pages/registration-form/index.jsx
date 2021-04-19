import styles from './registration-form.module.css';

const Index = () => (
  <div className={styles.Container}>
    <div className={styles.Card}>
      <div className={styles.Card__Header}>
        <h1>Sign up</h1>
      </div>
      <div className={styles.Card__Content}>
        <form action="">
          
          <div className={styles.Field}>
            <label className={styles.Label} htmlFor="email">Email</label>
            <input id="email" name="email" type="email" className={styles.Input} required/>
          </div>

          <div className={styles.Field}>
            <label className={styles.Label} htmlFor="password">Password</label>
            <input id="password" name="password" type="password" className={styles.Input} required/>
          </div>

          <div className={styles.Field}>
            <label className={styles.Label} htmlFor="confirm-password">Confirm Password</label>
            <input id="confirm-password" name="confirm-password" type="password" className={styles.Input} required/>
          </div>

          <button className={styles.Button} type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
);

export default Index;