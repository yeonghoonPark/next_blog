"use client";
import React, { createContext, useState, useEffect } from "react";
import { Theme, ThemeContextProps } from "../model/theme";
import { constant } from "../util/constant";

export const ThemeContext = createContext<ThemeContextProps>({
    theme: constant.THEME.LIGHT || constant.THEME.DARK,
    toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>(constant.THEME.LIGHT);

    const toggleTheme = () => {
        setTheme((prevTheme) => getNextTheme(prevTheme));
        updateTheme(getNextTheme(theme), setTheme);
    };

    useEffect(() => {
        localStorage.theme === constant.THEME.DARK
            ? updateTheme(constant.THEME.DARK, setTheme)
            : updateTheme(constant.THEME.LIGHT, setTheme);
    }, []);

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

const getNextTheme = (theme: Theme): Theme => {
    return theme === constant.THEME.LIGHT ? constant.THEME.DARK : constant.THEME.LIGHT;
};

const updateTheme = (theme: Theme, setTheme: React.Dispatch<React.SetStateAction<Theme>>) => {
    if (theme === constant.THEME.DARK) {
        document.documentElement.classList.add(constant.THEME.DARK);
        localStorage.theme = constant.THEME.DARK;
        setTheme(constant.THEME.DARK);
    } else {
        document.documentElement.classList.remove(constant.THEME.DARK);
        localStorage.theme = constant.THEME.LIGHT;
        setTheme(constant.THEME.LIGHT);
    }
};
