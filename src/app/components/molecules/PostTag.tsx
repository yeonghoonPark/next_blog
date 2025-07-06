import { memo } from "react";

import {
  CATEGORY_DESIGN_PATTERN,
  CATEGORY_JAVASCRIPT,
  CATEGORY_NEXTJS,
  CATEGORY_PROJECT,
  CATEGORY_REACT,
  CATEGORY_TYPESCRIPT,
  CATEGORY_WEB,
} from "@/app/constants";
import { Category } from "@/app/models";

const getTagStyleByCategory = (category: Category): string => {
  switch (category) {
    case CATEGORY_DESIGN_PATTERN:
      return "bg-rose-500 text-slate-100";
    case CATEGORY_JAVASCRIPT:
      return "bg-yellow-400 text-black";
    case CATEGORY_NEXTJS:
      return "bg-neutral-50 text-gray-900";
    case CATEGORY_PROJECT:
      return "bg-sky-500 text-white ";
    case CATEGORY_REACT:
      return "bg-gray-700 text-sky-300";
    case CATEGORY_TYPESCRIPT:
      return "bg-blue-500 text-white";
    case CATEGORY_WEB:
      return "bg-gray-300 text-slate-900";
    default:
      return "";
  }
};

type Props = {
  category: Category;
};

const PostTag = ({ category }: Props) => {
  return (
    <span
      className={`${getTagStyleByCategory(category)} px-3 py-1 rounded-2xl w-fit text-xs`}
    >
      {category}
    </span>
  );
};

export default memo(PostTag);
