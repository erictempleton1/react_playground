import styles from './grid-sidenav-template.module.css';

const Index = () => (
  <div className={styles.Wrapper}>
    <div className={styles.Header}>Header</div>
    <div className={styles.Sidenav}>Sidenav</div>
    <div className={styles.Content}>Content</div>
  </div>
);

export default Index;