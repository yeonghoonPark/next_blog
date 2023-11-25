import { memo } from "react";

const CATEGORY_JAVASCRIPT = "JavaScript";
const CATEGORY_TYPESCRIPT = "TypeScript";
const CATEGORY_NEXTJS = "NEXT.js";
const CATEGORY_REACTJS = "React.js";

const getClassNameByCategory = (category: string): string | undefined => {
    switch (category) {
        case CATEGORY_JAVASCRIPT:
            return "bg-yellow-400 border-yellow-400 text-black";
        case CATEGORY_TYPESCRIPT:
            return "bg-blue-500 border-blue-500 text-white";
        case CATEGORY_NEXTJS:
            return "bg-neutral-50 border-gray-400 text-gray-900";
        case CATEGORY_REACTJS:
            return "bg-gray-800 border-gray-800 text-sky-300";
        default:
            return;
    }
};

type Props = {
    category: string;
};

function PostCardCategoryIcon({ category }: Props) {
    return (
        <span
            className={`w-fit py-1 px-4 rounded-2xl border-[0.5px] text-xs
            ${getClassNameByCategory(category)}`}
        >
            {category}
        </span>
    );
}

export default memo(PostCardCategoryIcon);
