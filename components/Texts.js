import { useContext, useEffect, useState } from 'react';
import styles from '../styles/Texts.module.css';

import { TextContext } from './TextContext';
import { TextList } from './TextList';
const Texts = () => {
    const {
        lang,
        currentLetterIndex,
        changeLetterIndex,
        currentSentenceIndex,
        changeSentenceIndex,
        userText,
        clearUserText,
        totalWords,
        changeTotalWords
    } = useContext(TextContext);

    const [prevElement, setPrevElement] = useState(null);

    useEffect(() => {
        if (prevElement) {
            prevElement.style.backgroundColor = 'var(--keyColor)';
        }

        let charVal = (TextList[currentSentenceIndex]).charCodeAt(currentLetterIndex);
        let element;
        if (charVal >= 65 && charVal <= 90) {
            element = document.querySelector(`.key-${charVal}`);
            element.style.backgroundColor = 'var(--keyHighlightColor)';
            let element2 = document.querySelector(`.key-16`);
            element2.style.backgroundColor = 'var(--keyHighlightColor)';
        } else if (charVal >= 97 && charVal <= 122) {
            element = document.querySelector(`.key-${charVal - 32}`);
            element.style.backgroundColor = 'var(--keyHighlightColor)';
            let element2 = document.querySelector(`.key-16`);
            element2.style.backgroundColor = 'var(--keyColor)';
        } else if (charVal == 32) {
            element = document.querySelector(`.key-${charVal}`);
            element.style.backgroundColor = 'var(--keyHighlightColor)';
        } else if (charVal >= 44 && charVal <= 47) {
            element = document.querySelector(`.key-${charVal + 144}`);
            element.style.backgroundColor = 'var(--keyHighlightColor)';
        } else if (charVal >= 91 && charVal <= 93) {
            element = document.querySelector(`.key-${charVal + 128}`);
            element.style.backgroundColor = 'var(--keyHighlightColor)';
        } else if (charVal == 59) {
            element = document.querySelector(`.key-${charVal + 127}`);
            element.style.backgroundColor = 'var(--keyHighlightColor)';
        } else if (charVal == 59) {
            element = document.querySelector(`.key-${charVal + 126}`);
            element.style.backgroundColor = 'var(--keyHighlightColor)';
        }

        if (currentLetterIndex == TextList[currentSentenceIndex].length) {
            changeTotalWords(totalWords + 1);
            changeSentenceIndex(currentSentenceIndex + 1);
            changeLetterIndex(0);
            clearUserText();
        }
        setPrevElement(element);
    }, [currentLetterIndex])

    return (
        <div className={styles.textContainer}>
            <div className={styles.textRow}>
                {
                    Array.from(TextList[currentSentenceIndex]).map((letter, index) =>
                        <label
                            className={index > currentLetterIndex ? `${styles.textRem}` : letter == userText[index] ? `${styles.textCorrect}` : `${styles.textIncorrect}`}
                            style={(lang == "English")? {fontWeight: 800} : {fontWeight: 400}}
                            id={index == currentLetterIndex ? `${styles.textCurrent}` : `${styles.text}`}
                            key={index}>
                            {letter}
                        </label>)
                }
            </div>
            <div 
                className={styles.textRowBottom}
                style={(lang == "Nepali" || lang == "Hindi")? {fontSize: 25} : {fontSize: "large"}}
                            
            >
                {TextList[currentSentenceIndex + 1]}
            </div>
        </div>
    );
}

export default Texts;