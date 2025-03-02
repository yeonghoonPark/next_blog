"use client";

import { usePathname, useRouter } from "next/navigation";
import NavigationItem from "@/app/components/molecules/NavigationItem";
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
  const { setCategory, resetCategory } = useCategoryStore((state) => state.actions);

  const handleClick = (path: string | undefined, subitem?: Category) => {
    if (path) {
      router.push(path);
      subitem ? setCategory(subitem) : resetCategory();
    } //
    else toggleTheme();
  };

  return (
    <nav className="sticky top-14 hidden h-[calc(100vh-100px)] w-16 overflow-y-auto md:block xl:w-52 xl:border-r xl:border-neutral-300 xl:dark:border-gray-700">
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
