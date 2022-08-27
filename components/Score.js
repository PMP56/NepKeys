import React, { useContext, useEffect, useState } from 'react';
import styles from '../styles/Score.module.css'
import Modal from 'react-modal';
import Link from 'next/link';

import WPMBox from './WPM';
import { TextContext } from '../context/TextContext';
import { SettingContext } from '../context/SettingContext';

Modal.setAppElement('body');

const Score = (props) => {
    const {
        totalLetters,
        totalCorrectLetters,
        totalWords,
    } = useContext(TextContext);

    const {zen, setZen} = useContext(SettingContext);

    let accuracy = Math.ceil(totalCorrectLetters * 100 / totalLetters);
    const [lang, setLang] = useState(props.lang);

    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const openZen = () => {
        // setZen(true);
        let element = document.querySelector('body');
        // console.log(element);
        if (element.requestFullscreen){
            element.requestFullscreen();
            // document.querySelector('main').focus();
        }
        
    }

    
    useEffect(() => {
        document.querySelector('body').addEventListener('fullscreenchange', () => {
            setZen(document.fullscreenElement != null);
        })
    }, [0])

    

    const Button = (props) => {
        return (
            <div className={styles.buttonBox}>
                <div className={styles.buttonContainer}>
                    <div className={styles.button}>
                        <h3 style={{ margin: '0px', fontSize: '20px' }}>{props.value1}</h3>
                        <h2 style={{ margin: '0px', fontSize: '10px', fontWeight: '300' }}>{props.value2}</h2>
                    </div>
                </div>
                <h3 className={styles.buttonName}>{props.name}</h3>
            </div>
        )
    }

    const AnalyticsBox = () => {
        return (
            <div className={styles.buttonBox}>
                <div className={styles.buttonContainer} id='analytics-false'>
                    <div className={styles.button} onClick={props.openAnalytics}>
                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="32px" viewBox="0 0 24 24" width="32px" fill="var(--textColor)">
                            <g>
                                <rect fill="none" height="24" width="24" />
                            </g>
                            <g>
                                <g>
                                    <path d="M21,8c-1.45,0-2.26,1.44-1.93,2.51l-3.55,3.56c-0.3-0.09-0.74-0.09-1.04,0l-2.55-2.55C12.27,10.45,11.46,9,10,9 c-1.45,0-2.27,1.44-1.93,2.52l-4.56,4.55C2.44,15.74,1,16.55,1,18c0,1.1,0.9,2,2,2c1.45,0,2.26-1.44,1.93-2.51l4.55-4.56 c0.3,0.09,0.74,0.09,1.04,0l2.55,2.55C12.73,16.55,13.54,18,15,18c1.45,0,2.27-1.44,1.93-2.52l3.56-3.55 C21.56,12.26,23,11.45,23,10C23,8.9,22.1,8,21,8z" />
                                    <polygon points="15,9 15.94,6.93 18,6 15.94,5.07 15,3 14.08,5.07 12,6 14.08,6.93" />
                                    <polygon points="3.5,11 4,9 6,8.5 4,8 3.5,6 3,8 1,8.5 3,9" />
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                <h3 className={styles.buttonName}>Analytics</h3>
            </div>
        )
    }

    const LanguageBox = () => {
        return (
            <div className={styles.buttonBox}>
                <div className={styles.buttonContainer}>
                    <div className={styles.button} onClick={openModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="var(--textColor)"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" /></svg>
                    </div>
                </div>
                <h3 className={styles.buttonName}>Language</h3>
            </div>
        )
    }

    const ZenBox = () => {
        return (
            <div className={styles.buttonBox}>
                <div className={styles.buttonContainer}>
                    <div className={styles.button} onClick={openZen}>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{transform: 'scale(0.75)'}} height="48" width="48" fill="var(--textColor)"><path d="M13.05 40q-1.3 0-2.15-.85-.85-.85-.85-2.15 0-.9.45-1.725.45-.825 1.3-1.175l8.6-3.4v-6.9q-3.3 4.05-6.7 6.1-3.4 2.05-7.7 2.05v-3q3.4 0 6.2-1.575Q15 25.8 17.25 22.95l2.9-3.25q.5-.6 1.175-1t1.475-.4h2.4q.8 0 1.5.4t1.2 1l2.9 3.25q2.4 2.75 5.1 4.375 2.7 1.625 6.1 1.625v3q-4.25 0-7.675-2.05T27.6 23.8v6.9l8.6 3.4q.85.35 1.3 1.175.45.825.45 1.725 0 1.3-.85 2.15-.85.85-2.15.85H19.8v-.55q0-1.3.8-2.1t2.1-.8h6.65q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3H22.7q-2.2 0-3.5 1.35-1.3 1.35-1.3 3.55V40ZM24 15.3q-1.5 0-2.575-1.075-1.075-1.075-1.075-2.575 0-1.5 1.075-2.575Q22.5 8 24 8q1.5 0 2.575 1.075 1.075 1.075 1.075 2.575 0 1.5-1.075 2.575Q25.5 15.3 24 15.3Z"/></svg>
                    </div>
                </div>
                <h3 className={styles.buttonName}>Zen Mode</h3>
            </div>
        )
    }

    const LangCard = (props) => {
        return (
            <Link href={(props.link) ? `/lang/${props.link}` : '/'}>
                <div style={(lang == props.lang) ? { border: '2px solid white', backgroundColor: 'rgb(100, 100, 100)' } : { border: '2px solid transparent' }} className={styles.LangCard}>
                    {props.lang}
                </div>
            </Link>
        )
    }

    return (
        <div className={styles.scoreBox}>
            <Button name={'Accuracy'} value1={accuracy} value2={'%'} />
            <Button name={'Total Words'} value1={totalWords} value2={'words'} />
            <Button name={'Total Letters'} value1={Math.floor(totalLetters)} value2={'letters'} />
            <WPMBox />
            <AnalyticsBox />
            <LanguageBox />
            <ZenBox />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className={styles.Modal}
                overlayClassName={styles.Overlay}
            >
                <h2 className={styles.modalHeader}>Choose Language</h2>
                <div className={styles.modalBody}>
                    <LangCard lang={"English"} />
                    <LangCard lang={"Nepali"} link={'np'} />
                    <LangCard lang={"Hindi"} link={'in'} />
                    <LangCard lang={"Newari"} link={'newa'} />
                    <LangCard lang={"Russian"} link={'ru'} />
                </div>
            </Modal>
        </div>
    );
}

export default Score;