import { HiDocumentSearch, HiOutlineDocumentSearch } from "react-icons/hi";

type Props = {
  onClick?: () => void;
  isSelected: boolean;
};

const DocumentIcon = ({ onClick, isSelected }: Props) => {
  const IconComponent = isSelected ? HiDocumentSearch : HiOutlineDocumentSearch;

  return <IconComponent className="w-6 h-6 cursor-pointer" onClick={onClick} />;
};

export default DocumentIcon;
