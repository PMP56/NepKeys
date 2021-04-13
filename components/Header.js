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
        </Fragment>
    );
}

export default Header;