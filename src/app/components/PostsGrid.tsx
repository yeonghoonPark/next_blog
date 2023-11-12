import { Post } from "@/contentlayer/generated";
import Link from "next/link";
import PostCard from "./PostCard";

type Props = {
    posts: Post[];
    max?: number;
};

const getGridCols = (max: number): string => {
    switch (max) {
        case 3:
            return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
        case 4:
            return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4";
        default:
            return "";
    }
};

export default function PostsGrid({ posts, max = 3 }: Props) {
    return (
        <ul className={`grid gap-8 ${getGridCols(max)}`}>
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
