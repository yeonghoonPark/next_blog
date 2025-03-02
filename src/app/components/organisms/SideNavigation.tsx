"use client";

import {
  usePathname,
  useRouter,
} from "next/navigation";
import SideNavigationItem from "@/app/components/molecules/SideNavigationItem";
import { SIDE_NAVIGATION_ITEMS } from "@/app/constants/navigation";
import { useTheme } from "@/app/hooks/useTheme";
import { Category } from "@/app/models/posts";
import { useCategoryStore } from "@/app/store/useCategoryStore";
import { capitalizeFirstLetter } from "@/app/utils/stringUtils";

const SideNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const category = useCategoryStore((state) => state.category);
  const { setCategory, resetCategory } = useCategoryStore((state) => state.actions);

  const handleClick = (path: string | undefined, subitem?: Category) => {
    if (path) {
      router.push(path);
      subitem ? setCategory(subitem) : resetCategory();
    } //
    else toggleTheme();
  };

  return (
    <nav className="sticky top-14 h-[calc(100vh-105px)] w-16 overflow-y-auto xl:w-52">
      <ul className="flex flex-col gap-1 p-1">
        {SIDE_NAVIGATION_ITEMS.map(({ hasSubitems, IconComponent, path, subitems, title }) => (
          <SideNavigationItem
            hasSubitems={hasSubitems}
            IconComponent={IconComponent}
            isSelected={pathname.split("/")[1] === path?.split("/")[1]}
            key={title}
            onItemClick={handleClick}
            onSubitemClick={handleClick}
            path={path}
            pathname={pathname}
            selectedSubitem={category}
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
