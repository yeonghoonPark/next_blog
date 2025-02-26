import { AiFillHome, AiOutlineHome } from "react-icons/ai";

type Props = {
  onClick?: () => void;
  isSelected: boolean;
};

const HomeIcon = ({ onClick, isSelected }: Props) => {
  const IconComponent = isSelected ? AiFillHome : AiOutlineHome;

  return <IconComponent className="h-6 w-6 cursor-pointer" onClick={onClick} />;
};

export default HomeIcon;
