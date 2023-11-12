import { Post } from "@/contentlayer/generated";
import Link from "next/link";
import PostCard from "./PostCard";

type Props = {
    posts: Post[];
    max?: number;
};

export default function PostsGrid({ posts, max = 3 }: Props) {
    return (
        <ul
            className={`
                grid 
                grid-cols-${max - 2} 
                sm:grid-cols-${max - 1} 
                md:grid-cols-${max} gap-8
            `}
        >
            {posts.map((post) => (
                <li
                    key={post.title}
                    className="rounded-md rounded-ss-3xl rounded-ee-3xl overflow-hidden shadow dark:shadow-neutral-600 group"
                >
                    <Link href={`/posts/${post._raw.flattenedPath}`}>
                        <PostCard post={post} />
                    </Link>
                </li>
            ))}
        </ul>
    );
}
