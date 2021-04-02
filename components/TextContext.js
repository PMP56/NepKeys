import React, { useState } from 'react';

export const TextContext = React.createContext()

export const TextProvider = ({ children }) => {
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

    const [userText, setUserText] = useState([]);

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
    return (
        <TextContext.Provider
            value={{
                currentLetterIndex: currentLetterIndex,
                changeLetterIndex: changeLetterIndex,
                currentSentenceIndex: currentSentenceIndex,
                changeSentenceIndex: changeSentenceIndex,
                userText: userText,
                addUserText: addUserText,
                clearUserText: clearUserText
            }}
        >
            {children}
        </TextContext.Provider>
    );
}