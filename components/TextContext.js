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
                changeTotalCorrectLetters: changeTotalCorrectLetters
            }}
        >
            {children}
        </TextContext.Provider>
    );
}