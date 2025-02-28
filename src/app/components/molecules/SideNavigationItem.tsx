"use client";

import { Theme } from "@/app/models/theme";
import SideNavigationSubitems from "./SideNavigationSubitems";

type Props = {
  hasSubitems: boolean;
  IconComponent: React.ElementType;
  isSelected?: boolean;
  onClick?: (path: string | undefined) => void;
  path: string | undefined;
  subitems: any;
  title: string;
  theme?: Theme;
};

const SideNavigationItem = ({
  hasSubitems = false,
  IconComponent,
  isSelected,
  onClick,
  path,
  subitems,
  title,
  theme,
}: Props) => {
  const handleClick = () => {
    if (onClick) onClick(path);
  };

  return (
    <>
      <li
        className={`${isSelected ? "text-blue-600 dark:text-yellow-500" : "text-inherit"} relative flex w-full cursor-pointer flex-col items-center gap-1 rounded-md p-2 hover:bg-slate-300 dark:hover:bg-blue-900 xl:flex-row xl:px-4 xl:py-2`}
        onClick={handleClick}
      >
        <IconComponent isSelected={isSelected} theme={theme} />
        <span className="text-xs xl:ml-8 xl:text-sm">{title}</span>
      </li>

      {hasSubitems && <SideNavigationSubitems subitems={subitems} />}
    </>
  );
};

export default SideNavigationItem;
