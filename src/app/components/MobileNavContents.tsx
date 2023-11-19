import React from "react";

import { NavMenuList } from "../model/nav";
import NavMenu from "./NavMenu";

type Props = {
    isShow: boolean;
    onClick: () => void;
    navMenuList: NavMenuList;
};

export default function MobileNavContents({ isShow, onClick, navMenuList }: Props) {
    return (
        <div
            className={`
        sm:hidden fixed ${
            isShow ? "inset-0" : "-right-full"
        } mt-16 bg-[#e8eef4] dark:bg-[#181e2b] border-t-[0.2px] border-neutral-300 dark:border-gray-700
    `}
            onClick={onClick}
        >
            <nav className="p-6">
                <ul className="flex flex-col gap-6">
                    <NavMenu navMenuList={navMenuList} />
                </ul>
            </nav>
        </div>
    );
}
