"use client";

import { usePathname, useRouter } from "next/navigation";
import { useShallow } from "zustand/react/shallow";

import { NavigationItem } from "@/app/components";
import { NAVIGATION_ITEMS } from "@/app/constants";
import { useTheme } from "@/app/hooks";
import { Category } from "@/app/models";
import { useCategoryStore, useNavigationStore } from "@/app/store";
import { capitalizeFirstLetter } from "@/app/utils";

const HiddenNavigation = () => {
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
  const { navigationState, toggleNavigation } = useNavigationStore(
    useShallow(({ navigationState, actions: { toggleNavigation } }) => ({
      navigationState,
      toggleNavigation,
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
      toggleNavigation();
    } //
    else toggleTheme();
  };

  return (
    <>
      <nav
        className={`
        ${navigationState === "display" ? "left-0" : "-left-60"} 
        top-14 z-50 fixed w-60 h-screen transition-left duration-200`}
      >
        <ul className="flex flex-col gap-4 bg-[#e8eef4] dark:bg-[#0f192d] p-1 pt-12 w-full h-full duration-0">
          {NAVIGATION_ITEMS.map(
            ({ hasSubitems, IconComponent, path, subitems, title }) => (
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
            ),
          )}
        </ul>
      </nav>

      {/* background overlay */}
      {navigationState === "display" && (
        <div
          className="top-14 left-0 z-10 fixed bg-black opacity-50 w-full h-full transition-opacity duration-0"
          onClick={toggleNavigation}
        />
      )}
    </>
  );
};

export default HiddenNavigation;
