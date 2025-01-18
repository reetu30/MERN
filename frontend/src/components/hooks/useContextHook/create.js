import { createContext } from 'react'
import { lightTheme, darkTheme } from '../../constant/constant'

export const ThemeContext = createContext()
 
export const ThemeProvider = ({children}) => {
    const cuurentTheme = darkTheme;
    return (
        <ThemeContext.Provider value={cuurentTheme}>
            {children}
        </ThemeContext.Provider>
    )
}