import { useState, Fragment, useEffect } from 'react';

import Keyboard from './Keyboard'
import Score from './Score'
import Texts from './Texts'

import styles from '../styles/Home.module.css'

import Analytics from './Analytics'
// const Analytics = dynamic(() => import('./Analytics'));

export default function Body(props) {
    const [isOpenAnalytics, setIsOpenAnalytics] = useState(false);

    useEffect(() => {
        let lang = props.lang
        let fonts = props.fonts
        let main = document.querySelector('main')
        if (lang == undefined) {
            main.style.setProperty('--lang', 'Nepali')
        } else {
            main.style.setProperty('--lang', props.lang)
            main.style.setProperty('--typeText', props.fonts["text"])
            main.style.setProperty('--upperKey', props.fonts["upperKey"])
            main.style.setProperty('--lowerKey', props.fonts["lowerKey"])
        }
    }, [0])

    const openAnalytics = () => {
        setIsOpenAnalytics(!isOpenAnalytics);
        setTimeout(() => {
            if (!isOpenAnalytics) {
                window.scrollTo({
                    top: 950,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }, 150)
    }

    const Slider = () => {
        return (
            <div className={styles.buttonBox}>
                <div className={styles.buttonContainer}>
                    <button className={styles.themeButton} onClick={props.clickSlider}>{props.theme.toUpperCase()}</button>
                </div>
                <h3 className={styles.buttonName}>Change Theme</h3>
            </div>
        )
    }

    return (
        <Fragment>
            <div className={styles.wholeBody}>
                <div className="ezoic-pub-ad-placeholder-101"></div>
                <div className={styles.mainBody}>
                    <div className={styles.toolBox}>
                        <Score lang={props.lang} openAnalytics={openAnalytics} />
                        <Slider />
                    </div>
                    <Texts />
                    <Keyboard />
                </div>
                <div className="ezoic-pub-ad-placeholder-102"> </div>
            </div>
            <div className="ezoic-pub-ad-placeholder-103"> </div>
            {props.children}
            {(isOpenAnalytics) ? <Analytics /> : <Fragment />}
        </Fragment>
    )
}
