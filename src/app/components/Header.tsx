import Link from "next/link";
import MobileNavMenu from "@/app/components/MobileNavMenu";
import NavMenu from "@/app/components/NavMenu";
import ThemeMenu from "@/app/components/ThemeMenu";

const LINKS = [
  { title: "Home", path: "/" },
  { title: "Posts", path: "/posts" },
];

const TITLE = "0hun-Dev";
const PATH_HOME = "/";

export default function Header() {
  return (
    <header className="fixed top-0 z-10 flex h-16 w-full items-center border-b border-neutral-300 bg-[#e8eef4] dark:border-gray-700 dark:bg-[#0f192d]">
      <div className="mx-auto my-0 flex w-full max-w-5xl justify-between px-10">
        <h1 className="flex items-center text-lg font-semibold">
          <Link href={PATH_HOME}>{TITLE}</Link>
        </h1>
        <nav className="hidden sm:block">
          <ul className="flex items-center gap-6">
            <NavMenu navMenuList={LINKS} />
            <ThemeMenu />
          </ul>
        </nav>
        <MobileNavMenu navMenuList={LINKS} />
      </div>
    </header>
  );
}
