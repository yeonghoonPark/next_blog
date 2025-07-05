"use client";

import { usePathname, useRouter } from "next/navigation";

import { NavigationItem } from "@/app/components";
import { NAVIGATION_ITEMS } from "@/app/constants/navigation";
import { useTheme } from "@/app/hooks/useTheme";
import { Category } from "@/app/models/posts";
import { useCategoryStore } from "@/app/store/posts/useCategoryStore";
import { capitalizeFirstLetter } from "@/app/utils/stringUtils";

const SideNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const category = useCategoryStore((state) => state.category);
  const setCategory = useCategoryStore((state) => state.actions.setCategory);

  const handleClick = (path: string | undefined, subitem?: Category) => {
    if (path) {
      if (subitem) setCategory(subitem);

      router.push(path);
    } //
    else toggleTheme();
  };

  return (
    <nav className="hidden md:block top-14 right-auto left-[max(0px,calc(50%-45rem))] fixed pt-12 xl:border-neutral-300 xl:dark:border-gray-700 xl:border-r :border-none w-16 xl:w-52 h-screen">
      <ul className="flex flex-col gap-4 p-1">
        {NAVIGATION_ITEMS.map(({ hasSubitems, IconComponent, path, subitems, title }) => (
          <NavigationItem
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
