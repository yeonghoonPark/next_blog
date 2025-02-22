import { FaMoon } from "react-icons/fa";

type Props = {
  onClick?: () => void;
};

const MoonIcon = ({ onClick }: Props) => {
  return <FaMoon className="cursor-pointer text-xl text-blue-700" onClick={onClick} />;
};

export default MoonIcon;
