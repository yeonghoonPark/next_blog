import { PiNotebook, PiNotebookFill } from "react-icons/pi";

type Props = {
  onClick?: () => void;
  isSelected: boolean;
};

const NotebookIcon = ({ onClick, isSelected }: Props) => {
  const IconComponent = isSelected ? PiNotebookFill : PiNotebook;

  return <IconComponent className="h-6 w-6 cursor-pointer" onClick={onClick} />;
};

export default NotebookIcon;
