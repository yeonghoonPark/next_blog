import React from "react";
import NavMenu from "./NavMenu";
import { NavMenuList } from "../model/nav";

type Props = {
    isShow: boolean;
    onClick: () => void;
    navMenuList: NavMenuList;
};

export default function MobileNavContents({ isShow, onClick, navMenuList }: Props) {
    return (
        <div
            className={`
        sm:hidden fixed ${isShow ? "inset-0" : "-right-full"} mt-16 bg-[#e4e6e8] dark:bg-[#15181e]
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
