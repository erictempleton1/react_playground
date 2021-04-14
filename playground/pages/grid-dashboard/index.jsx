import styles from './index.module.css';

const Index = () => (
	<div className={styles.Wrapper}>
		<Header />
		<Sidenav />
		<Content />
	</div>
);

const Header = ({ menuOpen }) => {
	return (
		<div className={styles.Header}>
			<svg className={styles.Header__Icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
			</svg>
			<button className={styles.Header__Menu_Button}>
				<svg className={styles.Header__Menu_Icon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
				</svg>
			</button>
		</div>
	);
}

const Sidenav = () => (
	<div className={styles.Sidenav}>Sidenav</div>
);

const Content = () => (
	<div className={styles.Content}>Content</div>
);

export default Index;