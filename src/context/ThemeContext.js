import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContexProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    function toggleTheme() {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}