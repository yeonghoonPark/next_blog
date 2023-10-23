import Link from "next/link";
import React from "react";
import { NavMenuList } from "../model/nav";

type Props = {
    navMenuList: NavMenuList;
};

export default function NavMenu({ navMenuList }: Props) {
    return (
        <>
            {navMenuList.map(({ title, path }) => (
                <li key={title} className="text-lg">
                    <Link href={path}>{title}</Link>
                </li>
            ))}
        </>
    );
}
