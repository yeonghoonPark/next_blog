"use client";
import React, { useState } from "react";
import HamburgerIcon from "./icon/HamburgerIcon";
import CloseIcon from "./icon/CloseIcon";
import NavigationMenu from "./NavMenu";

type Props = {
    navMenuList: { title: string; path: string }[];
};

export default function MobileMenu({ navMenuList }: Props) {
    const [isNavShow, setIsNavShow] = useState(false);

    const toggleNav = () => setIsNavShow((prev) => !prev);

    return (
        <>
            <div className="flex sm:hidden items-center">
                <ul>
                    <li>
                        {isNavShow ? (
                            <CloseIcon onClick={toggleNav} />
                        ) : (
                            <HamburgerIcon onClick={toggleNav} />
                        )}
                    </li>
                </ul>
            </div>
            {isNavShow && (
                <div
                    className={`
                        sm:hidden fixed ${
                            isNavShow ? "inset-0" : "-right-full"
                        } mt-16 bg-white border-t
                    `}
                    onClick={toggleNav}
                >
                    <nav className="p-6">
                        <NavigationMenu navMenuList={navMenuList} isColumn={true} />
                    </nav>
                </div>
            )}
        </>
    );
}
