type Props = {
  onClick?: () => void;
  subitems: [];
};

const SideNavigationSubitems = ({ onClick, subitems }: Props) => {
  return (
    <ul className="hidden w-full pl-16 xl:block">
      {subitems.map((subitem, index) => (
        <li
          className="cursor-pointer gap-1 rounded-md p-2 hover:bg-slate-300 dark:hover:bg-blue-900"
          key={index}
        >
          <span className="ml-2 text-xs">{subitem}</span>
        </li>
      ))}
    </ul>
  );
};

export default SideNavigationSubitems;
