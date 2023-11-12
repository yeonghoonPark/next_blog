import { allPosts } from "@/contentlayer/generated";
import { compareDesc } from "date-fns";
import PostsGrid from "../components/PostsGrid";

const FEATURED_POSTS_TITLE = "FEATURED POSTS";
const ALL_POSTS_TITLE = "ALL POSTS";

export default function HomePage() {
    const featuredPosts = allPosts.filter(({ featured }) => featured);
    const featuredPostsCount = featuredPosts.length;
    const sortedAllPosts = allPosts.sort((a, b) =>
        compareDesc(new Date(a.createdAt), new Date(b.createdAt))
    );
    const allPostsCount = allPosts.length;

    return (
        <>
            <section className="mb-12">
                <h2 className="text-xl font-semibold my-4">
                    {FEATURED_POSTS_TITLE}&nbsp;
                    <span className="text-emerald-500">&nbsp;{`${featuredPostsCount}`}</span>
                </h2>
                <PostsGrid posts={featuredPosts} />
            </section>

            <section className="mb-12">
                <h2 className="text-xl font-semibold my-4">
                    {ALL_POSTS_TITLE}&nbsp;
                    <span className="text-emerald-500">&nbsp;{`${allPostsCount}`}</span>
                </h2>
                <PostsGrid posts={sortedAllPosts} />
            </section>
        </>
    );
}
