import React, { useState } from 'react';

export const TextContext = React.createContext()

export const TextProvider = ({ children }) => {
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [userText, setUserText] = useState([]);

    //for score
    const [totalLetters, setTotalLetters] = useState(0.00001);
    const [totalCorrectLetters, setTotalCorrectLetters] = useState(0);
    const [totalWords, setTotalWords] = useState(0);
    const [totalCorrectWords, setTotalCorrectWords] = useState(0);

    //for graph
    const [lettersVsAcc, setLettersVsAcc] = useState({ letters: [], acc: [] });

    const changeLetterIndex = (val) => {
        setCurrentLetterIndex(val);
    }
    const changeSentenceIndex = (val) => {
        setCurrentSentenceIndex(val);
    }

    const addUserText = (val) => {
        setUserText([...userText, val]);
    }

    const clearUserText = () => {
        setUserText([]);
    }

    const changeTotalLetters = (val) => {
        setTotalLetters(val);
    }

    const changeTotalCorrectLetters = (val) => {
        setTotalCorrectLetters(val);
    }

    const changeTotalWords = (val) => {
        setTotalWords(val);
    }

    const changeLetterVsAcc = (val) => {
        setLettersVsAcc(val);
    }

    return (
        <TextContext.Provider
            value={{
                currentLetterIndex: currentLetterIndex,
                changeLetterIndex: changeLetterIndex,
                currentSentenceIndex: currentSentenceIndex,
                changeSentenceIndex: changeSentenceIndex,
                userText: userText,
                addUserText: addUserText,
                clearUserText: clearUserText,
                totalLetters: totalLetters,
                changeTotalLetters: changeTotalLetters,
                totalCorrectLetters: totalCorrectLetters,
                changeTotalCorrectLetters: changeTotalCorrectLetters,
                totalWords: totalWords,
                changeTotalWords: changeTotalWords,
                lettersVsAcc: lettersVsAcc,
                changeLetterVsAcc: changeLetterVsAcc
            }}
        >
            {children}
        </TextContext.Provider>
    );
}