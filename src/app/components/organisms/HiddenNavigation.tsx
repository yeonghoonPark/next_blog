"use client";

import { usePathname, useRouter } from "next/navigation";
import NavigationItem from "@/app/components/molecules/NavigationItem";
import { HIDDEN_NAVIGATION_DISPLAY, NAVIGATION_ITEMS } from "@/app/constants/navigation";
import { useTheme } from "@/app/hooks/useTheme";
import { Category } from "@/app/models/posts";
import { useNavigationStore } from "@/app/store/navigation/useNavigationStore";
import { useCategoryStore } from "@/app/store/posts/useCategoryStore";
import { capitalizeFirstLetter } from "@/app/utils/stringUtils";

const HiddenNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const category = useCategoryStore((state) => state.category);
  const { setCategory, resetCategory } = useCategoryStore((state) => state.actions);
  const navigationState = useNavigationStore((state) => state.navigationState);
  const toggleNavigation = useNavigationStore((state) => state.actions.toggleNavigation);

  const handleClick = (path: string | undefined, subitem?: Category) => {
    if (path) {
      router.push(path);
      subitem ? setCategory(subitem) : resetCategory();
      toggleNavigation();
    } //
    else toggleTheme();
  };

  return (
    <>
      <nav
        className={`${
          navigationState === HIDDEN_NAVIGATION_DISPLAY ? "left-0" : "-left-52"
        } transition-left fixed top-14 z-50 h-full w-52 overflow-y-auto duration-200`}
      >
        <ul className="flex h-full w-full flex-col gap-1 bg-[#e8eef4] p-1 duration-0 dark:bg-[#0f192d]">
          {NAVIGATION_ITEMS.map(({ hasSubitems, IconComponent, path, subitems, title }) => (
            <NavigationItem
              hasSubitems={hasSubitems}
              IconComponent={IconComponent}
              isHiddenNavigation
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

      {/* background overlay */}
      {navigationState === HIDDEN_NAVIGATION_DISPLAY && (
        <div
          className="fixed left-0 top-14 z-10 h-full w-full bg-black opacity-50 transition-opacity duration-0"
          onClick={toggleNavigation}
        />
      )}
    </>
  );
};

export default HiddenNavigation;
