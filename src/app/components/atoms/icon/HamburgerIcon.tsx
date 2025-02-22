import { AiOutlineMenu } from "react-icons/ai";

type Props = {
  onClick?: () => void;
};

const HamburgerIcon = ({ onClick }: Props) => {
  return <AiOutlineMenu className="cursor-pointer text-xl" onClick={onClick} />;
};

export default HamburgerIcon;
