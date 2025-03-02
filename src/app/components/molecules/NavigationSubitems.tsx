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

  return (
    <ul className={`${isHiddenNavigation ? "block" : "hidden"} w-full pl-16 xl:block`}>
      {subitems.map((subitem) => (
        <li
          className={`${
            isActiveSubitem(subitem)
              ? "font-semibold text-blue-600 dark:text-yellow-500"
              : "text-inherit"
          } flex cursor-pointer rounded-md p-2 hover:bg-neutral-300 dark:hover:bg-blue-900`}
          key={subitem}
          onClick={handleClick(path, subitem)}
        >
          <span className="ml-1 text-xs">👉 &nbsp; {subitem}</span>
        </li>
      ))}
    </ul>
  );
};

export default NavigationSubitems;
