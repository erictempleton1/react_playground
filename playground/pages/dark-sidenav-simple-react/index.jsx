import styles from './dark-sidenav-simple-react.module.css';

const Index = () => (
  <div className={styles.Wrapper}>
    <div className={styles.header}>Header</div>
    <div className={styles.sidebar}>Sidebar</div>
    <div className={styles.content}>Content</div>
  </div>
);

export default Index;