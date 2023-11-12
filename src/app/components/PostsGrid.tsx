import { Post } from "@/contentlayer/generated";
import Link from "next/link";
import PostCard from "./PostCard";

export default function PostsGrid({ posts }: { posts: Post[] }) {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {posts.map((post) => (
                <li
                    key={post.title}
                    className="rounded-md rounded-ss-3xl overflow-hidden shadow dark:shadow-neutral-600 group"
                >
                    <Link href={`/posts/${post._raw.flattenedPath}`}>
                        <PostCard post={post} />
                    </Link>
                </li>
            ))}
        </ul>
    );
}
