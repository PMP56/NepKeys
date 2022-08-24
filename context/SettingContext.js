import React, { useState } from 'react';

export const SettingContext = React.createContext()

export const SettingProvider = ({ children }) => {
    const [lang, setLang] = useState('np');
    const [zen, setZen] = useState(false);
    

    return (
        <SettingContext.Provider
            value={{
                lang: lang,
                setLang: setLang,
                zen: zen,
                setZen, setZen
            }}
        >
            {children}
        </SettingContext.Provider>
    );
}