"use client";

import React, { useMemo } from "react";
import { useTheme } from "../hooks/useTheme";
import { constant } from "../utils/constant";
import MoonIcon from "./atoms/icon/MoonIcon";
import SunIcon from "./atoms/icon/SunIcon";

export default function ThemeMenu() {
  const { theme, toggleTheme } = useTheme();

  const themeMenuList = useMemo(() => {
    return [
      {
        id: constant.KEY.SUN,
        visibility: constant.THEME.DARK,
        element: <SunIcon />,
      },
      {
        id: constant.KEY.MOON,
        visibility: constant.THEME.LIGHT,
        element: <MoonIcon />,
      },
    ];
  }, []);

  return (
    <>
      {themeMenuList
        .filter(({ visibility }) => visibility === theme)
        .map(({ id, element }) => (
          <li key={id} onClick={toggleTheme}>
            {element}
          </li>
        ))}
    </>
  );
}
