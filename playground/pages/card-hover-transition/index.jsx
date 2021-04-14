import styles from './index.module.css';

const Index = () => (
  <div className={styles.Container}>
    <Card
      headerColorStyle={styles.CornflowerBlue}
      headerIcon={<ClockSvg />}
      headerText="Sessions"
      contentNumber="1,245">
    </Card>
    <Card
      headerColorStyle={styles.DarkOrchid}
      headerIcon={<UsersSvg />}
      headerText="Views"
      contentNumber="5,662">
    </Card>
    <Card
      headerColorStyle={styles.DarkSeaGreen}
      headerIcon={<DownloadSvg />}
      headerText="Clicks"
      contentNumber="498">
    </Card>
  </div>
);

const Card = ({ headerColorStyle, headerIcon, headerText, contentNumber }) => (
  <div className={styles.Card}>
    <div className={`${styles.Card__Header} ${headerColorStyle}`}>
      <a href="#somewhere" className={styles.Header__Icon_Container}>{headerIcon}</a>
      <a href="#somewhere" className={styles.Header__Text} href="">{headerText}</a>
    </div>
    <div className={styles.Card__Content}>
      <div className={styles.Content__Text}>
        <span className={styles.Text__Number}>{contentNumber}</span>
      </div>
      <a href="#somewhere" className={styles.Button}>
        <ExploreSvg />
        View
      </a>
    </div>
  </div>
);


const UsersSvg = () => (
  <svg className={styles.Header__Icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const ClockSvg = () => (
  <svg className={styles.Header__Icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const DownloadSvg = () => (
  <svg className={styles.Header__Icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const ExploreSvg = () => (
  <svg className={styles.Button__Icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

export default Index;