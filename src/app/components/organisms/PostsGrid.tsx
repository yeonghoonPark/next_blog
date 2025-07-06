import { memo } from "react";

import Link from "next/link";

import { PostCard } from "@/app/components";
import { Post, Reflection } from "@/contentlayer/generated";

type Props = {
  posts: Array<Post | Reflection>;
};

const PostsGrid = ({ posts }: Props) => {
  return (
    <div className="gap-x-6 gap-y-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-10">
      {posts.map((post) => (
        <Link href={`/${post._raw.flattenedPath}`} key={post.title}>
          <PostCard post={post} />
        </Link>
      ))}
    </div>
  );
};

export default memo(PostsGrid);
