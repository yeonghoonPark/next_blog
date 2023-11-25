import { memo } from "react";

import PostCardCategoryIcon from "@/app/components/PostCardCategoryIcon";
import PostCardCreateAt from "@/app/components/PostCardCreateAt";
import { Post } from "@/contentlayer/generated";

type Props = {
    post: Post;
    type: "card" | "page";
};

function PostContents({ post, type }: Props) {
    const { title, description, category, createdAt } = post;
    return (
        <>
            <h2
                className={`w-full font-bold ${
                    type === "card"
                        ? "text-base group-hover:text-sky-500 group-hover:dark:text-emerald-500 truncate"
                        : "text-3xl"
                } `}
            >
                {title}
            </h2>
            <p
                className={`w-full font-semibold ${
                    type === "card" ? "text-sm mb-1" : "text-xl"
                } text-gray-700 dark:text-gray-300 truncate`}
            >
                {description}
            </p>
            <div className="flex justify-between items-end">
                <PostCardCategoryIcon category={category} />
                <PostCardCreateAt createdAt={createdAt} />
            </div>
        </>
    );
}

export default memo(PostContents);
