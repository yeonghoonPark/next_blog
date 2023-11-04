"use client";
import React from "react";
import Link from "next/link";
import { NavMenuList } from "../model/nav";
import { usePathname } from "next/navigation";

type Props = {
    navMenuList: NavMenuList;
};

export default function NavMenu({ navMenuList }: Props) {
    const pathname = usePathname();
    return (
        <>
            {navMenuList.map(({ title, path }) => (
                <li key={title} className="text-lg text-center">
                    <Link
                        href={path}
                        className={`${pathname === path && "text-blue-600 dark:text-yellow-500"}`}
                    >
                        {title}
                    </Link>
                </li>
            ))}
        </>
    );
}
