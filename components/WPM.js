import { useContext, useEffect, useRef, useState } from 'react';
import styles from '../styles/Score.module.css'
import Modal from 'react-modal';

import { ProgressGraph } from './Analytics';
import { TextContext } from './TextContext';
import { shuffle, TextList } from './TextList';

Modal.setAppElement('body');

const WPMBox = () => {
    const {
        currentLetterIndex,
        changeLetterIndex,
        currentSentenceIndex,
        changeSentenceIndex,
        addUserText,
        clearUserText,
        totalLetters,
        changeTotalLetters,
        totalCorrectLetters,
        changeTotalCorrectLetters,
        totalWords,
        changeTotalWords,
        changeLetterVsAcc,
    } = useContext(TextContext);

    let accuracy = Math.ceil(totalCorrectLetters * 100 / totalLetters);
    const audioRef = useRef({ current: null })

    // for timer in background
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
                setIsScoreOpen(true)
                setTime(60)
            }
        }, 1000)
    }

    const [countdown, setCountdown] = useState(3);
    const [isCountdownOpen, setIsCountdownOpen] = useState(false);

    useEffect(() => {
        if (isCountdownOpen) {
            openCountdownModal();
        }
    }, [countdown])

    const shuffleFunc = () => {
        // for (let i = 0; i <= 50; i++) {
        shuffle(TextList)
        // }
    }

    const openCountdownModal = () => {
        // for (let i = 0; i <= 50; i++) {
        setIsCountdownOpen(true);
        changeLetterIndex(0);
        clearUserText();
        changeTotalLetters(0.00001);
        changeTotalCorrectLetters(0);
        changeTotalWords(0);
        changeSentenceIndex(0);
        audio.play();
        return setTimeout(() => {
            if (countdown > 1) {
                setCountdown(countdown - 1);
            } else {
                setIsCountdownOpen(false)
                setCountdown(3)
                startTimer()
            }
        }, 1000)
    }

    const concurrentFunction = () => {
        openCountdownModal();
        shuffleFunc();
    }

    //for score modal
    const [isScoreOpen, setIsScoreOpen] = useState(false);

    const closeScoreModal = () => {
        setIsScoreOpen(false);
    }

    return (
        <>
            <div className={styles.buttonBox} onClick={!(isTimerOn) ? concurrentFunction : () => { }} alt="Click to start">
                <div className={styles.svgButtonContainer}>
                    <div className={styles.svgButton}>
                        <svg className={styles.svgMain}>
                            <circle className={styles.svgCircle} r="43" cx="45" cy="45"></circle>
                        </svg>
                        <h1 style={{ margin: '0px', fontSize: '36px' }}>{time}</h1>
                        <h2 style={{ margin: '0px', fontSize: '11px', fontWeight: '300' }}>seconds</h2>
                    </div>
                </div>
                <h3 style={{ fontSize: '14px', fontWeight: '600' }} className={styles.buttonName}>WPM Test</h3>
                <audio ref={audioRef} id='audio' src='/countdown.ogg' />
            </div>
            <Modal
                isOpen={isCountdownOpen}
                contentLabel="Example Modal"
                className={styles.countdownModal}
                overlayClassName={styles.Overlay}
            >
                <h2 className={styles.countdownModalHeader}>{countdown}</h2>
            </Modal>
            <Modal
                isOpen={isScoreOpen}
                onRequestClose={closeScoreModal}
                contentLabel="Example Modal"
                className={styles.scoreModal}
                overlayClassName={styles.Overlay}
            >
                <h2 className={styles.scoreModalHeader}>RESULT</h2>
                <div className={styles.scoreModalBody}>
                    <div className={styles.scoreModalTiles}>
                        <h3 className={styles.scoreModalSmallText}>Total letters</h3>
                        <div className={styles.scoreModalLowerBody}>
                            <h1 className={styles.scoreModalBigText}>{Math.floor(totalLetters)}</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="white"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M14.94 4.66h-4.72l2.36-2.36 2.36 2.36zm-4.69 14.71h4.66l-2.33 2.33-2.33-2.33zM6.1 6.27L1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37l1.94-5.18 1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z" /></svg>
                        </div>
                    </div>
                    <div className={styles.scoreModalTiles}>
                        <h3 className={styles.scoreModalSmallText}>Total Words</h3>
                        <div className={styles.scoreModalLowerBody}>
                            <h1 className={styles.scoreModalBigText}>{totalWords}</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="white"><g><rect fill="none" height="24" width="24" /></g><g><g /><g><rect height="2" width="8" x="3" y="2" /><polygon points="6,11 8,11 8,7 11,7 11,5 3,5 3,7 6,7" /><rect height="2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -7.0416 16.9999)" width="11" x="11.5" y="16" /><circle cx="14.5" cy="14.5" r="1.5" /><circle cx="19.5" cy="19.5" r="1.5" /><path d="M15.5,11c1.38,0,2.5-1.12,2.5-2.5V4h3V2h-4v4.51C16.58,6.19,16.07,6,15.5,6C14.12,6,13,7.12,13,8.5 C13,9.88,14.12,11,15.5,11z" /><path d="M9.74,15.96l-1.41,1.41l-0.71-0.71l0.35-0.35c0.98-0.98,0.98-2.56,0-3.54c-0.49-0.49-1.13-0.73-1.77-0.73 c-0.64,0-1.28,0.24-1.77,0.73c-0.98,0.98-0.98,2.56,0,3.54l0.35,0.35l-1.06,1.06c-0.98,0.98-0.98,2.56,0,3.54 C4.22,21.76,4.86,22,5.5,22s1.28-0.24,1.77-0.73l1.06-1.06l1.41,1.41l1.41-1.41l-1.41-1.41l1.41-1.41L9.74,15.96z M5.85,14.2 c0.12-0.12,0.26-0.15,0.35-0.15s0.23,0.03,0.35,0.15c0.19,0.2,0.19,0.51,0,0.71l-0.35,0.35L5.85,14.9 C5.66,14.71,5.66,14.39,5.85,14.2z M5.85,19.85C5.73,19.97,5.59,20,5.5,20s-0.23-0.03-0.35-0.15c-0.19-0.19-0.19-0.51,0-0.71 l1.06-1.06l0.71,0.71L5.85,19.85z" /></g></g></svg>
                        </div>
                    </div>
                    {/* <div className={styles.scoreModalWPM}>
                        <h3 className={styles.scoreModalSmallText}>Total Words</h3>
                        <div className={styles.scoreModalLowerBody}>
                        <h1 className={styles.scoreModalBigText}>100</h1>
                        </div> 
                    </div>*/}
                    <div className={styles.scoreModalTiles}>
                        <h3 className={styles.scoreModalSmallText}>Correct Letters</h3>
                        <div className={styles.scoreModalLowerBody}>
                            <h1 className={styles.scoreModalBigText}>{totalCorrectLetters}</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="white"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z" /></svg>
                        </div>
                    </div>
                    <div className={styles.scoreModalTiles}>
                        <h3 className={styles.scoreModalSmallText}>Accuracy</h3>
                        <div className={styles.scoreModalLowerBody}>
                            <h1 className={styles.scoreModalBigText}>{accuracy} %</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="white"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z" /></svg>
                        </div>
                    </div>
                </div>
                <div className={styles.modalBodyGraph}>
                    <div className={styles.scoreModalTilesWPM}>
                        <svg className={styles.wpmIcon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="white"><path d="M0 0h24v24H0z" fill="none" /><path d="M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44z" /><path d="M10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z" /></svg>
                        <h3 className={styles.scoreModalWPMUpper}>Words Per Minute</h3>
                        <h1 className={styles.scoreModalWPMLower}>{Math.ceil(totalCorrectLetters / 5)}</h1>
                        <h3 className={styles.scoreModalWPMUpper}>words / minute</h3>
                    </div>
                    <div className={styles.modalGraph}>
                        <ProgressGraph />
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default WPMBox;