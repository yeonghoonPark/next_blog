"use client";

import { Category } from "@/app/models/posts";
import { Theme } from "@/app/models/theme";
import NavigationSubitems from "./NavigationSubitems";

type Props = {
  hasSubitems: boolean;
  IconComponent: React.ElementType;
  isHiddenNavigation?: boolean;
  isSelected?: boolean;
  onItemClick?: (path: string | undefined) => void;
  onSubitemClick?: (path: string | undefined, subitem: Category) => void;
  path: string | undefined;
  pathname: string;
  selectedSubitem?: Category;
  subitems: any;
  title: string;
  theme?: Theme;
};

const NavigationItem = ({
  hasSubitems = false,
  IconComponent,
  isHiddenNavigation = false,
  isSelected,
  onItemClick,
  onSubitemClick,
  path,
  pathname,
  selectedSubitem,
  subitems,
  title,
  theme,
}: Props) => {
  const handleClick = () => {
    if (onItemClick) onItemClick(path);
  };

  const handleSubitemClick = (path: string | undefined, subitem: Category) => {
    if (onSubitemClick) onSubitemClick(path, subitem);
  };

  return (
    <li>
      <div
        className={`${isHiddenNavigation ? "flex-row px-4 py-2" : "flex-col p-2"} ${
          isSelected ? "font-semibold text-blue-600 dark:text-yellow-500" : "text-inherit"
        } relative flex w-full cursor-pointer items-center gap-1 rounded-md hover:bg-neutral-300 dark:hover:bg-blue-900 xl:flex-row xl:px-4 xl:py-2`}
        onClick={handleClick}
      >
        <IconComponent isSelected={isSelected} theme={theme} />
        <span className={`${isHiddenNavigation ? "ml-8 text-sm" : "text-xs"} xl:ml-8 xl:text-sm`}>
          {title}
        </span>
      </div>

      {hasSubitems && (
        <NavigationSubitems
          isHiddenNavigation={isHiddenNavigation}
          onSubitemClick={handleSubitemClick}
          path={path}
          pathname={pathname}
          selectedSubitem={selectedSubitem}
          subitems={subitems}
        />
      )}
    </li>
  );
};

export default NavigationItem;
