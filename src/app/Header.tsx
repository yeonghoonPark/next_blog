import React from "react";
import Link from "next/link";
import MobileNavMenu from "./components/MobileNavMenu";
import NavMenu from "./components/NavMenu";
import ThemeMenu from "./components/ThemeMenu";

const LINKS = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Develop", path: "/develop" },
    { title: "Daily", path: "/daily" },
];

const TITLE = "YH's Dev";
const PATH_HOME = "/";

export default function Header() {
    return (
        <header className="flex items-center w-full h-16 shadow shadow-gray-400 sticky top-0">
            <div className="flex justify-between w-full max-w-6xl my-0 mx-auto px-6">
                <h1 className="font-semibold text-xl">
                    <Link href={PATH_HOME}>{TITLE}</Link>
                </h1>
                <nav className="hidden sm:block">
                    <ul className="flex items-center gap-6">
                        <NavMenu navMenuList={LINKS} />
                        <ThemeMenu />
                    </ul>
                </nav>
                <MobileNavMenu navMenuList={LINKS} />
            </div>
        </header>
    );
}
