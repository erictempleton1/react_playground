import styles from './employee-grid.module.css';
import Image from 'next/image';

const Index = () => (
  <div className={styles.Wrapper}>
    <div className={styles.Top__Wrapper}>
      <div className={styles.Top__Text}>
        Our team
      </div>
      <div className={styles.Top__Sub_Text}>
        Meet the awesome team behind this product
      </div>
    </div>
    <div className={styles.Grid__Wrapper}>
      <Card name="John Smith" position="CEO" imagePath="/avatar_man_1.png" />
    </div>
  </div>
);

const Card = ({ name, position, imagePath }) => (
  <div className={styles.Card}>
    <div className={styles.Card__Header}>
      <div className={styles.Card__Avatar}>
        <Image
          className={styles.Avatar__Image}
          src={imagePath}
          alt={'avatar'}
          width={330}
          height={380}
        />
      </div>
      <div className={styles.Card__Title}>
        <div className={styles.Title__Name}>{name}</div>
        <div className={styles.Title__Position}>{position}</div>
      </div>
    </div>

    <div className={styles.Card__Footer}>
      <EmailIcon />
    </div>

  </div>
);

const EmailIcon = () => (
  <svg className={styles.Footer__Icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default Index;