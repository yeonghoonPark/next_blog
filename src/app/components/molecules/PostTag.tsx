import { memo } from "react";
import {
  CATEGORY_JAVASCRIPT,
  CATEGORY_NEXTJS,
  CATEGORY_REACT,
  CATEGORY_TYPESCRIPT,
} from "@/app/constants/posts";
import { Category } from "@/app/models/posts";

const getClassNameByCategory = (category: Category): string | undefined => {
  switch (category) {
    case CATEGORY_JAVASCRIPT:
      return "bg-yellow-400 text-black";
    case CATEGORY_NEXTJS:
      return "bg-neutral-50 text-gray-900";
    case CATEGORY_REACT:
      return "bg-gray-700 text-sky-300";
    case CATEGORY_TYPESCRIPT:
      return "bg-blue-500 text-white";
    default:
      return;
  }
};

type Props = {
  category: Category;
};

const PostTag = ({ category }: Props) => {
  return (
    <span className={`w-fit rounded-2xl px-3 py-1 text-xs ${getClassNameByCategory(category)}`}>
      {category}
    </span>
  );
};

export default memo(PostTag);
