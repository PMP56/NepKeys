import styles from "../styles/Header.module.css";

import Logo from "./logo";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoBox}>
                <Logo />
                <h1 className={styles.title}>NepKeys</h1>
                <h1 className={styles.hiddenText}>NepKeys is a free online Nepali typing practice site which provides you a better environment to learn typing and analytics which help you to track your progess.</h1>
            </div>
            <h2 className={styles.description}>Practice Nepali Typing Online</h2>
        </header>
    );
}

export default Header;