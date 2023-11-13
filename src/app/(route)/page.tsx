import { allPosts } from "@/contentlayer/generated";
import PostsGrid from "../components/PostsGrid";

const FEATURED_POSTS_TITLE = "FEATURED POSTS";

export default function HomePage() {
    const featuredPosts = allPosts.filter(({ featured }) => featured);
    const featuredPostsCount = featuredPosts.length;

    return (
        <section className="mb-12">
            {/* ##$$ Todo, SectionTitle 컴포넌트화 */}
            <h2 className="text-xl font-semibold my-4">
                {FEATURED_POSTS_TITLE}&nbsp;
                <span className="text-emerald-500">&nbsp;{`${featuredPostsCount}`}</span>
            </h2>
            <PostsGrid posts={featuredPosts} />
        </section>
    );
}
