import { memo } from "react";

import PostCreatedAt from "@/app/components/molecules/PostCreatedAt";
import PostTag from "@/app/components/molecules/PostTag";
import { Category } from "@/app/models/posts";
import { Post } from "@/contentlayer/generated";

type Props = {
  post: Post;
  type: "card" | "post";
};

const PostMeta = ({ post, type }: Props) => {
  const { title, description, category, createdAt } = post;

  return (
    <section className="flex flex-col gap-2 pt-4">
      <h2
        className={`group-hover:text-blue-600 group-hover:dark:text-yellow-500 w-full font-bold text-slate-900 dark:text-slate-300
        ${type === "card" ? "truncate" : ""}`}
      >
        {title}
      </h2>
      <p
        className={`w-full min-h-[2.5rem] font-normal line-clamp-2
        ${type === "card" ? "mb-1 text-sm " : "text-xl"}`}
      >
        {description}
      </p>
      <div className="flex justify-between items-end">
        <PostTag category={category as Category} />
        <PostCreatedAt createdAt={createdAt} />
      </div>
    </section>
  );
};

export default memo(PostMeta);
