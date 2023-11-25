import React from "react";

import Link from "next/link";

import MobileNavMenu from "./MobileNavMenu";
import NavMenu from "./NavMenu";
import ThemeMenu from "./ThemeMenu";

const LINKS = [
    { title: "Home", path: "/" },
    { title: "Posts", path: "/posts" },
    // { title: "About", path: "/about" },
    // { title: "Daily", path: "/daily" },
    // { title: "Contact", path: "/contact" }, // file does not exist
];

const TITLE = "yeonghoon-dev";
const PATH_HOME = "/";

export default function Header() {
    return (
        <header className="fixed top-0 flex items-center w-full h-16 bg-[#e8eef4] dark:bg-[#0f192d] shadow-sm shadow-neutral-300 dark:shadow-gray-700 z-10">
            <div className="flex justify-between w-full max-w-5xl my-0 mx-auto px-10">
                <h1 className="flex items-center font-semibold text-lg">
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
