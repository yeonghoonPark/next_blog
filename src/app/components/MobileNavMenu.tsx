"use client";
import React, { useState } from "react";
import ThemeMenu from "./ThemeMenu";

import HamburgerIcon from "./icon/HamburgerIcon";
import MobileNavContents from "./MobileNavContents";
import CloseIcon from "./icon/CloseIcon";
import { NavMenuList } from "../model/nav";

type Props = {
    navMenuList: NavMenuList;
};

export default function MobileMenu({ navMenuList }: Props) {
    const [isNavShow, setIsNavShow] = useState(false);
    const toggleNav = () => setIsNavShow((prev) => !prev);

    return (
        <>
            <div className="flex sm:hidden items-center">
                <ul className="flex items-center gap-6">
                    <li>
                        {isNavShow ? (
                            <CloseIcon onClick={toggleNav} />
                        ) : (
                            <HamburgerIcon onClick={toggleNav} />
                        )}
                    </li>
                    <li>
                        <ThemeMenu />
                    </li>
                </ul>
            </div>
            {isNavShow && (
                <MobileNavContents
                    isShow={isNavShow}
                    onClick={toggleNav}
                    navMenuList={navMenuList}
                />
            )}
        </>
    );
}
