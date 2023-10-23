"use client";
import React, { createContext, useState, useEffect } from "react";
import { constant } from "../util/constant";

export type Theme = typeof constant.THEME_LIGHT | typeof constant.THEME_LIGHT;

export const ThemeContext = createContext<any>(null);

type Props = {
    children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
    const [theme, setTheme] = useState<Theme>(constant.THEME_LIGHT);
    const toggleTheme = () =>
        setTheme((prev) =>
            prev === constant.THEME_LIGHT ? constant.THEME_DARK : constant.THEME_LIGHT,
        );
    useEffect(() => updateTheme(theme), [theme]);
    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

const updateTheme = (theme: Theme) => {
    theme === constant.THEME_DARK
        ? document.documentElement.classList.add(constant.THEME_DARK)
        : document.documentElement.classList.remove(constant.THEME_DARK);
};
