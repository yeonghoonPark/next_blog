import React from "react";
import Link from "next/link";

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
        <header className="w-full border-b border-neutral-200 sticky top-0">
            <div className="flex justify-between w-full max-w-6xl my-0 mx-auto py-4 px-6">
                <h1 className="font-semibold text-xl">
                    <Link href={PATH_HOME}>{TITLE}</Link>
                </h1>
                <nav className="hidden sm:block">
                    <ul className="flex gap-6">
                        {LINKS.map(({ title, path }) => (
                            <li key={title} className="text-lg">
                                <Link href={path}>{title}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
