import { FaMoon, FaSun } from "react-icons/fa";

import { Theme } from "@/app/models";

type Props = {
  onClick?: () => void;
  theme: Theme;
};

const ThemeIcon = ({ onClick, theme }: Props) => {
  const isLight = theme === "light";
  const IconComponent = isLight ? FaMoon : FaSun;

  return (
    <IconComponent
      className={`h-6 w-6 cursor-pointer ${isLight ? "text-blue-600" : "text-yellow-500"} `}
      onClick={onClick}
    />
  );
};

export default ThemeIcon;
