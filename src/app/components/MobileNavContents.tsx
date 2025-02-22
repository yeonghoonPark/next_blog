import React from "react";
import { NavMenuList } from "../models/nav";
import NavMenu from "./NavMenu";

type Props = {
  isShow: boolean;
  onClick: () => void;
  navMenuList: NavMenuList;
};

export default function MobileNavContents({ isShow, onClick, navMenuList }: Props) {
  return (
    <div
      className={`fixed sm:hidden ${
        isShow ? "inset-0" : "-right-full"
      } mt-16 border-t-[0.2px] border-neutral-300 bg-[#e8eef4] dark:border-gray-700 dark:bg-[#0f192d]`}
      onClick={onClick}
    >
      <nav className="p-10">
        <ul className="flex flex-col gap-6">
          <NavMenu navMenuList={navMenuList} />
        </ul>
      </nav>
    </div>
  );
}
