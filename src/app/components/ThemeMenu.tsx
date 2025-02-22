"use client";

import MoonIcon from "@/app/components/atoms/icon/MoonIcon";
import SunIcon from "@/app/components/atoms/icon/SunIcon";
import { ICONS } from "@/app/constants/icons";
import { THEME } from "@/app/constants/theme";
import { useTheme } from "@/app/hooks/useTheme";

const THEME_MENU_LIST = [
  {
    id: ICONS.SUN,
    visibility: THEME.DARK,
    element: <SunIcon />,
  },
  {
    id: ICONS.MOON,
    visibility: THEME.LIGHT,
    element: <MoonIcon />,
  },
];

const ThemeMenu = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {THEME_MENU_LIST.filter(({ visibility }) => visibility === theme).map(({ id, element }) => (
        <li key={id} onClick={toggleTheme}>
          {element}
        </li>
      ))}
    </>
  );
};

export default ThemeMenu;
