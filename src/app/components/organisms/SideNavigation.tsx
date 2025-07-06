"use client";

import { usePathname, useRouter } from "next/navigation";
import { useShallow } from "zustand/react/shallow";

import { NavigationItem } from "@/app/components";
import { NAVIGATION_ITEMS } from "@/app/constants";
import { useTheme } from "@/app/hooks";
import { Category } from "@/app/models";
import { useCategoryStore } from "@/app/store";
import { capitalizeFirstLetter } from "@/app/utils";

const SideNavigation = () => {
  /**
   * next/navigation
   */
  const pathname = usePathname();
  const router = useRouter();

  /**
   * zustand
   */
  const { category, setCategory } = useCategoryStore(
    useShallow(({ category, actions: { setCategory } }) => ({
      category,
      setCategory,
    })),
  );

  /**
   * hooks
   */
  const { theme, toggleTheme } = useTheme();

  const handleClick = (path: string | undefined, subitem?: Category) => {
    if (path) {
      if (subitem) setCategory(subitem);

      router.push(path);
    } //
    else toggleTheme();
  };

  return (
    <nav className="hidden md:block top-14 right-auto left-[max(0px,calc(50%-45rem))] fixed pt-12 xl:border-neutral-300 xl:dark:border-gray-700 xl:border-r :border-none w-20 xl:w-52 h-screen">
      <ul className="flex flex-col gap-4 p-1">
        {NAVIGATION_ITEMS.map(
          ({ hasSubitems, IconComponent, path, subitems, title }) => (
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
          ),
        )}
      </ul>
    </nav>
  );
};

export default SideNavigation;
