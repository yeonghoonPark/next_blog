import { FaSun } from "react-icons/fa";

type Props = {
  onClick?: () => void;
};

const SunIcon = ({ onClick }: Props) => {
  return <FaSun className="cursor-pointer text-xl text-yellow-600" onClick={onClick} />;
};

export default SunIcon;
