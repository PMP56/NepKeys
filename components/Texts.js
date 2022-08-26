import { useContext, useEffect, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { SettingContext } from '../context/SettingContext';
import styles from '../styles/Texts.module.css';

import { TextContext } from '../context/TextContext';
import { TextList } from './TextList';
const Texts = (props) => {
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
    
    const {zen, setZen} = useContext(SettingContext);
    const [prevElement, setPrevElement] = useState(null);
    const [allText,setAllText] = useState(null);

    useEffect(() => {
        setAllText(props.allText)
    }, [0])

    useEffect(() => {
        if (prevElement) {
            prevElement.style.backgroundColor = 'var(--keyColor)';
        }

        if (allText){
            let charVal = (allText[currentSentenceIndex]).charCodeAt(currentLetterIndex);
            let element;
            if (!zen){
    
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
            }
    
            if (currentLetterIndex == allText[currentSentenceIndex].length) {
                changeTotalWords(totalWords + 1);
                changeSentenceIndex(currentSentenceIndex + 1);
                changeLetterIndex(0);
                clearUserText();
            }
            setPrevElement(element);
        }
    }, [currentLetterIndex])

    return (
        <div id="textHolder" className={styles.textContainer}>
            <div className={styles.textRow}>
                {   (allText)?
                    Array.from(allText[currentSentenceIndex]).map((letter, index) =>
                        <label
                            className={index > currentLetterIndex ? `${styles.textRem}` : letter == userText[index] ? `${styles.textCorrect}` : `${styles.textIncorrect}`}
                            style={(lang == "English")? {fontWeight: 800} : {fontWeight: 400}}
                            id={index == currentLetterIndex ? `${styles.textCurrent}` : `${styles.text}`}
                            key={index}>
                            {letter}
                        </label>) : <Fragment />
                }
            </div>
            <div 
                className={styles.textRowBottom}
                style={(lang == "Nepali" || lang == "Hindi")? {fontSize: 28} : {fontSize: (zen)? 24 : 'larger'}}
                            
            >
                {(allText)? allText[currentSentenceIndex + 1] : <Fragment />}
                {(allText && zen)? <Fragment><br />{allText[currentSentenceIndex + 2]}</Fragment> : <Fragment />}
                {/* {(zen)? <Fragment><br />{TextList[currentSentenceIndex + 3]}</Fragment> : <Fragment />} */}
            </div>
        </div>
    );
}

export default Texts;