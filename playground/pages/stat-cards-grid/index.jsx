import styles from './stat-cards-grid.module.css';

const Index = () => (
  <div className={styles.Container}>
    <div className={styles.Grid__Container}>
      <Card title="Clicks" content="2,398" />
      <Card title="Impressions" content="62,156" />
      <Card title="CTR" content="3.9%" />
    </div>
  </div>
);

const Card = ({ title, content }) => (
  <div className={styles.Stat__Card}>
    <div className={styles.Stat__Container}>
      <div className={styles.Stat__Title}>{title}</div>
      <div className={styles.Stat__Content}>{content}</div>
    </div>
  </div>
);

export default Index;