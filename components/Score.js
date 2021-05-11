import { useContext, useEffect, useState } from 'react';
import styles from '../styles/Score.module.css'

import { TextContext } from './TextContext';
import Modal from 'react-modal';
import Link from 'next/link';

Modal.setAppElement('body');

const Score = (props) => {
    const {
        currentLetterIndex,
        changeLetterIndex,
        currentSentenceIndex,
        changeSentenceIndex,
        userText,
        addUserText,
        clearUserText,
        totalLetters,
        changeTotalLetters,
        totalCorrectLetters,
        changeTotalCorrectLetters,
        totalWords,
        changeTotalWords
    } = useContext(TextContext);

    let accuracy = Math.ceil(totalCorrectLetters * 100 / totalLetters);
    const [lang, setLang] = useState(props.lang);

    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const Button = (props) => {
        return (
            <div className={styles.buttonBox}>
                <div className={styles.buttonContainer}>
                    <div className={styles.button}>
                        <h3 style={{ margin: '0px', fontSize: '22px' }}>{props.value1}</h3>
                        <h2 style={{ margin: '0px', fontSize: '11px', fontWeight: '300' }}>{props.value2}</h2>
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
                        {/* <h3 style={{ margin: '0px', fontSize: '22px' }}>En</h3> */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="var(--textColor)"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" /></svg>
                    </div>
                </div>
                <h3 className={styles.buttonName}>Language</h3>
            </div>
        )
    }

    const WPMBox = () => {

        const [time, setTime] = useState(60);
        const [isTimerOn, setIsTimerOn] = useState(false);
        useEffect(() => {
            if (isTimerOn) {
                startTimer()
            }
        }, [time])
        const startTimer = (e) => {
            setIsTimerOn(true)
            return setTimeout(() => {
                if (time > 1) {
                    setTime(time - 1)
                } else {
                    setIsTimerOn(false)
                    setTime(60)
                }
            }, 1000)
            // if (time == 0) clearInterval(x);
            // setTimeout(() => {
            //     setIsTimerOn(false)
            //     console.log("complete")
            // }, 30000)
        }
        return (
            <div className={styles.buttonBox} onClick={startTimer}>
                <div className={styles.svgButtonContainer}>
                    <div className={styles.svgButton}>
                        <svg className={styles.svgMain}>
                            <circle className={(isTimerOn) ? styles.svgCircleOn : styles.svgCircle} r="43" cx="45" cy="45"></circle>
                        </svg>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="var(--textColor)"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z" /></svg> */}
                        <h1 style={{ margin: '0px', fontSize: '36px' }}>{time}</h1>
                        <h2 style={{ margin: '0px', fontSize: '11px', fontWeight: '300' }}>seconds</h2>
                    </div>
                </div>
                <h3 className={styles.buttonName}>Certificate</h3>
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
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className={styles.Modal}
                overlayClassName={styles.Overlay}
            >
                <h2 className={styles.modalHeader}>Choose Language</h2>
                <div className={styles.modalBody}>
                    <LangCard lang={"Nepali"} />
                    <LangCard lang={"English"} link={'en'} />
                    <LangCard lang={"Hindi"} link={'in'} />
                    <LangCard lang={"Newari"} link={'newa'} />
                    <LangCard lang={"Russian"} link={'ru'} />
                </div>
            </Modal>
            {/* <Button name={'WPM'} value1={0} value2={''} /> */}
        </div>
    );
}

export default Score;