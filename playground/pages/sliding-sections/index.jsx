import { useState } from 'react';
import styles from './index.module.css';

const Index = () => {
  const [activePanel, setActivePanel] = useState(1);
  return (
    <div className={styles.Wrapper}>

      <div className={`${styles.One} ${activePanel === 1 ? styles.Panel__Open : styles.Panel__Closed}`}>
        <a href="#one" onClick={() => setActivePanel(1)} className={`${styles.Panel__Tab} ${activePanel === 1 ? styles.Panel__Tab__Active : ''}`}>One</a>
        {activePanel === 1 && <div className={styles.Panel__Content}>
          Content 1
        </div>}
      </div>
      <div className={`${styles.Two} ${activePanel === 2 ? styles.Panel__Open : styles.Panel__Closed}`}>
        <a href="#two" onClick={() => setActivePanel(2)} className={`${styles.Panel__Tab} ${activePanel === 2 ? styles.Panel__Tab__Active : ''}`}>Two</a>
        {activePanel === 2 && <div className={styles.Panel__Content}>
          Content 2
        </div>}
      </div>
      <div className={`${styles.Three} ${activePanel === 3 ? styles.Panel__Open : styles.Panel__Closed}`}>
        <a href="#three" onClick={() => setActivePanel(3)} className={`${styles.Panel__Tab} ${activePanel === 3 ? styles.Panel__Tab__Active : ''}`}>Three</a>
        {activePanel === 3 && <div className={styles.Panel__Content}>
          Content 3
        </div>}
      </div>
      <div className={`${styles.Four} ${activePanel === 4 ? styles.Panel__Open : styles.Panel__Closed}`}>
        <a href="#four" onClick={() => setActivePanel(4)} className={`${styles.Panel__Tab} ${activePanel === 4 ? styles.Panel__Tab__Active : ''}`}>Four</a>
        {activePanel === 4 && <div className={styles.Panel__Content}>
          Content 4
        </div>}
      </div>

    </div>
  );
};

export default Index;