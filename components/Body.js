import Head from 'next/head'
import { useState, Fragment, useEffect } from 'react';

import Keyboard from './Keyboard'
import Score from './Score'
import Texts from './Texts'
import Analytics from './Analytics'

import styles from '../styles/Home.module.css'

export default function Body(props) {
    const [isOpenAnalytics, setIsOpenAnalytics] = useState(false);

    const [lang, setLang] = useState();

    useEffect(() => {
        let lang = props.lang
        let fonts = props.fonts
        // setLang(props.lang)
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
                    top: 1000,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }, 5)
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
            <div className={styles.mainBody}>
                <div className={styles.toolBox}>
                    <Score openAnalytics={openAnalytics} />
                    <Slider />
                </div>
                <Texts />
                <Keyboard />
            </div>
            <div className={styles.information}>
                <h4 className={styles.informationText}>NepKeys is an online Nepali typing practice site with different layouts of Nepali keyboard that helps you improve your Nepali typing skill with the analytics tool integrated inside the website. It is absolutely free to use and guides you along your journey of learning Nepali typing. It calculates your accuracy, total letter and words, words per minute and more importantly shows different graphs of how you improved throughout the process. It also saves your progress so that you can continue on where you last left. </h4>
            </div>

            {(isOpenAnalytics) ? <Analytics /> : <Fragment />}
        </Fragment>
    )
}
