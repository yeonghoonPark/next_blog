"use client";
import React, { useMemo } from "react";
import { useTheme } from "../hook/useTheme";
import { constant } from "../util/constant";
import SunIcon from "./icon/SunIcon";
import MoonIcon from "./icon/MoonIcon";

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
