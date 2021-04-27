import { useState } from 'react';
import styles from './index.module.css';

const Index = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Container}>
        <div className={styles.Content}>
          <SwitchComponent activeTab={activeTab}>
            <Content1 tab={1} />
            <Content2 tab={2} />
            <Content3 tab={3} />
          </SwitchComponent>
        </div>
        <div className={styles.Tabs}>
          <button className={`${styles.Tab} ${activeTab === 1 ? styles.Tab__Active : ''}`} onClick={() => setActiveTab(1)}>Tab 1</button>
          <button className={`${styles.Tab} ${activeTab === 2 ? styles.Tab__Active : ''}`} onClick={() => setActiveTab(2)}>Tab 2</button>
          <button className={`${styles.Tab} ${activeTab === 3 ? styles.Tab__Active : ''}`} onClick={() => setActiveTab(3)}>Tab 3</button>
        </div>
      </div>
    </div>
  );
}

const SwitchComponent = ({ activeTab, children }) => (
  children.filter(child => child.props.tab === activeTab)
);

const Content1 = () => <div>Content 1</div>;
const Content2 = () => <div>Content 2</div>;
const Content3 = () => <div>Content 3</div>;

export default Index;