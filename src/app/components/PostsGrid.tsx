import { memo } from "react";
import Link from "next/link";
import { Post } from "@/contentlayer/generated";
import PostCard from "./PostCard";

type Props = {
  posts: Post[];
};

const PostsGrid = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
      {posts.map((post) => (
        <Link href={`/posts/${post._raw.flattenedPath}`} key={post.title}>
          <PostCard post={post} />
        </Link>
      ))}
    </div>
  );
};

export default memo(PostsGrid);
