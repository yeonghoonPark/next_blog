import Link from "next/link";
import HamburgerIcon from "@/app/components/atoms/icon/HamburgerIcon";
import { APP_TITLE } from "@/app/constants/app";

const Header = () => {
  return (
    <header className="fixed top-0 z-10 w-full items-center border-b border-neutral-300 bg-[#e8eef4] dark:border-gray-700 dark:bg-[#0f192d]">
      <div className="flex h-14 items-center justify-between px-3">
        <div className="flex items-center gap-6">
          <HamburgerIcon />
          <h1 className="text-lg font-semibold">
            <Link href="/">{APP_TITLE}</Link>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
