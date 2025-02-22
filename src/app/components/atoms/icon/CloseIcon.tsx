import { AiOutlineClose } from "react-icons/ai";

type Props = {
  onClick?: () => void;
};

const CloseIcon = ({ onClick }: Props) => {
  return <AiOutlineClose className="cursor-pointer text-xl" onClick={onClick} />;
};

export default CloseIcon;
