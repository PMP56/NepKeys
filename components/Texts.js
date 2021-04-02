import { useContext, useEffect } from 'react';
import styles from '../styles/Texts.module.css';

import { TextContext } from './TextContext';
import { TextList } from './TextList';
const Texts = () => {
    const {
        currentLetterIndex,
        changeLetterIndex,
        currentSentenceIndex,
        changeSentenceIndex,
        userText,
        addUserText,
        clearUserText
    } = useContext(TextContext);

    useEffect(() => {
        if (currentLetterIndex == TextList[currentSentenceIndex].length) {
            changeSentenceIndex(currentSentenceIndex + 1);
            changeLetterIndex(0);
            clearUserText();
        }
    }, [currentLetterIndex])

    return (
        <div className={styles.textContainer}>
            <div className={styles.textRow}>
                {
                    Array.from(TextList[currentSentenceIndex]).map((letter, index) =>
                        <label
                            className={index > currentLetterIndex ? `${styles.textRem}` : letter == userText[index] ? `${styles.textCorrect}` : `${styles.textIncorrect}`}
                            id={index == currentLetterIndex ? `${styles.textCurrent}` : `${styles.text}`}
                            key={index}>
                            {letter}
                        </label>)
                }
            </div>
        </div>
    );
}

export default Texts;