import React, { createContext, useContext, useState } from 'react';
import { Appearance } from 'react-native';

type ThemeMode = 'light' | 'dark';

const ThemeContext = createContext({
    theme: 'light' as ThemeMode,
    toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const system = Appearance.getColorScheme();
    const [theme, setTheme] = useState<ThemeMode>(system === 'dark' ? 'dark' : 'light');

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useAppTheme = () => useContext(ThemeContext);