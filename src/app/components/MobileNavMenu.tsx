"use client";

import { useState } from "react";
import CloseIcon from "@/app/components/atoms/icon/CloseIcon";
import HamburgerIcon from "@/app/components/atoms/icon/HamburgerIcon";
import MobileNavContents from "@/app/components/MobileNavContents";
import ThemeMenu from "@/app/components/ThemeMenu";
import { ICONS } from "@/app/constants/icons";
import { NavMenuList } from "@/app/models/nav";

type Props = {
  navMenuList: NavMenuList;
};

const MOBILE_MENU_LIST = [
  {
    id: ICONS.CLOSE,
    isVisibility: true,
    element: <CloseIcon />,
  },
  {
    id: ICONS.HAMBURGER,
    isVisibility: false,
    element: <HamburgerIcon />,
  },
];

const MobileNavMenu = ({ navMenuList }: Props) => {
  const [isNavShow, setIsNavShow] = useState(false);

  const toggleNav = () => {
    setIsNavShow((prevNavShow) => !prevNavShow);
  };

  return (
    <>
      <div className="flex items-center sm:hidden">
        <ul className="flex items-center gap-6">
          {MOBILE_MENU_LIST.filter(({ isVisibility }) => isVisibility === isNavShow).map(
            ({ id, element }) => (
              <li key={id} onClick={toggleNav}>
                {element}
              </li>
            ),
          )}
          <ThemeMenu />
        </ul>
      </div>
      {isNavShow && (
        <MobileNavContents isShow={isNavShow} onClick={toggleNav} navMenuList={navMenuList} />
      )}
    </>
  );
};

export default MobileNavMenu;
