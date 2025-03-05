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
    <header className="top-0 z-10 sticky flex-none backdrop-blur-md border-neutral-300 dark:border-gray-700 border-b w-full">
      <div className="flex justify-between items-center mx-auto px-3 max-w-[90rem] h-14">
        <div className="flex items-center gap-6">
          <HamburgerIcon onClick={handleClick} />
          <h1 className="font-semibold text-lg">
            <Link href="/">{APP_TITLE}</Link>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
