import { useState, Fragment, useEffect, useContext } from 'react';

import Keyboard from './Keyboard'
import Score from './Score'
import Texts from './Texts'

import styles from '../styles/Home.module.css'

import Analytics from './Analytics'
import { TextContext } from './TextContext';
import { SettingContext } from '../context/SettingContext';
// const Analytics = dynamic(() => import('./Analytics'));

export default function Body(props) {
    const [isOpenAnalytics, setIsOpenAnalytics] = useState(false);
    const { changeLang } = useContext(TextContext);
    
    const {zen, setZen} = useContext(SettingContext);
    
    useEffect(() => {
        let lang = props.lang
        let fonts = props.fonts
        let main = document.querySelector('main')
        if (lang == undefined) {
            main.style.setProperty('--lang', 'Nepali')
            changeLang('Nepali');
        } else {
            main.style.setProperty('--lang', props.lang)
            main.style.setProperty('--typeText', props.fonts["text"])
            main.style.setProperty('--upperKey', props.fonts["upperKey"])
            main.style.setProperty('--lowerKey', props.fonts["lowerKey"])
            changeLang(props.lang);
        }
    }, [0])

    const openAnalytics = () => {
        setIsOpenAnalytics(!isOpenAnalytics);
        setTimeout(() => {
            if (!isOpenAnalytics) {
                window.scrollTo({
                    top: 1600,
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
                <h3 className={styles.buttonName}>Theme</h3>
            </div>
        )
    }

    return (
        <Fragment>
            <div className={styles.wholeBody}>
                <div className={styles.mainBody}>
                    {(!zen)? <div className={styles.toolBox}>
                        <Score lang={props.lang} openAnalytics={openAnalytics} />
                        <Slider />
                    </div> : <Fragment />}
                    <Texts />
                    {(!zen)? <Keyboard /> : <Fragment />}
                </div>
            </div>
            <div style={{height: (!zen)? '40px' : '100px'}} className={styles.boxAd}></div>
                
            {(!zen)? props.children : <Fragment />}
            {(isOpenAnalytics) ? <Analytics /> : <Fragment />}
        </Fragment>
    )
}
