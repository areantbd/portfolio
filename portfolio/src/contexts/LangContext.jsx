import React, { createContext, useEffect, useState } from 'react'

export const LangContext = createContext()

function LangContextProvider({ children }) {
    const[lang, setLang] = useState(undefined)

    useEffect(() => {
        setLang("eng")
    }, [])

    const value = {
        lang, 
        setLang
    }

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export default LangContextProvider