"use client";

import React, { useMemo, useState } from "react";
import { NavMenuList } from "../models/nav";
import { constant } from "../utils/constant";
import CloseIcon from "./atoms/icon/CloseIcon";
import HamburgerIcon from "./atoms/icon/HamburgerIcon";
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
      <div className="flex items-center sm:hidden">
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
        <MobileNavContents isShow={isNavShow} onClick={toggleNav} navMenuList={navMenuList} />
      )}
    </>
  );
}
