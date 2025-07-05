import { DotIcon } from "@/app/components";
import { Category } from "@/app/models/posts";

type Props = {
  isHiddenNavigation?: boolean;
  onSubitemClick?: (path: string | undefined, subitem: Category) => void;
  path: string | undefined;
  pathname: string;
  selectedSubitem?: Category;
  subitems: Category[];
};

const NavigationSubitems = ({
  isHiddenNavigation = false,
  onSubitemClick,
  path,
  pathname,
  selectedSubitem,
  subitems,
}: Props) => {
  const isActiveSubitem = (subitem: Category): boolean => {
    return pathname.includes(path as string) && selectedSubitem === subitem;
  };

  const handleClick = (path: string | undefined, subitem: Category) => () => {
    if (onSubitemClick) onSubitemClick(path, subitem);
  };

  // ml-1 text-xs
  return (
    <ul className={`${isHiddenNavigation ? "block" : "hidden"} xl:block w-full`}>
      {subitems.map((subitem) => (
        <li
          className={`${
            isActiveSubitem(subitem)
              ? "font-semibold text-blue-600 dark:text-yellow-500"
              : "text-inherit"
          } flex items-center hover:bg-neutral-300 dark:hover:bg-blue-900 rounded-md cursor-pointer pl-4 py-1`}
          key={subitem}
          onClick={handleClick(path, subitem)}
        >
          <DotIcon />
          <span className="pl-12 text-xs">{subitem}</span>
        </li>
      ))}
    </ul>
  );
};

export default NavigationSubitems;
