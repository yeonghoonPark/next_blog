import PostsGrid from "@/app/components/PostsGrid";
import { allPosts } from "@/contentlayer/generated";
import { compareDesc } from "date-fns";

const ALL_POSTS_TITLE = "ALL POSTS";
const CATEGORY_TITLE = "CATEGORY";
const categories = ["All", "JavaScript", "TypeScript", "React.js", "NEXT.js", "etc"];

export default function PostsPage() {
    const sortedAllPosts = allPosts.sort((a, b) =>
        compareDesc(new Date(a.createdAt), new Date(b.createdAt))
    );
    const allPostsCount = allPosts.length;

    return (
        <section className="flex flex-col-reverse sm:flex-col-reverse md:flex-row">
            <section className="mb-12">
                <h2 className="text-xl font-semibold my-4">
                    {ALL_POSTS_TITLE}&nbsp;
                    <span className="text-emerald-500">&nbsp;{`${allPostsCount}`}</span>
                </h2>
                <PostsGrid posts={sortedAllPosts} />
            </section>

            <div className="w-1 m-4" />

            <section className="flex flex-col items-center py-1">
                <h2 className="w-fit text-lg font-semibold border-b border-emerald-500 my-4">
                    {CATEGORY_TITLE}
                </h2>
                <ul className="flex flex-col items-center gap-3">
                    {categories.map((category, i) => (
                        <li key={i}>{category}</li>
                    ))}
                </ul>
            </section>
        </section>
    );
}
