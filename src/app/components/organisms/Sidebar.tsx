"use client";

import { usePathname, useRouter } from "next/navigation";
import HomeIcon from "@/app/components/atoms/icon/HomeIcon";
import NotebookIcon from "@/app/components/atoms/icon/NotebookIcon";
import ThemeIcon from "@/app/components/atoms/icon/ThemeIcon";
import SidebarItem from "@/app/components/molecules/SidebarItem";
import { PATH_HOME, PATH_POSTS } from "@/app/constants/paths";
import { useTheme } from "@/app/hooks/useTheme";

const SIDEBAR_MENU_ITEMS = [
  {
    IconComponent: HomeIcon,
    path: PATH_HOME.path,
    title: PATH_HOME.title,
  },
  {
    IconComponent: NotebookIcon,
    path: PATH_POSTS.path,
    title: PATH_POSTS.title,
  },
  {
    IconComponent: ThemeIcon,
    path: undefined,
    title: "",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  const handleClick = (path: string | undefined) => {
    if (path) return router.push(path);

    toggleTheme();
  };

  return (
    <nav className="sticky top-14 h-[calc(100vh-105px)] w-16 overflow-y-auto">
      <ul className="flex w-full flex-col items-center gap-2 p-1">
        {SIDEBAR_MENU_ITEMS.map(({ IconComponent, path, title }) => (
          <SidebarItem
            IconComponent={IconComponent}
            isSelected={pathname.split("/")[1] === path?.split("/")[1]}
            key={title}
            onClick={handleClick}
            path={path}
            title={title}
            theme={theme}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
