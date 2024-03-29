import { memo } from 'react';

import PostCardCategoryIcon from '@/app/components/PostCardCategoryIcon';
import PostCardCreateAt from '@/app/components/PostCardCreateAt';
import { Post } from '@/contentlayer/generated';

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
            ? "text-base group-hover:text-rose-500 group-hover:dark:text-pink-400 truncate"
            : "text-3xl"
        } `}
      >
        {title}
      </h2>
      <p
        className={`w-full min-h-[40px] font-normal ${
          type === "card" ? "text-sm mb-1" : "text-xl"
        } text-gray-500 dark:text-gray-400 line-clamp-2`}
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
