"use client";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { constant } from "../util/constant";
import SunIcon from "./icon/SunIcon";
import MoonIcon from "./icon/MoonIcon";

export default function ThemeMenu() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            {theme === constant.THEME_LIGHT ? (
                <SunIcon onClick={toggleTheme} />
            ) : (
                <MoonIcon onClick={toggleTheme} />
            )}
        </>
    );
}
