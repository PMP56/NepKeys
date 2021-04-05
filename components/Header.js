import { Fragment } from 'react';
import styles from "../styles/Header.module.css";

import Logo from "./logo";

const Header = () => {
    return (
        <Fragment>
            <header className={styles.header}>
                <div className={styles.logoBox}>
                    <Logo />
                    <h1 className={styles.title}>NepKeys</h1>
                </div>
                <h2 className={styles.description}>Practice Nepali Typing Online</h2>
            </header>
            {/* <div className={styles.topDesContainer}>
                <h1 className={styles.topDescription}>NepKeys is a free online Nepali typing practice site which provides you a better environment to learn typing and analytics which help you to track your progess.</h1>
            </div> */}
        </Fragment>
    );
}

export default Header;