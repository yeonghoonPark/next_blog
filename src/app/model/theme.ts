import { constant } from "../util/constant";

export type Theme = typeof constant.THEME.DARK | typeof constant.THEME.LIGHT;

export type ThemeContextProps = {
    theme: Theme;
    toggleTheme: () => void;
};
