import Link from "next/link";
import React from "react";

type Props = {
    navMenuList: { title: string; path: string }[];
    isColumn?: boolean;
};

export default function NavMenu({ navMenuList, isColumn = false }: Props) {
    return (
        <ul className={`flex ${isColumn && "flex-col"} gap-6`}>
            {navMenuList.map(({ title, path }) => (
                <li key={title} className="text-lg">
                    <Link href={path}>{title}</Link>
                </li>
            ))}
        </ul>
    );
}
