import styles from './stat-cards-grid.module.css';

const Index = () => (
  <div className={styles.Container}>
    <div className={styles.Grid__Container}>
      <Card />
    </div>
  </div>
);

const Card = () => (
  <div className={styles.Card}></div>
)

export default Index;