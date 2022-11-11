import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

function ThemeContextProvider({ children }) {
    const[theme, setTheme] = useState(undefined)

    useEffect(() => {
        setTheme("dark")
    }, [])

    const value = {
        theme, 
        setTheme
    }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeContextProvider