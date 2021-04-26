import { useState } from 'react';
import styles from './index.module.css';

const Index = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Tabs__Container}>
        <div className={styles.Content}>
          <SwitchComponent active={activeTab}>
            <Component1 name={1} />
            <Component2 name={2} />
            <Component3 name={3} />
          </SwitchComponent>
        </div>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

const Tabs = ({ activeTab, setActiveTab }) => (
  <div className={styles.Tabs}>
    <button onClick={() => setActiveTab(1)}>Tab 1</button>
    <button onClick={() => setActiveTab(2)}>Tab 2</button>
    <button onClick={() => setActiveTab(3)}>Tab 3</button>
  </div>
);

const SwitchComponent = ({ active, children }) => (
  children.filter(child => child.props.name === active)
);


const Component1 = () => <div>Component 1</div>;
const Component2 = () => <div>Component 2</div>;
const Component3 = () => <div>Component 3</div>;

export default Index;