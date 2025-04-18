import { THEME } from "@/app/constants/theme/theme";

export type Theme = typeof THEME.LIGHT | typeof THEME.DARK;

export type ThemeContextProps = {
  theme: Theme;
  toggleTheme: () => void;
};
