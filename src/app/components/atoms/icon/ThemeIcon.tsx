import { FaMoon, FaSun } from "react-icons/fa";
import { THEME } from "@/app/constants/theme/theme";
import { Theme } from "@/app/models/theme";

type Props = {
  onClick?: () => void;
  theme: Theme;
};

const ThemeIcon = ({ onClick, theme }: Props) => {
  const isLightTheme = theme === THEME.LIGHT;
  const IconComponent = isLightTheme ? FaMoon : FaSun;

  return (
    <IconComponent
      className={`h-6 w-6 cursor-pointer ${isLightTheme ? "text-blue-600" : "text-yellow-500"} `}
      onClick={onClick}
    />
  );
};

export default ThemeIcon;
