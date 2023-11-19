"use client";
import React, { useMemo, useState } from "react";

import { NavMenuList } from "../model/nav";
import { constant } from "../util/constant";
import CloseIcon from "./icon/CloseIcon";
import HamburgerIcon from "./icon/HamburgerIcon";
import MobileNavContents from "./MobileNavContents";
import ThemeMenu from "./ThemeMenu";

type Props = {
    navMenuList: NavMenuList;
};

export default function MobileMenu({ navMenuList }: Props) {
    const [isNavShow, setIsNavShow] = useState(false);
    const toggleNav = () => {
        setIsNavShow((prevNavShow) => !prevNavShow);
    };

    const mobileMenuList = useMemo(() => {
        return [
            {
                id: constant.KEY.CLOSE,
                isVisibility: true,
                element: <CloseIcon />,
            },
            {
                id: constant.KEY.HAMBURGER,
                isVisibility: false,
                element: <HamburgerIcon />,
            },
        ];
    }, []);

    return (
        <>
            <div className="flex sm:hidden items-center">
                <ul className="flex items-center gap-6">
                    {mobileMenuList
                        .filter(({ isVisibility }) => isVisibility === isNavShow)
                        .map(({ id, element }) => (
                            <li key={id} onClick={toggleNav}>
                                {element}
                            </li>
                        ))}
                    <ThemeMenu />
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
