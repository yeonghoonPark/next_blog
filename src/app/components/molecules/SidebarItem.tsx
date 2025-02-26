import { Theme } from "@/app/models/theme";

type Props = {
  IconComponent: React.ElementType;
  isSelected?: boolean;
  onClick?: (path: string | undefined) => void;
  path: string | undefined;
  title: string;
  theme?: Theme;
};

const SidebarItem = ({ IconComponent, isSelected, onClick, path, title, theme }: Props) => {
  const handleClick = () => {
    if (onClick) onClick(path);
  };

  return (
    <li
      className={`flex w-full cursor-pointer flex-col items-center gap-1 rounded-md p-2 hover:bg-slate-300 dark:hover:bg-blue-900 ${isSelected ? "text-blue-600 dark:text-yellow-500" : "text-inherit"} `}
      onClick={handleClick}
    >
      <IconComponent isSelected={isSelected} theme={theme} />
      <span className="text-xs">{title}</span>
    </li>
  );
};

export default SidebarItem;
