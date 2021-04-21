import { Fragment } from 'react';
import styles from "../styles/Header.module.css";

import Link from 'next/link'
import Logo from "./logo";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <Link href='/'>
                    <div className={styles.logoBox}>
                        <Logo />
                        <h1 className={styles.title}>NepKeys</h1>
                    </div>
                </Link>
                <h2 className={styles.description}>Practice Nepali Typing Online</h2>
            </div>
        </header>
    );
}

export default Header;