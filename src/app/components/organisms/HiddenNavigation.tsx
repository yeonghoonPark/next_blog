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
        className={`
        ${navigationState === HIDDEN_NAVIGATION_DISPLAY ? "left-0" : "-left-52"} 
        top-14 z-50 fixed w-52 h-screen transition-left duration-200`}
      >
        <ul className="flex flex-col gap-4 bg-[#e8eef4] dark:bg-[#0f192d] p-1 pt-12 w-full h-full duration-0">
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
          className="top-14 left-0 z-10 fixed bg-black opacity-50 w-full h-full transition-opacity duration-0"
          onClick={toggleNavigation}
        />
      )}
    </>
  );
};

export default HiddenNavigation;
