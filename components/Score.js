import { useContext, useState } from 'react';
import styles from '../styles/Score.module.css'

import { TextContext } from './TextContext';

const Score = () => {
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
        changeTotalCorrectLetters
    } = useContext(TextContext);

    let accuracy = Math.ceil(totalCorrectLetters * 100 / totalLetters);

    const Button = (props) => {
        return (
            <div className={styles.buttonBox}>
                <div className={styles.buttonContainer}>
                    <div className={styles.button}>
                        <h3 style={{ margin: '0px', fontSize: '22px' }}>{props.value1}</h3>
                        <h2 style={{ margin: '0px', fontSize: '14px', fontWeight: '300' }}>{props.value2}</h2>
                    </div>
                </div>
                <h3 className={styles.buttonName}>{props.name}</h3>
            </div>
        )
    }

    return (
        <div className={styles.scoreBox}>
            <Button name={'Accuracy'} value1={accuracy} value2={'%'} />
            <Button name={'Total Words'} value1={0} value2={'words'} />
            <Button name={'Total Letters'} value1={0} value2={'letters'} />
            <Button name={'WPM'} value1={0} value2={''} />
        </div>
    );
}

export default Score;