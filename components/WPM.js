import { useContext, useEffect, useRef, useState } from 'react';
import styles from '../styles/Score.module.css'
import Modal from 'react-modal';

import { TextContext } from './TextContext';

Modal.setAppElement('body');

const WPMBox = () => {
    const {
        totalLetters,
        totalCorrectLetters,
        totalWords,
    } = useContext(TextContext);

    // const [audio, setAudio] = useState(new Audio('/countdown.wav'));
    const audioRef = useRef({ current: null })

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
    }

    const [countdown, setCountdown] = useState(3);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            openModal()
        }
    }, [countdown])

    const openModal = () => {
        setIsOpen(true);
        audio.play()
        return setTimeout(() => {
            if (countdown > 1) {
                setCountdown(countdown - 1)
            } else {
                setIsOpen(false)
                setCountdown(3)
                startTimer()
            }
        }, 1000)
    }

    const closeModal = () => {
        setIsOpen(false);
    }
    return (
        <>
            <div className={styles.buttonBox} onClick={!(isTimerOn) ? openModal : () => { }} alt="Click to start">
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
                isOpen={isOpen}
                contentLabel="Example Modal"
                className={styles.countdownModal}
                overlayClassName={styles.Overlay}
            >
                <h2 className={styles.countdownModalHeader}>{countdown}</h2>
            </Modal>
        </>
    )
}

export default WPMBox;