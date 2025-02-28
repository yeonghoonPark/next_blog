"use client";

import { usePathname, useRouter } from "next/navigation";
import HomeIcon from "@/app/components/atoms/icon/HomeIcon";
import NotebookIcon from "@/app/components/atoms/icon/NotebookIcon";
import ThemeIcon from "@/app/components/atoms/icon/ThemeIcon";
import SideNavigationItem from "@/app/components/molecules/SideNavigationItem";
import { PATH_HOME, PATH_POSTS } from "@/app/constants/paths";
import { useTheme } from "@/app/hooks/useTheme";
import { capitalizeFirstLetter } from "@/app/utils/stringUtils";

const SIDE_NAVIGATION_ITEMS = [
  {
    IconComponent: HomeIcon,
    path: PATH_HOME.path,
    hasSubitems: false,
    subitems: [],
    title: PATH_HOME.title,
  },
  {
    IconComponent: NotebookIcon,
    path: PATH_POSTS.path,
    hasSubitems: true,
    subitems: ["All", "JavaScript", "TypeScript", "React", "Next.js"],
    title: PATH_POSTS.title,
  },
  {
    IconComponent: ThemeIcon,
    path: undefined,
    hasSubitems: false,
    subitems: [],
    title: "",
  },
];

const SideNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  const handleClick = (path: string | undefined) => {
    if (path) return router.push(path);

    toggleTheme();
  };

  return (
    <nav className="sticky top-14 h-[calc(100vh-105px)] w-16 overflow-y-auto xl:w-60">
      <ul className="flex w-full flex-col items-center gap-2 p-1">
        {SIDE_NAVIGATION_ITEMS.map(({ hasSubitems, IconComponent, path, subitems, title }) => (
          <SideNavigationItem
            hasSubitems={hasSubitems}
            IconComponent={IconComponent}
            isSelected={pathname.split("/")[1] === path?.split("/")[1]}
            key={title}
            onClick={handleClick}
            path={path}
            subitems={subitems}
            title={title || capitalizeFirstLetter(theme)}
            theme={theme}
          />
        ))}
      </ul>
    </nav>
  );
};

export default SideNavigation;
