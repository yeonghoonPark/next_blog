import { memo } from "react";

import { PostCreatedAt, PostTag } from "@/app/components";
import { Category } from "@/app/models";
import { Post, Reflection } from "@/contentlayer/generated";

type Props = {
  post: Post | Reflection;
  type: "card" | "post";
};

const PostMeta = ({ post, type }: Props) => {
  const { title, description, createdAt } = post;

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
        <PostTag category={post.category as Category} />
        <PostCreatedAt createdAt={createdAt} />
      </div>
    </section>
  );
};

export default memo(PostMeta);
