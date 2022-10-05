import { createContext, ReactNode, useContext, useState } from 'react';

//create types 
interface ThemeContextType {
    theme: string;
    toggleTheme: () => void
}
type ProviderProps = {
    children: ReactNode;
}

// create context
const themeContext = createContext({} as ThemeContextType)

// create provider
export const ThemeContextProvider = ({ children }: ProviderProps) => {

    const [theme, setTheme] = useState<string>("basic");

    function toggleTheme() {
        setTheme(prevTheme => prevTheme === "basic" ? "dark" : "basic" )
    }

    return (
        <themeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </themeContext.Provider>
    )
}

// expose as custom hook 
export const useThemeContext = () => {
    return useContext(themeContext);
}