import { AiOutlineMenu } from "react-icons/ai";

type Props = {
  onClick?: () => void;
};

const HamburgerIcon = ({ onClick }: Props) => {
  return (
    <div
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-xl hover:bg-gray-300 hover:dark:bg-blue-900 xl:cursor-not-allowed xl:hover:bg-transparent xl:hover:bg-none xl:hover:dark:bg-transparent"
      onClick={onClick}
    >
      <AiOutlineMenu className="h-6 w-6" />
    </div>
  );
};

export default HamburgerIcon;
