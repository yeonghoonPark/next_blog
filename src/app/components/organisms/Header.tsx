"use client";

import Link from "next/link";
import HamburgerIcon from "@/app/components/atoms/icon/HamburgerIcon";
import { APP_TITLE } from "@/app/constants/app";
import { useNavigationStore } from "@/app/store/navigation/useNavigationStore";

const Header = () => {
  const toggleNavigation = useNavigationStore((state) => state.actions.toggleNavigation);

  const handleClick = () => {
    if (window.innerWidth < 1280) toggleNavigation();
  };

  return (
    <header className="fixed top-0 z-10 w-full items-center border-b border-neutral-300 backdrop-blur-md dark:border-gray-700">
      <div className="mx-auto flex h-14 max-w-[90rem] items-center justify-between px-3">
        <div className="flex items-center gap-6">
          <HamburgerIcon onClick={handleClick} />
          <h1 className="text-lg font-semibold">
            <Link href="/">{APP_TITLE}</Link>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
