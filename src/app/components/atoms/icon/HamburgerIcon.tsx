import { AiOutlineMenu } from "react-icons/ai";

type Props = {
  onClick?: () => void;
};

const HamburgerIcon = ({ onClick }: Props) => {
  return (
    <div
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-xl hover:bg-slate-300 hover:dark:bg-blue-900"
      onClick={onClick}
    >
      <AiOutlineMenu className="h-6 w-6" />
    </div>
  );
};

export default HamburgerIcon;
