"use client";

import { createContext, useEffect, useState } from "react";

import { THEME } from "@/app/constants";
import { Theme } from "@/app/models";

type ThemeContextProps = {
  theme: Theme;
  toggleTheme: () => void;
};

const getNextTheme = (theme: Theme): Theme => {
  return theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
};

const updateTheme = (
  theme: Theme,
  setTheme: React.Dispatch<React.SetStateAction<Theme>>,
) => {
  if (theme === THEME.DARK) {
    document.documentElement.classList.add(THEME.DARK);
    localStorage.theme = THEME.DARK;
    setTheme(THEME.DARK);
  } else {
    document.documentElement.classList.remove(THEME.DARK);
    localStorage.theme = THEME.LIGHT;
    setTheme(THEME.LIGHT);
  }
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: THEME.LIGHT || THEME.DARK,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(THEME.LIGHT);

  const toggleTheme = () => {
    setTheme((prevTheme) => getNextTheme(prevTheme));
    updateTheme(getNextTheme(theme), setTheme);
  };

  useEffect(() => {
    localStorage.theme === THEME.DARK
      ? updateTheme(THEME.DARK, setTheme)
      : updateTheme(THEME.LIGHT, setTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
