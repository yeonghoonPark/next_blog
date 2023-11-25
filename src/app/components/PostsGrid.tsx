import { memo } from "react";

import Link from "next/link";

import { Post } from "@/contentlayer/generated";

import PostCard from "./PostCard";

type Props = {
    posts: Post[];
};

function PostsGrid({ posts }: Props) {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
            {posts.map((post) => (
                <li
                    key={post.title}
                    className="rounded-md rounded-ss-3xl rounded-ee-3xl overflow-hidden border border-neutral-300 dark:border-gray-700 group"
                >
                    <Link href={`/posts/${post._raw.flattenedPath}`}>
                        <PostCard post={post} />
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default memo(PostsGrid);
