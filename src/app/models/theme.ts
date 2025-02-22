import { THEME } from "@/app/constants/theme";

export type Theme = typeof THEME.DARK | typeof THEME.LIGHT;

export type ThemeContextProps = {
  theme: Theme;
  toggleTheme: () => void;
};
