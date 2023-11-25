"use client";
import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavMenuList } from "../model/nav";

type Props = {
    navMenuList: NavMenuList;
};

export default function NavMenu({ navMenuList }: Props) {
    const pathname = usePathname();

    const hasPathname = (path: string): boolean => {
        return pathname.split("/")[1] === path.split("/")[1];
    };

    return (
        <>
            {navMenuList.map(({ title, path }) => (
                <li key={title} className="my-4 text-lg text-center">
                    <Link
                        href={path}
                        className={`${hasPathname(path) && "text-blue-600 dark:text-yellow-500"}`}
                    >
                        {title}
                    </Link>
                </li>
            ))}
        </>
    );
}
